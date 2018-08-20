/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/receipts/sect-4/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/d3-array/index.js":
/*!****************************************!*\
  !*** ./node_modules/d3-array/index.js ***!
  \****************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, range, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _src_bisect__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _src_bisect__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _src_bisect__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _src_ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _src_ascending__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_bisector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/bisector */ "./node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _src_bisector__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/cross */ "./node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _src_cross__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_descending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/descending */ "./node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _src_descending__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_deviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/deviation */ "./node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _src_deviation__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_extent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/extent */ "./node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _src_extent__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_histogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/histogram */ "./node_modules/d3-array/src/histogram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _src_histogram__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/threshold/freedmanDiaconis */ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _src_threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_threshold_scott__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/threshold/scott */ "./node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _src_threshold_scott__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_threshold_sturges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _src_threshold_sturges__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/max */ "./node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _src_max__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_mean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/mean */ "./node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _src_mean__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_median__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/median */ "./node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _src_median__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_merge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/merge */ "./node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _src_merge__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_min__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/min */ "./node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _src_min__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _src_pairs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/pairs */ "./node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _src_pairs__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _src_permute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/permute */ "./node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _src_permute__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _src_quantile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/quantile */ "./node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _src_quantile__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _src_range__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/range */ "./node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _src_range__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _src_scan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/scan */ "./node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _src_scan__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _src_shuffle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/shuffle */ "./node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _src_shuffle__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _src_sum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/sum */ "./node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _src_sum__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _src_ticks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _src_ticks__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _src_ticks__WEBPACK_IMPORTED_MODULE_23__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _src_ticks__WEBPACK_IMPORTED_MODULE_23__["tickStep"]; });

/* harmony import */ var _src_transpose__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/transpose */ "./node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _src_transpose__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _src_variance__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/variance */ "./node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _src_variance__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _src_zip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/zip */ "./node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _src_zip__WEBPACK_IMPORTED_MODULE_26__["default"]; });






























/***/ }),

/***/ "./node_modules/d3-array/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(_bisector__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = _pairs__WEBPACK_IMPORTED_MODULE_0__["pair"];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");


/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  var v = Object(_variance__WEBPACK_IMPORTED_MODULE_0__["default"])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),

/***/ "./node_modules/d3-array/src/histogram.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/histogram.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-array/src/identity.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");
/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(_ticks__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");




/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(_quantile__WEBPACK_IMPORTED_MODULE_2__["default"])(numbers.sort(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]), 0.5);
});


/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, p, valueof) {
  if (valueof == null) valueof = _number__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = _ascending__WEBPACK_IMPORTED_MODULE_0__["default"];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quantile */ "./node_modules/d3-array/src/quantile.js");





/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  values = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(values, _number__WEBPACK_IMPORTED_MODULE_2__["default"]).sort(_ascending__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return Math.ceil((max - min) / (2 * (Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.75) - Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deviation */ "./node_modules/d3-array/src/deviation.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation__WEBPACK_IMPORTED_MODULE_0__["default"])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "./node_modules/d3-axis/index.js":
/*!***************************************!*\
  !*** ./node_modules/d3-axis/index.js ***!
  \***************************************/
/*! exports provided: axisTop, axisRight, axisBottom, axisLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/axis */ "./node_modules/d3-axis/src/axis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisLeft"]; });




/***/ }),

/***/ "./node_modules/d3-axis/src/array.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-axis/src/array.js ***!
  \*******************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-axis/src/axis.js":
/*!******************************************!*\
  !*** ./node_modules/d3-axis/src/axis.js ***!
  \******************************************/
/*! exports provided: axisTop, axisRight, axisBottom, axisLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return axisTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return axisRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return axisBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return axisLeft; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-axis/src/array.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-axis/src/identity.js");



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _identity__WEBPACK_IMPORTED_MODULE_1__["default"]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "#000"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "#000")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "#000")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
            : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),

/***/ "./node_modules/d3-axis/src/identity.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-axis/src/identity.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-collection/index.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-collection/index.js ***!
  \*********************************************/
/*! exports provided: nest, set, map, keys, values, entries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_nest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/nest */ "./node_modules/d3-collection/src/nest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return _src_nest__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/set */ "./node_modules/d3-collection/src/set.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _src_set__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/map */ "./node_modules/d3-collection/src/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _src_map__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/keys */ "./node_modules/d3-collection/src/keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _src_keys__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/values */ "./node_modules/d3-collection/src/values.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _src_values__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/entries */ "./node_modules/d3-collection/src/entries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return _src_entries__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/d3-collection/src/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-collection/src/entries.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),

/***/ "./node_modules/d3-collection/src/keys.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/keys.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),

/***/ "./node_modules/d3-collection/src/map.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/map.js ***!
  \***********************************************/
/*! exports provided: prefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["default"] = (map);


/***/ }),

/***/ "./node_modules/d3-collection/src/nest.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/nest.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(_map__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(_map__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),

/***/ "./node_modules/d3-collection/src/set.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/set.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");


function Set() {}

var proto = _map__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[_map__WEBPACK_IMPORTED_MODULE_0__["prefix"] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* harmony default export */ __webpack_exports__["default"] = (set);


/***/ }),

/***/ "./node_modules/d3-collection/src/values.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-collection/src/values.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),

/***/ "./node_modules/d3-color/index.js":
/*!****************************************!*\
  !*** ./node_modules/d3-color/index.js ***!
  \****************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/color */ "./node_modules/d3-color/src/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _src_color__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _src_color__WEBPACK_IMPORTED_MODULE_0__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _src_color__WEBPACK_IMPORTED_MODULE_0__["hsl"]; });

/* harmony import */ var _src_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/lab */ "./node_modules/d3-color/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return _src_lab__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return _src_lab__WEBPACK_IMPORTED_MODULE_1__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return _src_lab__WEBPACK_IMPORTED_MODULE_1__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _src_lab__WEBPACK_IMPORTED_MODULE_1__["gray"]; });

/* harmony import */ var _src_cubehelix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/cubehelix */ "./node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return _src_cubehelix__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brighter", function() { return brighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbConvert", function() { return rgbConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgb", function() { return Rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslConvert", function() { return hslConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cubehelix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubehelix", function() { return Cubehelix; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Cubehelix, cubehelix, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__["brighter"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__["brighter"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__["darker"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__["darker"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony default export */ __webpack_exports__["default"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lab", function() { return Lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return lch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hcl", function() { return Hcl; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-color/src/math.js");




// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Lab, lab, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Hcl, hcl, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! exports provided: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/d3-dispatch/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-dispatch/index.js ***!
  \*******************************************/
/*! exports provided: dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _src_dispatch__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["default"] = (dispatch);


/***/ }),

/***/ "./node_modules/d3-ease/index.js":
/*!***************************************!*\
  !*** ./node_modules/d3-ease/index.js ***!
  \***************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/linear */ "./node_modules/d3-ease/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return _src_linear__WEBPACK_IMPORTED_MODULE_0__["linear"]; });

/* harmony import */ var _src_quad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/quad */ "./node_modules/d3-ease/src/quad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return _src_quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return _src_quad__WEBPACK_IMPORTED_MODULE_1__["quadIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return _src_quad__WEBPACK_IMPORTED_MODULE_1__["quadOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return _src_quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony import */ var _src_cubic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/cubic */ "./node_modules/d3-ease/src/cubic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return _src_cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return _src_cubic__WEBPACK_IMPORTED_MODULE_2__["cubicIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return _src_cubic__WEBPACK_IMPORTED_MODULE_2__["cubicOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return _src_cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony import */ var _src_poly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/poly */ "./node_modules/d3-ease/src/poly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return _src_poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return _src_poly__WEBPACK_IMPORTED_MODULE_3__["polyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return _src_poly__WEBPACK_IMPORTED_MODULE_3__["polyOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return _src_poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony import */ var _src_sin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/sin */ "./node_modules/d3-ease/src/sin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return _src_sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return _src_sin__WEBPACK_IMPORTED_MODULE_4__["sinIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return _src_sin__WEBPACK_IMPORTED_MODULE_4__["sinOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return _src_sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony import */ var _src_exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/exp */ "./node_modules/d3-ease/src/exp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return _src_exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return _src_exp__WEBPACK_IMPORTED_MODULE_5__["expIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return _src_exp__WEBPACK_IMPORTED_MODULE_5__["expOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return _src_exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony import */ var _src_circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/circle */ "./node_modules/d3-ease/src/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return _src_circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return _src_circle__WEBPACK_IMPORTED_MODULE_6__["circleIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return _src_circle__WEBPACK_IMPORTED_MODULE_6__["circleOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return _src_circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony import */ var _src_bounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/bounce */ "./node_modules/d3-ease/src/bounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return _src_bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return _src_bounce__WEBPACK_IMPORTED_MODULE_7__["bounceIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return _src_bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return _src_bounce__WEBPACK_IMPORTED_MODULE_7__["bounceInOut"]; });

/* harmony import */ var _src_back__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/back */ "./node_modules/d3-ease/src/back.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return _src_back__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return _src_back__WEBPACK_IMPORTED_MODULE_8__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return _src_back__WEBPACK_IMPORTED_MODULE_8__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return _src_back__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony import */ var _src_elastic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/elastic */ "./node_modules/d3-ease/src/elastic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return _src_elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return _src_elastic__WEBPACK_IMPORTED_MODULE_9__["elasticIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return _src_elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return _src_elastic__WEBPACK_IMPORTED_MODULE_9__["elasticInOut"]; });






















/***/ }),

/***/ "./node_modules/d3-ease/src/back.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/back.js ***!
  \******************************************/
/*! exports provided: backIn, backOut, backInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),

/***/ "./node_modules/d3-ease/src/bounce.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/bounce.js ***!
  \********************************************/
/*! exports provided: bounceIn, bounceOut, bounceInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/circle.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/circle.js ***!
  \********************************************/
/*! exports provided: circleIn, circleOut, circleInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleIn", function() { return circleIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleOut", function() { return circleOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleInOut", function() { return circleInOut; });
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/*! exports provided: cubicIn, cubicOut, cubicInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/elastic.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-ease/src/elastic.js ***!
  \*********************************************/
/*! exports provided: elasticIn, elasticOut, elasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),

/***/ "./node_modules/d3-ease/src/exp.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/exp.js ***!
  \*****************************************/
/*! exports provided: expIn, expOut, expInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expIn", function() { return expIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expOut", function() { return expOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expInOut", function() { return expInOut; });
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/linear.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/linear.js ***!
  \********************************************/
/*! exports provided: linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
function linear(t) {
  return +t;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/poly.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/poly.js ***!
  \******************************************/
/*! exports provided: polyIn, polyOut, polyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyIn", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyOut", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyInOut", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),

/***/ "./node_modules/d3-ease/src/quad.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/quad.js ***!
  \******************************************/
/*! exports provided: quadIn, quadOut, quadInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/sin.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/sin.js ***!
  \*****************************************/
/*! exports provided: sinIn, sinOut, sinInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinIn", function() { return sinIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinOut", function() { return sinOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinInOut", function() { return sinInOut; });
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-format/index.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-format/index.js ***!
  \*****************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/defaultLocale */ "./node_modules/d3-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["formatPrefix"]; });

/* harmony import */ var _src_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/locale */ "./node_modules/d3-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return _src_locale__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_formatSpecifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/formatSpecifier */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return _src_formatSpecifier__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_precisionFixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/precisionFixed */ "./node_modules/d3-format/src/precisionFixed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return _src_precisionFixed__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_precisionPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/precisionPrefix */ "./node_modules/d3-format/src/precisionPrefix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return _src_precisionPrefix__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_precisionRound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/precisionRound */ "./node_modules/d3-format/src/precisionRound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _src_precisionRound__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/*! exports provided: format, formatPrefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return formatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "./node_modules/d3-format/src/locale.js");


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/*! exports provided: prefixExponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixExponent", function() { return prefixExponent; });
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");


var prefixExponent;

/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatSpecifier; });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "./node_modules/d3-format/src/formatTrim.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatPrefixAuto */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _formatRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded */ "./node_modules/d3-format/src/formatRounded.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(_formatRounded__WEBPACK_IMPORTED_MODULE_1__["default"])(x * 100, p); },
  "r": _formatRounded__WEBPACK_IMPORTED_MODULE_1__["default"],
  "s": _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_0__["default"],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");
/* harmony import */ var _formatGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup */ "./node_modules/d3-format/src/formatGroup.js");
/* harmony import */ var _formatNumerals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals */ "./node_modules/d3-format/src/formatNumerals.js");
/* harmony import */ var _formatSpecifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var _formatTrim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTrim */ "./node_modules/d3-format/src/formatTrim.js");
/* harmony import */ var _formatTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTypes */ "./node_modules/d3-format/src/formatTypes.js");
/* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-format/src/identity.js");









var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["default"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(_formatGroup__WEBPACK_IMPORTED_MODULE_1__["default"])(locale.grouping, locale.thousands) : _identity__WEBPACK_IMPORTED_MODULE_7__["default"],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(_formatNumerals__WEBPACK_IMPORTED_MODULE_2__["default"])(locale.numerals) : _identity__WEBPACK_IMPORTED_MODULE_7__["default"],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(_formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes__WEBPACK_IMPORTED_MODULE_5__["default"][type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes__WEBPACK_IMPORTED_MODULE_5__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(_formatTrim__WEBPACK_IMPORTED_MODULE_4__["default"])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_6__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(_formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step) {
  return Math.max(0, -Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3 - Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionRound.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(max) - Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(step)) + 1;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/index.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-interpolate/index.js ***!
  \**********************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateNumber, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/value */ "./node_modules/d3-interpolate/src/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _src_value__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/array */ "./node_modules/d3-interpolate/src/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return _src_array__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_basis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/basis */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return _src_basis__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_basisClosed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return _src_basisClosed__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/date */ "./node_modules/d3-interpolate/src/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return _src_date__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return _src_number__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/object */ "./node_modules/d3-interpolate/src/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return _src_object__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_round__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/round */ "./node_modules/d3-interpolate/src/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return _src_round__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/string */ "./node_modules/d3-interpolate/src/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return _src_string__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_transform_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/transform/index */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return _src_transform_index__WEBPACK_IMPORTED_MODULE_9__["interpolateTransformCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return _src_transform_index__WEBPACK_IMPORTED_MODULE_9__["interpolateTransformSvg"]; });

/* harmony import */ var _src_zoom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/zoom */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return _src_zoom__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_rgb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/rgb */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return _src_rgb__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return _src_rgb__WEBPACK_IMPORTED_MODULE_11__["rgbBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return _src_rgb__WEBPACK_IMPORTED_MODULE_11__["rgbBasisClosed"]; });

/* harmony import */ var _src_hsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/hsl */ "./node_modules/d3-interpolate/src/hsl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return _src_hsl__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return _src_hsl__WEBPACK_IMPORTED_MODULE_12__["hslLong"]; });

/* harmony import */ var _src_lab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/lab */ "./node_modules/d3-interpolate/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return _src_lab__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_hcl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/hcl */ "./node_modules/d3-interpolate/src/hcl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return _src_hcl__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return _src_hcl__WEBPACK_IMPORTED_MODULE_14__["hclLong"]; });

/* harmony import */ var _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/cubehelix */ "./node_modules/d3-interpolate/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__["cubehelixLong"]; });

/* harmony import */ var _src_piecewise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/piecewise */ "./node_modules/d3-interpolate/src/piecewise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return _src_piecewise__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/quantize */ "./node_modules/d3-interpolate/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _src_quantize__WEBPACK_IMPORTED_MODULE_17__["default"]; });





















/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basis", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis__WEBPACK_IMPORTED_MODULE_0__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nogamma; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(end)).h),
          s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var cubehelixLong = cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(end)).h),
        c = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.c, end.c),
        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hclLong = hcl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(end)).h),
        s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hslLong = hsl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end)).l),
      a = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.a, end.a),
      b = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.b, end.b),
      opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return piecewise; });
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(_color__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_3__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis__WEBPACK_IMPORTED_MODULE_1__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__["parseSvg"], ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCss", function() { return parseCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSvg", function() { return parseSvg; });
/* harmony import */ var _decompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  value = value.matrix;
  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object */ "./node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string */ "./node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-interpolate/src/constant.js");









/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(_constant__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
      : (t === "number" ? _number__WEBPACK_IMPORTED_MODULE_4__["default"]
      : t === "string" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, _rgb__WEBPACK_IMPORTED_MODULE_1__["default"]) : _string__WEBPACK_IMPORTED_MODULE_6__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? _rgb__WEBPACK_IMPORTED_MODULE_1__["default"]
      : b instanceof Date ? _date__WEBPACK_IMPORTED_MODULE_3__["default"]
      : Array.isArray(b) ? _array__WEBPACK_IMPORTED_MODULE_2__["default"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object__WEBPACK_IMPORTED_MODULE_5__["default"]
      : _number__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["default"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),

/***/ "./node_modules/d3-scale/index.js":
/*!****************************************!*\
  !*** ./node_modules/d3-scale/index.js ***!
  \****************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleDiverging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/band */ "./node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _src_band__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _src_band__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _src_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/identity */ "./node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _src_identity__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _src_linear__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/log */ "./node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _src_log__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/ordinal */ "./node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _src_ordinal__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _src_ordinal__WEBPACK_IMPORTED_MODULE_4__["implicit"]; });

/* harmony import */ var _src_pow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/pow */ "./node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _src_pow__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _src_pow__WEBPACK_IMPORTED_MODULE_5__["sqrt"]; });

/* harmony import */ var _src_quantile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/quantile */ "./node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _src_quantile__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/quantize */ "./node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _src_quantize__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_threshold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/threshold */ "./node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _src_threshold__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/time */ "./node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _src_time__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_utcTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/utcTime */ "./node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _src_utcTime__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_sequential__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/sequential */ "./node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _src_sequential__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_diverging__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/diverging */ "./node_modules/d3-scale/src/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDiverging", function() { return _src_diverging__WEBPACK_IMPORTED_MODULE_12__["default"]; });




























/***/ }),

/***/ "./node_modules/d3-scale/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/array.js ***!
  \********************************************/
/*! exports provided: map, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),

/***/ "./node_modules/d3-scale/src/band.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/band.js ***!
  \*******************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ordinal */ "./node_modules/d3-scale/src/ordinal.js");



function band() {
  var scale = Object(_ordinal__WEBPACK_IMPORTED_MODULE_1__["default"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
/*! exports provided: deinterpolateLinear, copy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deinterpolateLinear", function() { return deinterpolateLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_2__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_4__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_2__["slice"].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = _array__WEBPACK_IMPORTED_MODULE_2__["slice"].call(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRound"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),

/***/ "./node_modules/d3-scale/src/diverging.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/diverging.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diverging; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");


function diverging(interpolator) {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      k10 = 1,
      k21 = 1,
      clamp = false;

  function scale(x) {
    var t = 0.5 + ((x = +x) - x1) * (x < x1 ? k10 : k21);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], x2 = +_[2], k10 = x0 === x1 ? 0 : 0.5 / (x1 - x0), k21 = x1 === x2 ? 0 : 0.5 / (x2 - x1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return diverging(interpolator).domain([x0, x1, x2]).clamp(clamp);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_2__["default"]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/index.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(_tickFormat__WEBPACK_IMPORTED_MODULE_3__["default"])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_2__["deinterpolateLinear"], d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]);

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["default"])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(_nice__WEBPACK_IMPORTED_MODULE_3__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, log().base(base));
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
/*! exports provided: default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["default"])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(scale, pow().exponent(exponent));
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantize.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      k10 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) * k10;
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], k10 = x0 === x1 ? 0 : 1 / (x1 - x0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/threshold.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/threshold.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/time.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/time.js ***!
  \*******************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_5__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_5__["deinterpolateLinear"], d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(_array__WEBPACK_IMPORTED_MODULE_4__["map"].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(_nice__WEBPACK_IMPORTED_MODULE_6__["default"])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return calendar(d3_time__WEBPACK_IMPORTED_MODULE_2__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/utcTime.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/index.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_time__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/d3-selection/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-selection/index.js ***!
  \********************************************/
/*! exports provided: create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/create */ "./node_modules/d3-selection/src/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _src_create__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return _src_creator__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/local */ "./node_modules/d3-selection/src/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "local", function() { return _src_local__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/matcher */ "./node_modules/d3-selection/src/matcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _src_matcher__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/mouse */ "./node_modules/d3-selection/src/mouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return _src_mouse__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_namespace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/namespace */ "./node_modules/d3-selection/src/namespace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _src_namespace__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_namespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/namespaces */ "./node_modules/d3-selection/src/namespaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return _src_namespaces__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/point */ "./node_modules/d3-selection/src/point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return _src_point__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/select */ "./node_modules/d3-selection/src/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _src_select__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_selectAll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/selectAll */ "./node_modules/d3-selection/src/selectAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _src_selectAll__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_selection_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/selection/index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return _src_selection_index__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/selector */ "./node_modules/d3-selection/src/selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return _src_selector__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_selectorAll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return _src_selectorAll__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_selection_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/selection/style */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _src_selection_style__WEBPACK_IMPORTED_MODULE_13__["styleValue"]; });

/* harmony import */ var _src_touch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/touch */ "./node_modules/d3-selection/src/touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return _src_touch__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_touches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/touches */ "./node_modules/d3-selection/src/touches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return _src_touches__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _src_window__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/window */ "./node_modules/d3-selection/src/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _src_window__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _src_selection_on__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/selection/on */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "event", function() { return _src_selection_on__WEBPACK_IMPORTED_MODULE_17__["event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return _src_selection_on__WEBPACK_IMPORTED_MODULE_17__["customEvent"]; });





















/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/create.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/create.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");



/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return Object(_select__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name).call(document.documentElement));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"] && document.documentElement.namespaceURI === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/local.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/local.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return local; });
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (matcher);


/***/ }),

/***/ "./node_modules/d3-selection/src/mouse.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/mouse.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  var event = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, event);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/*! exports provided: xhtml, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhtml", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["default"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/d3-selection/src/point.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/point.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[selector]], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selectAll.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/selectAll.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([document.querySelectorAll(selector)], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([selector == null ? [] : selector], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace */ "./node_modules/d3-selection/src/namespace.js");


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

/* harmony default export */ __webpack_exports__["default"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-selection/src/constant.js");




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");


function dispatchEvent(node, type, params) {
  var window = Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return !this.node();
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/*! exports provided: default, EnterNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterNode", function() { return EnterNode; });
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._enter || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._exit || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matcher */ "./node_modules/d3-selection/src/matcher.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(_matcher__WEBPACK_IMPORTED_MODULE_1__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/*! exports provided: root, Selection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exit */ "./node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merge */ "./node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order */ "./node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sort */ "./node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./call */ "./node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nodes */ "./node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node */ "./node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./size */ "./node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./empty */ "./node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./each */ "./node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./attr */ "./node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./style */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./property */ "./node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./classed */ "./node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./text */ "./node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./html */ "./node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./raise */ "./node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lower */ "./node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./append */ "./node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./insert */ "./node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./remove */ "./node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./clone */ "./node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./datum */ "./node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./on */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dispatch */ "./node_modules/d3-selection/src/selection/dispatch.js");































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_1__["default"],
  filter: _filter__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: _data__WEBPACK_IMPORTED_MODULE_3__["default"],
  enter: _enter__WEBPACK_IMPORTED_MODULE_4__["default"],
  exit: _exit__WEBPACK_IMPORTED_MODULE_5__["default"],
  merge: _merge__WEBPACK_IMPORTED_MODULE_6__["default"],
  order: _order__WEBPACK_IMPORTED_MODULE_7__["default"],
  sort: _sort__WEBPACK_IMPORTED_MODULE_8__["default"],
  call: _call__WEBPACK_IMPORTED_MODULE_9__["default"],
  nodes: _nodes__WEBPACK_IMPORTED_MODULE_10__["default"],
  node: _node__WEBPACK_IMPORTED_MODULE_11__["default"],
  size: _size__WEBPACK_IMPORTED_MODULE_12__["default"],
  empty: _empty__WEBPACK_IMPORTED_MODULE_13__["default"],
  each: _each__WEBPACK_IMPORTED_MODULE_14__["default"],
  attr: _attr__WEBPACK_IMPORTED_MODULE_15__["default"],
  style: _style__WEBPACK_IMPORTED_MODULE_16__["default"],
  property: _property__WEBPACK_IMPORTED_MODULE_17__["default"],
  classed: _classed__WEBPACK_IMPORTED_MODULE_18__["default"],
  text: _text__WEBPACK_IMPORTED_MODULE_19__["default"],
  html: _html__WEBPACK_IMPORTED_MODULE_20__["default"],
  raise: _raise__WEBPACK_IMPORTED_MODULE_21__["default"],
  lower: _lower__WEBPACK_IMPORTED_MODULE_22__["default"],
  append: _append__WEBPACK_IMPORTED_MODULE_23__["default"],
  insert: _insert__WEBPACK_IMPORTED_MODULE_24__["default"],
  remove: _remove__WEBPACK_IMPORTED_MODULE_25__["default"],
  clone: _clone__WEBPACK_IMPORTED_MODULE_26__["default"],
  datum: _datum__WEBPACK_IMPORTED_MODULE_27__["default"],
  on: _on__WEBPACK_IMPORTED_MODULE_28__["default"],
  dispatch: _dispatch__WEBPACK_IMPORTED_MODULE_29__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (selection);


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(lower);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](merges, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/*! exports provided: event, default, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return customEvent; });
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(raise);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(remove);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selectorAll__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(update) {
  return new Array(update.length);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/*! exports provided: default, styleValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleValue", function() { return styleValue; });
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function none() {}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var current = _selection_on__WEBPACK_IMPORTED_MODULE_0__["event"], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/touch.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/touch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touch);
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/touches.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/touches.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches) {
  if (touches == null) touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touches[i]);
  }

  return points;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),

/***/ "./node_modules/d3-time-format/index.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time-format/index.js ***!
  \**********************************************/
/*! exports provided: timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["timeFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["timeParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return _src_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcParse"]; });

/* harmony import */ var _src_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/locale */ "./node_modules/d3-time-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return _src_locale__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_isoFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/isoFormat */ "./node_modules/d3-time-format/src/isoFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoFormat", function() { return _src_isoFormat__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_isoParse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/isoParse */ "./node_modules/d3-time-format/src/isoParse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoParse", function() { return _src_isoParse__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-time-format/src/defaultLocale.js ***!
  \**********************************************************/
/*! exports provided: timeFormat, timeParse, utcFormat, utcParse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return timeParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return utcParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "./node_modules/d3-time-format/src/locale.js");


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoFormat.js ***!
  \******************************************************/
/*! exports provided: isoSpecifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoSpecifier", function() { return isoSpecifier; });
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcFormat"])(isoSpecifier);

/* harmony default export */ __webpack_exports__["default"] = (formatIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/isoParse.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoParse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isoFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isoFormat */ "./node_modules/d3-time-format/src/isoFormat.js");
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(_defaultLocale__WEBPACK_IMPORTED_MODULE_1__["utcParse"])(_isoFormat__WEBPACK_IMPORTED_MODULE_0__["isoSpecifier"]);

/* harmony default export */ __webpack_exports__["default"] = (parseIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/locale.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-time-format/src/locale.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLocale; });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/index.js");


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),

/***/ "./node_modules/d3-time/index.js":
/*!***************************************!*\
  !*** ./node_modules/d3-time/index.js ***!
  \***************************************/
/*! exports provided: timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/interval */ "./node_modules/d3-time/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return _src_interval__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_millisecond__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/millisecond */ "./node_modules/d3-time/src/millisecond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return _src_millisecond__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony import */ var _src_second__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/second */ "./node_modules/d3-time/src/second.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSecond", function() { return _src_second__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return _src_second__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSecond", function() { return _src_second__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return _src_second__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony import */ var _src_minute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/minute */ "./node_modules/d3-time/src/minute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinute", function() { return _src_minute__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return _src_minute__WEBPACK_IMPORTED_MODULE_3__["minutes"]; });

/* harmony import */ var _src_hour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/hour */ "./node_modules/d3-time/src/hour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHour", function() { return _src_hour__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHours", function() { return _src_hour__WEBPACK_IMPORTED_MODULE_4__["hours"]; });

/* harmony import */ var _src_day__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/day */ "./node_modules/d3-time/src/day.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDay", function() { return _src_day__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDays", function() { return _src_day__WEBPACK_IMPORTED_MODULE_5__["days"]; });

/* harmony import */ var _src_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/week */ "./node_modules/d3-time/src/week.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeek", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSunday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSundays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["monday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMondays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["mondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["tuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["tuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["wednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["wednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["thursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["thursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFriday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["friday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFridays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["fridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["saturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return _src_week__WEBPACK_IMPORTED_MODULE_6__["saturdays"]; });

/* harmony import */ var _src_month__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/month */ "./node_modules/d3-time/src/month.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonth", function() { return _src_month__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonths", function() { return _src_month__WEBPACK_IMPORTED_MODULE_7__["months"]; });

/* harmony import */ var _src_year__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/year */ "./node_modules/d3-time/src/year.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYear", function() { return _src_year__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYears", function() { return _src_year__WEBPACK_IMPORTED_MODULE_8__["years"]; });

/* harmony import */ var _src_utcMinute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/utcMinute */ "./node_modules/d3-time/src/utcMinute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinute", function() { return _src_utcMinute__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return _src_utcMinute__WEBPACK_IMPORTED_MODULE_9__["utcMinutes"]; });

/* harmony import */ var _src_utcHour__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/utcHour */ "./node_modules/d3-time/src/utcHour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHour", function() { return _src_utcHour__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return _src_utcHour__WEBPACK_IMPORTED_MODULE_10__["utcHours"]; });

/* harmony import */ var _src_utcDay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/utcDay */ "./node_modules/d3-time/src/utcDay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDay", function() { return _src_utcDay__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return _src_utcDay__WEBPACK_IMPORTED_MODULE_11__["utcDays"]; });

/* harmony import */ var _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/utcWeek */ "./node_modules/d3-time/src/utcWeek.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeek", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcMonday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcMondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcTuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcTuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcWednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcWednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcThursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcThursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcFriday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcFridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSaturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return _src_utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSaturdays"]; });

/* harmony import */ var _src_utcMonth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/utcMonth */ "./node_modules/d3-time/src/utcMonth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonth", function() { return _src_utcMonth__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return _src_utcMonth__WEBPACK_IMPORTED_MODULE_13__["utcMonths"]; });

/* harmony import */ var _src_utcYear__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/utcYear */ "./node_modules/d3-time/src/utcYear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYear", function() { return _src_utcYear__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return _src_utcYear__WEBPACK_IMPORTED_MODULE_14__["utcYears"]; });
































/***/ }),

/***/ "./node_modules/d3-time/src/day.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-time/src/day.js ***!
  \*****************************************/
/*! exports provided: default, days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var day = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (day);
var days = day.range;


/***/ }),

/***/ "./node_modules/d3-time/src/duration.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/duration.js ***!
  \**********************************************/
/*! exports provided: durationSecond, durationMinute, durationHour, durationDay, durationWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationSecond", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationMinute", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationHour", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationDay", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationWeek", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),

/***/ "./node_modules/d3-time/src/hour.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/hour.js ***!
  \******************************************/
/*! exports provided: default, hours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var hour = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  var offset = date.getTimezoneOffset() * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"] % _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
  if (offset < 0) offset += _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
  date.setTime(Math.floor((+date - offset) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"] + offset);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["default"] = (hour);
var hours = hour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/interval.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/interval.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newInterval; });
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),

/***/ "./node_modules/d3-time/src/millisecond.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-time/src/millisecond.js ***!
  \*************************************************/
/*! exports provided: default, milliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var millisecond = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),

/***/ "./node_modules/d3-time/src/minute.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/minute.js ***!
  \********************************************/
/*! exports provided: default, minutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var minute = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(Math.floor(date / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (minute);
var minutes = minute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/month.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/month.js ***!
  \*******************************************/
/*! exports provided: default, months */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var month = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (month);
var months = month.range;


/***/ }),

/***/ "./node_modules/d3-time/src/second.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/second.js ***!
  \********************************************/
/*! exports provided: default, seconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var second = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(Math.floor(date / _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["default"] = (second);
var seconds = second.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcDay.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/utcDay.js ***!
  \********************************************/
/*! exports provided: default, utcDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return utcDays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var utcDay = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcHour.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcHour.js ***!
  \*********************************************/
/*! exports provided: default, utcHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return utcHours; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var utcHour = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["default"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMinute.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-time/src/utcMinute.js ***!
  \***********************************************/
/*! exports provided: default, utcMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return utcMinutes; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var utcMinute = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMonth.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/utcMonth.js ***!
  \**********************************************/
/*! exports provided: default, utcMonths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return utcMonths; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var utcMonth = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcWeek.js ***!
  \*********************************************/
/*! exports provided: utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return utcMonday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return utcTuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return utcWednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return utcThursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return utcFriday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return utcSaturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return utcSundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return utcMondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return utcTuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return utcWednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return utcThursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return utcFridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return utcSaturdays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



function utcWeekday(i) {
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcYear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcYear.js ***!
  \*********************************************/
/*! exports provided: default, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return utcYears; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var utcYear = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),

/***/ "./node_modules/d3-time/src/week.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/week.js ***!
  \******************************************/
/*! exports provided: sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunday", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monday", function() { return monday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesday", function() { return tuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesday", function() { return wednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursday", function() { return thursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friday", function() { return friday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturday", function() { return saturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sundays", function() { return sundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mondays", function() { return mondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesdays", function() { return tuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesdays", function() { return wednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursdays", function() { return thursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fridays", function() { return fridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturdays", function() { return saturdays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



function weekday(i) {
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/year.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/year.js ***!
  \******************************************/
/*! exports provided: default, years */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var year = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (year);
var years = year.range;


/***/ }),

/***/ "./node_modules/d3-timer/index.js":
/*!****************************************!*\
  !*** ./node_modules/d3-timer/index.js ***!
  \****************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _src_timer__WEBPACK_IMPORTED_MODULE_0__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _src_timer__WEBPACK_IMPORTED_MODULE_0__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return _src_timer__WEBPACK_IMPORTED_MODULE_0__["timerFlush"]; });

/* harmony import */ var _src_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/timeout */ "./node_modules/d3-timer/src/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _src_timeout__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/interval */ "./node_modules/d3-timer/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _src_interval__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer__WEBPACK_IMPORTED_MODULE_0__["Timer"], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(_timer__WEBPACK_IMPORTED_MODULE_0__["now"])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer__WEBPACK_IMPORTED_MODULE_0__["Timer"];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/index.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-transition/index.js ***!
  \*********************************************/
/*! exports provided: transition, active, interrupt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/selection/index */ "./node_modules/d3-transition/src/selection/index.js");
/* harmony import */ var _src_transition_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/transition/index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return _src_transition_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/active */ "./node_modules/d3-transition/src/active.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "active", function() { return _src_active__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_interrupt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/interrupt */ "./node_modules/d3-transition/src/interrupt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return _src_interrupt__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/d3-transition/src/active.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-transition/src/active.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/schedule */ "./node_modules/d3-transition/src/transition/schedule.js");



var root = [null];

/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _transition_schedule__WEBPACK_IMPORTED_MODULE_1__["SCHEDULED"] && schedule.name === name) {
        return new _transition_index__WEBPACK_IMPORTED_MODULE_0__["Transition"]([[node]], root, name, +i);
      }
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/interrupt.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["STARTING"] && schedule.state < _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["ENDING"];
    schedule.state = _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["ENDED"];
    schedule.timer.stop();
    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interrupt */ "./node_modules/d3-transition/src/selection/interrupt.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition */ "./node_modules/d3-transition/src/selection/transition.js");




d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.interrupt = _interrupt__WEBPACK_IMPORTED_MODULE_1__["default"];
d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.transition = _transition__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interrupt */ "./node_modules/d3-transition/src/interrupt.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return this.each(function() {
    Object(_interrupt__WEBPACK_IMPORTED_MODULE_0__["default"])(this, name);
  });
});


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/transition.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition/index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/schedule */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/index.js");





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeCubicInOut"]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var id,
      timing;

  if (name instanceof _transition_index__WEBPACK_IMPORTED_MODULE_0__["Transition"]) {
    id = name._id, name = name._name;
  } else {
    id = Object(_transition_index__WEBPACK_IMPORTED_MODULE_0__["newId"])(), (timing = defaultTiming).time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(_transition_schedule__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index__WEBPACK_IMPORTED_MODULE_0__["Transition"](groups, this._parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attr.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate */ "./node_modules/d3-transition/src/transition/interpolate.js");





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["namespace"])(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateTransformSvg"] : _interpolate__WEBPACK_IMPORTED_MODULE_3__["default"];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(_tween__WEBPACK_IMPORTED_MODULE_2__["tweenValue"])(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value + ""));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");


function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["namespace"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


function delayFunction(id, value) {
  return function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["init"])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["init"])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).delay;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/duration.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


function durationFunction(id, value) {
  return function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).duration;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/ease.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).ease;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-transition/src/transition/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["matcher"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, this._parents, this._name, this._id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
/*! exports provided: Transition, default, newId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newId", function() { return newId; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attr */ "./node_modules/d3-transition/src/transition/attr.js");
/* harmony import */ var _attrTween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attrTween */ "./node_modules/d3-transition/src/transition/attrTween.js");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delay */ "./node_modules/d3-transition/src/transition/delay.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-transition/src/transition/duration.js");
/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ease */ "./node_modules/d3-transition/src/transition/ease.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter */ "./node_modules/d3-transition/src/transition/filter.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge */ "./node_modules/d3-transition/src/transition/merge.js");
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./on */ "./node_modules/d3-transition/src/transition/on.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remove */ "./node_modules/d3-transition/src/transition/remove.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select */ "./node_modules/d3-transition/src/transition/select.js");
/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-transition/src/transition/selectAll.js");
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selection */ "./node_modules/d3-transition/src/transition/selection.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style */ "./node_modules/d3-transition/src/transition/style.js");
/* harmony import */ var _styleTween__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styleTween */ "./node_modules/d3-transition/src/transition/styleTween.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./text */ "./node_modules/d3-transition/src/transition/text.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transition */ "./node_modules/d3-transition/src/transition/transition.js");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js");



















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select__WEBPACK_IMPORTED_MODULE_10__["default"],
  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_11__["default"],
  filter: _filter__WEBPACK_IMPORTED_MODULE_6__["default"],
  merge: _merge__WEBPACK_IMPORTED_MODULE_7__["default"],
  selection: _selection__WEBPACK_IMPORTED_MODULE_12__["default"],
  transition: _transition__WEBPACK_IMPORTED_MODULE_16__["default"],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on__WEBPACK_IMPORTED_MODULE_8__["default"],
  attr: _attr__WEBPACK_IMPORTED_MODULE_1__["default"],
  attrTween: _attrTween__WEBPACK_IMPORTED_MODULE_2__["default"],
  style: _style__WEBPACK_IMPORTED_MODULE_13__["default"],
  styleTween: _styleTween__WEBPACK_IMPORTED_MODULE_14__["default"],
  text: _text__WEBPACK_IMPORTED_MODULE_15__["default"],
  remove: _remove__WEBPACK_IMPORTED_MODULE_9__["default"],
  tween: _tween__WEBPACK_IMPORTED_MODULE_17__["default"],
  delay: _delay__WEBPACK_IMPORTED_MODULE_3__["default"],
  duration: _duration__WEBPACK_IMPORTED_MODULE_4__["default"],
  ease: _ease__WEBPACK_IMPORTED_MODULE_5__["default"]
};


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"]
      : (c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"])
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateString"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-transition/src/transition/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Transition"](merges, this._parents, this._name, this._id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/on.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule__WEBPACK_IMPORTED_MODULE_0__["init"] : _schedule__WEBPACK_IMPORTED_MODULE_0__["set"];
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/remove.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.on("end.remove", removeFunction(this._id));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
/*! exports provided: CREATED, SCHEDULED, STARTING, STARTED, RUNNING, ENDING, ENDED, default, init, set, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULED", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTING", function() { return STARTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTED", function() { return STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUNNING", function() { return RUNNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDING", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDED", function() { return ENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/index.js");



var emptyOn = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("start", "end", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["default"] = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTING) throw new Error("too late; already started");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timer"])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selector"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["default"])(subgroup[i], name, id, i, subgroup, Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["get"])(node, id));
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, this._parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectorAll"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["get"])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["default"])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.constructor;

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new Selection(this._groups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/style.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate */ "./node_modules/d3-transition/src/transition/interpolate.js");





function styleRemove(name, interpolate) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name),
        value1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name),
        value1 = value(this);
    if (value1 == null) value1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateTransformCss"] : _interpolate__WEBPACK_IMPORTED_MODULE_3__["default"];
  return value == null ? this
          .styleTween(name, styleRemove(name, i))
          .on("end.style." + name, styleRemoveEnd(name))
      : this.styleTween(name, typeof value === "function"
          ? styleFunction(name, i, Object(_tween__WEBPACK_IMPORTED_MODULE_2__["tweenValue"])(this, "style." + name, value))
          : styleConstant(name, i, value + ""), priority);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js");


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(Object(_tween__WEBPACK_IMPORTED_MODULE_0__["tweenValue"])(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/transition.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = Object(_index__WEBPACK_IMPORTED_MODULE_0__["newId"])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(_schedule__WEBPACK_IMPORTED_MODULE_1__["get"])(node, id0);
        Object(_schedule__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Transition"](groups, this._parents, name, id1);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/tween.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
/*! exports provided: default, tweenValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tweenValue", function() { return tweenValue; });
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(node, id).value[name];
  };
}


/***/ }),

/***/ "./public/csv/income-country-comparison.csv":
/*!**************************************************!*\
  !*** ./public/csv/income-country-comparison.csv ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{"country":"United States","receipts":3336000000000,"gdp":19390604000000,"receipts_gdp":0.17,"year":2017,"source":"wb"},{"country":"China","receipts":2672000000000,"gdp":12237700000000,"receipts_gdp":0.22,"year":2017,"source":"wb"},{"country":"Japan","receipts":1678000000000,"gdp":4872140000000,"receipts_gdp":0.34,"year":2017,"source":"wb"},{"country":"Germany","receipts":1598000000000,"gdp":3677439129777,"receipts_gdp":0.43,"year":2017,"source":"wb"},{"country":"United Kingdom","receipts":984400000000,"gdp":2622433959604,"receipts_gdp":0.38,"year":2017,"source":"wb"},{"country":"India","receipts":248700000000,"gdp":2597491162898,"receipts_gdp":0.1,"year":2017,"source":"wb"},{"country":"France","receipts":1334000000000,"gdp":2582501307216,"receipts_gdp":0.52,"year":2017,"source":"wb"},{"country":"Brazil","receipts":726600000000,"gdp":2055505502225,"receipts_gdp":0.35,"year":2017,"source":"wb"},{"country":"Italy","receipts":884400000000,"gdp":1934797937411,"receipts_gdp":0.46,"year":2017,"source":"wb"},{"country":"Canada","receipts":623700000000,"gdp":1653042795255,"receipts_gdp":0.38,"year":2017,"source":"wb"},{"country":"Russia","receipts":253900000000,"gdp":1577524145963,"receipts_gdp":0.16,"year":2017,"source":"wb"},{"country":"Korea, South","receipts":351600000000,"gdp":1530750923149,"receipts_gdp":0.23,"year":2017,"source":"wb"},{"country":"Australia","receipts":461000000000,"gdp":1323421072479,"receipts_gdp":0.35,"year":2017,"source":"wb"},{"country":"Spain","receipts":492400000000,"gdp":1311320015516,"receipts_gdp":0.38,"year":2017,"source":"wb"},{"country":"Mexico","receipts":292800000000,"gdp":1149918794766,"receipts_gdp":0.25,"year":2017,"source":"wb"},{"country":"Indonesia","receipts":130600000000,"gdp":1015539017537,"receipts_gdp":0.13,"year":2017,"source":"wb"},{"country":"Turkey","receipts":173900000000,"gdp":851102411118,"receipts_gdp":0.2,"year":2017,"source":"wb"},{"country":"Netherlands","receipts":344800000000,"gdp":826200282501,"receipts_gdp":0.42,"year":2017,"source":"wb"},{"country":"Saudi Arabia","receipts":171600000000,"gdp":683827144289,"receipts_gdp":0.25,"year":2017,"source":"wb"},{"country":"Switzerland","receipts":223500000000,"gdp":678887336848,"receipts_gdp":0.33,"year":2017,"source":"wb"},{"country":"Argentina","receipts":123200000000,"gdp":637590419269,"receipts_gdp":0.19,"year":2017,"source":"wb"},{"country":"Taiwan","receipts":93000000000,"gdp":579302000000,"receipts_gdp":0.16,"year":2017,"source":"imf"},{"country":"Sweden","receipts":274800000000,"gdp":538040458217,"receipts_gdp":0.51,"year":2017,"source":"wb"},{"country":"Poland","receipts":90800000000,"gdp":524509565263,"receipts_gdp":0.17,"year":2017,"source":"wb"},{"country":"Belgium","receipts":249700000000,"gdp":492681283049,"receipts_gdp":0.51,"year":2017,"source":"wb"},{"country":"Thailand","receipts":79600000000,"gdp":455220920571,"receipts_gdp":0.17,"year":2017,"source":"wb"},{"country":"Iran","receipts":77220000000,"gdp":439513511621,"receipts_gdp":0.18,"year":2017,"source":"wb"},{"country":"Austria","receipts":197800000000,"gdp":416595666397,"receipts_gdp":0.47,"year":2017,"source":"wb"},{"country":"Norway","receipts":214300000000,"gdp":398831956478,"receipts_gdp":0.54,"year":2017,"source":"wb"},{"country":"United Arab Emirates","receipts":83440000000,"gdp":382575085092,"receipts_gdp":0.22,"year":2017,"source":"wb"},{"country":"Nigeria","receipts":13970000000,"gdp":375770713743,"receipts_gdp":0.04,"year":2017,"source":"wb"},{"country":"Israel","receipts":92820000000,"gdp":350850537827,"receipts_gdp":0.26,"year":2017,"source":"wb"},{"country":"South Africa","receipts":92380000000,"gdp":349419343614,"receipts_gdp":0.26,"year":2017,"source":"wb"},{"country":"Hong Kong","receipts":66190000000,"gdp":341449340451,"receipts_gdp":0.19,"year":2017,"source":"wb"},{"country":"Ireland","receipts":85410000000,"gdp":333730764773,"receipts_gdp":0.26,"year":2017,"source":"wb"},{"country":"Denmark","receipts":173500000000,"gdp":324871968807,"receipts_gdp":0.53,"year":2017,"source":"wb"},{"country":"Singapore","receipts":53400000000,"gdp":323907234412,"receipts_gdp":0.16,"year":2017,"source":"wb"},{"country":"Malaysia","receipts":51230000000,"gdp":314500279044,"receipts_gdp":0.16,"year":2017,"source":"wb"},{"country":"Philippines","receipts":44740000000,"gdp":313595208737,"receipts_gdp":0.14,"year":2017,"source":"wb"},{"country":"Colombia","receipts":85140000000,"gdp":309191382833,"receipts_gdp":0.28,"year":2017,"source":"wb"},{"country":"Pakistan","receipts":45640000000,"gdp":304951818494,"receipts_gdp":0.15,"year":2017,"source":"wb"},{"country":"Chile","receipts":56730000000,"gdp":277075944402,"receipts_gdp":0.2,"year":2017,"source":"wb"},{"country":"Finland","receipts":136800000000,"gdp":251884887973,"receipts_gdp":0.54,"year":2017,"source":"wb"},{"country":"Bangladesh","receipts":27080000000,"gdp":249723887765,"receipts_gdp":0.11,"year":2017,"source":"wb"},{"country":"Egypt","receipts":35540000000,"gdp":235369129338,"receipts_gdp":0.15,"year":2017,"source":"wb"},{"country":"Vietnam","receipts":49410000000,"gdp":223863996355,"receipts_gdp":0.22,"year":2017,"source":"wb"},{"country":"Portugal","receipts":92990000000,"gdp":217571083046,"receipts_gdp":0.43,"year":2017,"source":"wb"},{"country":"Czech Republic","receipts":83620000000,"gdp":215725534372,"receipts_gdp":0.39,"year":2017,"source":"wb"},{"country":"Romania","receipts":58500000000,"gdp":211803281925,"receipts_gdp":0.28,"year":2017,"source":"wb"},{"country":"Peru","receipts":59660000000,"gdp":211389272242,"receipts_gdp":0.28,"year":2017,"source":"wb"},{"country":"Venezuela","receipts":77890000000,"gdp":210085000000,"receipts_gdp":0.37,"year":2017,"source":"imf"},{"country":"New Zealand","receipts":73200000000,"gdp":205852838255,"receipts_gdp":0.36,"year":2017,"source":"wb"},{"country":"Greece","receipts":95360000000,"gdp":200288277129,"receipts_gdp":0.48,"year":2017,"source":"wb"},{"country":"Iraq","receipts":63970000000,"gdp":197715736041,"receipts_gdp":0.32,"year":2017,"source":"wb"},{"country":"Algeria","receipts":52080000000,"gdp":170370810918,"receipts_gdp":0.31,"year":2017,"source":"wb"},{"country":"Qatar","receipts":41470000000,"gdp":167605219780,"receipts_gdp":0.25,"year":2017,"source":"wb"},{"country":"Kazakhstan","receipts":34130000000,"gdp":159406926359,"receipts_gdp":0.21,"year":2017,"source":"wb"},{"country":"Hungary","receipts":63630000000,"gdp":139135029758,"receipts_gdp":0.46,"year":2017,"source":"wb"},{"country":"Angola","receipts":35590000000,"gdp":124209385825,"receipts_gdp":0.29,"year":2017,"source":"wb"},{"country":"Kuwait","receipts":52870000000,"gdp":120126277613,"receipts_gdp":0.44,"year":2017,"source":"wb"},{"country":"Sudan","receipts":8198000000,"gdp":117487857143,"receipts_gdp":0.07,"year":2017,"source":"wb"},{"country":"Ukraine","receipts":35600000000,"gdp":112154185121,"receipts_gdp":0.32,"year":2017,"source":"wb"},{"country":"Morocco","receipts":26630000000,"gdp":109139484007,"receipts_gdp":0.24,"year":2017,"source":"wb"},{"country":"Puerto Rico","receipts":9268000000,"gdp":105034500000,"receipts_gdp":0.09,"year":2016,"source":"wb"},{"country":"Ecuador","receipts":32300000000,"gdp":103056619000,"receipts_gdp":0.31,"year":2017,"source":"wb"},{"country":"Slovakia","receipts":37090000000,"gdp":95769031980,"receipts_gdp":0.39,"year":2017,"source":"wb"},{"country":"Cuba","receipts":52360000000,"gdp":89689000000,"receipts_gdp":0.58,"year":2016,"source":"un"},{"country":"Sri Lanka","receipts":12640000000,"gdp":87174682200,"receipts_gdp":0.15,"year":2017,"source":"wb"},{"country":"Ethiopia","receipts":12110000000,"gdp":80561496134,"receipts_gdp":0.15,"year":2017,"source":"wb"},{"country":"Dominican Republic","receipts":11180000000,"gdp":75931656815,"receipts_gdp":0.15,"year":2017,"source":"wb"},{"country":"Guatemala","receipts":8335000000,"gdp":75620095538,"receipts_gdp":0.11,"year":2017,"source":"wb"},{"country":"Kenya","receipts":15370000000,"gdp":74938190655,"receipts_gdp":0.21,"year":2017,"source":"wb"},{"country":"Oman","receipts":22680000000,"gdp":72642652796,"receipts_gdp":0.31,"year":2017,"source":"wb"},{"country":"Myanmar","receipts":9211000000,"gdp":69322122756,"receipts_gdp":0.13,"year":2017,"source":"wb"},{"country":"Luxembourg","receipts":27600000000,"gdp":62404461275,"receipts_gdp":0.44,"year":2017,"source":"wb"},{"country":"Panama","receipts":12600000000,"gdp":61838175800,"receipts_gdp":0.2,"year":2017,"source":"wb"},{"country":"Costa Rica","receipts":8262000000,"gdp":57057372468,"receipts_gdp":0.14,"year":2017,"source":"wb"},{"country":"Bulgaria","receipts":19530000000,"gdp":56831518294,"receipts_gdp":0.34,"year":2017,"source":"wb"},{"country":"Uruguay","receipts":17690000000,"gdp":56156972158,"receipts_gdp":0.32,"year":2017,"source":"wb"},{"country":"Croatia","receipts":25790000000,"gdp":54849180229,"receipts_gdp":0.47,"year":2017,"source":"wb"},{"country":"Belarus","receipts":22800000000,"gdp":54442374373,"receipts_gdp":0.42,"year":2017,"source":"wb"},{"country":"Tanzania","receipts":7872000000,"gdp":52090320325,"receipts_gdp":0.15,"year":2017,"source":"wb"},{"country":"Lebanon","receipts":10900000000,"gdp":51844487742,"receipts_gdp":0.21,"year":2017,"source":"wb"},{"country":"Libya","receipts":16330000000,"gdp":50984362478,"receipts_gdp":0.32,"year":2017,"source":"wb"},{"country":"Macau","receipts":14240000000,"gdp":50361201096,"receipts_gdp":0.28,"year":2017,"source":"wb"},{"country":"Slovenia","receipts":20200000000,"gdp":48769655479,"receipts_gdp":0.41,"year":2017,"source":"wb"},{"country":"Uzbekistan","receipts":20110000000,"gdp":48717685984,"receipts_gdp":0.41,"year":2017,"source":"wb"},{"country":"Ghana","receipts":9236000000,"gdp":47330016343,"receipts_gdp":0.2,"year":2017,"source":"wb"},{"country":"Lithuania","receipts":16180000000,"gdp":47168303744,"receipts_gdp":0.34,"year":2017,"source":"wb"},{"country":"Turkmenistan","receipts":4436000000,"gdp":42355428571,"receipts_gdp":0.1,"year":2017,"source":"wb"},{"country":"Serbia","receipts":16250000000,"gdp":41431648801,"receipts_gdp":0.39,"year":2017,"source":"wb"},{"country":"Azerbaijan","receipts":9852000000,"gdp":40747792238,"receipts_gdp":0.24,"year":2017,"source":"wb"},{"country":"Cote d'Ivoire","receipts":7121000000,"gdp":40388624117,"receipts_gdp":0.18,"year":2017,"source":"wb"},{"country":"Tunisia","receipts":9397000000,"gdp":40256675209,"receipts_gdp":0.23,"year":2017,"source":"wb"},{"country":"Jordan","receipts":9157000000,"gdp":40068308516,"receipts_gdp":0.23,"year":2017,"source":"wb"},{"country":"Bolivia","receipts":15010000000,"gdp":37508642113,"receipts_gdp":0.4,"year":2017,"source":"wb"},{"country":"Congo, Democratic Republic of the","receipts":3238000000,"gdp":37241300949,"receipts_gdp":0.09,"year":2017,"source":"wb"},{"country":"Bahrain","receipts":5463000000,"gdp":35307127660,"receipts_gdp":0.15,"year":2017,"source":"wb"},{"country":"Cameroon","receipts":5154000000,"gdp":34798596482,"receipts_gdp":0.15,"year":2017,"source":"wb"},{"country":"Latvia","receipts":10130000000,"gdp":30264454642,"receipts_gdp":0.33,"year":2017,"source":"wb"},{"country":"Paraguay","receipts":5366000000,"gdp":29734895249,"receipts_gdp":0.18,"year":2017,"source":"wb"},{"country":"Estonia","receipts":9772000000,"gdp":25921079612,"receipts_gdp":0.38,"year":2017,"source":"wb"},{"country":"Uganda","receipts":4019000000,"gdp":25891058946,"receipts_gdp":0.16,"year":2017,"source":"wb"},{"country":"Zambia","receipts":4895000000,"gdp":25808666422,"receipts_gdp":0.19,"year":2017,"source":"wb"},{"country":"El Salvador","receipts":5756000000,"gdp":24805439600,"receipts_gdp":0.23,"year":2017,"source":"wb"},{"country":"Nepal","receipts":5954000000,"gdp":24472013234,"receipts_gdp":0.24,"year":2017,"source":"wb"},{"country":"Iceland","receipts":9962000000,"gdp":23909289979,"receipts_gdp":0.42,"year":2017,"source":"wb"},{"country":"Honduras","receipts":4376000000,"gdp":22978532897,"receipts_gdp":0.19,"year":2017,"source":"wb"},{"country":"Syria","receipts":1033000000,"gdp":22163075121,"receipts_gdp":0.05,"year":2016,"source":"un"},{"country":"Cambodia","receipts":4268000000,"gdp":22158209503,"receipts_gdp":0.19,"year":2017,"source":"wb"},{"country":"Trinidad and Tobago","receipts":6916000000,"gdp":22104775828,"receipts_gdp":0.31,"year":2017,"source":"wb"},{"country":"Cyprus","receipts":7677000000,"gdp":21651791751,"receipts_gdp":0.35,"year":2017,"source":"wb"},{"country":"Papua New Guinea","receipts":3649000000,"gdp":21088758485,"receipts_gdp":0.17,"year":2017,"source":"wb"},{"country":"Afghanistan","receipts":1992000000,"gdp":20815300220,"receipts_gdp":0.1,"year":2017,"source":"wb"},{"country":"Yemen","receipts":3467000000,"gdp":16511000000,"receipts_gdp":0.21,"year":2017,"source":"imf"},{"country":"Bosnia and Herzegovina","receipts":7798000000,"gdp":18168579578,"receipts_gdp":0.43,"year":2017,"source":"wb"},{"country":"Zimbabwe","receipts":3600000000,"gdp":17845821400,"receipts_gdp":0.2,"year":2017,"source":"wb"},{"country":"Botswana","receipts":5609000000,"gdp":17406530781,"receipts_gdp":0.32,"year":2017,"source":"wb"},{"country":"Korea, North","receipts":3200000000,"gdp":17396000000,"receipts_gdp":0.18,"year":2016,"source":"un"},{"country":"Laos","receipts":3144000000,"gdp":16853079615,"receipts_gdp":0.19,"year":2017,"source":"wb"},{"country":"Senegal","receipts":3863000000,"gdp":16374743753,"receipts_gdp":0.24,"year":2017,"source":"wb"},{"country":"Mali","receipts":3068000000,"gdp":15288163367,"receipts_gdp":0.2,"year":2017,"source":"wb"},{"country":"Georgia","receipts":4260000000,"gdp":15159281211,"receipts_gdp":0.28,"year":2017,"source":"wb"},{"country":"Jamaica","receipts":4207000000,"gdp":14768134912,"receipts_gdp":0.28,"year":2017,"source":"wb"},{"country":"Gabon","receipts":3122000000,"gdp":14622880886,"receipts_gdp":0.21,"year":2017,"source":"wb"},{"country":"West Bank","receipts":1314000000,"gdp":14498100000,"receipts_gdp":0.09,"year":2017,"source":"wb"},{"country":"Nicaragua","receipts":3800000000,"gdp":13814261536,"receipts_gdp":0.28,"year":2017,"source":"wb"},{"country":"Mauritius","receipts":2912000000,"gdp":13338147523,"receipts_gdp":0.22,"year":2017,"source":"wb"},{"country":"Namibia","receipts":3967000000,"gdp":13244597345,"receipts_gdp":0.3,"year":2017,"source":"wb"},{"country":"Albania","receipts":3486000000,"gdp":13039352744,"receipts_gdp":0.27,"year":2017,"source":"wb"},{"country":"Burkina Faso","receipts":2635000000,"gdp":12873114800,"receipts_gdp":0.2,"year":2017,"source":"wb"},{"country":"Malta","receipts":4295000000,"gdp":12537750732,"receipts_gdp":0.34,"year":2017,"source":"wb"},{"country":"Equatorial Guinea","receipts":3186000000,"gdp":12486753871,"receipts_gdp":0.26,"year":2017,"source":"wb"},{"country":"Mozambique","receipts":2758000000,"gdp":12333859926,"receipts_gdp":0.22,"year":2017,"source":"wb"},{"country":"Bahamas, The","receipts":2100000000,"gdp":12162100000,"receipts_gdp":0.17,"year":2017,"source":"wb"},{"country":"Brunei","receipts":1435000000,"gdp":12128089002,"receipts_gdp":0.12,"year":2017,"source":"wb"},{"country":"Armenia","receipts":2536000000,"gdp":11536590636,"receipts_gdp":0.22,"year":2017,"source":"wb"},{"country":"Madagascar","receipts":1292000000,"gdp":11499803807,"receipts_gdp":0.11,"year":2017,"source":"wb"},{"country":"Mongolia","receipts":2623000000,"gdp":11488046881,"receipts_gdp":0.23,"year":2017,"source":"wb"},{"country":"Macedonia","receipts":3314000000,"gdp":11337827332,"receipts_gdp":0.29,"year":2017,"source":"wb"},{"country":"Guinea","receipts":1559000000,"gdp":10491474930,"receipts_gdp":0.15,"year":2017,"source":"wb"},{"country":"Chad","receipts":1178000000,"gdp":9981303726,"receipts_gdp":0.12,"year":2017,"source":"wb"},{"country":"New Caledonia","receipts":1995000000,"gdp":9445714851,"receipts_gdp":0.21,"year":2016,"source":"un"},{"country":"Benin","receipts":1372000000,"gdp":9273558272,"receipts_gdp":0.15,"year":2017,"source":"wb"},{"country":"Rwanda","receipts":1874000000,"gdp":9136689514,"receipts_gdp":0.21,"year":2017,"source":"wb"},{"country":"Congo, Republic of the","receipts":2516000000,"gdp":8722553001,"receipts_gdp":0.29,"year":2017,"source":"wb"},{"country":"Haiti","receipts":1580000000,"gdp":8408150518,"receipts_gdp":0.19,"year":2017,"source":"wb"},{"country":"Moldova","receipts":2796000000,"gdp":8128493432,"receipts_gdp":0.34,"year":2017,"source":"wb"},{"country":"Niger","receipts":1680000000,"gdp":8119732793,"receipts_gdp":0.21,"year":2017,"source":"wb"},{"country":"Kyrgyzstan","receipts":2050000000,"gdp":7564738836,"receipts_gdp":0.27,"year":2017,"source":"wb"},{"country":"Somalia","receipts":145300000,"gdp":7368560695,"receipts_gdp":0.02,"year":2017,"source":"wb"},{"country":"Tajikistan","receipts":2214000000,"gdp":7145701019,"receipts_gdp":0.31,"year":2017,"source":"wb"},{"country":"Kosovo","receipts":1396000000,"gdp":7128690557,"receipts_gdp":0.2,"year":2017,"source":"wb"},{"country":"Monaco","receipts":878400000,"gdp":6468000877,"receipts_gdp":0.14,"year":2016,"source":"un"},{"country":"Malawi","receipts":1298000000,"gdp":6303277591,"receipts_gdp":0.21,"year":2017,"source":"wb"},{"country":"Liechtenstein","receipts":995300000,"gdp":6193677543,"receipts_gdp":0.16,"year":2016,"source":"un"},{"country":"Bermuda","receipts":1013000000,"gdp":6127341000,"receipts_gdp":0.17,"year":2016,"source":"un"},{"country":"Eritrea","receipts":2029000000,"gdp":5813000000,"receipts_gdp":0.35,"year":2017,"source":"imf"},{"country":"Guam","receipts":1147000000,"gdp":5793000000,"receipts_gdp":0.2,"year":2016,"source":"wb"},{"country":"French Polynesia","receipts":1891000000,"gdp":5417934152,"receipts_gdp":0.35,"year":2016,"source":"un"},{"country":"Fiji","receipts":1446000000,"gdp":5061202767,"receipts_gdp":0.29,"year":2017,"source":"wb"},{"country":"Mauritania","receipts":1248000000,"gdp":5024705934,"receipts_gdp":0.25,"year":2017,"source":"wb"},{"country":"Togo","receipts":1469000000,"gdp":4812554346,"receipts_gdp":0.31,"year":2017,"source":"wb"},{"country":"Montenegro","receipts":1620000000,"gdp":4774086094,"receipts_gdp":0.34,"year":2017,"source":"wb"},{"country":"Maldives","receipts":1481000000,"gdp":4597083304,"receipts_gdp":0.32,"year":2017,"source":"wb"},{"country":"Eswatini","receipts":1150000000,"gdp":4408564260,"receipts_gdp":0.26,"year":2017,"source":"wb"},{"country":"Cayman Islands","receipts":870200000,"gdp":3844080626,"receipts_gdp":0.23,"year":2016,"source":"un"},{"country":"Sierra Leone","receipts":684300000,"gdp":3774270392,"receipts_gdp":0.18,"year":2017,"source":"wb"},{"country":"Guyana","receipts":939100000,"gdp":3675631961,"receipts_gdp":0.26,"year":2017,"source":"wb"},{"country":"Burundi","receipts":607600000,"gdp":3477502178,"receipts_gdp":0.17,"year":2017,"source":"wb"},{"country":"Suriname","receipts":545700000,"gdp":3324385325,"receipts_gdp":0.16,"year":2017,"source":"wb"},{"country":"Curacao","receipts":928000000,"gdp":3121449966,"receipts_gdp":0.3,"year":2016,"source":"un"},{"country":"Andorra","receipts":1872000000,"gdp":3012914131,"receipts_gdp":0.62,"year":2017,"source":"wb"},{"country":"Timor-Leste","receipts":300000000,"gdp":2954621000,"receipts_gdp":0.1,"year":2017,"source":"wb"},{"country":"South Sudan","receipts":437000000,"gdp":2904114903,"receipts_gdp":0.15,"year":2016,"source":"wb"},{"country":"Greenland","receipts":1578000000,"gdp":2705891617,"receipts_gdp":0.58,"year":2016,"source":"wb"},{"country":"Aruba","receipts":695400000,"gdp":2667039106,"receipts_gdp":0.26,"year":2016,"source":"un"},{"country":"Lesotho","receipts":1057000000,"gdp":2639386291,"receipts_gdp":0.4,"year":2017,"source":"wb"},{"country":"Bhutan","receipts":692600000,"gdp":2511852941,"receipts_gdp":0.28,"year":2017,"source":"wb"},{"country":"Liberia","receipts":626100000,"gdp":2158000000,"receipts_gdp":0.29,"year":2017,"source":"wb"},{"country":"Central African Republic","receipts":230600000,"gdp":1949411659,"receipts_gdp":0.12,"year":2017,"source":"wb"},{"country":"Djibouti","receipts":699800000,"gdp":1844674435,"receipts_gdp":0.38,"year":2017,"source":"wb"},{"country":"Belize","receipts":500000000,"gdp":1838000000,"receipts_gdp":0.27,"year":2017,"source":"wb"},{"country":"Cabo Verde","receipts":437100000,"gdp":1753736712,"receipts_gdp":0.25,"year":2017,"source":"wb"},{"country":"Saint Lucia","receipts":402300000,"gdp":1712306556,"receipts_gdp":0.23,"year":2017,"source":"wb"},{"country":"San Marino","receipts":667700000,"gdp":1658778454,"receipts_gdp":0.4,"year":2017,"source":"wb"},{"country":"Antigua and Barbuda","receipts":295900000,"gdp":1532397556,"receipts_gdp":0.19,"year":2017,"source":"wb"},{"country":"Seychelles","receipts":571800000,"gdp":1485994387,"receipts_gdp":0.38,"year":2017,"source":"wb"},{"country":"Guinea-Bissau","receipts":226000000,"gdp":1346933490,"receipts_gdp":0.17,"year":2017,"source":"wb"},{"country":"Solomon Islands","receipts":434600000,"gdp":1303453616,"receipts_gdp":0.33,"year":2017,"source":"wb"},{"country":"Northern Mariana Islands","receipts":246400000,"gdp":1242000000,"receipts_gdp":0.2,"year":2016,"source":"wb"},{"country":"Grenada","receipts":279200000,"gdp":1118816679,"receipts_gdp":0.25,"year":2017,"source":"wb"},{"country":"Gambia, The","receipts":187000000,"gdp":1014621520,"receipts_gdp":0.18,"year":2017,"source":"wb"},{"country":"British Virgin Islands","receipts":400000000,"gdp":971237110,"receipts_gdp":0.41,"year":2016,"source":"un"},{"country":"Saint Kitts and Nevis","receipts":370400000,"gdp":945854481,"receipts_gdp":0.39,"year":2017,"source":"wb"},{"country":"Turks and Caicos Islands","receipts":232800000,"gdp":917550492,"receipts_gdp":0.25,"year":2016,"source":"un"},{"country":"Vanuatu","receipts":202400000,"gdp":862879789,"receipts_gdp":0.23,"year":2017,"source":"wb"},{"country":"Samoa","receipts":233800000,"gdp":856626506,"receipts_gdp":0.27,"year":2017,"source":"wb"},{"country":"Saint Vincent and the Grenadines","receipts":222200000,"gdp":789629630,"receipts_gdp":0.28,"year":2017,"source":"wb"},{"country":"Comoros","receipts":148600000,"gdp":648920943,"receipts_gdp":0.23,"year":2017,"source":"wb"},{"country":"Dominica","receipts":148100000,"gdp":562540741,"receipts_gdp":0.26,"year":2017,"source":"wb"},{"country":"Tonga","receipts":134600000,"gdp":426057453,"receipts_gdp":0.32,"year":2017,"source":"wb"},{"country":"Sao Tome and Principe","receipts":114300000,"gdp":390871569,"receipts_gdp":0.29,"year":2017,"source":"wb"},{"country":"Anguilla","receipts":91150000,"gdp":337520470,"receipts_gdp":0.27,"year":2016,"source":"un"},{"country":"Micronesia, Federated States of","receipts":213800000,"gdp":336427533,"receipts_gdp":0.64,"year":2017,"source":"wb"},{"country":"Palau","receipts":212200000,"gdp":291544300,"receipts_gdp":0.73,"year":2017,"source":"wb"},{"country":"Cook Islands","receipts":86900000,"gdp":290194195,"receipts_gdp":0.3,"year":2016,"source":"un"},{"country":"Marshall Islands","receipts":116700000,"gdp":199399247,"receipts_gdp":0.59,"year":2017,"source":"wb"},{"country":"Kiribati","receipts":197900000,"gdp":196150061,"receipts_gdp":1.01,"year":2017,"source":"wb"},{"country":"Nauru","receipts":57800000,"gdp":113884908,"receipts_gdp":0.51,"year":2017,"source":"wb"},{"country":"Montserrat","receipts":37040000,"gdp":62051375,"receipts_gdp":0.6,"year":2016,"source":"un"},{"country":"Tuvalu","receipts":42680000,"gdp":39731317,"receipts_gdp":1.07,"year":2017,"source":"wb"},{"country":null}]

/***/ }),

/***/ "./src/receipts/sect-4/chart.js":
/*!**************************************!*\
  !*** ./src/receipts/sect-4/chart.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshData = refreshData;
exports.chartInit = chartInit;

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");

var _d3Scale = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var _d3Axis = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");

var _d3Transition = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/index.js");

var _ink = __webpack_require__(/*! ./ink */ "./src/receipts/sect-4/ink.js");

var _selectCountry = __webpack_require__(/*! ./selectCountry */ "./src/receipts/sect-4/selectCountry.js");

var _ = __webpack_require__(/*! . */ "./src/receipts/sect-4/index.js");

var _selectedCountryManager = __webpack_require__(/*! ./selectedCountryManager */ "./src/receipts/sect-4/selectedCountryManager.js");

var d3 = {
  select: _d3Selection.select,
  selectAll: _d3Selection.selectAll,
  min: _d3Array.min,
  max: _d3Array.max,
  scaleLinear: _d3Scale.scaleLinear,
  axisBottom: _d3Axis.axisBottom,
  transition: _d3Transition.transition
},
    dimensions = {
  rowHeight: 72,
  barHeight: 16,
  countryColumnWidth: 210,
  gdpColumnWidth: 130,
  header: 50,
  barYOffset: 3
},
    addRemoveDuration = 1000,
    scales = {},
    containers = {},
    map = {
  income: {
    data: 'receipts',
    class: 'receipts',
    stroke: '#2E8540',
    fill: 'rgba(46,133,64,0.5)',
    yOffset: 3,
    legend: 'Income'
  },
  gdp: {
    data: 'gdp',
    class: 'gdp',
    stroke: '#4A90E2',
    fill: 'rgba(74,144,226,0.5)',
    yOffset: 0 - dimensions.barHeight - 3,
    legend: 'GDP - Gross Domestic Product'
  }
};
var xAxis, data;
dimensions.dataWidth = 1200 - dimensions.countryColumnWidth - dimensions.gdpColumnWidth;

function establishContainers(container) {
  containers.chart = container.append('g');
  containers.data = containers.chart.append('g').attr('transform', (0, _utils.translator)(dimensions.countryColumnWidth, dimensions.header));
  containers.country = containers.chart.append('g').attr('transform', (0, _utils.translator)(0, dimensions.header));
  containers.gdp = containers.chart.append('g').attr('transform', (0, _utils.translator)(dimensions.countryColumnWidth + dimensions.dataWidth, dimensions.header));
  containers.legends = containers.chart.append('g').classed('legends', true);
}

function addBarLabels(g, data, keys) {
  var text = g.selectAll('text').data(keys.map(function (k) {
    return map[k].data;
  })).enter().append('text').text(function (d) {
    return (0, _utils.simplifyNumber)(data[d]);
  }).attr('font-size', 12).attr('x', function (d) {
    return scales.x(data[d]) + 20;
  }).attr('y', function (d, i) {
    return dimensions.rowHeight / 2 - dimensions.barHeight - dimensions.barYOffset + i * (dimensions.barYOffset * 2 + dimensions.barHeight) + 12;
  }).attr('opacity', 0);
  text.transition().duration(500).attr('opacity', 1).ease();
}

function addBarGroups() {
  var groups = containers.data.selectAll('g.bar-group').data(data, function (d) {
    return d.country;
  });

  if (groups.size()) {
    groups.transition().duration(addRemoveDuration).attr('transform', function (d, i) {
      return (0, _utils.translator)(0, i * dimensions.rowHeight);
    }).ease();
  }

  groups.exit().remove();
  groups.enter().append('g').classed('bar-group', true).attr('transform', function (d, i) {
    return (0, _utils.translator)(0, i * dimensions.rowHeight);
  }).each(drawBars);
}

function drawBars(data) {
  var transitionDuration = 1000,
      group = d3.select(this),
      keys = ['gdp', 'income'],
      bars = group.selectAll('rect').data(keys).enter().append('rect').attr('width', scales.x(0)).attr('height', dimensions.barHeight).attr('x', 0).attr('y', function (d, i) {
    return dimensions.rowHeight / 2 - dimensions.barHeight - dimensions.barYOffset + i * (dimensions.barYOffset * 2 + dimensions.barHeight);
  }).attr('fill', function (d) {
    return map[d].fill;
  }).attr('stroke', function (d) {
    return map[d].stroke;
  });
  bars.transition().duration(transitionDuration).attr('width', function (d) {
    return scales.x(data[map[d].data]);
  }).ease();
  setTimeout(function () {
    addBarLabels(group, data, keys);
  }, transitionDuration);
}

function setScales() {
  var receiptsVals = data.map(function (r) {
    return r.receipts;
  }),
      gdpVals = data.map(function (r) {
    return r.gdp;
  }),
      min = d3.min([0, d3.min(receiptsVals.concat(gdpVals))]),
      max = d3.max(receiptsVals.concat(gdpVals)) * 1.1;
  scales.x = d3.scaleLinear().domain([min, max]).nice().range([0, dimensions.dataWidth]);
}

function xAxisMods() {
  containers.axisGroup.selectAll('.tick line').attr('y1', 0 - dimensions.totalHeight).attr('stroke', '#eee');
  containers.axisGroup.selectAll('.domain').remove();
}

function drawXAxis() {
  xAxis = d3.axisBottom(scales.x).tickFormat(function (n) {
    if (n === 0) {
      return 0;
    } else {
      return (0, _utils.simplifyNumber)(n);
    }
  });
  containers.axisGroup = containers.data.append('g').attr('transform', (0, _utils.translator)(0, dimensions.totalHeight)).call(xAxis);
  xAxisMods();
}

function placeCountryLabels() {
  var countryLabels = containers.country.selectAll('text').data(data, function (d) {
    return d.country;
  });
  var timeoutForAdd = 0;

  if (countryLabels.size()) {
    timeoutForAdd = 500;
    countryLabels.transition().duration(addRemoveDuration).attr('transform', function (d, i) {
      return (0, _utils.translator)(0, i * dimensions.rowHeight);
    }).ease();
  }

  countryLabels.exit().remove();
  setTimeout(function () {
    countryLabels.enter().append('text').attr('transform', function (d, i) {
      return (0, _utils.translator)(0, i * dimensions.rowHeight);
    }).text(function (d) {
      return d.country;
    }).attr('y', dimensions.rowHeight / 2 + 8).attr('transform', function (d, i) {
      return (0, _utils.translator)(0, i * dimensions.rowHeight);
    }).attr('x', 20).attr('font-size', 16);
  }, timeoutForAdd);
}

function placeGdpFigures() {
  var gdpText = containers.gdp.selectAll('text').data(data, function (d) {
    return d.country;
  });
  var timeoutForAdd = 0;

  if (gdpText.size()) {
    timeoutForAdd = 500;
    gdpText.transition().duration(addRemoveDuration).attr('transform', function (d, i) {
      return (0, _utils.translator)(0, i * dimensions.rowHeight);
    }).ease();
  }

  gdpText.exit().remove();
  setTimeout(function () {
    gdpText.enter().append('text').attr('transform', function (d, i) {
      return (0, _utils.translator)(0, i * dimensions.rowHeight);
    }).text(function (d) {
      return d.receipts_gdp;
    }).attr('y', dimensions.rowHeight / 2 + 8).attr('transform', function (d, i) {
      return (0, _utils.translator)(0, i * dimensions.rowHeight);
    }).attr('x', 50).attr('font-size', 16);
  }, timeoutForAdd);
}

function placeLegends() {
  var keys = Object.keys(map).sort(),
      legendSpacing = 240;
  containers.legends.selectAll('rect.legend').data(keys).enter().append('rect').classed('legend', true).attr('width', dimensions.barHeight).attr('height', dimensions.barHeight).attr('x', function (d, i) {
    return dimensions.countryColumnWidth + 20 + i * legendSpacing;
  }).attr('y', 15).attr('stroke', function (d) {
    return map[d].stroke;
  }).attr('fill', function (d) {
    return map[d].fill;
  });
  containers.legends.selectAll('text.legend').data(keys).enter().append('text').text(function (d) {
    return map[d].legend;
  }).attr('font-size', 12).classed('legend', true).attr('x', function (d, i) {
    return dimensions.countryColumnWidth + dimensions.barHeight + 30 + i * legendSpacing;
  }).attr('y', 27);
  containers.legends.append('text').text('Federal Income as').attr('text-anchor', 'middle').attr('x', 1200 - dimensions.gdpColumnWidth / 2).attr('y', 26).attr('font-size', 12).append('tspan').text('Percent of GDP').attr('dy', 12).attr('x', 1200 - dimensions.gdpColumnWidth / 2);
}

function sizeSvg(transitionTime, delay) {
  delay = delay || 0;
  (0, _utils.establishContainer)().transition().delay(delay).duration(transitionTime).attr('height', dimensions.header + data.length * dimensions.rowHeight + 30);
}

function setData() {
  data = _selectedCountryManager.selectedCountries.list.map(function (c) {
    if (_.masterData.indexed[c]) {
      return _.masterData.indexed[c];
    } else {
      console.warn('no data for ' + c);
    }
  }).filter(function (r) {
    return r;
  });
  dimensions.totalHeight = dimensions.rowHeight * data.length;
}

function repositionXAxis() {
  containers.axisGroup.transition().duration(addRemoveDuration).attr('transform', (0, _utils.translator)(0, dimensions.totalHeight)).ease();
  containers.axisGroup.selectAll('.tick line').transition().duration(addRemoveDuration).attr('y1', 0 - dimensions.totalHeight);
  containers.chart.selectAll('.drop-shadow-base').transition().duration(addRemoveDuration).attr('height', dimensions.totalHeight);
}

function rescale() {
  var previousMax = scales.x.domain()[1];
  setScales();

  if (previousMax === scales.x.domain()[1]) {
    return;
  }

  xAxis.scale(scales.x);
  containers.data.selectAll('g.bar-group').each(function (data) {
    var group = d3.select(this),
        keys = ['gdp', 'income'],
        labels = group.selectAll('text'),
        bars = group.selectAll('rect');
    bars.transition().duration(addRemoveDuration).attr('width', function (d) {
      return scales.x(data[map[d].data]);
    }).ease();
    labels.transition().duration(addRemoveDuration).attr('x', function (d) {
      return scales.x(data[d]) + 20;
    });
  });
  containers.axisGroup.transition().duration(addRemoveDuration).call(xAxis).ease();
  xAxisMods();
  return true;
}

function refreshData() {
  var action = _selectedCountryManager.selectedCountries.lastUpdate.action;
  var duration = addRemoveDuration;
  setData();

  if (action === 'add') {
    sizeSvg(addRemoveDuration);
    duration = rescale() ? duration : 0;
    setTimeout(function () {
      repositionXAxis();
      addBarGroups();
      placeCountryLabels();
      placeGdpFigures();
      (0, _ink.placeHorizontalStripes)(data.length);
    }, duration);
  } else {
    addBarGroups();
    placeCountryLabels();
    placeGdpFigures();
    duration = rescale() ? duration : 0;
    setTimeout(function () {
      sizeSvg(300, addRemoveDuration);
      repositionXAxis();
      (0, _ink.placeHorizontalStripes)(data.length);
    }, duration);
  }
}

function chartInit(container) {
  setData();
  sizeSvg(800);
  establishContainers(container);
  (0, _ink.ink)(containers, dimensions, data.length);
  setScales();
  drawXAxis();
  addBarGroups();
  placeCountryLabels();
  placeGdpFigures();
  placeLegends();
  (0, _selectCountry.selectCountryInit)();
}

/***/ }),

/***/ "./src/receipts/sect-4/data.js":
/*!*************************************!*\
  !*** ./src/receipts/sect-4/data.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareData = prepareData;

function prepareData(_data) {
  var data = {
    indexed: {},
    countryList: []
  };

  _data.forEach(function (r) {
    data.countryList.push(r.country);
    data.indexed[r.country] = r;
  });

  return data;
}

/***/ }),

/***/ "./src/receipts/sect-4/dropShadow.js":
/*!*******************************************!*\
  !*** ./src/receipts/sect-4/dropShadow.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDropShadow = initDropShadow;

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils.js");

// with thanks to http://bl.ocks.org/cpbotha/5200394
function initDropShadow() {
  var svg = (0, _utils.establishContainer)();
  var defs = svg.append('defs');
  var filter = defs.append('filter').attr('id', 'drop-shadow').attr('height', 1.1);
  filter.append('feGaussianBlur').attr('in', 'SourceAlpha').attr('stdDeviation', 4).attr('result', 'blur');
  filter.append('feOffset').attr('in', 'blur').attr('dx', 0).attr('dy', 0).attr('result', 'offsetBlur');
  var feMerge = filter.append('feMerge');
  feMerge.append('feMergeNode').attr('in', 'offsetBlur');
  feMerge.append('feMergeNode').attr('in', 'SourceGraphic');
}

/***/ }),

/***/ "./src/receipts/sect-4/iconGenerators.js":
/*!***********************************************!*\
  !*** ./src/receipts/sect-4/iconGenerators.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addButtonIcon = addButtonIcon;
exports.addXIcon = addXIcon;
exports.addSearchIcon = addSearchIcon;

function addButtonIcon(svg) {
  svg.append('circle').attr('r', 9).attr('stroke', 'white').attr('stroke-width', 1).attr('fill', 'none').attr('cx', 10).attr('cy', 10);
  svg.append('line').attr('x1', 5).attr('x2', 15).attr('y1', 10).attr('y2', 10).attr('stroke', 'white').attr('stroke-width', 1);
  svg.append('line').attr('x1', 10).attr('x2', 10).attr('y1', 5).attr('y2', 15).attr('stroke', 'white').attr('stroke-width', 1);
}

function addXIcon(svg) {
  svg.attr('width', 10).attr('height', 10);
  svg.append('line').attr('x1', 0).attr('x2', 10).attr('y1', 0).attr('y2', 10).attr('stroke', 'white').attr('stroke-width', 1);
  svg.append('line').attr('x1', 0).attr('x2', 10).attr('y1', 10).attr('y2', 0).attr('stroke', 'white').attr('stroke-width', 1);
}

function addSearchIcon(svg) {
  var lineColor = '#555';
  svg.attr('width', 20).attr('height', 20);
  svg.append('circle').attr('r', 7).attr('stroke', lineColor).attr('stroke-width', 1).attr('fill', 'none').attr('cx', 8).attr('cy', 8);
  svg.append('line').attr('x1', 13).attr('x2', 19).attr('y1', 13).attr('y2', 19).attr('stroke', lineColor).attr('stroke-width', 1);
}

/***/ }),

/***/ "./src/receipts/sect-4/index.js":
/*!**************************************!*\
  !*** ./src/receipts/sect-4/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultCountries = exports.svg = exports.masterData = void 0;

var _incomeCountryComparison = _interopRequireDefault(__webpack_require__(/*! ../../../public/csv/income-country-comparison.csv */ "./public/csv/income-country-comparison.csv"));

var _data = __webpack_require__(/*! ./data */ "./src/receipts/sect-4/data.js");

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var _chart = __webpack_require__(/*! ./chart */ "./src/receipts/sect-4/chart.js");

var _selectedCountryManager = __webpack_require__(/*! ./selectedCountryManager */ "./src/receipts/sect-4/selectedCountryManager.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var masterData = (0, _data.prepareData)(_incomeCountryComparison.default),
    svg = (0, _utils.establishContainer)(),
    defaultCountries = ['United States', 'China', 'Japan', 'Germany', 'United Kingdom', 'India', 'France'];
exports.defaultCountries = defaultCountries;
exports.svg = svg;
exports.masterData = masterData;

_selectedCountryManager.selectedCountries.set(defaultCountries);

(0, _chart.chartInit)(svg);

/***/ }),

/***/ "./src/receipts/sect-4/ink.js":
/*!************************************!*\
  !*** ./src/receipts/sect-4/ink.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeHorizontalStripes = placeHorizontalStripes;
exports.ink = ink;

var _dropShadow = __webpack_require__(/*! ./dropShadow */ "./src/receipts/sect-4/dropShadow.js");

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var d3 = {
  range: _d3Array.range
};
var containers, dimensions;

function buildCountryBox() {
  containers.country.append('rect').attr('class', 'drop-shadow-base').attr('width', dimensions.countryColumnWidth).attr('height', dimensions.totalHeight).attr('fill', 'white').attr('stroke', '#eee').style('filter', 'url(#drop-shadow)');
}

function buildGdpBox() {
  containers.gdp.append('rect').attr('class', 'drop-shadow-base').attr('width', dimensions.gdpColumnWidth).attr('height', dimensions.totalHeight).attr('fill', 'white').attr('stroke', '#eee').style('filter', 'url(#drop-shadow)');
}

function placeHorizontalStripes(dataLength) {
  var stripes;
  stripes = containers.stripes.selectAll('line').data(d3.range(dataLength + 1), function (d) {
    return d;
  });
  stripes.exit().remove();
  stripes.enter().append('line').attr('x1', 0).attr('y1', function (d) {
    return d * dimensions.rowHeight;
  }).attr('x2', 1200).attr('y2', function (d) {
    return d * dimensions.rowHeight;
  }).attr('stroke', 'rgba(100,100,100,0.1)').attr('stroke-width', 1);
}

function placeMask() {
  // clip the drop shadow
  if (containers.legends.selectAll('rect.mask').size()) {
    return;
  }

  containers.legends.append('rect').classed('mask', true).attr('width', 1200).attr('height', dimensions.header).attr('stroke', 'none').attr('fill', 'white');
}

function ink(_containers, _dimensions, dataLength) {
  containers = _containers;
  dimensions = _dimensions;
  containers.stripes = containers.chart.append('g').attr('transform', (0, _utils.translator)(0, dimensions.header));
  (0, _dropShadow.initDropShadow)();
  buildCountryBox();
  buildGdpBox();
  placeHorizontalStripes(dataLength);
  placeMask();
}

/***/ }),

/***/ "./src/receipts/sect-4/selectCountry.js":
/*!**********************************************!*\
  !*** ./src/receipts/sect-4/selectCountry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCountryInit = selectCountryInit;

__webpack_require__(/*! ./selectCountry.scss */ "./src/receipts/sect-4/selectCountry.scss");

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var _chart = __webpack_require__(/*! ./chart */ "./src/receipts/sect-4/chart.js");

var _ = __webpack_require__(/*! . */ "./src/receipts/sect-4/index.js");

var _iconGenerators = __webpack_require__(/*! ./iconGenerators */ "./src/receipts/sect-4/iconGenerators.js");

var _selectedCountryManager = __webpack_require__(/*! ./selectedCountryManager */ "./src/receipts/sect-4/selectedCountryManager.js");

var d3 = {
  select: _d3Selection.select
};
var parentDiv, input, listDiv, trigger;

function createTrigger() {
  var svg;
  trigger = parentDiv.append('button').classed('trigger-button', true).on('click', function () {
    parentDiv.classed('active', function () {
      if (parentDiv.classed('active')) {
        return false;
      } else {
        setTimeout(function () {
          input.node().focus();
        }, 10);
        return true;
      }
    });
  });
  trigger.node().innerText = "Add/Remove Countries";
  svg = trigger.append('svg').attr('width', 20).attr('height', 20);
  (0, _iconGenerators.addButtonIcon)(svg);
}

function establishInupt() {
  var wrapper = listDiv.append('div').classed('search-wrapper', true);
  var icon;
  input = wrapper.append('input').attr('placeholder', 'search for a country').on('input', function () {
    listAvailableCountries(this.value);
  });
  icon = wrapper.append('svg');
  (0, _iconGenerators.addSearchIcon)(icon);
}

function listselectedCountries() {
  var ul = listDiv.select('ul');
  var items, svg;
  ul.selectAll('*').remove();
  items = ul.selectAll('li').data(_selectedCountryManager.selectedCountries.list).enter().append('li').on('click', removeCountry).each(function (d) {
    this.innerText = d;
  });
  svg = items.append('svg');
  (0, _iconGenerators.addXIcon)(svg);
}

function getAvailableCountries(filterStr) {
  if (filterStr) {
    filterStr = filterStr.toLowerCase();
  }

  return _.masterData.countryList.filter(function (c) {
    return c && _selectedCountryManager.selectedCountries.list.indexOf(c) === -1 && (!filterStr || c.toLowerCase().indexOf(filterStr) !== -1);
  }).sort();
}

function addCountry(d) {
  _selectedCountryManager.selectedCountries.add(d);

  onListUpdated();
}

function removeCountry(d) {
  _selectedCountryManager.selectedCountries.remove(d);

  onListUpdated();
}

function listAvailableCountries(filterStr) {
  var list = getAvailableCountries(filterStr),
      availableContainer = listDiv.select('.available-container'),
      max = 10;
  var more, remainder;

  if (list.length > max) {
    more = true;
    remainder = list.length - max;
    list.length = max;
  }

  availableContainer.selectAll('*').remove();
  availableContainer.selectAll('div.available').data(list).enter().append('div').classed('available', true).on('click', addCountry).each(function (d) {
    this.innerText = d;
    d3.select(this).append('button').classed('add-button', true).node().innerText = 'add';
  });

  if (more) {
    availableContainer.append('div').classed('see-more', true).each(function () {
      this.innerText = "".concat(remainder, " more countries are available. Search to find more.");
    });
  }
}

function createListDiv() {
  listDiv = parentDiv.append('div').classed('list-div', true);
  listDiv.append('ul');
  listDiv.append('hr');
  establishInupt();
  listDiv.append('div').classed('available-container', true);
  listselectedCountries();
  listAvailableCountries();
}

function onListUpdated() {
  parentDiv.classed('active', false);
  input.node().value = null;
  listselectedCountries();
  listAvailableCountries();
  (0, _chart.refreshData)();
}

function selectCountryInit() {
  var svg = (0, _utils.establishContainer)();
  parentDiv = document.createElement('div');
  svg.node().parentNode.insertBefore(parentDiv, svg.node());
  parentDiv = d3.select(parentDiv).classed('select-country', true);
  createTrigger();
  createListDiv();
}

/***/ }),

/***/ "./src/receipts/sect-4/selectCountry.scss":
/*!************************************************!*\
  !*** ./src/receipts/sect-4/selectCountry.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/receipts/sect-4/selectedCountryManager.js":
/*!*******************************************************!*\
  !*** ./src/receipts/sect-4/selectedCountryManager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedCountries = void 0;
var selected = [],
    lastUpdate = {};

function set(arr) {
  selected.length = 0;
  arr.forEach(function (c) {
    selected.push(c);
  });
  selected.sort();
}

function remove(country) {
  var i = selected.indexOf(country);
  selected.splice(i, 1);
  lastUpdate.country = country;
  lastUpdate.action = 'remove';
}

function add(country) {
  selected.push(country);
  selected.sort();
  lastUpdate.country = country;
  lastUpdate.action = 'add';
}

var selectedCountries = {
  set: set,
  remove: remove,
  add: add,
  list: selected,
  lastUpdate: lastUpdate
};
exports.selectedCountries = selectedCountries;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementBox = getElementBox;
exports.translator = translator;
exports.getTransform = getTransform;
exports.establishContainer = establishContainer;
exports.simplifyBillions = simplifyBillions;
exports.simplifyNumber = simplifyNumber;
exports.wordWrap = wordWrap;
exports.initDropShadow = initDropShadow;

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");

var d3 = {
  select: _d3Selection.select
};

function getElementBox(d3Selection) {
  var rect = d3Selection.node().getBoundingClientRect();
  return {
    width: Math.ceil(rect.width),
    height: Math.ceil(rect.height),
    right: Math.ceil(rect.right)
  };
}

function translator(x, y) {
  return "translate(".concat(x, ", ").concat(y, ")");
}

function getTransform(d3Selection) {
  var re = /(\d)+/g;
  var originalTransform = d3Selection.attr('transform').match(re);
  return {
    x: Number(originalTransform[0]),
    y: Number(originalTransform[1])
  };
}

function establishContainer(height) {
  var viz = d3.select('#viz');
  var svg = viz.select('svg.main');
  height = height || 400;

  if (svg.size() === 0) {
    return viz.append('svg').classed('main', true).attr('shape-rendering', 'geometricPrecision').attr('height', height).attr('width', '1200px');
  } else {
    return svg;
  }
}

function simplifyBillions(n) {
  var billion = 1000000000;
  return "$".concat(Math.round(n / billion * 10) / 10, " B");
}

function simplifyNumber(n) {
  var trillion = 1000000000000,
      billion = 1000000000,
      million = 1000000;
  var simplifier = million,
      letter = 'M';

  if (n > trillion) {
    simplifier = trillion;
    letter = 'T';
  } else if (n > billion) {
    simplifier = billion;
    letter = 'B';
  }

  return "$".concat(Math.round(n / simplifier * 10) / 10, " ").concat(letter);
}

function wordWrap(text, maxWidth) {
  var words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1,
      y = text.attr("y"),
      tspan;
  tspan = text.text(null).append("tspan").attr("x", 0); // .attr("y", y);
  // .attr("dy", dy + "em");

  while (words.length > 0) {
    word = words.pop();
    line.push(word);
    tspan.text(line.join(" "));

    if (tspan.node().getComputedTextLength() > maxWidth) {
      line.pop();
      tspan.text(line.join(" "));
      line = [word];
      tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", lineHeight + "em").text(word);
    }
  }
}

function initDropShadow() {
  var svg = establishContainer(),
      filter = svg.append('defs').append('filter').attr('id', 'drop1');
  filter.append('feDropShadow').attr('dx', 0).attr('dy', 0).attr('stdDeviation', 5).attr('flood-opacity', 0.2);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9hc2NlbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvY3Jvc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9kZXNjZW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZGV2aWF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZXh0ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvaGlzdG9ncmFtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tYXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tZWFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWVkaWFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9wYWlycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3Blcm11dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9xdWFudGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvc2Nhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3NodWZmbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9zdW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90aHJlc2hvbGQvZnJlZWRtYW5EaWFjb25pcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RocmVzaG9sZC9zY290dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RocmVzaG9sZC9zdHVyZ2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdGlja3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90cmFuc3Bvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy92YXJpYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3ppcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXhpcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXhpcy9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2F4aXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xsZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xsZWN0aW9uL3NyYy9lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xsZWN0aW9uL3NyYy9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xsZWN0aW9uL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWNvbGxlY3Rpb24vc3JjL25lc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWNvbGxlY3Rpb24vc3JjL3NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtY29sbGVjdGlvbi9zcmMvdmFsdWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvY3ViZWhlbGl4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvbGFiLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZGlzcGF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9kaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2N1YmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9lbGFzdGljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9leHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2xpbmVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvcG9seS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvcXVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvc2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZGVmYXVsdExvY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9leHBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXREZWNpbWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdEdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdE51bWVyYWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFByZWZpeEF1dG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0Um91bmRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRTcGVjaWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0VHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uRml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uUHJlZml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL3ByZWNpc2lvblJvdW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYmFzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9iYXNpc0Nsb3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9jdWJlaGVsaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvaGNsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvaHNsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvbGFiLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvbnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcGllY2V3aXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcXVhbnRpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yZ2IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9kZWNvbXBvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3pvb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9iYW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9jb250aW51b3VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvZGl2ZXJnaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9saW5lYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9uaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvbnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvb3JkaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3Bvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3F1YW50aWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvcXVhbnRpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9zZXF1ZW50aWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvdGhyZXNob2xkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvdGlja0Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy91dGNUaW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbG9jYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9tb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9wb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0QWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hcHBlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NsYXNzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXR1bS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VtcHR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZXhpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5zZXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9sb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yYWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmVtb3ZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3BhcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RvckFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zb3VyY2VFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy90b3VjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy90b3VjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGltZS1mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUtZm9ybWF0L3NyYy9kZWZhdWx0TG9jYWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lLWZvcm1hdC9zcmMvaXNvRm9ybWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lLWZvcm1hdC9zcmMvaXNvUGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUtZm9ybWF0L3NyYy9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL2RheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL2hvdXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL2ludGVydmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9taWxsaXNlY29uZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvbWludXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9tb250aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvc2Vjb25kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy91dGNEYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3V0Y0hvdXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3V0Y01pbnV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvdXRjTW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3V0Y1dlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3V0Y1llYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3dlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3llYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy90aW1lb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL2FjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvaW50ZXJydXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3NlbGVjdGlvbi9pbnRlcnJ1cHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3NlbGVjdGlvbi90cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vYXR0clR3ZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2RlbGF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2R1cmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2ludGVycG9sYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zY2hlZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2VsZWN0QWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zdHlsZVR3ZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY3N2L2luY29tZS1jb3VudHJ5LWNvbXBhcmlzb24uY3N2Iiwid2VicGFjazovLy8uL3NyYy9yZWNlaXB0cy9zZWN0LTQvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2VpcHRzL3NlY3QtNC9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNlaXB0cy9zZWN0LTQvZHJvcFNoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjZWlwdHMvc2VjdC00L2ljb25HZW5lcmF0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNlaXB0cy9zZWN0LTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2VpcHRzL3NlY3QtNC9pbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2VpcHRzL3NlY3QtNC9zZWxlY3RDb3VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNlaXB0cy9zZWN0LTQvc2VsZWN0Q291bnRyeS5zY3NzPzZlNTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2VpcHRzL3NlY3QtNC9zZWxlY3RlZENvdW50cnlNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJkMyIsInNlbGVjdCIsInNlbGVjdEFsbCIsIm1pbiIsIm1heCIsInNjYWxlTGluZWFyIiwiYXhpc0JvdHRvbSIsInRyYW5zaXRpb24iLCJkaW1lbnNpb25zIiwicm93SGVpZ2h0IiwiYmFySGVpZ2h0IiwiY291bnRyeUNvbHVtbldpZHRoIiwiZ2RwQ29sdW1uV2lkdGgiLCJoZWFkZXIiLCJiYXJZT2Zmc2V0IiwiYWRkUmVtb3ZlRHVyYXRpb24iLCJzY2FsZXMiLCJjb250YWluZXJzIiwibWFwIiwiaW5jb21lIiwiZGF0YSIsImNsYXNzIiwic3Ryb2tlIiwiZmlsbCIsInlPZmZzZXQiLCJsZWdlbmQiLCJnZHAiLCJ4QXhpcyIsImRhdGFXaWR0aCIsImVzdGFibGlzaENvbnRhaW5lcnMiLCJjb250YWluZXIiLCJjaGFydCIsImFwcGVuZCIsImF0dHIiLCJjb3VudHJ5IiwibGVnZW5kcyIsImNsYXNzZWQiLCJhZGRCYXJMYWJlbHMiLCJnIiwia2V5cyIsInRleHQiLCJrIiwiZW50ZXIiLCJkIiwieCIsImkiLCJkdXJhdGlvbiIsImVhc2UiLCJhZGRCYXJHcm91cHMiLCJncm91cHMiLCJzaXplIiwiZXhpdCIsInJlbW92ZSIsImVhY2giLCJkcmF3QmFycyIsInRyYW5zaXRpb25EdXJhdGlvbiIsImdyb3VwIiwiYmFycyIsInNldFRpbWVvdXQiLCJzZXRTY2FsZXMiLCJyZWNlaXB0c1ZhbHMiLCJyIiwicmVjZWlwdHMiLCJnZHBWYWxzIiwiY29uY2F0IiwiZG9tYWluIiwibmljZSIsInJhbmdlIiwieEF4aXNNb2RzIiwiYXhpc0dyb3VwIiwidG90YWxIZWlnaHQiLCJkcmF3WEF4aXMiLCJ0aWNrRm9ybWF0IiwibiIsImNhbGwiLCJwbGFjZUNvdW50cnlMYWJlbHMiLCJjb3VudHJ5TGFiZWxzIiwidGltZW91dEZvckFkZCIsInBsYWNlR2RwRmlndXJlcyIsImdkcFRleHQiLCJyZWNlaXB0c19nZHAiLCJwbGFjZUxlZ2VuZHMiLCJPYmplY3QiLCJzb3J0IiwibGVnZW5kU3BhY2luZyIsInNpemVTdmciLCJ0cmFuc2l0aW9uVGltZSIsImRlbGF5IiwibGVuZ3RoIiwic2V0RGF0YSIsInNlbGVjdGVkQ291bnRyaWVzIiwibGlzdCIsImMiLCJtYXN0ZXJEYXRhIiwiaW5kZXhlZCIsImNvbnNvbGUiLCJ3YXJuIiwiZmlsdGVyIiwicmVwb3NpdGlvblhBeGlzIiwicmVzY2FsZSIsInByZXZpb3VzTWF4Iiwic2NhbGUiLCJsYWJlbHMiLCJyZWZyZXNoRGF0YSIsImFjdGlvbiIsImxhc3RVcGRhdGUiLCJjaGFydEluaXQiLCJwcmVwYXJlRGF0YSIsIl9kYXRhIiwiY291bnRyeUxpc3QiLCJmb3JFYWNoIiwicHVzaCIsImluaXREcm9wU2hhZG93Iiwic3ZnIiwiZGVmcyIsImZlTWVyZ2UiLCJhZGRCdXR0b25JY29uIiwiYWRkWEljb24iLCJhZGRTZWFyY2hJY29uIiwibGluZUNvbG9yIiwiQ291bnRyeURhdGEiLCJkZWZhdWx0Q291bnRyaWVzIiwic2V0IiwiYnVpbGRDb3VudHJ5Qm94Iiwic3R5bGUiLCJidWlsZEdkcEJveCIsInBsYWNlSG9yaXpvbnRhbFN0cmlwZXMiLCJkYXRhTGVuZ3RoIiwic3RyaXBlcyIsInBsYWNlTWFzayIsImluayIsIl9jb250YWluZXJzIiwiX2RpbWVuc2lvbnMiLCJwYXJlbnREaXYiLCJpbnB1dCIsImxpc3REaXYiLCJ0cmlnZ2VyIiwiY3JlYXRlVHJpZ2dlciIsIm9uIiwibm9kZSIsImZvY3VzIiwiaW5uZXJUZXh0IiwiZXN0YWJsaXNoSW51cHQiLCJ3cmFwcGVyIiwiaWNvbiIsImxpc3RBdmFpbGFibGVDb3VudHJpZXMiLCJ2YWx1ZSIsImxpc3RzZWxlY3RlZENvdW50cmllcyIsInVsIiwiaXRlbXMiLCJyZW1vdmVDb3VudHJ5IiwiZ2V0QXZhaWxhYmxlQ291bnRyaWVzIiwiZmlsdGVyU3RyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiYWRkQ291bnRyeSIsImFkZCIsIm9uTGlzdFVwZGF0ZWQiLCJhdmFpbGFibGVDb250YWluZXIiLCJtb3JlIiwicmVtYWluZGVyIiwiY3JlYXRlTGlzdERpdiIsInNlbGVjdENvdW50cnlJbml0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsInNlbGVjdGVkIiwiYXJyIiwic3BsaWNlIiwiZ2V0RWxlbWVudEJveCIsImQzU2VsZWN0aW9uIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiTWF0aCIsImNlaWwiLCJoZWlnaHQiLCJyaWdodCIsInRyYW5zbGF0b3IiLCJ5IiwiZ2V0VHJhbnNmb3JtIiwicmUiLCJvcmlnaW5hbFRyYW5zZm9ybSIsIm1hdGNoIiwiTnVtYmVyIiwiZXN0YWJsaXNoQ29udGFpbmVyIiwidml6Iiwic2ltcGxpZnlCaWxsaW9ucyIsImJpbGxpb24iLCJyb3VuZCIsInNpbXBsaWZ5TnVtYmVyIiwidHJpbGxpb24iLCJtaWxsaW9uIiwic2ltcGxpZmllciIsImxldHRlciIsIndvcmRXcmFwIiwibWF4V2lkdGgiLCJ3b3JkcyIsInNwbGl0IiwicmV2ZXJzZSIsIndvcmQiLCJsaW5lIiwibGluZU51bWJlciIsImxpbmVIZWlnaHQiLCJ0c3BhbiIsInBvcCIsImpvaW4iLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRm1EO0FBQ3RCO0FBQ0Q7QUFDSDtBQUNLO0FBQ0Q7QUFDSDtBQUNHO0FBQ2dCO0FBQ1g7QUFDRTtBQUNiO0FBQ0M7QUFDRTtBQUNEO0FBQ0Y7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTs7QUFFQTtBQUNBO0FBQ0Esc0hBQXFFLFNBQVM7QUFDOUUsMERBQTBELFNBQVM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NDOzs7Ozs7Ozs7Ozs7Ozs7QUNMRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FB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QUFDQTs7QUFFQTtBQUNBLDBEQUEwRCxnQkFBZ0IsRUFBRTs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ptQztBQUNJO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZOOztBQUV2Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCLDBCQUEwQixFQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BWdUI7QUFDMEI7QUFDeEI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1REQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUdUI7QUFDUTtBQUNOOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNB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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjZEO0FBQzdCO0FBQ0c7QUFDRDtBQUNDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtGQUErRjtBQUMvRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SUFBd0Y7QUFDeEY7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURDOztBQUlBOztBQUlBOztBQUlBOztBQUtBOztBQUtBOztBQUlBOztBQUlBOztBQUlBOztBQUlBOztBQUlBOztBQUlBOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUNyREQ7QUFBQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE4Qyx5QkFBeUIsRUFBRTtBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRGU7QUFDRDtBQUNJOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdDa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJlO0FBQ0Q7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENpQjtBQUM4RTs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjJCO0FBQ2dCO0FBQ3VEO0FBQy9FO0FBQ1A7QUFDOEQ7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFvQyxhQUFhLEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJaUI7QUFDQztBQUN3RTs7QUFFMUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ0M7QUFDRjtBQUNFO0FBQ0Y7QUFDSTtBQUNDO0FBQ0M7QUFDTDtBQUNHO0FBQ0E7QUFDRDtBQUNHO0FBQ0g7QUFDSDtBQUNFO0FBQ0Q7QUFDQzs7Ozs7Ozs7Ozs7Ozs7QUNqQjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ2M7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVGQUE4QyxnRkFBdUM7QUFDckY7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWndCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSw0QkFBNEI7QUFDeEM7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzduQkM7O0FBT0E7O0FBT0E7O0FBS0E7O0FBS0E7O0FBS0E7O0FBbUJBOztBQUtBOztBQUtBOztBQUtBOztBQUtBOztBQUtBOztBQW1CQTs7QUFLQTs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0Q7QUFDb0M7O0FBRXBDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ3FDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQsU0FBUztBQUNULG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDhCQUE4QjtBQUMzRCw2QkFBNkIsMENBQTBDLEVBQUU7QUFDekU7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ3VCOztBQUV2QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7K0RBRUQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUN1Qjs7QUFFdkI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7OytEQUVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDb0I7O0FBRXBCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOzsrREFFRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ3FCOztBQUVyQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ3VCOztBQUV2QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7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Ozs7OztBQ0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQzFCO0FBQ3VCO0FBQ1g7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDJEQUEyRCxPQUFPO0FBQ2xFLDhEQUE4RCxPQUFPO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekN3RDtBQUN0QztBQUNDO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekVrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0JrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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QUUsNEdBQTRHLEVBQUUsNEdBQTRHLEVBQUUsMkdBQTJHLEVBQUUsNkdBQTZHLEVBQUUsNkdBQTZHLEVBQUUseUdBQXlHLEVBQUUsNkdBQTZHLEVBQUUsNEdBQTRHLEVBQUUseUhBQXlILEVBQUUsNEdBQTRHLEVBQUUsMkdBQTJHLEVBQUUsaUhBQWlILEVBQUUsOEdBQThHLEVBQUUsNEdBQTRHLEVBQUUsNkdBQTZHLEVBQUUsOEdBQThHLEVBQUUsNkdBQTZHLEVBQUUsZ0hBQWdILEVBQUUsNkdBQTZHLEVBQUUsNkdBQTZHLEVBQUUseUdBQXlHLEVBQUUsNkdBQTZHLEVBQUUsK0dBQStHLEVBQUUsMEdBQTBHLEVBQUUsNEdBQTRHLEVBQUUsNkdBQTZHLEVBQUUsbUhBQW1ILEVBQUUsNEdBQTRHLEVBQUUseUdBQXlHLEVBQUUsK0dBQStHLEVBQUUsZ0hBQWdILEVBQUUsMkdBQTJHLEVBQUUseUdBQXlHLEVBQUUsNEdBQTRHLEVBQUUsMEdBQTBHLEVBQUUsK0dBQStHLEVBQUUsNEdBQTRHLEVBQUUsMkdBQTJHLEVBQUUsMkdBQTJHLEVBQUUseUdBQXlHLEVBQUUsNEdBQTRHLEVBQUUsNEdBQTRHLEVBQUUsK0dBQStHLEVBQUUsNEdBQTRHLEVBQUUsNEdBQTRHLEVBQUUsd0dBQXdHLEVBQUUsNkdBQTZHLEVBQUUsNEdBQTRHLEVBQUUsc0hBQXNILEVBQUUsNEdBQTRHLEVBQUUseUdBQXlHLEVBQUUsd0dBQXdHLEVBQUUsMEdBQTBHLEVBQUUsOEdBQThHLEVBQUUseUdBQXlHLEVBQUUsNkdBQTZHLEVBQUUsNEdBQTRHLEVBQUUsMkdBQTJHLEVBQUUsMkdBQTJHLEVBQUUsMkdBQTJHLEVBQUUsMkdBQTJHLEVBQUUsMkdBQTJHLEVBQUUseUdBQXlHLEVBQUUseUdBQXlHLEVBQUUsNEdBQTRHLEVBQUUsOEdBQThHLEVBQUUsdUdBQXVHLEVBQUUsNkdBQTZHLEVBQUUsOEdBQThHLEVBQUUsMEdBQTBHLEVBQUUsNkdBQTZHLEVBQUUsZ0hBQWdILEVBQUUsMEdBQTBHLEVBQUUseUdBQXlHLEVBQUUsMEdBQTBHLEVBQUUsb0lBQW9JLEVBQUUsMEdBQTBHLEVBQUUsMkdBQTJHLEVBQUUsMEdBQTBHLEVBQUUsMkdBQTJHLEVBQUUsMEdBQTBHLEVBQUUseUdBQXlHLEVBQUUseUdBQXlHLEVBQUUsOEdBQThHLEVBQUUsd0dBQXdHLEVBQUUsMEdBQTBHLEVBQUUsMkdBQTJHLEVBQUUsd0dBQXdHLEVBQUUsMkdBQTJHLEVBQUUsc0hBQXNILEVBQUUseUdBQXlHLEVBQUUsbUhBQW1ILEVBQUUsNkdBQTZHLEVBQUUseUdBQXlHLEVBQUUseUhBQXlILEVBQUUsMEdBQTBHLEVBQUUsMkdBQTJHLEVBQUUsK0dBQStHLEVBQUUsdUdBQXVHLEVBQUUsMEdBQTBHLEVBQUUsc0dBQXNHLEVBQUUsMEdBQTBHLEVBQUUsMEdBQTBHLEVBQUUsd0dBQXdHLEVBQUUsNEdBQTRHLEVBQUUsNEdBQTRHLEVBQUUsNEdBQTRHLEVBQUUseUdBQXlHLEVBQUUsMEdBQTBHLEVBQUUsOEdBQThHLEVBQUUsd0dBQXdHLEVBQUUsb0hBQW9ILEVBQUUsNkdBQTZHLEVBQUUsK0dBQStHLEVBQUUseUdBQXlHLEVBQUUsMEdBQTBHLEVBQUUsNkdBQTZHLEVBQUUsMkdBQTJHLEVBQUUsNEdBQTRHLEVBQUUseUdBQXlHLEVBQUUsc0dBQXNHLEVBQUUsK0dBQStHLEVBQUUsdUdBQXVHLEVBQUUsd0dBQXdHLEVBQUUsd0hBQXdILEVBQUUsdUdBQXVHLEVBQUUseUdBQXlHLEVBQUUsdUdBQXVHLEVBQUUsNEdBQTRHLEVBQUUsd0dBQXdHLEVBQUUsNEdBQTRHLEVBQUUsdUdBQXVHLEVBQUUsdUdBQXVHLEVBQUUsd0dBQXdHLEVBQUUsOEdBQThHLEVBQUUseUdBQXlHLEVBQUUsMEdBQTBHLEVBQUUscUdBQXFHLEVBQUUsa0hBQWtILEVBQUUsc0dBQXNHLEVBQUUsNEdBQTRHLEVBQUUsc0dBQXNHLEVBQUUsNEdBQTRHLEVBQUUsMEdBQTBHLEVBQUUsMEdBQTBHLEVBQUUsK0dBQStHLEVBQUUsNkdBQTZHLEVBQUUsdUdBQXVHLEVBQUUsd0dBQXdHLEVBQUUseUdBQXlHLEVB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dCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3JlY2VpcHRzL3NlY3QtNC9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBiaXNlY3QsIGJpc2VjdFJpZ2h0LCBiaXNlY3RMZWZ0fSBmcm9tIFwiLi9zcmMvYmlzZWN0XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYXNjZW5kaW5nfSBmcm9tIFwiLi9zcmMvYXNjZW5kaW5nXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYmlzZWN0b3J9IGZyb20gXCIuL3NyYy9iaXNlY3RvclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNyb3NzfSBmcm9tIFwiLi9zcmMvY3Jvc3NcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZXNjZW5kaW5nfSBmcm9tIFwiLi9zcmMvZGVzY2VuZGluZ1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGRldmlhdGlvbn0gZnJvbSBcIi4vc3JjL2RldmlhdGlvblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGV4dGVudH0gZnJvbSBcIi4vc3JjL2V4dGVudFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGhpc3RvZ3JhbX0gZnJvbSBcIi4vc3JjL2hpc3RvZ3JhbVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRocmVzaG9sZEZyZWVkbWFuRGlhY29uaXN9IGZyb20gXCIuL3NyYy90aHJlc2hvbGQvZnJlZWRtYW5EaWFjb25pc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRocmVzaG9sZFNjb3R0fSBmcm9tIFwiLi9zcmMvdGhyZXNob2xkL3Njb3R0XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGhyZXNob2xkU3R1cmdlc30gZnJvbSBcIi4vc3JjL3RocmVzaG9sZC9zdHVyZ2VzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWF4fSBmcm9tIFwiLi9zcmMvbWF4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWVhbn0gZnJvbSBcIi4vc3JjL21lYW5cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtZWRpYW59IGZyb20gXCIuL3NyYy9tZWRpYW5cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtZXJnZX0gZnJvbSBcIi4vc3JjL21lcmdlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWlufSBmcm9tIFwiLi9zcmMvbWluXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcGFpcnN9IGZyb20gXCIuL3NyYy9wYWlyc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBlcm11dGV9IGZyb20gXCIuL3NyYy9wZXJtdXRlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcXVhbnRpbGV9IGZyb20gXCIuL3NyYy9xdWFudGlsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHJhbmdlfSBmcm9tIFwiLi9zcmMvcmFuZ2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzY2FufSBmcm9tIFwiLi9zcmMvc2NhblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNodWZmbGV9IGZyb20gXCIuL3NyYy9zaHVmZmxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3VtfSBmcm9tIFwiLi9zcmMvc3VtXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGlja3MsIHRpY2tJbmNyZW1lbnQsIHRpY2tTdGVwfSBmcm9tIFwiLi9zcmMvdGlja3NcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0cmFuc3Bvc2V9IGZyb20gXCIuL3NyYy90cmFuc3Bvc2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB2YXJpYW5jZX0gZnJvbSBcIi4vc3JjL3ZhcmlhbmNlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgemlwfSBmcm9tIFwiLi9zcmMvemlwXCI7XG4iLCJ2YXIgYXJyYXkgPSBBcnJheS5wcm90b3R5cGU7XG5cbmV4cG9ydCB2YXIgc2xpY2UgPSBhcnJheS5zbGljZTtcbmV4cG9ydCB2YXIgbWFwID0gYXJyYXkubWFwO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZ1wiO1xuaW1wb3J0IGJpc2VjdG9yIGZyb20gXCIuL2Jpc2VjdG9yXCI7XG5cbnZhciBhc2NlbmRpbmdCaXNlY3QgPSBiaXNlY3Rvcihhc2NlbmRpbmcpO1xuZXhwb3J0IHZhciBiaXNlY3RSaWdodCA9IGFzY2VuZGluZ0Jpc2VjdC5yaWdodDtcbmV4cG9ydCB2YXIgYmlzZWN0TGVmdCA9IGFzY2VuZGluZ0Jpc2VjdC5sZWZ0O1xuZXhwb3J0IGRlZmF1bHQgYmlzZWN0UmlnaHQ7XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wYXJlKSB7XG4gIGlmIChjb21wYXJlLmxlbmd0aCA9PT0gMSkgY29tcGFyZSA9IGFzY2VuZGluZ0NvbXBhcmF0b3IoY29tcGFyZSk7XG4gIHJldHVybiB7XG4gICAgbGVmdDogZnVuY3Rpb24oYSwgeCwgbG8sIGhpKSB7XG4gICAgICBpZiAobG8gPT0gbnVsbCkgbG8gPSAwO1xuICAgICAgaWYgKGhpID09IG51bGwpIGhpID0gYS5sZW5ndGg7XG4gICAgICB3aGlsZSAobG8gPCBoaSkge1xuICAgICAgICB2YXIgbWlkID0gbG8gKyBoaSA+Pj4gMTtcbiAgICAgICAgaWYgKGNvbXBhcmUoYVttaWRdLCB4KSA8IDApIGxvID0gbWlkICsgMTtcbiAgICAgICAgZWxzZSBoaSA9IG1pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsbztcbiAgICB9LFxuICAgIHJpZ2h0OiBmdW5jdGlvbihhLCB4LCBsbywgaGkpIHtcbiAgICAgIGlmIChsbyA9PSBudWxsKSBsbyA9IDA7XG4gICAgICBpZiAoaGkgPT0gbnVsbCkgaGkgPSBhLmxlbmd0aDtcbiAgICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICAgIHZhciBtaWQgPSBsbyArIGhpID4+PiAxO1xuICAgICAgICBpZiAoY29tcGFyZShhW21pZF0sIHgpID4gMCkgaGkgPSBtaWQ7XG4gICAgICAgIGVsc2UgbG8gPSBtaWQgKyAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxvO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gYXNjZW5kaW5nQ29tcGFyYXRvcihmKSB7XG4gIHJldHVybiBmdW5jdGlvbihkLCB4KSB7XG4gICAgcmV0dXJuIGFzY2VuZGluZyhmKGQpLCB4KTtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiaW1wb3J0IHtwYWlyfSBmcm9tIFwiLi9wYWlyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMwLCB2YWx1ZXMxLCByZWR1Y2UpIHtcbiAgdmFyIG4wID0gdmFsdWVzMC5sZW5ndGgsXG4gICAgICBuMSA9IHZhbHVlczEubGVuZ3RoLFxuICAgICAgdmFsdWVzID0gbmV3IEFycmF5KG4wICogbjEpLFxuICAgICAgaTAsXG4gICAgICBpMSxcbiAgICAgIGksXG4gICAgICB2YWx1ZTA7XG5cbiAgaWYgKHJlZHVjZSA9PSBudWxsKSByZWR1Y2UgPSBwYWlyO1xuXG4gIGZvciAoaTAgPSBpID0gMDsgaTAgPCBuMDsgKytpMCkge1xuICAgIGZvciAodmFsdWUwID0gdmFsdWVzMFtpMF0sIGkxID0gMDsgaTEgPCBuMTsgKytpMSwgKytpKSB7XG4gICAgICB2YWx1ZXNbaV0gPSByZWR1Y2UodmFsdWUwLCB2YWx1ZXMxW2kxXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGIgPCBhID8gLTEgOiBiID4gYSA/IDEgOiBiID49IGEgPyAwIDogTmFOO1xufVxuIiwiaW1wb3J0IHZhcmlhbmNlIGZyb20gXCIuL3ZhcmlhbmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCBmKSB7XG4gIHZhciB2ID0gdmFyaWFuY2UoYXJyYXksIGYpO1xuICByZXR1cm4gdiA/IE1hdGguc3FydCh2KSA6IHY7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgaSA9IC0xLFxuICAgICAgdmFsdWUsXG4gICAgICBtaW4sXG4gICAgICBtYXg7XG5cbiAgaWYgKHZhbHVlb2YgPT0gbnVsbCkge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7IC8vIEZpbmQgdGhlIGZpcnN0IGNvbXBhcmFibGUgdmFsdWUuXG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVzW2ldKSAhPSBudWxsICYmIHZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgIG1pbiA9IG1heCA9IHZhbHVlO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBDb21wYXJlIHRoZSByZW1haW5pbmcgdmFsdWVzLlxuICAgICAgICAgIGlmICgodmFsdWUgPSB2YWx1ZXNbaV0pICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChtaW4gPiB2YWx1ZSkgbWluID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAobWF4IDwgdmFsdWUpIG1heCA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVsc2Uge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7IC8vIEZpbmQgdGhlIGZpcnN0IGNvbXBhcmFibGUgdmFsdWUuXG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZXNbaV0sIGksIHZhbHVlcykpICE9IG51bGwgJiYgdmFsdWUgPj0gdmFsdWUpIHtcbiAgICAgICAgbWluID0gbWF4ID0gdmFsdWU7XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB7IC8vIENvbXBhcmUgdGhlIHJlbWFpbmluZyB2YWx1ZXMuXG4gICAgICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobWluID4gdmFsdWUpIG1pbiA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKG1heCA8IHZhbHVlKSBtYXggPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gW21pbiwgbWF4XTtcbn1cbiIsImltcG9ydCB7c2xpY2V9IGZyb20gXCIuL2FycmF5XCI7XG5pbXBvcnQgYmlzZWN0IGZyb20gXCIuL2Jpc2VjdFwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgZXh0ZW50IGZyb20gXCIuL2V4dGVudFwiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5XCI7XG5pbXBvcnQgcmFuZ2UgZnJvbSBcIi4vcmFuZ2VcIjtcbmltcG9ydCB7dGlja1N0ZXB9IGZyb20gXCIuL3RpY2tzXCI7XG5pbXBvcnQgc3R1cmdlcyBmcm9tIFwiLi90aHJlc2hvbGQvc3R1cmdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHZhbHVlID0gaWRlbnRpdHksXG4gICAgICBkb21haW4gPSBleHRlbnQsXG4gICAgICB0aHJlc2hvbGQgPSBzdHVyZ2VzO1xuXG4gIGZ1bmN0aW9uIGhpc3RvZ3JhbShkYXRhKSB7XG4gICAgdmFyIGksXG4gICAgICAgIG4gPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgeCxcbiAgICAgICAgdmFsdWVzID0gbmV3IEFycmF5KG4pO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgdmFsdWVzW2ldID0gdmFsdWUoZGF0YVtpXSwgaSwgZGF0YSk7XG4gICAgfVxuXG4gICAgdmFyIHh6ID0gZG9tYWluKHZhbHVlcyksXG4gICAgICAgIHgwID0geHpbMF0sXG4gICAgICAgIHgxID0geHpbMV0sXG4gICAgICAgIHR6ID0gdGhyZXNob2xkKHZhbHVlcywgeDAsIHgxKTtcblxuICAgIC8vIENvbnZlcnQgbnVtYmVyIG9mIHRocmVzaG9sZHMgaW50byB1bmlmb3JtIHRocmVzaG9sZHMuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHR6KSkge1xuICAgICAgdHogPSB0aWNrU3RlcCh4MCwgeDEsIHR6KTtcbiAgICAgIHR6ID0gcmFuZ2UoTWF0aC5jZWlsKHgwIC8gdHopICogdHosIE1hdGguZmxvb3IoeDEgLyB0eikgKiB0eiwgdHopOyAvLyBleGNsdXNpdmVcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHRocmVzaG9sZHMgb3V0c2lkZSB0aGUgZG9tYWluLlxuICAgIHZhciBtID0gdHoubGVuZ3RoO1xuICAgIHdoaWxlICh0elswXSA8PSB4MCkgdHouc2hpZnQoKSwgLS1tO1xuICAgIHdoaWxlICh0elttIC0gMV0gPiB4MSkgdHoucG9wKCksIC0tbTtcblxuICAgIHZhciBiaW5zID0gbmV3IEFycmF5KG0gKyAxKSxcbiAgICAgICAgYmluO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBiaW5zLlxuICAgIGZvciAoaSA9IDA7IGkgPD0gbTsgKytpKSB7XG4gICAgICBiaW4gPSBiaW5zW2ldID0gW107XG4gICAgICBiaW4ueDAgPSBpID4gMCA/IHR6W2kgLSAxXSA6IHgwO1xuICAgICAgYmluLngxID0gaSA8IG0gPyB0eltpXSA6IHgxO1xuICAgIH1cblxuICAgIC8vIEFzc2lnbiBkYXRhIHRvIGJpbnMgYnkgdmFsdWUsIGlnbm9yaW5nIGFueSBvdXRzaWRlIHRoZSBkb21haW4uXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgeCA9IHZhbHVlc1tpXTtcbiAgICAgIGlmICh4MCA8PSB4ICYmIHggPD0geDEpIHtcbiAgICAgICAgYmluc1tiaXNlY3QodHosIHgsIDAsIG0pXS5wdXNoKGRhdGFbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiaW5zO1xuICB9XG5cbiAgaGlzdG9ncmFtLnZhbHVlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHZhbHVlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgaGlzdG9ncmFtKSA6IHZhbHVlO1xuICB9O1xuXG4gIGhpc3RvZ3JhbS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZG9tYWluID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChbX1swXSwgX1sxXV0pLCBoaXN0b2dyYW0pIDogZG9tYWluO1xuICB9O1xuXG4gIGhpc3RvZ3JhbS50aHJlc2hvbGRzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRocmVzaG9sZCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogQXJyYXkuaXNBcnJheShfKSA/IGNvbnN0YW50KHNsaWNlLmNhbGwoXykpIDogY29uc3RhbnQoXyksIGhpc3RvZ3JhbSkgOiB0aHJlc2hvbGQ7XG4gIH07XG5cbiAgcmV0dXJuIGhpc3RvZ3JhbTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgaSA9IC0xLFxuICAgICAgdmFsdWUsXG4gICAgICBtYXg7XG5cbiAgaWYgKHZhbHVlb2YgPT0gbnVsbCkge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7IC8vIEZpbmQgdGhlIGZpcnN0IGNvbXBhcmFibGUgdmFsdWUuXG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVzW2ldKSAhPSBudWxsICYmIHZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgIG1heCA9IHZhbHVlO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBDb21wYXJlIHRoZSByZW1haW5pbmcgdmFsdWVzLlxuICAgICAgICAgIGlmICgodmFsdWUgPSB2YWx1ZXNbaV0pICE9IG51bGwgJiYgdmFsdWUgPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVsc2Uge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7IC8vIEZpbmQgdGhlIGZpcnN0IGNvbXBhcmFibGUgdmFsdWUuXG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZXNbaV0sIGksIHZhbHVlcykpICE9IG51bGwgJiYgdmFsdWUgPj0gdmFsdWUpIHtcbiAgICAgICAgbWF4ID0gdmFsdWU7XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB7IC8vIENvbXBhcmUgdGhlIHJlbWFpbmluZyB2YWx1ZXMuXG4gICAgICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSAhPSBudWxsICYmIHZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF4O1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG0gPSBuLFxuICAgICAgaSA9IC0xLFxuICAgICAgdmFsdWUsXG4gICAgICBzdW0gPSAwO1xuXG4gIGlmICh2YWx1ZW9mID09IG51bGwpIHtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaWYgKCFpc05hTih2YWx1ZSA9IG51bWJlcih2YWx1ZXNbaV0pKSkgc3VtICs9IHZhbHVlO1xuICAgICAgZWxzZSAtLW07XG4gICAgfVxuICB9XG5cbiAgZWxzZSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICghaXNOYU4odmFsdWUgPSBudW1iZXIodmFsdWVvZih2YWx1ZXNbaV0sIGksIHZhbHVlcykpKSkgc3VtICs9IHZhbHVlO1xuICAgICAgZWxzZSAtLW07XG4gICAgfVxuICB9XG5cbiAgaWYgKG0pIHJldHVybiBzdW0gLyBtO1xufVxuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmdcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XG5pbXBvcnQgcXVhbnRpbGUgZnJvbSBcIi4vcXVhbnRpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgbnVtYmVycyA9IFtdO1xuXG4gIGlmICh2YWx1ZW9mID09IG51bGwpIHtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaWYgKCFpc05hTih2YWx1ZSA9IG51bWJlcih2YWx1ZXNbaV0pKSkge1xuICAgICAgICBudW1iZXJzLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVsc2Uge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAoIWlzTmFOKHZhbHVlID0gbnVtYmVyKHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSkpIHtcbiAgICAgICAgbnVtYmVycy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcXVhbnRpbGUobnVtYmVycy5zb3J0KGFzY2VuZGluZyksIDAuNSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheXMpIHtcbiAgdmFyIG4gPSBhcnJheXMubGVuZ3RoLFxuICAgICAgbSxcbiAgICAgIGkgPSAtMSxcbiAgICAgIGogPSAwLFxuICAgICAgbWVyZ2VkLFxuICAgICAgYXJyYXk7XG5cbiAgd2hpbGUgKCsraSA8IG4pIGogKz0gYXJyYXlzW2ldLmxlbmd0aDtcbiAgbWVyZ2VkID0gbmV3IEFycmF5KGopO1xuXG4gIHdoaWxlICgtLW4gPj0gMCkge1xuICAgIGFycmF5ID0gYXJyYXlzW25dO1xuICAgIG0gPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKC0tbSA+PSAwKSB7XG4gICAgICBtZXJnZWRbLS1qXSA9IGFycmF5W21dO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZWQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgaSA9IC0xLFxuICAgICAgdmFsdWUsXG4gICAgICBtaW47XG5cbiAgaWYgKHZhbHVlb2YgPT0gbnVsbCkge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7IC8vIEZpbmQgdGhlIGZpcnN0IGNvbXBhcmFibGUgdmFsdWUuXG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVzW2ldKSAhPSBudWxsICYmIHZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgIG1pbiA9IHZhbHVlO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBDb21wYXJlIHRoZSByZW1haW5pbmcgdmFsdWVzLlxuICAgICAgICAgIGlmICgodmFsdWUgPSB2YWx1ZXNbaV0pICE9IG51bGwgJiYgbWluID4gdmFsdWUpIHtcbiAgICAgICAgICAgIG1pbiA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVsc2Uge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7IC8vIEZpbmQgdGhlIGZpcnN0IGNvbXBhcmFibGUgdmFsdWUuXG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZXNbaV0sIGksIHZhbHVlcykpICE9IG51bGwgJiYgdmFsdWUgPj0gdmFsdWUpIHtcbiAgICAgICAgbWluID0gdmFsdWU7XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB7IC8vIENvbXBhcmUgdGhlIHJlbWFpbmluZyB2YWx1ZXMuXG4gICAgICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSAhPSBudWxsICYmIG1pbiA+IHZhbHVlKSB7XG4gICAgICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWluO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geCA9PT0gbnVsbCA/IE5hTiA6ICt4O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIGYpIHtcbiAgaWYgKGYgPT0gbnVsbCkgZiA9IHBhaXI7XG4gIHZhciBpID0gMCwgbiA9IGFycmF5Lmxlbmd0aCAtIDEsIHAgPSBhcnJheVswXSwgcGFpcnMgPSBuZXcgQXJyYXkobiA8IDAgPyAwIDogbik7XG4gIHdoaWxlIChpIDwgbikgcGFpcnNbaV0gPSBmKHAsIHAgPSBhcnJheVsrK2ldKTtcbiAgcmV0dXJuIHBhaXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFpcihhLCBiKSB7XG4gIHJldHVybiBbYSwgYl07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgaW5kZXhlcykge1xuICB2YXIgaSA9IGluZGV4ZXMubGVuZ3RoLCBwZXJtdXRlcyA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSkgcGVybXV0ZXNbaV0gPSBhcnJheVtpbmRleGVzW2ldXTtcbiAgcmV0dXJuIHBlcm11dGVzO1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCBwLCB2YWx1ZW9mKSB7XG4gIGlmICh2YWx1ZW9mID09IG51bGwpIHZhbHVlb2YgPSBudW1iZXI7XG4gIGlmICghKG4gPSB2YWx1ZXMubGVuZ3RoKSkgcmV0dXJuO1xuICBpZiAoKHAgPSArcCkgPD0gMCB8fCBuIDwgMikgcmV0dXJuICt2YWx1ZW9mKHZhbHVlc1swXSwgMCwgdmFsdWVzKTtcbiAgaWYgKHAgPj0gMSkgcmV0dXJuICt2YWx1ZW9mKHZhbHVlc1tuIC0gMV0sIG4gLSAxLCB2YWx1ZXMpO1xuICB2YXIgbixcbiAgICAgIGkgPSAobiAtIDEpICogcCxcbiAgICAgIGkwID0gTWF0aC5mbG9vcihpKSxcbiAgICAgIHZhbHVlMCA9ICt2YWx1ZW9mKHZhbHVlc1tpMF0sIGkwLCB2YWx1ZXMpLFxuICAgICAgdmFsdWUxID0gK3ZhbHVlb2YodmFsdWVzW2kwICsgMV0sIGkwICsgMSwgdmFsdWVzKTtcbiAgcmV0dXJuIHZhbHVlMCArICh2YWx1ZTEgLSB2YWx1ZTApICogKGkgLSBpMCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICBzdGFydCA9ICtzdGFydCwgc3RvcCA9ICtzdG9wLCBzdGVwID0gKG4gPSBhcmd1bWVudHMubGVuZ3RoKSA8IDIgPyAoc3RvcCA9IHN0YXJ0LCBzdGFydCA9IDAsIDEpIDogbiA8IDMgPyAxIDogK3N0ZXA7XG5cbiAgdmFyIGkgPSAtMSxcbiAgICAgIG4gPSBNYXRoLm1heCgwLCBNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSkgfCAwLFxuICAgICAgcmFuZ2UgPSBuZXcgQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICByYW5nZVtpXSA9IHN0YXJ0ICsgaSAqIHN0ZXA7XG4gIH1cblxuICByZXR1cm4gcmFuZ2U7XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIGNvbXBhcmUpIHtcbiAgaWYgKCEobiA9IHZhbHVlcy5sZW5ndGgpKSByZXR1cm47XG4gIHZhciBuLFxuICAgICAgaSA9IDAsXG4gICAgICBqID0gMCxcbiAgICAgIHhpLFxuICAgICAgeGogPSB2YWx1ZXNbal07XG5cbiAgaWYgKGNvbXBhcmUgPT0gbnVsbCkgY29tcGFyZSA9IGFzY2VuZGluZztcblxuICB3aGlsZSAoKytpIDwgbikge1xuICAgIGlmIChjb21wYXJlKHhpID0gdmFsdWVzW2ldLCB4aikgPCAwIHx8IGNvbXBhcmUoeGosIHhqKSAhPT0gMCkge1xuICAgICAgeGogPSB4aSwgaiA9IGk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbXBhcmUoeGosIHhqKSA9PT0gMCkgcmV0dXJuIGo7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgaTAsIGkxKSB7XG4gIHZhciBtID0gKGkxID09IG51bGwgPyBhcnJheS5sZW5ndGggOiBpMSkgLSAoaTAgPSBpMCA9PSBudWxsID8gMCA6ICtpMCksXG4gICAgICB0LFxuICAgICAgaTtcblxuICB3aGlsZSAobSkge1xuICAgIGkgPSBNYXRoLnJhbmRvbSgpICogbS0tIHwgMDtcbiAgICB0ID0gYXJyYXlbbSArIGkwXTtcbiAgICBhcnJheVttICsgaTBdID0gYXJyYXlbaSArIGkwXTtcbiAgICBhcnJheVtpICsgaTBdID0gdDtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgdmFsdWVvZikge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBpID0gLTEsXG4gICAgICB2YWx1ZSxcbiAgICAgIHN1bSA9IDA7XG5cbiAgaWYgKHZhbHVlb2YgPT0gbnVsbCkge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodmFsdWUgPSArdmFsdWVzW2ldKSBzdW0gKz0gdmFsdWU7IC8vIE5vdGU6IHplcm8gYW5kIG51bGwgYXJlIGVxdWl2YWxlbnQuXG4gICAgfVxuICB9XG5cbiAgZWxzZSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh2YWx1ZSA9ICt2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkgc3VtICs9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdW07XG59XG4iLCJpbXBvcnQge21hcH0gZnJvbSBcIi4uL2FycmF5XCI7XG5pbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuLi9hc2NlbmRpbmdcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4uL251bWJlclwiO1xuaW1wb3J0IHF1YW50aWxlIGZyb20gXCIuLi9xdWFudGlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIG1pbiwgbWF4KSB7XG4gIHZhbHVlcyA9IG1hcC5jYWxsKHZhbHVlcywgbnVtYmVyKS5zb3J0KGFzY2VuZGluZyk7XG4gIHJldHVybiBNYXRoLmNlaWwoKG1heCAtIG1pbikgLyAoMiAqIChxdWFudGlsZSh2YWx1ZXMsIDAuNzUpIC0gcXVhbnRpbGUodmFsdWVzLCAwLjI1KSkgKiBNYXRoLnBvdyh2YWx1ZXMubGVuZ3RoLCAtMSAvIDMpKSk7XG59XG4iLCJpbXBvcnQgZGV2aWF0aW9uIGZyb20gXCIuLi9kZXZpYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5jZWlsKChtYXggLSBtaW4pIC8gKDMuNSAqIGRldmlhdGlvbih2YWx1ZXMpICogTWF0aC5wb3codmFsdWVzLmxlbmd0aCwgLTEgLyAzKSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBNYXRoLmNlaWwoTWF0aC5sb2codmFsdWVzLmxlbmd0aCkgLyBNYXRoLkxOMikgKyAxO1xufVxuIiwidmFyIGUxMCA9IE1hdGguc3FydCg1MCksXG4gICAgZTUgPSBNYXRoLnNxcnQoMTApLFxuICAgIGUyID0gTWF0aC5zcXJ0KDIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgdmFyIHJldmVyc2UsXG4gICAgICBpID0gLTEsXG4gICAgICBuLFxuICAgICAgdGlja3MsXG4gICAgICBzdGVwO1xuXG4gIHN0b3AgPSArc3RvcCwgc3RhcnQgPSArc3RhcnQsIGNvdW50ID0gK2NvdW50O1xuICBpZiAoc3RhcnQgPT09IHN0b3AgJiYgY291bnQgPiAwKSByZXR1cm4gW3N0YXJ0XTtcbiAgaWYgKHJldmVyc2UgPSBzdG9wIDwgc3RhcnQpIG4gPSBzdGFydCwgc3RhcnQgPSBzdG9wLCBzdG9wID0gbjtcbiAgaWYgKChzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpKSA9PT0gMCB8fCAhaXNGaW5pdGUoc3RlcCkpIHJldHVybiBbXTtcblxuICBpZiAoc3RlcCA+IDApIHtcbiAgICBzdGFydCA9IE1hdGguY2VpbChzdGFydCAvIHN0ZXApO1xuICAgIHN0b3AgPSBNYXRoLmZsb29yKHN0b3AgLyBzdGVwKTtcbiAgICB0aWNrcyA9IG5ldyBBcnJheShuID0gTWF0aC5jZWlsKHN0b3AgLSBzdGFydCArIDEpKTtcbiAgICB3aGlsZSAoKytpIDwgbikgdGlja3NbaV0gPSAoc3RhcnQgKyBpKSAqIHN0ZXA7XG4gIH0gZWxzZSB7XG4gICAgc3RhcnQgPSBNYXRoLmZsb29yKHN0YXJ0ICogc3RlcCk7XG4gICAgc3RvcCA9IE1hdGguY2VpbChzdG9wICogc3RlcCk7XG4gICAgdGlja3MgPSBuZXcgQXJyYXkobiA9IE1hdGguY2VpbChzdGFydCAtIHN0b3AgKyAxKSk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHRpY2tzW2ldID0gKHN0YXJ0IC0gaSkgLyBzdGVwO1xuICB9XG5cbiAgaWYgKHJldmVyc2UpIHRpY2tzLnJldmVyc2UoKTtcblxuICByZXR1cm4gdGlja3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICB2YXIgc3RlcCA9IChzdG9wIC0gc3RhcnQpIC8gTWF0aC5tYXgoMCwgY291bnQpLFxuICAgICAgcG93ZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKHN0ZXApIC8gTWF0aC5MTjEwKSxcbiAgICAgIGVycm9yID0gc3RlcCAvIE1hdGgucG93KDEwLCBwb3dlcik7XG4gIHJldHVybiBwb3dlciA+PSAwXG4gICAgICA/IChlcnJvciA+PSBlMTAgPyAxMCA6IGVycm9yID49IGU1ID8gNSA6IGVycm9yID49IGUyID8gMiA6IDEpICogTWF0aC5wb3coMTAsIHBvd2VyKVxuICAgICAgOiAtTWF0aC5wb3coMTAsIC1wb3dlcikgLyAoZXJyb3IgPj0gZTEwID8gMTAgOiBlcnJvciA+PSBlNSA/IDUgOiBlcnJvciA+PSBlMiA/IDIgOiAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICB2YXIgc3RlcDAgPSBNYXRoLmFicyhzdG9wIC0gc3RhcnQpIC8gTWF0aC5tYXgoMCwgY291bnQpLFxuICAgICAgc3RlcDEgPSBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZyhzdGVwMCkgLyBNYXRoLkxOMTApKSxcbiAgICAgIGVycm9yID0gc3RlcDAgLyBzdGVwMTtcbiAgaWYgKGVycm9yID49IGUxMCkgc3RlcDEgKj0gMTA7XG4gIGVsc2UgaWYgKGVycm9yID49IGU1KSBzdGVwMSAqPSA1O1xuICBlbHNlIGlmIChlcnJvciA+PSBlMikgc3RlcDEgKj0gMjtcbiAgcmV0dXJuIHN0b3AgPCBzdGFydCA/IC1zdGVwMSA6IHN0ZXAxO1xufVxuIiwiaW1wb3J0IG1pbiBmcm9tIFwiLi9taW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0cml4KSB7XG4gIGlmICghKG4gPSBtYXRyaXgubGVuZ3RoKSkgcmV0dXJuIFtdO1xuICBmb3IgKHZhciBpID0gLTEsIG0gPSBtaW4obWF0cml4LCBsZW5ndGgpLCB0cmFuc3Bvc2UgPSBuZXcgQXJyYXkobSk7ICsraSA8IG07KSB7XG4gICAgZm9yICh2YXIgaiA9IC0xLCBuLCByb3cgPSB0cmFuc3Bvc2VbaV0gPSBuZXcgQXJyYXkobik7ICsraiA8IG47KSB7XG4gICAgICByb3dbal0gPSBtYXRyaXhbal1baV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0cmFuc3Bvc2U7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aChkKSB7XG4gIHJldHVybiBkLmxlbmd0aDtcbn1cbiIsImltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgdmFsdWVvZikge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBtID0gMCxcbiAgICAgIGkgPSAtMSxcbiAgICAgIG1lYW4gPSAwLFxuICAgICAgdmFsdWUsXG4gICAgICBkZWx0YSxcbiAgICAgIHN1bSA9IDA7XG5cbiAgaWYgKHZhbHVlb2YgPT0gbnVsbCkge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAoIWlzTmFOKHZhbHVlID0gbnVtYmVyKHZhbHVlc1tpXSkpKSB7XG4gICAgICAgIGRlbHRhID0gdmFsdWUgLSBtZWFuO1xuICAgICAgICBtZWFuICs9IGRlbHRhIC8gKyttO1xuICAgICAgICBzdW0gKz0gZGVsdGEgKiAodmFsdWUgLSBtZWFuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaWYgKCFpc05hTih2YWx1ZSA9IG51bWJlcih2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkpKSB7XG4gICAgICAgIGRlbHRhID0gdmFsdWUgLSBtZWFuO1xuICAgICAgICBtZWFuICs9IGRlbHRhIC8gKyttO1xuICAgICAgICBzdW0gKz0gZGVsdGEgKiAodmFsdWUgLSBtZWFuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobSA+IDEpIHJldHVybiBzdW0gLyAobSAtIDEpO1xufVxuIiwiaW1wb3J0IHRyYW5zcG9zZSBmcm9tIFwiLi90cmFuc3Bvc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0cmFuc3Bvc2UoYXJndW1lbnRzKTtcbn1cbiIsImV4cG9ydCB7XG4gIGF4aXNUb3AsXG4gIGF4aXNSaWdodCxcbiAgYXhpc0JvdHRvbSxcbiAgYXhpc0xlZnRcbn0gZnJvbSBcIi4vc3JjL2F4aXNcIjtcbiIsImV4cG9ydCB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4iLCJpbXBvcnQge3NsaWNlfSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5XCI7XG5cbnZhciB0b3AgPSAxLFxuICAgIHJpZ2h0ID0gMixcbiAgICBib3R0b20gPSAzLFxuICAgIGxlZnQgPSA0LFxuICAgIGVwc2lsb24gPSAxZS02O1xuXG5mdW5jdGlvbiB0cmFuc2xhdGVYKHgpIHtcbiAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgKHggKyAwLjUpICsgXCIsMClcIjtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlWSh5KSB7XG4gIHJldHVybiBcInRyYW5zbGF0ZSgwLFwiICsgKHkgKyAwLjUpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIG51bWJlcihzY2FsZSkge1xuICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiArc2NhbGUoZCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNlbnRlcihzY2FsZSkge1xuICB2YXIgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgc2NhbGUuYmFuZHdpZHRoKCkgLSAxKSAvIDI7IC8vIEFkanVzdCBmb3IgMC41cHggb2Zmc2V0LlxuICBpZiAoc2NhbGUucm91bmQoKSkgb2Zmc2V0ID0gTWF0aC5yb3VuZChvZmZzZXQpO1xuICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiArc2NhbGUoZCkgKyBvZmZzZXQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVudGVyaW5nKCkge1xuICByZXR1cm4gIXRoaXMuX19heGlzO1xufVxuXG5mdW5jdGlvbiBheGlzKG9yaWVudCwgc2NhbGUpIHtcbiAgdmFyIHRpY2tBcmd1bWVudHMgPSBbXSxcbiAgICAgIHRpY2tWYWx1ZXMgPSBudWxsLFxuICAgICAgdGlja0Zvcm1hdCA9IG51bGwsXG4gICAgICB0aWNrU2l6ZUlubmVyID0gNixcbiAgICAgIHRpY2tTaXplT3V0ZXIgPSA2LFxuICAgICAgdGlja1BhZGRpbmcgPSAzLFxuICAgICAgayA9IG9yaWVudCA9PT0gdG9wIHx8IG9yaWVudCA9PT0gbGVmdCA/IC0xIDogMSxcbiAgICAgIHggPSBvcmllbnQgPT09IGxlZnQgfHwgb3JpZW50ID09PSByaWdodCA/IFwieFwiIDogXCJ5XCIsXG4gICAgICB0cmFuc2Zvcm0gPSBvcmllbnQgPT09IHRvcCB8fCBvcmllbnQgPT09IGJvdHRvbSA/IHRyYW5zbGF0ZVggOiB0cmFuc2xhdGVZO1xuXG4gIGZ1bmN0aW9uIGF4aXMoY29udGV4dCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aWNrVmFsdWVzID09IG51bGwgPyAoc2NhbGUudGlja3MgPyBzY2FsZS50aWNrcy5hcHBseShzY2FsZSwgdGlja0FyZ3VtZW50cykgOiBzY2FsZS5kb21haW4oKSkgOiB0aWNrVmFsdWVzLFxuICAgICAgICBmb3JtYXQgPSB0aWNrRm9ybWF0ID09IG51bGwgPyAoc2NhbGUudGlja0Zvcm1hdCA/IHNjYWxlLnRpY2tGb3JtYXQuYXBwbHkoc2NhbGUsIHRpY2tBcmd1bWVudHMpIDogaWRlbnRpdHkpIDogdGlja0Zvcm1hdCxcbiAgICAgICAgc3BhY2luZyA9IE1hdGgubWF4KHRpY2tTaXplSW5uZXIsIDApICsgdGlja1BhZGRpbmcsXG4gICAgICAgIHJhbmdlID0gc2NhbGUucmFuZ2UoKSxcbiAgICAgICAgcmFuZ2UwID0gK3JhbmdlWzBdICsgMC41LFxuICAgICAgICByYW5nZTEgPSArcmFuZ2VbcmFuZ2UubGVuZ3RoIC0gMV0gKyAwLjUsXG4gICAgICAgIHBvc2l0aW9uID0gKHNjYWxlLmJhbmR3aWR0aCA/IGNlbnRlciA6IG51bWJlcikoc2NhbGUuY29weSgpKSxcbiAgICAgICAgc2VsZWN0aW9uID0gY29udGV4dC5zZWxlY3Rpb24gPyBjb250ZXh0LnNlbGVjdGlvbigpIDogY29udGV4dCxcbiAgICAgICAgcGF0aCA9IHNlbGVjdGlvbi5zZWxlY3RBbGwoXCIuZG9tYWluXCIpLmRhdGEoW251bGxdKSxcbiAgICAgICAgdGljayA9IHNlbGVjdGlvbi5zZWxlY3RBbGwoXCIudGlja1wiKS5kYXRhKHZhbHVlcywgc2NhbGUpLm9yZGVyKCksXG4gICAgICAgIHRpY2tFeGl0ID0gdGljay5leGl0KCksXG4gICAgICAgIHRpY2tFbnRlciA9IHRpY2suZW50ZXIoKS5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInRpY2tcIiksXG4gICAgICAgIGxpbmUgPSB0aWNrLnNlbGVjdChcImxpbmVcIiksXG4gICAgICAgIHRleHQgPSB0aWNrLnNlbGVjdChcInRleHRcIik7XG5cbiAgICBwYXRoID0gcGF0aC5tZXJnZShwYXRoLmVudGVyKCkuaW5zZXJ0KFwicGF0aFwiLCBcIi50aWNrXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkb21haW5cIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjMDAwXCIpKTtcblxuICAgIHRpY2sgPSB0aWNrLm1lcmdlKHRpY2tFbnRlcik7XG5cbiAgICBsaW5lID0gbGluZS5tZXJnZSh0aWNrRW50ZXIuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiMwMDBcIilcbiAgICAgICAgLmF0dHIoeCArIFwiMlwiLCBrICogdGlja1NpemVJbm5lcikpO1xuXG4gICAgdGV4dCA9IHRleHQubWVyZ2UodGlja0VudGVyLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiIzAwMFwiKVxuICAgICAgICAuYXR0cih4LCBrICogc3BhY2luZylcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBvcmllbnQgPT09IHRvcCA/IFwiMGVtXCIgOiBvcmllbnQgPT09IGJvdHRvbSA/IFwiMC43MWVtXCIgOiBcIjAuMzJlbVwiKSk7XG5cbiAgICBpZiAoY29udGV4dCAhPT0gc2VsZWN0aW9uKSB7XG4gICAgICBwYXRoID0gcGF0aC50cmFuc2l0aW9uKGNvbnRleHQpO1xuICAgICAgdGljayA9IHRpY2sudHJhbnNpdGlvbihjb250ZXh0KTtcbiAgICAgIGxpbmUgPSBsaW5lLnRyYW5zaXRpb24oY29udGV4dCk7XG4gICAgICB0ZXh0ID0gdGV4dC50cmFuc2l0aW9uKGNvbnRleHQpO1xuXG4gICAgICB0aWNrRXhpdCA9IHRpY2tFeGl0LnRyYW5zaXRpb24oY29udGV4dClcbiAgICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZXBzaWxvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBpc0Zpbml0ZShkID0gcG9zaXRpb24oZCkpID8gdHJhbnNmb3JtKGQpIDogdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7IH0pO1xuXG4gICAgICB0aWNrRW50ZXJcbiAgICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZXBzaWxvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHZhciBwID0gdGhpcy5wYXJlbnROb2RlLl9fYXhpczsgcmV0dXJuIHRyYW5zZm9ybShwICYmIGlzRmluaXRlKHAgPSBwKGQpKSA/IHAgOiBwb3NpdGlvbihkKSk7IH0pO1xuICAgIH1cblxuICAgIHRpY2tFeGl0LnJlbW92ZSgpO1xuXG4gICAgcGF0aFxuICAgICAgICAuYXR0cihcImRcIiwgb3JpZW50ID09PSBsZWZ0IHx8IG9yaWVudCA9PSByaWdodFxuICAgICAgICAgICAgPyBcIk1cIiArIGsgKiB0aWNrU2l6ZU91dGVyICsgXCIsXCIgKyByYW5nZTAgKyBcIkgwLjVWXCIgKyByYW5nZTEgKyBcIkhcIiArIGsgKiB0aWNrU2l6ZU91dGVyXG4gICAgICAgICAgICA6IFwiTVwiICsgcmFuZ2UwICsgXCIsXCIgKyBrICogdGlja1NpemVPdXRlciArIFwiVjAuNUhcIiArIHJhbmdlMSArIFwiVlwiICsgayAqIHRpY2tTaXplT3V0ZXIpO1xuXG4gICAgdGlja1xuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gdHJhbnNmb3JtKHBvc2l0aW9uKGQpKTsgfSk7XG5cbiAgICBsaW5lXG4gICAgICAgIC5hdHRyKHggKyBcIjJcIiwgayAqIHRpY2tTaXplSW5uZXIpO1xuXG4gICAgdGV4dFxuICAgICAgICAuYXR0cih4LCBrICogc3BhY2luZylcbiAgICAgICAgLnRleHQoZm9ybWF0KTtcblxuICAgIHNlbGVjdGlvbi5maWx0ZXIoZW50ZXJpbmcpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgMTApXG4gICAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpXG4gICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgb3JpZW50ID09PSByaWdodCA/IFwic3RhcnRcIiA6IG9yaWVudCA9PT0gbGVmdCA/IFwiZW5kXCIgOiBcIm1pZGRsZVwiKTtcblxuICAgIHNlbGVjdGlvblxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHsgdGhpcy5fX2F4aXMgPSBwb3NpdGlvbjsgfSk7XG4gIH1cblxuICBheGlzLnNjYWxlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNjYWxlID0gXywgYXhpcykgOiBzY2FsZTtcbiAgfTtcblxuICBheGlzLnRpY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRpY2tBcmd1bWVudHMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyksIGF4aXM7XG4gIH07XG5cbiAgYXhpcy50aWNrQXJndW1lbnRzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tBcmd1bWVudHMgPSBfID09IG51bGwgPyBbXSA6IHNsaWNlLmNhbGwoXyksIGF4aXMpIDogdGlja0FyZ3VtZW50cy5zbGljZSgpO1xuICB9O1xuXG4gIGF4aXMudGlja1ZhbHVlcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrVmFsdWVzID0gXyA9PSBudWxsID8gbnVsbCA6IHNsaWNlLmNhbGwoXyksIGF4aXMpIDogdGlja1ZhbHVlcyAmJiB0aWNrVmFsdWVzLnNsaWNlKCk7XG4gIH07XG5cbiAgYXhpcy50aWNrRm9ybWF0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tGb3JtYXQgPSBfLCBheGlzKSA6IHRpY2tGb3JtYXQ7XG4gIH07XG5cbiAgYXhpcy50aWNrU2l6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrU2l6ZUlubmVyID0gdGlja1NpemVPdXRlciA9ICtfLCBheGlzKSA6IHRpY2tTaXplSW5uZXI7XG4gIH07XG5cbiAgYXhpcy50aWNrU2l6ZUlubmVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tTaXplSW5uZXIgPSArXywgYXhpcykgOiB0aWNrU2l6ZUlubmVyO1xuICB9O1xuXG4gIGF4aXMudGlja1NpemVPdXRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrU2l6ZU91dGVyID0gK18sIGF4aXMpIDogdGlja1NpemVPdXRlcjtcbiAgfTtcblxuICBheGlzLnRpY2tQYWRkaW5nID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tQYWRkaW5nID0gK18sIGF4aXMpIDogdGlja1BhZGRpbmc7XG4gIH07XG5cbiAgcmV0dXJuIGF4aXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzVG9wKHNjYWxlKSB7XG4gIHJldHVybiBheGlzKHRvcCwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc1JpZ2h0KHNjYWxlKSB7XG4gIHJldHVybiBheGlzKHJpZ2h0LCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzQm90dG9tKHNjYWxlKSB7XG4gIHJldHVybiBheGlzKGJvdHRvbSwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc0xlZnQoc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXMobGVmdCwgc2NhbGUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geDtcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBuZXN0fSBmcm9tIFwiLi9zcmMvbmVzdFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNldH0gZnJvbSBcIi4vc3JjL3NldFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1hcH0gZnJvbSBcIi4vc3JjL21hcFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGtleXN9IGZyb20gXCIuL3NyYy9rZXlzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdmFsdWVzfSBmcm9tIFwiLi9zcmMvdmFsdWVzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZW50cmllc30gZnJvbSBcIi4vc3JjL2VudHJpZXNcIjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hcCkge1xuICB2YXIgZW50cmllcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gbWFwKSBlbnRyaWVzLnB1c2goe2tleToga2V5LCB2YWx1ZTogbWFwW2tleV19KTtcbiAgcmV0dXJuIGVudHJpZXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXApIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG1hcCkga2V5cy5wdXNoKGtleSk7XG4gIHJldHVybiBrZXlzO1xufVxuIiwiZXhwb3J0IHZhciBwcmVmaXggPSBcIiRcIjtcblxuZnVuY3Rpb24gTWFwKCkge31cblxuTWFwLnByb3RvdHlwZSA9IG1hcC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBNYXAsXG4gIGhhczogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIChwcmVmaXggKyBrZXkpIGluIHRoaXM7XG4gIH0sXG4gIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXNbcHJlZml4ICsga2V5XTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgdGhpc1twcmVmaXggKyBrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgdmFyIHByb3BlcnR5ID0gcHJlZml4ICsga2V5O1xuICAgIHJldHVybiBwcm9wZXJ0eSBpbiB0aGlzICYmIGRlbGV0ZSB0aGlzW3Byb3BlcnR5XTtcbiAgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMpIGlmIChwcm9wZXJ0eVswXSA9PT0gcHJlZml4KSBkZWxldGUgdGhpc1twcm9wZXJ0eV07XG4gIH0sXG4gIGtleXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcykgaWYgKHByb3BlcnR5WzBdID09PSBwcmVmaXgpIGtleXMucHVzaChwcm9wZXJ0eS5zbGljZSgxKSk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH0sXG4gIHZhbHVlczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMpIGlmIChwcm9wZXJ0eVswXSA9PT0gcHJlZml4KSB2YWx1ZXMucHVzaCh0aGlzW3Byb3BlcnR5XSk7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfSxcbiAgZW50cmllczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVudHJpZXMgPSBbXTtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzKSBpZiAocHJvcGVydHlbMF0gPT09IHByZWZpeCkgZW50cmllcy5wdXNoKHtrZXk6IHByb3BlcnR5LnNsaWNlKDEpLCB2YWx1ZTogdGhpc1twcm9wZXJ0eV19KTtcbiAgICByZXR1cm4gZW50cmllcztcbiAgfSxcbiAgc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNpemUgPSAwO1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMpIGlmIChwcm9wZXJ0eVswXSA9PT0gcHJlZml4KSArK3NpemU7XG4gICAgcmV0dXJuIHNpemU7XG4gIH0sXG4gIGVtcHR5OiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzKSBpZiAocHJvcGVydHlbMF0gPT09IHByZWZpeCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBlYWNoOiBmdW5jdGlvbihmKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcykgaWYgKHByb3BlcnR5WzBdID09PSBwcmVmaXgpIGYodGhpc1twcm9wZXJ0eV0sIHByb3BlcnR5LnNsaWNlKDEpLCB0aGlzKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gbWFwKG9iamVjdCwgZikge1xuICB2YXIgbWFwID0gbmV3IE1hcDtcblxuICAvLyBDb3B5IGNvbnN0cnVjdG9yLlxuICBpZiAob2JqZWN0IGluc3RhbmNlb2YgTWFwKSBvYmplY3QuZWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7IG1hcC5zZXQoa2V5LCB2YWx1ZSk7IH0pO1xuXG4gIC8vIEluZGV4IGFycmF5IGJ5IG51bWVyaWMgaW5kZXggb3Igc3BlY2lmaWVkIGtleSBmdW5jdGlvbi5cbiAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgdmFyIGkgPSAtMSxcbiAgICAgICAgbiA9IG9iamVjdC5sZW5ndGgsXG4gICAgICAgIG87XG5cbiAgICBpZiAoZiA9PSBudWxsKSB3aGlsZSAoKytpIDwgbikgbWFwLnNldChpLCBvYmplY3RbaV0pO1xuICAgIGVsc2Ugd2hpbGUgKCsraSA8IG4pIG1hcC5zZXQoZihvID0gb2JqZWN0W2ldLCBpLCBvYmplY3QpLCBvKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgb2JqZWN0IHRvIG1hcC5cbiAgZWxzZSBpZiAob2JqZWN0KSBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBtYXAuc2V0KGtleSwgb2JqZWN0W2tleV0pO1xuXG4gIHJldHVybiBtYXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcDtcbiIsImltcG9ydCBtYXAgZnJvbSBcIi4vbWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIga2V5cyA9IFtdLFxuICAgICAgc29ydEtleXMgPSBbXSxcbiAgICAgIHNvcnRWYWx1ZXMsXG4gICAgICByb2xsdXAsXG4gICAgICBuZXN0O1xuXG4gIGZ1bmN0aW9uIGFwcGx5KGFycmF5LCBkZXB0aCwgY3JlYXRlUmVzdWx0LCBzZXRSZXN1bHQpIHtcbiAgICBpZiAoZGVwdGggPj0ga2V5cy5sZW5ndGgpIHtcbiAgICAgIGlmIChzb3J0VmFsdWVzICE9IG51bGwpIGFycmF5LnNvcnQoc29ydFZhbHVlcyk7XG4gICAgICByZXR1cm4gcm9sbHVwICE9IG51bGwgPyByb2xsdXAoYXJyYXkpIDogYXJyYXk7XG4gICAgfVxuXG4gICAgdmFyIGkgPSAtMSxcbiAgICAgICAgbiA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAga2V5ID0ga2V5c1tkZXB0aCsrXSxcbiAgICAgICAga2V5VmFsdWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB2YWx1ZXNCeUtleSA9IG1hcCgpLFxuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIHJlc3VsdCA9IGNyZWF0ZVJlc3VsdCgpO1xuXG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh2YWx1ZXMgPSB2YWx1ZXNCeUtleS5nZXQoa2V5VmFsdWUgPSBrZXkodmFsdWUgPSBhcnJheVtpXSkgKyBcIlwiKSkge1xuICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXNCeUtleS5zZXQoa2V5VmFsdWUsIFt2YWx1ZV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlc0J5S2V5LmVhY2goZnVuY3Rpb24odmFsdWVzLCBrZXkpIHtcbiAgICAgIHNldFJlc3VsdChyZXN1bHQsIGtleSwgYXBwbHkodmFsdWVzLCBkZXB0aCwgY3JlYXRlUmVzdWx0LCBzZXRSZXN1bHQpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRyaWVzKG1hcCwgZGVwdGgpIHtcbiAgICBpZiAoKytkZXB0aCA+IGtleXMubGVuZ3RoKSByZXR1cm4gbWFwO1xuICAgIHZhciBhcnJheSwgc29ydEtleSA9IHNvcnRLZXlzW2RlcHRoIC0gMV07XG4gICAgaWYgKHJvbGx1cCAhPSBudWxsICYmIGRlcHRoID49IGtleXMubGVuZ3RoKSBhcnJheSA9IG1hcC5lbnRyaWVzKCk7XG4gICAgZWxzZSBhcnJheSA9IFtdLCBtYXAuZWFjaChmdW5jdGlvbih2LCBrKSB7IGFycmF5LnB1c2goe2tleTogaywgdmFsdWVzOiBlbnRyaWVzKHYsIGRlcHRoKX0pOyB9KTtcbiAgICByZXR1cm4gc29ydEtleSAhPSBudWxsID8gYXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBzb3J0S2V5KGEua2V5LCBiLmtleSk7IH0pIDogYXJyYXk7XG4gIH1cblxuICByZXR1cm4gbmVzdCA9IHtcbiAgICBvYmplY3Q6IGZ1bmN0aW9uKGFycmF5KSB7IHJldHVybiBhcHBseShhcnJheSwgMCwgY3JlYXRlT2JqZWN0LCBzZXRPYmplY3QpOyB9LFxuICAgIG1hcDogZnVuY3Rpb24oYXJyYXkpIHsgcmV0dXJuIGFwcGx5KGFycmF5LCAwLCBjcmVhdGVNYXAsIHNldE1hcCk7IH0sXG4gICAgZW50cmllczogZnVuY3Rpb24oYXJyYXkpIHsgcmV0dXJuIGVudHJpZXMoYXBwbHkoYXJyYXksIDAsIGNyZWF0ZU1hcCwgc2V0TWFwKSwgMCk7IH0sXG4gICAga2V5OiBmdW5jdGlvbihkKSB7IGtleXMucHVzaChkKTsgcmV0dXJuIG5lc3Q7IH0sXG4gICAgc29ydEtleXM6IGZ1bmN0aW9uKG9yZGVyKSB7IHNvcnRLZXlzW2tleXMubGVuZ3RoIC0gMV0gPSBvcmRlcjsgcmV0dXJuIG5lc3Q7IH0sXG4gICAgc29ydFZhbHVlczogZnVuY3Rpb24ob3JkZXIpIHsgc29ydFZhbHVlcyA9IG9yZGVyOyByZXR1cm4gbmVzdDsgfSxcbiAgICByb2xsdXA6IGZ1bmN0aW9uKGYpIHsgcm9sbHVwID0gZjsgcmV0dXJuIG5lc3Q7IH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JqZWN0KCkge1xuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIHNldE9iamVjdChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFwKCkge1xuICByZXR1cm4gbWFwKCk7XG59XG5cbmZ1bmN0aW9uIHNldE1hcChtYXAsIGtleSwgdmFsdWUpIHtcbiAgbWFwLnNldChrZXksIHZhbHVlKTtcbn1cbiIsImltcG9ydCB7ZGVmYXVsdCBhcyBtYXAsIHByZWZpeH0gZnJvbSBcIi4vbWFwXCI7XG5cbmZ1bmN0aW9uIFNldCgpIHt9XG5cbnZhciBwcm90byA9IG1hcC5wcm90b3R5cGU7XG5cblNldC5wcm90b3R5cGUgPSBzZXQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogU2V0LFxuICBoYXM6IHByb3RvLmhhcyxcbiAgYWRkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhbHVlICs9IFwiXCI7XG4gICAgdGhpc1twcmVmaXggKyB2YWx1ZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgcmVtb3ZlOiBwcm90by5yZW1vdmUsXG4gIGNsZWFyOiBwcm90by5jbGVhcixcbiAgdmFsdWVzOiBwcm90by5rZXlzLFxuICBzaXplOiBwcm90by5zaXplLFxuICBlbXB0eTogcHJvdG8uZW1wdHksXG4gIGVhY2g6IHByb3RvLmVhY2hcbn07XG5cbmZ1bmN0aW9uIHNldChvYmplY3QsIGYpIHtcbiAgdmFyIHNldCA9IG5ldyBTZXQ7XG5cbiAgLy8gQ29weSBjb25zdHJ1Y3Rvci5cbiAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFNldCkgb2JqZWN0LmVhY2goZnVuY3Rpb24odmFsdWUpIHsgc2V0LmFkZCh2YWx1ZSk7IH0pO1xuXG4gIC8vIE90aGVyd2lzZSwgYXNzdW1lIGl04oCZcyBhbiBhcnJheS5cbiAgZWxzZSBpZiAob2JqZWN0KSB7XG4gICAgdmFyIGkgPSAtMSwgbiA9IG9iamVjdC5sZW5ndGg7XG4gICAgaWYgKGYgPT0gbnVsbCkgd2hpbGUgKCsraSA8IG4pIHNldC5hZGQob2JqZWN0W2ldKTtcbiAgICBlbHNlIHdoaWxlICgrK2kgPCBuKSBzZXQuYWRkKGYob2JqZWN0W2ldLCBpLCBvYmplY3QpKTtcbiAgfVxuXG4gIHJldHVybiBzZXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hcCkge1xuICB2YXIgdmFsdWVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBtYXApIHZhbHVlcy5wdXNoKG1hcFtrZXldKTtcbiAgcmV0dXJuIHZhbHVlcztcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBjb2xvciwgcmdiLCBoc2x9IGZyb20gXCIuL3NyYy9jb2xvclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGxhYiwgaGNsLCBsY2gsIGdyYXl9IGZyb20gXCIuL3NyYy9sYWJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdWJlaGVsaXh9IGZyb20gXCIuL3NyYy9jdWJlaGVsaXhcIjtcbiIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3IoKSB7fVxuXG5leHBvcnQgdmFyIGRhcmtlciA9IDAuNztcbmV4cG9ydCB2YXIgYnJpZ2h0ZXIgPSAxIC8gZGFya2VyO1xuXG52YXIgcmVJID0gXCJcXFxccyooWystXT9cXFxcZCspXFxcXHMqXCIsXG4gICAgcmVOID0gXCJcXFxccyooWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPylcXFxccypcIixcbiAgICByZVAgPSBcIlxcXFxzKihbKy1dP1xcXFxkKlxcXFwuP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KSVcXFxccypcIixcbiAgICByZUhleDMgPSAvXiMoWzAtOWEtZl17M30pJC8sXG4gICAgcmVIZXg2ID0gL14jKFswLTlhLWZdezZ9KSQvLFxuICAgIHJlUmdiSW50ZWdlciA9IG5ldyBSZWdFeHAoXCJecmdiXFxcXChcIiArIFtyZUksIHJlSSwgcmVJXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlUmdiUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJecmdiXFxcXChcIiArIFtyZVAsIHJlUCwgcmVQXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlUmdiYUludGVnZXIgPSBuZXcgUmVnRXhwKFwiXnJnYmFcXFxcKFwiICsgW3JlSSwgcmVJLCByZUksIHJlTl0gKyBcIlxcXFwpJFwiKSxcbiAgICByZVJnYmFQZXJjZW50ID0gbmV3IFJlZ0V4cChcIl5yZ2JhXFxcXChcIiArIFtyZVAsIHJlUCwgcmVQLCByZU5dICsgXCJcXFxcKSRcIiksXG4gICAgcmVIc2xQZXJjZW50ID0gbmV3IFJlZ0V4cChcIl5oc2xcXFxcKFwiICsgW3JlTiwgcmVQLCByZVBdICsgXCJcXFxcKSRcIiksXG4gICAgcmVIc2xhUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJeaHNsYVxcXFwoXCIgKyBbcmVOLCByZVAsIHJlUCwgcmVOXSArIFwiXFxcXCkkXCIpO1xuXG52YXIgbmFtZWQgPSB7XG4gIGFsaWNlYmx1ZTogMHhmMGY4ZmYsXG4gIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXG4gIGFxdWE6IDB4MDBmZmZmLFxuICBhcXVhbWFyaW5lOiAweDdmZmZkNCxcbiAgYXp1cmU6IDB4ZjBmZmZmLFxuICBiZWlnZTogMHhmNWY1ZGMsXG4gIGJpc3F1ZTogMHhmZmU0YzQsXG4gIGJsYWNrOiAweDAwMDAwMCxcbiAgYmxhbmNoZWRhbG1vbmQ6IDB4ZmZlYmNkLFxuICBibHVlOiAweDAwMDBmZixcbiAgYmx1ZXZpb2xldDogMHg4YTJiZTIsXG4gIGJyb3duOiAweGE1MmEyYSxcbiAgYnVybHl3b29kOiAweGRlYjg4NyxcbiAgY2FkZXRibHVlOiAweDVmOWVhMCxcbiAgY2hhcnRyZXVzZTogMHg3ZmZmMDAsXG4gIGNob2NvbGF0ZTogMHhkMjY5MWUsXG4gIGNvcmFsOiAweGZmN2Y1MCxcbiAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkLFxuICBjb3Juc2lsazogMHhmZmY4ZGMsXG4gIGNyaW1zb246IDB4ZGMxNDNjLFxuICBjeWFuOiAweDAwZmZmZixcbiAgZGFya2JsdWU6IDB4MDAwMDhiLFxuICBkYXJrY3lhbjogMHgwMDhiOGIsXG4gIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiLFxuICBkYXJrZ3JheTogMHhhOWE5YTksXG4gIGRhcmtncmVlbjogMHgwMDY0MDAsXG4gIGRhcmtncmV5OiAweGE5YTlhOSxcbiAgZGFya2toYWtpOiAweGJkYjc2YixcbiAgZGFya21hZ2VudGE6IDB4OGIwMDhiLFxuICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmYsXG4gIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwLFxuICBkYXJrb3JjaGlkOiAweDk5MzJjYyxcbiAgZGFya3JlZDogMHg4YjAwMDAsXG4gIGRhcmtzYWxtb246IDB4ZTk5NjdhLFxuICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmLFxuICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YixcbiAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGYsXG4gIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmLFxuICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMSxcbiAgZGFya3Zpb2xldDogMHg5NDAwZDMsXG4gIGRlZXBwaW5rOiAweGZmMTQ5MyxcbiAgZGVlcHNreWJsdWU6IDB4MDBiZmZmLFxuICBkaW1ncmF5OiAweDY5Njk2OSxcbiAgZGltZ3JleTogMHg2OTY5NjksXG4gIGRvZGdlcmJsdWU6IDB4MWU5MGZmLFxuICBmaXJlYnJpY2s6IDB4YjIyMjIyLFxuICBmbG9yYWx3aGl0ZTogMHhmZmZhZjAsXG4gIGZvcmVzdGdyZWVuOiAweDIyOGIyMixcbiAgZnVjaHNpYTogMHhmZjAwZmYsXG4gIGdhaW5zYm9ybzogMHhkY2RjZGMsXG4gIGdob3N0d2hpdGU6IDB4ZjhmOGZmLFxuICBnb2xkOiAweGZmZDcwMCxcbiAgZ29sZGVucm9kOiAweGRhYTUyMCxcbiAgZ3JheTogMHg4MDgwODAsXG4gIGdyZWVuOiAweDAwODAwMCxcbiAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxuICBncmV5OiAweDgwODA4MCxcbiAgaG9uZXlkZXc6IDB4ZjBmZmYwLFxuICBob3RwaW5rOiAweGZmNjliNCxcbiAgaW5kaWFucmVkOiAweGNkNWM1YyxcbiAgaW5kaWdvOiAweDRiMDA4MixcbiAgaXZvcnk6IDB4ZmZmZmYwLFxuICBraGFraTogMHhmMGU2OGMsXG4gIGxhdmVuZGVyOiAweGU2ZTZmYSxcbiAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXG4gIGxhd25ncmVlbjogMHg3Y2ZjMDAsXG4gIGxlbW9uY2hpZmZvbjogMHhmZmZhY2QsXG4gIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXG4gIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwLFxuICBsaWdodGN5YW46IDB4ZTBmZmZmLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXG4gIGxpZ2h0Z3JheTogMHhkM2QzZDMsXG4gIGxpZ2h0Z3JlZW46IDB4OTBlZTkwLFxuICBsaWdodGdyZXk6IDB4ZDNkM2QzLFxuICBsaWdodHBpbms6IDB4ZmZiNmMxLFxuICBsaWdodHNhbG1vbjogMHhmZmEwN2EsXG4gIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxuICBsaWdodHNreWJsdWU6IDB4ODdjZWZhLFxuICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTksXG4gIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcbiAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlLFxuICBsaWdodHllbGxvdzogMHhmZmZmZTAsXG4gIGxpbWU6IDB4MDBmZjAwLFxuICBsaW1lZ3JlZW46IDB4MzJjZDMyLFxuICBsaW5lbjogMHhmYWYwZTYsXG4gIG1hZ2VudGE6IDB4ZmYwMGZmLFxuICBtYXJvb246IDB4ODAwMDAwLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYSxcbiAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXG4gIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDMsXG4gIG1lZGl1bXB1cnBsZTogMHg5MzcwZGIsXG4gIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcbiAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZSxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhLFxuICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxuICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1LFxuICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwLFxuICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxuICBtaXN0eXJvc2U6IDB4ZmZlNGUxLFxuICBtb2NjYXNpbjogMHhmZmU0YjUsXG4gIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcbiAgbmF2eTogMHgwMDAwODAsXG4gIG9sZGxhY2U6IDB4ZmRmNWU2LFxuICBvbGl2ZTogMHg4MDgwMDAsXG4gIG9saXZlZHJhYjogMHg2YjhlMjMsXG4gIG9yYW5nZTogMHhmZmE1MDAsXG4gIG9yYW5nZXJlZDogMHhmZjQ1MDAsXG4gIG9yY2hpZDogMHhkYTcwZDYsXG4gIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhLFxuICBwYWxlZ3JlZW46IDB4OThmYjk4LFxuICBwYWxldHVycXVvaXNlOiAweGFmZWVlZSxcbiAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTMsXG4gIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxuICBwZWFjaHB1ZmY6IDB4ZmZkYWI5LFxuICBwZXJ1OiAweGNkODUzZixcbiAgcGluazogMHhmZmMwY2IsXG4gIHBsdW06IDB4ZGRhMGRkLFxuICBwb3dkZXJibHVlOiAweGIwZTBlNixcbiAgcHVycGxlOiAweDgwMDA4MCxcbiAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTksXG4gIHJlZDogMHhmZjAwMDAsXG4gIHJvc3licm93bjogMHhiYzhmOGYsXG4gIHJveWFsYmx1ZTogMHg0MTY5ZTEsXG4gIHNhZGRsZWJyb3duOiAweDhiNDUxMyxcbiAgc2FsbW9uOiAweGZhODA3MixcbiAgc2FuZHlicm93bjogMHhmNGE0NjAsXG4gIHNlYWdyZWVuOiAweDJlOGI1NyxcbiAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxuICBzaWVubmE6IDB4YTA1MjJkLFxuICBzaWx2ZXI6IDB4YzBjMGMwLFxuICBza3libHVlOiAweDg3Y2VlYixcbiAgc2xhdGVibHVlOiAweDZhNWFjZCxcbiAgc2xhdGVncmF5OiAweDcwODA5MCxcbiAgc2xhdGVncmV5OiAweDcwODA5MCxcbiAgc25vdzogMHhmZmZhZmEsXG4gIHNwcmluZ2dyZWVuOiAweDAwZmY3ZixcbiAgc3RlZWxibHVlOiAweDQ2ODJiNCxcbiAgdGFuOiAweGQyYjQ4YyxcbiAgdGVhbDogMHgwMDgwODAsXG4gIHRoaXN0bGU6IDB4ZDhiZmQ4LFxuICB0b21hdG86IDB4ZmY2MzQ3LFxuICB0dXJxdW9pc2U6IDB4NDBlMGQwLFxuICB2aW9sZXQ6IDB4ZWU4MmVlLFxuICB3aGVhdDogMHhmNWRlYjMsXG4gIHdoaXRlOiAweGZmZmZmZixcbiAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXG4gIHllbGxvdzogMHhmZmZmMDAsXG4gIHllbGxvd2dyZWVuOiAweDlhY2QzMlxufTtcblxuZGVmaW5lKENvbG9yLCBjb2xvciwge1xuICBkaXNwbGF5YWJsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmdiKCkuZGlzcGxheWFibGUoKTtcbiAgfSxcbiAgaGV4OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2IoKS5oZXgoKTtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJnYigpICsgXCJcIjtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yKGZvcm1hdCkge1xuICB2YXIgbTtcbiAgZm9ybWF0ID0gKGZvcm1hdCArIFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKG0gPSByZUhleDMuZXhlYyhmb3JtYXQpKSA/IChtID0gcGFyc2VJbnQobVsxXSwgMTYpLCBuZXcgUmdiKChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4MGYwKSwgKG0gPj4gNCAmIDB4ZikgfCAobSAmIDB4ZjApLCAoKG0gJiAweGYpIDw8IDQpIHwgKG0gJiAweGYpLCAxKSkgLy8gI2YwMFxuICAgICAgOiAobSA9IHJlSGV4Ni5leGVjKGZvcm1hdCkpID8gcmdibihwYXJzZUludChtWzFdLCAxNikpIC8vICNmZjAwMDBcbiAgICAgIDogKG0gPSByZVJnYkludGVnZXIuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSwgbVsyXSwgbVszXSwgMSkgLy8gcmdiKDI1NSwgMCwgMClcbiAgICAgIDogKG0gPSByZVJnYlBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgMSkgLy8gcmdiKDEwMCUsIDAlLCAwJSlcbiAgICAgIDogKG0gPSByZVJnYmFJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0sIG1bMl0sIG1bM10sIG1bNF0pIC8vIHJnYmEoMjU1LCAwLCAwLCAxKVxuICAgICAgOiAobSA9IHJlUmdiYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgbVs0XSkgLy8gcmdiKDEwMCUsIDAlLCAwJSwgMSlcbiAgICAgIDogKG0gPSByZUhzbFBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgMSkgLy8gaHNsKDEyMCwgNTAlLCA1MCUpXG4gICAgICA6IChtID0gcmVIc2xhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCBtWzRdKSAvLyBoc2xhKDEyMCwgNTAlLCA1MCUsIDEpXG4gICAgICA6IG5hbWVkLmhhc093blByb3BlcnR5KGZvcm1hdCkgPyByZ2JuKG5hbWVkW2Zvcm1hdF0pXG4gICAgICA6IGZvcm1hdCA9PT0gXCJ0cmFuc3BhcmVudFwiID8gbmV3IFJnYihOYU4sIE5hTiwgTmFOLCAwKVxuICAgICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiByZ2JuKG4pIHtcbiAgcmV0dXJuIG5ldyBSZ2IobiA+PiAxNiAmIDB4ZmYsIG4gPj4gOCAmIDB4ZmYsIG4gJiAweGZmLCAxKTtcbn1cblxuZnVuY3Rpb24gcmdiYShyLCBnLCBiLCBhKSB7XG4gIGlmIChhIDw9IDApIHIgPSBnID0gYiA9IE5hTjtcbiAgcmV0dXJuIG5ldyBSZ2IociwgZywgYiwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JDb252ZXJ0KG8pIHtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgUmdiO1xuICBvID0gby5yZ2IoKTtcbiAgcmV0dXJuIG5ldyBSZ2Ioby5yLCBvLmcsIG8uYiwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gcmdiQ29udmVydChyKSA6IG5ldyBSZ2IociwgZywgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5yID0gK3I7XG4gIHRoaXMuZyA9ICtnO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShSZ2IsIHJnYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGRpc3BsYXlhYmxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKDAgPD0gdGhpcy5yICYmIHRoaXMuciA8PSAyNTUpXG4gICAgICAgICYmICgwIDw9IHRoaXMuZyAmJiB0aGlzLmcgPD0gMjU1KVxuICAgICAgICAmJiAoMCA8PSB0aGlzLmIgJiYgdGhpcy5iIDw9IDI1NSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5vcGFjaXR5ICYmIHRoaXMub3BhY2l0eSA8PSAxKTtcbiAgfSxcbiAgaGV4OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCIjXCIgKyBoZXgodGhpcy5yKSArIGhleCh0aGlzLmcpICsgaGV4KHRoaXMuYik7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IHRoaXMub3BhY2l0eTsgYSA9IGlzTmFOKGEpID8gMSA6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGEpKTtcbiAgICByZXR1cm4gKGEgPT09IDEgPyBcInJnYihcIiA6IFwicmdiYShcIilcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5yKSB8fCAwKSkgKyBcIiwgXCJcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5nKSB8fCAwKSkgKyBcIiwgXCJcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5iKSB8fCAwKSlcbiAgICAgICAgKyAoYSA9PT0gMSA/IFwiKVwiIDogXCIsIFwiICsgYSArIFwiKVwiKTtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBoZXgodmFsdWUpIHtcbiAgdmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodmFsdWUpIHx8IDApKTtcbiAgcmV0dXJuICh2YWx1ZSA8IDE2ID8gXCIwXCIgOiBcIlwiKSArIHZhbHVlLnRvU3RyaW5nKDE2KTtcbn1cblxuZnVuY3Rpb24gaHNsYShoLCBzLCBsLCBhKSB7XG4gIGlmIChhIDw9IDApIGggPSBzID0gbCA9IE5hTjtcbiAgZWxzZSBpZiAobCA8PSAwIHx8IGwgPj0gMSkgaCA9IHMgPSBOYU47XG4gIGVsc2UgaWYgKHMgPD0gMCkgaCA9IE5hTjtcbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBuZXcgSHNsKG8uaCwgby5zLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IEhzbDtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBvO1xuICBvID0gby5yZ2IoKTtcbiAgdmFyIHIgPSBvLnIgLyAyNTUsXG4gICAgICBnID0gby5nIC8gMjU1LFxuICAgICAgYiA9IG8uYiAvIDI1NSxcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICBoID0gTmFOLFxuICAgICAgcyA9IG1heCAtIG1pbixcbiAgICAgIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gIGlmIChzKSB7XG4gICAgaWYgKHIgPT09IG1heCkgaCA9IChnIC0gYikgLyBzICsgKGcgPCBiKSAqIDY7XG4gICAgZWxzZSBpZiAoZyA9PT0gbWF4KSBoID0gKGIgLSByKSAvIHMgKyAyO1xuICAgIGVsc2UgaCA9IChyIC0gZykgLyBzICsgNDtcbiAgICBzIC89IGwgPCAwLjUgPyBtYXggKyBtaW4gOiAyIC0gbWF4IC0gbWluO1xuICAgIGggKj0gNjA7XG4gIH0gZWxzZSB7XG4gICAgcyA9IGwgPiAwICYmIGwgPCAxID8gMCA6IGg7XG4gIH1cbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaHNsQ29udmVydChoKSA6IG5ldyBIc2woaCwgcywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5mdW5jdGlvbiBIc2woaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEhzbCwgaHNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0gdGhpcy5oICUgMzYwICsgKHRoaXMuaCA8IDApICogMzYwLFxuICAgICAgICBzID0gaXNOYU4oaCkgfHwgaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMsXG4gICAgICAgIGwgPSB0aGlzLmwsXG4gICAgICAgIG0yID0gbCArIChsIDwgMC41ID8gbCA6IDEgLSBsKSAqIHMsXG4gICAgICAgIG0xID0gMiAqIGwgLSBtMjtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGhzbDJyZ2IoaCA+PSAyNDAgPyBoIC0gMjQwIDogaCArIDEyMCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCA8IDEyMCA/IGggKyAyNDAgOiBoIC0gMTIwLCBtMSwgbTIpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfSxcbiAgZGlzcGxheWFibGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoMCA8PSB0aGlzLnMgJiYgdGhpcy5zIDw9IDEgfHwgaXNOYU4odGhpcy5zKSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5sICYmIHRoaXMubCA8PSAxKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9XG59KSk7XG5cbi8qIEZyb20gRnZEIDEzLjM3LCBDU1MgQ29sb3IgTW9kdWxlIExldmVsIDMgKi9cbmZ1bmN0aW9uIGhzbDJyZ2IoaCwgbTEsIG0yKSB7XG4gIHJldHVybiAoaCA8IDYwID8gbTEgKyAobTIgLSBtMSkgKiBoIC8gNjBcbiAgICAgIDogaCA8IDE4MCA/IG0yXG4gICAgICA6IGggPCAyNDAgPyBtMSArIChtMiAtIG0xKSAqICgyNDAgLSBoKSAvIDYwXG4gICAgICA6IG0xKSAqIDI1NTtcbn1cbiIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZVwiO1xuaW1wb3J0IHtDb2xvciwgcmdiQ29udmVydCwgUmdiLCBkYXJrZXIsIGJyaWdodGVyfSBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IHtkZWcycmFkLCByYWQyZGVnfSBmcm9tIFwiLi9tYXRoXCI7XG5cbnZhciBBID0gLTAuMTQ4NjEsXG4gICAgQiA9ICsxLjc4Mjc3LFxuICAgIEMgPSAtMC4yOTIyNyxcbiAgICBEID0gLTAuOTA2NDksXG4gICAgRSA9ICsxLjk3Mjk0LFxuICAgIEVEID0gRSAqIEQsXG4gICAgRUIgPSBFICogQixcbiAgICBCQ19EQSA9IEIgKiBDIC0gRCAqIEE7XG5cbmZ1bmN0aW9uIGN1YmVoZWxpeENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEN1YmVoZWxpeCkgcmV0dXJuIG5ldyBDdWJlaGVsaXgoby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIFJnYikpIG8gPSByZ2JDb252ZXJ0KG8pO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbCA9IChCQ19EQSAqIGIgKyBFRCAqIHIgLSBFQiAqIGcpIC8gKEJDX0RBICsgRUQgLSBFQiksXG4gICAgICBibCA9IGIgLSBsLFxuICAgICAgayA9IChFICogKGcgLSBsKSAtIEMgKiBibCkgLyBELFxuICAgICAgcyA9IE1hdGguc3FydChrICogayArIGJsICogYmwpIC8gKEUgKiBsICogKDEgLSBsKSksIC8vIE5hTiBpZiBsPTAgb3IgbD0xXG4gICAgICBoID0gcyA/IE1hdGguYXRhbjIoaywgYmwpICogcmFkMmRlZyAtIDEyMCA6IE5hTjtcbiAgcmV0dXJuIG5ldyBDdWJlaGVsaXgoaCA8IDAgPyBoICsgMzYwIDogaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3ViZWhlbGl4KGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjdWJlaGVsaXhDb252ZXJ0KGgpIDogbmV3IEN1YmVoZWxpeChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDdWJlaGVsaXgoaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEN1YmVoZWxpeCwgY3ViZWhlbGl4LCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBDdWJlaGVsaXgodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgQ3ViZWhlbGl4KHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0gaXNOYU4odGhpcy5oKSA/IDAgOiAodGhpcy5oICsgMTIwKSAqIGRlZzJyYWQsXG4gICAgICAgIGwgPSArdGhpcy5sLFxuICAgICAgICBhID0gaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMgKiBsICogKDEgLSBsKSxcbiAgICAgICAgY29zaCA9IE1hdGguY29zKGgpLFxuICAgICAgICBzaW5oID0gTWF0aC5zaW4oaCk7XG4gICAgcmV0dXJuIG5ldyBSZ2IoXG4gICAgICAyNTUgKiAobCArIGEgKiAoQSAqIGNvc2ggKyBCICogc2luaCkpLFxuICAgICAgMjU1ICogKGwgKyBhICogKEMgKiBjb3NoICsgRCAqIHNpbmgpKSxcbiAgICAgIDI1NSAqIChsICsgYSAqIChFICogY29zaCkpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfVxufSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29uc3RydWN0b3IsIGZhY3RvcnksIHByb3RvdHlwZSkge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBmYWN0b3J5LnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQocGFyZW50LCBkZWZpbml0aW9uKSB7XG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUpO1xuICBmb3IgKHZhciBrZXkgaW4gZGVmaW5pdGlvbikgcHJvdG90eXBlW2tleV0gPSBkZWZpbml0aW9uW2tleV07XG4gIHJldHVybiBwcm90b3R5cGU7XG59XG4iLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmVcIjtcbmltcG9ydCB7Q29sb3IsIHJnYkNvbnZlcnQsIFJnYn0gZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCB7ZGVnMnJhZCwgcmFkMmRlZ30gZnJvbSBcIi4vbWF0aFwiO1xuXG4vLyBodHRwczovL2JldGEub2JzZXJ2YWJsZWhxLmNvbS9AbWJvc3RvY2svbGFiLWFuZC1yZ2JcbnZhciBLID0gMTgsXG4gICAgWG4gPSAwLjk2NDIyLFxuICAgIFluID0gMSxcbiAgICBabiA9IDAuODI1MjEsXG4gICAgdDAgPSA0IC8gMjksXG4gICAgdDEgPSA2IC8gMjksXG4gICAgdDIgPSAzICogdDEgKiB0MSxcbiAgICB0MyA9IHQxICogdDEgKiB0MTtcblxuZnVuY3Rpb24gbGFiQ29udmVydChvKSB7XG4gIGlmIChvIGluc3RhbmNlb2YgTGFiKSByZXR1cm4gbmV3IExhYihvLmwsIG8uYSwgby5iLCBvLm9wYWNpdHkpO1xuICBpZiAobyBpbnN0YW5jZW9mIEhjbCkge1xuICAgIGlmIChpc05hTihvLmgpKSByZXR1cm4gbmV3IExhYihvLmwsIDAsIDAsIG8ub3BhY2l0eSk7XG4gICAgdmFyIGggPSBvLmggKiBkZWcycmFkO1xuICAgIHJldHVybiBuZXcgTGFiKG8ubCwgTWF0aC5jb3MoaCkgKiBvLmMsIE1hdGguc2luKGgpICogby5jLCBvLm9wYWNpdHkpO1xuICB9XG4gIGlmICghKG8gaW5zdGFuY2VvZiBSZ2IpKSBvID0gcmdiQ29udmVydChvKTtcbiAgdmFyIHIgPSByZ2IybHJnYihvLnIpLFxuICAgICAgZyA9IHJnYjJscmdiKG8uZyksXG4gICAgICBiID0gcmdiMmxyZ2Ioby5iKSxcbiAgICAgIHkgPSB4eXoybGFiKCgwLjIyMjUwNDUgKiByICsgMC43MTY4Nzg2ICogZyArIDAuMDYwNjE2OSAqIGIpIC8gWW4pLCB4LCB6O1xuICBpZiAociA9PT0gZyAmJiBnID09PSBiKSB4ID0geiA9IHk7IGVsc2Uge1xuICAgIHggPSB4eXoybGFiKCgwLjQzNjA3NDcgKiByICsgMC4zODUwNjQ5ICogZyArIDAuMTQzMDgwNCAqIGIpIC8gWG4pO1xuICAgIHogPSB4eXoybGFiKCgwLjAxMzkzMjIgKiByICsgMC4wOTcxMDQ1ICogZyArIDAuNzE0MTczMyAqIGIpIC8gWm4pO1xuICB9XG4gIHJldHVybiBuZXcgTGFiKDExNiAqIHkgLSAxNiwgNTAwICogKHggLSB5KSwgMjAwICogKHkgLSB6KSwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyYXkobCwgb3BhY2l0eSkge1xuICByZXR1cm4gbmV3IExhYihsLCAwLCAwLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxhYihsLCBhLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gbGFiQ29udmVydChsKSA6IG5ldyBMYWIobCwgYSwgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGFiKGwsIGEsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMuYSA9ICthO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShMYWIsIGxhYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBMYWIodGhpcy5sICsgSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMuYSwgdGhpcy5iLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IExhYih0aGlzLmwgLSBLICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5hLCB0aGlzLmIsIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHkgPSAodGhpcy5sICsgMTYpIC8gMTE2LFxuICAgICAgICB4ID0gaXNOYU4odGhpcy5hKSA/IHkgOiB5ICsgdGhpcy5hIC8gNTAwLFxuICAgICAgICB6ID0gaXNOYU4odGhpcy5iKSA/IHkgOiB5IC0gdGhpcy5iIC8gMjAwO1xuICAgIHggPSBYbiAqIGxhYjJ4eXooeCk7XG4gICAgeSA9IFluICogbGFiMnh5eih5KTtcbiAgICB6ID0gWm4gKiBsYWIyeHl6KHopO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgbHJnYjJyZ2IoIDMuMTMzODU2MSAqIHggLSAxLjYxNjg2NjcgKiB5IC0gMC40OTA2MTQ2ICogeiksXG4gICAgICBscmdiMnJnYigtMC45Nzg3Njg0ICogeCArIDEuOTE2MTQxNSAqIHkgKyAwLjAzMzQ1NDAgKiB6KSxcbiAgICAgIGxyZ2IycmdiKCAwLjA3MTk0NTMgKiB4IC0gMC4yMjg5OTE0ICogeSArIDEuNDA1MjQyNyAqIHopLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiB4eXoybGFiKHQpIHtcbiAgcmV0dXJuIHQgPiB0MyA/IE1hdGgucG93KHQsIDEgLyAzKSA6IHQgLyB0MiArIHQwO1xufVxuXG5mdW5jdGlvbiBsYWIyeHl6KHQpIHtcbiAgcmV0dXJuIHQgPiB0MSA/IHQgKiB0ICogdCA6IHQyICogKHQgLSB0MCk7XG59XG5cbmZ1bmN0aW9uIGxyZ2IycmdiKHgpIHtcbiAgcmV0dXJuIDI1NSAqICh4IDw9IDAuMDAzMTMwOCA/IDEyLjkyICogeCA6IDEuMDU1ICogTWF0aC5wb3coeCwgMSAvIDIuNCkgLSAwLjA1NSk7XG59XG5cbmZ1bmN0aW9uIHJnYjJscmdiKHgpIHtcbiAgcmV0dXJuICh4IC89IDI1NSkgPD0gMC4wNDA0NSA/IHggLyAxMi45MiA6IE1hdGgucG93KCh4ICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG59XG5cbmZ1bmN0aW9uIGhjbENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEhjbCkgcmV0dXJuIG5ldyBIY2woby5oLCBvLmMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIExhYikpIG8gPSBsYWJDb252ZXJ0KG8pO1xuICBpZiAoby5hID09PSAwICYmIG8uYiA9PT0gMCkgcmV0dXJuIG5ldyBIY2woTmFOLCAwLCBvLmwsIG8ub3BhY2l0eSk7XG4gIHZhciBoID0gTWF0aC5hdGFuMihvLmIsIG8uYSkgKiByYWQyZGVnO1xuICByZXR1cm4gbmV3IEhjbChoIDwgMCA/IGggKyAzNjAgOiBoLCBNYXRoLnNxcnQoby5hICogby5hICsgby5iICogby5iKSwgby5sLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGNoKGwsIGMsIGgsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoY2xDb252ZXJ0KGwpIDogbmV3IEhjbChoLCBjLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoY2woaCwgYywgbCwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGhjbENvbnZlcnQoaCkgOiBuZXcgSGNsKGgsIGMsIGwsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhjbChoLCBjLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLmMgPSArYztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoSGNsLCBoY2wsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcjogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgSGNsKHRoaXMuaCwgdGhpcy5jLCB0aGlzLmwgKyBLICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBIY2wodGhpcy5oLCB0aGlzLmMsIHRoaXMubCAtIEsgKiAoayA9PSBudWxsID8gMSA6IGspLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsYWJDb252ZXJ0KHRoaXMpLnJnYigpO1xuICB9XG59KSk7XG4iLCJleHBvcnQgdmFyIGRlZzJyYWQgPSBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IHZhciByYWQyZGVnID0gMTgwIC8gTWF0aC5QSTtcbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkaXNwYXRjaH0gZnJvbSBcIi4vc3JjL2Rpc3BhdGNoXCI7XG4iLCJ2YXIgbm9vcCA9IHt2YWx1ZTogZnVuY3Rpb24oKSB7fX07XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF8gPSB7fSwgdDsgaSA8IG47ICsraSkge1xuICAgIGlmICghKHQgPSBhcmd1bWVudHNbaV0gKyBcIlwiKSB8fCAodCBpbiBfKSkgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCB0eXBlOiBcIiArIHQpO1xuICAgIF9bdF0gPSBbXTtcbiAgfVxuICByZXR1cm4gbmV3IERpc3BhdGNoKF8pO1xufVxuXG5mdW5jdGlvbiBEaXNwYXRjaChfKSB7XG4gIHRoaXMuXyA9IF87XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcywgdHlwZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIGlmICh0ICYmICF0eXBlcy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5EaXNwYXRjaC5wcm90b3R5cGUgPSBkaXNwYXRjaC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBEaXNwYXRjaCxcbiAgb246IGZ1bmN0aW9uKHR5cGVuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBfID0gdGhpcy5fLFxuICAgICAgICBUID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiLCBfKSxcbiAgICAgICAgdCxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gVC5sZW5ndGg7XG5cbiAgICAvLyBJZiBubyBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIG9mIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpICYmICh0ID0gZ2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUpKSkgcmV0dXJuIHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgYSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNldCB0aGUgY2FsbGJhY2sgZm9yIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBudWxsIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJlbW92ZSBjYWxsYmFja3Mgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY2FsbGJhY2s6IFwiICsgY2FsbGJhY2spO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgY2FsbGJhY2spO1xuICAgICAgZWxzZSBpZiAoY2FsbGJhY2sgPT0gbnVsbCkgZm9yICh0IGluIF8pIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb3B5ID0ge30sIF8gPSB0aGlzLl87XG4gICAgZm9yICh2YXIgdCBpbiBfKSBjb3B5W3RdID0gX1t0XS5zbGljZSgpO1xuICAgIHJldHVybiBuZXcgRGlzcGF0Y2goY29weSk7XG4gIH0sXG4gIGNhbGw6IGZ1bmN0aW9uKHR5cGUsIHRoYXQpIHtcbiAgICBpZiAoKG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMikgPiAwKSBmb3IgKHZhciBhcmdzID0gbmV3IEFycmF5KG4pLCBpID0gMCwgbiwgdDsgaSA8IG47ICsraSkgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbih0eXBlLCB0aGF0LCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXQodHlwZSwgbmFtZSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoLCBjOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKChjID0gdHlwZVtpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldCh0eXBlLCBuYW1lLCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKHR5cGVbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdHlwZVtpXSA9IG5vb3AsIHR5cGUgPSB0eXBlLnNsaWNlKDAsIGkpLmNvbmNhdCh0eXBlLnNsaWNlKGkgKyAxKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHR5cGUucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IGNhbGxiYWNrfSk7XG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaDtcbiIsImV4cG9ydCB7XG4gIGxpbmVhciBhcyBlYXNlTGluZWFyXG59IGZyb20gXCIuL3NyYy9saW5lYXJcIjtcblxuZXhwb3J0IHtcbiAgcXVhZEluT3V0IGFzIGVhc2VRdWFkLFxuICBxdWFkSW4gYXMgZWFzZVF1YWRJbixcbiAgcXVhZE91dCBhcyBlYXNlUXVhZE91dCxcbiAgcXVhZEluT3V0IGFzIGVhc2VRdWFkSW5PdXRcbn0gZnJvbSBcIi4vc3JjL3F1YWRcIjtcblxuZXhwb3J0IHtcbiAgY3ViaWNJbk91dCBhcyBlYXNlQ3ViaWMsXG4gIGN1YmljSW4gYXMgZWFzZUN1YmljSW4sXG4gIGN1YmljT3V0IGFzIGVhc2VDdWJpY091dCxcbiAgY3ViaWNJbk91dCBhcyBlYXNlQ3ViaWNJbk91dFxufSBmcm9tIFwiLi9zcmMvY3ViaWNcIjtcblxuZXhwb3J0IHtcbiAgcG9seUluT3V0IGFzIGVhc2VQb2x5LFxuICBwb2x5SW4gYXMgZWFzZVBvbHlJbixcbiAgcG9seU91dCBhcyBlYXNlUG9seU91dCxcbiAgcG9seUluT3V0IGFzIGVhc2VQb2x5SW5PdXRcbn0gZnJvbSBcIi4vc3JjL3BvbHlcIjtcblxuZXhwb3J0IHtcbiAgc2luSW5PdXQgYXMgZWFzZVNpbixcbiAgc2luSW4gYXMgZWFzZVNpbkluLFxuICBzaW5PdXQgYXMgZWFzZVNpbk91dCxcbiAgc2luSW5PdXQgYXMgZWFzZVNpbkluT3V0XG59IGZyb20gXCIuL3NyYy9zaW5cIjtcblxuZXhwb3J0IHtcbiAgZXhwSW5PdXQgYXMgZWFzZUV4cCxcbiAgZXhwSW4gYXMgZWFzZUV4cEluLFxuICBleHBPdXQgYXMgZWFzZUV4cE91dCxcbiAgZXhwSW5PdXQgYXMgZWFzZUV4cEluT3V0XG59IGZyb20gXCIuL3NyYy9leHBcIjtcblxuZXhwb3J0IHtcbiAgY2lyY2xlSW5PdXQgYXMgZWFzZUNpcmNsZSxcbiAgY2lyY2xlSW4gYXMgZWFzZUNpcmNsZUluLFxuICBjaXJjbGVPdXQgYXMgZWFzZUNpcmNsZU91dCxcbiAgY2lyY2xlSW5PdXQgYXMgZWFzZUNpcmNsZUluT3V0XG59IGZyb20gXCIuL3NyYy9jaXJjbGVcIjtcblxuZXhwb3J0IHtcbiAgYm91bmNlT3V0IGFzIGVhc2VCb3VuY2UsXG4gIGJvdW5jZUluIGFzIGVhc2VCb3VuY2VJbixcbiAgYm91bmNlT3V0IGFzIGVhc2VCb3VuY2VPdXQsXG4gIGJvdW5jZUluT3V0IGFzIGVhc2VCb3VuY2VJbk91dFxufSBmcm9tIFwiLi9zcmMvYm91bmNlXCI7XG5cbmV4cG9ydCB7XG4gIGJhY2tJbk91dCBhcyBlYXNlQmFjayxcbiAgYmFja0luIGFzIGVhc2VCYWNrSW4sXG4gIGJhY2tPdXQgYXMgZWFzZUJhY2tPdXQsXG4gIGJhY2tJbk91dCBhcyBlYXNlQmFja0luT3V0XG59IGZyb20gXCIuL3NyYy9iYWNrXCI7XG5cbmV4cG9ydCB7XG4gIGVsYXN0aWNPdXQgYXMgZWFzZUVsYXN0aWMsXG4gIGVsYXN0aWNJbiBhcyBlYXNlRWxhc3RpY0luLFxuICBlbGFzdGljT3V0IGFzIGVhc2VFbGFzdGljT3V0LFxuICBlbGFzdGljSW5PdXQgYXMgZWFzZUVsYXN0aWNJbk91dFxufSBmcm9tIFwiLi9zcmMvZWxhc3RpY1wiO1xuIiwidmFyIG92ZXJzaG9vdCA9IDEuNzAxNTg7XG5cbmV4cG9ydCB2YXIgYmFja0luID0gKGZ1bmN0aW9uIGN1c3RvbShzKSB7XG4gIHMgPSArcztcblxuICBmdW5jdGlvbiBiYWNrSW4odCkge1xuICAgIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpO1xuICB9XG5cbiAgYmFja0luLm92ZXJzaG9vdCA9IGN1c3RvbTtcblxuICByZXR1cm4gYmFja0luO1xufSkob3ZlcnNob290KTtcblxuZXhwb3J0IHZhciBiYWNrT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShzKSB7XG4gIHMgPSArcztcblxuICBmdW5jdGlvbiBiYWNrT3V0KHQpIHtcbiAgICByZXR1cm4gLS10ICogdCAqICgocyArIDEpICogdCArIHMpICsgMTtcbiAgfVxuXG4gIGJhY2tPdXQub3ZlcnNob290ID0gY3VzdG9tO1xuXG4gIHJldHVybiBiYWNrT3V0O1xufSkob3ZlcnNob290KTtcblxuZXhwb3J0IHZhciBiYWNrSW5PdXQgPSAoZnVuY3Rpb24gY3VzdG9tKHMpIHtcbiAgcyA9ICtzO1xuXG4gIGZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gICAgcmV0dXJuICgodCAqPSAyKSA8IDEgPyB0ICogdCAqICgocyArIDEpICogdCAtIHMpIDogKHQgLT0gMikgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAyKSAvIDI7XG4gIH1cblxuICBiYWNrSW5PdXQub3ZlcnNob290ID0gY3VzdG9tO1xuXG4gIHJldHVybiBiYWNrSW5PdXQ7XG59KShvdmVyc2hvb3QpO1xuIiwidmFyIGIxID0gNCAvIDExLFxuICAgIGIyID0gNiAvIDExLFxuICAgIGIzID0gOCAvIDExLFxuICAgIGI0ID0gMyAvIDQsXG4gICAgYjUgPSA5IC8gMTEsXG4gICAgYjYgPSAxMCAvIDExLFxuICAgIGI3ID0gMTUgLyAxNixcbiAgICBiOCA9IDIxIC8gMjIsXG4gICAgYjkgPSA2MyAvIDY0LFxuICAgIGIwID0gMSAvIGIxIC8gYjE7XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VJbih0KSB7XG4gIHJldHVybiAxIC0gYm91bmNlT3V0KDEgLSB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZU91dCh0KSB7XG4gIHJldHVybiAodCA9ICt0KSA8IGIxID8gYjAgKiB0ICogdCA6IHQgPCBiMyA/IGIwICogKHQgLT0gYjIpICogdCArIGI0IDogdCA8IGI2ID8gYjAgKiAodCAtPSBiNSkgKiB0ICsgYjcgOiBiMCAqICh0IC09IGI4KSAqIHQgKyBiOTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZUluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gMSAtIGJvdW5jZU91dCgxIC0gdCkgOiBib3VuY2VPdXQodCAtIDEpICsgMSkgLyAyO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUluKHQpIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIHQgKiB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZU91dCh0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIC0tdCAqIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCkgOiBNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKSAvIDI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3ViaWNJbih0KSB7XG4gIHJldHVybiB0ICogdCAqIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gIHJldHVybiAtLXQgKiB0ICogdCArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gdCAqIHQgKiB0IDogKHQgLT0gMikgKiB0ICogdCArIDIpIC8gMjtcbn1cbiIsInZhciB0YXUgPSAyICogTWF0aC5QSSxcbiAgICBhbXBsaXR1ZGUgPSAxLFxuICAgIHBlcmlvZCA9IDAuMztcblxuZXhwb3J0IHZhciBlbGFzdGljSW4gPSAoZnVuY3Rpb24gY3VzdG9tKGEsIHApIHtcbiAgdmFyIHMgPSBNYXRoLmFzaW4oMSAvIChhID0gTWF0aC5tYXgoMSwgYSkpKSAqIChwIC89IHRhdSk7XG5cbiAgZnVuY3Rpb24gZWxhc3RpY0luKHQpIHtcbiAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIDEwICogLS10KSAqIE1hdGguc2luKChzIC0gdCkgLyBwKTtcbiAgfVxuXG4gIGVsYXN0aWNJbi5hbXBsaXR1ZGUgPSBmdW5jdGlvbihhKSB7IHJldHVybiBjdXN0b20oYSwgcCAqIHRhdSk7IH07XG4gIGVsYXN0aWNJbi5wZXJpb2QgPSBmdW5jdGlvbihwKSB7IHJldHVybiBjdXN0b20oYSwgcCk7IH07XG5cbiAgcmV0dXJuIGVsYXN0aWNJbjtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcblxuZXhwb3J0IHZhciBlbGFzdGljT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShhLCBwKSB7XG4gIHZhciBzID0gTWF0aC5hc2luKDEgLyAoYSA9IE1hdGgubWF4KDEsIGEpKSkgKiAocCAvPSB0YXUpO1xuXG4gIGZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuICAgIHJldHVybiAxIC0gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0ID0gK3QpKSAqIE1hdGguc2luKCh0ICsgcykgLyBwKTtcbiAgfVxuXG4gIGVsYXN0aWNPdXQuYW1wbGl0dWRlID0gZnVuY3Rpb24oYSkgeyByZXR1cm4gY3VzdG9tKGEsIHAgKiB0YXUpOyB9O1xuICBlbGFzdGljT3V0LnBlcmlvZCA9IGZ1bmN0aW9uKHApIHsgcmV0dXJuIGN1c3RvbShhLCBwKTsgfTtcblxuICByZXR1cm4gZWxhc3RpY091dDtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcblxuZXhwb3J0IHZhciBlbGFzdGljSW5PdXQgPSAoZnVuY3Rpb24gY3VzdG9tKGEsIHApIHtcbiAgdmFyIHMgPSBNYXRoLmFzaW4oMSAvIChhID0gTWF0aC5tYXgoMSwgYSkpKSAqIChwIC89IHRhdSk7XG5cbiAgZnVuY3Rpb24gZWxhc3RpY0luT3V0KHQpIHtcbiAgICByZXR1cm4gKCh0ID0gdCAqIDIgLSAxKSA8IDBcbiAgICAgICAgPyBhICogTWF0aC5wb3coMiwgMTAgKiB0KSAqIE1hdGguc2luKChzIC0gdCkgLyBwKVxuICAgICAgICA6IDIgLSBhICogTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigocyArIHQpIC8gcCkpIC8gMjtcbiAgfVxuXG4gIGVsYXN0aWNJbk91dC5hbXBsaXR1ZGUgPSBmdW5jdGlvbihhKSB7IHJldHVybiBjdXN0b20oYSwgcCAqIHRhdSk7IH07XG4gIGVsYXN0aWNJbk91dC5wZXJpb2QgPSBmdW5jdGlvbihwKSB7IHJldHVybiBjdXN0b20oYSwgcCk7IH07XG5cbiAgcmV0dXJuIGVsYXN0aWNJbk91dDtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBleHBJbih0KSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCAxMCAqIHQgLSAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBPdXQodCkge1xuICByZXR1cm4gMSAtIE1hdGgucG93KDIsIC0xMCAqIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyBNYXRoLnBvdygyLCAxMCAqIHQgLSAxMCkgOiAyIC0gTWF0aC5wb3coMiwgMTAgLSAxMCAqIHQpKSAvIDI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbGluZWFyKHQpIHtcbiAgcmV0dXJuICt0O1xufVxuIiwidmFyIGV4cG9uZW50ID0gMztcblxuZXhwb3J0IHZhciBwb2x5SW4gPSAoZnVuY3Rpb24gY3VzdG9tKGUpIHtcbiAgZSA9ICtlO1xuXG4gIGZ1bmN0aW9uIHBvbHlJbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHQsIGUpO1xuICB9XG5cbiAgcG9seUluLmV4cG9uZW50ID0gY3VzdG9tO1xuXG4gIHJldHVybiBwb2x5SW47XG59KShleHBvbmVudCk7XG5cbmV4cG9ydCB2YXIgcG9seU91dCA9IChmdW5jdGlvbiBjdXN0b20oZSkge1xuICBlID0gK2U7XG5cbiAgZnVuY3Rpb24gcG9seU91dCh0KSB7XG4gICAgcmV0dXJuIDEgLSBNYXRoLnBvdygxIC0gdCwgZSk7XG4gIH1cblxuICBwb2x5T3V0LmV4cG9uZW50ID0gY3VzdG9tO1xuXG4gIHJldHVybiBwb2x5T3V0O1xufSkoZXhwb25lbnQpO1xuXG5leHBvcnQgdmFyIHBvbHlJbk91dCA9IChmdW5jdGlvbiBjdXN0b20oZSkge1xuICBlID0gK2U7XG5cbiAgZnVuY3Rpb24gcG9seUluT3V0KHQpIHtcbiAgICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyBNYXRoLnBvdyh0LCBlKSA6IDIgLSBNYXRoLnBvdygyIC0gdCwgZSkpIC8gMjtcbiAgfVxuXG4gIHBvbHlJbk91dC5leHBvbmVudCA9IGN1c3RvbTtcblxuICByZXR1cm4gcG9seUluT3V0O1xufSkoZXhwb25lbnQpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHF1YWRJbih0KSB7XG4gIHJldHVybiB0ICogdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1YWRPdXQodCkge1xuICByZXR1cm4gdCAqICgyIC0gdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWFkSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyB0ICogdCA6IC0tdCAqICgyIC0gdCkgKyAxKSAvIDI7XG59XG4iLCJ2YXIgcGkgPSBNYXRoLlBJLFxuICAgIGhhbGZQaSA9IHBpIC8gMjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNpbkluKHQpIHtcbiAgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogaGFsZlBpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbk91dCh0KSB7XG4gIHJldHVybiBNYXRoLnNpbih0ICogaGFsZlBpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbkluT3V0KHQpIHtcbiAgcmV0dXJuICgxIC0gTWF0aC5jb3MocGkgKiB0KSkgLyAyO1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm1hdERlZmF1bHRMb2NhbGUsIGZvcm1hdCwgZm9ybWF0UHJlZml4fSBmcm9tIFwiLi9zcmMvZGVmYXVsdExvY2FsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm1hdExvY2FsZX0gZnJvbSBcIi4vc3JjL2xvY2FsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm1hdFNwZWNpZmllcn0gZnJvbSBcIi4vc3JjL2Zvcm1hdFNwZWNpZmllclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHByZWNpc2lvbkZpeGVkfSBmcm9tIFwiLi9zcmMvcHJlY2lzaW9uRml4ZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwcmVjaXNpb25QcmVmaXh9IGZyb20gXCIuL3NyYy9wcmVjaXNpb25QcmVmaXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwcmVjaXNpb25Sb3VuZH0gZnJvbSBcIi4vc3JjL3ByZWNpc2lvblJvdW5kXCI7XG4iLCJpbXBvcnQgZm9ybWF0TG9jYWxlIGZyb20gXCIuL2xvY2FsZVwiO1xuXG52YXIgbG9jYWxlO1xuZXhwb3J0IHZhciBmb3JtYXQ7XG5leHBvcnQgdmFyIGZvcm1hdFByZWZpeDtcblxuZGVmYXVsdExvY2FsZSh7XG4gIGRlY2ltYWw6IFwiLlwiLFxuICB0aG91c2FuZHM6IFwiLFwiLFxuICBncm91cGluZzogWzNdLFxuICBjdXJyZW5jeTogW1wiJFwiLCBcIlwiXVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRMb2NhbGUoZGVmaW5pdGlvbikge1xuICBsb2NhbGUgPSBmb3JtYXRMb2NhbGUoZGVmaW5pdGlvbik7XG4gIGZvcm1hdCA9IGxvY2FsZS5mb3JtYXQ7XG4gIGZvcm1hdFByZWZpeCA9IGxvY2FsZS5mb3JtYXRQcmVmaXg7XG4gIHJldHVybiBsb2NhbGU7XG59XG4iLCJpbXBvcnQgZm9ybWF0RGVjaW1hbCBmcm9tIFwiLi9mb3JtYXREZWNpbWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHggPSBmb3JtYXREZWNpbWFsKE1hdGguYWJzKHgpKSwgeCA/IHhbMV0gOiBOYU47XG59XG4iLCIvLyBDb21wdXRlcyB0aGUgZGVjaW1hbCBjb2VmZmljaWVudCBhbmQgZXhwb25lbnQgb2YgdGhlIHNwZWNpZmllZCBudW1iZXIgeCB3aXRoXG4vLyBzaWduaWZpY2FudCBkaWdpdHMgcCwgd2hlcmUgeCBpcyBwb3NpdGl2ZSBhbmQgcCBpcyBpbiBbMSwgMjFdIG9yIHVuZGVmaW5lZC5cbi8vIEZvciBleGFtcGxlLCBmb3JtYXREZWNpbWFsKDEuMjMpIHJldHVybnMgW1wiMTIzXCIsIDBdLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICBpZiAoKGkgPSAoeCA9IHAgPyB4LnRvRXhwb25lbnRpYWwocCAtIDEpIDogeC50b0V4cG9uZW50aWFsKCkpLmluZGV4T2YoXCJlXCIpKSA8IDApIHJldHVybiBudWxsOyAvLyBOYU4sIMKxSW5maW5pdHlcbiAgdmFyIGksIGNvZWZmaWNpZW50ID0geC5zbGljZSgwLCBpKTtcblxuICAvLyBUaGUgc3RyaW5nIHJldHVybmVkIGJ5IHRvRXhwb25lbnRpYWwgZWl0aGVyIGhhcyB0aGUgZm9ybSBcXGRcXC5cXGQrZVstK11cXGQrXG4gIC8vIChlLmcuLCAxLjJlKzMpIG9yIHRoZSBmb3JtIFxcZGVbLStdXFxkKyAoZS5nLiwgMWUrMykuXG4gIHJldHVybiBbXG4gICAgY29lZmZpY2llbnQubGVuZ3RoID4gMSA/IGNvZWZmaWNpZW50WzBdICsgY29lZmZpY2llbnQuc2xpY2UoMikgOiBjb2VmZmljaWVudCxcbiAgICAreC5zbGljZShpICsgMSlcbiAgXTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGdyb3VwaW5nLCB0aG91c2FuZHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCB3aWR0aCkge1xuICAgIHZhciBpID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICB0ID0gW10sXG4gICAgICAgIGogPSAwLFxuICAgICAgICBnID0gZ3JvdXBpbmdbMF0sXG4gICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICB3aGlsZSAoaSA+IDAgJiYgZyA+IDApIHtcbiAgICAgIGlmIChsZW5ndGggKyBnICsgMSA+IHdpZHRoKSBnID0gTWF0aC5tYXgoMSwgd2lkdGggLSBsZW5ndGgpO1xuICAgICAgdC5wdXNoKHZhbHVlLnN1YnN0cmluZyhpIC09IGcsIGkgKyBnKSk7XG4gICAgICBpZiAoKGxlbmd0aCArPSBnICsgMSkgPiB3aWR0aCkgYnJlYWs7XG4gICAgICBnID0gZ3JvdXBpbmdbaiA9IChqICsgMSkgJSBncm91cGluZy5sZW5ndGhdO1xuICAgIH1cblxuICAgIHJldHVybiB0LnJldmVyc2UoKS5qb2luKHRob3VzYW5kcyk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihudW1lcmFscykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvWzAtOV0vZywgZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIG51bWVyYWxzWytpXTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCBmb3JtYXREZWNpbWFsIGZyb20gXCIuL2Zvcm1hdERlY2ltYWxcIjtcblxuZXhwb3J0IHZhciBwcmVmaXhFeHBvbmVudDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICB2YXIgZCA9IGZvcm1hdERlY2ltYWwoeCwgcCk7XG4gIGlmICghZCkgcmV0dXJuIHggKyBcIlwiO1xuICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgZXhwb25lbnQgPSBkWzFdLFxuICAgICAgaSA9IGV4cG9uZW50IC0gKHByZWZpeEV4cG9uZW50ID0gTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQgLyAzKSkpICogMykgKyAxLFxuICAgICAgbiA9IGNvZWZmaWNpZW50Lmxlbmd0aDtcbiAgcmV0dXJuIGkgPT09IG4gPyBjb2VmZmljaWVudFxuICAgICAgOiBpID4gbiA/IGNvZWZmaWNpZW50ICsgbmV3IEFycmF5KGkgLSBuICsgMSkuam9pbihcIjBcIilcbiAgICAgIDogaSA+IDAgPyBjb2VmZmljaWVudC5zbGljZSgwLCBpKSArIFwiLlwiICsgY29lZmZpY2llbnQuc2xpY2UoaSlcbiAgICAgIDogXCIwLlwiICsgbmV3IEFycmF5KDEgLSBpKS5qb2luKFwiMFwiKSArIGZvcm1hdERlY2ltYWwoeCwgTWF0aC5tYXgoMCwgcCArIGkgLSAxKSlbMF07IC8vIGxlc3MgdGhhbiAxeSFcbn1cbiIsImltcG9ydCBmb3JtYXREZWNpbWFsIGZyb20gXCIuL2Zvcm1hdERlY2ltYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICB2YXIgZCA9IGZvcm1hdERlY2ltYWwoeCwgcCk7XG4gIGlmICghZCkgcmV0dXJuIHggKyBcIlwiO1xuICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgZXhwb25lbnQgPSBkWzFdO1xuICByZXR1cm4gZXhwb25lbnQgPCAwID8gXCIwLlwiICsgbmV3IEFycmF5KC1leHBvbmVudCkuam9pbihcIjBcIikgKyBjb2VmZmljaWVudFxuICAgICAgOiBjb2VmZmljaWVudC5sZW5ndGggPiBleHBvbmVudCArIDEgPyBjb2VmZmljaWVudC5zbGljZSgwLCBleHBvbmVudCArIDEpICsgXCIuXCIgKyBjb2VmZmljaWVudC5zbGljZShleHBvbmVudCArIDEpXG4gICAgICA6IGNvZWZmaWNpZW50ICsgbmV3IEFycmF5KGV4cG9uZW50IC0gY29lZmZpY2llbnQubGVuZ3RoICsgMikuam9pbihcIjBcIik7XG59XG4iLCIvLyBbW2ZpbGxdYWxpZ25dW3NpZ25dW3N5bWJvbF1bMF1bd2lkdGhdWyxdWy5wcmVjaXNpb25dW35dW3R5cGVdXG52YXIgcmUgPSAvXig/OiguKT8oWzw+PV5dKSk/KFsrXFwtXFwoIF0pPyhbJCNdKT8oMCk/KFxcZCspPygsKT8oXFwuXFxkKyk/KH4pPyhbYS16JV0pPyQvaTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcikge1xuICByZXR1cm4gbmV3IEZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpO1xufVxuXG5mb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlID0gRm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZTsgLy8gaW5zdGFuY2VvZlxuXG5mdW5jdGlvbiBGb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gIGlmICghKG1hdGNoID0gcmUuZXhlYyhzcGVjaWZpZXIpKSkgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBmb3JtYXQ6IFwiICsgc3BlY2lmaWVyKTtcbiAgdmFyIG1hdGNoO1xuICB0aGlzLmZpbGwgPSBtYXRjaFsxXSB8fCBcIiBcIjtcbiAgdGhpcy5hbGlnbiA9IG1hdGNoWzJdIHx8IFwiPlwiO1xuICB0aGlzLnNpZ24gPSBtYXRjaFszXSB8fCBcIi1cIjtcbiAgdGhpcy5zeW1ib2wgPSBtYXRjaFs0XSB8fCBcIlwiO1xuICB0aGlzLnplcm8gPSAhIW1hdGNoWzVdO1xuICB0aGlzLndpZHRoID0gbWF0Y2hbNl0gJiYgK21hdGNoWzZdO1xuICB0aGlzLmNvbW1hID0gISFtYXRjaFs3XTtcbiAgdGhpcy5wcmVjaXNpb24gPSBtYXRjaFs4XSAmJiArbWF0Y2hbOF0uc2xpY2UoMSk7XG4gIHRoaXMudHJpbSA9ICEhbWF0Y2hbOV07XG4gIHRoaXMudHlwZSA9IG1hdGNoWzEwXSB8fCBcIlwiO1xufVxuXG5Gb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmZpbGxcbiAgICAgICsgdGhpcy5hbGlnblxuICAgICAgKyB0aGlzLnNpZ25cbiAgICAgICsgdGhpcy5zeW1ib2xcbiAgICAgICsgKHRoaXMuemVybyA/IFwiMFwiIDogXCJcIilcbiAgICAgICsgKHRoaXMud2lkdGggPT0gbnVsbCA/IFwiXCIgOiBNYXRoLm1heCgxLCB0aGlzLndpZHRoIHwgMCkpXG4gICAgICArICh0aGlzLmNvbW1hID8gXCIsXCIgOiBcIlwiKVxuICAgICAgKyAodGhpcy5wcmVjaXNpb24gPT0gbnVsbCA/IFwiXCIgOiBcIi5cIiArIE1hdGgubWF4KDAsIHRoaXMucHJlY2lzaW9uIHwgMCkpXG4gICAgICArICh0aGlzLnRyaW0gPyBcIn5cIiA6IFwiXCIpXG4gICAgICArIHRoaXMudHlwZTtcbn07XG4iLCIvLyBUcmltcyBpbnNpZ25pZmljYW50IHplcm9zLCBlLmcuLCByZXBsYWNlcyAxLjIwMDBrIHdpdGggMS4yay5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpIHtcbiAgb3V0OiBmb3IgKHZhciBuID0gcy5sZW5ndGgsIGkgPSAxLCBpMCA9IC0xLCBpMTsgaSA8IG47ICsraSkge1xuICAgIHN3aXRjaCAoc1tpXSkge1xuICAgICAgY2FzZSBcIi5cIjogaTAgPSBpMSA9IGk7IGJyZWFrO1xuICAgICAgY2FzZSBcIjBcIjogaWYgKGkwID09PSAwKSBpMCA9IGk7IGkxID0gaTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBpZiAoaTAgPiAwKSB7IGlmICghK3NbaV0pIGJyZWFrIG91dDsgaTAgPSAwOyB9IGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaTAgPiAwID8gcy5zbGljZSgwLCBpMCkgKyBzLnNsaWNlKGkxICsgMSkgOiBzO1xufVxuIiwiaW1wb3J0IGZvcm1hdFByZWZpeEF1dG8gZnJvbSBcIi4vZm9ybWF0UHJlZml4QXV0b1wiO1xuaW1wb3J0IGZvcm1hdFJvdW5kZWQgZnJvbSBcIi4vZm9ybWF0Um91bmRlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiJVwiOiBmdW5jdGlvbih4LCBwKSB7IHJldHVybiAoeCAqIDEwMCkudG9GaXhlZChwKTsgfSxcbiAgXCJiXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoMik7IH0sXG4gIFwiY1wiOiBmdW5jdGlvbih4KSB7IHJldHVybiB4ICsgXCJcIjsgfSxcbiAgXCJkXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoMTApOyB9LFxuICBcImVcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4geC50b0V4cG9uZW50aWFsKHApOyB9LFxuICBcImZcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4geC50b0ZpeGVkKHApOyB9LFxuICBcImdcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4geC50b1ByZWNpc2lvbihwKTsgfSxcbiAgXCJvXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoOCk7IH0sXG4gIFwicFwiOiBmdW5jdGlvbih4LCBwKSB7IHJldHVybiBmb3JtYXRSb3VuZGVkKHggKiAxMDAsIHApOyB9LFxuICBcInJcIjogZm9ybWF0Um91bmRlZCxcbiAgXCJzXCI6IGZvcm1hdFByZWZpeEF1dG8sXG4gIFwiWFwiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpOyB9LFxuICBcInhcIjogZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxNik7IH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4O1xufVxuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50XCI7XG5pbXBvcnQgZm9ybWF0R3JvdXAgZnJvbSBcIi4vZm9ybWF0R3JvdXBcIjtcbmltcG9ydCBmb3JtYXROdW1lcmFscyBmcm9tIFwiLi9mb3JtYXROdW1lcmFsc1wiO1xuaW1wb3J0IGZvcm1hdFNwZWNpZmllciBmcm9tIFwiLi9mb3JtYXRTcGVjaWZpZXJcIjtcbmltcG9ydCBmb3JtYXRUcmltIGZyb20gXCIuL2Zvcm1hdFRyaW1cIjtcbmltcG9ydCBmb3JtYXRUeXBlcyBmcm9tIFwiLi9mb3JtYXRUeXBlc1wiO1xuaW1wb3J0IHtwcmVmaXhFeHBvbmVudH0gZnJvbSBcIi4vZm9ybWF0UHJlZml4QXV0b1wiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5XCI7XG5cbnZhciBwcmVmaXhlcyA9IFtcInlcIixcInpcIixcImFcIixcImZcIixcInBcIixcIm5cIixcIsK1XCIsXCJtXCIsXCJcIixcImtcIixcIk1cIixcIkdcIixcIlRcIixcIlBcIixcIkVcIixcIlpcIixcIllcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGxvY2FsZSkge1xuICB2YXIgZ3JvdXAgPSBsb2NhbGUuZ3JvdXBpbmcgJiYgbG9jYWxlLnRob3VzYW5kcyA/IGZvcm1hdEdyb3VwKGxvY2FsZS5ncm91cGluZywgbG9jYWxlLnRob3VzYW5kcykgOiBpZGVudGl0eSxcbiAgICAgIGN1cnJlbmN5ID0gbG9jYWxlLmN1cnJlbmN5LFxuICAgICAgZGVjaW1hbCA9IGxvY2FsZS5kZWNpbWFsLFxuICAgICAgbnVtZXJhbHMgPSBsb2NhbGUubnVtZXJhbHMgPyBmb3JtYXROdW1lcmFscyhsb2NhbGUubnVtZXJhbHMpIDogaWRlbnRpdHksXG4gICAgICBwZXJjZW50ID0gbG9jYWxlLnBlcmNlbnQgfHwgXCIlXCI7XG5cbiAgZnVuY3Rpb24gbmV3Rm9ybWF0KHNwZWNpZmllcikge1xuICAgIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpO1xuXG4gICAgdmFyIGZpbGwgPSBzcGVjaWZpZXIuZmlsbCxcbiAgICAgICAgYWxpZ24gPSBzcGVjaWZpZXIuYWxpZ24sXG4gICAgICAgIHNpZ24gPSBzcGVjaWZpZXIuc2lnbixcbiAgICAgICAgc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCxcbiAgICAgICAgemVybyA9IHNwZWNpZmllci56ZXJvLFxuICAgICAgICB3aWR0aCA9IHNwZWNpZmllci53aWR0aCxcbiAgICAgICAgY29tbWEgPSBzcGVjaWZpZXIuY29tbWEsXG4gICAgICAgIHByZWNpc2lvbiA9IHNwZWNpZmllci5wcmVjaXNpb24sXG4gICAgICAgIHRyaW0gPSBzcGVjaWZpZXIudHJpbSxcbiAgICAgICAgdHlwZSA9IHNwZWNpZmllci50eXBlO1xuXG4gICAgLy8gVGhlIFwiblwiIHR5cGUgaXMgYW4gYWxpYXMgZm9yIFwiLGdcIi5cbiAgICBpZiAodHlwZSA9PT0gXCJuXCIpIGNvbW1hID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gVGhlIFwiXCIgdHlwZSwgYW5kIGFueSBpbnZhbGlkIHR5cGUsIGlzIGFuIGFsaWFzIGZvciBcIi4xMn5nXCIuXG4gICAgZWxzZSBpZiAoIWZvcm1hdFR5cGVzW3R5cGVdKSBwcmVjaXNpb24gPT0gbnVsbCAmJiAocHJlY2lzaW9uID0gMTIpLCB0cmltID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gSWYgemVybyBmaWxsIGlzIHNwZWNpZmllZCwgcGFkZGluZyBnb2VzIGFmdGVyIHNpZ24gYW5kIGJlZm9yZSBkaWdpdHMuXG4gICAgaWYgKHplcm8gfHwgKGZpbGwgPT09IFwiMFwiICYmIGFsaWduID09PSBcIj1cIikpIHplcm8gPSB0cnVlLCBmaWxsID0gXCIwXCIsIGFsaWduID0gXCI9XCI7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAvLyBGb3IgU0ktcHJlZml4LCB0aGUgc3VmZml4IGlzIGxhemlseSBjb21wdXRlZC5cbiAgICB2YXIgcHJlZml4ID0gc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5WzBdIDogc3ltYm9sID09PSBcIiNcIiAmJiAvW2JveFhdLy50ZXN0KHR5cGUpID8gXCIwXCIgKyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBcIlwiLFxuICAgICAgICBzdWZmaXggPSBzeW1ib2wgPT09IFwiJFwiID8gY3VycmVuY3lbMV0gOiAvWyVwXS8udGVzdCh0eXBlKSA/IHBlcmNlbnQgOiBcIlwiO1xuXG4gICAgLy8gV2hhdCBmb3JtYXQgZnVuY3Rpb24gc2hvdWxkIHdlIHVzZT9cbiAgICAvLyBJcyB0aGlzIGFuIGludGVnZXIgdHlwZT9cbiAgICAvLyBDYW4gdGhpcyB0eXBlIGdlbmVyYXRlIGV4cG9uZW50aWFsIG5vdGF0aW9uP1xuICAgIHZhciBmb3JtYXRUeXBlID0gZm9ybWF0VHlwZXNbdHlwZV0sXG4gICAgICAgIG1heWJlU3VmZml4ID0gL1tkZWZncHJzJV0vLnRlc3QodHlwZSk7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgcHJlY2lzaW9uIGlmIG5vdCBzcGVjaWZpZWQsXG4gICAgLy8gb3IgY2xhbXAgdGhlIHNwZWNpZmllZCBwcmVjaXNpb24gdG8gdGhlIHN1cHBvcnRlZCByYW5nZS5cbiAgICAvLyBGb3Igc2lnbmlmaWNhbnQgcHJlY2lzaW9uLCBpdCBtdXN0IGJlIGluIFsxLCAyMV0uXG4gICAgLy8gRm9yIGZpeGVkIHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMCwgMjBdLlxuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiA9PSBudWxsID8gNlxuICAgICAgICA6IC9bZ3Byc10vLnRlc3QodHlwZSkgPyBNYXRoLm1heCgxLCBNYXRoLm1pbigyMSwgcHJlY2lzaW9uKSlcbiAgICAgICAgOiBNYXRoLm1heCgwLCBNYXRoLm1pbigyMCwgcHJlY2lzaW9uKSk7XG5cbiAgICBmdW5jdGlvbiBmb3JtYXQodmFsdWUpIHtcbiAgICAgIHZhciB2YWx1ZVByZWZpeCA9IHByZWZpeCxcbiAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IHN1ZmZpeCxcbiAgICAgICAgICBpLCBuLCBjO1xuXG4gICAgICBpZiAodHlwZSA9PT0gXCJjXCIpIHtcbiAgICAgICAgdmFsdWVTdWZmaXggPSBmb3JtYXRUeXBlKHZhbHVlKSArIHZhbHVlU3VmZml4O1xuICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcblxuICAgICAgICAvLyBQZXJmb3JtIHRoZSBpbml0aWFsIGZvcm1hdHRpbmcuXG4gICAgICAgIHZhciB2YWx1ZU5lZ2F0aXZlID0gdmFsdWUgPCAwO1xuICAgICAgICB2YWx1ZSA9IGZvcm1hdFR5cGUoTWF0aC5hYnModmFsdWUpLCBwcmVjaXNpb24pO1xuXG4gICAgICAgIC8vIFRyaW0gaW5zaWduaWZpY2FudCB6ZXJvcy5cbiAgICAgICAgaWYgKHRyaW0pIHZhbHVlID0gZm9ybWF0VHJpbSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gSWYgYSBuZWdhdGl2ZSB2YWx1ZSByb3VuZHMgdG8gemVybyBkdXJpbmcgZm9ybWF0dGluZywgdHJlYXQgYXMgcG9zaXRpdmUuXG4gICAgICAgIGlmICh2YWx1ZU5lZ2F0aXZlICYmICt2YWx1ZSA9PT0gMCkgdmFsdWVOZWdhdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgICAgICB2YWx1ZVByZWZpeCA9ICh2YWx1ZU5lZ2F0aXZlID8gKHNpZ24gPT09IFwiKFwiID8gc2lnbiA6IFwiLVwiKSA6IHNpZ24gPT09IFwiLVwiIHx8IHNpZ24gPT09IFwiKFwiID8gXCJcIiA6IHNpZ24pICsgdmFsdWVQcmVmaXg7XG4gICAgICAgIHZhbHVlU3VmZml4ID0gKHR5cGUgPT09IFwic1wiID8gcHJlZml4ZXNbOCArIHByZWZpeEV4cG9uZW50IC8gM10gOiBcIlwiKSArIHZhbHVlU3VmZml4ICsgKHZhbHVlTmVnYXRpdmUgJiYgc2lnbiA9PT0gXCIoXCIgPyBcIilcIiA6IFwiXCIpO1xuXG4gICAgICAgIC8vIEJyZWFrIHRoZSBmb3JtYXR0ZWQgdmFsdWUgaW50byB0aGUgaW50ZWdlciDigJx2YWx1ZeKAnSBwYXJ0IHRoYXQgY2FuIGJlXG4gICAgICAgIC8vIGdyb3VwZWQsIGFuZCBmcmFjdGlvbmFsIG9yIGV4cG9uZW50aWFsIOKAnHN1ZmZpeOKAnSBwYXJ0IHRoYXQgaXMgbm90LlxuICAgICAgICBpZiAobWF5YmVTdWZmaXgpIHtcbiAgICAgICAgICBpID0gLTEsIG4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgICAgIGlmIChjID0gdmFsdWUuY2hhckNvZGVBdChpKSwgNDggPiBjIHx8IGMgPiA1Nykge1xuICAgICAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IChjID09PSA0NiA/IGRlY2ltYWwgKyB2YWx1ZS5zbGljZShpICsgMSkgOiB2YWx1ZS5zbGljZShpKSkgKyB2YWx1ZVN1ZmZpeDtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBmaWxsIGNoYXJhY3RlciBpcyBub3QgXCIwXCIsIGdyb3VwaW5nIGlzIGFwcGxpZWQgYmVmb3JlIHBhZGRpbmcuXG4gICAgICBpZiAoY29tbWEgJiYgIXplcm8pIHZhbHVlID0gZ3JvdXAodmFsdWUsIEluZmluaXR5KTtcblxuICAgICAgLy8gQ29tcHV0ZSB0aGUgcGFkZGluZy5cbiAgICAgIHZhciBsZW5ndGggPSB2YWx1ZVByZWZpeC5sZW5ndGggKyB2YWx1ZS5sZW5ndGggKyB2YWx1ZVN1ZmZpeC5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IGxlbmd0aCA8IHdpZHRoID8gbmV3IEFycmF5KHdpZHRoIC0gbGVuZ3RoICsgMSkuam9pbihmaWxsKSA6IFwiXCI7XG5cbiAgICAgIC8vIElmIHRoZSBmaWxsIGNoYXJhY3RlciBpcyBcIjBcIiwgZ3JvdXBpbmcgaXMgYXBwbGllZCBhZnRlciBwYWRkaW5nLlxuICAgICAgaWYgKGNvbW1hICYmIHplcm8pIHZhbHVlID0gZ3JvdXAocGFkZGluZyArIHZhbHVlLCBwYWRkaW5nLmxlbmd0aCA/IHdpZHRoIC0gdmFsdWVTdWZmaXgubGVuZ3RoIDogSW5maW5pdHkpLCBwYWRkaW5nID0gXCJcIjtcblxuICAgICAgLy8gUmVjb25zdHJ1Y3QgdGhlIGZpbmFsIG91dHB1dCBiYXNlZCBvbiB0aGUgZGVzaXJlZCBhbGlnbm1lbnQuXG4gICAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgIGNhc2UgXCI8XCI6IHZhbHVlID0gdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4ICsgcGFkZGluZzsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI9XCI6IHZhbHVlID0gdmFsdWVQcmVmaXggKyBwYWRkaW5nICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeDsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJeXCI6IHZhbHVlID0gcGFkZGluZy5zbGljZSgwLCBsZW5ndGggPSBwYWRkaW5nLmxlbmd0aCA+PiAxKSArIHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeCArIHBhZGRpbmcuc2xpY2UobGVuZ3RoKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IHZhbHVlID0gcGFkZGluZyArIHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeDsgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudW1lcmFscyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZm9ybWF0LnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3BlY2lmaWVyICsgXCJcIjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFByZWZpeChzcGVjaWZpZXIsIHZhbHVlKSB7XG4gICAgdmFyIGYgPSBuZXdGb3JtYXQoKHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpLCBzcGVjaWZpZXIudHlwZSA9IFwiZlwiLCBzcGVjaWZpZXIpKSxcbiAgICAgICAgZSA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50KHZhbHVlKSAvIDMpKSkgKiAzLFxuICAgICAgICBrID0gTWF0aC5wb3coMTAsIC1lKSxcbiAgICAgICAgcHJlZml4ID0gcHJlZml4ZXNbOCArIGUgLyAzXTtcbiAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmKGsgKiB2YWx1ZSkgKyBwcmVmaXg7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm9ybWF0OiBuZXdGb3JtYXQsXG4gICAgZm9ybWF0UHJlZml4OiBmb3JtYXRQcmVmaXhcbiAgfTtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCAtZXhwb25lbnQoTWF0aC5hYnMoc3RlcCkpKTtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwLCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMgLSBleHBvbmVudChNYXRoLmFicyhzdGVwKSkpO1xufVxuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXAsIG1heCkge1xuICBzdGVwID0gTWF0aC5hYnMoc3RlcCksIG1heCA9IE1hdGguYWJzKG1heCkgLSBzdGVwO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgZXhwb25lbnQobWF4KSAtIGV4cG9uZW50KHN0ZXApKSArIDE7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGV9IGZyb20gXCIuL3NyYy92YWx1ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQXJyYXl9IGZyb20gXCIuL3NyYy9hcnJheVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQmFzaXN9IGZyb20gXCIuL3NyYy9iYXNpc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQmFzaXNDbG9zZWR9IGZyb20gXCIuL3NyYy9iYXNpc0Nsb3NlZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlRGF0ZX0gZnJvbSBcIi4vc3JjL2RhdGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZU51bWJlcn0gZnJvbSBcIi4vc3JjL251bWJlclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlT2JqZWN0fSBmcm9tIFwiLi9zcmMvb2JqZWN0XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVSb3VuZH0gZnJvbSBcIi4vc3JjL3JvdW5kXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVTdHJpbmd9IGZyb20gXCIuL3NyYy9zdHJpbmdcIjtcbmV4cG9ydCB7aW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MsIGludGVycG9sYXRlVHJhbnNmb3JtU3ZnfSBmcm9tIFwiLi9zcmMvdHJhbnNmb3JtL2luZGV4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVab29tfSBmcm9tIFwiLi9zcmMvem9vbVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlUmdiLCByZ2JCYXNpcyBhcyBpbnRlcnBvbGF0ZVJnYkJhc2lzLCByZ2JCYXNpc0Nsb3NlZCBhcyBpbnRlcnBvbGF0ZVJnYkJhc2lzQ2xvc2VkfSBmcm9tIFwiLi9zcmMvcmdiXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVIc2wsIGhzbExvbmcgYXMgaW50ZXJwb2xhdGVIc2xMb25nfSBmcm9tIFwiLi9zcmMvaHNsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVMYWJ9IGZyb20gXCIuL3NyYy9sYWJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUhjbCwgaGNsTG9uZyBhcyBpbnRlcnBvbGF0ZUhjbExvbmd9IGZyb20gXCIuL3NyYy9oY2xcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUN1YmVoZWxpeCwgY3ViZWhlbGl4TG9uZyBhcyBpbnRlcnBvbGF0ZUN1YmVoZWxpeExvbmd9IGZyb20gXCIuL3NyYy9jdWJlaGVsaXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwaWVjZXdpc2V9IGZyb20gXCIuL3NyYy9waWVjZXdpc2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBxdWFudGl6ZX0gZnJvbSBcIi4vc3JjL3F1YW50aXplXCI7XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgbmIgPSBiID8gYi5sZW5ndGggOiAwLFxuICAgICAgbmEgPSBhID8gTWF0aC5taW4obmIsIGEubGVuZ3RoKSA6IDAsXG4gICAgICB4ID0gbmV3IEFycmF5KG5hKSxcbiAgICAgIGMgPSBuZXcgQXJyYXkobmIpLFxuICAgICAgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgbmE7ICsraSkgeFtpXSA9IHZhbHVlKGFbaV0sIGJbaV0pO1xuICBmb3IgKDsgaSA8IG5iOyArK2kpIGNbaV0gPSBiW2ldO1xuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG5hOyArK2kpIGNbaV0gPSB4W2ldKHQpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJhc2lzKHQxLCB2MCwgdjEsIHYyLCB2Mykge1xuICB2YXIgdDIgPSB0MSAqIHQxLCB0MyA9IHQyICogdDE7XG4gIHJldHVybiAoKDEgLSAzICogdDEgKyAzICogdDIgLSB0MykgKiB2MFxuICAgICAgKyAoNCAtIDYgKiB0MiArIDMgKiB0MykgKiB2MVxuICAgICAgKyAoMSArIDMgKiB0MSArIDMgKiB0MiAtIDMgKiB0MykgKiB2MlxuICAgICAgKyB0MyAqIHYzKSAvIDY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gdCA8PSAwID8gKHQgPSAwKSA6IHQgPj0gMSA/ICh0ID0gMSwgbiAtIDEpIDogTWF0aC5mbG9vcih0ICogbiksXG4gICAgICAgIHYxID0gdmFsdWVzW2ldLFxuICAgICAgICB2MiA9IHZhbHVlc1tpICsgMV0sXG4gICAgICAgIHYwID0gaSA+IDAgPyB2YWx1ZXNbaSAtIDFdIDogMiAqIHYxIC0gdjIsXG4gICAgICAgIHYzID0gaSA8IG4gLSAxID8gdmFsdWVzW2kgKyAyXSA6IDIgKiB2MiAtIHYxO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7YmFzaXN9IGZyb20gXCIuL2Jhc2lzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKCgodCAlPSAxKSA8IDAgPyArK3QgOiB0KSAqIG4pLFxuICAgICAgICB2MCA9IHZhbHVlc1soaSArIG4gLSAxKSAlIG5dLFxuICAgICAgICB2MSA9IHZhbHVlc1tpICUgbl0sXG4gICAgICAgIHYyID0gdmFsdWVzWyhpICsgMSkgJSBuXSxcbiAgICAgICAgdjMgPSB2YWx1ZXNbKGkgKyAyKSAlIG5dO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuXG5mdW5jdGlvbiBsaW5lYXIoYSwgZCkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgdCAqIGQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4cG9uZW50aWFsKGEsIGIsIHkpIHtcbiAgcmV0dXJuIGEgPSBNYXRoLnBvdyhhLCB5KSwgYiA9IE1hdGgucG93KGIsIHkpIC0gYSwgeSA9IDEgLyB5LCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KGEgKyB0ICogYiwgeSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodWUoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkID4gMTgwIHx8IGQgPCAtMTgwID8gZCAtIDM2MCAqIE1hdGgucm91bmQoZCAvIDM2MCkgOiBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtbWEoeSkge1xuICByZXR1cm4gKHkgPSAreSkgPT09IDEgPyBub2dhbW1hIDogZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBiIC0gYSA/IGV4cG9uZW50aWFsKGEsIGIsIHkpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZ2FtbWEoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCJpbXBvcnQge2N1YmVoZWxpeCBhcyBjb2xvckN1YmVoZWxpeH0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgY29sb3IsIHtodWV9IGZyb20gXCIuL2NvbG9yXCI7XG5cbmZ1bmN0aW9uIGN1YmVoZWxpeChodWUpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBjdWJlaGVsaXhHYW1tYSh5KSB7XG4gICAgeSA9ICt5O1xuXG4gICAgZnVuY3Rpb24gY3ViZWhlbGl4KHN0YXJ0LCBlbmQpIHtcbiAgICAgIHZhciBoID0gaHVlKChzdGFydCA9IGNvbG9yQ3ViZWhlbGl4KHN0YXJ0KSkuaCwgKGVuZCA9IGNvbG9yQ3ViZWhlbGl4KGVuZCkpLmgpLFxuICAgICAgICAgIHMgPSBjb2xvcihzdGFydC5zLCBlbmQucyksXG4gICAgICAgICAgbCA9IGNvbG9yKHN0YXJ0LmwsIGVuZC5sKSxcbiAgICAgICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgc3RhcnQuaCA9IGgodCk7XG4gICAgICAgIHN0YXJ0LnMgPSBzKHQpO1xuICAgICAgICBzdGFydC5sID0gbChNYXRoLnBvdyh0LCB5KSk7XG4gICAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjdWJlaGVsaXguZ2FtbWEgPSBjdWJlaGVsaXhHYW1tYTtcblxuICAgIHJldHVybiBjdWJlaGVsaXg7XG4gIH0pKDEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjdWJlaGVsaXgoaHVlKTtcbmV4cG9ydCB2YXIgY3ViZWhlbGl4TG9uZyA9IGN1YmVoZWxpeChjb2xvcik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBkID0gbmV3IERhdGU7XG4gIHJldHVybiBhID0gK2EsIGIgLT0gYSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBkLnNldFRpbWUoYSArIGIgKiB0KSwgZDtcbiAgfTtcbn1cbiIsImltcG9ydCB7aGNsIGFzIGNvbG9ySGNsfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciwge2h1ZX0gZnJvbSBcIi4vY29sb3JcIjtcblxuZnVuY3Rpb24gaGNsKGh1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHZhciBoID0gaHVlKChzdGFydCA9IGNvbG9ySGNsKHN0YXJ0KSkuaCwgKGVuZCA9IGNvbG9ySGNsKGVuZCkpLmgpLFxuICAgICAgICBjID0gY29sb3Ioc3RhcnQuYywgZW5kLmMpLFxuICAgICAgICBsID0gY29sb3Ioc3RhcnQubCwgZW5kLmwpLFxuICAgICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5oID0gaCh0KTtcbiAgICAgIHN0YXJ0LmMgPSBjKHQpO1xuICAgICAgc3RhcnQubCA9IGwodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoY2woaHVlKTtcbmV4cG9ydCB2YXIgaGNsTG9uZyA9IGhjbChjb2xvcik7XG4iLCJpbXBvcnQge2hzbCBhcyBjb2xvckhzbH0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgY29sb3IsIHtodWV9IGZyb20gXCIuL2NvbG9yXCI7XG5cbmZ1bmN0aW9uIGhzbChodWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgaCA9IGh1ZSgoc3RhcnQgPSBjb2xvckhzbChzdGFydCkpLmgsIChlbmQgPSBjb2xvckhzbChlbmQpKS5oKSxcbiAgICAgICAgcyA9IGNvbG9yKHN0YXJ0LnMsIGVuZC5zKSxcbiAgICAgICAgbCA9IGNvbG9yKHN0YXJ0LmwsIGVuZC5sKSxcbiAgICAgICAgb3BhY2l0eSA9IGNvbG9yKHN0YXJ0Lm9wYWNpdHksIGVuZC5vcGFjaXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgc3RhcnQuaCA9IGgodCk7XG4gICAgICBzdGFydC5zID0gcyh0KTtcbiAgICAgIHN0YXJ0LmwgPSBsKHQpO1xuICAgICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaHNsKGh1ZSk7XG5leHBvcnQgdmFyIGhzbExvbmcgPSBoc2woY29sb3IpO1xuIiwiaW1wb3J0IHtsYWIgYXMgY29sb3JMYWJ9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGNvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxhYihzdGFydCwgZW5kKSB7XG4gIHZhciBsID0gY29sb3IoKHN0YXJ0ID0gY29sb3JMYWIoc3RhcnQpKS5sLCAoZW5kID0gY29sb3JMYWIoZW5kKSkubCksXG4gICAgICBhID0gY29sb3Ioc3RhcnQuYSwgZW5kLmEpLFxuICAgICAgYiA9IGNvbG9yKHN0YXJ0LmIsIGVuZC5iKSxcbiAgICAgIG9wYWNpdHkgPSBjb2xvcihzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgc3RhcnQubCA9IGwodCk7XG4gICAgc3RhcnQuYSA9IGEodCk7XG4gICAgc3RhcnQuYiA9IGIodCk7XG4gICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPSArYSwgYiAtPSBhLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKyBiICogdDtcbiAgfTtcbn1cbiIsImltcG9ydCB2YWx1ZSBmcm9tIFwiLi92YWx1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBpID0ge30sXG4gICAgICBjID0ge30sXG4gICAgICBrO1xuXG4gIGlmIChhID09PSBudWxsIHx8IHR5cGVvZiBhICE9PSBcIm9iamVjdFwiKSBhID0ge307XG4gIGlmIChiID09PSBudWxsIHx8IHR5cGVvZiBiICE9PSBcIm9iamVjdFwiKSBiID0ge307XG5cbiAgZm9yIChrIGluIGIpIHtcbiAgICBpZiAoayBpbiBhKSB7XG4gICAgICBpW2tdID0gdmFsdWUoYVtrXSwgYltrXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNba10gPSBiW2tdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChrIGluIGkpIGNba10gPSBpW2tdKHQpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGllY2V3aXNlKGludGVycG9sYXRlLCB2YWx1ZXMpIHtcbiAgdmFyIGkgPSAwLCBuID0gdmFsdWVzLmxlbmd0aCAtIDEsIHYgPSB2YWx1ZXNbMF0sIEkgPSBuZXcgQXJyYXkobiA8IDAgPyAwIDogbik7XG4gIHdoaWxlIChpIDwgbikgSVtpXSA9IGludGVycG9sYXRlKHYsIHYgPSB2YWx1ZXNbKytpXSk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihuIC0gMSwgTWF0aC5mbG9vcih0ICo9IG4pKSk7XG4gICAgcmV0dXJuIElbaV0odCAtIGkpO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJwb2xhdG9yLCBuKSB7XG4gIHZhciBzYW1wbGVzID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkgc2FtcGxlc1tpXSA9IGludGVycG9sYXRvcihpIC8gKG4gLSAxKSk7XG4gIHJldHVybiBzYW1wbGVzO1xufVxuIiwiaW1wb3J0IHtyZ2IgYXMgY29sb3JSZ2J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGJhc2lzIGZyb20gXCIuL2Jhc2lzXCI7XG5pbXBvcnQgYmFzaXNDbG9zZWQgZnJvbSBcIi4vYmFzaXNDbG9zZWRcIjtcbmltcG9ydCBub2dhbW1hLCB7Z2FtbWF9IGZyb20gXCIuL2NvbG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiByZ2JHYW1tYSh5KSB7XG4gIHZhciBjb2xvciA9IGdhbW1hKHkpO1xuXG4gIGZ1bmN0aW9uIHJnYihzdGFydCwgZW5kKSB7XG4gICAgdmFyIHIgPSBjb2xvcigoc3RhcnQgPSBjb2xvclJnYihzdGFydCkpLnIsIChlbmQgPSBjb2xvclJnYihlbmQpKS5yKSxcbiAgICAgICAgZyA9IGNvbG9yKHN0YXJ0LmcsIGVuZC5nKSxcbiAgICAgICAgYiA9IGNvbG9yKHN0YXJ0LmIsIGVuZC5iKSxcbiAgICAgICAgb3BhY2l0eSA9IG5vZ2FtbWEoc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5yID0gcih0KTtcbiAgICAgIHN0YXJ0LmcgPSBnKHQpO1xuICAgICAgc3RhcnQuYiA9IGIodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxuXG4gIHJnYi5nYW1tYSA9IHJnYkdhbW1hO1xuXG4gIHJldHVybiByZ2I7XG59KSgxKTtcblxuZnVuY3Rpb24gcmdiU3BsaW5lKHNwbGluZSkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgdmFyIG4gPSBjb2xvcnMubGVuZ3RoLFxuICAgICAgICByID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBnID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBiID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBpLCBjb2xvcjtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBjb2xvciA9IGNvbG9yUmdiKGNvbG9yc1tpXSk7XG4gICAgICByW2ldID0gY29sb3IuciB8fCAwO1xuICAgICAgZ1tpXSA9IGNvbG9yLmcgfHwgMDtcbiAgICAgIGJbaV0gPSBjb2xvci5iIHx8IDA7XG4gICAgfVxuICAgIHIgPSBzcGxpbmUocik7XG4gICAgZyA9IHNwbGluZShnKTtcbiAgICBiID0gc3BsaW5lKGIpO1xuICAgIGNvbG9yLm9wYWNpdHkgPSAxO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBjb2xvci5yID0gcih0KTtcbiAgICAgIGNvbG9yLmcgPSBnKHQpO1xuICAgICAgY29sb3IuYiA9IGIodCk7XG4gICAgICByZXR1cm4gY29sb3IgKyBcIlwiO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgcmdiQmFzaXMgPSByZ2JTcGxpbmUoYmFzaXMpO1xuZXhwb3J0IHZhciByZ2JCYXNpc0Nsb3NlZCA9IHJnYlNwbGluZShiYXNpc0Nsb3NlZCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgLT0gYSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGEgKyBiICogdCk7XG4gIH07XG59XG4iLCJpbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlclwiO1xuXG52YXIgcmVBID0gL1stK10/KD86XFxkK1xcLj9cXGQqfFxcLj9cXGQrKSg/OltlRV1bLStdP1xcZCspPy9nLFxuICAgIHJlQiA9IG5ldyBSZWdFeHAocmVBLnNvdXJjZSwgXCJnXCIpO1xuXG5mdW5jdGlvbiB6ZXJvKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBiO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbmUoYikge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBiKHQpICsgXCJcIjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgYmkgPSByZUEubGFzdEluZGV4ID0gcmVCLmxhc3RJbmRleCA9IDAsIC8vIHNjYW4gaW5kZXggZm9yIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGFtLCAvLyBjdXJyZW50IG1hdGNoIGluIGFcbiAgICAgIGJtLCAvLyBjdXJyZW50IG1hdGNoIGluIGJcbiAgICAgIGJzLCAvLyBzdHJpbmcgcHJlY2VkaW5nIGN1cnJlbnQgbnVtYmVyIGluIGIsIGlmIGFueVxuICAgICAgaSA9IC0xLCAvLyBpbmRleCBpbiBzXG4gICAgICBzID0gW10sIC8vIHN0cmluZyBjb25zdGFudHMgYW5kIHBsYWNlaG9sZGVyc1xuICAgICAgcSA9IFtdOyAvLyBudW1iZXIgaW50ZXJwb2xhdG9yc1xuXG4gIC8vIENvZXJjZSBpbnB1dHMgdG8gc3RyaW5ncy5cbiAgYSA9IGEgKyBcIlwiLCBiID0gYiArIFwiXCI7XG5cbiAgLy8gSW50ZXJwb2xhdGUgcGFpcnMgb2YgbnVtYmVycyBpbiBhICYgYi5cbiAgd2hpbGUgKChhbSA9IHJlQS5leGVjKGEpKVxuICAgICAgJiYgKGJtID0gcmVCLmV4ZWMoYikpKSB7XG4gICAgaWYgKChicyA9IGJtLmluZGV4KSA+IGJpKSB7IC8vIGEgc3RyaW5nIHByZWNlZGVzIHRoZSBuZXh0IG51bWJlciBpbiBiXG4gICAgICBicyA9IGIuc2xpY2UoYmksIGJzKTtcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBicztcbiAgICB9XG4gICAgaWYgKChhbSA9IGFtWzBdKSA9PT0gKGJtID0gYm1bMF0pKSB7IC8vIG51bWJlcnMgaW4gYSAmIGIgbWF0Y2hcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJtOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBibTtcbiAgICB9IGVsc2UgeyAvLyBpbnRlcnBvbGF0ZSBub24tbWF0Y2hpbmcgbnVtYmVyc1xuICAgICAgc1srK2ldID0gbnVsbDtcbiAgICAgIHEucHVzaCh7aTogaSwgeDogbnVtYmVyKGFtLCBibSl9KTtcbiAgICB9XG4gICAgYmkgPSByZUIubGFzdEluZGV4O1xuICB9XG5cbiAgLy8gQWRkIHJlbWFpbnMgb2YgYi5cbiAgaWYgKGJpIDwgYi5sZW5ndGgpIHtcbiAgICBicyA9IGIuc2xpY2UoYmkpO1xuICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gIH1cblxuICAvLyBTcGVjaWFsIG9wdGltaXphdGlvbiBmb3Igb25seSBhIHNpbmdsZSBtYXRjaC5cbiAgLy8gT3RoZXJ3aXNlLCBpbnRlcnBvbGF0ZSBlYWNoIG9mIHRoZSBudW1iZXJzIGFuZCByZWpvaW4gdGhlIHN0cmluZy5cbiAgcmV0dXJuIHMubGVuZ3RoIDwgMiA/IChxWzBdXG4gICAgICA/IG9uZShxWzBdLngpXG4gICAgICA6IHplcm8oYikpXG4gICAgICA6IChiID0gcS5sZW5ndGgsIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbzsgaSA8IGI7ICsraSkgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gICAgICAgIH0pO1xufVxuIiwidmFyIGRlZ3JlZXMgPSAxODAgLyBNYXRoLlBJO1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0ge1xuICB0cmFuc2xhdGVYOiAwLFxuICB0cmFuc2xhdGVZOiAwLFxuICByb3RhdGU6IDAsXG4gIHNrZXdYOiAwLFxuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYiwgYywgZCwgZSwgZikge1xuICB2YXIgc2NhbGVYLCBzY2FsZVksIHNrZXdYO1xuICBpZiAoc2NhbGVYID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpKSBhIC89IHNjYWxlWCwgYiAvPSBzY2FsZVg7XG4gIGlmIChza2V3WCA9IGEgKiBjICsgYiAqIGQpIGMgLT0gYSAqIHNrZXdYLCBkIC09IGIgKiBza2V3WDtcbiAgaWYgKHNjYWxlWSA9IE1hdGguc3FydChjICogYyArIGQgKiBkKSkgYyAvPSBzY2FsZVksIGQgLz0gc2NhbGVZLCBza2V3WCAvPSBzY2FsZVk7XG4gIGlmIChhICogZCA8IGIgKiBjKSBhID0gLWEsIGIgPSAtYiwgc2tld1ggPSAtc2tld1gsIHNjYWxlWCA9IC1zY2FsZVg7XG4gIHJldHVybiB7XG4gICAgdHJhbnNsYXRlWDogZSxcbiAgICB0cmFuc2xhdGVZOiBmLFxuICAgIHJvdGF0ZTogTWF0aC5hdGFuMihiLCBhKSAqIGRlZ3JlZXMsXG4gICAgc2tld1g6IE1hdGguYXRhbihza2V3WCkgKiBkZWdyZWVzLFxuICAgIHNjYWxlWDogc2NhbGVYLFxuICAgIHNjYWxlWTogc2NhbGVZXG4gIH07XG59XG4iLCJpbXBvcnQgbnVtYmVyIGZyb20gXCIuLi9udW1iZXJcIjtcbmltcG9ydCB7cGFyc2VDc3MsIHBhcnNlU3ZnfSBmcm9tIFwiLi9wYXJzZVwiO1xuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZSwgcHhDb21tYSwgcHhQYXJlbiwgZGVnUGFyZW4pIHtcblxuICBmdW5jdGlvbiBwb3Aocykge1xuICAgIHJldHVybiBzLmxlbmd0aCA/IHMucG9wKCkgKyBcIiBcIiA6IFwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2xhdGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2goXCJ0cmFuc2xhdGUoXCIsIG51bGwsIHB4Q29tbWEsIG51bGwsIHB4UGFyZW4pO1xuICAgICAgcS5wdXNoKHtpOiBpIC0gNCwgeDogbnVtYmVyKHhhLCB4Yil9LCB7aTogaSAtIDIsIHg6IG51bWJlcih5YSwgeWIpfSk7XG4gICAgfSBlbHNlIGlmICh4YiB8fCB5Yikge1xuICAgICAgcy5wdXNoKFwidHJhbnNsYXRlKFwiICsgeGIgKyBweENvbW1hICsgeWIgKyBweFBhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByb3RhdGUoYSwgYiwgcywgcSkge1xuICAgIGlmIChhICE9PSBiKSB7XG4gICAgICBpZiAoYSAtIGIgPiAxODApIGIgKz0gMzYwOyBlbHNlIGlmIChiIC0gYSA+IDE4MCkgYSArPSAzNjA7IC8vIHNob3J0ZXN0IHBhdGhcbiAgICAgIHEucHVzaCh7aTogcy5wdXNoKHBvcChzKSArIFwicm90YXRlKFwiLCBudWxsLCBkZWdQYXJlbikgLSAyLCB4OiBudW1iZXIoYSwgYil9KTtcbiAgICB9IGVsc2UgaWYgKGIpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2tld1goYSwgYiwgcywgcSkge1xuICAgIGlmIChhICE9PSBiKSB7XG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInNrZXdYKFwiLCBudWxsLCBkZWdQYXJlbikgLSAyLCB4OiBudW1iZXIoYSwgYil9KTtcbiAgICB9IGVsc2UgaWYgKGIpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNrZXdYKFwiICsgYiArIGRlZ1BhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY2FsZSh4YSwgeWEsIHhiLCB5YiwgcywgcSkge1xuICAgIGlmICh4YSAhPT0geGIgfHwgeWEgIT09IHliKSB7XG4gICAgICB2YXIgaSA9IHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiLCBudWxsLCBcIixcIiwgbnVsbCwgXCIpXCIpO1xuICAgICAgcS5wdXNoKHtpOiBpIC0gNCwgeDogbnVtYmVyKHhhLCB4Yil9LCB7aTogaSAtIDIsIHg6IG51bWJlcih5YSwgeWIpfSk7XG4gICAgfSBlbHNlIGlmICh4YiAhPT0gMSB8fCB5YiAhPT0gMSkge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwic2NhbGUoXCIgKyB4YiArIFwiLFwiICsgeWIgKyBcIilcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgcyA9IFtdLCAvLyBzdHJpbmcgY29uc3RhbnRzIGFuZCBwbGFjZWhvbGRlcnNcbiAgICAgICAgcSA9IFtdOyAvLyBudW1iZXIgaW50ZXJwb2xhdG9yc1xuICAgIGEgPSBwYXJzZShhKSwgYiA9IHBhcnNlKGIpO1xuICAgIHRyYW5zbGF0ZShhLnRyYW5zbGF0ZVgsIGEudHJhbnNsYXRlWSwgYi50cmFuc2xhdGVYLCBiLnRyYW5zbGF0ZVksIHMsIHEpO1xuICAgIHJvdGF0ZShhLnJvdGF0ZSwgYi5yb3RhdGUsIHMsIHEpO1xuICAgIHNrZXdYKGEuc2tld1gsIGIuc2tld1gsIHMsIHEpO1xuICAgIHNjYWxlKGEuc2NhbGVYLCBhLnNjYWxlWSwgYi5zY2FsZVgsIGIuc2NhbGVZLCBzLCBxKTtcbiAgICBhID0gYiA9IG51bGw7IC8vIGdjXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBpID0gLTEsIG4gPSBxLmxlbmd0aCwgbztcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgaW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MgPSBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZUNzcywgXCJweCwgXCIsIFwicHgpXCIsIFwiZGVnKVwiKTtcbmV4cG9ydCB2YXIgaW50ZXJwb2xhdGVUcmFuc2Zvcm1TdmcgPSBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZVN2ZywgXCIsIFwiLCBcIilcIiwgXCIpXCIpO1xuIiwiaW1wb3J0IGRlY29tcG9zZSwge2lkZW50aXR5fSBmcm9tIFwiLi9kZWNvbXBvc2VcIjtcblxudmFyIGNzc05vZGUsXG4gICAgY3NzUm9vdCxcbiAgICBjc3NWaWV3LFxuICAgIHN2Z05vZGU7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNzcyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwibm9uZVwiKSByZXR1cm4gaWRlbnRpdHk7XG4gIGlmICghY3NzTm9kZSkgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIiksIGNzc1Jvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGNzc1ZpZXcgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcbiAgY3NzTm9kZS5zdHlsZS50cmFuc2Zvcm0gPSB2YWx1ZTtcbiAgdmFsdWUgPSBjc3NWaWV3LmdldENvbXB1dGVkU3R5bGUoY3NzUm9vdC5hcHBlbmRDaGlsZChjc3NOb2RlKSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKTtcbiAgY3NzUm9vdC5yZW1vdmVDaGlsZChjc3NOb2RlKTtcbiAgdmFsdWUgPSB2YWx1ZS5zbGljZSg3LCAtMSkuc3BsaXQoXCIsXCIpO1xuICByZXR1cm4gZGVjb21wb3NlKCt2YWx1ZVswXSwgK3ZhbHVlWzFdLCArdmFsdWVbMl0sICt2YWx1ZVszXSwgK3ZhbHVlWzRdLCArdmFsdWVbNV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdmcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBpZGVudGl0eTtcbiAgaWYgKCFzdmdOb2RlKSBzdmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICBzdmdOb2RlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB2YWx1ZSk7XG4gIGlmICghKHZhbHVlID0gc3ZnTm9kZS50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpKSkgcmV0dXJuIGlkZW50aXR5O1xuICB2YWx1ZSA9IHZhbHVlLm1hdHJpeDtcbiAgcmV0dXJuIGRlY29tcG9zZSh2YWx1ZS5hLCB2YWx1ZS5iLCB2YWx1ZS5jLCB2YWx1ZS5kLCB2YWx1ZS5lLCB2YWx1ZS5mKTtcbn1cbiIsImltcG9ydCB7Y29sb3J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IHJnYiBmcm9tIFwiLi9yZ2JcIjtcbmltcG9ydCBhcnJheSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IGRhdGUgZnJvbSBcIi4vZGF0ZVwiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcbmltcG9ydCBvYmplY3QgZnJvbSBcIi4vb2JqZWN0XCI7XG5pbXBvcnQgc3RyaW5nIGZyb20gXCIuL3N0cmluZ1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIHQgPSB0eXBlb2YgYiwgYztcbiAgcmV0dXJuIGIgPT0gbnVsbCB8fCB0ID09PSBcImJvb2xlYW5cIiA/IGNvbnN0YW50KGIpXG4gICAgICA6ICh0ID09PSBcIm51bWJlclwiID8gbnVtYmVyXG4gICAgICA6IHQgPT09IFwic3RyaW5nXCIgPyAoKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIHJnYikgOiBzdHJpbmcpXG4gICAgICA6IGIgaW5zdGFuY2VvZiBjb2xvciA/IHJnYlxuICAgICAgOiBiIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGVcbiAgICAgIDogQXJyYXkuaXNBcnJheShiKSA/IGFycmF5XG4gICAgICA6IHR5cGVvZiBiLnZhbHVlT2YgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgYi50b1N0cmluZyAhPT0gXCJmdW5jdGlvblwiIHx8IGlzTmFOKGIpID8gb2JqZWN0XG4gICAgICA6IG51bWJlcikoYSwgYik7XG59XG4iLCJ2YXIgcmhvID0gTWF0aC5TUVJUMixcbiAgICByaG8yID0gMixcbiAgICByaG80ID0gNCxcbiAgICBlcHNpbG9uMiA9IDFlLTEyO1xuXG5mdW5jdGlvbiBjb3NoKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKHgpKSArIDEgLyB4KSAvIDI7XG59XG5cbmZ1bmN0aW9uIHNpbmgoeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoeCkpIC0gMSAvIHgpIC8gMjtcbn1cblxuZnVuY3Rpb24gdGFuaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCgyICogeCkpIC0gMSkgLyAoeCArIDEpO1xufVxuXG4vLyBwMCA9IFt1eDAsIHV5MCwgdzBdXG4vLyBwMSA9IFt1eDEsIHV5MSwgdzFdXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwMCwgcDEpIHtcbiAgdmFyIHV4MCA9IHAwWzBdLCB1eTAgPSBwMFsxXSwgdzAgPSBwMFsyXSxcbiAgICAgIHV4MSA9IHAxWzBdLCB1eTEgPSBwMVsxXSwgdzEgPSBwMVsyXSxcbiAgICAgIGR4ID0gdXgxIC0gdXgwLFxuICAgICAgZHkgPSB1eTEgLSB1eTAsXG4gICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5LFxuICAgICAgaSxcbiAgICAgIFM7XG5cbiAgLy8gU3BlY2lhbCBjYXNlIGZvciB1MCDiiYUgdTEuXG4gIGlmIChkMiA8IGVwc2lsb24yKSB7XG4gICAgUyA9IE1hdGgubG9nKHcxIC8gdzApIC8gcmhvO1xuICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB1eDAgKyB0ICogZHgsXG4gICAgICAgIHV5MCArIHQgKiBkeSxcbiAgICAgICAgdzAgKiBNYXRoLmV4cChyaG8gKiB0ICogUylcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgLy8gR2VuZXJhbCBjYXNlLlxuICBlbHNlIHtcbiAgICB2YXIgZDEgPSBNYXRoLnNxcnQoZDIpLFxuICAgICAgICBiMCA9ICh3MSAqIHcxIC0gdzAgKiB3MCArIHJobzQgKiBkMikgLyAoMiAqIHcwICogcmhvMiAqIGQxKSxcbiAgICAgICAgYjEgPSAodzEgKiB3MSAtIHcwICogdzAgLSByaG80ICogZDIpIC8gKDIgKiB3MSAqIHJobzIgKiBkMSksXG4gICAgICAgIHIwID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIwICogYjAgKyAxKSAtIGIwKSxcbiAgICAgICAgcjEgPSBNYXRoLmxvZyhNYXRoLnNxcnQoYjEgKiBiMSArIDEpIC0gYjEpO1xuICAgIFMgPSAocjEgLSByMCkgLyByaG87XG4gICAgaSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBzID0gdCAqIFMsXG4gICAgICAgICAgY29zaHIwID0gY29zaChyMCksXG4gICAgICAgICAgdSA9IHcwIC8gKHJobzIgKiBkMSkgKiAoY29zaHIwICogdGFuaChyaG8gKiBzICsgcjApIC0gc2luaChyMCkpO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdXgwICsgdSAqIGR4LFxuICAgICAgICB1eTAgKyB1ICogZHksXG4gICAgICAgIHcwICogY29zaHIwIC8gY29zaChyaG8gKiBzICsgcjApXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGkuZHVyYXRpb24gPSBTICogMTAwMDtcblxuICByZXR1cm4gaTtcbn1cbiIsImV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVCYW5kLFxuICBwb2ludCBhcyBzY2FsZVBvaW50XG59IGZyb20gXCIuL3NyYy9iYW5kXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVJZGVudGl0eVxufSBmcm9tIFwiLi9zcmMvaWRlbnRpdHlcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZUxpbmVhclxufSBmcm9tIFwiLi9zcmMvbGluZWFyXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVMb2dcbn0gZnJvbSBcIi4vc3JjL2xvZ1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlT3JkaW5hbCxcbiAgaW1wbGljaXQgYXMgc2NhbGVJbXBsaWNpdFxufSBmcm9tIFwiLi9zcmMvb3JkaW5hbFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlUG93LFxuICBzcXJ0IGFzIHNjYWxlU3FydFxufSBmcm9tIFwiLi9zcmMvcG93XCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVRdWFudGlsZVxufSBmcm9tIFwiLi9zcmMvcXVhbnRpbGVcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVF1YW50aXplXG59IGZyb20gXCIuL3NyYy9xdWFudGl6ZVwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlVGhyZXNob2xkXG59IGZyb20gXCIuL3NyYy90aHJlc2hvbGRcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVRpbWVcbn0gZnJvbSBcIi4vc3JjL3RpbWVcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVV0Y1xufSBmcm9tIFwiLi9zcmMvdXRjVGltZVwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlU2VxdWVudGlhbFxufSBmcm9tIFwiLi9zcmMvc2VxdWVudGlhbFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlRGl2ZXJnaW5nXG59IGZyb20gXCIuL3NyYy9kaXZlcmdpbmdcIjtcbiIsInZhciBhcnJheSA9IEFycmF5LnByb3RvdHlwZTtcblxuZXhwb3J0IHZhciBtYXAgPSBhcnJheS5tYXA7XG5leHBvcnQgdmFyIHNsaWNlID0gYXJyYXkuc2xpY2U7XG4iLCJpbXBvcnQge3JhbmdlIGFzIHNlcXVlbmNlfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCBvcmRpbmFsIGZyb20gXCIuL29yZGluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFuZCgpIHtcbiAgdmFyIHNjYWxlID0gb3JkaW5hbCgpLnVua25vd24odW5kZWZpbmVkKSxcbiAgICAgIGRvbWFpbiA9IHNjYWxlLmRvbWFpbixcbiAgICAgIG9yZGluYWxSYW5nZSA9IHNjYWxlLnJhbmdlLFxuICAgICAgcmFuZ2UgPSBbMCwgMV0sXG4gICAgICBzdGVwLFxuICAgICAgYmFuZHdpZHRoLFxuICAgICAgcm91bmQgPSBmYWxzZSxcbiAgICAgIHBhZGRpbmdJbm5lciA9IDAsXG4gICAgICBwYWRkaW5nT3V0ZXIgPSAwLFxuICAgICAgYWxpZ24gPSAwLjU7XG5cbiAgZGVsZXRlIHNjYWxlLnVua25vd247XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICB2YXIgbiA9IGRvbWFpbigpLmxlbmd0aCxcbiAgICAgICAgcmV2ZXJzZSA9IHJhbmdlWzFdIDwgcmFuZ2VbMF0sXG4gICAgICAgIHN0YXJ0ID0gcmFuZ2VbcmV2ZXJzZSAtIDBdLFxuICAgICAgICBzdG9wID0gcmFuZ2VbMSAtIHJldmVyc2VdO1xuICAgIHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIE1hdGgubWF4KDEsIG4gLSBwYWRkaW5nSW5uZXIgKyBwYWRkaW5nT3V0ZXIgKiAyKTtcbiAgICBpZiAocm91bmQpIHN0ZXAgPSBNYXRoLmZsb29yKHN0ZXApO1xuICAgIHN0YXJ0ICs9IChzdG9wIC0gc3RhcnQgLSBzdGVwICogKG4gLSBwYWRkaW5nSW5uZXIpKSAqIGFsaWduO1xuICAgIGJhbmR3aWR0aCA9IHN0ZXAgKiAoMSAtIHBhZGRpbmdJbm5lcik7XG4gICAgaWYgKHJvdW5kKSBzdGFydCA9IE1hdGgucm91bmQoc3RhcnQpLCBiYW5kd2lkdGggPSBNYXRoLnJvdW5kKGJhbmR3aWR0aCk7XG4gICAgdmFyIHZhbHVlcyA9IHNlcXVlbmNlKG4pLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBzdGFydCArIHN0ZXAgKiBpOyB9KTtcbiAgICByZXR1cm4gb3JkaW5hbFJhbmdlKHJldmVyc2UgPyB2YWx1ZXMucmV2ZXJzZSgpIDogdmFsdWVzKTtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4oXyksIHJlc2NhbGUoKSkgOiBkb21haW4oKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYW5nZSA9IFsrX1swXSwgK19bMV1dLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiByYW5nZSA9IFsrX1swXSwgK19bMV1dLCByb3VuZCA9IHRydWUsIHJlc2NhbGUoKTtcbiAgfTtcblxuICBzY2FsZS5iYW5kd2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYmFuZHdpZHRoO1xuICB9O1xuXG4gIHNjYWxlLnN0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc3RlcDtcbiAgfTtcblxuICBzY2FsZS5yb3VuZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyb3VuZCA9ICEhXywgcmVzY2FsZSgpKSA6IHJvdW5kO1xuICB9O1xuXG4gIHNjYWxlLnBhZGRpbmcgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocGFkZGluZ0lubmVyID0gcGFkZGluZ091dGVyID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgXykpLCByZXNjYWxlKCkpIDogcGFkZGluZ0lubmVyO1xuICB9O1xuXG4gIHNjYWxlLnBhZGRpbmdJbm5lciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRkaW5nSW5uZXIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBfKSksIHJlc2NhbGUoKSkgOiBwYWRkaW5nSW5uZXI7XG4gIH07XG5cbiAgc2NhbGUucGFkZGluZ091dGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZGRpbmdPdXRlciA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIF8pKSwgcmVzY2FsZSgpKSA6IHBhZGRpbmdPdXRlcjtcbiAgfTtcblxuICBzY2FsZS5hbGlnbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbGlnbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIF8pKSwgcmVzY2FsZSgpKSA6IGFsaWduO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYmFuZCgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKCkpXG4gICAgICAgIC5yYW5nZShyYW5nZSlcbiAgICAgICAgLnJvdW5kKHJvdW5kKVxuICAgICAgICAucGFkZGluZ0lubmVyKHBhZGRpbmdJbm5lcilcbiAgICAgICAgLnBhZGRpbmdPdXRlcihwYWRkaW5nT3V0ZXIpXG4gICAgICAgIC5hbGlnbihhbGlnbik7XG4gIH07XG5cbiAgcmV0dXJuIHJlc2NhbGUoKTtcbn1cblxuZnVuY3Rpb24gcG9pbnRpc2goc2NhbGUpIHtcbiAgdmFyIGNvcHkgPSBzY2FsZS5jb3B5O1xuXG4gIHNjYWxlLnBhZGRpbmcgPSBzY2FsZS5wYWRkaW5nT3V0ZXI7XG4gIGRlbGV0ZSBzY2FsZS5wYWRkaW5nSW5uZXI7XG4gIGRlbGV0ZSBzY2FsZS5wYWRkaW5nT3V0ZXI7XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwb2ludGlzaChjb3B5KCkpO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50KCkge1xuICByZXR1cm4gcG9pbnRpc2goYmFuZCgpLnBhZGRpbmdJbm5lcigxKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImltcG9ydCB7YmlzZWN0fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGUgYXMgaW50ZXJwb2xhdGVWYWx1ZSwgaW50ZXJwb2xhdGVSb3VuZH0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge21hcCwgc2xpY2V9IGZyb20gXCIuL2FycmF5XCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XG5cbnZhciB1bml0ID0gWzAsIDFdO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVpbnRlcnBvbGF0ZUxpbmVhcihhLCBiKSB7XG4gIHJldHVybiAoYiAtPSAoYSA9ICthKSlcbiAgICAgID8gZnVuY3Rpb24oeCkgeyByZXR1cm4gKHggLSBhKSAvIGI7IH1cbiAgICAgIDogY29uc3RhbnQoYik7XG59XG5cbmZ1bmN0aW9uIGRlaW50ZXJwb2xhdGVDbGFtcChkZWludGVycG9sYXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIGQgPSBkZWludGVycG9sYXRlKGEgPSArYSwgYiA9ICtiKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4geCA8PSBhID8gMCA6IHggPj0gYiA/IDEgOiBkKHgpOyB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWludGVycG9sYXRlQ2xhbXAocmVpbnRlcnBvbGF0ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgIHZhciByID0gcmVpbnRlcnBvbGF0ZShhID0gK2EsIGIgPSArYik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHsgcmV0dXJuIHQgPD0gMCA/IGEgOiB0ID49IDEgPyBiIDogcih0KTsgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYmltYXAoZG9tYWluLCByYW5nZSwgZGVpbnRlcnBvbGF0ZSwgcmVpbnRlcnBvbGF0ZSkge1xuICB2YXIgZDAgPSBkb21haW5bMF0sIGQxID0gZG9tYWluWzFdLCByMCA9IHJhbmdlWzBdLCByMSA9IHJhbmdlWzFdO1xuICBpZiAoZDEgPCBkMCkgZDAgPSBkZWludGVycG9sYXRlKGQxLCBkMCksIHIwID0gcmVpbnRlcnBvbGF0ZShyMSwgcjApO1xuICBlbHNlIGQwID0gZGVpbnRlcnBvbGF0ZShkMCwgZDEpLCByMCA9IHJlaW50ZXJwb2xhdGUocjAsIHIxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHIwKGQwKHgpKTsgfTtcbn1cblxuZnVuY3Rpb24gcG9seW1hcChkb21haW4sIHJhbmdlLCBkZWludGVycG9sYXRlLCByZWludGVycG9sYXRlKSB7XG4gIHZhciBqID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKSAtIDEsXG4gICAgICBkID0gbmV3IEFycmF5KGopLFxuICAgICAgciA9IG5ldyBBcnJheShqKSxcbiAgICAgIGkgPSAtMTtcblxuICAvLyBSZXZlcnNlIGRlc2NlbmRpbmcgZG9tYWlucy5cbiAgaWYgKGRvbWFpbltqXSA8IGRvbWFpblswXSkge1xuICAgIGRvbWFpbiA9IGRvbWFpbi5zbGljZSgpLnJldmVyc2UoKTtcbiAgICByYW5nZSA9IHJhbmdlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICB9XG5cbiAgd2hpbGUgKCsraSA8IGopIHtcbiAgICBkW2ldID0gZGVpbnRlcnBvbGF0ZShkb21haW5baV0sIGRvbWFpbltpICsgMV0pO1xuICAgIHJbaV0gPSByZWludGVycG9sYXRlKHJhbmdlW2ldLCByYW5nZVtpICsgMV0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICB2YXIgaSA9IGJpc2VjdChkb21haW4sIHgsIDEsIGopIC0gMTtcbiAgICByZXR1cm4gcltpXShkW2ldKHgpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldFxuICAgICAgLmRvbWFpbihzb3VyY2UuZG9tYWluKCkpXG4gICAgICAucmFuZ2Uoc291cmNlLnJhbmdlKCkpXG4gICAgICAuaW50ZXJwb2xhdGUoc291cmNlLmludGVycG9sYXRlKCkpXG4gICAgICAuY2xhbXAoc291cmNlLmNsYW1wKCkpO1xufVxuXG4vLyBkZWludGVycG9sYXRlKGEsIGIpKHgpIHRha2VzIGEgZG9tYWluIHZhbHVlIHggaW4gW2EsYl0gYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcGFyYW1ldGVyIHQgaW4gWzAsMV0uXG4vLyByZWludGVycG9sYXRlKGEsIGIpKHQpIHRha2VzIGEgcGFyYW1ldGVyIHQgaW4gWzAsMV0gYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgZG9tYWluIHZhbHVlIHggaW4gW2EsYl0uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250aW51b3VzKGRlaW50ZXJwb2xhdGUsIHJlaW50ZXJwb2xhdGUpIHtcbiAgdmFyIGRvbWFpbiA9IHVuaXQsXG4gICAgICByYW5nZSA9IHVuaXQsXG4gICAgICBpbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlVmFsdWUsXG4gICAgICBjbGFtcCA9IGZhbHNlLFxuICAgICAgcGllY2V3aXNlLFxuICAgICAgb3V0cHV0LFxuICAgICAgaW5wdXQ7XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICBwaWVjZXdpc2UgPSBNYXRoLm1pbihkb21haW4ubGVuZ3RoLCByYW5nZS5sZW5ndGgpID4gMiA/IHBvbHltYXAgOiBiaW1hcDtcbiAgICBvdXRwdXQgPSBpbnB1dCA9IG51bGw7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiAob3V0cHV0IHx8IChvdXRwdXQgPSBwaWVjZXdpc2UoZG9tYWluLCByYW5nZSwgY2xhbXAgPyBkZWludGVycG9sYXRlQ2xhbXAoZGVpbnRlcnBvbGF0ZSkgOiBkZWludGVycG9sYXRlLCBpbnRlcnBvbGF0ZSkpKSgreCk7XG4gIH1cblxuICBzY2FsZS5pbnZlcnQgPSBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIChpbnB1dCB8fCAoaW5wdXQgPSBwaWVjZXdpc2UocmFuZ2UsIGRvbWFpbiwgZGVpbnRlcnBvbGF0ZUxpbmVhciwgY2xhbXAgPyByZWludGVycG9sYXRlQ2xhbXAocmVpbnRlcnBvbGF0ZSkgOiByZWludGVycG9sYXRlKSkpKCt5KTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZG9tYWluID0gbWFwLmNhbGwoXywgbnVtYmVyKSwgcmVzY2FsZSgpKSA6IGRvbWFpbi5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJhbmdlID0gc2xpY2UuY2FsbChfKSwgcmVzY2FsZSgpKSA6IHJhbmdlLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2VSb3VuZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gcmFuZ2UgPSBzbGljZS5jYWxsKF8pLCBpbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlUm91bmQsIHJlc2NhbGUoKTtcbiAgfTtcblxuICBzY2FsZS5jbGFtcCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjbGFtcCA9ICEhXywgcmVzY2FsZSgpKSA6IGNsYW1wO1xuICB9O1xuXG4gIHNjYWxlLmludGVycG9sYXRlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGludGVycG9sYXRlID0gXywgcmVzY2FsZSgpKSA6IGludGVycG9sYXRlO1xuICB9O1xuXG4gIHJldHVybiByZXNjYWxlKCk7XG59XG4iLCJpbXBvcnQge2xpbmVhcmlzaH0gZnJvbSBcIi4vbGluZWFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpdmVyZ2luZyhpbnRlcnBvbGF0b3IpIHtcbiAgdmFyIHgwID0gMCxcbiAgICAgIHgxID0gMC41LFxuICAgICAgeDIgPSAxLFxuICAgICAgazEwID0gMSxcbiAgICAgIGsyMSA9IDEsXG4gICAgICBjbGFtcCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICB2YXIgdCA9IDAuNSArICgoeCA9ICt4KSAtIHgxKSAqICh4IDwgeDEgPyBrMTAgOiBrMjEpO1xuICAgIHJldHVybiBpbnRlcnBvbGF0b3IoY2xhbXAgPyBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0KSkgOiB0KTtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MCA9ICtfWzBdLCB4MSA9ICtfWzFdLCB4MiA9ICtfWzJdLCBrMTAgPSB4MCA9PT0geDEgPyAwIDogMC41IC8gKHgxIC0geDApLCBrMjEgPSB4MSA9PT0geDIgPyAwIDogMC41IC8gKHgyIC0geDEpLCBzY2FsZSkgOiBbeDAsIHgxLCB4Ml07XG4gIH07XG5cbiAgc2NhbGUuY2xhbXAgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY2xhbXAgPSAhIV8sIHNjYWxlKSA6IGNsYW1wO1xuICB9O1xuXG4gIHNjYWxlLmludGVycG9sYXRvciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbnRlcnBvbGF0b3IgPSBfLCBzY2FsZSkgOiBpbnRlcnBvbGF0b3I7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXZlcmdpbmcoaW50ZXJwb2xhdG9yKS5kb21haW4oW3gwLCB4MSwgeDJdKS5jbGFtcChjbGFtcCk7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG4iLCJpbXBvcnQge21hcH0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCB7bGluZWFyaXNofSBmcm9tIFwiLi9saW5lYXJcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlkZW50aXR5KCkge1xuICB2YXIgZG9tYWluID0gWzAsIDFdO1xuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICByZXR1cm4gK3g7XG4gIH1cblxuICBzY2FsZS5pbnZlcnQgPSBzY2FsZTtcblxuICBzY2FsZS5kb21haW4gPSBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4gPSBtYXAuY2FsbChfLCBudW1iZXIpLCBzY2FsZSkgOiBkb21haW4uc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5KCkuZG9tYWluKGRvbWFpbik7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG4iLCJpbXBvcnQge3RpY2tzLCB0aWNrSW5jcmVtZW50fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGVOdW1iZXIgYXMgcmVpbnRlcnBvbGF0ZX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge2RlZmF1bHQgYXMgY29udGludW91cywgY29weSwgZGVpbnRlcnBvbGF0ZUxpbmVhciBhcyBkZWludGVycG9sYXRlfSBmcm9tIFwiLi9jb250aW51b3VzXCI7XG5pbXBvcnQgdGlja0Zvcm1hdCBmcm9tIFwiLi90aWNrRm9ybWF0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJpc2goc2NhbGUpIHtcbiAgdmFyIGRvbWFpbiA9IHNjYWxlLmRvbWFpbjtcblxuICBzY2FsZS50aWNrcyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgdmFyIGQgPSBkb21haW4oKTtcbiAgICByZXR1cm4gdGlja3MoZFswXSwgZFtkLmxlbmd0aCAtIDFdLCBjb3VudCA9PSBudWxsID8gMTAgOiBjb3VudCk7XG4gIH07XG5cbiAgc2NhbGUudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKGNvdW50LCBzcGVjaWZpZXIpIHtcbiAgICByZXR1cm4gdGlja0Zvcm1hdChkb21haW4oKSwgY291bnQsIHNwZWNpZmllcik7XG4gIH07XG5cbiAgc2NhbGUubmljZSA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgaWYgKGNvdW50ID09IG51bGwpIGNvdW50ID0gMTA7XG5cbiAgICB2YXIgZCA9IGRvbWFpbigpLFxuICAgICAgICBpMCA9IDAsXG4gICAgICAgIGkxID0gZC5sZW5ndGggLSAxLFxuICAgICAgICBzdGFydCA9IGRbaTBdLFxuICAgICAgICBzdG9wID0gZFtpMV0sXG4gICAgICAgIHN0ZXA7XG5cbiAgICBpZiAoc3RvcCA8IHN0YXJ0KSB7XG4gICAgICBzdGVwID0gc3RhcnQsIHN0YXJ0ID0gc3RvcCwgc3RvcCA9IHN0ZXA7XG4gICAgICBzdGVwID0gaTAsIGkwID0gaTEsIGkxID0gc3RlcDtcbiAgICB9XG5cbiAgICBzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuXG4gICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICBzdGFydCA9IE1hdGguZmxvb3Ioc3RhcnQgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICBzdG9wID0gTWF0aC5jZWlsKHN0b3AgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICBzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICAgIH0gZWxzZSBpZiAoc3RlcCA8IDApIHtcbiAgICAgIHN0YXJ0ID0gTWF0aC5jZWlsKHN0YXJ0ICogc3RlcCkgLyBzdGVwO1xuICAgICAgc3RvcCA9IE1hdGguZmxvb3Ioc3RvcCAqIHN0ZXApIC8gc3RlcDtcbiAgICAgIHN0ZXAgPSB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCk7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICBkW2kwXSA9IE1hdGguZmxvb3Ioc3RhcnQgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICBkW2kxXSA9IE1hdGguY2VpbChzdG9wIC8gc3RlcCkgKiBzdGVwO1xuICAgICAgZG9tYWluKGQpO1xuICAgIH0gZWxzZSBpZiAoc3RlcCA8IDApIHtcbiAgICAgIGRbaTBdID0gTWF0aC5jZWlsKHN0YXJ0ICogc3RlcCkgLyBzdGVwO1xuICAgICAgZFtpMV0gPSBNYXRoLmZsb29yKHN0b3AgKiBzdGVwKSAvIHN0ZXA7XG4gICAgICBkb21haW4oZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjYWxlO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGluZWFyKCkge1xuICB2YXIgc2NhbGUgPSBjb250aW51b3VzKGRlaW50ZXJwb2xhdGUsIHJlaW50ZXJwb2xhdGUpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgbGluZWFyKCkpO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuIiwiaW1wb3J0IHt0aWNrc30gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2Zvcm1hdH0gZnJvbSBcImQzLWZvcm1hdFwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgbmljZSBmcm9tIFwiLi9uaWNlXCI7XG5pbXBvcnQge2RlZmF1bHQgYXMgY29udGludW91cywgY29weX0gZnJvbSBcIi4vY29udGludW91c1wiO1xuXG5mdW5jdGlvbiBkZWludGVycG9sYXRlKGEsIGIpIHtcbiAgcmV0dXJuIChiID0gTWF0aC5sb2coYiAvIGEpKVxuICAgICAgPyBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLmxvZyh4IC8gYSkgLyBiOyB9XG4gICAgICA6IGNvbnN0YW50KGIpO1xufVxuXG5mdW5jdGlvbiByZWludGVycG9sYXRlKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCAwXG4gICAgICA/IGZ1bmN0aW9uKHQpIHsgcmV0dXJuIC1NYXRoLnBvdygtYiwgdCkgKiBNYXRoLnBvdygtYSwgMSAtIHQpOyB9XG4gICAgICA6IGZ1bmN0aW9uKHQpIHsgcmV0dXJuIE1hdGgucG93KGIsIHQpICogTWF0aC5wb3coYSwgMSAtIHQpOyB9O1xufVxuXG5mdW5jdGlvbiBwb3cxMCh4KSB7XG4gIHJldHVybiBpc0Zpbml0ZSh4KSA/ICsoXCIxZVwiICsgeCkgOiB4IDwgMCA/IDAgOiB4O1xufVxuXG5mdW5jdGlvbiBwb3dwKGJhc2UpIHtcbiAgcmV0dXJuIGJhc2UgPT09IDEwID8gcG93MTBcbiAgICAgIDogYmFzZSA9PT0gTWF0aC5FID8gTWF0aC5leHBcbiAgICAgIDogZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5wb3coYmFzZSwgeCk7IH07XG59XG5cbmZ1bmN0aW9uIGxvZ3AoYmFzZSkge1xuICByZXR1cm4gYmFzZSA9PT0gTWF0aC5FID8gTWF0aC5sb2dcbiAgICAgIDogYmFzZSA9PT0gMTAgJiYgTWF0aC5sb2cxMFxuICAgICAgfHwgYmFzZSA9PT0gMiAmJiBNYXRoLmxvZzJcbiAgICAgIHx8IChiYXNlID0gTWF0aC5sb2coYmFzZSksIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgubG9nKHgpIC8gYmFzZTsgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZmxlY3QoZikge1xuICByZXR1cm4gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiAtZigteCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZygpIHtcbiAgdmFyIHNjYWxlID0gY29udGludW91cyhkZWludGVycG9sYXRlLCByZWludGVycG9sYXRlKS5kb21haW4oWzEsIDEwXSksXG4gICAgICBkb21haW4gPSBzY2FsZS5kb21haW4sXG4gICAgICBiYXNlID0gMTAsXG4gICAgICBsb2dzID0gbG9ncCgxMCksXG4gICAgICBwb3dzID0gcG93cCgxMCk7XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICBsb2dzID0gbG9ncChiYXNlKSwgcG93cyA9IHBvd3AoYmFzZSk7XG4gICAgaWYgKGRvbWFpbigpWzBdIDwgMCkgbG9ncyA9IHJlZmxlY3QobG9ncyksIHBvd3MgPSByZWZsZWN0KHBvd3MpO1xuICAgIHJldHVybiBzY2FsZTtcbiAgfVxuXG4gIHNjYWxlLmJhc2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYmFzZSA9ICtfLCByZXNjYWxlKCkpIDogYmFzZTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZG9tYWluKF8pLCByZXNjYWxlKCkpIDogZG9tYWluKCk7XG4gIH07XG5cbiAgc2NhbGUudGlja3MgPSBmdW5jdGlvbihjb3VudCkge1xuICAgIHZhciBkID0gZG9tYWluKCksXG4gICAgICAgIHUgPSBkWzBdLFxuICAgICAgICB2ID0gZFtkLmxlbmd0aCAtIDFdLFxuICAgICAgICByO1xuXG4gICAgaWYgKHIgPSB2IDwgdSkgaSA9IHUsIHUgPSB2LCB2ID0gaTtcblxuICAgIHZhciBpID0gbG9ncyh1KSxcbiAgICAgICAgaiA9IGxvZ3ModiksXG4gICAgICAgIHAsXG4gICAgICAgIGssXG4gICAgICAgIHQsXG4gICAgICAgIG4gPSBjb3VudCA9PSBudWxsID8gMTAgOiArY291bnQsXG4gICAgICAgIHogPSBbXTtcblxuICAgIGlmICghKGJhc2UgJSAxKSAmJiBqIC0gaSA8IG4pIHtcbiAgICAgIGkgPSBNYXRoLnJvdW5kKGkpIC0gMSwgaiA9IE1hdGgucm91bmQoaikgKyAxO1xuICAgICAgaWYgKHUgPiAwKSBmb3IgKDsgaSA8IGo7ICsraSkge1xuICAgICAgICBmb3IgKGsgPSAxLCBwID0gcG93cyhpKTsgayA8IGJhc2U7ICsraykge1xuICAgICAgICAgIHQgPSBwICogaztcbiAgICAgICAgICBpZiAodCA8IHUpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICh0ID4gdikgYnJlYWs7XG4gICAgICAgICAgei5wdXNoKHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgZm9yICg7IGkgPCBqOyArK2kpIHtcbiAgICAgICAgZm9yIChrID0gYmFzZSAtIDEsIHAgPSBwb3dzKGkpOyBrID49IDE7IC0taykge1xuICAgICAgICAgIHQgPSBwICogaztcbiAgICAgICAgICBpZiAodCA8IHUpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICh0ID4gdikgYnJlYWs7XG4gICAgICAgICAgei5wdXNoKHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHogPSB0aWNrcyhpLCBqLCBNYXRoLm1pbihqIC0gaSwgbikpLm1hcChwb3dzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gciA/IHoucmV2ZXJzZSgpIDogejtcbiAgfTtcblxuICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24oY291bnQsIHNwZWNpZmllcikge1xuICAgIGlmIChzcGVjaWZpZXIgPT0gbnVsbCkgc3BlY2lmaWVyID0gYmFzZSA9PT0gMTAgPyBcIi4wZVwiIDogXCIsXCI7XG4gICAgaWYgKHR5cGVvZiBzcGVjaWZpZXIgIT09IFwiZnVuY3Rpb25cIikgc3BlY2lmaWVyID0gZm9ybWF0KHNwZWNpZmllcik7XG4gICAgaWYgKGNvdW50ID09PSBJbmZpbml0eSkgcmV0dXJuIHNwZWNpZmllcjtcbiAgICBpZiAoY291bnQgPT0gbnVsbCkgY291bnQgPSAxMDtcbiAgICB2YXIgayA9IE1hdGgubWF4KDEsIGJhc2UgKiBjb3VudCAvIHNjYWxlLnRpY2tzKCkubGVuZ3RoKTsgLy8gVE9ETyBmYXN0IGVzdGltYXRlP1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICB2YXIgaSA9IGQgLyBwb3dzKE1hdGgucm91bmQobG9ncyhkKSkpO1xuICAgICAgaWYgKGkgKiBiYXNlIDwgYmFzZSAtIDAuNSkgaSAqPSBiYXNlO1xuICAgICAgcmV0dXJuIGkgPD0gayA/IHNwZWNpZmllcihkKSA6IFwiXCI7XG4gICAgfTtcbiAgfTtcblxuICBzY2FsZS5uaWNlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRvbWFpbihuaWNlKGRvbWFpbigpLCB7XG4gICAgICBmbG9vcjogZnVuY3Rpb24oeCkgeyByZXR1cm4gcG93cyhNYXRoLmZsb29yKGxvZ3MoeCkpKTsgfSxcbiAgICAgIGNlaWw6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHBvd3MoTWF0aC5jZWlsKGxvZ3MoeCkpKTsgfVxuICAgIH0pKTtcbiAgfTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGxvZygpLmJhc2UoYmFzZSkpO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRvbWFpbiwgaW50ZXJ2YWwpIHtcbiAgZG9tYWluID0gZG9tYWluLnNsaWNlKCk7XG5cbiAgdmFyIGkwID0gMCxcbiAgICAgIGkxID0gZG9tYWluLmxlbmd0aCAtIDEsXG4gICAgICB4MCA9IGRvbWFpbltpMF0sXG4gICAgICB4MSA9IGRvbWFpbltpMV0sXG4gICAgICB0O1xuXG4gIGlmICh4MSA8IHgwKSB7XG4gICAgdCA9IGkwLCBpMCA9IGkxLCBpMSA9IHQ7XG4gICAgdCA9IHgwLCB4MCA9IHgxLCB4MSA9IHQ7XG4gIH1cblxuICBkb21haW5baTBdID0gaW50ZXJ2YWwuZmxvb3IoeDApO1xuICBkb21haW5baTFdID0gaW50ZXJ2YWwuY2VpbCh4MSk7XG4gIHJldHVybiBkb21haW47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiAreDtcbn1cbiIsImltcG9ydCB7bWFwfSBmcm9tIFwiZDMtY29sbGVjdGlvblwiO1xuaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXlcIjtcblxuZXhwb3J0IHZhciBpbXBsaWNpdCA9IHtuYW1lOiBcImltcGxpY2l0XCJ9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRpbmFsKHJhbmdlKSB7XG4gIHZhciBpbmRleCA9IG1hcCgpLFxuICAgICAgZG9tYWluID0gW10sXG4gICAgICB1bmtub3duID0gaW1wbGljaXQ7XG5cbiAgcmFuZ2UgPSByYW5nZSA9PSBudWxsID8gW10gOiBzbGljZS5jYWxsKHJhbmdlKTtcblxuICBmdW5jdGlvbiBzY2FsZShkKSB7XG4gICAgdmFyIGtleSA9IGQgKyBcIlwiLCBpID0gaW5kZXguZ2V0KGtleSk7XG4gICAgaWYgKCFpKSB7XG4gICAgICBpZiAodW5rbm93biAhPT0gaW1wbGljaXQpIHJldHVybiB1bmtub3duO1xuICAgICAgaW5kZXguc2V0KGtleSwgaSA9IGRvbWFpbi5wdXNoKGQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmdlWyhpIC0gMSkgJSByYW5nZS5sZW5ndGhdO1xuICB9XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRvbWFpbi5zbGljZSgpO1xuICAgIGRvbWFpbiA9IFtdLCBpbmRleCA9IG1hcCgpO1xuICAgIHZhciBpID0gLTEsIG4gPSBfLmxlbmd0aCwgZCwga2V5O1xuICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoIWluZGV4LmhhcyhrZXkgPSAoZCA9IF9baV0pICsgXCJcIikpIGluZGV4LnNldChrZXksIGRvbWFpbi5wdXNoKGQpKTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBzbGljZS5jYWxsKF8pLCBzY2FsZSkgOiByYW5nZS5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBvcmRpbmFsKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShyYW5nZSlcbiAgICAgICAgLnVua25vd24odW5rbm93bik7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuIiwiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQge2xpbmVhcmlzaH0gZnJvbSBcIi4vbGluZWFyXCI7XG5pbXBvcnQge2RlZmF1bHQgYXMgY29udGludW91cywgY29weX0gZnJvbSBcIi4vY29udGludW91c1wiO1xuXG5mdW5jdGlvbiByYWlzZSh4LCBleHBvbmVudCkge1xuICByZXR1cm4geCA8IDAgPyAtTWF0aC5wb3coLXgsIGV4cG9uZW50KSA6IE1hdGgucG93KHgsIGV4cG9uZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG93KCkge1xuICB2YXIgZXhwb25lbnQgPSAxLFxuICAgICAgc2NhbGUgPSBjb250aW51b3VzKGRlaW50ZXJwb2xhdGUsIHJlaW50ZXJwb2xhdGUpLFxuICAgICAgZG9tYWluID0gc2NhbGUuZG9tYWluO1xuXG4gIGZ1bmN0aW9uIGRlaW50ZXJwb2xhdGUoYSwgYikge1xuICAgIHJldHVybiAoYiA9IHJhaXNlKGIsIGV4cG9uZW50KSAtIChhID0gcmFpc2UoYSwgZXhwb25lbnQpKSlcbiAgICAgICAgPyBmdW5jdGlvbih4KSB7IHJldHVybiAocmFpc2UoeCwgZXhwb25lbnQpIC0gYSkgLyBiOyB9XG4gICAgICAgIDogY29uc3RhbnQoYik7XG4gIH1cblxuICBmdW5jdGlvbiByZWludGVycG9sYXRlKGEsIGIpIHtcbiAgICBiID0gcmFpc2UoYiwgZXhwb25lbnQpIC0gKGEgPSByYWlzZShhLCBleHBvbmVudCkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7IHJldHVybiByYWlzZShhICsgYiAqIHQsIDEgLyBleHBvbmVudCk7IH07XG4gIH1cblxuICBzY2FsZS5leHBvbmVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChleHBvbmVudCA9ICtfLCBkb21haW4oZG9tYWluKCkpKSA6IGV4cG9uZW50O1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgcG93KCkuZXhwb25lbnQoZXhwb25lbnQpKTtcbiAgfTtcblxuICByZXR1cm4gbGluZWFyaXNoKHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNxcnQoKSB7XG4gIHJldHVybiBwb3coKS5leHBvbmVudCgwLjUpO1xufVxuIiwiaW1wb3J0IHthc2NlbmRpbmcsIGJpc2VjdCwgcXVhbnRpbGUgYXMgdGhyZXNob2xkfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7c2xpY2V9IGZyb20gXCIuL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHF1YW50aWxlKCkge1xuICB2YXIgZG9tYWluID0gW10sXG4gICAgICByYW5nZSA9IFtdLFxuICAgICAgdGhyZXNob2xkcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHJlc2NhbGUoKSB7XG4gICAgdmFyIGkgPSAwLCBuID0gTWF0aC5tYXgoMSwgcmFuZ2UubGVuZ3RoKTtcbiAgICB0aHJlc2hvbGRzID0gbmV3IEFycmF5KG4gLSAxKTtcbiAgICB3aGlsZSAoKytpIDwgbikgdGhyZXNob2xkc1tpIC0gMV0gPSB0aHJlc2hvbGQoZG9tYWluLCBpIC8gbik7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIGlmICghaXNOYU4oeCA9ICt4KSkgcmV0dXJuIHJhbmdlW2Jpc2VjdCh0aHJlc2hvbGRzLCB4KV07XG4gIH1cblxuICBzY2FsZS5pbnZlcnRFeHRlbnQgPSBmdW5jdGlvbih5KSB7XG4gICAgdmFyIGkgPSByYW5nZS5pbmRleE9mKHkpO1xuICAgIHJldHVybiBpIDwgMCA/IFtOYU4sIE5hTl0gOiBbXG4gICAgICBpID4gMCA/IHRocmVzaG9sZHNbaSAtIDFdIDogZG9tYWluWzBdLFxuICAgICAgaSA8IHRocmVzaG9sZHMubGVuZ3RoID8gdGhyZXNob2xkc1tpXSA6IGRvbWFpbltkb21haW4ubGVuZ3RoIC0gMV1cbiAgICBdO1xuICB9O1xuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkb21haW4uc2xpY2UoKTtcbiAgICBkb21haW4gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IF8ubGVuZ3RoLCBkOyBpIDwgbjsgKytpKSBpZiAoZCA9IF9baV0sIGQgIT0gbnVsbCAmJiAhaXNOYU4oZCA9ICtkKSkgZG9tYWluLnB1c2goZCk7XG4gICAgZG9tYWluLnNvcnQoYXNjZW5kaW5nKTtcbiAgICByZXR1cm4gcmVzY2FsZSgpO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJhbmdlID0gc2xpY2UuY2FsbChfKSwgcmVzY2FsZSgpKSA6IHJhbmdlLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucXVhbnRpbGVzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRocmVzaG9sZHMuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHF1YW50aWxlKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShyYW5nZSk7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuIiwiaW1wb3J0IHtiaXNlY3R9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCB7bGluZWFyaXNofSBmcm9tIFwiLi9saW5lYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVhbnRpemUoKSB7XG4gIHZhciB4MCA9IDAsXG4gICAgICB4MSA9IDEsXG4gICAgICBuID0gMSxcbiAgICAgIGRvbWFpbiA9IFswLjVdLFxuICAgICAgcmFuZ2UgPSBbMCwgMV07XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIGlmICh4IDw9IHgpIHJldHVybiByYW5nZVtiaXNlY3QoZG9tYWluLCB4LCAwLCBuKV07XG4gIH1cblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHZhciBpID0gLTE7XG4gICAgZG9tYWluID0gbmV3IEFycmF5KG4pO1xuICAgIHdoaWxlICgrK2kgPCBuKSBkb21haW5baV0gPSAoKGkgKyAxKSAqIHgxIC0gKGkgLSBuKSAqIHgwKSAvIChuICsgMSk7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHgwID0gK19bMF0sIHgxID0gK19bMV0sIHJlc2NhbGUoKSkgOiBbeDAsIHgxXTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChuID0gKHJhbmdlID0gc2xpY2UuY2FsbChfKSkubGVuZ3RoIC0gMSwgcmVzY2FsZSgpKSA6IHJhbmdlLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUuaW52ZXJ0RXh0ZW50ID0gZnVuY3Rpb24oeSkge1xuICAgIHZhciBpID0gcmFuZ2UuaW5kZXhPZih5KTtcbiAgICByZXR1cm4gaSA8IDAgPyBbTmFOLCBOYU5dXG4gICAgICAgIDogaSA8IDEgPyBbeDAsIGRvbWFpblswXV1cbiAgICAgICAgOiBpID49IG4gPyBbZG9tYWluW24gLSAxXSwgeDFdXG4gICAgICAgIDogW2RvbWFpbltpIC0gMV0sIGRvbWFpbltpXV07XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBxdWFudGl6ZSgpXG4gICAgICAgIC5kb21haW4oW3gwLCB4MV0pXG4gICAgICAgIC5yYW5nZShyYW5nZSk7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG4iLCJpbXBvcnQge2xpbmVhcmlzaH0gZnJvbSBcIi4vbGluZWFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlcXVlbnRpYWwoaW50ZXJwb2xhdG9yKSB7XG4gIHZhciB4MCA9IDAsXG4gICAgICB4MSA9IDEsXG4gICAgICBrMTAgPSAxLFxuICAgICAgY2xhbXAgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgdmFyIHQgPSAoeCAtIHgwKSAqIGsxMDtcbiAgICByZXR1cm4gaW50ZXJwb2xhdG9yKGNsYW1wID8gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpIDogdCk7XG4gIH1cblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeDAgPSArX1swXSwgeDEgPSArX1sxXSwgazEwID0geDAgPT09IHgxID8gMCA6IDEgLyAoeDEgLSB4MCksIHNjYWxlKSA6IFt4MCwgeDFdO1xuICB9O1xuXG4gIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsYW1wID0gISFfLCBzY2FsZSkgOiBjbGFtcDtcbiAgfTtcblxuICBzY2FsZS5pbnRlcnBvbGF0b3IgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW50ZXJwb2xhdG9yID0gXywgc2NhbGUpIDogaW50ZXJwb2xhdG9yO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2VxdWVudGlhbChpbnRlcnBvbGF0b3IpLmRvbWFpbihbeDAsIHgxXSkuY2xhbXAoY2xhbXApO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuIiwiaW1wb3J0IHtiaXNlY3R9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyZXNob2xkKCkge1xuICB2YXIgZG9tYWluID0gWzAuNV0sXG4gICAgICByYW5nZSA9IFswLCAxXSxcbiAgICAgIG4gPSAxO1xuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICBpZiAoeCA8PSB4KSByZXR1cm4gcmFuZ2VbYmlzZWN0KGRvbWFpbiwgeCwgMCwgbildO1xuICB9XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRvbWFpbiA9IHNsaWNlLmNhbGwoXyksIG4gPSBNYXRoLm1pbihkb21haW4ubGVuZ3RoLCByYW5nZS5sZW5ndGggLSAxKSwgc2NhbGUpIDogZG9tYWluLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBzbGljZS5jYWxsKF8pLCBuID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoIC0gMSksIHNjYWxlKSA6IHJhbmdlLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUuaW52ZXJ0RXh0ZW50ID0gZnVuY3Rpb24oeSkge1xuICAgIHZhciBpID0gcmFuZ2UuaW5kZXhPZih5KTtcbiAgICByZXR1cm4gW2RvbWFpbltpIC0gMV0sIGRvbWFpbltpXV07XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aHJlc2hvbGQoKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKHJhbmdlKTtcbiAgfTtcblxuICByZXR1cm4gc2NhbGU7XG59XG4iLCJpbXBvcnQge3RpY2tTdGVwfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7Zm9ybWF0LCBmb3JtYXRQcmVmaXgsIGZvcm1hdFNwZWNpZmllciwgcHJlY2lzaW9uRml4ZWQsIHByZWNpc2lvblByZWZpeCwgcHJlY2lzaW9uUm91bmR9IGZyb20gXCJkMy1mb3JtYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZG9tYWluLCBjb3VudCwgc3BlY2lmaWVyKSB7XG4gIHZhciBzdGFydCA9IGRvbWFpblswXSxcbiAgICAgIHN0b3AgPSBkb21haW5bZG9tYWluLmxlbmd0aCAtIDFdLFxuICAgICAgc3RlcCA9IHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBjb3VudCA9PSBudWxsID8gMTAgOiBjb3VudCksXG4gICAgICBwcmVjaXNpb247XG4gIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIgPT0gbnVsbCA/IFwiLGZcIiA6IHNwZWNpZmllcik7XG4gIHN3aXRjaCAoc3BlY2lmaWVyLnR5cGUpIHtcbiAgICBjYXNlIFwic1wiOiB7XG4gICAgICB2YXIgdmFsdWUgPSBNYXRoLm1heChNYXRoLmFicyhzdGFydCksIE1hdGguYWJzKHN0b3ApKTtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblByZWZpeChzdGVwLCB2YWx1ZSkpKSBzcGVjaWZpZXIucHJlY2lzaW9uID0gcHJlY2lzaW9uO1xuICAgICAgcmV0dXJuIGZvcm1hdFByZWZpeChzcGVjaWZpZXIsIHZhbHVlKTtcbiAgICB9XG4gICAgY2FzZSBcIlwiOlxuICAgIGNhc2UgXCJlXCI6XG4gICAgY2FzZSBcImdcIjpcbiAgICBjYXNlIFwicFwiOlxuICAgIGNhc2UgXCJyXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblJvdW5kKHN0ZXAsIE1hdGgubWF4KE1hdGguYWJzKHN0YXJ0KSwgTWF0aC5hYnMoc3RvcCkpKSkpIHNwZWNpZmllci5wcmVjaXNpb24gPSBwcmVjaXNpb24gLSAoc3BlY2lmaWVyLnR5cGUgPT09IFwiZVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiZlwiOlxuICAgIGNhc2UgXCIlXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvbkZpeGVkKHN0ZXApKSkgc3BlY2lmaWVyLnByZWNpc2lvbiA9IHByZWNpc2lvbiAtIChzcGVjaWZpZXIudHlwZSA9PT0gXCIlXCIpICogMjtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm9ybWF0KHNwZWNpZmllcik7XG59XG4iLCJpbXBvcnQge2Jpc2VjdG9yLCB0aWNrU3RlcH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2ludGVycG9sYXRlTnVtYmVyIGFzIHJlaW50ZXJwb2xhdGV9IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IHt0aW1lWWVhciwgdGltZU1vbnRoLCB0aW1lV2VlaywgdGltZURheSwgdGltZUhvdXIsIHRpbWVNaW51dGUsIHRpbWVTZWNvbmQsIHRpbWVNaWxsaXNlY29uZH0gZnJvbSBcImQzLXRpbWVcIjtcbmltcG9ydCB7dGltZUZvcm1hdH0gZnJvbSBcImQzLXRpbWUtZm9ybWF0XCI7XG5pbXBvcnQge21hcH0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCB7ZGVmYXVsdCBhcyBjb250aW51b3VzLCBjb3B5LCBkZWludGVycG9sYXRlTGluZWFyIGFzIGRlaW50ZXJwb2xhdGV9IGZyb20gXCIuL2NvbnRpbnVvdXNcIjtcbmltcG9ydCBuaWNlIGZyb20gXCIuL25pY2VcIjtcblxudmFyIGR1cmF0aW9uU2Vjb25kID0gMTAwMCxcbiAgICBkdXJhdGlvbk1pbnV0ZSA9IGR1cmF0aW9uU2Vjb25kICogNjAsXG4gICAgZHVyYXRpb25Ib3VyID0gZHVyYXRpb25NaW51dGUgKiA2MCxcbiAgICBkdXJhdGlvbkRheSA9IGR1cmF0aW9uSG91ciAqIDI0LFxuICAgIGR1cmF0aW9uV2VlayA9IGR1cmF0aW9uRGF5ICogNyxcbiAgICBkdXJhdGlvbk1vbnRoID0gZHVyYXRpb25EYXkgKiAzMCxcbiAgICBkdXJhdGlvblllYXIgPSBkdXJhdGlvbkRheSAqIDM2NTtcblxuZnVuY3Rpb24gZGF0ZSh0KSB7XG4gIHJldHVybiBuZXcgRGF0ZSh0KTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyKHQpIHtcbiAgcmV0dXJuIHQgaW5zdGFuY2VvZiBEYXRlID8gK3QgOiArbmV3IERhdGUoK3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsZW5kYXIoeWVhciwgbW9udGgsIHdlZWssIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLCBmb3JtYXQpIHtcbiAgdmFyIHNjYWxlID0gY29udGludW91cyhkZWludGVycG9sYXRlLCByZWludGVycG9sYXRlKSxcbiAgICAgIGludmVydCA9IHNjYWxlLmludmVydCxcbiAgICAgIGRvbWFpbiA9IHNjYWxlLmRvbWFpbjtcblxuICB2YXIgZm9ybWF0TWlsbGlzZWNvbmQgPSBmb3JtYXQoXCIuJUxcIiksXG4gICAgICBmb3JtYXRTZWNvbmQgPSBmb3JtYXQoXCI6JVNcIiksXG4gICAgICBmb3JtYXRNaW51dGUgPSBmb3JtYXQoXCIlSTolTVwiKSxcbiAgICAgIGZvcm1hdEhvdXIgPSBmb3JtYXQoXCIlSSAlcFwiKSxcbiAgICAgIGZvcm1hdERheSA9IGZvcm1hdChcIiVhICVkXCIpLFxuICAgICAgZm9ybWF0V2VlayA9IGZvcm1hdChcIiViICVkXCIpLFxuICAgICAgZm9ybWF0TW9udGggPSBmb3JtYXQoXCIlQlwiKSxcbiAgICAgIGZvcm1hdFllYXIgPSBmb3JtYXQoXCIlWVwiKTtcblxuICB2YXIgdGlja0ludGVydmFscyA9IFtcbiAgICBbc2Vjb25kLCAgMSwgICAgICBkdXJhdGlvblNlY29uZF0sXG4gICAgW3NlY29uZCwgIDUsICA1ICogZHVyYXRpb25TZWNvbmRdLFxuICAgIFtzZWNvbmQsIDE1LCAxNSAqIGR1cmF0aW9uU2Vjb25kXSxcbiAgICBbc2Vjb25kLCAzMCwgMzAgKiBkdXJhdGlvblNlY29uZF0sXG4gICAgW21pbnV0ZSwgIDEsICAgICAgZHVyYXRpb25NaW51dGVdLFxuICAgIFttaW51dGUsICA1LCAgNSAqIGR1cmF0aW9uTWludXRlXSxcbiAgICBbbWludXRlLCAxNSwgMTUgKiBkdXJhdGlvbk1pbnV0ZV0sXG4gICAgW21pbnV0ZSwgMzAsIDMwICogZHVyYXRpb25NaW51dGVdLFxuICAgIFsgIGhvdXIsICAxLCAgICAgIGR1cmF0aW9uSG91ciAgXSxcbiAgICBbICBob3VyLCAgMywgIDMgKiBkdXJhdGlvbkhvdXIgIF0sXG4gICAgWyAgaG91ciwgIDYsICA2ICogZHVyYXRpb25Ib3VyICBdLFxuICAgIFsgIGhvdXIsIDEyLCAxMiAqIGR1cmF0aW9uSG91ciAgXSxcbiAgICBbICAgZGF5LCAgMSwgICAgICBkdXJhdGlvbkRheSAgIF0sXG4gICAgWyAgIGRheSwgIDIsICAyICogZHVyYXRpb25EYXkgICBdLFxuICAgIFsgIHdlZWssICAxLCAgICAgIGR1cmF0aW9uV2VlayAgXSxcbiAgICBbIG1vbnRoLCAgMSwgICAgICBkdXJhdGlvbk1vbnRoIF0sXG4gICAgWyBtb250aCwgIDMsICAzICogZHVyYXRpb25Nb250aCBdLFxuICAgIFsgIHllYXIsICAxLCAgICAgIGR1cmF0aW9uWWVhciAgXVxuICBdO1xuXG4gIGZ1bmN0aW9uIHRpY2tGb3JtYXQoZGF0ZSkge1xuICAgIHJldHVybiAoc2Vjb25kKGRhdGUpIDwgZGF0ZSA/IGZvcm1hdE1pbGxpc2Vjb25kXG4gICAgICAgIDogbWludXRlKGRhdGUpIDwgZGF0ZSA/IGZvcm1hdFNlY29uZFxuICAgICAgICA6IGhvdXIoZGF0ZSkgPCBkYXRlID8gZm9ybWF0TWludXRlXG4gICAgICAgIDogZGF5KGRhdGUpIDwgZGF0ZSA/IGZvcm1hdEhvdXJcbiAgICAgICAgOiBtb250aChkYXRlKSA8IGRhdGUgPyAod2VlayhkYXRlKSA8IGRhdGUgPyBmb3JtYXREYXkgOiBmb3JtYXRXZWVrKVxuICAgICAgICA6IHllYXIoZGF0ZSkgPCBkYXRlID8gZm9ybWF0TW9udGhcbiAgICAgICAgOiBmb3JtYXRZZWFyKShkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpY2tJbnRlcnZhbChpbnRlcnZhbCwgc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICBpZiAoaW50ZXJ2YWwgPT0gbnVsbCkgaW50ZXJ2YWwgPSAxMDtcblxuICAgIC8vIElmIGEgZGVzaXJlZCB0aWNrIGNvdW50IGlzIHNwZWNpZmllZCwgcGljayBhIHJlYXNvbmFibGUgdGljayBpbnRlcnZhbFxuICAgIC8vIGJhc2VkIG9uIHRoZSBleHRlbnQgb2YgdGhlIGRvbWFpbiBhbmQgYSByb3VnaCBlc3RpbWF0ZSBvZiB0aWNrIHNpemUuXG4gICAgLy8gT3RoZXJ3aXNlLCBhc3N1bWUgaW50ZXJ2YWwgaXMgYWxyZWFkeSBhIHRpbWUgaW50ZXJ2YWwgYW5kIHVzZSBpdC5cbiAgICBpZiAodHlwZW9mIGludGVydmFsID09PSBcIm51bWJlclwiKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gTWF0aC5hYnMoc3RvcCAtIHN0YXJ0KSAvIGludGVydmFsLFxuICAgICAgICAgIGkgPSBiaXNlY3RvcihmdW5jdGlvbihpKSB7IHJldHVybiBpWzJdOyB9KS5yaWdodCh0aWNrSW50ZXJ2YWxzLCB0YXJnZXQpO1xuICAgICAgaWYgKGkgPT09IHRpY2tJbnRlcnZhbHMubGVuZ3RoKSB7XG4gICAgICAgIHN0ZXAgPSB0aWNrU3RlcChzdGFydCAvIGR1cmF0aW9uWWVhciwgc3RvcCAvIGR1cmF0aW9uWWVhciwgaW50ZXJ2YWwpO1xuICAgICAgICBpbnRlcnZhbCA9IHllYXI7XG4gICAgICB9IGVsc2UgaWYgKGkpIHtcbiAgICAgICAgaSA9IHRpY2tJbnRlcnZhbHNbdGFyZ2V0IC8gdGlja0ludGVydmFsc1tpIC0gMV1bMl0gPCB0aWNrSW50ZXJ2YWxzW2ldWzJdIC8gdGFyZ2V0ID8gaSAtIDEgOiBpXTtcbiAgICAgICAgc3RlcCA9IGlbMV07XG4gICAgICAgIGludGVydmFsID0gaVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ZXAgPSBNYXRoLm1heCh0aWNrU3RlcChzdGFydCwgc3RvcCwgaW50ZXJ2YWwpLCAxKTtcbiAgICAgICAgaW50ZXJ2YWwgPSBtaWxsaXNlY29uZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcCA9PSBudWxsID8gaW50ZXJ2YWwgOiBpbnRlcnZhbC5ldmVyeShzdGVwKTtcbiAgfVxuXG4gIHNjYWxlLmludmVydCA9IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoaW52ZXJ0KHkpKTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBkb21haW4obWFwLmNhbGwoXywgbnVtYmVyKSkgOiBkb21haW4oKS5tYXAoZGF0ZSk7XG4gIH07XG5cbiAgc2NhbGUudGlja3MgPSBmdW5jdGlvbihpbnRlcnZhbCwgc3RlcCkge1xuICAgIHZhciBkID0gZG9tYWluKCksXG4gICAgICAgIHQwID0gZFswXSxcbiAgICAgICAgdDEgPSBkW2QubGVuZ3RoIC0gMV0sXG4gICAgICAgIHIgPSB0MSA8IHQwLFxuICAgICAgICB0O1xuICAgIGlmIChyKSB0ID0gdDAsIHQwID0gdDEsIHQxID0gdDtcbiAgICB0ID0gdGlja0ludGVydmFsKGludGVydmFsLCB0MCwgdDEsIHN0ZXApO1xuICAgIHQgPSB0ID8gdC5yYW5nZSh0MCwgdDEgKyAxKSA6IFtdOyAvLyBpbmNsdXNpdmUgc3RvcFxuICAgIHJldHVybiByID8gdC5yZXZlcnNlKCkgOiB0O1xuICB9O1xuXG4gIHNjYWxlLnRpY2tGb3JtYXQgPSBmdW5jdGlvbihjb3VudCwgc3BlY2lmaWVyKSB7XG4gICAgcmV0dXJuIHNwZWNpZmllciA9PSBudWxsID8gdGlja0Zvcm1hdCA6IGZvcm1hdChzcGVjaWZpZXIpO1xuICB9O1xuXG4gIHNjYWxlLm5pY2UgPSBmdW5jdGlvbihpbnRlcnZhbCwgc3RlcCkge1xuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgcmV0dXJuIChpbnRlcnZhbCA9IHRpY2tJbnRlcnZhbChpbnRlcnZhbCwgZFswXSwgZFtkLmxlbmd0aCAtIDFdLCBzdGVwKSlcbiAgICAgICAgPyBkb21haW4obmljZShkLCBpbnRlcnZhbCkpXG4gICAgICAgIDogc2NhbGU7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb3B5KHNjYWxlLCBjYWxlbmRhcih5ZWFyLCBtb250aCwgd2VlaywgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQsIGZvcm1hdCkpO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjYWxlbmRhcih0aW1lWWVhciwgdGltZU1vbnRoLCB0aW1lV2VlaywgdGltZURheSwgdGltZUhvdXIsIHRpbWVNaW51dGUsIHRpbWVTZWNvbmQsIHRpbWVNaWxsaXNlY29uZCwgdGltZUZvcm1hdCkuZG9tYWluKFtuZXcgRGF0ZSgyMDAwLCAwLCAxKSwgbmV3IERhdGUoMjAwMCwgMCwgMildKTtcbn1cbiIsImltcG9ydCB7Y2FsZW5kYXJ9IGZyb20gXCIuL3RpbWVcIjtcbmltcG9ydCB7dXRjRm9ybWF0fSBmcm9tIFwiZDMtdGltZS1mb3JtYXRcIjtcbmltcG9ydCB7dXRjWWVhciwgdXRjTW9udGgsIHV0Y1dlZWssIHV0Y0RheSwgdXRjSG91ciwgdXRjTWludXRlLCB1dGNTZWNvbmQsIHV0Y01pbGxpc2Vjb25kfSBmcm9tIFwiZDMtdGltZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGNhbGVuZGFyKHV0Y1llYXIsIHV0Y01vbnRoLCB1dGNXZWVrLCB1dGNEYXksIHV0Y0hvdXIsIHV0Y01pbnV0ZSwgdXRjU2Vjb25kLCB1dGNNaWxsaXNlY29uZCwgdXRjRm9ybWF0KS5kb21haW4oW0RhdGUuVVRDKDIwMDAsIDAsIDEpLCBEYXRlLlVUQygyMDAwLCAwLCAyKV0pO1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0ZX0gZnJvbSBcIi4vc3JjL2NyZWF0ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0b3J9IGZyb20gXCIuL3NyYy9jcmVhdG9yXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbG9jYWx9IGZyb20gXCIuL3NyYy9sb2NhbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1hdGNoZXJ9IGZyb20gXCIuL3NyYy9tYXRjaGVyXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbW91c2V9IGZyb20gXCIuL3NyYy9tb3VzZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZX0gZnJvbSBcIi4vc3JjL25hbWVzcGFjZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZXN9IGZyb20gXCIuL3NyYy9uYW1lc3BhY2VzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY2xpZW50UG9pbnR9IGZyb20gXCIuL3NyYy9wb2ludFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdH0gZnJvbSBcIi4vc3JjL3NlbGVjdFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdEFsbH0gZnJvbSBcIi4vc3JjL3NlbGVjdEFsbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdGlvbn0gZnJvbSBcIi4vc3JjL3NlbGVjdGlvbi9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdG9yfSBmcm9tIFwiLi9zcmMvc2VsZWN0b3JcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3RvckFsbH0gZnJvbSBcIi4vc3JjL3NlbGVjdG9yQWxsXCI7XG5leHBvcnQge3N0eWxlVmFsdWUgYXMgc3R5bGV9IGZyb20gXCIuL3NyYy9zZWxlY3Rpb24vc3R5bGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0b3VjaH0gZnJvbSBcIi4vc3JjL3RvdWNoXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdG91Y2hlc30gZnJvbSBcIi4vc3JjL3RvdWNoZXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB3aW5kb3d9IGZyb20gXCIuL3NyYy93aW5kb3dcIjtcbmV4cG9ydCB7ZXZlbnQsIGN1c3RvbUV2ZW50fSBmcm9tIFwiLi9zcmMvc2VsZWN0aW9uL29uXCI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImltcG9ydCBjcmVhdG9yIGZyb20gXCIuL2NyZWF0b3JcIjtcbmltcG9ydCBzZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHNlbGVjdChjcmVhdG9yKG5hbWUpLmNhbGwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSk7XG59XG4iLCJpbXBvcnQgbmFtZXNwYWNlIGZyb20gXCIuL25hbWVzcGFjZVwiO1xuaW1wb3J0IHt4aHRtbH0gZnJvbSBcIi4vbmFtZXNwYWNlc1wiO1xuXG5mdW5jdGlvbiBjcmVhdG9ySW5oZXJpdChuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZG9jdW1lbnQgPSB0aGlzLm93bmVyRG9jdW1lbnQsXG4gICAgICAgIHVyaSA9IHRoaXMubmFtZXNwYWNlVVJJO1xuICAgIHJldHVybiB1cmkgPT09IHhodG1sICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IHhodG1sXG4gICAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKVxuICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh1cmksIG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdG9yRml4ZWQoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuICByZXR1cm4gKGZ1bGxuYW1lLmxvY2FsXG4gICAgICA/IGNyZWF0b3JGaXhlZFxuICAgICAgOiBjcmVhdG9ySW5oZXJpdCkoZnVsbG5hbWUpO1xufVxuIiwidmFyIG5leHRJZCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvY2FsKCkge1xuICByZXR1cm4gbmV3IExvY2FsO1xufVxuXG5mdW5jdGlvbiBMb2NhbCgpIHtcbiAgdGhpcy5fID0gXCJAXCIgKyAoKytuZXh0SWQpLnRvU3RyaW5nKDM2KTtcbn1cblxuTG9jYWwucHJvdG90eXBlID0gbG9jYWwucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogTG9jYWwsXG4gIGdldDogZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciBpZCA9IHRoaXMuXztcbiAgICB3aGlsZSAoIShpZCBpbiBub2RlKSkgaWYgKCEobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkpIHJldHVybjtcbiAgICByZXR1cm4gbm9kZVtpZF07XG4gIH0sXG4gIHNldDogZnVuY3Rpb24obm9kZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gbm9kZVt0aGlzLl9dID0gdmFsdWU7XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24obm9kZSkge1xuICAgIHJldHVybiB0aGlzLl8gaW4gbm9kZSAmJiBkZWxldGUgbm9kZVt0aGlzLl9dO1xuICB9LFxuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuXztcbiAgfVxufTtcbiIsInZhciBtYXRjaGVyID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgaWYgKCFlbGVtZW50Lm1hdGNoZXMpIHtcbiAgICB2YXIgdmVuZG9yTWF0Y2hlcyA9IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5vTWF0Y2hlc1NlbGVjdG9yO1xuICAgIG1hdGNoZXIgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmVuZG9yTWF0Y2hlcy5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYXRjaGVyO1xuIiwiaW1wb3J0IHNvdXJjZUV2ZW50IGZyb20gXCIuL3NvdXJjZUV2ZW50XCI7XG5pbXBvcnQgcG9pbnQgZnJvbSBcIi4vcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSkge1xuICB2YXIgZXZlbnQgPSBzb3VyY2VFdmVudCgpO1xuICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIGV2ZW50ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gIHJldHVybiBwb2ludChub2RlLCBldmVudCk7XG59XG4iLCJpbXBvcnQgbmFtZXNwYWNlcyBmcm9tIFwiLi9uYW1lc3BhY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIHByZWZpeCA9IG5hbWUgKz0gXCJcIiwgaSA9IHByZWZpeC5pbmRleE9mKFwiOlwiKTtcbiAgaWYgKGkgPj0gMCAmJiAocHJlZml4ID0gbmFtZS5zbGljZSgwLCBpKSkgIT09IFwieG1sbnNcIikgbmFtZSA9IG5hbWUuc2xpY2UoaSArIDEpO1xuICByZXR1cm4gbmFtZXNwYWNlcy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpID8ge3NwYWNlOiBuYW1lc3BhY2VzW3ByZWZpeF0sIGxvY2FsOiBuYW1lfSA6IG5hbWU7XG59XG4iLCJleHBvcnQgdmFyIHhodG1sID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3ZnOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHhodG1sOiB4aHRtbCxcbiAgeGxpbms6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICB4bWw6IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCJcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCBldmVudCkge1xuICB2YXIgc3ZnID0gbm9kZS5vd25lclNWR0VsZW1lbnQgfHwgbm9kZTtcblxuICBpZiAoc3ZnLmNyZWF0ZVNWR1BvaW50KSB7XG4gICAgdmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG4gICAgcG9pbnQueCA9IGV2ZW50LmNsaWVudFgsIHBvaW50LnkgPSBldmVudC5jbGllbnRZO1xuICAgIHBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKG5vZGUuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcbiAgICByZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xuICB9XG5cbiAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gW2V2ZW50LmNsaWVudFggLSByZWN0LmxlZnQgLSBub2RlLmNsaWVudExlZnQsIGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCAtIG5vZGUuY2xpZW50VG9wXTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9uLCByb290fSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcildXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW1tzZWxlY3Rvcl1dLCByb290KTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9uLCByb290fSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBuZXcgU2VsZWN0aW9uKFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0sIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdKVxuICAgICAgOiBuZXcgU2VsZWN0aW9uKFtzZWxlY3RvciA9PSBudWxsID8gW10gOiBzZWxlY3Rvcl0sIHJvb3QpO1xufVxuIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgY3JlYXRlID0gdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUgOiBjcmVhdG9yKG5hbWUpO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9KTtcbn1cbiIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4uL25hbWVzcGFjZVwiO1xuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlTlMoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uTlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHYpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLm5vZGUoKTtcbiAgICByZXR1cm4gZnVsbG5hbWUubG9jYWxcbiAgICAgICAgPyBub2RlLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbClcbiAgICAgICAgOiBub2RlLmdldEF0dHJpYnV0ZShmdWxsbmFtZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJSZW1vdmVOUyA6IGF0dHJSZW1vdmUpIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKVxuICAgICAgOiAoZnVsbG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudCkpKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbMF07XG4gIGFyZ3VtZW50c1swXSA9IHRoaXM7XG4gIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwiZnVuY3Rpb24gY2xhc3NBcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50cmltKCkuc3BsaXQoL158XFxzKy8pO1xufVxuXG5mdW5jdGlvbiBjbGFzc0xpc3Qobm9kZSkge1xuICByZXR1cm4gbm9kZS5jbGFzc0xpc3QgfHwgbmV3IENsYXNzTGlzdChub2RlKTtcbn1cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KG5vZGUpIHtcbiAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gIHRoaXMuX25hbWVzID0gY2xhc3NBcnJheShub2RlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpO1xufVxuXG5DbGFzc0xpc3QucHJvdG90eXBlID0ge1xuICBhZGQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgdGhpcy5fbmFtZXMuc3BsaWNlKGksIDEpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICBjb250YWluczogZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpID49IDA7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNsYXNzZWRBZGQobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QuYWRkKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFJlbW92ZShub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5yZW1vdmUobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkVHJ1ZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZEFkZCh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGYWxzZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZFJlbW92ZSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGdW5jdGlvbihuYW1lcywgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICh2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpID8gY2xhc3NlZEFkZCA6IGNsYXNzZWRSZW1vdmUpKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWVzID0gY2xhc3NBcnJheShuYW1lICsgXCJcIik7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIGxpc3QgPSBjbGFzc0xpc3QodGhpcy5ub2RlKCkpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIGlmICghbGlzdC5jb250YWlucyhuYW1lc1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGNsYXNzZWRGdW5jdGlvbiA6IHZhbHVlXG4gICAgICA/IGNsYXNzZWRUcnVlXG4gICAgICA6IGNsYXNzZWRGYWxzZSkobmFtZXMsIHZhbHVlKSk7XG59XG4iLCJmdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNsb25lTm9kZShmYWxzZSksIHRoaXMubmV4dFNpYmxpbmcpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVEZWVwKCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNsb25lTm9kZSh0cnVlKSwgdGhpcy5uZXh0U2libGluZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRlZXApIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGRlZXAgPyBzZWxlY3Rpb25fY2xvbmVEZWVwIDogc2VsZWN0aW9uX2Nsb25lU2hhbGxvdyk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7RW50ZXJOb2RlfSBmcm9tIFwiLi9lbnRlclwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuLi9jb25zdGFudFwiO1xuXG52YXIga2V5UHJlZml4ID0gXCIkXCI7IC8vIFByb3RlY3QgYWdhaW5zdCBrZXlzIGxpa2Ug4oCcX19wcm90b19f4oCdLlxuXG5mdW5jdGlvbiBiaW5kSW5kZXgocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSkge1xuICB2YXIgaSA9IDAsXG4gICAgICBub2RlLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGZpdCBpbnRvIHVwZGF0ZS5cbiAgLy8gUHV0IGFueSBudWxsIG5vZGVzIGludG8gZW50ZXIuXG4gIC8vIFB1dCBhbnkgcmVtYWluaW5nIGRhdGEgaW50byBlbnRlci5cbiAgZm9yICg7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBkb27igJl0IGZpdCBpbnRvIGV4aXQuXG4gIGZvciAoOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kS2V5KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEsIGtleSkge1xuICB2YXIgaSxcbiAgICAgIG5vZGUsXG4gICAgICBub2RlQnlLZXlWYWx1ZSA9IHt9LFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICBrZXlWYWx1ZXMgPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpLFxuICAgICAga2V5VmFsdWU7XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIG5vZGUuXG4gIC8vIElmIG11bHRpcGxlIG5vZGVzIGhhdmUgdGhlIHNhbWUga2V5LCB0aGUgZHVwbGljYXRlcyBhcmUgYWRkZWQgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBrZXlWYWx1ZXNbaV0gPSBrZXlWYWx1ZSA9IGtleVByZWZpeCArIGtleS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKTtcbiAgICAgIGlmIChrZXlWYWx1ZSBpbiBub2RlQnlLZXlWYWx1ZSkge1xuICAgICAgICBleGl0W2ldID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIGRhdHVtLlxuICAvLyBJZiB0aGVyZSBhIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LCBqb2luIGFuZCBhZGQgaXQgdG8gdXBkYXRlLlxuICAvLyBJZiB0aGVyZSBpcyBub3QgKG9yIHRoZSBrZXkgaXMgYSBkdXBsaWNhdGUpLCBhZGQgaXQgdG8gZW50ZXIuXG4gIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBrZXlWYWx1ZSA9IGtleVByZWZpeCArIGtleS5jYWxsKHBhcmVudCwgZGF0YVtpXSwgaSwgZGF0YSk7XG4gICAgaWYgKG5vZGUgPSBub2RlQnlLZXlWYWx1ZVtrZXlWYWx1ZV0pIHtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhbnkgcmVtYWluaW5nIG5vZGVzIHRoYXQgd2VyZSBub3QgYm91bmQgdG8gZGF0YSB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAobm9kZUJ5S2V5VmFsdWVba2V5VmFsdWVzW2ldXSA9PT0gbm9kZSkpIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICBkYXRhID0gbmV3IEFycmF5KHRoaXMuc2l6ZSgpKSwgaiA9IC0xO1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbihkKSB7IGRhdGFbKytqXSA9IGQ7IH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGJpbmQgPSBrZXkgPyBiaW5kS2V5IDogYmluZEluZGV4LFxuICAgICAgcGFyZW50cyA9IHRoaXMuX3BhcmVudHMsXG4gICAgICBncm91cHMgPSB0aGlzLl9ncm91cHM7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB2YWx1ZSA9IGNvbnN0YW50KHZhbHVlKTtcblxuICBmb3IgKHZhciBtID0gZ3JvdXBzLmxlbmd0aCwgdXBkYXRlID0gbmV3IEFycmF5KG0pLCBlbnRlciA9IG5ldyBBcnJheShtKSwgZXhpdCA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50c1tqXSxcbiAgICAgICAgZ3JvdXAgPSBncm91cHNbal0sXG4gICAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgICBkYXRhID0gdmFsdWUuY2FsbChwYXJlbnQsIHBhcmVudCAmJiBwYXJlbnQuX19kYXRhX18sIGosIHBhcmVudHMpLFxuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGVudGVyR3JvdXAgPSBlbnRlcltqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgdXBkYXRlR3JvdXAgPSB1cGRhdGVbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIGV4aXRHcm91cCA9IGV4aXRbal0gPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpO1xuXG4gICAgYmluZChwYXJlbnQsIGdyb3VwLCBlbnRlckdyb3VwLCB1cGRhdGVHcm91cCwgZXhpdEdyb3VwLCBkYXRhLCBrZXkpO1xuXG4gICAgLy8gTm93IGNvbm5lY3QgdGhlIGVudGVyIG5vZGVzIHRvIHRoZWlyIGZvbGxvd2luZyB1cGRhdGUgbm9kZSwgc3VjaCB0aGF0XG4gICAgLy8gYXBwZW5kQ2hpbGQgY2FuIGluc2VydCB0aGUgbWF0ZXJpYWxpemVkIGVudGVyIG5vZGUgYmVmb3JlIHRoaXMgbm9kZSxcbiAgICAvLyByYXRoZXIgdGhhbiBhdCB0aGUgZW5kIG9mIHRoZSBwYXJlbnQgbm9kZS5cbiAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMCwgcHJldmlvdXMsIG5leHQ7IGkwIDwgZGF0YUxlbmd0aDsgKytpMCkge1xuICAgICAgaWYgKHByZXZpb3VzID0gZW50ZXJHcm91cFtpMF0pIHtcbiAgICAgICAgaWYgKGkwID49IGkxKSBpMSA9IGkwICsgMTtcbiAgICAgICAgd2hpbGUgKCEobmV4dCA9IHVwZGF0ZUdyb3VwW2kxXSkgJiYgKytpMSA8IGRhdGFMZW5ndGgpO1xuICAgICAgICBwcmV2aW91cy5fbmV4dCA9IG5leHQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUgPSBuZXcgU2VsZWN0aW9uKHVwZGF0ZSwgcGFyZW50cyk7XG4gIHVwZGF0ZS5fZW50ZXIgPSBlbnRlcjtcbiAgdXBkYXRlLl9leGl0ID0gZXhpdDtcbiAgcmV0dXJuIHVwZGF0ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMucHJvcGVydHkoXCJfX2RhdGFfX1wiLCB2YWx1ZSlcbiAgICAgIDogdGhpcy5ub2RlKCkuX19kYXRhX187XG59XG4iLCJpbXBvcnQgZGVmYXVsdFZpZXcgZnJvbSBcIi4uL3dpbmRvd1wiO1xuXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KG5vZGUsIHR5cGUsIHBhcmFtcykge1xuICB2YXIgd2luZG93ID0gZGVmYXVsdFZpZXcobm9kZSksXG4gICAgICBldmVudCA9IHdpbmRvdy5DdXN0b21FdmVudDtcblxuICBpZiAodHlwZW9mIGV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBldmVudCA9IG5ldyBldmVudCh0eXBlLCBwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG4gICAgaWYgKHBhcmFtcykgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSksIGV2ZW50LmRldGFpbCA9IHBhcmFtcy5kZXRhaWw7XG4gICAgZWxzZSBldmVudC5pbml0RXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoQ29uc3RhbnQodHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGRpc3BhdGNoRnVuY3Rpb25cbiAgICAgIDogZGlzcGF0Y2hDb25zdGFudCkodHlwZSwgcGFyYW1zKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSBjYWxsYmFjay5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMubm9kZSgpO1xufVxuIiwiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2VcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZW50ZXIgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVudGVyTm9kZShwYXJlbnQsIGRhdHVtKSB7XG4gIHRoaXMub3duZXJEb2N1bWVudCA9IHBhcmVudC5vd25lckRvY3VtZW50O1xuICB0aGlzLm5hbWVzcGFjZVVSSSA9IHBhcmVudC5uYW1lc3BhY2VVUkk7XG4gIHRoaXMuX25leHQgPSBudWxsO1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX19kYXRhX18gPSBkYXR1bTtcbn1cblxuRW50ZXJOb2RlLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IEVudGVyTm9kZSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCB0aGlzLl9uZXh0KTsgfSxcbiAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbihjaGlsZCwgbmV4dCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgbmV4dCk7IH0sXG4gIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7IH0sXG4gIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7IH1cbn07XG4iLCJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZVwiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9leGl0IHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBtYXRjaGVyIGZyb20gXCIuLi9tYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZnVuY3Rpb24gaHRtbFJlbW92ZSgpIHtcbiAgdGhpcy5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBodG1sQ29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGh0bWxGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBodG1sUmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBodG1sRnVuY3Rpb25cbiAgICAgICAgICA6IGh0bWxDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS5pbm5lckhUTUw7XG59XG4iLCJpbXBvcnQgc2VsZWN0aW9uX3NlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0QWxsIGZyb20gXCIuL3NlbGVjdEFsbFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9maWx0ZXIgZnJvbSBcIi4vZmlsdGVyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2RhdGEgZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9lbnRlciBmcm9tIFwiLi9lbnRlclwiO1xuaW1wb3J0IHNlbGVjdGlvbl9leGl0IGZyb20gXCIuL2V4aXRcIjtcbmltcG9ydCBzZWxlY3Rpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2VcIjtcbmltcG9ydCBzZWxlY3Rpb25fb3JkZXIgZnJvbSBcIi4vb3JkZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fc29ydCBmcm9tIFwiLi9zb3J0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NhbGwgZnJvbSBcIi4vY2FsbFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlcyBmcm9tIFwiLi9ub2Rlc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlIGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2l6ZSBmcm9tIFwiLi9zaXplXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VtcHR5IGZyb20gXCIuL2VtcHR5XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VhY2ggZnJvbSBcIi4vZWFjaFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9hdHRyIGZyb20gXCIuL2F0dHJcIjtcbmltcG9ydCBzZWxlY3Rpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCBzZWxlY3Rpb25fcHJvcGVydHkgZnJvbSBcIi4vcHJvcGVydHlcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xhc3NlZCBmcm9tIFwiLi9jbGFzc2VkXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RleHQgZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9odG1sIGZyb20gXCIuL2h0bWxcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmFpc2UgZnJvbSBcIi4vcmFpc2VcIjtcbmltcG9ydCBzZWxlY3Rpb25fbG93ZXIgZnJvbSBcIi4vbG93ZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXBwZW5kIGZyb20gXCIuL2FwcGVuZFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnNlcnQgZnJvbSBcIi4vaW5zZXJ0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmVcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xvbmUgZnJvbSBcIi4vY2xvbmVcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0dW0gZnJvbSBcIi4vZGF0dW1cIjtcbmltcG9ydCBzZWxlY3Rpb25fb24gZnJvbSBcIi4vb25cIjtcbmltcG9ydCBzZWxlY3Rpb25fZGlzcGF0Y2ggZnJvbSBcIi4vZGlzcGF0Y2hcIjtcblxuZXhwb3J0IHZhciByb290ID0gW251bGxdO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0aW9uKGdyb3VwcywgcGFyZW50cykge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XV0sIHJvb3QpO1xufVxuXG5TZWxlY3Rpb24ucHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFNlbGVjdGlvbixcbiAgc2VsZWN0OiBzZWxlY3Rpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHNlbGVjdGlvbl9zZWxlY3RBbGwsXG4gIGZpbHRlcjogc2VsZWN0aW9uX2ZpbHRlcixcbiAgZGF0YTogc2VsZWN0aW9uX2RhdGEsXG4gIGVudGVyOiBzZWxlY3Rpb25fZW50ZXIsXG4gIGV4aXQ6IHNlbGVjdGlvbl9leGl0LFxuICBtZXJnZTogc2VsZWN0aW9uX21lcmdlLFxuICBvcmRlcjogc2VsZWN0aW9uX29yZGVyLFxuICBzb3J0OiBzZWxlY3Rpb25fc29ydCxcbiAgY2FsbDogc2VsZWN0aW9uX2NhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fbm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX2VhY2gsXG4gIGF0dHI6IHNlbGVjdGlvbl9hdHRyLFxuICBzdHlsZTogc2VsZWN0aW9uX3N0eWxlLFxuICBwcm9wZXJ0eTogc2VsZWN0aW9uX3Byb3BlcnR5LFxuICBjbGFzc2VkOiBzZWxlY3Rpb25fY2xhc3NlZCxcbiAgdGV4dDogc2VsZWN0aW9uX3RleHQsXG4gIGh0bWw6IHNlbGVjdGlvbl9odG1sLFxuICByYWlzZTogc2VsZWN0aW9uX3JhaXNlLFxuICBsb3dlcjogc2VsZWN0aW9uX2xvd2VyLFxuICBhcHBlbmQ6IHNlbGVjdGlvbl9hcHBlbmQsXG4gIGluc2VydDogc2VsZWN0aW9uX2luc2VydCxcbiAgcmVtb3ZlOiBzZWxlY3Rpb25fcmVtb3ZlLFxuICBjbG9uZTogc2VsZWN0aW9uX2Nsb25lLFxuICBkYXR1bTogc2VsZWN0aW9uX2RhdHVtLFxuICBvbjogc2VsZWN0aW9uX29uLFxuICBkaXNwYXRjaDogc2VsZWN0aW9uX2Rpc3BhdGNoXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb247XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvclwiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3RvclwiO1xuXG5mdW5jdGlvbiBjb25zdGFudE51bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBiZWZvcmUpIHtcbiAgdmFyIGNyZWF0ZSA9IHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIgPyBuYW1lIDogY3JlYXRvcihuYW1lKSxcbiAgICAgIHNlbGVjdCA9IGJlZm9yZSA9PSBudWxsID8gY29uc3RhbnROdWxsIDogdHlwZW9mIGJlZm9yZSA9PT0gXCJmdW5jdGlvblwiID8gYmVmb3JlIDogc2VsZWN0b3IoYmVmb3JlKTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gbG93ZXIoKSB7XG4gIGlmICh0aGlzLnByZXZpb3VzU2libGluZykgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLCB0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKGxvd2VyKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rpb24pIHtcblxuICBmb3IgKHZhciBncm91cHMwID0gdGhpcy5fZ3JvdXBzLCBncm91cHMxID0gc2VsZWN0aW9uLl9ncm91cHMsIG0wID0gZ3JvdXBzMC5sZW5ndGgsIG0xID0gZ3JvdXBzMS5sZW5ndGgsIG0gPSBNYXRoLm1pbihtMCwgbTEpLCBtZXJnZXMgPSBuZXcgQXJyYXkobTApLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwMCA9IGdyb3VwczBbal0sIGdyb3VwMSA9IGdyb3VwczFbal0sIG4gPSBncm91cDAubGVuZ3RoLCBtZXJnZSA9IG1lcmdlc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXAwW2ldIHx8IGdyb3VwMVtpXSkge1xuICAgICAgICBtZXJnZVtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IGogPCBtMDsgKytqKSB7XG4gICAgbWVyZ2VzW2pdID0gZ3JvdXBzMFtqXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKG1lcmdlcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgdmFyIG5vZGUgPSBncm91cFtpXTtcbiAgICAgIGlmIChub2RlKSByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbm9kZXMgPSBuZXcgQXJyYXkodGhpcy5zaXplKCkpLCBpID0gLTE7XG4gIHRoaXMuZWFjaChmdW5jdGlvbigpIHsgbm9kZXNbKytpXSA9IHRoaXM7IH0pO1xuICByZXR1cm4gbm9kZXM7XG59XG4iLCJ2YXIgZmlsdGVyRXZlbnRzID0ge307XG5cbmV4cG9ydCB2YXIgZXZlbnQgPSBudWxsO1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBpZiAoIShcIm9ubW91c2VlbnRlclwiIGluIGVsZW1lbnQpKSB7XG4gICAgZmlsdGVyRXZlbnRzID0ge21vdXNlZW50ZXI6IFwibW91c2VvdmVyXCIsIG1vdXNlbGVhdmU6IFwibW91c2VvdXRcIn07XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQ29udGV4dExpc3RlbmVyKGxpc3RlbmVyLCBpbmRleCwgZ3JvdXApIHtcbiAgbGlzdGVuZXIgPSBjb250ZXh0TGlzdGVuZXIobGlzdGVuZXIsIGluZGV4LCBncm91cCk7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldDtcbiAgICBpZiAoIXJlbGF0ZWQgfHwgKHJlbGF0ZWQgIT09IHRoaXMgJiYgIShyZWxhdGVkLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHRoaXMpICYgOCkpKSB7XG4gICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lciwgaW5kZXgsIGdyb3VwKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudDEpIHtcbiAgICB2YXIgZXZlbnQwID0gZXZlbnQ7IC8vIEV2ZW50cyBjYW4gYmUgcmVlbnRyYW50IChlLmcuLCBmb2N1cykuXG4gICAgZXZlbnQgPSBldmVudDE7XG4gICAgdHJ5IHtcbiAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fX2RhdGFfXywgaW5kZXgsIGdyb3VwKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZXZlbnQgPSBldmVudDA7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvblJlbW92ZSh0eXBlbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uO1xuICAgIGlmICghb24pIHJldHVybjtcbiAgICBmb3IgKHZhciBqID0gMCwgaSA9IC0xLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBpZiAobyA9IG9uW2pdLCAoIXR5cGVuYW1lLnR5cGUgfHwgby50eXBlID09PSB0eXBlbmFtZS50eXBlKSAmJiBvLm5hbWUgPT09IHR5cGVuYW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciwgby5jYXB0dXJlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uWysraV0gPSBvO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoKytpKSBvbi5sZW5ndGggPSBpO1xuICAgIGVsc2UgZGVsZXRlIHRoaXMuX19vbjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25BZGQodHlwZW5hbWUsIHZhbHVlLCBjYXB0dXJlKSB7XG4gIHZhciB3cmFwID0gZmlsdGVyRXZlbnRzLmhhc093blByb3BlcnR5KHR5cGVuYW1lLnR5cGUpID8gZmlsdGVyQ29udGV4dExpc3RlbmVyIDogY29udGV4dExpc3RlbmVyO1xuICByZXR1cm4gZnVuY3Rpb24oZCwgaSwgZ3JvdXApIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb24sIG8sIGxpc3RlbmVyID0gd3JhcCh2YWx1ZSwgaSwgZ3JvdXApO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICAgIGlmICgobyA9IG9uW2pdKS50eXBlID09PSB0eXBlbmFtZS50eXBlICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLmNhcHR1cmUpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyID0gbGlzdGVuZXIsIG8uY2FwdHVyZSA9IGNhcHR1cmUpO1xuICAgICAgICBvLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHR5cGVuYW1lLnR5cGUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICBvID0ge3R5cGU6IHR5cGVuYW1lLnR5cGUsIG5hbWU6IHR5cGVuYW1lLm5hbWUsIHZhbHVlOiB2YWx1ZSwgbGlzdGVuZXI6IGxpc3RlbmVyLCBjYXB0dXJlOiBjYXB0dXJlfTtcbiAgICBpZiAoIW9uKSB0aGlzLl9fb24gPSBbb107XG4gICAgZWxzZSBvbi5wdXNoKG8pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlbmFtZSwgdmFsdWUsIGNhcHR1cmUpIHtcbiAgdmFyIHR5cGVuYW1lcyA9IHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lICsgXCJcIiksIGksIG4gPSB0eXBlbmFtZXMubGVuZ3RoLCB0O1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBvbiA9IHRoaXMubm9kZSgpLl9fb247XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgZm9yIChpID0gMCwgbyA9IG9uW2pdOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICgodCA9IHR5cGVuYW1lc1tpXSkudHlwZSA9PT0gby50eXBlICYmIHQubmFtZSA9PT0gby5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG8udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb24gPSB2YWx1ZSA/IG9uQWRkIDogb25SZW1vdmU7XG4gIGlmIChjYXB0dXJlID09IG51bGwpIGNhcHR1cmUgPSBmYWxzZTtcbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgdGhpcy5lYWNoKG9uKHR5cGVuYW1lc1tpXSwgdmFsdWUsIGNhcHR1cmUpKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21FdmVudChldmVudDEsIGxpc3RlbmVyLCB0aGF0LCBhcmdzKSB7XG4gIHZhciBldmVudDAgPSBldmVudDtcbiAgZXZlbnQxLnNvdXJjZUV2ZW50ID0gZXZlbnQ7XG4gIGV2ZW50ID0gZXZlbnQxO1xuICB0cnkge1xuICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBldmVudCA9IGV2ZW50MDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gLTEsIG0gPSBncm91cHMubGVuZ3RoOyArK2ogPCBtOykge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gZ3JvdXAubGVuZ3RoIC0gMSwgbmV4dCA9IGdyb3VwW2ldLCBub2RlOyAtLWkgPj0gMDspIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgaWYgKG5leHQgJiYgbmV4dCAhPT0gbm9kZS5uZXh0U2libGluZykgbmV4dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBuZXh0KTtcbiAgICAgICAgbmV4dCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJmdW5jdGlvbiBwcm9wZXJ0eVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpc1tuYW1lXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgZWxzZSB0aGlzW25hbWVdID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gcHJvcGVydHlSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gcHJvcGVydHlGdW5jdGlvblxuICAgICAgICAgIDogcHJvcGVydHlDb25zdGFudCkobmFtZSwgdmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKVtuYW1lXTtcbn1cbiIsImZ1bmN0aW9uIHJhaXNlKCkge1xuICBpZiAodGhpcy5uZXh0U2libGluZykgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyYWlzZSk7XG59XG4iLCJmdW5jdGlvbiByZW1vdmUoKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIGlmIChwYXJlbnQpIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmVtb3ZlKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3Ioc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBzdWJub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChzdWJub2RlID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSkge1xuICAgICAgICBpZiAoXCJfX2RhdGFfX1wiIGluIG5vZGUpIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICBzdWJncm91cFtpXSA9IHN1Ym5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHNlbGVjdG9yQWxsIGZyb20gXCIuLi9zZWxlY3RvckFsbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzdWJncm91cHMucHVzaChzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCBwYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgc2l6ZSA9IDA7XG4gIHRoaXMuZWFjaChmdW5jdGlvbigpIHsgKytzaXplOyB9KTtcbiAgcmV0dXJuIHNpemU7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29tcGFyZSkge1xuICBpZiAoIWNvbXBhcmUpIGNvbXBhcmUgPSBhc2NlbmRpbmc7XG5cbiAgZnVuY3Rpb24gY29tcGFyZU5vZGUoYSwgYikge1xuICAgIHJldHVybiBhICYmIGIgPyBjb21wYXJlKGEuX19kYXRhX18sIGIuX19kYXRhX18pIDogIWEgLSAhYjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHNvcnRncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHNvcnRncm91cCA9IHNvcnRncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNvcnRncm91cFtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvcnRncm91cC5zb3J0KGNvbXBhcmVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHNvcnRncm91cHMsIHRoaXMuX3BhcmVudHMpLm9yZGVyKCk7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICByZXR1cm4gbmV3IEFycmF5KHVwZGF0ZS5sZW5ndGgpO1xufVxuIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3dcIjtcblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2LCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgICA/IHN0eWxlUmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gc3R5bGVGdW5jdGlvblxuICAgICAgICAgICAgOiBzdHlsZUNvbnN0YW50KShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpXG4gICAgICA6IHN0eWxlVmFsdWUodGhpcy5ub2RlKCksIG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVWYWx1ZShub2RlLCBuYW1lKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSlcbiAgICAgIHx8IGRlZmF1bHRWaWV3KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbn1cbiIsImZ1bmN0aW9uIHRleHRSZW1vdmUoKSB7XG4gIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiB0ZXh0Q29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGV4dEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gdGV4dFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gdGV4dEZ1bmN0aW9uXG4gICAgICAgICAgOiB0ZXh0Q29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkudGV4dENvbnRlbnQ7XG59XG4iLCJmdW5jdGlvbiBub25lKCkge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBub25lIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJmdW5jdGlvbiBlbXB0eSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IGVtcHR5IDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJpbXBvcnQge2V2ZW50fSBmcm9tIFwiLi9zZWxlY3Rpb24vb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjdXJyZW50ID0gZXZlbnQsIHNvdXJjZTtcbiAgd2hpbGUgKHNvdXJjZSA9IGN1cnJlbnQuc291cmNlRXZlbnQpIGN1cnJlbnQgPSBzb3VyY2U7XG4gIHJldHVybiBjdXJyZW50O1xufVxuIiwiaW1wb3J0IHNvdXJjZUV2ZW50IGZyb20gXCIuL3NvdXJjZUV2ZW50XCI7XG5pbXBvcnQgcG9pbnQgZnJvbSBcIi4vcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgdG91Y2hlcywgaWRlbnRpZmllcikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIGlkZW50aWZpZXIgPSB0b3VjaGVzLCB0b3VjaGVzID0gc291cmNlRXZlbnQoKS5jaGFuZ2VkVG91Y2hlcztcblxuICBmb3IgKHZhciBpID0gMCwgbiA9IHRvdWNoZXMgPyB0b3VjaGVzLmxlbmd0aCA6IDAsIHRvdWNoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKCh0b3VjaCA9IHRvdWNoZXNbaV0pLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJldHVybiBwb2ludChub2RlLCB0b3VjaCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnRcIjtcbmltcG9ydCBwb2ludCBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCB0b3VjaGVzKSB7XG4gIGlmICh0b3VjaGVzID09IG51bGwpIHRvdWNoZXMgPSBzb3VyY2VFdmVudCgpLnRvdWNoZXM7XG5cbiAgZm9yICh2YXIgaSA9IDAsIG4gPSB0b3VjaGVzID8gdG91Y2hlcy5sZW5ndGggOiAwLCBwb2ludHMgPSBuZXcgQXJyYXkobik7IGkgPCBuOyArK2kpIHtcbiAgICBwb2ludHNbaV0gPSBwb2ludChub2RlLCB0b3VjaGVzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBwb2ludHM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiAobm9kZS5vd25lckRvY3VtZW50ICYmIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgLy8gbm9kZSBpcyBhIE5vZGVcbiAgICAgIHx8IChub2RlLmRvY3VtZW50ICYmIG5vZGUpIC8vIG5vZGUgaXMgYSBXaW5kb3dcbiAgICAgIHx8IG5vZGUuZGVmYXVsdFZpZXc7IC8vIG5vZGUgaXMgYSBEb2N1bWVudFxufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIHRpbWVGb3JtYXREZWZhdWx0TG9jYWxlLCB0aW1lRm9ybWF0LCB0aW1lUGFyc2UsIHV0Y0Zvcm1hdCwgdXRjUGFyc2V9IGZyb20gXCIuL3NyYy9kZWZhdWx0TG9jYWxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGltZUZvcm1hdExvY2FsZX0gZnJvbSBcIi4vc3JjL2xvY2FsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGlzb0Zvcm1hdH0gZnJvbSBcIi4vc3JjL2lzb0Zvcm1hdFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGlzb1BhcnNlfSBmcm9tIFwiLi9zcmMvaXNvUGFyc2VcIjtcbiIsImltcG9ydCBmb3JtYXRMb2NhbGUgZnJvbSBcIi4vbG9jYWxlXCI7XG5cbnZhciBsb2NhbGU7XG5leHBvcnQgdmFyIHRpbWVGb3JtYXQ7XG5leHBvcnQgdmFyIHRpbWVQYXJzZTtcbmV4cG9ydCB2YXIgdXRjRm9ybWF0O1xuZXhwb3J0IHZhciB1dGNQYXJzZTtcblxuZGVmYXVsdExvY2FsZSh7XG4gIGRhdGVUaW1lOiBcIiV4LCAlWFwiLFxuICBkYXRlOiBcIiUtbS8lLWQvJVlcIixcbiAgdGltZTogXCIlLUk6JU06JVMgJXBcIixcbiAgcGVyaW9kczogW1wiQU1cIiwgXCJQTVwiXSxcbiAgZGF5czogW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl0sXG4gIHNob3J0RGF5czogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICBtb250aHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuICBzaG9ydE1vbnRoczogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdExvY2FsZShkZWZpbml0aW9uKSB7XG4gIGxvY2FsZSA9IGZvcm1hdExvY2FsZShkZWZpbml0aW9uKTtcbiAgdGltZUZvcm1hdCA9IGxvY2FsZS5mb3JtYXQ7XG4gIHRpbWVQYXJzZSA9IGxvY2FsZS5wYXJzZTtcbiAgdXRjRm9ybWF0ID0gbG9jYWxlLnV0Y0Zvcm1hdDtcbiAgdXRjUGFyc2UgPSBsb2NhbGUudXRjUGFyc2U7XG4gIHJldHVybiBsb2NhbGU7XG59XG4iLCJpbXBvcnQge3V0Y0Zvcm1hdH0gZnJvbSBcIi4vZGVmYXVsdExvY2FsZVwiO1xuXG5leHBvcnQgdmFyIGlzb1NwZWNpZmllciA9IFwiJVktJW0tJWRUJUg6JU06JVMuJUxaXCI7XG5cbmZ1bmN0aW9uIGZvcm1hdElzb05hdGl2ZShkYXRlKSB7XG4gIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7XG59XG5cbnZhciBmb3JtYXRJc28gPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZ1xuICAgID8gZm9ybWF0SXNvTmF0aXZlXG4gICAgOiB1dGNGb3JtYXQoaXNvU3BlY2lmaWVyKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0SXNvO1xuIiwiaW1wb3J0IHtpc29TcGVjaWZpZXJ9IGZyb20gXCIuL2lzb0Zvcm1hdFwiO1xuaW1wb3J0IHt1dGNQYXJzZX0gZnJvbSBcIi4vZGVmYXVsdExvY2FsZVwiO1xuXG5mdW5jdGlvbiBwYXJzZUlzb05hdGl2ZShzdHJpbmcpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZShzdHJpbmcpO1xuICByZXR1cm4gaXNOYU4oZGF0ZSkgPyBudWxsIDogZGF0ZTtcbn1cblxudmFyIHBhcnNlSXNvID0gK25ldyBEYXRlKFwiMjAwMC0wMS0wMVQwMDowMDowMC4wMDBaXCIpXG4gICAgPyBwYXJzZUlzb05hdGl2ZVxuICAgIDogdXRjUGFyc2UoaXNvU3BlY2lmaWVyKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VJc287XG4iLCJpbXBvcnQge1xuICB0aW1lRGF5LFxuICB0aW1lU3VuZGF5LFxuICB0aW1lTW9uZGF5LFxuICB0aW1lVGh1cnNkYXksXG4gIHRpbWVZZWFyLFxuICB1dGNEYXksXG4gIHV0Y1N1bmRheSxcbiAgdXRjTW9uZGF5LFxuICB1dGNUaHVyc2RheSxcbiAgdXRjWWVhclxufSBmcm9tIFwiZDMtdGltZVwiO1xuXG5mdW5jdGlvbiBsb2NhbERhdGUoZCkge1xuICBpZiAoMCA8PSBkLnkgJiYgZC55IDwgMTAwKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgtMSwgZC5tLCBkLmQsIGQuSCwgZC5NLCBkLlMsIGQuTCk7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihkLnkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZShkLnksIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpO1xufVxuXG5mdW5jdGlvbiB1dGNEYXRlKGQpIHtcbiAgaWYgKDAgPD0gZC55ICYmIGQueSA8IDEwMCkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoLTEsIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpKTtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGQueSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKGQueSwgZC5tLCBkLmQsIGQuSCwgZC5NLCBkLlMsIGQuTCkpO1xufVxuXG5mdW5jdGlvbiBuZXdZZWFyKHkpIHtcbiAgcmV0dXJuIHt5OiB5LCBtOiAwLCBkOiAxLCBIOiAwLCBNOiAwLCBTOiAwLCBMOiAwfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9jYWxlKGxvY2FsZSkge1xuICB2YXIgbG9jYWxlX2RhdGVUaW1lID0gbG9jYWxlLmRhdGVUaW1lLFxuICAgICAgbG9jYWxlX2RhdGUgPSBsb2NhbGUuZGF0ZSxcbiAgICAgIGxvY2FsZV90aW1lID0gbG9jYWxlLnRpbWUsXG4gICAgICBsb2NhbGVfcGVyaW9kcyA9IGxvY2FsZS5wZXJpb2RzLFxuICAgICAgbG9jYWxlX3dlZWtkYXlzID0gbG9jYWxlLmRheXMsXG4gICAgICBsb2NhbGVfc2hvcnRXZWVrZGF5cyA9IGxvY2FsZS5zaG9ydERheXMsXG4gICAgICBsb2NhbGVfbW9udGhzID0gbG9jYWxlLm1vbnRocyxcbiAgICAgIGxvY2FsZV9zaG9ydE1vbnRocyA9IGxvY2FsZS5zaG9ydE1vbnRocztcblxuICB2YXIgcGVyaW9kUmUgPSBmb3JtYXRSZShsb2NhbGVfcGVyaW9kcyksXG4gICAgICBwZXJpb2RMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3BlcmlvZHMpLFxuICAgICAgd2Vla2RheVJlID0gZm9ybWF0UmUobG9jYWxlX3dlZWtkYXlzKSxcbiAgICAgIHdlZWtkYXlMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3dlZWtkYXlzKSxcbiAgICAgIHNob3J0V2Vla2RheVJlID0gZm9ybWF0UmUobG9jYWxlX3Nob3J0V2Vla2RheXMpLFxuICAgICAgc2hvcnRXZWVrZGF5TG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9zaG9ydFdlZWtkYXlzKSxcbiAgICAgIG1vbnRoUmUgPSBmb3JtYXRSZShsb2NhbGVfbW9udGhzKSxcbiAgICAgIG1vbnRoTG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9tb250aHMpLFxuICAgICAgc2hvcnRNb250aFJlID0gZm9ybWF0UmUobG9jYWxlX3Nob3J0TW9udGhzKSxcbiAgICAgIHNob3J0TW9udGhMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3Nob3J0TW9udGhzKTtcblxuICB2YXIgZm9ybWF0cyA9IHtcbiAgICBcImFcIjogZm9ybWF0U2hvcnRXZWVrZGF5LFxuICAgIFwiQVwiOiBmb3JtYXRXZWVrZGF5LFxuICAgIFwiYlwiOiBmb3JtYXRTaG9ydE1vbnRoLFxuICAgIFwiQlwiOiBmb3JtYXRNb250aCxcbiAgICBcImNcIjogbnVsbCxcbiAgICBcImRcIjogZm9ybWF0RGF5T2ZNb250aCxcbiAgICBcImVcIjogZm9ybWF0RGF5T2ZNb250aCxcbiAgICBcImZcIjogZm9ybWF0TWljcm9zZWNvbmRzLFxuICAgIFwiSFwiOiBmb3JtYXRIb3VyMjQsXG4gICAgXCJJXCI6IGZvcm1hdEhvdXIxMixcbiAgICBcImpcIjogZm9ybWF0RGF5T2ZZZWFyLFxuICAgIFwiTFwiOiBmb3JtYXRNaWxsaXNlY29uZHMsXG4gICAgXCJtXCI6IGZvcm1hdE1vbnRoTnVtYmVyLFxuICAgIFwiTVwiOiBmb3JtYXRNaW51dGVzLFxuICAgIFwicFwiOiBmb3JtYXRQZXJpb2QsXG4gICAgXCJRXCI6IGZvcm1hdFVuaXhUaW1lc3RhbXAsXG4gICAgXCJzXCI6IGZvcm1hdFVuaXhUaW1lc3RhbXBTZWNvbmRzLFxuICAgIFwiU1wiOiBmb3JtYXRTZWNvbmRzLFxuICAgIFwidVwiOiBmb3JtYXRXZWVrZGF5TnVtYmVyTW9uZGF5LFxuICAgIFwiVVwiOiBmb3JtYXRXZWVrTnVtYmVyU3VuZGF5LFxuICAgIFwiVlwiOiBmb3JtYXRXZWVrTnVtYmVySVNPLFxuICAgIFwid1wiOiBmb3JtYXRXZWVrZGF5TnVtYmVyU3VuZGF5LFxuICAgIFwiV1wiOiBmb3JtYXRXZWVrTnVtYmVyTW9uZGF5LFxuICAgIFwieFwiOiBudWxsLFxuICAgIFwiWFwiOiBudWxsLFxuICAgIFwieVwiOiBmb3JtYXRZZWFyLFxuICAgIFwiWVwiOiBmb3JtYXRGdWxsWWVhcixcbiAgICBcIlpcIjogZm9ybWF0Wm9uZSxcbiAgICBcIiVcIjogZm9ybWF0TGl0ZXJhbFBlcmNlbnRcbiAgfTtcblxuICB2YXIgdXRjRm9ybWF0cyA9IHtcbiAgICBcImFcIjogZm9ybWF0VVRDU2hvcnRXZWVrZGF5LFxuICAgIFwiQVwiOiBmb3JtYXRVVENXZWVrZGF5LFxuICAgIFwiYlwiOiBmb3JtYXRVVENTaG9ydE1vbnRoLFxuICAgIFwiQlwiOiBmb3JtYXRVVENNb250aCxcbiAgICBcImNcIjogbnVsbCxcbiAgICBcImRcIjogZm9ybWF0VVRDRGF5T2ZNb250aCxcbiAgICBcImVcIjogZm9ybWF0VVRDRGF5T2ZNb250aCxcbiAgICBcImZcIjogZm9ybWF0VVRDTWljcm9zZWNvbmRzLFxuICAgIFwiSFwiOiBmb3JtYXRVVENIb3VyMjQsXG4gICAgXCJJXCI6IGZvcm1hdFVUQ0hvdXIxMixcbiAgICBcImpcIjogZm9ybWF0VVRDRGF5T2ZZZWFyLFxuICAgIFwiTFwiOiBmb3JtYXRVVENNaWxsaXNlY29uZHMsXG4gICAgXCJtXCI6IGZvcm1hdFVUQ01vbnRoTnVtYmVyLFxuICAgIFwiTVwiOiBmb3JtYXRVVENNaW51dGVzLFxuICAgIFwicFwiOiBmb3JtYXRVVENQZXJpb2QsXG4gICAgXCJRXCI6IGZvcm1hdFVuaXhUaW1lc3RhbXAsXG4gICAgXCJzXCI6IGZvcm1hdFVuaXhUaW1lc3RhbXBTZWNvbmRzLFxuICAgIFwiU1wiOiBmb3JtYXRVVENTZWNvbmRzLFxuICAgIFwidVwiOiBmb3JtYXRVVENXZWVrZGF5TnVtYmVyTW9uZGF5LFxuICAgIFwiVVwiOiBmb3JtYXRVVENXZWVrTnVtYmVyU3VuZGF5LFxuICAgIFwiVlwiOiBmb3JtYXRVVENXZWVrTnVtYmVySVNPLFxuICAgIFwid1wiOiBmb3JtYXRVVENXZWVrZGF5TnVtYmVyU3VuZGF5LFxuICAgIFwiV1wiOiBmb3JtYXRVVENXZWVrTnVtYmVyTW9uZGF5LFxuICAgIFwieFwiOiBudWxsLFxuICAgIFwiWFwiOiBudWxsLFxuICAgIFwieVwiOiBmb3JtYXRVVENZZWFyLFxuICAgIFwiWVwiOiBmb3JtYXRVVENGdWxsWWVhcixcbiAgICBcIlpcIjogZm9ybWF0VVRDWm9uZSxcbiAgICBcIiVcIjogZm9ybWF0TGl0ZXJhbFBlcmNlbnRcbiAgfTtcblxuICB2YXIgcGFyc2VzID0ge1xuICAgIFwiYVwiOiBwYXJzZVNob3J0V2Vla2RheSxcbiAgICBcIkFcIjogcGFyc2VXZWVrZGF5LFxuICAgIFwiYlwiOiBwYXJzZVNob3J0TW9udGgsXG4gICAgXCJCXCI6IHBhcnNlTW9udGgsXG4gICAgXCJjXCI6IHBhcnNlTG9jYWxlRGF0ZVRpbWUsXG4gICAgXCJkXCI6IHBhcnNlRGF5T2ZNb250aCxcbiAgICBcImVcIjogcGFyc2VEYXlPZk1vbnRoLFxuICAgIFwiZlwiOiBwYXJzZU1pY3Jvc2Vjb25kcyxcbiAgICBcIkhcIjogcGFyc2VIb3VyMjQsXG4gICAgXCJJXCI6IHBhcnNlSG91cjI0LFxuICAgIFwialwiOiBwYXJzZURheU9mWWVhcixcbiAgICBcIkxcIjogcGFyc2VNaWxsaXNlY29uZHMsXG4gICAgXCJtXCI6IHBhcnNlTW9udGhOdW1iZXIsXG4gICAgXCJNXCI6IHBhcnNlTWludXRlcyxcbiAgICBcInBcIjogcGFyc2VQZXJpb2QsXG4gICAgXCJRXCI6IHBhcnNlVW5peFRpbWVzdGFtcCxcbiAgICBcInNcIjogcGFyc2VVbml4VGltZXN0YW1wU2Vjb25kcyxcbiAgICBcIlNcIjogcGFyc2VTZWNvbmRzLFxuICAgIFwidVwiOiBwYXJzZVdlZWtkYXlOdW1iZXJNb25kYXksXG4gICAgXCJVXCI6IHBhcnNlV2Vla051bWJlclN1bmRheSxcbiAgICBcIlZcIjogcGFyc2VXZWVrTnVtYmVySVNPLFxuICAgIFwid1wiOiBwYXJzZVdlZWtkYXlOdW1iZXJTdW5kYXksXG4gICAgXCJXXCI6IHBhcnNlV2Vla051bWJlck1vbmRheSxcbiAgICBcInhcIjogcGFyc2VMb2NhbGVEYXRlLFxuICAgIFwiWFwiOiBwYXJzZUxvY2FsZVRpbWUsXG4gICAgXCJ5XCI6IHBhcnNlWWVhcixcbiAgICBcIllcIjogcGFyc2VGdWxsWWVhcixcbiAgICBcIlpcIjogcGFyc2Vab25lLFxuICAgIFwiJVwiOiBwYXJzZUxpdGVyYWxQZXJjZW50XG4gIH07XG5cbiAgLy8gVGhlc2UgcmVjdXJzaXZlIGRpcmVjdGl2ZSBkZWZpbml0aW9ucyBtdXN0IGJlIGRlZmVycmVkLlxuICBmb3JtYXRzLnggPSBuZXdGb3JtYXQobG9jYWxlX2RhdGUsIGZvcm1hdHMpO1xuICBmb3JtYXRzLlggPSBuZXdGb3JtYXQobG9jYWxlX3RpbWUsIGZvcm1hdHMpO1xuICBmb3JtYXRzLmMgPSBuZXdGb3JtYXQobG9jYWxlX2RhdGVUaW1lLCBmb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy54ID0gbmV3Rm9ybWF0KGxvY2FsZV9kYXRlLCB1dGNGb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy5YID0gbmV3Rm9ybWF0KGxvY2FsZV90aW1lLCB1dGNGb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy5jID0gbmV3Rm9ybWF0KGxvY2FsZV9kYXRlVGltZSwgdXRjRm9ybWF0cyk7XG5cbiAgZnVuY3Rpb24gbmV3Rm9ybWF0KHNwZWNpZmllciwgZm9ybWF0cykge1xuICAgIHJldHVybiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICB2YXIgc3RyaW5nID0gW10sXG4gICAgICAgICAgaSA9IC0xLFxuICAgICAgICAgIGogPSAwLFxuICAgICAgICAgIG4gPSBzcGVjaWZpZXIubGVuZ3RoLFxuICAgICAgICAgIGMsXG4gICAgICAgICAgcGFkLFxuICAgICAgICAgIGZvcm1hdDtcblxuICAgICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSBkYXRlID0gbmV3IERhdGUoK2RhdGUpO1xuXG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBpZiAoc3BlY2lmaWVyLmNoYXJDb2RlQXQoaSkgPT09IDM3KSB7XG4gICAgICAgICAgc3RyaW5nLnB1c2goc3BlY2lmaWVyLnNsaWNlKGosIGkpKTtcbiAgICAgICAgICBpZiAoKHBhZCA9IHBhZHNbYyA9IHNwZWNpZmllci5jaGFyQXQoKytpKV0pICE9IG51bGwpIGMgPSBzcGVjaWZpZXIuY2hhckF0KCsraSk7XG4gICAgICAgICAgZWxzZSBwYWQgPSBjID09PSBcImVcIiA/IFwiIFwiIDogXCIwXCI7XG4gICAgICAgICAgaWYgKGZvcm1hdCA9IGZvcm1hdHNbY10pIGMgPSBmb3JtYXQoZGF0ZSwgcGFkKTtcbiAgICAgICAgICBzdHJpbmcucHVzaChjKTtcbiAgICAgICAgICBqID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RyaW5nLnB1c2goc3BlY2lmaWVyLnNsaWNlKGosIGkpKTtcbiAgICAgIHJldHVybiBzdHJpbmcuam9pbihcIlwiKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbmV3UGFyc2Uoc3BlY2lmaWVyLCBuZXdEYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgdmFyIGQgPSBuZXdZZWFyKDE5MDApLFxuICAgICAgICAgIGkgPSBwYXJzZVNwZWNpZmllcihkLCBzcGVjaWZpZXIsIHN0cmluZyArPSBcIlwiLCAwKSxcbiAgICAgICAgICB3ZWVrLCBkYXk7XG4gICAgICBpZiAoaSAhPSBzdHJpbmcubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgICAgLy8gSWYgYSBVTklYIHRpbWVzdGFtcCBpcyBzcGVjaWZpZWQsIHJldHVybiBpdC5cbiAgICAgIGlmIChcIlFcIiBpbiBkKSByZXR1cm4gbmV3IERhdGUoZC5RKTtcblxuICAgICAgLy8gVGhlIGFtLXBtIGZsYWcgaXMgMCBmb3IgQU0sIGFuZCAxIGZvciBQTS5cbiAgICAgIGlmIChcInBcIiBpbiBkKSBkLkggPSBkLkggJSAxMiArIGQucCAqIDEyO1xuXG4gICAgICAvLyBDb252ZXJ0IGRheS1vZi13ZWVrIGFuZCB3ZWVrLW9mLXllYXIgdG8gZGF5LW9mLXllYXIuXG4gICAgICBpZiAoXCJWXCIgaW4gZCkge1xuICAgICAgICBpZiAoZC5WIDwgMSB8fCBkLlYgPiA1MykgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICghKFwid1wiIGluIGQpKSBkLncgPSAxO1xuICAgICAgICBpZiAoXCJaXCIgaW4gZCkge1xuICAgICAgICAgIHdlZWsgPSB1dGNEYXRlKG5ld1llYXIoZC55KSksIGRheSA9IHdlZWsuZ2V0VVRDRGF5KCk7XG4gICAgICAgICAgd2VlayA9IGRheSA+IDQgfHwgZGF5ID09PSAwID8gdXRjTW9uZGF5LmNlaWwod2VlaykgOiB1dGNNb25kYXkod2Vlayk7XG4gICAgICAgICAgd2VlayA9IHV0Y0RheS5vZmZzZXQod2VlaywgKGQuViAtIDEpICogNyk7XG4gICAgICAgICAgZC55ID0gd2Vlay5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgICAgIGQubSA9IHdlZWsuZ2V0VVRDTW9udGgoKTtcbiAgICAgICAgICBkLmQgPSB3ZWVrLmdldFVUQ0RhdGUoKSArIChkLncgKyA2KSAlIDc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VlayA9IG5ld0RhdGUobmV3WWVhcihkLnkpKSwgZGF5ID0gd2Vlay5nZXREYXkoKTtcbiAgICAgICAgICB3ZWVrID0gZGF5ID4gNCB8fCBkYXkgPT09IDAgPyB0aW1lTW9uZGF5LmNlaWwod2VlaykgOiB0aW1lTW9uZGF5KHdlZWspO1xuICAgICAgICAgIHdlZWsgPSB0aW1lRGF5Lm9mZnNldCh3ZWVrLCAoZC5WIC0gMSkgKiA3KTtcbiAgICAgICAgICBkLnkgPSB3ZWVrLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgZC5tID0gd2Vlay5nZXRNb250aCgpO1xuICAgICAgICAgIGQuZCA9IHdlZWsuZ2V0RGF0ZSgpICsgKGQudyArIDYpICUgNztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcIldcIiBpbiBkIHx8IFwiVVwiIGluIGQpIHtcbiAgICAgICAgaWYgKCEoXCJ3XCIgaW4gZCkpIGQudyA9IFwidVwiIGluIGQgPyBkLnUgJSA3IDogXCJXXCIgaW4gZCA/IDEgOiAwO1xuICAgICAgICBkYXkgPSBcIlpcIiBpbiBkID8gdXRjRGF0ZShuZXdZZWFyKGQueSkpLmdldFVUQ0RheSgpIDogbmV3RGF0ZShuZXdZZWFyKGQueSkpLmdldERheSgpO1xuICAgICAgICBkLm0gPSAwO1xuICAgICAgICBkLmQgPSBcIldcIiBpbiBkID8gKGQudyArIDYpICUgNyArIGQuVyAqIDcgLSAoZGF5ICsgNSkgJSA3IDogZC53ICsgZC5VICogNyAtIChkYXkgKyA2KSAlIDc7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGEgdGltZSB6b25lIGlzIHNwZWNpZmllZCwgYWxsIGZpZWxkcyBhcmUgaW50ZXJwcmV0ZWQgYXMgVVRDIGFuZCB0aGVuXG4gICAgICAvLyBvZmZzZXQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgdGltZSB6b25lLlxuICAgICAgaWYgKFwiWlwiIGluIGQpIHtcbiAgICAgICAgZC5IICs9IGQuWiAvIDEwMCB8IDA7XG4gICAgICAgIGQuTSArPSBkLlogJSAxMDA7XG4gICAgICAgIHJldHVybiB1dGNEYXRlKGQpO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIGFsbCBmaWVsZHMgYXJlIGluIGxvY2FsIHRpbWUuXG4gICAgICByZXR1cm4gbmV3RGF0ZShkKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VTcGVjaWZpZXIoZCwgc3BlY2lmaWVyLCBzdHJpbmcsIGopIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIG4gPSBzcGVjaWZpZXIubGVuZ3RoLFxuICAgICAgICBtID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgYyxcbiAgICAgICAgcGFyc2U7XG5cbiAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgIGlmIChqID49IG0pIHJldHVybiAtMTtcbiAgICAgIGMgPSBzcGVjaWZpZXIuY2hhckNvZGVBdChpKyspO1xuICAgICAgaWYgKGMgPT09IDM3KSB7XG4gICAgICAgIGMgPSBzcGVjaWZpZXIuY2hhckF0KGkrKyk7XG4gICAgICAgIHBhcnNlID0gcGFyc2VzW2MgaW4gcGFkcyA/IHNwZWNpZmllci5jaGFyQXQoaSsrKSA6IGNdO1xuICAgICAgICBpZiAoIXBhcnNlIHx8ICgoaiA9IHBhcnNlKGQsIHN0cmluZywgaikpIDwgMCkpIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoYyAhPSBzdHJpbmcuY2hhckNvZGVBdChqKyspKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gajtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlUGVyaW9kKGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gcGVyaW9kUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgIHJldHVybiBuID8gKGQucCA9IHBlcmlvZExvb2t1cFtuWzBdLnRvTG93ZXJDYXNlKCldLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVNob3J0V2Vla2RheShkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IHNob3J0V2Vla2RheVJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLncgPSBzaG9ydFdlZWtkYXlMb29rdXBbblswXS50b0xvd2VyQ2FzZSgpXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gd2Vla2RheVJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLncgPSB3ZWVrZGF5TG9va3VwW25bMF0udG9Mb3dlckNhc2UoKV0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU2hvcnRNb250aChkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IHNob3J0TW9udGhSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gICAgcmV0dXJuIG4gPyAoZC5tID0gc2hvcnRNb250aExvb2t1cFtuWzBdLnRvTG93ZXJDYXNlKCldLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZU1vbnRoKGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gbW9udGhSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gICAgcmV0dXJuIG4gPyAoZC5tID0gbW9udGhMb29rdXBbblswXS50b0xvd2VyQ2FzZSgpXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VMb2NhbGVEYXRlVGltZShkLCBzdHJpbmcsIGkpIHtcbiAgICByZXR1cm4gcGFyc2VTcGVjaWZpZXIoZCwgbG9jYWxlX2RhdGVUaW1lLCBzdHJpbmcsIGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VMb2NhbGVEYXRlKGQsIHN0cmluZywgaSkge1xuICAgIHJldHVybiBwYXJzZVNwZWNpZmllcihkLCBsb2NhbGVfZGF0ZSwgc3RyaW5nLCBpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTG9jYWxlVGltZShkLCBzdHJpbmcsIGkpIHtcbiAgICByZXR1cm4gcGFyc2VTcGVjaWZpZXIoZCwgbG9jYWxlX3RpbWUsIHN0cmluZywgaSk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRTaG9ydFdlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfc2hvcnRXZWVrZGF5c1tkLmdldERheSgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFdlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfd2Vla2RheXNbZC5nZXREYXkoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRTaG9ydE1vbnRoKGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3Nob3J0TW9udGhzW2QuZ2V0TW9udGgoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRNb250aChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9tb250aHNbZC5nZXRNb250aCgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFBlcmlvZChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9wZXJpb2RzWysoZC5nZXRIb3VycygpID49IDEyKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENTaG9ydFdlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfc2hvcnRXZWVrZGF5c1tkLmdldFVUQ0RheSgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfd2Vla2RheXNbZC5nZXRVVENEYXkoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENTaG9ydE1vbnRoKGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3Nob3J0TW9udGhzW2QuZ2V0VVRDTW9udGgoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENNb250aChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9tb250aHNbZC5nZXRVVENNb250aCgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ1BlcmlvZChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9wZXJpb2RzWysoZC5nZXRVVENIb3VycygpID49IDEyKV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvcm1hdDogZnVuY3Rpb24oc3BlY2lmaWVyKSB7XG4gICAgICB2YXIgZiA9IG5ld0Zvcm1hdChzcGVjaWZpZXIgKz0gXCJcIiwgZm9ybWF0cyk7XG4gICAgICBmLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7IHJldHVybiBzcGVjaWZpZXI7IH07XG4gICAgICByZXR1cm4gZjtcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbihzcGVjaWZpZXIpIHtcbiAgICAgIHZhciBwID0gbmV3UGFyc2Uoc3BlY2lmaWVyICs9IFwiXCIsIGxvY2FsRGF0ZSk7XG4gICAgICBwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7IHJldHVybiBzcGVjaWZpZXI7IH07XG4gICAgICByZXR1cm4gcDtcbiAgICB9LFxuICAgIHV0Y0Zvcm1hdDogZnVuY3Rpb24oc3BlY2lmaWVyKSB7XG4gICAgICB2YXIgZiA9IG5ld0Zvcm1hdChzcGVjaWZpZXIgKz0gXCJcIiwgdXRjRm9ybWF0cyk7XG4gICAgICBmLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7IHJldHVybiBzcGVjaWZpZXI7IH07XG4gICAgICByZXR1cm4gZjtcbiAgICB9LFxuICAgIHV0Y1BhcnNlOiBmdW5jdGlvbihzcGVjaWZpZXIpIHtcbiAgICAgIHZhciBwID0gbmV3UGFyc2Uoc3BlY2lmaWVyLCB1dGNEYXRlKTtcbiAgICAgIHAudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNwZWNpZmllcjsgfTtcbiAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHBhZHMgPSB7XCItXCI6IFwiXCIsIFwiX1wiOiBcIiBcIiwgXCIwXCI6IFwiMFwifSxcbiAgICBudW1iZXJSZSA9IC9eXFxzKlxcZCsvLCAvLyBub3RlOiBpZ25vcmVzIG5leHQgZGlyZWN0aXZlXG4gICAgcGVyY2VudFJlID0gL14lLyxcbiAgICByZXF1b3RlUmUgPSAvW1xcXFxeJCorP3xbXFxdKCkue31dL2c7XG5cbmZ1bmN0aW9uIHBhZCh2YWx1ZSwgZmlsbCwgd2lkdGgpIHtcbiAgdmFyIHNpZ24gPSB2YWx1ZSA8IDAgPyBcIi1cIiA6IFwiXCIsXG4gICAgICBzdHJpbmcgPSAoc2lnbiA/IC12YWx1ZSA6IHZhbHVlKSArIFwiXCIsXG4gICAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICByZXR1cm4gc2lnbiArIChsZW5ndGggPCB3aWR0aCA/IG5ldyBBcnJheSh3aWR0aCAtIGxlbmd0aCArIDEpLmpvaW4oZmlsbCkgKyBzdHJpbmcgOiBzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiByZXF1b3RlKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZShyZXF1b3RlUmUsIFwiXFxcXCQmXCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRSZShuYW1lcykge1xuICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIG5hbWVzLm1hcChyZXF1b3RlKS5qb2luKFwifFwiKSArIFwiKVwiLCBcImlcIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdExvb2t1cChuYW1lcykge1xuICB2YXIgbWFwID0ge30sIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIG1hcFtuYW1lc1tpXS50b0xvd2VyQ2FzZSgpXSA9IGk7XG4gIHJldHVybiBtYXA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlV2Vla2RheU51bWJlclN1bmRheShkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICByZXR1cm4gbiA/IChkLncgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVdlZWtkYXlOdW1iZXJNb25kYXkoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDEpKTtcbiAgcmV0dXJuIG4gPyAoZC51ID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VXZWVrTnVtYmVyU3VuZGF5KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuVSA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlV2Vla051bWJlcklTTyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLlYgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVdlZWtOdW1iZXJNb25kYXkoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5XID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VGdWxsWWVhcihkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgNCkpO1xuICByZXR1cm4gbiA/IChkLnkgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC55ID0gK25bMF0gKyAoK25bMF0gPiA2OCA/IDE5MDAgOiAyMDAwKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVpvbmUoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gL14oWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/Ly5leGVjKHN0cmluZy5zbGljZShpLCBpICsgNikpO1xuICByZXR1cm4gbiA/IChkLlogPSBuWzFdID8gMCA6IC0oblsyXSArIChuWzNdIHx8IFwiMDBcIikpLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTW9udGhOdW1iZXIoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5tID0gblswXSAtIDEsIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXlPZk1vbnRoKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuZCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF5T2ZZZWFyKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAzKSk7XG4gIHJldHVybiBuID8gKGQubSA9IDAsIGQuZCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSG91cjI0KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuSCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTWludXRlcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLk0gPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVNlY29uZHMoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5TID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNaWxsaXNlY29uZHMoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDMpKTtcbiAgcmV0dXJuIG4gPyAoZC5MID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNaWNyb3NlY29uZHMoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDYpKTtcbiAgcmV0dXJuIG4gPyAoZC5MID0gTWF0aC5mbG9vcihuWzBdIC8gMTAwMCksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VMaXRlcmFsUGVyY2VudChkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBwZXJjZW50UmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDEpKTtcbiAgcmV0dXJuIG4gPyBpICsgblswXS5sZW5ndGggOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VVbml4VGltZXN0YW1wKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgcmV0dXJuIG4gPyAoZC5RID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VVbml4VGltZXN0YW1wU2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gIHJldHVybiBuID8gKGQuUSA9ICgrblswXSkgKiAxMDAwLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERheU9mTW9udGgoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0RGF0ZSgpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0SG91cjI0KGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldEhvdXJzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRIb3VyMTIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF5T2ZZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZCgxICsgdGltZURheS5jb3VudCh0aW1lWWVhcihkKSwgZCksIHAsIDMpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNaWxsaXNlY29uZHMoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0TWlsbGlzZWNvbmRzKCksIHAsIDMpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNaWNyb3NlY29uZHMoZCwgcCkge1xuICByZXR1cm4gZm9ybWF0TWlsbGlzZWNvbmRzKGQsIHApICsgXCIwMDBcIjtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TW9udGhOdW1iZXIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0TW9udGgoKSArIDEsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNaW51dGVzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldE1pbnV0ZXMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFNlY29uZHMoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0U2Vjb25kcygpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0V2Vla2RheU51bWJlck1vbmRheShkKSB7XG4gIHZhciBkYXkgPSBkLmdldERheSgpO1xuICByZXR1cm4gZGF5ID09PSAwID8gNyA6IGRheTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0V2Vla051bWJlclN1bmRheShkLCBwKSB7XG4gIHJldHVybiBwYWQodGltZVN1bmRheS5jb3VudCh0aW1lWWVhcihkKSwgZCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrTnVtYmVySVNPKGQsIHApIHtcbiAgdmFyIGRheSA9IGQuZ2V0RGF5KCk7XG4gIGQgPSAoZGF5ID49IDQgfHwgZGF5ID09PSAwKSA/IHRpbWVUaHVyc2RheShkKSA6IHRpbWVUaHVyc2RheS5jZWlsKGQpO1xuICByZXR1cm4gcGFkKHRpbWVUaHVyc2RheS5jb3VudCh0aW1lWWVhcihkKSwgZCkgKyAodGltZVllYXIoZCkuZ2V0RGF5KCkgPT09IDQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0V2Vla2RheU51bWJlclN1bmRheShkKSB7XG4gIHJldHVybiBkLmdldERheSgpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrTnVtYmVyTW9uZGF5KGQsIHApIHtcbiAgcmV0dXJuIHBhZCh0aW1lTW9uZGF5LmNvdW50KHRpbWVZZWFyKGQpLCBkKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFllYXIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0RnVsbFllYXIoKSAlIDEwMCwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEZ1bGxZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldEZ1bGxZZWFyKCkgJSAxMDAwMCwgcCwgNCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFpvbmUoZCkge1xuICB2YXIgeiA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgcmV0dXJuICh6ID4gMCA/IFwiLVwiIDogKHogKj0gLTEsIFwiK1wiKSlcbiAgICAgICsgcGFkKHogLyA2MCB8IDAsIFwiMFwiLCAyKVxuICAgICAgKyBwYWQoeiAlIDYwLCBcIjBcIiwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0RheU9mTW9udGgoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDRGF0ZSgpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDSG91cjI0KGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0hvdXJzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENIb3VyMTIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDRGF5T2ZZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZCgxICsgdXRjRGF5LmNvdW50KHV0Y1llYXIoZCksIGQpLCBwLCAzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWlsbGlzZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ01pbGxpc2Vjb25kcygpLCBwLCAzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWljcm9zZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIGZvcm1hdFVUQ01pbGxpc2Vjb25kcyhkLCBwKSArIFwiMDAwXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ01vbnRoTnVtYmVyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ01vbnRoKCkgKyAxLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWludXRlcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENNaW51dGVzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENTZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ1NlY29uZHMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXJNb25kYXkoZCkge1xuICB2YXIgZG93ID0gZC5nZXRVVENEYXkoKTtcbiAgcmV0dXJuIGRvdyA9PT0gMCA/IDcgOiBkb3c7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtOdW1iZXJTdW5kYXkoZCwgcCkge1xuICByZXR1cm4gcGFkKHV0Y1N1bmRheS5jb3VudCh1dGNZZWFyKGQpLCBkKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtOdW1iZXJJU08oZCwgcCkge1xuICB2YXIgZGF5ID0gZC5nZXRVVENEYXkoKTtcbiAgZCA9IChkYXkgPj0gNCB8fCBkYXkgPT09IDApID8gdXRjVGh1cnNkYXkoZCkgOiB1dGNUaHVyc2RheS5jZWlsKGQpO1xuICByZXR1cm4gcGFkKHV0Y1RodXJzZGF5LmNvdW50KHV0Y1llYXIoZCksIGQpICsgKHV0Y1llYXIoZCkuZ2V0VVRDRGF5KCkgPT09IDQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDV2Vla2RheU51bWJlclN1bmRheShkKSB7XG4gIHJldHVybiBkLmdldFVUQ0RheSgpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENXZWVrTnVtYmVyTW9uZGF5KGQsIHApIHtcbiAgcmV0dXJuIHBhZCh1dGNNb25kYXkuY291bnQodXRjWWVhcihkKSwgZCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDAsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENGdWxsWWVhcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENGdWxsWWVhcigpICUgMTAwMDAsIHAsIDQpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENab25lKCkge1xuICByZXR1cm4gXCIrMDAwMFwiO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRMaXRlcmFsUGVyY2VudCgpIHtcbiAgcmV0dXJuIFwiJVwiO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVbml4VGltZXN0YW1wKGQpIHtcbiAgcmV0dXJuICtkO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVbml4VGltZXN0YW1wU2Vjb25kcyhkKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKCtkIC8gMTAwMCk7XG59XG4iLCJleHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVJbnRlcnZhbFxufSBmcm9tIFwiLi9zcmMvaW50ZXJ2YWxcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lTWlsbGlzZWNvbmQsXG4gIG1pbGxpc2Vjb25kcyBhcyB0aW1lTWlsbGlzZWNvbmRzLFxuICBkZWZhdWx0IGFzIHV0Y01pbGxpc2Vjb25kLFxuICBtaWxsaXNlY29uZHMgYXMgdXRjTWlsbGlzZWNvbmRzXG59IGZyb20gXCIuL3NyYy9taWxsaXNlY29uZFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVTZWNvbmQsXG4gIHNlY29uZHMgYXMgdGltZVNlY29uZHMsXG4gIGRlZmF1bHQgYXMgdXRjU2Vjb25kLFxuICBzZWNvbmRzIGFzIHV0Y1NlY29uZHNcbn0gZnJvbSBcIi4vc3JjL3NlY29uZFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVNaW51dGUsXG4gIG1pbnV0ZXMgYXMgdGltZU1pbnV0ZXNcbn0gZnJvbSBcIi4vc3JjL21pbnV0ZVwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVIb3VyLFxuICBob3VycyBhcyB0aW1lSG91cnNcbn0gZnJvbSBcIi4vc3JjL2hvdXJcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lRGF5LFxuICBkYXlzIGFzIHRpbWVEYXlzXG59IGZyb20gXCIuL3NyYy9kYXlcIjtcblxuZXhwb3J0IHtcbiAgc3VuZGF5IGFzIHRpbWVXZWVrLFxuICBzdW5kYXlzIGFzIHRpbWVXZWVrcyxcbiAgc3VuZGF5IGFzIHRpbWVTdW5kYXksXG4gIHN1bmRheXMgYXMgdGltZVN1bmRheXMsXG4gIG1vbmRheSBhcyB0aW1lTW9uZGF5LFxuICBtb25kYXlzIGFzIHRpbWVNb25kYXlzLFxuICB0dWVzZGF5IGFzIHRpbWVUdWVzZGF5LFxuICB0dWVzZGF5cyBhcyB0aW1lVHVlc2RheXMsXG4gIHdlZG5lc2RheSBhcyB0aW1lV2VkbmVzZGF5LFxuICB3ZWRuZXNkYXlzIGFzIHRpbWVXZWRuZXNkYXlzLFxuICB0aHVyc2RheSBhcyB0aW1lVGh1cnNkYXksXG4gIHRodXJzZGF5cyBhcyB0aW1lVGh1cnNkYXlzLFxuICBmcmlkYXkgYXMgdGltZUZyaWRheSxcbiAgZnJpZGF5cyBhcyB0aW1lRnJpZGF5cyxcbiAgc2F0dXJkYXkgYXMgdGltZVNhdHVyZGF5LFxuICBzYXR1cmRheXMgYXMgdGltZVNhdHVyZGF5c1xufSBmcm9tIFwiLi9zcmMvd2Vla1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVNb250aCxcbiAgbW9udGhzIGFzIHRpbWVNb250aHNcbn0gZnJvbSBcIi4vc3JjL21vbnRoXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZVllYXIsXG4gIHllYXJzIGFzIHRpbWVZZWFyc1xufSBmcm9tIFwiLi9zcmMveWVhclwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHV0Y01pbnV0ZSxcbiAgdXRjTWludXRlcyBhcyB1dGNNaW51dGVzXG59IGZyb20gXCIuL3NyYy91dGNNaW51dGVcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB1dGNIb3VyLFxuICB1dGNIb3VycyBhcyB1dGNIb3Vyc1xufSBmcm9tIFwiLi9zcmMvdXRjSG91clwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHV0Y0RheSxcbiAgdXRjRGF5cyBhcyB1dGNEYXlzXG59IGZyb20gXCIuL3NyYy91dGNEYXlcIjtcblxuZXhwb3J0IHtcbiAgdXRjU3VuZGF5IGFzIHV0Y1dlZWssXG4gIHV0Y1N1bmRheXMgYXMgdXRjV2Vla3MsXG4gIHV0Y1N1bmRheSBhcyB1dGNTdW5kYXksXG4gIHV0Y1N1bmRheXMgYXMgdXRjU3VuZGF5cyxcbiAgdXRjTW9uZGF5IGFzIHV0Y01vbmRheSxcbiAgdXRjTW9uZGF5cyBhcyB1dGNNb25kYXlzLFxuICB1dGNUdWVzZGF5IGFzIHV0Y1R1ZXNkYXksXG4gIHV0Y1R1ZXNkYXlzIGFzIHV0Y1R1ZXNkYXlzLFxuICB1dGNXZWRuZXNkYXkgYXMgdXRjV2VkbmVzZGF5LFxuICB1dGNXZWRuZXNkYXlzIGFzIHV0Y1dlZG5lc2RheXMsXG4gIHV0Y1RodXJzZGF5IGFzIHV0Y1RodXJzZGF5LFxuICB1dGNUaHVyc2RheXMgYXMgdXRjVGh1cnNkYXlzLFxuICB1dGNGcmlkYXkgYXMgdXRjRnJpZGF5LFxuICB1dGNGcmlkYXlzIGFzIHV0Y0ZyaWRheXMsXG4gIHV0Y1NhdHVyZGF5IGFzIHV0Y1NhdHVyZGF5LFxuICB1dGNTYXR1cmRheXMgYXMgdXRjU2F0dXJkYXlzXG59IGZyb20gXCIuL3NyYy91dGNXZWVrXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdXRjTW9udGgsXG4gIHV0Y01vbnRocyBhcyB1dGNNb250aHNcbn0gZnJvbSBcIi4vc3JjL3V0Y01vbnRoXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdXRjWWVhcixcbiAgdXRjWWVhcnMgYXMgdXRjWWVhcnNcbn0gZnJvbSBcIi4vc3JjL3V0Y1llYXJcIjtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvbkRheSwgZHVyYXRpb25NaW51dGV9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciBkYXkgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHN0ZXApO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0IC0gKGVuZC5nZXRUaW1lem9uZU9mZnNldCgpIC0gc3RhcnQuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiBkdXJhdGlvbk1pbnV0ZSkgLyBkdXJhdGlvbkRheTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpIC0gMTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkYXk7XG5leHBvcnQgdmFyIGRheXMgPSBkYXkucmFuZ2U7XG4iLCJleHBvcnQgdmFyIGR1cmF0aW9uU2Vjb25kID0gMWUzO1xuZXhwb3J0IHZhciBkdXJhdGlvbk1pbnV0ZSA9IDZlNDtcbmV4cG9ydCB2YXIgZHVyYXRpb25Ib3VyID0gMzZlNTtcbmV4cG9ydCB2YXIgZHVyYXRpb25EYXkgPSA4NjRlNTtcbmV4cG9ydCB2YXIgZHVyYXRpb25XZWVrID0gNjA0OGU1O1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uSG91ciwgZHVyYXRpb25NaW51dGV9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciBob3VyID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICB2YXIgb2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogZHVyYXRpb25NaW51dGUgJSBkdXJhdGlvbkhvdXI7XG4gIGlmIChvZmZzZXQgPCAwKSBvZmZzZXQgKz0gZHVyYXRpb25Ib3VyO1xuICBkYXRlLnNldFRpbWUoTWF0aC5mbG9vcigoK2RhdGUgLSBvZmZzZXQpIC8gZHVyYXRpb25Ib3VyKSAqIGR1cmF0aW9uSG91ciArIG9mZnNldCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBkdXJhdGlvbkhvdXIpO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uSG91cjtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBob3VyO1xuZXhwb3J0IHZhciBob3VycyA9IGhvdXIucmFuZ2U7XG4iLCJ2YXIgdDAgPSBuZXcgRGF0ZSxcbiAgICB0MSA9IG5ldyBEYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdJbnRlcnZhbChmbG9vcmksIG9mZnNldGksIGNvdW50LCBmaWVsZCkge1xuXG4gIGZ1bmN0aW9uIGludGVydmFsKGRhdGUpIHtcbiAgICByZXR1cm4gZmxvb3JpKGRhdGUgPSBuZXcgRGF0ZSgrZGF0ZSkpLCBkYXRlO1xuICB9XG5cbiAgaW50ZXJ2YWwuZmxvb3IgPSBpbnRlcnZhbDtcblxuICBpbnRlcnZhbC5jZWlsID0gZnVuY3Rpb24oZGF0ZSkge1xuICAgIHJldHVybiBmbG9vcmkoZGF0ZSA9IG5ldyBEYXRlKGRhdGUgLSAxKSksIG9mZnNldGkoZGF0ZSwgMSksIGZsb29yaShkYXRlKSwgZGF0ZTtcbiAgfTtcblxuICBpbnRlcnZhbC5yb3VuZCA9IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICB2YXIgZDAgPSBpbnRlcnZhbChkYXRlKSxcbiAgICAgICAgZDEgPSBpbnRlcnZhbC5jZWlsKGRhdGUpO1xuICAgIHJldHVybiBkYXRlIC0gZDAgPCBkMSAtIGRhdGUgPyBkMCA6IGQxO1xuICB9O1xuXG4gIGludGVydmFsLm9mZnNldCA9IGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICByZXR1cm4gb2Zmc2V0aShkYXRlID0gbmV3IERhdGUoK2RhdGUpLCBzdGVwID09IG51bGwgPyAxIDogTWF0aC5mbG9vcihzdGVwKSksIGRhdGU7XG4gIH07XG5cbiAgaW50ZXJ2YWwucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIHZhciByYW5nZSA9IFtdLCBwcmV2aW91cztcbiAgICBzdGFydCA9IGludGVydmFsLmNlaWwoc3RhcnQpO1xuICAgIHN0ZXAgPSBzdGVwID09IG51bGwgPyAxIDogTWF0aC5mbG9vcihzdGVwKTtcbiAgICBpZiAoIShzdGFydCA8IHN0b3ApIHx8ICEoc3RlcCA+IDApKSByZXR1cm4gcmFuZ2U7IC8vIGFsc28gaGFuZGxlcyBJbnZhbGlkIERhdGVcbiAgICBkbyByYW5nZS5wdXNoKHByZXZpb3VzID0gbmV3IERhdGUoK3N0YXJ0KSksIG9mZnNldGkoc3RhcnQsIHN0ZXApLCBmbG9vcmkoc3RhcnQpO1xuICAgIHdoaWxlIChwcmV2aW91cyA8IHN0YXJ0ICYmIHN0YXJ0IDwgc3RvcCk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIGludGVydmFsLmZpbHRlciA9IGZ1bmN0aW9uKHRlc3QpIHtcbiAgICByZXR1cm4gbmV3SW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgaWYgKGRhdGUgPj0gZGF0ZSkgd2hpbGUgKGZsb29yaShkYXRlKSwgIXRlc3QoZGF0ZSkpIGRhdGUuc2V0VGltZShkYXRlIC0gMSk7XG4gICAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgICAgaWYgKGRhdGUgPj0gZGF0ZSkge1xuICAgICAgICBpZiAoc3RlcCA8IDApIHdoaWxlICgrK3N0ZXAgPD0gMCkge1xuICAgICAgICAgIHdoaWxlIChvZmZzZXRpKGRhdGUsIC0xKSwgIXRlc3QoZGF0ZSkpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbiAgICAgICAgfSBlbHNlIHdoaWxlICgtLXN0ZXAgPj0gMCkge1xuICAgICAgICAgIHdoaWxlIChvZmZzZXRpKGRhdGUsICsxKSwgIXRlc3QoZGF0ZSkpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGlmIChjb3VudCkge1xuICAgIGludGVydmFsLmNvdW50ID0gZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgICAgdDAuc2V0VGltZSgrc3RhcnQpLCB0MS5zZXRUaW1lKCtlbmQpO1xuICAgICAgZmxvb3JpKHQwKSwgZmxvb3JpKHQxKTtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGNvdW50KHQwLCB0MSkpO1xuICAgIH07XG5cbiAgICBpbnRlcnZhbC5ldmVyeSA9IGZ1bmN0aW9uKHN0ZXApIHtcbiAgICAgIHN0ZXAgPSBNYXRoLmZsb29yKHN0ZXApO1xuICAgICAgcmV0dXJuICFpc0Zpbml0ZShzdGVwKSB8fCAhKHN0ZXAgPiAwKSA/IG51bGxcbiAgICAgICAgICA6ICEoc3RlcCA+IDEpID8gaW50ZXJ2YWxcbiAgICAgICAgICA6IGludGVydmFsLmZpbHRlcihmaWVsZFxuICAgICAgICAgICAgICA/IGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZpZWxkKGQpICUgc3RlcCA9PT0gMDsgfVxuICAgICAgICAgICAgICA6IGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGludGVydmFsLmNvdW50KDAsIGQpICUgc3RlcCA9PT0gMDsgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBpbnRlcnZhbDtcbn1cbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuXG52YXIgbWlsbGlzZWNvbmQgPSBpbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgLy8gbm9vcFxufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGVuZCAtIHN0YXJ0O1xufSk7XG5cbi8vIEFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhpcyBzaW1wbGUgY2FzZS5cbm1pbGxpc2Vjb25kLmV2ZXJ5ID0gZnVuY3Rpb24oaykge1xuICBrID0gTWF0aC5mbG9vcihrKTtcbiAgaWYgKCFpc0Zpbml0ZShrKSB8fCAhKGsgPiAwKSkgcmV0dXJuIG51bGw7XG4gIGlmICghKGsgPiAxKSkgcmV0dXJuIG1pbGxpc2Vjb25kO1xuICByZXR1cm4gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VGltZShNYXRoLmZsb29yKGRhdGUgLyBrKSAqIGspO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGspO1xuICB9LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBrO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1pbGxpc2Vjb25kO1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZC5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvbk1pbnV0ZX0gZnJvbSBcIi4vZHVyYXRpb25cIjtcblxudmFyIG1pbnV0ZSA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRUaW1lKE1hdGguZmxvb3IoZGF0ZSAvIGR1cmF0aW9uTWludXRlKSAqIGR1cmF0aW9uTWludXRlKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGR1cmF0aW9uTWludXRlKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbk1pbnV0ZTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0TWludXRlcygpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1pbnV0ZTtcbmV4cG9ydCB2YXIgbWludXRlcyA9IG1pbnV0ZS5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuXG52YXIgbW9udGggPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0RGF0ZSgxKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGVuZC5nZXRNb250aCgpIC0gc3RhcnQuZ2V0TW9udGgoKSArIChlbmQuZ2V0RnVsbFllYXIoKSAtIHN0YXJ0LmdldEZ1bGxZZWFyKCkpICogMTI7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldE1vbnRoKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9udGg7XG5leHBvcnQgdmFyIG1vbnRocyA9IG1vbnRoLnJhbmdlO1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uU2Vjb25kfSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG52YXIgc2Vjb25kID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFRpbWUoTWF0aC5mbG9vcihkYXRlIC8gZHVyYXRpb25TZWNvbmQpICogZHVyYXRpb25TZWNvbmQpO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogZHVyYXRpb25TZWNvbmQpO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uU2Vjb25kO1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRVVENTZWNvbmRzKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2Vjb25kO1xuZXhwb3J0IHZhciBzZWNvbmRzID0gc2Vjb25kLnJhbmdlO1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uRGF5fSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG52YXIgdXRjRGF5ID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbkRheTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDRGF0ZSgpIC0gMTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB1dGNEYXk7XG5leHBvcnQgdmFyIHV0Y0RheXMgPSB1dGNEYXkucmFuZ2U7XG4iLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25Ib3VyfSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG52YXIgdXRjSG91ciA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRVVENNaW51dGVzKDAsIDAsIDApO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogZHVyYXRpb25Ib3VyKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbkhvdXI7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ0hvdXJzKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXRjSG91cjtcbmV4cG9ydCB2YXIgdXRjSG91cnMgPSB1dGNIb3VyLnJhbmdlO1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uTWludXRlfSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG52YXIgdXRjTWludXRlID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFVUQ1NlY29uZHMoMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBkdXJhdGlvbk1pbnV0ZSk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25NaW51dGU7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB1dGNNaW51dGU7XG5leHBvcnQgdmFyIHV0Y01pbnV0ZXMgPSB1dGNNaW51dGUucmFuZ2U7XG4iLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcblxudmFyIHV0Y01vbnRoID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFVUQ0RhdGUoMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VVRDTW9udGgoZGF0ZS5nZXRVVENNb250aCgpICsgc3RlcCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiBlbmQuZ2V0VVRDTW9udGgoKSAtIHN0YXJ0LmdldFVUQ01vbnRoKCkgKyAoZW5kLmdldFVUQ0Z1bGxZZWFyKCkgLSBzdGFydC5nZXRVVENGdWxsWWVhcigpKSAqIDEyO1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRVVENNb250aCgpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHV0Y01vbnRoO1xuZXhwb3J0IHZhciB1dGNNb250aHMgPSB1dGNNb250aC5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvbldlZWt9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbmZ1bmN0aW9uIHV0Y1dlZWtkYXkoaSkge1xuICByZXR1cm4gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIChkYXRlLmdldFVUQ0RheSgpICsgNyAtIGkpICUgNyk7XG4gICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIHN0ZXAgKiA3KTtcbiAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25XZWVrO1xuICB9KTtcbn1cblxuZXhwb3J0IHZhciB1dGNTdW5kYXkgPSB1dGNXZWVrZGF5KDApO1xuZXhwb3J0IHZhciB1dGNNb25kYXkgPSB1dGNXZWVrZGF5KDEpO1xuZXhwb3J0IHZhciB1dGNUdWVzZGF5ID0gdXRjV2Vla2RheSgyKTtcbmV4cG9ydCB2YXIgdXRjV2VkbmVzZGF5ID0gdXRjV2Vla2RheSgzKTtcbmV4cG9ydCB2YXIgdXRjVGh1cnNkYXkgPSB1dGNXZWVrZGF5KDQpO1xuZXhwb3J0IHZhciB1dGNGcmlkYXkgPSB1dGNXZWVrZGF5KDUpO1xuZXhwb3J0IHZhciB1dGNTYXR1cmRheSA9IHV0Y1dlZWtkYXkoNik7XG5cbmV4cG9ydCB2YXIgdXRjU3VuZGF5cyA9IHV0Y1N1bmRheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjTW9uZGF5cyA9IHV0Y01vbmRheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjVHVlc2RheXMgPSB1dGNUdWVzZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB1dGNXZWRuZXNkYXlzID0gdXRjV2VkbmVzZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB1dGNUaHVyc2RheXMgPSB1dGNUaHVyc2RheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjRnJpZGF5cyA9IHV0Y0ZyaWRheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjU2F0dXJkYXlzID0gdXRjU2F0dXJkYXkucmFuZ2U7XG4iLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcblxudmFyIHV0Y1llYXIgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgc3RlcCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiBlbmQuZ2V0VVRDRnVsbFllYXIoKSAtIHN0YXJ0LmdldFVUQ0Z1bGxZZWFyKCk7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG59KTtcblxuLy8gQW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIGZvciB0aGlzIHNpbXBsZSBjYXNlLlxudXRjWWVhci5ldmVyeSA9IGZ1bmN0aW9uKGspIHtcbiAgcmV0dXJuICFpc0Zpbml0ZShrID0gTWF0aC5mbG9vcihrKSkgfHwgIShrID4gMCkgPyBudWxsIDogaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoTWF0aC5mbG9vcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgLyBrKSAqIGspO1xuICAgIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgc3RlcCAqIGspO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0Y1llYXI7XG5leHBvcnQgdmFyIHV0Y1llYXJzID0gdXRjWWVhci5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvbk1pbnV0ZSwgZHVyYXRpb25XZWVrfSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG5mdW5jdGlvbiB3ZWVrZGF5KGkpIHtcbiAgcmV0dXJuIGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAoZGF0ZS5nZXREYXkoKSArIDcgLSBpKSAlIDcpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBzdGVwICogNyk7XG4gIH0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gKGVuZCAtIHN0YXJ0IC0gKGVuZC5nZXRUaW1lem9uZU9mZnNldCgpIC0gc3RhcnQuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiBkdXJhdGlvbk1pbnV0ZSkgLyBkdXJhdGlvbldlZWs7XG4gIH0pO1xufVxuXG5leHBvcnQgdmFyIHN1bmRheSA9IHdlZWtkYXkoMCk7XG5leHBvcnQgdmFyIG1vbmRheSA9IHdlZWtkYXkoMSk7XG5leHBvcnQgdmFyIHR1ZXNkYXkgPSB3ZWVrZGF5KDIpO1xuZXhwb3J0IHZhciB3ZWRuZXNkYXkgPSB3ZWVrZGF5KDMpO1xuZXhwb3J0IHZhciB0aHVyc2RheSA9IHdlZWtkYXkoNCk7XG5leHBvcnQgdmFyIGZyaWRheSA9IHdlZWtkYXkoNSk7XG5leHBvcnQgdmFyIHNhdHVyZGF5ID0gd2Vla2RheSg2KTtcblxuZXhwb3J0IHZhciBzdW5kYXlzID0gc3VuZGF5LnJhbmdlO1xuZXhwb3J0IHZhciBtb25kYXlzID0gbW9uZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB0dWVzZGF5cyA9IHR1ZXNkYXkucmFuZ2U7XG5leHBvcnQgdmFyIHdlZG5lc2RheXMgPSB3ZWRuZXNkYXkucmFuZ2U7XG5leHBvcnQgdmFyIHRodXJzZGF5cyA9IHRodXJzZGF5LnJhbmdlO1xuZXhwb3J0IHZhciBmcmlkYXlzID0gZnJpZGF5LnJhbmdlO1xuZXhwb3J0IHZhciBzYXR1cmRheXMgPSBzYXR1cmRheS5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuXG52YXIgeWVhciA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGVuZC5nZXRGdWxsWWVhcigpIC0gc3RhcnQuZ2V0RnVsbFllYXIoKTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbn0pO1xuXG4vLyBBbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gZm9yIHRoaXMgc2ltcGxlIGNhc2UuXG55ZWFyLmV2ZXJ5ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gIWlzRmluaXRlKGsgPSBNYXRoLmZsb29yKGspKSB8fCAhKGsgPiAwKSA/IG51bGwgOiBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihNYXRoLmZsb29yKGRhdGUuZ2V0RnVsbFllYXIoKSAvIGspICogayk7XG4gICAgZGF0ZS5zZXRNb250aCgwLCAxKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyBzdGVwICogayk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeWVhcjtcbmV4cG9ydCB2YXIgeWVhcnMgPSB5ZWFyLnJhbmdlO1xuIiwiZXhwb3J0IHtcbiAgbm93LFxuICB0aW1lcixcbiAgdGltZXJGbHVzaFxufSBmcm9tIFwiLi9zcmMvdGltZXJcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lb3V0XG59IGZyb20gXCIuL3NyYy90aW1lb3V0XCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgaW50ZXJ2YWxcbn0gZnJvbSBcIi4vc3JjL2ludGVydmFsXCI7XG4iLCJpbXBvcnQge1RpbWVyLCBub3d9IGZyb20gXCIuL3RpbWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lciwgdG90YWwgPSBkZWxheTtcbiAgaWYgKGRlbGF5ID09IG51bGwpIHJldHVybiB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSwgdDtcbiAgZGVsYXkgPSArZGVsYXksIHRpbWUgPSB0aW1lID09IG51bGwgPyBub3coKSA6ICt0aW1lO1xuICB0LnJlc3RhcnQoZnVuY3Rpb24gdGljayhlbGFwc2VkKSB7XG4gICAgZWxhcHNlZCArPSB0b3RhbDtcbiAgICB0LnJlc3RhcnQodGljaywgdG90YWwgKz0gZGVsYXksIHRpbWUpO1xuICAgIGNhbGxiYWNrKGVsYXBzZWQpO1xuICB9LCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuIiwiaW1wb3J0IHtUaW1lcn0gZnJvbSBcIi4vdGltZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICBkZWxheSA9IGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5O1xuICB0LnJlc3RhcnQoZnVuY3Rpb24oZWxhcHNlZCkge1xuICAgIHQuc3RvcCgpO1xuICAgIGNhbGxiYWNrKGVsYXBzZWQgKyBkZWxheSk7XG4gIH0sIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG4iLCJ2YXIgZnJhbWUgPSAwLCAvLyBpcyBhbiBhbmltYXRpb24gZnJhbWUgcGVuZGluZz9cbiAgICB0aW1lb3V0ID0gMCwgLy8gaXMgYSB0aW1lb3V0IHBlbmRpbmc/XG4gICAgaW50ZXJ2YWwgPSAwLCAvLyBhcmUgYW55IHRpbWVycyBhY3RpdmU/XG4gICAgcG9rZURlbGF5ID0gMTAwMCwgLy8gaG93IGZyZXF1ZW50bHkgd2UgY2hlY2sgZm9yIGNsb2NrIHNrZXdcbiAgICB0YXNrSGVhZCxcbiAgICB0YXNrVGFpbCxcbiAgICBjbG9ja0xhc3QgPSAwLFxuICAgIGNsb2NrTm93ID0gMCxcbiAgICBjbG9ja1NrZXcgPSAwLFxuICAgIGNsb2NrID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSBcIm9iamVjdFwiICYmIHBlcmZvcm1hbmNlLm5vdyA/IHBlcmZvcm1hbmNlIDogRGF0ZSxcbiAgICBzZXRGcmFtZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpIDogZnVuY3Rpb24oZikgeyBzZXRUaW1lb3V0KGYsIDE3KTsgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIGNsb2NrTm93IHx8IChzZXRGcmFtZShjbGVhck5vdyksIGNsb2NrTm93ID0gY2xvY2subm93KCkgKyBjbG9ja1NrZXcpO1xufVxuXG5mdW5jdGlvbiBjbGVhck5vdygpIHtcbiAgY2xvY2tOb3cgPSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGltZXIoKSB7XG4gIHRoaXMuX2NhbGwgPVxuICB0aGlzLl90aW1lID1cbiAgdGhpcy5fbmV4dCA9IG51bGw7XG59XG5cblRpbWVyLnByb3RvdHlwZSA9IHRpbWVyLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRpbWVyLFxuICByZXN0YXJ0OiBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICB0aW1lID0gKHRpbWUgPT0gbnVsbCA/IG5vdygpIDogK3RpbWUpICsgKGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5KTtcbiAgICBpZiAoIXRoaXMuX25leHQgJiYgdGFza1RhaWwgIT09IHRoaXMpIHtcbiAgICAgIGlmICh0YXNrVGFpbCkgdGFza1RhaWwuX25leHQgPSB0aGlzO1xuICAgICAgZWxzZSB0YXNrSGVhZCA9IHRoaXM7XG4gICAgICB0YXNrVGFpbCA9IHRoaXM7XG4gICAgfVxuICAgIHRoaXMuX2NhbGwgPSBjYWxsYmFjaztcbiAgICB0aGlzLl90aW1lID0gdGltZTtcbiAgICBzbGVlcCgpO1xuICB9LFxuICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY2FsbCkge1xuICAgICAgdGhpcy5fY2FsbCA9IG51bGw7XG4gICAgICB0aGlzLl90aW1lID0gSW5maW5pdHk7XG4gICAgICBzbGVlcCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lcjtcbiAgdC5yZXN0YXJ0KGNhbGxiYWNrLCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZXJGbHVzaCgpIHtcbiAgbm93KCk7IC8vIEdldCB0aGUgY3VycmVudCB0aW1lLCBpZiBub3QgYWxyZWFkeSBzZXQuXG4gICsrZnJhbWU7IC8vIFByZXRlbmQgd2XigJl2ZSBzZXQgYW4gYWxhcm0sIGlmIHdlIGhhdmVu4oCZdCBhbHJlYWR5LlxuICB2YXIgdCA9IHRhc2tIZWFkLCBlO1xuICB3aGlsZSAodCkge1xuICAgIGlmICgoZSA9IGNsb2NrTm93IC0gdC5fdGltZSkgPj0gMCkgdC5fY2FsbC5jYWxsKG51bGwsIGUpO1xuICAgIHQgPSB0Ll9uZXh0O1xuICB9XG4gIC0tZnJhbWU7XG59XG5cbmZ1bmN0aW9uIHdha2UoKSB7XG4gIGNsb2NrTm93ID0gKGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpKSArIGNsb2NrU2tldztcbiAgZnJhbWUgPSB0aW1lb3V0ID0gMDtcbiAgdHJ5IHtcbiAgICB0aW1lckZsdXNoKCk7XG4gIH0gZmluYWxseSB7XG4gICAgZnJhbWUgPSAwO1xuICAgIG5hcCgpO1xuICAgIGNsb2NrTm93ID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb2tlKCkge1xuICB2YXIgbm93ID0gY2xvY2subm93KCksIGRlbGF5ID0gbm93IC0gY2xvY2tMYXN0O1xuICBpZiAoZGVsYXkgPiBwb2tlRGVsYXkpIGNsb2NrU2tldyAtPSBkZWxheSwgY2xvY2tMYXN0ID0gbm93O1xufVxuXG5mdW5jdGlvbiBuYXAoKSB7XG4gIHZhciB0MCwgdDEgPSB0YXNrSGVhZCwgdDIsIHRpbWUgPSBJbmZpbml0eTtcbiAgd2hpbGUgKHQxKSB7XG4gICAgaWYgKHQxLl9jYWxsKSB7XG4gICAgICBpZiAodGltZSA+IHQxLl90aW1lKSB0aW1lID0gdDEuX3RpbWU7XG4gICAgICB0MCA9IHQxLCB0MSA9IHQxLl9uZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0MiA9IHQxLl9uZXh0LCB0MS5fbmV4dCA9IG51bGw7XG4gICAgICB0MSA9IHQwID8gdDAuX25leHQgPSB0MiA6IHRhc2tIZWFkID0gdDI7XG4gICAgfVxuICB9XG4gIHRhc2tUYWlsID0gdDA7XG4gIHNsZWVwKHRpbWUpO1xufVxuXG5mdW5jdGlvbiBzbGVlcCh0aW1lKSB7XG4gIGlmIChmcmFtZSkgcmV0dXJuOyAvLyBTb29uZXN0IGFsYXJtIGFscmVhZHkgc2V0LCBvciB3aWxsIGJlLlxuICBpZiAodGltZW91dCkgdGltZW91dCA9IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgdmFyIGRlbGF5ID0gdGltZSAtIGNsb2NrTm93OyAvLyBTdHJpY3RseSBsZXNzIHRoYW4gaWYgd2UgcmVjb21wdXRlZCBjbG9ja05vdy5cbiAgaWYgKGRlbGF5ID4gMjQpIHtcbiAgICBpZiAodGltZSA8IEluZmluaXR5KSB0aW1lb3V0ID0gc2V0VGltZW91dCh3YWtlLCB0aW1lIC0gY2xvY2subm93KCkgLSBjbG9ja1NrZXcpO1xuICAgIGlmIChpbnRlcnZhbCkgaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWludGVydmFsKSBjbG9ja0xhc3QgPSBjbG9jay5ub3coKSwgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChwb2tlLCBwb2tlRGVsYXkpO1xuICAgIGZyYW1lID0gMSwgc2V0RnJhbWUod2FrZSk7XG4gIH1cbn1cbiIsImltcG9ydCBcIi4vc3JjL3NlbGVjdGlvbi9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRyYW5zaXRpb259IGZyb20gXCIuL3NyYy90cmFuc2l0aW9uL2luZGV4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYWN0aXZlfSBmcm9tIFwiLi9zcmMvYWN0aXZlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJydXB0fSBmcm9tIFwiLi9zcmMvaW50ZXJydXB0XCI7XG4iLCJpbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL3RyYW5zaXRpb24vaW5kZXhcIjtcbmltcG9ydCB7U0NIRURVTEVEfSBmcm9tIFwiLi90cmFuc2l0aW9uL3NjaGVkdWxlXCI7XG5cbnZhciByb290ID0gW251bGxdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCBuYW1lKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbixcbiAgICAgIHNjaGVkdWxlLFxuICAgICAgaTtcblxuICBpZiAoc2NoZWR1bGVzKSB7XG4gICAgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcbiAgICBmb3IgKGkgaW4gc2NoZWR1bGVzKSB7XG4gICAgICBpZiAoKHNjaGVkdWxlID0gc2NoZWR1bGVzW2ldKS5zdGF0ZSA+IFNDSEVEVUxFRCAmJiBzY2hlZHVsZS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNpdGlvbihbW25vZGVdXSwgcm9vdCwgbmFtZSwgK2kpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHtTVEFSVElORywgRU5ESU5HLCBFTkRFRH0gZnJvbSBcIi4vdHJhbnNpdGlvbi9zY2hlZHVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCBuYW1lKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbixcbiAgICAgIHNjaGVkdWxlLFxuICAgICAgYWN0aXZlLFxuICAgICAgZW1wdHkgPSB0cnVlLFxuICAgICAgaTtcblxuICBpZiAoIXNjaGVkdWxlcykgcmV0dXJuO1xuXG4gIG5hbWUgPSBuYW1lID09IG51bGwgPyBudWxsIDogbmFtZSArIFwiXCI7XG5cbiAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgIGlmICgoc2NoZWR1bGUgPSBzY2hlZHVsZXNbaV0pLm5hbWUgIT09IG5hbWUpIHsgZW1wdHkgPSBmYWxzZTsgY29udGludWU7IH1cbiAgICBhY3RpdmUgPSBzY2hlZHVsZS5zdGF0ZSA+IFNUQVJUSU5HICYmIHNjaGVkdWxlLnN0YXRlIDwgRU5ESU5HO1xuICAgIHNjaGVkdWxlLnN0YXRlID0gRU5ERUQ7XG4gICAgc2NoZWR1bGUudGltZXIuc3RvcCgpO1xuICAgIGlmIChhY3RpdmUpIHNjaGVkdWxlLm9uLmNhbGwoXCJpbnRlcnJ1cHRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2NoZWR1bGUuaW5kZXgsIHNjaGVkdWxlLmdyb3VwKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICB9XG5cbiAgaWYgKGVtcHR5KSBkZWxldGUgbm9kZS5fX3RyYW5zaXRpb247XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnRlcnJ1cHQgZnJvbSBcIi4vaW50ZXJydXB0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvblwiO1xuXG5zZWxlY3Rpb24ucHJvdG90eXBlLmludGVycnVwdCA9IHNlbGVjdGlvbl9pbnRlcnJ1cHQ7XG5zZWxlY3Rpb24ucHJvdG90eXBlLnRyYW5zaXRpb24gPSBzZWxlY3Rpb25fdHJhbnNpdGlvbjtcbiIsImltcG9ydCBpbnRlcnJ1cHQgZnJvbSBcIi4uL2ludGVycnVwdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgaW50ZXJydXB0KHRoaXMsIG5hbWUpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbiwgbmV3SWR9IGZyb20gXCIuLi90cmFuc2l0aW9uL2luZGV4XCI7XG5pbXBvcnQgc2NoZWR1bGUgZnJvbSBcIi4uL3RyYW5zaXRpb24vc2NoZWR1bGVcIjtcbmltcG9ydCB7ZWFzZUN1YmljSW5PdXR9IGZyb20gXCJkMy1lYXNlXCI7XG5pbXBvcnQge25vd30gZnJvbSBcImQzLXRpbWVyXCI7XG5cbnZhciBkZWZhdWx0VGltaW5nID0ge1xuICB0aW1lOiBudWxsLCAvLyBTZXQgb24gdXNlLlxuICBkZWxheTogMCxcbiAgZHVyYXRpb246IDI1MCxcbiAgZWFzZTogZWFzZUN1YmljSW5PdXRcbn07XG5cbmZ1bmN0aW9uIGluaGVyaXQobm9kZSwgaWQpIHtcbiAgdmFyIHRpbWluZztcbiAgd2hpbGUgKCEodGltaW5nID0gbm9kZS5fX3RyYW5zaXRpb24pIHx8ICEodGltaW5nID0gdGltaW5nW2lkXSkpIHtcbiAgICBpZiAoIShub2RlID0gbm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRUaW1pbmcudGltZSA9IG5vdygpLCBkZWZhdWx0VGltaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGltaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBpZCxcbiAgICAgIHRpbWluZztcblxuICBpZiAobmFtZSBpbnN0YW5jZW9mIFRyYW5zaXRpb24pIHtcbiAgICBpZCA9IG5hbWUuX2lkLCBuYW1lID0gbmFtZS5fbmFtZTtcbiAgfSBlbHNlIHtcbiAgICBpZCA9IG5ld0lkKCksICh0aW1pbmcgPSBkZWZhdWx0VGltaW5nKS50aW1lID0gbm93KCksIG5hbWUgPSBuYW1lID09IG51bGwgPyBudWxsIDogbmFtZSArIFwiXCI7XG4gIH1cblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzY2hlZHVsZShub2RlLCBuYW1lLCBpZCwgaSwgZ3JvdXAsIHRpbWluZyB8fCBpbmhlcml0KG5vZGUsIGlkKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKGdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwiaW1wb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybVN2ZyBhcyBpbnRlcnBvbGF0ZVRyYW5zZm9ybX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge25hbWVzcGFjZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2VlblwiO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gXCIuL2ludGVycG9sYXRlXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgdmFsdWUwMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICByZXR1cm4gdmFsdWUwID09PSB2YWx1ZTEgPyBudWxsXG4gICAgICAgIDogdmFsdWUwID09PSB2YWx1ZTAwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUodmFsdWUwMCA9IHZhbHVlMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHZhbHVlMDAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUwID0gdGhpcy5nZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIHJldHVybiB2YWx1ZTAgPT09IHZhbHVlMSA/IG51bGxcbiAgICAgICAgOiB2YWx1ZTAgPT09IHZhbHVlMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZSh2YWx1ZTAwID0gdmFsdWUwLCB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb24obmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciB2YWx1ZTAwLFxuICAgICAgdmFsdWUxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTAsIHZhbHVlMSA9IHZhbHVlKHRoaXMpO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgcmV0dXJuIHZvaWQgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgdmFsdWUwID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgcmV0dXJuIHZhbHVlMCA9PT0gdmFsdWUxID8gbnVsbFxuICAgICAgICA6IHZhbHVlMCA9PT0gdmFsdWUwMCAmJiB2YWx1ZTEgPT09IHZhbHVlMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZSh2YWx1ZTAwID0gdmFsdWUwLCB2YWx1ZTEwID0gdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uTlMoZnVsbG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgdmFsdWUwMCxcbiAgICAgIHZhbHVlMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUwLCB2YWx1ZTEgPSB2YWx1ZSh0aGlzKTtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHJldHVybiB2b2lkIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICB2YWx1ZTAgPSB0aGlzLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgcmV0dXJuIHZhbHVlMCA9PT0gdmFsdWUxID8gbnVsbFxuICAgICAgICA6IHZhbHVlMCA9PT0gdmFsdWUwMCAmJiB2YWx1ZTEgPT09IHZhbHVlMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZSh2YWx1ZTAwID0gdmFsdWUwLCB2YWx1ZTEwID0gdmFsdWUxKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpLCBpID0gZnVsbG5hbWUgPT09IFwidHJhbnNmb3JtXCIgPyBpbnRlcnBvbGF0ZVRyYW5zZm9ybSA6IGludGVycG9sYXRlO1xuICByZXR1cm4gdGhpcy5hdHRyVHdlZW4obmFtZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckZ1bmN0aW9uTlMgOiBhdHRyRnVuY3Rpb24pKGZ1bGxuYW1lLCBpLCB0d2VlblZhbHVlKHRoaXMsIFwiYXR0ci5cIiArIG5hbWUsIHZhbHVlKSlcbiAgICAgIDogdmFsdWUgPT0gbnVsbCA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJSZW1vdmVOUyA6IGF0dHJSZW1vdmUpKGZ1bGxuYW1lKVxuICAgICAgOiAoZnVsbG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudCkoZnVsbG5hbWUsIGksIHZhbHVlICsgXCJcIikpO1xufVxuIiwiaW1wb3J0IHtuYW1lc3BhY2V9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxuZnVuY3Rpb24gYXR0clR3ZWVuTlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBub2RlID0gdGhpcywgaSA9IHZhbHVlLmFwcGx5KG5vZGUsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGkgJiYgZnVuY3Rpb24odCkge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIGkodCkpO1xuICAgIH07XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZnVuY3Rpb24gYXR0clR3ZWVuKG5hbWUsIHZhbHVlKSB7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBub2RlID0gdGhpcywgaSA9IHZhbHVlLmFwcGx5KG5vZGUsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGkgJiYgZnVuY3Rpb24odCkge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgaSh0KSk7XG4gICAgfTtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIga2V5ID0gXCJhdHRyLlwiICsgbmFtZTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgKGZ1bGxuYW1lLmxvY2FsID8gYXR0clR3ZWVuTlMgOiBhdHRyVHdlZW4pKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwiaW1wb3J0IHtnZXQsIGluaXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oaWQsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpbml0KHRoaXMsIGlkKS5kZWxheSA9ICt2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkZWxheUNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPSArdmFsdWUsIGZ1bmN0aW9uKCkge1xuICAgIGluaXQodGhpcywgaWQpLmRlbGF5ID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGRlbGF5RnVuY3Rpb25cbiAgICAgICAgICA6IGRlbGF5Q29uc3RhbnQpKGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmRlbGF5O1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZnVuY3Rpb24gZHVyYXRpb25GdW5jdGlvbihpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZHVyYXRpb24gPSArdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZHVyYXRpb25Db25zdGFudChpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID0gK3ZhbHVlLCBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmR1cmF0aW9uID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGR1cmF0aW9uRnVuY3Rpb25cbiAgICAgICAgICA6IGR1cmF0aW9uQ29uc3RhbnQpKGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmR1cmF0aW9uO1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZnVuY3Rpb24gZWFzZUNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZWFzZSA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goZWFzZUNvbnN0YW50KGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmVhc2U7XG59XG4iLCJpbXBvcnQge21hdGNoZXJ9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJmdW5jdGlvblwiKSBtYXRjaCA9IG1hdGNoZXIobWF0Y2gpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBbXSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiBtYXRjaC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkge1xuICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMsIHRoaXMuX25hbWUsIHRoaXMuX2lkKTtcbn1cbiIsImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9hdHRyIGZyb20gXCIuL2F0dHJcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2F0dHJUd2VlbiBmcm9tIFwiLi9hdHRyVHdlZW5cIjtcbmltcG9ydCB0cmFuc2l0aW9uX2RlbGF5IGZyb20gXCIuL2RlbGF5XCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9kdXJhdGlvbiBmcm9tIFwiLi9kdXJhdGlvblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fZWFzZSBmcm9tIFwiLi9lYXNlXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9maWx0ZXIgZnJvbSBcIi4vZmlsdGVyXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9tZXJnZSBmcm9tIFwiLi9tZXJnZVwiO1xuaW1wb3J0IHRyYW5zaXRpb25fb24gZnJvbSBcIi4vb25cIjtcbmltcG9ydCB0cmFuc2l0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmVcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdEFsbCBmcm9tIFwiLi9zZWxlY3RBbGxcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdGlvbiBmcm9tIFwiLi9zZWxlY3Rpb25cIjtcbmltcG9ydCB0cmFuc2l0aW9uX3N0eWxlIGZyb20gXCIuL3N0eWxlXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zdHlsZVR3ZWVuIGZyb20gXCIuL3N0eWxlVHdlZW5cIjtcbmltcG9ydCB0cmFuc2l0aW9uX3RleHQgZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IHRyYW5zaXRpb25fdHJhbnNpdGlvbiBmcm9tIFwiLi90cmFuc2l0aW9uXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90d2VlbiBmcm9tIFwiLi90d2VlblwiO1xuXG52YXIgaWQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNpdGlvbihncm91cHMsIHBhcmVudHMsIG5hbWUsIGlkKSB7XG4gIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgdGhpcy5fcGFyZW50cyA9IHBhcmVudHM7XG4gIHRoaXMuX25hbWUgPSBuYW1lO1xuICB0aGlzLl9pZCA9IGlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2l0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHNlbGVjdGlvbigpLnRyYW5zaXRpb24obmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdJZCgpIHtcbiAgcmV0dXJuICsraWQ7XG59XG5cbnZhciBzZWxlY3Rpb25fcHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUgPSB0cmFuc2l0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRyYW5zaXRpb24sXG4gIHNlbGVjdDogdHJhbnNpdGlvbl9zZWxlY3QsXG4gIHNlbGVjdEFsbDogdHJhbnNpdGlvbl9zZWxlY3RBbGwsXG4gIGZpbHRlcjogdHJhbnNpdGlvbl9maWx0ZXIsXG4gIG1lcmdlOiB0cmFuc2l0aW9uX21lcmdlLFxuICBzZWxlY3Rpb246IHRyYW5zaXRpb25fc2VsZWN0aW9uLFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uX3RyYW5zaXRpb24sXG4gIGNhbGw6IHNlbGVjdGlvbl9wcm90b3R5cGUuY2FsbCxcbiAgbm9kZXM6IHNlbGVjdGlvbl9wcm90b3R5cGUubm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9wcm90b3R5cGUubm9kZSxcbiAgc2l6ZTogc2VsZWN0aW9uX3Byb3RvdHlwZS5zaXplLFxuICBlbXB0eTogc2VsZWN0aW9uX3Byb3RvdHlwZS5lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX3Byb3RvdHlwZS5lYWNoLFxuICBvbjogdHJhbnNpdGlvbl9vbixcbiAgYXR0cjogdHJhbnNpdGlvbl9hdHRyLFxuICBhdHRyVHdlZW46IHRyYW5zaXRpb25fYXR0clR3ZWVuLFxuICBzdHlsZTogdHJhbnNpdGlvbl9zdHlsZSxcbiAgc3R5bGVUd2VlbjogdHJhbnNpdGlvbl9zdHlsZVR3ZWVuLFxuICB0ZXh0OiB0cmFuc2l0aW9uX3RleHQsXG4gIHJlbW92ZTogdHJhbnNpdGlvbl9yZW1vdmUsXG4gIHR3ZWVuOiB0cmFuc2l0aW9uX3R3ZWVuLFxuICBkZWxheTogdHJhbnNpdGlvbl9kZWxheSxcbiAgZHVyYXRpb246IHRyYW5zaXRpb25fZHVyYXRpb24sXG4gIGVhc2U6IHRyYW5zaXRpb25fZWFzZVxufTtcbiIsImltcG9ydCB7Y29sb3J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZU51bWJlciwgaW50ZXJwb2xhdGVSZ2IsIGludGVycG9sYXRlU3RyaW5nfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgYztcbiAgcmV0dXJuICh0eXBlb2YgYiA9PT0gXCJudW1iZXJcIiA/IGludGVycG9sYXRlTnVtYmVyXG4gICAgICA6IGIgaW5zdGFuY2VvZiBjb2xvciA/IGludGVycG9sYXRlUmdiXG4gICAgICA6IChjID0gY29sb3IoYikpID8gKGIgPSBjLCBpbnRlcnBvbGF0ZVJnYilcbiAgICAgIDogaW50ZXJwb2xhdGVTdHJpbmcpKGEsIGIpO1xufVxuIiwiaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0cmFuc2l0aW9uKSB7XG4gIGlmICh0cmFuc2l0aW9uLl9pZCAhPT0gdGhpcy5faWQpIHRocm93IG5ldyBFcnJvcjtcblxuICBmb3IgKHZhciBncm91cHMwID0gdGhpcy5fZ3JvdXBzLCBncm91cHMxID0gdHJhbnNpdGlvbi5fZ3JvdXBzLCBtMCA9IGdyb3VwczAubGVuZ3RoLCBtMSA9IGdyb3VwczEubGVuZ3RoLCBtID0gTWF0aC5taW4obTAsIG0xKSwgbWVyZ2VzID0gbmV3IEFycmF5KG0wKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cDAgPSBncm91cHMwW2pdLCBncm91cDEgPSBncm91cHMxW2pdLCBuID0gZ3JvdXAwLmxlbmd0aCwgbWVyZ2UgPSBtZXJnZXNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwMFtpXSB8fCBncm91cDFbaV0pIHtcbiAgICAgICAgbWVyZ2VbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBqIDwgbTA7ICsraikge1xuICAgIG1lcmdlc1tqXSA9IGdyb3VwczBbal07XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24obWVyZ2VzLCB0aGlzLl9wYXJlbnRzLCB0aGlzLl9uYW1lLCB0aGlzLl9pZCk7XG59XG4iLCJpbXBvcnQge2dldCwgc2V0LCBpbml0fSBmcm9tIFwiLi9zY2hlZHVsZVwiO1xuXG5mdW5jdGlvbiBzdGFydChuYW1lKSB7XG4gIHJldHVybiAobmFtZSArIFwiXCIpLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykuZXZlcnkoZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICByZXR1cm4gIXQgfHwgdCA9PT0gXCJzdGFydFwiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25GdW5jdGlvbihpZCwgbmFtZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG9uMCwgb24xLCBzaXQgPSBzdGFydChuYW1lKSA/IGluaXQgOiBzZXQ7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzaXQodGhpcywgaWQpLFxuICAgICAgICBvbiA9IHNjaGVkdWxlLm9uO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCBhIGRpc3BhdGNoIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIGRpc3BhdGNoIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmIChvbiAhPT0gb24wKSAob24xID0gKG9uMCA9IG9uKS5jb3B5KCkpLm9uKG5hbWUsIGxpc3RlbmVyKTtcblxuICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBsaXN0ZW5lcikge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDJcbiAgICAgID8gZ2V0KHRoaXMubm9kZSgpLCBpZCkub24ub24obmFtZSlcbiAgICAgIDogdGhpcy5lYWNoKG9uRnVuY3Rpb24oaWQsIG5hbWUsIGxpc3RlbmVyKSk7XG59XG4iLCJmdW5jdGlvbiByZW1vdmVGdW5jdGlvbihpZCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuX190cmFuc2l0aW9uKSBpZiAoK2kgIT09IGlkKSByZXR1cm47XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub24oXCJlbmQucmVtb3ZlXCIsIHJlbW92ZUZ1bmN0aW9uKHRoaXMuX2lkKSk7XG59XG4iLCJpbXBvcnQge2Rpc3BhdGNofSBmcm9tIFwiZDMtZGlzcGF0Y2hcIjtcbmltcG9ydCB7dGltZXIsIHRpbWVvdXR9IGZyb20gXCJkMy10aW1lclwiO1xuXG52YXIgZW1wdHlPbiA9IGRpc3BhdGNoKFwic3RhcnRcIiwgXCJlbmRcIiwgXCJpbnRlcnJ1cHRcIik7XG52YXIgZW1wdHlUd2VlbiA9IFtdO1xuXG5leHBvcnQgdmFyIENSRUFURUQgPSAwO1xuZXhwb3J0IHZhciBTQ0hFRFVMRUQgPSAxO1xuZXhwb3J0IHZhciBTVEFSVElORyA9IDI7XG5leHBvcnQgdmFyIFNUQVJURUQgPSAzO1xuZXhwb3J0IHZhciBSVU5OSU5HID0gNDtcbmV4cG9ydCB2YXIgRU5ESU5HID0gNTtcbmV4cG9ydCB2YXIgRU5ERUQgPSA2O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCBuYW1lLCBpZCwgaW5kZXgsIGdyb3VwLCB0aW1pbmcpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uO1xuICBpZiAoIXNjaGVkdWxlcykgbm9kZS5fX3RyYW5zaXRpb24gPSB7fTtcbiAgZWxzZSBpZiAoaWQgaW4gc2NoZWR1bGVzKSByZXR1cm47XG4gIGNyZWF0ZShub2RlLCBpZCwge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaW5kZXg6IGluZGV4LCAvLyBGb3IgY29udGV4dCBkdXJpbmcgY2FsbGJhY2suXG4gICAgZ3JvdXA6IGdyb3VwLCAvLyBGb3IgY29udGV4dCBkdXJpbmcgY2FsbGJhY2suXG4gICAgb246IGVtcHR5T24sXG4gICAgdHdlZW46IGVtcHR5VHdlZW4sXG4gICAgdGltZTogdGltaW5nLnRpbWUsXG4gICAgZGVsYXk6IHRpbWluZy5kZWxheSxcbiAgICBkdXJhdGlvbjogdGltaW5nLmR1cmF0aW9uLFxuICAgIGVhc2U6IHRpbWluZy5lYXNlLFxuICAgIHRpbWVyOiBudWxsLFxuICAgIHN0YXRlOiBDUkVBVEVEXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdChub2RlLCBpZCkge1xuICB2YXIgc2NoZWR1bGUgPSBnZXQobm9kZSwgaWQpO1xuICBpZiAoc2NoZWR1bGUuc3RhdGUgPiBDUkVBVEVEKSB0aHJvdyBuZXcgRXJyb3IoXCJ0b28gbGF0ZTsgYWxyZWFkeSBzY2hlZHVsZWRcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChub2RlLCBpZCkge1xuICB2YXIgc2NoZWR1bGUgPSBnZXQobm9kZSwgaWQpO1xuICBpZiAoc2NoZWR1bGUuc3RhdGUgPiBTVEFSVElORykgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgc3RhcnRlZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IG5vZGUuX190cmFuc2l0aW9uO1xuICBpZiAoIXNjaGVkdWxlIHx8ICEoc2NoZWR1bGUgPSBzY2hlZHVsZVtpZF0pKSB0aHJvdyBuZXcgRXJyb3IoXCJ0cmFuc2l0aW9uIG5vdCBmb3VuZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUobm9kZSwgaWQsIHNlbGYpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgdHdlZW47XG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGUgc2VsZiB0aW1lciB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNyZWF0ZWQuXG4gIC8vIE5vdGUgdGhlIGFjdHVhbCBkZWxheSBpcyBub3Qga25vd24gdW50aWwgdGhlIGZpcnN0IGNhbGxiYWNrIVxuICBzY2hlZHVsZXNbaWRdID0gc2VsZjtcbiAgc2VsZi50aW1lciA9IHRpbWVyKHNjaGVkdWxlLCAwLCBzZWxmLnRpbWUpO1xuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlKGVsYXBzZWQpIHtcbiAgICBzZWxmLnN0YXRlID0gU0NIRURVTEVEO1xuICAgIHNlbGYudGltZXIucmVzdGFydChzdGFydCwgc2VsZi5kZWxheSwgc2VsZi50aW1lKTtcblxuICAgIC8vIElmIHRoZSBlbGFwc2VkIGRlbGF5IGlzIGxlc3MgdGhhbiBvdXIgZmlyc3Qgc2xlZXAsIHN0YXJ0IGltbWVkaWF0ZWx5LlxuICAgIGlmIChzZWxmLmRlbGF5IDw9IGVsYXBzZWQpIHN0YXJ0KGVsYXBzZWQgLSBzZWxmLmRlbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGVsYXBzZWQpIHtcbiAgICB2YXIgaSwgaiwgbiwgbztcblxuICAgIC8vIElmIHRoZSBzdGF0ZSBpcyBub3QgU0NIRURVTEVELCB0aGVuIHdlIHByZXZpb3VzbHkgZXJyb3JlZCBvbiBzdGFydC5cbiAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gU0NIRURVTEVEKSByZXR1cm4gc3RvcCgpO1xuXG4gICAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgICAgbyA9IHNjaGVkdWxlc1tpXTtcbiAgICAgIGlmIChvLm5hbWUgIT09IHNlbGYubmFtZSkgY29udGludWU7XG5cbiAgICAgIC8vIFdoaWxlIHRoaXMgZWxlbWVudCBhbHJlYWR5IGhhcyBhIHN0YXJ0aW5nIHRyYW5zaXRpb24gZHVyaW5nIHRoaXMgZnJhbWUsXG4gICAgICAvLyBkZWZlciBzdGFydGluZyBhbiBpbnRlcnJ1cHRpbmcgdHJhbnNpdGlvbiB1bnRpbCB0aGF0IHRyYW5zaXRpb24gaGFzIGFcbiAgICAgIC8vIGNoYW5jZSB0byB0aWNrIChhbmQgcG9zc2libHkgZW5kKTsgc2VlIGQzL2QzLXRyYW5zaXRpb24jNTQhXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gU1RBUlRFRCkgcmV0dXJuIHRpbWVvdXQoc3RhcnQpO1xuXG4gICAgICAvLyBJbnRlcnJ1cHQgdGhlIGFjdGl2ZSB0cmFuc2l0aW9uLCBpZiBhbnkuXG4gICAgICAvLyBEaXNwYXRjaCB0aGUgaW50ZXJydXB0IGV2ZW50LlxuICAgICAgaWYgKG8uc3RhdGUgPT09IFJVTk5JTkcpIHtcbiAgICAgICAgby5zdGF0ZSA9IEVOREVEO1xuICAgICAgICBvLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgby5vbi5jYWxsKFwiaW50ZXJydXB0XCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIG8uaW5kZXgsIG8uZ3JvdXApO1xuICAgICAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICAgICAgfVxuXG4gICAgICAvLyBDYW5jZWwgYW55IHByZS1lbXB0ZWQgdHJhbnNpdGlvbnMuIE5vIGludGVycnVwdCBldmVudCBpcyBkaXNwYXRjaGVkXG4gICAgICAvLyBiZWNhdXNlIHRoZSBjYW5jZWxsZWQgdHJhbnNpdGlvbnMgbmV2ZXIgc3RhcnRlZC4gTm90ZSB0aGF0IHRoaXMgYWxzb1xuICAgICAgLy8gcmVtb3ZlcyB0aGlzIHRyYW5zaXRpb24gZnJvbSB0aGUgcGVuZGluZyBsaXN0IVxuICAgICAgZWxzZSBpZiAoK2kgPCBpZCkge1xuICAgICAgICBvLnN0YXRlID0gRU5ERUQ7XG4gICAgICAgIG8udGltZXIuc3RvcCgpO1xuICAgICAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlZmVyIHRoZSBmaXJzdCB0aWNrIHRvIGVuZCBvZiB0aGUgY3VycmVudCBmcmFtZTsgc2VlIGQzL2QzIzE1NzYuXG4gICAgLy8gTm90ZSB0aGUgdHJhbnNpdGlvbiBtYXkgYmUgY2FuY2VsZWQgYWZ0ZXIgc3RhcnQgYW5kIGJlZm9yZSB0aGUgZmlyc3QgdGljayFcbiAgICAvLyBOb3RlIHRoaXMgbXVzdCBiZSBzY2hlZHVsZWQgYmVmb3JlIHRoZSBzdGFydCBldmVudDsgc2VlIGQzL2QzLXRyYW5zaXRpb24jMTYhXG4gICAgLy8gQXNzdW1pbmcgdGhpcyBpcyBzdWNjZXNzZnVsLCBzdWJzZXF1ZW50IGNhbGxiYWNrcyBnbyBzdHJhaWdodCB0byB0aWNrLlxuICAgIHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gU1RBUlRFRCkge1xuICAgICAgICBzZWxmLnN0YXRlID0gUlVOTklORztcbiAgICAgICAgc2VsZi50aW1lci5yZXN0YXJ0KHRpY2ssIHNlbGYuZGVsYXksIHNlbGYudGltZSk7XG4gICAgICAgIHRpY2soZWxhcHNlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgc3RhcnQgZXZlbnQuXG4gICAgLy8gTm90ZSB0aGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgdGhlIHR3ZWVuIGFyZSBpbml0aWFsaXplZC5cbiAgICBzZWxmLnN0YXRlID0gU1RBUlRJTkc7XG4gICAgc2VsZi5vbi5jYWxsKFwic3RhcnRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCk7XG4gICAgaWYgKHNlbGYuc3RhdGUgIT09IFNUQVJUSU5HKSByZXR1cm47IC8vIGludGVycnVwdGVkXG4gICAgc2VsZi5zdGF0ZSA9IFNUQVJURUQ7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSB0d2VlbiwgZGVsZXRpbmcgbnVsbCB0d2Vlbi5cbiAgICB0d2VlbiA9IG5ldyBBcnJheShuID0gc2VsZi50d2Vlbi5sZW5ndGgpO1xuICAgIGZvciAoaSA9IDAsIGogPSAtMTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG8gPSBzZWxmLnR3ZWVuW2ldLnZhbHVlLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCkpIHtcbiAgICAgICAgdHdlZW5bKytqXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIHR3ZWVuLmxlbmd0aCA9IGogKyAxO1xuICB9XG5cbiAgZnVuY3Rpb24gdGljayhlbGFwc2VkKSB7XG4gICAgdmFyIHQgPSBlbGFwc2VkIDwgc2VsZi5kdXJhdGlvbiA/IHNlbGYuZWFzZS5jYWxsKG51bGwsIGVsYXBzZWQgLyBzZWxmLmR1cmF0aW9uKSA6IChzZWxmLnRpbWVyLnJlc3RhcnQoc3RvcCksIHNlbGYuc3RhdGUgPSBFTkRJTkcsIDEpLFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSB0d2Vlbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgdHdlZW5baV0uY2FsbChudWxsLCB0KTtcbiAgICB9XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgZW5kIGV2ZW50LlxuICAgIGlmIChzZWxmLnN0YXRlID09PSBFTkRJTkcpIHtcbiAgICAgIHNlbGYub24uY2FsbChcImVuZFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKTtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHNlbGYuc3RhdGUgPSBFTkRFRDtcbiAgICBzZWxmLnRpbWVyLnN0b3AoKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2lkXTtcbiAgICBmb3IgKHZhciBpIGluIHNjaGVkdWxlcykgcmV0dXJuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgZGVsZXRlIG5vZGUuX190cmFuc2l0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQge3NlbGVjdG9yfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZCA9IHRoaXMuX2lkO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgc3Vibm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkpIHtcbiAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgc3ViZ3JvdXBbaV0gPSBzdWJub2RlO1xuICAgICAgICBzY2hlZHVsZShzdWJncm91cFtpXSwgbmFtZSwgaWQsIGksIHN1Ymdyb3VwLCBnZXQobm9kZSwgaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge3NlbGVjdG9yQWxsfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZCA9IHRoaXMuX2lkO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yQWxsKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gW10sIHBhcmVudHMgPSBbXSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgZm9yICh2YXIgY2hpbGRyZW4gPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCksIGNoaWxkLCBpbmhlcml0ID0gZ2V0KG5vZGUsIGlkKSwgayA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGsgPCBsOyArK2spIHtcbiAgICAgICAgICBpZiAoY2hpbGQgPSBjaGlsZHJlbltrXSkge1xuICAgICAgICAgICAgc2NoZWR1bGUoY2hpbGQsIG5hbWUsIGlkLCBrLCBjaGlsZHJlbiwgaW5oZXJpdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1Ymdyb3Vwcy5wdXNoKGNoaWxkcmVuKTtcbiAgICAgICAgcGFyZW50cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHBhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5cbnZhciBTZWxlY3Rpb24gPSBzZWxlY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImltcG9ydCB7aW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MgYXMgaW50ZXJwb2xhdGVUcmFuc2Zvcm19IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IHtzdHlsZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2VlblwiO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gXCIuL2ludGVycG9sYXRlXCI7XG5cbmZ1bmN0aW9uIHN0eWxlUmVtb3ZlKG5hbWUsIGludGVycG9sYXRlKSB7XG4gIHZhciB2YWx1ZTAwLFxuICAgICAgdmFsdWUxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTAgPSBzdHlsZSh0aGlzLCBuYW1lKSxcbiAgICAgICAgdmFsdWUxID0gKHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSksIHN0eWxlKHRoaXMsIG5hbWUpKTtcbiAgICByZXR1cm4gdmFsdWUwID09PSB2YWx1ZTEgPyBudWxsXG4gICAgICAgIDogdmFsdWUwID09PSB2YWx1ZTAwICYmIHZhbHVlMSA9PT0gdmFsdWUxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHZhbHVlMDAgPSB2YWx1ZTAsIHZhbHVlMTAgPSB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZVJlbW92ZUVuZChuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUNvbnN0YW50KG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHZhbHVlMDAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUwID0gc3R5bGUodGhpcywgbmFtZSk7XG4gICAgcmV0dXJuIHZhbHVlMCA9PT0gdmFsdWUxID8gbnVsbFxuICAgICAgICA6IHZhbHVlMCA9PT0gdmFsdWUwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHZhbHVlMDAgPSB2YWx1ZTAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlRnVuY3Rpb24obmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciB2YWx1ZTAwLFxuICAgICAgdmFsdWUxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTAgPSBzdHlsZSh0aGlzLCBuYW1lKSxcbiAgICAgICAgdmFsdWUxID0gdmFsdWUodGhpcyk7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSB2YWx1ZTEgPSAodGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKSwgc3R5bGUodGhpcywgbmFtZSkpO1xuICAgIHJldHVybiB2YWx1ZTAgPT09IHZhbHVlMSA/IG51bGxcbiAgICAgICAgOiB2YWx1ZTAgPT09IHZhbHVlMDAgJiYgdmFsdWUxID09PSB2YWx1ZTEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUodmFsdWUwMCA9IHZhbHVlMCwgdmFsdWUxMCA9IHZhbHVlMSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIgaSA9IChuYW1lICs9IFwiXCIpID09PSBcInRyYW5zZm9ybVwiID8gaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBpbnRlcnBvbGF0ZTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB0aGlzXG4gICAgICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVSZW1vdmUobmFtZSwgaSkpXG4gICAgICAgICAgLm9uKFwiZW5kLnN0eWxlLlwiICsgbmFtZSwgc3R5bGVSZW1vdmVFbmQobmFtZSkpXG4gICAgICA6IHRoaXMuc3R5bGVUd2VlbihuYW1lLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gc3R5bGVGdW5jdGlvbihuYW1lLCBpLCB0d2VlblZhbHVlKHRoaXMsIFwic3R5bGUuXCIgKyBuYW1lLCB2YWx1ZSkpXG4gICAgICAgICAgOiBzdHlsZUNvbnN0YW50KG5hbWUsIGksIHZhbHVlICsgXCJcIiksIHByaW9yaXR5KTtcbn1cbiIsImZ1bmN0aW9uIHN0eWxlVHdlZW4obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBub2RlID0gdGhpcywgaSA9IHZhbHVlLmFwcGx5KG5vZGUsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGkgJiYgZnVuY3Rpb24odCkge1xuICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBpKHQpLCBwcmlvcml0eSk7XG4gICAgfTtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGtleSA9IFwic3R5bGUuXCIgKyAobmFtZSArPSBcIlwiKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIHN0eWxlVHdlZW4obmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKTtcbn1cbiIsImltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW5cIjtcblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMSA9IHZhbHVlKHRoaXMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTEgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZTE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLnR3ZWVuKFwidGV4dFwiLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyB0ZXh0RnVuY3Rpb24odHdlZW5WYWx1ZSh0aGlzLCBcInRleHRcIiwgdmFsdWUpKVxuICAgICAgOiB0ZXh0Q29uc3RhbnQodmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSArIFwiXCIpKTtcbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbiwgbmV3SWR9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZDAgPSB0aGlzLl9pZCxcbiAgICAgIGlkMSA9IG5ld0lkKCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgdmFyIGluaGVyaXQgPSBnZXQobm9kZSwgaWQwKTtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQxLCBpLCBncm91cCwge1xuICAgICAgICAgIHRpbWU6IGluaGVyaXQudGltZSArIGluaGVyaXQuZGVsYXkgKyBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGVhc2U6IGluaGVyaXQuZWFzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZDEpO1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZnVuY3Rpb24gdHdlZW5SZW1vdmUoaWQsIG5hbWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgdHdlZW4gPSBzY2hlZHVsZS50d2VlbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgdHdlZW4gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgdHdlZW4gYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKHR3ZWVuICE9PSB0d2VlbjApIHtcbiAgICAgIHR3ZWVuMSA9IHR3ZWVuMCA9IHR3ZWVuO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSB0d2VlbjEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICh0d2VlbjFbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHR3ZWVuMSA9IHR3ZWVuMS5zbGljZSgpO1xuICAgICAgICAgIHR3ZWVuMS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzY2hlZHVsZS50d2VlbiA9IHR3ZWVuMTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHdlZW5GdW5jdGlvbihpZCwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIHR3ZWVuID0gc2NoZWR1bGUudHdlZW47XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIHR3ZWVuIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIHR3ZWVuIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmICh0d2VlbiAhPT0gdHdlZW4wKSB7XG4gICAgICB0d2VlbjEgPSAodHdlZW4wID0gdHdlZW4pLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciB0ID0ge25hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0sIGkgPSAwLCBuID0gdHdlZW4xLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAodHdlZW4xW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICB0d2VlbjFbaV0gPSB0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gbikgdHdlZW4xLnB1c2godCk7XG4gICAgfVxuXG4gICAgc2NoZWR1bGUudHdlZW4gPSB0d2VlbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIG5hbWUgKz0gXCJcIjtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgdHdlZW4gPSBnZXQodGhpcy5ub2RlKCksIGlkKS50d2VlbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IHR3ZWVuLmxlbmd0aCwgdDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCh0ID0gdHdlZW5baV0pLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbCA/IHR3ZWVuUmVtb3ZlIDogdHdlZW5GdW5jdGlvbikoaWQsIG5hbWUsIHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0d2VlblZhbHVlKHRyYW5zaXRpb24sIG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRyYW5zaXRpb24uX2lkO1xuXG4gIHRyYW5zaXRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpO1xuICAgIChzY2hlZHVsZS52YWx1ZSB8fCAoc2NoZWR1bGUudmFsdWUgPSB7fSkpW25hbWVdID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gZ2V0KG5vZGUsIGlkKS52YWx1ZVtuYW1lXTtcbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gW3tcImNvdW50cnlcIjpcIlVuaXRlZCBTdGF0ZXNcIixcInJlY2VpcHRzXCI6MzMzNjAwMDAwMDAwMCxcImdkcFwiOjE5MzkwNjA0MDAwMDAwLFwicmVjZWlwdHNfZ2RwXCI6MC4xNyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJDaGluYVwiLFwicmVjZWlwdHNcIjoyNjcyMDAwMDAwMDAwLFwiZ2RwXCI6MTIyMzc3MDAwMDAwMDAsXCJyZWNlaXB0c19nZHBcIjowLjIyLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkphcGFuXCIsXCJyZWNlaXB0c1wiOjE2NzgwMDAwMDAwMDAsXCJnZHBcIjo0ODcyMTQwMDAwMDAwLFwicmVjZWlwdHNfZ2RwXCI6MC4zNCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJHZXJtYW55XCIsXCJyZWNlaXB0c1wiOjE1OTgwMDAwMDAwMDAsXCJnZHBcIjozNjc3NDM5MTI5Nzc3LFwicmVjZWlwdHNfZ2RwXCI6MC40MyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJVbml0ZWQgS2luZ2RvbVwiLFwicmVjZWlwdHNcIjo5ODQ0MDAwMDAwMDAsXCJnZHBcIjoyNjIyNDMzOTU5NjA0LFwicmVjZWlwdHNfZ2RwXCI6MC4zOCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJJbmRpYVwiLFwicmVjZWlwdHNcIjoyNDg3MDAwMDAwMDAsXCJnZHBcIjoyNTk3NDkxMTYyODk4LFwicmVjZWlwdHNfZ2RwXCI6MC4xLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkZyYW5jZVwiLFwicmVjZWlwdHNcIjoxMzM0MDAwMDAwMDAwLFwiZ2RwXCI6MjU4MjUwMTMwNzIxNixcInJlY2VpcHRzX2dkcFwiOjAuNTIsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQnJhemlsXCIsXCJyZWNlaXB0c1wiOjcyNjYwMDAwMDAwMCxcImdkcFwiOjIwNTU1MDU1MDIyMjUsXCJyZWNlaXB0c19nZHBcIjowLjM1LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkl0YWx5XCIsXCJyZWNlaXB0c1wiOjg4NDQwMDAwMDAwMCxcImdkcFwiOjE5MzQ3OTc5Mzc0MTEsXCJyZWNlaXB0c19nZHBcIjowLjQ2LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkNhbmFkYVwiLFwicmVjZWlwdHNcIjo2MjM3MDAwMDAwMDAsXCJnZHBcIjoxNjUzMDQyNzk1MjU1LFwicmVjZWlwdHNfZ2RwXCI6MC4zOCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJSdXNzaWFcIixcInJlY2VpcHRzXCI6MjUzOTAwMDAwMDAwLFwiZ2RwXCI6MTU3NzUyNDE0NTk2MyxcInJlY2VpcHRzX2dkcFwiOjAuMTYsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiS29yZWEsIFNvdXRoXCIsXCJyZWNlaXB0c1wiOjM1MTYwMDAwMDAwMCxcImdkcFwiOjE1MzA3NTA5MjMxNDksXCJyZWNlaXB0c19nZHBcIjowLjIzLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkF1c3RyYWxpYVwiLFwicmVjZWlwdHNcIjo0NjEwMDAwMDAwMDAsXCJnZHBcIjoxMzIzNDIxMDcyNDc5LFwicmVjZWlwdHNfZ2RwXCI6MC4zNSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJTcGFpblwiLFwicmVjZWlwdHNcIjo0OTI0MDAwMDAwMDAsXCJnZHBcIjoxMzExMzIwMDE1NTE2LFwicmVjZWlwdHNfZ2RwXCI6MC4zOCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJNZXhpY29cIixcInJlY2VpcHRzXCI6MjkyODAwMDAwMDAwLFwiZ2RwXCI6MTE0OTkxODc5NDc2NixcInJlY2VpcHRzX2dkcFwiOjAuMjUsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiSW5kb25lc2lhXCIsXCJyZWNlaXB0c1wiOjEzMDYwMDAwMDAwMCxcImdkcFwiOjEwMTU1MzkwMTc1MzcsXCJyZWNlaXB0c19nZHBcIjowLjEzLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlR1cmtleVwiLFwicmVjZWlwdHNcIjoxNzM5MDAwMDAwMDAsXCJnZHBcIjo4NTExMDI0MTExMTgsXCJyZWNlaXB0c19nZHBcIjowLjIsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiTmV0aGVybGFuZHNcIixcInJlY2VpcHRzXCI6MzQ0ODAwMDAwMDAwLFwiZ2RwXCI6ODI2MjAwMjgyNTAxLFwicmVjZWlwdHNfZ2RwXCI6MC40MixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJTYXVkaSBBcmFiaWFcIixcInJlY2VpcHRzXCI6MTcxNjAwMDAwMDAwLFwiZ2RwXCI6NjgzODI3MTQ0Mjg5LFwicmVjZWlwdHNfZ2RwXCI6MC4yNSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJTd2l0emVybGFuZFwiLFwicmVjZWlwdHNcIjoyMjM1MDAwMDAwMDAsXCJnZHBcIjo2Nzg4ODczMzY4NDgsXCJyZWNlaXB0c19nZHBcIjowLjMzLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkFyZ2VudGluYVwiLFwicmVjZWlwdHNcIjoxMjMyMDAwMDAwMDAsXCJnZHBcIjo2Mzc1OTA0MTkyNjksXCJyZWNlaXB0c19nZHBcIjowLjE5LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlRhaXdhblwiLFwicmVjZWlwdHNcIjo5MzAwMDAwMDAwMCxcImdkcFwiOjU3OTMwMjAwMDAwMCxcInJlY2VpcHRzX2dkcFwiOjAuMTYsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwiaW1mXCJ9LHtcImNvdW50cnlcIjpcIlN3ZWRlblwiLFwicmVjZWlwdHNcIjoyNzQ4MDAwMDAwMDAsXCJnZHBcIjo1MzgwNDA0NTgyMTcsXCJyZWNlaXB0c19nZHBcIjowLjUxLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlBvbGFuZFwiLFwicmVjZWlwdHNcIjo5MDgwMDAwMDAwMCxcImdkcFwiOjUyNDUwOTU2NTI2MyxcInJlY2VpcHRzX2dkcFwiOjAuMTcsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQmVsZ2l1bVwiLFwicmVjZWlwdHNcIjoyNDk3MDAwMDAwMDAsXCJnZHBcIjo0OTI2ODEyODMwNDksXCJyZWNlaXB0c19nZHBcIjowLjUxLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlRoYWlsYW5kXCIsXCJyZWNlaXB0c1wiOjc5NjAwMDAwMDAwLFwiZ2RwXCI6NDU1MjIwOTIwNTcxLFwicmVjZWlwdHNfZ2RwXCI6MC4xNyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJJcmFuXCIsXCJyZWNlaXB0c1wiOjc3MjIwMDAwMDAwLFwiZ2RwXCI6NDM5NTEzNTExNjIxLFwicmVjZWlwdHNfZ2RwXCI6MC4xOCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJBdXN0cmlhXCIsXCJyZWNlaXB0c1wiOjE5NzgwMDAwMDAwMCxcImdkcFwiOjQxNjU5NTY2NjM5NyxcInJlY2VpcHRzX2dkcFwiOjAuNDcsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiTm9yd2F5XCIsXCJyZWNlaXB0c1wiOjIxNDMwMDAwMDAwMCxcImdkcFwiOjM5ODgzMTk1NjQ3OCxcInJlY2VpcHRzX2dkcFwiOjAuNTQsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIixcInJlY2VpcHRzXCI6ODM0NDAwMDAwMDAsXCJnZHBcIjozODI1NzUwODUwOTIsXCJyZWNlaXB0c19nZHBcIjowLjIyLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIk5pZ2VyaWFcIixcInJlY2VpcHRzXCI6MTM5NzAwMDAwMDAsXCJnZHBcIjozNzU3NzA3MTM3NDMsXCJyZWNlaXB0c19nZHBcIjowLjA0LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIklzcmFlbFwiLFwicmVjZWlwdHNcIjo5MjgyMDAwMDAwMCxcImdkcFwiOjM1MDg1MDUzNzgyNyxcInJlY2VpcHRzX2dkcFwiOjAuMjYsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiU291dGggQWZyaWNhXCIsXCJyZWNlaXB0c1wiOjkyMzgwMDAwMDAwLFwiZ2RwXCI6MzQ5NDE5MzQzNjE0LFwicmVjZWlwdHNfZ2RwXCI6MC4yNixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJIb25nIEtvbmdcIixcInJlY2VpcHRzXCI6NjYxOTAwMDAwMDAsXCJnZHBcIjozNDE0NDkzNDA0NTEsXCJyZWNlaXB0c19nZHBcIjowLjE5LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIklyZWxhbmRcIixcInJlY2VpcHRzXCI6ODU0MTAwMDAwMDAsXCJnZHBcIjozMzM3MzA3NjQ3NzMsXCJyZWNlaXB0c19nZHBcIjowLjI2LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkRlbm1hcmtcIixcInJlY2VpcHRzXCI6MTczNTAwMDAwMDAwLFwiZ2RwXCI6MzI0ODcxOTY4ODA3LFwicmVjZWlwdHNfZ2RwXCI6MC41MyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJTaW5nYXBvcmVcIixcInJlY2VpcHRzXCI6NTM0MDAwMDAwMDAsXCJnZHBcIjozMjM5MDcyMzQ0MTIsXCJyZWNlaXB0c19nZHBcIjowLjE2LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIk1hbGF5c2lhXCIsXCJyZWNlaXB0c1wiOjUxMjMwMDAwMDAwLFwiZ2RwXCI6MzE0NTAwMjc5MDQ0LFwicmVjZWlwdHNfZ2RwXCI6MC4xNixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJQaGlsaXBwaW5lc1wiLFwicmVjZWlwdHNcIjo0NDc0MDAwMDAwMCxcImdkcFwiOjMxMzU5NTIwODczNyxcInJlY2VpcHRzX2dkcFwiOjAuMTQsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQ29sb21iaWFcIixcInJlY2VpcHRzXCI6ODUxNDAwMDAwMDAsXCJnZHBcIjozMDkxOTEzODI4MzMsXCJyZWNlaXB0c19nZHBcIjowLjI4LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlBha2lzdGFuXCIsXCJyZWNlaXB0c1wiOjQ1NjQwMDAwMDAwLFwiZ2RwXCI6MzA0OTUxODE4NDk0LFwicmVjZWlwdHNfZ2RwXCI6MC4xNSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJDaGlsZVwiLFwicmVjZWlwdHNcIjo1NjczMDAwMDAwMCxcImdkcFwiOjI3NzA3NTk0NDQwMixcInJlY2VpcHRzX2dkcFwiOjAuMixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJGaW5sYW5kXCIsXCJyZWNlaXB0c1wiOjEzNjgwMDAwMDAwMCxcImdkcFwiOjI1MTg4NDg4Nzk3MyxcInJlY2VpcHRzX2dkcFwiOjAuNTQsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQmFuZ2xhZGVzaFwiLFwicmVjZWlwdHNcIjoyNzA4MDAwMDAwMCxcImdkcFwiOjI0OTcyMzg4Nzc2NSxcInJlY2VpcHRzX2dkcFwiOjAuMTEsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiRWd5cHRcIixcInJlY2VpcHRzXCI6MzU1NDAwMDAwMDAsXCJnZHBcIjoyMzUzNjkxMjkzMzgsXCJyZWNlaXB0c19nZHBcIjowLjE1LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlZpZXRuYW1cIixcInJlY2VpcHRzXCI6NDk0MTAwMDAwMDAsXCJnZHBcIjoyMjM4NjM5OTYzNTUsXCJyZWNlaXB0c19nZHBcIjowLjIyLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlBvcnR1Z2FsXCIsXCJyZWNlaXB0c1wiOjkyOTkwMDAwMDAwLFwiZ2RwXCI6MjE3NTcxMDgzMDQ2LFwicmVjZWlwdHNfZ2RwXCI6MC40MyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJDemVjaCBSZXB1YmxpY1wiLFwicmVjZWlwdHNcIjo4MzYyMDAwMDAwMCxcImdkcFwiOjIxNTcyNTUzNDM3MixcInJlY2VpcHRzX2dkcFwiOjAuMzksXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiUm9tYW5pYVwiLFwicmVjZWlwdHNcIjo1ODUwMDAwMDAwMCxcImdkcFwiOjIxMTgwMzI4MTkyNSxcInJlY2VpcHRzX2dkcFwiOjAuMjgsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiUGVydVwiLFwicmVjZWlwdHNcIjo1OTY2MDAwMDAwMCxcImdkcFwiOjIxMTM4OTI3MjI0MixcInJlY2VpcHRzX2dkcFwiOjAuMjgsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiVmVuZXp1ZWxhXCIsXCJyZWNlaXB0c1wiOjc3ODkwMDAwMDAwLFwiZ2RwXCI6MjEwMDg1MDAwMDAwLFwicmVjZWlwdHNfZ2RwXCI6MC4zNyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJpbWZcIn0se1wiY291bnRyeVwiOlwiTmV3IFplYWxhbmRcIixcInJlY2VpcHRzXCI6NzMyMDAwMDAwMDAsXCJnZHBcIjoyMDU4NTI4MzgyNTUsXCJyZWNlaXB0c19nZHBcIjowLjM2LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkdyZWVjZVwiLFwicmVjZWlwdHNcIjo5NTM2MDAwMDAwMCxcImdkcFwiOjIwMDI4ODI3NzEyOSxcInJlY2VpcHRzX2dkcFwiOjAuNDgsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiSXJhcVwiLFwicmVjZWlwdHNcIjo2Mzk3MDAwMDAwMCxcImdkcFwiOjE5NzcxNTczNjA0MSxcInJlY2VpcHRzX2dkcFwiOjAuMzIsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQWxnZXJpYVwiLFwicmVjZWlwdHNcIjo1MjA4MDAwMDAwMCxcImdkcFwiOjE3MDM3MDgxMDkxOCxcInJlY2VpcHRzX2dkcFwiOjAuMzEsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiUWF0YXJcIixcInJlY2VpcHRzXCI6NDE0NzAwMDAwMDAsXCJnZHBcIjoxNjc2MDUyMTk3ODAsXCJyZWNlaXB0c19nZHBcIjowLjI1LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkthemFraHN0YW5cIixcInJlY2VpcHRzXCI6MzQxMzAwMDAwMDAsXCJnZHBcIjoxNTk0MDY5MjYzNTksXCJyZWNlaXB0c19nZHBcIjowLjIxLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkh1bmdhcnlcIixcInJlY2VpcHRzXCI6NjM2MzAwMDAwMDAsXCJnZHBcIjoxMzkxMzUwMjk3NTgsXCJyZWNlaXB0c19nZHBcIjowLjQ2LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkFuZ29sYVwiLFwicmVjZWlwdHNcIjozNTU5MDAwMDAwMCxcImdkcFwiOjEyNDIwOTM4NTgyNSxcInJlY2VpcHRzX2dkcFwiOjAuMjksXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiS3V3YWl0XCIsXCJyZWNlaXB0c1wiOjUyODcwMDAwMDAwLFwiZ2RwXCI6MTIwMTI2Mjc3NjEzLFwicmVjZWlwdHNfZ2RwXCI6MC40NCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJTdWRhblwiLFwicmVjZWlwdHNcIjo4MTk4MDAwMDAwLFwiZ2RwXCI6MTE3NDg3ODU3MTQzLFwicmVjZWlwdHNfZ2RwXCI6MC4wNyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJVa3JhaW5lXCIsXCJyZWNlaXB0c1wiOjM1NjAwMDAwMDAwLFwiZ2RwXCI6MTEyMTU0MTg1MTIxLFwicmVjZWlwdHNfZ2RwXCI6MC4zMixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJNb3JvY2NvXCIsXCJyZWNlaXB0c1wiOjI2NjMwMDAwMDAwLFwiZ2RwXCI6MTA5MTM5NDg0MDA3LFwicmVjZWlwdHNfZ2RwXCI6MC4yNCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJQdWVydG8gUmljb1wiLFwicmVjZWlwdHNcIjo5MjY4MDAwMDAwLFwiZ2RwXCI6MTA1MDM0NTAwMDAwLFwicmVjZWlwdHNfZ2RwXCI6MC4wOSxcInllYXJcIjoyMDE2LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJFY3VhZG9yXCIsXCJyZWNlaXB0c1wiOjMyMzAwMDAwMDAwLFwiZ2RwXCI6MTAzMDU2NjE5MDAwLFwicmVjZWlwdHNfZ2RwXCI6MC4zMSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJTbG92YWtpYVwiLFwicmVjZWlwdHNcIjozNzA5MDAwMDAwMCxcImdkcFwiOjk1NzY5MDMxOTgwLFwicmVjZWlwdHNfZ2RwXCI6MC4zOSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJDdWJhXCIsXCJyZWNlaXB0c1wiOjUyMzYwMDAwMDAwLFwiZ2RwXCI6ODk2ODkwMDAwMDAsXCJyZWNlaXB0c19nZHBcIjowLjU4LFwieWVhclwiOjIwMTYsXCJzb3VyY2VcIjpcInVuXCJ9LHtcImNvdW50cnlcIjpcIlNyaSBMYW5rYVwiLFwicmVjZWlwdHNcIjoxMjY0MDAwMDAwMCxcImdkcFwiOjg3MTc0NjgyMjAwLFwicmVjZWlwdHNfZ2RwXCI6MC4xNSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJFdGhpb3BpYVwiLFwicmVjZWlwdHNcIjoxMjExMDAwMDAwMCxcImdkcFwiOjgwNTYxNDk2MTM0LFwicmVjZWlwdHNfZ2RwXCI6MC4xNSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJEb21pbmljYW4gUmVwdWJsaWNcIixcInJlY2VpcHRzXCI6MTExODAwMDAwMDAsXCJnZHBcIjo3NTkzMTY1NjgxNSxcInJlY2VpcHRzX2dkcFwiOjAuMTUsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiR3VhdGVtYWxhXCIsXCJyZWNlaXB0c1wiOjgzMzUwMDAwMDAsXCJnZHBcIjo3NTYyMDA5NTUzOCxcInJlY2VpcHRzX2dkcFwiOjAuMTEsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiS2VueWFcIixcInJlY2VpcHRzXCI6MTUzNzAwMDAwMDAsXCJnZHBcIjo3NDkzODE5MDY1NSxcInJlY2VpcHRzX2dkcFwiOjAuMjEsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiT21hblwiLFwicmVjZWlwdHNcIjoyMjY4MDAwMDAwMCxcImdkcFwiOjcyNjQyNjUyNzk2LFwicmVjZWlwdHNfZ2RwXCI6MC4zMSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJNeWFubWFyXCIsXCJyZWNlaXB0c1wiOjkyMTEwMDAwMDAsXCJnZHBcIjo2OTMyMjEyMjc1NixcInJlY2VpcHRzX2dkcFwiOjAuMTMsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiTHV4ZW1ib3VyZ1wiLFwicmVjZWlwdHNcIjoyNzYwMDAwMDAwMCxcImdkcFwiOjYyNDA0NDYxMjc1LFwicmVjZWlwdHNfZ2RwXCI6MC40NCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJQYW5hbWFcIixcInJlY2VpcHRzXCI6MTI2MDAwMDAwMDAsXCJnZHBcIjo2MTgzODE3NTgwMCxcInJlY2VpcHRzX2dkcFwiOjAuMixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJDb3N0YSBSaWNhXCIsXCJyZWNlaXB0c1wiOjgyNjIwMDAwMDAsXCJnZHBcIjo1NzA1NzM3MjQ2OCxcInJlY2VpcHRzX2dkcFwiOjAuMTQsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQnVsZ2FyaWFcIixcInJlY2VpcHRzXCI6MTk1MzAwMDAwMDAsXCJnZHBcIjo1NjgzMTUxODI5NCxcInJlY2VpcHRzX2dkcFwiOjAuMzQsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiVXJ1Z3VheVwiLFwicmVjZWlwdHNcIjoxNzY5MDAwMDAwMCxcImdkcFwiOjU2MTU2OTcyMTU4LFwicmVjZWlwdHNfZ2RwXCI6MC4zMixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJDcm9hdGlhXCIsXCJyZWNlaXB0c1wiOjI1NzkwMDAwMDAwLFwiZ2RwXCI6NTQ4NDkxODAyMjksXCJyZWNlaXB0c19nZHBcIjowLjQ3LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkJlbGFydXNcIixcInJlY2VpcHRzXCI6MjI4MDAwMDAwMDAsXCJnZHBcIjo1NDQ0MjM3NDM3MyxcInJlY2VpcHRzX2dkcFwiOjAuNDIsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiVGFuemFuaWFcIixcInJlY2VpcHRzXCI6Nzg3MjAwMDAwMCxcImdkcFwiOjUyMDkwMzIwMzI1LFwicmVjZWlwdHNfZ2RwXCI6MC4xNSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJMZWJhbm9uXCIsXCJyZWNlaXB0c1wiOjEwOTAwMDAwMDAwLFwiZ2RwXCI6NTE4NDQ0ODc3NDIsXCJyZWNlaXB0c19nZHBcIjowLjIxLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkxpYnlhXCIsXCJyZWNlaXB0c1wiOjE2MzMwMDAwMDAwLFwiZ2RwXCI6NTA5ODQzNjI0NzgsXCJyZWNlaXB0c19nZHBcIjowLjMyLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIk1hY2F1XCIsXCJyZWNlaXB0c1wiOjE0MjQwMDAwMDAwLFwiZ2RwXCI6NTAzNjEyMDEwOTYsXCJyZWNlaXB0c19nZHBcIjowLjI4LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlNsb3ZlbmlhXCIsXCJyZWNlaXB0c1wiOjIwMjAwMDAwMDAwLFwiZ2RwXCI6NDg3Njk2NTU0NzksXCJyZWNlaXB0c19nZHBcIjowLjQxLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlV6YmVraXN0YW5cIixcInJlY2VpcHRzXCI6MjAxMTAwMDAwMDAsXCJnZHBcIjo0ODcxNzY4NTk4NCxcInJlY2VpcHRzX2dkcFwiOjAuNDEsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiR2hhbmFcIixcInJlY2VpcHRzXCI6OTIzNjAwMDAwMCxcImdkcFwiOjQ3MzMwMDE2MzQzLFwicmVjZWlwdHNfZ2RwXCI6MC4yLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkxpdGh1YW5pYVwiLFwicmVjZWlwdHNcIjoxNjE4MDAwMDAwMCxcImdkcFwiOjQ3MTY4MzAzNzQ0LFwicmVjZWlwdHNfZ2RwXCI6MC4zNCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJUdXJrbWVuaXN0YW5cIixcInJlY2VpcHRzXCI6NDQzNjAwMDAwMCxcImdkcFwiOjQyMzU1NDI4NTcxLFwicmVjZWlwdHNfZ2RwXCI6MC4xLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlNlcmJpYVwiLFwicmVjZWlwdHNcIjoxNjI1MDAwMDAwMCxcImdkcFwiOjQxNDMxNjQ4ODAxLFwicmVjZWlwdHNfZ2RwXCI6MC4zOSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJBemVyYmFpamFuXCIsXCJyZWNlaXB0c1wiOjk4NTIwMDAwMDAsXCJnZHBcIjo0MDc0Nzc5MjIzOCxcInJlY2VpcHRzX2dkcFwiOjAuMjQsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQ290ZSBkJ0l2b2lyZVwiLFwicmVjZWlwdHNcIjo3MTIxMDAwMDAwLFwiZ2RwXCI6NDAzODg2MjQxMTcsXCJyZWNlaXB0c19nZHBcIjowLjE4LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlR1bmlzaWFcIixcInJlY2VpcHRzXCI6OTM5NzAwMDAwMCxcImdkcFwiOjQwMjU2Njc1MjA5LFwicmVjZWlwdHNfZ2RwXCI6MC4yMyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJKb3JkYW5cIixcInJlY2VpcHRzXCI6OTE1NzAwMDAwMCxcImdkcFwiOjQwMDY4MzA4NTE2LFwicmVjZWlwdHNfZ2RwXCI6MC4yMyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJCb2xpdmlhXCIsXCJyZWNlaXB0c1wiOjE1MDEwMDAwMDAwLFwiZ2RwXCI6Mzc1MDg2NDIxMTMsXCJyZWNlaXB0c19nZHBcIjowLjQsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQ29uZ28sIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsXCJyZWNlaXB0c1wiOjMyMzgwMDAwMDAsXCJnZHBcIjozNzI0MTMwMDk0OSxcInJlY2VpcHRzX2dkcFwiOjAuMDksXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQmFocmFpblwiLFwicmVjZWlwdHNcIjo1NDYzMDAwMDAwLFwiZ2RwXCI6MzUzMDcxMjc2NjAsXCJyZWNlaXB0c19nZHBcIjowLjE1LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkNhbWVyb29uXCIsXCJyZWNlaXB0c1wiOjUxNTQwMDAwMDAsXCJnZHBcIjozNDc5ODU5NjQ4MixcInJlY2VpcHRzX2dkcFwiOjAuMTUsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiTGF0dmlhXCIsXCJyZWNlaXB0c1wiOjEwMTMwMDAwMDAwLFwiZ2RwXCI6MzAyNjQ0NTQ2NDIsXCJyZWNlaXB0c19nZHBcIjowLjMzLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlBhcmFndWF5XCIsXCJyZWNlaXB0c1wiOjUzNjYwMDAwMDAsXCJnZHBcIjoyOTczNDg5NTI0OSxcInJlY2VpcHRzX2dkcFwiOjAuMTgsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiRXN0b25pYVwiLFwicmVjZWlwdHNcIjo5NzcyMDAwMDAwLFwiZ2RwXCI6MjU5MjEwNzk2MTIsXCJyZWNlaXB0c19nZHBcIjowLjM4LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlVnYW5kYVwiLFwicmVjZWlwdHNcIjo0MDE5MDAwMDAwLFwiZ2RwXCI6MjU4OTEwNTg5NDYsXCJyZWNlaXB0c19nZHBcIjowLjE2LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlphbWJpYVwiLFwicmVjZWlwdHNcIjo0ODk1MDAwMDAwLFwiZ2RwXCI6MjU4MDg2NjY0MjIsXCJyZWNlaXB0c19nZHBcIjowLjE5LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkVsIFNhbHZhZG9yXCIsXCJyZWNlaXB0c1wiOjU3NTYwMDAwMDAsXCJnZHBcIjoyNDgwNTQzOTYwMCxcInJlY2VpcHRzX2dkcFwiOjAuMjMsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiTmVwYWxcIixcInJlY2VpcHRzXCI6NTk1NDAwMDAwMCxcImdkcFwiOjI0NDcyMDEzMjM0LFwicmVjZWlwdHNfZ2RwXCI6MC4yNCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJJY2VsYW5kXCIsXCJyZWNlaXB0c1wiOjk5NjIwMDAwMDAsXCJnZHBcIjoyMzkwOTI4OTk3OSxcInJlY2VpcHRzX2dkcFwiOjAuNDIsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiSG9uZHVyYXNcIixcInJlY2VpcHRzXCI6NDM3NjAwMDAwMCxcImdkcFwiOjIyOTc4NTMyODk3LFwicmVjZWlwdHNfZ2RwXCI6MC4xOSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJTeXJpYVwiLFwicmVjZWlwdHNcIjoxMDMzMDAwMDAwLFwiZ2RwXCI6MjIxNjMwNzUxMjEsXCJyZWNlaXB0c19nZHBcIjowLjA1LFwieWVhclwiOjIwMTYsXCJzb3VyY2VcIjpcInVuXCJ9LHtcImNvdW50cnlcIjpcIkNhbWJvZGlhXCIsXCJyZWNlaXB0c1wiOjQyNjgwMDAwMDAsXCJnZHBcIjoyMjE1ODIwOTUwMyxcInJlY2VpcHRzX2dkcFwiOjAuMTksXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLFwicmVjZWlwdHNcIjo2OTE2MDAwMDAwLFwiZ2RwXCI6MjIxMDQ3NzU4MjgsXCJyZWNlaXB0c19nZHBcIjowLjMxLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkN5cHJ1c1wiLFwicmVjZWlwdHNcIjo3Njc3MDAwMDAwLFwiZ2RwXCI6MjE2NTE3OTE3NTEsXCJyZWNlaXB0c19nZHBcIjowLjM1LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlBhcHVhIE5ldyBHdWluZWFcIixcInJlY2VpcHRzXCI6MzY0OTAwMDAwMCxcImdkcFwiOjIxMDg4NzU4NDg1LFwicmVjZWlwdHNfZ2RwXCI6MC4xNyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJBZmdoYW5pc3RhblwiLFwicmVjZWlwdHNcIjoxOTkyMDAwMDAwLFwiZ2RwXCI6MjA4MTUzMDAyMjAsXCJyZWNlaXB0c19nZHBcIjowLjEsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiWWVtZW5cIixcInJlY2VpcHRzXCI6MzQ2NzAwMDAwMCxcImdkcFwiOjE2NTExMDAwMDAwLFwicmVjZWlwdHNfZ2RwXCI6MC4yMSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJpbWZcIn0se1wiY291bnRyeVwiOlwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLFwicmVjZWlwdHNcIjo3Nzk4MDAwMDAwLFwiZ2RwXCI6MTgxNjg1Nzk1NzgsXCJyZWNlaXB0c19nZHBcIjowLjQzLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlppbWJhYndlXCIsXCJyZWNlaXB0c1wiOjM2MDAwMDAwMDAsXCJnZHBcIjoxNzg0NTgyMTQwMCxcInJlY2VpcHRzX2dkcFwiOjAuMixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJCb3Rzd2FuYVwiLFwicmVjZWlwdHNcIjo1NjA5MDAwMDAwLFwiZ2RwXCI6MTc0MDY1MzA3ODEsXCJyZWNlaXB0c19nZHBcIjowLjMyLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIktvcmVhLCBOb3J0aFwiLFwicmVjZWlwdHNcIjozMjAwMDAwMDAwLFwiZ2RwXCI6MTczOTYwMDAwMDAsXCJyZWNlaXB0c19nZHBcIjowLjE4LFwieWVhclwiOjIwMTYsXCJzb3VyY2VcIjpcInVuXCJ9LHtcImNvdW50cnlcIjpcIkxhb3NcIixcInJlY2VpcHRzXCI6MzE0NDAwMDAwMCxcImdkcFwiOjE2ODUzMDc5NjE1LFwicmVjZWlwdHNfZ2RwXCI6MC4xOSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJTZW5lZ2FsXCIsXCJyZWNlaXB0c1wiOjM4NjMwMDAwMDAsXCJnZHBcIjoxNjM3NDc0Mzc1MyxcInJlY2VpcHRzX2dkcFwiOjAuMjQsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiTWFsaVwiLFwicmVjZWlwdHNcIjozMDY4MDAwMDAwLFwiZ2RwXCI6MTUyODgxNjMzNjcsXCJyZWNlaXB0c19nZHBcIjowLjIsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiR2VvcmdpYVwiLFwicmVjZWlwdHNcIjo0MjYwMDAwMDAwLFwiZ2RwXCI6MTUxNTkyODEyMTEsXCJyZWNlaXB0c19nZHBcIjowLjI4LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkphbWFpY2FcIixcInJlY2VpcHRzXCI6NDIwNzAwMDAwMCxcImdkcFwiOjE0NzY4MTM0OTEyLFwicmVjZWlwdHNfZ2RwXCI6MC4yOCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJHYWJvblwiLFwicmVjZWlwdHNcIjozMTIyMDAwMDAwLFwiZ2RwXCI6MTQ2MjI4ODA4ODYsXCJyZWNlaXB0c19nZHBcIjowLjIxLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIldlc3QgQmFua1wiLFwicmVjZWlwdHNcIjoxMzE0MDAwMDAwLFwiZ2RwXCI6MTQ0OTgxMDAwMDAsXCJyZWNlaXB0c19nZHBcIjowLjA5LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIk5pY2FyYWd1YVwiLFwicmVjZWlwdHNcIjozODAwMDAwMDAwLFwiZ2RwXCI6MTM4MTQyNjE1MzYsXCJyZWNlaXB0c19nZHBcIjowLjI4LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIk1hdXJpdGl1c1wiLFwicmVjZWlwdHNcIjoyOTEyMDAwMDAwLFwiZ2RwXCI6MTMzMzgxNDc1MjMsXCJyZWNlaXB0c19nZHBcIjowLjIyLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIk5hbWliaWFcIixcInJlY2VpcHRzXCI6Mzk2NzAwMDAwMCxcImdkcFwiOjEzMjQ0NTk3MzQ1LFwicmVjZWlwdHNfZ2RwXCI6MC4zLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkFsYmFuaWFcIixcInJlY2VpcHRzXCI6MzQ4NjAwMDAwMCxcImdkcFwiOjEzMDM5MzUyNzQ0LFwicmVjZWlwdHNfZ2RwXCI6MC4yNyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJCdXJraW5hIEZhc29cIixcInJlY2VpcHRzXCI6MjYzNTAwMDAwMCxcImdkcFwiOjEyODczMTE0ODAwLFwicmVjZWlwdHNfZ2RwXCI6MC4yLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIk1hbHRhXCIsXCJyZWNlaXB0c1wiOjQyOTUwMDAwMDAsXCJnZHBcIjoxMjUzNzc1MDczMixcInJlY2VpcHRzX2dkcFwiOjAuMzQsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiRXF1YXRvcmlhbCBHdWluZWFcIixcInJlY2VpcHRzXCI6MzE4NjAwMDAwMCxcImdkcFwiOjEyNDg2NzUzODcxLFwicmVjZWlwdHNfZ2RwXCI6MC4yNixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJNb3phbWJpcXVlXCIsXCJyZWNlaXB0c1wiOjI3NTgwMDAwMDAsXCJnZHBcIjoxMjMzMzg1OTkyNixcInJlY2VpcHRzX2dkcFwiOjAuMjIsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQmFoYW1hcywgVGhlXCIsXCJyZWNlaXB0c1wiOjIxMDAwMDAwMDAsXCJnZHBcIjoxMjE2MjEwMDAwMCxcInJlY2VpcHRzX2dkcFwiOjAuMTcsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQnJ1bmVpXCIsXCJyZWNlaXB0c1wiOjE0MzUwMDAwMDAsXCJnZHBcIjoxMjEyODA4OTAwMixcInJlY2VpcHRzX2dkcFwiOjAuMTIsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQXJtZW5pYVwiLFwicmVjZWlwdHNcIjoyNTM2MDAwMDAwLFwiZ2RwXCI6MTE1MzY1OTA2MzYsXCJyZWNlaXB0c19nZHBcIjowLjIyLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIk1hZGFnYXNjYXJcIixcInJlY2VpcHRzXCI6MTI5MjAwMDAwMCxcImdkcFwiOjExNDk5ODAzODA3LFwicmVjZWlwdHNfZ2RwXCI6MC4xMSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJNb25nb2xpYVwiLFwicmVjZWlwdHNcIjoyNjIzMDAwMDAwLFwiZ2RwXCI6MTE0ODgwNDY4ODEsXCJyZWNlaXB0c19nZHBcIjowLjIzLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIk1hY2Vkb25pYVwiLFwicmVjZWlwdHNcIjozMzE0MDAwMDAwLFwiZ2RwXCI6MTEzMzc4MjczMzIsXCJyZWNlaXB0c19nZHBcIjowLjI5LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkd1aW5lYVwiLFwicmVjZWlwdHNcIjoxNTU5MDAwMDAwLFwiZ2RwXCI6MTA0OTE0NzQ5MzAsXCJyZWNlaXB0c19nZHBcIjowLjE1LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkNoYWRcIixcInJlY2VpcHRzXCI6MTE3ODAwMDAwMCxcImdkcFwiOjk5ODEzMDM3MjYsXCJyZWNlaXB0c19nZHBcIjowLjEyLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIk5ldyBDYWxlZG9uaWFcIixcInJlY2VpcHRzXCI6MTk5NTAwMDAwMCxcImdkcFwiOjk0NDU3MTQ4NTEsXCJyZWNlaXB0c19nZHBcIjowLjIxLFwieWVhclwiOjIwMTYsXCJzb3VyY2VcIjpcInVuXCJ9LHtcImNvdW50cnlcIjpcIkJlbmluXCIsXCJyZWNlaXB0c1wiOjEzNzIwMDAwMDAsXCJnZHBcIjo5MjczNTU4MjcyLFwicmVjZWlwdHNfZ2RwXCI6MC4xNSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJSd2FuZGFcIixcInJlY2VpcHRzXCI6MTg3NDAwMDAwMCxcImdkcFwiOjkxMzY2ODk1MTQsXCJyZWNlaXB0c19nZHBcIjowLjIxLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkNvbmdvLCBSZXB1YmxpYyBvZiB0aGVcIixcInJlY2VpcHRzXCI6MjUxNjAwMDAwMCxcImdkcFwiOjg3MjI1NTMwMDEsXCJyZWNlaXB0c19nZHBcIjowLjI5LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkhhaXRpXCIsXCJyZWNlaXB0c1wiOjE1ODAwMDAwMDAsXCJnZHBcIjo4NDA4MTUwNTE4LFwicmVjZWlwdHNfZ2RwXCI6MC4xOSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJNb2xkb3ZhXCIsXCJyZWNlaXB0c1wiOjI3OTYwMDAwMDAsXCJnZHBcIjo4MTI4NDkzNDMyLFwicmVjZWlwdHNfZ2RwXCI6MC4zNCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJOaWdlclwiLFwicmVjZWlwdHNcIjoxNjgwMDAwMDAwLFwiZ2RwXCI6ODExOTczMjc5MyxcInJlY2VpcHRzX2dkcFwiOjAuMjEsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiS3lyZ3l6c3RhblwiLFwicmVjZWlwdHNcIjoyMDUwMDAwMDAwLFwiZ2RwXCI6NzU2NDczODgzNixcInJlY2VpcHRzX2dkcFwiOjAuMjcsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiU29tYWxpYVwiLFwicmVjZWlwdHNcIjoxNDUzMDAwMDAsXCJnZHBcIjo3MzY4NTYwNjk1LFwicmVjZWlwdHNfZ2RwXCI6MC4wMixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJUYWppa2lzdGFuXCIsXCJyZWNlaXB0c1wiOjIyMTQwMDAwMDAsXCJnZHBcIjo3MTQ1NzAxMDE5LFwicmVjZWlwdHNfZ2RwXCI6MC4zMSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJLb3Nvdm9cIixcInJlY2VpcHRzXCI6MTM5NjAwMDAwMCxcImdkcFwiOjcxMjg2OTA1NTcsXCJyZWNlaXB0c19nZHBcIjowLjIsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiTW9uYWNvXCIsXCJyZWNlaXB0c1wiOjg3ODQwMDAwMCxcImdkcFwiOjY0NjgwMDA4NzcsXCJyZWNlaXB0c19nZHBcIjowLjE0LFwieWVhclwiOjIwMTYsXCJzb3VyY2VcIjpcInVuXCJ9LHtcImNvdW50cnlcIjpcIk1hbGF3aVwiLFwicmVjZWlwdHNcIjoxMjk4MDAwMDAwLFwiZ2RwXCI6NjMwMzI3NzU5MSxcInJlY2VpcHRzX2dkcFwiOjAuMjEsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiTGllY2h0ZW5zdGVpblwiLFwicmVjZWlwdHNcIjo5OTUzMDAwMDAsXCJnZHBcIjo2MTkzNjc3NTQzLFwicmVjZWlwdHNfZ2RwXCI6MC4xNixcInllYXJcIjoyMDE2LFwic291cmNlXCI6XCJ1blwifSx7XCJjb3VudHJ5XCI6XCJCZXJtdWRhXCIsXCJyZWNlaXB0c1wiOjEwMTMwMDAwMDAsXCJnZHBcIjo2MTI3MzQxMDAwLFwicmVjZWlwdHNfZ2RwXCI6MC4xNyxcInllYXJcIjoyMDE2LFwic291cmNlXCI6XCJ1blwifSx7XCJjb3VudHJ5XCI6XCJFcml0cmVhXCIsXCJyZWNlaXB0c1wiOjIwMjkwMDAwMDAsXCJnZHBcIjo1ODEzMDAwMDAwLFwicmVjZWlwdHNfZ2RwXCI6MC4zNSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJpbWZcIn0se1wiY291bnRyeVwiOlwiR3VhbVwiLFwicmVjZWlwdHNcIjoxMTQ3MDAwMDAwLFwiZ2RwXCI6NTc5MzAwMDAwMCxcInJlY2VpcHRzX2dkcFwiOjAuMixcInllYXJcIjoyMDE2LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJGcmVuY2ggUG9seW5lc2lhXCIsXCJyZWNlaXB0c1wiOjE4OTEwMDAwMDAsXCJnZHBcIjo1NDE3OTM0MTUyLFwicmVjZWlwdHNfZ2RwXCI6MC4zNSxcInllYXJcIjoyMDE2LFwic291cmNlXCI6XCJ1blwifSx7XCJjb3VudHJ5XCI6XCJGaWppXCIsXCJyZWNlaXB0c1wiOjE0NDYwMDAwMDAsXCJnZHBcIjo1MDYxMjAyNzY3LFwicmVjZWlwdHNfZ2RwXCI6MC4yOSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJNYXVyaXRhbmlhXCIsXCJyZWNlaXB0c1wiOjEyNDgwMDAwMDAsXCJnZHBcIjo1MDI0NzA1OTM0LFwicmVjZWlwdHNfZ2RwXCI6MC4yNSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJUb2dvXCIsXCJyZWNlaXB0c1wiOjE0NjkwMDAwMDAsXCJnZHBcIjo0ODEyNTU0MzQ2LFwicmVjZWlwdHNfZ2RwXCI6MC4zMSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJNb250ZW5lZ3JvXCIsXCJyZWNlaXB0c1wiOjE2MjAwMDAwMDAsXCJnZHBcIjo0Nzc0MDg2MDk0LFwicmVjZWlwdHNfZ2RwXCI6MC4zNCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJNYWxkaXZlc1wiLFwicmVjZWlwdHNcIjoxNDgxMDAwMDAwLFwiZ2RwXCI6NDU5NzA4MzMwNCxcInJlY2VpcHRzX2dkcFwiOjAuMzIsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiRXN3YXRpbmlcIixcInJlY2VpcHRzXCI6MTE1MDAwMDAwMCxcImdkcFwiOjQ0MDg1NjQyNjAsXCJyZWNlaXB0c19nZHBcIjowLjI2LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkNheW1hbiBJc2xhbmRzXCIsXCJyZWNlaXB0c1wiOjg3MDIwMDAwMCxcImdkcFwiOjM4NDQwODA2MjYsXCJyZWNlaXB0c19nZHBcIjowLjIzLFwieWVhclwiOjIwMTYsXCJzb3VyY2VcIjpcInVuXCJ9LHtcImNvdW50cnlcIjpcIlNpZXJyYSBMZW9uZVwiLFwicmVjZWlwdHNcIjo2ODQzMDAwMDAsXCJnZHBcIjozNzc0MjcwMzkyLFwicmVjZWlwdHNfZ2RwXCI6MC4xOCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJHdXlhbmFcIixcInJlY2VpcHRzXCI6OTM5MTAwMDAwLFwiZ2RwXCI6MzY3NTYzMTk2MSxcInJlY2VpcHRzX2dkcFwiOjAuMjYsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQnVydW5kaVwiLFwicmVjZWlwdHNcIjo2MDc2MDAwMDAsXCJnZHBcIjozNDc3NTAyMTc4LFwicmVjZWlwdHNfZ2RwXCI6MC4xNyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJTdXJpbmFtZVwiLFwicmVjZWlwdHNcIjo1NDU3MDAwMDAsXCJnZHBcIjozMzI0Mzg1MzI1LFwicmVjZWlwdHNfZ2RwXCI6MC4xNixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJDdXJhY2FvXCIsXCJyZWNlaXB0c1wiOjkyODAwMDAwMCxcImdkcFwiOjMxMjE0NDk5NjYsXCJyZWNlaXB0c19nZHBcIjowLjMsXCJ5ZWFyXCI6MjAxNixcInNvdXJjZVwiOlwidW5cIn0se1wiY291bnRyeVwiOlwiQW5kb3JyYVwiLFwicmVjZWlwdHNcIjoxODcyMDAwMDAwLFwiZ2RwXCI6MzAxMjkxNDEzMSxcInJlY2VpcHRzX2dkcFwiOjAuNjIsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiVGltb3ItTGVzdGVcIixcInJlY2VpcHRzXCI6MzAwMDAwMDAwLFwiZ2RwXCI6Mjk1NDYyMTAwMCxcInJlY2VpcHRzX2dkcFwiOjAuMSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJTb3V0aCBTdWRhblwiLFwicmVjZWlwdHNcIjo0MzcwMDAwMDAsXCJnZHBcIjoyOTA0MTE0OTAzLFwicmVjZWlwdHNfZ2RwXCI6MC4xNSxcInllYXJcIjoyMDE2LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJHcmVlbmxhbmRcIixcInJlY2VpcHRzXCI6MTU3ODAwMDAwMCxcImdkcFwiOjI3MDU4OTE2MTcsXCJyZWNlaXB0c19nZHBcIjowLjU4LFwieWVhclwiOjIwMTYsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkFydWJhXCIsXCJyZWNlaXB0c1wiOjY5NTQwMDAwMCxcImdkcFwiOjI2NjcwMzkxMDYsXCJyZWNlaXB0c19nZHBcIjowLjI2LFwieWVhclwiOjIwMTYsXCJzb3VyY2VcIjpcInVuXCJ9LHtcImNvdW50cnlcIjpcIkxlc290aG9cIixcInJlY2VpcHRzXCI6MTA1NzAwMDAwMCxcImdkcFwiOjI2MzkzODYyOTEsXCJyZWNlaXB0c19nZHBcIjowLjQsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQmh1dGFuXCIsXCJyZWNlaXB0c1wiOjY5MjYwMDAwMCxcImdkcFwiOjI1MTE4NTI5NDEsXCJyZWNlaXB0c19nZHBcIjowLjI4LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkxpYmVyaWFcIixcInJlY2VpcHRzXCI6NjI2MTAwMDAwLFwiZ2RwXCI6MjE1ODAwMDAwMCxcInJlY2VpcHRzX2dkcFwiOjAuMjksXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsXCJyZWNlaXB0c1wiOjIzMDYwMDAwMCxcImdkcFwiOjE5NDk0MTE2NTksXCJyZWNlaXB0c19nZHBcIjowLjEyLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkRqaWJvdXRpXCIsXCJyZWNlaXB0c1wiOjY5OTgwMDAwMCxcImdkcFwiOjE4NDQ2NzQ0MzUsXCJyZWNlaXB0c19nZHBcIjowLjM4LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkJlbGl6ZVwiLFwicmVjZWlwdHNcIjo1MDAwMDAwMDAsXCJnZHBcIjoxODM4MDAwMDAwLFwicmVjZWlwdHNfZ2RwXCI6MC4yNyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJDYWJvIFZlcmRlXCIsXCJyZWNlaXB0c1wiOjQzNzEwMDAwMCxcImdkcFwiOjE3NTM3MzY3MTIsXCJyZWNlaXB0c19nZHBcIjowLjI1LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlNhaW50IEx1Y2lhXCIsXCJyZWNlaXB0c1wiOjQwMjMwMDAwMCxcImdkcFwiOjE3MTIzMDY1NTYsXCJyZWNlaXB0c19nZHBcIjowLjIzLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlNhbiBNYXJpbm9cIixcInJlY2VpcHRzXCI6NjY3NzAwMDAwLFwiZ2RwXCI6MTY1ODc3ODQ1NCxcInJlY2VpcHRzX2dkcFwiOjAuNCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsXCJyZWNlaXB0c1wiOjI5NTkwMDAwMCxcImdkcFwiOjE1MzIzOTc1NTYsXCJyZWNlaXB0c19nZHBcIjowLjE5LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlNleWNoZWxsZXNcIixcInJlY2VpcHRzXCI6NTcxODAwMDAwLFwiZ2RwXCI6MTQ4NTk5NDM4NyxcInJlY2VpcHRzX2dkcFwiOjAuMzgsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiR3VpbmVhLUJpc3NhdVwiLFwicmVjZWlwdHNcIjoyMjYwMDAwMDAsXCJnZHBcIjoxMzQ2OTMzNDkwLFwicmVjZWlwdHNfZ2RwXCI6MC4xNyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJTb2xvbW9uIElzbGFuZHNcIixcInJlY2VpcHRzXCI6NDM0NjAwMDAwLFwiZ2RwXCI6MTMwMzQ1MzYxNixcInJlY2VpcHRzX2dkcFwiOjAuMzMsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXCJyZWNlaXB0c1wiOjI0NjQwMDAwMCxcImdkcFwiOjEyNDIwMDAwMDAsXCJyZWNlaXB0c19nZHBcIjowLjIsXCJ5ZWFyXCI6MjAxNixcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiR3JlbmFkYVwiLFwicmVjZWlwdHNcIjoyNzkyMDAwMDAsXCJnZHBcIjoxMTE4ODE2Njc5LFwicmVjZWlwdHNfZ2RwXCI6MC4yNSxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJHYW1iaWEsIFRoZVwiLFwicmVjZWlwdHNcIjoxODcwMDAwMDAsXCJnZHBcIjoxMDE0NjIxNTIwLFwicmVjZWlwdHNfZ2RwXCI6MC4xOCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJCcml0aXNoIFZpcmdpbiBJc2xhbmRzXCIsXCJyZWNlaXB0c1wiOjQwMDAwMDAwMCxcImdkcFwiOjk3MTIzNzExMCxcInJlY2VpcHRzX2dkcFwiOjAuNDEsXCJ5ZWFyXCI6MjAxNixcInNvdXJjZVwiOlwidW5cIn0se1wiY291bnRyeVwiOlwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsXCJyZWNlaXB0c1wiOjM3MDQwMDAwMCxcImdkcFwiOjk0NTg1NDQ4MSxcInJlY2VpcHRzX2dkcFwiOjAuMzksXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsXCJyZWNlaXB0c1wiOjIzMjgwMDAwMCxcImdkcFwiOjkxNzU1MDQ5MixcInJlY2VpcHRzX2dkcFwiOjAuMjUsXCJ5ZWFyXCI6MjAxNixcInNvdXJjZVwiOlwidW5cIn0se1wiY291bnRyeVwiOlwiVmFudWF0dVwiLFwicmVjZWlwdHNcIjoyMDI0MDAwMDAsXCJnZHBcIjo4NjI4Nzk3ODksXCJyZWNlaXB0c19nZHBcIjowLjIzLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlNhbW9hXCIsXCJyZWNlaXB0c1wiOjIzMzgwMDAwMCxcImdkcFwiOjg1NjYyNjUwNixcInJlY2VpcHRzX2dkcFwiOjAuMjcsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIixcInJlY2VpcHRzXCI6MjIyMjAwMDAwLFwiZ2RwXCI6Nzg5NjI5NjMwLFwicmVjZWlwdHNfZ2RwXCI6MC4yOCxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJDb21vcm9zXCIsXCJyZWNlaXB0c1wiOjE0ODYwMDAwMCxcImdkcFwiOjY0ODkyMDk0MyxcInJlY2VpcHRzX2dkcFwiOjAuMjMsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiRG9taW5pY2FcIixcInJlY2VpcHRzXCI6MTQ4MTAwMDAwLFwiZ2RwXCI6NTYyNTQwNzQxLFwicmVjZWlwdHNfZ2RwXCI6MC4yNixcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJUb25nYVwiLFwicmVjZWlwdHNcIjoxMzQ2MDAwMDAsXCJnZHBcIjo0MjYwNTc0NTMsXCJyZWNlaXB0c19nZHBcIjowLjMyLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLFwicmVjZWlwdHNcIjoxMTQzMDAwMDAsXCJnZHBcIjozOTA4NzE1NjksXCJyZWNlaXB0c19nZHBcIjowLjI5LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIkFuZ3VpbGxhXCIsXCJyZWNlaXB0c1wiOjkxMTUwMDAwLFwiZ2RwXCI6MzM3NTIwNDcwLFwicmVjZWlwdHNfZ2RwXCI6MC4yNyxcInllYXJcIjoyMDE2LFwic291cmNlXCI6XCJ1blwifSx7XCJjb3VudHJ5XCI6XCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsXCJyZWNlaXB0c1wiOjIxMzgwMDAwMCxcImdkcFwiOjMzNjQyNzUzMyxcInJlY2VpcHRzX2dkcFwiOjAuNjQsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiUGFsYXVcIixcInJlY2VpcHRzXCI6MjEyMjAwMDAwLFwiZ2RwXCI6MjkxNTQ0MzAwLFwicmVjZWlwdHNfZ2RwXCI6MC43MyxcInllYXJcIjoyMDE3LFwic291cmNlXCI6XCJ3YlwifSx7XCJjb3VudHJ5XCI6XCJDb29rIElzbGFuZHNcIixcInJlY2VpcHRzXCI6ODY5MDAwMDAsXCJnZHBcIjoyOTAxOTQxOTUsXCJyZWNlaXB0c19nZHBcIjowLjMsXCJ5ZWFyXCI6MjAxNixcInNvdXJjZVwiOlwidW5cIn0se1wiY291bnRyeVwiOlwiTWFyc2hhbGwgSXNsYW5kc1wiLFwicmVjZWlwdHNcIjoxMTY3MDAwMDAsXCJnZHBcIjoxOTkzOTkyNDcsXCJyZWNlaXB0c19nZHBcIjowLjU5LFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIktpcmliYXRpXCIsXCJyZWNlaXB0c1wiOjE5NzkwMDAwMCxcImdkcFwiOjE5NjE1MDA2MSxcInJlY2VpcHRzX2dkcFwiOjEuMDEsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOlwiTmF1cnVcIixcInJlY2VpcHRzXCI6NTc4MDAwMDAsXCJnZHBcIjoxMTM4ODQ5MDgsXCJyZWNlaXB0c19nZHBcIjowLjUxLFwieWVhclwiOjIwMTcsXCJzb3VyY2VcIjpcIndiXCJ9LHtcImNvdW50cnlcIjpcIk1vbnRzZXJyYXRcIixcInJlY2VpcHRzXCI6MzcwNDAwMDAsXCJnZHBcIjo2MjA1MTM3NSxcInJlY2VpcHRzX2dkcFwiOjAuNixcInllYXJcIjoyMDE2LFwic291cmNlXCI6XCJ1blwifSx7XCJjb3VudHJ5XCI6XCJUdXZhbHVcIixcInJlY2VpcHRzXCI6NDI2ODAwMDAsXCJnZHBcIjozOTczMTMxNyxcInJlY2VpcHRzX2dkcFwiOjEuMDcsXCJ5ZWFyXCI6MjAxNyxcInNvdXJjZVwiOlwid2JcIn0se1wiY291bnRyeVwiOm51bGx9XSIsImltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsIH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuaW1wb3J0IHsgbWluLCBtYXggfSBmcm9tICdkMy1hcnJheSc7XHJcbmltcG9ydCB7IHNjYWxlTGluZWFyIH0gZnJvbSAnZDMtc2NhbGUnO1xyXG5pbXBvcnQgeyB0cmFuc2xhdG9yLCBzaW1wbGlmeU51bWJlciwgZXN0YWJsaXNoQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBheGlzQm90dG9tIH0gZnJvbSAnZDMtYXhpcyc7XHJcbmltcG9ydCB7IHRyYW5zaXRpb24gfSBmcm9tICdkMy10cmFuc2l0aW9uJztcclxuaW1wb3J0IHsgaW5rLCBwbGFjZUhvcml6b250YWxTdHJpcGVzIH0gZnJvbSAnLi9pbmsnO1xyXG5pbXBvcnQgeyBzZWxlY3RDb3VudHJ5SW5pdCB9IGZyb20gJy4vc2VsZWN0Q291bnRyeSdcclxuaW1wb3J0IHsgbWFzdGVyRGF0YSB9IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBzZWxlY3RlZENvdW50cmllcyB9IGZyb20gJy4vc2VsZWN0ZWRDb3VudHJ5TWFuYWdlcic7XHJcblxyXG5jb25zdCBkMyA9IHsgc2VsZWN0LCBzZWxlY3RBbGwsIG1pbiwgbWF4LCBzY2FsZUxpbmVhciwgYXhpc0JvdHRvbSwgdHJhbnNpdGlvbiB9LFxyXG4gICAgZGltZW5zaW9ucyA9IHtcclxuICAgICAgICByb3dIZWlnaHQ6IDcyLFxyXG4gICAgICAgIGJhckhlaWdodDogMTYsXHJcbiAgICAgICAgY291bnRyeUNvbHVtbldpZHRoOiAyMTAsXHJcbiAgICAgICAgZ2RwQ29sdW1uV2lkdGg6IDEzMCxcclxuICAgICAgICBoZWFkZXI6IDUwLFxyXG4gICAgICAgIGJhcllPZmZzZXQ6IDNcclxuICAgIH0sXHJcbiAgICBhZGRSZW1vdmVEdXJhdGlvbiA9IDEwMDAsXHJcbiAgICBzY2FsZXMgPSB7fSxcclxuICAgIGNvbnRhaW5lcnMgPSB7fSxcclxuICAgIG1hcCA9IHtcclxuICAgICAgICBpbmNvbWU6IHtcclxuICAgICAgICAgICAgZGF0YTogJ3JlY2VpcHRzJyxcclxuICAgICAgICAgICAgY2xhc3M6ICdyZWNlaXB0cycsXHJcbiAgICAgICAgICAgIHN0cm9rZTogJyMyRTg1NDAnLFxyXG4gICAgICAgICAgICBmaWxsOiAncmdiYSg0NiwxMzMsNjQsMC41KScsXHJcbiAgICAgICAgICAgIHlPZmZzZXQ6IDMsXHJcbiAgICAgICAgICAgIGxlZ2VuZDogJ0luY29tZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdkcDoge1xyXG4gICAgICAgICAgICBkYXRhOiAnZ2RwJyxcclxuICAgICAgICAgICAgY2xhc3M6ICdnZHAnLFxyXG4gICAgICAgICAgICBzdHJva2U6ICcjNEE5MEUyJyxcclxuICAgICAgICAgICAgZmlsbDogJ3JnYmEoNzQsMTQ0LDIyNiwwLjUpJyxcclxuICAgICAgICAgICAgeU9mZnNldDogMCAtIGRpbWVuc2lvbnMuYmFySGVpZ2h0IC0gMyxcclxuICAgICAgICAgICAgbGVnZW5kOiAnR0RQIC0gR3Jvc3MgRG9tZXN0aWMgUHJvZHVjdCdcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxubGV0IHhBeGlzLCBkYXRhO1xyXG5cclxuZGltZW5zaW9ucy5kYXRhV2lkdGggPSAxMjAwIC0gZGltZW5zaW9ucy5jb3VudHJ5Q29sdW1uV2lkdGggLSBkaW1lbnNpb25zLmdkcENvbHVtbldpZHRoO1xyXG5cclxuZnVuY3Rpb24gZXN0YWJsaXNoQ29udGFpbmVycyhjb250YWluZXIpIHtcclxuICAgIGNvbnRhaW5lcnMuY2hhcnQgPSBjb250YWluZXIuYXBwZW5kKCdnJyk7XHJcbiAgICBjb250YWluZXJzLmRhdGEgPSBjb250YWluZXJzLmNoYXJ0LmFwcGVuZCgnZycpLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0b3IoZGltZW5zaW9ucy5jb3VudHJ5Q29sdW1uV2lkdGgsIGRpbWVuc2lvbnMuaGVhZGVyKSk7XHJcbiAgICBjb250YWluZXJzLmNvdW50cnkgPSBjb250YWluZXJzLmNoYXJ0LmFwcGVuZCgnZycpLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0b3IoMCwgZGltZW5zaW9ucy5oZWFkZXIpKTtcclxuICAgIGNvbnRhaW5lcnMuZ2RwID0gY29udGFpbmVycy5jaGFydC5hcHBlbmQoJ2cnKS5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2xhdG9yKGRpbWVuc2lvbnMuY291bnRyeUNvbHVtbldpZHRoICsgZGltZW5zaW9ucy5kYXRhV2lkdGgsIGRpbWVuc2lvbnMuaGVhZGVyKSk7XHJcbiAgICBjb250YWluZXJzLmxlZ2VuZHMgPSBjb250YWluZXJzLmNoYXJ0LmFwcGVuZCgnZycpLmNsYXNzZWQoJ2xlZ2VuZHMnLCB0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQmFyTGFiZWxzKGcsIGRhdGEsIGtleXMpIHtcclxuICAgIGNvbnN0IHRleHQgPSBnLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgLmRhdGEoa2V5cy5tYXAoayA9PiBtYXBba10uZGF0YSkpXHJcbiAgICAgICAgLmVudGVyKClcclxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2ltcGxpZnlOdW1iZXIoZGF0YVtkXSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKCdmb250LXNpemUnLCAxMilcclxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY2FsZXMueChkYXRhW2RdKSArIDIwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbiAoZCwgaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGRpbWVuc2lvbnMucm93SGVpZ2h0IC8gMiAtIGRpbWVuc2lvbnMuYmFySGVpZ2h0IC0gZGltZW5zaW9ucy5iYXJZT2Zmc2V0KSArIGkgKiAoZGltZW5zaW9ucy5iYXJZT2Zmc2V0ICogMiArIGRpbWVuc2lvbnMuYmFySGVpZ2h0KSArIDEyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKVxyXG5cclxuICAgIHRleHQudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmR1cmF0aW9uKDUwMClcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDEpXHJcbiAgICAgICAgLmVhc2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQmFyR3JvdXBzKCkge1xyXG4gICAgY29uc3QgZ3JvdXBzID0gY29udGFpbmVycy5kYXRhLnNlbGVjdEFsbCgnZy5iYXItZ3JvdXAnKVxyXG4gICAgICAgIC5kYXRhKGRhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmNvdW50cnkgfSk7XHJcblxyXG4gICAgaWYgKGdyb3Vwcy5zaXplKCkpIHtcclxuICAgICAgICBncm91cHMudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAgIC5kdXJhdGlvbihhZGRSZW1vdmVEdXJhdGlvbilcclxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRvcigwLCAoaSAqIGRpbWVuc2lvbnMucm93SGVpZ2h0KSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmVhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBncm91cHMuZXhpdCgpLnJlbW92ZSgpO1xyXG5cclxuICAgIGdyb3Vwcy5lbnRlcigpXHJcbiAgICAgICAgLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLmNsYXNzZWQoJ2Jhci1ncm91cCcsIHRydWUpXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdG9yKDAsIGkgKiBkaW1lbnNpb25zLnJvd0hlaWdodClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lYWNoKGRyYXdCYXJzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3QmFycyhkYXRhKSB7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSAxMDAwLFxyXG4gICAgICAgIGdyb3VwID0gZDMuc2VsZWN0KHRoaXMpLFxyXG4gICAgICAgIGtleXMgPSBbJ2dkcCcsICdpbmNvbWUnXSxcclxuICAgICAgICBiYXJzID0gZ3JvdXAuc2VsZWN0QWxsKCdyZWN0JylcclxuICAgICAgICAgICAgLmRhdGEoa2V5cylcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZCgncmVjdCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHNjYWxlcy54KDApKVxyXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgZGltZW5zaW9ucy5iYXJIZWlnaHQpXHJcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcclxuICAgICAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbiAoZCwgaSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChkaW1lbnNpb25zLnJvd0hlaWdodCAvIDIgLSBkaW1lbnNpb25zLmJhckhlaWdodCAtIGRpbWVuc2lvbnMuYmFyWU9mZnNldCkgKyBpICogKGRpbWVuc2lvbnMuYmFyWU9mZnNldCAqIDIgKyBkaW1lbnNpb25zLmJhckhlaWdodCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXBbZF0uZmlsbDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwW2RdLnN0cm9rZTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICBiYXJzLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbih0cmFuc2l0aW9uRHVyYXRpb24pXHJcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNjYWxlcy54KGRhdGFbbWFwW2RdLmRhdGFdKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lYXNlKCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYWRkQmFyTGFiZWxzKGdyb3VwLCBkYXRhLCBrZXlzKTtcclxuICAgIH0sIHRyYW5zaXRpb25EdXJhdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNjYWxlcygpIHtcclxuICAgIGNvbnN0IHJlY2VpcHRzVmFscyA9IGRhdGEubWFwKHIgPT4gci5yZWNlaXB0cyksXHJcbiAgICAgICAgZ2RwVmFscyA9IGRhdGEubWFwKHIgPT4gci5nZHApLFxyXG4gICAgICAgIG1pbiA9IGQzLm1pbihbMCwgZDMubWluKHJlY2VpcHRzVmFscy5jb25jYXQoZ2RwVmFscykpXSksXHJcbiAgICAgICAgbWF4ID0gZDMubWF4KHJlY2VpcHRzVmFscy5jb25jYXQoZ2RwVmFscykpICogMS4xO1xyXG5cclxuICAgIHNjYWxlcy54ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgIC5kb21haW4oW21pbiwgbWF4XSkubmljZSgpXHJcbiAgICAgICAgLnJhbmdlKFswLCBkaW1lbnNpb25zLmRhdGFXaWR0aF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB4QXhpc01vZHMoKSB7XHJcbiAgICBjb250YWluZXJzLmF4aXNHcm91cC5zZWxlY3RBbGwoJy50aWNrIGxpbmUnKVxyXG4gICAgICAgIC5hdHRyKCd5MScsIDAgLSBkaW1lbnNpb25zLnRvdGFsSGVpZ2h0KVxyXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAnI2VlZScpO1xyXG5cclxuICAgIGNvbnRhaW5lcnMuYXhpc0dyb3VwLnNlbGVjdEFsbCgnLmRvbWFpbicpLnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3WEF4aXMoKSB7XHJcbiAgICB4QXhpcyA9IGQzLmF4aXNCb3R0b20oc2NhbGVzLngpXHJcbiAgICAgICAgLnRpY2tGb3JtYXQoZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgaWYgKG4gPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2ltcGxpZnlOdW1iZXIobik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIGNvbnRhaW5lcnMuYXhpc0dyb3VwID0gY29udGFpbmVycy5kYXRhLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0b3IoMCwgZGltZW5zaW9ucy50b3RhbEhlaWdodCkpXHJcbiAgICAgICAgLmNhbGwoeEF4aXMpO1xyXG5cclxuICAgIHhBeGlzTW9kcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZUNvdW50cnlMYWJlbHMoKSB7XHJcbiAgICBjb25zdCBjb3VudHJ5TGFiZWxzID0gY29udGFpbmVycy5jb3VudHJ5LnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY291bnRyeSB9KTtcclxuXHJcbiAgICBsZXQgdGltZW91dEZvckFkZCA9IDA7XHJcblxyXG4gICAgaWYgKGNvdW50cnlMYWJlbHMuc2l6ZSgpKSB7XHJcbiAgICAgICAgdGltZW91dEZvckFkZCA9IDUwMDtcclxuXHJcbiAgICAgICAgY291bnRyeUxhYmVscy50cmFuc2l0aW9uKClcclxuICAgICAgICAgICAgLmR1cmF0aW9uKGFkZFJlbW92ZUR1cmF0aW9uKVxyXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdG9yKDAsIChpICogZGltZW5zaW9ucy5yb3dIZWlnaHQpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZWFzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvdW50cnlMYWJlbHMuZXhpdCgpLnJlbW92ZSgpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvdW50cnlMYWJlbHMuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRvcigwLCBpICogZGltZW5zaW9ucy5yb3dIZWlnaHQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5jb3VudHJ5KVxyXG4gICAgICAgICAgICAuYXR0cigneScsIGRpbWVuc2lvbnMucm93SGVpZ2h0IC8gMiArIDgpXHJcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gdHJhbnNsYXRvcigwLCBpICogZGltZW5zaW9ucy5yb3dIZWlnaHQpKVxyXG4gICAgICAgICAgICAuYXR0cigneCcsIDIwKVxyXG4gICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgMTYpO1xyXG4gICAgfSwgdGltZW91dEZvckFkZClcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWNlR2RwRmlndXJlcygpIHtcclxuICAgIGNvbnN0IGdkcFRleHQgPSBjb250YWluZXJzLmdkcC5zZWxlY3RBbGwoJ3RleHQnKVxyXG4gICAgICAgIC5kYXRhKGRhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmNvdW50cnkgfSk7XHJcblxyXG4gICAgbGV0IHRpbWVvdXRGb3JBZGQgPSAwO1xyXG5cclxuICAgIGlmIChnZHBUZXh0LnNpemUoKSkge1xyXG4gICAgICAgIHRpbWVvdXRGb3JBZGQgPSA1MDA7XHJcblxyXG4gICAgICAgIGdkcFRleHQudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAgIC5kdXJhdGlvbihhZGRSZW1vdmVEdXJhdGlvbilcclxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRvcigwLCAoaSAqIGRpbWVuc2lvbnMucm93SGVpZ2h0KSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmVhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZHBUZXh0LmV4aXQoKS5yZW1vdmUoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBnZHBUZXh0LmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0b3IoMCwgaSAqIGRpbWVuc2lvbnMucm93SGVpZ2h0KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGV4dChkID0+IGQucmVjZWlwdHNfZ2RwKVxyXG4gICAgICAgICAgICAuYXR0cigneScsIGRpbWVuc2lvbnMucm93SGVpZ2h0IC8gMiArIDgpXHJcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gdHJhbnNsYXRvcigwLCBpICogZGltZW5zaW9ucy5yb3dIZWlnaHQpKVxyXG4gICAgICAgICAgICAuYXR0cigneCcsIDUwKVxyXG4gICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgMTYpO1xyXG4gICAgfSwgdGltZW91dEZvckFkZClcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2VMZWdlbmRzKCkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1hcCkuc29ydCgpLFxyXG4gICAgICAgIGxlZ2VuZFNwYWNpbmcgPSAyNDA7XHJcblxyXG4gICAgY29udGFpbmVycy5sZWdlbmRzLnNlbGVjdEFsbCgncmVjdC5sZWdlbmQnKVxyXG4gICAgICAgIC5kYXRhKGtleXMpXHJcbiAgICAgICAgLmVudGVyKClcclxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcclxuICAgICAgICAuY2xhc3NlZCgnbGVnZW5kJywgdHJ1ZSlcclxuICAgICAgICAuYXR0cignd2lkdGgnLCBkaW1lbnNpb25zLmJhckhlaWdodClcclxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZGltZW5zaW9ucy5iYXJIZWlnaHQpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGltZW5zaW9ucy5jb3VudHJ5Q29sdW1uV2lkdGggKyAyMCArIGkgKiBsZWdlbmRTcGFjaW5nO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmF0dHIoJ3knLCAxNSlcclxuICAgICAgICAuYXR0cignc3Ryb2tlJywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hcFtkXS5zdHJva2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBbZF0uZmlsbDtcclxuICAgICAgICB9KVxyXG5cclxuICAgIGNvbnRhaW5lcnMubGVnZW5kcy5zZWxlY3RBbGwoJ3RleHQubGVnZW5kJylcclxuICAgICAgICAuZGF0YShrZXlzKVxyXG4gICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hcFtkXS5sZWdlbmQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgMTIpXHJcbiAgICAgICAgLmNsYXNzZWQoJ2xlZ2VuZCcsIHRydWUpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGltZW5zaW9ucy5jb3VudHJ5Q29sdW1uV2lkdGggKyBkaW1lbnNpb25zLmJhckhlaWdodCArIDMwICsgaSAqIGxlZ2VuZFNwYWNpbmc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYXR0cigneScsIDI3KVxyXG5cclxuICAgIGNvbnRhaW5lcnMubGVnZW5kcy5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAgIC50ZXh0KCdGZWRlcmFsIEluY29tZSBhcycpXHJcbiAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCAxMjAwIC0gZGltZW5zaW9ucy5nZHBDb2x1bW5XaWR0aCAvIDIpXHJcbiAgICAgICAgLmF0dHIoJ3knLCAyNilcclxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgMTIpXHJcbiAgICAgICAgLmFwcGVuZCgndHNwYW4nKVxyXG4gICAgICAgIC50ZXh0KCdQZXJjZW50IG9mIEdEUCcpXHJcbiAgICAgICAgLmF0dHIoJ2R5JywgMTIpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCAxMjAwIC0gZGltZW5zaW9ucy5nZHBDb2x1bW5XaWR0aCAvIDIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpemVTdmcodHJhbnNpdGlvblRpbWUsIGRlbGF5KSB7XHJcbiAgICBkZWxheSA9IGRlbGF5IHx8IDA7XHJcbiAgICBlc3RhYmxpc2hDb250YWluZXIoKS50cmFuc2l0aW9uKCkuZGVsYXkoZGVsYXkpLmR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKS5hdHRyKCdoZWlnaHQnLCBkaW1lbnNpb25zLmhlYWRlciArIGRhdGEubGVuZ3RoICogZGltZW5zaW9ucy5yb3dIZWlnaHQgKyAzMCApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREYXRhKCkge1xyXG4gICAgZGF0YSA9IHNlbGVjdGVkQ291bnRyaWVzLmxpc3QubWFwKGMgPT4ge1xyXG4gICAgICAgIGlmIChtYXN0ZXJEYXRhLmluZGV4ZWRbY10pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hc3RlckRhdGEuaW5kZXhlZFtjXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ25vIGRhdGEgZm9yICcgKyBjKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5maWx0ZXIociA9PiByKTtcclxuXHJcbiAgICBkaW1lbnNpb25zLnRvdGFsSGVpZ2h0ID0gZGltZW5zaW9ucy5yb3dIZWlnaHQgKiBkYXRhLmxlbmd0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwb3NpdGlvblhBeGlzKCkge1xyXG4gICAgY29udGFpbmVycy5heGlzR3JvdXAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmR1cmF0aW9uKGFkZFJlbW92ZUR1cmF0aW9uKVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2xhdG9yKDAsIGRpbWVuc2lvbnMudG90YWxIZWlnaHQpKVxyXG4gICAgICAgIC5lYXNlKCk7XHJcblxyXG4gICAgY29udGFpbmVycy5heGlzR3JvdXAuc2VsZWN0QWxsKCcudGljayBsaW5lJykudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmR1cmF0aW9uKGFkZFJlbW92ZUR1cmF0aW9uKVxyXG4gICAgICAgIC5hdHRyKCd5MScsIDAgLSBkaW1lbnNpb25zLnRvdGFsSGVpZ2h0KTtcclxuXHJcbiAgICBjb250YWluZXJzLmNoYXJ0LnNlbGVjdEFsbCgnLmRyb3Atc2hhZG93LWJhc2UnKS50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24oYWRkUmVtb3ZlRHVyYXRpb24pXHJcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGRpbWVuc2lvbnMudG90YWxIZWlnaHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNjYWxlKCkge1xyXG4gICAgY29uc3QgcHJldmlvdXNNYXggPSBzY2FsZXMueC5kb21haW4oKVsxXTtcclxuXHJcbiAgICBzZXRTY2FsZXMoKTtcclxuXHJcbiAgICBpZiAocHJldmlvdXNNYXggPT09IHNjYWxlcy54LmRvbWFpbigpWzFdKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHhBeGlzLnNjYWxlKHNjYWxlcy54KTtcclxuXHJcbiAgICBjb250YWluZXJzLmRhdGEuc2VsZWN0QWxsKCdnLmJhci1ncm91cCcpXHJcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBkMy5zZWxlY3QodGhpcyksXHJcbiAgICAgICAgICAgICAgICBrZXlzID0gWydnZHAnLCAnaW5jb21lJ10sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHMgPSBncm91cC5zZWxlY3RBbGwoJ3RleHQnKSxcclxuICAgICAgICAgICAgICAgIGJhcnMgPSBncm91cC5zZWxlY3RBbGwoJ3JlY3QnKTtcclxuXHJcbiAgICAgICAgICAgIGJhcnMudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oYWRkUmVtb3ZlRHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZXMueChkYXRhW21hcFtkXS5kYXRhXSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmVhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGxhYmVscy50cmFuc2l0aW9uKClcclxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbihhZGRSZW1vdmVEdXJhdGlvbilcclxuICAgICAgICAgICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVzLngoZGF0YVtkXSkgKyAyMDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBjb250YWluZXJzLmF4aXNHcm91cC50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24oYWRkUmVtb3ZlRHVyYXRpb24pXHJcbiAgICAgICAgLmNhbGwoeEF4aXMpXHJcbiAgICAgICAgLmVhc2UoKTtcclxuXHJcbiAgICB4QXhpc01vZHMoKTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hEYXRhKCkge1xyXG4gICAgY29uc3QgYWN0aW9uID0gc2VsZWN0ZWRDb3VudHJpZXMubGFzdFVwZGF0ZS5hY3Rpb247XHJcblxyXG4gICAgbGV0IGR1cmF0aW9uID0gYWRkUmVtb3ZlRHVyYXRpb247XHJcblxyXG4gICAgc2V0RGF0YSgpO1xyXG5cclxuICAgIGlmIChhY3Rpb24gPT09ICdhZGQnKSB7XHJcbiAgICAgICAgc2l6ZVN2ZyhhZGRSZW1vdmVEdXJhdGlvbik7XHJcbiAgICAgICAgZHVyYXRpb24gPSAocmVzY2FsZSgpKSA/IGR1cmF0aW9uIDogMDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlcG9zaXRpb25YQXhpcygpO1xyXG4gICAgICAgICAgICBhZGRCYXJHcm91cHMoKTtcclxuICAgICAgICAgICAgcGxhY2VDb3VudHJ5TGFiZWxzKCk7XHJcbiAgICAgICAgICAgIHBsYWNlR2RwRmlndXJlcygpO1xyXG4gICAgICAgICAgICBwbGFjZUhvcml6b250YWxTdHJpcGVzKGRhdGEubGVuZ3RoKTtcclxuICAgICAgICB9LCBkdXJhdGlvbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWRkQmFyR3JvdXBzKCk7XHJcbiAgICAgICAgcGxhY2VDb3VudHJ5TGFiZWxzKCk7XHJcbiAgICAgICAgcGxhY2VHZHBGaWd1cmVzKCk7XHJcblxyXG4gICAgICAgIGR1cmF0aW9uID0gKHJlc2NhbGUoKSkgPyBkdXJhdGlvbiA6IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNpemVTdmcoMzAwLCBhZGRSZW1vdmVEdXJhdGlvbik7XHJcbiAgICAgICAgICAgIHJlcG9zaXRpb25YQXhpcygpO1xyXG4gICAgICAgICAgICBwbGFjZUhvcml6b250YWxTdHJpcGVzKGRhdGEubGVuZ3RoKTsgICAgICAgICAgICBcclxuICAgICAgICB9LCBkdXJhdGlvbilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYXJ0SW5pdChjb250YWluZXIpIHtcclxuICAgIHNldERhdGEoKTtcclxuICAgIHNpemVTdmcoODAwKTtcclxuICAgIGVzdGFibGlzaENvbnRhaW5lcnMoY29udGFpbmVyKTtcclxuICAgIGluayhjb250YWluZXJzLCBkaW1lbnNpb25zLCBkYXRhLmxlbmd0aCk7XHJcbiAgICBzZXRTY2FsZXMoKTtcclxuICAgIGRyYXdYQXhpcygpO1xyXG4gICAgYWRkQmFyR3JvdXBzKCk7XHJcbiAgICBwbGFjZUNvdW50cnlMYWJlbHMoKTtcclxuICAgIHBsYWNlR2RwRmlndXJlcygpO1xyXG4gICAgcGxhY2VMZWdlbmRzKCk7XHJcbiAgICBzZWxlY3RDb3VudHJ5SW5pdCgpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVEYXRhKF9kYXRhKXtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGluZGV4ZWQ6IHt9LFxyXG4gICAgICAgICAgICBjb3VudHJ5TGlzdDogW11cclxuICAgICAgICB9XHJcblxyXG4gICAgX2RhdGEuZm9yRWFjaChyID0+IHtcclxuICAgICAgICBkYXRhLmNvdW50cnlMaXN0LnB1c2goci5jb3VudHJ5KTtcclxuXHJcbiAgICAgICAgZGF0YS5pbmRleGVkW3IuY291bnRyeV0gPSByO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn0iLCJpbXBvcnQgeyBlc3RhYmxpc2hDb250YWluZXIgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG4vLyB3aXRoIHRoYW5rcyB0byBodHRwOi8vYmwub2Nrcy5vcmcvY3Bib3RoYS81MjAwMzk0XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERyb3BTaGFkb3coKSB7XHJcbiAgICBjb25zdCBzdmcgPSBlc3RhYmxpc2hDb250YWluZXIoKTtcclxuXHJcbiAgICB2YXIgZGVmcyA9IHN2Zy5hcHBlbmQoJ2RlZnMnKTtcclxuXHJcbiAgICB2YXIgZmlsdGVyID0gZGVmcy5hcHBlbmQoJ2ZpbHRlcicpXHJcbiAgICAgICAgLmF0dHIoJ2lkJywgJ2Ryb3Atc2hhZG93JylcclxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMS4xKTtcclxuXHJcbiAgICBmaWx0ZXIuYXBwZW5kKCdmZUdhdXNzaWFuQmx1cicpXHJcbiAgICAgICAgLmF0dHIoJ2luJywgJ1NvdXJjZUFscGhhJylcclxuICAgICAgICAuYXR0cignc3RkRGV2aWF0aW9uJywgNClcclxuICAgICAgICAuYXR0cigncmVzdWx0JywgJ2JsdXInKTtcclxuXHJcbiAgICBmaWx0ZXIuYXBwZW5kKCdmZU9mZnNldCcpXHJcbiAgICAgICAgLmF0dHIoJ2luJywgJ2JsdXInKVxyXG4gICAgICAgIC5hdHRyKCdkeCcsIDApXHJcbiAgICAgICAgLmF0dHIoJ2R5JywgMClcclxuICAgICAgICAuYXR0cigncmVzdWx0JywgJ29mZnNldEJsdXInKTtcclxuXHJcbiAgICB2YXIgZmVNZXJnZSA9IGZpbHRlci5hcHBlbmQoJ2ZlTWVyZ2UnKTtcclxuXHJcbiAgICBmZU1lcmdlLmFwcGVuZCgnZmVNZXJnZU5vZGUnKVxyXG4gICAgICAgIC5hdHRyKCdpbicsICdvZmZzZXRCbHVyJylcclxuICAgIGZlTWVyZ2UuYXBwZW5kKCdmZU1lcmdlTm9kZScpXHJcbiAgICAgICAgLmF0dHIoJ2luJywgJ1NvdXJjZUdyYXBoaWMnKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRCdXR0b25JY29uKHN2Zykge1xyXG4gICAgc3ZnLmFwcGVuZCgnY2lyY2xlJylcclxuICAgICAgICAuYXR0cigncicsIDkpXHJcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICd3aGl0ZScpXHJcbiAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDEpXHJcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgICAgLmF0dHIoJ2N4JywgMTApXHJcbiAgICAgICAgLmF0dHIoJ2N5JywgMTApXHJcblxyXG4gICAgc3ZnLmFwcGVuZCgnbGluZScpXHJcbiAgICAgICAgLmF0dHIoJ3gxJywgNSlcclxuICAgICAgICAuYXR0cigneDInLCAxNSlcclxuICAgICAgICAuYXR0cigneTEnLCAxMClcclxuICAgICAgICAuYXR0cigneTInLCAxMClcclxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3doaXRlJylcclxuICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMSlcclxuXHJcbiAgICBzdmcuYXBwZW5kKCdsaW5lJylcclxuICAgICAgICAuYXR0cigneDEnLCAxMClcclxuICAgICAgICAuYXR0cigneDInLCAxMClcclxuICAgICAgICAuYXR0cigneTEnLCA1KVxyXG4gICAgICAgIC5hdHRyKCd5MicsIDE1KVxyXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxyXG4gICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkWEljb24oc3ZnKSB7XHJcbiAgICBzdmcuYXR0cignd2lkdGgnLCAxMClcclxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTApXHJcblxyXG4gICAgc3ZnLmFwcGVuZCgnbGluZScpXHJcbiAgICAgICAgLmF0dHIoJ3gxJywgMClcclxuICAgICAgICAuYXR0cigneDInLCAxMClcclxuICAgICAgICAuYXR0cigneTEnLCAwKVxyXG4gICAgICAgIC5hdHRyKCd5MicsIDEwKVxyXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxyXG4gICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKVxyXG5cclxuICAgIHN2Zy5hcHBlbmQoJ2xpbmUnKVxyXG4gICAgICAgIC5hdHRyKCd4MScsIDApXHJcbiAgICAgICAgLmF0dHIoJ3gyJywgMTApXHJcbiAgICAgICAgLmF0dHIoJ3kxJywgMTApXHJcbiAgICAgICAgLmF0dHIoJ3kyJywgMClcclxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3doaXRlJylcclxuICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNlYXJjaEljb24oc3ZnKSB7XHJcbiAgICBjb25zdCBsaW5lQ29sb3IgPSAnIzU1NSc7XHJcbiAgICBcclxuICAgIHN2Zy5hdHRyKCd3aWR0aCcsIDIwKVxyXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAyMClcclxuXHJcbiAgICBzdmcuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAgIC5hdHRyKCdyJywgNylcclxuICAgICAgICAuYXR0cignc3Ryb2tlJywgbGluZUNvbG9yKVxyXG4gICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgICAgIC5hdHRyKCdjeCcsIDgpXHJcbiAgICAgICAgLmF0dHIoJ2N5JywgOClcclxuXHJcbiAgICBzdmcuYXBwZW5kKCdsaW5lJylcclxuICAgICAgICAuYXR0cigneDEnLCAxMylcclxuICAgICAgICAuYXR0cigneDInLCAxOSlcclxuICAgICAgICAuYXR0cigneTEnLCAxMylcclxuICAgICAgICAuYXR0cigneTInLCAxOSlcclxuICAgICAgICAuYXR0cignc3Ryb2tlJywgbGluZUNvbG9yKVxyXG4gICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKVxyXG59IiwiaW1wb3J0IENvdW50cnlEYXRhIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9jc3YvaW5jb21lLWNvdW50cnktY29tcGFyaXNvbi5jc3YnO1xyXG5pbXBvcnQgeyBwcmVwYXJlRGF0YSB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCB7IGVzdGFibGlzaENvbnRhaW5lciB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgY2hhcnRJbml0IH0gZnJvbSAnLi9jaGFydCc7XHJcbmltcG9ydCB7IHNlbGVjdGVkQ291bnRyaWVzIH0gZnJvbSAnLi9zZWxlY3RlZENvdW50cnlNYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBtYXN0ZXJEYXRhID0gcHJlcGFyZURhdGEoQ291bnRyeURhdGEpLFxyXG4gICAgc3ZnID0gZXN0YWJsaXNoQ29udGFpbmVyKCksXHJcbiAgICBkZWZhdWx0Q291bnRyaWVzID0gW1xyXG4gICAgICAgICdVbml0ZWQgU3RhdGVzJyxcclxuICAgICAgICAnQ2hpbmEnLFxyXG4gICAgICAgICdKYXBhbicsXHJcbiAgICAgICAgJ0dlcm1hbnknLFxyXG4gICAgICAgICdVbml0ZWQgS2luZ2RvbScsXHJcbiAgICAgICAgJ0luZGlhJyxcclxuICAgICAgICAnRnJhbmNlJ1xyXG4gICAgXTtcclxuXHJcbnNlbGVjdGVkQ291bnRyaWVzLnNldChkZWZhdWx0Q291bnRyaWVzKTtcclxuXHJcbmNoYXJ0SW5pdChzdmcpOyIsImltcG9ydCB7IGluaXREcm9wU2hhZG93IH0gZnJvbSBcIi4vZHJvcFNoYWRvd1wiO1xyXG5pbXBvcnQgeyByYW5nZSB9IGZyb20gJ2QzLWFycmF5JztcclxuaW1wb3J0IHsgdHJhbnNsYXRvciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5cclxuY29uc3QgZDMgPSB7IHJhbmdlIH07XHJcblxyXG5sZXQgY29udGFpbmVycywgZGltZW5zaW9ucztcclxuXHJcbmZ1bmN0aW9uIGJ1aWxkQ291bnRyeUJveCgpIHtcclxuICAgIGNvbnRhaW5lcnMuY291bnRyeS5hcHBlbmQoJ3JlY3QnKVxyXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdkcm9wLXNoYWRvdy1iYXNlJylcclxuICAgICAgICAuYXR0cignd2lkdGgnLCBkaW1lbnNpb25zLmNvdW50cnlDb2x1bW5XaWR0aClcclxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZGltZW5zaW9ucy50b3RhbEhlaWdodClcclxuICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICcjZWVlJylcclxuICAgICAgICAuc3R5bGUoJ2ZpbHRlcicsICd1cmwoI2Ryb3Atc2hhZG93KScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZEdkcEJveCgpIHtcclxuICAgIGNvbnRhaW5lcnMuZ2RwLmFwcGVuZCgncmVjdCcpXHJcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Ryb3Atc2hhZG93LWJhc2UnKVxyXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIGRpbWVuc2lvbnMuZ2RwQ29sdW1uV2lkdGgpXHJcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGRpbWVuc2lvbnMudG90YWxIZWlnaHQpXHJcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAnI2VlZScpXHJcbiAgICAgICAgLnN0eWxlKCdmaWx0ZXInLCAndXJsKCNkcm9wLXNoYWRvdyknKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlSG9yaXpvbnRhbFN0cmlwZXMoZGF0YUxlbmd0aCkge1xyXG4gICAgbGV0IHN0cmlwZXM7XHJcblxyXG4gICAgc3RyaXBlcyA9IGNvbnRhaW5lcnMuc3RyaXBlcy5zZWxlY3RBbGwoJ2xpbmUnKVxyXG4gICAgICAgIC5kYXRhKGQzLnJhbmdlKGRhdGFMZW5ndGggKyAxKSwgZnVuY3Rpb24oZCl7IHJldHVybiBkOyB9KVxyXG5cclxuICAgIHN0cmlwZXMuZXhpdCgpLnJlbW92ZSgpO1xyXG5cclxuICAgIHN0cmlwZXMuZW50ZXIoKVxyXG4gICAgICAgIC5hcHBlbmQoJ2xpbmUnKVxyXG4gICAgICAgIC5hdHRyKCd4MScsIDApXHJcbiAgICAgICAgLmF0dHIoJ3kxJywgZnVuY3Rpb24oZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBkICogZGltZW5zaW9ucy5yb3dIZWlnaHQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYXR0cigneDInLCAxMjAwKVxyXG4gICAgICAgIC5hdHRyKCd5MicsIGZ1bmN0aW9uKGQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZCAqIGRpbWVuc2lvbnMucm93SGVpZ2h0O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdyZ2JhKDEwMCwxMDAsMTAwLDAuMSknKVxyXG4gICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZU1hc2soKSB7XHJcbiAgICAvLyBjbGlwIHRoZSBkcm9wIHNoYWRvd1xyXG4gICAgXHJcbiAgICBpZiAoY29udGFpbmVycy5sZWdlbmRzLnNlbGVjdEFsbCgncmVjdC5tYXNrJykuc2l6ZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb250YWluZXJzLmxlZ2VuZHMuYXBwZW5kKCdyZWN0JylcclxuICAgICAgICAuY2xhc3NlZCgnbWFzaycsIHRydWUpXHJcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTIwMClcclxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZGltZW5zaW9ucy5oZWFkZXIpXHJcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdub25lJylcclxuICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmsoX2NvbnRhaW5lcnMsIF9kaW1lbnNpb25zLCBkYXRhTGVuZ3RoKSB7IFxyXG4gICAgY29udGFpbmVycyA9IF9jb250YWluZXJzO1xyXG4gICAgZGltZW5zaW9ucyA9IF9kaW1lbnNpb25zO1xyXG5cclxuICAgIGNvbnRhaW5lcnMuc3RyaXBlcyA9IGNvbnRhaW5lcnMuY2hhcnQuYXBwZW5kKCdnJykuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcigwLCBkaW1lbnNpb25zLmhlYWRlcikpO1xyXG5cclxuICAgIGluaXREcm9wU2hhZG93KCk7XHJcbiAgICBidWlsZENvdW50cnlCb3goKTtcclxuICAgIGJ1aWxkR2RwQm94KCk7XHJcbiAgICBwbGFjZUhvcml6b250YWxTdHJpcGVzKGRhdGFMZW5ndGgpO1xyXG4gICAgcGxhY2VNYXNrKCk7XHJcbn0iLCJpbXBvcnQgJy4vc2VsZWN0Q291bnRyeS5zY3NzJztcclxuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuaW1wb3J0IHsgZXN0YWJsaXNoQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBjb3VudHJ5TGlzdCwgcmVmcmVzaERhdGEgfSBmcm9tICcuL2NoYXJ0JztcclxuaW1wb3J0IHsgbWFzdGVyRGF0YSB9IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBhZGRYSWNvbiwgYWRkQnV0dG9uSWNvbiwgYWRkU2VhcmNoSWNvbiB9IGZyb20gJy4vaWNvbkdlbmVyYXRvcnMnO1xyXG5pbXBvcnQgeyBzZWxlY3RlZENvdW50cmllcyB9IGZyb20gJy4vc2VsZWN0ZWRDb3VudHJ5TWFuYWdlcic7XHJcblxyXG5jb25zdCBkMyA9IHsgc2VsZWN0IH1cclxuXHJcbmxldCBwYXJlbnREaXYsXHJcbiAgICBpbnB1dCxcclxuICAgIGxpc3REaXYsXHJcbiAgICB0cmlnZ2VyO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVHJpZ2dlcigpIHtcclxuICAgIGxldCBzdmc7XHJcblxyXG4gICAgdHJpZ2dlciA9IHBhcmVudERpdi5hcHBlbmQoJ2J1dHRvbicpXHJcbiAgICAgICAgLmNsYXNzZWQoJ3RyaWdnZXItYnV0dG9uJywgdHJ1ZSlcclxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwYXJlbnREaXYuY2xhc3NlZCgnYWN0aXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudERpdi5jbGFzc2VkKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Lm5vZGUoKS5mb2N1cygpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB0cmlnZ2VyLm5vZGUoKS5pbm5lclRleHQgPSBcIkFkZC9SZW1vdmUgQ291bnRyaWVzXCI7XHJcblxyXG4gICAgc3ZnID0gdHJpZ2dlci5hcHBlbmQoJ3N2ZycpXHJcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMjApXHJcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDIwKTtcclxuXHJcbiAgICBhZGRCdXR0b25JY29uKHN2Zyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVzdGFibGlzaEludXB0KCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGxpc3REaXYuYXBwZW5kKCdkaXYnKS5jbGFzc2VkKCdzZWFyY2gtd3JhcHBlcicsIHRydWUpO1xyXG4gICAgbGV0IGljb247XHJcblxyXG4gICAgaW5wdXQgPSB3cmFwcGVyLmFwcGVuZCgnaW5wdXQnKVxyXG4gICAgICAgIC5hdHRyKCdwbGFjZWhvbGRlcicsICdzZWFyY2ggZm9yIGEgY291bnRyeScpXHJcbiAgICAgICAgLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGlzdEF2YWlsYWJsZUNvdW50cmllcyh0aGlzLnZhbHVlKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIGljb24gPSB3cmFwcGVyLmFwcGVuZCgnc3ZnJyk7XHJcblxyXG4gICAgYWRkU2VhcmNoSWNvbihpY29uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdHNlbGVjdGVkQ291bnRyaWVzKCkge1xyXG4gICAgY29uc3QgdWwgPSBsaXN0RGl2LnNlbGVjdCgndWwnKTtcclxuXHJcbiAgICBsZXQgaXRlbXMsIHN2ZztcclxuXHJcbiAgICB1bC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcclxuXHJcbiAgICBpdGVtcyA9IHVsLnNlbGVjdEFsbCgnbGknKVxyXG4gICAgICAgIC5kYXRhKHNlbGVjdGVkQ291bnRyaWVzLmxpc3QpXHJcbiAgICAgICAgLmVudGVyKClcclxuICAgICAgICAuYXBwZW5kKCdsaScpXHJcbiAgICAgICAgLm9uKCdjbGljaycsIHJlbW92ZUNvdW50cnkpXHJcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lclRleHQgPSBkO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgc3ZnID0gaXRlbXMuYXBwZW5kKCdzdmcnKTtcclxuXHJcbiAgICBhZGRYSWNvbihzdmcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBdmFpbGFibGVDb3VudHJpZXMoZmlsdGVyU3RyKSB7XHJcbiAgICBpZiAoZmlsdGVyU3RyKSB7XHJcbiAgICAgICAgZmlsdGVyU3RyID0gZmlsdGVyU3RyLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hc3RlckRhdGEuY291bnRyeUxpc3QuZmlsdGVyKGMgPT4ge1xyXG4gICAgICAgIHJldHVybiAoYyAmJiBzZWxlY3RlZENvdW50cmllcy5saXN0LmluZGV4T2YoYykgPT09IC0xICYmICghZmlsdGVyU3RyIHx8IGMudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclN0cikgIT09IC0xKSlcclxuICAgIH0pLnNvcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ291bnRyeShkKSB7XHJcbiAgICBzZWxlY3RlZENvdW50cmllcy5hZGQoZCk7XHJcbiAgICBvbkxpc3RVcGRhdGVkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvdW50cnkoZCkge1xyXG4gICAgc2VsZWN0ZWRDb3VudHJpZXMucmVtb3ZlKGQpO1xyXG4gICAgb25MaXN0VXBkYXRlZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0QXZhaWxhYmxlQ291bnRyaWVzKGZpbHRlclN0cikge1xyXG4gICAgY29uc3QgbGlzdCA9IGdldEF2YWlsYWJsZUNvdW50cmllcyhmaWx0ZXJTdHIpLFxyXG4gICAgICAgIGF2YWlsYWJsZUNvbnRhaW5lciA9IGxpc3REaXYuc2VsZWN0KCcuYXZhaWxhYmxlLWNvbnRhaW5lcicpLFxyXG4gICAgICAgIG1heCA9IDEwO1xyXG5cclxuICAgIGxldCBtb3JlLCByZW1haW5kZXI7XHJcblxyXG4gICAgaWYgKGxpc3QubGVuZ3RoID4gbWF4KSB7XHJcbiAgICAgICAgbW9yZSA9IHRydWU7XHJcbiAgICAgICAgcmVtYWluZGVyID0gbGlzdC5sZW5ndGggLSBtYXg7XHJcbiAgICAgICAgbGlzdC5sZW5ndGggPSBtYXg7XHJcbiAgICB9XHJcblxyXG4gICAgYXZhaWxhYmxlQ29udGFpbmVyLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xyXG5cclxuICAgIGF2YWlsYWJsZUNvbnRhaW5lci5zZWxlY3RBbGwoJ2Rpdi5hdmFpbGFibGUnKVxyXG4gICAgICAgIC5kYXRhKGxpc3QpXHJcbiAgICAgICAgLmVudGVyKClcclxuICAgICAgICAuYXBwZW5kKCdkaXYnKVxyXG4gICAgICAgIC5jbGFzc2VkKCdhdmFpbGFibGUnLCB0cnVlKVxyXG4gICAgICAgIC5vbignY2xpY2snLCBhZGRDb3VudHJ5KVxyXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gZDtcclxuXHJcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnYWRkLWJ1dHRvbicsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAubm9kZSgpXHJcbiAgICAgICAgICAgICAgICAuaW5uZXJUZXh0ID0gJ2FkZCc7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBpZiAobW9yZSkge1xyXG4gICAgICAgIGF2YWlsYWJsZUNvbnRhaW5lci5hcHBlbmQoJ2RpdicpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKCdzZWUtbW9yZScsIHRydWUpXHJcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gYCR7cmVtYWluZGVyfSBtb3JlIGNvdW50cmllcyBhcmUgYXZhaWxhYmxlLiBTZWFyY2ggdG8gZmluZCBtb3JlLmA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3REaXYoKSB7XHJcbiAgICBsaXN0RGl2ID0gcGFyZW50RGl2LmFwcGVuZCgnZGl2JylcclxuICAgICAgICAuY2xhc3NlZCgnbGlzdC1kaXYnLCB0cnVlKTtcclxuXHJcbiAgICBsaXN0RGl2LmFwcGVuZCgndWwnKTtcclxuICAgIGxpc3REaXYuYXBwZW5kKCdocicpO1xyXG4gICAgZXN0YWJsaXNoSW51cHQoKTtcclxuICAgIGxpc3REaXYuYXBwZW5kKCdkaXYnKS5jbGFzc2VkKCdhdmFpbGFibGUtY29udGFpbmVyJywgdHJ1ZSlcclxuXHJcbiAgICBsaXN0c2VsZWN0ZWRDb3VudHJpZXMoKTtcclxuICAgIGxpc3RBdmFpbGFibGVDb3VudHJpZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25MaXN0VXBkYXRlZCgpIHtcclxuICAgIHBhcmVudERpdi5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSk7XHJcbiAgICBpbnB1dC5ub2RlKCkudmFsdWUgPSBudWxsO1xyXG4gICAgbGlzdHNlbGVjdGVkQ291bnRyaWVzKCk7XHJcbiAgICBsaXN0QXZhaWxhYmxlQ291bnRyaWVzKCk7XHJcbiAgICByZWZyZXNoRGF0YSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0Q291bnRyeUluaXQoKSB7XHJcbiAgICBjb25zdCBzdmcgPSBlc3RhYmxpc2hDb250YWluZXIoKTtcclxuXHJcbiAgICBwYXJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBzdmcubm9kZSgpLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBhcmVudERpdiwgc3ZnLm5vZGUoKSk7XHJcblxyXG4gICAgcGFyZW50RGl2ID0gZDMuc2VsZWN0KHBhcmVudERpdikuY2xhc3NlZCgnc2VsZWN0LWNvdW50cnknLCB0cnVlKTtcclxuXHJcbiAgICBjcmVhdGVUcmlnZ2VyKCk7XHJcbiAgICBjcmVhdGVMaXN0RGl2KCk7XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBzZWxlY3RlZCA9IFtdLFxyXG4gICAgbGFzdFVwZGF0ZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gc2V0KGFycikge1xyXG4gICAgc2VsZWN0ZWQubGVuZ3RoID0gMDtcclxuICAgIFxyXG4gICAgYXJyLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgc2VsZWN0ZWQucHVzaChjKVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHNlbGVjdGVkLnNvcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlKGNvdW50cnkpIHtcclxuICAgIGNvbnN0IGkgPSBzZWxlY3RlZC5pbmRleE9mKGNvdW50cnkpO1xyXG5cclxuICAgIHNlbGVjdGVkLnNwbGljZShpLCAxKTtcclxuXHJcbiAgICBsYXN0VXBkYXRlLmNvdW50cnkgPSBjb3VudHJ5O1xyXG4gICAgbGFzdFVwZGF0ZS5hY3Rpb24gPSAncmVtb3ZlJztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkKGNvdW50cnkpIHtcclxuICAgIHNlbGVjdGVkLnB1c2goY291bnRyeSlcclxuICAgIHNlbGVjdGVkLnNvcnQoKTtcclxuXHJcbiAgICBsYXN0VXBkYXRlLmNvdW50cnkgPSBjb3VudHJ5O1xyXG4gICAgbGFzdFVwZGF0ZS5hY3Rpb24gPSAnYWRkJztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkQ291bnRyaWVzID0ge1xyXG4gICAgc2V0OiBzZXQsXHJcbiAgICByZW1vdmU6IHJlbW92ZSxcclxuICAgIGFkZDogYWRkLFxyXG4gICAgbGlzdDogc2VsZWN0ZWQsXHJcbiAgICBsYXN0VXBkYXRlOiBsYXN0VXBkYXRlXHJcbn0iLCJpbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xyXG5cclxuY29uc3QgZDMgPSB7IHNlbGVjdCB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCb3goZDNTZWxlY3Rpb24pIHtcclxuICAgIGNvbnN0IHJlY3QgPSBkM1NlbGVjdGlvbi5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogTWF0aC5jZWlsKHJlY3Qud2lkdGgpLFxyXG4gICAgICAgIGhlaWdodDogTWF0aC5jZWlsKHJlY3QuaGVpZ2h0KSxcclxuICAgICAgICByaWdodDogTWF0aC5jZWlsKHJlY3QucmlnaHQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdG9yKHgsIHkpIHtcclxuICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sICR7eX0pYFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtKGQzU2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCByZSA9IC8oXFxkKSsvZ1xyXG4gICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm0gPSBkM1NlbGVjdGlvbi5hdHRyKCd0cmFuc2Zvcm0nKS5tYXRjaChyZSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBOdW1iZXIob3JpZ2luYWxUcmFuc2Zvcm1bMF0pLFxyXG4gICAgICAgIHk6IE51bWJlcihvcmlnaW5hbFRyYW5zZm9ybVsxXSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVzdGFibGlzaENvbnRhaW5lcihoZWlnaHQpIHtcclxuICAgIGNvbnN0IHZpeiA9IGQzLnNlbGVjdCgnI3ZpeicpO1xyXG5cclxuICAgIGxldCBzdmcgPSB2aXouc2VsZWN0KCdzdmcubWFpbicpO1xyXG5cclxuICAgIGhlaWdodCA9IGhlaWdodCB8fCA0MDA7XHJcblxyXG4gICAgaWYgKHN2Zy5zaXplKCkgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdml6LmFwcGVuZCgnc3ZnJylcclxuICAgICAgICAgICAgLmNsYXNzZWQoJ21haW4nLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cignc2hhcGUtcmVuZGVyaW5nJywgJ2dlb21ldHJpY1ByZWNpc2lvbicpXHJcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXHJcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsICcxMjAwcHgnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHN2ZztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsaWZ5QmlsbGlvbnMobikge1xyXG4gICAgY29uc3QgYmlsbGlvbiA9IDEwMDAwMDAwMDA7XHJcblxyXG4gICAgcmV0dXJuIGAkJHtNYXRoLnJvdW5kKG4gLyBiaWxsaW9uICogMTApIC8gMTB9IEJgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxpZnlOdW1iZXIobikge1xyXG4gICAgY29uc3QgdHJpbGxpb24gPSAxMDAwMDAwMDAwMDAwLFxyXG4gICAgICAgIGJpbGxpb24gPSAxMDAwMDAwMDAwLFxyXG4gICAgICAgIG1pbGxpb24gPSAxMDAwMDAwO1xyXG5cclxuICAgIGxldCBzaW1wbGlmaWVyID0gbWlsbGlvbixcclxuICAgICAgICBsZXR0ZXIgPSAnTSc7XHJcblxyXG4gICAgaWYgKG4gPiB0cmlsbGlvbikge1xyXG4gICAgICAgIHNpbXBsaWZpZXIgPSB0cmlsbGlvbjtcclxuICAgICAgICBsZXR0ZXIgPSAnVCdcclxuICAgIH0gZWxzZSBpZiAobiA+IGJpbGxpb24pIHtcclxuICAgICAgICBzaW1wbGlmaWVyID0gYmlsbGlvbjtcclxuICAgICAgICBsZXR0ZXIgPSAnQic7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAkJHtNYXRoLnJvdW5kKG4gLyBzaW1wbGlmaWVyICogMTApIC8gMTB9ICR7bGV0dGVyfWA7ICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd29yZFdyYXAodGV4dCwgbWF4V2lkdGgpIHtcclxuICAgIHZhciB3b3JkcyA9IHRleHQudGV4dCgpLnNwbGl0KC9cXHMrLykucmV2ZXJzZSgpLFxyXG4gICAgICAgIHdvcmQsXHJcbiAgICAgICAgbGluZSA9IFtdLFxyXG4gICAgICAgIGxpbmVOdW1iZXIgPSAwLFxyXG4gICAgICAgIGxpbmVIZWlnaHQgPSAxLjEsXHJcbiAgICAgICAgeSA9IHRleHQuYXR0cihcInlcIiksXHJcbiAgICAgICAgdHNwYW47XHJcblxyXG4gICAgdHNwYW4gPSB0ZXh0LnRleHQobnVsbClcclxuICAgICAgICAuYXBwZW5kKFwidHNwYW5cIilcclxuICAgICAgICAuYXR0cihcInhcIiwgMCk7XHJcbiAgICAvLyAuYXR0cihcInlcIiwgeSk7XHJcbiAgICAvLyAuYXR0cihcImR5XCIsIGR5ICsgXCJlbVwiKTtcclxuXHJcbiAgICB3aGlsZSAod29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHdvcmQgPSB3b3Jkcy5wb3AoKTtcclxuICAgICAgICBsaW5lLnB1c2god29yZCk7XHJcbiAgICAgICAgdHNwYW4udGV4dChsaW5lLmpvaW4oXCIgXCIpKTtcclxuICAgICAgICBpZiAodHNwYW4ubm9kZSgpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpID4gbWF4V2lkdGgpIHtcclxuICAgICAgICAgICAgbGluZS5wb3AoKTtcclxuICAgICAgICAgICAgdHNwYW4udGV4dChsaW5lLmpvaW4oXCIgXCIpKTtcclxuICAgICAgICAgICAgbGluZSA9IFt3b3JkXTtcclxuICAgICAgICAgICAgdHNwYW4gPSB0ZXh0LmFwcGVuZChcInRzcGFuXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgMClcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCB5KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBsaW5lSGVpZ2h0ICsgXCJlbVwiKVxyXG4gICAgICAgICAgICAgICAgLnRleHQod29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERyb3BTaGFkb3coKXtcclxuIGNvbnN0IHN2ZyA9IGVzdGFibGlzaENvbnRhaW5lcigpLFxyXG4gICAgZmlsdGVyID0gc3ZnLmFwcGVuZCgnZGVmcycpLmFwcGVuZCgnZmlsdGVyJylcclxuICAgICAgICAuYXR0cignaWQnLCAnZHJvcDEnKVxyXG5cclxuICAgIGZpbHRlci5hcHBlbmQoJ2ZlRHJvcFNoYWRvdycpXHJcbiAgICAgICAgLmF0dHIoJ2R4JywgMClcclxuICAgICAgICAuYXR0cignZHknLCAwKVxyXG4gICAgICAgIC5hdHRyKCdzdGREZXZpYXRpb24nLCA1KVxyXG4gICAgICAgIC5hdHRyKCdmbG9vZC1vcGFjaXR5JywgMC4yKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
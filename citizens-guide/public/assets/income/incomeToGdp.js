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
/******/ 	__webpack_require__.p = "/assets/income/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/income/gdp/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/colors.scss":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/colors.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports
exports.locals = {
	"colorGrayDark": "#323a45",
	"colorPrimary": "#0071bc",
	"colorPrimaryDarker": "#205493",
	"colorPrimaryDarkest": "#112e51",
	"colorPrimaryAltDarkest": "#046b99",
	"colorPrimaryAltLight": "#9bdaf1",
	"colorPrimaryAltLightest": "#e1f3f8",
	"income": "#4A90E2",
	"parentOne": "#3673BB",
	"textColorHeading": "#555555",
	"textColorParagraph": "#666666",
	"colorGrayCoolLight": "#dce4ef"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/income/gdp/gdp.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/income/gdp/gdp.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#gdp-facts {\n  clear: both;\n  margin: 0 1rem; }\n  #gdp-facts > h1 {\n    font-size: 24px;\n    font-weight: 600;\n    text-align: left; }\n  #gdp-facts .tour {\n    margin-top: 2rem;\n    max-width: 300px; }\n\n#gdp-facts.out {\n  padding-top: 0; }\n\n@media only screen and (min-width: 920px) {\n  #gdp-facts {\n    clear: none;\n    padding-top: 130px;\n    margin-left: 670px;\n    margin-right: 0; }\n    #gdp-facts h1 {\n      margin-top: 0; }\n  .page-wrapper {\n    max-width: 1200px;\n    margin: 0 auto; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


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

/***/ "./node_modules/d3-color/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/index.js ***!
  \********************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["hsl"]; });

/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab */ "./node_modules/d3-color/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["gray"]; });

/* harmony import */ var _cubehelix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix */ "./node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_2__["default"]; });






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

/***/ "./node_modules/d3-dispatch/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-dispatch/src/index.js ***!
  \***********************************************/
/*! exports provided: dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _dispatch__WEBPACK_IMPORTED_MODULE_0__["default"]; });




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

/***/ "./node_modules/d3-ease/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/index.js ***!
  \*******************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-ease/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return _linear__WEBPACK_IMPORTED_MODULE_0__["linear"]; });

/* harmony import */ var _quad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad */ "./node_modules/d3-ease/src/quad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony import */ var _cubic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic */ "./node_modules/d3-ease/src/cubic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony import */ var _poly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poly */ "./node_modules/d3-ease/src/poly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony import */ var _sin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sin */ "./node_modules/d3-ease/src/sin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp */ "./node_modules/d3-ease/src/exp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle */ "./node_modules/d3-ease/src/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony import */ var _bounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bounce */ "./node_modules/d3-ease/src/bounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceInOut"]; });

/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back */ "./node_modules/d3-ease/src/back.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony import */ var _elastic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elastic */ "./node_modules/d3-ease/src/elastic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticInOut"]; });






















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
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
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

/***/ "./node_modules/d3-interpolate/src/discrete.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/discrete.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
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
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
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
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
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

/***/ "./node_modules/d3-interpolate/src/hue.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = Object(_color__WEBPACK_IMPORTED_MODULE_0__["hue"])(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/index.js ***!
  \**************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _value__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-interpolate/src/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return _basis__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return _basisClosed__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date */ "./node_modules/d3-interpolate/src/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return _date__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _discrete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discrete */ "./node_modules/d3-interpolate/src/discrete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDiscrete", function() { return _discrete__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hue */ "./node_modules/d3-interpolate/src/hue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHue", function() { return _hue__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return _number__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object */ "./node_modules/d3-interpolate/src/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return _object__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./round */ "./node_modules/d3-interpolate/src/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return _round__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string */ "./node_modules/d3-interpolate/src/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return _string__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _transform_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transform/index */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return _transform_index__WEBPACK_IMPORTED_MODULE_11__["interpolateTransformCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return _transform_index__WEBPACK_IMPORTED_MODULE_11__["interpolateTransformSvg"]; });

/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zoom */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return _zoom__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rgb */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["rgbBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["rgbBasisClosed"]; });

/* harmony import */ var _hsl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hsl */ "./node_modules/d3-interpolate/src/hsl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return _hsl__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return _hsl__WEBPACK_IMPORTED_MODULE_14__["hslLong"]; });

/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lab */ "./node_modules/d3-interpolate/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return _lab__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _hcl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hcl */ "./node_modules/d3-interpolate/src/hcl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return _hcl__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return _hcl__WEBPACK_IMPORTED_MODULE_16__["hclLong"]; });

/* harmony import */ var _cubehelix__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cubehelix */ "./node_modules/d3-interpolate/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_17__["cubehelixLong"]; });

/* harmony import */ var _piecewise__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./piecewise */ "./node_modules/d3-interpolate/src/piecewise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return _piecewise__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quantize */ "./node_modules/d3-interpolate/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _quantize__WEBPACK_IMPORTED_MODULE_19__["default"]; });























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
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
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
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
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
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
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

/***/ "./node_modules/d3-path/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-path/src/index.js ***!
  \*******************************************/
/*! exports provided: path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ "./node_modules/d3-path/src/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _path__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-path/src/path.js":
/*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (path);


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

/***/ "./node_modules/d3-selection/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/index.js ***!
  \************************************************/
/*! exports provided: create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/d3-selection/src/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return _creator__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local */ "./node_modules/d3-selection/src/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "local", function() { return _local__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher */ "./node_modules/d3-selection/src/matcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouse */ "./node_modules/d3-selection/src/mouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return _mouse__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _namespace__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return _namespaces__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return _point__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selectAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _selectAll__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selector */ "./node_modules/d3-selection/src/selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return _selector__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return _selectorAll__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _selection_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selection/style */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _selection_style__WEBPACK_IMPORTED_MODULE_13__["styleValue"]; });

/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./touch */ "./node_modules/d3-selection/src/touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return _touch__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _touches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./touches */ "./node_modules/d3-selection/src/touches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return _touches__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./window */ "./node_modules/d3-selection/src/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _window__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "event", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["customEvent"]; });





















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

/***/ "./node_modules/d3-shape/src/arc.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/arc.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-shape/src/math.js");




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["max"])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        a1 = endAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        da = Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > _math__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
      context.moveTo(r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a0), r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        context.moveTo(r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a1), r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) && (padRadius ? +padRadius.apply(this, arguments) : Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(r0 * r0 + r1 * r1)),
          rc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var p0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)),
            p1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap));
        if ((da0 -= p0 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a01),
          y01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a01),
          x10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a10),
          y10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a10);

      // Apply rounded corners?
      if (rc > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var x11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a11),
            y11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a11),
            x00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a00),
            y00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < _math__WEBPACK_IMPORTED_MODULE_2__["pi"]) {
          var oc = da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["acos"])((ax * bx + ay * by) / (Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(ax * ax + ay * ay) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(bx * bx + by * by))) / 2),
              lc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) || !(da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2;
    return [Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a) * r, Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/area.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/area.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point */ "./node_modules/d3-shape/src/point.js");






/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = _point__WEBPACK_IMPORTED_MODULE_4__["x"],
      x1 = null,
      y0 = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      y1 = _point__WEBPACK_IMPORTED_MODULE_4__["y"],
      defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(_line__WEBPACK_IMPORTED_MODULE_3__["default"])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/areaRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/areaRadial.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./node_modules/d3-shape/src/area.js");
/* harmony import */ var _lineRadial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineRadial */ "./node_modules/d3-shape/src/lineRadial.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var a = Object(_area__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return a;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/array.js ***!
  \********************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-shape/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basis.js ***!
  \**************************************************/
/*! exports provided: point, Basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basis", function() { return Basis; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Basis(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(_basis__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(_basis__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");


function Bundle(context, beta) {
  this._basis = new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
  \*****************************************************/
/*! exports provided: point, Cardinal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardinal", function() { return Cardinal; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
  \***********************************************************/
/*! exports provided: CardinalClosed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalClosed", function() { return CardinalClosed; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_cardinal__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
  \*********************************************************/
/*! exports provided: CardinalOpen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalOpen", function() { return CardinalOpen; });
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_cardinal__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
  \*******************************************************/
/*! exports provided: point, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new _cardinal__WEBPACK_IMPORTED_MODULE_1__["Cardinal"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_catmullRom__WEBPACK_IMPORTED_MODULE_2__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__["CardinalClosed"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_catmullRom__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__["CardinalOpen"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linear.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linear.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Linear(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
  \*****************************************************/
/*! exports provided: monotoneX, monotoneY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneX", function() { return monotoneX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneY", function() { return monotoneY; });
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/natural.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/natural.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Natural(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/radial.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/radial.js ***!
  \***************************************************/
/*! exports provided: curveRadialLinear, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curveRadialLinear", function() { return curveRadialLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curveRadial; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-shape/src/curve/linear.js");


var curveRadialLinear = curveRadial(_linear__WEBPACK_IMPORTED_MODULE_0__["default"]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/step.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/step.js ***!
  \*************************************************/
/*! exports provided: default, stepBefore, stepAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepBefore", function() { return stepBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepAfter", function() { return stepAfter; });
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  return d;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/index.js ***!
  \********************************************/
/*! exports provided: arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arc */ "./node_modules/d3-shape/src/arc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return _arc__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./node_modules/d3-shape/src/area.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return _area__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return _line__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie */ "./node_modules/d3-shape/src/pie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return _pie__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _areaRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areaRadial */ "./node_modules/d3-shape/src/areaRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return _areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return _areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _lineRadial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineRadial */ "./node_modules/d3-shape/src/lineRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return _lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return _lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _pointRadial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointRadial */ "./node_modules/d3-shape/src/pointRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return _pointRadial__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _link_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link/index */ "./node_modules/d3-shape/src/link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkRadial"]; });

/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./symbol */ "./node_modules/d3-shape/src/symbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return _symbol__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return _symbol__WEBPACK_IMPORTED_MODULE_8__["symbols"]; });

/* harmony import */ var _symbol_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return _symbol_circle__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _symbol_cross__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return _symbol_cross__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _symbol_diamond__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return _symbol_diamond__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _symbol_square__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./symbol/square */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return _symbol_square__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _symbol_star__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./symbol/star */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return _symbol_star__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _symbol_triangle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return _symbol_triangle__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _symbol_wye__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return _symbol_wye__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./curve/basisClosed */ "./node_modules/d3-shape/src/curve/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return _curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./curve/basisOpen */ "./node_modules/d3-shape/src/curve/basisOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return _curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _curve_basis__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./curve/basis */ "./node_modules/d3-shape/src/curve/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return _curve_basis__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _curve_bundle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./curve/bundle */ "./node_modules/d3-shape/src/curve/bundle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return _curve_bundle__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./curve/cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return _curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./curve/cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return _curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _curve_cardinal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curve/cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return _curve_cardinal__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./curve/catmullRomClosed */ "./node_modules/d3-shape/src/curve/catmullRomClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return _curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./curve/catmullRomOpen */ "./node_modules/d3-shape/src/curve/catmullRomOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return _curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./curve/catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return _curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./curve/linearClosed */ "./node_modules/d3-shape/src/curve/linearClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return _curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return _curve_linear__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _curve_monotone__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./curve/monotone */ "./node_modules/d3-shape/src/curve/monotone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return _curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return _curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneY"]; });

/* harmony import */ var _curve_natural__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./curve/natural */ "./node_modules/d3-shape/src/curve/natural.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return _curve_natural__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _curve_step__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./curve/step */ "./node_modules/d3-shape/src/curve/step.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["stepAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["stepBefore"]; });

/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stack */ "./node_modules/d3-shape/src/stack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return _stack__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _offset_expand__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./offset/expand */ "./node_modules/d3-shape/src/offset/expand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return _offset_expand__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _offset_diverging__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./offset/diverging */ "./node_modules/d3-shape/src/offset/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return _offset_diverging__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _offset_none__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./offset/none */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return _offset_none__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _offset_silhouette__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./offset/silhouette */ "./node_modules/d3-shape/src/offset/silhouette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return _offset_silhouette__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _offset_wiggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./offset/wiggle */ "./node_modules/d3-shape/src/offset/wiggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return _offset_wiggle__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _order_ascending__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./order/ascending */ "./node_modules/d3-shape/src/order/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return _order_ascending__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _order_descending__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./order/descending */ "./node_modules/d3-shape/src/order/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return _order_descending__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _order_insideOut__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./order/insideOut */ "./node_modules/d3-shape/src/order/insideOut.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return _order_insideOut__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _order_none__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./order/none */ "./node_modules/d3-shape/src/order/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return _order_none__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _order_reverse__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./order/reverse */ "./node_modules/d3-shape/src/order/reverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return _order_reverse__WEBPACK_IMPORTED_MODULE_41__["default"]; });





 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!









































/***/ }),

/***/ "./node_modules/d3-shape/src/line.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/line.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./node_modules/d3-shape/src/point.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
      defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/lineRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/lineRadial.js ***!
  \*************************************************/
/*! exports provided: lineRadial, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return lineRadial; });
/* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return lineRadial(Object(_line__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]));
});


/***/ }),

/***/ "./node_modules/d3-shape/src/link/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/link/index.js ***!
  \*************************************************/
/*! exports provided: linkHorizontal, linkVertical, linkRadial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return linkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return linkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return linkRadial; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point */ "./node_modules/d3-shape/src/point.js");
/* harmony import */ var _pointRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pointRadial */ "./node_modules/d3-shape/src/pointRadial.js");






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
      context = null;

  function link() {
    var buffer, argv = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0),
      p1 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y0),
      p3 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/math.js ***!
  \*******************************************/
/*! exports provided: abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau, acos, asin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/noop.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/noop.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/expand.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/expand.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/none.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/none.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/ascending.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/ascending.js ***!
  \******************************************************/
/*! exports provided: default, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var sums = series.map(sum);
  return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/descending.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/descending.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js");



/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(_ascending__WEBPACK_IMPORTED_MODULE_1__["sum"]),
      order = Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/none.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/order/none.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/reverse.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/order/reverse.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/pie.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/pie.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descending */ "./node_modules/d3-shape/src/descending.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-shape/src/identity.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math */ "./node_modules/d3-shape/src/math.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_2__["default"],
      sortValues = _descending__WEBPACK_IMPORTED_MODULE_1__["default"],
      sort = null,
      startAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0),
      endAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(_math__WEBPACK_IMPORTED_MODULE_3__["tau"]),
      padAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(_math__WEBPACK_IMPORTED_MODULE_3__["tau"], Math.max(-_math__WEBPACK_IMPORTED_MODULE_3__["tau"], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/point.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/point.js ***!
  \********************************************/
/*! exports provided: x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ "./node_modules/d3-shape/src/pointRadial.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/pointRadial.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),

/***/ "./node_modules/d3-shape/src/stack.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/stack.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _offset_none__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset/none */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony import */ var _order_none__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/none */ "./node_modules/d3-shape/src/order/none.js");





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])([]),
      order = _order_none__WEBPACK_IMPORTED_MODULE_3__["default"],
      offset = _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? _order_none__WEBPACK_IMPORTED_MODULE_3__["default"] : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"] : _, stack) : offset;
  };

  return stack;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-shape/src/symbol.js ***!
  \*********************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _symbol_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony import */ var _symbol_cross__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony import */ var _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony import */ var _symbol_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symbol/star */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony import */ var _symbol_square__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbol/square */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony import */ var _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony import */ var _symbol_wye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");










var symbols = [
  _symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"],
  _symbol_cross__WEBPACK_IMPORTED_MODULE_2__["default"],
  _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__["default"],
  _symbol_square__WEBPACK_IMPORTED_MODULE_5__["default"],
  _symbol_star__WEBPACK_IMPORTED_MODULE_4__["default"],
  _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__["default"],
  _symbol_wye__WEBPACK_IMPORTED_MODULE_7__["default"]
];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var type = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"]),
      size = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / _math__WEBPACK_IMPORTED_MODULE_0__["pi"]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, _math__WEBPACK_IMPORTED_MODULE_0__["tau"]);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/square.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/square.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/star.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/star.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");


var ka = 0.89081309152928522810,
    kr = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10) / Math.sin(7 * _math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10),
    kx = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr,
    ky = -Math.cos(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = _math__WEBPACK_IMPORTED_MODULE_0__["tau"] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-timer/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/index.js ***!
  \********************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["timerFlush"]; });

/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout */ "./node_modules/d3-timer/src/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _timeout__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-timer/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _interval__WEBPACK_IMPORTED_MODULE_2__["default"]; });








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

/***/ "./node_modules/d3-transition/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-transition/src/index.js ***!
  \*************************************************/
/*! exports provided: transition, active, interrupt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-transition/src/selection/index.js");
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active */ "./node_modules/d3-transition/src/active.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "active", function() { return _active__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interrupt */ "./node_modules/d3-transition/src/interrupt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return _interrupt__WEBPACK_IMPORTED_MODULE_3__["default"]; });







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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
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
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");





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
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");


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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
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
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");



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
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");



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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
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
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");


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
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./public/csv/mts_mspd_rod_debt.csv":
/*!******************************************!*\
  !*** ./public/csv/mts_mspd_rod_debt.csv ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{"year":2001,"income":1990200000000,"spending":1863040000000,"surplus_deficit":127165000000,"interest_public_debt":359508000000,"source_url":"https://www.fiscal.treasury.gov/fsreports/rpt/mthTreasStmt/mts0901.pdf","gdp":10596300000000,"income_gdp":0.19,"spending_gdp":0.18,"surplus_deficit_gdp":0.01,"gdp_url":"https://fred.stlouisfed.org/series/GDP","debt":5807460000000,"debt_url":"ftp://ftp.publicdebt.treas.gov/opd/opds092001.pdf","int_rate":0.0663,"int_rate_url":"https://www.treasurydirect.gov/govt/rates/pd/avg/2001/2001_09.htm"},{"year":2008,"income":2523860000000,"spending":2978660000000,"surplus_deficit":-454806000000,"interest_public_debt":451154000000,"source_url":"https://www.fiscal.treasury.gov/fsreports/rpt/mthTreasStmt/mts0908.pdf","gdp":14835200000000,"income_gdp":0.17,"spending_gdp":0.2,"surplus_deficit_gdp":-0.03,"gdp_url":"https://fred.stlouisfed.org/series/GDP","debt":10024700000000,"debt_url":"ftp://ftp.publicdebt.treas.gov/opd/opds092008.pdf","int_rate":0.0501,"int_rate_url":"https://www.treasurydirect.gov/govt/rates/pd/avg/2008/2008_09.htm"},{"year":2009,"income":2104610000000,"spending":3521730000000,"surplus_deficit":-1417120000000,"interest_public_debt":383365000000,"source_url":"https://www.fiscal.treasury.gov/fsreports/rpt/mthTreasStmt/mts0909.pdf","gdp":14420300000000,"income_gdp":0.15,"spending_gdp":0.24,"surplus_deficit_gdp":-0.1,"gdp_url":"https://fred.stlouisfed.org/series/GDP","debt":11909800000000,"debt_url":"https://treasurydirect.gov/govt/reports/pd/mspd/2009/opds092009.pdf","int_rate":0.0419,"int_rate_url":"https://www.treasurydirect.gov/govt/rates/pd/avg/2009/2009_09.htm"},{"year":2010,"income":2161750000000,"spending":3455840000000,"surplus_deficit":-1294090000000,"interest_public_debt":413955000000,"source_url":"https://www.fiscal.treasury.gov/fsreports/rpt/mthTreasStmt/mts0910.pdf","gdp":15079900000000,"income_gdp":0.14,"spending_gdp":0.23,"surplus_deficit_gdp":-0.09,"gdp_url":"https://fred.stlouisfed.org/series/GDP","debt":13561600000000,"debt_url":"https://treasurydirect.gov/govt/reports/pd/mspd/2010/opds092010.pdf","int_rate":0.0335,"int_rate_url":"https://www.treasurydirect.gov/govt/rates/pd/avg/2010/2010_09.htm"},{"year":2011,"income":2302500000000,"spending":3601110000000,"surplus_deficit":-1298610000000,"interest_public_debt":454015000000,"source_url":"https://www.fiscal.treasury.gov/fsreports/rpt/mthTreasStmt/mts0911.pdf","gdp":15591900000000,"income_gdp":0.15,"spending_gdp":0.23,"surplus_deficit_gdp":-0.08,"gdp_url":"https://fred.stlouisfed.org/series/GDP","debt":14790300000000,"debt_url":"https://treasurydirect.gov/govt/reports/pd/mspd/2011/opds092011.pdf","int_rate":0.0305,"int_rate_url":"https://www.treasurydirect.gov/govt/rates/pd/avg/2011/2011_09.htm"},{"year":2012,"income":2449090000000,"spending":3538450000000,"surplus_deficit":-1089350000000,"interest_public_debt":359241000000,"source_url":"https://www.fiscal.treasury.gov/fsreports/rpt/mthTreasStmt/mts0912.pdf","gdp":16257200000000,"income_gdp":0.15,"spending_gdp":0.22,"surplus_deficit_gdp":-0.07,"gdp_url":"https://fred.stlouisfed.org/series/GDP","debt":16066200000000,"debt_url":"https://treasurydirect.gov/govt/reports/pd/mspd/2012/opds092012.pdf","int_rate":0.0289,"int_rate_url":"https://www.treasurydirect.gov/govt/rates/pd/avg/2012/2012_09.htm"},{"year":2013,"income":2773980000000,"spending":3454250000000,"surplus_deficit":-680276000000,"interest_public_debt":415670000000,"source_url":"https://www.fiscal.treasury.gov/fsreports/rpt/mthTreasStmt/mts0913.pdf","gdp":16848700000000,"income_gdp":0.16,"spending_gdp":0.21,"surplus_deficit_gdp":-0.04,"gdp_url":"https://fred.stlouisfed.org/series/GDP","debt":16738200000000,"debt_url":"https://treasurydirect.gov/govt/reports/pd/mspd/2013/opds092013.pdf","int_rate":0.0259,"int_rate_url":"https://www.treasurydirect.gov/govt/rates/pd/avg/2013/2013_09.htm"},{"year":2014,"income":3020850000000,"spending":3504200000000,"surplus_deficit":-483350000000,"interest_public_debt":429568000000,"source_url":"https://www.fiscal.treasury.gov/fsreports/rpt/mthTreasStmt/mts0914.pdf","gdp":17719800000000,"income_gdp":0.17,"spending_gdp":0.2,"surplus_deficit_gdp":-0.03,"gdp_url":"https://fred.stlouisfed.org/series/GDP","debt":17824100000000,"debt_url":"https://treasurydirect.gov/govt/reports/pd/mspd/2014/opds092014.pdf","int_rate":0.0243,"int_rate_url":"https://www.treasurydirect.gov/govt/rates/pd/avg/2014/2014_09.htm"},{"year":2015,"income":3248720000000,"spending":3702980000000,"surplus_deficit":-454511000000,"interest_public_debt":402184000000,"source_url":"https://www.fiscal.treasury.gov/fsreports/rpt/mthTreasStmt/mts0915.pdf","gdp":18331100000000,"income_gdp":0.18,"spending_gdp":0.2,"surplus_deficit_gdp":-0.02,"gdp_url":"https://fred.stlouisfed.org/series/GDP","debt":18150600000000,"debt_url":"https://treasurydirect.gov/govt/reports/pd/mspd/2015/opds092015.pdf","int_rate":0.024,"int_rate_url":"https://www.treasurydirect.gov/govt/rates/pd/avg/2015/2015_09.htm"},{"year":2016,"income":3266690000000,"spending":3854100000000,"surplus_deficit":-587412000000,"interest_public_debt":429963000000,"source_url":"https://www.fiscal.treasury.gov/fsreports/rpt/mthTreasStmt/mts0916.pdf","gdp":18799600000000,"income_gdp":0.17,"spending_gdp":0.21,"surplus_deficit_gdp":-0.03,"gdp_url":"https://fred.stlouisfed.org/series/GDP","debt":19573400000000,"debt_url":"https://treasurydirect.gov/govt/reports/pd/mspd/2016/opds092016.pdf","int_rate":0.0235,"int_rate_url":"https://www.treasurydirect.gov/govt/rates/pd/avg/2016/2016_09.htm"},{"year":2017,"income":3314890000000,"spending":3980610000000,"surplus_deficit":-665712000000,"interest_public_debt":456955000000,"source_url":"https://www.fiscal.treasury.gov/fsreports/rpt/mthTreasStmt/mts0917.pdf","gdp":19588100000000,"income_gdp":0.17,"spending_gdp":0.2,"surplus_deficit_gdp":-0.03,"gdp_url":"https://fred.stlouisfed.org/series/GDP","debt":20244900000000,"debt_url":"https://treasurydirect.gov/govt/reports/pd/mspd/2017/opds092017.pdf","int_rate":0.0223,"int_rate_url":"https://www.treasurydirect.gov/govt/rates/pd/avg/2017/2017_09.htm"},{"year":null}]

/***/ }),

/***/ "./src/colors.scss":
/*!*************************!*\
  !*** ./src/colors.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./colors.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/colors.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/income/donut.js":
/*!*****************************!*\
  !*** ./src/income/donut.js ***!
  \*****************************/
/*! exports provided: createDonut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDonut", function() { return createDonut; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors.scss */ "./src/colors.scss");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_colors_scss__WEBPACK_IMPORTED_MODULE_3__);




var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  arc: d3_shape__WEBPACK_IMPORTED_MODULE_1__["arc"],
  pie: d3_shape__WEBPACK_IMPORTED_MODULE_1__["pie"]
},
    radius = 45,
    arcFn = d3.arc(),
    pieFn = d3.pie().sort(null).value(function (d) {
  return d;
});

function setArcRadius(radius) {
  arcFn.outerRadius(radius).innerRadius(radius * .8);
}

function createDonut(container, percent, diameter, fillColor) {
  var data = [percent * 100, 100 - percent * 100],
      g = container.append('g').attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(diameter / 2, diameter / 2));
  setArcRadius(diameter / 2);
  var pie = g.selectAll(".arc").data(pieFn(data)).enter().append("g").attr("class", "arc");
  var donut = pie.append("path").attr("d", arcFn);
  donut.style("fill", function (d, i) {
    var shadedColor = fillColor || '#dd6666';
    return i === 0 ? shadedColor : '#dddddd';
  });
  g.append('text').text(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["fractionToPercent"])(percent)).attr('fill', _colors_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textColorParagraph).attr('font-size', diameter / 4).attr('text-anchor', 'middle').attr('font-weight', 'bold').attr('y', diameter * 0.08);
}

/***/ }),

/***/ "./src/income/gdp/data.js":
/*!********************************!*\
  !*** ./src/income/gdp/data.js ***!
  \********************************/
/*! exports provided: sectionOneData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionOneData", function() { return sectionOneData; });
/* harmony import */ var _public_csv_mts_mspd_rod_debt_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/csv/mts_mspd_rod_debt.csv */ "./public/csv/mts_mspd_rod_debt.csv");
/* harmony import */ var _public_csv_mts_mspd_rod_debt_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_csv_mts_mspd_rod_debt_csv__WEBPACK_IMPORTED_MODULE_0__);

var source;
_public_csv_mts_mspd_rod_debt_csv__WEBPACK_IMPORTED_MODULE_0___default.a.every(function (r) {
  if (r.year === 2017) {
    source = r;
    return false;
  }

  return true;
});
var sectionOneData = source;

/***/ }),

/***/ "./src/income/gdp/gdp.scss":
/*!*********************************!*\
  !*** ./src/income/gdp/gdp.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./gdp.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/income/gdp/gdp.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/income/gdp/gdpDots.js":
/*!***********************************!*\
  !*** ./src/income/gdp/gdpDots.js ***!
  \***********************************/
/*! exports provided: initGdpDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGdpDots", function() { return initGdpDots; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _receipts_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../receipts-utils */ "./src/income/receipts-utils.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/income/gdp/data.js");
/* harmony import */ var _donut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../donut */ "./src/income/donut.js");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../colors.scss */ "./src/colors.scss");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_colors_scss__WEBPACK_IMPORTED_MODULE_6__);








var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"],
  line: d3_shape__WEBPACK_IMPORTED_MODULE_1__["line"],
  create: d3_selection__WEBPACK_IMPORTED_MODULE_0__["create"]
};
var svg, dotContainer;

function addLegend() {
  var dotBox = d3.select('g.' + _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotContainerClass),
      legendBox = svg.append('g').classed('gdp-legend reset', true),
      height = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getElementBox"])(dotBox).height,
      margin = (1200 - Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getElementBox"])(dotBox).width) / 2,
      line = d3.line().x(function (d) {
    return d.x;
  }).y(function (d) {
    return d.y;
  }),
      lineData = [{
    x: 87,
    y: 0
  }, {
    x: 84,
    y: 0
  }, {
    x: 84,
    y: height
  }, {
    x: 87,
    y: height
  }],
      dotsRect = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getElementBox"])(dotContainer),
      text = legendBox.append('text').classed('reset', true).attr('fill', _colors_scss__WEBPACK_IMPORTED_MODULE_6___default.a.textColorParagraph).attr('text-anchor', 'middle').attr('y', 0).style('font-size', '16px');
  legendBox.append('path').classed('reset', true).attr('d', line(lineData)).attr('fill', 'none').attr('stroke', '#aaa').attr('stroke-width', 1);
  text.append('tspan').text('Total GDP').style('font-weight', '600').attr('x', 40).attr('dy', height / 2);
  text.append('tspan').text(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["simplifyNumber"])(_data__WEBPACK_IMPORTED_MODULE_4__["sectionOneData"].gdp)).attr('x', 40).attr('dy', 20);
}

function setGdpDots() {
  var incomeHeightOffset = 100,
      gdpDotCount = 16000,
      gdpDotColor = 'rgba(200,200,200,1)',
      dotPositionStart = _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["dotPositionAccessor"].get(),
      firstRowCount = _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotsPerRow - dotPositionStart.startIndex,
      fullRows = Math.floor(gdpDotCount / _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotsPerRow),
      lastRowCount = gdpDotCount - dotPositionStart.startIndex - fullRows * _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotsPerRow,
      gdpContainer = dotContainer.append('g').classed('gdp reset', true).attr('transform', 'scale(1.3)'),
      rowOne = gdpContainer.append('g').attr('transform', function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(0, incomeHeightOffset);
  });
  var i = 0,
      r = 0,
      rowCount = 1,
      rowPosition = dotPositionStart.startIndex,
      x = dotPositionStart.x,
      y = dotPositionStart.y; // first row

  for (i; i < firstRowCount; i++) {
    Object(_receipts_utils__WEBPACK_IMPORTED_MODULE_3__["dotFactory"])(gdpContainer, x, y, gdpDotColor);
    x += _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotOffset.x;
    rowPosition += 1;
  } // first full row


  x = 2;

  for (r; r < _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotsPerRow; r++) {
    Object(_receipts_utils__WEBPACK_IMPORTED_MODULE_3__["dotFactory"])(rowOne, x, -1, gdpDotColor);
    x += _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotOffset.x;
  } // clone rows


  for (rowCount; rowCount < fullRows; rowCount++) {
    rowOne.clone(true).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(0, rowCount * _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotOffset.y + incomeHeightOffset));
  } // final row


  i = 0;
  x = 2;
  var lastRow = gdpContainer.append('g').classed('last-row', true).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(0, rowCount * _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotOffset.y + incomeHeightOffset));

  for (i; i < lastRowCount; i++) {
    Object(_receipts_utils__WEBPACK_IMPORTED_MODULE_3__["dotFactory"])(lastRow, x, -1, gdpDotColor);
    x += _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotOffset.x;
  }

  gdpContainer.transition().duration(1000).attr('transform', 'scale(1)').ease();
}

function enableFactBox() {
  var factBox = d3.select('#gdp-facts').classed('out', null).classed('temporary-hide--show', true);
  svg.attr('width', 670);
  svg.attr('height', 300);
  d3.select('#viz').attr('style', 'float:left;width:auto');
}

function animationNext() {
  addLegend();
  enableFactBox();
}

function zoomOutDots() {
  var prevTransform = dotContainer.attr('transform'),
      zoomDuration = 2000;
  d3.select('.total-gov-revenue').transition().duration(500).attr('opacity', 0).on('end', function () {
    d3.select(this).remove();
  }).ease();
  d3.select('.income-dot-legend').transition().duration(500).attr('opacity', 0).on('end', function () {
    d3.select(this).remove();
  }).ease();
  dotContainer.transition().duration(zoomDuration).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(92, 0) + ' scale(0.5)').on('end', animationNext).ease();
}

function enterDonut() {
  var r = 120,
      donutGroup = dotContainer.append('g');
  var donutContainer;
  donutGroup.append('circle').attr('fill', 'white').attr('opacity', 0.85).attr('r', r).attr('cx', r).attr('cy', r);
  donutGroup.attr('transform', 'scale(1.5) ' + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(400, 0)).attr('opacity', 0);
  donutContainer = donutGroup.append('g').attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(20, 20));
  Object(_donut__WEBPACK_IMPORTED_MODULE_5__["createDonut"])(donutContainer, .174, 200, _colors_scss__WEBPACK_IMPORTED_MODULE_6___default.a.income);
  donutGroup.transition().delay(2500).duration(1500).attr('opacity', 1).attr('transform', 'scale(1) ' + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(900, 100)).ease();
}

function initGdpDots() {
  svg = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["establishContainer"])();
  svg.transition().duration(1000).attr('height', 450);
  dotContainer = d3.select('g.' + _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotContainerClass);
  zoomOutDots();
  setGdpDots();
  enterDonut();
}

/***/ }),

/***/ "./src/income/gdp/incomeDots.js":
/*!**************************************!*\
  !*** ./src/income/gdp/incomeDots.js ***!
  \**************************************/
/*! exports provided: enterIncomeDots, initIncomeDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterIncomeDots", function() { return enterIncomeDots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initIncomeDots", function() { return initIncomeDots; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _receipts_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../receipts-utils */ "./src/income/receipts-utils.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/income/gdp/data.js");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../colors.scss */ "./src/colors.scss");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_colors_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _gdpDots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gdpDots */ "./src/income/gdp/gdpDots.js");
/* harmony import */ var _infoBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../infoBox */ "./src/infoBox.js");
/* harmony import */ var _reveal_hwcta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reveal-hwcta */ "./src/income/reveal-hwcta.js");










var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"]
},
    xStart = _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].xStart,
    dotsPerRow = _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotsPerRow,
    dotOffset = _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotOffset;
var svg, factBox, incomeContainer, dotContainer, dotsWidth;

function readyIncomeDots() {
  incomeContainer = dotContainer.append('g').attr('opacity', 0).classed(_receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].incomeContainerClass, true).attr('transform', 'translate(-100, -50), scale(2)');
  var i = 0,
      top = 3400,
      x = xStart,
      y = 2;

  for (i; i < top; i++) {
    Object(_receipts_utils__WEBPACK_IMPORTED_MODULE_3__["dotFactory"])(incomeContainer, x, y);
    x += dotOffset.x;

    if ((i + 1) % dotsPerRow === 0) {
      y += dotOffset.y;
      x = xStart;
    }
  }

  _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["dotPositionAccessor"].set([x, y], i % dotsPerRow);
}

function buildHeader() {
  var text = svg.append('text').attr('opacity', 0).attr('fill', _colors_scss__WEBPACK_IMPORTED_MODULE_5___default.a.textColorParagraph).attr('class', 'total-gov-revenue').attr('text-anchor', 'middle').style('font-size', '18px');
  text.append('tspan').text('Total U.S. Government Revenue').style('font-weight', '600').attr('y', 20).attr('x', 600).attr('transform', 'translate(0, 20)');
  text.append('tspan').text(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["simplifyNumber"])(_data__WEBPACK_IMPORTED_MODULE_4__["sectionOneData"].income)).attr('y', 40).attr('x', 600);
  text.transition().duration(400).attr('opacity', 1);
}

function buildLegend() {
  var g = d3.select('.income-dot-legend'),
      duration = 2000,
      w = 126,
      xOffset = dotsWidth - w + (1200 - dotsWidth) / 2;
  g.transition().duration(duration).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(xOffset, 35));
  g.select('circle').attr('opacity', 1).transition().duration(duration).attr('r', 3).attr('cx', 0).attr('cy', 0).ease();
  g.append('text').text('= 1 Billion Dollars').attr('fill', _colors_scss__WEBPACK_IMPORTED_MODULE_5___default.a.textColorParagraph).attr('opacity', 0).style('font-size', 16).attr('y', 5).attr('x', 7).transition().delay(duration * 0.7).duration(duration / 2).attr('opacity', 1).ease();
  g.append('image').attr('height', 16).attr('width', 20).attr('x', 122).attr('y', -14).attr('opacity', 0).attr('data-box-id', 'billion-dollars').attr('xlink:href', '/assets/cg/icons/anecdote.svg').attr('style', 'cursor:pointer').on('click', _infoBox__WEBPACK_IMPORTED_MODULE_7__["triggerInfoBox"]).transition().delay(duration * 0.7).duration(duration / 2).attr('opacity', 1).ease();
}

function setDotContainer() {
  var xOffset;
  dotsWidth = dotsPerRow * dotOffset.x + xStart;
  xOffset = (1200 - dotsWidth) / 2;
  dotContainer = svg.append('g').classed(_receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].dotContainerClass, true).classed('reset', true).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(xOffset, _receipts_utils__WEBPACK_IMPORTED_MODULE_3__["receiptsConstants"].headingHeight));
}

function showText() {
  svg.attr('height', 180);
  factBox = d3.select('#income-facts').classed('temporary-hide--show', true);
  d3.select('.footnote').classed('temporary-hide', null).attr('style', 'clear:both');
  Object(_reveal_hwcta__WEBPACK_IMPORTED_MODULE_8__["revealHwcta"])();
}

function initContinueButton() {
  var button = d3.select('#tour-continue');
  button.on('click', function () {
    factBox.classed('temporary-hide--show', null);
    setTimeout(function () {
      factBox.remove();
    }, 1000);
    Object(_gdpDots__WEBPACK_IMPORTED_MODULE_6__["initGdpDots"])();
  });
}

function enterIncomeDots() {
  incomeContainer.transition().delay(1000).duration(700).attr('opacity', 1).attr('transform', 'translate(0,0), scale(1)').on('end', function () {
    buildHeader();
  }).ease();
  buildLegend();
  setTimeout(showText, 2000);
}
function initIncomeDots() {
  svg = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["establishContainer"])();
  initContinueButton();
  setDotContainer();
  readyIncomeDots();
}

/***/ }),

/***/ "./src/income/gdp/index.js":
/*!*********************************!*\
  !*** ./src/income/gdp/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _incomeDots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incomeDots */ "./src/income/gdp/incomeDots.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _infoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../infoBox */ "./src/infoBox.js");
/* harmony import */ var _gdp_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gdp.scss */ "./src/income/gdp/gdp.scss");
/* harmony import */ var _gdp_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_gdp_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../colors.scss */ "./src/colors.scss");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_colors_scss__WEBPACK_IMPORTED_MODULE_6__);







var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"]
},
    svg = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["establishContainer"])(),
    largeDot = svg.append('g').classed('income-dot-legend', true).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_3__["translator"])(600 - 182, 40)),
    radius = 75;

function phaseTwo() {
  largeDot.selectAll('text').transition().duration(1000).attr('opacity', 0).on('end', function () {
    d3.select(this).remove();
  }).ease();
  Object(_incomeDots__WEBPACK_IMPORTED_MODULE_2__["enterIncomeDots"])();
}

function addText() {
  var explanation = this.largeDot.append('text').attr('y', 54).attr('opacity', 0).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_3__["translator"])(radius * 2 + 20, 0)).attr('fill', _colors_scss__WEBPACK_IMPORTED_MODULE_6___default.a.textColorParagraph);
  explanation.append('tspan').attr('x', 0).attr('font-size', 18).text('In this analysis');
  explanation.append('tspan').attr('x', 0).attr('dy', 28).attr('font-size', 24).attr('font-weight', '600').text('This Dot');
  explanation.append('tspan').attr('font-size', 24).text(' represents');
  explanation.append('tspan').attr('x', 0).attr('font-size', 24).attr('font-weight', '600').attr('dy', 30).text('One Billion Dollars');
  this.largeDot.append('text').text('$1,000,000,000').attr('text-anchor', 'middle').attr('font-size', 18).attr('x', this.radius).attr('y', this.radius + 7).attr('fill', 'white').attr('opacity', 0);
  this.largeDot.selectAll('text').transition().duration(500).attr('opacity', 1).ease();
}

function stripSr() {
  d3.selectAll('.fact-box').classed('sr-only', false);
}

function initDot() {
  largeDot.append('circle').attr('cx', radius).attr('cy', radius).attr('r', 1).attr('fill', _colors_scss__WEBPACK_IMPORTED_MODULE_6___default.a.income).transition().duration(1500).attr('r', radius).on('end', addText.bind({
    largeDot: largeDot,
    radius: radius
  })).ease();
}

function init() {
  Object(_utils__WEBPACK_IMPORTED_MODULE_3__["stripBr"])();
  initDot();
  Object(_incomeDots__WEBPACK_IMPORTED_MODULE_2__["initIncomeDots"])();
  setTimeout(phaseTwo, 3000);
  setTimeout(stripSr, 1000);
}

init();

/***/ }),

/***/ "./src/income/receipts-utils.js":
/*!**************************************!*\
  !*** ./src/income/receipts-utils.js ***!
  \**************************************/
/*! exports provided: receiptsConstants, dotFactory, dotPositionAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiptsConstants", function() { return receiptsConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dotFactory", function() { return dotFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dotPositionAccessor", function() { return dotPositionAccessor; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colors.scss */ "./src/colors.scss");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_colors_scss__WEBPACK_IMPORTED_MODULE_2__);



var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"]
};
var dotPosition;

function dotPositionGetter() {
  return dotPosition;
}

function dotPositionSetter(position, startIndex) {
  dotPosition = {
    x: position[0],
    y: position[1],
    startIndex: startIndex
  };
}

var receiptsConstants = {
  dotOffset: {
    x: 5,
    y: 6
  },
  xStart: 2,
  headingHeight: 70,
  dotsPerRow: 203,
  dotContainerClass: 'dot-container',
  incomeContainerClass: 'income-container',
  shaderContainerClass: 'shader-container'
};
function dotFactory(container, x, y, color) {
  color = color || _colors_scss__WEBPACK_IMPORTED_MODULE_2___default.a.income;
  container.append('circle').attr('cx', x).attr('cy', y).attr('r', 2).style('fill', color);
}
var dotPositionAccessor = {
  get: dotPositionGetter,
  set: dotPositionSetter
};

/***/ }),

/***/ "./src/income/reveal-hwcta.js":
/*!************************************!*\
  !*** ./src/income/reveal-hwcta.js ***!
  \************************************/
/*! exports provided: revealHwcta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealHwcta", function() { return revealHwcta; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var d3 = {
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"]
};

function removeClass() {
  d3.selectAll('.hwcta').classed('hwcta--staged', null);
}

function revealHwcta() {
  if (d3.selectAll('.hwcta').size()) {
    removeClass();
  } else {
    setTimeout(revealHwcta, 100);
  }
}

/***/ }),

/***/ "./src/infoBox.js":
/*!************************!*\
  !*** ./src/infoBox.js ***!
  \************************/
/*! exports provided: triggerInfoBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerInfoBox", function() { return triggerInfoBox; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"]
},
    infoBoxClass = '.info-box',
    triggerClass = '.info-box-trigger',
    triggerClassActive = 'info-box-trigger--active',
    closeButtonClass = 'info-box__close',
    activeClass = 'info-box--active';

function addCloseIcon() {
  var box = d3.select(this),
      closeButton = box.append('button'),
      closeIcon = closeButton.append('i');
  closeButton.lower();
  closeButton.attr('class', closeButtonClass);
  closeIcon.attr('class', 'fas fa-times');
}

function closeBox(trigger, box) {
  box.classed(activeClass, null);
  trigger.classed(triggerClassActive, null);
}

function triggerInfoBox() {
  var trigger = d3.select(this),
      id = trigger.attr('data-box-id'),
      box = d3.select('#' + id),
      innerWidth = window.innerWidth,
      coords = trigger.node().getBoundingClientRect();
  var x = coords.x - 18;

  if (x > innerWidth - 300) {
    x = innerWidth - 300;
  }

  box.classed(activeClass, true);
  trigger.classed(triggerClassActive, true);
  box.attr('style', "top:".concat(coords.y - 18 + window.pageYOffset, "px;left:").concat(x, "px"));
  box.select('.' + closeButtonClass).on('click', null).on('click', function () {
    closeBox(trigger, box);
  });
}

(function init() {
  d3.selectAll(infoBoxClass).each(addCloseIcon);
  d3.selectAll(triggerClass).on('click', triggerInfoBox);
})();

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getElementBox, translator, getTransform, establishContainer, simplifyBillions, simplifyNumber, wordWrap, initDropShadow, fractionToPercent, stripBr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementBox", function() { return getElementBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translator", function() { return translator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransform", function() { return getTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "establishContainer", function() { return establishContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyBillions", function() { return simplifyBillions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyNumber", function() { return simplifyNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordWrap", function() { return wordWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDropShadow", function() { return initDropShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fractionToPercent", function() { return fractionToPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripBr", function() { return stripBr; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"]
};
function getElementBox(d3Selection) {
  var rect = d3Selection.node().getBoundingClientRect();
  return {
    width: Math.ceil(rect.width),
    height: Math.ceil(rect.height),
    right: Math.ceil(rect.right),
    bottom: Math.ceil(rect.bottom)
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

  if (svg.size() === 0) {
    height = height || 400;
    return viz.append('svg').classed('main', true).attr('shape-rendering', 'geometricPrecision').attr('height', height).attr('width', '1200px');
  } else if (height) {
    svg.attr('height', height);
  }

  return svg;
}
function simplifyBillions(n) {
  var billion = 1000000000;
  return "$".concat(Math.round(n / billion * 10) / 10, " B");
}
function simplifyNumber(n) {
  var trillion = 1000000000000,
      billion = 1000000000,
      million = 1000000,
      negativeSign = n < 0 ? '-' : '';
  var simplifier = million,
      letter = 'M';

  if (n === 0) {
    return '$0';
  }

  if (Math.abs(n) >= trillion) {
    simplifier = trillion;
    letter = 'T';
  } else if (Math.abs(n) >= billion) {
    simplifier = billion;
    letter = 'B';
  }

  return "".concat(negativeSign, "$").concat(Math.round(Math.abs(n) / simplifier * 10) / 10, " ").concat(letter);
}
function wordWrap(text, maxWidth) {
  var words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1,
      tspan;
  tspan = text.text(null).append("tspan").attr("x", 0);

  while (words.length > 0) {
    word = words.pop();
    line.push(word);
    tspan.text(line.join(" "));

    if (tspan.node().getComputedTextLength() > maxWidth) {
      line.pop();
      tspan.text(line.join(" "));
      line = [word];
      tspan = text.append("tspan").attr("x", 0).attr("dy", lineHeight + "em").text(word);
    }
  }
}
function initDropShadow() {
  var svg = establishContainer(),
      filter = svg.append('defs').append('filter').attr('id', 'drop1');
  filter.append('feDropShadow').attr('dx', 0).attr('dy', 0).attr('stdDeviation', 5).attr('flood-opacity', 0.2);
}
function fractionToPercent(n, precision) {
  if (!precision) {
    return parseInt(n * 100) + '%';
  } // TODO: handle precision


  console.warn('need to handle precision');
}
function stripBr() {
  d3.selectAll('br').remove();
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9ycy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmNvbWUvZ2RwL2dkcC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvY3ViZWhlbGl4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9sYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9tYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1kaXNwYXRjaC9zcmMvZGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2N1YmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9lbGFzdGljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9leHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9saW5lYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL3BvbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL3F1YWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL3Npbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYmFzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9iYXNpc0Nsb3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9jdWJlaGVsaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvZGlzY3JldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9oY2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9odWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2xhYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3BpZWNld2lzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3F1YW50aXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcmdiLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vZGVjb21wb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL3BhcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy96b29tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1wYXRoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcGF0aC9zcmMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9sb2NhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL21vdXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2xhc3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdHVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VudGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9leGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbnNlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2xvd2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3JhaXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0QWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3N0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi90ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yQWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NvdXJjZUV2ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3RvdWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3RvdWNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvd2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvYXJjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvYXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2FyZWFSYWRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvYmFzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9iYXNpc0Nsb3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2Jhc2lzT3Blbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhcmRpbmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvY2FyZGluYWxDbG9zZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXJkaW5hbE9wZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXRtdWxsUm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvY2F0bXVsbFJvbUNsb3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhdG11bGxSb21PcGVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvbGluZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvbGluZWFyQ2xvc2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvbW9ub3RvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9uYXR1cmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvcmFkaWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2Rlc2NlbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2xpbmVSYWRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9saW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vZmZzZXQvZGl2ZXJnaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb2Zmc2V0L2V4cGFuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29mZnNldC9ub25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb2Zmc2V0L3NpbGhvdWV0dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vZmZzZXQvd2lnZ2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb3JkZXIvYXNjZW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb3JkZXIvZGVzY2VuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29yZGVyL2luc2lkZU91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29yZGVyL25vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vcmRlci9yZXZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9wb2ludFJhZGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N0YWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9jcm9zcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9kaWFtb25kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9zdGFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL3RyaWFuZ2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL3d5ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy90aW1lb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL2FjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL2ludGVycnVwdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW50ZXJydXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vdHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9hdHRyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHJUd2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9lYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9pbnRlcnBvbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc3R5bGVUd2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Nzdi9tdHNfbXNwZF9yb2RfZGVidC5jc3YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9ycy5zY3NzPzhmNTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY29tZS9kb251dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jb21lL2dkcC9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmNvbWUvZ2RwL2dkcC5zY3NzP2JkYTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY29tZS9nZHAvZ2RwRG90cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jb21lL2dkcC9pbmNvbWVEb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmNvbWUvZ2RwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmNvbWUvcmVjZWlwdHMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY29tZS9yZXZlYWwtaHdjdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZm9Cb3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbImQzIiwic2VsZWN0IiwiYXJjIiwicGllIiwicmFkaXVzIiwiYXJjRm4iLCJwaWVGbiIsInNvcnQiLCJ2YWx1ZSIsImQiLCJzZXRBcmNSYWRpdXMiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiY3JlYXRlRG9udXQiLCJjb250YWluZXIiLCJwZXJjZW50IiwiZGlhbWV0ZXIiLCJmaWxsQ29sb3IiLCJkYXRhIiwiZyIsImFwcGVuZCIsImF0dHIiLCJ0cmFuc2xhdG9yIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJkb251dCIsInN0eWxlIiwiaSIsInNoYWRlZENvbG9yIiwidGV4dCIsImZyYWN0aW9uVG9QZXJjZW50IiwiY29sb3JzIiwidGV4dENvbG9yUGFyYWdyYXBoIiwic291cmNlIiwiQmlnTnVtYmVycyIsImV2ZXJ5IiwiciIsInllYXIiLCJzZWN0aW9uT25lRGF0YSIsImxpbmUiLCJjcmVhdGUiLCJzdmciLCJkb3RDb250YWluZXIiLCJhZGRMZWdlbmQiLCJkb3RCb3giLCJyZWNlaXB0c0NvbnN0YW50cyIsImRvdENvbnRhaW5lckNsYXNzIiwibGVnZW5kQm94IiwiY2xhc3NlZCIsImhlaWdodCIsImdldEVsZW1lbnRCb3giLCJtYXJnaW4iLCJ3aWR0aCIsIngiLCJ5IiwibGluZURhdGEiLCJkb3RzUmVjdCIsInNpbXBsaWZ5TnVtYmVyIiwiZ2RwIiwic2V0R2RwRG90cyIsImluY29tZUhlaWdodE9mZnNldCIsImdkcERvdENvdW50IiwiZ2RwRG90Q29sb3IiLCJkb3RQb3NpdGlvblN0YXJ0IiwiZG90UG9zaXRpb25BY2Nlc3NvciIsImdldCIsImZpcnN0Um93Q291bnQiLCJkb3RzUGVyUm93Iiwic3RhcnRJbmRleCIsImZ1bGxSb3dzIiwiTWF0aCIsImZsb29yIiwibGFzdFJvd0NvdW50IiwiZ2RwQ29udGFpbmVyIiwicm93T25lIiwicm93Q291bnQiLCJyb3dQb3NpdGlvbiIsImRvdEZhY3RvcnkiLCJkb3RPZmZzZXQiLCJjbG9uZSIsImxhc3RSb3ciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZW5hYmxlRmFjdEJveCIsImZhY3RCb3giLCJhbmltYXRpb25OZXh0Iiwiem9vbU91dERvdHMiLCJwcmV2VHJhbnNmb3JtIiwiem9vbUR1cmF0aW9uIiwib24iLCJyZW1vdmUiLCJlbnRlckRvbnV0IiwiZG9udXRHcm91cCIsImRvbnV0Q29udGFpbmVyIiwiaW5jb21lIiwiZGVsYXkiLCJpbml0R2RwRG90cyIsImVzdGFibGlzaENvbnRhaW5lciIsInhTdGFydCIsImluY29tZUNvbnRhaW5lciIsImRvdHNXaWR0aCIsInJlYWR5SW5jb21lRG90cyIsImluY29tZUNvbnRhaW5lckNsYXNzIiwidG9wIiwic2V0IiwiYnVpbGRIZWFkZXIiLCJidWlsZExlZ2VuZCIsInciLCJ4T2Zmc2V0IiwidHJpZ2dlckluZm9Cb3giLCJzZXREb3RDb250YWluZXIiLCJoZWFkaW5nSGVpZ2h0Iiwic2hvd1RleHQiLCJyZXZlYWxId2N0YSIsImluaXRDb250aW51ZUJ1dHRvbiIsImJ1dHRvbiIsInNldFRpbWVvdXQiLCJlbnRlckluY29tZURvdHMiLCJpbml0SW5jb21lRG90cyIsImxhcmdlRG90IiwicGhhc2VUd28iLCJhZGRUZXh0IiwiZXhwbGFuYXRpb24iLCJzdHJpcFNyIiwiaW5pdERvdCIsImJpbmQiLCJpbml0Iiwic3RyaXBCciIsImRvdFBvc2l0aW9uIiwiZG90UG9zaXRpb25HZXR0ZXIiLCJkb3RQb3NpdGlvblNldHRlciIsInBvc2l0aW9uIiwic2hhZGVyQ29udGFpbmVyQ2xhc3MiLCJjb2xvciIsInJlbW92ZUNsYXNzIiwic2l6ZSIsImluZm9Cb3hDbGFzcyIsInRyaWdnZXJDbGFzcyIsInRyaWdnZXJDbGFzc0FjdGl2ZSIsImNsb3NlQnV0dG9uQ2xhc3MiLCJhY3RpdmVDbGFzcyIsImFkZENsb3NlSWNvbiIsImJveCIsImNsb3NlQnV0dG9uIiwiY2xvc2VJY29uIiwibG93ZXIiLCJjbG9zZUJveCIsInRyaWdnZXIiLCJpZCIsImlubmVyV2lkdGgiLCJ3aW5kb3ciLCJjb29yZHMiLCJub2RlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVlPZmZzZXQiLCJlYWNoIiwiZDNTZWxlY3Rpb24iLCJyZWN0IiwiY2VpbCIsInJpZ2h0IiwiYm90dG9tIiwiZ2V0VHJhbnNmb3JtIiwicmUiLCJvcmlnaW5hbFRyYW5zZm9ybSIsIm1hdGNoIiwiTnVtYmVyIiwidml6Iiwic2ltcGxpZnlCaWxsaW9ucyIsIm4iLCJiaWxsaW9uIiwicm91bmQiLCJ0cmlsbGlvbiIsIm1pbGxpb24iLCJuZWdhdGl2ZVNpZ24iLCJzaW1wbGlmaWVyIiwibGV0dGVyIiwiYWJzIiwid29yZFdyYXAiLCJtYXhXaWR0aCIsIndvcmRzIiwic3BsaXQiLCJyZXZlcnNlIiwid29yZCIsImxpbmVOdW1iZXIiLCJsaW5lSGVpZ2h0IiwidHNwYW4iLCJsZW5ndGgiLCJwb3AiLCJwdXNoIiwiam9pbiIsImdldENvbXB1dGVkVGV4dExlbmd0aCIsImluaXREcm9wU2hhZG93IiwiZmlsdGVyIiwicHJlY2lzaW9uIiwicGFyc2VJbnQiLCJjb25zb2xlIiwid2FybiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvREQ7QUFBQTtBQUFBO0FBQUE7QUFBdUM7Ozs7Ozs7Ozs7Ozs7QUNBdkM7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaklwQjtBQUFlO0FBQ2Y7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Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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Q0FBQ1QsTUFBTCxDQUFZLE9BQVosRUFDSEMsSUFERyxDQUNFLEdBREYsRUFDTyxDQURQLEVBRUhBLElBRkcsQ0FFRSxJQUZGLEVBRVFvSyxVQUFVLEdBQUcsSUFGckIsRUFHSDVKLElBSEcsQ0FHRTBKLElBSEYsQ0FBUjtBQUlIO0FBQ0o7QUFDSjtBQUVNLFNBQVNTLGNBQVQsR0FBMEI7QUFDN0IsTUFBTXZKLEdBQUcsR0FBR3lELGtCQUFrQixFQUE5QjtBQUFBLE1BQ0krRixNQUFNLEdBQUd4SixHQUFHLENBQUNyQixNQUFKLENBQVcsTUFBWCxFQUFtQkEsTUFBbkIsQ0FBMEIsUUFBMUIsRUFDSkMsSUFESSxDQUNDLElBREQsRUFDTyxPQURQLENBRGI7QUFJQTRLLFFBQU0sQ0FBQzdLLE1BQVAsQ0FBYyxjQUFkLEVBQ0tDLElBREwsQ0FDVSxJQURWLEVBQ2dCLENBRGhCLEVBRUtBLElBRkwsQ0FFVSxJQUZWLEVBRWdCLENBRmhCLEVBR0tBLElBSEwsQ0FHVSxjQUhWLEVBRzBCLENBSDFCLEVBSUtBLElBSkwsQ0FJVSxlQUpWLEVBSTJCLEdBSjNCO0FBS0g7QUFFTSxTQUFTUyxpQkFBVCxDQUEyQjJJLENBQTNCLEVBQThCeUIsU0FBOUIsRUFBeUM7QUFDNUMsTUFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ1osV0FBT0MsUUFBUSxDQUFDMUIsQ0FBQyxHQUFHLEdBQUwsQ0FBUixHQUFvQixHQUEzQjtBQUNILEdBSDJDLENBSzVDOzs7QUFDQTJCLFNBQU8sQ0FBQ0MsSUFBUixDQUFhLDBCQUFiO0FBQ0g7QUFFTSxTQUFTckUsT0FBVCxHQUFtQjtBQUN0QmhJLElBQUUsQ0FBQ3VCLFNBQUgsQ0FBYSxJQUFiLEVBQW1Cb0UsTUFBbkI7QUFDSCxDIiwiZmlsZSI6ImluY29tZVRvR2RwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL2luY29tZS9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5jb21lL2dkcC9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29sb3JHcmF5RGFya1wiOiBcIiMzMjNhNDVcIixcblx0XCJjb2xvclByaW1hcnlcIjogXCIjMDA3MWJjXCIsXG5cdFwiY29sb3JQcmltYXJ5RGFya2VyXCI6IFwiIzIwNTQ5M1wiLFxuXHRcImNvbG9yUHJpbWFyeURhcmtlc3RcIjogXCIjMTEyZTUxXCIsXG5cdFwiY29sb3JQcmltYXJ5QWx0RGFya2VzdFwiOiBcIiMwNDZiOTlcIixcblx0XCJjb2xvclByaW1hcnlBbHRMaWdodFwiOiBcIiM5YmRhZjFcIixcblx0XCJjb2xvclByaW1hcnlBbHRMaWdodGVzdFwiOiBcIiNlMWYzZjhcIixcblx0XCJpbmNvbWVcIjogXCIjNEE5MEUyXCIsXG5cdFwicGFyZW50T25lXCI6IFwiIzM2NzNCQlwiLFxuXHRcInRleHRDb2xvckhlYWRpbmdcIjogXCIjNTU1NTU1XCIsXG5cdFwidGV4dENvbG9yUGFyYWdyYXBoXCI6IFwiIzY2NjY2NlwiLFxuXHRcImNvbG9yR3JheUNvb2xMaWdodFwiOiBcIiNkY2U0ZWZcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNnZHAtZmFjdHMge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBtYXJnaW46IDAgMXJlbTsgfVxcbiAgI2dkcC1mYWN0cyA+IGgxIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAjZ2RwLWZhY3RzIC50b3VyIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDsgfVxcblxcbiNnZHAtZmFjdHMub3V0IHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MjBweCkge1xcbiAgI2dkcC1mYWN0cyB7XFxuICAgIGNsZWFyOiBub25lO1xcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA2NzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICNnZHAtZmFjdHMgaDEge1xcbiAgICAgIG1hcmdpbi10b3A6IDA7IH1cXG4gIC5wYWdlLXdyYXBwZXIge1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87IH0gfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3IoKSB7fVxuXG5leHBvcnQgdmFyIGRhcmtlciA9IDAuNztcbmV4cG9ydCB2YXIgYnJpZ2h0ZXIgPSAxIC8gZGFya2VyO1xuXG52YXIgcmVJID0gXCJcXFxccyooWystXT9cXFxcZCspXFxcXHMqXCIsXG4gICAgcmVOID0gXCJcXFxccyooWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPylcXFxccypcIixcbiAgICByZVAgPSBcIlxcXFxzKihbKy1dP1xcXFxkKlxcXFwuP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KSVcXFxccypcIixcbiAgICByZUhleDMgPSAvXiMoWzAtOWEtZl17M30pJC8sXG4gICAgcmVIZXg2ID0gL14jKFswLTlhLWZdezZ9KSQvLFxuICAgIHJlUmdiSW50ZWdlciA9IG5ldyBSZWdFeHAoXCJecmdiXFxcXChcIiArIFtyZUksIHJlSSwgcmVJXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlUmdiUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJecmdiXFxcXChcIiArIFtyZVAsIHJlUCwgcmVQXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlUmdiYUludGVnZXIgPSBuZXcgUmVnRXhwKFwiXnJnYmFcXFxcKFwiICsgW3JlSSwgcmVJLCByZUksIHJlTl0gKyBcIlxcXFwpJFwiKSxcbiAgICByZVJnYmFQZXJjZW50ID0gbmV3IFJlZ0V4cChcIl5yZ2JhXFxcXChcIiArIFtyZVAsIHJlUCwgcmVQLCByZU5dICsgXCJcXFxcKSRcIiksXG4gICAgcmVIc2xQZXJjZW50ID0gbmV3IFJlZ0V4cChcIl5oc2xcXFxcKFwiICsgW3JlTiwgcmVQLCByZVBdICsgXCJcXFxcKSRcIiksXG4gICAgcmVIc2xhUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJeaHNsYVxcXFwoXCIgKyBbcmVOLCByZVAsIHJlUCwgcmVOXSArIFwiXFxcXCkkXCIpO1xuXG52YXIgbmFtZWQgPSB7XG4gIGFsaWNlYmx1ZTogMHhmMGY4ZmYsXG4gIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXG4gIGFxdWE6IDB4MDBmZmZmLFxuICBhcXVhbWFyaW5lOiAweDdmZmZkNCxcbiAgYXp1cmU6IDB4ZjBmZmZmLFxuICBiZWlnZTogMHhmNWY1ZGMsXG4gIGJpc3F1ZTogMHhmZmU0YzQsXG4gIGJsYWNrOiAweDAwMDAwMCxcbiAgYmxhbmNoZWRhbG1vbmQ6IDB4ZmZlYmNkLFxuICBibHVlOiAweDAwMDBmZixcbiAgYmx1ZXZpb2xldDogMHg4YTJiZTIsXG4gIGJyb3duOiAweGE1MmEyYSxcbiAgYnVybHl3b29kOiAweGRlYjg4NyxcbiAgY2FkZXRibHVlOiAweDVmOWVhMCxcbiAgY2hhcnRyZXVzZTogMHg3ZmZmMDAsXG4gIGNob2NvbGF0ZTogMHhkMjY5MWUsXG4gIGNvcmFsOiAweGZmN2Y1MCxcbiAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkLFxuICBjb3Juc2lsazogMHhmZmY4ZGMsXG4gIGNyaW1zb246IDB4ZGMxNDNjLFxuICBjeWFuOiAweDAwZmZmZixcbiAgZGFya2JsdWU6IDB4MDAwMDhiLFxuICBkYXJrY3lhbjogMHgwMDhiOGIsXG4gIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiLFxuICBkYXJrZ3JheTogMHhhOWE5YTksXG4gIGRhcmtncmVlbjogMHgwMDY0MDAsXG4gIGRhcmtncmV5OiAweGE5YTlhOSxcbiAgZGFya2toYWtpOiAweGJkYjc2YixcbiAgZGFya21hZ2VudGE6IDB4OGIwMDhiLFxuICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmYsXG4gIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwLFxuICBkYXJrb3JjaGlkOiAweDk5MzJjYyxcbiAgZGFya3JlZDogMHg4YjAwMDAsXG4gIGRhcmtzYWxtb246IDB4ZTk5NjdhLFxuICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmLFxuICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YixcbiAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGYsXG4gIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmLFxuICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMSxcbiAgZGFya3Zpb2xldDogMHg5NDAwZDMsXG4gIGRlZXBwaW5rOiAweGZmMTQ5MyxcbiAgZGVlcHNreWJsdWU6IDB4MDBiZmZmLFxuICBkaW1ncmF5OiAweDY5Njk2OSxcbiAgZGltZ3JleTogMHg2OTY5NjksXG4gIGRvZGdlcmJsdWU6IDB4MWU5MGZmLFxuICBmaXJlYnJpY2s6IDB4YjIyMjIyLFxuICBmbG9yYWx3aGl0ZTogMHhmZmZhZjAsXG4gIGZvcmVzdGdyZWVuOiAweDIyOGIyMixcbiAgZnVjaHNpYTogMHhmZjAwZmYsXG4gIGdhaW5zYm9ybzogMHhkY2RjZGMsXG4gIGdob3N0d2hpdGU6IDB4ZjhmOGZmLFxuICBnb2xkOiAweGZmZDcwMCxcbiAgZ29sZGVucm9kOiAweGRhYTUyMCxcbiAgZ3JheTogMHg4MDgwODAsXG4gIGdyZWVuOiAweDAwODAwMCxcbiAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxuICBncmV5OiAweDgwODA4MCxcbiAgaG9uZXlkZXc6IDB4ZjBmZmYwLFxuICBob3RwaW5rOiAweGZmNjliNCxcbiAgaW5kaWFucmVkOiAweGNkNWM1YyxcbiAgaW5kaWdvOiAweDRiMDA4MixcbiAgaXZvcnk6IDB4ZmZmZmYwLFxuICBraGFraTogMHhmMGU2OGMsXG4gIGxhdmVuZGVyOiAweGU2ZTZmYSxcbiAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXG4gIGxhd25ncmVlbjogMHg3Y2ZjMDAsXG4gIGxlbW9uY2hpZmZvbjogMHhmZmZhY2QsXG4gIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXG4gIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwLFxuICBsaWdodGN5YW46IDB4ZTBmZmZmLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXG4gIGxpZ2h0Z3JheTogMHhkM2QzZDMsXG4gIGxpZ2h0Z3JlZW46IDB4OTBlZTkwLFxuICBsaWdodGdyZXk6IDB4ZDNkM2QzLFxuICBsaWdodHBpbms6IDB4ZmZiNmMxLFxuICBsaWdodHNhbG1vbjogMHhmZmEwN2EsXG4gIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxuICBsaWdodHNreWJsdWU6IDB4ODdjZWZhLFxuICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTksXG4gIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcbiAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlLFxuICBsaWdodHllbGxvdzogMHhmZmZmZTAsXG4gIGxpbWU6IDB4MDBmZjAwLFxuICBsaW1lZ3JlZW46IDB4MzJjZDMyLFxuICBsaW5lbjogMHhmYWYwZTYsXG4gIG1hZ2VudGE6IDB4ZmYwMGZmLFxuICBtYXJvb246IDB4ODAwMDAwLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYSxcbiAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXG4gIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDMsXG4gIG1lZGl1bXB1cnBsZTogMHg5MzcwZGIsXG4gIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcbiAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZSxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhLFxuICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxuICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1LFxuICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwLFxuICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxuICBtaXN0eXJvc2U6IDB4ZmZlNGUxLFxuICBtb2NjYXNpbjogMHhmZmU0YjUsXG4gIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcbiAgbmF2eTogMHgwMDAwODAsXG4gIG9sZGxhY2U6IDB4ZmRmNWU2LFxuICBvbGl2ZTogMHg4MDgwMDAsXG4gIG9saXZlZHJhYjogMHg2YjhlMjMsXG4gIG9yYW5nZTogMHhmZmE1MDAsXG4gIG9yYW5nZXJlZDogMHhmZjQ1MDAsXG4gIG9yY2hpZDogMHhkYTcwZDYsXG4gIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhLFxuICBwYWxlZ3JlZW46IDB4OThmYjk4LFxuICBwYWxldHVycXVvaXNlOiAweGFmZWVlZSxcbiAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTMsXG4gIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxuICBwZWFjaHB1ZmY6IDB4ZmZkYWI5LFxuICBwZXJ1OiAweGNkODUzZixcbiAgcGluazogMHhmZmMwY2IsXG4gIHBsdW06IDB4ZGRhMGRkLFxuICBwb3dkZXJibHVlOiAweGIwZTBlNixcbiAgcHVycGxlOiAweDgwMDA4MCxcbiAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTksXG4gIHJlZDogMHhmZjAwMDAsXG4gIHJvc3licm93bjogMHhiYzhmOGYsXG4gIHJveWFsYmx1ZTogMHg0MTY5ZTEsXG4gIHNhZGRsZWJyb3duOiAweDhiNDUxMyxcbiAgc2FsbW9uOiAweGZhODA3MixcbiAgc2FuZHlicm93bjogMHhmNGE0NjAsXG4gIHNlYWdyZWVuOiAweDJlOGI1NyxcbiAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxuICBzaWVubmE6IDB4YTA1MjJkLFxuICBzaWx2ZXI6IDB4YzBjMGMwLFxuICBza3libHVlOiAweDg3Y2VlYixcbiAgc2xhdGVibHVlOiAweDZhNWFjZCxcbiAgc2xhdGVncmF5OiAweDcwODA5MCxcbiAgc2xhdGVncmV5OiAweDcwODA5MCxcbiAgc25vdzogMHhmZmZhZmEsXG4gIHNwcmluZ2dyZWVuOiAweDAwZmY3ZixcbiAgc3RlZWxibHVlOiAweDQ2ODJiNCxcbiAgdGFuOiAweGQyYjQ4YyxcbiAgdGVhbDogMHgwMDgwODAsXG4gIHRoaXN0bGU6IDB4ZDhiZmQ4LFxuICB0b21hdG86IDB4ZmY2MzQ3LFxuICB0dXJxdW9pc2U6IDB4NDBlMGQwLFxuICB2aW9sZXQ6IDB4ZWU4MmVlLFxuICB3aGVhdDogMHhmNWRlYjMsXG4gIHdoaXRlOiAweGZmZmZmZixcbiAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXG4gIHllbGxvdzogMHhmZmZmMDAsXG4gIHllbGxvd2dyZWVuOiAweDlhY2QzMlxufTtcblxuZGVmaW5lKENvbG9yLCBjb2xvciwge1xuICBkaXNwbGF5YWJsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmdiKCkuZGlzcGxheWFibGUoKTtcbiAgfSxcbiAgaGV4OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2IoKS5oZXgoKTtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJnYigpICsgXCJcIjtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yKGZvcm1hdCkge1xuICB2YXIgbTtcbiAgZm9ybWF0ID0gKGZvcm1hdCArIFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKG0gPSByZUhleDMuZXhlYyhmb3JtYXQpKSA/IChtID0gcGFyc2VJbnQobVsxXSwgMTYpLCBuZXcgUmdiKChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4MGYwKSwgKG0gPj4gNCAmIDB4ZikgfCAobSAmIDB4ZjApLCAoKG0gJiAweGYpIDw8IDQpIHwgKG0gJiAweGYpLCAxKSkgLy8gI2YwMFxuICAgICAgOiAobSA9IHJlSGV4Ni5leGVjKGZvcm1hdCkpID8gcmdibihwYXJzZUludChtWzFdLCAxNikpIC8vICNmZjAwMDBcbiAgICAgIDogKG0gPSByZVJnYkludGVnZXIuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSwgbVsyXSwgbVszXSwgMSkgLy8gcmdiKDI1NSwgMCwgMClcbiAgICAgIDogKG0gPSByZVJnYlBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgMSkgLy8gcmdiKDEwMCUsIDAlLCAwJSlcbiAgICAgIDogKG0gPSByZVJnYmFJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0sIG1bMl0sIG1bM10sIG1bNF0pIC8vIHJnYmEoMjU1LCAwLCAwLCAxKVxuICAgICAgOiAobSA9IHJlUmdiYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgbVs0XSkgLy8gcmdiKDEwMCUsIDAlLCAwJSwgMSlcbiAgICAgIDogKG0gPSByZUhzbFBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgMSkgLy8gaHNsKDEyMCwgNTAlLCA1MCUpXG4gICAgICA6IChtID0gcmVIc2xhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCBtWzRdKSAvLyBoc2xhKDEyMCwgNTAlLCA1MCUsIDEpXG4gICAgICA6IG5hbWVkLmhhc093blByb3BlcnR5KGZvcm1hdCkgPyByZ2JuKG5hbWVkW2Zvcm1hdF0pXG4gICAgICA6IGZvcm1hdCA9PT0gXCJ0cmFuc3BhcmVudFwiID8gbmV3IFJnYihOYU4sIE5hTiwgTmFOLCAwKVxuICAgICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiByZ2JuKG4pIHtcbiAgcmV0dXJuIG5ldyBSZ2IobiA+PiAxNiAmIDB4ZmYsIG4gPj4gOCAmIDB4ZmYsIG4gJiAweGZmLCAxKTtcbn1cblxuZnVuY3Rpb24gcmdiYShyLCBnLCBiLCBhKSB7XG4gIGlmIChhIDw9IDApIHIgPSBnID0gYiA9IE5hTjtcbiAgcmV0dXJuIG5ldyBSZ2IociwgZywgYiwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JDb252ZXJ0KG8pIHtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgUmdiO1xuICBvID0gby5yZ2IoKTtcbiAgcmV0dXJuIG5ldyBSZ2Ioby5yLCBvLmcsIG8uYiwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gcmdiQ29udmVydChyKSA6IG5ldyBSZ2IociwgZywgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5yID0gK3I7XG4gIHRoaXMuZyA9ICtnO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShSZ2IsIHJnYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGRpc3BsYXlhYmxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKDAgPD0gdGhpcy5yICYmIHRoaXMuciA8PSAyNTUpXG4gICAgICAgICYmICgwIDw9IHRoaXMuZyAmJiB0aGlzLmcgPD0gMjU1KVxuICAgICAgICAmJiAoMCA8PSB0aGlzLmIgJiYgdGhpcy5iIDw9IDI1NSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5vcGFjaXR5ICYmIHRoaXMub3BhY2l0eSA8PSAxKTtcbiAgfSxcbiAgaGV4OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCIjXCIgKyBoZXgodGhpcy5yKSArIGhleCh0aGlzLmcpICsgaGV4KHRoaXMuYik7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IHRoaXMub3BhY2l0eTsgYSA9IGlzTmFOKGEpID8gMSA6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGEpKTtcbiAgICByZXR1cm4gKGEgPT09IDEgPyBcInJnYihcIiA6IFwicmdiYShcIilcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5yKSB8fCAwKSkgKyBcIiwgXCJcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5nKSB8fCAwKSkgKyBcIiwgXCJcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5iKSB8fCAwKSlcbiAgICAgICAgKyAoYSA9PT0gMSA/IFwiKVwiIDogXCIsIFwiICsgYSArIFwiKVwiKTtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBoZXgodmFsdWUpIHtcbiAgdmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodmFsdWUpIHx8IDApKTtcbiAgcmV0dXJuICh2YWx1ZSA8IDE2ID8gXCIwXCIgOiBcIlwiKSArIHZhbHVlLnRvU3RyaW5nKDE2KTtcbn1cblxuZnVuY3Rpb24gaHNsYShoLCBzLCBsLCBhKSB7XG4gIGlmIChhIDw9IDApIGggPSBzID0gbCA9IE5hTjtcbiAgZWxzZSBpZiAobCA8PSAwIHx8IGwgPj0gMSkgaCA9IHMgPSBOYU47XG4gIGVsc2UgaWYgKHMgPD0gMCkgaCA9IE5hTjtcbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBuZXcgSHNsKG8uaCwgby5zLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IEhzbDtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBvO1xuICBvID0gby5yZ2IoKTtcbiAgdmFyIHIgPSBvLnIgLyAyNTUsXG4gICAgICBnID0gby5nIC8gMjU1LFxuICAgICAgYiA9IG8uYiAvIDI1NSxcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICBoID0gTmFOLFxuICAgICAgcyA9IG1heCAtIG1pbixcbiAgICAgIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gIGlmIChzKSB7XG4gICAgaWYgKHIgPT09IG1heCkgaCA9IChnIC0gYikgLyBzICsgKGcgPCBiKSAqIDY7XG4gICAgZWxzZSBpZiAoZyA9PT0gbWF4KSBoID0gKGIgLSByKSAvIHMgKyAyO1xuICAgIGVsc2UgaCA9IChyIC0gZykgLyBzICsgNDtcbiAgICBzIC89IGwgPCAwLjUgPyBtYXggKyBtaW4gOiAyIC0gbWF4IC0gbWluO1xuICAgIGggKj0gNjA7XG4gIH0gZWxzZSB7XG4gICAgcyA9IGwgPiAwICYmIGwgPCAxID8gMCA6IGg7XG4gIH1cbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaHNsQ29udmVydChoKSA6IG5ldyBIc2woaCwgcywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5mdW5jdGlvbiBIc2woaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEhzbCwgaHNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0gdGhpcy5oICUgMzYwICsgKHRoaXMuaCA8IDApICogMzYwLFxuICAgICAgICBzID0gaXNOYU4oaCkgfHwgaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMsXG4gICAgICAgIGwgPSB0aGlzLmwsXG4gICAgICAgIG0yID0gbCArIChsIDwgMC41ID8gbCA6IDEgLSBsKSAqIHMsXG4gICAgICAgIG0xID0gMiAqIGwgLSBtMjtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGhzbDJyZ2IoaCA+PSAyNDAgPyBoIC0gMjQwIDogaCArIDEyMCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCA8IDEyMCA/IGggKyAyNDAgOiBoIC0gMTIwLCBtMSwgbTIpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfSxcbiAgZGlzcGxheWFibGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoMCA8PSB0aGlzLnMgJiYgdGhpcy5zIDw9IDEgfHwgaXNOYU4odGhpcy5zKSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5sICYmIHRoaXMubCA8PSAxKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9XG59KSk7XG5cbi8qIEZyb20gRnZEIDEzLjM3LCBDU1MgQ29sb3IgTW9kdWxlIExldmVsIDMgKi9cbmZ1bmN0aW9uIGhzbDJyZ2IoaCwgbTEsIG0yKSB7XG4gIHJldHVybiAoaCA8IDYwID8gbTEgKyAobTIgLSBtMSkgKiBoIC8gNjBcbiAgICAgIDogaCA8IDE4MCA/IG0yXG4gICAgICA6IGggPCAyNDAgPyBtMSArIChtMiAtIG0xKSAqICgyNDAgLSBoKSAvIDYwXG4gICAgICA6IG0xKSAqIDI1NTtcbn1cbiIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZVwiO1xuaW1wb3J0IHtDb2xvciwgcmdiQ29udmVydCwgUmdiLCBkYXJrZXIsIGJyaWdodGVyfSBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IHtkZWcycmFkLCByYWQyZGVnfSBmcm9tIFwiLi9tYXRoXCI7XG5cbnZhciBBID0gLTAuMTQ4NjEsXG4gICAgQiA9ICsxLjc4Mjc3LFxuICAgIEMgPSAtMC4yOTIyNyxcbiAgICBEID0gLTAuOTA2NDksXG4gICAgRSA9ICsxLjk3Mjk0LFxuICAgIEVEID0gRSAqIEQsXG4gICAgRUIgPSBFICogQixcbiAgICBCQ19EQSA9IEIgKiBDIC0gRCAqIEE7XG5cbmZ1bmN0aW9uIGN1YmVoZWxpeENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEN1YmVoZWxpeCkgcmV0dXJuIG5ldyBDdWJlaGVsaXgoby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIFJnYikpIG8gPSByZ2JDb252ZXJ0KG8pO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbCA9IChCQ19EQSAqIGIgKyBFRCAqIHIgLSBFQiAqIGcpIC8gKEJDX0RBICsgRUQgLSBFQiksXG4gICAgICBibCA9IGIgLSBsLFxuICAgICAgayA9IChFICogKGcgLSBsKSAtIEMgKiBibCkgLyBELFxuICAgICAgcyA9IE1hdGguc3FydChrICogayArIGJsICogYmwpIC8gKEUgKiBsICogKDEgLSBsKSksIC8vIE5hTiBpZiBsPTAgb3IgbD0xXG4gICAgICBoID0gcyA/IE1hdGguYXRhbjIoaywgYmwpICogcmFkMmRlZyAtIDEyMCA6IE5hTjtcbiAgcmV0dXJuIG5ldyBDdWJlaGVsaXgoaCA8IDAgPyBoICsgMzYwIDogaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3ViZWhlbGl4KGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjdWJlaGVsaXhDb252ZXJ0KGgpIDogbmV3IEN1YmVoZWxpeChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDdWJlaGVsaXgoaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEN1YmVoZWxpeCwgY3ViZWhlbGl4LCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBDdWJlaGVsaXgodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgQ3ViZWhlbGl4KHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0gaXNOYU4odGhpcy5oKSA/IDAgOiAodGhpcy5oICsgMTIwKSAqIGRlZzJyYWQsXG4gICAgICAgIGwgPSArdGhpcy5sLFxuICAgICAgICBhID0gaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMgKiBsICogKDEgLSBsKSxcbiAgICAgICAgY29zaCA9IE1hdGguY29zKGgpLFxuICAgICAgICBzaW5oID0gTWF0aC5zaW4oaCk7XG4gICAgcmV0dXJuIG5ldyBSZ2IoXG4gICAgICAyNTUgKiAobCArIGEgKiAoQSAqIGNvc2ggKyBCICogc2luaCkpLFxuICAgICAgMjU1ICogKGwgKyBhICogKEMgKiBjb3NoICsgRCAqIHNpbmgpKSxcbiAgICAgIDI1NSAqIChsICsgYSAqIChFICogY29zaCkpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfVxufSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29uc3RydWN0b3IsIGZhY3RvcnksIHByb3RvdHlwZSkge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBmYWN0b3J5LnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQocGFyZW50LCBkZWZpbml0aW9uKSB7XG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUpO1xuICBmb3IgKHZhciBrZXkgaW4gZGVmaW5pdGlvbikgcHJvdG90eXBlW2tleV0gPSBkZWZpbml0aW9uW2tleV07XG4gIHJldHVybiBwcm90b3R5cGU7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgY29sb3IsIHJnYiwgaHNsfSBmcm9tIFwiLi9jb2xvclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGxhYiwgaGNsLCBsY2gsIGdyYXl9IGZyb20gXCIuL2xhYlwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1YmVoZWxpeH0gZnJvbSBcIi4vY3ViZWhlbGl4XCI7XG4iLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmVcIjtcbmltcG9ydCB7Q29sb3IsIHJnYkNvbnZlcnQsIFJnYn0gZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCB7ZGVnMnJhZCwgcmFkMmRlZ30gZnJvbSBcIi4vbWF0aFwiO1xuXG4vLyBodHRwczovL2JldGEub2JzZXJ2YWJsZWhxLmNvbS9AbWJvc3RvY2svbGFiLWFuZC1yZ2JcbnZhciBLID0gMTgsXG4gICAgWG4gPSAwLjk2NDIyLFxuICAgIFluID0gMSxcbiAgICBabiA9IDAuODI1MjEsXG4gICAgdDAgPSA0IC8gMjksXG4gICAgdDEgPSA2IC8gMjksXG4gICAgdDIgPSAzICogdDEgKiB0MSxcbiAgICB0MyA9IHQxICogdDEgKiB0MTtcblxuZnVuY3Rpb24gbGFiQ29udmVydChvKSB7XG4gIGlmIChvIGluc3RhbmNlb2YgTGFiKSByZXR1cm4gbmV3IExhYihvLmwsIG8uYSwgby5iLCBvLm9wYWNpdHkpO1xuICBpZiAobyBpbnN0YW5jZW9mIEhjbCkge1xuICAgIGlmIChpc05hTihvLmgpKSByZXR1cm4gbmV3IExhYihvLmwsIDAsIDAsIG8ub3BhY2l0eSk7XG4gICAgdmFyIGggPSBvLmggKiBkZWcycmFkO1xuICAgIHJldHVybiBuZXcgTGFiKG8ubCwgTWF0aC5jb3MoaCkgKiBvLmMsIE1hdGguc2luKGgpICogby5jLCBvLm9wYWNpdHkpO1xuICB9XG4gIGlmICghKG8gaW5zdGFuY2VvZiBSZ2IpKSBvID0gcmdiQ29udmVydChvKTtcbiAgdmFyIHIgPSByZ2IybHJnYihvLnIpLFxuICAgICAgZyA9IHJnYjJscmdiKG8uZyksXG4gICAgICBiID0gcmdiMmxyZ2Ioby5iKSxcbiAgICAgIHkgPSB4eXoybGFiKCgwLjIyMjUwNDUgKiByICsgMC43MTY4Nzg2ICogZyArIDAuMDYwNjE2OSAqIGIpIC8gWW4pLCB4LCB6O1xuICBpZiAociA9PT0gZyAmJiBnID09PSBiKSB4ID0geiA9IHk7IGVsc2Uge1xuICAgIHggPSB4eXoybGFiKCgwLjQzNjA3NDcgKiByICsgMC4zODUwNjQ5ICogZyArIDAuMTQzMDgwNCAqIGIpIC8gWG4pO1xuICAgIHogPSB4eXoybGFiKCgwLjAxMzkzMjIgKiByICsgMC4wOTcxMDQ1ICogZyArIDAuNzE0MTczMyAqIGIpIC8gWm4pO1xuICB9XG4gIHJldHVybiBuZXcgTGFiKDExNiAqIHkgLSAxNiwgNTAwICogKHggLSB5KSwgMjAwICogKHkgLSB6KSwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyYXkobCwgb3BhY2l0eSkge1xuICByZXR1cm4gbmV3IExhYihsLCAwLCAwLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxhYihsLCBhLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gbGFiQ29udmVydChsKSA6IG5ldyBMYWIobCwgYSwgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGFiKGwsIGEsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMuYSA9ICthO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShMYWIsIGxhYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBMYWIodGhpcy5sICsgSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMuYSwgdGhpcy5iLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IExhYih0aGlzLmwgLSBLICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5hLCB0aGlzLmIsIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHkgPSAodGhpcy5sICsgMTYpIC8gMTE2LFxuICAgICAgICB4ID0gaXNOYU4odGhpcy5hKSA/IHkgOiB5ICsgdGhpcy5hIC8gNTAwLFxuICAgICAgICB6ID0gaXNOYU4odGhpcy5iKSA/IHkgOiB5IC0gdGhpcy5iIC8gMjAwO1xuICAgIHggPSBYbiAqIGxhYjJ4eXooeCk7XG4gICAgeSA9IFluICogbGFiMnh5eih5KTtcbiAgICB6ID0gWm4gKiBsYWIyeHl6KHopO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgbHJnYjJyZ2IoIDMuMTMzODU2MSAqIHggLSAxLjYxNjg2NjcgKiB5IC0gMC40OTA2MTQ2ICogeiksXG4gICAgICBscmdiMnJnYigtMC45Nzg3Njg0ICogeCArIDEuOTE2MTQxNSAqIHkgKyAwLjAzMzQ1NDAgKiB6KSxcbiAgICAgIGxyZ2IycmdiKCAwLjA3MTk0NTMgKiB4IC0gMC4yMjg5OTE0ICogeSArIDEuNDA1MjQyNyAqIHopLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiB4eXoybGFiKHQpIHtcbiAgcmV0dXJuIHQgPiB0MyA/IE1hdGgucG93KHQsIDEgLyAzKSA6IHQgLyB0MiArIHQwO1xufVxuXG5mdW5jdGlvbiBsYWIyeHl6KHQpIHtcbiAgcmV0dXJuIHQgPiB0MSA/IHQgKiB0ICogdCA6IHQyICogKHQgLSB0MCk7XG59XG5cbmZ1bmN0aW9uIGxyZ2IycmdiKHgpIHtcbiAgcmV0dXJuIDI1NSAqICh4IDw9IDAuMDAzMTMwOCA/IDEyLjkyICogeCA6IDEuMDU1ICogTWF0aC5wb3coeCwgMSAvIDIuNCkgLSAwLjA1NSk7XG59XG5cbmZ1bmN0aW9uIHJnYjJscmdiKHgpIHtcbiAgcmV0dXJuICh4IC89IDI1NSkgPD0gMC4wNDA0NSA/IHggLyAxMi45MiA6IE1hdGgucG93KCh4ICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG59XG5cbmZ1bmN0aW9uIGhjbENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEhjbCkgcmV0dXJuIG5ldyBIY2woby5oLCBvLmMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIExhYikpIG8gPSBsYWJDb252ZXJ0KG8pO1xuICBpZiAoby5hID09PSAwICYmIG8uYiA9PT0gMCkgcmV0dXJuIG5ldyBIY2woTmFOLCAwLCBvLmwsIG8ub3BhY2l0eSk7XG4gIHZhciBoID0gTWF0aC5hdGFuMihvLmIsIG8uYSkgKiByYWQyZGVnO1xuICByZXR1cm4gbmV3IEhjbChoIDwgMCA/IGggKyAzNjAgOiBoLCBNYXRoLnNxcnQoby5hICogby5hICsgby5iICogby5iKSwgby5sLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGNoKGwsIGMsIGgsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoY2xDb252ZXJ0KGwpIDogbmV3IEhjbChoLCBjLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoY2woaCwgYywgbCwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGhjbENvbnZlcnQoaCkgOiBuZXcgSGNsKGgsIGMsIGwsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhjbChoLCBjLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLmMgPSArYztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoSGNsLCBoY2wsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcjogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgSGNsKHRoaXMuaCwgdGhpcy5jLCB0aGlzLmwgKyBLICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBIY2wodGhpcy5oLCB0aGlzLmMsIHRoaXMubCAtIEsgKiAoayA9PSBudWxsID8gMSA6IGspLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsYWJDb252ZXJ0KHRoaXMpLnJnYigpO1xuICB9XG59KSk7XG4iLCJleHBvcnQgdmFyIGRlZzJyYWQgPSBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IHZhciByYWQyZGVnID0gMTgwIC8gTWF0aC5QSTtcbiIsInZhciBub29wID0ge3ZhbHVlOiBmdW5jdGlvbigpIHt9fTtcblxuZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gYXJndW1lbnRzLmxlbmd0aCwgXyA9IHt9LCB0OyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKCEodCA9IGFyZ3VtZW50c1tpXSArIFwiXCIpIHx8ICh0IGluIF8pKSB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIHR5cGU6IFwiICsgdCk7XG4gICAgX1t0XSA9IFtdO1xuICB9XG4gIHJldHVybiBuZXcgRGlzcGF0Y2goXyk7XG59XG5cbmZ1bmN0aW9uIERpc3BhdGNoKF8pIHtcbiAgdGhpcy5fID0gXztcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzLCB0eXBlcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgaWYgKHQgJiYgIXR5cGVzLmhhc093blByb3BlcnR5KHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdCk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbkRpc3BhdGNoLnByb3RvdHlwZSA9IGRpc3BhdGNoLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IERpc3BhdGNoLFxuICBvbjogZnVuY3Rpb24odHlwZW5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIF8gPSB0aGlzLl8sXG4gICAgICAgIFQgPSBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZSArIFwiXCIsIF8pLFxuICAgICAgICB0LFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSBULmxlbmd0aDtcblxuICAgIC8vIElmIG5vIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJldHVybiB0aGUgY2FsbGJhY2sgb2YgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKCh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgJiYgKHQgPSBnZXQoX1t0XSwgdHlwZW5hbWUubmFtZSkpKSByZXR1cm4gdDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBhIHR5cGUgd2FzIHNwZWNpZmllZCwgc2V0IHRoZSBjYWxsYmFjayBmb3IgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgLy8gT3RoZXJ3aXNlLCBpZiBhIG51bGwgY2FsbGJhY2sgd2FzIHNwZWNpZmllZCwgcmVtb3ZlIGNhbGxiYWNrcyBvZiB0aGUgZ2l2ZW4gbmFtZS5cbiAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBjYWxsYmFjazogXCIgKyBjYWxsYmFjayk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBjYWxsYmFjayk7XG4gICAgICBlbHNlIGlmIChjYWxsYmFjayA9PSBudWxsKSBmb3IgKHQgaW4gXykgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY29weTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvcHkgPSB7fSwgXyA9IHRoaXMuXztcbiAgICBmb3IgKHZhciB0IGluIF8pIGNvcHlbdF0gPSBfW3RdLnNsaWNlKCk7XG4gICAgcmV0dXJuIG5ldyBEaXNwYXRjaChjb3B5KTtcbiAgfSxcbiAgY2FsbDogZnVuY3Rpb24odHlwZSwgdGhhdCkge1xuICAgIGlmICgobiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyKSA+IDApIGZvciAodmFyIGFyZ3MgPSBuZXcgQXJyYXkobiksIGkgPSAwLCBuLCB0OyBpIDwgbjsgKytpKSBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodCA9IHRoaXMuX1t0eXBlXSwgaSA9IDAsIG4gPSB0Lmxlbmd0aDsgaSA8IG47ICsraSkgdFtpXS52YWx1ZS5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHR5cGUsIHRoYXQsIGFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodmFyIHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldCh0eXBlLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGgsIGM7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoKGMgPSB0eXBlW2ldKS5uYW1lID09PSBuYW1lKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0KHR5cGUsIG5hbWUsIGNhbGxiYWNrKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAodHlwZVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICB0eXBlW2ldID0gbm9vcCwgdHlwZSA9IHR5cGUuc2xpY2UoMCwgaSkuY29uY2F0KHR5cGUuc2xpY2UoaSArIDEpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkgdHlwZS5wdXNoKHtuYW1lOiBuYW1lLCB2YWx1ZTogY2FsbGJhY2t9KTtcbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BhdGNoO1xuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRpc3BhdGNofSBmcm9tIFwiLi9kaXNwYXRjaFwiO1xuIiwidmFyIG92ZXJzaG9vdCA9IDEuNzAxNTg7XG5cbmV4cG9ydCB2YXIgYmFja0luID0gKGZ1bmN0aW9uIGN1c3RvbShzKSB7XG4gIHMgPSArcztcblxuICBmdW5jdGlvbiBiYWNrSW4odCkge1xuICAgIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpO1xuICB9XG5cbiAgYmFja0luLm92ZXJzaG9vdCA9IGN1c3RvbTtcblxuICByZXR1cm4gYmFja0luO1xufSkob3ZlcnNob290KTtcblxuZXhwb3J0IHZhciBiYWNrT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShzKSB7XG4gIHMgPSArcztcblxuICBmdW5jdGlvbiBiYWNrT3V0KHQpIHtcbiAgICByZXR1cm4gLS10ICogdCAqICgocyArIDEpICogdCArIHMpICsgMTtcbiAgfVxuXG4gIGJhY2tPdXQub3ZlcnNob290ID0gY3VzdG9tO1xuXG4gIHJldHVybiBiYWNrT3V0O1xufSkob3ZlcnNob290KTtcblxuZXhwb3J0IHZhciBiYWNrSW5PdXQgPSAoZnVuY3Rpb24gY3VzdG9tKHMpIHtcbiAgcyA9ICtzO1xuXG4gIGZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gICAgcmV0dXJuICgodCAqPSAyKSA8IDEgPyB0ICogdCAqICgocyArIDEpICogdCAtIHMpIDogKHQgLT0gMikgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAyKSAvIDI7XG4gIH1cblxuICBiYWNrSW5PdXQub3ZlcnNob290ID0gY3VzdG9tO1xuXG4gIHJldHVybiBiYWNrSW5PdXQ7XG59KShvdmVyc2hvb3QpO1xuIiwidmFyIGIxID0gNCAvIDExLFxuICAgIGIyID0gNiAvIDExLFxuICAgIGIzID0gOCAvIDExLFxuICAgIGI0ID0gMyAvIDQsXG4gICAgYjUgPSA5IC8gMTEsXG4gICAgYjYgPSAxMCAvIDExLFxuICAgIGI3ID0gMTUgLyAxNixcbiAgICBiOCA9IDIxIC8gMjIsXG4gICAgYjkgPSA2MyAvIDY0LFxuICAgIGIwID0gMSAvIGIxIC8gYjE7XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VJbih0KSB7XG4gIHJldHVybiAxIC0gYm91bmNlT3V0KDEgLSB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZU91dCh0KSB7XG4gIHJldHVybiAodCA9ICt0KSA8IGIxID8gYjAgKiB0ICogdCA6IHQgPCBiMyA/IGIwICogKHQgLT0gYjIpICogdCArIGI0IDogdCA8IGI2ID8gYjAgKiAodCAtPSBiNSkgKiB0ICsgYjcgOiBiMCAqICh0IC09IGI4KSAqIHQgKyBiOTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZUluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gMSAtIGJvdW5jZU91dCgxIC0gdCkgOiBib3VuY2VPdXQodCAtIDEpICsgMSkgLyAyO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUluKHQpIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIHQgKiB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZU91dCh0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIC0tdCAqIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCkgOiBNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKSAvIDI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3ViaWNJbih0KSB7XG4gIHJldHVybiB0ICogdCAqIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gIHJldHVybiAtLXQgKiB0ICogdCArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gdCAqIHQgKiB0IDogKHQgLT0gMikgKiB0ICogdCArIDIpIC8gMjtcbn1cbiIsInZhciB0YXUgPSAyICogTWF0aC5QSSxcbiAgICBhbXBsaXR1ZGUgPSAxLFxuICAgIHBlcmlvZCA9IDAuMztcblxuZXhwb3J0IHZhciBlbGFzdGljSW4gPSAoZnVuY3Rpb24gY3VzdG9tKGEsIHApIHtcbiAgdmFyIHMgPSBNYXRoLmFzaW4oMSAvIChhID0gTWF0aC5tYXgoMSwgYSkpKSAqIChwIC89IHRhdSk7XG5cbiAgZnVuY3Rpb24gZWxhc3RpY0luKHQpIHtcbiAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIDEwICogLS10KSAqIE1hdGguc2luKChzIC0gdCkgLyBwKTtcbiAgfVxuXG4gIGVsYXN0aWNJbi5hbXBsaXR1ZGUgPSBmdW5jdGlvbihhKSB7IHJldHVybiBjdXN0b20oYSwgcCAqIHRhdSk7IH07XG4gIGVsYXN0aWNJbi5wZXJpb2QgPSBmdW5jdGlvbihwKSB7IHJldHVybiBjdXN0b20oYSwgcCk7IH07XG5cbiAgcmV0dXJuIGVsYXN0aWNJbjtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcblxuZXhwb3J0IHZhciBlbGFzdGljT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShhLCBwKSB7XG4gIHZhciBzID0gTWF0aC5hc2luKDEgLyAoYSA9IE1hdGgubWF4KDEsIGEpKSkgKiAocCAvPSB0YXUpO1xuXG4gIGZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuICAgIHJldHVybiAxIC0gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0ID0gK3QpKSAqIE1hdGguc2luKCh0ICsgcykgLyBwKTtcbiAgfVxuXG4gIGVsYXN0aWNPdXQuYW1wbGl0dWRlID0gZnVuY3Rpb24oYSkgeyByZXR1cm4gY3VzdG9tKGEsIHAgKiB0YXUpOyB9O1xuICBlbGFzdGljT3V0LnBlcmlvZCA9IGZ1bmN0aW9uKHApIHsgcmV0dXJuIGN1c3RvbShhLCBwKTsgfTtcblxuICByZXR1cm4gZWxhc3RpY091dDtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcblxuZXhwb3J0IHZhciBlbGFzdGljSW5PdXQgPSAoZnVuY3Rpb24gY3VzdG9tKGEsIHApIHtcbiAgdmFyIHMgPSBNYXRoLmFzaW4oMSAvIChhID0gTWF0aC5tYXgoMSwgYSkpKSAqIChwIC89IHRhdSk7XG5cbiAgZnVuY3Rpb24gZWxhc3RpY0luT3V0KHQpIHtcbiAgICByZXR1cm4gKCh0ID0gdCAqIDIgLSAxKSA8IDBcbiAgICAgICAgPyBhICogTWF0aC5wb3coMiwgMTAgKiB0KSAqIE1hdGguc2luKChzIC0gdCkgLyBwKVxuICAgICAgICA6IDIgLSBhICogTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigocyArIHQpIC8gcCkpIC8gMjtcbiAgfVxuXG4gIGVsYXN0aWNJbk91dC5hbXBsaXR1ZGUgPSBmdW5jdGlvbihhKSB7IHJldHVybiBjdXN0b20oYSwgcCAqIHRhdSk7IH07XG4gIGVsYXN0aWNJbk91dC5wZXJpb2QgPSBmdW5jdGlvbihwKSB7IHJldHVybiBjdXN0b20oYSwgcCk7IH07XG5cbiAgcmV0dXJuIGVsYXN0aWNJbk91dDtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBleHBJbih0KSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCAxMCAqIHQgLSAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBPdXQodCkge1xuICByZXR1cm4gMSAtIE1hdGgucG93KDIsIC0xMCAqIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyBNYXRoLnBvdygyLCAxMCAqIHQgLSAxMCkgOiAyIC0gTWF0aC5wb3coMiwgMTAgLSAxMCAqIHQpKSAvIDI7XG59XG4iLCJleHBvcnQge1xuICBsaW5lYXIgYXMgZWFzZUxpbmVhclxufSBmcm9tIFwiLi9saW5lYXJcIjtcblxuZXhwb3J0IHtcbiAgcXVhZEluT3V0IGFzIGVhc2VRdWFkLFxuICBxdWFkSW4gYXMgZWFzZVF1YWRJbixcbiAgcXVhZE91dCBhcyBlYXNlUXVhZE91dCxcbiAgcXVhZEluT3V0IGFzIGVhc2VRdWFkSW5PdXRcbn0gZnJvbSBcIi4vcXVhZFwiO1xuXG5leHBvcnQge1xuICBjdWJpY0luT3V0IGFzIGVhc2VDdWJpYyxcbiAgY3ViaWNJbiBhcyBlYXNlQ3ViaWNJbixcbiAgY3ViaWNPdXQgYXMgZWFzZUN1YmljT3V0LFxuICBjdWJpY0luT3V0IGFzIGVhc2VDdWJpY0luT3V0XG59IGZyb20gXCIuL2N1YmljXCI7XG5cbmV4cG9ydCB7XG4gIHBvbHlJbk91dCBhcyBlYXNlUG9seSxcbiAgcG9seUluIGFzIGVhc2VQb2x5SW4sXG4gIHBvbHlPdXQgYXMgZWFzZVBvbHlPdXQsXG4gIHBvbHlJbk91dCBhcyBlYXNlUG9seUluT3V0XG59IGZyb20gXCIuL3BvbHlcIjtcblxuZXhwb3J0IHtcbiAgc2luSW5PdXQgYXMgZWFzZVNpbixcbiAgc2luSW4gYXMgZWFzZVNpbkluLFxuICBzaW5PdXQgYXMgZWFzZVNpbk91dCxcbiAgc2luSW5PdXQgYXMgZWFzZVNpbkluT3V0XG59IGZyb20gXCIuL3NpblwiO1xuXG5leHBvcnQge1xuICBleHBJbk91dCBhcyBlYXNlRXhwLFxuICBleHBJbiBhcyBlYXNlRXhwSW4sXG4gIGV4cE91dCBhcyBlYXNlRXhwT3V0LFxuICBleHBJbk91dCBhcyBlYXNlRXhwSW5PdXRcbn0gZnJvbSBcIi4vZXhwXCI7XG5cbmV4cG9ydCB7XG4gIGNpcmNsZUluT3V0IGFzIGVhc2VDaXJjbGUsXG4gIGNpcmNsZUluIGFzIGVhc2VDaXJjbGVJbixcbiAgY2lyY2xlT3V0IGFzIGVhc2VDaXJjbGVPdXQsXG4gIGNpcmNsZUluT3V0IGFzIGVhc2VDaXJjbGVJbk91dFxufSBmcm9tIFwiLi9jaXJjbGVcIjtcblxuZXhwb3J0IHtcbiAgYm91bmNlT3V0IGFzIGVhc2VCb3VuY2UsXG4gIGJvdW5jZUluIGFzIGVhc2VCb3VuY2VJbixcbiAgYm91bmNlT3V0IGFzIGVhc2VCb3VuY2VPdXQsXG4gIGJvdW5jZUluT3V0IGFzIGVhc2VCb3VuY2VJbk91dFxufSBmcm9tIFwiLi9ib3VuY2VcIjtcblxuZXhwb3J0IHtcbiAgYmFja0luT3V0IGFzIGVhc2VCYWNrLFxuICBiYWNrSW4gYXMgZWFzZUJhY2tJbixcbiAgYmFja091dCBhcyBlYXNlQmFja091dCxcbiAgYmFja0luT3V0IGFzIGVhc2VCYWNrSW5PdXRcbn0gZnJvbSBcIi4vYmFja1wiO1xuXG5leHBvcnQge1xuICBlbGFzdGljT3V0IGFzIGVhc2VFbGFzdGljLFxuICBlbGFzdGljSW4gYXMgZWFzZUVsYXN0aWNJbixcbiAgZWxhc3RpY091dCBhcyBlYXNlRWxhc3RpY091dCxcbiAgZWxhc3RpY0luT3V0IGFzIGVhc2VFbGFzdGljSW5PdXRcbn0gZnJvbSBcIi4vZWxhc3RpY1wiO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxpbmVhcih0KSB7XG4gIHJldHVybiArdDtcbn1cbiIsInZhciBleHBvbmVudCA9IDM7XG5cbmV4cG9ydCB2YXIgcG9seUluID0gKGZ1bmN0aW9uIGN1c3RvbShlKSB7XG4gIGUgPSArZTtcblxuICBmdW5jdGlvbiBwb2x5SW4odCkge1xuICAgIHJldHVybiBNYXRoLnBvdyh0LCBlKTtcbiAgfVxuXG4gIHBvbHlJbi5leHBvbmVudCA9IGN1c3RvbTtcblxuICByZXR1cm4gcG9seUluO1xufSkoZXhwb25lbnQpO1xuXG5leHBvcnQgdmFyIHBvbHlPdXQgPSAoZnVuY3Rpb24gY3VzdG9tKGUpIHtcbiAgZSA9ICtlO1xuXG4gIGZ1bmN0aW9uIHBvbHlPdXQodCkge1xuICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHQsIGUpO1xuICB9XG5cbiAgcG9seU91dC5leHBvbmVudCA9IGN1c3RvbTtcblxuICByZXR1cm4gcG9seU91dDtcbn0pKGV4cG9uZW50KTtcblxuZXhwb3J0IHZhciBwb2x5SW5PdXQgPSAoZnVuY3Rpb24gY3VzdG9tKGUpIHtcbiAgZSA9ICtlO1xuXG4gIGZ1bmN0aW9uIHBvbHlJbk91dCh0KSB7XG4gICAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gTWF0aC5wb3codCwgZSkgOiAyIC0gTWF0aC5wb3coMiAtIHQsIGUpKSAvIDI7XG4gIH1cblxuICBwb2x5SW5PdXQuZXhwb25lbnQgPSBjdXN0b207XG5cbiAgcmV0dXJuIHBvbHlJbk91dDtcbn0pKGV4cG9uZW50KTtcbiIsImV4cG9ydCBmdW5jdGlvbiBxdWFkSW4odCkge1xuICByZXR1cm4gdCAqIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWFkT3V0KHQpIHtcbiAgcmV0dXJuIHQgKiAoMiAtIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVhZEluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gdCAqIHQgOiAtLXQgKiAoMiAtIHQpICsgMSkgLyAyO1xufVxuIiwidmFyIHBpID0gTWF0aC5QSSxcbiAgICBoYWxmUGkgPSBwaSAvIDI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5Jbih0KSB7XG4gIHJldHVybiAxIC0gTWF0aC5jb3ModCAqIGhhbGZQaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5PdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4odCAqIGhhbGZQaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5Jbk91dCh0KSB7XG4gIHJldHVybiAoMSAtIE1hdGguY29zKHBpICogdCkpIC8gMjtcbn1cbiIsImltcG9ydCB2YWx1ZSBmcm9tIFwiLi92YWx1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBuYiA9IGIgPyBiLmxlbmd0aCA6IDAsXG4gICAgICBuYSA9IGEgPyBNYXRoLm1pbihuYiwgYS5sZW5ndGgpIDogMCxcbiAgICAgIHggPSBuZXcgQXJyYXkobmEpLFxuICAgICAgYyA9IG5ldyBBcnJheShuYiksXG4gICAgICBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBuYTsgKytpKSB4W2ldID0gdmFsdWUoYVtpXSwgYltpXSk7XG4gIGZvciAoOyBpIDwgbmI7ICsraSkgY1tpXSA9IGJbaV07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbmE7ICsraSkgY1tpXSA9IHhbaV0odCk7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYmFzaXModDEsIHYwLCB2MSwgdjIsIHYzKSB7XG4gIHZhciB0MiA9IHQxICogdDEsIHQzID0gdDIgKiB0MTtcbiAgcmV0dXJuICgoMSAtIDMgKiB0MSArIDMgKiB0MiAtIHQzKSAqIHYwXG4gICAgICArICg0IC0gNiAqIHQyICsgMyAqIHQzKSAqIHYxXG4gICAgICArICgxICsgMyAqIHQxICsgMyAqIHQyIC0gMyAqIHQzKSAqIHYyXG4gICAgICArIHQzICogdjMpIC8gNjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCAtIDE7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSB0IDw9IDAgPyAodCA9IDApIDogdCA+PSAxID8gKHQgPSAxLCBuIC0gMSkgOiBNYXRoLmZsb29yKHQgKiBuKSxcbiAgICAgICAgdjEgPSB2YWx1ZXNbaV0sXG4gICAgICAgIHYyID0gdmFsdWVzW2kgKyAxXSxcbiAgICAgICAgdjAgPSBpID4gMCA/IHZhbHVlc1tpIC0gMV0gOiAyICogdjEgLSB2MixcbiAgICAgICAgdjMgPSBpIDwgbiAtIDEgPyB2YWx1ZXNbaSArIDJdIDogMiAqIHYyIC0gdjE7XG4gICAgcmV0dXJuIGJhc2lzKCh0IC0gaSAvIG4pICogbiwgdjAsIHYxLCB2MiwgdjMpO1xuICB9O1xufVxuIiwiaW1wb3J0IHtiYXNpc30gZnJvbSBcIi4vYmFzaXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IE1hdGguZmxvb3IoKCh0ICU9IDEpIDwgMCA/ICsrdCA6IHQpICogbiksXG4gICAgICAgIHYwID0gdmFsdWVzWyhpICsgbiAtIDEpICUgbl0sXG4gICAgICAgIHYxID0gdmFsdWVzW2kgJSBuXSxcbiAgICAgICAgdjIgPSB2YWx1ZXNbKGkgKyAxKSAlIG5dLFxuICAgICAgICB2MyA9IHZhbHVlc1soaSArIDIpICUgbl07XG4gICAgcmV0dXJuIGJhc2lzKCh0IC0gaSAvIG4pICogbiwgdjAsIHYxLCB2MiwgdjMpO1xuICB9O1xufVxuIiwiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmZ1bmN0aW9uIGxpbmVhcihhLCBkKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKyB0ICogZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXhwb25lbnRpYWwoYSwgYiwgeSkge1xuICByZXR1cm4gYSA9IE1hdGgucG93KGEsIHkpLCBiID0gTWF0aC5wb3coYiwgeSkgLSBhLCB5ID0gMSAvIHksIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coYSArIHQgKiBiLCB5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1ZShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQgPiAxODAgfHwgZCA8IC0xODAgPyBkIC0gMzYwICogTWF0aC5yb3VuZChkIC8gMzYwKSA6IGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1tYSh5KSB7XG4gIHJldHVybiAoeSA9ICt5KSA9PT0gMSA/IG5vZ2FtbWEgOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGIgLSBhID8gZXhwb25lbnRpYWwoYSwgYiwgeSkgOiBjb25zdGFudChpc05hTihhKSA/IGIgOiBhKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9nYW1tYShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImltcG9ydCB7Y3ViZWhlbGl4IGFzIGNvbG9yQ3ViZWhlbGl4fSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciwge2h1ZX0gZnJvbSBcIi4vY29sb3JcIjtcblxuZnVuY3Rpb24gY3ViZWhlbGl4KGh1ZSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGN1YmVoZWxpeEdhbW1hKHkpIHtcbiAgICB5ID0gK3k7XG5cbiAgICBmdW5jdGlvbiBjdWJlaGVsaXgoc3RhcnQsIGVuZCkge1xuICAgICAgdmFyIGggPSBodWUoKHN0YXJ0ID0gY29sb3JDdWJlaGVsaXgoc3RhcnQpKS5oLCAoZW5kID0gY29sb3JDdWJlaGVsaXgoZW5kKSkuaCksXG4gICAgICAgICAgcyA9IGNvbG9yKHN0YXJ0LnMsIGVuZC5zKSxcbiAgICAgICAgICBsID0gY29sb3Ioc3RhcnQubCwgZW5kLmwpLFxuICAgICAgICAgIG9wYWNpdHkgPSBjb2xvcihzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICBzdGFydC5oID0gaCh0KTtcbiAgICAgICAgc3RhcnQucyA9IHModCk7XG4gICAgICAgIHN0YXJ0LmwgPSBsKE1hdGgucG93KHQsIHkpKTtcbiAgICAgICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGN1YmVoZWxpeC5nYW1tYSA9IGN1YmVoZWxpeEdhbW1hO1xuXG4gICAgcmV0dXJuIGN1YmVoZWxpeDtcbiAgfSkoMSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGN1YmVoZWxpeChodWUpO1xuZXhwb3J0IHZhciBjdWJlaGVsaXhMb25nID0gY3ViZWhlbGl4KGNvbG9yKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZTtcbiAgcmV0dXJuIGEgPSArYSwgYiAtPSBhLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGQuc2V0VGltZShhICsgYiAqIHQpLCBkO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocmFuZ2UpIHtcbiAgdmFyIG4gPSByYW5nZS5sZW5ndGg7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIHJhbmdlW01hdGgubWF4KDAsIE1hdGgubWluKG4gLSAxLCBNYXRoLmZsb29yKHQgKiBuKSkpXTtcbiAgfTtcbn1cbiIsImltcG9ydCB7aGNsIGFzIGNvbG9ySGNsfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciwge2h1ZX0gZnJvbSBcIi4vY29sb3JcIjtcblxuZnVuY3Rpb24gaGNsKGh1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHZhciBoID0gaHVlKChzdGFydCA9IGNvbG9ySGNsKHN0YXJ0KSkuaCwgKGVuZCA9IGNvbG9ySGNsKGVuZCkpLmgpLFxuICAgICAgICBjID0gY29sb3Ioc3RhcnQuYywgZW5kLmMpLFxuICAgICAgICBsID0gY29sb3Ioc3RhcnQubCwgZW5kLmwpLFxuICAgICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5oID0gaCh0KTtcbiAgICAgIHN0YXJ0LmMgPSBjKHQpO1xuICAgICAgc3RhcnQubCA9IGwodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoY2woaHVlKTtcbmV4cG9ydCB2YXIgaGNsTG9uZyA9IGhjbChjb2xvcik7XG4iLCJpbXBvcnQge2hzbCBhcyBjb2xvckhzbH0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgY29sb3IsIHtodWV9IGZyb20gXCIuL2NvbG9yXCI7XG5cbmZ1bmN0aW9uIGhzbChodWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgaCA9IGh1ZSgoc3RhcnQgPSBjb2xvckhzbChzdGFydCkpLmgsIChlbmQgPSBjb2xvckhzbChlbmQpKS5oKSxcbiAgICAgICAgcyA9IGNvbG9yKHN0YXJ0LnMsIGVuZC5zKSxcbiAgICAgICAgbCA9IGNvbG9yKHN0YXJ0LmwsIGVuZC5sKSxcbiAgICAgICAgb3BhY2l0eSA9IGNvbG9yKHN0YXJ0Lm9wYWNpdHksIGVuZC5vcGFjaXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgc3RhcnQuaCA9IGgodCk7XG4gICAgICBzdGFydC5zID0gcyh0KTtcbiAgICAgIHN0YXJ0LmwgPSBsKHQpO1xuICAgICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaHNsKGh1ZSk7XG5leHBvcnQgdmFyIGhzbExvbmcgPSBoc2woY29sb3IpO1xuIiwiaW1wb3J0IHtodWV9IGZyb20gXCIuL2NvbG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGkgPSBodWUoK2EsICtiKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgeCA9IGkodCk7XG4gICAgcmV0dXJuIHggLSAzNjAgKiBNYXRoLmZsb29yKHggLyAzNjApO1xuICB9O1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlfSBmcm9tIFwiLi92YWx1ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQXJyYXl9IGZyb20gXCIuL2FycmF5XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVCYXNpc30gZnJvbSBcIi4vYmFzaXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUJhc2lzQ2xvc2VkfSBmcm9tIFwiLi9iYXNpc0Nsb3NlZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlRGF0ZX0gZnJvbSBcIi4vZGF0ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlRGlzY3JldGV9IGZyb20gXCIuL2Rpc2NyZXRlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVIdWV9IGZyb20gXCIuL2h1ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlTnVtYmVyfSBmcm9tIFwiLi9udW1iZXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZU9iamVjdH0gZnJvbSBcIi4vb2JqZWN0XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVSb3VuZH0gZnJvbSBcIi4vcm91bmRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZVN0cmluZ30gZnJvbSBcIi4vc3RyaW5nXCI7XG5leHBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtQ3NzLCBpbnRlcnBvbGF0ZVRyYW5zZm9ybVN2Z30gZnJvbSBcIi4vdHJhbnNmb3JtL2luZGV4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVab29tfSBmcm9tIFwiLi96b29tXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVSZ2IsIHJnYkJhc2lzIGFzIGludGVycG9sYXRlUmdiQmFzaXMsIHJnYkJhc2lzQ2xvc2VkIGFzIGludGVycG9sYXRlUmdiQmFzaXNDbG9zZWR9IGZyb20gXCIuL3JnYlwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlSHNsLCBoc2xMb25nIGFzIGludGVycG9sYXRlSHNsTG9uZ30gZnJvbSBcIi4vaHNsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVMYWJ9IGZyb20gXCIuL2xhYlwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlSGNsLCBoY2xMb25nIGFzIGludGVycG9sYXRlSGNsTG9uZ30gZnJvbSBcIi4vaGNsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVDdWJlaGVsaXgsIGN1YmVoZWxpeExvbmcgYXMgaW50ZXJwb2xhdGVDdWJlaGVsaXhMb25nfSBmcm9tIFwiLi9jdWJlaGVsaXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwaWVjZXdpc2V9IGZyb20gXCIuL3BpZWNld2lzZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHF1YW50aXplfSBmcm9tIFwiLi9xdWFudGl6ZVwiO1xuIiwiaW1wb3J0IHtsYWIgYXMgY29sb3JMYWJ9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGNvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxhYihzdGFydCwgZW5kKSB7XG4gIHZhciBsID0gY29sb3IoKHN0YXJ0ID0gY29sb3JMYWIoc3RhcnQpKS5sLCAoZW5kID0gY29sb3JMYWIoZW5kKSkubCksXG4gICAgICBhID0gY29sb3Ioc3RhcnQuYSwgZW5kLmEpLFxuICAgICAgYiA9IGNvbG9yKHN0YXJ0LmIsIGVuZC5iKSxcbiAgICAgIG9wYWNpdHkgPSBjb2xvcihzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgc3RhcnQubCA9IGwodCk7XG4gICAgc3RhcnQuYSA9IGEodCk7XG4gICAgc3RhcnQuYiA9IGIodCk7XG4gICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPSArYSwgYiAtPSBhLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKyBiICogdDtcbiAgfTtcbn1cbiIsImltcG9ydCB2YWx1ZSBmcm9tIFwiLi92YWx1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBpID0ge30sXG4gICAgICBjID0ge30sXG4gICAgICBrO1xuXG4gIGlmIChhID09PSBudWxsIHx8IHR5cGVvZiBhICE9PSBcIm9iamVjdFwiKSBhID0ge307XG4gIGlmIChiID09PSBudWxsIHx8IHR5cGVvZiBiICE9PSBcIm9iamVjdFwiKSBiID0ge307XG5cbiAgZm9yIChrIGluIGIpIHtcbiAgICBpZiAoayBpbiBhKSB7XG4gICAgICBpW2tdID0gdmFsdWUoYVtrXSwgYltrXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNba10gPSBiW2tdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChrIGluIGkpIGNba10gPSBpW2tdKHQpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGllY2V3aXNlKGludGVycG9sYXRlLCB2YWx1ZXMpIHtcbiAgdmFyIGkgPSAwLCBuID0gdmFsdWVzLmxlbmd0aCAtIDEsIHYgPSB2YWx1ZXNbMF0sIEkgPSBuZXcgQXJyYXkobiA8IDAgPyAwIDogbik7XG4gIHdoaWxlIChpIDwgbikgSVtpXSA9IGludGVycG9sYXRlKHYsIHYgPSB2YWx1ZXNbKytpXSk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihuIC0gMSwgTWF0aC5mbG9vcih0ICo9IG4pKSk7XG4gICAgcmV0dXJuIElbaV0odCAtIGkpO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJwb2xhdG9yLCBuKSB7XG4gIHZhciBzYW1wbGVzID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkgc2FtcGxlc1tpXSA9IGludGVycG9sYXRvcihpIC8gKG4gLSAxKSk7XG4gIHJldHVybiBzYW1wbGVzO1xufVxuIiwiaW1wb3J0IHtyZ2IgYXMgY29sb3JSZ2J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGJhc2lzIGZyb20gXCIuL2Jhc2lzXCI7XG5pbXBvcnQgYmFzaXNDbG9zZWQgZnJvbSBcIi4vYmFzaXNDbG9zZWRcIjtcbmltcG9ydCBub2dhbW1hLCB7Z2FtbWF9IGZyb20gXCIuL2NvbG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiByZ2JHYW1tYSh5KSB7XG4gIHZhciBjb2xvciA9IGdhbW1hKHkpO1xuXG4gIGZ1bmN0aW9uIHJnYihzdGFydCwgZW5kKSB7XG4gICAgdmFyIHIgPSBjb2xvcigoc3RhcnQgPSBjb2xvclJnYihzdGFydCkpLnIsIChlbmQgPSBjb2xvclJnYihlbmQpKS5yKSxcbiAgICAgICAgZyA9IGNvbG9yKHN0YXJ0LmcsIGVuZC5nKSxcbiAgICAgICAgYiA9IGNvbG9yKHN0YXJ0LmIsIGVuZC5iKSxcbiAgICAgICAgb3BhY2l0eSA9IG5vZ2FtbWEoc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5yID0gcih0KTtcbiAgICAgIHN0YXJ0LmcgPSBnKHQpO1xuICAgICAgc3RhcnQuYiA9IGIodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxuXG4gIHJnYi5nYW1tYSA9IHJnYkdhbW1hO1xuXG4gIHJldHVybiByZ2I7XG59KSgxKTtcblxuZnVuY3Rpb24gcmdiU3BsaW5lKHNwbGluZSkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgdmFyIG4gPSBjb2xvcnMubGVuZ3RoLFxuICAgICAgICByID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBnID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBiID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBpLCBjb2xvcjtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBjb2xvciA9IGNvbG9yUmdiKGNvbG9yc1tpXSk7XG4gICAgICByW2ldID0gY29sb3IuciB8fCAwO1xuICAgICAgZ1tpXSA9IGNvbG9yLmcgfHwgMDtcbiAgICAgIGJbaV0gPSBjb2xvci5iIHx8IDA7XG4gICAgfVxuICAgIHIgPSBzcGxpbmUocik7XG4gICAgZyA9IHNwbGluZShnKTtcbiAgICBiID0gc3BsaW5lKGIpO1xuICAgIGNvbG9yLm9wYWNpdHkgPSAxO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBjb2xvci5yID0gcih0KTtcbiAgICAgIGNvbG9yLmcgPSBnKHQpO1xuICAgICAgY29sb3IuYiA9IGIodCk7XG4gICAgICByZXR1cm4gY29sb3IgKyBcIlwiO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgcmdiQmFzaXMgPSByZ2JTcGxpbmUoYmFzaXMpO1xuZXhwb3J0IHZhciByZ2JCYXNpc0Nsb3NlZCA9IHJnYlNwbGluZShiYXNpc0Nsb3NlZCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgLT0gYSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGEgKyBiICogdCk7XG4gIH07XG59XG4iLCJpbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlclwiO1xuXG52YXIgcmVBID0gL1stK10/KD86XFxkK1xcLj9cXGQqfFxcLj9cXGQrKSg/OltlRV1bLStdP1xcZCspPy9nLFxuICAgIHJlQiA9IG5ldyBSZWdFeHAocmVBLnNvdXJjZSwgXCJnXCIpO1xuXG5mdW5jdGlvbiB6ZXJvKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBiO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbmUoYikge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBiKHQpICsgXCJcIjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgYmkgPSByZUEubGFzdEluZGV4ID0gcmVCLmxhc3RJbmRleCA9IDAsIC8vIHNjYW4gaW5kZXggZm9yIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGFtLCAvLyBjdXJyZW50IG1hdGNoIGluIGFcbiAgICAgIGJtLCAvLyBjdXJyZW50IG1hdGNoIGluIGJcbiAgICAgIGJzLCAvLyBzdHJpbmcgcHJlY2VkaW5nIGN1cnJlbnQgbnVtYmVyIGluIGIsIGlmIGFueVxuICAgICAgaSA9IC0xLCAvLyBpbmRleCBpbiBzXG4gICAgICBzID0gW10sIC8vIHN0cmluZyBjb25zdGFudHMgYW5kIHBsYWNlaG9sZGVyc1xuICAgICAgcSA9IFtdOyAvLyBudW1iZXIgaW50ZXJwb2xhdG9yc1xuXG4gIC8vIENvZXJjZSBpbnB1dHMgdG8gc3RyaW5ncy5cbiAgYSA9IGEgKyBcIlwiLCBiID0gYiArIFwiXCI7XG5cbiAgLy8gSW50ZXJwb2xhdGUgcGFpcnMgb2YgbnVtYmVycyBpbiBhICYgYi5cbiAgd2hpbGUgKChhbSA9IHJlQS5leGVjKGEpKVxuICAgICAgJiYgKGJtID0gcmVCLmV4ZWMoYikpKSB7XG4gICAgaWYgKChicyA9IGJtLmluZGV4KSA+IGJpKSB7IC8vIGEgc3RyaW5nIHByZWNlZGVzIHRoZSBuZXh0IG51bWJlciBpbiBiXG4gICAgICBicyA9IGIuc2xpY2UoYmksIGJzKTtcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBicztcbiAgICB9XG4gICAgaWYgKChhbSA9IGFtWzBdKSA9PT0gKGJtID0gYm1bMF0pKSB7IC8vIG51bWJlcnMgaW4gYSAmIGIgbWF0Y2hcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJtOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBibTtcbiAgICB9IGVsc2UgeyAvLyBpbnRlcnBvbGF0ZSBub24tbWF0Y2hpbmcgbnVtYmVyc1xuICAgICAgc1srK2ldID0gbnVsbDtcbiAgICAgIHEucHVzaCh7aTogaSwgeDogbnVtYmVyKGFtLCBibSl9KTtcbiAgICB9XG4gICAgYmkgPSByZUIubGFzdEluZGV4O1xuICB9XG5cbiAgLy8gQWRkIHJlbWFpbnMgb2YgYi5cbiAgaWYgKGJpIDwgYi5sZW5ndGgpIHtcbiAgICBicyA9IGIuc2xpY2UoYmkpO1xuICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gIH1cblxuICAvLyBTcGVjaWFsIG9wdGltaXphdGlvbiBmb3Igb25seSBhIHNpbmdsZSBtYXRjaC5cbiAgLy8gT3RoZXJ3aXNlLCBpbnRlcnBvbGF0ZSBlYWNoIG9mIHRoZSBudW1iZXJzIGFuZCByZWpvaW4gdGhlIHN0cmluZy5cbiAgcmV0dXJuIHMubGVuZ3RoIDwgMiA/IChxWzBdXG4gICAgICA/IG9uZShxWzBdLngpXG4gICAgICA6IHplcm8oYikpXG4gICAgICA6IChiID0gcS5sZW5ndGgsIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbzsgaSA8IGI7ICsraSkgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gICAgICAgIH0pO1xufVxuIiwidmFyIGRlZ3JlZXMgPSAxODAgLyBNYXRoLlBJO1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0ge1xuICB0cmFuc2xhdGVYOiAwLFxuICB0cmFuc2xhdGVZOiAwLFxuICByb3RhdGU6IDAsXG4gIHNrZXdYOiAwLFxuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYiwgYywgZCwgZSwgZikge1xuICB2YXIgc2NhbGVYLCBzY2FsZVksIHNrZXdYO1xuICBpZiAoc2NhbGVYID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpKSBhIC89IHNjYWxlWCwgYiAvPSBzY2FsZVg7XG4gIGlmIChza2V3WCA9IGEgKiBjICsgYiAqIGQpIGMgLT0gYSAqIHNrZXdYLCBkIC09IGIgKiBza2V3WDtcbiAgaWYgKHNjYWxlWSA9IE1hdGguc3FydChjICogYyArIGQgKiBkKSkgYyAvPSBzY2FsZVksIGQgLz0gc2NhbGVZLCBza2V3WCAvPSBzY2FsZVk7XG4gIGlmIChhICogZCA8IGIgKiBjKSBhID0gLWEsIGIgPSAtYiwgc2tld1ggPSAtc2tld1gsIHNjYWxlWCA9IC1zY2FsZVg7XG4gIHJldHVybiB7XG4gICAgdHJhbnNsYXRlWDogZSxcbiAgICB0cmFuc2xhdGVZOiBmLFxuICAgIHJvdGF0ZTogTWF0aC5hdGFuMihiLCBhKSAqIGRlZ3JlZXMsXG4gICAgc2tld1g6IE1hdGguYXRhbihza2V3WCkgKiBkZWdyZWVzLFxuICAgIHNjYWxlWDogc2NhbGVYLFxuICAgIHNjYWxlWTogc2NhbGVZXG4gIH07XG59XG4iLCJpbXBvcnQgbnVtYmVyIGZyb20gXCIuLi9udW1iZXJcIjtcbmltcG9ydCB7cGFyc2VDc3MsIHBhcnNlU3ZnfSBmcm9tIFwiLi9wYXJzZVwiO1xuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZSwgcHhDb21tYSwgcHhQYXJlbiwgZGVnUGFyZW4pIHtcblxuICBmdW5jdGlvbiBwb3Aocykge1xuICAgIHJldHVybiBzLmxlbmd0aCA/IHMucG9wKCkgKyBcIiBcIiA6IFwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2xhdGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2goXCJ0cmFuc2xhdGUoXCIsIG51bGwsIHB4Q29tbWEsIG51bGwsIHB4UGFyZW4pO1xuICAgICAgcS5wdXNoKHtpOiBpIC0gNCwgeDogbnVtYmVyKHhhLCB4Yil9LCB7aTogaSAtIDIsIHg6IG51bWJlcih5YSwgeWIpfSk7XG4gICAgfSBlbHNlIGlmICh4YiB8fCB5Yikge1xuICAgICAgcy5wdXNoKFwidHJhbnNsYXRlKFwiICsgeGIgKyBweENvbW1hICsgeWIgKyBweFBhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByb3RhdGUoYSwgYiwgcywgcSkge1xuICAgIGlmIChhICE9PSBiKSB7XG4gICAgICBpZiAoYSAtIGIgPiAxODApIGIgKz0gMzYwOyBlbHNlIGlmIChiIC0gYSA+IDE4MCkgYSArPSAzNjA7IC8vIHNob3J0ZXN0IHBhdGhcbiAgICAgIHEucHVzaCh7aTogcy5wdXNoKHBvcChzKSArIFwicm90YXRlKFwiLCBudWxsLCBkZWdQYXJlbikgLSAyLCB4OiBudW1iZXIoYSwgYil9KTtcbiAgICB9IGVsc2UgaWYgKGIpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2tld1goYSwgYiwgcywgcSkge1xuICAgIGlmIChhICE9PSBiKSB7XG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInNrZXdYKFwiLCBudWxsLCBkZWdQYXJlbikgLSAyLCB4OiBudW1iZXIoYSwgYil9KTtcbiAgICB9IGVsc2UgaWYgKGIpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNrZXdYKFwiICsgYiArIGRlZ1BhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY2FsZSh4YSwgeWEsIHhiLCB5YiwgcywgcSkge1xuICAgIGlmICh4YSAhPT0geGIgfHwgeWEgIT09IHliKSB7XG4gICAgICB2YXIgaSA9IHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiLCBudWxsLCBcIixcIiwgbnVsbCwgXCIpXCIpO1xuICAgICAgcS5wdXNoKHtpOiBpIC0gNCwgeDogbnVtYmVyKHhhLCB4Yil9LCB7aTogaSAtIDIsIHg6IG51bWJlcih5YSwgeWIpfSk7XG4gICAgfSBlbHNlIGlmICh4YiAhPT0gMSB8fCB5YiAhPT0gMSkge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwic2NhbGUoXCIgKyB4YiArIFwiLFwiICsgeWIgKyBcIilcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgcyA9IFtdLCAvLyBzdHJpbmcgY29uc3RhbnRzIGFuZCBwbGFjZWhvbGRlcnNcbiAgICAgICAgcSA9IFtdOyAvLyBudW1iZXIgaW50ZXJwb2xhdG9yc1xuICAgIGEgPSBwYXJzZShhKSwgYiA9IHBhcnNlKGIpO1xuICAgIHRyYW5zbGF0ZShhLnRyYW5zbGF0ZVgsIGEudHJhbnNsYXRlWSwgYi50cmFuc2xhdGVYLCBiLnRyYW5zbGF0ZVksIHMsIHEpO1xuICAgIHJvdGF0ZShhLnJvdGF0ZSwgYi5yb3RhdGUsIHMsIHEpO1xuICAgIHNrZXdYKGEuc2tld1gsIGIuc2tld1gsIHMsIHEpO1xuICAgIHNjYWxlKGEuc2NhbGVYLCBhLnNjYWxlWSwgYi5zY2FsZVgsIGIuc2NhbGVZLCBzLCBxKTtcbiAgICBhID0gYiA9IG51bGw7IC8vIGdjXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBpID0gLTEsIG4gPSBxLmxlbmd0aCwgbztcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgaW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MgPSBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZUNzcywgXCJweCwgXCIsIFwicHgpXCIsIFwiZGVnKVwiKTtcbmV4cG9ydCB2YXIgaW50ZXJwb2xhdGVUcmFuc2Zvcm1TdmcgPSBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZVN2ZywgXCIsIFwiLCBcIilcIiwgXCIpXCIpO1xuIiwiaW1wb3J0IGRlY29tcG9zZSwge2lkZW50aXR5fSBmcm9tIFwiLi9kZWNvbXBvc2VcIjtcblxudmFyIGNzc05vZGUsXG4gICAgY3NzUm9vdCxcbiAgICBjc3NWaWV3LFxuICAgIHN2Z05vZGU7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNzcyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwibm9uZVwiKSByZXR1cm4gaWRlbnRpdHk7XG4gIGlmICghY3NzTm9kZSkgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIiksIGNzc1Jvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGNzc1ZpZXcgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcbiAgY3NzTm9kZS5zdHlsZS50cmFuc2Zvcm0gPSB2YWx1ZTtcbiAgdmFsdWUgPSBjc3NWaWV3LmdldENvbXB1dGVkU3R5bGUoY3NzUm9vdC5hcHBlbmRDaGlsZChjc3NOb2RlKSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKTtcbiAgY3NzUm9vdC5yZW1vdmVDaGlsZChjc3NOb2RlKTtcbiAgdmFsdWUgPSB2YWx1ZS5zbGljZSg3LCAtMSkuc3BsaXQoXCIsXCIpO1xuICByZXR1cm4gZGVjb21wb3NlKCt2YWx1ZVswXSwgK3ZhbHVlWzFdLCArdmFsdWVbMl0sICt2YWx1ZVszXSwgK3ZhbHVlWzRdLCArdmFsdWVbNV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdmcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBpZGVudGl0eTtcbiAgaWYgKCFzdmdOb2RlKSBzdmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICBzdmdOb2RlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB2YWx1ZSk7XG4gIGlmICghKHZhbHVlID0gc3ZnTm9kZS50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpKSkgcmV0dXJuIGlkZW50aXR5O1xuICB2YWx1ZSA9IHZhbHVlLm1hdHJpeDtcbiAgcmV0dXJuIGRlY29tcG9zZSh2YWx1ZS5hLCB2YWx1ZS5iLCB2YWx1ZS5jLCB2YWx1ZS5kLCB2YWx1ZS5lLCB2YWx1ZS5mKTtcbn1cbiIsImltcG9ydCB7Y29sb3J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IHJnYiBmcm9tIFwiLi9yZ2JcIjtcbmltcG9ydCBhcnJheSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IGRhdGUgZnJvbSBcIi4vZGF0ZVwiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcbmltcG9ydCBvYmplY3QgZnJvbSBcIi4vb2JqZWN0XCI7XG5pbXBvcnQgc3RyaW5nIGZyb20gXCIuL3N0cmluZ1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIHQgPSB0eXBlb2YgYiwgYztcbiAgcmV0dXJuIGIgPT0gbnVsbCB8fCB0ID09PSBcImJvb2xlYW5cIiA/IGNvbnN0YW50KGIpXG4gICAgICA6ICh0ID09PSBcIm51bWJlclwiID8gbnVtYmVyXG4gICAgICA6IHQgPT09IFwic3RyaW5nXCIgPyAoKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIHJnYikgOiBzdHJpbmcpXG4gICAgICA6IGIgaW5zdGFuY2VvZiBjb2xvciA/IHJnYlxuICAgICAgOiBiIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGVcbiAgICAgIDogQXJyYXkuaXNBcnJheShiKSA/IGFycmF5XG4gICAgICA6IHR5cGVvZiBiLnZhbHVlT2YgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgYi50b1N0cmluZyAhPT0gXCJmdW5jdGlvblwiIHx8IGlzTmFOKGIpID8gb2JqZWN0XG4gICAgICA6IG51bWJlcikoYSwgYik7XG59XG4iLCJ2YXIgcmhvID0gTWF0aC5TUVJUMixcbiAgICByaG8yID0gMixcbiAgICByaG80ID0gNCxcbiAgICBlcHNpbG9uMiA9IDFlLTEyO1xuXG5mdW5jdGlvbiBjb3NoKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKHgpKSArIDEgLyB4KSAvIDI7XG59XG5cbmZ1bmN0aW9uIHNpbmgoeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoeCkpIC0gMSAvIHgpIC8gMjtcbn1cblxuZnVuY3Rpb24gdGFuaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCgyICogeCkpIC0gMSkgLyAoeCArIDEpO1xufVxuXG4vLyBwMCA9IFt1eDAsIHV5MCwgdzBdXG4vLyBwMSA9IFt1eDEsIHV5MSwgdzFdXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwMCwgcDEpIHtcbiAgdmFyIHV4MCA9IHAwWzBdLCB1eTAgPSBwMFsxXSwgdzAgPSBwMFsyXSxcbiAgICAgIHV4MSA9IHAxWzBdLCB1eTEgPSBwMVsxXSwgdzEgPSBwMVsyXSxcbiAgICAgIGR4ID0gdXgxIC0gdXgwLFxuICAgICAgZHkgPSB1eTEgLSB1eTAsXG4gICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5LFxuICAgICAgaSxcbiAgICAgIFM7XG5cbiAgLy8gU3BlY2lhbCBjYXNlIGZvciB1MCDiiYUgdTEuXG4gIGlmIChkMiA8IGVwc2lsb24yKSB7XG4gICAgUyA9IE1hdGgubG9nKHcxIC8gdzApIC8gcmhvO1xuICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB1eDAgKyB0ICogZHgsXG4gICAgICAgIHV5MCArIHQgKiBkeSxcbiAgICAgICAgdzAgKiBNYXRoLmV4cChyaG8gKiB0ICogUylcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgLy8gR2VuZXJhbCBjYXNlLlxuICBlbHNlIHtcbiAgICB2YXIgZDEgPSBNYXRoLnNxcnQoZDIpLFxuICAgICAgICBiMCA9ICh3MSAqIHcxIC0gdzAgKiB3MCArIHJobzQgKiBkMikgLyAoMiAqIHcwICogcmhvMiAqIGQxKSxcbiAgICAgICAgYjEgPSAodzEgKiB3MSAtIHcwICogdzAgLSByaG80ICogZDIpIC8gKDIgKiB3MSAqIHJobzIgKiBkMSksXG4gICAgICAgIHIwID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIwICogYjAgKyAxKSAtIGIwKSxcbiAgICAgICAgcjEgPSBNYXRoLmxvZyhNYXRoLnNxcnQoYjEgKiBiMSArIDEpIC0gYjEpO1xuICAgIFMgPSAocjEgLSByMCkgLyByaG87XG4gICAgaSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBzID0gdCAqIFMsXG4gICAgICAgICAgY29zaHIwID0gY29zaChyMCksXG4gICAgICAgICAgdSA9IHcwIC8gKHJobzIgKiBkMSkgKiAoY29zaHIwICogdGFuaChyaG8gKiBzICsgcjApIC0gc2luaChyMCkpO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdXgwICsgdSAqIGR4LFxuICAgICAgICB1eTAgKyB1ICogZHksXG4gICAgICAgIHcwICogY29zaHIwIC8gY29zaChyaG8gKiBzICsgcjApXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGkuZHVyYXRpb24gPSBTICogMTAwMDtcblxuICByZXR1cm4gaTtcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBwYXRofSBmcm9tIFwiLi9wYXRoXCI7XG4iLCJ2YXIgcGkgPSBNYXRoLlBJLFxuICAgIHRhdSA9IDIgKiBwaSxcbiAgICBlcHNpbG9uID0gMWUtNixcbiAgICB0YXVFcHNpbG9uID0gdGF1IC0gZXBzaWxvbjtcblxuZnVuY3Rpb24gUGF0aCgpIHtcbiAgdGhpcy5feDAgPSB0aGlzLl95MCA9IC8vIHN0YXJ0IG9mIGN1cnJlbnQgc3VicGF0aFxuICB0aGlzLl94MSA9IHRoaXMuX3kxID0gbnVsbDsgLy8gZW5kIG9mIGN1cnJlbnQgc3VicGF0aFxuICB0aGlzLl8gPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBwYXRoKCkge1xuICByZXR1cm4gbmV3IFBhdGg7XG59XG5cblBhdGgucHJvdG90eXBlID0gcGF0aC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBQYXRoLFxuICBtb3ZlVG86IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gXCJNXCIgKyAodGhpcy5feDAgPSB0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kwID0gdGhpcy5feTEgPSAreSk7XG4gIH0sXG4gIGNsb3NlUGF0aDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3gxICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl94MSA9IHRoaXMuX3gwLCB0aGlzLl95MSA9IHRoaXMuX3kwO1xuICAgICAgdGhpcy5fICs9IFwiWlwiO1xuICAgIH1cbiAgfSxcbiAgbGluZVRvOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5fICs9IFwiTFwiICsgKHRoaXMuX3gxID0gK3gpICsgXCIsXCIgKyAodGhpcy5feTEgPSAreSk7XG4gIH0sXG4gIHF1YWRyYXRpY0N1cnZlVG86IGZ1bmN0aW9uKHgxLCB5MSwgeCwgeSkge1xuICAgIHRoaXMuXyArPSBcIlFcIiArICgreDEpICsgXCIsXCIgKyAoK3kxKSArIFwiLFwiICsgKHRoaXMuX3gxID0gK3gpICsgXCIsXCIgKyAodGhpcy5feTEgPSAreSk7XG4gIH0sXG4gIGJlemllckN1cnZlVG86IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCB4LCB5KSB7XG4gICAgdGhpcy5fICs9IFwiQ1wiICsgKCt4MSkgKyBcIixcIiArICgreTEpICsgXCIsXCIgKyAoK3gyKSArIFwiLFwiICsgKCt5MikgKyBcIixcIiArICh0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kxID0gK3kpO1xuICB9LFxuICBhcmNUbzogZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIsIHIpIHtcbiAgICB4MSA9ICt4MSwgeTEgPSAreTEsIHgyID0gK3gyLCB5MiA9ICt5MiwgciA9ICtyO1xuICAgIHZhciB4MCA9IHRoaXMuX3gxLFxuICAgICAgICB5MCA9IHRoaXMuX3kxLFxuICAgICAgICB4MjEgPSB4MiAtIHgxLFxuICAgICAgICB5MjEgPSB5MiAtIHkxLFxuICAgICAgICB4MDEgPSB4MCAtIHgxLFxuICAgICAgICB5MDEgPSB5MCAtIHkxLFxuICAgICAgICBsMDFfMiA9IHgwMSAqIHgwMSArIHkwMSAqIHkwMTtcblxuICAgIC8vIElzIHRoZSByYWRpdXMgbmVnYXRpdmU/IEVycm9yLlxuICAgIGlmIChyIDwgMCkgdGhyb3cgbmV3IEVycm9yKFwibmVnYXRpdmUgcmFkaXVzOiBcIiArIHIpO1xuXG4gICAgLy8gSXMgdGhpcyBwYXRoIGVtcHR5PyBNb3ZlIHRvICh4MSx5MSkuXG4gICAgaWYgKHRoaXMuX3gxID09PSBudWxsKSB7XG4gICAgICB0aGlzLl8gKz0gXCJNXCIgKyAodGhpcy5feDEgPSB4MSkgKyBcIixcIiArICh0aGlzLl95MSA9IHkxKTtcbiAgICB9XG5cbiAgICAvLyBPciwgaXMgKHgxLHkxKSBjb2luY2lkZW50IHdpdGggKHgwLHkwKT8gRG8gbm90aGluZy5cbiAgICBlbHNlIGlmICghKGwwMV8yID4gZXBzaWxvbikpO1xuXG4gICAgLy8gT3IsIGFyZSAoeDAseTApLCAoeDEseTEpIGFuZCAoeDIseTIpIGNvbGxpbmVhcj9cbiAgICAvLyBFcXVpdmFsZW50bHksIGlzICh4MSx5MSkgY29pbmNpZGVudCB3aXRoICh4Mix5Mik/XG4gICAgLy8gT3IsIGlzIHRoZSByYWRpdXMgemVybz8gTGluZSB0byAoeDEseTEpLlxuICAgIGVsc2UgaWYgKCEoTWF0aC5hYnMoeTAxICogeDIxIC0geTIxICogeDAxKSA+IGVwc2lsb24pIHx8ICFyKSB7XG4gICAgICB0aGlzLl8gKz0gXCJMXCIgKyAodGhpcy5feDEgPSB4MSkgKyBcIixcIiArICh0aGlzLl95MSA9IHkxKTtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIGRyYXcgYW4gYXJjIVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHgyMCA9IHgyIC0geDAsXG4gICAgICAgICAgeTIwID0geTIgLSB5MCxcbiAgICAgICAgICBsMjFfMiA9IHgyMSAqIHgyMSArIHkyMSAqIHkyMSxcbiAgICAgICAgICBsMjBfMiA9IHgyMCAqIHgyMCArIHkyMCAqIHkyMCxcbiAgICAgICAgICBsMjEgPSBNYXRoLnNxcnQobDIxXzIpLFxuICAgICAgICAgIGwwMSA9IE1hdGguc3FydChsMDFfMiksXG4gICAgICAgICAgbCA9IHIgKiBNYXRoLnRhbigocGkgLSBNYXRoLmFjb3MoKGwyMV8yICsgbDAxXzIgLSBsMjBfMikgLyAoMiAqIGwyMSAqIGwwMSkpKSAvIDIpLFxuICAgICAgICAgIHQwMSA9IGwgLyBsMDEsXG4gICAgICAgICAgdDIxID0gbCAvIGwyMTtcblxuICAgICAgLy8gSWYgdGhlIHN0YXJ0IHRhbmdlbnQgaXMgbm90IGNvaW5jaWRlbnQgd2l0aCAoeDAseTApLCBsaW5lIHRvLlxuICAgICAgaWYgKE1hdGguYWJzKHQwMSAtIDEpID4gZXBzaWxvbikge1xuICAgICAgICB0aGlzLl8gKz0gXCJMXCIgKyAoeDEgKyB0MDEgKiB4MDEpICsgXCIsXCIgKyAoeTEgKyB0MDEgKiB5MDEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl8gKz0gXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIsMCwwLFwiICsgKCsoeTAxICogeDIwID4geDAxICogeTIwKSkgKyBcIixcIiArICh0aGlzLl94MSA9IHgxICsgdDIxICogeDIxKSArIFwiLFwiICsgKHRoaXMuX3kxID0geTEgKyB0MjEgKiB5MjEpO1xuICAgIH1cbiAgfSxcbiAgYXJjOiBmdW5jdGlvbih4LCB5LCByLCBhMCwgYTEsIGNjdykge1xuICAgIHggPSAreCwgeSA9ICt5LCByID0gK3I7XG4gICAgdmFyIGR4ID0gciAqIE1hdGguY29zKGEwKSxcbiAgICAgICAgZHkgPSByICogTWF0aC5zaW4oYTApLFxuICAgICAgICB4MCA9IHggKyBkeCxcbiAgICAgICAgeTAgPSB5ICsgZHksXG4gICAgICAgIGN3ID0gMSBeIGNjdyxcbiAgICAgICAgZGEgPSBjY3cgPyBhMCAtIGExIDogYTEgLSBhMDtcblxuICAgIC8vIElzIHRoZSByYWRpdXMgbmVnYXRpdmU/IEVycm9yLlxuICAgIGlmIChyIDwgMCkgdGhyb3cgbmV3IEVycm9yKFwibmVnYXRpdmUgcmFkaXVzOiBcIiArIHIpO1xuXG4gICAgLy8gSXMgdGhpcyBwYXRoIGVtcHR5PyBNb3ZlIHRvICh4MCx5MCkuXG4gICAgaWYgKHRoaXMuX3gxID09PSBudWxsKSB7XG4gICAgICB0aGlzLl8gKz0gXCJNXCIgKyB4MCArIFwiLFwiICsgeTA7XG4gICAgfVxuXG4gICAgLy8gT3IsIGlzICh4MCx5MCkgbm90IGNvaW5jaWRlbnQgd2l0aCB0aGUgcHJldmlvdXMgcG9pbnQ/IExpbmUgdG8gKHgwLHkwKS5cbiAgICBlbHNlIGlmIChNYXRoLmFicyh0aGlzLl94MSAtIHgwKSA+IGVwc2lsb24gfHwgTWF0aC5hYnModGhpcy5feTEgLSB5MCkgPiBlcHNpbG9uKSB7XG4gICAgICB0aGlzLl8gKz0gXCJMXCIgKyB4MCArIFwiLFwiICsgeTA7XG4gICAgfVxuXG4gICAgLy8gSXMgdGhpcyBhcmMgZW1wdHk/IFdl4oCZcmUgZG9uZS5cbiAgICBpZiAoIXIpIHJldHVybjtcblxuICAgIC8vIERvZXMgdGhlIGFuZ2xlIGdvIHRoZSB3cm9uZyB3YXk/IEZsaXAgdGhlIGRpcmVjdGlvbi5cbiAgICBpZiAoZGEgPCAwKSBkYSA9IGRhICUgdGF1ICsgdGF1O1xuXG4gICAgLy8gSXMgdGhpcyBhIGNvbXBsZXRlIGNpcmNsZT8gRHJhdyB0d28gYXJjcyB0byBjb21wbGV0ZSB0aGUgY2lyY2xlLlxuICAgIGlmIChkYSA+IHRhdUVwc2lsb24pIHtcbiAgICAgIHRoaXMuXyArPSBcIkFcIiArIHIgKyBcIixcIiArIHIgKyBcIiwwLDEsXCIgKyBjdyArIFwiLFwiICsgKHggLSBkeCkgKyBcIixcIiArICh5IC0gZHkpICsgXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIsMCwxLFwiICsgY3cgKyBcIixcIiArICh0aGlzLl94MSA9IHgwKSArIFwiLFwiICsgKHRoaXMuX3kxID0geTApO1xuICAgIH1cblxuICAgIC8vIElzIHRoaXMgYXJjIG5vbi1lbXB0eT8gRHJhdyBhbiBhcmMhXG4gICAgZWxzZSBpZiAoZGEgPiBlcHNpbG9uKSB7XG4gICAgICB0aGlzLl8gKz0gXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIsMCxcIiArICgrKGRhID49IHBpKSkgKyBcIixcIiArIGN3ICsgXCIsXCIgKyAodGhpcy5feDEgPSB4ICsgciAqIE1hdGguY29zKGExKSkgKyBcIixcIiArICh0aGlzLl95MSA9IHkgKyByICogTWF0aC5zaW4oYTEpKTtcbiAgICB9XG4gIH0sXG4gIHJlY3Q6IGZ1bmN0aW9uKHgsIHksIHcsIGgpIHtcbiAgICB0aGlzLl8gKz0gXCJNXCIgKyAodGhpcy5feDAgPSB0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kwID0gdGhpcy5feTEgPSAreSkgKyBcImhcIiArICgrdykgKyBcInZcIiArICgraCkgKyBcImhcIiArICgtdykgKyBcIlpcIjtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl87XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhdGg7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImltcG9ydCBjcmVhdG9yIGZyb20gXCIuL2NyZWF0b3JcIjtcbmltcG9ydCBzZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHNlbGVjdChjcmVhdG9yKG5hbWUpLmNhbGwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSk7XG59XG4iLCJpbXBvcnQgbmFtZXNwYWNlIGZyb20gXCIuL25hbWVzcGFjZVwiO1xuaW1wb3J0IHt4aHRtbH0gZnJvbSBcIi4vbmFtZXNwYWNlc1wiO1xuXG5mdW5jdGlvbiBjcmVhdG9ySW5oZXJpdChuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZG9jdW1lbnQgPSB0aGlzLm93bmVyRG9jdW1lbnQsXG4gICAgICAgIHVyaSA9IHRoaXMubmFtZXNwYWNlVVJJO1xuICAgIHJldHVybiB1cmkgPT09IHhodG1sICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IHhodG1sXG4gICAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKVxuICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh1cmksIG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdG9yRml4ZWQoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuICByZXR1cm4gKGZ1bGxuYW1lLmxvY2FsXG4gICAgICA/IGNyZWF0b3JGaXhlZFxuICAgICAgOiBjcmVhdG9ySW5oZXJpdCkoZnVsbG5hbWUpO1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0ZX0gZnJvbSBcIi4vY3JlYXRlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3JlYXRvcn0gZnJvbSBcIi4vY3JlYXRvclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGxvY2FsfSBmcm9tIFwiLi9sb2NhbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1hdGNoZXJ9IGZyb20gXCIuL21hdGNoZXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtb3VzZX0gZnJvbSBcIi4vbW91c2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBuYW1lc3BhY2V9IGZyb20gXCIuL25hbWVzcGFjZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZXN9IGZyb20gXCIuL25hbWVzcGFjZXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjbGllbnRQb2ludH0gZnJvbSBcIi4vcG9pbnRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3R9IGZyb20gXCIuL3NlbGVjdFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdEFsbH0gZnJvbSBcIi4vc2VsZWN0QWxsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0aW9ufSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3Rvcn0gZnJvbSBcIi4vc2VsZWN0b3JcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3RvckFsbH0gZnJvbSBcIi4vc2VsZWN0b3JBbGxcIjtcbmV4cG9ydCB7c3R5bGVWYWx1ZSBhcyBzdHlsZX0gZnJvbSBcIi4vc2VsZWN0aW9uL3N0eWxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdG91Y2h9IGZyb20gXCIuL3RvdWNoXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdG91Y2hlc30gZnJvbSBcIi4vdG91Y2hlc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHdpbmRvd30gZnJvbSBcIi4vd2luZG93XCI7XG5leHBvcnQge2V2ZW50LCBjdXN0b21FdmVudH0gZnJvbSBcIi4vc2VsZWN0aW9uL29uXCI7XG4iLCJ2YXIgbmV4dElkID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWwoKSB7XG4gIHJldHVybiBuZXcgTG9jYWw7XG59XG5cbmZ1bmN0aW9uIExvY2FsKCkge1xuICB0aGlzLl8gPSBcIkBcIiArICgrK25leHRJZCkudG9TdHJpbmcoMzYpO1xufVxuXG5Mb2NhbC5wcm90b3R5cGUgPSBsb2NhbC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBMb2NhbCxcbiAgZ2V0OiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIGlkID0gdGhpcy5fO1xuICAgIHdoaWxlICghKGlkIGluIG5vZGUpKSBpZiAoIShub2RlID0gbm9kZS5wYXJlbnROb2RlKSkgcmV0dXJuO1xuICAgIHJldHVybiBub2RlW2lkXTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihub2RlLCB2YWx1ZSkge1xuICAgIHJldHVybiBub2RlW3RoaXMuX10gPSB2YWx1ZTtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuXyBpbiBub2RlICYmIGRlbGV0ZSBub2RlW3RoaXMuX107XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fO1xuICB9XG59O1xuIiwidmFyIG1hdGNoZXIgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59O1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBpZiAoIWVsZW1lbnQubWF0Y2hlcykge1xuICAgIHZhciB2ZW5kb3JNYXRjaGVzID0gZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3I7XG4gICAgbWF0Y2hlciA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB2ZW5kb3JNYXRjaGVzLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuICAgICAgfTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hdGNoZXI7XG4iLCJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnRcIjtcbmltcG9ydCBwb2ludCBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHZhciBldmVudCA9IHNvdXJjZUV2ZW50KCk7XG4gIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykgZXZlbnQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgcmV0dXJuIHBvaW50KG5vZGUsIGV2ZW50KTtcbn1cbiIsImltcG9ydCBuYW1lc3BhY2VzIGZyb20gXCIuL25hbWVzcGFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgcHJlZml4ID0gbmFtZSArPSBcIlwiLCBpID0gcHJlZml4LmluZGV4T2YoXCI6XCIpO1xuICBpZiAoaSA+PSAwICYmIChwcmVmaXggPSBuYW1lLnNsaWNlKDAsIGkpKSAhPT0gXCJ4bWxuc1wiKSBuYW1lID0gbmFtZS5zbGljZShpICsgMSk7XG4gIHJldHVybiBuYW1lc3BhY2VzLmhhc093blByb3BlcnR5KHByZWZpeCkgPyB7c3BhY2U6IG5hbWVzcGFjZXNbcHJlZml4XSwgbG9jYWw6IG5hbWV9IDogbmFtZTtcbn1cbiIsImV4cG9ydCB2YXIgeGh0bWwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgeGh0bWw6IHhodG1sLFxuICB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gIHhtbDogXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIlxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIGV2ZW50KSB7XG4gIHZhciBzdmcgPSBub2RlLm93bmVyU1ZHRWxlbWVudCB8fCBub2RlO1xuXG4gIGlmIChzdmcuY3JlYXRlU1ZHUG9pbnQpIHtcbiAgICB2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICBwb2ludC54ID0gZXZlbnQuY2xpZW50WCwgcG9pbnQueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgcG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0obm9kZS5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuICAgIHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XG4gIH1cblxuICB2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBbZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCAtIG5vZGUuY2xpZW50TGVmdCwgZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wIC0gbm9kZS5jbGllbnRUb3BdO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKV1dLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbW3NlbGVjdG9yXV0sIHJvb3QpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW3NlbGVjdG9yID09IG51bGwgPyBbXSA6IHNlbGVjdG9yXSwgcm9vdCk7XG59XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi4vbmFtZXNwYWNlXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpO1xuICAgIHJldHVybiBmdWxsbmFtZS5sb2NhbFxuICAgICAgICA/IG5vZGUuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKVxuICAgICAgICA6IG5vZGUuZ2V0QXR0cmlidXRlKGZ1bGxuYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckZ1bmN0aW9uTlMgOiBhdHRyRnVuY3Rpb24pXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KSkpKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1swXTtcbiAgYXJndW1lbnRzWzBdID0gdGhpcztcbiAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJmdW5jdGlvbiBjbGFzc0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRyaW0oKS5zcGxpdCgvXnxcXHMrLyk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzTGlzdChub2RlKSB7XG4gIHJldHVybiBub2RlLmNsYXNzTGlzdCB8fCBuZXcgQ2xhc3NMaXN0KG5vZGUpO1xufVxuXG5mdW5jdGlvbiBDbGFzc0xpc3Qobm9kZSkge1xuICB0aGlzLl9ub2RlID0gbm9kZTtcbiAgdGhpcy5fbmFtZXMgPSBjbGFzc0FycmF5KG5vZGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIik7XG59XG5cbkNsYXNzTGlzdC5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHRoaXMuX25hbWVzLnB1c2gobmFtZSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA+PSAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5zcGxpY2UoaSwgMSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIGNvbnRhaW5zOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSkgPj0gMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY2xhc3NlZEFkZChub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5hZGQobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkUmVtb3ZlKG5vZGUsIG5hbWVzKSB7XG4gIHZhciBsaXN0ID0gY2xhc3NMaXN0KG5vZGUpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBsaXN0LnJlbW92ZShuYW1lc1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRUcnVlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkQWRkKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZhbHNlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkUmVtb3ZlKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZ1bmN0aW9uKG5hbWVzLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgKHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgPyBjbGFzc2VkQWRkIDogY2xhc3NlZFJlbW92ZSkodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgbmFtZXMgPSBjbGFzc0FycmF5KG5hbWUgKyBcIlwiKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbGlzdCA9IGNsYXNzTGlzdCh0aGlzLm5vZGUoKSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgaWYgKCFsaXN0LmNvbnRhaW5zKG5hbWVzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gY2xhc3NlZEZ1bmN0aW9uIDogdmFsdWVcbiAgICAgID8gY2xhc3NlZFRydWVcbiAgICAgIDogY2xhc3NlZEZhbHNlKShuYW1lcywgdmFsdWUpKTtcbn1cbiIsImZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZVNoYWxsb3coKSB7XG4gIHJldHVybiB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY2xvbmVOb2RlKGZhbHNlKSwgdGhpcy5uZXh0U2libGluZyk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZURlZXAoKSB7XG4gIHJldHVybiB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY2xvbmVOb2RlKHRydWUpLCB0aGlzLm5leHRTaWJsaW5nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGVlcCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZGVlcCA/IHNlbGVjdGlvbl9jbG9uZURlZXAgOiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHtFbnRlck5vZGV9IGZyb20gXCIuL2VudGVyXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4uL2NvbnN0YW50XCI7XG5cbnZhciBrZXlQcmVmaXggPSBcIiRcIjsgLy8gUHJvdGVjdCBhZ2FpbnN0IGtleXMgbGlrZSDigJxfX3Byb3RvX1/igJ0uXG5cbmZ1bmN0aW9uIGJpbmRJbmRleChwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhKSB7XG4gIHZhciBpID0gMCxcbiAgICAgIG5vZGUsXG4gICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZml0IGludG8gdXBkYXRlLlxuICAvLyBQdXQgYW55IG51bGwgbm9kZXMgaW50byBlbnRlci5cbiAgLy8gUHV0IGFueSByZW1haW5pbmcgZGF0YSBpbnRvIGVudGVyLlxuICBmb3IgKDsgaSA8IGRhdGFMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGRvbuKAmXQgZml0IGludG8gZXhpdC5cbiAgZm9yICg7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRLZXkocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSwga2V5KSB7XG4gIHZhciBpLFxuICAgICAgbm9kZSxcbiAgICAgIG5vZGVCeUtleVZhbHVlID0ge30sXG4gICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aCxcbiAgICAgIGtleVZhbHVlcyA9IG5ldyBBcnJheShncm91cExlbmd0aCksXG4gICAgICBrZXlWYWx1ZTtcblxuICAvLyBDb21wdXRlIHRoZSBrZXkgZm9yIGVhY2ggbm9kZS5cbiAgLy8gSWYgbXVsdGlwbGUgbm9kZXMgaGF2ZSB0aGUgc2FtZSBrZXksIHRoZSBkdXBsaWNhdGVzIGFyZSBhZGRlZCB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIGtleVZhbHVlc1tpXSA9IGtleVZhbHVlID0ga2V5UHJlZml4ICsga2V5LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApO1xuICAgICAgaWYgKGtleVZhbHVlIGluIG5vZGVCeUtleVZhbHVlKSB7XG4gICAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZUJ5S2V5VmFsdWVba2V5VmFsdWVdID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDb21wdXRlIHRoZSBrZXkgZm9yIGVhY2ggZGF0dW0uXG4gIC8vIElmIHRoZXJlIGEgbm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBrZXksIGpvaW4gYW5kIGFkZCBpdCB0byB1cGRhdGUuXG4gIC8vIElmIHRoZXJlIGlzIG5vdCAob3IgdGhlIGtleSBpcyBhIGR1cGxpY2F0ZSksIGFkZCBpdCB0byBlbnRlci5cbiAgZm9yIChpID0gMDsgaSA8IGRhdGFMZW5ndGg7ICsraSkge1xuICAgIGtleVZhbHVlID0ga2V5UHJlZml4ICsga2V5LmNhbGwocGFyZW50LCBkYXRhW2ldLCBpLCBkYXRhKTtcbiAgICBpZiAobm9kZSA9IG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSkge1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgbm9kZUJ5S2V5VmFsdWVba2V5VmFsdWVdID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGFueSByZW1haW5pbmcgbm9kZXMgdGhhdCB3ZXJlIG5vdCBib3VuZCB0byBkYXRhIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChub2RlQnlLZXlWYWx1ZVtrZXlWYWx1ZXNbaV1dID09PSBub2RlKSkge1xuICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIGRhdGEgPSBuZXcgQXJyYXkodGhpcy5zaXplKCkpLCBqID0gLTE7XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGQpIHsgZGF0YVsrK2pdID0gZDsgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgYmluZCA9IGtleSA/IGJpbmRLZXkgOiBiaW5kSW5kZXgsXG4gICAgICBwYXJlbnRzID0gdGhpcy5fcGFyZW50cyxcbiAgICAgIGdyb3VwcyA9IHRoaXMuX2dyb3VwcztcblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHZhbHVlID0gY29uc3RhbnQodmFsdWUpO1xuXG4gIGZvciAodmFyIG0gPSBncm91cHMubGVuZ3RoLCB1cGRhdGUgPSBuZXcgQXJyYXkobSksIGVudGVyID0gbmV3IEFycmF5KG0pLCBleGl0ID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIHZhciBwYXJlbnQgPSBwYXJlbnRzW2pdLFxuICAgICAgICBncm91cCA9IGdyb3Vwc1tqXSxcbiAgICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICAgIGRhdGEgPSB2YWx1ZS5jYWxsKHBhcmVudCwgcGFyZW50ICYmIHBhcmVudC5fX2RhdGFfXywgaiwgcGFyZW50cyksXG4gICAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgZW50ZXJHcm91cCA9IGVudGVyW2pdID0gbmV3IEFycmF5KGRhdGFMZW5ndGgpLFxuICAgICAgICB1cGRhdGVHcm91cCA9IHVwZGF0ZVtqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgZXhpdEdyb3VwID0gZXhpdFtqXSA9IG5ldyBBcnJheShncm91cExlbmd0aCk7XG5cbiAgICBiaW5kKHBhcmVudCwgZ3JvdXAsIGVudGVyR3JvdXAsIHVwZGF0ZUdyb3VwLCBleGl0R3JvdXAsIGRhdGEsIGtleSk7XG5cbiAgICAvLyBOb3cgY29ubmVjdCB0aGUgZW50ZXIgbm9kZXMgdG8gdGhlaXIgZm9sbG93aW5nIHVwZGF0ZSBub2RlLCBzdWNoIHRoYXRcbiAgICAvLyBhcHBlbmRDaGlsZCBjYW4gaW5zZXJ0IHRoZSBtYXRlcmlhbGl6ZWQgZW50ZXIgbm9kZSBiZWZvcmUgdGhpcyBub2RlLFxuICAgIC8vIHJhdGhlciB0aGFuIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmVudCBub2RlLlxuICAgIGZvciAodmFyIGkwID0gMCwgaTEgPSAwLCBwcmV2aW91cywgbmV4dDsgaTAgPCBkYXRhTGVuZ3RoOyArK2kwKSB7XG4gICAgICBpZiAocHJldmlvdXMgPSBlbnRlckdyb3VwW2kwXSkge1xuICAgICAgICBpZiAoaTAgPj0gaTEpIGkxID0gaTAgKyAxO1xuICAgICAgICB3aGlsZSAoIShuZXh0ID0gdXBkYXRlR3JvdXBbaTFdKSAmJiArK2kxIDwgZGF0YUxlbmd0aCk7XG4gICAgICAgIHByZXZpb3VzLl9uZXh0ID0gbmV4dCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSA9IG5ldyBTZWxlY3Rpb24odXBkYXRlLCBwYXJlbnRzKTtcbiAgdXBkYXRlLl9lbnRlciA9IGVudGVyO1xuICB1cGRhdGUuX2V4aXQgPSBleGl0O1xuICByZXR1cm4gdXBkYXRlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5wcm9wZXJ0eShcIl9fZGF0YV9fXCIsIHZhbHVlKVxuICAgICAgOiB0aGlzLm5vZGUoKS5fX2RhdGFfXztcbn1cbiIsImltcG9ydCBkZWZhdWx0VmlldyBmcm9tIFwiLi4vd2luZG93XCI7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQobm9kZSwgdHlwZSwgcGFyYW1zKSB7XG4gIHZhciB3aW5kb3cgPSBkZWZhdWx0Vmlldyhub2RlKSxcbiAgICAgIGV2ZW50ID0gd2luZG93LkN1c3RvbUV2ZW50O1xuXG4gIGlmICh0eXBlb2YgZXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGV2ZW50ID0gbmV3IGV2ZW50KHR5cGUsIHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBpZiAocGFyYW1zKSBldmVudC5pbml0RXZlbnQodHlwZSwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlKSwgZXZlbnQuZGV0YWlsID0gcGFyYW1zLmRldGFpbDtcbiAgICBlbHNlIGV2ZW50LmluaXRFdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hDb25zdGFudCh0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gdGhpcy5lYWNoKCh0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gZGlzcGF0Y2hGdW5jdGlvblxuICAgICAgOiBkaXNwYXRjaENvbnN0YW50KSh0eXBlLCBwYXJhbXMpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIGNhbGxiYWNrLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhdGhpcy5ub2RlKCk7XG59XG4iLCJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZVwiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9lbnRlciB8fCB0aGlzLl9ncm91cHMubWFwKHNwYXJzZSksIHRoaXMuX3BhcmVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRW50ZXJOb2RlKHBhcmVudCwgZGF0dW0pIHtcbiAgdGhpcy5vd25lckRvY3VtZW50ID0gcGFyZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHRoaXMubmFtZXNwYWNlVVJJID0gcGFyZW50Lm5hbWVzcGFjZVVSSTtcbiAgdGhpcy5fbmV4dCA9IG51bGw7XG4gIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5fX2RhdGFfXyA9IGRhdHVtO1xufVxuXG5FbnRlck5vZGUucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogRW50ZXJOb2RlLFxuICBhcHBlbmRDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHRoaXMuX25leHQpOyB9LFxuICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uKGNoaWxkLCBuZXh0KSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBuZXh0KTsgfSxcbiAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTsgfSxcbiAgcXVlcnlTZWxlY3RvckFsbDogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTsgfVxufTtcbiIsImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2V4aXQgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IG1hdGNoZXIgZnJvbSBcIi4uL21hdGNoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJmdW5jdGlvblwiKSBtYXRjaCA9IG1hdGNoZXIobWF0Y2gpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBbXSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiBtYXRjaC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkge1xuICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJmdW5jdGlvbiBodG1sUmVtb3ZlKCkge1xuICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGh0bWxDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaHRtbEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pbm5lckhUTUwgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IGh0bWxSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGh0bWxGdW5jdGlvblxuICAgICAgICAgIDogaHRtbENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLmlubmVySFRNTDtcbn1cbiIsImltcG9ydCBzZWxlY3Rpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3RBbGwgZnJvbSBcIi4vc2VsZWN0QWxsXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VudGVyIGZyb20gXCIuL2VudGVyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2V4aXQgZnJvbSBcIi4vZXhpdFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9tZXJnZSBmcm9tIFwiLi9tZXJnZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9vcmRlciBmcm9tIFwiLi9vcmRlclwiO1xuaW1wb3J0IHNlbGVjdGlvbl9zb3J0IGZyb20gXCIuL3NvcnRcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2FsbCBmcm9tIFwiLi9jYWxsXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGVzIGZyb20gXCIuL25vZGVzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGUgZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9zaXplIGZyb20gXCIuL3NpemVcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW1wdHkgZnJvbSBcIi4vZW1wdHlcIjtcbmltcG9ydCBzZWxlY3Rpb25fZWFjaCBmcm9tIFwiLi9lYWNoXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2F0dHIgZnJvbSBcIi4vYXR0clwiO1xuaW1wb3J0IHNlbGVjdGlvbl9zdHlsZSBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9wcm9wZXJ0eSBmcm9tIFwiLi9wcm9wZXJ0eVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbGFzc2VkIGZyb20gXCIuL2NsYXNzZWRcIjtcbmltcG9ydCBzZWxlY3Rpb25fdGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2h0bWwgZnJvbSBcIi4vaHRtbFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9yYWlzZSBmcm9tIFwiLi9yYWlzZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9sb3dlciBmcm9tIFwiLi9sb3dlclwiO1xuaW1wb3J0IHNlbGVjdGlvbl9hcHBlbmQgZnJvbSBcIi4vYXBwZW5kXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2luc2VydCBmcm9tIFwiLi9pbnNlcnRcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbG9uZSBmcm9tIFwiLi9jbG9uZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXR1bSBmcm9tIFwiLi9kYXR1bVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9vbiBmcm9tIFwiLi9vblwiO1xuaW1wb3J0IHNlbGVjdGlvbl9kaXNwYXRjaCBmcm9tIFwiLi9kaXNwYXRjaFwiO1xuXG5leHBvcnQgdmFyIHJvb3QgPSBbbnVsbF07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Rpb24oZ3JvdXBzLCBwYXJlbnRzKSB7XG4gIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgdGhpcy5fcGFyZW50cyA9IHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdXSwgcm9vdCk7XG59XG5cblNlbGVjdGlvbi5wcm90b3R5cGUgPSBzZWxlY3Rpb24ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogU2VsZWN0aW9uLFxuICBzZWxlY3Q6IHNlbGVjdGlvbl9zZWxlY3QsXG4gIHNlbGVjdEFsbDogc2VsZWN0aW9uX3NlbGVjdEFsbCxcbiAgZmlsdGVyOiBzZWxlY3Rpb25fZmlsdGVyLFxuICBkYXRhOiBzZWxlY3Rpb25fZGF0YSxcbiAgZW50ZXI6IHNlbGVjdGlvbl9lbnRlcixcbiAgZXhpdDogc2VsZWN0aW9uX2V4aXQsXG4gIG1lcmdlOiBzZWxlY3Rpb25fbWVyZ2UsXG4gIG9yZGVyOiBzZWxlY3Rpb25fb3JkZXIsXG4gIHNvcnQ6IHNlbGVjdGlvbl9zb3J0LFxuICBjYWxsOiBzZWxlY3Rpb25fY2FsbCxcbiAgbm9kZXM6IHNlbGVjdGlvbl9ub2RlcyxcbiAgbm9kZTogc2VsZWN0aW9uX25vZGUsXG4gIHNpemU6IHNlbGVjdGlvbl9zaXplLFxuICBlbXB0eTogc2VsZWN0aW9uX2VtcHR5LFxuICBlYWNoOiBzZWxlY3Rpb25fZWFjaCxcbiAgYXR0cjogc2VsZWN0aW9uX2F0dHIsXG4gIHN0eWxlOiBzZWxlY3Rpb25fc3R5bGUsXG4gIHByb3BlcnR5OiBzZWxlY3Rpb25fcHJvcGVydHksXG4gIGNsYXNzZWQ6IHNlbGVjdGlvbl9jbGFzc2VkLFxuICB0ZXh0OiBzZWxlY3Rpb25fdGV4dCxcbiAgaHRtbDogc2VsZWN0aW9uX2h0bWwsXG4gIHJhaXNlOiBzZWxlY3Rpb25fcmFpc2UsXG4gIGxvd2VyOiBzZWxlY3Rpb25fbG93ZXIsXG4gIGFwcGVuZDogc2VsZWN0aW9uX2FwcGVuZCxcbiAgaW5zZXJ0OiBzZWxlY3Rpb25faW5zZXJ0LFxuICByZW1vdmU6IHNlbGVjdGlvbl9yZW1vdmUsXG4gIGNsb25lOiBzZWxlY3Rpb25fY2xvbmUsXG4gIGRhdHVtOiBzZWxlY3Rpb25fZGF0dW0sXG4gIG9uOiBzZWxlY3Rpb25fb24sXG4gIGRpc3BhdGNoOiBzZWxlY3Rpb25fZGlzcGF0Y2hcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGlvbjtcbiIsImltcG9ydCBjcmVhdG9yIGZyb20gXCIuLi9jcmVhdG9yXCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yXCI7XG5cbmZ1bmN0aW9uIGNvbnN0YW50TnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGJlZm9yZSkge1xuICB2YXIgY3JlYXRlID0gdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUgOiBjcmVhdG9yKG5hbWUpLFxuICAgICAgc2VsZWN0ID0gYmVmb3JlID09IG51bGwgPyBjb25zdGFudE51bGwgOiB0eXBlb2YgYmVmb3JlID09PSBcImZ1bmN0aW9uXCIgPyBiZWZvcmUgOiBzZWxlY3RvcihiZWZvcmUpO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKGNyZWF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBzZWxlY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCBudWxsKTtcbiAgfSk7XG59XG4iLCJmdW5jdGlvbiBsb3dlcigpIHtcbiAgaWYgKHRoaXMucHJldmlvdXNTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMsIHRoaXMucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gobG93ZXIpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdGlvbikge1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSBzZWxlY3Rpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24obWVyZ2VzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgbm9kZSA9IGdyb3VwW2ldO1xuICAgICAgaWYgKG5vZGUpIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBub2RlcyA9IG5ldyBBcnJheSh0aGlzLnNpemUoKSksIGkgPSAtMTtcbiAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkgeyBub2Rlc1srK2ldID0gdGhpczsgfSk7XG4gIHJldHVybiBub2Rlcztcbn1cbiIsInZhciBmaWx0ZXJFdmVudHMgPSB7fTtcblxuZXhwb3J0IHZhciBldmVudCA9IG51bGw7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGlmICghKFwib25tb3VzZWVudGVyXCIgaW4gZWxlbWVudCkpIHtcbiAgICBmaWx0ZXJFdmVudHMgPSB7bW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIiwgbW91c2VsZWF2ZTogXCJtb3VzZW91dFwifTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJDb250ZXh0TGlzdGVuZXIobGlzdGVuZXIsIGluZGV4LCBncm91cCkge1xuICBsaXN0ZW5lciA9IGNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lciwgaW5kZXgsIGdyb3VwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xuICAgIGlmICghcmVsYXRlZCB8fCAocmVsYXRlZCAhPT0gdGhpcyAmJiAhKHJlbGF0ZWQuY29tcGFyZURvY3VtZW50UG9zaXRpb24odGhpcykgJiA4KSkpIHtcbiAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udGV4dExpc3RlbmVyKGxpc3RlbmVyLCBpbmRleCwgZ3JvdXApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50MSkge1xuICAgIHZhciBldmVudDAgPSBldmVudDsgLy8gRXZlbnRzIGNhbiBiZSByZWVudHJhbnQgKGUuZy4sIGZvY3VzKS5cbiAgICBldmVudCA9IGV2ZW50MTtcbiAgICB0cnkge1xuICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9fZGF0YV9fLCBpbmRleCwgZ3JvdXApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBldmVudCA9IGV2ZW50MDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uUmVtb3ZlKHR5cGVuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb247XG4gICAgaWYgKCFvbikgcmV0dXJuO1xuICAgIGZvciAodmFyIGogPSAwLCBpID0gLTEsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGlmIChvID0gb25bal0sICghdHlwZW5hbWUudHlwZSB8fCBvLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUpICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLmNhcHR1cmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25bKytpXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgrK2kpIG9uLmxlbmd0aCA9IGk7XG4gICAgZWxzZSBkZWxldGUgdGhpcy5fX29uO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbkFkZCh0eXBlbmFtZSwgdmFsdWUsIGNhcHR1cmUpIHtcbiAgdmFyIHdyYXAgPSBmaWx0ZXJFdmVudHMuaGFzT3duUHJvcGVydHkodHlwZW5hbWUudHlwZSkgPyBmaWx0ZXJDb250ZXh0TGlzdGVuZXIgOiBjb250ZXh0TGlzdGVuZXI7XG4gIHJldHVybiBmdW5jdGlvbihkLCBpLCBncm91cCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbiwgbywgbGlzdGVuZXIgPSB3cmFwKHZhbHVlLCBpLCBncm91cCk7XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgICAgaWYgKChvID0gb25bal0pLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8uY2FwdHVyZSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIgPSBsaXN0ZW5lciwgby5jYXB0dXJlID0gY2FwdHVyZSk7XG4gICAgICAgIG8udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZW5hbWUudHlwZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIG8gPSB7dHlwZTogdHlwZW5hbWUudHlwZSwgbmFtZTogdHlwZW5hbWUubmFtZSwgdmFsdWU6IHZhbHVlLCBsaXN0ZW5lcjogbGlzdGVuZXIsIGNhcHR1cmU6IGNhcHR1cmV9O1xuICAgIGlmICghb24pIHRoaXMuX19vbiA9IFtvXTtcbiAgICBlbHNlIG9uLnB1c2gobyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGVuYW1lLCB2YWx1ZSwgY2FwdHVyZSkge1xuICB2YXIgdHlwZW5hbWVzID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiKSwgaSwgbiA9IHR5cGVuYW1lcy5sZW5ndGgsIHQ7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG9uID0gdGhpcy5ub2RlKCkuX19vbjtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBmb3IgKGkgPSAwLCBvID0gb25bal07IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKCh0ID0gdHlwZW5hbWVzW2ldKS50eXBlID09PSBvLnR5cGUgJiYgdC5uYW1lID09PSBvLm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gby52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBvbiA9IHZhbHVlID8gb25BZGQgOiBvblJlbW92ZTtcbiAgaWYgKGNhcHR1cmUgPT0gbnVsbCkgY2FwdHVyZSA9IGZhbHNlO1xuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB0aGlzLmVhY2gob24odHlwZW5hbWVzW2ldLCB2YWx1ZSwgY2FwdHVyZSkpO1xuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbUV2ZW50KGV2ZW50MSwgbGlzdGVuZXIsIHRoYXQsIGFyZ3MpIHtcbiAgdmFyIGV2ZW50MCA9IGV2ZW50O1xuICBldmVudDEuc291cmNlRXZlbnQgPSBldmVudDtcbiAgZXZlbnQgPSBldmVudDE7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9IGZpbmFsbHkge1xuICAgIGV2ZW50ID0gZXZlbnQwO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAtMSwgbSA9IGdyb3Vwcy5sZW5ndGg7ICsraiA8IG07KSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSBncm91cC5sZW5ndGggLSAxLCBuZXh0ID0gZ3JvdXBbaV0sIG5vZGU7IC0taSA+PSAwOykge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBpZiAobmV4dCAmJiBuZXh0ICE9PSBub2RlLm5leHRTaWJsaW5nKSBuZXh0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpO1xuICAgICAgICBuZXh0ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbiIsImZ1bmN0aW9uIHByb3BlcnR5UmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzW25hbWVdO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5RnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSBkZWxldGUgdGhpc1tuYW1lXTtcbiAgICBlbHNlIHRoaXNbbmFtZV0gPSB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBwcm9wZXJ0eVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBwcm9wZXJ0eUZ1bmN0aW9uXG4gICAgICAgICAgOiBwcm9wZXJ0eUNvbnN0YW50KShuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpW25hbWVdO1xufVxuIiwiZnVuY3Rpb24gcmFpc2UoKSB7XG4gIGlmICh0aGlzLm5leHRTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJhaXNlKTtcbn1cbiIsImZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCkgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyZW1vdmUpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2VsZWN0b3JBbGwgZnJvbSBcIi4uL3NlbGVjdG9yQWxsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHN1Ymdyb3Vwcy5wdXNoKHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSk7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHBhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBzaXplID0gMDtcbiAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkgeyArK3NpemU7IH0pO1xuICByZXR1cm4gc2l6ZTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wYXJlKSB7XG4gIGlmICghY29tcGFyZSkgY29tcGFyZSA9IGFzY2VuZGluZztcblxuICBmdW5jdGlvbiBjb21wYXJlTm9kZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgJiYgYiA/IGNvbXBhcmUoYS5fX2RhdGFfXywgYi5fX2RhdGFfXykgOiAhYSAtICFiO1xuICB9XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc29ydGdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc29ydGdyb3VwID0gc29ydGdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc29ydGdyb3VwW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc29ydGdyb3VwLnNvcnQoY29tcGFyZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc29ydGdyb3VwcywgdGhpcy5fcGFyZW50cykub3JkZXIoKTtcbn1cblxuZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odXBkYXRlKSB7XG4gIHJldHVybiBuZXcgQXJyYXkodXBkYXRlLmxlbmd0aCk7XG59XG4iLCJpbXBvcnQgZGVmYXVsdFZpZXcgZnJvbSBcIi4uL3dpbmRvd1wiO1xuXG5mdW5jdGlvbiBzdHlsZVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUNvbnN0YW50KG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgZWxzZSB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHYsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMVxuICAgICAgPyB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgICAgICAgID8gc3R5bGVSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBzdHlsZUZ1bmN0aW9uXG4gICAgICAgICAgICA6IHN0eWxlQ29uc3RhbnQpKG5hbWUsIHZhbHVlLCBwcmlvcml0eSA9PSBudWxsID8gXCJcIiA6IHByaW9yaXR5KSlcbiAgICAgIDogc3R5bGVWYWx1ZSh0aGlzLm5vZGUoKSwgbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVZhbHVlKG5vZGUsIG5hbWUpIHtcbiAgcmV0dXJuIG5vZGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKVxuICAgICAgfHwgZGVmYXVsdFZpZXcobm9kZSkuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xufVxuIiwiZnVuY3Rpb24gdGV4dFJlbW92ZSgpIHtcbiAgdGhpcy50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHRleHRDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyB0ZXh0UmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyB0ZXh0RnVuY3Rpb25cbiAgICAgICAgICA6IHRleHRDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS50ZXh0Q29udGVudDtcbn1cbiIsImZ1bmN0aW9uIG5vbmUoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IG5vbmUgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfTtcbn1cbiIsImZ1bmN0aW9uIGVtcHR5KCkge1xuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA9PSBudWxsID8gZW1wdHkgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7ZXZlbnR9IGZyb20gXCIuL3NlbGVjdGlvbi9vblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGN1cnJlbnQgPSBldmVudCwgc291cmNlO1xuICB3aGlsZSAoc291cmNlID0gY3VycmVudC5zb3VyY2VFdmVudCkgY3VycmVudCA9IHNvdXJjZTtcbiAgcmV0dXJuIGN1cnJlbnQ7XG59XG4iLCJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnRcIjtcbmltcG9ydCBwb2ludCBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCB0b3VjaGVzLCBpZGVudGlmaWVyKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykgaWRlbnRpZmllciA9IHRvdWNoZXMsIHRvdWNoZXMgPSBzb3VyY2VFdmVudCgpLmNoYW5nZWRUb3VjaGVzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBuID0gdG91Y2hlcyA/IHRvdWNoZXMubGVuZ3RoIDogMCwgdG91Y2g7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoKHRvdWNoID0gdG91Y2hlc1tpXSkuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmV0dXJuIHBvaW50KG5vZGUsIHRvdWNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCBzb3VyY2VFdmVudCBmcm9tIFwiLi9zb3VyY2VFdmVudFwiO1xuaW1wb3J0IHBvaW50IGZyb20gXCIuL3BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIHRvdWNoZXMpIHtcbiAgaWYgKHRvdWNoZXMgPT0gbnVsbCkgdG91Y2hlcyA9IHNvdXJjZUV2ZW50KCkudG91Y2hlcztcblxuICBmb3IgKHZhciBpID0gMCwgbiA9IHRvdWNoZXMgPyB0b3VjaGVzLmxlbmd0aCA6IDAsIHBvaW50cyA9IG5ldyBBcnJheShuKTsgaSA8IG47ICsraSkge1xuICAgIHBvaW50c1tpXSA9IHBvaW50KG5vZGUsIHRvdWNoZXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUpIHtcbiAgcmV0dXJuIChub2RlLm93bmVyRG9jdW1lbnQgJiYgbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSAvLyBub2RlIGlzIGEgTm9kZVxuICAgICAgfHwgKG5vZGUuZG9jdW1lbnQgJiYgbm9kZSkgLy8gbm9kZSBpcyBhIFdpbmRvd1xuICAgICAgfHwgbm9kZS5kZWZhdWx0VmlldzsgLy8gbm9kZSBpcyBhIERvY3VtZW50XG59XG4iLCJpbXBvcnQge3BhdGh9IGZyb20gXCJkMy1wYXRoXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCB7YWJzLCBhY29zLCBhc2luLCBhdGFuMiwgY29zLCBlcHNpbG9uLCBoYWxmUGksIG1heCwgbWluLCBwaSwgc2luLCBzcXJ0LCB0YXV9IGZyb20gXCIuL21hdGhcIjtcblxuZnVuY3Rpb24gYXJjSW5uZXJSYWRpdXMoZCkge1xuICByZXR1cm4gZC5pbm5lclJhZGl1cztcbn1cblxuZnVuY3Rpb24gYXJjT3V0ZXJSYWRpdXMoZCkge1xuICByZXR1cm4gZC5vdXRlclJhZGl1cztcbn1cblxuZnVuY3Rpb24gYXJjU3RhcnRBbmdsZShkKSB7XG4gIHJldHVybiBkLnN0YXJ0QW5nbGU7XG59XG5cbmZ1bmN0aW9uIGFyY0VuZEFuZ2xlKGQpIHtcbiAgcmV0dXJuIGQuZW5kQW5nbGU7XG59XG5cbmZ1bmN0aW9uIGFyY1BhZEFuZ2xlKGQpIHtcbiAgcmV0dXJuIGQgJiYgZC5wYWRBbmdsZTsgLy8gTm90ZTogb3B0aW9uYWwhXG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdCh4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcbiAgdmFyIHgxMCA9IHgxIC0geDAsIHkxMCA9IHkxIC0geTAsXG4gICAgICB4MzIgPSB4MyAtIHgyLCB5MzIgPSB5MyAtIHkyLFxuICAgICAgdCA9ICh4MzIgKiAoeTAgLSB5MikgLSB5MzIgKiAoeDAgLSB4MikpIC8gKHkzMiAqIHgxMCAtIHgzMiAqIHkxMCk7XG4gIHJldHVybiBbeDAgKyB0ICogeDEwLCB5MCArIHQgKiB5MTBdO1xufVxuXG4vLyBDb21wdXRlIHBlcnBlbmRpY3VsYXIgb2Zmc2V0IGxpbmUgb2YgbGVuZ3RoIHJjLlxuLy8gaHR0cDovL21hdGh3b3JsZC53b2xmcmFtLmNvbS9DaXJjbGUtTGluZUludGVyc2VjdGlvbi5odG1sXG5mdW5jdGlvbiBjb3JuZXJUYW5nZW50cyh4MCwgeTAsIHgxLCB5MSwgcjEsIHJjLCBjdykge1xuICB2YXIgeDAxID0geDAgLSB4MSxcbiAgICAgIHkwMSA9IHkwIC0geTEsXG4gICAgICBsbyA9IChjdyA/IHJjIDogLXJjKSAvIHNxcnQoeDAxICogeDAxICsgeTAxICogeTAxKSxcbiAgICAgIG94ID0gbG8gKiB5MDEsXG4gICAgICBveSA9IC1sbyAqIHgwMSxcbiAgICAgIHgxMSA9IHgwICsgb3gsXG4gICAgICB5MTEgPSB5MCArIG95LFxuICAgICAgeDEwID0geDEgKyBveCxcbiAgICAgIHkxMCA9IHkxICsgb3ksXG4gICAgICB4MDAgPSAoeDExICsgeDEwKSAvIDIsXG4gICAgICB5MDAgPSAoeTExICsgeTEwKSAvIDIsXG4gICAgICBkeCA9IHgxMCAtIHgxMSxcbiAgICAgIGR5ID0geTEwIC0geTExLFxuICAgICAgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeSxcbiAgICAgIHIgPSByMSAtIHJjLFxuICAgICAgRCA9IHgxMSAqIHkxMCAtIHgxMCAqIHkxMSxcbiAgICAgIGQgPSAoZHkgPCAwID8gLTEgOiAxKSAqIHNxcnQobWF4KDAsIHIgKiByICogZDIgLSBEICogRCkpLFxuICAgICAgY3gwID0gKEQgKiBkeSAtIGR4ICogZCkgLyBkMixcbiAgICAgIGN5MCA9ICgtRCAqIGR4IC0gZHkgKiBkKSAvIGQyLFxuICAgICAgY3gxID0gKEQgKiBkeSArIGR4ICogZCkgLyBkMixcbiAgICAgIGN5MSA9ICgtRCAqIGR4ICsgZHkgKiBkKSAvIGQyLFxuICAgICAgZHgwID0gY3gwIC0geDAwLFxuICAgICAgZHkwID0gY3kwIC0geTAwLFxuICAgICAgZHgxID0gY3gxIC0geDAwLFxuICAgICAgZHkxID0gY3kxIC0geTAwO1xuXG4gIC8vIFBpY2sgdGhlIGNsb3NlciBvZiB0aGUgdHdvIGludGVyc2VjdGlvbiBwb2ludHMuXG4gIC8vIFRPRE8gSXMgdGhlcmUgYSBmYXN0ZXIgd2F5IHRvIGRldGVybWluZSB3aGljaCBpbnRlcnNlY3Rpb24gdG8gdXNlP1xuICBpZiAoZHgwICogZHgwICsgZHkwICogZHkwID4gZHgxICogZHgxICsgZHkxICogZHkxKSBjeDAgPSBjeDEsIGN5MCA9IGN5MTtcblxuICByZXR1cm4ge1xuICAgIGN4OiBjeDAsXG4gICAgY3k6IGN5MCxcbiAgICB4MDE6IC1veCxcbiAgICB5MDE6IC1veSxcbiAgICB4MTE6IGN4MCAqIChyMSAvIHIgLSAxKSxcbiAgICB5MTE6IGN5MCAqIChyMSAvIHIgLSAxKVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGlubmVyUmFkaXVzID0gYXJjSW5uZXJSYWRpdXMsXG4gICAgICBvdXRlclJhZGl1cyA9IGFyY091dGVyUmFkaXVzLFxuICAgICAgY29ybmVyUmFkaXVzID0gY29uc3RhbnQoMCksXG4gICAgICBwYWRSYWRpdXMgPSBudWxsLFxuICAgICAgc3RhcnRBbmdsZSA9IGFyY1N0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZSA9IGFyY0VuZEFuZ2xlLFxuICAgICAgcGFkQW5nbGUgPSBhcmNQYWRBbmdsZSxcbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGFyYygpIHtcbiAgICB2YXIgYnVmZmVyLFxuICAgICAgICByLFxuICAgICAgICByMCA9ICtpbm5lclJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICByMSA9ICtvdXRlclJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICBhMCA9IHN0YXJ0QW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSAtIGhhbGZQaSxcbiAgICAgICAgYTEgPSBlbmRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC0gaGFsZlBpLFxuICAgICAgICBkYSA9IGFicyhhMSAtIGEwKSxcbiAgICAgICAgY3cgPSBhMSA+IGEwO1xuXG4gICAgaWYgKCFjb250ZXh0KSBjb250ZXh0ID0gYnVmZmVyID0gcGF0aCgpO1xuXG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlIG91dGVyIHJhZGl1cyBpcyBhbHdheXMgbGFyZ2VyIHRoYW4gdGhlIGlubmVyIHJhZGl1cy5cbiAgICBpZiAocjEgPCByMCkgciA9IHIxLCByMSA9IHIwLCByMCA9IHI7XG5cbiAgICAvLyBJcyBpdCBhIHBvaW50P1xuICAgIGlmICghKHIxID4gZXBzaWxvbikpIGNvbnRleHQubW92ZVRvKDAsIDApO1xuXG4gICAgLy8gT3IgaXMgaXQgYSBjaXJjbGUgb3IgYW5udWx1cz9cbiAgICBlbHNlIGlmIChkYSA+IHRhdSAtIGVwc2lsb24pIHtcbiAgICAgIGNvbnRleHQubW92ZVRvKHIxICogY29zKGEwKSwgcjEgKiBzaW4oYTApKTtcbiAgICAgIGNvbnRleHQuYXJjKDAsIDAsIHIxLCBhMCwgYTEsICFjdyk7XG4gICAgICBpZiAocjAgPiBlcHNpbG9uKSB7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKHIwICogY29zKGExKSwgcjAgKiBzaW4oYTEpKTtcbiAgICAgICAgY29udGV4dC5hcmMoMCwgMCwgcjAsIGExLCBhMCwgY3cpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9yIGlzIGl0IGEgY2lyY3VsYXIgb3IgYW5udWxhciBzZWN0b3I/XG4gICAgZWxzZSB7XG4gICAgICB2YXIgYTAxID0gYTAsXG4gICAgICAgICAgYTExID0gYTEsXG4gICAgICAgICAgYTAwID0gYTAsXG4gICAgICAgICAgYTEwID0gYTEsXG4gICAgICAgICAgZGEwID0gZGEsXG4gICAgICAgICAgZGExID0gZGEsXG4gICAgICAgICAgYXAgPSBwYWRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC8gMixcbiAgICAgICAgICBycCA9IChhcCA+IGVwc2lsb24pICYmIChwYWRSYWRpdXMgPyArcGFkUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBzcXJ0KHIwICogcjAgKyByMSAqIHIxKSksXG4gICAgICAgICAgcmMgPSBtaW4oYWJzKHIxIC0gcjApIC8gMiwgK2Nvcm5lclJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSxcbiAgICAgICAgICByYzAgPSByYyxcbiAgICAgICAgICByYzEgPSByYyxcbiAgICAgICAgICB0MCxcbiAgICAgICAgICB0MTtcblxuICAgICAgLy8gQXBwbHkgcGFkZGluZz8gTm90ZSB0aGF0IHNpbmNlIHIxIOKJpSByMCwgZGExIOKJpSBkYTAuXG4gICAgICBpZiAocnAgPiBlcHNpbG9uKSB7XG4gICAgICAgIHZhciBwMCA9IGFzaW4ocnAgLyByMCAqIHNpbihhcCkpLFxuICAgICAgICAgICAgcDEgPSBhc2luKHJwIC8gcjEgKiBzaW4oYXApKTtcbiAgICAgICAgaWYgKChkYTAgLT0gcDAgKiAyKSA+IGVwc2lsb24pIHAwICo9IChjdyA/IDEgOiAtMSksIGEwMCArPSBwMCwgYTEwIC09IHAwO1xuICAgICAgICBlbHNlIGRhMCA9IDAsIGEwMCA9IGExMCA9IChhMCArIGExKSAvIDI7XG4gICAgICAgIGlmICgoZGExIC09IHAxICogMikgPiBlcHNpbG9uKSBwMSAqPSAoY3cgPyAxIDogLTEpLCBhMDEgKz0gcDEsIGExMSAtPSBwMTtcbiAgICAgICAgZWxzZSBkYTEgPSAwLCBhMDEgPSBhMTEgPSAoYTAgKyBhMSkgLyAyO1xuICAgICAgfVxuXG4gICAgICB2YXIgeDAxID0gcjEgKiBjb3MoYTAxKSxcbiAgICAgICAgICB5MDEgPSByMSAqIHNpbihhMDEpLFxuICAgICAgICAgIHgxMCA9IHIwICogY29zKGExMCksXG4gICAgICAgICAgeTEwID0gcjAgKiBzaW4oYTEwKTtcblxuICAgICAgLy8gQXBwbHkgcm91bmRlZCBjb3JuZXJzP1xuICAgICAgaWYgKHJjID4gZXBzaWxvbikge1xuICAgICAgICB2YXIgeDExID0gcjEgKiBjb3MoYTExKSxcbiAgICAgICAgICAgIHkxMSA9IHIxICogc2luKGExMSksXG4gICAgICAgICAgICB4MDAgPSByMCAqIGNvcyhhMDApLFxuICAgICAgICAgICAgeTAwID0gcjAgKiBzaW4oYTAwKTtcblxuICAgICAgICAvLyBSZXN0cmljdCB0aGUgY29ybmVyIHJhZGl1cyBhY2NvcmRpbmcgdG8gdGhlIHNlY3RvciBhbmdsZS5cbiAgICAgICAgaWYgKGRhIDwgcGkpIHtcbiAgICAgICAgICB2YXIgb2MgPSBkYTAgPiBlcHNpbG9uID8gaW50ZXJzZWN0KHgwMSwgeTAxLCB4MDAsIHkwMCwgeDExLCB5MTEsIHgxMCwgeTEwKSA6IFt4MTAsIHkxMF0sXG4gICAgICAgICAgICAgIGF4ID0geDAxIC0gb2NbMF0sXG4gICAgICAgICAgICAgIGF5ID0geTAxIC0gb2NbMV0sXG4gICAgICAgICAgICAgIGJ4ID0geDExIC0gb2NbMF0sXG4gICAgICAgICAgICAgIGJ5ID0geTExIC0gb2NbMV0sXG4gICAgICAgICAgICAgIGtjID0gMSAvIHNpbihhY29zKChheCAqIGJ4ICsgYXkgKiBieSkgLyAoc3FydChheCAqIGF4ICsgYXkgKiBheSkgKiBzcXJ0KGJ4ICogYnggKyBieSAqIGJ5KSkpIC8gMiksXG4gICAgICAgICAgICAgIGxjID0gc3FydChvY1swXSAqIG9jWzBdICsgb2NbMV0gKiBvY1sxXSk7XG4gICAgICAgICAgcmMwID0gbWluKHJjLCAocjAgLSBsYykgLyAoa2MgLSAxKSk7XG4gICAgICAgICAgcmMxID0gbWluKHJjLCAocjEgLSBsYykgLyAoa2MgKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSXMgdGhlIHNlY3RvciBjb2xsYXBzZWQgdG8gYSBsaW5lP1xuICAgICAgaWYgKCEoZGExID4gZXBzaWxvbikpIGNvbnRleHQubW92ZVRvKHgwMSwgeTAxKTtcblxuICAgICAgLy8gRG9lcyB0aGUgc2VjdG9y4oCZcyBvdXRlciByaW5nIGhhdmUgcm91bmRlZCBjb3JuZXJzP1xuICAgICAgZWxzZSBpZiAocmMxID4gZXBzaWxvbikge1xuICAgICAgICB0MCA9IGNvcm5lclRhbmdlbnRzKHgwMCwgeTAwLCB4MDEsIHkwMSwgcjEsIHJjMSwgY3cpO1xuICAgICAgICB0MSA9IGNvcm5lclRhbmdlbnRzKHgxMSwgeTExLCB4MTAsIHkxMCwgcjEsIHJjMSwgY3cpO1xuXG4gICAgICAgIGNvbnRleHQubW92ZVRvKHQwLmN4ICsgdDAueDAxLCB0MC5jeSArIHQwLnkwMSk7XG5cbiAgICAgICAgLy8gSGF2ZSB0aGUgY29ybmVycyBtZXJnZWQ/XG4gICAgICAgIGlmIChyYzEgPCByYykgY29udGV4dC5hcmModDAuY3gsIHQwLmN5LCByYzEsIGF0YW4yKHQwLnkwMSwgdDAueDAxKSwgYXRhbjIodDEueTAxLCB0MS54MDEpLCAhY3cpO1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgZHJhdyB0aGUgdHdvIGNvcm5lcnMgYW5kIHRoZSByaW5nLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmFyYyh0MC5jeCwgdDAuY3ksIHJjMSwgYXRhbjIodDAueTAxLCB0MC54MDEpLCBhdGFuMih0MC55MTEsIHQwLngxMSksICFjdyk7XG4gICAgICAgICAgY29udGV4dC5hcmMoMCwgMCwgcjEsIGF0YW4yKHQwLmN5ICsgdDAueTExLCB0MC5jeCArIHQwLngxMSksIGF0YW4yKHQxLmN5ICsgdDEueTExLCB0MS5jeCArIHQxLngxMSksICFjdyk7XG4gICAgICAgICAgY29udGV4dC5hcmModDEuY3gsIHQxLmN5LCByYzEsIGF0YW4yKHQxLnkxMSwgdDEueDExKSwgYXRhbjIodDEueTAxLCB0MS54MDEpLCAhY3cpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9yIGlzIHRoZSBvdXRlciByaW5nIGp1c3QgYSBjaXJjdWxhciBhcmM/XG4gICAgICBlbHNlIGNvbnRleHQubW92ZVRvKHgwMSwgeTAxKSwgY29udGV4dC5hcmMoMCwgMCwgcjEsIGEwMSwgYTExLCAhY3cpO1xuXG4gICAgICAvLyBJcyB0aGVyZSBubyBpbm5lciByaW5nLCBhbmQgaXTigJlzIGEgY2lyY3VsYXIgc2VjdG9yP1xuICAgICAgLy8gT3IgcGVyaGFwcyBpdOKAmXMgYW4gYW5udWxhciBzZWN0b3IgY29sbGFwc2VkIGR1ZSB0byBwYWRkaW5nP1xuICAgICAgaWYgKCEocjAgPiBlcHNpbG9uKSB8fCAhKGRhMCA+IGVwc2lsb24pKSBjb250ZXh0LmxpbmVUbyh4MTAsIHkxMCk7XG5cbiAgICAgIC8vIERvZXMgdGhlIHNlY3RvcuKAmXMgaW5uZXIgcmluZyAob3IgcG9pbnQpIGhhdmUgcm91bmRlZCBjb3JuZXJzP1xuICAgICAgZWxzZSBpZiAocmMwID4gZXBzaWxvbikge1xuICAgICAgICB0MCA9IGNvcm5lclRhbmdlbnRzKHgxMCwgeTEwLCB4MTEsIHkxMSwgcjAsIC1yYzAsIGN3KTtcbiAgICAgICAgdDEgPSBjb3JuZXJUYW5nZW50cyh4MDEsIHkwMSwgeDAwLCB5MDAsIHIwLCAtcmMwLCBjdyk7XG5cbiAgICAgICAgY29udGV4dC5saW5lVG8odDAuY3ggKyB0MC54MDEsIHQwLmN5ICsgdDAueTAxKTtcblxuICAgICAgICAvLyBIYXZlIHRoZSBjb3JuZXJzIG1lcmdlZD9cbiAgICAgICAgaWYgKHJjMCA8IHJjKSBjb250ZXh0LmFyYyh0MC5jeCwgdDAuY3ksIHJjMCwgYXRhbjIodDAueTAxLCB0MC54MDEpLCBhdGFuMih0MS55MDEsIHQxLngwMSksICFjdyk7XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBkcmF3IHRoZSB0d28gY29ybmVycyBhbmQgdGhlIHJpbmcuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuYXJjKHQwLmN4LCB0MC5jeSwgcmMwLCBhdGFuMih0MC55MDEsIHQwLngwMSksIGF0YW4yKHQwLnkxMSwgdDAueDExKSwgIWN3KTtcbiAgICAgICAgICBjb250ZXh0LmFyYygwLCAwLCByMCwgYXRhbjIodDAuY3kgKyB0MC55MTEsIHQwLmN4ICsgdDAueDExKSwgYXRhbjIodDEuY3kgKyB0MS55MTEsIHQxLmN4ICsgdDEueDExKSwgY3cpO1xuICAgICAgICAgIGNvbnRleHQuYXJjKHQxLmN4LCB0MS5jeSwgcmMwLCBhdGFuMih0MS55MTEsIHQxLngxMSksIGF0YW4yKHQxLnkwMSwgdDEueDAxKSwgIWN3KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPciBpcyB0aGUgaW5uZXIgcmluZyBqdXN0IGEgY2lyY3VsYXIgYXJjP1xuICAgICAgZWxzZSBjb250ZXh0LmFyYygwLCAwLCByMCwgYTEwLCBhMDAsIGN3KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuXG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIGNvbnRleHQgPSBudWxsLCBidWZmZXIgKyBcIlwiIHx8IG51bGw7XG4gIH1cblxuICBhcmMuY2VudHJvaWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgciA9ICgraW5uZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSArICtvdXRlclJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSAvIDIsXG4gICAgICAgIGEgPSAoK3N0YXJ0QW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSArICtlbmRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSAvIDIgLSBwaSAvIDI7XG4gICAgcmV0dXJuIFtjb3MoYSkgKiByLCBzaW4oYSkgKiByXTtcbiAgfTtcblxuICBhcmMuaW5uZXJSYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW5uZXJSYWRpdXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IGlubmVyUmFkaXVzO1xuICB9O1xuXG4gIGFyYy5vdXRlclJhZGl1cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChvdXRlclJhZGl1cyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogb3V0ZXJSYWRpdXM7XG4gIH07XG5cbiAgYXJjLmNvcm5lclJhZGl1cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjb3JuZXJSYWRpdXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IGNvcm5lclJhZGl1cztcbiAgfTtcblxuICBhcmMucGFkUmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZFJhZGl1cyA9IF8gPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IHBhZFJhZGl1cztcbiAgfTtcblxuICBhcmMuc3RhcnRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdGFydEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBzdGFydEFuZ2xlO1xuICB9O1xuXG4gIGFyYy5lbmRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChlbmRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogZW5kQW5nbGU7XG4gIH07XG5cbiAgYXJjLnBhZEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBwYWRBbmdsZTtcbiAgfTtcblxuICBhcmMuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICgoY29udGV4dCA9IF8gPT0gbnVsbCA/IG51bGwgOiBfKSwgYXJjKSA6IGNvbnRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIGFyYztcbn1cbiIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IGN1cnZlTGluZWFyIGZyb20gXCIuL2N1cnZlL2xpbmVhclwiO1xuaW1wb3J0IGxpbmUgZnJvbSBcIi4vbGluZVwiO1xuaW1wb3J0IHt4IGFzIHBvaW50WCwgeSBhcyBwb2ludFl9IGZyb20gXCIuL3BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgeDAgPSBwb2ludFgsXG4gICAgICB4MSA9IG51bGwsXG4gICAgICB5MCA9IGNvbnN0YW50KDApLFxuICAgICAgeTEgPSBwb2ludFksXG4gICAgICBkZWZpbmVkID0gY29uc3RhbnQodHJ1ZSksXG4gICAgICBjb250ZXh0ID0gbnVsbCxcbiAgICAgIGN1cnZlID0gY3VydmVMaW5lYXIsXG4gICAgICBvdXRwdXQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGFyZWEoZGF0YSkge1xuICAgIHZhciBpLFxuICAgICAgICBqLFxuICAgICAgICBrLFxuICAgICAgICBuID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGQsXG4gICAgICAgIGRlZmluZWQwID0gZmFsc2UsXG4gICAgICAgIGJ1ZmZlcixcbiAgICAgICAgeDB6ID0gbmV3IEFycmF5KG4pLFxuICAgICAgICB5MHogPSBuZXcgQXJyYXkobik7XG5cbiAgICBpZiAoY29udGV4dCA9PSBudWxsKSBvdXRwdXQgPSBjdXJ2ZShidWZmZXIgPSBwYXRoKCkpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8PSBuOyArK2kpIHtcbiAgICAgIGlmICghKGkgPCBuICYmIGRlZmluZWQoZCA9IGRhdGFbaV0sIGksIGRhdGEpKSA9PT0gZGVmaW5lZDApIHtcbiAgICAgICAgaWYgKGRlZmluZWQwID0gIWRlZmluZWQwKSB7XG4gICAgICAgICAgaiA9IGk7XG4gICAgICAgICAgb3V0cHV0LmFyZWFTdGFydCgpO1xuICAgICAgICAgIG91dHB1dC5saW5lU3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdXRwdXQubGluZUVuZCgpO1xuICAgICAgICAgIG91dHB1dC5saW5lU3RhcnQoKTtcbiAgICAgICAgICBmb3IgKGsgPSBpIC0gMTsgayA+PSBqOyAtLWspIHtcbiAgICAgICAgICAgIG91dHB1dC5wb2ludCh4MHpba10sIHkweltrXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG91dHB1dC5saW5lRW5kKCk7XG4gICAgICAgICAgb3V0cHV0LmFyZWFFbmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRlZmluZWQwKSB7XG4gICAgICAgIHgweltpXSA9ICt4MChkLCBpLCBkYXRhKSwgeTB6W2ldID0gK3kwKGQsIGksIGRhdGEpO1xuICAgICAgICBvdXRwdXQucG9pbnQoeDEgPyAreDEoZCwgaSwgZGF0YSkgOiB4MHpbaV0sIHkxID8gK3kxKGQsIGksIGRhdGEpIDogeTB6W2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYnVmZmVyKSByZXR1cm4gb3V0cHV0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJlYWxpbmUoKSB7XG4gICAgcmV0dXJuIGxpbmUoKS5kZWZpbmVkKGRlZmluZWQpLmN1cnZlKGN1cnZlKS5jb250ZXh0KGNvbnRleHQpO1xuICB9XG5cbiAgYXJlYS54ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHgwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHgxID0gbnVsbCwgYXJlYSkgOiB4MDtcbiAgfTtcblxuICBhcmVhLngwID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHgwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyZWEpIDogeDA7XG4gIH07XG5cbiAgYXJlYS54MSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MSA9IF8gPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJlYSkgOiB4MTtcbiAgfTtcblxuICBhcmVhLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeTAgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgeTEgPSBudWxsLCBhcmVhKSA6IHkwO1xuICB9O1xuXG4gIGFyZWEueTAgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeTAgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJlYSkgOiB5MDtcbiAgfTtcblxuICBhcmVhLnkxID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkxID0gXyA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmVhKSA6IHkxO1xuICB9O1xuXG4gIGFyZWEubGluZVgwID1cbiAgYXJlYS5saW5lWTAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJlYWxpbmUoKS54KHgwKS55KHkwKTtcbiAgfTtcblxuICBhcmVhLmxpbmVZMSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmVhbGluZSgpLngoeDApLnkoeTEpO1xuICB9O1xuXG4gIGFyZWEubGluZVgxID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFyZWFsaW5lKCkueCh4MSkueSh5MCk7XG4gIH07XG5cbiAgYXJlYS5kZWZpbmVkID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRlZmluZWQgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCEhXyksIGFyZWEpIDogZGVmaW5lZDtcbiAgfTtcblxuICBhcmVhLmN1cnZlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGN1cnZlID0gXywgY29udGV4dCAhPSBudWxsICYmIChvdXRwdXQgPSBjdXJ2ZShjb250ZXh0KSksIGFyZWEpIDogY3VydmU7XG4gIH07XG5cbiAgYXJlYS5jb250ZXh0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKF8gPT0gbnVsbCA/IGNvbnRleHQgPSBvdXRwdXQgPSBudWxsIDogb3V0cHV0ID0gY3VydmUoY29udGV4dCA9IF8pLCBhcmVhKSA6IGNvbnRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIGFyZWE7XG59XG4iLCJpbXBvcnQgY3VydmVSYWRpYWwsIHtjdXJ2ZVJhZGlhbExpbmVhcn0gZnJvbSBcIi4vY3VydmUvcmFkaWFsXCI7XG5pbXBvcnQgYXJlYSBmcm9tIFwiLi9hcmVhXCI7XG5pbXBvcnQge2xpbmVSYWRpYWx9IGZyb20gXCIuL2xpbmVSYWRpYWxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGEgPSBhcmVhKCkuY3VydmUoY3VydmVSYWRpYWxMaW5lYXIpLFxuICAgICAgYyA9IGEuY3VydmUsXG4gICAgICB4MCA9IGEubGluZVgwLFxuICAgICAgeDEgPSBhLmxpbmVYMSxcbiAgICAgIHkwID0gYS5saW5lWTAsXG4gICAgICB5MSA9IGEubGluZVkxO1xuXG4gIGEuYW5nbGUgPSBhLngsIGRlbGV0ZSBhLng7XG4gIGEuc3RhcnRBbmdsZSA9IGEueDAsIGRlbGV0ZSBhLngwO1xuICBhLmVuZEFuZ2xlID0gYS54MSwgZGVsZXRlIGEueDE7XG4gIGEucmFkaXVzID0gYS55LCBkZWxldGUgYS55O1xuICBhLmlubmVyUmFkaXVzID0gYS55MCwgZGVsZXRlIGEueTA7XG4gIGEub3V0ZXJSYWRpdXMgPSBhLnkxLCBkZWxldGUgYS55MTtcbiAgYS5saW5lU3RhcnRBbmdsZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbGluZVJhZGlhbCh4MCgpKTsgfSwgZGVsZXRlIGEubGluZVgwO1xuICBhLmxpbmVFbmRBbmdsZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbGluZVJhZGlhbCh4MSgpKTsgfSwgZGVsZXRlIGEubGluZVgxO1xuICBhLmxpbmVJbm5lclJhZGl1cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbGluZVJhZGlhbCh5MCgpKTsgfSwgZGVsZXRlIGEubGluZVkwO1xuICBhLmxpbmVPdXRlclJhZGl1cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbGluZVJhZGlhbCh5MSgpKTsgfSwgZGVsZXRlIGEubGluZVkxO1xuXG4gIGEuY3VydmUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBjKGN1cnZlUmFkaWFsKF8pKSA6IGMoKS5fY3VydmU7XG4gIH07XG5cbiAgcmV0dXJuIGE7XG59XG4iLCJleHBvcnQgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24gY29uc3RhbnQoKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcG9pbnQodGhhdCwgeCwgeSkge1xuICB0aGF0Ll9jb250ZXh0LmJlemllckN1cnZlVG8oXG4gICAgKDIgKiB0aGF0Ll94MCArIHRoYXQuX3gxKSAvIDMsXG4gICAgKDIgKiB0aGF0Ll95MCArIHRoYXQuX3kxKSAvIDMsXG4gICAgKHRoYXQuX3gwICsgMiAqIHRoYXQuX3gxKSAvIDMsXG4gICAgKHRoYXQuX3kwICsgMiAqIHRoYXQuX3kxKSAvIDMsXG4gICAgKHRoYXQuX3gwICsgNCAqIHRoYXQuX3gxICsgeCkgLyA2LFxuICAgICh0aGF0Ll95MCArIDQgKiB0aGF0Ll95MSArIHkpIC8gNlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQmFzaXMoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuQmFzaXMucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDM6IHBvaW50KHRoaXMsIHRoaXMuX3gxLCB0aGlzLl95MSk7IC8vIHByb2NlZWRcbiAgICAgIGNhc2UgMjogdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDEsIHRoaXMuX3kxKTsgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAxKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl9jb250ZXh0LmxpbmVUbygoNSAqIHRoaXMuX3gwICsgdGhpcy5feDEpIC8gNiwgKDUgKiB0aGlzLl95MCArIHRoaXMuX3kxKSAvIDYpOyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBCYXNpcyhjb250ZXh0KTtcbn1cbiIsImltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5pbXBvcnQge3BvaW50fSBmcm9tIFwiLi9iYXNpc1wiO1xuXG5mdW5jdGlvbiBCYXNpc0Nsb3NlZChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5CYXNpc0Nsb3NlZC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogbm9vcCxcbiAgYXJlYUVuZDogbm9vcCxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPSB0aGlzLl94MyA9IHRoaXMuX3g0ID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSB0aGlzLl95MyA9IHRoaXMuX3k0ID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubW92ZVRvKCh0aGlzLl94MiArIDIgKiB0aGlzLl94MykgLyAzLCAodGhpcy5feTIgKyAyICogdGhpcy5feTMpIC8gMyk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKCh0aGlzLl94MyArIDIgKiB0aGlzLl94MikgLyAzLCAodGhpcy5feTMgKyAyICogdGhpcy5feTIpIC8gMyk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDIsIHRoaXMuX3kyKTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3g0LCB0aGlzLl95NCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5feDIgPSB4LCB0aGlzLl95MiA9IHk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IHRoaXMuX3gzID0geCwgdGhpcy5feTMgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl94NCA9IHgsIHRoaXMuX3k0ID0geTsgdGhpcy5fY29udGV4dC5tb3ZlVG8oKHRoaXMuX3gwICsgNCAqIHRoaXMuX3gxICsgeCkgLyA2LCAodGhpcy5feTAgKyA0ICogdGhpcy5feTEgKyB5KSAvIDYpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IEJhc2lzQ2xvc2VkKGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vYmFzaXNcIjtcblxuZnVuY3Rpb24gQmFzaXNPcGVuKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbkJhc2lzT3Blbi5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAzKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHZhciB4MCA9ICh0aGlzLl94MCArIDQgKiB0aGlzLl94MSArIHgpIC8gNiwgeTAgPSAodGhpcy5feTAgKyA0ICogdGhpcy5feTEgKyB5KSAvIDY7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4MCwgeTApIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeDAsIHkwKTsgYnJlYWs7XG4gICAgICBjYXNlIDM6IHRoaXMuX3BvaW50ID0gNDsgLy8gcHJvY2VlZFxuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgQmFzaXNPcGVuKGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IHtCYXNpc30gZnJvbSBcIi4vYmFzaXNcIjtcblxuZnVuY3Rpb24gQnVuZGxlKGNvbnRleHQsIGJldGEpIHtcbiAgdGhpcy5fYmFzaXMgPSBuZXcgQmFzaXMoY29udGV4dCk7XG4gIHRoaXMuX2JldGEgPSBiZXRhO1xufVxuXG5CdW5kbGUucHJvdG90eXBlID0ge1xuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ggPSBbXTtcbiAgICB0aGlzLl95ID0gW107XG4gICAgdGhpcy5fYmFzaXMubGluZVN0YXJ0KCk7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4ID0gdGhpcy5feCxcbiAgICAgICAgeSA9IHRoaXMuX3ksXG4gICAgICAgIGogPSB4Lmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoaiA+IDApIHtcbiAgICAgIHZhciB4MCA9IHhbMF0sXG4gICAgICAgICAgeTAgPSB5WzBdLFxuICAgICAgICAgIGR4ID0geFtqXSAtIHgwLFxuICAgICAgICAgIGR5ID0geVtqXSAtIHkwLFxuICAgICAgICAgIGkgPSAtMSxcbiAgICAgICAgICB0O1xuXG4gICAgICB3aGlsZSAoKytpIDw9IGopIHtcbiAgICAgICAgdCA9IGkgLyBqO1xuICAgICAgICB0aGlzLl9iYXNpcy5wb2ludChcbiAgICAgICAgICB0aGlzLl9iZXRhICogeFtpXSArICgxIC0gdGhpcy5fYmV0YSkgKiAoeDAgKyB0ICogZHgpLFxuICAgICAgICAgIHRoaXMuX2JldGEgKiB5W2ldICsgKDEgLSB0aGlzLl9iZXRhKSAqICh5MCArIHQgKiBkeSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl94ID0gdGhpcy5feSA9IG51bGw7XG4gICAgdGhpcy5fYmFzaXMubGluZUVuZCgpO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuX3gucHVzaCgreCk7XG4gICAgdGhpcy5feS5wdXNoKCt5KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbShiZXRhKSB7XG5cbiAgZnVuY3Rpb24gYnVuZGxlKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYmV0YSA9PT0gMSA/IG5ldyBCYXNpcyhjb250ZXh0KSA6IG5ldyBCdW5kbGUoY29udGV4dCwgYmV0YSk7XG4gIH1cblxuICBidW5kbGUuYmV0YSA9IGZ1bmN0aW9uKGJldGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCtiZXRhKTtcbiAgfTtcblxuICByZXR1cm4gYnVuZGxlO1xufSkoMC44NSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gcG9pbnQodGhhdCwgeCwgeSkge1xuICB0aGF0Ll9jb250ZXh0LmJlemllckN1cnZlVG8oXG4gICAgdGhhdC5feDEgKyB0aGF0Ll9rICogKHRoYXQuX3gyIC0gdGhhdC5feDApLFxuICAgIHRoYXQuX3kxICsgdGhhdC5fayAqICh0aGF0Ll95MiAtIHRoYXQuX3kwKSxcbiAgICB0aGF0Ll94MiArIHRoYXQuX2sgKiAodGhhdC5feDEgLSB4KSxcbiAgICB0aGF0Ll95MiArIHRoYXQuX2sgKiAodGhhdC5feTEgLSB5KSxcbiAgICB0aGF0Ll94MixcbiAgICB0aGF0Ll95MlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZGluYWwoY29udGV4dCwgdGVuc2lvbikge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fayA9ICgxIC0gdGVuc2lvbikgLyA2O1xufVxuXG5DYXJkaW5hbC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiBwb2ludCh0aGlzLCB0aGlzLl94MSwgdGhpcy5feTEpOyBicmVhaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IHRoaXMuX3gxID0geCwgdGhpcy5feTEgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20odGVuc2lvbikge1xuXG4gIGZ1bmN0aW9uIGNhcmRpbmFsKGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IENhcmRpbmFsKGNvbnRleHQsIHRlbnNpb24pO1xuICB9XG5cbiAgY2FyZGluYWwudGVuc2lvbiA9IGZ1bmN0aW9uKHRlbnNpb24pIHtcbiAgICByZXR1cm4gY3VzdG9tKCt0ZW5zaW9uKTtcbiAgfTtcblxuICByZXR1cm4gY2FyZGluYWw7XG59KSgwKTtcbiIsImltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5pbXBvcnQge3BvaW50fSBmcm9tIFwiLi9jYXJkaW5hbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZGluYWxDbG9zZWQoY29udGV4dCwgdGVuc2lvbikge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fayA9ICgxIC0gdGVuc2lvbikgLyA2O1xufVxuXG5DYXJkaW5hbENsb3NlZC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogbm9vcCxcbiAgYXJlYUVuZDogbm9vcCxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPSB0aGlzLl94MyA9IHRoaXMuX3g0ID0gdGhpcy5feDUgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IHRoaXMuX3kzID0gdGhpcy5feTQgPSB0aGlzLl95NSA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMToge1xuICAgICAgICB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDQsIHRoaXMuX3k0KTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94NSwgdGhpcy5feTUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX3gzID0geCwgdGhpcy5feTMgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94NCA9IHgsIHRoaXMuX3k0ID0geSk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX3g1ID0geCwgdGhpcy5feTUgPSB5OyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbSh0ZW5zaW9uKSB7XG5cbiAgZnVuY3Rpb24gY2FyZGluYWwoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgQ2FyZGluYWxDbG9zZWQoY29udGV4dCwgdGVuc2lvbik7XG4gIH1cblxuICBjYXJkaW5hbC50ZW5zaW9uID0gZnVuY3Rpb24odGVuc2lvbikge1xuICAgIHJldHVybiBjdXN0b20oK3RlbnNpb24pO1xuICB9O1xuXG4gIHJldHVybiBjYXJkaW5hbDtcbn0pKDApO1xuIiwiaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vY2FyZGluYWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRpbmFsT3Blbihjb250ZXh0LCB0ZW5zaW9uKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9rID0gKDEgLSB0ZW5zaW9uKSAvIDY7XG59XG5cbkNhcmRpbmFsT3Blbi5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMykpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDIsIHRoaXMuX3kyKSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLl9wb2ludCA9IDQ7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbSh0ZW5zaW9uKSB7XG5cbiAgZnVuY3Rpb24gY2FyZGluYWwoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgQ2FyZGluYWxPcGVuKGNvbnRleHQsIHRlbnNpb24pO1xuICB9XG5cbiAgY2FyZGluYWwudGVuc2lvbiA9IGZ1bmN0aW9uKHRlbnNpb24pIHtcbiAgICByZXR1cm4gY3VzdG9tKCt0ZW5zaW9uKTtcbiAgfTtcblxuICByZXR1cm4gY2FyZGluYWw7XG59KSgwKTtcbiIsImltcG9ydCB7ZXBzaWxvbn0gZnJvbSBcIi4uL21hdGhcIjtcbmltcG9ydCB7Q2FyZGluYWx9IGZyb20gXCIuL2NhcmRpbmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb2ludCh0aGF0LCB4LCB5KSB7XG4gIHZhciB4MSA9IHRoYXQuX3gxLFxuICAgICAgeTEgPSB0aGF0Ll95MSxcbiAgICAgIHgyID0gdGhhdC5feDIsXG4gICAgICB5MiA9IHRoYXQuX3kyO1xuXG4gIGlmICh0aGF0Ll9sMDFfYSA+IGVwc2lsb24pIHtcbiAgICB2YXIgYSA9IDIgKiB0aGF0Ll9sMDFfMmEgKyAzICogdGhhdC5fbDAxX2EgKiB0aGF0Ll9sMTJfYSArIHRoYXQuX2wxMl8yYSxcbiAgICAgICAgbiA9IDMgKiB0aGF0Ll9sMDFfYSAqICh0aGF0Ll9sMDFfYSArIHRoYXQuX2wxMl9hKTtcbiAgICB4MSA9ICh4MSAqIGEgLSB0aGF0Ll94MCAqIHRoYXQuX2wxMl8yYSArIHRoYXQuX3gyICogdGhhdC5fbDAxXzJhKSAvIG47XG4gICAgeTEgPSAoeTEgKiBhIC0gdGhhdC5feTAgKiB0aGF0Ll9sMTJfMmEgKyB0aGF0Ll95MiAqIHRoYXQuX2wwMV8yYSkgLyBuO1xuICB9XG5cbiAgaWYgKHRoYXQuX2wyM19hID4gZXBzaWxvbikge1xuICAgIHZhciBiID0gMiAqIHRoYXQuX2wyM18yYSArIDMgKiB0aGF0Ll9sMjNfYSAqIHRoYXQuX2wxMl9hICsgdGhhdC5fbDEyXzJhLFxuICAgICAgICBtID0gMyAqIHRoYXQuX2wyM19hICogKHRoYXQuX2wyM19hICsgdGhhdC5fbDEyX2EpO1xuICAgIHgyID0gKHgyICogYiArIHRoYXQuX3gxICogdGhhdC5fbDIzXzJhIC0geCAqIHRoYXQuX2wxMl8yYSkgLyBtO1xuICAgIHkyID0gKHkyICogYiArIHRoYXQuX3kxICogdGhhdC5fbDIzXzJhIC0geSAqIHRoYXQuX2wxMl8yYSkgLyBtO1xuICB9XG5cbiAgdGhhdC5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKHgxLCB5MSwgeDIsIHkyLCB0aGF0Ll94MiwgdGhhdC5feTIpO1xufVxuXG5mdW5jdGlvbiBDYXRtdWxsUm9tKGNvbnRleHQsIGFscGhhKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9hbHBoYSA9IGFscGhhO1xufVxuXG5DYXRtdWxsUm9tLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IE5hTjtcbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hID0gdGhpcy5fbDIzX2EgPVxuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYSA9XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLnBvaW50KHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuXG4gICAgaWYgKHRoaXMuX3BvaW50KSB7XG4gICAgICB2YXIgeDIzID0gdGhpcy5feDIgLSB4LFxuICAgICAgICAgIHkyMyA9IHRoaXMuX3kyIC0geTtcbiAgICAgIHRoaXMuX2wyM19hID0gTWF0aC5zcXJ0KHRoaXMuX2wyM18yYSA9IE1hdGgucG93KHgyMyAqIHgyMyArIHkyMyAqIHkyMywgdGhpcy5fYWxwaGEpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hLCB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hO1xuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSwgdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhO1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20oYWxwaGEpIHtcblxuICBmdW5jdGlvbiBjYXRtdWxsUm9tKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYWxwaGEgPyBuZXcgQ2F0bXVsbFJvbShjb250ZXh0LCBhbHBoYSkgOiBuZXcgQ2FyZGluYWwoY29udGV4dCwgMCk7XG4gIH1cblxuICBjYXRtdWxsUm9tLmFscGhhID0gZnVuY3Rpb24oYWxwaGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCthbHBoYSk7XG4gIH07XG5cbiAgcmV0dXJuIGNhdG11bGxSb207XG59KSgwLjUpO1xuIiwiaW1wb3J0IHtDYXJkaW5hbENsb3NlZH0gZnJvbSBcIi4vY2FyZGluYWxDbG9zZWRcIjtcbmltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5pbXBvcnQge3BvaW50fSBmcm9tIFwiLi9jYXRtdWxsUm9tXCI7XG5cbmZ1bmN0aW9uIENhdG11bGxSb21DbG9zZWQoY29udGV4dCwgYWxwaGEpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX2FscGhhID0gYWxwaGE7XG59XG5cbkNhdG11bGxSb21DbG9zZWQucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IG5vb3AsXG4gIGFyZWFFbmQ6IG5vb3AsXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID0gdGhpcy5feDMgPSB0aGlzLl94NCA9IHRoaXMuX3g1ID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSB0aGlzLl95MyA9IHRoaXMuX3k0ID0gdGhpcy5feTUgPSBOYU47XG4gICAgdGhpcy5fbDAxX2EgPSB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hID1cbiAgICB0aGlzLl9sMDFfMmEgPSB0aGlzLl9sMTJfMmEgPSB0aGlzLl9sMjNfMmEgPVxuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94NCwgdGhpcy5feTQpO1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3g1LCB0aGlzLl95NSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcblxuICAgIGlmICh0aGlzLl9wb2ludCkge1xuICAgICAgdmFyIHgyMyA9IHRoaXMuX3gyIC0geCxcbiAgICAgICAgICB5MjMgPSB0aGlzLl95MiAtIHk7XG4gICAgICB0aGlzLl9sMjNfYSA9IE1hdGguc3FydCh0aGlzLl9sMjNfMmEgPSBNYXRoLnBvdyh4MjMgKiB4MjMgKyB5MjMgKiB5MjMsIHRoaXMuX2FscGhhKSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX3gzID0geCwgdGhpcy5feTMgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94NCA9IHgsIHRoaXMuX3k0ID0geSk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX3g1ID0geCwgdGhpcy5feTUgPSB5OyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hLCB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hO1xuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSwgdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhO1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20oYWxwaGEpIHtcblxuICBmdW5jdGlvbiBjYXRtdWxsUm9tKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYWxwaGEgPyBuZXcgQ2F0bXVsbFJvbUNsb3NlZChjb250ZXh0LCBhbHBoYSkgOiBuZXcgQ2FyZGluYWxDbG9zZWQoY29udGV4dCwgMCk7XG4gIH1cblxuICBjYXRtdWxsUm9tLmFscGhhID0gZnVuY3Rpb24oYWxwaGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCthbHBoYSk7XG4gIH07XG5cbiAgcmV0dXJuIGNhdG11bGxSb207XG59KSgwLjUpO1xuIiwiaW1wb3J0IHtDYXJkaW5hbE9wZW59IGZyb20gXCIuL2NhcmRpbmFsT3BlblwiO1xuaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vY2F0bXVsbFJvbVwiO1xuXG5mdW5jdGlvbiBDYXRtdWxsUm9tT3Blbihjb250ZXh0LCBhbHBoYSkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fYWxwaGEgPSBhbHBoYTtcbn1cblxuQ2F0bXVsbFJvbU9wZW4ucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPSB0aGlzLl94MiA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IHRoaXMuX3kyID0gTmFOO1xuICAgIHRoaXMuX2wwMV9hID0gdGhpcy5fbDEyX2EgPSB0aGlzLl9sMjNfYSA9XG4gICAgdGhpcy5fbDAxXzJhID0gdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhID1cbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAzKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG5cbiAgICBpZiAodGhpcy5fcG9pbnQpIHtcbiAgICAgIHZhciB4MjMgPSB0aGlzLl94MiAtIHgsXG4gICAgICAgICAgeTIzID0gdGhpcy5feTIgLSB5O1xuICAgICAgdGhpcy5fbDIzX2EgPSBNYXRoLnNxcnQodGhpcy5fbDIzXzJhID0gTWF0aC5wb3coeDIzICogeDIzICsgeTIzICogeTIzLCB0aGlzLl9hbHBoYSkpO1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDIsIHRoaXMuX3kyKSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLl9wb2ludCA9IDQ7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hLCB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hO1xuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSwgdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhO1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20oYWxwaGEpIHtcblxuICBmdW5jdGlvbiBjYXRtdWxsUm9tKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYWxwaGEgPyBuZXcgQ2F0bXVsbFJvbU9wZW4oY29udGV4dCwgYWxwaGEpIDogbmV3IENhcmRpbmFsT3Blbihjb250ZXh0LCAwKTtcbiAgfVxuXG4gIGNhdG11bGxSb20uYWxwaGEgPSBmdW5jdGlvbihhbHBoYSkge1xuICAgIHJldHVybiBjdXN0b20oK2FscGhhKTtcbiAgfTtcblxuICByZXR1cm4gY2F0bXVsbFJvbTtcbn0pKDAuNSk7XG4iLCJmdW5jdGlvbiBMaW5lYXIoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuTGluZWFyLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAxKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgTGluZWFyKGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IG5vb3AgZnJvbSBcIi4uL25vb3BcIjtcblxuZnVuY3Rpb24gTGluZWFyQ2xvc2VkKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbkxpbmVhckNsb3NlZC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogbm9vcCxcbiAgYXJlYUVuZDogbm9vcCxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9wb2ludCkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBpZiAodGhpcy5fcG9pbnQpIHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpO1xuICAgIGVsc2UgdGhpcy5fcG9pbnQgPSAxLCB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IExpbmVhckNsb3NlZChjb250ZXh0KTtcbn1cbiIsImZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4geCA8IDAgPyAtMSA6IDE7XG59XG5cbi8vIENhbGN1bGF0ZSB0aGUgc2xvcGVzIG9mIHRoZSB0YW5nZW50cyAoSGVybWl0ZS10eXBlIGludGVycG9sYXRpb24pIGJhc2VkIG9uXG4vLyB0aGUgZm9sbG93aW5nIHBhcGVyOiBTdGVmZmVuLCBNLiAxOTkwLiBBIFNpbXBsZSBNZXRob2QgZm9yIE1vbm90b25pY1xuLy8gSW50ZXJwb2xhdGlvbiBpbiBPbmUgRGltZW5zaW9uLiBBc3Ryb25vbXkgYW5kIEFzdHJvcGh5c2ljcywgVm9sLiAyMzksIE5PLlxuLy8gTk9WKElJKSwgUC4gNDQzLCAxOTkwLlxuZnVuY3Rpb24gc2xvcGUzKHRoYXQsIHgyLCB5Mikge1xuICB2YXIgaDAgPSB0aGF0Ll94MSAtIHRoYXQuX3gwLFxuICAgICAgaDEgPSB4MiAtIHRoYXQuX3gxLFxuICAgICAgczAgPSAodGhhdC5feTEgLSB0aGF0Ll95MCkgLyAoaDAgfHwgaDEgPCAwICYmIC0wKSxcbiAgICAgIHMxID0gKHkyIC0gdGhhdC5feTEpIC8gKGgxIHx8IGgwIDwgMCAmJiAtMCksXG4gICAgICBwID0gKHMwICogaDEgKyBzMSAqIGgwKSAvIChoMCArIGgxKTtcbiAgcmV0dXJuIChzaWduKHMwKSArIHNpZ24oczEpKSAqIE1hdGgubWluKE1hdGguYWJzKHMwKSwgTWF0aC5hYnMoczEpLCAwLjUgKiBNYXRoLmFicyhwKSkgfHwgMDtcbn1cblxuLy8gQ2FsY3VsYXRlIGEgb25lLXNpZGVkIHNsb3BlLlxuZnVuY3Rpb24gc2xvcGUyKHRoYXQsIHQpIHtcbiAgdmFyIGggPSB0aGF0Ll94MSAtIHRoYXQuX3gwO1xuICByZXR1cm4gaCA/ICgzICogKHRoYXQuX3kxIC0gdGhhdC5feTApIC8gaCAtIHQpIC8gMiA6IHQ7XG59XG5cbi8vIEFjY29yZGluZyB0byBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DdWJpY19IZXJtaXRlX3NwbGluZSNSZXByZXNlbnRhdGlvbnNcbi8vIFwieW91IGNhbiBleHByZXNzIGN1YmljIEhlcm1pdGUgaW50ZXJwb2xhdGlvbiBpbiB0ZXJtcyBvZiBjdWJpYyBCw6l6aWVyIGN1cnZlc1xuLy8gd2l0aCByZXNwZWN0IHRvIHRoZSBmb3VyIHZhbHVlcyBwMCwgcDAgKyBtMCAvIDMsIHAxIC0gbTEgLyAzLCBwMVwiLlxuZnVuY3Rpb24gcG9pbnQodGhhdCwgdDAsIHQxKSB7XG4gIHZhciB4MCA9IHRoYXQuX3gwLFxuICAgICAgeTAgPSB0aGF0Ll95MCxcbiAgICAgIHgxID0gdGhhdC5feDEsXG4gICAgICB5MSA9IHRoYXQuX3kxLFxuICAgICAgZHggPSAoeDEgLSB4MCkgLyAzO1xuICB0aGF0Ll9jb250ZXh0LmJlemllckN1cnZlVG8oeDAgKyBkeCwgeTAgKyBkeCAqIHQwLCB4MSAtIGR4LCB5MSAtIGR4ICogdDEsIHgxLCB5MSk7XG59XG5cbmZ1bmN0aW9uIE1vbm90b25lWChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5Nb25vdG9uZVgucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPVxuICAgIHRoaXMuX3QwID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAyOiB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MSwgdGhpcy5feTEpOyBicmVhaztcbiAgICAgIGNhc2UgMzogcG9pbnQodGhpcywgdGhpcy5fdDAsIHNsb3BlMih0aGlzLCB0aGlzLl90MCkpOyBicmVhaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgdDEgPSBOYU47XG5cbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBpZiAoeCA9PT0gdGhpcy5feDEgJiYgeSA9PT0gdGhpcy5feTEpIHJldHVybjsgLy8gSWdub3JlIGNvaW5jaWRlbnQgcG9pbnRzLlxuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgcG9pbnQodGhpcywgc2xvcGUyKHRoaXMsIHQxID0gc2xvcGUzKHRoaXMsIHgsIHkpKSwgdDEpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHRoaXMuX3QwLCB0MSA9IHNsb3BlMyh0aGlzLCB4LCB5KSk7IGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHk7XG4gICAgdGhpcy5fdDAgPSB0MTtcbiAgfVxufVxuXG5mdW5jdGlvbiBNb25vdG9uZVkoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gbmV3IFJlZmxlY3RDb250ZXh0KGNvbnRleHQpO1xufVxuXG4oTW9ub3RvbmVZLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9ub3RvbmVYLnByb3RvdHlwZSkpLnBvaW50ID0gZnVuY3Rpb24oeCwgeSkge1xuICBNb25vdG9uZVgucHJvdG90eXBlLnBvaW50LmNhbGwodGhpcywgeSwgeCk7XG59O1xuXG5mdW5jdGlvbiBSZWZsZWN0Q29udGV4dChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5SZWZsZWN0Q29udGV4dC5wcm90b3R5cGUgPSB7XG4gIG1vdmVUbzogZnVuY3Rpb24oeCwgeSkgeyB0aGlzLl9jb250ZXh0Lm1vdmVUbyh5LCB4KTsgfSxcbiAgY2xvc2VQYXRoOiBmdW5jdGlvbigpIHsgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTsgfSxcbiAgbGluZVRvOiBmdW5jdGlvbih4LCB5KSB7IHRoaXMuX2NvbnRleHQubGluZVRvKHksIHgpOyB9LFxuICBiZXppZXJDdXJ2ZVRvOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MiwgeCwgeSkgeyB0aGlzLl9jb250ZXh0LmJlemllckN1cnZlVG8oeTEsIHgxLCB5MiwgeDIsIHksIHgpOyB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbW9ub3RvbmVYKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBNb25vdG9uZVgoY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb25vdG9uZVkoY29udGV4dCkge1xuICByZXR1cm4gbmV3IE1vbm90b25lWShjb250ZXh0KTtcbn1cbiIsImZ1bmN0aW9uIE5hdHVyYWwoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuTmF0dXJhbC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feCA9IFtdO1xuICAgIHRoaXMuX3kgPSBbXTtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHggPSB0aGlzLl94LFxuICAgICAgICB5ID0gdGhpcy5feSxcbiAgICAgICAgbiA9IHgubGVuZ3RoO1xuXG4gICAgaWYgKG4pIHtcbiAgICAgIHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4WzBdLCB5WzBdKSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHhbMF0sIHlbMF0pO1xuICAgICAgaWYgKG4gPT09IDIpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8oeFsxXSwgeVsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHggPSBjb250cm9sUG9pbnRzKHgpLFxuICAgICAgICAgICAgcHkgPSBjb250cm9sUG9pbnRzKHkpO1xuICAgICAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMTsgaTEgPCBuOyArK2kwLCArK2kxKSB7XG4gICAgICAgICAgdGhpcy5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKHB4WzBdW2kwXSwgcHlbMF1baTBdLCBweFsxXVtpMF0sIHB5WzFdW2kwXSwgeFtpMV0sIHlbaTFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIG4gPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgICB0aGlzLl94ID0gdGhpcy5feSA9IG51bGw7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5feC5wdXNoKCt4KTtcbiAgICB0aGlzLl95LnB1c2goK3kpO1xuICB9XG59O1xuXG4vLyBTZWUgaHR0cHM6Ly93d3cucGFydGljbGVpbmNlbGwuY29tLzIwMTIvYmV6aWVyLXNwbGluZXMvIGZvciBkZXJpdmF0aW9uLlxuZnVuY3Rpb24gY29udHJvbFBvaW50cyh4KSB7XG4gIHZhciBpLFxuICAgICAgbiA9IHgubGVuZ3RoIC0gMSxcbiAgICAgIG0sXG4gICAgICBhID0gbmV3IEFycmF5KG4pLFxuICAgICAgYiA9IG5ldyBBcnJheShuKSxcbiAgICAgIHIgPSBuZXcgQXJyYXkobik7XG4gIGFbMF0gPSAwLCBiWzBdID0gMiwgclswXSA9IHhbMF0gKyAyICogeFsxXTtcbiAgZm9yIChpID0gMTsgaSA8IG4gLSAxOyArK2kpIGFbaV0gPSAxLCBiW2ldID0gNCwgcltpXSA9IDQgKiB4W2ldICsgMiAqIHhbaSArIDFdO1xuICBhW24gLSAxXSA9IDIsIGJbbiAtIDFdID0gNywgcltuIC0gMV0gPSA4ICogeFtuIC0gMV0gKyB4W25dO1xuICBmb3IgKGkgPSAxOyBpIDwgbjsgKytpKSBtID0gYVtpXSAvIGJbaSAtIDFdLCBiW2ldIC09IG0sIHJbaV0gLT0gbSAqIHJbaSAtIDFdO1xuICBhW24gLSAxXSA9IHJbbiAtIDFdIC8gYltuIC0gMV07XG4gIGZvciAoaSA9IG4gLSAyOyBpID49IDA7IC0taSkgYVtpXSA9IChyW2ldIC0gYVtpICsgMV0pIC8gYltpXTtcbiAgYltuIC0gMV0gPSAoeFtuXSArIGFbbiAtIDFdKSAvIDI7XG4gIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgKytpKSBiW2ldID0gMiAqIHhbaSArIDFdIC0gYVtpICsgMV07XG4gIHJldHVybiBbYSwgYl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBOYXR1cmFsKGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IGN1cnZlTGluZWFyIGZyb20gXCIuL2xpbmVhclwiO1xuXG5leHBvcnQgdmFyIGN1cnZlUmFkaWFsTGluZWFyID0gY3VydmVSYWRpYWwoY3VydmVMaW5lYXIpO1xuXG5mdW5jdGlvbiBSYWRpYWwoY3VydmUpIHtcbiAgdGhpcy5fY3VydmUgPSBjdXJ2ZTtcbn1cblxuUmFkaWFsLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jdXJ2ZS5hcmVhU3RhcnQoKTtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY3VydmUuYXJlYUVuZCgpO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2N1cnZlLmxpbmVTdGFydCgpO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jdXJ2ZS5saW5lRW5kKCk7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbihhLCByKSB7XG4gICAgdGhpcy5fY3VydmUucG9pbnQociAqIE1hdGguc2luKGEpLCByICogLU1hdGguY29zKGEpKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VydmVSYWRpYWwoY3VydmUpIHtcblxuICBmdW5jdGlvbiByYWRpYWwoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUmFkaWFsKGN1cnZlKGNvbnRleHQpKTtcbiAgfVxuXG4gIHJhZGlhbC5fY3VydmUgPSBjdXJ2ZTtcblxuICByZXR1cm4gcmFkaWFsO1xufVxuIiwiZnVuY3Rpb24gU3RlcChjb250ZXh0LCB0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl90ID0gdDtcbn1cblxuU3RlcC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feCA9IHRoaXMuX3kgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoMCA8IHRoaXMuX3QgJiYgdGhpcy5fdCA8IDEgJiYgdGhpcy5fcG9pbnQgPT09IDIpIHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gsIHRoaXMuX3kpO1xuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAxKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICBpZiAodGhpcy5fbGluZSA+PSAwKSB0aGlzLl90ID0gMSAtIHRoaXMuX3QsIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgaWYgKHRoaXMuX3QgPD0gMCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gsIHkpO1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB4MSA9IHRoaXMuX3ggKiAoMSAtIHRoaXMuX3QpICsgeCAqIHRoaXMuX3Q7XG4gICAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8oeDEsIHRoaXMuX3kpO1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHgxLCB5KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5feCA9IHgsIHRoaXMuX3kgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgU3RlcChjb250ZXh0LCAwLjUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEJlZm9yZShjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgU3RlcChjb250ZXh0LCAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBBZnRlcihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgU3RlcChjb250ZXh0LCAxKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGIgPCBhID8gLTEgOiBiID4gYSA/IDEgOiBiID49IGEgPyAwIDogTmFOO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZCkge1xuICByZXR1cm4gZDtcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBhcmN9IGZyb20gXCIuL2FyY1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFyZWF9IGZyb20gXCIuL2FyZWFcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBsaW5lfSBmcm9tIFwiLi9saW5lXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcGllfSBmcm9tIFwiLi9waWVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBhcmVhUmFkaWFsLCBkZWZhdWx0IGFzIHJhZGlhbEFyZWF9IGZyb20gXCIuL2FyZWFSYWRpYWxcIjsgLy8gTm90ZTogcmFkaWFsQXJlYSBpcyBkZXByZWNhdGVkIVxuZXhwb3J0IHtkZWZhdWx0IGFzIGxpbmVSYWRpYWwsIGRlZmF1bHQgYXMgcmFkaWFsTGluZX0gZnJvbSBcIi4vbGluZVJhZGlhbFwiOyAvLyBOb3RlOiByYWRpYWxMaW5lIGlzIGRlcHJlY2F0ZWQhXG5leHBvcnQge2RlZmF1bHQgYXMgcG9pbnRSYWRpYWx9IGZyb20gXCIuL3BvaW50UmFkaWFsXCI7XG5leHBvcnQge2xpbmtIb3Jpem9udGFsLCBsaW5rVmVydGljYWwsIGxpbmtSYWRpYWx9IGZyb20gXCIuL2xpbmsvaW5kZXhcIjtcblxuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbCwgc3ltYm9sc30gZnJvbSBcIi4vc3ltYm9sXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sQ2lyY2xlfSBmcm9tIFwiLi9zeW1ib2wvY2lyY2xlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sQ3Jvc3N9IGZyb20gXCIuL3N5bWJvbC9jcm9zc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbERpYW1vbmR9IGZyb20gXCIuL3N5bWJvbC9kaWFtb25kXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sU3F1YXJlfSBmcm9tIFwiLi9zeW1ib2wvc3F1YXJlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sU3Rhcn0gZnJvbSBcIi4vc3ltYm9sL3N0YXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2xUcmlhbmdsZX0gZnJvbSBcIi4vc3ltYm9sL3RyaWFuZ2xlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sV3llfSBmcm9tIFwiLi9zeW1ib2wvd3llXCI7XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUJhc2lzQ2xvc2VkfSBmcm9tIFwiLi9jdXJ2ZS9iYXNpc0Nsb3NlZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQmFzaXNPcGVufSBmcm9tIFwiLi9jdXJ2ZS9iYXNpc09wZW5cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUJhc2lzfSBmcm9tIFwiLi9jdXJ2ZS9iYXNpc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQnVuZGxlfSBmcm9tIFwiLi9jdXJ2ZS9idW5kbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUNhcmRpbmFsQ2xvc2VkfSBmcm9tIFwiLi9jdXJ2ZS9jYXJkaW5hbENsb3NlZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2FyZGluYWxPcGVufSBmcm9tIFwiLi9jdXJ2ZS9jYXJkaW5hbE9wZW5cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUNhcmRpbmFsfSBmcm9tIFwiLi9jdXJ2ZS9jYXJkaW5hbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2F0bXVsbFJvbUNsb3NlZH0gZnJvbSBcIi4vY3VydmUvY2F0bXVsbFJvbUNsb3NlZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2F0bXVsbFJvbU9wZW59IGZyb20gXCIuL2N1cnZlL2NhdG11bGxSb21PcGVuXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVDYXRtdWxsUm9tfSBmcm9tIFwiLi9jdXJ2ZS9jYXRtdWxsUm9tXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVMaW5lYXJDbG9zZWR9IGZyb20gXCIuL2N1cnZlL2xpbmVhckNsb3NlZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlTGluZWFyfSBmcm9tIFwiLi9jdXJ2ZS9saW5lYXJcIjtcbmV4cG9ydCB7bW9ub3RvbmVYIGFzIGN1cnZlTW9ub3RvbmVYLCBtb25vdG9uZVkgYXMgY3VydmVNb25vdG9uZVl9IGZyb20gXCIuL2N1cnZlL21vbm90b25lXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVOYXR1cmFsfSBmcm9tIFwiLi9jdXJ2ZS9uYXR1cmFsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVTdGVwLCBzdGVwQWZ0ZXIgYXMgY3VydmVTdGVwQWZ0ZXIsIHN0ZXBCZWZvcmUgYXMgY3VydmVTdGVwQmVmb3JlfSBmcm9tIFwiLi9jdXJ2ZS9zdGVwXCI7XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja30gZnJvbSBcIi4vc3RhY2tcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09mZnNldEV4cGFuZH0gZnJvbSBcIi4vb2Zmc2V0L2V4cGFuZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT2Zmc2V0RGl2ZXJnaW5nfSBmcm9tIFwiLi9vZmZzZXQvZGl2ZXJnaW5nXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPZmZzZXROb25lfSBmcm9tIFwiLi9vZmZzZXQvbm9uZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT2Zmc2V0U2lsaG91ZXR0ZX0gZnJvbSBcIi4vb2Zmc2V0L3NpbGhvdWV0dGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09mZnNldFdpZ2dsZX0gZnJvbSBcIi4vb2Zmc2V0L3dpZ2dsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJBc2NlbmRpbmd9IGZyb20gXCIuL29yZGVyL2FzY2VuZGluZ1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJEZXNjZW5kaW5nfSBmcm9tIFwiLi9vcmRlci9kZXNjZW5kaW5nXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPcmRlckluc2lkZU91dH0gZnJvbSBcIi4vb3JkZXIvaW5zaWRlT3V0XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPcmRlck5vbmV9IGZyb20gXCIuL29yZGVyL25vbmVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09yZGVyUmV2ZXJzZX0gZnJvbSBcIi4vb3JkZXIvcmV2ZXJzZVwiO1xuIiwiaW1wb3J0IHtwYXRofSBmcm9tIFwiZDMtcGF0aFwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgY3VydmVMaW5lYXIgZnJvbSBcIi4vY3VydmUvbGluZWFyXCI7XG5pbXBvcnQge3ggYXMgcG9pbnRYLCB5IGFzIHBvaW50WX0gZnJvbSBcIi4vcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciB4ID0gcG9pbnRYLFxuICAgICAgeSA9IHBvaW50WSxcbiAgICAgIGRlZmluZWQgPSBjb25zdGFudCh0cnVlKSxcbiAgICAgIGNvbnRleHQgPSBudWxsLFxuICAgICAgY3VydmUgPSBjdXJ2ZUxpbmVhcixcbiAgICAgIG91dHB1dCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbGluZShkYXRhKSB7XG4gICAgdmFyIGksXG4gICAgICAgIG4gPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgZCxcbiAgICAgICAgZGVmaW5lZDAgPSBmYWxzZSxcbiAgICAgICAgYnVmZmVyO1xuXG4gICAgaWYgKGNvbnRleHQgPT0gbnVsbCkgb3V0cHV0ID0gY3VydmUoYnVmZmVyID0gcGF0aCgpKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPD0gbjsgKytpKSB7XG4gICAgICBpZiAoIShpIDwgbiAmJiBkZWZpbmVkKGQgPSBkYXRhW2ldLCBpLCBkYXRhKSkgPT09IGRlZmluZWQwKSB7XG4gICAgICAgIGlmIChkZWZpbmVkMCA9ICFkZWZpbmVkMCkgb3V0cHV0LmxpbmVTdGFydCgpO1xuICAgICAgICBlbHNlIG91dHB1dC5saW5lRW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGVmaW5lZDApIG91dHB1dC5wb2ludCgreChkLCBpLCBkYXRhKSwgK3koZCwgaSwgZGF0YSkpO1xuICAgIH1cblxuICAgIGlmIChidWZmZXIpIHJldHVybiBvdXRwdXQgPSBudWxsLCBidWZmZXIgKyBcIlwiIHx8IG51bGw7XG4gIH1cblxuICBsaW5lLnggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBsaW5lKSA6IHg7XG4gIH07XG5cbiAgbGluZS55ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgbGluZSkgOiB5O1xuICB9O1xuXG4gIGxpbmUuZGVmaW5lZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkZWZpbmVkID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCBsaW5lKSA6IGRlZmluZWQ7XG4gIH07XG5cbiAgbGluZS5jdXJ2ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjdXJ2ZSA9IF8sIGNvbnRleHQgIT0gbnVsbCAmJiAob3V0cHV0ID0gY3VydmUoY29udGV4dCkpLCBsaW5lKSA6IGN1cnZlO1xuICB9O1xuXG4gIGxpbmUuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChfID09IG51bGwgPyBjb250ZXh0ID0gb3V0cHV0ID0gbnVsbCA6IG91dHB1dCA9IGN1cnZlKGNvbnRleHQgPSBfKSwgbGluZSkgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBsaW5lO1xufVxuIiwiaW1wb3J0IGN1cnZlUmFkaWFsLCB7Y3VydmVSYWRpYWxMaW5lYXJ9IGZyb20gXCIuL2N1cnZlL3JhZGlhbFwiO1xuaW1wb3J0IGxpbmUgZnJvbSBcIi4vbGluZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGluZVJhZGlhbChsKSB7XG4gIHZhciBjID0gbC5jdXJ2ZTtcblxuICBsLmFuZ2xlID0gbC54LCBkZWxldGUgbC54O1xuICBsLnJhZGl1cyA9IGwueSwgZGVsZXRlIGwueTtcblxuICBsLmN1cnZlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gYyhjdXJ2ZVJhZGlhbChfKSkgOiBjKCkuX2N1cnZlO1xuICB9O1xuXG4gIHJldHVybiBsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGxpbmVSYWRpYWwobGluZSgpLmN1cnZlKGN1cnZlUmFkaWFsTGluZWFyKSk7XG59XG4iLCJpbXBvcnQge3BhdGh9IGZyb20gXCJkMy1wYXRoXCI7XG5pbXBvcnQge3NsaWNlfSBmcm9tIFwiLi4vYXJyYXlcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi4vY29uc3RhbnRcIjtcbmltcG9ydCB7eCBhcyBwb2ludFgsIHkgYXMgcG9pbnRZfSBmcm9tIFwiLi4vcG9pbnRcIjtcbmltcG9ydCBwb2ludFJhZGlhbCBmcm9tIFwiLi4vcG9pbnRSYWRpYWxcIjtcblxuZnVuY3Rpb24gbGlua1NvdXJjZShkKSB7XG4gIHJldHVybiBkLnNvdXJjZTtcbn1cblxuZnVuY3Rpb24gbGlua1RhcmdldChkKSB7XG4gIHJldHVybiBkLnRhcmdldDtcbn1cblxuZnVuY3Rpb24gbGluayhjdXJ2ZSkge1xuICB2YXIgc291cmNlID0gbGlua1NvdXJjZSxcbiAgICAgIHRhcmdldCA9IGxpbmtUYXJnZXQsXG4gICAgICB4ID0gcG9pbnRYLFxuICAgICAgeSA9IHBvaW50WSxcbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGxpbmsoKSB7XG4gICAgdmFyIGJ1ZmZlciwgYXJndiA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKSwgcyA9IHNvdXJjZS5hcHBseSh0aGlzLCBhcmd2KSwgdCA9IHRhcmdldC5hcHBseSh0aGlzLCBhcmd2KTtcbiAgICBpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBidWZmZXIgPSBwYXRoKCk7XG4gICAgY3VydmUoY29udGV4dCwgK3guYXBwbHkodGhpcywgKGFyZ3ZbMF0gPSBzLCBhcmd2KSksICt5LmFwcGx5KHRoaXMsIGFyZ3YpLCAreC5hcHBseSh0aGlzLCAoYXJndlswXSA9IHQsIGFyZ3YpKSwgK3kuYXBwbHkodGhpcywgYXJndikpO1xuICAgIGlmIChidWZmZXIpIHJldHVybiBjb250ZXh0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgbGluay5zb3VyY2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc291cmNlID0gXywgbGluaykgOiBzb3VyY2U7XG4gIH07XG5cbiAgbGluay50YXJnZXQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGFyZ2V0ID0gXywgbGluaykgOiB0YXJnZXQ7XG4gIH07XG5cbiAgbGluay54ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHggPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgbGluaykgOiB4O1xuICB9O1xuXG4gIGxpbmsueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGxpbmspIDogeTtcbiAgfTtcblxuICBsaW5rLmNvbnRleHQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoKGNvbnRleHQgPSBfID09IG51bGwgPyBudWxsIDogXyksIGxpbmspIDogY29udGV4dDtcbiAgfTtcblxuICByZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gY3VydmVIb3Jpem9udGFsKGNvbnRleHQsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIGNvbnRleHQubW92ZVRvKHgwLCB5MCk7XG4gIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4MCA9ICh4MCArIHgxKSAvIDIsIHkwLCB4MCwgeTEsIHgxLCB5MSk7XG59XG5cbmZ1bmN0aW9uIGN1cnZlVmVydGljYWwoY29udGV4dCwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgY29udGV4dC5tb3ZlVG8oeDAsIHkwKTtcbiAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHgwLCB5MCA9ICh5MCArIHkxKSAvIDIsIHgxLCB5MCwgeDEsIHkxKTtcbn1cblxuZnVuY3Rpb24gY3VydmVSYWRpYWwoY29udGV4dCwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgdmFyIHAwID0gcG9pbnRSYWRpYWwoeDAsIHkwKSxcbiAgICAgIHAxID0gcG9pbnRSYWRpYWwoeDAsIHkwID0gKHkwICsgeTEpIC8gMiksXG4gICAgICBwMiA9IHBvaW50UmFkaWFsKHgxLCB5MCksXG4gICAgICBwMyA9IHBvaW50UmFkaWFsKHgxLCB5MSk7XG4gIGNvbnRleHQubW92ZVRvKHAwWzBdLCBwMFsxXSk7XG4gIGNvbnRleHQuYmV6aWVyQ3VydmVUbyhwMVswXSwgcDFbMV0sIHAyWzBdLCBwMlsxXSwgcDNbMF0sIHAzWzFdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtIb3Jpem9udGFsKCkge1xuICByZXR1cm4gbGluayhjdXJ2ZUhvcml6b250YWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua1ZlcnRpY2FsKCkge1xuICByZXR1cm4gbGluayhjdXJ2ZVZlcnRpY2FsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtSYWRpYWwoKSB7XG4gIHZhciBsID0gbGluayhjdXJ2ZVJhZGlhbCk7XG4gIGwuYW5nbGUgPSBsLngsIGRlbGV0ZSBsLng7XG4gIGwucmFkaXVzID0gbC55LCBkZWxldGUgbC55O1xuICByZXR1cm4gbDtcbn1cbiIsImV4cG9ydCB2YXIgYWJzID0gTWF0aC5hYnM7XG5leHBvcnQgdmFyIGF0YW4yID0gTWF0aC5hdGFuMjtcbmV4cG9ydCB2YXIgY29zID0gTWF0aC5jb3M7XG5leHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgc2luID0gTWF0aC5zaW47XG5leHBvcnQgdmFyIHNxcnQgPSBNYXRoLnNxcnQ7XG5cbmV4cG9ydCB2YXIgZXBzaWxvbiA9IDFlLTEyO1xuZXhwb3J0IHZhciBwaSA9IE1hdGguUEk7XG5leHBvcnQgdmFyIGhhbGZQaSA9IHBpIC8gMjtcbmV4cG9ydCB2YXIgdGF1ID0gMiAqIHBpO1xuXG5leHBvcnQgZnVuY3Rpb24gYWNvcyh4KSB7XG4gIHJldHVybiB4ID4gMSA/IDAgOiB4IDwgLTEgPyBwaSA6IE1hdGguYWNvcyh4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzaW4oeCkge1xuICByZXR1cm4geCA+PSAxID8gaGFsZlBpIDogeCA8PSAtMSA/IC1oYWxmUGkgOiBNYXRoLmFzaW4oeCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHt9XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMsIG9yZGVyKSB7XG4gIGlmICghKChuID0gc2VyaWVzLmxlbmd0aCkgPiAxKSkgcmV0dXJuO1xuICBmb3IgKHZhciBpLCBqID0gMCwgZCwgZHksIHlwLCB5biwgbiwgbSA9IHNlcmllc1tvcmRlclswXV0ubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh5cCA9IHluID0gMCwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgoZHkgPSAoZCA9IHNlcmllc1tvcmRlcltpXV1bal0pWzFdIC0gZFswXSkgPj0gMCkge1xuICAgICAgICBkWzBdID0geXAsIGRbMV0gPSB5cCArPSBkeTtcbiAgICAgIH0gZWxzZSBpZiAoZHkgPCAwKSB7XG4gICAgICAgIGRbMV0gPSB5biwgZFswXSA9IHluICs9IGR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZFswXSA9IHlwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IG5vbmUgZnJvbSBcIi4vbm9uZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMsIG9yZGVyKSB7XG4gIGlmICghKChuID0gc2VyaWVzLmxlbmd0aCkgPiAwKSkgcmV0dXJuO1xuICBmb3IgKHZhciBpLCBuLCBqID0gMCwgbSA9IHNlcmllc1swXS5sZW5ndGgsIHk7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHkgPSBpID0gMDsgaSA8IG47ICsraSkgeSArPSBzZXJpZXNbaV1bal1bMV0gfHwgMDtcbiAgICBpZiAoeSkgZm9yIChpID0gMDsgaSA8IG47ICsraSkgc2VyaWVzW2ldW2pdWzFdIC89IHk7XG4gIH1cbiAgbm9uZShzZXJpZXMsIG9yZGVyKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcywgb3JkZXIpIHtcbiAgaWYgKCEoKG4gPSBzZXJpZXMubGVuZ3RoKSA+IDEpKSByZXR1cm47XG4gIGZvciAodmFyIGkgPSAxLCBqLCBzMCwgczEgPSBzZXJpZXNbb3JkZXJbMF1dLCBuLCBtID0gczEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgczAgPSBzMSwgczEgPSBzZXJpZXNbb3JkZXJbaV1dO1xuICAgIGZvciAoaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICAgIHMxW2pdWzFdICs9IHMxW2pdWzBdID0gaXNOYU4oczBbal1bMV0pID8gczBbal1bMF0gOiBzMFtqXVsxXTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMCkpIHJldHVybjtcbiAgZm9yICh2YXIgaiA9IDAsIHMwID0gc2VyaWVzW29yZGVyWzBdXSwgbiwgbSA9IHMwLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGkgPSAwLCB5ID0gMDsgaSA8IG47ICsraSkgeSArPSBzZXJpZXNbaV1bal1bMV0gfHwgMDtcbiAgICBzMFtqXVsxXSArPSBzMFtqXVswXSA9IC15IC8gMjtcbiAgfVxuICBub25lKHNlcmllcywgb3JkZXIpO1xufVxuIiwiaW1wb3J0IG5vbmUgZnJvbSBcIi4vbm9uZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMsIG9yZGVyKSB7XG4gIGlmICghKChuID0gc2VyaWVzLmxlbmd0aCkgPiAwKSB8fCAhKChtID0gKHMwID0gc2VyaWVzW29yZGVyWzBdXSkubGVuZ3RoKSA+IDApKSByZXR1cm47XG4gIGZvciAodmFyIHkgPSAwLCBqID0gMSwgczAsIG0sIG47IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBpID0gMCwgczEgPSAwLCBzMiA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHZhciBzaSA9IHNlcmllc1tvcmRlcltpXV0sXG4gICAgICAgICAgc2lqMCA9IHNpW2pdWzFdIHx8IDAsXG4gICAgICAgICAgc2lqMSA9IHNpW2ogLSAxXVsxXSB8fCAwLFxuICAgICAgICAgIHMzID0gKHNpajAgLSBzaWoxKSAvIDI7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGk7ICsraykge1xuICAgICAgICB2YXIgc2sgPSBzZXJpZXNbb3JkZXJba11dLFxuICAgICAgICAgICAgc2tqMCA9IHNrW2pdWzFdIHx8IDAsXG4gICAgICAgICAgICBza2oxID0gc2tbaiAtIDFdWzFdIHx8IDA7XG4gICAgICAgIHMzICs9IHNrajAgLSBza2oxO1xuICAgICAgfVxuICAgICAgczEgKz0gc2lqMCwgczIgKz0gczMgKiBzaWowO1xuICAgIH1cbiAgICBzMFtqIC0gMV1bMV0gKz0gczBbaiAtIDFdWzBdID0geTtcbiAgICBpZiAoczEpIHkgLT0gczIgLyBzMTtcbiAgfVxuICBzMFtqIC0gMV1bMV0gKz0gczBbaiAtIDFdWzBdID0geTtcbiAgbm9uZShzZXJpZXMsIG9yZGVyKTtcbn1cbiIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzKSB7XG4gIHZhciBzdW1zID0gc2VyaWVzLm1hcChzdW0pO1xuICByZXR1cm4gbm9uZShzZXJpZXMpLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gc3Vtc1thXSAtIHN1bXNbYl07IH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtKHNlcmllcykge1xuICB2YXIgcyA9IDAsIGkgPSAtMSwgbiA9IHNlcmllcy5sZW5ndGgsIHY7XG4gIHdoaWxlICgrK2kgPCBuKSBpZiAodiA9ICtzZXJpZXNbaV1bMV0pIHMgKz0gdjtcbiAgcmV0dXJuIHM7XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgcmV0dXJuIGFzY2VuZGluZyhzZXJpZXMpLnJldmVyc2UoKTtcbn1cbiIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcbmltcG9ydCB7c3VtfSBmcm9tIFwiLi9hc2NlbmRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzKSB7XG4gIHZhciBuID0gc2VyaWVzLmxlbmd0aCxcbiAgICAgIGksXG4gICAgICBqLFxuICAgICAgc3VtcyA9IHNlcmllcy5tYXAoc3VtKSxcbiAgICAgIG9yZGVyID0gbm9uZShzZXJpZXMpLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gc3Vtc1tiXSAtIHN1bXNbYV07IH0pLFxuICAgICAgdG9wID0gMCxcbiAgICAgIGJvdHRvbSA9IDAsXG4gICAgICB0b3BzID0gW10sXG4gICAgICBib3R0b21zID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGogPSBvcmRlcltpXTtcbiAgICBpZiAodG9wIDwgYm90dG9tKSB7XG4gICAgICB0b3AgKz0gc3Vtc1tqXTtcbiAgICAgIHRvcHMucHVzaChqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm90dG9tICs9IHN1bXNbal07XG4gICAgICBib3R0b21zLnB1c2goaik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdHRvbXMucmV2ZXJzZSgpLmNvbmNhdCh0b3BzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcykge1xuICB2YXIgbiA9IHNlcmllcy5sZW5ndGgsIG8gPSBuZXcgQXJyYXkobik7XG4gIHdoaWxlICgtLW4gPj0gMCkgb1tuXSA9IG47XG4gIHJldHVybiBvO1xufVxuIiwiaW1wb3J0IG5vbmUgZnJvbSBcIi4vbm9uZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgcmV0dXJuIG5vbmUoc2VyaWVzKS5yZXZlcnNlKCk7XG59XG4iLCJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBkZXNjZW5kaW5nIGZyb20gXCIuL2Rlc2NlbmRpbmdcIjtcbmltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eVwiO1xuaW1wb3J0IHt0YXV9IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciB2YWx1ZSA9IGlkZW50aXR5LFxuICAgICAgc29ydFZhbHVlcyA9IGRlc2NlbmRpbmcsXG4gICAgICBzb3J0ID0gbnVsbCxcbiAgICAgIHN0YXJ0QW5nbGUgPSBjb25zdGFudCgwKSxcbiAgICAgIGVuZEFuZ2xlID0gY29uc3RhbnQodGF1KSxcbiAgICAgIHBhZEFuZ2xlID0gY29uc3RhbnQoMCk7XG5cbiAgZnVuY3Rpb24gcGllKGRhdGEpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBqLFxuICAgICAgICBrLFxuICAgICAgICBzdW0gPSAwLFxuICAgICAgICBpbmRleCA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgYXJjcyA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgYTAgPSArc3RhcnRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICBkYSA9IE1hdGgubWluKHRhdSwgTWF0aC5tYXgoLXRhdSwgZW5kQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSAtIGEwKSksXG4gICAgICAgIGExLFxuICAgICAgICBwID0gTWF0aC5taW4oTWF0aC5hYnMoZGEpIC8gbiwgcGFkQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSksXG4gICAgICAgIHBhID0gcCAqIChkYSA8IDAgPyAtMSA6IDEpLFxuICAgICAgICB2O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCh2ID0gYXJjc1tpbmRleFtpXSA9IGldID0gK3ZhbHVlKGRhdGFbaV0sIGksIGRhdGEpKSA+IDApIHtcbiAgICAgICAgc3VtICs9IHY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uYWxseSBzb3J0IHRoZSBhcmNzIGJ5IHByZXZpb3VzbHktY29tcHV0ZWQgdmFsdWVzIG9yIGJ5IGRhdGEuXG4gICAgaWYgKHNvcnRWYWx1ZXMgIT0gbnVsbCkgaW5kZXguc29ydChmdW5jdGlvbihpLCBqKSB7IHJldHVybiBzb3J0VmFsdWVzKGFyY3NbaV0sIGFyY3Nbal0pOyB9KTtcbiAgICBlbHNlIGlmIChzb3J0ICE9IG51bGwpIGluZGV4LnNvcnQoZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gc29ydChkYXRhW2ldLCBkYXRhW2pdKTsgfSk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBhcmNzISBUaGV5IGFyZSBzdG9yZWQgaW4gdGhlIG9yaWdpbmFsIGRhdGEncyBvcmRlci5cbiAgICBmb3IgKGkgPSAwLCBrID0gc3VtID8gKGRhIC0gbiAqIHBhKSAvIHN1bSA6IDA7IGkgPCBuOyArK2ksIGEwID0gYTEpIHtcbiAgICAgIGogPSBpbmRleFtpXSwgdiA9IGFyY3Nbal0sIGExID0gYTAgKyAodiA+IDAgPyB2ICogayA6IDApICsgcGEsIGFyY3Nbal0gPSB7XG4gICAgICAgIGRhdGE6IGRhdGFbal0sXG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgc3RhcnRBbmdsZTogYTAsXG4gICAgICAgIGVuZEFuZ2xlOiBhMSxcbiAgICAgICAgcGFkQW5nbGU6IHBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyY3M7XG4gIH1cblxuICBwaWUudmFsdWUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodmFsdWUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgcGllKSA6IHZhbHVlO1xuICB9O1xuXG4gIHBpZS5zb3J0VmFsdWVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNvcnRWYWx1ZXMgPSBfLCBzb3J0ID0gbnVsbCwgcGllKSA6IHNvcnRWYWx1ZXM7XG4gIH07XG5cbiAgcGllLnNvcnQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc29ydCA9IF8sIHNvcnRWYWx1ZXMgPSBudWxsLCBwaWUpIDogc29ydDtcbiAgfTtcblxuICBwaWUuc3RhcnRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdGFydEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHBpZSkgOiBzdGFydEFuZ2xlO1xuICB9O1xuXG4gIHBpZS5lbmRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChlbmRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBwaWUpIDogZW5kQW5nbGU7XG4gIH07XG5cbiAgcGllLnBhZEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHBpZSkgOiBwYWRBbmdsZTtcbiAgfTtcblxuICByZXR1cm4gcGllO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHgocCkge1xuICByZXR1cm4gcFswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHkocCkge1xuICByZXR1cm4gcFsxXTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHkpIHtcbiAgcmV0dXJuIFsoeSA9ICt5KSAqIE1hdGguY29zKHggLT0gTWF0aC5QSSAvIDIpLCB5ICogTWF0aC5zaW4oeCldO1xufVxuIiwiaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IG9mZnNldE5vbmUgZnJvbSBcIi4vb2Zmc2V0L25vbmVcIjtcbmltcG9ydCBvcmRlck5vbmUgZnJvbSBcIi4vb3JkZXIvbm9uZVwiO1xuXG5mdW5jdGlvbiBzdGFja1ZhbHVlKGQsIGtleSkge1xuICByZXR1cm4gZFtrZXldO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGtleXMgPSBjb25zdGFudChbXSksXG4gICAgICBvcmRlciA9IG9yZGVyTm9uZSxcbiAgICAgIG9mZnNldCA9IG9mZnNldE5vbmUsXG4gICAgICB2YWx1ZSA9IHN0YWNrVmFsdWU7XG5cbiAgZnVuY3Rpb24gc3RhY2soZGF0YSkge1xuICAgIHZhciBreiA9IGtleXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgaSxcbiAgICAgICAgbSA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBuID0ga3oubGVuZ3RoLFxuICAgICAgICBzeiA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgb3o7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBmb3IgKHZhciBraSA9IGt6W2ldLCBzaSA9IHN6W2ldID0gbmV3IEFycmF5KG0pLCBqID0gMCwgc2lqOyBqIDwgbTsgKytqKSB7XG4gICAgICAgIHNpW2pdID0gc2lqID0gWzAsICt2YWx1ZShkYXRhW2pdLCBraSwgaiwgZGF0YSldO1xuICAgICAgICBzaWouZGF0YSA9IGRhdGFbal07XG4gICAgICB9XG4gICAgICBzaS5rZXkgPSBraTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwLCBveiA9IG9yZGVyKHN6KTsgaSA8IG47ICsraSkge1xuICAgICAgc3pbb3pbaV1dLmluZGV4ID0gaTtcbiAgICB9XG5cbiAgICBvZmZzZXQoc3osIG96KTtcbiAgICByZXR1cm4gc3o7XG4gIH1cblxuICBzdGFjay5rZXlzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGtleXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KHNsaWNlLmNhbGwoXykpLCBzdGFjaykgOiBrZXlzO1xuICB9O1xuXG4gIHN0YWNrLnZhbHVlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHZhbHVlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHN0YWNrKSA6IHZhbHVlO1xuICB9O1xuXG4gIHN0YWNrLm9yZGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG9yZGVyID0gXyA9PSBudWxsID8gb3JkZXJOb25lIDogdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChzbGljZS5jYWxsKF8pKSwgc3RhY2spIDogb3JkZXI7XG4gIH07XG5cbiAgc3RhY2sub2Zmc2V0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG9mZnNldCA9IF8gPT0gbnVsbCA/IG9mZnNldE5vbmUgOiBfLCBzdGFjaykgOiBvZmZzZXQ7XG4gIH07XG5cbiAgcmV0dXJuIHN0YWNrO1xufVxuIiwiaW1wb3J0IHtwYXRofSBmcm9tIFwiZDMtcGF0aFwiO1xuaW1wb3J0IGNpcmNsZSBmcm9tIFwiLi9zeW1ib2wvY2lyY2xlXCI7XG5pbXBvcnQgY3Jvc3MgZnJvbSBcIi4vc3ltYm9sL2Nyb3NzXCI7XG5pbXBvcnQgZGlhbW9uZCBmcm9tIFwiLi9zeW1ib2wvZGlhbW9uZFwiO1xuaW1wb3J0IHN0YXIgZnJvbSBcIi4vc3ltYm9sL3N0YXJcIjtcbmltcG9ydCBzcXVhcmUgZnJvbSBcIi4vc3ltYm9sL3NxdWFyZVwiO1xuaW1wb3J0IHRyaWFuZ2xlIGZyb20gXCIuL3N5bWJvbC90cmlhbmdsZVwiO1xuaW1wb3J0IHd5ZSBmcm9tIFwiLi9zeW1ib2wvd3llXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcblxuZXhwb3J0IHZhciBzeW1ib2xzID0gW1xuICBjaXJjbGUsXG4gIGNyb3NzLFxuICBkaWFtb25kLFxuICBzcXVhcmUsXG4gIHN0YXIsXG4gIHRyaWFuZ2xlLFxuICB3eWVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgdHlwZSA9IGNvbnN0YW50KGNpcmNsZSksXG4gICAgICBzaXplID0gY29uc3RhbnQoNjQpLFxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gc3ltYm9sKCkge1xuICAgIHZhciBidWZmZXI7XG4gICAgaWYgKCFjb250ZXh0KSBjb250ZXh0ID0gYnVmZmVyID0gcGF0aCgpO1xuICAgIHR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKS5kcmF3KGNvbnRleHQsICtzaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIGlmIChidWZmZXIpIHJldHVybiBjb250ZXh0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgc3ltYm9sLnR5cGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodHlwZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoXyksIHN5bWJvbCkgOiB0eXBlO1xuICB9O1xuXG4gIHN5bWJvbC5zaXplID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNpemUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgc3ltYm9sKSA6IHNpemU7XG4gIH07XG5cbiAgc3ltYm9sLmNvbnRleHQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY29udGV4dCA9IF8gPT0gbnVsbCA/IG51bGwgOiBfLCBzeW1ib2wpIDogY29udGV4dDtcbiAgfTtcblxuICByZXR1cm4gc3ltYm9sO1xufVxuIiwiaW1wb3J0IHtwaSwgdGF1fSBmcm9tIFwiLi4vbWF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgciA9IE1hdGguc3FydChzaXplIC8gcGkpO1xuICAgIGNvbnRleHQubW92ZVRvKHIsIDApO1xuICAgIGNvbnRleHQuYXJjKDAsIDAsIHIsIDAsIHRhdSk7XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgciA9IE1hdGguc3FydChzaXplIC8gNSkgLyAyO1xuICAgIGNvbnRleHQubW92ZVRvKC0zICogciwgLXIpO1xuICAgIGNvbnRleHQubGluZVRvKC1yLCAtcik7XG4gICAgY29udGV4dC5saW5lVG8oLXIsIC0zICogcik7XG4gICAgY29udGV4dC5saW5lVG8ociwgLTMgKiByKTtcbiAgICBjb250ZXh0LmxpbmVUbyhyLCAtcik7XG4gICAgY29udGV4dC5saW5lVG8oMyAqIHIsIC1yKTtcbiAgICBjb250ZXh0LmxpbmVUbygzICogciwgcik7XG4gICAgY29udGV4dC5saW5lVG8ociwgcik7XG4gICAgY29udGV4dC5saW5lVG8ociwgMyAqIHIpO1xuICAgIGNvbnRleHQubGluZVRvKC1yLCAzICogcik7XG4gICAgY29udGV4dC5saW5lVG8oLXIsIHIpO1xuICAgIGNvbnRleHQubGluZVRvKC0zICogciwgcik7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufTtcbiIsInZhciB0YW4zMCA9IE1hdGguc3FydCgxIC8gMyksXG4gICAgdGFuMzBfMiA9IHRhbjMwICogMjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkcmF3OiBmdW5jdGlvbihjb250ZXh0LCBzaXplKSB7XG4gICAgdmFyIHkgPSBNYXRoLnNxcnQoc2l6ZSAvIHRhbjMwXzIpLFxuICAgICAgICB4ID0geSAqIHRhbjMwO1xuICAgIGNvbnRleHQubW92ZVRvKDAsIC15KTtcbiAgICBjb250ZXh0LmxpbmVUbyh4LCAwKTtcbiAgICBjb250ZXh0LmxpbmVUbygwLCB5KTtcbiAgICBjb250ZXh0LmxpbmVUbygteCwgMCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciB3ID0gTWF0aC5zcXJ0KHNpemUpLFxuICAgICAgICB4ID0gLXcgLyAyO1xuICAgIGNvbnRleHQucmVjdCh4LCB4LCB3LCB3KTtcbiAgfVxufTtcbiIsImltcG9ydCB7cGksIHRhdX0gZnJvbSBcIi4uL21hdGhcIjtcblxudmFyIGthID0gMC44OTA4MTMwOTE1MjkyODUyMjgxMCxcbiAgICBrciA9IE1hdGguc2luKHBpIC8gMTApIC8gTWF0aC5zaW4oNyAqIHBpIC8gMTApLFxuICAgIGt4ID0gTWF0aC5zaW4odGF1IC8gMTApICoga3IsXG4gICAga3kgPSAtTWF0aC5jb3ModGF1IC8gMTApICoga3I7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgKiBrYSksXG4gICAgICAgIHggPSBreCAqIHIsXG4gICAgICAgIHkgPSBreSAqIHI7XG4gICAgY29udGV4dC5tb3ZlVG8oMCwgLXIpO1xuICAgIGNvbnRleHQubGluZVRvKHgsIHkpO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNTsgKytpKSB7XG4gICAgICB2YXIgYSA9IHRhdSAqIGkgLyA1LFxuICAgICAgICAgIGMgPSBNYXRoLmNvcyhhKSxcbiAgICAgICAgICBzID0gTWF0aC5zaW4oYSk7XG4gICAgICBjb250ZXh0LmxpbmVUbyhzICogciwgLWMgKiByKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGMgKiB4IC0gcyAqIHksIHMgKiB4ICsgYyAqIHkpO1xuICAgIH1cbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuIiwidmFyIHNxcnQzID0gTWF0aC5zcXJ0KDMpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgeSA9IC1NYXRoLnNxcnQoc2l6ZSAvIChzcXJ0MyAqIDMpKTtcbiAgICBjb250ZXh0Lm1vdmVUbygwLCB5ICogMik7XG4gICAgY29udGV4dC5saW5lVG8oLXNxcnQzICogeSwgLXkpO1xuICAgIGNvbnRleHQubGluZVRvKHNxcnQzICogeSwgLXkpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn07XG4iLCJ2YXIgYyA9IC0wLjUsXG4gICAgcyA9IE1hdGguc3FydCgzKSAvIDIsXG4gICAgayA9IDEgLyBNYXRoLnNxcnQoMTIpLFxuICAgIGEgPSAoayAvIDIgKyAxKSAqIDM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgLyBhKSxcbiAgICAgICAgeDAgPSByIC8gMixcbiAgICAgICAgeTAgPSByICogayxcbiAgICAgICAgeDEgPSB4MCxcbiAgICAgICAgeTEgPSByICogayArIHIsXG4gICAgICAgIHgyID0gLXgxLFxuICAgICAgICB5MiA9IHkxO1xuICAgIGNvbnRleHQubW92ZVRvKHgwLCB5MCk7XG4gICAgY29udGV4dC5saW5lVG8oeDEsIHkxKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4MiwgeTIpO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MCAtIHMgKiB5MCwgcyAqIHgwICsgYyAqIHkwKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDEgLSBzICogeTEsIHMgKiB4MSArIGMgKiB5MSk7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgyIC0gcyAqIHkyLCBzICogeDIgKyBjICogeTIpO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MCArIHMgKiB5MCwgYyAqIHkwIC0gcyAqIHgwKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDEgKyBzICogeTEsIGMgKiB5MSAtIHMgKiB4MSk7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgyICsgcyAqIHkyLCBjICogeTIgLSBzICogeDIpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn07XG4iLCJleHBvcnQge1xuICBub3csXG4gIHRpbWVyLFxuICB0aW1lckZsdXNoXG59IGZyb20gXCIuL3RpbWVyXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZW91dFxufSBmcm9tIFwiLi90aW1lb3V0XCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgaW50ZXJ2YWxcbn0gZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbiIsImltcG9ydCB7VGltZXIsIG5vd30gZnJvbSBcIi4vdGltZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyLCB0b3RhbCA9IGRlbGF5O1xuICBpZiAoZGVsYXkgPT0gbnVsbCkgcmV0dXJuIHQucmVzdGFydChjYWxsYmFjaywgZGVsYXksIHRpbWUpLCB0O1xuICBkZWxheSA9ICtkZWxheSwgdGltZSA9IHRpbWUgPT0gbnVsbCA/IG5vdygpIDogK3RpbWU7XG4gIHQucmVzdGFydChmdW5jdGlvbiB0aWNrKGVsYXBzZWQpIHtcbiAgICBlbGFwc2VkICs9IHRvdGFsO1xuICAgIHQucmVzdGFydCh0aWNrLCB0b3RhbCArPSBkZWxheSwgdGltZSk7XG4gICAgY2FsbGJhY2soZWxhcHNlZCk7XG4gIH0sIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG4iLCJpbXBvcnQge1RpbWVyfSBmcm9tIFwiLi90aW1lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIGRlbGF5ID0gZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXk7XG4gIHQucmVzdGFydChmdW5jdGlvbihlbGFwc2VkKSB7XG4gICAgdC5zdG9wKCk7XG4gICAgY2FsbGJhY2soZWxhcHNlZCArIGRlbGF5KTtcbiAgfSwgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cbiIsInZhciBmcmFtZSA9IDAsIC8vIGlzIGFuIGFuaW1hdGlvbiBmcmFtZSBwZW5kaW5nP1xuICAgIHRpbWVvdXQgPSAwLCAvLyBpcyBhIHRpbWVvdXQgcGVuZGluZz9cbiAgICBpbnRlcnZhbCA9IDAsIC8vIGFyZSBhbnkgdGltZXJzIGFjdGl2ZT9cbiAgICBwb2tlRGVsYXkgPSAxMDAwLCAvLyBob3cgZnJlcXVlbnRseSB3ZSBjaGVjayBmb3IgY2xvY2sgc2tld1xuICAgIHRhc2tIZWFkLFxuICAgIHRhc2tUYWlsLFxuICAgIGNsb2NrTGFzdCA9IDAsXG4gICAgY2xvY2tOb3cgPSAwLFxuICAgIGNsb2NrU2tldyA9IDAsXG4gICAgY2xvY2sgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09IFwib2JqZWN0XCIgJiYgcGVyZm9ybWFuY2Uubm93ID8gcGVyZm9ybWFuY2UgOiBEYXRlLFxuICAgIHNldEZyYW1lID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdykgOiBmdW5jdGlvbihmKSB7IHNldFRpbWVvdXQoZiwgMTcpOyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gY2xvY2tOb3cgfHwgKHNldEZyYW1lKGNsZWFyTm93KSwgY2xvY2tOb3cgPSBjbG9jay5ub3coKSArIGNsb2NrU2tldyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTm93KCkge1xuICBjbG9ja05vdyA9IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaW1lcigpIHtcbiAgdGhpcy5fY2FsbCA9XG4gIHRoaXMuX3RpbWUgPVxuICB0aGlzLl9uZXh0ID0gbnVsbDtcbn1cblxuVGltZXIucHJvdG90eXBlID0gdGltZXIucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVGltZXIsXG4gIHJlc3RhcnQ6IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIHRpbWUgPSAodGltZSA9PSBudWxsID8gbm93KCkgOiArdGltZSkgKyAoZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXkpO1xuICAgIGlmICghdGhpcy5fbmV4dCAmJiB0YXNrVGFpbCAhPT0gdGhpcykge1xuICAgICAgaWYgKHRhc2tUYWlsKSB0YXNrVGFpbC5fbmV4dCA9IHRoaXM7XG4gICAgICBlbHNlIHRhc2tIZWFkID0gdGhpcztcbiAgICAgIHRhc2tUYWlsID0gdGhpcztcbiAgICB9XG4gICAgdGhpcy5fY2FsbCA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgIHNsZWVwKCk7XG4gIH0sXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jYWxsKSB7XG4gICAgICB0aGlzLl9jYWxsID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWUgPSBJbmZpbml0eTtcbiAgICAgIHNsZWVwKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lckZsdXNoKCkge1xuICBub3coKTsgLy8gR2V0IHRoZSBjdXJyZW50IHRpbWUsIGlmIG5vdCBhbHJlYWR5IHNldC5cbiAgKytmcmFtZTsgLy8gUHJldGVuZCB3ZeKAmXZlIHNldCBhbiBhbGFybSwgaWYgd2UgaGF2ZW7igJl0IGFscmVhZHkuXG4gIHZhciB0ID0gdGFza0hlYWQsIGU7XG4gIHdoaWxlICh0KSB7XG4gICAgaWYgKChlID0gY2xvY2tOb3cgLSB0Ll90aW1lKSA+PSAwKSB0Ll9jYWxsLmNhbGwobnVsbCwgZSk7XG4gICAgdCA9IHQuX25leHQ7XG4gIH1cbiAgLS1mcmFtZTtcbn1cblxuZnVuY3Rpb24gd2FrZSgpIHtcbiAgY2xvY2tOb3cgPSAoY2xvY2tMYXN0ID0gY2xvY2subm93KCkpICsgY2xvY2tTa2V3O1xuICBmcmFtZSA9IHRpbWVvdXQgPSAwO1xuICB0cnkge1xuICAgIHRpbWVyRmx1c2goKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBmcmFtZSA9IDA7XG4gICAgbmFwKCk7XG4gICAgY2xvY2tOb3cgPSAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBva2UoKSB7XG4gIHZhciBub3cgPSBjbG9jay5ub3coKSwgZGVsYXkgPSBub3cgLSBjbG9ja0xhc3Q7XG4gIGlmIChkZWxheSA+IHBva2VEZWxheSkgY2xvY2tTa2V3IC09IGRlbGF5LCBjbG9ja0xhc3QgPSBub3c7XG59XG5cbmZ1bmN0aW9uIG5hcCgpIHtcbiAgdmFyIHQwLCB0MSA9IHRhc2tIZWFkLCB0MiwgdGltZSA9IEluZmluaXR5O1xuICB3aGlsZSAodDEpIHtcbiAgICBpZiAodDEuX2NhbGwpIHtcbiAgICAgIGlmICh0aW1lID4gdDEuX3RpbWUpIHRpbWUgPSB0MS5fdGltZTtcbiAgICAgIHQwID0gdDEsIHQxID0gdDEuX25leHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQyID0gdDEuX25leHQsIHQxLl9uZXh0ID0gbnVsbDtcbiAgICAgIHQxID0gdDAgPyB0MC5fbmV4dCA9IHQyIDogdGFza0hlYWQgPSB0MjtcbiAgICB9XG4gIH1cbiAgdGFza1RhaWwgPSB0MDtcbiAgc2xlZXAodGltZSk7XG59XG5cbmZ1bmN0aW9uIHNsZWVwKHRpbWUpIHtcbiAgaWYgKGZyYW1lKSByZXR1cm47IC8vIFNvb25lc3QgYWxhcm0gYWxyZWFkeSBzZXQsIG9yIHdpbGwgYmUuXG4gIGlmICh0aW1lb3V0KSB0aW1lb3V0ID0gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB2YXIgZGVsYXkgPSB0aW1lIC0gY2xvY2tOb3c7IC8vIFN0cmljdGx5IGxlc3MgdGhhbiBpZiB3ZSByZWNvbXB1dGVkIGNsb2NrTm93LlxuICBpZiAoZGVsYXkgPiAyNCkge1xuICAgIGlmICh0aW1lIDwgSW5maW5pdHkpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHdha2UsIHRpbWUgLSBjbG9jay5ub3coKSAtIGNsb2NrU2tldyk7XG4gICAgaWYgKGludGVydmFsKSBpbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaW50ZXJ2YWwpIGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpLCBpbnRlcnZhbCA9IHNldEludGVydmFsKHBva2UsIHBva2VEZWxheSk7XG4gICAgZnJhbWUgPSAxLCBzZXRGcmFtZSh3YWtlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi90cmFuc2l0aW9uL2luZGV4XCI7XG5pbXBvcnQge1NDSEVEVUxFRH0gZnJvbSBcIi4vdHJhbnNpdGlvbi9zY2hlZHVsZVwiO1xuXG52YXIgcm9vdCA9IFtudWxsXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSkge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb24sXG4gICAgICBzY2hlZHVsZSxcbiAgICAgIGk7XG5cbiAgaWYgKHNjaGVkdWxlcykge1xuICAgIG5hbWUgPSBuYW1lID09IG51bGwgPyBudWxsIDogbmFtZSArIFwiXCI7XG4gICAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgICAgaWYgKChzY2hlZHVsZSA9IHNjaGVkdWxlc1tpXSkuc3RhdGUgPiBTQ0hFRFVMRUQgJiYgc2NoZWR1bGUubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFRyYW5zaXRpb24oW1tub2RlXV0sIHJvb3QsIG5hbWUsICtpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCBcIi4vc2VsZWN0aW9uL2luZGV4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdHJhbnNpdGlvbn0gZnJvbSBcIi4vdHJhbnNpdGlvbi9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFjdGl2ZX0gZnJvbSBcIi4vYWN0aXZlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJydXB0fSBmcm9tIFwiLi9pbnRlcnJ1cHRcIjtcbiIsImltcG9ydCB7U1RBUlRJTkcsIEVORElORywgRU5ERUR9IGZyb20gXCIuL3RyYW5zaXRpb24vc2NoZWR1bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSkge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb24sXG4gICAgICBzY2hlZHVsZSxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGVtcHR5ID0gdHJ1ZSxcbiAgICAgIGk7XG5cbiAgaWYgKCFzY2hlZHVsZXMpIHJldHVybjtcblxuICBuYW1lID0gbmFtZSA9PSBudWxsID8gbnVsbCA6IG5hbWUgKyBcIlwiO1xuXG4gIGZvciAoaSBpbiBzY2hlZHVsZXMpIHtcbiAgICBpZiAoKHNjaGVkdWxlID0gc2NoZWR1bGVzW2ldKS5uYW1lICE9PSBuYW1lKSB7IGVtcHR5ID0gZmFsc2U7IGNvbnRpbnVlOyB9XG4gICAgYWN0aXZlID0gc2NoZWR1bGUuc3RhdGUgPiBTVEFSVElORyAmJiBzY2hlZHVsZS5zdGF0ZSA8IEVORElORztcbiAgICBzY2hlZHVsZS5zdGF0ZSA9IEVOREVEO1xuICAgIHNjaGVkdWxlLnRpbWVyLnN0b3AoKTtcbiAgICBpZiAoYWN0aXZlKSBzY2hlZHVsZS5vbi5jYWxsKFwiaW50ZXJydXB0XCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNjaGVkdWxlLmluZGV4LCBzY2hlZHVsZS5ncm91cCk7XG4gICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgfVxuXG4gIGlmIChlbXB0eSkgZGVsZXRlIG5vZGUuX190cmFuc2l0aW9uO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCBzZWxlY3Rpb25faW50ZXJydXB0IGZyb20gXCIuL2ludGVycnVwdFwiO1xuaW1wb3J0IHNlbGVjdGlvbl90cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb25cIjtcblxuc2VsZWN0aW9uLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBzZWxlY3Rpb25faW50ZXJydXB0O1xuc2VsZWN0aW9uLnByb3RvdHlwZS50cmFuc2l0aW9uID0gc2VsZWN0aW9uX3RyYW5zaXRpb247XG4iLCJpbXBvcnQgaW50ZXJydXB0IGZyb20gXCIuLi9pbnRlcnJ1cHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGludGVycnVwdCh0aGlzLCBuYW1lKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb24sIG5ld0lkfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbmRleFwiO1xuaW1wb3J0IHNjaGVkdWxlIGZyb20gXCIuLi90cmFuc2l0aW9uL3NjaGVkdWxlXCI7XG5pbXBvcnQge2Vhc2VDdWJpY0luT3V0fSBmcm9tIFwiZDMtZWFzZVwiO1xuaW1wb3J0IHtub3d9IGZyb20gXCJkMy10aW1lclwiO1xuXG52YXIgZGVmYXVsdFRpbWluZyA9IHtcbiAgdGltZTogbnVsbCwgLy8gU2V0IG9uIHVzZS5cbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiAyNTAsXG4gIGVhc2U6IGVhc2VDdWJpY0luT3V0XG59O1xuXG5mdW5jdGlvbiBpbmhlcml0KG5vZGUsIGlkKSB7XG4gIHZhciB0aW1pbmc7XG4gIHdoaWxlICghKHRpbWluZyA9IG5vZGUuX190cmFuc2l0aW9uKSB8fCAhKHRpbWluZyA9IHRpbWluZ1tpZF0pKSB7XG4gICAgaWYgKCEobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0VGltaW5nLnRpbWUgPSBub3coKSwgZGVmYXVsdFRpbWluZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRpbWluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgaWQsXG4gICAgICB0aW1pbmc7XG5cbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBUcmFuc2l0aW9uKSB7XG4gICAgaWQgPSBuYW1lLl9pZCwgbmFtZSA9IG5hbWUuX25hbWU7XG4gIH0gZWxzZSB7XG4gICAgaWQgPSBuZXdJZCgpLCAodGltaW5nID0gZGVmYXVsdFRpbWluZykudGltZSA9IG5vdygpLCBuYW1lID0gbmFtZSA9PSBudWxsID8gbnVsbCA6IG5hbWUgKyBcIlwiO1xuICB9XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQsIGksIGdyb3VwLCB0aW1pbmcgfHwgaW5oZXJpdChub2RlLCBpZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsImltcG9ydCB7aW50ZXJwb2xhdGVUcmFuc2Zvcm1TdmcgYXMgaW50ZXJwb2xhdGVUcmFuc2Zvcm19IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IHtuYW1lc3BhY2V9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW5cIjtcbmltcG9ydCBpbnRlcnBvbGF0ZSBmcm9tIFwiLi9pbnRlcnBvbGF0ZVwiO1xuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlTlMoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50KG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHZhbHVlMDAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUwID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgcmV0dXJuIHZhbHVlMCA9PT0gdmFsdWUxID8gbnVsbFxuICAgICAgICA6IHZhbHVlMCA9PT0gdmFsdWUwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHZhbHVlMDAgPSB2YWx1ZTAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciB2YWx1ZTAwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICByZXR1cm4gdmFsdWUwID09PSB2YWx1ZTEgPyBudWxsXG4gICAgICAgIDogdmFsdWUwID09PSB2YWx1ZTAwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUodmFsdWUwMCA9IHZhbHVlMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgdmFsdWUwMCxcbiAgICAgIHZhbHVlMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUwLCB2YWx1ZTEgPSB2YWx1ZSh0aGlzKTtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHJldHVybiB2b2lkIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIHZhbHVlMCA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIHJldHVybiB2YWx1ZTAgPT09IHZhbHVlMSA/IG51bGxcbiAgICAgICAgOiB2YWx1ZTAgPT09IHZhbHVlMDAgJiYgdmFsdWUxID09PSB2YWx1ZTEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUodmFsdWUwMCA9IHZhbHVlMCwgdmFsdWUxMCA9IHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKGZ1bGxuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHZhbHVlMDAsXG4gICAgICB2YWx1ZTEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMCwgdmFsdWUxID0gdmFsdWUodGhpcyk7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSByZXR1cm4gdm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgdmFsdWUwID0gdGhpcy5nZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIHJldHVybiB2YWx1ZTAgPT09IHZhbHVlMSA/IG51bGxcbiAgICAgICAgOiB2YWx1ZTAgPT09IHZhbHVlMDAgJiYgdmFsdWUxID09PSB2YWx1ZTEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUodmFsdWUwMCA9IHZhbHVlMCwgdmFsdWUxMCA9IHZhbHVlMSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKSwgaSA9IGZ1bGxuYW1lID09PSBcInRyYW5zZm9ybVwiID8gaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBpbnRlcnBvbGF0ZTtcbiAgcmV0dXJuIHRoaXMuYXR0clR3ZWVuKG5hbWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKShmdWxsbmFtZSwgaSwgdHdlZW5WYWx1ZSh0aGlzLCBcImF0dHIuXCIgKyBuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHZhbHVlID09IG51bGwgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyUmVtb3ZlTlMgOiBhdHRyUmVtb3ZlKShmdWxsbmFtZSlcbiAgICAgIDogKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckNvbnN0YW50TlMgOiBhdHRyQ29uc3RhbnQpKGZ1bGxuYW1lLCBpLCB2YWx1ZSArIFwiXCIpKTtcbn1cbiIsImltcG9ydCB7bmFtZXNwYWNlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5cbmZ1bmN0aW9uIGF0dHJUd2Vlbk5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMsIGkgPSB2YWx1ZS5hcHBseShub2RlLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBpICYmIGZ1bmN0aW9uKHQpIHtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCBpKHQpKTtcbiAgICB9O1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmZ1bmN0aW9uIGF0dHJUd2VlbihuYW1lLCB2YWx1ZSkge1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMsIGkgPSB2YWx1ZS5hcHBseShub2RlLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBpICYmIGZ1bmN0aW9uKHQpIHtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIGkodCkpO1xuICAgIH07XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGtleSA9IFwiYXR0ci5cIiArIG5hbWU7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIChmdWxsbmFtZS5sb2NhbCA/IGF0dHJUd2Vlbk5TIDogYXR0clR3ZWVuKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cbiIsImltcG9ydCB7Z2V0LCBpbml0fSBmcm9tIFwiLi9zY2hlZHVsZVwiO1xuXG5mdW5jdGlvbiBkZWxheUZ1bmN0aW9uKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaW5pdCh0aGlzLCBpZCkuZGVsYXkgPSArdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsYXlDb25zdGFudChpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID0gK3ZhbHVlLCBmdW5jdGlvbigpIHtcbiAgICBpbml0KHRoaXMsIGlkKS5kZWxheSA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBkZWxheUZ1bmN0aW9uXG4gICAgICAgICAgOiBkZWxheUNvbnN0YW50KShpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5kZWxheTtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmZ1bmN0aW9uIGR1cmF0aW9uRnVuY3Rpb24oaWQsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmR1cmF0aW9uID0gK3ZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGR1cmF0aW9uQ29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9ICt2YWx1ZSwgZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5kdXJhdGlvbiA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBkdXJhdGlvbkZ1bmN0aW9uXG4gICAgICAgICAgOiBkdXJhdGlvbkNvbnN0YW50KShpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5kdXJhdGlvbjtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmZ1bmN0aW9uIGVhc2VDb25zdGFudChpZCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmVhc2UgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKGVhc2VDb25zdGFudChpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5lYXNlO1xufVxuIiwiaW1wb3J0IHttYXRjaGVyfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCB0aGlzLl9uYW1lLCB0aGlzLl9pZCk7XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fYXR0ciBmcm9tIFwiLi9hdHRyXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9hdHRyVHdlZW4gZnJvbSBcIi4vYXR0clR3ZWVuXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9kZWxheSBmcm9tIFwiLi9kZWxheVwiO1xuaW1wb3J0IHRyYW5zaXRpb25fZHVyYXRpb24gZnJvbSBcIi4vZHVyYXRpb25cIjtcbmltcG9ydCB0cmFuc2l0aW9uX2Vhc2UgZnJvbSBcIi4vZWFzZVwiO1xuaW1wb3J0IHRyYW5zaXRpb25fZmlsdGVyIGZyb20gXCIuL2ZpbHRlclwiO1xuaW1wb3J0IHRyYW5zaXRpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2VcIjtcbmltcG9ydCB0cmFuc2l0aW9uX29uIGZyb20gXCIuL29uXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9yZW1vdmUgZnJvbSBcIi4vcmVtb3ZlXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3RBbGwgZnJvbSBcIi4vc2VsZWN0QWxsXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zZWxlY3Rpb24gZnJvbSBcIi4vc2VsZWN0aW9uXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zdHlsZSBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IHRyYW5zaXRpb25fc3R5bGVUd2VlbiBmcm9tIFwiLi9zdHlsZVR3ZWVuXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90ZXh0IGZyb20gXCIuL3RleHRcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3RyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fdHdlZW4gZnJvbSBcIi4vdHdlZW5cIjtcblxudmFyIGlkID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zaXRpb24oZ3JvdXBzLCBwYXJlbnRzLCBuYW1lLCBpZCkge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xuICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgdGhpcy5faWQgPSBpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNpdGlvbihuYW1lKSB7XG4gIHJldHVybiBzZWxlY3Rpb24oKS50cmFuc2l0aW9uKG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3SWQoKSB7XG4gIHJldHVybiArK2lkO1xufVxuXG52YXIgc2VsZWN0aW9uX3Byb3RvdHlwZSA9IHNlbGVjdGlvbi5wcm90b3R5cGU7XG5cblRyYW5zaXRpb24ucHJvdG90eXBlID0gdHJhbnNpdGlvbi5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUcmFuc2l0aW9uLFxuICBzZWxlY3Q6IHRyYW5zaXRpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHRyYW5zaXRpb25fc2VsZWN0QWxsLFxuICBmaWx0ZXI6IHRyYW5zaXRpb25fZmlsdGVyLFxuICBtZXJnZTogdHJhbnNpdGlvbl9tZXJnZSxcbiAgc2VsZWN0aW9uOiB0cmFuc2l0aW9uX3NlbGVjdGlvbixcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbl90cmFuc2l0aW9uLFxuICBjYWxsOiBzZWxlY3Rpb25fcHJvdG90eXBlLmNhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGUsXG4gIHNpemU6IHNlbGVjdGlvbl9wcm90b3R5cGUuc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9wcm90b3R5cGUuZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9wcm90b3R5cGUuZWFjaCxcbiAgb246IHRyYW5zaXRpb25fb24sXG4gIGF0dHI6IHRyYW5zaXRpb25fYXR0cixcbiAgYXR0clR3ZWVuOiB0cmFuc2l0aW9uX2F0dHJUd2VlbixcbiAgc3R5bGU6IHRyYW5zaXRpb25fc3R5bGUsXG4gIHN0eWxlVHdlZW46IHRyYW5zaXRpb25fc3R5bGVUd2VlbixcbiAgdGV4dDogdHJhbnNpdGlvbl90ZXh0LFxuICByZW1vdmU6IHRyYW5zaXRpb25fcmVtb3ZlLFxuICB0d2VlbjogdHJhbnNpdGlvbl90d2VlbixcbiAgZGVsYXk6IHRyYW5zaXRpb25fZGVsYXksXG4gIGR1cmF0aW9uOiB0cmFuc2l0aW9uX2R1cmF0aW9uLFxuICBlYXNlOiB0cmFuc2l0aW9uX2Vhc2Vcbn07XG4iLCJpbXBvcnQge2NvbG9yfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGVOdW1iZXIsIGludGVycG9sYXRlUmdiLCBpbnRlcnBvbGF0ZVN0cmluZ30gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGM7XG4gIHJldHVybiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIgPyBpbnRlcnBvbGF0ZU51bWJlclxuICAgICAgOiBiIGluc3RhbmNlb2YgY29sb3IgPyBpbnRlcnBvbGF0ZVJnYlxuICAgICAgOiAoYyA9IGNvbG9yKGIpKSA/IChiID0gYywgaW50ZXJwb2xhdGVSZ2IpXG4gICAgICA6IGludGVycG9sYXRlU3RyaW5nKShhLCBiKTtcbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICBpZiAodHJhbnNpdGlvbi5faWQgIT09IHRoaXMuX2lkKSB0aHJvdyBuZXcgRXJyb3I7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHRyYW5zaXRpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKG1lcmdlcywgdGhpcy5fcGFyZW50cywgdGhpcy5fbmFtZSwgdGhpcy5faWQpO1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldCwgaW5pdH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZnVuY3Rpb24gc3RhcnQobmFtZSkge1xuICByZXR1cm4gKG5hbWUgKyBcIlwiKS50cmltKCkuc3BsaXQoL158XFxzKy8pLmV2ZXJ5KGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuICF0IHx8IHQgPT09IFwic3RhcnRcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uRnVuY3Rpb24oaWQsIG5hbWUsIGxpc3RlbmVyKSB7XG4gIHZhciBvbjAsIG9uMSwgc2l0ID0gc3RhcnQobmFtZSkgPyBpbml0IDogc2V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2l0KHRoaXMsIGlkKSxcbiAgICAgICAgb24gPSBzY2hlZHVsZS5vbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgYSBkaXNwYXRjaCB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2XigJlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAob24gIT09IG9uMCkgKG9uMSA9IChvbjAgPSBvbikuY29weSgpKS5vbihuYW1lLCBsaXN0ZW5lcik7XG5cbiAgICBzY2hlZHVsZS5vbiA9IG9uMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyXG4gICAgICA/IGdldCh0aGlzLm5vZGUoKSwgaWQpLm9uLm9uKG5hbWUpXG4gICAgICA6IHRoaXMuZWFjaChvbkZ1bmN0aW9uKGlkLCBuYW1lLCBsaXN0ZW5lcikpO1xufVxuIiwiZnVuY3Rpb24gcmVtb3ZlRnVuY3Rpb24oaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLl9fdHJhbnNpdGlvbikgaWYgKCtpICE9PSBpZCkgcmV0dXJuO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm9uKFwiZW5kLnJlbW92ZVwiLCByZW1vdmVGdW5jdGlvbih0aGlzLl9pZCkpO1xufVxuIiwiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge3RpbWVyLCB0aW1lb3V0fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGVtcHR5T24gPSBkaXNwYXRjaChcInN0YXJ0XCIsIFwiZW5kXCIsIFwiaW50ZXJydXB0XCIpO1xudmFyIGVtcHR5VHdlZW4gPSBbXTtcblxuZXhwb3J0IHZhciBDUkVBVEVEID0gMDtcbmV4cG9ydCB2YXIgU0NIRURVTEVEID0gMTtcbmV4cG9ydCB2YXIgU1RBUlRJTkcgPSAyO1xuZXhwb3J0IHZhciBTVEFSVEVEID0gMztcbmV4cG9ydCB2YXIgUlVOTklORyA9IDQ7XG5leHBvcnQgdmFyIEVORElORyA9IDU7XG5leHBvcnQgdmFyIEVOREVEID0gNjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSwgaWQsIGluZGV4LCBncm91cCwgdGltaW5nKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgaWYgKCFzY2hlZHVsZXMpIG5vZGUuX190cmFuc2l0aW9uID0ge307XG4gIGVsc2UgaWYgKGlkIGluIHNjaGVkdWxlcykgcmV0dXJuO1xuICBjcmVhdGUobm9kZSwgaWQsIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGluZGV4OiBpbmRleCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIGdyb3VwOiBncm91cCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIG9uOiBlbXB0eU9uLFxuICAgIHR3ZWVuOiBlbXB0eVR3ZWVuLFxuICAgIHRpbWU6IHRpbWluZy50aW1lLFxuICAgIGRlbGF5OiB0aW1pbmcuZGVsYXksXG4gICAgZHVyYXRpb246IHRpbWluZy5kdXJhdGlvbixcbiAgICBlYXNlOiB0aW1pbmcuZWFzZSxcbiAgICB0aW1lcjogbnVsbCxcbiAgICBzdGF0ZTogQ1JFQVRFRFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gQ1JFQVRFRCkgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgc2NoZWR1bGVkXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gU1RBUlRJTkcpIHRocm93IG5ldyBFcnJvcihcInRvbyBsYXRlOyBhbHJlYWR5IHN0YXJ0ZWRcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldChub2RlLCBpZCkge1xuICB2YXIgc2NoZWR1bGUgPSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgaWYgKCFzY2hlZHVsZSB8fCAhKHNjaGVkdWxlID0gc2NoZWR1bGVbaWRdKSkgdGhyb3cgbmV3IEVycm9yKFwidHJhbnNpdGlvbiBub3QgZm91bmRcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKG5vZGUsIGlkLCBzZWxmKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbixcbiAgICAgIHR3ZWVuO1xuXG4gIC8vIEluaXRpYWxpemUgdGhlIHNlbGYgdGltZXIgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBjcmVhdGVkLlxuICAvLyBOb3RlIHRoZSBhY3R1YWwgZGVsYXkgaXMgbm90IGtub3duIHVudGlsIHRoZSBmaXJzdCBjYWxsYmFjayFcbiAgc2NoZWR1bGVzW2lkXSA9IHNlbGY7XG4gIHNlbGYudGltZXIgPSB0aW1lcihzY2hlZHVsZSwgMCwgc2VsZi50aW1lKTtcblxuICBmdW5jdGlvbiBzY2hlZHVsZShlbGFwc2VkKSB7XG4gICAgc2VsZi5zdGF0ZSA9IFNDSEVEVUxFRDtcbiAgICBzZWxmLnRpbWVyLnJlc3RhcnQoc3RhcnQsIHNlbGYuZGVsYXksIHNlbGYudGltZSk7XG5cbiAgICAvLyBJZiB0aGUgZWxhcHNlZCBkZWxheSBpcyBsZXNzIHRoYW4gb3VyIGZpcnN0IHNsZWVwLCBzdGFydCBpbW1lZGlhdGVseS5cbiAgICBpZiAoc2VsZi5kZWxheSA8PSBlbGFwc2VkKSBzdGFydChlbGFwc2VkIC0gc2VsZi5kZWxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydChlbGFwc2VkKSB7XG4gICAgdmFyIGksIGosIG4sIG87XG5cbiAgICAvLyBJZiB0aGUgc3RhdGUgaXMgbm90IFNDSEVEVUxFRCwgdGhlbiB3ZSBwcmV2aW91c2x5IGVycm9yZWQgb24gc3RhcnQuXG4gICAgaWYgKHNlbGYuc3RhdGUgIT09IFNDSEVEVUxFRCkgcmV0dXJuIHN0b3AoKTtcblxuICAgIGZvciAoaSBpbiBzY2hlZHVsZXMpIHtcbiAgICAgIG8gPSBzY2hlZHVsZXNbaV07XG4gICAgICBpZiAoby5uYW1lICE9PSBzZWxmLm5hbWUpIGNvbnRpbnVlO1xuXG4gICAgICAvLyBXaGlsZSB0aGlzIGVsZW1lbnQgYWxyZWFkeSBoYXMgYSBzdGFydGluZyB0cmFuc2l0aW9uIGR1cmluZyB0aGlzIGZyYW1lLFxuICAgICAgLy8gZGVmZXIgc3RhcnRpbmcgYW4gaW50ZXJydXB0aW5nIHRyYW5zaXRpb24gdW50aWwgdGhhdCB0cmFuc2l0aW9uIGhhcyBhXG4gICAgICAvLyBjaGFuY2UgdG8gdGljayAoYW5kIHBvc3NpYmx5IGVuZCk7IHNlZSBkMy9kMy10cmFuc2l0aW9uIzU0IVxuICAgICAgaWYgKG8uc3RhdGUgPT09IFNUQVJURUQpIHJldHVybiB0aW1lb3V0KHN0YXJ0KTtcblxuICAgICAgLy8gSW50ZXJydXB0IHRoZSBhY3RpdmUgdHJhbnNpdGlvbiwgaWYgYW55LlxuICAgICAgLy8gRGlzcGF0Y2ggdGhlIGludGVycnVwdCBldmVudC5cbiAgICAgIGlmIChvLnN0YXRlID09PSBSVU5OSU5HKSB7XG4gICAgICAgIG8uc3RhdGUgPSBFTkRFRDtcbiAgICAgICAgby50aW1lci5zdG9wKCk7XG4gICAgICAgIG8ub24uY2FsbChcImludGVycnVwdFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBvLmluZGV4LCBvLmdyb3VwKTtcbiAgICAgICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FuY2VsIGFueSBwcmUtZW1wdGVkIHRyYW5zaXRpb25zLiBObyBpbnRlcnJ1cHQgZXZlbnQgaXMgZGlzcGF0Y2hlZFxuICAgICAgLy8gYmVjYXVzZSB0aGUgY2FuY2VsbGVkIHRyYW5zaXRpb25zIG5ldmVyIHN0YXJ0ZWQuIE5vdGUgdGhhdCB0aGlzIGFsc29cbiAgICAgIC8vIHJlbW92ZXMgdGhpcyB0cmFuc2l0aW9uIGZyb20gdGhlIHBlbmRpbmcgbGlzdCFcbiAgICAgIGVsc2UgaWYgKCtpIDwgaWQpIHtcbiAgICAgICAgby5zdGF0ZSA9IEVOREVEO1xuICAgICAgICBvLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWZlciB0aGUgZmlyc3QgdGljayB0byBlbmQgb2YgdGhlIGN1cnJlbnQgZnJhbWU7IHNlZSBkMy9kMyMxNTc2LlxuICAgIC8vIE5vdGUgdGhlIHRyYW5zaXRpb24gbWF5IGJlIGNhbmNlbGVkIGFmdGVyIHN0YXJ0IGFuZCBiZWZvcmUgdGhlIGZpcnN0IHRpY2shXG4gICAgLy8gTm90ZSB0aGlzIG11c3QgYmUgc2NoZWR1bGVkIGJlZm9yZSB0aGUgc3RhcnQgZXZlbnQ7IHNlZSBkMy9kMy10cmFuc2l0aW9uIzE2IVxuICAgIC8vIEFzc3VtaW5nIHRoaXMgaXMgc3VjY2Vzc2Z1bCwgc3Vic2VxdWVudCBjYWxsYmFja3MgZ28gc3RyYWlnaHQgdG8gdGljay5cbiAgICB0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHNlbGYuc3RhdGUgPT09IFNUQVJURUQpIHtcbiAgICAgICAgc2VsZi5zdGF0ZSA9IFJVTk5JTkc7XG4gICAgICAgIHNlbGYudGltZXIucmVzdGFydCh0aWNrLCBzZWxmLmRlbGF5LCBzZWxmLnRpbWUpO1xuICAgICAgICB0aWNrKGVsYXBzZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGlzcGF0Y2ggdGhlIHN0YXJ0IGV2ZW50LlxuICAgIC8vIE5vdGUgdGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIHRoZSB0d2VlbiBhcmUgaW5pdGlhbGl6ZWQuXG4gICAgc2VsZi5zdGF0ZSA9IFNUQVJUSU5HO1xuICAgIHNlbGYub24uY2FsbChcInN0YXJ0XCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApO1xuICAgIGlmIChzZWxmLnN0YXRlICE9PSBTVEFSVElORykgcmV0dXJuOyAvLyBpbnRlcnJ1cHRlZFxuICAgIHNlbGYuc3RhdGUgPSBTVEFSVEVEO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgdHdlZW4sIGRlbGV0aW5nIG51bGwgdHdlZW4uXG4gICAgdHdlZW4gPSBuZXcgQXJyYXkobiA9IHNlbGYudHdlZW4ubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwLCBqID0gLTE7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChvID0gc2VsZi50d2VlbltpXS52YWx1ZS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApKSB7XG4gICAgICAgIHR3ZWVuWysral0gPSBvO1xuICAgICAgfVxuICAgIH1cbiAgICB0d2Vlbi5sZW5ndGggPSBqICsgMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xuICAgIHZhciB0ID0gZWxhcHNlZCA8IHNlbGYuZHVyYXRpb24gPyBzZWxmLmVhc2UuY2FsbChudWxsLCBlbGFwc2VkIC8gc2VsZi5kdXJhdGlvbikgOiAoc2VsZi50aW1lci5yZXN0YXJ0KHN0b3ApLCBzZWxmLnN0YXRlID0gRU5ESU5HLCAxKSxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gdHdlZW4ubGVuZ3RoO1xuXG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIHR3ZWVuW2ldLmNhbGwobnVsbCwgdCk7XG4gICAgfVxuXG4gICAgLy8gRGlzcGF0Y2ggdGhlIGVuZCBldmVudC5cbiAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gRU5ESU5HKSB7XG4gICAgICBzZWxmLm9uLmNhbGwoXCJlbmRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCk7XG4gICAgICBzdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBzZWxmLnN0YXRlID0gRU5ERUQ7XG4gICAgc2VsZi50aW1lci5zdG9wKCk7XG4gICAgZGVsZXRlIHNjaGVkdWxlc1tpZF07XG4gICAgZm9yICh2YXIgaSBpbiBzY2hlZHVsZXMpIHJldHVybjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGRlbGV0ZSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtzZWxlY3Rvcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgICAgc2NoZWR1bGUoc3ViZ3JvdXBbaV0sIG5hbWUsIGlkLCBpLCBzdWJncm91cCwgZ2V0KG5vZGUsIGlkKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3RvckFsbH0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGZvciAodmFyIGNoaWxkcmVuID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApLCBjaGlsZCwgaW5oZXJpdCA9IGdldChub2RlLCBpZCksIGsgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBrIDwgbDsgKytrKSB7XG4gICAgICAgICAgaWYgKGNoaWxkID0gY2hpbGRyZW5ba10pIHtcbiAgICAgICAgICAgIHNjaGVkdWxlKGNoaWxkLCBuYW1lLCBpZCwgaywgY2hpbGRyZW4sIGluaGVyaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdWJncm91cHMucHVzaChjaGlsZHJlbik7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCBwYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuXG52YXIgU2VsZWN0aW9uID0gc2VsZWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2dyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJpbXBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtQ3NzIGFzIGludGVycG9sYXRlVHJhbnNmb3JtfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7c3R5bGV9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW5cIjtcbmltcG9ydCBpbnRlcnBvbGF0ZSBmcm9tIFwiLi9pbnRlcnBvbGF0ZVwiO1xuXG5mdW5jdGlvbiBzdHlsZVJlbW92ZShuYW1lLCBpbnRlcnBvbGF0ZSkge1xuICB2YXIgdmFsdWUwMCxcbiAgICAgIHZhbHVlMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUwID0gc3R5bGUodGhpcywgbmFtZSksXG4gICAgICAgIHZhbHVlMSA9ICh0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpLCBzdHlsZSh0aGlzLCBuYW1lKSk7XG4gICAgcmV0dXJuIHZhbHVlMCA9PT0gdmFsdWUxID8gbnVsbFxuICAgICAgICA6IHZhbHVlMCA9PT0gdmFsdWUwMCAmJiB2YWx1ZTEgPT09IHZhbHVlMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZSh2YWx1ZTAwID0gdmFsdWUwLCB2YWx1ZTEwID0gdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVSZW1vdmVFbmQobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciB2YWx1ZTAwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMCA9IHN0eWxlKHRoaXMsIG5hbWUpO1xuICAgIHJldHVybiB2YWx1ZTAgPT09IHZhbHVlMSA/IG51bGxcbiAgICAgICAgOiB2YWx1ZTAgPT09IHZhbHVlMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZSh2YWx1ZTAwID0gdmFsdWUwLCB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUZ1bmN0aW9uKG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgdmFsdWUwMCxcbiAgICAgIHZhbHVlMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUwID0gc3R5bGUodGhpcywgbmFtZSksXG4gICAgICAgIHZhbHVlMSA9IHZhbHVlKHRoaXMpO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgdmFsdWUxID0gKHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSksIHN0eWxlKHRoaXMsIG5hbWUpKTtcbiAgICByZXR1cm4gdmFsdWUwID09PSB2YWx1ZTEgPyBudWxsXG4gICAgICAgIDogdmFsdWUwID09PSB2YWx1ZTAwICYmIHZhbHVlMSA9PT0gdmFsdWUxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHZhbHVlMDAgPSB2YWx1ZTAsIHZhbHVlMTAgPSB2YWx1ZTEpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGkgPSAobmFtZSArPSBcIlwiKSA9PT0gXCJ0cmFuc2Zvcm1cIiA/IGludGVycG9sYXRlVHJhbnNmb3JtIDogaW50ZXJwb2xhdGU7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdGhpc1xuICAgICAgICAgIC5zdHlsZVR3ZWVuKG5hbWUsIHN0eWxlUmVtb3ZlKG5hbWUsIGkpKVxuICAgICAgICAgIC5vbihcImVuZC5zdHlsZS5cIiArIG5hbWUsIHN0eWxlUmVtb3ZlRW5kKG5hbWUpKVxuICAgICAgOiB0aGlzLnN0eWxlVHdlZW4obmFtZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHN0eWxlRnVuY3Rpb24obmFtZSwgaSwgdHdlZW5WYWx1ZSh0aGlzLCBcInN0eWxlLlwiICsgbmFtZSwgdmFsdWUpKVxuICAgICAgICAgIDogc3R5bGVDb25zdGFudChuYW1lLCBpLCB2YWx1ZSArIFwiXCIpLCBwcmlvcml0eSk7XG59XG4iLCJmdW5jdGlvbiBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMsIGkgPSB2YWx1ZS5hcHBseShub2RlLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBpICYmIGZ1bmN0aW9uKHQpIHtcbiAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgaSh0KSwgcHJpb3JpdHkpO1xuICAgIH07XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHZhciBrZXkgPSBcInN0eWxlLlwiICsgKG5hbWUgKz0gXCJcIik7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSA9PSBudWxsID8gXCJcIiA6IHByaW9yaXR5KSk7XG59XG4iLCJpbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuXCI7XG5cbmZ1bmN0aW9uIHRleHRDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTEgPSB2YWx1ZSh0aGlzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWUxID09IG51bGwgPyBcIlwiIDogdmFsdWUxO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdGhpcy50d2VlbihcInRleHRcIiwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gdGV4dEZ1bmN0aW9uKHR3ZWVuVmFsdWUodGhpcywgXCJ0ZXh0XCIsIHZhbHVlKSlcbiAgICAgIDogdGV4dENvbnN0YW50KHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiKSk7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb24sIG5ld0lkfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQwID0gdGhpcy5faWQsXG4gICAgICBpZDEgPSBuZXdJZCgpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHZhciBpbmhlcml0ID0gZ2V0KG5vZGUsIGlkMCk7XG4gICAgICAgIHNjaGVkdWxlKG5vZGUsIG5hbWUsIGlkMSwgaSwgZ3JvdXAsIHtcbiAgICAgICAgICB0aW1lOiBpbmhlcml0LnRpbWUgKyBpbmhlcml0LmRlbGF5ICsgaW5oZXJpdC5kdXJhdGlvbixcbiAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogaW5oZXJpdC5kdXJhdGlvbixcbiAgICAgICAgICBlYXNlOiBpbmhlcml0LmVhc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKGdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQxKTtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmZ1bmN0aW9uIHR3ZWVuUmVtb3ZlKGlkLCBuYW1lKSB7XG4gIHZhciB0d2VlbjAsIHR3ZWVuMTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIHR3ZWVuID0gc2NoZWR1bGUudHdlZW47XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIHR3ZWVuIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIHR3ZWVuIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmICh0d2VlbiAhPT0gdHdlZW4wKSB7XG4gICAgICB0d2VlbjEgPSB0d2VlbjAgPSB0d2VlbjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gdHdlZW4xLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAodHdlZW4xW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICB0d2VlbjEgPSB0d2VlbjEuc2xpY2UoKTtcbiAgICAgICAgICB0d2VlbjEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2NoZWR1bGUudHdlZW4gPSB0d2VlbjE7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHR3ZWVuRnVuY3Rpb24oaWQsIG5hbWUsIHZhbHVlKSB7XG4gIHZhciB0d2VlbjAsIHR3ZWVuMTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICB0d2VlbiA9IHNjaGVkdWxlLnR3ZWVuO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCB0d2VlbiB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCB0d2VlbiBhbmQgd2XigJlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAodHdlZW4gIT09IHR3ZWVuMCkge1xuICAgICAgdHdlZW4xID0gKHR3ZWVuMCA9IHR3ZWVuKS5zbGljZSgpO1xuICAgICAgZm9yICh2YXIgdCA9IHtuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWV9LCBpID0gMCwgbiA9IHR3ZWVuMS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKHR3ZWVuMVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgdHdlZW4xW2ldID0gdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGkgPT09IG4pIHR3ZWVuMS5wdXNoKHQpO1xuICAgIH1cblxuICAgIHNjaGVkdWxlLnR3ZWVuID0gdHdlZW4xO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICBuYW1lICs9IFwiXCI7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIHR3ZWVuID0gZ2V0KHRoaXMubm9kZSgpLCBpZCkudHdlZW47XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSB0d2Vlbi5sZW5ndGgsIHQ7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgodCA9IHR3ZWVuW2ldKS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0LnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHZhbHVlID09IG51bGwgPyB0d2VlblJlbW92ZSA6IHR3ZWVuRnVuY3Rpb24pKGlkLCBuYW1lLCB2YWx1ZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHdlZW5WYWx1ZSh0cmFuc2l0aW9uLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgaWQgPSB0cmFuc2l0aW9uLl9pZDtcblxuICB0cmFuc2l0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKTtcbiAgICAoc2NoZWR1bGUudmFsdWUgfHwgKHNjaGVkdWxlLnZhbHVlID0ge30pKVtuYW1lXSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIGdldChub2RlLCBpZCkudmFsdWVbbmFtZV07XG4gIH07XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wieWVhclwiOjIwMDEsXCJpbmNvbWVcIjoxOTkwMjAwMDAwMDAwLFwic3BlbmRpbmdcIjoxODYzMDQwMDAwMDAwLFwic3VycGx1c19kZWZpY2l0XCI6MTI3MTY1MDAwMDAwLFwiaW50ZXJlc3RfcHVibGljX2RlYnRcIjozNTk1MDgwMDAwMDAsXCJzb3VyY2VfdXJsXCI6XCJodHRwczovL3d3dy5maXNjYWwudHJlYXN1cnkuZ292L2ZzcmVwb3J0cy9ycHQvbXRoVHJlYXNTdG10L210czA5MDEucGRmXCIsXCJnZHBcIjoxMDU5NjMwMDAwMDAwMCxcImluY29tZV9nZHBcIjowLjE5LFwic3BlbmRpbmdfZ2RwXCI6MC4xOCxcInN1cnBsdXNfZGVmaWNpdF9nZHBcIjowLjAxLFwiZ2RwX3VybFwiOlwiaHR0cHM6Ly9mcmVkLnN0bG91aXNmZWQub3JnL3Nlcmllcy9HRFBcIixcImRlYnRcIjo1ODA3NDYwMDAwMDAwLFwiZGVidF91cmxcIjpcImZ0cDovL2Z0cC5wdWJsaWNkZWJ0LnRyZWFzLmdvdi9vcGQvb3BkczA5MjAwMS5wZGZcIixcImludF9yYXRlXCI6MC4wNjYzLFwiaW50X3JhdGVfdXJsXCI6XCJodHRwczovL3d3dy50cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yYXRlcy9wZC9hdmcvMjAwMS8yMDAxXzA5Lmh0bVwifSx7XCJ5ZWFyXCI6MjAwOCxcImluY29tZVwiOjI1MjM4NjAwMDAwMDAsXCJzcGVuZGluZ1wiOjI5Nzg2NjAwMDAwMDAsXCJzdXJwbHVzX2RlZmljaXRcIjotNDU0ODA2MDAwMDAwLFwiaW50ZXJlc3RfcHVibGljX2RlYnRcIjo0NTExNTQwMDAwMDAsXCJzb3VyY2VfdXJsXCI6XCJodHRwczovL3d3dy5maXNjYWwudHJlYXN1cnkuZ292L2ZzcmVwb3J0cy9ycHQvbXRoVHJlYXNTdG10L210czA5MDgucGRmXCIsXCJnZHBcIjoxNDgzNTIwMDAwMDAwMCxcImluY29tZV9nZHBcIjowLjE3LFwic3BlbmRpbmdfZ2RwXCI6MC4yLFwic3VycGx1c19kZWZpY2l0X2dkcFwiOi0wLjAzLFwiZ2RwX3VybFwiOlwiaHR0cHM6Ly9mcmVkLnN0bG91aXNmZWQub3JnL3Nlcmllcy9HRFBcIixcImRlYnRcIjoxMDAyNDcwMDAwMDAwMCxcImRlYnRfdXJsXCI6XCJmdHA6Ly9mdHAucHVibGljZGVidC50cmVhcy5nb3Yvb3BkL29wZHMwOTIwMDgucGRmXCIsXCJpbnRfcmF0ZVwiOjAuMDUwMSxcImludF9yYXRlX3VybFwiOlwiaHR0cHM6Ly93d3cudHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmF0ZXMvcGQvYXZnLzIwMDgvMjAwOF8wOS5odG1cIn0se1wieWVhclwiOjIwMDksXCJpbmNvbWVcIjoyMTA0NjEwMDAwMDAwLFwic3BlbmRpbmdcIjozNTIxNzMwMDAwMDAwLFwic3VycGx1c19kZWZpY2l0XCI6LTE0MTcxMjAwMDAwMDAsXCJpbnRlcmVzdF9wdWJsaWNfZGVidFwiOjM4MzM2NTAwMDAwMCxcInNvdXJjZV91cmxcIjpcImh0dHBzOi8vd3d3LmZpc2NhbC50cmVhc3VyeS5nb3YvZnNyZXBvcnRzL3JwdC9tdGhUcmVhc1N0bXQvbXRzMDkwOS5wZGZcIixcImdkcFwiOjE0NDIwMzAwMDAwMDAwLFwiaW5jb21lX2dkcFwiOjAuMTUsXCJzcGVuZGluZ19nZHBcIjowLjI0LFwic3VycGx1c19kZWZpY2l0X2dkcFwiOi0wLjEsXCJnZHBfdXJsXCI6XCJodHRwczovL2ZyZWQuc3Rsb3Vpc2ZlZC5vcmcvc2VyaWVzL0dEUFwiLFwiZGVidFwiOjExOTA5ODAwMDAwMDAwLFwiZGVidF91cmxcIjpcImh0dHBzOi8vdHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmVwb3J0cy9wZC9tc3BkLzIwMDkvb3BkczA5MjAwOS5wZGZcIixcImludF9yYXRlXCI6MC4wNDE5LFwiaW50X3JhdGVfdXJsXCI6XCJodHRwczovL3d3dy50cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yYXRlcy9wZC9hdmcvMjAwOS8yMDA5XzA5Lmh0bVwifSx7XCJ5ZWFyXCI6MjAxMCxcImluY29tZVwiOjIxNjE3NTAwMDAwMDAsXCJzcGVuZGluZ1wiOjM0NTU4NDAwMDAwMDAsXCJzdXJwbHVzX2RlZmljaXRcIjotMTI5NDA5MDAwMDAwMCxcImludGVyZXN0X3B1YmxpY19kZWJ0XCI6NDEzOTU1MDAwMDAwLFwic291cmNlX3VybFwiOlwiaHR0cHM6Ly93d3cuZmlzY2FsLnRyZWFzdXJ5Lmdvdi9mc3JlcG9ydHMvcnB0L210aFRyZWFzU3RtdC9tdHMwOTEwLnBkZlwiLFwiZ2RwXCI6MTUwNzk5MDAwMDAwMDAsXCJpbmNvbWVfZ2RwXCI6MC4xNCxcInNwZW5kaW5nX2dkcFwiOjAuMjMsXCJzdXJwbHVzX2RlZmljaXRfZ2RwXCI6LTAuMDksXCJnZHBfdXJsXCI6XCJodHRwczovL2ZyZWQuc3Rsb3Vpc2ZlZC5vcmcvc2VyaWVzL0dEUFwiLFwiZGVidFwiOjEzNTYxNjAwMDAwMDAwLFwiZGVidF91cmxcIjpcImh0dHBzOi8vdHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmVwb3J0cy9wZC9tc3BkLzIwMTAvb3BkczA5MjAxMC5wZGZcIixcImludF9yYXRlXCI6MC4wMzM1LFwiaW50X3JhdGVfdXJsXCI6XCJodHRwczovL3d3dy50cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yYXRlcy9wZC9hdmcvMjAxMC8yMDEwXzA5Lmh0bVwifSx7XCJ5ZWFyXCI6MjAxMSxcImluY29tZVwiOjIzMDI1MDAwMDAwMDAsXCJzcGVuZGluZ1wiOjM2MDExMTAwMDAwMDAsXCJzdXJwbHVzX2RlZmljaXRcIjotMTI5ODYxMDAwMDAwMCxcImludGVyZXN0X3B1YmxpY19kZWJ0XCI6NDU0MDE1MDAwMDAwLFwic291cmNlX3VybFwiOlwiaHR0cHM6Ly93d3cuZmlzY2FsLnRyZWFzdXJ5Lmdvdi9mc3JlcG9ydHMvcnB0L210aFRyZWFzU3RtdC9tdHMwOTExLnBkZlwiLFwiZ2RwXCI6MTU1OTE5MDAwMDAwMDAsXCJpbmNvbWVfZ2RwXCI6MC4xNSxcInNwZW5kaW5nX2dkcFwiOjAuMjMsXCJzdXJwbHVzX2RlZmljaXRfZ2RwXCI6LTAuMDgsXCJnZHBfdXJsXCI6XCJodHRwczovL2ZyZWQuc3Rsb3Vpc2ZlZC5vcmcvc2VyaWVzL0dEUFwiLFwiZGVidFwiOjE0NzkwMzAwMDAwMDAwLFwiZGVidF91cmxcIjpcImh0dHBzOi8vdHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmVwb3J0cy9wZC9tc3BkLzIwMTEvb3BkczA5MjAxMS5wZGZcIixcImludF9yYXRlXCI6MC4wMzA1LFwiaW50X3JhdGVfdXJsXCI6XCJodHRwczovL3d3dy50cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yYXRlcy9wZC9hdmcvMjAxMS8yMDExXzA5Lmh0bVwifSx7XCJ5ZWFyXCI6MjAxMixcImluY29tZVwiOjI0NDkwOTAwMDAwMDAsXCJzcGVuZGluZ1wiOjM1Mzg0NTAwMDAwMDAsXCJzdXJwbHVzX2RlZmljaXRcIjotMTA4OTM1MDAwMDAwMCxcImludGVyZXN0X3B1YmxpY19kZWJ0XCI6MzU5MjQxMDAwMDAwLFwic291cmNlX3VybFwiOlwiaHR0cHM6Ly93d3cuZmlzY2FsLnRyZWFzdXJ5Lmdvdi9mc3JlcG9ydHMvcnB0L210aFRyZWFzU3RtdC9tdHMwOTEyLnBkZlwiLFwiZ2RwXCI6MTYyNTcyMDAwMDAwMDAsXCJpbmNvbWVfZ2RwXCI6MC4xNSxcInNwZW5kaW5nX2dkcFwiOjAuMjIsXCJzdXJwbHVzX2RlZmljaXRfZ2RwXCI6LTAuMDcsXCJnZHBfdXJsXCI6XCJodHRwczovL2ZyZWQuc3Rsb3Vpc2ZlZC5vcmcvc2VyaWVzL0dEUFwiLFwiZGVidFwiOjE2MDY2MjAwMDAwMDAwLFwiZGVidF91cmxcIjpcImh0dHBzOi8vdHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmVwb3J0cy9wZC9tc3BkLzIwMTIvb3BkczA5MjAxMi5wZGZcIixcImludF9yYXRlXCI6MC4wMjg5LFwiaW50X3JhdGVfdXJsXCI6XCJodHRwczovL3d3dy50cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yYXRlcy9wZC9hdmcvMjAxMi8yMDEyXzA5Lmh0bVwifSx7XCJ5ZWFyXCI6MjAxMyxcImluY29tZVwiOjI3NzM5ODAwMDAwMDAsXCJzcGVuZGluZ1wiOjM0NTQyNTAwMDAwMDAsXCJzdXJwbHVzX2RlZmljaXRcIjotNjgwMjc2MDAwMDAwLFwiaW50ZXJlc3RfcHVibGljX2RlYnRcIjo0MTU2NzAwMDAwMDAsXCJzb3VyY2VfdXJsXCI6XCJodHRwczovL3d3dy5maXNjYWwudHJlYXN1cnkuZ292L2ZzcmVwb3J0cy9ycHQvbXRoVHJlYXNTdG10L210czA5MTMucGRmXCIsXCJnZHBcIjoxNjg0ODcwMDAwMDAwMCxcImluY29tZV9nZHBcIjowLjE2LFwic3BlbmRpbmdfZ2RwXCI6MC4yMSxcInN1cnBsdXNfZGVmaWNpdF9nZHBcIjotMC4wNCxcImdkcF91cmxcIjpcImh0dHBzOi8vZnJlZC5zdGxvdWlzZmVkLm9yZy9zZXJpZXMvR0RQXCIsXCJkZWJ0XCI6MTY3MzgyMDAwMDAwMDAsXCJkZWJ0X3VybFwiOlwiaHR0cHM6Ly90cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yZXBvcnRzL3BkL21zcGQvMjAxMy9vcGRzMDkyMDEzLnBkZlwiLFwiaW50X3JhdGVcIjowLjAyNTksXCJpbnRfcmF0ZV91cmxcIjpcImh0dHBzOi8vd3d3LnRyZWFzdXJ5ZGlyZWN0Lmdvdi9nb3Z0L3JhdGVzL3BkL2F2Zy8yMDEzLzIwMTNfMDkuaHRtXCJ9LHtcInllYXJcIjoyMDE0LFwiaW5jb21lXCI6MzAyMDg1MDAwMDAwMCxcInNwZW5kaW5nXCI6MzUwNDIwMDAwMDAwMCxcInN1cnBsdXNfZGVmaWNpdFwiOi00ODMzNTAwMDAwMDAsXCJpbnRlcmVzdF9wdWJsaWNfZGVidFwiOjQyOTU2ODAwMDAwMCxcInNvdXJjZV91cmxcIjpcImh0dHBzOi8vd3d3LmZpc2NhbC50cmVhc3VyeS5nb3YvZnNyZXBvcnRzL3JwdC9tdGhUcmVhc1N0bXQvbXRzMDkxNC5wZGZcIixcImdkcFwiOjE3NzE5ODAwMDAwMDAwLFwiaW5jb21lX2dkcFwiOjAuMTcsXCJzcGVuZGluZ19nZHBcIjowLjIsXCJzdXJwbHVzX2RlZmljaXRfZ2RwXCI6LTAuMDMsXCJnZHBfdXJsXCI6XCJodHRwczovL2ZyZWQuc3Rsb3Vpc2ZlZC5vcmcvc2VyaWVzL0dEUFwiLFwiZGVidFwiOjE3ODI0MTAwMDAwMDAwLFwiZGVidF91cmxcIjpcImh0dHBzOi8vdHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmVwb3J0cy9wZC9tc3BkLzIwMTQvb3BkczA5MjAxNC5wZGZcIixcImludF9yYXRlXCI6MC4wMjQzLFwiaW50X3JhdGVfdXJsXCI6XCJodHRwczovL3d3dy50cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yYXRlcy9wZC9hdmcvMjAxNC8yMDE0XzA5Lmh0bVwifSx7XCJ5ZWFyXCI6MjAxNSxcImluY29tZVwiOjMyNDg3MjAwMDAwMDAsXCJzcGVuZGluZ1wiOjM3MDI5ODAwMDAwMDAsXCJzdXJwbHVzX2RlZmljaXRcIjotNDU0NTExMDAwMDAwLFwiaW50ZXJlc3RfcHVibGljX2RlYnRcIjo0MDIxODQwMDAwMDAsXCJzb3VyY2VfdXJsXCI6XCJodHRwczovL3d3dy5maXNjYWwudHJlYXN1cnkuZ292L2ZzcmVwb3J0cy9ycHQvbXRoVHJlYXNTdG10L210czA5MTUucGRmXCIsXCJnZHBcIjoxODMzMTEwMDAwMDAwMCxcImluY29tZV9nZHBcIjowLjE4LFwic3BlbmRpbmdfZ2RwXCI6MC4yLFwic3VycGx1c19kZWZpY2l0X2dkcFwiOi0wLjAyLFwiZ2RwX3VybFwiOlwiaHR0cHM6Ly9mcmVkLnN0bG91aXNmZWQub3JnL3Nlcmllcy9HRFBcIixcImRlYnRcIjoxODE1MDYwMDAwMDAwMCxcImRlYnRfdXJsXCI6XCJodHRwczovL3RyZWFzdXJ5ZGlyZWN0Lmdvdi9nb3Z0L3JlcG9ydHMvcGQvbXNwZC8yMDE1L29wZHMwOTIwMTUucGRmXCIsXCJpbnRfcmF0ZVwiOjAuMDI0LFwiaW50X3JhdGVfdXJsXCI6XCJodHRwczovL3d3dy50cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yYXRlcy9wZC9hdmcvMjAxNS8yMDE1XzA5Lmh0bVwifSx7XCJ5ZWFyXCI6MjAxNixcImluY29tZVwiOjMyNjY2OTAwMDAwMDAsXCJzcGVuZGluZ1wiOjM4NTQxMDAwMDAwMDAsXCJzdXJwbHVzX2RlZmljaXRcIjotNTg3NDEyMDAwMDAwLFwiaW50ZXJlc3RfcHVibGljX2RlYnRcIjo0Mjk5NjMwMDAwMDAsXCJzb3VyY2VfdXJsXCI6XCJodHRwczovL3d3dy5maXNjYWwudHJlYXN1cnkuZ292L2ZzcmVwb3J0cy9ycHQvbXRoVHJlYXNTdG10L210czA5MTYucGRmXCIsXCJnZHBcIjoxODc5OTYwMDAwMDAwMCxcImluY29tZV9nZHBcIjowLjE3LFwic3BlbmRpbmdfZ2RwXCI6MC4yMSxcInN1cnBsdXNfZGVmaWNpdF9nZHBcIjotMC4wMyxcImdkcF91cmxcIjpcImh0dHBzOi8vZnJlZC5zdGxvdWlzZmVkLm9yZy9zZXJpZXMvR0RQXCIsXCJkZWJ0XCI6MTk1NzM0MDAwMDAwMDAsXCJkZWJ0X3VybFwiOlwiaHR0cHM6Ly90cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yZXBvcnRzL3BkL21zcGQvMjAxNi9vcGRzMDkyMDE2LnBkZlwiLFwiaW50X3JhdGVcIjowLjAyMzUsXCJpbnRfcmF0ZV91cmxcIjpcImh0dHBzOi8vd3d3LnRyZWFzdXJ5ZGlyZWN0Lmdvdi9nb3Z0L3JhdGVzL3BkL2F2Zy8yMDE2LzIwMTZfMDkuaHRtXCJ9LHtcInllYXJcIjoyMDE3LFwiaW5jb21lXCI6MzMxNDg5MDAwMDAwMCxcInNwZW5kaW5nXCI6Mzk4MDYxMDAwMDAwMCxcInN1cnBsdXNfZGVmaWNpdFwiOi02NjU3MTIwMDAwMDAsXCJpbnRlcmVzdF9wdWJsaWNfZGVidFwiOjQ1Njk1NTAwMDAwMCxcInNvdXJjZV91cmxcIjpcImh0dHBzOi8vd3d3LmZpc2NhbC50cmVhc3VyeS5nb3YvZnNyZXBvcnRzL3JwdC9tdGhUcmVhc1N0bXQvbXRzMDkxNy5wZGZcIixcImdkcFwiOjE5NTg4MTAwMDAwMDAwLFwiaW5jb21lX2dkcFwiOjAuMTcsXCJzcGVuZGluZ19nZHBcIjowLjIsXCJzdXJwbHVzX2RlZmljaXRfZ2RwXCI6LTAuMDMsXCJnZHBfdXJsXCI6XCJodHRwczovL2ZyZWQuc3Rsb3Vpc2ZlZC5vcmcvc2VyaWVzL0dEUFwiLFwiZGVidFwiOjIwMjQ0OTAwMDAwMDAwLFwiZGVidF91cmxcIjpcImh0dHBzOi8vdHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmVwb3J0cy9wZC9tc3BkLzIwMTcvb3BkczA5MjAxNy5wZGZcIixcImludF9yYXRlXCI6MC4wMjIzLFwiaW50X3JhdGVfdXJsXCI6XCJodHRwczovL3d3dy50cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yYXRlcy9wZC9hdmcvMjAxNy8yMDE3XzA5Lmh0bVwifSx7XCJ5ZWFyXCI6bnVsbH1dIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29sb3JzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29sb3JzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbG9ycy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuaW1wb3J0IHsgYXJjLCBwaWUgfSBmcm9tICdkMy1zaGFwZSc7XHJcbmltcG9ydCB7IGZyYWN0aW9uVG9QZXJjZW50LCB0cmFuc2xhdG9yIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2NvbG9ycy5zY3NzJztcclxuXHJcbmNvbnN0IGQzID0geyBzZWxlY3QsIGFyYywgcGllIH0sXHJcbiAgICByYWRpdXMgPSA0NSxcclxuICAgIGFyY0ZuID0gZDMuYXJjKCksXHJcbiAgICBwaWVGbiA9IGQzLnBpZSgpXHJcbiAgICAgICAgLnNvcnQobnVsbClcclxuICAgICAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQ7IH0pO1xyXG5cclxuZnVuY3Rpb24gc2V0QXJjUmFkaXVzKHJhZGl1cykge1xyXG4gICAgYXJjRm4ub3V0ZXJSYWRpdXMocmFkaXVzKVxyXG4gICAgICAgIC5pbm5lclJhZGl1cygocmFkaXVzKSAqIC44KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9udXQoY29udGFpbmVyLCBwZXJjZW50LCBkaWFtZXRlciwgZmlsbENvbG9yKSB7XHJcbiAgICBjb25zdCBkYXRhID0gW3BlcmNlbnQgKiAxMDAsIDEwMCAtIHBlcmNlbnQgKiAxMDBdLFxyXG4gICAgICAgIGcgPSBjb250YWluZXIuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0b3IoZGlhbWV0ZXIgLyAyLCBkaWFtZXRlciAvIDIpKTtcclxuXHJcbiAgICBzZXRBcmNSYWRpdXMoZGlhbWV0ZXIgLyAyKTtcclxuXHJcbiAgICB2YXIgcGllID0gZy5zZWxlY3RBbGwoXCIuYXJjXCIpXHJcbiAgICAgICAgLmRhdGEocGllRm4oZGF0YSkpXHJcbiAgICAgICAgLmVudGVyKClcclxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcmNcIilcclxuXHJcbiAgICB2YXIgZG9udXQgPSBwaWUuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAgIC5hdHRyKFwiZFwiLCBhcmNGbik7XHJcblxyXG4gICAgZG9udXQuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uIChkLCBpKSB7XHJcbiAgICAgICAgY29uc3Qgc2hhZGVkQ29sb3IgPSBmaWxsQ29sb3IgfHwgJyNkZDY2NjYnO1xyXG4gICAgICAgIHJldHVybiAoaSA9PT0gMCkgPyBzaGFkZWRDb2xvciA6ICcjZGRkZGRkJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgZy5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAgIC50ZXh0KGZyYWN0aW9uVG9QZXJjZW50KHBlcmNlbnQpKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgY29sb3JzLnRleHRDb2xvclBhcmFncmFwaClcclxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgZGlhbWV0ZXIvNClcclxuICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcclxuICAgICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAnYm9sZCcpXHJcbiAgICAgICAgLmF0dHIoJ3knLCBkaWFtZXRlciowLjA4KTtcclxufSIsImltcG9ydCBCaWdOdW1iZXJzIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9jc3YvbXRzX21zcGRfcm9kX2RlYnQuY3N2JztcclxuXHJcbmxldCBzb3VyY2U7XHJcblxyXG5CaWdOdW1iZXJzLmV2ZXJ5KHIgPT4ge1xyXG4gICAgaWYgKHIueWVhciA9PT0gMjAxNykge1xyXG4gICAgICAgIHNvdXJjZSA9IHI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3Rpb25PbmVEYXRhID0gc291cmNlOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dkcC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dkcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nZHAuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsLCBjcmVhdGUgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xyXG5pbXBvcnQgeyBsaW5lIH0gZnJvbSAnZDMtc2hhcGUnO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50Qm94LCB0cmFuc2xhdG9yLCBzaW1wbGlmeU51bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgZG90RmFjdG9yeSwgcmVjZWlwdHNDb25zdGFudHMsIGRvdFBvc2l0aW9uQWNjZXNzb3IgfSBmcm9tICcuLi9yZWNlaXB0cy11dGlscyc7XHJcbmltcG9ydCB7IGVzdGFibGlzaENvbnRhaW5lciB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgc2VjdGlvbk9uZURhdGEgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgeyBjcmVhdGVEb251dCB9IGZyb20gJy4uL2RvbnV0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9jb2xvcnMuc2Nzcyc7XHJcblxyXG5jb25zdCBkMyA9IHsgc2VsZWN0LCBzZWxlY3RBbGwsIGxpbmUsIGNyZWF0ZSB9O1xyXG5sZXQgc3ZnLCBkb3RDb250YWluZXI7XHJcblxyXG5mdW5jdGlvbiBhZGRMZWdlbmQoKSB7XHJcbiAgICBjb25zdCBkb3RCb3ggPSBkMy5zZWxlY3QoJ2cuJyArIHJlY2VpcHRzQ29uc3RhbnRzLmRvdENvbnRhaW5lckNsYXNzKSxcclxuICAgICAgICBsZWdlbmRCb3ggPSBzdmcuYXBwZW5kKCdnJykuY2xhc3NlZCgnZ2RwLWxlZ2VuZCByZXNldCcsIHRydWUpLFxyXG4gICAgICAgIGhlaWdodCA9IGdldEVsZW1lbnRCb3goZG90Qm94KS5oZWlnaHQsXHJcbiAgICAgICAgbWFyZ2luID0gKDEyMDAgLSBnZXRFbGVtZW50Qm94KGRvdEJveCkud2lkdGgpIC8gMixcclxuICAgICAgICBsaW5lID0gZDMubGluZSgpXHJcbiAgICAgICAgICAgIC54KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLng7IH0pXHJcbiAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnk7IH0pLFxyXG4gICAgICAgIGxpbmVEYXRhID0gW1xyXG4gICAgICAgICAgICB7IHg6IDg3LCB5OiAwIH0sXHJcbiAgICAgICAgICAgIHsgeDogODQsIHk6IDAgfSxcclxuICAgICAgICAgICAgeyB4OiA4NCwgeTogaGVpZ2h0IH0sXHJcbiAgICAgICAgICAgIHsgeDogODcsIHk6IGhlaWdodCB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBkb3RzUmVjdCA9IGdldEVsZW1lbnRCb3goZG90Q29udGFpbmVyKSxcclxuICAgICAgICB0ZXh0ID0gbGVnZW5kQm94LmFwcGVuZCgndGV4dCcpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKCdyZXNldCcsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgY29sb3JzLnRleHRDb2xvclBhcmFncmFwaClcclxuICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXHJcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMClcclxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTZweCcpO1xyXG5cclxuICAgIGxlZ2VuZEJveC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAgIC5jbGFzc2VkKCdyZXNldCcsIHRydWUpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBsaW5lKGxpbmVEYXRhKSlcclxuICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcclxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJyNhYWEnKVxyXG4gICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKTtcclxuXHJcbiAgICB0ZXh0LmFwcGVuZCgndHNwYW4nKVxyXG4gICAgICAgIC50ZXh0KCdUb3RhbCBHRFAnKVxyXG4gICAgICAgIC5zdHlsZSgnZm9udC13ZWlnaHQnLCAnNjAwJylcclxuICAgICAgICAuYXR0cigneCcsIDQwKVxyXG4gICAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpO1xyXG5cclxuICAgIHRleHQuYXBwZW5kKCd0c3BhbicpXHJcbiAgICAgICAgLnRleHQoc2ltcGxpZnlOdW1iZXIoc2VjdGlvbk9uZURhdGEuZ2RwKSlcclxuICAgICAgICAuYXR0cigneCcsIDQwKVxyXG4gICAgICAgIC5hdHRyKCdkeScsIDIwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0R2RwRG90cygpIHtcclxuICAgIGNvbnN0IGluY29tZUhlaWdodE9mZnNldCA9IDEwMCxcclxuICAgICAgICBnZHBEb3RDb3VudCA9IDE2MDAwLFxyXG4gICAgICAgIGdkcERvdENvbG9yID0gJ3JnYmEoMjAwLDIwMCwyMDAsMSknLFxyXG4gICAgICAgIGRvdFBvc2l0aW9uU3RhcnQgPSBkb3RQb3NpdGlvbkFjY2Vzc29yLmdldCgpLFxyXG4gICAgICAgIGZpcnN0Um93Q291bnQgPSByZWNlaXB0c0NvbnN0YW50cy5kb3RzUGVyUm93IC0gZG90UG9zaXRpb25TdGFydC5zdGFydEluZGV4LFxyXG4gICAgICAgIGZ1bGxSb3dzID0gTWF0aC5mbG9vcihnZHBEb3RDb3VudCAvIHJlY2VpcHRzQ29uc3RhbnRzLmRvdHNQZXJSb3cpLFxyXG4gICAgICAgIGxhc3RSb3dDb3VudCA9IGdkcERvdENvdW50IC0gZG90UG9zaXRpb25TdGFydC5zdGFydEluZGV4IC0gKGZ1bGxSb3dzICogcmVjZWlwdHNDb25zdGFudHMuZG90c1BlclJvdyksXHJcbiAgICAgICAgZ2RwQ29udGFpbmVyID0gZG90Q29udGFpbmVyLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKCdnZHAgcmVzZXQnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3NjYWxlKDEuMyknKSxcclxuICAgICAgICByb3dPbmUgPSBnZHBDb250YWluZXIuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdG9yKDAsIGluY29tZUhlaWdodE9mZnNldClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgbGV0IGkgPSAwLFxyXG4gICAgICAgIHIgPSAwLFxyXG4gICAgICAgIHJvd0NvdW50ID0gMSxcclxuICAgICAgICByb3dQb3NpdGlvbiA9IGRvdFBvc2l0aW9uU3RhcnQuc3RhcnRJbmRleCxcclxuICAgICAgICB4ID0gZG90UG9zaXRpb25TdGFydC54LFxyXG4gICAgICAgIHkgPSBkb3RQb3NpdGlvblN0YXJ0Lnk7XHJcblxyXG4gICAgLy8gZmlyc3Qgcm93XHJcblxyXG4gICAgZm9yIChpOyBpIDwgZmlyc3RSb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgZG90RmFjdG9yeShnZHBDb250YWluZXIsIHgsIHksIGdkcERvdENvbG9yKTtcclxuICAgICAgICB4ICs9IHJlY2VpcHRzQ29uc3RhbnRzLmRvdE9mZnNldC54O1xyXG5cclxuICAgICAgICByb3dQb3NpdGlvbiArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpcnN0IGZ1bGwgcm93XHJcblxyXG4gICAgeCA9IDI7XHJcblxyXG4gICAgZm9yIChyOyByIDwgcmVjZWlwdHNDb25zdGFudHMuZG90c1BlclJvdzsgcisrKSB7XHJcbiAgICAgICAgZG90RmFjdG9yeShyb3dPbmUsIHgsIC0xLCBnZHBEb3RDb2xvcik7XHJcbiAgICAgICAgeCArPSByZWNlaXB0c0NvbnN0YW50cy5kb3RPZmZzZXQueDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbG9uZSByb3dzXHJcblxyXG4gICAgZm9yIChyb3dDb3VudDsgcm93Q291bnQgPCAoZnVsbFJvd3MpOyByb3dDb3VudCsrKSB7XHJcbiAgICAgICAgcm93T25lLmNsb25lKHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2xhdG9yKDAsIChyb3dDb3VudCAqIHJlY2VpcHRzQ29uc3RhbnRzLmRvdE9mZnNldC55KSArIGluY29tZUhlaWdodE9mZnNldCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmluYWwgcm93XHJcblxyXG4gICAgaSA9IDA7XHJcbiAgICB4ID0gMjtcclxuXHJcbiAgICBjb25zdCBsYXN0Um93ID0gZ2RwQ29udGFpbmVyLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLmNsYXNzZWQoJ2xhc3Qtcm93JywgdHJ1ZSlcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcigwLCAocm93Q291bnQgKiByZWNlaXB0c0NvbnN0YW50cy5kb3RPZmZzZXQueSkgKyBpbmNvbWVIZWlnaHRPZmZzZXQpKTtcclxuXHJcbiAgICBmb3IgKGk7IGkgPCBsYXN0Um93Q291bnQ7IGkrKykge1xyXG4gICAgICAgIGRvdEZhY3RvcnkobGFzdFJvdywgeCwgLTEsIGdkcERvdENvbG9yKTtcclxuICAgICAgICB4ICs9IHJlY2VpcHRzQ29uc3RhbnRzLmRvdE9mZnNldC54O1xyXG4gICAgfVxyXG5cclxuICAgIGdkcENvbnRhaW5lci50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24oMTAwMClcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3NjYWxlKDEpJylcclxuICAgICAgICAuZWFzZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVGYWN0Qm94KCkge1xyXG4gICAgY29uc3QgZmFjdEJveCA9IGQzLnNlbGVjdCgnI2dkcC1mYWN0cycpXHJcbiAgICAgICAgLmNsYXNzZWQoJ291dCcsIG51bGwpXHJcbiAgICAgICAgLmNsYXNzZWQoJ3RlbXBvcmFyeS1oaWRlLS1zaG93JywgdHJ1ZSk7XHJcblxyXG4gICAgc3ZnLmF0dHIoJ3dpZHRoJywgNjcwKTtcclxuICAgIHN2Zy5hdHRyKCdoZWlnaHQnLCAzMDApO1xyXG5cclxuICAgIGQzLnNlbGVjdCgnI3ZpeicpXHJcbiAgICAgICAgLmF0dHIoJ3N0eWxlJywgJ2Zsb2F0OmxlZnQ7d2lkdGg6YXV0bycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRpb25OZXh0KCkge1xyXG4gICAgYWRkTGVnZW5kKCk7XHJcbiAgICBlbmFibGVGYWN0Qm94KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHpvb21PdXREb3RzKCkge1xyXG4gICAgY29uc3QgcHJldlRyYW5zZm9ybSA9IGRvdENvbnRhaW5lci5hdHRyKCd0cmFuc2Zvcm0nKSxcclxuICAgICAgICB6b29tRHVyYXRpb24gPSAyMDAwO1xyXG5cclxuICAgIGQzLnNlbGVjdCgnLnRvdGFsLWdvdi1yZXZlbnVlJykudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmR1cmF0aW9uKDUwMClcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXHJcbiAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lYXNlKCk7XHJcblxyXG4gICAgZDMuc2VsZWN0KCcuaW5jb21lLWRvdC1sZWdlbmQnKS50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24oNTAwKVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMClcclxuICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmVhc2UoKTtcclxuXHJcbiAgICBkb3RDb250YWluZXIudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmR1cmF0aW9uKHpvb21EdXJhdGlvbilcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcig5MiwgMCkgKyAnIHNjYWxlKDAuNSknKVxyXG4gICAgICAgIC5vbignZW5kJywgYW5pbWF0aW9uTmV4dClcclxuICAgICAgICAuZWFzZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudGVyRG9udXQoKSB7XHJcbiAgICBjb25zdCByID0gMTIwLFxyXG4gICAgICAgIGRvbnV0R3JvdXAgPSBkb3RDb250YWluZXIuYXBwZW5kKCdnJyk7XHJcblxyXG4gICAgbGV0IGRvbnV0Q29udGFpbmVyO1xyXG5cclxuICAgIGRvbnV0R3JvdXAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDAuODUpXHJcbiAgICAgICAgLmF0dHIoJ3InLCByKVxyXG4gICAgICAgIC5hdHRyKCdjeCcsIHIpXHJcbiAgICAgICAgLmF0dHIoJ2N5Jywgcik7XHJcblxyXG4gICAgZG9udXRHcm91cFxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAnc2NhbGUoMS41KSAnICsgdHJhbnNsYXRvcig0MDAsIDApKVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMClcclxuXHJcbiAgICBkb251dENvbnRhaW5lciA9IGRvbnV0R3JvdXAuYXBwZW5kKCdnJylcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcigyMCwgMjApKTtcclxuXHJcbiAgICBjcmVhdGVEb251dChkb251dENvbnRhaW5lciwgLjE3NCwgMjAwLCBjb2xvcnMuaW5jb21lKTtcclxuXHJcbiAgICBkb251dEdyb3VwLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kZWxheSgyNTAwKVxyXG4gICAgICAgIC5kdXJhdGlvbigxNTAwKVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3NjYWxlKDEpICcgKyB0cmFuc2xhdG9yKDkwMCwgMTAwKSlcclxuICAgICAgICAuZWFzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdkcERvdHMoKSB7XHJcbiAgICBzdmcgPSBlc3RhYmxpc2hDb250YWluZXIoKTtcclxuXHJcbiAgICBzdmcudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXHJcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDQ1MClcclxuXHJcbiAgICBkb3RDb250YWluZXIgPSBkMy5zZWxlY3QoJ2cuJyArIHJlY2VpcHRzQ29uc3RhbnRzLmRvdENvbnRhaW5lckNsYXNzKVxyXG4gICAgem9vbU91dERvdHMoKTtcclxuICAgIHNldEdkcERvdHMoKTtcclxuICAgIGVudGVyRG9udXQoKTtcclxufSIsImltcG9ydCB7IHNlbGVjdCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XHJcbmltcG9ydCB7IHRyYW5zaXRpb24gfSBmcm9tICdkMy10cmFuc2l0aW9uJztcclxuaW1wb3J0IHsgZ2V0RWxlbWVudEJveCwgdHJhbnNsYXRvciwgc2ltcGxpZnlOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IGRvdEZhY3RvcnksIHJlY2VpcHRzQ29uc3RhbnRzLCBkb3RQb3NpdGlvbkFjY2Vzc29yIH0gZnJvbSAnLi4vcmVjZWlwdHMtdXRpbHMnO1xyXG5pbXBvcnQgeyBlc3RhYmxpc2hDb250YWluZXIgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IHNlY3Rpb25PbmVEYXRhIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9jb2xvcnMuc2Nzcyc7XHJcbmltcG9ydCB7IGluaXRHZHBEb3RzIH0gZnJvbSAnLi9nZHBEb3RzJztcclxuaW1wb3J0IHsgdHJpZ2dlckluZm9Cb3ggfSBmcm9tICcuLi8uLi9pbmZvQm94JztcclxuaW1wb3J0IHsgcmV2ZWFsSHdjdGEgfSBmcm9tICcuLi9yZXZlYWwtaHdjdGEnO1xyXG5cclxuY29uc3QgZDMgPSB7IHNlbGVjdCB9LFxyXG4gICAgeFN0YXJ0ID0gcmVjZWlwdHNDb25zdGFudHMueFN0YXJ0LFxyXG4gICAgZG90c1BlclJvdyA9IHJlY2VpcHRzQ29uc3RhbnRzLmRvdHNQZXJSb3csXHJcbiAgICBkb3RPZmZzZXQgPSByZWNlaXB0c0NvbnN0YW50cy5kb3RPZmZzZXQ7XHJcblxyXG5sZXQgc3ZnLFxyXG4gICAgZmFjdEJveCxcclxuICAgIGluY29tZUNvbnRhaW5lcixcclxuICAgIGRvdENvbnRhaW5lcixcclxuICAgIGRvdHNXaWR0aDtcclxuXHJcbmZ1bmN0aW9uIHJlYWR5SW5jb21lRG90cygpIHtcclxuICAgIGluY29tZUNvbnRhaW5lciA9IGRvdENvbnRhaW5lci5hcHBlbmQoJ2cnKVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMClcclxuICAgICAgICAuY2xhc3NlZChyZWNlaXB0c0NvbnN0YW50cy5pbmNvbWVDb250YWluZXJDbGFzcywgdHJ1ZSlcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtMTAwLCAtNTApLCBzY2FsZSgyKScpO1xyXG5cclxuICAgIGxldCBpID0gMCxcclxuICAgICAgICB0b3AgPSAzNDAwLFxyXG4gICAgICAgIHggPSB4U3RhcnQsXHJcbiAgICAgICAgeSA9IDI7XHJcblxyXG4gICAgZm9yIChpOyBpIDwgdG9wOyBpKyspIHtcclxuICAgICAgICBkb3RGYWN0b3J5KGluY29tZUNvbnRhaW5lciwgeCwgeSk7XHJcbiAgICAgICAgeCArPSBkb3RPZmZzZXQueDtcclxuXHJcbiAgICAgICAgaWYgKChpICsgMSkgJSBkb3RzUGVyUm93ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHkgKz0gZG90T2Zmc2V0Lnk7XHJcbiAgICAgICAgICAgIHggPSB4U3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvdFBvc2l0aW9uQWNjZXNzb3Iuc2V0KFt4LCB5XSwgaSAlIGRvdHNQZXJSb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZEhlYWRlcigpIHtcclxuICAgIGNvbnN0IHRleHQgPSBzdmcuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXHJcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBjb2xvcnMudGV4dENvbG9yUGFyYWdyYXBoKVxyXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd0b3RhbC1nb3YtcmV2ZW51ZScpXHJcbiAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXHJcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMThweCcpXHJcblxyXG4gICAgdGV4dC5hcHBlbmQoJ3RzcGFuJylcclxuICAgICAgICAudGV4dCgnVG90YWwgVS5TLiBHb3Zlcm5tZW50IFJldmVudWUnKVxyXG4gICAgICAgIC5zdHlsZSgnZm9udC13ZWlnaHQnLCAnNjAwJylcclxuICAgICAgICAuYXR0cigneScsIDIwKVxyXG4gICAgICAgIC5hdHRyKCd4JywgNjAwKVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDIwKScpXHJcblxyXG4gICAgdGV4dC5hcHBlbmQoJ3RzcGFuJylcclxuICAgICAgICAudGV4dChzaW1wbGlmeU51bWJlcihzZWN0aW9uT25lRGF0YS5pbmNvbWUpKVxyXG4gICAgICAgIC5hdHRyKCd5JywgNDApXHJcbiAgICAgICAgLmF0dHIoJ3gnLCA2MDApXHJcblxyXG4gICAgdGV4dC50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24oNDAwKVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRMZWdlbmQoKSB7XHJcbiAgICBjb25zdCBnID0gZDMuc2VsZWN0KCcuaW5jb21lLWRvdC1sZWdlbmQnKSxcclxuICAgICAgICBkdXJhdGlvbiA9IDIwMDAsXHJcbiAgICAgICAgdyA9IDEyNixcclxuICAgICAgICB4T2Zmc2V0ID0gZG90c1dpZHRoIC0gdyArICgoMTIwMCAtIGRvdHNXaWR0aCkgLyAyKTtcclxuXHJcbiAgICBnLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcih4T2Zmc2V0LCAzNSkpO1xyXG5cclxuICAgIGcuc2VsZWN0KCdjaXJjbGUnKVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxyXG4gICAgICAgIC5hdHRyKCdyJywgMylcclxuICAgICAgICAuYXR0cignY3gnLCAwKVxyXG4gICAgICAgIC5hdHRyKCdjeScsIDApXHJcbiAgICAgICAgLmVhc2UoKVxyXG5cclxuICAgIGcuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgICAudGV4dCgnPSAxIEJpbGxpb24gRG9sbGFycycpXHJcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBjb2xvcnMudGV4dENvbG9yUGFyYWdyYXBoKVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMClcclxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIDE2KVxyXG4gICAgICAgIC5hdHRyKCd5JywgNSlcclxuICAgICAgICAuYXR0cigneCcsIDcpXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kZWxheShkdXJhdGlvbiAqIDAuNylcclxuICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24gLyAyKVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAuZWFzZSgpO1xyXG5cclxuICAgIGcuYXBwZW5kKCdpbWFnZScpXHJcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE2KVxyXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDIwKVxyXG4gICAgICAgIC5hdHRyKCd4JywgMTIyKVxyXG4gICAgICAgIC5hdHRyKCd5JywgLTE0KVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMCkgICAgICAgIFxyXG4gICAgICAgIC5hdHRyKCdkYXRhLWJveC1pZCcsICdiaWxsaW9uLWRvbGxhcnMnKVxyXG4gICAgICAgIC5hdHRyKCd4bGluazpocmVmJywgJy9hc3NldHMvY2cvaWNvbnMvYW5lY2RvdGUuc3ZnJylcclxuICAgICAgICAuYXR0cignc3R5bGUnLCAnY3Vyc29yOnBvaW50ZXInKVxyXG4gICAgICAgIC5vbignY2xpY2snLCB0cmlnZ2VySW5mb0JveClcclxuICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmRlbGF5KGR1cmF0aW9uICogMC43KVxyXG4gICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbiAvIDIpXHJcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgIC5lYXNlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERvdENvbnRhaW5lcigpIHtcclxuICAgIGxldCB4T2Zmc2V0O1xyXG5cclxuICAgIGRvdHNXaWR0aCA9IChkb3RzUGVyUm93ICogZG90T2Zmc2V0LngpICsgeFN0YXJ0O1xyXG4gICAgeE9mZnNldCA9ICgxMjAwIC0gZG90c1dpZHRoKSAvIDI7XHJcblxyXG4gICAgZG90Q29udGFpbmVyID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLmNsYXNzZWQocmVjZWlwdHNDb25zdGFudHMuZG90Q29udGFpbmVyQ2xhc3MsIHRydWUpXHJcbiAgICAgICAgLmNsYXNzZWQoJ3Jlc2V0JywgdHJ1ZSlcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcih4T2Zmc2V0LCByZWNlaXB0c0NvbnN0YW50cy5oZWFkaW5nSGVpZ2h0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUZXh0KCkge1xyXG4gICAgc3ZnLmF0dHIoJ2hlaWdodCcsIDE4MCk7XHJcblxyXG4gICAgZmFjdEJveCA9IGQzLnNlbGVjdCgnI2luY29tZS1mYWN0cycpXHJcbiAgICAgICAgLmNsYXNzZWQoJ3RlbXBvcmFyeS1oaWRlLS1zaG93JywgdHJ1ZSk7XHJcblxyXG4gICAgZDMuc2VsZWN0KCcuZm9vdG5vdGUnKS5jbGFzc2VkKCd0ZW1wb3JhcnktaGlkZScsIG51bGwpXHJcbiAgICAgICAgLmF0dHIoJ3N0eWxlJywgJ2NsZWFyOmJvdGgnKVxyXG5cclxuICAgIHJldmVhbEh3Y3RhKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRDb250aW51ZUJ1dHRvbigpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGQzLnNlbGVjdCgnI3RvdXItY29udGludWUnKTtcclxuXHJcbiAgICBidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZhY3RCb3guY2xhc3NlZCgndGVtcG9yYXJ5LWhpZGUtLXNob3cnLCBudWxsKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZhY3RCb3gucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgaW5pdEdkcERvdHMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJJbmNvbWVEb3RzKCkge1xyXG4gICAgaW5jb21lQ29udGFpbmVyLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kZWxheSgxMDAwKVxyXG4gICAgICAgIC5kdXJhdGlvbig3MDApXHJcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCksIHNjYWxlKDEpJylcclxuICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYnVpbGRIZWFkZXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lYXNlKCk7XHJcblxyXG4gICAgYnVpbGRMZWdlbmQoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KHNob3dUZXh0LCAyMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRJbmNvbWVEb3RzKCkge1xyXG4gICAgc3ZnID0gZXN0YWJsaXNoQ29udGFpbmVyKCk7XHJcbiAgICBpbml0Q29udGludWVCdXR0b24oKTtcclxuICAgIHNldERvdENvbnRhaW5lcigpO1xyXG4gICAgcmVhZHlJbmNvbWVEb3RzKCk7XHJcbn0iLCJpbXBvcnQgeyBzZWxlY3QsIHNlbGVjdEFsbCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XHJcbmltcG9ydCB7IHRyYW5zaXRpb24gfSBmcm9tICdkMy10cmFuc2l0aW9uJztcclxuaW1wb3J0IHsgaW5pdEluY29tZURvdHMsIGVudGVySW5jb21lRG90cyB9IGZyb20gJy4vaW5jb21lRG90cyc7XHJcbmltcG9ydCB7IGVzdGFibGlzaENvbnRhaW5lciwgdHJhbnNsYXRvciwgc3RyaXBCciB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0ICcuLi8uLi9pbmZvQm94JztcclxuaW1wb3J0ICcuL2dkcC5zY3NzJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9jb2xvcnMuc2Nzcyc7XHJcblxyXG5jb25zdCBkMyA9IHsgc2VsZWN0LCBzZWxlY3RBbGwgfSxcclxuICAgIHN2ZyA9IGVzdGFibGlzaENvbnRhaW5lcigpLFxyXG4gICAgbGFyZ2VEb3QgPSBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgICAuY2xhc3NlZCgnaW5jb21lLWRvdC1sZWdlbmQnLCB0cnVlKSAgICAgICAgXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0b3IoNjAwIC0gMTgyLCA0MCkpLFxyXG4gICAgcmFkaXVzID0gNzU7XHJcblxyXG5mdW5jdGlvbiBwaGFzZVR3bygpIHtcclxuICAgIGxhcmdlRG90LnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbigxMDAwKVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMClcclxuICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmVhc2UoKTtcclxuXHJcbiAgICBlbnRlckluY29tZURvdHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGV4dCgpIHtcclxuICAgIGNvbnN0IGV4cGxhbmF0aW9uID0gdGhpcy5sYXJnZURvdC5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAgIC5hdHRyKCd5JywgNTQpXHJcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2xhdG9yKHJhZGl1cyAqIDIgKyAyMCwgMCkpXHJcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBjb2xvcnMudGV4dENvbG9yUGFyYWdyYXBoKVxyXG5cclxuICAgIGV4cGxhbmF0aW9uLmFwcGVuZCgndHNwYW4nKVxyXG4gICAgICAgIC5hdHRyKCd4JywgMClcclxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgMTgpXHJcbiAgICAgICAgLnRleHQoJ0luIHRoaXMgYW5hbHlzaXMnKVxyXG5cclxuICAgIGV4cGxhbmF0aW9uLmFwcGVuZCgndHNwYW4nKVxyXG4gICAgICAgIC5hdHRyKCd4JywgMClcclxuICAgICAgICAuYXR0cignZHknLCAyOClcclxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgMjQpXHJcbiAgICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgJzYwMCcpXHJcbiAgICAgICAgLnRleHQoJ1RoaXMgRG90JylcclxuXHJcbiAgICBleHBsYW5hdGlvbi5hcHBlbmQoJ3RzcGFuJylcclxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgMjQpXHJcbiAgICAgICAgLnRleHQoJyByZXByZXNlbnRzJylcclxuXHJcbiAgICBleHBsYW5hdGlvbi5hcHBlbmQoJ3RzcGFuJylcclxuICAgICAgICAuYXR0cigneCcsIDApXHJcbiAgICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIDI0KVxyXG4gICAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsICc2MDAnKVxyXG4gICAgICAgIC5hdHRyKCdkeScsIDMwKVxyXG4gICAgICAgIC50ZXh0KCdPbmUgQmlsbGlvbiBEb2xsYXJzJylcclxuXHJcbiAgICB0aGlzLmxhcmdlRG90LmFwcGVuZCgndGV4dCcpXHJcbiAgICAgICAgLnRleHQoJyQxLDAwMCwwMDAsMDAwJylcclxuICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcclxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgMTgpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCB0aGlzLnJhZGl1cylcclxuICAgICAgICAuYXR0cigneScsIHRoaXMucmFkaXVzICsgNylcclxuICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKTtcclxuXHJcbiAgICB0aGlzLmxhcmdlRG90LnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbig1MDApXHJcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgIC5lYXNlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmlwU3IoKSB7XHJcbiAgICBkMy5zZWxlY3RBbGwoJy5mYWN0LWJveCcpLmNsYXNzZWQoJ3NyLW9ubHknLCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXREb3QoKSB7XHJcbiAgICBsYXJnZURvdC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgICAgLmF0dHIoJ2N4JywgcmFkaXVzKVxyXG4gICAgICAgIC5hdHRyKCdjeScsIHJhZGl1cylcclxuICAgICAgICAuYXR0cigncicsIDEpXHJcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBjb2xvcnMuaW5jb21lKVxyXG4gICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24oMTUwMClcclxuICAgICAgICAuYXR0cigncicsIHJhZGl1cylcclxuICAgICAgICAub24oJ2VuZCcsIGFkZFRleHQuYmluZCh7XHJcbiAgICAgICAgICAgIGxhcmdlRG90OiBsYXJnZURvdCxcclxuICAgICAgICAgICAgcmFkaXVzOiByYWRpdXNcclxuICAgICAgICB9KSlcclxuICAgICAgICAuZWFzZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgc3RyaXBCcigpO1xyXG4gICAgaW5pdERvdCgpO1xyXG4gICAgaW5pdEluY29tZURvdHMoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KHBoYXNlVHdvLCAzMDAwKTtcclxuICAgIHNldFRpbWVvdXQoc3RyaXBTciwgMTAwMClcclxufVxyXG5cclxuaW5pdCgpOyIsImltcG9ydCB7IHRyYW5zbGF0b3IgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY29sb3JzLnNjc3MnO1xyXG5cclxuY29uc3QgZDMgPSB7IHNlbGVjdCB9O1xyXG5cclxubGV0IGRvdFBvc2l0aW9uO1xyXG5cclxuZnVuY3Rpb24gZG90UG9zaXRpb25HZXR0ZXIoKSB7XHJcbiAgICByZXR1cm4gZG90UG9zaXRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvdFBvc2l0aW9uU2V0dGVyKHBvc2l0aW9uLCBzdGFydEluZGV4KSB7XHJcbiAgICBkb3RQb3NpdGlvbiA9IHtcclxuICAgICAgICB4OiBwb3NpdGlvblswXSxcclxuICAgICAgICB5OiBwb3NpdGlvblsxXSxcclxuICAgICAgICBzdGFydEluZGV4OiBzdGFydEluZGV4XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVjZWlwdHNDb25zdGFudHMgPSB7XHJcbiAgICBkb3RPZmZzZXQ6IHtcclxuICAgICAgICB4OiA1LFxyXG4gICAgICAgIHk6IDZcclxuICAgIH0sXHJcbiAgICB4U3RhcnQ6IDIsXHJcbiAgICBoZWFkaW5nSGVpZ2h0OiA3MCxcclxuICAgIGRvdHNQZXJSb3c6IDIwMyxcclxuICAgIGRvdENvbnRhaW5lckNsYXNzOiAnZG90LWNvbnRhaW5lcicsXHJcbiAgICBpbmNvbWVDb250YWluZXJDbGFzczogJ2luY29tZS1jb250YWluZXInLFxyXG4gICAgc2hhZGVyQ29udGFpbmVyQ2xhc3M6ICdzaGFkZXItY29udGFpbmVyJ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG90RmFjdG9yeShjb250YWluZXIsIHgsIHksIGNvbG9yKSB7XHJcbiAgICBjb2xvciA9IGNvbG9yIHx8IGNvbG9ycy5pbmNvbWU7XHJcbiAgICBcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgICAgLmF0dHIoJ2N4JywgeClcclxuICAgICAgICAuYXR0cignY3knLCB5KVxyXG4gICAgICAgIC5hdHRyKCdyJywgMilcclxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBjb2xvcilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRvdFBvc2l0aW9uQWNjZXNzb3IgPSB7XHJcbiAgICBnZXQ6IGRvdFBvc2l0aW9uR2V0dGVyLFxyXG4gICAgc2V0OiBkb3RQb3NpdGlvblNldHRlclxyXG59IiwiaW1wb3J0IHsgc2VsZWN0QWxsIH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuXHJcbmNvbnN0IGQzID0geyBzZWxlY3RBbGwgfTtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKCkge1xyXG4gICAgZDMuc2VsZWN0QWxsKCcuaHdjdGEnKS5jbGFzc2VkKCdod2N0YS0tc3RhZ2VkJywgbnVsbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXZlYWxId2N0YSgpIHtcclxuICAgIGlmIChkMy5zZWxlY3RBbGwoJy5od2N0YScpLnNpemUoKSkge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRpbWVvdXQocmV2ZWFsSHdjdGEsIDEwMClcclxuICAgIH1cclxufSIsImltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsIH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuXHJcbmNvbnN0IGQzID0geyBzZWxlY3QsIHNlbGVjdEFsbCB9LFxyXG4gICAgaW5mb0JveENsYXNzID0gJy5pbmZvLWJveCcsXHJcbiAgICB0cmlnZ2VyQ2xhc3MgPSAnLmluZm8tYm94LXRyaWdnZXInLFxyXG4gICAgdHJpZ2dlckNsYXNzQWN0aXZlID0gJ2luZm8tYm94LXRyaWdnZXItLWFjdGl2ZScsXHJcbiAgICBjbG9zZUJ1dHRvbkNsYXNzID0gJ2luZm8tYm94X19jbG9zZScsXHJcbiAgICBhY3RpdmVDbGFzcyA9ICdpbmZvLWJveC0tYWN0aXZlJztcclxuXHJcbmZ1bmN0aW9uIGFkZENsb3NlSWNvbigpIHtcclxuICAgIGNvbnN0IGJveCA9IGQzLnNlbGVjdCh0aGlzKSxcclxuICAgICAgICBjbG9zZUJ1dHRvbiA9IGJveC5hcHBlbmQoJ2J1dHRvbicpLFxyXG4gICAgICAgIGNsb3NlSWNvbiA9IGNsb3NlQnV0dG9uLmFwcGVuZCgnaScpO1xyXG5cclxuICAgIGNsb3NlQnV0dG9uLmxvd2VyKCk7XHJcblxyXG4gICAgY2xvc2VCdXR0b24uYXR0cignY2xhc3MnLCBjbG9zZUJ1dHRvbkNsYXNzKTtcclxuICAgIGNsb3NlSWNvbi5hdHRyKCdjbGFzcycsICdmYXMgZmEtdGltZXMnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VCb3godHJpZ2dlciwgYm94KSB7XHJcbiAgICBib3guY2xhc3NlZChhY3RpdmVDbGFzcywgbnVsbCk7XHJcbiAgICB0cmlnZ2VyLmNsYXNzZWQodHJpZ2dlckNsYXNzQWN0aXZlLCBudWxsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXJJbmZvQm94KCkge1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IGQzLnNlbGVjdCh0aGlzKSxcclxuICAgICAgICBpZCA9IHRyaWdnZXIuYXR0cignZGF0YS1ib3gtaWQnKSxcclxuICAgICAgICBib3ggPSBkMy5zZWxlY3QoJyMnICsgaWQpLFxyXG4gICAgICAgIGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBjb29yZHMgPSB0cmlnZ2VyLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBsZXQgeCA9IGNvb3Jkcy54LTE4O1xyXG5cclxuICAgIGlmICh4ID4gaW5uZXJXaWR0aCAtIDMwMCkge1xyXG4gICAgICAgIHggPSBpbm5lcldpZHRoIC0gMzAwXHJcbiAgICB9XHJcblxyXG4gICAgYm94LmNsYXNzZWQoYWN0aXZlQ2xhc3MsIHRydWUpO1xyXG4gICAgdHJpZ2dlci5jbGFzc2VkKHRyaWdnZXJDbGFzc0FjdGl2ZSwgdHJ1ZSk7XHJcblxyXG4gICAgYm94LmF0dHIoJ3N0eWxlJywgYHRvcDoke2Nvb3Jkcy55LTE4K3dpbmRvdy5wYWdlWU9mZnNldH1weDtsZWZ0OiR7eH1weGApO1xyXG5cclxuICAgIGJveC5zZWxlY3QoJy4nICsgY2xvc2VCdXR0b25DbGFzcylcclxuICAgICAgICAub24oJ2NsaWNrJywgbnVsbClcclxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2xvc2VCb3godHJpZ2dlciwgYm94KVxyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG4oZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGQzLnNlbGVjdEFsbChpbmZvQm94Q2xhc3MpLmVhY2goYWRkQ2xvc2VJY29uKTsgICAgXHJcblxyXG4gICAgZDMuc2VsZWN0QWxsKHRyaWdnZXJDbGFzcylcclxuICAgICAgICAub24oJ2NsaWNrJywgdHJpZ2dlckluZm9Cb3gpXHJcblxyXG59KSgpOyIsImltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsIH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuXHJcbmNvbnN0IGQzID0geyBzZWxlY3QsIHNlbGVjdEFsbCB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCb3goZDNTZWxlY3Rpb24pIHtcclxuICAgIGNvbnN0IHJlY3QgPSBkM1NlbGVjdGlvbi5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogTWF0aC5jZWlsKHJlY3Qud2lkdGgpLFxyXG4gICAgICAgIGhlaWdodDogTWF0aC5jZWlsKHJlY3QuaGVpZ2h0KSxcclxuICAgICAgICByaWdodDogTWF0aC5jZWlsKHJlY3QucmlnaHQpLFxyXG4gICAgICAgIGJvdHRvbTogTWF0aC5jZWlsKHJlY3QuYm90dG9tKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRvcih4LCB5KSB7XHJcbiAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCAke3l9KWBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zZm9ybShkM1NlbGVjdGlvbikge1xyXG4gICAgY29uc3QgcmUgPSAvKFxcZCkrL2dcclxuICAgIGNvbnN0IG9yaWdpbmFsVHJhbnNmb3JtID0gZDNTZWxlY3Rpb24uYXR0cigndHJhbnNmb3JtJykubWF0Y2gocmUpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogTnVtYmVyKG9yaWdpbmFsVHJhbnNmb3JtWzBdKSxcclxuICAgICAgICB5OiBOdW1iZXIob3JpZ2luYWxUcmFuc2Zvcm1bMV0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlc3RhYmxpc2hDb250YWluZXIoaGVpZ2h0KSB7XHJcbiAgICBjb25zdCB2aXogPSBkMy5zZWxlY3QoJyN2aXonKTtcclxuXHJcbiAgICBsZXQgc3ZnID0gdml6LnNlbGVjdCgnc3ZnLm1haW4nKTtcclxuXHJcbiAgICBpZiAoc3ZnLnNpemUoKSA9PT0gMCkge1xyXG4gICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCA0MDA7XHJcblxyXG4gICAgICAgIHJldHVybiB2aXouYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuY2xhc3NlZCgnbWFpbicsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKCdzaGFwZS1yZW5kZXJpbmcnLCAnZ2VvbWV0cmljUHJlY2lzaW9uJylcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcclxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgJzEyMDBweCcpO1xyXG4gICAgfSBlbHNlIGlmIChoZWlnaHQpIHtcclxuICAgICAgICBzdmcuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHN2ZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsaWZ5QmlsbGlvbnMobikge1xyXG4gICAgY29uc3QgYmlsbGlvbiA9IDEwMDAwMDAwMDA7XHJcblxyXG4gICAgcmV0dXJuIGAkJHtNYXRoLnJvdW5kKG4gLyBiaWxsaW9uICogMTApIC8gMTB9IEJgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxpZnlOdW1iZXIobikge1xyXG4gICAgY29uc3QgdHJpbGxpb24gPSAxMDAwMDAwMDAwMDAwLFxyXG4gICAgICAgIGJpbGxpb24gPSAxMDAwMDAwMDAwLFxyXG4gICAgICAgIG1pbGxpb24gPSAxMDAwMDAwLFxyXG4gICAgICAgIG5lZ2F0aXZlU2lnbiA9IChuIDwgMCkgPyAnLScgOiAnJztcclxuXHJcbiAgICBsZXQgc2ltcGxpZmllciA9IG1pbGxpb24sXHJcbiAgICAgICAgbGV0dGVyID0gJ00nO1xyXG5cclxuICAgIGlmIChuID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuICckMCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE1hdGguYWJzKG4pID49IHRyaWxsaW9uKSB7XHJcbiAgICAgICAgc2ltcGxpZmllciA9IHRyaWxsaW9uO1xyXG4gICAgICAgIGxldHRlciA9ICdUJ1xyXG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhuKSA+PSBiaWxsaW9uKSB7XHJcbiAgICAgICAgc2ltcGxpZmllciA9IGJpbGxpb247XHJcbiAgICAgICAgbGV0dGVyID0gJ0InO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuZWdhdGl2ZVNpZ259JCR7TWF0aC5yb3VuZChNYXRoLmFicyhuKSAvIHNpbXBsaWZpZXIgKiAxMCkgLyAxMH0gJHtsZXR0ZXJ9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdvcmRXcmFwKHRleHQsIG1heFdpZHRoKSB7XHJcbiAgICB2YXIgd29yZHMgPSB0ZXh0LnRleHQoKS5zcGxpdCgvXFxzKy8pLnJldmVyc2UoKSxcclxuICAgICAgICB3b3JkLFxyXG4gICAgICAgIGxpbmUgPSBbXSxcclxuICAgICAgICBsaW5lTnVtYmVyID0gMCxcclxuICAgICAgICBsaW5lSGVpZ2h0ID0gMS4xLFxyXG4gICAgICAgIHRzcGFuO1xyXG5cclxuICAgIHRzcGFuID0gdGV4dC50ZXh0KG51bGwpXHJcbiAgICAgICAgLmFwcGVuZChcInRzcGFuXCIpXHJcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDApO1xyXG5cclxuICAgIHdoaWxlICh3b3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgd29yZCA9IHdvcmRzLnBvcCgpO1xyXG4gICAgICAgIGxpbmUucHVzaCh3b3JkKTtcclxuICAgICAgICB0c3Bhbi50ZXh0KGxpbmUuam9pbihcIiBcIikpO1xyXG4gICAgICAgIGlmICh0c3Bhbi5ub2RlKCkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkgPiBtYXhXaWR0aCkge1xyXG4gICAgICAgICAgICBsaW5lLnBvcCgpO1xyXG4gICAgICAgICAgICB0c3Bhbi50ZXh0KGxpbmUuam9pbihcIiBcIikpO1xyXG4gICAgICAgICAgICBsaW5lID0gW3dvcmRdO1xyXG4gICAgICAgICAgICB0c3BhbiA9IHRleHQuYXBwZW5kKFwidHNwYW5cIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCAwKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBsaW5lSGVpZ2h0ICsgXCJlbVwiKVxyXG4gICAgICAgICAgICAgICAgLnRleHQod29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERyb3BTaGFkb3coKSB7XHJcbiAgICBjb25zdCBzdmcgPSBlc3RhYmxpc2hDb250YWluZXIoKSxcclxuICAgICAgICBmaWx0ZXIgPSBzdmcuYXBwZW5kKCdkZWZzJykuYXBwZW5kKCdmaWx0ZXInKVxyXG4gICAgICAgICAgICAuYXR0cignaWQnLCAnZHJvcDEnKVxyXG5cclxuICAgIGZpbHRlci5hcHBlbmQoJ2ZlRHJvcFNoYWRvdycpXHJcbiAgICAgICAgLmF0dHIoJ2R4JywgMClcclxuICAgICAgICAuYXR0cignZHknLCAwKVxyXG4gICAgICAgIC5hdHRyKCdzdGREZXZpYXRpb24nLCA1KVxyXG4gICAgICAgIC5hdHRyKCdmbG9vZC1vcGFjaXR5JywgMC4yKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJhY3Rpb25Ub1BlcmNlbnQobiwgcHJlY2lzaW9uKSB7XHJcbiAgICBpZiAoIXByZWNpc2lvbikge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludChuICogMTAwKSArICclJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBoYW5kbGUgcHJlY2lzaW9uXHJcbiAgICBjb25zb2xlLndhcm4oJ25lZWQgdG8gaGFuZGxlIHByZWNpc2lvbicpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpcEJyKCkge1xyXG4gICAgZDMuc2VsZWN0QWxsKCdicicpLnJlbW92ZSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
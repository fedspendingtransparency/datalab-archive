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
/******/ 	__webpack_require__.p = "/revenue/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/revenue/gdp/index.js");
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

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/revenue/gdp/gdp.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/revenue/gdp/gdp.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#gdp-facts {\n  clear: both;\n  margin: 0 1rem; }\n  #gdp-facts > h1 {\n    font-size: 24px;\n    font-weight: 600;\n    text-align: left; }\n  #gdp-facts .tour {\n    margin-top: 2rem;\n    max-width: 300px; }\n\n#gdp-facts.out {\n  padding-top: 0; }\n\n@media only screen and (min-width: 920px) {\n  #gdp-facts {\n    clear: none;\n    padding-top: 112px;\n    margin-left: 670px;\n    margin-right: 0; }\n    #gdp-facts h1 {\n      margin-top: 0; }\n  .page-wrapper {\n    max-width: 1200px;\n    margin: 0 auto; } }\n", ""]);

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
  var x = coords.left - 10;

  if (x > innerWidth - 300) {
    x = innerWidth - 300;
  }

  box.classed(activeClass, true);
  trigger.classed(triggerClassActive, true);
  box.attr('style', "top:".concat(coords.top - 15 + window.pageYOffset, "px;left:").concat(x, "px"));
  box.select('.' + closeButtonClass).on('click', null).on('click', function () {
    closeBox(trigger, box);
  });
}

(function init() {
  d3.selectAll(infoBoxClass).each(addCloseIcon);
  d3.selectAll(triggerClass).on('click', triggerInfoBox);
})();

/***/ }),

/***/ "./src/revenue/donut.js":
/*!******************************!*\
  !*** ./src/revenue/donut.js ***!
  \******************************/
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

/***/ "./src/revenue/gdp/data.js":
/*!*********************************!*\
  !*** ./src/revenue/gdp/data.js ***!
  \*********************************/
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

/***/ "./src/revenue/gdp/gdp.scss":
/*!**********************************!*\
  !*** ./src/revenue/gdp/gdp.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./gdp.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/revenue/gdp/gdp.scss");

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

/***/ "./src/revenue/gdp/gdpDots.js":
/*!************************************!*\
  !*** ./src/revenue/gdp/gdpDots.js ***!
  \************************************/
/*! exports provided: initGdpDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGdpDots", function() { return initGdpDots; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _receipts_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../receipts-utils */ "./src/revenue/receipts-utils.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/revenue/gdp/data.js");
/* harmony import */ var _donut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../donut */ "./src/revenue/donut.js");
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
  d3.select('#gdp-footnote').attr('style', 'display:block');
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

/***/ "./src/revenue/gdp/incomeDots.js":
/*!***************************************!*\
  !*** ./src/revenue/gdp/incomeDots.js ***!
  \***************************************/
/*! exports provided: enterIncomeDots, initIncomeDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterIncomeDots", function() { return enterIncomeDots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initIncomeDots", function() { return initIncomeDots; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _receipts_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../receipts-utils */ "./src/revenue/receipts-utils.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/revenue/gdp/data.js");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../colors.scss */ "./src/colors.scss");
/* harmony import */ var _colors_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_colors_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _gdpDots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gdpDots */ "./src/revenue/gdp/gdpDots.js");
/* harmony import */ var _infoBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../infoBox */ "./src/infoBox.js");
/* harmony import */ var _reveal_hwcta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reveal-hwcta */ "./src/revenue/reveal-hwcta.js");










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
  text.append('tspan').text('U.S. Government Revenue').style('font-weight', '600').attr('y', 20).attr('x', 600).attr('transform', 'translate(0, 20)');
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

/***/ "./src/revenue/gdp/index.js":
/*!**********************************!*\
  !*** ./src/revenue/gdp/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _incomeDots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incomeDots */ "./src/revenue/gdp/incomeDots.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _infoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../infoBox */ "./src/infoBox.js");
/* harmony import */ var _gdp_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gdp.scss */ "./src/revenue/gdp/gdp.scss");
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
  explanation.append('tspan').attr('x', 0).attr('dy', 28).attr('font-size', 24).attr('font-weight', '600').text('One Dot');
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

/***/ "./src/revenue/receipts-utils.js":
/*!***************************************!*\
  !*** ./src/revenue/receipts-utils.js ***!
  \***************************************/
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

/***/ "./src/revenue/reveal-hwcta.js":
/*!*************************************!*\
  !*** ./src/revenue/reveal-hwcta.js ***!
  \*************************************/
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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getElementBox, translator, getTransform, establishContainer, simplifyBillions, simplifyNumber, wordWrap, initDropShadow, fractionToPercent, stripBr, fadeAndRemove */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAndRemove", function() { return fadeAndRemove; });
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
function establishContainer(height, width) {
  var viz = d3.select('#viz');
  var svg = viz.select('svg.main');

  if (svg.size() === 0) {
    height = height || 400;
    width = width || 1200;
    return viz.append('svg').classed('main', true).attr('shape-rendering', 'geometricPrecision').attr('height', height).attr('width', width);
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
function fadeAndRemove(selection, duration) {
  duration = duration || 1000;
  selection.transition().duration(duration).attr('opacity', 0).on('end', function () {
    d3.select(this).remove();
  });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9ycy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZXZlbnVlL2dkcC9nZHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2N1YmVoZWxpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2RlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvbGFiLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZGlzcGF0Y2gvc3JjL2Rpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1kaXNwYXRjaC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2JhY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2JvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jdWJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvZWxhc3RpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvbGluZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9wb2x5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9xdWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9zaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2Jhc2lzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYmFzaXNDbG9zZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY3ViZWhlbGl4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2Rpc2NyZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvaGNsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvaHNsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvaHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9sYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9waWVjZXdpc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9xdWFudGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3JvdW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL2RlY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3ZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvem9vbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcGF0aC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXBhdGgvc3JjL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbG9jYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9tb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9wb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0QWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hcHBlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NsYXNzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXR1bS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VtcHR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZXhpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5zZXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9sb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yYWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmVtb3ZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3BhcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RvckFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zb3VyY2VFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy90b3VjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy90b3VjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2FyYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2FyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9hcmVhUmFkaWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2Jhc2lzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvYmFzaXNDbG9zZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9iYXNpc09wZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXJkaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhcmRpbmFsQ2xvc2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvY2FyZGluYWxPcGVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvY2F0bXVsbFJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhdG11bGxSb21DbG9zZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXRtdWxsUm9tT3Blbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2xpbmVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2xpbmVhckNsb3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL21vbm90b25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvbmF0dXJhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL3JhZGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL3N0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9kZXNjZW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9saW5lUmFkaWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvbGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9ub29wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb2Zmc2V0L2RpdmVyZ2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29mZnNldC9leHBhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vZmZzZXQvbm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29mZnNldC9zaWxob3VldHRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb2Zmc2V0L3dpZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29yZGVyL2FzY2VuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29yZGVyL2Rlc2NlbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vcmRlci9pbnNpZGVPdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vcmRlci9ub25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb3JkZXIvcmV2ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3BpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvcG9pbnRSYWRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9zdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9zeW1ib2wvY3Jvc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9zeW1ib2wvZGlhbW9uZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9zeW1ib2wvc3Rhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC93eWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL2ludGVydmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9hY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9pbnRlcnJ1cHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3NlbGVjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL2ludGVycnVwdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9hdHRyVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vaW50ZXJwb2xhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vcmVtb3ZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NjaGVkdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zZWxlY3RBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3N0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3N0eWxlVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3R3ZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jc3YvbXRzX21zcGRfcm9kX2RlYnQuY3N2Iiwid2VicGFjazovLy8uL3NyYy9jb2xvcnMuc2Nzcz84ZjUwIiwid2VicGFjazovLy8uL3NyYy9pbmZvQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXZlbnVlL2RvbnV0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXZlbnVlL2dkcC9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXZlbnVlL2dkcC9nZHAuc2Nzcz9kYWM3Iiwid2VicGFjazovLy8uL3NyYy9yZXZlbnVlL2dkcC9nZHBEb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXZlbnVlL2dkcC9pbmNvbWVEb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXZlbnVlL2dkcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmV2ZW51ZS9yZWNlaXB0cy11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmV2ZW51ZS9yZXZlYWwtaHdjdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbImQzIiwic2VsZWN0Iiwic2VsZWN0QWxsIiwiaW5mb0JveENsYXNzIiwidHJpZ2dlckNsYXNzIiwidHJpZ2dlckNsYXNzQWN0aXZlIiwiY2xvc2VCdXR0b25DbGFzcyIsImFjdGl2ZUNsYXNzIiwiYWRkQ2xvc2VJY29uIiwiYm94IiwiY2xvc2VCdXR0b24iLCJhcHBlbmQiLCJjbG9zZUljb24iLCJsb3dlciIsImF0dHIiLCJjbG9zZUJveCIsInRyaWdnZXIiLCJjbGFzc2VkIiwidHJpZ2dlckluZm9Cb3giLCJpZCIsImlubmVyV2lkdGgiLCJ3aW5kb3ciLCJjb29yZHMiLCJub2RlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImxlZnQiLCJ0b3AiLCJwYWdlWU9mZnNldCIsIm9uIiwiaW5pdCIsImVhY2giLCJhcmMiLCJwaWUiLCJyYWRpdXMiLCJhcmNGbiIsInBpZUZuIiwic29ydCIsInZhbHVlIiwiZCIsInNldEFyY1JhZGl1cyIsIm91dGVyUmFkaXVzIiwiaW5uZXJSYWRpdXMiLCJjcmVhdGVEb251dCIsImNvbnRhaW5lciIsInBlcmNlbnQiLCJkaWFtZXRlciIsImZpbGxDb2xvciIsImRhdGEiLCJnIiwidHJhbnNsYXRvciIsImVudGVyIiwiZG9udXQiLCJzdHlsZSIsImkiLCJzaGFkZWRDb2xvciIsInRleHQiLCJmcmFjdGlvblRvUGVyY2VudCIsImNvbG9ycyIsInRleHRDb2xvclBhcmFncmFwaCIsInNvdXJjZSIsIkJpZ051bWJlcnMiLCJldmVyeSIsInIiLCJ5ZWFyIiwic2VjdGlvbk9uZURhdGEiLCJsaW5lIiwiY3JlYXRlIiwic3ZnIiwiZG90Q29udGFpbmVyIiwiYWRkTGVnZW5kIiwiZG90Qm94IiwicmVjZWlwdHNDb25zdGFudHMiLCJkb3RDb250YWluZXJDbGFzcyIsImxlZ2VuZEJveCIsImhlaWdodCIsImdldEVsZW1lbnRCb3giLCJtYXJnaW4iLCJ3aWR0aCIsInkiLCJsaW5lRGF0YSIsImRvdHNSZWN0Iiwic2ltcGxpZnlOdW1iZXIiLCJnZHAiLCJzZXRHZHBEb3RzIiwiaW5jb21lSGVpZ2h0T2Zmc2V0IiwiZ2RwRG90Q291bnQiLCJnZHBEb3RDb2xvciIsImRvdFBvc2l0aW9uU3RhcnQiLCJkb3RQb3NpdGlvbkFjY2Vzc29yIiwiZ2V0IiwiZmlyc3RSb3dDb3VudCIsImRvdHNQZXJSb3ciLCJzdGFydEluZGV4IiwiZnVsbFJvd3MiLCJNYXRoIiwiZmxvb3IiLCJsYXN0Um93Q291bnQiLCJnZHBDb250YWluZXIiLCJyb3dPbmUiLCJyb3dDb3VudCIsInJvd1Bvc2l0aW9uIiwiZG90RmFjdG9yeSIsImRvdE9mZnNldCIsImNsb25lIiwibGFzdFJvdyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJlbmFibGVGYWN0Qm94IiwiZmFjdEJveCIsImFuaW1hdGlvbk5leHQiLCJ6b29tT3V0RG90cyIsInByZXZUcmFuc2Zvcm0iLCJ6b29tRHVyYXRpb24iLCJyZW1vdmUiLCJlbnRlckRvbnV0IiwiZG9udXRHcm91cCIsImRvbnV0Q29udGFpbmVyIiwiaW5jb21lIiwiZGVsYXkiLCJpbml0R2RwRG90cyIsImVzdGFibGlzaENvbnRhaW5lciIsInhTdGFydCIsImluY29tZUNvbnRhaW5lciIsImRvdHNXaWR0aCIsInJlYWR5SW5jb21lRG90cyIsImluY29tZUNvbnRhaW5lckNsYXNzIiwic2V0IiwiYnVpbGRIZWFkZXIiLCJidWlsZExlZ2VuZCIsInciLCJ4T2Zmc2V0Iiwic2V0RG90Q29udGFpbmVyIiwiaGVhZGluZ0hlaWdodCIsInNob3dUZXh0IiwicmV2ZWFsSHdjdGEiLCJpbml0Q29udGludWVCdXR0b24iLCJidXR0b24iLCJzZXRUaW1lb3V0IiwiZW50ZXJJbmNvbWVEb3RzIiwiaW5pdEluY29tZURvdHMiLCJsYXJnZURvdCIsInBoYXNlVHdvIiwiYWRkVGV4dCIsImV4cGxhbmF0aW9uIiwic3RyaXBTciIsImluaXREb3QiLCJiaW5kIiwic3RyaXBCciIsImRvdFBvc2l0aW9uIiwiZG90UG9zaXRpb25HZXR0ZXIiLCJkb3RQb3NpdGlvblNldHRlciIsInBvc2l0aW9uIiwic2hhZGVyQ29udGFpbmVyQ2xhc3MiLCJjb2xvciIsInJlbW92ZUNsYXNzIiwic2l6ZSIsImQzU2VsZWN0aW9uIiwicmVjdCIsImNlaWwiLCJyaWdodCIsImJvdHRvbSIsImdldFRyYW5zZm9ybSIsInJlIiwib3JpZ2luYWxUcmFuc2Zvcm0iLCJtYXRjaCIsIk51bWJlciIsInZpeiIsInNpbXBsaWZ5QmlsbGlvbnMiLCJuIiwiYmlsbGlvbiIsInJvdW5kIiwidHJpbGxpb24iLCJtaWxsaW9uIiwibmVnYXRpdmVTaWduIiwic2ltcGxpZmllciIsImxldHRlciIsImFicyIsIndvcmRXcmFwIiwibWF4V2lkdGgiLCJ3b3JkcyIsInNwbGl0IiwicmV2ZXJzZSIsIndvcmQiLCJsaW5lTnVtYmVyIiwibGluZUhlaWdodCIsInRzcGFuIiwibGVuZ3RoIiwicG9wIiwicHVzaCIsImpvaW4iLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJpbml0RHJvcFNoYWRvdyIsImZpbHRlciIsInByZWNpc2lvbiIsInBhcnNlSW50IiwiY29uc29sZSIsIndhcm4iLCJmYWRlQW5kUmVtb3ZlIiwic2VsZWN0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVEQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1REFBTSxXQUFXLHNEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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O0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9ERDtBQUFBO0FBQUE7QUFBQTtBQUF1Qzs7Ozs7Ozs7Ozs7OztBQ0F2QztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1F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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QmlILE1BQW5CO0FBQ0g7QUFFTSxTQUFTb0YsYUFBVCxDQUF1QkMsU0FBdkIsRUFBa0M3RixRQUFsQyxFQUE0QztBQUMvQ0EsVUFBUSxHQUFHQSxRQUFRLElBQUksSUFBdkI7QUFFQTZGLFdBQVMsQ0FBQzlGLFVBQVYsR0FDS0MsUUFETCxDQUNjQSxRQURkLEVBRUs3RixJQUZMLENBRVUsU0FGVixFQUVxQixDQUZyQixFQUdLZSxFQUhMLENBR1EsS0FIUixFQUdlLFlBQVk7QUFDbkI3QixNQUFFLENBQUNDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCa0gsTUFBaEI7QUFDSCxHQUxMO0FBTUgsQyIsImZpbGUiOiJnZHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9yZXZlbnVlL2Fzc2V0cy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcmV2ZW51ZS9nZHAvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbG9yR3JheURhcmtcIjogXCIjMzIzYTQ1XCIsXG5cdFwiY29sb3JQcmltYXJ5XCI6IFwiIzAwNzFiY1wiLFxuXHRcImNvbG9yUHJpbWFyeURhcmtlclwiOiBcIiMyMDU0OTNcIixcblx0XCJjb2xvclByaW1hcnlEYXJrZXN0XCI6IFwiIzExMmU1MVwiLFxuXHRcImNvbG9yUHJpbWFyeUFsdERhcmtlc3RcIjogXCIjMDQ2Yjk5XCIsXG5cdFwiY29sb3JQcmltYXJ5QWx0TGlnaHRcIjogXCIjOWJkYWYxXCIsXG5cdFwiY29sb3JQcmltYXJ5QWx0TGlnaHRlc3RcIjogXCIjZTFmM2Y4XCIsXG5cdFwiaW5jb21lXCI6IFwiIzRBOTBFMlwiLFxuXHRcInBhcmVudE9uZVwiOiBcIiMzNjczQkJcIixcblx0XCJ0ZXh0Q29sb3JIZWFkaW5nXCI6IFwiIzU1NTU1NVwiLFxuXHRcInRleHRDb2xvclBhcmFncmFwaFwiOiBcIiM2NjY2NjZcIixcblx0XCJjb2xvckdyYXlDb29sTGlnaHRcIjogXCIjZGNlNGVmXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjZ2RwLWZhY3RzIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgbWFyZ2luOiAwIDFyZW07IH1cXG4gICNnZHAtZmFjdHMgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgI2dkcC1mYWN0cyAudG91ciB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1heC13aWR0aDogMzAwcHg7IH1cXG5cXG4jZ2RwLWZhY3RzLm91dCB7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTIwcHgpIHtcXG4gICNnZHAtZmFjdHMge1xcbiAgICBjbGVhcjogbm9uZTtcXG4gICAgcGFkZGluZy10b3A6IDExMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogNjcwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAjZ2RwLWZhY3RzIGgxIHtcXG4gICAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICAucGFnZS13cmFwcGVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvOyB9IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbG9yKCkge31cblxuZXhwb3J0IHZhciBkYXJrZXIgPSAwLjc7XG5leHBvcnQgdmFyIGJyaWdodGVyID0gMSAvIGRhcmtlcjtcblxudmFyIHJlSSA9IFwiXFxcXHMqKFsrLV0/XFxcXGQrKVxcXFxzKlwiLFxuICAgIHJlTiA9IFwiXFxcXHMqKFsrLV0/XFxcXGQqXFxcXC4/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pXFxcXHMqXCIsXG4gICAgcmVQID0gXCJcXFxccyooWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPyklXFxcXHMqXCIsXG4gICAgcmVIZXgzID0gL14jKFswLTlhLWZdezN9KSQvLFxuICAgIHJlSGV4NiA9IC9eIyhbMC05YS1mXXs2fSkkLyxcbiAgICByZVJnYkludGVnZXIgPSBuZXcgUmVnRXhwKFwiXnJnYlxcXFwoXCIgKyBbcmVJLCByZUksIHJlSV0gKyBcIlxcXFwpJFwiKSxcbiAgICByZVJnYlBlcmNlbnQgPSBuZXcgUmVnRXhwKFwiXnJnYlxcXFwoXCIgKyBbcmVQLCByZVAsIHJlUF0gKyBcIlxcXFwpJFwiKSxcbiAgICByZVJnYmFJbnRlZ2VyID0gbmV3IFJlZ0V4cChcIl5yZ2JhXFxcXChcIiArIFtyZUksIHJlSSwgcmVJLCByZU5dICsgXCJcXFxcKSRcIiksXG4gICAgcmVSZ2JhUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJecmdiYVxcXFwoXCIgKyBbcmVQLCByZVAsIHJlUCwgcmVOXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlSHNsUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJeaHNsXFxcXChcIiArIFtyZU4sIHJlUCwgcmVQXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlSHNsYVBlcmNlbnQgPSBuZXcgUmVnRXhwKFwiXmhzbGFcXFxcKFwiICsgW3JlTiwgcmVQLCByZVAsIHJlTl0gKyBcIlxcXFwpJFwiKTtcblxudmFyIG5hbWVkID0ge1xuICBhbGljZWJsdWU6IDB4ZjBmOGZmLFxuICBhbnRpcXVld2hpdGU6IDB4ZmFlYmQ3LFxuICBhcXVhOiAweDAwZmZmZixcbiAgYXF1YW1hcmluZTogMHg3ZmZmZDQsXG4gIGF6dXJlOiAweGYwZmZmZixcbiAgYmVpZ2U6IDB4ZjVmNWRjLFxuICBiaXNxdWU6IDB4ZmZlNGM0LFxuICBibGFjazogMHgwMDAwMDAsXG4gIGJsYW5jaGVkYWxtb25kOiAweGZmZWJjZCxcbiAgYmx1ZTogMHgwMDAwZmYsXG4gIGJsdWV2aW9sZXQ6IDB4OGEyYmUyLFxuICBicm93bjogMHhhNTJhMmEsXG4gIGJ1cmx5d29vZDogMHhkZWI4ODcsXG4gIGNhZGV0Ymx1ZTogMHg1ZjllYTAsXG4gIGNoYXJ0cmV1c2U6IDB4N2ZmZjAwLFxuICBjaG9jb2xhdGU6IDB4ZDI2OTFlLFxuICBjb3JhbDogMHhmZjdmNTAsXG4gIGNvcm5mbG93ZXJibHVlOiAweDY0OTVlZCxcbiAgY29ybnNpbGs6IDB4ZmZmOGRjLFxuICBjcmltc29uOiAweGRjMTQzYyxcbiAgY3lhbjogMHgwMGZmZmYsXG4gIGRhcmtibHVlOiAweDAwMDA4YixcbiAgZGFya2N5YW46IDB4MDA4YjhiLFxuICBkYXJrZ29sZGVucm9kOiAweGI4ODYwYixcbiAgZGFya2dyYXk6IDB4YTlhOWE5LFxuICBkYXJrZ3JlZW46IDB4MDA2NDAwLFxuICBkYXJrZ3JleTogMHhhOWE5YTksXG4gIGRhcmtraGFraTogMHhiZGI3NmIsXG4gIGRhcmttYWdlbnRhOiAweDhiMDA4YixcbiAgZGFya29saXZlZ3JlZW46IDB4NTU2YjJmLFxuICBkYXJrb3JhbmdlOiAweGZmOGMwMCxcbiAgZGFya29yY2hpZDogMHg5OTMyY2MsXG4gIGRhcmtyZWQ6IDB4OGIwMDAwLFxuICBkYXJrc2FsbW9uOiAweGU5OTY3YSxcbiAgZGFya3NlYWdyZWVuOiAweDhmYmM4ZixcbiAgZGFya3NsYXRlYmx1ZTogMHg0ODNkOGIsXG4gIGRhcmtzbGF0ZWdyYXk6IDB4MmY0ZjRmLFxuICBkYXJrc2xhdGVncmV5OiAweDJmNGY0ZixcbiAgZGFya3R1cnF1b2lzZTogMHgwMGNlZDEsXG4gIGRhcmt2aW9sZXQ6IDB4OTQwMGQzLFxuICBkZWVwcGluazogMHhmZjE0OTMsXG4gIGRlZXBza3libHVlOiAweDAwYmZmZixcbiAgZGltZ3JheTogMHg2OTY5NjksXG4gIGRpbWdyZXk6IDB4Njk2OTY5LFxuICBkb2RnZXJibHVlOiAweDFlOTBmZixcbiAgZmlyZWJyaWNrOiAweGIyMjIyMixcbiAgZmxvcmFsd2hpdGU6IDB4ZmZmYWYwLFxuICBmb3Jlc3RncmVlbjogMHgyMjhiMjIsXG4gIGZ1Y2hzaWE6IDB4ZmYwMGZmLFxuICBnYWluc2Jvcm86IDB4ZGNkY2RjLFxuICBnaG9zdHdoaXRlOiAweGY4ZjhmZixcbiAgZ29sZDogMHhmZmQ3MDAsXG4gIGdvbGRlbnJvZDogMHhkYWE1MjAsXG4gIGdyYXk6IDB4ODA4MDgwLFxuICBncmVlbjogMHgwMDgwMDAsXG4gIGdyZWVueWVsbG93OiAweGFkZmYyZixcbiAgZ3JleTogMHg4MDgwODAsXG4gIGhvbmV5ZGV3OiAweGYwZmZmMCxcbiAgaG90cGluazogMHhmZjY5YjQsXG4gIGluZGlhbnJlZDogMHhjZDVjNWMsXG4gIGluZGlnbzogMHg0YjAwODIsXG4gIGl2b3J5OiAweGZmZmZmMCxcbiAga2hha2k6IDB4ZjBlNjhjLFxuICBsYXZlbmRlcjogMHhlNmU2ZmEsXG4gIGxhdmVuZGVyYmx1c2g6IDB4ZmZmMGY1LFxuICBsYXduZ3JlZW46IDB4N2NmYzAwLFxuICBsZW1vbmNoaWZmb246IDB4ZmZmYWNkLFxuICBsaWdodGJsdWU6IDB4YWRkOGU2LFxuICBsaWdodGNvcmFsOiAweGYwODA4MCxcbiAgbGlnaHRjeWFuOiAweGUwZmZmZixcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDB4ZmFmYWQyLFxuICBsaWdodGdyYXk6IDB4ZDNkM2QzLFxuICBsaWdodGdyZWVuOiAweDkwZWU5MCxcbiAgbGlnaHRncmV5OiAweGQzZDNkMyxcbiAgbGlnaHRwaW5rOiAweGZmYjZjMSxcbiAgbGlnaHRzYWxtb246IDB4ZmZhMDdhLFxuICBsaWdodHNlYWdyZWVuOiAweDIwYjJhYSxcbiAgbGlnaHRza3libHVlOiAweDg3Y2VmYSxcbiAgbGlnaHRzbGF0ZWdyYXk6IDB4Nzc4ODk5LFxuICBsaWdodHNsYXRlZ3JleTogMHg3Nzg4OTksXG4gIGxpZ2h0c3RlZWxibHVlOiAweGIwYzRkZSxcbiAgbGlnaHR5ZWxsb3c6IDB4ZmZmZmUwLFxuICBsaW1lOiAweDAwZmYwMCxcbiAgbGltZWdyZWVuOiAweDMyY2QzMixcbiAgbGluZW46IDB4ZmFmMGU2LFxuICBtYWdlbnRhOiAweGZmMDBmZixcbiAgbWFyb29uOiAweDgwMDAwMCxcbiAgbWVkaXVtYXF1YW1hcmluZTogMHg2NmNkYWEsXG4gIG1lZGl1bWJsdWU6IDB4MDAwMGNkLFxuICBtZWRpdW1vcmNoaWQ6IDB4YmE1NWQzLFxuICBtZWRpdW1wdXJwbGU6IDB4OTM3MGRiLFxuICBtZWRpdW1zZWFncmVlbjogMHgzY2IzNzEsXG4gIG1lZGl1bXNsYXRlYmx1ZTogMHg3YjY4ZWUsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAweDAwZmE5YSxcbiAgbWVkaXVtdHVycXVvaXNlOiAweDQ4ZDFjYyxcbiAgbWVkaXVtdmlvbGV0cmVkOiAweGM3MTU4NSxcbiAgbWlkbmlnaHRibHVlOiAweDE5MTk3MCxcbiAgbWludGNyZWFtOiAweGY1ZmZmYSxcbiAgbWlzdHlyb3NlOiAweGZmZTRlMSxcbiAgbW9jY2FzaW46IDB4ZmZlNGI1LFxuICBuYXZham93aGl0ZTogMHhmZmRlYWQsXG4gIG5hdnk6IDB4MDAwMDgwLFxuICBvbGRsYWNlOiAweGZkZjVlNixcbiAgb2xpdmU6IDB4ODA4MDAwLFxuICBvbGl2ZWRyYWI6IDB4NmI4ZTIzLFxuICBvcmFuZ2U6IDB4ZmZhNTAwLFxuICBvcmFuZ2VyZWQ6IDB4ZmY0NTAwLFxuICBvcmNoaWQ6IDB4ZGE3MGQ2LFxuICBwYWxlZ29sZGVucm9kOiAweGVlZThhYSxcbiAgcGFsZWdyZWVuOiAweDk4ZmI5OCxcbiAgcGFsZXR1cnF1b2lzZTogMHhhZmVlZWUsXG4gIHBhbGV2aW9sZXRyZWQ6IDB4ZGI3MDkzLFxuICBwYXBheWF3aGlwOiAweGZmZWZkNSxcbiAgcGVhY2hwdWZmOiAweGZmZGFiOSxcbiAgcGVydTogMHhjZDg1M2YsXG4gIHBpbms6IDB4ZmZjMGNiLFxuICBwbHVtOiAweGRkYTBkZCxcbiAgcG93ZGVyYmx1ZTogMHhiMGUwZTYsXG4gIHB1cnBsZTogMHg4MDAwODAsXG4gIHJlYmVjY2FwdXJwbGU6IDB4NjYzMzk5LFxuICByZWQ6IDB4ZmYwMDAwLFxuICByb3N5YnJvd246IDB4YmM4ZjhmLFxuICByb3lhbGJsdWU6IDB4NDE2OWUxLFxuICBzYWRkbGVicm93bjogMHg4YjQ1MTMsXG4gIHNhbG1vbjogMHhmYTgwNzIsXG4gIHNhbmR5YnJvd246IDB4ZjRhNDYwLFxuICBzZWFncmVlbjogMHgyZThiNTcsXG4gIHNlYXNoZWxsOiAweGZmZjVlZSxcbiAgc2llbm5hOiAweGEwNTIyZCxcbiAgc2lsdmVyOiAweGMwYzBjMCxcbiAgc2t5Ymx1ZTogMHg4N2NlZWIsXG4gIHNsYXRlYmx1ZTogMHg2YTVhY2QsXG4gIHNsYXRlZ3JheTogMHg3MDgwOTAsXG4gIHNsYXRlZ3JleTogMHg3MDgwOTAsXG4gIHNub3c6IDB4ZmZmYWZhLFxuICBzcHJpbmdncmVlbjogMHgwMGZmN2YsXG4gIHN0ZWVsYmx1ZTogMHg0NjgyYjQsXG4gIHRhbjogMHhkMmI0OGMsXG4gIHRlYWw6IDB4MDA4MDgwLFxuICB0aGlzdGxlOiAweGQ4YmZkOCxcbiAgdG9tYXRvOiAweGZmNjM0NyxcbiAgdHVycXVvaXNlOiAweDQwZTBkMCxcbiAgdmlvbGV0OiAweGVlODJlZSxcbiAgd2hlYXQ6IDB4ZjVkZWIzLFxuICB3aGl0ZTogMHhmZmZmZmYsXG4gIHdoaXRlc21va2U6IDB4ZjVmNWY1LFxuICB5ZWxsb3c6IDB4ZmZmZjAwLFxuICB5ZWxsb3dncmVlbjogMHg5YWNkMzJcbn07XG5cbmRlZmluZShDb2xvciwgY29sb3IsIHtcbiAgZGlzcGxheWFibGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJnYigpLmRpc3BsYXlhYmxlKCk7XG4gIH0sXG4gIGhleDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmdiKCkuaGV4KCk7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2IoKSArIFwiXCI7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcihmb3JtYXQpIHtcbiAgdmFyIG07XG4gIGZvcm1hdCA9IChmb3JtYXQgKyBcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIChtID0gcmVIZXgzLmV4ZWMoZm9ybWF0KSkgPyAobSA9IHBhcnNlSW50KG1bMV0sIDE2KSwgbmV3IFJnYigobSA+PiA4ICYgMHhmKSB8IChtID4+IDQgJiAweDBmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKChtICYgMHhmKSA8PCA0KSB8IChtICYgMHhmKSwgMSkpIC8vICNmMDBcbiAgICAgIDogKG0gPSByZUhleDYuZXhlYyhmb3JtYXQpKSA/IHJnYm4ocGFyc2VJbnQobVsxXSwgMTYpKSAvLyAjZmYwMDAwXG4gICAgICA6IChtID0gcmVSZ2JJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyBuZXcgUmdiKG1bMV0sIG1bMl0sIG1bM10sIDEpIC8vIHJnYigyNTUsIDAsIDApXG4gICAgICA6IChtID0gcmVSZ2JQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBuZXcgUmdiKG1bMV0gKiAyNTUgLyAxMDAsIG1bMl0gKiAyNTUgLyAxMDAsIG1bM10gKiAyNTUgLyAxMDAsIDEpIC8vIHJnYigxMDAlLCAwJSwgMCUpXG4gICAgICA6IChtID0gcmVSZ2JhSW50ZWdlci5leGVjKGZvcm1hdCkpID8gcmdiYShtWzFdLCBtWzJdLCBtWzNdLCBtWzRdKSAvLyByZ2JhKDI1NSwgMCwgMCwgMSlcbiAgICAgIDogKG0gPSByZVJnYmFQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0gKiAyNTUgLyAxMDAsIG1bMl0gKiAyNTUgLyAxMDAsIG1bM10gKiAyNTUgLyAxMDAsIG1bNF0pIC8vIHJnYigxMDAlLCAwJSwgMCUsIDEpXG4gICAgICA6IChtID0gcmVIc2xQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBoc2xhKG1bMV0sIG1bMl0gLyAxMDAsIG1bM10gLyAxMDAsIDEpIC8vIGhzbCgxMjAsIDUwJSwgNTAlKVxuICAgICAgOiAobSA9IHJlSHNsYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgbVs0XSkgLy8gaHNsYSgxMjAsIDUwJSwgNTAlLCAxKVxuICAgICAgOiBuYW1lZC5oYXNPd25Qcm9wZXJ0eShmb3JtYXQpID8gcmdibihuYW1lZFtmb3JtYXRdKVxuICAgICAgOiBmb3JtYXQgPT09IFwidHJhbnNwYXJlbnRcIiA/IG5ldyBSZ2IoTmFOLCBOYU4sIE5hTiwgMClcbiAgICAgIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gcmdibihuKSB7XG4gIHJldHVybiBuZXcgUmdiKG4gPj4gMTYgJiAweGZmLCBuID4+IDggJiAweGZmLCBuICYgMHhmZiwgMSk7XG59XG5cbmZ1bmN0aW9uIHJnYmEociwgZywgYiwgYSkge1xuICBpZiAoYSA8PSAwKSByID0gZyA9IGIgPSBOYU47XG4gIHJldHVybiBuZXcgUmdiKHIsIGcsIGIsIGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiQ29udmVydChvKSB7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IFJnYjtcbiAgbyA9IG8ucmdiKCk7XG4gIHJldHVybiBuZXcgUmdiKG8uciwgby5nLCBvLmIsIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2IociwgZywgYiwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IHJnYkNvbnZlcnQocikgOiBuZXcgUmdiKHIsIGcsIGIsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHRoaXMuciA9ICtyO1xuICB0aGlzLmcgPSArZztcbiAgdGhpcy5iID0gK2I7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoUmdiLCByZ2IsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBicmlnaHRlciA6IE1hdGgucG93KGJyaWdodGVyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBkaXNwbGF5YWJsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICgwIDw9IHRoaXMuciAmJiB0aGlzLnIgPD0gMjU1KVxuICAgICAgICAmJiAoMCA8PSB0aGlzLmcgJiYgdGhpcy5nIDw9IDI1NSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5iICYmIHRoaXMuYiA8PSAyNTUpXG4gICAgICAgICYmICgwIDw9IHRoaXMub3BhY2l0eSAmJiB0aGlzLm9wYWNpdHkgPD0gMSk7XG4gIH0sXG4gIGhleDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgaGV4KHRoaXMucikgKyBoZXgodGhpcy5nKSArIGhleCh0aGlzLmIpO1xuICB9LFxuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGEgPSB0aGlzLm9wYWNpdHk7IGEgPSBpc05hTihhKSA/IDEgOiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBhKSk7XG4gICAgcmV0dXJuIChhID09PSAxID8gXCJyZ2IoXCIgOiBcInJnYmEoXCIpXG4gICAgICAgICsgTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKHRoaXMucikgfHwgMCkpICsgXCIsIFwiXG4gICAgICAgICsgTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKHRoaXMuZykgfHwgMCkpICsgXCIsIFwiXG4gICAgICAgICsgTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKHRoaXMuYikgfHwgMCkpXG4gICAgICAgICsgKGEgPT09IDEgPyBcIilcIiA6IFwiLCBcIiArIGEgKyBcIilcIik7XG4gIH1cbn0pKTtcblxuZnVuY3Rpb24gaGV4KHZhbHVlKSB7XG4gIHZhbHVlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKHZhbHVlKSB8fCAwKSk7XG4gIHJldHVybiAodmFsdWUgPCAxNiA/IFwiMFwiIDogXCJcIikgKyB2YWx1ZS50b1N0cmluZygxNik7XG59XG5cbmZ1bmN0aW9uIGhzbGEoaCwgcywgbCwgYSkge1xuICBpZiAoYSA8PSAwKSBoID0gcyA9IGwgPSBOYU47XG4gIGVsc2UgaWYgKGwgPD0gMCB8fCBsID49IDEpIGggPSBzID0gTmFOO1xuICBlbHNlIGlmIChzIDw9IDApIGggPSBOYU47XG4gIHJldHVybiBuZXcgSHNsKGgsIHMsIGwsIGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHNsQ29udmVydChvKSB7XG4gIGlmIChvIGluc3RhbmNlb2YgSHNsKSByZXR1cm4gbmV3IEhzbChvLmgsIG8ucywgby5sLCBvLm9wYWNpdHkpO1xuICBpZiAoIShvIGluc3RhbmNlb2YgQ29sb3IpKSBvID0gY29sb3Iobyk7XG4gIGlmICghbykgcmV0dXJuIG5ldyBIc2w7XG4gIGlmIChvIGluc3RhbmNlb2YgSHNsKSByZXR1cm4gbztcbiAgbyA9IG8ucmdiKCk7XG4gIHZhciByID0gby5yIC8gMjU1LFxuICAgICAgZyA9IG8uZyAvIDI1NSxcbiAgICAgIGIgPSBvLmIgLyAyNTUsXG4gICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKSxcbiAgICAgIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuICAgICAgaCA9IE5hTixcbiAgICAgIHMgPSBtYXggLSBtaW4sXG4gICAgICBsID0gKG1heCArIG1pbikgLyAyO1xuICBpZiAocykge1xuICAgIGlmIChyID09PSBtYXgpIGggPSAoZyAtIGIpIC8gcyArIChnIDwgYikgKiA2O1xuICAgIGVsc2UgaWYgKGcgPT09IG1heCkgaCA9IChiIC0gcikgLyBzICsgMjtcbiAgICBlbHNlIGggPSAociAtIGcpIC8gcyArIDQ7XG4gICAgcyAvPSBsIDwgMC41ID8gbWF4ICsgbWluIDogMiAtIG1heCAtIG1pbjtcbiAgICBoICo9IDYwO1xuICB9IGVsc2Uge1xuICAgIHMgPSBsID4gMCAmJiBsIDwgMSA/IDAgOiBoO1xuICB9XG4gIHJldHVybiBuZXcgSHNsKGgsIHMsIGwsIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc2woaCwgcywgbCwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGhzbENvbnZlcnQoaCkgOiBuZXcgSHNsKGgsIHMsIGwsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZnVuY3Rpb24gSHNsKGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgdGhpcy5oID0gK2g7XG4gIHRoaXMucyA9ICtzO1xuICB0aGlzLmwgPSArbDtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShIc2wsIGhzbCwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IEhzbCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaCA9IHRoaXMuaCAlIDM2MCArICh0aGlzLmggPCAwKSAqIDM2MCxcbiAgICAgICAgcyA9IGlzTmFOKGgpIHx8IGlzTmFOKHRoaXMucykgPyAwIDogdGhpcy5zLFxuICAgICAgICBsID0gdGhpcy5sLFxuICAgICAgICBtMiA9IGwgKyAobCA8IDAuNSA/IGwgOiAxIC0gbCkgKiBzLFxuICAgICAgICBtMSA9IDIgKiBsIC0gbTI7XG4gICAgcmV0dXJuIG5ldyBSZ2IoXG4gICAgICBoc2wycmdiKGggPj0gMjQwID8gaCAtIDI0MCA6IGggKyAxMjAsIG0xLCBtMiksXG4gICAgICBoc2wycmdiKGgsIG0xLCBtMiksXG4gICAgICBoc2wycmdiKGggPCAxMjAgPyBoICsgMjQwIDogaCAtIDEyMCwgbTEsIG0yKSxcbiAgICAgIHRoaXMub3BhY2l0eVxuICAgICk7XG4gIH0sXG4gIGRpc3BsYXlhYmxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKDAgPD0gdGhpcy5zICYmIHRoaXMucyA8PSAxIHx8IGlzTmFOKHRoaXMucykpXG4gICAgICAgICYmICgwIDw9IHRoaXMubCAmJiB0aGlzLmwgPD0gMSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5vcGFjaXR5ICYmIHRoaXMub3BhY2l0eSA8PSAxKTtcbiAgfVxufSkpO1xuXG4vKiBGcm9tIEZ2RCAxMy4zNywgQ1NTIENvbG9yIE1vZHVsZSBMZXZlbCAzICovXG5mdW5jdGlvbiBoc2wycmdiKGgsIG0xLCBtMikge1xuICByZXR1cm4gKGggPCA2MCA/IG0xICsgKG0yIC0gbTEpICogaCAvIDYwXG4gICAgICA6IGggPCAxODAgPyBtMlxuICAgICAgOiBoIDwgMjQwID8gbTEgKyAobTIgLSBtMSkgKiAoMjQwIC0gaCkgLyA2MFxuICAgICAgOiBtMSkgKiAyNTU7XG59XG4iLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmVcIjtcbmltcG9ydCB7Q29sb3IsIHJnYkNvbnZlcnQsIFJnYiwgZGFya2VyLCBicmlnaHRlcn0gZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCB7ZGVnMnJhZCwgcmFkMmRlZ30gZnJvbSBcIi4vbWF0aFwiO1xuXG52YXIgQSA9IC0wLjE0ODYxLFxuICAgIEIgPSArMS43ODI3NyxcbiAgICBDID0gLTAuMjkyMjcsXG4gICAgRCA9IC0wLjkwNjQ5LFxuICAgIEUgPSArMS45NzI5NCxcbiAgICBFRCA9IEUgKiBELFxuICAgIEVCID0gRSAqIEIsXG4gICAgQkNfREEgPSBCICogQyAtIEQgKiBBO1xuXG5mdW5jdGlvbiBjdWJlaGVsaXhDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBDdWJlaGVsaXgpIHJldHVybiBuZXcgQ3ViZWhlbGl4KG8uaCwgby5zLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBSZ2IpKSBvID0gcmdiQ29udmVydChvKTtcbiAgdmFyIHIgPSBvLnIgLyAyNTUsXG4gICAgICBnID0gby5nIC8gMjU1LFxuICAgICAgYiA9IG8uYiAvIDI1NSxcbiAgICAgIGwgPSAoQkNfREEgKiBiICsgRUQgKiByIC0gRUIgKiBnKSAvIChCQ19EQSArIEVEIC0gRUIpLFxuICAgICAgYmwgPSBiIC0gbCxcbiAgICAgIGsgPSAoRSAqIChnIC0gbCkgLSBDICogYmwpIC8gRCxcbiAgICAgIHMgPSBNYXRoLnNxcnQoayAqIGsgKyBibCAqIGJsKSAvIChFICogbCAqICgxIC0gbCkpLCAvLyBOYU4gaWYgbD0wIG9yIGw9MVxuICAgICAgaCA9IHMgPyBNYXRoLmF0YW4yKGssIGJsKSAqIHJhZDJkZWcgLSAxMjAgOiBOYU47XG4gIHJldHVybiBuZXcgQ3ViZWhlbGl4KGggPCAwID8gaCArIDM2MCA6IGgsIHMsIGwsIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1YmVoZWxpeChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gY3ViZWhlbGl4Q29udmVydChoKSA6IG5ldyBDdWJlaGVsaXgoaCwgcywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ3ViZWhlbGl4KGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgdGhpcy5oID0gK2g7XG4gIHRoaXMucyA9ICtzO1xuICB0aGlzLmwgPSArbDtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShDdWJlaGVsaXgsIGN1YmVoZWxpeCwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgQ3ViZWhlbGl4KHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IEN1YmVoZWxpeCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaCA9IGlzTmFOKHRoaXMuaCkgPyAwIDogKHRoaXMuaCArIDEyMCkgKiBkZWcycmFkLFxuICAgICAgICBsID0gK3RoaXMubCxcbiAgICAgICAgYSA9IGlzTmFOKHRoaXMucykgPyAwIDogdGhpcy5zICogbCAqICgxIC0gbCksXG4gICAgICAgIGNvc2ggPSBNYXRoLmNvcyhoKSxcbiAgICAgICAgc2luaCA9IE1hdGguc2luKGgpO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgMjU1ICogKGwgKyBhICogKEEgKiBjb3NoICsgQiAqIHNpbmgpKSxcbiAgICAgIDI1NSAqIChsICsgYSAqIChDICogY29zaCArIEQgKiBzaW5oKSksXG4gICAgICAyNTUgKiAobCArIGEgKiAoRSAqIGNvc2gpKSxcbiAgICAgIHRoaXMub3BhY2l0eVxuICAgICk7XG4gIH1cbn0pKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnN0cnVjdG9yLCBmYWN0b3J5LCBwcm90b3R5cGUpIHtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gZmFjdG9yeS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKHBhcmVudCwgZGVmaW5pdGlvbikge1xuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQucHJvdG90eXBlKTtcbiAgZm9yICh2YXIga2V5IGluIGRlZmluaXRpb24pIHByb3RvdHlwZVtrZXldID0gZGVmaW5pdGlvbltrZXldO1xuICByZXR1cm4gcHJvdG90eXBlO1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGNvbG9yLCByZ2IsIGhzbH0gZnJvbSBcIi4vY29sb3JcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBsYWIsIGhjbCwgbGNoLCBncmF5fSBmcm9tIFwiLi9sYWJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdWJlaGVsaXh9IGZyb20gXCIuL2N1YmVoZWxpeFwiO1xuIiwiaW1wb3J0IGRlZmluZSwge2V4dGVuZH0gZnJvbSBcIi4vZGVmaW5lXCI7XG5pbXBvcnQge0NvbG9yLCByZ2JDb252ZXJ0LCBSZ2J9IGZyb20gXCIuL2NvbG9yXCI7XG5pbXBvcnQge2RlZzJyYWQsIHJhZDJkZWd9IGZyb20gXCIuL21hdGhcIjtcblxuLy8gaHR0cHM6Ly9iZXRhLm9ic2VydmFibGVocS5jb20vQG1ib3N0b2NrL2xhYi1hbmQtcmdiXG52YXIgSyA9IDE4LFxuICAgIFhuID0gMC45NjQyMixcbiAgICBZbiA9IDEsXG4gICAgWm4gPSAwLjgyNTIxLFxuICAgIHQwID0gNCAvIDI5LFxuICAgIHQxID0gNiAvIDI5LFxuICAgIHQyID0gMyAqIHQxICogdDEsXG4gICAgdDMgPSB0MSAqIHQxICogdDE7XG5cbmZ1bmN0aW9uIGxhYkNvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIExhYikgcmV0dXJuIG5ldyBMYWIoby5sLCBvLmEsIG8uYiwgby5vcGFjaXR5KTtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIY2wpIHtcbiAgICBpZiAoaXNOYU4oby5oKSkgcmV0dXJuIG5ldyBMYWIoby5sLCAwLCAwLCBvLm9wYWNpdHkpO1xuICAgIHZhciBoID0gby5oICogZGVnMnJhZDtcbiAgICByZXR1cm4gbmV3IExhYihvLmwsIE1hdGguY29zKGgpICogby5jLCBNYXRoLnNpbihoKSAqIG8uYywgby5vcGFjaXR5KTtcbiAgfVxuICBpZiAoIShvIGluc3RhbmNlb2YgUmdiKSkgbyA9IHJnYkNvbnZlcnQobyk7XG4gIHZhciByID0gcmdiMmxyZ2Ioby5yKSxcbiAgICAgIGcgPSByZ2IybHJnYihvLmcpLFxuICAgICAgYiA9IHJnYjJscmdiKG8uYiksXG4gICAgICB5ID0geHl6MmxhYigoMC4yMjI1MDQ1ICogciArIDAuNzE2ODc4NiAqIGcgKyAwLjA2MDYxNjkgKiBiKSAvIFluKSwgeCwgejtcbiAgaWYgKHIgPT09IGcgJiYgZyA9PT0gYikgeCA9IHogPSB5OyBlbHNlIHtcbiAgICB4ID0geHl6MmxhYigoMC40MzYwNzQ3ICogciArIDAuMzg1MDY0OSAqIGcgKyAwLjE0MzA4MDQgKiBiKSAvIFhuKTtcbiAgICB6ID0geHl6MmxhYigoMC4wMTM5MzIyICogciArIDAuMDk3MTA0NSAqIGcgKyAwLjcxNDE3MzMgKiBiKSAvIFpuKTtcbiAgfVxuICByZXR1cm4gbmV3IExhYigxMTYgKiB5IC0gMTYsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geiksIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmF5KGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIG5ldyBMYWIobCwgMCwgMCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYWIobCwgYSwgYiwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGxhYkNvbnZlcnQobCkgOiBuZXcgTGFiKGwsIGEsIGIsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExhYihsLCBhLCBiLCBvcGFjaXR5KSB7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLmEgPSArYTtcbiAgdGhpcy5iID0gK2I7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoTGFiLCBsYWIsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcjogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgTGFiKHRoaXMubCArIEsgKiAoayA9PSBudWxsID8gMSA6IGspLCB0aGlzLmEsIHRoaXMuYiwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBMYWIodGhpcy5sIC0gSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMuYSwgdGhpcy5iLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB5ID0gKHRoaXMubCArIDE2KSAvIDExNixcbiAgICAgICAgeCA9IGlzTmFOKHRoaXMuYSkgPyB5IDogeSArIHRoaXMuYSAvIDUwMCxcbiAgICAgICAgeiA9IGlzTmFOKHRoaXMuYikgPyB5IDogeSAtIHRoaXMuYiAvIDIwMDtcbiAgICB4ID0gWG4gKiBsYWIyeHl6KHgpO1xuICAgIHkgPSBZbiAqIGxhYjJ4eXooeSk7XG4gICAgeiA9IFpuICogbGFiMnh5eih6KTtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGxyZ2IycmdiKCAzLjEzMzg1NjEgKiB4IC0gMS42MTY4NjY3ICogeSAtIDAuNDkwNjE0NiAqIHopLFxuICAgICAgbHJnYjJyZ2IoLTAuOTc4NzY4NCAqIHggKyAxLjkxNjE0MTUgKiB5ICsgMC4wMzM0NTQwICogeiksXG4gICAgICBscmdiMnJnYiggMC4wNzE5NDUzICogeCAtIDAuMjI4OTkxNCAqIHkgKyAxLjQwNTI0MjcgKiB6KSxcbiAgICAgIHRoaXMub3BhY2l0eVxuICAgICk7XG4gIH1cbn0pKTtcblxuZnVuY3Rpb24geHl6MmxhYih0KSB7XG4gIHJldHVybiB0ID4gdDMgPyBNYXRoLnBvdyh0LCAxIC8gMykgOiB0IC8gdDIgKyB0MDtcbn1cblxuZnVuY3Rpb24gbGFiMnh5eih0KSB7XG4gIHJldHVybiB0ID4gdDEgPyB0ICogdCAqIHQgOiB0MiAqICh0IC0gdDApO1xufVxuXG5mdW5jdGlvbiBscmdiMnJnYih4KSB7XG4gIHJldHVybiAyNTUgKiAoeCA8PSAwLjAwMzEzMDggPyAxMi45MiAqIHggOiAxLjA1NSAqIE1hdGgucG93KHgsIDEgLyAyLjQpIC0gMC4wNTUpO1xufVxuXG5mdW5jdGlvbiByZ2IybHJnYih4KSB7XG4gIHJldHVybiAoeCAvPSAyNTUpIDw9IDAuMDQwNDUgPyB4IC8gMTIuOTIgOiBNYXRoLnBvdygoeCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xufVxuXG5mdW5jdGlvbiBoY2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIY2wpIHJldHVybiBuZXcgSGNsKG8uaCwgby5jLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBMYWIpKSBvID0gbGFiQ29udmVydChvKTtcbiAgaWYgKG8uYSA9PT0gMCAmJiBvLmIgPT09IDApIHJldHVybiBuZXcgSGNsKE5hTiwgMCwgby5sLCBvLm9wYWNpdHkpO1xuICB2YXIgaCA9IE1hdGguYXRhbjIoby5iLCBvLmEpICogcmFkMmRlZztcbiAgcmV0dXJuIG5ldyBIY2woaCA8IDAgPyBoICsgMzYwIDogaCwgTWF0aC5zcXJ0KG8uYSAqIG8uYSArIG8uYiAqIG8uYiksIG8ubCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxjaChsLCBjLCBoLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaGNsQ29udmVydChsKSA6IG5ldyBIY2woaCwgYywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGNsKGgsIGMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoY2xDb252ZXJ0KGgpIDogbmV3IEhjbChoLCBjLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIY2woaCwgYywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5jID0gK2M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEhjbCwgaGNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IEhjbCh0aGlzLmgsIHRoaXMuYywgdGhpcy5sICsgSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgSGNsKHRoaXMuaCwgdGhpcy5jLCB0aGlzLmwgLSBLICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGFiQ29udmVydCh0aGlzKS5yZ2IoKTtcbiAgfVxufSkpO1xuIiwiZXhwb3J0IHZhciBkZWcycmFkID0gTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCB2YXIgcmFkMmRlZyA9IDE4MCAvIE1hdGguUEk7XG4iLCJ2YXIgbm9vcCA9IHt2YWx1ZTogZnVuY3Rpb24oKSB7fX07XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF8gPSB7fSwgdDsgaSA8IG47ICsraSkge1xuICAgIGlmICghKHQgPSBhcmd1bWVudHNbaV0gKyBcIlwiKSB8fCAodCBpbiBfKSkgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCB0eXBlOiBcIiArIHQpO1xuICAgIF9bdF0gPSBbXTtcbiAgfVxuICByZXR1cm4gbmV3IERpc3BhdGNoKF8pO1xufVxuXG5mdW5jdGlvbiBEaXNwYXRjaChfKSB7XG4gIHRoaXMuXyA9IF87XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcywgdHlwZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIGlmICh0ICYmICF0eXBlcy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5EaXNwYXRjaC5wcm90b3R5cGUgPSBkaXNwYXRjaC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBEaXNwYXRjaCxcbiAgb246IGZ1bmN0aW9uKHR5cGVuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBfID0gdGhpcy5fLFxuICAgICAgICBUID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiLCBfKSxcbiAgICAgICAgdCxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gVC5sZW5ndGg7XG5cbiAgICAvLyBJZiBubyBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIG9mIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpICYmICh0ID0gZ2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUpKSkgcmV0dXJuIHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgYSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNldCB0aGUgY2FsbGJhY2sgZm9yIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBudWxsIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJlbW92ZSBjYWxsYmFja3Mgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY2FsbGJhY2s6IFwiICsgY2FsbGJhY2spO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgY2FsbGJhY2spO1xuICAgICAgZWxzZSBpZiAoY2FsbGJhY2sgPT0gbnVsbCkgZm9yICh0IGluIF8pIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb3B5ID0ge30sIF8gPSB0aGlzLl87XG4gICAgZm9yICh2YXIgdCBpbiBfKSBjb3B5W3RdID0gX1t0XS5zbGljZSgpO1xuICAgIHJldHVybiBuZXcgRGlzcGF0Y2goY29weSk7XG4gIH0sXG4gIGNhbGw6IGZ1bmN0aW9uKHR5cGUsIHRoYXQpIHtcbiAgICBpZiAoKG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMikgPiAwKSBmb3IgKHZhciBhcmdzID0gbmV3IEFycmF5KG4pLCBpID0gMCwgbiwgdDsgaSA8IG47ICsraSkgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbih0eXBlLCB0aGF0LCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXQodHlwZSwgbmFtZSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoLCBjOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKChjID0gdHlwZVtpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldCh0eXBlLCBuYW1lLCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKHR5cGVbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdHlwZVtpXSA9IG5vb3AsIHR5cGUgPSB0eXBlLnNsaWNlKDAsIGkpLmNvbmNhdCh0eXBlLnNsaWNlKGkgKyAxKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHR5cGUucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IGNhbGxiYWNrfSk7XG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaDtcbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkaXNwYXRjaH0gZnJvbSBcIi4vZGlzcGF0Y2hcIjtcbiIsInZhciBvdmVyc2hvb3QgPSAxLjcwMTU4O1xuXG5leHBvcnQgdmFyIGJhY2tJbiA9IChmdW5jdGlvbiBjdXN0b20ocykge1xuICBzID0gK3M7XG5cbiAgZnVuY3Rpb24gYmFja0luKHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKTtcbiAgfVxuXG4gIGJhY2tJbi5vdmVyc2hvb3QgPSBjdXN0b207XG5cbiAgcmV0dXJuIGJhY2tJbjtcbn0pKG92ZXJzaG9vdCk7XG5cbmV4cG9ydCB2YXIgYmFja091dCA9IChmdW5jdGlvbiBjdXN0b20ocykge1xuICBzID0gK3M7XG5cbiAgZnVuY3Rpb24gYmFja091dCh0KSB7XG4gICAgcmV0dXJuIC0tdCAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDE7XG4gIH1cblxuICBiYWNrT3V0Lm92ZXJzaG9vdCA9IGN1c3RvbTtcblxuICByZXR1cm4gYmFja091dDtcbn0pKG92ZXJzaG9vdCk7XG5cbmV4cG9ydCB2YXIgYmFja0luT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShzKSB7XG4gIHMgPSArcztcblxuICBmdW5jdGlvbiBiYWNrSW5PdXQodCkge1xuICAgIHJldHVybiAoKHQgKj0gMikgPCAxID8gdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSA6ICh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMikgLyAyO1xuICB9XG5cbiAgYmFja0luT3V0Lm92ZXJzaG9vdCA9IGN1c3RvbTtcblxuICByZXR1cm4gYmFja0luT3V0O1xufSkob3ZlcnNob290KTtcbiIsInZhciBiMSA9IDQgLyAxMSxcbiAgICBiMiA9IDYgLyAxMSxcbiAgICBiMyA9IDggLyAxMSxcbiAgICBiNCA9IDMgLyA0LFxuICAgIGI1ID0gOSAvIDExLFxuICAgIGI2ID0gMTAgLyAxMSxcbiAgICBiNyA9IDE1IC8gMTYsXG4gICAgYjggPSAyMSAvIDIyLFxuICAgIGI5ID0gNjMgLyA2NCxcbiAgICBiMCA9IDEgLyBiMSAvIGIxO1xuXG5leHBvcnQgZnVuY3Rpb24gYm91bmNlSW4odCkge1xuICByZXR1cm4gMSAtIGJvdW5jZU91dCgxIC0gdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VPdXQodCkge1xuICByZXR1cm4gKHQgPSArdCkgPCBiMSA/IGIwICogdCAqIHQgOiB0IDwgYjMgPyBiMCAqICh0IC09IGIyKSAqIHQgKyBiNCA6IHQgPCBiNiA/IGIwICogKHQgLT0gYjUpICogdCArIGI3IDogYjAgKiAodCAtPSBiOCkgKiB0ICsgYjk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VJbk91dCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IDEgLSBib3VuY2VPdXQoMSAtIHQpIDogYm91bmNlT3V0KHQgLSAxKSArIDEpIC8gMjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjaXJjbGVJbih0KSB7XG4gIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVPdXQodCkge1xuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAtLXQgKiB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gMSAtIE1hdGguc3FydCgxIC0gdCAqIHQpIDogTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSkgLyAyO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGN1YmljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICByZXR1cm4gLS10ICogdCAqIHQgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNJbk91dCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IHQgKiB0ICogdCA6ICh0IC09IDIpICogdCAqIHQgKyAyKSAvIDI7XG59XG4iLCJ2YXIgdGF1ID0gMiAqIE1hdGguUEksXG4gICAgYW1wbGl0dWRlID0gMSxcbiAgICBwZXJpb2QgPSAwLjM7XG5cbmV4cG9ydCB2YXIgZWxhc3RpY0luID0gKGZ1bmN0aW9uIGN1c3RvbShhLCBwKSB7XG4gIHZhciBzID0gTWF0aC5hc2luKDEgLyAoYSA9IE1hdGgubWF4KDEsIGEpKSkgKiAocCAvPSB0YXUpO1xuXG4gIGZ1bmN0aW9uIGVsYXN0aWNJbih0KSB7XG4gICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAxMCAqIC0tdCkgKiBNYXRoLnNpbigocyAtIHQpIC8gcCk7XG4gIH1cblxuICBlbGFzdGljSW4uYW1wbGl0dWRlID0gZnVuY3Rpb24oYSkgeyByZXR1cm4gY3VzdG9tKGEsIHAgKiB0YXUpOyB9O1xuICBlbGFzdGljSW4ucGVyaW9kID0gZnVuY3Rpb24ocCkgeyByZXR1cm4gY3VzdG9tKGEsIHApOyB9O1xuXG4gIHJldHVybiBlbGFzdGljSW47XG59KShhbXBsaXR1ZGUsIHBlcmlvZCk7XG5cbmV4cG9ydCB2YXIgZWxhc3RpY091dCA9IChmdW5jdGlvbiBjdXN0b20oYSwgcCkge1xuICB2YXIgcyA9IE1hdGguYXNpbigxIC8gKGEgPSBNYXRoLm1heCgxLCBhKSkpICogKHAgLz0gdGF1KTtcblxuICBmdW5jdGlvbiBlbGFzdGljT3V0KHQpIHtcbiAgICByZXR1cm4gMSAtIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAodCA9ICt0KSkgKiBNYXRoLnNpbigodCArIHMpIC8gcCk7XG4gIH1cblxuICBlbGFzdGljT3V0LmFtcGxpdHVkZSA9IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGN1c3RvbShhLCBwICogdGF1KTsgfTtcbiAgZWxhc3RpY091dC5wZXJpb2QgPSBmdW5jdGlvbihwKSB7IHJldHVybiBjdXN0b20oYSwgcCk7IH07XG5cbiAgcmV0dXJuIGVsYXN0aWNPdXQ7XG59KShhbXBsaXR1ZGUsIHBlcmlvZCk7XG5cbmV4cG9ydCB2YXIgZWxhc3RpY0luT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShhLCBwKSB7XG4gIHZhciBzID0gTWF0aC5hc2luKDEgLyAoYSA9IE1hdGgubWF4KDEsIGEpKSkgKiAocCAvPSB0YXUpO1xuXG4gIGZ1bmN0aW9uIGVsYXN0aWNJbk91dCh0KSB7XG4gICAgcmV0dXJuICgodCA9IHQgKiAyIC0gMSkgPCAwXG4gICAgICAgID8gYSAqIE1hdGgucG93KDIsIDEwICogdCkgKiBNYXRoLnNpbigocyAtIHQpIC8gcClcbiAgICAgICAgOiAyIC0gYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHMgKyB0KSAvIHApKSAvIDI7XG4gIH1cblxuICBlbGFzdGljSW5PdXQuYW1wbGl0dWRlID0gZnVuY3Rpb24oYSkgeyByZXR1cm4gY3VzdG9tKGEsIHAgKiB0YXUpOyB9O1xuICBlbGFzdGljSW5PdXQucGVyaW9kID0gZnVuY3Rpb24ocCkgeyByZXR1cm4gY3VzdG9tKGEsIHApOyB9O1xuXG4gIHJldHVybiBlbGFzdGljSW5PdXQ7XG59KShhbXBsaXR1ZGUsIHBlcmlvZCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZXhwSW4odCkge1xuICByZXR1cm4gTWF0aC5wb3coMiwgMTAgKiB0IC0gMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwT3V0KHQpIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnBvdygyLCAtMTAgKiB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cEluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gTWF0aC5wb3coMiwgMTAgKiB0IC0gMTApIDogMiAtIE1hdGgucG93KDIsIDEwIC0gMTAgKiB0KSkgLyAyO1xufVxuIiwiZXhwb3J0IHtcbiAgbGluZWFyIGFzIGVhc2VMaW5lYXJcbn0gZnJvbSBcIi4vbGluZWFyXCI7XG5cbmV4cG9ydCB7XG4gIHF1YWRJbk91dCBhcyBlYXNlUXVhZCxcbiAgcXVhZEluIGFzIGVhc2VRdWFkSW4sXG4gIHF1YWRPdXQgYXMgZWFzZVF1YWRPdXQsXG4gIHF1YWRJbk91dCBhcyBlYXNlUXVhZEluT3V0XG59IGZyb20gXCIuL3F1YWRcIjtcblxuZXhwb3J0IHtcbiAgY3ViaWNJbk91dCBhcyBlYXNlQ3ViaWMsXG4gIGN1YmljSW4gYXMgZWFzZUN1YmljSW4sXG4gIGN1YmljT3V0IGFzIGVhc2VDdWJpY091dCxcbiAgY3ViaWNJbk91dCBhcyBlYXNlQ3ViaWNJbk91dFxufSBmcm9tIFwiLi9jdWJpY1wiO1xuXG5leHBvcnQge1xuICBwb2x5SW5PdXQgYXMgZWFzZVBvbHksXG4gIHBvbHlJbiBhcyBlYXNlUG9seUluLFxuICBwb2x5T3V0IGFzIGVhc2VQb2x5T3V0LFxuICBwb2x5SW5PdXQgYXMgZWFzZVBvbHlJbk91dFxufSBmcm9tIFwiLi9wb2x5XCI7XG5cbmV4cG9ydCB7XG4gIHNpbkluT3V0IGFzIGVhc2VTaW4sXG4gIHNpbkluIGFzIGVhc2VTaW5JbixcbiAgc2luT3V0IGFzIGVhc2VTaW5PdXQsXG4gIHNpbkluT3V0IGFzIGVhc2VTaW5Jbk91dFxufSBmcm9tIFwiLi9zaW5cIjtcblxuZXhwb3J0IHtcbiAgZXhwSW5PdXQgYXMgZWFzZUV4cCxcbiAgZXhwSW4gYXMgZWFzZUV4cEluLFxuICBleHBPdXQgYXMgZWFzZUV4cE91dCxcbiAgZXhwSW5PdXQgYXMgZWFzZUV4cEluT3V0XG59IGZyb20gXCIuL2V4cFwiO1xuXG5leHBvcnQge1xuICBjaXJjbGVJbk91dCBhcyBlYXNlQ2lyY2xlLFxuICBjaXJjbGVJbiBhcyBlYXNlQ2lyY2xlSW4sXG4gIGNpcmNsZU91dCBhcyBlYXNlQ2lyY2xlT3V0LFxuICBjaXJjbGVJbk91dCBhcyBlYXNlQ2lyY2xlSW5PdXRcbn0gZnJvbSBcIi4vY2lyY2xlXCI7XG5cbmV4cG9ydCB7XG4gIGJvdW5jZU91dCBhcyBlYXNlQm91bmNlLFxuICBib3VuY2VJbiBhcyBlYXNlQm91bmNlSW4sXG4gIGJvdW5jZU91dCBhcyBlYXNlQm91bmNlT3V0LFxuICBib3VuY2VJbk91dCBhcyBlYXNlQm91bmNlSW5PdXRcbn0gZnJvbSBcIi4vYm91bmNlXCI7XG5cbmV4cG9ydCB7XG4gIGJhY2tJbk91dCBhcyBlYXNlQmFjayxcbiAgYmFja0luIGFzIGVhc2VCYWNrSW4sXG4gIGJhY2tPdXQgYXMgZWFzZUJhY2tPdXQsXG4gIGJhY2tJbk91dCBhcyBlYXNlQmFja0luT3V0XG59IGZyb20gXCIuL2JhY2tcIjtcblxuZXhwb3J0IHtcbiAgZWxhc3RpY091dCBhcyBlYXNlRWxhc3RpYyxcbiAgZWxhc3RpY0luIGFzIGVhc2VFbGFzdGljSW4sXG4gIGVsYXN0aWNPdXQgYXMgZWFzZUVsYXN0aWNPdXQsXG4gIGVsYXN0aWNJbk91dCBhcyBlYXNlRWxhc3RpY0luT3V0XG59IGZyb20gXCIuL2VsYXN0aWNcIjtcbiIsImV4cG9ydCBmdW5jdGlvbiBsaW5lYXIodCkge1xuICByZXR1cm4gK3Q7XG59XG4iLCJ2YXIgZXhwb25lbnQgPSAzO1xuXG5leHBvcnQgdmFyIHBvbHlJbiA9IChmdW5jdGlvbiBjdXN0b20oZSkge1xuICBlID0gK2U7XG5cbiAgZnVuY3Rpb24gcG9seUluKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3codCwgZSk7XG4gIH1cblxuICBwb2x5SW4uZXhwb25lbnQgPSBjdXN0b207XG5cbiAgcmV0dXJuIHBvbHlJbjtcbn0pKGV4cG9uZW50KTtcblxuZXhwb3J0IHZhciBwb2x5T3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShlKSB7XG4gIGUgPSArZTtcblxuICBmdW5jdGlvbiBwb2x5T3V0KHQpIHtcbiAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSB0LCBlKTtcbiAgfVxuXG4gIHBvbHlPdXQuZXhwb25lbnQgPSBjdXN0b207XG5cbiAgcmV0dXJuIHBvbHlPdXQ7XG59KShleHBvbmVudCk7XG5cbmV4cG9ydCB2YXIgcG9seUluT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShlKSB7XG4gIGUgPSArZTtcblxuICBmdW5jdGlvbiBwb2x5SW5PdXQodCkge1xuICAgIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IE1hdGgucG93KHQsIGUpIDogMiAtIE1hdGgucG93KDIgLSB0LCBlKSkgLyAyO1xuICB9XG5cbiAgcG9seUluT3V0LmV4cG9uZW50ID0gY3VzdG9tO1xuXG4gIHJldHVybiBwb2x5SW5PdXQ7XG59KShleHBvbmVudCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gcXVhZEluKHQpIHtcbiAgcmV0dXJuIHQgKiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVhZE91dCh0KSB7XG4gIHJldHVybiB0ICogKDIgLSB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1YWRJbk91dCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IHQgKiB0IDogLS10ICogKDIgLSB0KSArIDEpIC8gMjtcbn1cbiIsInZhciBwaSA9IE1hdGguUEksXG4gICAgaGFsZlBpID0gcGkgLyAyO1xuXG5leHBvcnQgZnVuY3Rpb24gc2luSW4odCkge1xuICByZXR1cm4gMSAtIE1hdGguY29zKHQgKiBoYWxmUGkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKHQgKiBoYWxmUGkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luSW5PdXQodCkge1xuICByZXR1cm4gKDEgLSBNYXRoLmNvcyhwaSAqIHQpKSAvIDI7XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgbmIgPSBiID8gYi5sZW5ndGggOiAwLFxuICAgICAgbmEgPSBhID8gTWF0aC5taW4obmIsIGEubGVuZ3RoKSA6IDAsXG4gICAgICB4ID0gbmV3IEFycmF5KG5hKSxcbiAgICAgIGMgPSBuZXcgQXJyYXkobmIpLFxuICAgICAgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgbmE7ICsraSkgeFtpXSA9IHZhbHVlKGFbaV0sIGJbaV0pO1xuICBmb3IgKDsgaSA8IG5iOyArK2kpIGNbaV0gPSBiW2ldO1xuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG5hOyArK2kpIGNbaV0gPSB4W2ldKHQpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJhc2lzKHQxLCB2MCwgdjEsIHYyLCB2Mykge1xuICB2YXIgdDIgPSB0MSAqIHQxLCB0MyA9IHQyICogdDE7XG4gIHJldHVybiAoKDEgLSAzICogdDEgKyAzICogdDIgLSB0MykgKiB2MFxuICAgICAgKyAoNCAtIDYgKiB0MiArIDMgKiB0MykgKiB2MVxuICAgICAgKyAoMSArIDMgKiB0MSArIDMgKiB0MiAtIDMgKiB0MykgKiB2MlxuICAgICAgKyB0MyAqIHYzKSAvIDY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gdCA8PSAwID8gKHQgPSAwKSA6IHQgPj0gMSA/ICh0ID0gMSwgbiAtIDEpIDogTWF0aC5mbG9vcih0ICogbiksXG4gICAgICAgIHYxID0gdmFsdWVzW2ldLFxuICAgICAgICB2MiA9IHZhbHVlc1tpICsgMV0sXG4gICAgICAgIHYwID0gaSA+IDAgPyB2YWx1ZXNbaSAtIDFdIDogMiAqIHYxIC0gdjIsXG4gICAgICAgIHYzID0gaSA8IG4gLSAxID8gdmFsdWVzW2kgKyAyXSA6IDIgKiB2MiAtIHYxO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7YmFzaXN9IGZyb20gXCIuL2Jhc2lzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKCgodCAlPSAxKSA8IDAgPyArK3QgOiB0KSAqIG4pLFxuICAgICAgICB2MCA9IHZhbHVlc1soaSArIG4gLSAxKSAlIG5dLFxuICAgICAgICB2MSA9IHZhbHVlc1tpICUgbl0sXG4gICAgICAgIHYyID0gdmFsdWVzWyhpICsgMSkgJSBuXSxcbiAgICAgICAgdjMgPSB2YWx1ZXNbKGkgKyAyKSAlIG5dO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuXG5mdW5jdGlvbiBsaW5lYXIoYSwgZCkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgdCAqIGQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4cG9uZW50aWFsKGEsIGIsIHkpIHtcbiAgcmV0dXJuIGEgPSBNYXRoLnBvdyhhLCB5KSwgYiA9IE1hdGgucG93KGIsIHkpIC0gYSwgeSA9IDEgLyB5LCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KGEgKyB0ICogYiwgeSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodWUoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkID4gMTgwIHx8IGQgPCAtMTgwID8gZCAtIDM2MCAqIE1hdGgucm91bmQoZCAvIDM2MCkgOiBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtbWEoeSkge1xuICByZXR1cm4gKHkgPSAreSkgPT09IDEgPyBub2dhbW1hIDogZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBiIC0gYSA/IGV4cG9uZW50aWFsKGEsIGIsIHkpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZ2FtbWEoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCJpbXBvcnQge2N1YmVoZWxpeCBhcyBjb2xvckN1YmVoZWxpeH0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgY29sb3IsIHtodWV9IGZyb20gXCIuL2NvbG9yXCI7XG5cbmZ1bmN0aW9uIGN1YmVoZWxpeChodWUpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBjdWJlaGVsaXhHYW1tYSh5KSB7XG4gICAgeSA9ICt5O1xuXG4gICAgZnVuY3Rpb24gY3ViZWhlbGl4KHN0YXJ0LCBlbmQpIHtcbiAgICAgIHZhciBoID0gaHVlKChzdGFydCA9IGNvbG9yQ3ViZWhlbGl4KHN0YXJ0KSkuaCwgKGVuZCA9IGNvbG9yQ3ViZWhlbGl4KGVuZCkpLmgpLFxuICAgICAgICAgIHMgPSBjb2xvcihzdGFydC5zLCBlbmQucyksXG4gICAgICAgICAgbCA9IGNvbG9yKHN0YXJ0LmwsIGVuZC5sKSxcbiAgICAgICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgc3RhcnQuaCA9IGgodCk7XG4gICAgICAgIHN0YXJ0LnMgPSBzKHQpO1xuICAgICAgICBzdGFydC5sID0gbChNYXRoLnBvdyh0LCB5KSk7XG4gICAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjdWJlaGVsaXguZ2FtbWEgPSBjdWJlaGVsaXhHYW1tYTtcblxuICAgIHJldHVybiBjdWJlaGVsaXg7XG4gIH0pKDEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjdWJlaGVsaXgoaHVlKTtcbmV4cG9ydCB2YXIgY3ViZWhlbGl4TG9uZyA9IGN1YmVoZWxpeChjb2xvcik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBkID0gbmV3IERhdGU7XG4gIHJldHVybiBhID0gK2EsIGIgLT0gYSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBkLnNldFRpbWUoYSArIGIgKiB0KSwgZDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBuID0gcmFuZ2UubGVuZ3RoO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiByYW5nZVtNYXRoLm1heCgwLCBNYXRoLm1pbihuIC0gMSwgTWF0aC5mbG9vcih0ICogbikpKV07XG4gIH07XG59XG4iLCJpbXBvcnQge2hjbCBhcyBjb2xvckhjbH0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgY29sb3IsIHtodWV9IGZyb20gXCIuL2NvbG9yXCI7XG5cbmZ1bmN0aW9uIGhjbChodWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgaCA9IGh1ZSgoc3RhcnQgPSBjb2xvckhjbChzdGFydCkpLmgsIChlbmQgPSBjb2xvckhjbChlbmQpKS5oKSxcbiAgICAgICAgYyA9IGNvbG9yKHN0YXJ0LmMsIGVuZC5jKSxcbiAgICAgICAgbCA9IGNvbG9yKHN0YXJ0LmwsIGVuZC5sKSxcbiAgICAgICAgb3BhY2l0eSA9IGNvbG9yKHN0YXJ0Lm9wYWNpdHksIGVuZC5vcGFjaXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgc3RhcnQuaCA9IGgodCk7XG4gICAgICBzdGFydC5jID0gYyh0KTtcbiAgICAgIHN0YXJ0LmwgPSBsKHQpO1xuICAgICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGNsKGh1ZSk7XG5leHBvcnQgdmFyIGhjbExvbmcgPSBoY2woY29sb3IpO1xuIiwiaW1wb3J0IHtoc2wgYXMgY29sb3JIc2x9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGNvbG9yLCB7aHVlfSBmcm9tIFwiLi9jb2xvclwiO1xuXG5mdW5jdGlvbiBoc2woaHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgdmFyIGggPSBodWUoKHN0YXJ0ID0gY29sb3JIc2woc3RhcnQpKS5oLCAoZW5kID0gY29sb3JIc2woZW5kKSkuaCksXG4gICAgICAgIHMgPSBjb2xvcihzdGFydC5zLCBlbmQucyksXG4gICAgICAgIGwgPSBjb2xvcihzdGFydC5sLCBlbmQubCksXG4gICAgICAgIG9wYWNpdHkgPSBjb2xvcihzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LmggPSBoKHQpO1xuICAgICAgc3RhcnQucyA9IHModCk7XG4gICAgICBzdGFydC5sID0gbCh0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhzbChodWUpO1xuZXhwb3J0IHZhciBoc2xMb25nID0gaHNsKGNvbG9yKTtcbiIsImltcG9ydCB7aHVlfSBmcm9tIFwiLi9jb2xvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBpID0gaHVlKCthLCArYik7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIHggPSBpKHQpO1xuICAgIHJldHVybiB4IC0gMzYwICogTWF0aC5mbG9vcih4IC8gMzYwKTtcbiAgfTtcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZX0gZnJvbSBcIi4vdmFsdWVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUFycmF5fSBmcm9tIFwiLi9hcnJheVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQmFzaXN9IGZyb20gXCIuL2Jhc2lzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVCYXNpc0Nsb3NlZH0gZnJvbSBcIi4vYmFzaXNDbG9zZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZURhdGV9IGZyb20gXCIuL2RhdGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZURpc2NyZXRlfSBmcm9tIFwiLi9kaXNjcmV0ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlSHVlfSBmcm9tIFwiLi9odWVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZU51bWJlcn0gZnJvbSBcIi4vbnVtYmVyXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVPYmplY3R9IGZyb20gXCIuL29iamVjdFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlUm91bmR9IGZyb20gXCIuL3JvdW5kXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVTdHJpbmd9IGZyb20gXCIuL3N0cmluZ1wiO1xuZXhwb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcywgaW50ZXJwb2xhdGVUcmFuc2Zvcm1Tdmd9IGZyb20gXCIuL3RyYW5zZm9ybS9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlWm9vbX0gZnJvbSBcIi4vem9vbVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlUmdiLCByZ2JCYXNpcyBhcyBpbnRlcnBvbGF0ZVJnYkJhc2lzLCByZ2JCYXNpc0Nsb3NlZCBhcyBpbnRlcnBvbGF0ZVJnYkJhc2lzQ2xvc2VkfSBmcm9tIFwiLi9yZ2JcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUhzbCwgaHNsTG9uZyBhcyBpbnRlcnBvbGF0ZUhzbExvbmd9IGZyb20gXCIuL2hzbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlTGFifSBmcm9tIFwiLi9sYWJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUhjbCwgaGNsTG9uZyBhcyBpbnRlcnBvbGF0ZUhjbExvbmd9IGZyb20gXCIuL2hjbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQ3ViZWhlbGl4LCBjdWJlaGVsaXhMb25nIGFzIGludGVycG9sYXRlQ3ViZWhlbGl4TG9uZ30gZnJvbSBcIi4vY3ViZWhlbGl4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcGllY2V3aXNlfSBmcm9tIFwiLi9waWVjZXdpc2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBxdWFudGl6ZX0gZnJvbSBcIi4vcXVhbnRpemVcIjtcbiIsImltcG9ydCB7bGFiIGFzIGNvbG9yTGFifSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYWIoc3RhcnQsIGVuZCkge1xuICB2YXIgbCA9IGNvbG9yKChzdGFydCA9IGNvbG9yTGFiKHN0YXJ0KSkubCwgKGVuZCA9IGNvbG9yTGFiKGVuZCkpLmwpLFxuICAgICAgYSA9IGNvbG9yKHN0YXJ0LmEsIGVuZC5hKSxcbiAgICAgIGIgPSBjb2xvcihzdGFydC5iLCBlbmQuYiksXG4gICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHN0YXJ0LmwgPSBsKHQpO1xuICAgIHN0YXJ0LmEgPSBhKHQpO1xuICAgIHN0YXJ0LmIgPSBiKHQpO1xuICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgLT0gYSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgYiAqIHQ7XG4gIH07XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgaSA9IHt9LFxuICAgICAgYyA9IHt9LFxuICAgICAgaztcblxuICBpZiAoYSA9PT0gbnVsbCB8fCB0eXBlb2YgYSAhPT0gXCJvYmplY3RcIikgYSA9IHt9O1xuICBpZiAoYiA9PT0gbnVsbCB8fCB0eXBlb2YgYiAhPT0gXCJvYmplY3RcIikgYiA9IHt9O1xuXG4gIGZvciAoayBpbiBiKSB7XG4gICAgaWYgKGsgaW4gYSkge1xuICAgICAgaVtrXSA9IHZhbHVlKGFba10sIGJba10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjW2tdID0gYltrXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoayBpbiBpKSBjW2tdID0gaVtrXSh0KTtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpZWNld2lzZShpbnRlcnBvbGF0ZSwgdmFsdWVzKSB7XG4gIHZhciBpID0gMCwgbiA9IHZhbHVlcy5sZW5ndGggLSAxLCB2ID0gdmFsdWVzWzBdLCBJID0gbmV3IEFycmF5KG4gPCAwID8gMCA6IG4pO1xuICB3aGlsZSAoaSA8IG4pIElbaV0gPSBpbnRlcnBvbGF0ZSh2LCB2ID0gdmFsdWVzWysraV0pO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obiAtIDEsIE1hdGguZmxvb3IodCAqPSBuKSkpO1xuICAgIHJldHVybiBJW2ldKHQgLSBpKTtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVycG9sYXRvciwgbikge1xuICB2YXIgc2FtcGxlcyA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHNhbXBsZXNbaV0gPSBpbnRlcnBvbGF0b3IoaSAvIChuIC0gMSkpO1xuICByZXR1cm4gc2FtcGxlcztcbn1cbiIsImltcG9ydCB7cmdiIGFzIGNvbG9yUmdifSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBiYXNpcyBmcm9tIFwiLi9iYXNpc1wiO1xuaW1wb3J0IGJhc2lzQ2xvc2VkIGZyb20gXCIuL2Jhc2lzQ2xvc2VkXCI7XG5pbXBvcnQgbm9nYW1tYSwge2dhbW1hfSBmcm9tIFwiLi9jb2xvclwiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcmdiR2FtbWEoeSkge1xuICB2YXIgY29sb3IgPSBnYW1tYSh5KTtcblxuICBmdW5jdGlvbiByZ2Ioc3RhcnQsIGVuZCkge1xuICAgIHZhciByID0gY29sb3IoKHN0YXJ0ID0gY29sb3JSZ2Ioc3RhcnQpKS5yLCAoZW5kID0gY29sb3JSZ2IoZW5kKSkuciksXG4gICAgICAgIGcgPSBjb2xvcihzdGFydC5nLCBlbmQuZyksXG4gICAgICAgIGIgPSBjb2xvcihzdGFydC5iLCBlbmQuYiksXG4gICAgICAgIG9wYWNpdHkgPSBub2dhbW1hKHN0YXJ0Lm9wYWNpdHksIGVuZC5vcGFjaXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgc3RhcnQuciA9IHIodCk7XG4gICAgICBzdGFydC5nID0gZyh0KTtcbiAgICAgIHN0YXJ0LmIgPSBiKHQpO1xuICAgICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgIH07XG4gIH1cblxuICByZ2IuZ2FtbWEgPSByZ2JHYW1tYTtcblxuICByZXR1cm4gcmdiO1xufSkoMSk7XG5cbmZ1bmN0aW9uIHJnYlNwbGluZShzcGxpbmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbG9ycykge1xuICAgIHZhciBuID0gY29sb3JzLmxlbmd0aCxcbiAgICAgICAgciA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgZyA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgYiA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgaSwgY29sb3I7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgY29sb3IgPSBjb2xvclJnYihjb2xvcnNbaV0pO1xuICAgICAgcltpXSA9IGNvbG9yLnIgfHwgMDtcbiAgICAgIGdbaV0gPSBjb2xvci5nIHx8IDA7XG4gICAgICBiW2ldID0gY29sb3IuYiB8fCAwO1xuICAgIH1cbiAgICByID0gc3BsaW5lKHIpO1xuICAgIGcgPSBzcGxpbmUoZyk7XG4gICAgYiA9IHNwbGluZShiKTtcbiAgICBjb2xvci5vcGFjaXR5ID0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgY29sb3IuciA9IHIodCk7XG4gICAgICBjb2xvci5nID0gZyh0KTtcbiAgICAgIGNvbG9yLmIgPSBiKHQpO1xuICAgICAgcmV0dXJuIGNvbG9yICsgXCJcIjtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgdmFyIHJnYkJhc2lzID0gcmdiU3BsaW5lKGJhc2lzKTtcbmV4cG9ydCB2YXIgcmdiQmFzaXNDbG9zZWQgPSByZ2JTcGxpbmUoYmFzaXNDbG9zZWQpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA9ICthLCBiIC09IGEsIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChhICsgYiAqIHQpO1xuICB9O1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxudmFyIHJlQSA9IC9bLStdPyg/OlxcZCtcXC4/XFxkKnxcXC4/XFxkKykoPzpbZUVdWy0rXT9cXGQrKT8vZyxcbiAgICByZUIgPSBuZXcgUmVnRXhwKHJlQS5zb3VyY2UsIFwiZ1wiKTtcblxuZnVuY3Rpb24gemVybyhiKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25lKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gYih0KSArIFwiXCI7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGJpID0gcmVBLmxhc3RJbmRleCA9IHJlQi5sYXN0SW5kZXggPSAwLCAvLyBzY2FuIGluZGV4IGZvciBuZXh0IG51bWJlciBpbiBiXG4gICAgICBhbSwgLy8gY3VycmVudCBtYXRjaCBpbiBhXG4gICAgICBibSwgLy8gY3VycmVudCBtYXRjaCBpbiBiXG4gICAgICBicywgLy8gc3RyaW5nIHByZWNlZGluZyBjdXJyZW50IG51bWJlciBpbiBiLCBpZiBhbnlcbiAgICAgIGkgPSAtMSwgLy8gaW5kZXggaW4gc1xuICAgICAgcyA9IFtdLCAvLyBzdHJpbmcgY29uc3RhbnRzIGFuZCBwbGFjZWhvbGRlcnNcbiAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcblxuICAvLyBDb2VyY2UgaW5wdXRzIHRvIHN0cmluZ3MuXG4gIGEgPSBhICsgXCJcIiwgYiA9IGIgKyBcIlwiO1xuXG4gIC8vIEludGVycG9sYXRlIHBhaXJzIG9mIG51bWJlcnMgaW4gYSAmIGIuXG4gIHdoaWxlICgoYW0gPSByZUEuZXhlYyhhKSlcbiAgICAgICYmIChibSA9IHJlQi5leGVjKGIpKSkge1xuICAgIGlmICgoYnMgPSBibS5pbmRleCkgPiBiaSkgeyAvLyBhIHN0cmluZyBwcmVjZWRlcyB0aGUgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYnMgPSBiLnNsaWNlKGJpLCBicyk7XG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gICAgfVxuICAgIGlmICgoYW0gPSBhbVswXSkgPT09IChibSA9IGJtWzBdKSkgeyAvLyBudW1iZXJzIGluIGEgJiBiIG1hdGNoXG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBibTsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYm07XG4gICAgfSBlbHNlIHsgLy8gaW50ZXJwb2xhdGUgbm9uLW1hdGNoaW5nIG51bWJlcnNcbiAgICAgIHNbKytpXSA9IG51bGw7XG4gICAgICBxLnB1c2goe2k6IGksIHg6IG51bWJlcihhbSwgYm0pfSk7XG4gICAgfVxuICAgIGJpID0gcmVCLmxhc3RJbmRleDtcbiAgfVxuXG4gIC8vIEFkZCByZW1haW5zIG9mIGIuXG4gIGlmIChiaSA8IGIubGVuZ3RoKSB7XG4gICAgYnMgPSBiLnNsaWNlKGJpKTtcbiAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICBlbHNlIHNbKytpXSA9IGJzO1xuICB9XG5cbiAgLy8gU3BlY2lhbCBvcHRpbWl6YXRpb24gZm9yIG9ubHkgYSBzaW5nbGUgbWF0Y2guXG4gIC8vIE90aGVyd2lzZSwgaW50ZXJwb2xhdGUgZWFjaCBvZiB0aGUgbnVtYmVycyBhbmQgcmVqb2luIHRoZSBzdHJpbmcuXG4gIHJldHVybiBzLmxlbmd0aCA8IDIgPyAocVswXVxuICAgICAgPyBvbmUocVswXS54KVxuICAgICAgOiB6ZXJvKGIpKVxuICAgICAgOiAoYiA9IHEubGVuZ3RoLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG87IGkgPCBiOyArK2kpIHNbKG8gPSBxW2ldKS5pXSA9IG8ueCh0KTtcbiAgICAgICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgICAgICB9KTtcbn1cbiIsInZhciBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuZXhwb3J0IHZhciBpZGVudGl0eSA9IHtcbiAgdHJhbnNsYXRlWDogMCxcbiAgdHJhbnNsYXRlWTogMCxcbiAgcm90YXRlOiAwLFxuICBza2V3WDogMCxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFyIHNjYWxlWCwgc2NhbGVZLCBza2V3WDtcbiAgaWYgKHNjYWxlWCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSkgYSAvPSBzY2FsZVgsIGIgLz0gc2NhbGVYO1xuICBpZiAoc2tld1ggPSBhICogYyArIGIgKiBkKSBjIC09IGEgKiBza2V3WCwgZCAtPSBiICogc2tld1g7XG4gIGlmIChzY2FsZVkgPSBNYXRoLnNxcnQoYyAqIGMgKyBkICogZCkpIGMgLz0gc2NhbGVZLCBkIC89IHNjYWxlWSwgc2tld1ggLz0gc2NhbGVZO1xuICBpZiAoYSAqIGQgPCBiICogYykgYSA9IC1hLCBiID0gLWIsIHNrZXdYID0gLXNrZXdYLCBzY2FsZVggPSAtc2NhbGVYO1xuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZVg6IGUsXG4gICAgdHJhbnNsYXRlWTogZixcbiAgICByb3RhdGU6IE1hdGguYXRhbjIoYiwgYSkgKiBkZWdyZWVzLFxuICAgIHNrZXdYOiBNYXRoLmF0YW4oc2tld1gpICogZGVncmVlcyxcbiAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICBzY2FsZVk6IHNjYWxlWVxuICB9O1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi4vbnVtYmVyXCI7XG5pbXBvcnQge3BhcnNlQ3NzLCBwYXJzZVN2Z30gZnJvbSBcIi4vcGFyc2VcIjtcblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2UsIHB4Q29tbWEsIHB4UGFyZW4sIGRlZ1BhcmVuKSB7XG5cbiAgZnVuY3Rpb24gcG9wKHMpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPyBzLnBvcCgpICsgXCIgXCIgOiBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKFwidHJhbnNsYXRlKFwiLCBudWxsLCBweENvbW1hLCBudWxsLCBweFBhcmVuKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgfHwgeWIpIHtcbiAgICAgIHMucHVzaChcInRyYW5zbGF0ZShcIiArIHhiICsgcHhDb21tYSArIHliICsgcHhQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm90YXRlKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgaWYgKGEgLSBiID4gMTgwKSBiICs9IDM2MDsgZWxzZSBpZiAoYiAtIGEgPiAxODApIGEgKz0gMzYwOyAvLyBzaG9ydGVzdCBwYXRoXG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNrZXdYKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiwgbnVsbCwgXCIsXCIsIG51bGwsIFwiKVwiKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgIT09IDEgfHwgeWIgIT09IDEpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiICsgeGIgKyBcIixcIiArIHliICsgXCIpXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcbiAgICBhID0gcGFyc2UoYSksIGIgPSBwYXJzZShiKTtcbiAgICB0cmFuc2xhdGUoYS50cmFuc2xhdGVYLCBhLnRyYW5zbGF0ZVksIGIudHJhbnNsYXRlWCwgYi50cmFuc2xhdGVZLCBzLCBxKTtcbiAgICByb3RhdGUoYS5yb3RhdGUsIGIucm90YXRlLCBzLCBxKTtcbiAgICBza2V3WChhLnNrZXdYLCBiLnNrZXdYLCBzLCBxKTtcbiAgICBzY2FsZShhLnNjYWxlWCwgYS5zY2FsZVksIGIuc2NhbGVYLCBiLnNjYWxlWSwgcywgcSk7XG4gICAgYSA9IGIgPSBudWxsOyAvLyBnY1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgaSA9IC0xLCBuID0gcS5sZW5ndGgsIG87XG4gICAgICB3aGlsZSAoKytpIDwgbikgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtQ3NzID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VDc3MsIFwicHgsIFwiLCBcInB4KVwiLCBcImRlZylcIik7XG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtU3ZnID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VTdmcsIFwiLCBcIiwgXCIpXCIsIFwiKVwiKTtcbiIsImltcG9ydCBkZWNvbXBvc2UsIHtpZGVudGl0eX0gZnJvbSBcIi4vZGVjb21wb3NlXCI7XG5cbnZhciBjc3NOb2RlLFxuICAgIGNzc1Jvb3QsXG4gICAgY3NzVmlldyxcbiAgICBzdmdOb2RlO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDc3ModmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBcIm5vbmVcIikgcmV0dXJuIGlkZW50aXR5O1xuICBpZiAoIWNzc05vZGUpIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpLCBjc3NSb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBjc3NWaWV3ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNzc05vZGUuc3R5bGUudHJhbnNmb3JtID0gdmFsdWU7XG4gIHZhbHVlID0gY3NzVmlldy5nZXRDb21wdXRlZFN0eWxlKGNzc1Jvb3QuYXBwZW5kQ2hpbGQoY3NzTm9kZSksIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIik7XG4gIGNzc1Jvb3QucmVtb3ZlQ2hpbGQoY3NzTm9kZSk7XG4gIHZhbHVlID0gdmFsdWUuc2xpY2UoNywgLTEpLnNwbGl0KFwiLFwiKTtcbiAgcmV0dXJuIGRlY29tcG9zZSgrdmFsdWVbMF0sICt2YWx1ZVsxXSwgK3ZhbHVlWzJdLCArdmFsdWVbM10sICt2YWx1ZVs0XSwgK3ZhbHVlWzVdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3ZnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gaWRlbnRpdHk7XG4gIGlmICghc3ZnTm9kZSkgc3ZnTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcbiAgc3ZnTm9kZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdmFsdWUpO1xuICBpZiAoISh2YWx1ZSA9IHN2Z05vZGUudHJhbnNmb3JtLmJhc2VWYWwuY29uc29saWRhdGUoKSkpIHJldHVybiBpZGVudGl0eTtcbiAgdmFsdWUgPSB2YWx1ZS5tYXRyaXg7XG4gIHJldHVybiBkZWNvbXBvc2UodmFsdWUuYSwgdmFsdWUuYiwgdmFsdWUuYywgdmFsdWUuZCwgdmFsdWUuZSwgdmFsdWUuZik7XG59XG4iLCJpbXBvcnQge2NvbG9yfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCByZ2IgZnJvbSBcIi4vcmdiXCI7XG5pbXBvcnQgYXJyYXkgZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCBkYXRlIGZyb20gXCIuL2RhdGVcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XG5pbXBvcnQgb2JqZWN0IGZyb20gXCIuL29iamVjdFwiO1xuaW1wb3J0IHN0cmluZyBmcm9tIFwiLi9zdHJpbmdcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciB0ID0gdHlwZW9mIGIsIGM7XG4gIHJldHVybiBiID09IG51bGwgfHwgdCA9PT0gXCJib29sZWFuXCIgPyBjb25zdGFudChiKVxuICAgICAgOiAodCA9PT0gXCJudW1iZXJcIiA/IG51bWJlclxuICAgICAgOiB0ID09PSBcInN0cmluZ1wiID8gKChjID0gY29sb3IoYikpID8gKGIgPSBjLCByZ2IpIDogc3RyaW5nKVxuICAgICAgOiBiIGluc3RhbmNlb2YgY29sb3IgPyByZ2JcbiAgICAgIDogYiBpbnN0YW5jZW9mIERhdGUgPyBkYXRlXG4gICAgICA6IEFycmF5LmlzQXJyYXkoYikgPyBhcnJheVxuICAgICAgOiB0eXBlb2YgYi52YWx1ZU9mICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGIudG9TdHJpbmcgIT09IFwiZnVuY3Rpb25cIiB8fCBpc05hTihiKSA/IG9iamVjdFxuICAgICAgOiBudW1iZXIpKGEsIGIpO1xufVxuIiwidmFyIHJobyA9IE1hdGguU1FSVDIsXG4gICAgcmhvMiA9IDIsXG4gICAgcmhvNCA9IDQsXG4gICAgZXBzaWxvbjIgPSAxZS0xMjtcblxuZnVuY3Rpb24gY29zaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCh4KSkgKyAxIC8geCkgLyAyO1xufVxuXG5mdW5jdGlvbiBzaW5oKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKHgpKSAtIDEgLyB4KSAvIDI7XG59XG5cbmZ1bmN0aW9uIHRhbmgoeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoMiAqIHgpKSAtIDEpIC8gKHggKyAxKTtcbn1cblxuLy8gcDAgPSBbdXgwLCB1eTAsIHcwXVxuLy8gcDEgPSBbdXgxLCB1eTEsIHcxXVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocDAsIHAxKSB7XG4gIHZhciB1eDAgPSBwMFswXSwgdXkwID0gcDBbMV0sIHcwID0gcDBbMl0sXG4gICAgICB1eDEgPSBwMVswXSwgdXkxID0gcDFbMV0sIHcxID0gcDFbMl0sXG4gICAgICBkeCA9IHV4MSAtIHV4MCxcbiAgICAgIGR5ID0gdXkxIC0gdXkwLFxuICAgICAgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeSxcbiAgICAgIGksXG4gICAgICBTO1xuXG4gIC8vIFNwZWNpYWwgY2FzZSBmb3IgdTAg4omFIHUxLlxuICBpZiAoZDIgPCBlcHNpbG9uMikge1xuICAgIFMgPSBNYXRoLmxvZyh3MSAvIHcwKSAvIHJobztcbiAgICBpID0gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdXgwICsgdCAqIGR4LFxuICAgICAgICB1eTAgKyB0ICogZHksXG4gICAgICAgIHcwICogTWF0aC5leHAocmhvICogdCAqIFMpXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdlbmVyYWwgY2FzZS5cbiAgZWxzZSB7XG4gICAgdmFyIGQxID0gTWF0aC5zcXJ0KGQyKSxcbiAgICAgICAgYjAgPSAodzEgKiB3MSAtIHcwICogdzAgKyByaG80ICogZDIpIC8gKDIgKiB3MCAqIHJobzIgKiBkMSksXG4gICAgICAgIGIxID0gKHcxICogdzEgLSB3MCAqIHcwIC0gcmhvNCAqIGQyKSAvICgyICogdzEgKiByaG8yICogZDEpLFxuICAgICAgICByMCA9IE1hdGgubG9nKE1hdGguc3FydChiMCAqIGIwICsgMSkgLSBiMCksXG4gICAgICAgIHIxID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIxICogYjEgKyAxKSAtIGIxKTtcbiAgICBTID0gKHIxIC0gcjApIC8gcmhvO1xuICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgcyA9IHQgKiBTLFxuICAgICAgICAgIGNvc2hyMCA9IGNvc2gocjApLFxuICAgICAgICAgIHUgPSB3MCAvIChyaG8yICogZDEpICogKGNvc2hyMCAqIHRhbmgocmhvICogcyArIHIwKSAtIHNpbmgocjApKTtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHV4MCArIHUgKiBkeCxcbiAgICAgICAgdXkwICsgdSAqIGR5LFxuICAgICAgICB3MCAqIGNvc2hyMCAvIGNvc2gocmhvICogcyArIHIwKVxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBpLmR1cmF0aW9uID0gUyAqIDEwMDA7XG5cbiAgcmV0dXJuIGk7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgcGF0aH0gZnJvbSBcIi4vcGF0aFwiO1xuIiwidmFyIHBpID0gTWF0aC5QSSxcbiAgICB0YXUgPSAyICogcGksXG4gICAgZXBzaWxvbiA9IDFlLTYsXG4gICAgdGF1RXBzaWxvbiA9IHRhdSAtIGVwc2lsb247XG5cbmZ1bmN0aW9uIFBhdGgoKSB7XG4gIHRoaXMuX3gwID0gdGhpcy5feTAgPSAvLyBzdGFydCBvZiBjdXJyZW50IHN1YnBhdGhcbiAgdGhpcy5feDEgPSB0aGlzLl95MSA9IG51bGw7IC8vIGVuZCBvZiBjdXJyZW50IHN1YnBhdGhcbiAgdGhpcy5fID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gcGF0aCgpIHtcbiAgcmV0dXJuIG5ldyBQYXRoO1xufVxuXG5QYXRoLnByb3RvdHlwZSA9IHBhdGgucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogUGF0aCxcbiAgbW92ZVRvOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gwID0gdGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MCA9IHRoaXMuX3kxID0gK3kpO1xuICB9LFxuICBjbG9zZVBhdGg6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl94MSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5feDEgPSB0aGlzLl94MCwgdGhpcy5feTEgPSB0aGlzLl95MDtcbiAgICAgIHRoaXMuXyArPSBcIlpcIjtcbiAgICB9XG4gIH0sXG4gIGxpbmVUbzogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuXyArPSBcIkxcIiArICh0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kxID0gK3kpO1xuICB9LFxuICBxdWFkcmF0aWNDdXJ2ZVRvOiBmdW5jdGlvbih4MSwgeTEsIHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gXCJRXCIgKyAoK3gxKSArIFwiLFwiICsgKCt5MSkgKyBcIixcIiArICh0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kxID0gK3kpO1xuICB9LFxuICBiZXppZXJDdXJ2ZVRvOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MiwgeCwgeSkge1xuICAgIHRoaXMuXyArPSBcIkNcIiArICgreDEpICsgXCIsXCIgKyAoK3kxKSArIFwiLFwiICsgKCt4MikgKyBcIixcIiArICgreTIpICsgXCIsXCIgKyAodGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgYXJjVG86IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCByKSB7XG4gICAgeDEgPSAreDEsIHkxID0gK3kxLCB4MiA9ICt4MiwgeTIgPSAreTIsIHIgPSArcjtcbiAgICB2YXIgeDAgPSB0aGlzLl94MSxcbiAgICAgICAgeTAgPSB0aGlzLl95MSxcbiAgICAgICAgeDIxID0geDIgLSB4MSxcbiAgICAgICAgeTIxID0geTIgLSB5MSxcbiAgICAgICAgeDAxID0geDAgLSB4MSxcbiAgICAgICAgeTAxID0geTAgLSB5MSxcbiAgICAgICAgbDAxXzIgPSB4MDEgKiB4MDEgKyB5MDEgKiB5MDE7XG5cbiAgICAvLyBJcyB0aGUgcmFkaXVzIG5lZ2F0aXZlPyBFcnJvci5cbiAgICBpZiAociA8IDApIHRocm93IG5ldyBFcnJvcihcIm5lZ2F0aXZlIHJhZGl1czogXCIgKyByKTtcblxuICAgIC8vIElzIHRoaXMgcGF0aCBlbXB0eT8gTW92ZSB0byAoeDEseTEpLlxuICAgIGlmICh0aGlzLl94MSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gxID0geDEpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MSk7XG4gICAgfVxuXG4gICAgLy8gT3IsIGlzICh4MSx5MSkgY29pbmNpZGVudCB3aXRoICh4MCx5MCk/IERvIG5vdGhpbmcuXG4gICAgZWxzZSBpZiAoIShsMDFfMiA+IGVwc2lsb24pKTtcblxuICAgIC8vIE9yLCBhcmUgKHgwLHkwKSwgKHgxLHkxKSBhbmQgKHgyLHkyKSBjb2xsaW5lYXI/XG4gICAgLy8gRXF1aXZhbGVudGx5LCBpcyAoeDEseTEpIGNvaW5jaWRlbnQgd2l0aCAoeDIseTIpP1xuICAgIC8vIE9yLCBpcyB0aGUgcmFkaXVzIHplcm8/IExpbmUgdG8gKHgxLHkxKS5cbiAgICBlbHNlIGlmICghKE1hdGguYWJzKHkwMSAqIHgyMSAtIHkyMSAqIHgwMSkgPiBlcHNpbG9uKSB8fCAhcikge1xuICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHRoaXMuX3gxID0geDEpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MSk7XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBkcmF3IGFuIGFyYyFcbiAgICBlbHNlIHtcbiAgICAgIHZhciB4MjAgPSB4MiAtIHgwLFxuICAgICAgICAgIHkyMCA9IHkyIC0geTAsXG4gICAgICAgICAgbDIxXzIgPSB4MjEgKiB4MjEgKyB5MjEgKiB5MjEsXG4gICAgICAgICAgbDIwXzIgPSB4MjAgKiB4MjAgKyB5MjAgKiB5MjAsXG4gICAgICAgICAgbDIxID0gTWF0aC5zcXJ0KGwyMV8yKSxcbiAgICAgICAgICBsMDEgPSBNYXRoLnNxcnQobDAxXzIpLFxuICAgICAgICAgIGwgPSByICogTWF0aC50YW4oKHBpIC0gTWF0aC5hY29zKChsMjFfMiArIGwwMV8yIC0gbDIwXzIpIC8gKDIgKiBsMjEgKiBsMDEpKSkgLyAyKSxcbiAgICAgICAgICB0MDEgPSBsIC8gbDAxLFxuICAgICAgICAgIHQyMSA9IGwgLyBsMjE7XG5cbiAgICAgIC8vIElmIHRoZSBzdGFydCB0YW5nZW50IGlzIG5vdCBjb2luY2lkZW50IHdpdGggKHgwLHkwKSwgbGluZSB0by5cbiAgICAgIGlmIChNYXRoLmFicyh0MDEgLSAxKSA+IGVwc2lsb24pIHtcbiAgICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHgxICsgdDAxICogeDAxKSArIFwiLFwiICsgKHkxICsgdDAxICogeTAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMCxcIiArICgrKHkwMSAqIHgyMCA+IHgwMSAqIHkyMCkpICsgXCIsXCIgKyAodGhpcy5feDEgPSB4MSArIHQyMSAqIHgyMSkgKyBcIixcIiArICh0aGlzLl95MSA9IHkxICsgdDIxICogeTIxKTtcbiAgICB9XG4gIH0sXG4gIGFyYzogZnVuY3Rpb24oeCwgeSwgciwgYTAsIGExLCBjY3cpIHtcbiAgICB4ID0gK3gsIHkgPSAreSwgciA9ICtyO1xuICAgIHZhciBkeCA9IHIgKiBNYXRoLmNvcyhhMCksXG4gICAgICAgIGR5ID0gciAqIE1hdGguc2luKGEwKSxcbiAgICAgICAgeDAgPSB4ICsgZHgsXG4gICAgICAgIHkwID0geSArIGR5LFxuICAgICAgICBjdyA9IDEgXiBjY3csXG4gICAgICAgIGRhID0gY2N3ID8gYTAgLSBhMSA6IGExIC0gYTA7XG5cbiAgICAvLyBJcyB0aGUgcmFkaXVzIG5lZ2F0aXZlPyBFcnJvci5cbiAgICBpZiAociA8IDApIHRocm93IG5ldyBFcnJvcihcIm5lZ2F0aXZlIHJhZGl1czogXCIgKyByKTtcblxuICAgIC8vIElzIHRoaXMgcGF0aCBlbXB0eT8gTW92ZSB0byAoeDAseTApLlxuICAgIGlmICh0aGlzLl94MSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fICs9IFwiTVwiICsgeDAgKyBcIixcIiArIHkwO1xuICAgIH1cblxuICAgIC8vIE9yLCBpcyAoeDAseTApIG5vdCBjb2luY2lkZW50IHdpdGggdGhlIHByZXZpb3VzIHBvaW50PyBMaW5lIHRvICh4MCx5MCkuXG4gICAgZWxzZSBpZiAoTWF0aC5hYnModGhpcy5feDEgLSB4MCkgPiBlcHNpbG9uIHx8IE1hdGguYWJzKHRoaXMuX3kxIC0geTApID4gZXBzaWxvbikge1xuICAgICAgdGhpcy5fICs9IFwiTFwiICsgeDAgKyBcIixcIiArIHkwO1xuICAgIH1cblxuICAgIC8vIElzIHRoaXMgYXJjIGVtcHR5PyBXZeKAmXJlIGRvbmUuXG4gICAgaWYgKCFyKSByZXR1cm47XG5cbiAgICAvLyBEb2VzIHRoZSBhbmdsZSBnbyB0aGUgd3Jvbmcgd2F5PyBGbGlwIHRoZSBkaXJlY3Rpb24uXG4gICAgaWYgKGRhIDwgMCkgZGEgPSBkYSAlIHRhdSArIHRhdTtcblxuICAgIC8vIElzIHRoaXMgYSBjb21wbGV0ZSBjaXJjbGU/IERyYXcgdHdvIGFyY3MgdG8gY29tcGxldGUgdGhlIGNpcmNsZS5cbiAgICBpZiAoZGEgPiB0YXVFcHNpbG9uKSB7XG4gICAgICB0aGlzLl8gKz0gXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIsMCwxLFwiICsgY3cgKyBcIixcIiArICh4IC0gZHgpICsgXCIsXCIgKyAoeSAtIGR5KSArIFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMSxcIiArIGN3ICsgXCIsXCIgKyAodGhpcy5feDEgPSB4MCkgKyBcIixcIiArICh0aGlzLl95MSA9IHkwKTtcbiAgICB9XG5cbiAgICAvLyBJcyB0aGlzIGFyYyBub24tZW1wdHk/IERyYXcgYW4gYXJjIVxuICAgIGVsc2UgaWYgKGRhID4gZXBzaWxvbikge1xuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsXCIgKyAoKyhkYSA+PSBwaSkpICsgXCIsXCIgKyBjdyArIFwiLFwiICsgKHRoaXMuX3gxID0geCArIHIgKiBNYXRoLmNvcyhhMSkpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5ICsgciAqIE1hdGguc2luKGExKSk7XG4gICAgfVxuICB9LFxuICByZWN0OiBmdW5jdGlvbih4LCB5LCB3LCBoKSB7XG4gICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gwID0gdGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MCA9IHRoaXMuX3kxID0gK3kpICsgXCJoXCIgKyAoK3cpICsgXCJ2XCIgKyAoK2gpICsgXCJoXCIgKyAoLXcpICsgXCJaXCI7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXRoO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi9jcmVhdG9yXCI7XG5pbXBvcnQgc2VsZWN0IGZyb20gXCIuL3NlbGVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiBzZWxlY3QoY3JlYXRvcihuYW1lKS5jYWxsKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkpO1xufVxuIiwiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi9uYW1lc3BhY2VcIjtcbmltcG9ydCB7eGh0bWx9IGZyb20gXCIuL25hbWVzcGFjZXNcIjtcblxuZnVuY3Rpb24gY3JlYXRvckluaGVyaXQobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRvY3VtZW50ID0gdGhpcy5vd25lckRvY3VtZW50LFxuICAgICAgICB1cmkgPSB0aGlzLm5hbWVzcGFjZVVSSTtcbiAgICByZXR1cm4gdXJpID09PSB4aHRtbCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJID09PSB4aHRtbFxuICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModXJpLCBuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRvckZpeGVkKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcbiAgcmV0dXJuIChmdWxsbmFtZS5sb2NhbFxuICAgICAgPyBjcmVhdG9yRml4ZWRcbiAgICAgIDogY3JlYXRvckluaGVyaXQpKGZ1bGxuYW1lKTtcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBjcmVhdGV9IGZyb20gXCIuL2NyZWF0ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0b3J9IGZyb20gXCIuL2NyZWF0b3JcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBsb2NhbH0gZnJvbSBcIi4vbG9jYWxcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtYXRjaGVyfSBmcm9tIFwiLi9tYXRjaGVyXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbW91c2V9IGZyb20gXCIuL21vdXNlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbmFtZXNwYWNlfSBmcm9tIFwiLi9uYW1lc3BhY2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBuYW1lc3BhY2VzfSBmcm9tIFwiLi9uYW1lc3BhY2VzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY2xpZW50UG9pbnR9IGZyb20gXCIuL3BvaW50XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0fSBmcm9tIFwiLi9zZWxlY3RcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3RBbGx9IGZyb20gXCIuL3NlbGVjdEFsbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdGlvbn0gZnJvbSBcIi4vc2VsZWN0aW9uL2luZGV4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0b3J9IGZyb20gXCIuL3NlbGVjdG9yXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0b3JBbGx9IGZyb20gXCIuL3NlbGVjdG9yQWxsXCI7XG5leHBvcnQge3N0eWxlVmFsdWUgYXMgc3R5bGV9IGZyb20gXCIuL3NlbGVjdGlvbi9zdHlsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRvdWNofSBmcm9tIFwiLi90b3VjaFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRvdWNoZXN9IGZyb20gXCIuL3RvdWNoZXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB3aW5kb3d9IGZyb20gXCIuL3dpbmRvd1wiO1xuZXhwb3J0IHtldmVudCwgY3VzdG9tRXZlbnR9IGZyb20gXCIuL3NlbGVjdGlvbi9vblwiO1xuIiwidmFyIG5leHRJZCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvY2FsKCkge1xuICByZXR1cm4gbmV3IExvY2FsO1xufVxuXG5mdW5jdGlvbiBMb2NhbCgpIHtcbiAgdGhpcy5fID0gXCJAXCIgKyAoKytuZXh0SWQpLnRvU3RyaW5nKDM2KTtcbn1cblxuTG9jYWwucHJvdG90eXBlID0gbG9jYWwucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogTG9jYWwsXG4gIGdldDogZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciBpZCA9IHRoaXMuXztcbiAgICB3aGlsZSAoIShpZCBpbiBub2RlKSkgaWYgKCEobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkpIHJldHVybjtcbiAgICByZXR1cm4gbm9kZVtpZF07XG4gIH0sXG4gIHNldDogZnVuY3Rpb24obm9kZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gbm9kZVt0aGlzLl9dID0gdmFsdWU7XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24obm9kZSkge1xuICAgIHJldHVybiB0aGlzLl8gaW4gbm9kZSAmJiBkZWxldGUgbm9kZVt0aGlzLl9dO1xuICB9LFxuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuXztcbiAgfVxufTtcbiIsInZhciBtYXRjaGVyID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgaWYgKCFlbGVtZW50Lm1hdGNoZXMpIHtcbiAgICB2YXIgdmVuZG9yTWF0Y2hlcyA9IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5vTWF0Y2hlc1NlbGVjdG9yO1xuICAgIG1hdGNoZXIgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmVuZG9yTWF0Y2hlcy5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYXRjaGVyO1xuIiwiaW1wb3J0IHNvdXJjZUV2ZW50IGZyb20gXCIuL3NvdXJjZUV2ZW50XCI7XG5pbXBvcnQgcG9pbnQgZnJvbSBcIi4vcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSkge1xuICB2YXIgZXZlbnQgPSBzb3VyY2VFdmVudCgpO1xuICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIGV2ZW50ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gIHJldHVybiBwb2ludChub2RlLCBldmVudCk7XG59XG4iLCJpbXBvcnQgbmFtZXNwYWNlcyBmcm9tIFwiLi9uYW1lc3BhY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIHByZWZpeCA9IG5hbWUgKz0gXCJcIiwgaSA9IHByZWZpeC5pbmRleE9mKFwiOlwiKTtcbiAgaWYgKGkgPj0gMCAmJiAocHJlZml4ID0gbmFtZS5zbGljZSgwLCBpKSkgIT09IFwieG1sbnNcIikgbmFtZSA9IG5hbWUuc2xpY2UoaSArIDEpO1xuICByZXR1cm4gbmFtZXNwYWNlcy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpID8ge3NwYWNlOiBuYW1lc3BhY2VzW3ByZWZpeF0sIGxvY2FsOiBuYW1lfSA6IG5hbWU7XG59XG4iLCJleHBvcnQgdmFyIHhodG1sID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3ZnOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHhodG1sOiB4aHRtbCxcbiAgeGxpbms6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICB4bWw6IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCJcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCBldmVudCkge1xuICB2YXIgc3ZnID0gbm9kZS5vd25lclNWR0VsZW1lbnQgfHwgbm9kZTtcblxuICBpZiAoc3ZnLmNyZWF0ZVNWR1BvaW50KSB7XG4gICAgdmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG4gICAgcG9pbnQueCA9IGV2ZW50LmNsaWVudFgsIHBvaW50LnkgPSBldmVudC5jbGllbnRZO1xuICAgIHBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKG5vZGUuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcbiAgICByZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xuICB9XG5cbiAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gW2V2ZW50LmNsaWVudFggLSByZWN0LmxlZnQgLSBub2RlLmNsaWVudExlZnQsIGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCAtIG5vZGUuY2xpZW50VG9wXTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9uLCByb290fSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcildXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW1tzZWxlY3Rvcl1dLCByb290KTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9uLCByb290fSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBuZXcgU2VsZWN0aW9uKFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0sIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdKVxuICAgICAgOiBuZXcgU2VsZWN0aW9uKFtzZWxlY3RvciA9PSBudWxsID8gW10gOiBzZWxlY3Rvcl0sIHJvb3QpO1xufVxuIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgY3JlYXRlID0gdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUgOiBjcmVhdG9yKG5hbWUpO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9KTtcbn1cbiIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4uL25hbWVzcGFjZVwiO1xuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlTlMoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uTlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHYpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLm5vZGUoKTtcbiAgICByZXR1cm4gZnVsbG5hbWUubG9jYWxcbiAgICAgICAgPyBub2RlLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbClcbiAgICAgICAgOiBub2RlLmdldEF0dHJpYnV0ZShmdWxsbmFtZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJSZW1vdmVOUyA6IGF0dHJSZW1vdmUpIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKVxuICAgICAgOiAoZnVsbG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudCkpKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbMF07XG4gIGFyZ3VtZW50c1swXSA9IHRoaXM7XG4gIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwiZnVuY3Rpb24gY2xhc3NBcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50cmltKCkuc3BsaXQoL158XFxzKy8pO1xufVxuXG5mdW5jdGlvbiBjbGFzc0xpc3Qobm9kZSkge1xuICByZXR1cm4gbm9kZS5jbGFzc0xpc3QgfHwgbmV3IENsYXNzTGlzdChub2RlKTtcbn1cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KG5vZGUpIHtcbiAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gIHRoaXMuX25hbWVzID0gY2xhc3NBcnJheShub2RlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpO1xufVxuXG5DbGFzc0xpc3QucHJvdG90eXBlID0ge1xuICBhZGQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgdGhpcy5fbmFtZXMuc3BsaWNlKGksIDEpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICBjb250YWluczogZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpID49IDA7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNsYXNzZWRBZGQobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QuYWRkKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFJlbW92ZShub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5yZW1vdmUobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkVHJ1ZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZEFkZCh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGYWxzZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZFJlbW92ZSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGdW5jdGlvbihuYW1lcywgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICh2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpID8gY2xhc3NlZEFkZCA6IGNsYXNzZWRSZW1vdmUpKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWVzID0gY2xhc3NBcnJheShuYW1lICsgXCJcIik7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIGxpc3QgPSBjbGFzc0xpc3QodGhpcy5ub2RlKCkpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIGlmICghbGlzdC5jb250YWlucyhuYW1lc1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGNsYXNzZWRGdW5jdGlvbiA6IHZhbHVlXG4gICAgICA/IGNsYXNzZWRUcnVlXG4gICAgICA6IGNsYXNzZWRGYWxzZSkobmFtZXMsIHZhbHVlKSk7XG59XG4iLCJmdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNsb25lTm9kZShmYWxzZSksIHRoaXMubmV4dFNpYmxpbmcpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVEZWVwKCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNsb25lTm9kZSh0cnVlKSwgdGhpcy5uZXh0U2libGluZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRlZXApIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGRlZXAgPyBzZWxlY3Rpb25fY2xvbmVEZWVwIDogc2VsZWN0aW9uX2Nsb25lU2hhbGxvdyk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7RW50ZXJOb2RlfSBmcm9tIFwiLi9lbnRlclwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuLi9jb25zdGFudFwiO1xuXG52YXIga2V5UHJlZml4ID0gXCIkXCI7IC8vIFByb3RlY3QgYWdhaW5zdCBrZXlzIGxpa2Ug4oCcX19wcm90b19f4oCdLlxuXG5mdW5jdGlvbiBiaW5kSW5kZXgocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSkge1xuICB2YXIgaSA9IDAsXG4gICAgICBub2RlLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGZpdCBpbnRvIHVwZGF0ZS5cbiAgLy8gUHV0IGFueSBudWxsIG5vZGVzIGludG8gZW50ZXIuXG4gIC8vIFB1dCBhbnkgcmVtYWluaW5nIGRhdGEgaW50byBlbnRlci5cbiAgZm9yICg7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBkb27igJl0IGZpdCBpbnRvIGV4aXQuXG4gIGZvciAoOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kS2V5KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEsIGtleSkge1xuICB2YXIgaSxcbiAgICAgIG5vZGUsXG4gICAgICBub2RlQnlLZXlWYWx1ZSA9IHt9LFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICBrZXlWYWx1ZXMgPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpLFxuICAgICAga2V5VmFsdWU7XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIG5vZGUuXG4gIC8vIElmIG11bHRpcGxlIG5vZGVzIGhhdmUgdGhlIHNhbWUga2V5LCB0aGUgZHVwbGljYXRlcyBhcmUgYWRkZWQgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBrZXlWYWx1ZXNbaV0gPSBrZXlWYWx1ZSA9IGtleVByZWZpeCArIGtleS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKTtcbiAgICAgIGlmIChrZXlWYWx1ZSBpbiBub2RlQnlLZXlWYWx1ZSkge1xuICAgICAgICBleGl0W2ldID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIGRhdHVtLlxuICAvLyBJZiB0aGVyZSBhIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LCBqb2luIGFuZCBhZGQgaXQgdG8gdXBkYXRlLlxuICAvLyBJZiB0aGVyZSBpcyBub3QgKG9yIHRoZSBrZXkgaXMgYSBkdXBsaWNhdGUpLCBhZGQgaXQgdG8gZW50ZXIuXG4gIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBrZXlWYWx1ZSA9IGtleVByZWZpeCArIGtleS5jYWxsKHBhcmVudCwgZGF0YVtpXSwgaSwgZGF0YSk7XG4gICAgaWYgKG5vZGUgPSBub2RlQnlLZXlWYWx1ZVtrZXlWYWx1ZV0pIHtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhbnkgcmVtYWluaW5nIG5vZGVzIHRoYXQgd2VyZSBub3QgYm91bmQgdG8gZGF0YSB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAobm9kZUJ5S2V5VmFsdWVba2V5VmFsdWVzW2ldXSA9PT0gbm9kZSkpIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICBkYXRhID0gbmV3IEFycmF5KHRoaXMuc2l6ZSgpKSwgaiA9IC0xO1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbihkKSB7IGRhdGFbKytqXSA9IGQ7IH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGJpbmQgPSBrZXkgPyBiaW5kS2V5IDogYmluZEluZGV4LFxuICAgICAgcGFyZW50cyA9IHRoaXMuX3BhcmVudHMsXG4gICAgICBncm91cHMgPSB0aGlzLl9ncm91cHM7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB2YWx1ZSA9IGNvbnN0YW50KHZhbHVlKTtcblxuICBmb3IgKHZhciBtID0gZ3JvdXBzLmxlbmd0aCwgdXBkYXRlID0gbmV3IEFycmF5KG0pLCBlbnRlciA9IG5ldyBBcnJheShtKSwgZXhpdCA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50c1tqXSxcbiAgICAgICAgZ3JvdXAgPSBncm91cHNbal0sXG4gICAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgICBkYXRhID0gdmFsdWUuY2FsbChwYXJlbnQsIHBhcmVudCAmJiBwYXJlbnQuX19kYXRhX18sIGosIHBhcmVudHMpLFxuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGVudGVyR3JvdXAgPSBlbnRlcltqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgdXBkYXRlR3JvdXAgPSB1cGRhdGVbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIGV4aXRHcm91cCA9IGV4aXRbal0gPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpO1xuXG4gICAgYmluZChwYXJlbnQsIGdyb3VwLCBlbnRlckdyb3VwLCB1cGRhdGVHcm91cCwgZXhpdEdyb3VwLCBkYXRhLCBrZXkpO1xuXG4gICAgLy8gTm93IGNvbm5lY3QgdGhlIGVudGVyIG5vZGVzIHRvIHRoZWlyIGZvbGxvd2luZyB1cGRhdGUgbm9kZSwgc3VjaCB0aGF0XG4gICAgLy8gYXBwZW5kQ2hpbGQgY2FuIGluc2VydCB0aGUgbWF0ZXJpYWxpemVkIGVudGVyIG5vZGUgYmVmb3JlIHRoaXMgbm9kZSxcbiAgICAvLyByYXRoZXIgdGhhbiBhdCB0aGUgZW5kIG9mIHRoZSBwYXJlbnQgbm9kZS5cbiAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMCwgcHJldmlvdXMsIG5leHQ7IGkwIDwgZGF0YUxlbmd0aDsgKytpMCkge1xuICAgICAgaWYgKHByZXZpb3VzID0gZW50ZXJHcm91cFtpMF0pIHtcbiAgICAgICAgaWYgKGkwID49IGkxKSBpMSA9IGkwICsgMTtcbiAgICAgICAgd2hpbGUgKCEobmV4dCA9IHVwZGF0ZUdyb3VwW2kxXSkgJiYgKytpMSA8IGRhdGFMZW5ndGgpO1xuICAgICAgICBwcmV2aW91cy5fbmV4dCA9IG5leHQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUgPSBuZXcgU2VsZWN0aW9uKHVwZGF0ZSwgcGFyZW50cyk7XG4gIHVwZGF0ZS5fZW50ZXIgPSBlbnRlcjtcbiAgdXBkYXRlLl9leGl0ID0gZXhpdDtcbiAgcmV0dXJuIHVwZGF0ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMucHJvcGVydHkoXCJfX2RhdGFfX1wiLCB2YWx1ZSlcbiAgICAgIDogdGhpcy5ub2RlKCkuX19kYXRhX187XG59XG4iLCJpbXBvcnQgZGVmYXVsdFZpZXcgZnJvbSBcIi4uL3dpbmRvd1wiO1xuXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KG5vZGUsIHR5cGUsIHBhcmFtcykge1xuICB2YXIgd2luZG93ID0gZGVmYXVsdFZpZXcobm9kZSksXG4gICAgICBldmVudCA9IHdpbmRvdy5DdXN0b21FdmVudDtcblxuICBpZiAodHlwZW9mIGV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBldmVudCA9IG5ldyBldmVudCh0eXBlLCBwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG4gICAgaWYgKHBhcmFtcykgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSksIGV2ZW50LmRldGFpbCA9IHBhcmFtcy5kZXRhaWw7XG4gICAgZWxzZSBldmVudC5pbml0RXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoQ29uc3RhbnQodHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGRpc3BhdGNoRnVuY3Rpb25cbiAgICAgIDogZGlzcGF0Y2hDb25zdGFudCkodHlwZSwgcGFyYW1zKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSBjYWxsYmFjay5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMubm9kZSgpO1xufVxuIiwiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2VcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZW50ZXIgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVudGVyTm9kZShwYXJlbnQsIGRhdHVtKSB7XG4gIHRoaXMub3duZXJEb2N1bWVudCA9IHBhcmVudC5vd25lckRvY3VtZW50O1xuICB0aGlzLm5hbWVzcGFjZVVSSSA9IHBhcmVudC5uYW1lc3BhY2VVUkk7XG4gIHRoaXMuX25leHQgPSBudWxsO1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX19kYXRhX18gPSBkYXR1bTtcbn1cblxuRW50ZXJOb2RlLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IEVudGVyTm9kZSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCB0aGlzLl9uZXh0KTsgfSxcbiAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbihjaGlsZCwgbmV4dCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgbmV4dCk7IH0sXG4gIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7IH0sXG4gIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7IH1cbn07XG4iLCJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZVwiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9leGl0IHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBtYXRjaGVyIGZyb20gXCIuLi9tYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZnVuY3Rpb24gaHRtbFJlbW92ZSgpIHtcbiAgdGhpcy5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBodG1sQ29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGh0bWxGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBodG1sUmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBodG1sRnVuY3Rpb25cbiAgICAgICAgICA6IGh0bWxDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS5pbm5lckhUTUw7XG59XG4iLCJpbXBvcnQgc2VsZWN0aW9uX3NlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0QWxsIGZyb20gXCIuL3NlbGVjdEFsbFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9maWx0ZXIgZnJvbSBcIi4vZmlsdGVyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2RhdGEgZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9lbnRlciBmcm9tIFwiLi9lbnRlclwiO1xuaW1wb3J0IHNlbGVjdGlvbl9leGl0IGZyb20gXCIuL2V4aXRcIjtcbmltcG9ydCBzZWxlY3Rpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2VcIjtcbmltcG9ydCBzZWxlY3Rpb25fb3JkZXIgZnJvbSBcIi4vb3JkZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fc29ydCBmcm9tIFwiLi9zb3J0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NhbGwgZnJvbSBcIi4vY2FsbFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlcyBmcm9tIFwiLi9ub2Rlc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlIGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2l6ZSBmcm9tIFwiLi9zaXplXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VtcHR5IGZyb20gXCIuL2VtcHR5XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VhY2ggZnJvbSBcIi4vZWFjaFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9hdHRyIGZyb20gXCIuL2F0dHJcIjtcbmltcG9ydCBzZWxlY3Rpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCBzZWxlY3Rpb25fcHJvcGVydHkgZnJvbSBcIi4vcHJvcGVydHlcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xhc3NlZCBmcm9tIFwiLi9jbGFzc2VkXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RleHQgZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9odG1sIGZyb20gXCIuL2h0bWxcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmFpc2UgZnJvbSBcIi4vcmFpc2VcIjtcbmltcG9ydCBzZWxlY3Rpb25fbG93ZXIgZnJvbSBcIi4vbG93ZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXBwZW5kIGZyb20gXCIuL2FwcGVuZFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnNlcnQgZnJvbSBcIi4vaW5zZXJ0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmVcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xvbmUgZnJvbSBcIi4vY2xvbmVcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0dW0gZnJvbSBcIi4vZGF0dW1cIjtcbmltcG9ydCBzZWxlY3Rpb25fb24gZnJvbSBcIi4vb25cIjtcbmltcG9ydCBzZWxlY3Rpb25fZGlzcGF0Y2ggZnJvbSBcIi4vZGlzcGF0Y2hcIjtcblxuZXhwb3J0IHZhciByb290ID0gW251bGxdO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0aW9uKGdyb3VwcywgcGFyZW50cykge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XV0sIHJvb3QpO1xufVxuXG5TZWxlY3Rpb24ucHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFNlbGVjdGlvbixcbiAgc2VsZWN0OiBzZWxlY3Rpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHNlbGVjdGlvbl9zZWxlY3RBbGwsXG4gIGZpbHRlcjogc2VsZWN0aW9uX2ZpbHRlcixcbiAgZGF0YTogc2VsZWN0aW9uX2RhdGEsXG4gIGVudGVyOiBzZWxlY3Rpb25fZW50ZXIsXG4gIGV4aXQ6IHNlbGVjdGlvbl9leGl0LFxuICBtZXJnZTogc2VsZWN0aW9uX21lcmdlLFxuICBvcmRlcjogc2VsZWN0aW9uX29yZGVyLFxuICBzb3J0OiBzZWxlY3Rpb25fc29ydCxcbiAgY2FsbDogc2VsZWN0aW9uX2NhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fbm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX2VhY2gsXG4gIGF0dHI6IHNlbGVjdGlvbl9hdHRyLFxuICBzdHlsZTogc2VsZWN0aW9uX3N0eWxlLFxuICBwcm9wZXJ0eTogc2VsZWN0aW9uX3Byb3BlcnR5LFxuICBjbGFzc2VkOiBzZWxlY3Rpb25fY2xhc3NlZCxcbiAgdGV4dDogc2VsZWN0aW9uX3RleHQsXG4gIGh0bWw6IHNlbGVjdGlvbl9odG1sLFxuICByYWlzZTogc2VsZWN0aW9uX3JhaXNlLFxuICBsb3dlcjogc2VsZWN0aW9uX2xvd2VyLFxuICBhcHBlbmQ6IHNlbGVjdGlvbl9hcHBlbmQsXG4gIGluc2VydDogc2VsZWN0aW9uX2luc2VydCxcbiAgcmVtb3ZlOiBzZWxlY3Rpb25fcmVtb3ZlLFxuICBjbG9uZTogc2VsZWN0aW9uX2Nsb25lLFxuICBkYXR1bTogc2VsZWN0aW9uX2RhdHVtLFxuICBvbjogc2VsZWN0aW9uX29uLFxuICBkaXNwYXRjaDogc2VsZWN0aW9uX2Rpc3BhdGNoXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb247XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvclwiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3RvclwiO1xuXG5mdW5jdGlvbiBjb25zdGFudE51bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBiZWZvcmUpIHtcbiAgdmFyIGNyZWF0ZSA9IHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIgPyBuYW1lIDogY3JlYXRvcihuYW1lKSxcbiAgICAgIHNlbGVjdCA9IGJlZm9yZSA9PSBudWxsID8gY29uc3RhbnROdWxsIDogdHlwZW9mIGJlZm9yZSA9PT0gXCJmdW5jdGlvblwiID8gYmVmb3JlIDogc2VsZWN0b3IoYmVmb3JlKTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gbG93ZXIoKSB7XG4gIGlmICh0aGlzLnByZXZpb3VzU2libGluZykgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLCB0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKGxvd2VyKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rpb24pIHtcblxuICBmb3IgKHZhciBncm91cHMwID0gdGhpcy5fZ3JvdXBzLCBncm91cHMxID0gc2VsZWN0aW9uLl9ncm91cHMsIG0wID0gZ3JvdXBzMC5sZW5ndGgsIG0xID0gZ3JvdXBzMS5sZW5ndGgsIG0gPSBNYXRoLm1pbihtMCwgbTEpLCBtZXJnZXMgPSBuZXcgQXJyYXkobTApLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwMCA9IGdyb3VwczBbal0sIGdyb3VwMSA9IGdyb3VwczFbal0sIG4gPSBncm91cDAubGVuZ3RoLCBtZXJnZSA9IG1lcmdlc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXAwW2ldIHx8IGdyb3VwMVtpXSkge1xuICAgICAgICBtZXJnZVtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IGogPCBtMDsgKytqKSB7XG4gICAgbWVyZ2VzW2pdID0gZ3JvdXBzMFtqXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKG1lcmdlcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgdmFyIG5vZGUgPSBncm91cFtpXTtcbiAgICAgIGlmIChub2RlKSByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbm9kZXMgPSBuZXcgQXJyYXkodGhpcy5zaXplKCkpLCBpID0gLTE7XG4gIHRoaXMuZWFjaChmdW5jdGlvbigpIHsgbm9kZXNbKytpXSA9IHRoaXM7IH0pO1xuICByZXR1cm4gbm9kZXM7XG59XG4iLCJ2YXIgZmlsdGVyRXZlbnRzID0ge307XG5cbmV4cG9ydCB2YXIgZXZlbnQgPSBudWxsO1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBpZiAoIShcIm9ubW91c2VlbnRlclwiIGluIGVsZW1lbnQpKSB7XG4gICAgZmlsdGVyRXZlbnRzID0ge21vdXNlZW50ZXI6IFwibW91c2VvdmVyXCIsIG1vdXNlbGVhdmU6IFwibW91c2VvdXRcIn07XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQ29udGV4dExpc3RlbmVyKGxpc3RlbmVyLCBpbmRleCwgZ3JvdXApIHtcbiAgbGlzdGVuZXIgPSBjb250ZXh0TGlzdGVuZXIobGlzdGVuZXIsIGluZGV4LCBncm91cCk7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldDtcbiAgICBpZiAoIXJlbGF0ZWQgfHwgKHJlbGF0ZWQgIT09IHRoaXMgJiYgIShyZWxhdGVkLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHRoaXMpICYgOCkpKSB7XG4gICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lciwgaW5kZXgsIGdyb3VwKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudDEpIHtcbiAgICB2YXIgZXZlbnQwID0gZXZlbnQ7IC8vIEV2ZW50cyBjYW4gYmUgcmVlbnRyYW50IChlLmcuLCBmb2N1cykuXG4gICAgZXZlbnQgPSBldmVudDE7XG4gICAgdHJ5IHtcbiAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fX2RhdGFfXywgaW5kZXgsIGdyb3VwKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZXZlbnQgPSBldmVudDA7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvblJlbW92ZSh0eXBlbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uO1xuICAgIGlmICghb24pIHJldHVybjtcbiAgICBmb3IgKHZhciBqID0gMCwgaSA9IC0xLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBpZiAobyA9IG9uW2pdLCAoIXR5cGVuYW1lLnR5cGUgfHwgby50eXBlID09PSB0eXBlbmFtZS50eXBlKSAmJiBvLm5hbWUgPT09IHR5cGVuYW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciwgby5jYXB0dXJlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uWysraV0gPSBvO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoKytpKSBvbi5sZW5ndGggPSBpO1xuICAgIGVsc2UgZGVsZXRlIHRoaXMuX19vbjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25BZGQodHlwZW5hbWUsIHZhbHVlLCBjYXB0dXJlKSB7XG4gIHZhciB3cmFwID0gZmlsdGVyRXZlbnRzLmhhc093blByb3BlcnR5KHR5cGVuYW1lLnR5cGUpID8gZmlsdGVyQ29udGV4dExpc3RlbmVyIDogY29udGV4dExpc3RlbmVyO1xuICByZXR1cm4gZnVuY3Rpb24oZCwgaSwgZ3JvdXApIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb24sIG8sIGxpc3RlbmVyID0gd3JhcCh2YWx1ZSwgaSwgZ3JvdXApO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICAgIGlmICgobyA9IG9uW2pdKS50eXBlID09PSB0eXBlbmFtZS50eXBlICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLmNhcHR1cmUpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyID0gbGlzdGVuZXIsIG8uY2FwdHVyZSA9IGNhcHR1cmUpO1xuICAgICAgICBvLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHR5cGVuYW1lLnR5cGUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICBvID0ge3R5cGU6IHR5cGVuYW1lLnR5cGUsIG5hbWU6IHR5cGVuYW1lLm5hbWUsIHZhbHVlOiB2YWx1ZSwgbGlzdGVuZXI6IGxpc3RlbmVyLCBjYXB0dXJlOiBjYXB0dXJlfTtcbiAgICBpZiAoIW9uKSB0aGlzLl9fb24gPSBbb107XG4gICAgZWxzZSBvbi5wdXNoKG8pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlbmFtZSwgdmFsdWUsIGNhcHR1cmUpIHtcbiAgdmFyIHR5cGVuYW1lcyA9IHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lICsgXCJcIiksIGksIG4gPSB0eXBlbmFtZXMubGVuZ3RoLCB0O1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBvbiA9IHRoaXMubm9kZSgpLl9fb247XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgZm9yIChpID0gMCwgbyA9IG9uW2pdOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICgodCA9IHR5cGVuYW1lc1tpXSkudHlwZSA9PT0gby50eXBlICYmIHQubmFtZSA9PT0gby5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG8udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb24gPSB2YWx1ZSA/IG9uQWRkIDogb25SZW1vdmU7XG4gIGlmIChjYXB0dXJlID09IG51bGwpIGNhcHR1cmUgPSBmYWxzZTtcbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgdGhpcy5lYWNoKG9uKHR5cGVuYW1lc1tpXSwgdmFsdWUsIGNhcHR1cmUpKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21FdmVudChldmVudDEsIGxpc3RlbmVyLCB0aGF0LCBhcmdzKSB7XG4gIHZhciBldmVudDAgPSBldmVudDtcbiAgZXZlbnQxLnNvdXJjZUV2ZW50ID0gZXZlbnQ7XG4gIGV2ZW50ID0gZXZlbnQxO1xuICB0cnkge1xuICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBldmVudCA9IGV2ZW50MDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gLTEsIG0gPSBncm91cHMubGVuZ3RoOyArK2ogPCBtOykge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gZ3JvdXAubGVuZ3RoIC0gMSwgbmV4dCA9IGdyb3VwW2ldLCBub2RlOyAtLWkgPj0gMDspIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgaWYgKG5leHQgJiYgbmV4dCAhPT0gbm9kZS5uZXh0U2libGluZykgbmV4dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBuZXh0KTtcbiAgICAgICAgbmV4dCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJmdW5jdGlvbiBwcm9wZXJ0eVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpc1tuYW1lXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgZWxzZSB0aGlzW25hbWVdID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gcHJvcGVydHlSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gcHJvcGVydHlGdW5jdGlvblxuICAgICAgICAgIDogcHJvcGVydHlDb25zdGFudCkobmFtZSwgdmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKVtuYW1lXTtcbn1cbiIsImZ1bmN0aW9uIHJhaXNlKCkge1xuICBpZiAodGhpcy5uZXh0U2libGluZykgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyYWlzZSk7XG59XG4iLCJmdW5jdGlvbiByZW1vdmUoKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIGlmIChwYXJlbnQpIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmVtb3ZlKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3Ioc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBzdWJub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChzdWJub2RlID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSkge1xuICAgICAgICBpZiAoXCJfX2RhdGFfX1wiIGluIG5vZGUpIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICBzdWJncm91cFtpXSA9IHN1Ym5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHNlbGVjdG9yQWxsIGZyb20gXCIuLi9zZWxlY3RvckFsbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzdWJncm91cHMucHVzaChzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCBwYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgc2l6ZSA9IDA7XG4gIHRoaXMuZWFjaChmdW5jdGlvbigpIHsgKytzaXplOyB9KTtcbiAgcmV0dXJuIHNpemU7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29tcGFyZSkge1xuICBpZiAoIWNvbXBhcmUpIGNvbXBhcmUgPSBhc2NlbmRpbmc7XG5cbiAgZnVuY3Rpb24gY29tcGFyZU5vZGUoYSwgYikge1xuICAgIHJldHVybiBhICYmIGIgPyBjb21wYXJlKGEuX19kYXRhX18sIGIuX19kYXRhX18pIDogIWEgLSAhYjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHNvcnRncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHNvcnRncm91cCA9IHNvcnRncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNvcnRncm91cFtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvcnRncm91cC5zb3J0KGNvbXBhcmVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHNvcnRncm91cHMsIHRoaXMuX3BhcmVudHMpLm9yZGVyKCk7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICByZXR1cm4gbmV3IEFycmF5KHVwZGF0ZS5sZW5ndGgpO1xufVxuIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3dcIjtcblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2LCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgICA/IHN0eWxlUmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gc3R5bGVGdW5jdGlvblxuICAgICAgICAgICAgOiBzdHlsZUNvbnN0YW50KShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpXG4gICAgICA6IHN0eWxlVmFsdWUodGhpcy5ub2RlKCksIG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVWYWx1ZShub2RlLCBuYW1lKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSlcbiAgICAgIHx8IGRlZmF1bHRWaWV3KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbn1cbiIsImZ1bmN0aW9uIHRleHRSZW1vdmUoKSB7XG4gIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiB0ZXh0Q29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGV4dEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gdGV4dFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gdGV4dEZ1bmN0aW9uXG4gICAgICAgICAgOiB0ZXh0Q29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkudGV4dENvbnRlbnQ7XG59XG4iLCJmdW5jdGlvbiBub25lKCkge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBub25lIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJmdW5jdGlvbiBlbXB0eSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IGVtcHR5IDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJpbXBvcnQge2V2ZW50fSBmcm9tIFwiLi9zZWxlY3Rpb24vb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjdXJyZW50ID0gZXZlbnQsIHNvdXJjZTtcbiAgd2hpbGUgKHNvdXJjZSA9IGN1cnJlbnQuc291cmNlRXZlbnQpIGN1cnJlbnQgPSBzb3VyY2U7XG4gIHJldHVybiBjdXJyZW50O1xufVxuIiwiaW1wb3J0IHNvdXJjZUV2ZW50IGZyb20gXCIuL3NvdXJjZUV2ZW50XCI7XG5pbXBvcnQgcG9pbnQgZnJvbSBcIi4vcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgdG91Y2hlcywgaWRlbnRpZmllcikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIGlkZW50aWZpZXIgPSB0b3VjaGVzLCB0b3VjaGVzID0gc291cmNlRXZlbnQoKS5jaGFuZ2VkVG91Y2hlcztcblxuICBmb3IgKHZhciBpID0gMCwgbiA9IHRvdWNoZXMgPyB0b3VjaGVzLmxlbmd0aCA6IDAsIHRvdWNoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKCh0b3VjaCA9IHRvdWNoZXNbaV0pLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJldHVybiBwb2ludChub2RlLCB0b3VjaCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnRcIjtcbmltcG9ydCBwb2ludCBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCB0b3VjaGVzKSB7XG4gIGlmICh0b3VjaGVzID09IG51bGwpIHRvdWNoZXMgPSBzb3VyY2VFdmVudCgpLnRvdWNoZXM7XG5cbiAgZm9yICh2YXIgaSA9IDAsIG4gPSB0b3VjaGVzID8gdG91Y2hlcy5sZW5ndGggOiAwLCBwb2ludHMgPSBuZXcgQXJyYXkobik7IGkgPCBuOyArK2kpIHtcbiAgICBwb2ludHNbaV0gPSBwb2ludChub2RlLCB0b3VjaGVzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBwb2ludHM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiAobm9kZS5vd25lckRvY3VtZW50ICYmIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgLy8gbm9kZSBpcyBhIE5vZGVcbiAgICAgIHx8IChub2RlLmRvY3VtZW50ICYmIG5vZGUpIC8vIG5vZGUgaXMgYSBXaW5kb3dcbiAgICAgIHx8IG5vZGUuZGVmYXVsdFZpZXc7IC8vIG5vZGUgaXMgYSBEb2N1bWVudFxufVxuIiwiaW1wb3J0IHtwYXRofSBmcm9tIFwiZDMtcGF0aFwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQge2FicywgYWNvcywgYXNpbiwgYXRhbjIsIGNvcywgZXBzaWxvbiwgaGFsZlBpLCBtYXgsIG1pbiwgcGksIHNpbiwgc3FydCwgdGF1fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmZ1bmN0aW9uIGFyY0lubmVyUmFkaXVzKGQpIHtcbiAgcmV0dXJuIGQuaW5uZXJSYWRpdXM7XG59XG5cbmZ1bmN0aW9uIGFyY091dGVyUmFkaXVzKGQpIHtcbiAgcmV0dXJuIGQub3V0ZXJSYWRpdXM7XG59XG5cbmZ1bmN0aW9uIGFyY1N0YXJ0QW5nbGUoZCkge1xuICByZXR1cm4gZC5zdGFydEFuZ2xlO1xufVxuXG5mdW5jdGlvbiBhcmNFbmRBbmdsZShkKSB7XG4gIHJldHVybiBkLmVuZEFuZ2xlO1xufVxuXG5mdW5jdGlvbiBhcmNQYWRBbmdsZShkKSB7XG4gIHJldHVybiBkICYmIGQucGFkQW5nbGU7IC8vIE5vdGU6IG9wdGlvbmFsIVxufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3QoeDAsIHkwLCB4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XG4gIHZhciB4MTAgPSB4MSAtIHgwLCB5MTAgPSB5MSAtIHkwLFxuICAgICAgeDMyID0geDMgLSB4MiwgeTMyID0geTMgLSB5MixcbiAgICAgIHQgPSAoeDMyICogKHkwIC0geTIpIC0geTMyICogKHgwIC0geDIpKSAvICh5MzIgKiB4MTAgLSB4MzIgKiB5MTApO1xuICByZXR1cm4gW3gwICsgdCAqIHgxMCwgeTAgKyB0ICogeTEwXTtcbn1cblxuLy8gQ29tcHV0ZSBwZXJwZW5kaWN1bGFyIG9mZnNldCBsaW5lIG9mIGxlbmd0aCByYy5cbi8vIGh0dHA6Ly9tYXRod29ybGQud29sZnJhbS5jb20vQ2lyY2xlLUxpbmVJbnRlcnNlY3Rpb24uaHRtbFxuZnVuY3Rpb24gY29ybmVyVGFuZ2VudHMoeDAsIHkwLCB4MSwgeTEsIHIxLCByYywgY3cpIHtcbiAgdmFyIHgwMSA9IHgwIC0geDEsXG4gICAgICB5MDEgPSB5MCAtIHkxLFxuICAgICAgbG8gPSAoY3cgPyByYyA6IC1yYykgLyBzcXJ0KHgwMSAqIHgwMSArIHkwMSAqIHkwMSksXG4gICAgICBveCA9IGxvICogeTAxLFxuICAgICAgb3kgPSAtbG8gKiB4MDEsXG4gICAgICB4MTEgPSB4MCArIG94LFxuICAgICAgeTExID0geTAgKyBveSxcbiAgICAgIHgxMCA9IHgxICsgb3gsXG4gICAgICB5MTAgPSB5MSArIG95LFxuICAgICAgeDAwID0gKHgxMSArIHgxMCkgLyAyLFxuICAgICAgeTAwID0gKHkxMSArIHkxMCkgLyAyLFxuICAgICAgZHggPSB4MTAgLSB4MTEsXG4gICAgICBkeSA9IHkxMCAtIHkxMSxcbiAgICAgIGQyID0gZHggKiBkeCArIGR5ICogZHksXG4gICAgICByID0gcjEgLSByYyxcbiAgICAgIEQgPSB4MTEgKiB5MTAgLSB4MTAgKiB5MTEsXG4gICAgICBkID0gKGR5IDwgMCA/IC0xIDogMSkgKiBzcXJ0KG1heCgwLCByICogciAqIGQyIC0gRCAqIEQpKSxcbiAgICAgIGN4MCA9IChEICogZHkgLSBkeCAqIGQpIC8gZDIsXG4gICAgICBjeTAgPSAoLUQgKiBkeCAtIGR5ICogZCkgLyBkMixcbiAgICAgIGN4MSA9IChEICogZHkgKyBkeCAqIGQpIC8gZDIsXG4gICAgICBjeTEgPSAoLUQgKiBkeCArIGR5ICogZCkgLyBkMixcbiAgICAgIGR4MCA9IGN4MCAtIHgwMCxcbiAgICAgIGR5MCA9IGN5MCAtIHkwMCxcbiAgICAgIGR4MSA9IGN4MSAtIHgwMCxcbiAgICAgIGR5MSA9IGN5MSAtIHkwMDtcblxuICAvLyBQaWNrIHRoZSBjbG9zZXIgb2YgdGhlIHR3byBpbnRlcnNlY3Rpb24gcG9pbnRzLlxuICAvLyBUT0RPIElzIHRoZXJlIGEgZmFzdGVyIHdheSB0byBkZXRlcm1pbmUgd2hpY2ggaW50ZXJzZWN0aW9uIHRvIHVzZT9cbiAgaWYgKGR4MCAqIGR4MCArIGR5MCAqIGR5MCA+IGR4MSAqIGR4MSArIGR5MSAqIGR5MSkgY3gwID0gY3gxLCBjeTAgPSBjeTE7XG5cbiAgcmV0dXJuIHtcbiAgICBjeDogY3gwLFxuICAgIGN5OiBjeTAsXG4gICAgeDAxOiAtb3gsXG4gICAgeTAxOiAtb3ksXG4gICAgeDExOiBjeDAgKiAocjEgLyByIC0gMSksXG4gICAgeTExOiBjeTAgKiAocjEgLyByIC0gMSlcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBpbm5lclJhZGl1cyA9IGFyY0lubmVyUmFkaXVzLFxuICAgICAgb3V0ZXJSYWRpdXMgPSBhcmNPdXRlclJhZGl1cyxcbiAgICAgIGNvcm5lclJhZGl1cyA9IGNvbnN0YW50KDApLFxuICAgICAgcGFkUmFkaXVzID0gbnVsbCxcbiAgICAgIHN0YXJ0QW5nbGUgPSBhcmNTdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGUgPSBhcmNFbmRBbmdsZSxcbiAgICAgIHBhZEFuZ2xlID0gYXJjUGFkQW5nbGUsXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBhcmMoKSB7XG4gICAgdmFyIGJ1ZmZlcixcbiAgICAgICAgcixcbiAgICAgICAgcjAgPSAraW5uZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgcjEgPSArb3V0ZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgYTAgPSBzdGFydEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLSBoYWxmUGksXG4gICAgICAgIGExID0gZW5kQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSAtIGhhbGZQaSxcbiAgICAgICAgZGEgPSBhYnMoYTEgLSBhMCksXG4gICAgICAgIGN3ID0gYTEgPiBhMDtcblxuICAgIGlmICghY29udGV4dCkgY29udGV4dCA9IGJ1ZmZlciA9IHBhdGgoKTtcblxuICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBvdXRlciByYWRpdXMgaXMgYWx3YXlzIGxhcmdlciB0aGFuIHRoZSBpbm5lciByYWRpdXMuXG4gICAgaWYgKHIxIDwgcjApIHIgPSByMSwgcjEgPSByMCwgcjAgPSByO1xuXG4gICAgLy8gSXMgaXQgYSBwb2ludD9cbiAgICBpZiAoIShyMSA+IGVwc2lsb24pKSBjb250ZXh0Lm1vdmVUbygwLCAwKTtcblxuICAgIC8vIE9yIGlzIGl0IGEgY2lyY2xlIG9yIGFubnVsdXM/XG4gICAgZWxzZSBpZiAoZGEgPiB0YXUgLSBlcHNpbG9uKSB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyhyMSAqIGNvcyhhMCksIHIxICogc2luKGEwKSk7XG4gICAgICBjb250ZXh0LmFyYygwLCAwLCByMSwgYTAsIGExLCAhY3cpO1xuICAgICAgaWYgKHIwID4gZXBzaWxvbikge1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyhyMCAqIGNvcyhhMSksIHIwICogc2luKGExKSk7XG4gICAgICAgIGNvbnRleHQuYXJjKDAsIDAsIHIwLCBhMSwgYTAsIGN3KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPciBpcyBpdCBhIGNpcmN1bGFyIG9yIGFubnVsYXIgc2VjdG9yP1xuICAgIGVsc2Uge1xuICAgICAgdmFyIGEwMSA9IGEwLFxuICAgICAgICAgIGExMSA9IGExLFxuICAgICAgICAgIGEwMCA9IGEwLFxuICAgICAgICAgIGExMCA9IGExLFxuICAgICAgICAgIGRhMCA9IGRhLFxuICAgICAgICAgIGRhMSA9IGRhLFxuICAgICAgICAgIGFwID0gcGFkQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSAvIDIsXG4gICAgICAgICAgcnAgPSAoYXAgPiBlcHNpbG9uKSAmJiAocGFkUmFkaXVzID8gK3BhZFJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogc3FydChyMCAqIHIwICsgcjEgKiByMSkpLFxuICAgICAgICAgIHJjID0gbWluKGFicyhyMSAtIHIwKSAvIDIsICtjb3JuZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSksXG4gICAgICAgICAgcmMwID0gcmMsXG4gICAgICAgICAgcmMxID0gcmMsXG4gICAgICAgICAgdDAsXG4gICAgICAgICAgdDE7XG5cbiAgICAgIC8vIEFwcGx5IHBhZGRpbmc/IE5vdGUgdGhhdCBzaW5jZSByMSDiiaUgcjAsIGRhMSDiiaUgZGEwLlxuICAgICAgaWYgKHJwID4gZXBzaWxvbikge1xuICAgICAgICB2YXIgcDAgPSBhc2luKHJwIC8gcjAgKiBzaW4oYXApKSxcbiAgICAgICAgICAgIHAxID0gYXNpbihycCAvIHIxICogc2luKGFwKSk7XG4gICAgICAgIGlmICgoZGEwIC09IHAwICogMikgPiBlcHNpbG9uKSBwMCAqPSAoY3cgPyAxIDogLTEpLCBhMDAgKz0gcDAsIGExMCAtPSBwMDtcbiAgICAgICAgZWxzZSBkYTAgPSAwLCBhMDAgPSBhMTAgPSAoYTAgKyBhMSkgLyAyO1xuICAgICAgICBpZiAoKGRhMSAtPSBwMSAqIDIpID4gZXBzaWxvbikgcDEgKj0gKGN3ID8gMSA6IC0xKSwgYTAxICs9IHAxLCBhMTEgLT0gcDE7XG4gICAgICAgIGVsc2UgZGExID0gMCwgYTAxID0gYTExID0gKGEwICsgYTEpIC8gMjtcbiAgICAgIH1cblxuICAgICAgdmFyIHgwMSA9IHIxICogY29zKGEwMSksXG4gICAgICAgICAgeTAxID0gcjEgKiBzaW4oYTAxKSxcbiAgICAgICAgICB4MTAgPSByMCAqIGNvcyhhMTApLFxuICAgICAgICAgIHkxMCA9IHIwICogc2luKGExMCk7XG5cbiAgICAgIC8vIEFwcGx5IHJvdW5kZWQgY29ybmVycz9cbiAgICAgIGlmIChyYyA+IGVwc2lsb24pIHtcbiAgICAgICAgdmFyIHgxMSA9IHIxICogY29zKGExMSksXG4gICAgICAgICAgICB5MTEgPSByMSAqIHNpbihhMTEpLFxuICAgICAgICAgICAgeDAwID0gcjAgKiBjb3MoYTAwKSxcbiAgICAgICAgICAgIHkwMCA9IHIwICogc2luKGEwMCk7XG5cbiAgICAgICAgLy8gUmVzdHJpY3QgdGhlIGNvcm5lciByYWRpdXMgYWNjb3JkaW5nIHRvIHRoZSBzZWN0b3IgYW5nbGUuXG4gICAgICAgIGlmIChkYSA8IHBpKSB7XG4gICAgICAgICAgdmFyIG9jID0gZGEwID4gZXBzaWxvbiA/IGludGVyc2VjdCh4MDEsIHkwMSwgeDAwLCB5MDAsIHgxMSwgeTExLCB4MTAsIHkxMCkgOiBbeDEwLCB5MTBdLFxuICAgICAgICAgICAgICBheCA9IHgwMSAtIG9jWzBdLFxuICAgICAgICAgICAgICBheSA9IHkwMSAtIG9jWzFdLFxuICAgICAgICAgICAgICBieCA9IHgxMSAtIG9jWzBdLFxuICAgICAgICAgICAgICBieSA9IHkxMSAtIG9jWzFdLFxuICAgICAgICAgICAgICBrYyA9IDEgLyBzaW4oYWNvcygoYXggKiBieCArIGF5ICogYnkpIC8gKHNxcnQoYXggKiBheCArIGF5ICogYXkpICogc3FydChieCAqIGJ4ICsgYnkgKiBieSkpKSAvIDIpLFxuICAgICAgICAgICAgICBsYyA9IHNxcnQob2NbMF0gKiBvY1swXSArIG9jWzFdICogb2NbMV0pO1xuICAgICAgICAgIHJjMCA9IG1pbihyYywgKHIwIC0gbGMpIC8gKGtjIC0gMSkpO1xuICAgICAgICAgIHJjMSA9IG1pbihyYywgKHIxIC0gbGMpIC8gKGtjICsgMSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElzIHRoZSBzZWN0b3IgY29sbGFwc2VkIHRvIGEgbGluZT9cbiAgICAgIGlmICghKGRhMSA+IGVwc2lsb24pKSBjb250ZXh0Lm1vdmVUbyh4MDEsIHkwMSk7XG5cbiAgICAgIC8vIERvZXMgdGhlIHNlY3RvcuKAmXMgb3V0ZXIgcmluZyBoYXZlIHJvdW5kZWQgY29ybmVycz9cbiAgICAgIGVsc2UgaWYgKHJjMSA+IGVwc2lsb24pIHtcbiAgICAgICAgdDAgPSBjb3JuZXJUYW5nZW50cyh4MDAsIHkwMCwgeDAxLCB5MDEsIHIxLCByYzEsIGN3KTtcbiAgICAgICAgdDEgPSBjb3JuZXJUYW5nZW50cyh4MTEsIHkxMSwgeDEwLCB5MTAsIHIxLCByYzEsIGN3KTtcblxuICAgICAgICBjb250ZXh0Lm1vdmVUbyh0MC5jeCArIHQwLngwMSwgdDAuY3kgKyB0MC55MDEpO1xuXG4gICAgICAgIC8vIEhhdmUgdGhlIGNvcm5lcnMgbWVyZ2VkP1xuICAgICAgICBpZiAocmMxIDwgcmMpIGNvbnRleHQuYXJjKHQwLmN4LCB0MC5jeSwgcmMxLCBhdGFuMih0MC55MDEsIHQwLngwMSksIGF0YW4yKHQxLnkwMSwgdDEueDAxKSwgIWN3KTtcblxuICAgICAgICAvLyBPdGhlcndpc2UsIGRyYXcgdGhlIHR3byBjb3JuZXJzIGFuZCB0aGUgcmluZy5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5hcmModDAuY3gsIHQwLmN5LCByYzEsIGF0YW4yKHQwLnkwMSwgdDAueDAxKSwgYXRhbjIodDAueTExLCB0MC54MTEpLCAhY3cpO1xuICAgICAgICAgIGNvbnRleHQuYXJjKDAsIDAsIHIxLCBhdGFuMih0MC5jeSArIHQwLnkxMSwgdDAuY3ggKyB0MC54MTEpLCBhdGFuMih0MS5jeSArIHQxLnkxMSwgdDEuY3ggKyB0MS54MTEpLCAhY3cpO1xuICAgICAgICAgIGNvbnRleHQuYXJjKHQxLmN4LCB0MS5jeSwgcmMxLCBhdGFuMih0MS55MTEsIHQxLngxMSksIGF0YW4yKHQxLnkwMSwgdDEueDAxKSwgIWN3KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPciBpcyB0aGUgb3V0ZXIgcmluZyBqdXN0IGEgY2lyY3VsYXIgYXJjP1xuICAgICAgZWxzZSBjb250ZXh0Lm1vdmVUbyh4MDEsIHkwMSksIGNvbnRleHQuYXJjKDAsIDAsIHIxLCBhMDEsIGExMSwgIWN3KTtcblxuICAgICAgLy8gSXMgdGhlcmUgbm8gaW5uZXIgcmluZywgYW5kIGl04oCZcyBhIGNpcmN1bGFyIHNlY3Rvcj9cbiAgICAgIC8vIE9yIHBlcmhhcHMgaXTigJlzIGFuIGFubnVsYXIgc2VjdG9yIGNvbGxhcHNlZCBkdWUgdG8gcGFkZGluZz9cbiAgICAgIGlmICghKHIwID4gZXBzaWxvbikgfHwgIShkYTAgPiBlcHNpbG9uKSkgY29udGV4dC5saW5lVG8oeDEwLCB5MTApO1xuXG4gICAgICAvLyBEb2VzIHRoZSBzZWN0b3LigJlzIGlubmVyIHJpbmcgKG9yIHBvaW50KSBoYXZlIHJvdW5kZWQgY29ybmVycz9cbiAgICAgIGVsc2UgaWYgKHJjMCA+IGVwc2lsb24pIHtcbiAgICAgICAgdDAgPSBjb3JuZXJUYW5nZW50cyh4MTAsIHkxMCwgeDExLCB5MTEsIHIwLCAtcmMwLCBjdyk7XG4gICAgICAgIHQxID0gY29ybmVyVGFuZ2VudHMoeDAxLCB5MDEsIHgwMCwgeTAwLCByMCwgLXJjMCwgY3cpO1xuXG4gICAgICAgIGNvbnRleHQubGluZVRvKHQwLmN4ICsgdDAueDAxLCB0MC5jeSArIHQwLnkwMSk7XG5cbiAgICAgICAgLy8gSGF2ZSB0aGUgY29ybmVycyBtZXJnZWQ/XG4gICAgICAgIGlmIChyYzAgPCByYykgY29udGV4dC5hcmModDAuY3gsIHQwLmN5LCByYzAsIGF0YW4yKHQwLnkwMSwgdDAueDAxKSwgYXRhbjIodDEueTAxLCB0MS54MDEpLCAhY3cpO1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgZHJhdyB0aGUgdHdvIGNvcm5lcnMgYW5kIHRoZSByaW5nLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmFyYyh0MC5jeCwgdDAuY3ksIHJjMCwgYXRhbjIodDAueTAxLCB0MC54MDEpLCBhdGFuMih0MC55MTEsIHQwLngxMSksICFjdyk7XG4gICAgICAgICAgY29udGV4dC5hcmMoMCwgMCwgcjAsIGF0YW4yKHQwLmN5ICsgdDAueTExLCB0MC5jeCArIHQwLngxMSksIGF0YW4yKHQxLmN5ICsgdDEueTExLCB0MS5jeCArIHQxLngxMSksIGN3KTtcbiAgICAgICAgICBjb250ZXh0LmFyYyh0MS5jeCwgdDEuY3ksIHJjMCwgYXRhbjIodDEueTExLCB0MS54MTEpLCBhdGFuMih0MS55MDEsIHQxLngwMSksICFjdyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3IgaXMgdGhlIGlubmVyIHJpbmcganVzdCBhIGNpcmN1bGFyIGFyYz9cbiAgICAgIGVsc2UgY29udGV4dC5hcmMoMCwgMCwgcjAsIGExMCwgYTAwLCBjdyk7XG4gICAgfVxuXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgIGlmIChidWZmZXIpIHJldHVybiBjb250ZXh0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgYXJjLmNlbnRyb2lkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHIgPSAoK2lubmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKyArb3V0ZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgLyAyLFxuICAgICAgICBhID0gKCtzdGFydEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKyArZW5kQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgLyAyIC0gcGkgLyAyO1xuICAgIHJldHVybiBbY29zKGEpICogciwgc2luKGEpICogcl07XG4gIH07XG5cbiAgYXJjLmlubmVyUmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGlubmVyUmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBpbm5lclJhZGl1cztcbiAgfTtcblxuICBhcmMub3V0ZXJSYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAob3V0ZXJSYWRpdXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IG91dGVyUmFkaXVzO1xuICB9O1xuXG4gIGFyYy5jb3JuZXJSYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY29ybmVyUmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBjb3JuZXJSYWRpdXM7XG4gIH07XG5cbiAgYXJjLnBhZFJhZGl1cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRSYWRpdXMgPSBfID09IG51bGwgPyBudWxsIDogdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBwYWRSYWRpdXM7XG4gIH07XG5cbiAgYXJjLnN0YXJ0QW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RhcnRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogc3RhcnRBbmdsZTtcbiAgfTtcblxuICBhcmMuZW5kQW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZW5kQW5nbGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IGVuZEFuZ2xlO1xuICB9O1xuXG4gIGFyYy5wYWRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogcGFkQW5nbGU7XG4gIH07XG5cbiAgYXJjLmNvbnRleHQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoKGNvbnRleHQgPSBfID09IG51bGwgPyBudWxsIDogXyksIGFyYykgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBhcmM7XG59XG4iLCJpbXBvcnQge3BhdGh9IGZyb20gXCJkMy1wYXRoXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBjdXJ2ZUxpbmVhciBmcm9tIFwiLi9jdXJ2ZS9saW5lYXJcIjtcbmltcG9ydCBsaW5lIGZyb20gXCIuL2xpbmVcIjtcbmltcG9ydCB7eCBhcyBwb2ludFgsIHkgYXMgcG9pbnRZfSBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHgwID0gcG9pbnRYLFxuICAgICAgeDEgPSBudWxsLFxuICAgICAgeTAgPSBjb25zdGFudCgwKSxcbiAgICAgIHkxID0gcG9pbnRZLFxuICAgICAgZGVmaW5lZCA9IGNvbnN0YW50KHRydWUpLFxuICAgICAgY29udGV4dCA9IG51bGwsXG4gICAgICBjdXJ2ZSA9IGN1cnZlTGluZWFyLFxuICAgICAgb3V0cHV0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBhcmVhKGRhdGEpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgaixcbiAgICAgICAgayxcbiAgICAgICAgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBkLFxuICAgICAgICBkZWZpbmVkMCA9IGZhbHNlLFxuICAgICAgICBidWZmZXIsXG4gICAgICAgIHgweiA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgeTB6ID0gbmV3IEFycmF5KG4pO1xuXG4gICAgaWYgKGNvbnRleHQgPT0gbnVsbCkgb3V0cHV0ID0gY3VydmUoYnVmZmVyID0gcGF0aCgpKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPD0gbjsgKytpKSB7XG4gICAgICBpZiAoIShpIDwgbiAmJiBkZWZpbmVkKGQgPSBkYXRhW2ldLCBpLCBkYXRhKSkgPT09IGRlZmluZWQwKSB7XG4gICAgICAgIGlmIChkZWZpbmVkMCA9ICFkZWZpbmVkMCkge1xuICAgICAgICAgIGogPSBpO1xuICAgICAgICAgIG91dHB1dC5hcmVhU3RhcnQoKTtcbiAgICAgICAgICBvdXRwdXQubGluZVN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0cHV0LmxpbmVFbmQoKTtcbiAgICAgICAgICBvdXRwdXQubGluZVN0YXJ0KCk7XG4gICAgICAgICAgZm9yIChrID0gaSAtIDE7IGsgPj0gajsgLS1rKSB7XG4gICAgICAgICAgICBvdXRwdXQucG9pbnQoeDB6W2tdLCB5MHpba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvdXRwdXQubGluZUVuZCgpO1xuICAgICAgICAgIG91dHB1dC5hcmVhRW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkZWZpbmVkMCkge1xuICAgICAgICB4MHpbaV0gPSAreDAoZCwgaSwgZGF0YSksIHkweltpXSA9ICt5MChkLCBpLCBkYXRhKTtcbiAgICAgICAgb3V0cHV0LnBvaW50KHgxID8gK3gxKGQsIGksIGRhdGEpIDogeDB6W2ldLCB5MSA/ICt5MShkLCBpLCBkYXRhKSA6IHkweltpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIG91dHB1dCA9IG51bGwsIGJ1ZmZlciArIFwiXCIgfHwgbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFyZWFsaW5lKCkge1xuICAgIHJldHVybiBsaW5lKCkuZGVmaW5lZChkZWZpbmVkKS5jdXJ2ZShjdXJ2ZSkuY29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGFyZWEueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCB4MSA9IG51bGwsIGFyZWEpIDogeDA7XG4gIH07XG5cbiAgYXJlYS54MCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmVhKSA6IHgwO1xuICB9O1xuXG4gIGFyZWEueDEgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeDEgPSBfID09IG51bGwgPyBudWxsIDogdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyZWEpIDogeDE7XG4gIH07XG5cbiAgYXJlYS55ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHkxID0gbnVsbCwgYXJlYSkgOiB5MDtcbiAgfTtcblxuICBhcmVhLnkwID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyZWEpIDogeTA7XG4gIH07XG5cbiAgYXJlYS55MSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5MSA9IF8gPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJlYSkgOiB5MTtcbiAgfTtcblxuICBhcmVhLmxpbmVYMCA9XG4gIGFyZWEubGluZVkwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFyZWFsaW5lKCkueCh4MCkueSh5MCk7XG4gIH07XG5cbiAgYXJlYS5saW5lWTEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJlYWxpbmUoKS54KHgwKS55KHkxKTtcbiAgfTtcblxuICBhcmVhLmxpbmVYMSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmVhbGluZSgpLngoeDEpLnkoeTApO1xuICB9O1xuXG4gIGFyZWEuZGVmaW5lZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkZWZpbmVkID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCBhcmVhKSA6IGRlZmluZWQ7XG4gIH07XG5cbiAgYXJlYS5jdXJ2ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjdXJ2ZSA9IF8sIGNvbnRleHQgIT0gbnVsbCAmJiAob3V0cHV0ID0gY3VydmUoY29udGV4dCkpLCBhcmVhKSA6IGN1cnZlO1xuICB9O1xuXG4gIGFyZWEuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChfID09IG51bGwgPyBjb250ZXh0ID0gb3V0cHV0ID0gbnVsbCA6IG91dHB1dCA9IGN1cnZlKGNvbnRleHQgPSBfKSwgYXJlYSkgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBhcmVhO1xufVxuIiwiaW1wb3J0IGN1cnZlUmFkaWFsLCB7Y3VydmVSYWRpYWxMaW5lYXJ9IGZyb20gXCIuL2N1cnZlL3JhZGlhbFwiO1xuaW1wb3J0IGFyZWEgZnJvbSBcIi4vYXJlYVwiO1xuaW1wb3J0IHtsaW5lUmFkaWFsfSBmcm9tIFwiLi9saW5lUmFkaWFsXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBhID0gYXJlYSgpLmN1cnZlKGN1cnZlUmFkaWFsTGluZWFyKSxcbiAgICAgIGMgPSBhLmN1cnZlLFxuICAgICAgeDAgPSBhLmxpbmVYMCxcbiAgICAgIHgxID0gYS5saW5lWDEsXG4gICAgICB5MCA9IGEubGluZVkwLFxuICAgICAgeTEgPSBhLmxpbmVZMTtcblxuICBhLmFuZ2xlID0gYS54LCBkZWxldGUgYS54O1xuICBhLnN0YXJ0QW5nbGUgPSBhLngwLCBkZWxldGUgYS54MDtcbiAgYS5lbmRBbmdsZSA9IGEueDEsIGRlbGV0ZSBhLngxO1xuICBhLnJhZGl1cyA9IGEueSwgZGVsZXRlIGEueTtcbiAgYS5pbm5lclJhZGl1cyA9IGEueTAsIGRlbGV0ZSBhLnkwO1xuICBhLm91dGVyUmFkaXVzID0gYS55MSwgZGVsZXRlIGEueTE7XG4gIGEubGluZVN0YXJ0QW5nbGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGxpbmVSYWRpYWwoeDAoKSk7IH0sIGRlbGV0ZSBhLmxpbmVYMDtcbiAgYS5saW5lRW5kQW5nbGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGxpbmVSYWRpYWwoeDEoKSk7IH0sIGRlbGV0ZSBhLmxpbmVYMTtcbiAgYS5saW5lSW5uZXJSYWRpdXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGxpbmVSYWRpYWwoeTAoKSk7IH0sIGRlbGV0ZSBhLmxpbmVZMDtcbiAgYS5saW5lT3V0ZXJSYWRpdXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGxpbmVSYWRpYWwoeTEoKSk7IH0sIGRlbGV0ZSBhLmxpbmVZMTtcblxuICBhLmN1cnZlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gYyhjdXJ2ZVJhZGlhbChfKSkgOiBjKCkuX2N1cnZlO1xuICB9O1xuXG4gIHJldHVybiBhO1xufVxuIiwiZXhwb3J0IHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbnN0YW50KCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBvaW50KHRoYXQsIHgsIHkpIHtcbiAgdGhhdC5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKFxuICAgICgyICogdGhhdC5feDAgKyB0aGF0Ll94MSkgLyAzLFxuICAgICgyICogdGhhdC5feTAgKyB0aGF0Ll95MSkgLyAzLFxuICAgICh0aGF0Ll94MCArIDIgKiB0aGF0Ll94MSkgLyAzLFxuICAgICh0aGF0Ll95MCArIDIgKiB0aGF0Ll95MSkgLyAzLFxuICAgICh0aGF0Ll94MCArIDQgKiB0aGF0Ll94MSArIHgpIC8gNixcbiAgICAodGhhdC5feTAgKyA0ICogdGhhdC5feTEgKyB5KSAvIDZcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJhc2lzKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbkJhc2lzLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAzOiBwb2ludCh0aGlzLCB0aGlzLl94MSwgdGhpcy5feTEpOyAvLyBwcm9jZWVkXG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gxLCB0aGlzLl95MSk7IGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdGhpcy5fY29udGV4dC5saW5lVG8oKDUgKiB0aGlzLl94MCArIHRoaXMuX3gxKSAvIDYsICg1ICogdGhpcy5feTAgKyB0aGlzLl95MSkgLyA2KTsgLy8gcHJvY2VlZFxuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgQmFzaXMoY29udGV4dCk7XG59XG4iLCJpbXBvcnQgbm9vcCBmcm9tIFwiLi4vbm9vcFwiO1xuaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vYmFzaXNcIjtcblxuZnVuY3Rpb24gQmFzaXNDbG9zZWQoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuQmFzaXNDbG9zZWQucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IG5vb3AsXG4gIGFyZWFFbmQ6IG5vb3AsXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID0gdGhpcy5feDMgPSB0aGlzLl94NCA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IHRoaXMuX3kyID0gdGhpcy5feTMgPSB0aGlzLl95NCA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMToge1xuICAgICAgICB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94MiwgdGhpcy5feTIpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICB0aGlzLl9jb250ZXh0Lm1vdmVUbygodGhpcy5feDIgKyAyICogdGhpcy5feDMpIC8gMywgKHRoaXMuX3kyICsgMiAqIHRoaXMuX3kzKSAvIDMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbygodGhpcy5feDMgKyAyICogdGhpcy5feDIpIC8gMywgKHRoaXMuX3kzICsgMiAqIHRoaXMuX3kyKSAvIDMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3gyLCB0aGlzLl95Mik7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94NCwgdGhpcy5feTQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX3gyID0geCwgdGhpcy5feTIgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyB0aGlzLl94MyA9IHgsIHRoaXMuX3kzID0geTsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdGhpcy5feDQgPSB4LCB0aGlzLl95NCA9IHk7IHRoaXMuX2NvbnRleHQubW92ZVRvKCh0aGlzLl94MCArIDQgKiB0aGlzLl94MSArIHgpIC8gNiwgKHRoaXMuX3kwICsgNCAqIHRoaXMuX3kxICsgeSkgLyA2KTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBCYXNpc0Nsb3NlZChjb250ZXh0KTtcbn1cbiIsImltcG9ydCB7cG9pbnR9IGZyb20gXCIuL2Jhc2lzXCI7XG5cbmZ1bmN0aW9uIEJhc2lzT3Blbihjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5CYXNpc09wZW4ucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMykpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB2YXIgeDAgPSAodGhpcy5feDAgKyA0ICogdGhpcy5feDEgKyB4KSAvIDYsIHkwID0gKHRoaXMuX3kwICsgNCAqIHRoaXMuX3kxICsgeSkgLyA2OyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeDAsIHkwKSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgwLCB5MCk7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLl9wb2ludCA9IDQ7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IEJhc2lzT3Blbihjb250ZXh0KTtcbn1cbiIsImltcG9ydCB7QmFzaXN9IGZyb20gXCIuL2Jhc2lzXCI7XG5cbmZ1bmN0aW9uIEJ1bmRsZShjb250ZXh0LCBiZXRhKSB7XG4gIHRoaXMuX2Jhc2lzID0gbmV3IEJhc2lzKGNvbnRleHQpO1xuICB0aGlzLl9iZXRhID0gYmV0YTtcbn1cblxuQnVuZGxlLnByb3RvdHlwZSA9IHtcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94ID0gW107XG4gICAgdGhpcy5feSA9IFtdO1xuICAgIHRoaXMuX2Jhc2lzLmxpbmVTdGFydCgpO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgeCA9IHRoaXMuX3gsXG4gICAgICAgIHkgPSB0aGlzLl95LFxuICAgICAgICBqID0geC5sZW5ndGggLSAxO1xuXG4gICAgaWYgKGogPiAwKSB7XG4gICAgICB2YXIgeDAgPSB4WzBdLFxuICAgICAgICAgIHkwID0geVswXSxcbiAgICAgICAgICBkeCA9IHhbal0gLSB4MCxcbiAgICAgICAgICBkeSA9IHlbal0gLSB5MCxcbiAgICAgICAgICBpID0gLTEsXG4gICAgICAgICAgdDtcblxuICAgICAgd2hpbGUgKCsraSA8PSBqKSB7XG4gICAgICAgIHQgPSBpIC8gajtcbiAgICAgICAgdGhpcy5fYmFzaXMucG9pbnQoXG4gICAgICAgICAgdGhpcy5fYmV0YSAqIHhbaV0gKyAoMSAtIHRoaXMuX2JldGEpICogKHgwICsgdCAqIGR4KSxcbiAgICAgICAgICB0aGlzLl9iZXRhICogeVtpXSArICgxIC0gdGhpcy5fYmV0YSkgKiAoeTAgKyB0ICogZHkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5feCA9IHRoaXMuX3kgPSBudWxsO1xuICAgIHRoaXMuX2Jhc2lzLmxpbmVFbmQoKTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB0aGlzLl94LnB1c2goK3gpO1xuICAgIHRoaXMuX3kucHVzaCgreSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20oYmV0YSkge1xuXG4gIGZ1bmN0aW9uIGJ1bmRsZShjb250ZXh0KSB7XG4gICAgcmV0dXJuIGJldGEgPT09IDEgPyBuZXcgQmFzaXMoY29udGV4dCkgOiBuZXcgQnVuZGxlKGNvbnRleHQsIGJldGEpO1xuICB9XG5cbiAgYnVuZGxlLmJldGEgPSBmdW5jdGlvbihiZXRhKSB7XG4gICAgcmV0dXJuIGN1c3RvbSgrYmV0YSk7XG4gIH07XG5cbiAgcmV0dXJuIGJ1bmRsZTtcbn0pKDAuODUpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHBvaW50KHRoYXQsIHgsIHkpIHtcbiAgdGhhdC5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKFxuICAgIHRoYXQuX3gxICsgdGhhdC5fayAqICh0aGF0Ll94MiAtIHRoYXQuX3gwKSxcbiAgICB0aGF0Ll95MSArIHRoYXQuX2sgKiAodGhhdC5feTIgLSB0aGF0Ll95MCksXG4gICAgdGhhdC5feDIgKyB0aGF0Ll9rICogKHRoYXQuX3gxIC0geCksXG4gICAgdGhhdC5feTIgKyB0aGF0Ll9rICogKHRoYXQuX3kxIC0geSksXG4gICAgdGhhdC5feDIsXG4gICAgdGhhdC5feTJcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRpbmFsKGNvbnRleHQsIHRlbnNpb24pIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX2sgPSAoMSAtIHRlbnNpb24pIC8gNjtcbn1cblxuQ2FyZGluYWwucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPSB0aGlzLl94MiA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IHRoaXMuX3kyID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAyOiB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MiwgdGhpcy5feTIpOyBicmVhaztcbiAgICAgIGNhc2UgMzogcG9pbnQodGhpcywgdGhpcy5feDEsIHRoaXMuX3kxKTsgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAxKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyB0aGlzLl94MSA9IHgsIHRoaXMuX3kxID0geTsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgLy8gcHJvY2VlZFxuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHRoaXMuX3gyLCB0aGlzLl94MiA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB0aGlzLl95MiwgdGhpcy5feTIgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY3VzdG9tKHRlbnNpb24pIHtcblxuICBmdW5jdGlvbiBjYXJkaW5hbChjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBDYXJkaW5hbChjb250ZXh0LCB0ZW5zaW9uKTtcbiAgfVxuXG4gIGNhcmRpbmFsLnRlbnNpb24gPSBmdW5jdGlvbih0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIGN1c3RvbSgrdGVuc2lvbik7XG4gIH07XG5cbiAgcmV0dXJuIGNhcmRpbmFsO1xufSkoMCk7XG4iLCJpbXBvcnQgbm9vcCBmcm9tIFwiLi4vbm9vcFwiO1xuaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vY2FyZGluYWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRpbmFsQ2xvc2VkKGNvbnRleHQsIHRlbnNpb24pIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX2sgPSAoMSAtIHRlbnNpb24pIC8gNjtcbn1cblxuQ2FyZGluYWxDbG9zZWQucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IG5vb3AsXG4gIGFyZWFFbmQ6IG5vb3AsXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID0gdGhpcy5feDMgPSB0aGlzLl94NCA9IHRoaXMuX3g1ID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSB0aGlzLl95MyA9IHRoaXMuX3k0ID0gdGhpcy5feTUgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3g0LCB0aGlzLl95NCk7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDUsIHRoaXMuX3k1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl94MyA9IHgsIHRoaXMuX3kzID0geTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDQgPSB4LCB0aGlzLl95NCA9IHkpOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl94NSA9IHgsIHRoaXMuX3k1ID0geTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20odGVuc2lvbikge1xuXG4gIGZ1bmN0aW9uIGNhcmRpbmFsKGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IENhcmRpbmFsQ2xvc2VkKGNvbnRleHQsIHRlbnNpb24pO1xuICB9XG5cbiAgY2FyZGluYWwudGVuc2lvbiA9IGZ1bmN0aW9uKHRlbnNpb24pIHtcbiAgICByZXR1cm4gY3VzdG9tKCt0ZW5zaW9uKTtcbiAgfTtcblxuICByZXR1cm4gY2FyZGluYWw7XG59KSgwKTtcbiIsImltcG9ydCB7cG9pbnR9IGZyb20gXCIuL2NhcmRpbmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkaW5hbE9wZW4oY29udGV4dCwgdGVuc2lvbikge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fayA9ICgxIC0gdGVuc2lvbikgLyA2O1xufVxuXG5DYXJkaW5hbE9wZW4ucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPSB0aGlzLl94MiA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IHRoaXMuX3kyID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDMpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gyLCB0aGlzLl95MikgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94MiwgdGhpcy5feTIpOyBicmVhaztcbiAgICAgIGNhc2UgMzogdGhpcy5fcG9pbnQgPSA0OyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20odGVuc2lvbikge1xuXG4gIGZ1bmN0aW9uIGNhcmRpbmFsKGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IENhcmRpbmFsT3Blbihjb250ZXh0LCB0ZW5zaW9uKTtcbiAgfVxuXG4gIGNhcmRpbmFsLnRlbnNpb24gPSBmdW5jdGlvbih0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIGN1c3RvbSgrdGVuc2lvbik7XG4gIH07XG5cbiAgcmV0dXJuIGNhcmRpbmFsO1xufSkoMCk7XG4iLCJpbXBvcnQge2Vwc2lsb259IGZyb20gXCIuLi9tYXRoXCI7XG5pbXBvcnQge0NhcmRpbmFsfSBmcm9tIFwiLi9jYXJkaW5hbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9pbnQodGhhdCwgeCwgeSkge1xuICB2YXIgeDEgPSB0aGF0Ll94MSxcbiAgICAgIHkxID0gdGhhdC5feTEsXG4gICAgICB4MiA9IHRoYXQuX3gyLFxuICAgICAgeTIgPSB0aGF0Ll95MjtcblxuICBpZiAodGhhdC5fbDAxX2EgPiBlcHNpbG9uKSB7XG4gICAgdmFyIGEgPSAyICogdGhhdC5fbDAxXzJhICsgMyAqIHRoYXQuX2wwMV9hICogdGhhdC5fbDEyX2EgKyB0aGF0Ll9sMTJfMmEsXG4gICAgICAgIG4gPSAzICogdGhhdC5fbDAxX2EgKiAodGhhdC5fbDAxX2EgKyB0aGF0Ll9sMTJfYSk7XG4gICAgeDEgPSAoeDEgKiBhIC0gdGhhdC5feDAgKiB0aGF0Ll9sMTJfMmEgKyB0aGF0Ll94MiAqIHRoYXQuX2wwMV8yYSkgLyBuO1xuICAgIHkxID0gKHkxICogYSAtIHRoYXQuX3kwICogdGhhdC5fbDEyXzJhICsgdGhhdC5feTIgKiB0aGF0Ll9sMDFfMmEpIC8gbjtcbiAgfVxuXG4gIGlmICh0aGF0Ll9sMjNfYSA+IGVwc2lsb24pIHtcbiAgICB2YXIgYiA9IDIgKiB0aGF0Ll9sMjNfMmEgKyAzICogdGhhdC5fbDIzX2EgKiB0aGF0Ll9sMTJfYSArIHRoYXQuX2wxMl8yYSxcbiAgICAgICAgbSA9IDMgKiB0aGF0Ll9sMjNfYSAqICh0aGF0Ll9sMjNfYSArIHRoYXQuX2wxMl9hKTtcbiAgICB4MiA9ICh4MiAqIGIgKyB0aGF0Ll94MSAqIHRoYXQuX2wyM18yYSAtIHggKiB0aGF0Ll9sMTJfMmEpIC8gbTtcbiAgICB5MiA9ICh5MiAqIGIgKyB0aGF0Ll95MSAqIHRoYXQuX2wyM18yYSAtIHkgKiB0aGF0Ll9sMTJfMmEpIC8gbTtcbiAgfVxuXG4gIHRoYXQuX2NvbnRleHQuYmV6aWVyQ3VydmVUbyh4MSwgeTEsIHgyLCB5MiwgdGhhdC5feDIsIHRoYXQuX3kyKTtcbn1cblxuZnVuY3Rpb24gQ2F0bXVsbFJvbShjb250ZXh0LCBhbHBoYSkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fYWxwaGEgPSBhbHBoYTtcbn1cblxuQ2F0bXVsbFJvbS5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSBOYU47XG4gICAgdGhpcy5fbDAxX2EgPSB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hID1cbiAgICB0aGlzLl9sMDFfMmEgPSB0aGlzLl9sMTJfMmEgPSB0aGlzLl9sMjNfMmEgPVxuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAyOiB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MiwgdGhpcy5feTIpOyBicmVhaztcbiAgICAgIGNhc2UgMzogdGhpcy5wb2ludCh0aGlzLl94MiwgdGhpcy5feTIpOyBicmVhaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcblxuICAgIGlmICh0aGlzLl9wb2ludCkge1xuICAgICAgdmFyIHgyMyA9IHRoaXMuX3gyIC0geCxcbiAgICAgICAgICB5MjMgPSB0aGlzLl95MiAtIHk7XG4gICAgICB0aGlzLl9sMjNfYSA9IE1hdGguc3FydCh0aGlzLl9sMjNfMmEgPSBNYXRoLnBvdyh4MjMgKiB4MjMgKyB5MjMgKiB5MjMsIHRoaXMuX2FscGhhKSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5fbDAxX2EgPSB0aGlzLl9sMTJfYSwgdGhpcy5fbDEyX2EgPSB0aGlzLl9sMjNfYTtcbiAgICB0aGlzLl9sMDFfMmEgPSB0aGlzLl9sMTJfMmEsIHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYTtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHRoaXMuX3gyLCB0aGlzLl94MiA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB0aGlzLl95MiwgdGhpcy5feTIgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY3VzdG9tKGFscGhhKSB7XG5cbiAgZnVuY3Rpb24gY2F0bXVsbFJvbShjb250ZXh0KSB7XG4gICAgcmV0dXJuIGFscGhhID8gbmV3IENhdG11bGxSb20oY29udGV4dCwgYWxwaGEpIDogbmV3IENhcmRpbmFsKGNvbnRleHQsIDApO1xuICB9XG5cbiAgY2F0bXVsbFJvbS5hbHBoYSA9IGZ1bmN0aW9uKGFscGhhKSB7XG4gICAgcmV0dXJuIGN1c3RvbSgrYWxwaGEpO1xuICB9O1xuXG4gIHJldHVybiBjYXRtdWxsUm9tO1xufSkoMC41KTtcbiIsImltcG9ydCB7Q2FyZGluYWxDbG9zZWR9IGZyb20gXCIuL2NhcmRpbmFsQ2xvc2VkXCI7XG5pbXBvcnQgbm9vcCBmcm9tIFwiLi4vbm9vcFwiO1xuaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vY2F0bXVsbFJvbVwiO1xuXG5mdW5jdGlvbiBDYXRtdWxsUm9tQ2xvc2VkKGNvbnRleHQsIGFscGhhKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9hbHBoYSA9IGFscGhhO1xufVxuXG5DYXRtdWxsUm9tQ2xvc2VkLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBub29wLFxuICBhcmVhRW5kOiBub29wLFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPSB0aGlzLl94MiA9IHRoaXMuX3gzID0gdGhpcy5feDQgPSB0aGlzLl94NSA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IHRoaXMuX3kyID0gdGhpcy5feTMgPSB0aGlzLl95NCA9IHRoaXMuX3k1ID0gTmFOO1xuICAgIHRoaXMuX2wwMV9hID0gdGhpcy5fbDEyX2EgPSB0aGlzLl9sMjNfYSA9XG4gICAgdGhpcy5fbDAxXzJhID0gdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhID1cbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMToge1xuICAgICAgICB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDQsIHRoaXMuX3k0KTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94NSwgdGhpcy5feTUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG5cbiAgICBpZiAodGhpcy5fcG9pbnQpIHtcbiAgICAgIHZhciB4MjMgPSB0aGlzLl94MiAtIHgsXG4gICAgICAgICAgeTIzID0gdGhpcy5feTIgLSB5O1xuICAgICAgdGhpcy5fbDIzX2EgPSBNYXRoLnNxcnQodGhpcy5fbDIzXzJhID0gTWF0aC5wb3coeDIzICogeDIzICsgeTIzICogeTIzLCB0aGlzLl9hbHBoYSkpO1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl94MyA9IHgsIHRoaXMuX3kzID0geTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDQgPSB4LCB0aGlzLl95NCA9IHkpOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl94NSA9IHgsIHRoaXMuX3k1ID0geTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5fbDAxX2EgPSB0aGlzLl9sMTJfYSwgdGhpcy5fbDEyX2EgPSB0aGlzLl9sMjNfYTtcbiAgICB0aGlzLl9sMDFfMmEgPSB0aGlzLl9sMTJfMmEsIHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYTtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHRoaXMuX3gyLCB0aGlzLl94MiA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB0aGlzLl95MiwgdGhpcy5feTIgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY3VzdG9tKGFscGhhKSB7XG5cbiAgZnVuY3Rpb24gY2F0bXVsbFJvbShjb250ZXh0KSB7XG4gICAgcmV0dXJuIGFscGhhID8gbmV3IENhdG11bGxSb21DbG9zZWQoY29udGV4dCwgYWxwaGEpIDogbmV3IENhcmRpbmFsQ2xvc2VkKGNvbnRleHQsIDApO1xuICB9XG5cbiAgY2F0bXVsbFJvbS5hbHBoYSA9IGZ1bmN0aW9uKGFscGhhKSB7XG4gICAgcmV0dXJuIGN1c3RvbSgrYWxwaGEpO1xuICB9O1xuXG4gIHJldHVybiBjYXRtdWxsUm9tO1xufSkoMC41KTtcbiIsImltcG9ydCB7Q2FyZGluYWxPcGVufSBmcm9tIFwiLi9jYXJkaW5hbE9wZW5cIjtcbmltcG9ydCB7cG9pbnR9IGZyb20gXCIuL2NhdG11bGxSb21cIjtcblxuZnVuY3Rpb24gQ2F0bXVsbFJvbU9wZW4oY29udGV4dCwgYWxwaGEpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX2FscGhhID0gYWxwaGE7XG59XG5cbkNhdG11bGxSb21PcGVuLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IE5hTjtcbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hID0gdGhpcy5fbDIzX2EgPVxuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYSA9XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMykpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuXG4gICAgaWYgKHRoaXMuX3BvaW50KSB7XG4gICAgICB2YXIgeDIzID0gdGhpcy5feDIgLSB4LFxuICAgICAgICAgIHkyMyA9IHRoaXMuX3kyIC0geTtcbiAgICAgIHRoaXMuX2wyM19hID0gTWF0aC5zcXJ0KHRoaXMuX2wyM18yYSA9IE1hdGgucG93KHgyMyAqIHgyMyArIHkyMyAqIHkyMywgdGhpcy5fYWxwaGEpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gyLCB0aGlzLl95MikgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94MiwgdGhpcy5feTIpOyBicmVhaztcbiAgICAgIGNhc2UgMzogdGhpcy5fcG9pbnQgPSA0OyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5fbDAxX2EgPSB0aGlzLl9sMTJfYSwgdGhpcy5fbDEyX2EgPSB0aGlzLl9sMjNfYTtcbiAgICB0aGlzLl9sMDFfMmEgPSB0aGlzLl9sMTJfMmEsIHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYTtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHRoaXMuX3gyLCB0aGlzLl94MiA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB0aGlzLl95MiwgdGhpcy5feTIgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY3VzdG9tKGFscGhhKSB7XG5cbiAgZnVuY3Rpb24gY2F0bXVsbFJvbShjb250ZXh0KSB7XG4gICAgcmV0dXJuIGFscGhhID8gbmV3IENhdG11bGxSb21PcGVuKGNvbnRleHQsIGFscGhhKSA6IG5ldyBDYXJkaW5hbE9wZW4oY29udGV4dCwgMCk7XG4gIH1cblxuICBjYXRtdWxsUm9tLmFscGhhID0gZnVuY3Rpb24oYWxwaGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCthbHBoYSk7XG4gIH07XG5cbiAgcmV0dXJuIGNhdG11bGxSb207XG59KSgwLjUpO1xuIiwiZnVuY3Rpb24gTGluZWFyKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbkxpbmVhci5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgLy8gcHJvY2VlZFxuICAgICAgZGVmYXVsdDogdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSk7IGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IExpbmVhcihjb250ZXh0KTtcbn1cbiIsImltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5cbmZ1bmN0aW9uIExpbmVhckNsb3NlZChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5MaW5lYXJDbG9zZWQucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IG5vb3AsXG4gIGFyZWFFbmQ6IG5vb3AsXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcG9pbnQpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgaWYgKHRoaXMuX3BvaW50KSB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KTtcbiAgICBlbHNlIHRoaXMuX3BvaW50ID0gMSwgdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBMaW5lYXJDbG9zZWQoY29udGV4dCk7XG59XG4iLCJmdW5jdGlvbiBzaWduKHgpIHtcbiAgcmV0dXJuIHggPCAwID8gLTEgOiAxO1xufVxuXG4vLyBDYWxjdWxhdGUgdGhlIHNsb3BlcyBvZiB0aGUgdGFuZ2VudHMgKEhlcm1pdGUtdHlwZSBpbnRlcnBvbGF0aW9uKSBiYXNlZCBvblxuLy8gdGhlIGZvbGxvd2luZyBwYXBlcjogU3RlZmZlbiwgTS4gMTk5MC4gQSBTaW1wbGUgTWV0aG9kIGZvciBNb25vdG9uaWNcbi8vIEludGVycG9sYXRpb24gaW4gT25lIERpbWVuc2lvbi4gQXN0cm9ub215IGFuZCBBc3Ryb3BoeXNpY3MsIFZvbC4gMjM5LCBOTy5cbi8vIE5PVihJSSksIFAuIDQ0MywgMTk5MC5cbmZ1bmN0aW9uIHNsb3BlMyh0aGF0LCB4MiwgeTIpIHtcbiAgdmFyIGgwID0gdGhhdC5feDEgLSB0aGF0Ll94MCxcbiAgICAgIGgxID0geDIgLSB0aGF0Ll94MSxcbiAgICAgIHMwID0gKHRoYXQuX3kxIC0gdGhhdC5feTApIC8gKGgwIHx8IGgxIDwgMCAmJiAtMCksXG4gICAgICBzMSA9ICh5MiAtIHRoYXQuX3kxKSAvIChoMSB8fCBoMCA8IDAgJiYgLTApLFxuICAgICAgcCA9IChzMCAqIGgxICsgczEgKiBoMCkgLyAoaDAgKyBoMSk7XG4gIHJldHVybiAoc2lnbihzMCkgKyBzaWduKHMxKSkgKiBNYXRoLm1pbihNYXRoLmFicyhzMCksIE1hdGguYWJzKHMxKSwgMC41ICogTWF0aC5hYnMocCkpIHx8IDA7XG59XG5cbi8vIENhbGN1bGF0ZSBhIG9uZS1zaWRlZCBzbG9wZS5cbmZ1bmN0aW9uIHNsb3BlMih0aGF0LCB0KSB7XG4gIHZhciBoID0gdGhhdC5feDEgLSB0aGF0Ll94MDtcbiAgcmV0dXJuIGggPyAoMyAqICh0aGF0Ll95MSAtIHRoYXQuX3kwKSAvIGggLSB0KSAvIDIgOiB0O1xufVxuXG4vLyBBY2NvcmRpbmcgdG8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ3ViaWNfSGVybWl0ZV9zcGxpbmUjUmVwcmVzZW50YXRpb25zXG4vLyBcInlvdSBjYW4gZXhwcmVzcyBjdWJpYyBIZXJtaXRlIGludGVycG9sYXRpb24gaW4gdGVybXMgb2YgY3ViaWMgQsOpemllciBjdXJ2ZXNcbi8vIHdpdGggcmVzcGVjdCB0byB0aGUgZm91ciB2YWx1ZXMgcDAsIHAwICsgbTAgLyAzLCBwMSAtIG0xIC8gMywgcDFcIi5cbmZ1bmN0aW9uIHBvaW50KHRoYXQsIHQwLCB0MSkge1xuICB2YXIgeDAgPSB0aGF0Ll94MCxcbiAgICAgIHkwID0gdGhhdC5feTAsXG4gICAgICB4MSA9IHRoYXQuX3gxLFxuICAgICAgeTEgPSB0aGF0Ll95MSxcbiAgICAgIGR4ID0gKHgxIC0geDApIC8gMztcbiAgdGhhdC5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKHgwICsgZHgsIHkwICsgZHggKiB0MCwgeDEgLSBkeCwgeTEgLSBkeCAqIHQxLCB4MSwgeTEpO1xufVxuXG5mdW5jdGlvbiBNb25vdG9uZVgoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuTW9ub3RvbmVYLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID1cbiAgICB0aGlzLl90MCA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMjogdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDEsIHRoaXMuX3kxKTsgYnJlYWs7XG4gICAgICBjYXNlIDM6IHBvaW50KHRoaXMsIHRoaXMuX3QwLCBzbG9wZTIodGhpcywgdGhpcy5fdDApKTsgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAxKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIHQxID0gTmFOO1xuXG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgaWYgKHggPT09IHRoaXMuX3gxICYmIHkgPT09IHRoaXMuX3kxKSByZXR1cm47IC8vIElnbm9yZSBjb2luY2lkZW50IHBvaW50cy5cbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHBvaW50KHRoaXMsIHNsb3BlMih0aGlzLCB0MSA9IHNsb3BlMyh0aGlzLCB4LCB5KSksIHQxKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB0aGlzLl90MCwgdDEgPSBzbG9wZTModGhpcywgeCwgeSkpOyBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB5O1xuICAgIHRoaXMuX3QwID0gdDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gTW9ub3RvbmVZKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IG5ldyBSZWZsZWN0Q29udGV4dChjb250ZXh0KTtcbn1cblxuKE1vbm90b25lWS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1vbm90b25lWC5wcm90b3R5cGUpKS5wb2ludCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgTW9ub3RvbmVYLnByb3RvdHlwZS5wb2ludC5jYWxsKHRoaXMsIHksIHgpO1xufTtcblxuZnVuY3Rpb24gUmVmbGVjdENvbnRleHQoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuUmVmbGVjdENvbnRleHQucHJvdG90eXBlID0ge1xuICBtb3ZlVG86IGZ1bmN0aW9uKHgsIHkpIHsgdGhpcy5fY29udGV4dC5tb3ZlVG8oeSwgeCk7IH0sXG4gIGNsb3NlUGF0aDogZnVuY3Rpb24oKSB7IHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7IH0sXG4gIGxpbmVUbzogZnVuY3Rpb24oeCwgeSkgeyB0aGlzLl9jb250ZXh0LmxpbmVUbyh5LCB4KTsgfSxcbiAgYmV6aWVyQ3VydmVUbzogZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIsIHgsIHkpIHsgdGhpcy5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKHkxLCB4MSwgeTIsIHgyLCB5LCB4KTsgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vbm90b25lWChjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgTW9ub3RvbmVYKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9ub3RvbmVZKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBNb25vdG9uZVkoY29udGV4dCk7XG59XG4iLCJmdW5jdGlvbiBOYXR1cmFsKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbk5hdHVyYWwucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ggPSBbXTtcbiAgICB0aGlzLl95ID0gW107XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4ID0gdGhpcy5feCxcbiAgICAgICAgeSA9IHRoaXMuX3ksXG4gICAgICAgIG4gPSB4Lmxlbmd0aDtcblxuICAgIGlmIChuKSB7XG4gICAgICB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeFswXSwgeVswXSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4WzBdLCB5WzBdKTtcbiAgICAgIGlmIChuID09PSAyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHhbMV0sIHlbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHB4ID0gY29udHJvbFBvaW50cyh4KSxcbiAgICAgICAgICAgIHB5ID0gY29udHJvbFBvaW50cyh5KTtcbiAgICAgICAgZm9yICh2YXIgaTAgPSAwLCBpMSA9IDE7IGkxIDwgbjsgKytpMCwgKytpMSkge1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQuYmV6aWVyQ3VydmVUbyhweFswXVtpMF0sIHB5WzBdW2kwXSwgcHhbMV1baTBdLCBweVsxXVtpMF0sIHhbaTFdLCB5W2kxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiBuID09PSAxKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gICAgdGhpcy5feCA9IHRoaXMuX3kgPSBudWxsO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuX3gucHVzaCgreCk7XG4gICAgdGhpcy5feS5wdXNoKCt5KTtcbiAgfVxufTtcblxuLy8gU2VlIGh0dHBzOi8vd3d3LnBhcnRpY2xlaW5jZWxsLmNvbS8yMDEyL2Jlemllci1zcGxpbmVzLyBmb3IgZGVyaXZhdGlvbi5cbmZ1bmN0aW9uIGNvbnRyb2xQb2ludHMoeCkge1xuICB2YXIgaSxcbiAgICAgIG4gPSB4Lmxlbmd0aCAtIDEsXG4gICAgICBtLFxuICAgICAgYSA9IG5ldyBBcnJheShuKSxcbiAgICAgIGIgPSBuZXcgQXJyYXkobiksXG4gICAgICByID0gbmV3IEFycmF5KG4pO1xuICBhWzBdID0gMCwgYlswXSA9IDIsIHJbMF0gPSB4WzBdICsgMiAqIHhbMV07XG4gIGZvciAoaSA9IDE7IGkgPCBuIC0gMTsgKytpKSBhW2ldID0gMSwgYltpXSA9IDQsIHJbaV0gPSA0ICogeFtpXSArIDIgKiB4W2kgKyAxXTtcbiAgYVtuIC0gMV0gPSAyLCBiW24gLSAxXSA9IDcsIHJbbiAtIDFdID0gOCAqIHhbbiAtIDFdICsgeFtuXTtcbiAgZm9yIChpID0gMTsgaSA8IG47ICsraSkgbSA9IGFbaV0gLyBiW2kgLSAxXSwgYltpXSAtPSBtLCByW2ldIC09IG0gKiByW2kgLSAxXTtcbiAgYVtuIC0gMV0gPSByW24gLSAxXSAvIGJbbiAtIDFdO1xuICBmb3IgKGkgPSBuIC0gMjsgaSA+PSAwOyAtLWkpIGFbaV0gPSAocltpXSAtIGFbaSArIDFdKSAvIGJbaV07XG4gIGJbbiAtIDFdID0gKHhbbl0gKyBhW24gLSAxXSkgLyAyO1xuICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7ICsraSkgYltpXSA9IDIgKiB4W2kgKyAxXSAtIGFbaSArIDFdO1xuICByZXR1cm4gW2EsIGJdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgTmF0dXJhbChjb250ZXh0KTtcbn1cbiIsImltcG9ydCBjdXJ2ZUxpbmVhciBmcm9tIFwiLi9saW5lYXJcIjtcblxuZXhwb3J0IHZhciBjdXJ2ZVJhZGlhbExpbmVhciA9IGN1cnZlUmFkaWFsKGN1cnZlTGluZWFyKTtcblxuZnVuY3Rpb24gUmFkaWFsKGN1cnZlKSB7XG4gIHRoaXMuX2N1cnZlID0gY3VydmU7XG59XG5cblJhZGlhbC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY3VydmUuYXJlYVN0YXJ0KCk7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2N1cnZlLmFyZWFFbmQoKTtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jdXJ2ZS5saW5lU3RhcnQoKTtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY3VydmUubGluZUVuZCgpO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oYSwgcikge1xuICAgIHRoaXMuX2N1cnZlLnBvaW50KHIgKiBNYXRoLnNpbihhKSwgciAqIC1NYXRoLmNvcyhhKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnZlUmFkaWFsKGN1cnZlKSB7XG5cbiAgZnVuY3Rpb24gcmFkaWFsKGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IFJhZGlhbChjdXJ2ZShjb250ZXh0KSk7XG4gIH1cblxuICByYWRpYWwuX2N1cnZlID0gY3VydmU7XG5cbiAgcmV0dXJuIHJhZGlhbDtcbn1cbiIsImZ1bmN0aW9uIFN0ZXAoY29udGV4dCwgdCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fdCA9IHQ7XG59XG5cblN0ZXAucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ggPSB0aGlzLl95ID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKDAgPCB0aGlzLl90ICYmIHRoaXMuX3QgPCAxICYmIHRoaXMuX3BvaW50ID09PSAyKSB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94LCB0aGlzLl95KTtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgaWYgKHRoaXMuX2xpbmUgPj0gMCkgdGhpcy5fdCA9IDEgLSB0aGlzLl90LCB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGlmICh0aGlzLl90IDw9IDApIHtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94LCB5KTtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgeDEgPSB0aGlzLl94ICogKDEgLSB0aGlzLl90KSArIHggKiB0aGlzLl90O1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHgxLCB0aGlzLl95KTtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh4MSwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ggPSB4LCB0aGlzLl95ID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IFN0ZXAoY29udGV4dCwgMC41KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBCZWZvcmUoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFN0ZXAoY29udGV4dCwgMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwQWZ0ZXIoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFN0ZXAoY29udGV4dCwgMSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBiIDwgYSA/IC0xIDogYiA+IGEgPyAxIDogYiA+PSBhID8gMCA6IE5hTjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGQpIHtcbiAgcmV0dXJuIGQ7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgYXJjfSBmcm9tIFwiLi9hcmNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBhcmVhfSBmcm9tIFwiLi9hcmVhXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbGluZX0gZnJvbSBcIi4vbGluZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBpZX0gZnJvbSBcIi4vcGllXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYXJlYVJhZGlhbCwgZGVmYXVsdCBhcyByYWRpYWxBcmVhfSBmcm9tIFwiLi9hcmVhUmFkaWFsXCI7IC8vIE5vdGU6IHJhZGlhbEFyZWEgaXMgZGVwcmVjYXRlZCFcbmV4cG9ydCB7ZGVmYXVsdCBhcyBsaW5lUmFkaWFsLCBkZWZhdWx0IGFzIHJhZGlhbExpbmV9IGZyb20gXCIuL2xpbmVSYWRpYWxcIjsgLy8gTm90ZTogcmFkaWFsTGluZSBpcyBkZXByZWNhdGVkIVxuZXhwb3J0IHtkZWZhdWx0IGFzIHBvaW50UmFkaWFsfSBmcm9tIFwiLi9wb2ludFJhZGlhbFwiO1xuZXhwb3J0IHtsaW5rSG9yaXpvbnRhbCwgbGlua1ZlcnRpY2FsLCBsaW5rUmFkaWFsfSBmcm9tIFwiLi9saW5rL2luZGV4XCI7XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2wsIHN5bWJvbHN9IGZyb20gXCIuL3N5bWJvbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbENpcmNsZX0gZnJvbSBcIi4vc3ltYm9sL2NpcmNsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbENyb3NzfSBmcm9tIFwiLi9zeW1ib2wvY3Jvc3NcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2xEaWFtb25kfSBmcm9tIFwiLi9zeW1ib2wvZGlhbW9uZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbFNxdWFyZX0gZnJvbSBcIi4vc3ltYm9sL3NxdWFyZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbFN0YXJ9IGZyb20gXCIuL3N5bWJvbC9zdGFyXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sVHJpYW5nbGV9IGZyb20gXCIuL3N5bWJvbC90cmlhbmdsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbFd5ZX0gZnJvbSBcIi4vc3ltYm9sL3d5ZVwiO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVCYXNpc0Nsb3NlZH0gZnJvbSBcIi4vY3VydmUvYmFzaXNDbG9zZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUJhc2lzT3Blbn0gZnJvbSBcIi4vY3VydmUvYmFzaXNPcGVuXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVCYXNpc30gZnJvbSBcIi4vY3VydmUvYmFzaXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUJ1bmRsZX0gZnJvbSBcIi4vY3VydmUvYnVuZGxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVDYXJkaW5hbENsb3NlZH0gZnJvbSBcIi4vY3VydmUvY2FyZGluYWxDbG9zZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUNhcmRpbmFsT3Blbn0gZnJvbSBcIi4vY3VydmUvY2FyZGluYWxPcGVuXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVDYXJkaW5hbH0gZnJvbSBcIi4vY3VydmUvY2FyZGluYWxcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUNhdG11bGxSb21DbG9zZWR9IGZyb20gXCIuL2N1cnZlL2NhdG11bGxSb21DbG9zZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUNhdG11bGxSb21PcGVufSBmcm9tIFwiLi9jdXJ2ZS9jYXRtdWxsUm9tT3BlblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2F0bXVsbFJvbX0gZnJvbSBcIi4vY3VydmUvY2F0bXVsbFJvbVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlTGluZWFyQ2xvc2VkfSBmcm9tIFwiLi9jdXJ2ZS9saW5lYXJDbG9zZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUxpbmVhcn0gZnJvbSBcIi4vY3VydmUvbGluZWFyXCI7XG5leHBvcnQge21vbm90b25lWCBhcyBjdXJ2ZU1vbm90b25lWCwgbW9ub3RvbmVZIGFzIGN1cnZlTW9ub3RvbmVZfSBmcm9tIFwiLi9jdXJ2ZS9tb25vdG9uZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlTmF0dXJhbH0gZnJvbSBcIi4vY3VydmUvbmF0dXJhbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlU3RlcCwgc3RlcEFmdGVyIGFzIGN1cnZlU3RlcEFmdGVyLCBzdGVwQmVmb3JlIGFzIGN1cnZlU3RlcEJlZm9yZX0gZnJvbSBcIi4vY3VydmUvc3RlcFwiO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2t9IGZyb20gXCIuL3N0YWNrXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPZmZzZXRFeHBhbmR9IGZyb20gXCIuL29mZnNldC9leHBhbmRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09mZnNldERpdmVyZ2luZ30gZnJvbSBcIi4vb2Zmc2V0L2RpdmVyZ2luZ1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT2Zmc2V0Tm9uZX0gZnJvbSBcIi4vb2Zmc2V0L25vbmVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09mZnNldFNpbGhvdWV0dGV9IGZyb20gXCIuL29mZnNldC9zaWxob3VldHRlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPZmZzZXRXaWdnbGV9IGZyb20gXCIuL29mZnNldC93aWdnbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09yZGVyQXNjZW5kaW5nfSBmcm9tIFwiLi9vcmRlci9hc2NlbmRpbmdcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09yZGVyRGVzY2VuZGluZ30gZnJvbSBcIi4vb3JkZXIvZGVzY2VuZGluZ1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJJbnNpZGVPdXR9IGZyb20gXCIuL29yZGVyL2luc2lkZU91dFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJOb25lfSBmcm9tIFwiLi9vcmRlci9ub25lXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPcmRlclJldmVyc2V9IGZyb20gXCIuL29yZGVyL3JldmVyc2VcIjtcbiIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IGN1cnZlTGluZWFyIGZyb20gXCIuL2N1cnZlL2xpbmVhclwiO1xuaW1wb3J0IHt4IGFzIHBvaW50WCwgeSBhcyBwb2ludFl9IGZyb20gXCIuL3BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IHBvaW50WCxcbiAgICAgIHkgPSBwb2ludFksXG4gICAgICBkZWZpbmVkID0gY29uc3RhbnQodHJ1ZSksXG4gICAgICBjb250ZXh0ID0gbnVsbCxcbiAgICAgIGN1cnZlID0gY3VydmVMaW5lYXIsXG4gICAgICBvdXRwdXQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGxpbmUoZGF0YSkge1xuICAgIHZhciBpLFxuICAgICAgICBuID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGQsXG4gICAgICAgIGRlZmluZWQwID0gZmFsc2UsXG4gICAgICAgIGJ1ZmZlcjtcblxuICAgIGlmIChjb250ZXh0ID09IG51bGwpIG91dHB1dCA9IGN1cnZlKGJ1ZmZlciA9IHBhdGgoKSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDw9IG47ICsraSkge1xuICAgICAgaWYgKCEoaSA8IG4gJiYgZGVmaW5lZChkID0gZGF0YVtpXSwgaSwgZGF0YSkpID09PSBkZWZpbmVkMCkge1xuICAgICAgICBpZiAoZGVmaW5lZDAgPSAhZGVmaW5lZDApIG91dHB1dC5saW5lU3RhcnQoKTtcbiAgICAgICAgZWxzZSBvdXRwdXQubGluZUVuZCgpO1xuICAgICAgfVxuICAgICAgaWYgKGRlZmluZWQwKSBvdXRwdXQucG9pbnQoK3goZCwgaSwgZGF0YSksICt5KGQsIGksIGRhdGEpKTtcbiAgICB9XG5cbiAgICBpZiAoYnVmZmVyKSByZXR1cm4gb3V0cHV0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgbGluZS54ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHggPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgbGluZSkgOiB4O1xuICB9O1xuXG4gIGxpbmUueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGxpbmUpIDogeTtcbiAgfTtcblxuICBsaW5lLmRlZmluZWQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGVmaW5lZCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoISFfKSwgbGluZSkgOiBkZWZpbmVkO1xuICB9O1xuXG4gIGxpbmUuY3VydmUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY3VydmUgPSBfLCBjb250ZXh0ICE9IG51bGwgJiYgKG91dHB1dCA9IGN1cnZlKGNvbnRleHQpKSwgbGluZSkgOiBjdXJ2ZTtcbiAgfTtcblxuICBsaW5lLmNvbnRleHQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoXyA9PSBudWxsID8gY29udGV4dCA9IG91dHB1dCA9IG51bGwgOiBvdXRwdXQgPSBjdXJ2ZShjb250ZXh0ID0gXyksIGxpbmUpIDogY29udGV4dDtcbiAgfTtcblxuICByZXR1cm4gbGluZTtcbn1cbiIsImltcG9ydCBjdXJ2ZVJhZGlhbCwge2N1cnZlUmFkaWFsTGluZWFyfSBmcm9tIFwiLi9jdXJ2ZS9yYWRpYWxcIjtcbmltcG9ydCBsaW5lIGZyb20gXCIuL2xpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVSYWRpYWwobCkge1xuICB2YXIgYyA9IGwuY3VydmU7XG5cbiAgbC5hbmdsZSA9IGwueCwgZGVsZXRlIGwueDtcbiAgbC5yYWRpdXMgPSBsLnksIGRlbGV0ZSBsLnk7XG5cbiAgbC5jdXJ2ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGMoY3VydmVSYWRpYWwoXykpIDogYygpLl9jdXJ2ZTtcbiAgfTtcblxuICByZXR1cm4gbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBsaW5lUmFkaWFsKGxpbmUoKS5jdXJ2ZShjdXJ2ZVJhZGlhbExpbmVhcikpO1xufVxuIiwiaW1wb3J0IHtwYXRofSBmcm9tIFwiZDMtcGF0aFwiO1xuaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4uL2FycmF5XCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4uL2NvbnN0YW50XCI7XG5pbXBvcnQge3ggYXMgcG9pbnRYLCB5IGFzIHBvaW50WX0gZnJvbSBcIi4uL3BvaW50XCI7XG5pbXBvcnQgcG9pbnRSYWRpYWwgZnJvbSBcIi4uL3BvaW50UmFkaWFsXCI7XG5cbmZ1bmN0aW9uIGxpbmtTb3VyY2UoZCkge1xuICByZXR1cm4gZC5zb3VyY2U7XG59XG5cbmZ1bmN0aW9uIGxpbmtUYXJnZXQoZCkge1xuICByZXR1cm4gZC50YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGxpbmsoY3VydmUpIHtcbiAgdmFyIHNvdXJjZSA9IGxpbmtTb3VyY2UsXG4gICAgICB0YXJnZXQgPSBsaW5rVGFyZ2V0LFxuICAgICAgeCA9IHBvaW50WCxcbiAgICAgIHkgPSBwb2ludFksXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBsaW5rKCkge1xuICAgIHZhciBidWZmZXIsIGFyZ3YgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyksIHMgPSBzb3VyY2UuYXBwbHkodGhpcywgYXJndiksIHQgPSB0YXJnZXQuYXBwbHkodGhpcywgYXJndik7XG4gICAgaWYgKCFjb250ZXh0KSBjb250ZXh0ID0gYnVmZmVyID0gcGF0aCgpO1xuICAgIGN1cnZlKGNvbnRleHQsICt4LmFwcGx5KHRoaXMsIChhcmd2WzBdID0gcywgYXJndikpLCAreS5hcHBseSh0aGlzLCBhcmd2KSwgK3guYXBwbHkodGhpcywgKGFyZ3ZbMF0gPSB0LCBhcmd2KSksICt5LmFwcGx5KHRoaXMsIGFyZ3YpKTtcbiAgICBpZiAoYnVmZmVyKSByZXR1cm4gY29udGV4dCA9IG51bGwsIGJ1ZmZlciArIFwiXCIgfHwgbnVsbDtcbiAgfVxuXG4gIGxpbmsuc291cmNlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNvdXJjZSA9IF8sIGxpbmspIDogc291cmNlO1xuICB9O1xuXG4gIGxpbmsudGFyZ2V0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRhcmdldCA9IF8sIGxpbmspIDogdGFyZ2V0O1xuICB9O1xuXG4gIGxpbmsueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGxpbmspIDogeDtcbiAgfTtcblxuICBsaW5rLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBsaW5rKSA6IHk7XG4gIH07XG5cbiAgbGluay5jb250ZXh0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKChjb250ZXh0ID0gXyA9PSBudWxsID8gbnVsbCA6IF8pLCBsaW5rKSA6IGNvbnRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGN1cnZlSG9yaXpvbnRhbChjb250ZXh0LCB4MCwgeTAsIHgxLCB5MSkge1xuICBjb250ZXh0Lm1vdmVUbyh4MCwgeTApO1xuICBjb250ZXh0LmJlemllckN1cnZlVG8oeDAgPSAoeDAgKyB4MSkgLyAyLCB5MCwgeDAsIHkxLCB4MSwgeTEpO1xufVxuXG5mdW5jdGlvbiBjdXJ2ZVZlcnRpY2FsKGNvbnRleHQsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIGNvbnRleHQubW92ZVRvKHgwLCB5MCk7XG4gIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4MCwgeTAgPSAoeTAgKyB5MSkgLyAyLCB4MSwgeTAsIHgxLCB5MSk7XG59XG5cbmZ1bmN0aW9uIGN1cnZlUmFkaWFsKGNvbnRleHQsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIHZhciBwMCA9IHBvaW50UmFkaWFsKHgwLCB5MCksXG4gICAgICBwMSA9IHBvaW50UmFkaWFsKHgwLCB5MCA9ICh5MCArIHkxKSAvIDIpLFxuICAgICAgcDIgPSBwb2ludFJhZGlhbCh4MSwgeTApLFxuICAgICAgcDMgPSBwb2ludFJhZGlhbCh4MSwgeTEpO1xuICBjb250ZXh0Lm1vdmVUbyhwMFswXSwgcDBbMV0pO1xuICBjb250ZXh0LmJlemllckN1cnZlVG8ocDFbMF0sIHAxWzFdLCBwMlswXSwgcDJbMV0sIHAzWzBdLCBwM1sxXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rSG9yaXpvbnRhbCgpIHtcbiAgcmV0dXJuIGxpbmsoY3VydmVIb3Jpem9udGFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtWZXJ0aWNhbCgpIHtcbiAgcmV0dXJuIGxpbmsoY3VydmVWZXJ0aWNhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rUmFkaWFsKCkge1xuICB2YXIgbCA9IGxpbmsoY3VydmVSYWRpYWwpO1xuICBsLmFuZ2xlID0gbC54LCBkZWxldGUgbC54O1xuICBsLnJhZGl1cyA9IGwueSwgZGVsZXRlIGwueTtcbiAgcmV0dXJuIGw7XG59XG4iLCJleHBvcnQgdmFyIGFicyA9IE1hdGguYWJzO1xuZXhwb3J0IHZhciBhdGFuMiA9IE1hdGguYXRhbjI7XG5leHBvcnQgdmFyIGNvcyA9IE1hdGguY29zO1xuZXhwb3J0IHZhciBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XG5leHBvcnQgdmFyIHNpbiA9IE1hdGguc2luO1xuZXhwb3J0IHZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xuXG5leHBvcnQgdmFyIGVwc2lsb24gPSAxZS0xMjtcbmV4cG9ydCB2YXIgcGkgPSBNYXRoLlBJO1xuZXhwb3J0IHZhciBoYWxmUGkgPSBwaSAvIDI7XG5leHBvcnQgdmFyIHRhdSA9IDIgKiBwaTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjb3MoeCkge1xuICByZXR1cm4geCA+IDEgPyAwIDogeCA8IC0xID8gcGkgOiBNYXRoLmFjb3MoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2luKHgpIHtcbiAgcmV0dXJuIHggPj0gMSA/IGhhbGZQaSA6IHggPD0gLTEgPyAtaGFsZlBpIDogTWF0aC5hc2luKHgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7fVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMSkpIHJldHVybjtcbiAgZm9yICh2YXIgaSwgaiA9IDAsIGQsIGR5LCB5cCwgeW4sIG4sIG0gPSBzZXJpZXNbb3JkZXJbMF1dLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAoeXAgPSB5biA9IDAsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKGR5ID0gKGQgPSBzZXJpZXNbb3JkZXJbaV1dW2pdKVsxXSAtIGRbMF0pID49IDApIHtcbiAgICAgICAgZFswXSA9IHlwLCBkWzFdID0geXAgKz0gZHk7XG4gICAgICB9IGVsc2UgaWYgKGR5IDwgMCkge1xuICAgICAgICBkWzFdID0geW4sIGRbMF0gPSB5biArPSBkeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRbMF0gPSB5cDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMCkpIHJldHVybjtcbiAgZm9yICh2YXIgaSwgbiwgaiA9IDAsIG0gPSBzZXJpZXNbMF0ubGVuZ3RoLCB5OyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh5ID0gaSA9IDA7IGkgPCBuOyArK2kpIHkgKz0gc2VyaWVzW2ldW2pdWzFdIHx8IDA7XG4gICAgaWYgKHkpIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHNlcmllc1tpXVtqXVsxXSAvPSB5O1xuICB9XG4gIG5vbmUoc2VyaWVzLCBvcmRlcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMsIG9yZGVyKSB7XG4gIGlmICghKChuID0gc2VyaWVzLmxlbmd0aCkgPiAxKSkgcmV0dXJuO1xuICBmb3IgKHZhciBpID0gMSwgaiwgczAsIHMxID0gc2VyaWVzW29yZGVyWzBdXSwgbiwgbSA9IHMxLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgIHMwID0gczEsIHMxID0gc2VyaWVzW29yZGVyW2ldXTtcbiAgICBmb3IgKGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgICBzMVtqXVsxXSArPSBzMVtqXVswXSA9IGlzTmFOKHMwW2pdWzFdKSA/IHMwW2pdWzBdIDogczBbal1bMV07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgbm9uZSBmcm9tIFwiLi9ub25lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcywgb3JkZXIpIHtcbiAgaWYgKCEoKG4gPSBzZXJpZXMubGVuZ3RoKSA+IDApKSByZXR1cm47XG4gIGZvciAodmFyIGogPSAwLCBzMCA9IHNlcmllc1tvcmRlclswXV0sIG4sIG0gPSBzMC5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBpID0gMCwgeSA9IDA7IGkgPCBuOyArK2kpIHkgKz0gc2VyaWVzW2ldW2pdWzFdIHx8IDA7XG4gICAgczBbal1bMV0gKz0gczBbal1bMF0gPSAteSAvIDI7XG4gIH1cbiAgbm9uZShzZXJpZXMsIG9yZGVyKTtcbn1cbiIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMCkgfHwgISgobSA9IChzMCA9IHNlcmllc1tvcmRlclswXV0pLmxlbmd0aCkgPiAwKSkgcmV0dXJuO1xuICBmb3IgKHZhciB5ID0gMCwgaiA9IDEsIHMwLCBtLCBuOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHMxID0gMCwgczIgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgc2kgPSBzZXJpZXNbb3JkZXJbaV1dLFxuICAgICAgICAgIHNpajAgPSBzaVtqXVsxXSB8fCAwLFxuICAgICAgICAgIHNpajEgPSBzaVtqIC0gMV1bMV0gfHwgMCxcbiAgICAgICAgICBzMyA9IChzaWowIC0gc2lqMSkgLyAyO1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBpOyArK2spIHtcbiAgICAgICAgdmFyIHNrID0gc2VyaWVzW29yZGVyW2tdXSxcbiAgICAgICAgICAgIHNrajAgPSBza1tqXVsxXSB8fCAwLFxuICAgICAgICAgICAgc2tqMSA9IHNrW2ogLSAxXVsxXSB8fCAwO1xuICAgICAgICBzMyArPSBza2owIC0gc2tqMTtcbiAgICAgIH1cbiAgICAgIHMxICs9IHNpajAsIHMyICs9IHMzICogc2lqMDtcbiAgICB9XG4gICAgczBbaiAtIDFdWzFdICs9IHMwW2ogLSAxXVswXSA9IHk7XG4gICAgaWYgKHMxKSB5IC09IHMyIC8gczE7XG4gIH1cbiAgczBbaiAtIDFdWzFdICs9IHMwW2ogLSAxXVswXSA9IHk7XG4gIG5vbmUoc2VyaWVzLCBvcmRlcik7XG59XG4iLCJpbXBvcnQgbm9uZSBmcm9tIFwiLi9ub25lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcykge1xuICB2YXIgc3VtcyA9IHNlcmllcy5tYXAoc3VtKTtcbiAgcmV0dXJuIG5vbmUoc2VyaWVzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIHN1bXNbYV0gLSBzdW1zW2JdOyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bShzZXJpZXMpIHtcbiAgdmFyIHMgPSAwLCBpID0gLTEsIG4gPSBzZXJpZXMubGVuZ3RoLCB2O1xuICB3aGlsZSAoKytpIDwgbikgaWYgKHYgPSArc2VyaWVzW2ldWzFdKSBzICs9IHY7XG4gIHJldHVybiBzO1xufVxuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzKSB7XG4gIHJldHVybiBhc2NlbmRpbmcoc2VyaWVzKS5yZXZlcnNlKCk7XG59XG4iLCJpbXBvcnQgbm9uZSBmcm9tIFwiLi9ub25lXCI7XG5pbXBvcnQge3N1bX0gZnJvbSBcIi4vYXNjZW5kaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcykge1xuICB2YXIgbiA9IHNlcmllcy5sZW5ndGgsXG4gICAgICBpLFxuICAgICAgaixcbiAgICAgIHN1bXMgPSBzZXJpZXMubWFwKHN1bSksXG4gICAgICBvcmRlciA9IG5vbmUoc2VyaWVzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIHN1bXNbYl0gLSBzdW1zW2FdOyB9KSxcbiAgICAgIHRvcCA9IDAsXG4gICAgICBib3R0b20gPSAwLFxuICAgICAgdG9wcyA9IFtdLFxuICAgICAgYm90dG9tcyA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICBqID0gb3JkZXJbaV07XG4gICAgaWYgKHRvcCA8IGJvdHRvbSkge1xuICAgICAgdG9wICs9IHN1bXNbal07XG4gICAgICB0b3BzLnB1c2goaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdHRvbSArPSBzdW1zW2pdO1xuICAgICAgYm90dG9tcy5wdXNoKGopO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3R0b21zLnJldmVyc2UoKS5jb25jYXQodG9wcyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgdmFyIG4gPSBzZXJpZXMubGVuZ3RoLCBvID0gbmV3IEFycmF5KG4pO1xuICB3aGlsZSAoLS1uID49IDApIG9bbl0gPSBuO1xuICByZXR1cm4gbztcbn1cbiIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzKSB7XG4gIHJldHVybiBub25lKHNlcmllcykucmV2ZXJzZSgpO1xufVxuIiwiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgZGVzY2VuZGluZyBmcm9tIFwiLi9kZXNjZW5kaW5nXCI7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4vaWRlbnRpdHlcIjtcbmltcG9ydCB7dGF1fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgdmFsdWUgPSBpZGVudGl0eSxcbiAgICAgIHNvcnRWYWx1ZXMgPSBkZXNjZW5kaW5nLFxuICAgICAgc29ydCA9IG51bGwsXG4gICAgICBzdGFydEFuZ2xlID0gY29uc3RhbnQoMCksXG4gICAgICBlbmRBbmdsZSA9IGNvbnN0YW50KHRhdSksXG4gICAgICBwYWRBbmdsZSA9IGNvbnN0YW50KDApO1xuXG4gIGZ1bmN0aW9uIHBpZShkYXRhKSB7XG4gICAgdmFyIGksXG4gICAgICAgIG4gPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgaixcbiAgICAgICAgayxcbiAgICAgICAgc3VtID0gMCxcbiAgICAgICAgaW5kZXggPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGFyY3MgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGEwID0gK3N0YXJ0QW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgZGEgPSBNYXRoLm1pbih0YXUsIE1hdGgubWF4KC10YXUsIGVuZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLSBhMCkpLFxuICAgICAgICBhMSxcbiAgICAgICAgcCA9IE1hdGgubWluKE1hdGguYWJzKGRhKSAvIG4sIHBhZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpLFxuICAgICAgICBwYSA9IHAgKiAoZGEgPCAwID8gLTEgOiAxKSxcbiAgICAgICAgdjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgodiA9IGFyY3NbaW5kZXhbaV0gPSBpXSA9ICt2YWx1ZShkYXRhW2ldLCBpLCBkYXRhKSkgPiAwKSB7XG4gICAgICAgIHN1bSArPSB2O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9wdGlvbmFsbHkgc29ydCB0aGUgYXJjcyBieSBwcmV2aW91c2x5LWNvbXB1dGVkIHZhbHVlcyBvciBieSBkYXRhLlxuICAgIGlmIChzb3J0VmFsdWVzICE9IG51bGwpIGluZGV4LnNvcnQoZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gc29ydFZhbHVlcyhhcmNzW2ldLCBhcmNzW2pdKTsgfSk7XG4gICAgZWxzZSBpZiAoc29ydCAhPSBudWxsKSBpbmRleC5zb3J0KGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuIHNvcnQoZGF0YVtpXSwgZGF0YVtqXSk7IH0pO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgYXJjcyEgVGhleSBhcmUgc3RvcmVkIGluIHRoZSBvcmlnaW5hbCBkYXRhJ3Mgb3JkZXIuXG4gICAgZm9yIChpID0gMCwgayA9IHN1bSA/IChkYSAtIG4gKiBwYSkgLyBzdW0gOiAwOyBpIDwgbjsgKytpLCBhMCA9IGExKSB7XG4gICAgICBqID0gaW5kZXhbaV0sIHYgPSBhcmNzW2pdLCBhMSA9IGEwICsgKHYgPiAwID8gdiAqIGsgOiAwKSArIHBhLCBhcmNzW2pdID0ge1xuICAgICAgICBkYXRhOiBkYXRhW2pdLFxuICAgICAgICBpbmRleDogaSxcbiAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgIHN0YXJ0QW5nbGU6IGEwLFxuICAgICAgICBlbmRBbmdsZTogYTEsXG4gICAgICAgIHBhZEFuZ2xlOiBwXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBhcmNzO1xuICB9XG5cbiAgcGllLnZhbHVlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHZhbHVlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHBpZSkgOiB2YWx1ZTtcbiAgfTtcblxuICBwaWUuc29ydFZhbHVlcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzb3J0VmFsdWVzID0gXywgc29ydCA9IG51bGwsIHBpZSkgOiBzb3J0VmFsdWVzO1xuICB9O1xuXG4gIHBpZS5zb3J0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNvcnQgPSBfLCBzb3J0VmFsdWVzID0gbnVsbCwgcGllKSA6IHNvcnQ7XG4gIH07XG5cbiAgcGllLnN0YXJ0QW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RhcnRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBwaWUpIDogc3RhcnRBbmdsZTtcbiAgfTtcblxuICBwaWUuZW5kQW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZW5kQW5nbGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgcGllKSA6IGVuZEFuZ2xlO1xuICB9O1xuXG4gIHBpZS5wYWRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBwaWUpIDogcGFkQW5nbGU7XG4gIH07XG5cbiAgcmV0dXJuIHBpZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB4KHApIHtcbiAgcmV0dXJuIHBbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5KHApIHtcbiAgcmV0dXJuIHBbMV07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5KSB7XG4gIHJldHVybiBbKHkgPSAreSkgKiBNYXRoLmNvcyh4IC09IE1hdGguUEkgLyAyKSwgeSAqIE1hdGguc2luKHgpXTtcbn1cbiIsImltcG9ydCB7c2xpY2V9IGZyb20gXCIuL2FycmF5XCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBvZmZzZXROb25lIGZyb20gXCIuL29mZnNldC9ub25lXCI7XG5pbXBvcnQgb3JkZXJOb25lIGZyb20gXCIuL29yZGVyL25vbmVcIjtcblxuZnVuY3Rpb24gc3RhY2tWYWx1ZShkLCBrZXkpIHtcbiAgcmV0dXJuIGRba2V5XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBrZXlzID0gY29uc3RhbnQoW10pLFxuICAgICAgb3JkZXIgPSBvcmRlck5vbmUsXG4gICAgICBvZmZzZXQgPSBvZmZzZXROb25lLFxuICAgICAgdmFsdWUgPSBzdGFja1ZhbHVlO1xuXG4gIGZ1bmN0aW9uIHN0YWNrKGRhdGEpIHtcbiAgICB2YXIga3ogPSBrZXlzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgIGksXG4gICAgICAgIG0gPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgbiA9IGt6Lmxlbmd0aCxcbiAgICAgICAgc3ogPSBuZXcgQXJyYXkobiksXG4gICAgICAgIG96O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgZm9yICh2YXIga2kgPSBreltpXSwgc2kgPSBzeltpXSA9IG5ldyBBcnJheShtKSwgaiA9IDAsIHNpajsgaiA8IG07ICsraikge1xuICAgICAgICBzaVtqXSA9IHNpaiA9IFswLCArdmFsdWUoZGF0YVtqXSwga2ksIGosIGRhdGEpXTtcbiAgICAgICAgc2lqLmRhdGEgPSBkYXRhW2pdO1xuICAgICAgfVxuICAgICAgc2kua2V5ID0ga2k7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMCwgb3ogPSBvcmRlcihzeik7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN6W296W2ldXS5pbmRleCA9IGk7XG4gICAgfVxuXG4gICAgb2Zmc2V0KHN6LCBveik7XG4gICAgcmV0dXJuIHN6O1xuICB9XG5cbiAgc3RhY2sua2V5cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChrZXlzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChzbGljZS5jYWxsKF8pKSwgc3RhY2spIDoga2V5cztcbiAgfTtcblxuICBzdGFjay52YWx1ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh2YWx1ZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBzdGFjaykgOiB2YWx1ZTtcbiAgfTtcblxuICBzdGFjay5vcmRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChvcmRlciA9IF8gPT0gbnVsbCA/IG9yZGVyTm9uZSA6IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoc2xpY2UuY2FsbChfKSksIHN0YWNrKSA6IG9yZGVyO1xuICB9O1xuXG4gIHN0YWNrLm9mZnNldCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChvZmZzZXQgPSBfID09IG51bGwgPyBvZmZzZXROb25lIDogXywgc3RhY2spIDogb2Zmc2V0O1xuICB9O1xuXG4gIHJldHVybiBzdGFjaztcbn1cbiIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBjaXJjbGUgZnJvbSBcIi4vc3ltYm9sL2NpcmNsZVwiO1xuaW1wb3J0IGNyb3NzIGZyb20gXCIuL3N5bWJvbC9jcm9zc1wiO1xuaW1wb3J0IGRpYW1vbmQgZnJvbSBcIi4vc3ltYm9sL2RpYW1vbmRcIjtcbmltcG9ydCBzdGFyIGZyb20gXCIuL3N5bWJvbC9zdGFyXCI7XG5pbXBvcnQgc3F1YXJlIGZyb20gXCIuL3N5bWJvbC9zcXVhcmVcIjtcbmltcG9ydCB0cmlhbmdsZSBmcm9tIFwiLi9zeW1ib2wvdHJpYW5nbGVcIjtcbmltcG9ydCB3eWUgZnJvbSBcIi4vc3ltYm9sL3d5ZVwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmV4cG9ydCB2YXIgc3ltYm9scyA9IFtcbiAgY2lyY2xlLFxuICBjcm9zcyxcbiAgZGlhbW9uZCxcbiAgc3F1YXJlLFxuICBzdGFyLFxuICB0cmlhbmdsZSxcbiAgd3llXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHR5cGUgPSBjb25zdGFudChjaXJjbGUpLFxuICAgICAgc2l6ZSA9IGNvbnN0YW50KDY0KSxcbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIHN5bWJvbCgpIHtcbiAgICB2YXIgYnVmZmVyO1xuICAgIGlmICghY29udGV4dCkgY29udGV4dCA9IGJ1ZmZlciA9IHBhdGgoKTtcbiAgICB0eXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykuZHJhdyhjb250ZXh0LCArc2l6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICBpZiAoYnVmZmVyKSByZXR1cm4gY29udGV4dCA9IG51bGwsIGJ1ZmZlciArIFwiXCIgfHwgbnVsbDtcbiAgfVxuXG4gIHN5bWJvbC50eXBlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHR5cGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KF8pLCBzeW1ib2wpIDogdHlwZTtcbiAgfTtcblxuICBzeW1ib2wuc2l6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzaXplID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHN5bWJvbCkgOiBzaXplO1xuICB9O1xuXG4gIHN5bWJvbC5jb250ZXh0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNvbnRleHQgPSBfID09IG51bGwgPyBudWxsIDogXywgc3ltYm9sKSA6IGNvbnRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIHN5bWJvbDtcbn1cbiIsImltcG9ydCB7cGksIHRhdX0gZnJvbSBcIi4uL21hdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkcmF3OiBmdW5jdGlvbihjb250ZXh0LCBzaXplKSB7XG4gICAgdmFyIHIgPSBNYXRoLnNxcnQoc2l6ZSAvIHBpKTtcbiAgICBjb250ZXh0Lm1vdmVUbyhyLCAwKTtcbiAgICBjb250ZXh0LmFyYygwLCAwLCByLCAwLCB0YXUpO1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkcmF3OiBmdW5jdGlvbihjb250ZXh0LCBzaXplKSB7XG4gICAgdmFyIHIgPSBNYXRoLnNxcnQoc2l6ZSAvIDUpIC8gMjtcbiAgICBjb250ZXh0Lm1vdmVUbygtMyAqIHIsIC1yKTtcbiAgICBjb250ZXh0LmxpbmVUbygtciwgLXIpO1xuICAgIGNvbnRleHQubGluZVRvKC1yLCAtMyAqIHIpO1xuICAgIGNvbnRleHQubGluZVRvKHIsIC0zICogcik7XG4gICAgY29udGV4dC5saW5lVG8ociwgLXIpO1xuICAgIGNvbnRleHQubGluZVRvKDMgKiByLCAtcik7XG4gICAgY29udGV4dC5saW5lVG8oMyAqIHIsIHIpO1xuICAgIGNvbnRleHQubGluZVRvKHIsIHIpO1xuICAgIGNvbnRleHQubGluZVRvKHIsIDMgKiByKTtcbiAgICBjb250ZXh0LmxpbmVUbygtciwgMyAqIHIpO1xuICAgIGNvbnRleHQubGluZVRvKC1yLCByKTtcbiAgICBjb250ZXh0LmxpbmVUbygtMyAqIHIsIHIpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn07XG4iLCJ2YXIgdGFuMzAgPSBNYXRoLnNxcnQoMSAvIDMpLFxuICAgIHRhbjMwXzIgPSB0YW4zMCAqIDI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciB5ID0gTWF0aC5zcXJ0KHNpemUgLyB0YW4zMF8yKSxcbiAgICAgICAgeCA9IHkgKiB0YW4zMDtcbiAgICBjb250ZXh0Lm1vdmVUbygwLCAteSk7XG4gICAgY29udGV4dC5saW5lVG8oeCwgMCk7XG4gICAgY29udGV4dC5saW5lVG8oMCwgeSk7XG4gICAgY29udGV4dC5saW5lVG8oLXgsIDApO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgdyA9IE1hdGguc3FydChzaXplKSxcbiAgICAgICAgeCA9IC13IC8gMjtcbiAgICBjb250ZXh0LnJlY3QoeCwgeCwgdywgdyk7XG4gIH1cbn07XG4iLCJpbXBvcnQge3BpLCB0YXV9IGZyb20gXCIuLi9tYXRoXCI7XG5cbnZhciBrYSA9IDAuODkwODEzMDkxNTI5Mjg1MjI4MTAsXG4gICAga3IgPSBNYXRoLnNpbihwaSAvIDEwKSAvIE1hdGguc2luKDcgKiBwaSAvIDEwKSxcbiAgICBreCA9IE1hdGguc2luKHRhdSAvIDEwKSAqIGtyLFxuICAgIGt5ID0gLU1hdGguY29zKHRhdSAvIDEwKSAqIGtyO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgciA9IE1hdGguc3FydChzaXplICoga2EpLFxuICAgICAgICB4ID0ga3ggKiByLFxuICAgICAgICB5ID0ga3kgKiByO1xuICAgIGNvbnRleHQubW92ZVRvKDAsIC1yKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4LCB5KTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IDU7ICsraSkge1xuICAgICAgdmFyIGEgPSB0YXUgKiBpIC8gNSxcbiAgICAgICAgICBjID0gTWF0aC5jb3MoYSksXG4gICAgICAgICAgcyA9IE1hdGguc2luKGEpO1xuICAgICAgY29udGV4dC5saW5lVG8ocyAqIHIsIC1jICogcik7XG4gICAgICBjb250ZXh0LmxpbmVUbyhjICogeCAtIHMgKiB5LCBzICogeCArIGMgKiB5KTtcbiAgICB9XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufTtcbiIsInZhciBzcXJ0MyA9IE1hdGguc3FydCgzKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkcmF3OiBmdW5jdGlvbihjb250ZXh0LCBzaXplKSB7XG4gICAgdmFyIHkgPSAtTWF0aC5zcXJ0KHNpemUgLyAoc3FydDMgKiAzKSk7XG4gICAgY29udGV4dC5tb3ZlVG8oMCwgeSAqIDIpO1xuICAgIGNvbnRleHQubGluZVRvKC1zcXJ0MyAqIHksIC15KTtcbiAgICBjb250ZXh0LmxpbmVUbyhzcXJ0MyAqIHksIC15KTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuIiwidmFyIGMgPSAtMC41LFxuICAgIHMgPSBNYXRoLnNxcnQoMykgLyAyLFxuICAgIGsgPSAxIC8gTWF0aC5zcXJ0KDEyKSxcbiAgICBhID0gKGsgLyAyICsgMSkgKiAzO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgciA9IE1hdGguc3FydChzaXplIC8gYSksXG4gICAgICAgIHgwID0gciAvIDIsXG4gICAgICAgIHkwID0gciAqIGssXG4gICAgICAgIHgxID0geDAsXG4gICAgICAgIHkxID0gciAqIGsgKyByLFxuICAgICAgICB4MiA9IC14MSxcbiAgICAgICAgeTIgPSB5MTtcbiAgICBjb250ZXh0Lm1vdmVUbyh4MCwgeTApO1xuICAgIGNvbnRleHQubGluZVRvKHgxLCB5MSk7XG4gICAgY29udGV4dC5saW5lVG8oeDIsIHkyKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDAgLSBzICogeTAsIHMgKiB4MCArIGMgKiB5MCk7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgxIC0gcyAqIHkxLCBzICogeDEgKyBjICogeTEpO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MiAtIHMgKiB5MiwgcyAqIHgyICsgYyAqIHkyKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDAgKyBzICogeTAsIGMgKiB5MCAtIHMgKiB4MCk7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgxICsgcyAqIHkxLCBjICogeTEgLSBzICogeDEpO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MiArIHMgKiB5MiwgYyAqIHkyIC0gcyAqIHgyKTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuIiwiZXhwb3J0IHtcbiAgbm93LFxuICB0aW1lcixcbiAgdGltZXJGbHVzaFxufSBmcm9tIFwiLi90aW1lclwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVvdXRcbn0gZnJvbSBcIi4vdGltZW91dFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIGludGVydmFsXG59IGZyb20gXCIuL2ludGVydmFsXCI7XG4iLCJpbXBvcnQge1RpbWVyLCBub3d9IGZyb20gXCIuL3RpbWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lciwgdG90YWwgPSBkZWxheTtcbiAgaWYgKGRlbGF5ID09IG51bGwpIHJldHVybiB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSwgdDtcbiAgZGVsYXkgPSArZGVsYXksIHRpbWUgPSB0aW1lID09IG51bGwgPyBub3coKSA6ICt0aW1lO1xuICB0LnJlc3RhcnQoZnVuY3Rpb24gdGljayhlbGFwc2VkKSB7XG4gICAgZWxhcHNlZCArPSB0b3RhbDtcbiAgICB0LnJlc3RhcnQodGljaywgdG90YWwgKz0gZGVsYXksIHRpbWUpO1xuICAgIGNhbGxiYWNrKGVsYXBzZWQpO1xuICB9LCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuIiwiaW1wb3J0IHtUaW1lcn0gZnJvbSBcIi4vdGltZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICBkZWxheSA9IGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5O1xuICB0LnJlc3RhcnQoZnVuY3Rpb24oZWxhcHNlZCkge1xuICAgIHQuc3RvcCgpO1xuICAgIGNhbGxiYWNrKGVsYXBzZWQgKyBkZWxheSk7XG4gIH0sIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG4iLCJ2YXIgZnJhbWUgPSAwLCAvLyBpcyBhbiBhbmltYXRpb24gZnJhbWUgcGVuZGluZz9cbiAgICB0aW1lb3V0ID0gMCwgLy8gaXMgYSB0aW1lb3V0IHBlbmRpbmc/XG4gICAgaW50ZXJ2YWwgPSAwLCAvLyBhcmUgYW55IHRpbWVycyBhY3RpdmU/XG4gICAgcG9rZURlbGF5ID0gMTAwMCwgLy8gaG93IGZyZXF1ZW50bHkgd2UgY2hlY2sgZm9yIGNsb2NrIHNrZXdcbiAgICB0YXNrSGVhZCxcbiAgICB0YXNrVGFpbCxcbiAgICBjbG9ja0xhc3QgPSAwLFxuICAgIGNsb2NrTm93ID0gMCxcbiAgICBjbG9ja1NrZXcgPSAwLFxuICAgIGNsb2NrID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSBcIm9iamVjdFwiICYmIHBlcmZvcm1hbmNlLm5vdyA/IHBlcmZvcm1hbmNlIDogRGF0ZSxcbiAgICBzZXRGcmFtZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpIDogZnVuY3Rpb24oZikgeyBzZXRUaW1lb3V0KGYsIDE3KTsgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIGNsb2NrTm93IHx8IChzZXRGcmFtZShjbGVhck5vdyksIGNsb2NrTm93ID0gY2xvY2subm93KCkgKyBjbG9ja1NrZXcpO1xufVxuXG5mdW5jdGlvbiBjbGVhck5vdygpIHtcbiAgY2xvY2tOb3cgPSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGltZXIoKSB7XG4gIHRoaXMuX2NhbGwgPVxuICB0aGlzLl90aW1lID1cbiAgdGhpcy5fbmV4dCA9IG51bGw7XG59XG5cblRpbWVyLnByb3RvdHlwZSA9IHRpbWVyLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRpbWVyLFxuICByZXN0YXJ0OiBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICB0aW1lID0gKHRpbWUgPT0gbnVsbCA/IG5vdygpIDogK3RpbWUpICsgKGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5KTtcbiAgICBpZiAoIXRoaXMuX25leHQgJiYgdGFza1RhaWwgIT09IHRoaXMpIHtcbiAgICAgIGlmICh0YXNrVGFpbCkgdGFza1RhaWwuX25leHQgPSB0aGlzO1xuICAgICAgZWxzZSB0YXNrSGVhZCA9IHRoaXM7XG4gICAgICB0YXNrVGFpbCA9IHRoaXM7XG4gICAgfVxuICAgIHRoaXMuX2NhbGwgPSBjYWxsYmFjaztcbiAgICB0aGlzLl90aW1lID0gdGltZTtcbiAgICBzbGVlcCgpO1xuICB9LFxuICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY2FsbCkge1xuICAgICAgdGhpcy5fY2FsbCA9IG51bGw7XG4gICAgICB0aGlzLl90aW1lID0gSW5maW5pdHk7XG4gICAgICBzbGVlcCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lcjtcbiAgdC5yZXN0YXJ0KGNhbGxiYWNrLCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZXJGbHVzaCgpIHtcbiAgbm93KCk7IC8vIEdldCB0aGUgY3VycmVudCB0aW1lLCBpZiBub3QgYWxyZWFkeSBzZXQuXG4gICsrZnJhbWU7IC8vIFByZXRlbmQgd2XigJl2ZSBzZXQgYW4gYWxhcm0sIGlmIHdlIGhhdmVu4oCZdCBhbHJlYWR5LlxuICB2YXIgdCA9IHRhc2tIZWFkLCBlO1xuICB3aGlsZSAodCkge1xuICAgIGlmICgoZSA9IGNsb2NrTm93IC0gdC5fdGltZSkgPj0gMCkgdC5fY2FsbC5jYWxsKG51bGwsIGUpO1xuICAgIHQgPSB0Ll9uZXh0O1xuICB9XG4gIC0tZnJhbWU7XG59XG5cbmZ1bmN0aW9uIHdha2UoKSB7XG4gIGNsb2NrTm93ID0gKGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpKSArIGNsb2NrU2tldztcbiAgZnJhbWUgPSB0aW1lb3V0ID0gMDtcbiAgdHJ5IHtcbiAgICB0aW1lckZsdXNoKCk7XG4gIH0gZmluYWxseSB7XG4gICAgZnJhbWUgPSAwO1xuICAgIG5hcCgpO1xuICAgIGNsb2NrTm93ID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb2tlKCkge1xuICB2YXIgbm93ID0gY2xvY2subm93KCksIGRlbGF5ID0gbm93IC0gY2xvY2tMYXN0O1xuICBpZiAoZGVsYXkgPiBwb2tlRGVsYXkpIGNsb2NrU2tldyAtPSBkZWxheSwgY2xvY2tMYXN0ID0gbm93O1xufVxuXG5mdW5jdGlvbiBuYXAoKSB7XG4gIHZhciB0MCwgdDEgPSB0YXNrSGVhZCwgdDIsIHRpbWUgPSBJbmZpbml0eTtcbiAgd2hpbGUgKHQxKSB7XG4gICAgaWYgKHQxLl9jYWxsKSB7XG4gICAgICBpZiAodGltZSA+IHQxLl90aW1lKSB0aW1lID0gdDEuX3RpbWU7XG4gICAgICB0MCA9IHQxLCB0MSA9IHQxLl9uZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0MiA9IHQxLl9uZXh0LCB0MS5fbmV4dCA9IG51bGw7XG4gICAgICB0MSA9IHQwID8gdDAuX25leHQgPSB0MiA6IHRhc2tIZWFkID0gdDI7XG4gICAgfVxuICB9XG4gIHRhc2tUYWlsID0gdDA7XG4gIHNsZWVwKHRpbWUpO1xufVxuXG5mdW5jdGlvbiBzbGVlcCh0aW1lKSB7XG4gIGlmIChmcmFtZSkgcmV0dXJuOyAvLyBTb29uZXN0IGFsYXJtIGFscmVhZHkgc2V0LCBvciB3aWxsIGJlLlxuICBpZiAodGltZW91dCkgdGltZW91dCA9IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgdmFyIGRlbGF5ID0gdGltZSAtIGNsb2NrTm93OyAvLyBTdHJpY3RseSBsZXNzIHRoYW4gaWYgd2UgcmVjb21wdXRlZCBjbG9ja05vdy5cbiAgaWYgKGRlbGF5ID4gMjQpIHtcbiAgICBpZiAodGltZSA8IEluZmluaXR5KSB0aW1lb3V0ID0gc2V0VGltZW91dCh3YWtlLCB0aW1lIC0gY2xvY2subm93KCkgLSBjbG9ja1NrZXcpO1xuICAgIGlmIChpbnRlcnZhbCkgaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWludGVydmFsKSBjbG9ja0xhc3QgPSBjbG9jay5ub3coKSwgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChwb2tlLCBwb2tlRGVsYXkpO1xuICAgIGZyYW1lID0gMSwgc2V0RnJhbWUod2FrZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vdHJhbnNpdGlvbi9pbmRleFwiO1xuaW1wb3J0IHtTQ0hFRFVMRUR9IGZyb20gXCIuL3RyYW5zaXRpb24vc2NoZWR1bGVcIjtcblxudmFyIHJvb3QgPSBbbnVsbF07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgc2NoZWR1bGUsXG4gICAgICBpO1xuXG4gIGlmIChzY2hlZHVsZXMpIHtcbiAgICBuYW1lID0gbmFtZSA9PSBudWxsID8gbnVsbCA6IG5hbWUgKyBcIlwiO1xuICAgIGZvciAoaSBpbiBzY2hlZHVsZXMpIHtcbiAgICAgIGlmICgoc2NoZWR1bGUgPSBzY2hlZHVsZXNbaV0pLnN0YXRlID4gU0NIRURVTEVEICYmIHNjaGVkdWxlLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKFtbbm9kZV1dLCByb290LCBuYW1lLCAraSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgXCIuL3NlbGVjdGlvbi9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRyYW5zaXRpb259IGZyb20gXCIuL3RyYW5zaXRpb24vaW5kZXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBhY3RpdmV9IGZyb20gXCIuL2FjdGl2ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycnVwdH0gZnJvbSBcIi4vaW50ZXJydXB0XCI7XG4iLCJpbXBvcnQge1NUQVJUSU5HLCBFTkRJTkcsIEVOREVEfSBmcm9tIFwiLi90cmFuc2l0aW9uL3NjaGVkdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgc2NoZWR1bGUsXG4gICAgICBhY3RpdmUsXG4gICAgICBlbXB0eSA9IHRydWUsXG4gICAgICBpO1xuXG4gIGlmICghc2NoZWR1bGVzKSByZXR1cm47XG5cbiAgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcblxuICBmb3IgKGkgaW4gc2NoZWR1bGVzKSB7XG4gICAgaWYgKChzY2hlZHVsZSA9IHNjaGVkdWxlc1tpXSkubmFtZSAhPT0gbmFtZSkgeyBlbXB0eSA9IGZhbHNlOyBjb250aW51ZTsgfVxuICAgIGFjdGl2ZSA9IHNjaGVkdWxlLnN0YXRlID4gU1RBUlRJTkcgJiYgc2NoZWR1bGUuc3RhdGUgPCBFTkRJTkc7XG4gICAgc2NoZWR1bGUuc3RhdGUgPSBFTkRFRDtcbiAgICBzY2hlZHVsZS50aW1lci5zdG9wKCk7XG4gICAgaWYgKGFjdGl2ZSkgc2NoZWR1bGUub24uY2FsbChcImludGVycnVwdFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzY2hlZHVsZS5pbmRleCwgc2NoZWR1bGUuZ3JvdXApO1xuICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gIH1cblxuICBpZiAoZW1wdHkpIGRlbGV0ZSBub2RlLl9fdHJhbnNpdGlvbjtcbn1cbiIsImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ludGVycnVwdCBmcm9tIFwiLi9pbnRlcnJ1cHRcIjtcbmltcG9ydCBzZWxlY3Rpb25fdHJhbnNpdGlvbiBmcm9tIFwiLi90cmFuc2l0aW9uXCI7XG5cbnNlbGVjdGlvbi5wcm90b3R5cGUuaW50ZXJydXB0ID0gc2VsZWN0aW9uX2ludGVycnVwdDtcbnNlbGVjdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvbiA9IHNlbGVjdGlvbl90cmFuc2l0aW9uO1xuIiwiaW1wb3J0IGludGVycnVwdCBmcm9tIFwiLi4vaW50ZXJydXB0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBpbnRlcnJ1cHQodGhpcywgbmFtZSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtUcmFuc2l0aW9uLCBuZXdJZH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW5kZXhcIjtcbmltcG9ydCBzY2hlZHVsZSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9zY2hlZHVsZVwiO1xuaW1wb3J0IHtlYXNlQ3ViaWNJbk91dH0gZnJvbSBcImQzLWVhc2VcIjtcbmltcG9ydCB7bm93fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGRlZmF1bHRUaW1pbmcgPSB7XG4gIHRpbWU6IG51bGwsIC8vIFNldCBvbiB1c2UuXG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogMjUwLFxuICBlYXNlOiBlYXNlQ3ViaWNJbk91dFxufTtcblxuZnVuY3Rpb24gaW5oZXJpdChub2RlLCBpZCkge1xuICB2YXIgdGltaW5nO1xuICB3aGlsZSAoISh0aW1pbmcgPSBub2RlLl9fdHJhbnNpdGlvbikgfHwgISh0aW1pbmcgPSB0aW1pbmdbaWRdKSkge1xuICAgIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFRpbWluZy50aW1lID0gbm93KCksIGRlZmF1bHRUaW1pbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aW1pbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGlkLFxuICAgICAgdGltaW5nO1xuXG4gIGlmIChuYW1lIGluc3RhbmNlb2YgVHJhbnNpdGlvbikge1xuICAgIGlkID0gbmFtZS5faWQsIG5hbWUgPSBuYW1lLl9uYW1lO1xuICB9IGVsc2Uge1xuICAgIGlkID0gbmV3SWQoKSwgKHRpbWluZyA9IGRlZmF1bHRUaW1pbmcpLnRpbWUgPSBub3coKSwgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNjaGVkdWxlKG5vZGUsIG5hbWUsIGlkLCBpLCBncm91cCwgdGltaW5nIHx8IGluaGVyaXQobm9kZSwgaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtU3ZnIGFzIGludGVycG9sYXRlVHJhbnNmb3JtfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7bmFtZXNwYWNlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuXCI7XG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSBcIi4vaW50ZXJwb2xhdGVcIjtcblxuZnVuY3Rpb24gYXR0clJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clJlbW92ZU5TKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudChuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciB2YWx1ZTAwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMCA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIHJldHVybiB2YWx1ZTAgPT09IHZhbHVlMSA/IG51bGxcbiAgICAgICAgOiB2YWx1ZTAgPT09IHZhbHVlMDAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZSh2YWx1ZTAwID0gdmFsdWUwLCB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnROUyhmdWxsbmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgdmFsdWUwMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTAgPSB0aGlzLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgcmV0dXJuIHZhbHVlMCA9PT0gdmFsdWUxID8gbnVsbFxuICAgICAgICA6IHZhbHVlMCA9PT0gdmFsdWUwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHZhbHVlMDAgPSB2YWx1ZTAsIHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbihuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHZhbHVlMDAsXG4gICAgICB2YWx1ZTEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMCwgdmFsdWUxID0gdmFsdWUodGhpcyk7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSByZXR1cm4gdm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB2YWx1ZTAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICByZXR1cm4gdmFsdWUwID09PSB2YWx1ZTEgPyBudWxsXG4gICAgICAgIDogdmFsdWUwID09PSB2YWx1ZTAwICYmIHZhbHVlMSA9PT0gdmFsdWUxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHZhbHVlMDAgPSB2YWx1ZTAsIHZhbHVlMTAgPSB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciB2YWx1ZTAwLFxuICAgICAgdmFsdWUxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTAsIHZhbHVlMSA9IHZhbHVlKHRoaXMpO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgcmV0dXJuIHZvaWQgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIHZhbHVlMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICByZXR1cm4gdmFsdWUwID09PSB2YWx1ZTEgPyBudWxsXG4gICAgICAgIDogdmFsdWUwID09PSB2YWx1ZTAwICYmIHZhbHVlMSA9PT0gdmFsdWUxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHZhbHVlMDAgPSB2YWx1ZTAsIHZhbHVlMTAgPSB2YWx1ZTEpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSksIGkgPSBmdWxsbmFtZSA9PT0gXCJ0cmFuc2Zvcm1cIiA/IGludGVycG9sYXRlVHJhbnNmb3JtIDogaW50ZXJwb2xhdGU7XG4gIHJldHVybiB0aGlzLmF0dHJUd2VlbihuYW1lLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyRnVuY3Rpb25OUyA6IGF0dHJGdW5jdGlvbikoZnVsbG5hbWUsIGksIHR3ZWVuVmFsdWUodGhpcywgXCJhdHRyLlwiICsgbmFtZSwgdmFsdWUpKVxuICAgICAgOiB2YWx1ZSA9PSBudWxsID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkoZnVsbG5hbWUpXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KShmdWxsbmFtZSwgaSwgdmFsdWUgKyBcIlwiKSk7XG59XG4iLCJpbXBvcnQge25hbWVzcGFjZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuXG5mdW5jdGlvbiBhdHRyVHdlZW5OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLCBpID0gdmFsdWUuYXBwbHkobm9kZSwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gaSAmJiBmdW5jdGlvbih0KSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgaSh0KSk7XG4gICAgfTtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5mdW5jdGlvbiBhdHRyVHdlZW4obmFtZSwgdmFsdWUpIHtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLCBpID0gdmFsdWUuYXBwbHkobm9kZSwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gaSAmJiBmdW5jdGlvbih0KSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBpKHQpKTtcbiAgICB9O1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBrZXkgPSBcImF0dHIuXCIgKyBuYW1lO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHJldHVybiAoa2V5ID0gdGhpcy50d2VlbihrZXkpKSAmJiBrZXkuX3ZhbHVlO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBudWxsKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCAoZnVsbG5hbWUubG9jYWwgPyBhdHRyVHdlZW5OUyA6IGF0dHJUd2VlbikoZnVsbG5hbWUsIHZhbHVlKSk7XG59XG4iLCJpbXBvcnQge2dldCwgaW5pdH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZnVuY3Rpb24gZGVsYXlGdW5jdGlvbihpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGluaXQodGhpcywgaWQpLmRlbGF5ID0gK3ZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlbGF5Q29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9ICt2YWx1ZSwgZnVuY3Rpb24oKSB7XG4gICAgaW5pdCh0aGlzLCBpZCkuZGVsYXkgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gZGVsYXlGdW5jdGlvblxuICAgICAgICAgIDogZGVsYXlDb25zdGFudCkoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZGVsYXk7XG59XG4iLCJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZVwiO1xuXG5mdW5jdGlvbiBkdXJhdGlvbkZ1bmN0aW9uKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5kdXJhdGlvbiA9ICt2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkdXJhdGlvbkNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPSArdmFsdWUsIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZHVyYXRpb24gPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gZHVyYXRpb25GdW5jdGlvblxuICAgICAgICAgIDogZHVyYXRpb25Db25zdGFudCkoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZHVyYXRpb247XG59XG4iLCJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZVwiO1xuXG5mdW5jdGlvbiBlYXNlQ29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5lYXNlID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaChlYXNlQ29uc3RhbnQoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZWFzZTtcbn1cbiIsImltcG9ydCB7bWF0Y2hlcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICBpZiAodHlwZW9mIG1hdGNoICE9PSBcImZ1bmN0aW9uXCIpIG1hdGNoID0gbWF0Y2hlcihtYXRjaCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IFtdLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIG1hdGNoLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSB7XG4gICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cywgdGhpcy5fbmFtZSwgdGhpcy5faWQpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB0cmFuc2l0aW9uX2F0dHIgZnJvbSBcIi4vYXR0clwiO1xuaW1wb3J0IHRyYW5zaXRpb25fYXR0clR3ZWVuIGZyb20gXCIuL2F0dHJUd2VlblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fZGVsYXkgZnJvbSBcIi4vZGVsYXlcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2R1cmF0aW9uIGZyb20gXCIuL2R1cmF0aW9uXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lYXNlIGZyb20gXCIuL2Vhc2VcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXJcIjtcbmltcG9ydCB0cmFuc2l0aW9uX21lcmdlIGZyb20gXCIuL21lcmdlXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9vbiBmcm9tIFwiLi9vblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZVwiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdFwiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0QWxsIGZyb20gXCIuL3NlbGVjdEFsbFwiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3N0eWxlVHdlZW4gZnJvbSBcIi4vc3R5bGVUd2VlblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fdGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb25cIjtcbmltcG9ydCB0cmFuc2l0aW9uX3R3ZWVuIGZyb20gXCIuL3R3ZWVuXCI7XG5cbnZhciBpZCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2l0aW9uKGdyb3VwcywgcGFyZW50cywgbmFtZSwgaWQpIHtcbiAgdGhpcy5fZ3JvdXBzID0gZ3JvdXBzO1xuICB0aGlzLl9wYXJlbnRzID0gcGFyZW50cztcbiAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIHRoaXMuX2lkID0gaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb24obmFtZSkge1xuICByZXR1cm4gc2VsZWN0aW9uKCkudHJhbnNpdGlvbihuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0lkKCkge1xuICByZXR1cm4gKytpZDtcbn1cblxudmFyIHNlbGVjdGlvbl9wcm90b3R5cGUgPSBzZWxlY3Rpb24ucHJvdG90eXBlO1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZSA9IHRyYW5zaXRpb24ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVHJhbnNpdGlvbixcbiAgc2VsZWN0OiB0cmFuc2l0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiB0cmFuc2l0aW9uX3NlbGVjdEFsbCxcbiAgZmlsdGVyOiB0cmFuc2l0aW9uX2ZpbHRlcixcbiAgbWVyZ2U6IHRyYW5zaXRpb25fbWVyZ2UsXG4gIHNlbGVjdGlvbjogdHJhbnNpdGlvbl9zZWxlY3Rpb24sXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25fdHJhbnNpdGlvbixcbiAgY2FsbDogc2VsZWN0aW9uX3Byb3RvdHlwZS5jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX3Byb3RvdHlwZS5ub2RlcyxcbiAgbm9kZTogc2VsZWN0aW9uX3Byb3RvdHlwZS5ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fcHJvdG90eXBlLmVtcHR5LFxuICBlYWNoOiBzZWxlY3Rpb25fcHJvdG90eXBlLmVhY2gsXG4gIG9uOiB0cmFuc2l0aW9uX29uLFxuICBhdHRyOiB0cmFuc2l0aW9uX2F0dHIsXG4gIGF0dHJUd2VlbjogdHJhbnNpdGlvbl9hdHRyVHdlZW4sXG4gIHN0eWxlOiB0cmFuc2l0aW9uX3N0eWxlLFxuICBzdHlsZVR3ZWVuOiB0cmFuc2l0aW9uX3N0eWxlVHdlZW4sXG4gIHRleHQ6IHRyYW5zaXRpb25fdGV4dCxcbiAgcmVtb3ZlOiB0cmFuc2l0aW9uX3JlbW92ZSxcbiAgdHdlZW46IHRyYW5zaXRpb25fdHdlZW4sXG4gIGRlbGF5OiB0cmFuc2l0aW9uX2RlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbl9kdXJhdGlvbixcbiAgZWFzZTogdHJhbnNpdGlvbl9lYXNlXG59O1xuIiwiaW1wb3J0IHtjb2xvcn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQge2ludGVycG9sYXRlTnVtYmVyLCBpbnRlcnBvbGF0ZVJnYiwgaW50ZXJwb2xhdGVTdHJpbmd9IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBjO1xuICByZXR1cm4gKHR5cGVvZiBiID09PSBcIm51bWJlclwiID8gaW50ZXJwb2xhdGVOdW1iZXJcbiAgICAgIDogYiBpbnN0YW5jZW9mIGNvbG9yID8gaW50ZXJwb2xhdGVSZ2JcbiAgICAgIDogKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIGludGVycG9sYXRlUmdiKVxuICAgICAgOiBpbnRlcnBvbGF0ZVN0cmluZykoYSwgYik7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgaWYgKHRyYW5zaXRpb24uX2lkICE9PSB0aGlzLl9pZCkgdGhyb3cgbmV3IEVycm9yO1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSB0cmFuc2l0aW9uLl9ncm91cHMsIG0wID0gZ3JvdXBzMC5sZW5ndGgsIG0xID0gZ3JvdXBzMS5sZW5ndGgsIG0gPSBNYXRoLm1pbihtMCwgbTEpLCBtZXJnZXMgPSBuZXcgQXJyYXkobTApLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwMCA9IGdyb3VwczBbal0sIGdyb3VwMSA9IGdyb3VwczFbal0sIG4gPSBncm91cDAubGVuZ3RoLCBtZXJnZSA9IG1lcmdlc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXAwW2ldIHx8IGdyb3VwMVtpXSkge1xuICAgICAgICBtZXJnZVtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IGogPCBtMDsgKytqKSB7XG4gICAgbWVyZ2VzW2pdID0gZ3JvdXBzMFtqXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihtZXJnZXMsIHRoaXMuX3BhcmVudHMsIHRoaXMuX25hbWUsIHRoaXMuX2lkKTtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXQsIGluaXR9IGZyb20gXCIuL3NjaGVkdWxlXCI7XG5cbmZ1bmN0aW9uIHN0YXJ0KG5hbWUpIHtcbiAgcmV0dXJuIChuYW1lICsgXCJcIikudHJpbSgpLnNwbGl0KC9efFxccysvKS5ldmVyeShmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIHJldHVybiAhdCB8fCB0ID09PSBcInN0YXJ0XCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbkZ1bmN0aW9uKGlkLCBuYW1lLCBsaXN0ZW5lcikge1xuICB2YXIgb24wLCBvbjEsIHNpdCA9IHN0YXJ0KG5hbWUpID8gaW5pdCA6IHNldDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNpdCh0aGlzLCBpZCksXG4gICAgICAgIG9uID0gc2NoZWR1bGUub247XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKG9uICE9PSBvbjApIChvbjEgPSAob24wID0gb24pLmNvcHkoKSkub24obmFtZSwgbGlzdGVuZXIpO1xuXG4gICAgc2NoZWR1bGUub24gPSBvbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGxpc3RlbmVyKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMlxuICAgICAgPyBnZXQodGhpcy5ub2RlKCksIGlkKS5vbi5vbihuYW1lKVxuICAgICAgOiB0aGlzLmVhY2gob25GdW5jdGlvbihpZCwgbmFtZSwgbGlzdGVuZXIpKTtcbn1cbiIsImZ1bmN0aW9uIHJlbW92ZUZ1bmN0aW9uKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5fX3RyYW5zaXRpb24pIGlmICgraSAhPT0gaWQpIHJldHVybjtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vbihcImVuZC5yZW1vdmVcIiwgcmVtb3ZlRnVuY3Rpb24odGhpcy5faWQpKTtcbn1cbiIsImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCJkMy1kaXNwYXRjaFwiO1xuaW1wb3J0IHt0aW1lciwgdGltZW91dH0gZnJvbSBcImQzLXRpbWVyXCI7XG5cbnZhciBlbXB0eU9uID0gZGlzcGF0Y2goXCJzdGFydFwiLCBcImVuZFwiLCBcImludGVycnVwdFwiKTtcbnZhciBlbXB0eVR3ZWVuID0gW107XG5cbmV4cG9ydCB2YXIgQ1JFQVRFRCA9IDA7XG5leHBvcnQgdmFyIFNDSEVEVUxFRCA9IDE7XG5leHBvcnQgdmFyIFNUQVJUSU5HID0gMjtcbmV4cG9ydCB2YXIgU1RBUlRFRCA9IDM7XG5leHBvcnQgdmFyIFJVTk5JTkcgPSA0O1xuZXhwb3J0IHZhciBFTkRJTkcgPSA1O1xuZXhwb3J0IHZhciBFTkRFRCA9IDY7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUsIGlkLCBpbmRleCwgZ3JvdXAsIHRpbWluZykge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb247XG4gIGlmICghc2NoZWR1bGVzKSBub2RlLl9fdHJhbnNpdGlvbiA9IHt9O1xuICBlbHNlIGlmIChpZCBpbiBzY2hlZHVsZXMpIHJldHVybjtcbiAgY3JlYXRlKG5vZGUsIGlkLCB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpbmRleDogaW5kZXgsIC8vIEZvciBjb250ZXh0IGR1cmluZyBjYWxsYmFjay5cbiAgICBncm91cDogZ3JvdXAsIC8vIEZvciBjb250ZXh0IGR1cmluZyBjYWxsYmFjay5cbiAgICBvbjogZW1wdHlPbixcbiAgICB0d2VlbjogZW1wdHlUd2VlbixcbiAgICB0aW1lOiB0aW1pbmcudGltZSxcbiAgICBkZWxheTogdGltaW5nLmRlbGF5LFxuICAgIGR1cmF0aW9uOiB0aW1pbmcuZHVyYXRpb24sXG4gICAgZWFzZTogdGltaW5nLmVhc2UsXG4gICAgdGltZXI6IG51bGwsXG4gICAgc3RhdGU6IENSRUFURURcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IGdldChub2RlLCBpZCk7XG4gIGlmIChzY2hlZHVsZS5zdGF0ZSA+IENSRUFURUQpIHRocm93IG5ldyBFcnJvcihcInRvbyBsYXRlOyBhbHJlYWR5IHNjaGVkdWxlZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IGdldChub2RlLCBpZCk7XG4gIGlmIChzY2hlZHVsZS5zdGF0ZSA+IFNUQVJUSU5HKSB0aHJvdyBuZXcgRXJyb3IoXCJ0b28gbGF0ZTsgYWxyZWFkeSBzdGFydGVkXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gbm9kZS5fX3RyYW5zaXRpb247XG4gIGlmICghc2NoZWR1bGUgfHwgIShzY2hlZHVsZSA9IHNjaGVkdWxlW2lkXSkpIHRocm93IG5ldyBFcnJvcihcInRyYW5zaXRpb24gbm90IGZvdW5kXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShub2RlLCBpZCwgc2VsZikge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb24sXG4gICAgICB0d2VlbjtcblxuICAvLyBJbml0aWFsaXplIHRoZSBzZWxmIHRpbWVyIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgY3JlYXRlZC5cbiAgLy8gTm90ZSB0aGUgYWN0dWFsIGRlbGF5IGlzIG5vdCBrbm93biB1bnRpbCB0aGUgZmlyc3QgY2FsbGJhY2shXG4gIHNjaGVkdWxlc1tpZF0gPSBzZWxmO1xuICBzZWxmLnRpbWVyID0gdGltZXIoc2NoZWR1bGUsIDAsIHNlbGYudGltZSk7XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGUoZWxhcHNlZCkge1xuICAgIHNlbGYuc3RhdGUgPSBTQ0hFRFVMRUQ7XG4gICAgc2VsZi50aW1lci5yZXN0YXJ0KHN0YXJ0LCBzZWxmLmRlbGF5LCBzZWxmLnRpbWUpO1xuXG4gICAgLy8gSWYgdGhlIGVsYXBzZWQgZGVsYXkgaXMgbGVzcyB0aGFuIG91ciBmaXJzdCBzbGVlcCwgc3RhcnQgaW1tZWRpYXRlbHkuXG4gICAgaWYgKHNlbGYuZGVsYXkgPD0gZWxhcHNlZCkgc3RhcnQoZWxhcHNlZCAtIHNlbGYuZGVsYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoZWxhcHNlZCkge1xuICAgIHZhciBpLCBqLCBuLCBvO1xuXG4gICAgLy8gSWYgdGhlIHN0YXRlIGlzIG5vdCBTQ0hFRFVMRUQsIHRoZW4gd2UgcHJldmlvdXNseSBlcnJvcmVkIG9uIHN0YXJ0LlxuICAgIGlmIChzZWxmLnN0YXRlICE9PSBTQ0hFRFVMRUQpIHJldHVybiBzdG9wKCk7XG5cbiAgICBmb3IgKGkgaW4gc2NoZWR1bGVzKSB7XG4gICAgICBvID0gc2NoZWR1bGVzW2ldO1xuICAgICAgaWYgKG8ubmFtZSAhPT0gc2VsZi5uYW1lKSBjb250aW51ZTtcblxuICAgICAgLy8gV2hpbGUgdGhpcyBlbGVtZW50IGFscmVhZHkgaGFzIGEgc3RhcnRpbmcgdHJhbnNpdGlvbiBkdXJpbmcgdGhpcyBmcmFtZSxcbiAgICAgIC8vIGRlZmVyIHN0YXJ0aW5nIGFuIGludGVycnVwdGluZyB0cmFuc2l0aW9uIHVudGlsIHRoYXQgdHJhbnNpdGlvbiBoYXMgYVxuICAgICAgLy8gY2hhbmNlIHRvIHRpY2sgKGFuZCBwb3NzaWJseSBlbmQpOyBzZWUgZDMvZDMtdHJhbnNpdGlvbiM1NCFcbiAgICAgIGlmIChvLnN0YXRlID09PSBTVEFSVEVEKSByZXR1cm4gdGltZW91dChzdGFydCk7XG5cbiAgICAgIC8vIEludGVycnVwdCB0aGUgYWN0aXZlIHRyYW5zaXRpb24sIGlmIGFueS5cbiAgICAgIC8vIERpc3BhdGNoIHRoZSBpbnRlcnJ1cHQgZXZlbnQuXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gUlVOTklORykge1xuICAgICAgICBvLnN0YXRlID0gRU5ERUQ7XG4gICAgICAgIG8udGltZXIuc3RvcCgpO1xuICAgICAgICBvLm9uLmNhbGwoXCJpbnRlcnJ1cHRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgby5pbmRleCwgby5ncm91cCk7XG4gICAgICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gICAgICB9XG5cbiAgICAgIC8vIENhbmNlbCBhbnkgcHJlLWVtcHRlZCB0cmFuc2l0aW9ucy4gTm8gaW50ZXJydXB0IGV2ZW50IGlzIGRpc3BhdGNoZWRcbiAgICAgIC8vIGJlY2F1c2UgdGhlIGNhbmNlbGxlZCB0cmFuc2l0aW9ucyBuZXZlciBzdGFydGVkLiBOb3RlIHRoYXQgdGhpcyBhbHNvXG4gICAgICAvLyByZW1vdmVzIHRoaXMgdHJhbnNpdGlvbiBmcm9tIHRoZSBwZW5kaW5nIGxpc3QhXG4gICAgICBlbHNlIGlmICgraSA8IGlkKSB7XG4gICAgICAgIG8uc3RhdGUgPSBFTkRFRDtcbiAgICAgICAgby50aW1lci5zdG9wKCk7XG4gICAgICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVmZXIgdGhlIGZpcnN0IHRpY2sgdG8gZW5kIG9mIHRoZSBjdXJyZW50IGZyYW1lOyBzZWUgZDMvZDMjMTU3Ni5cbiAgICAvLyBOb3RlIHRoZSB0cmFuc2l0aW9uIG1heSBiZSBjYW5jZWxlZCBhZnRlciBzdGFydCBhbmQgYmVmb3JlIHRoZSBmaXJzdCB0aWNrIVxuICAgIC8vIE5vdGUgdGhpcyBtdXN0IGJlIHNjaGVkdWxlZCBiZWZvcmUgdGhlIHN0YXJ0IGV2ZW50OyBzZWUgZDMvZDMtdHJhbnNpdGlvbiMxNiFcbiAgICAvLyBBc3N1bWluZyB0aGlzIGlzIHN1Y2Nlc3NmdWwsIHN1YnNlcXVlbnQgY2FsbGJhY2tzIGdvIHN0cmFpZ2h0IHRvIHRpY2suXG4gICAgdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzZWxmLnN0YXRlID09PSBTVEFSVEVEKSB7XG4gICAgICAgIHNlbGYuc3RhdGUgPSBSVU5OSU5HO1xuICAgICAgICBzZWxmLnRpbWVyLnJlc3RhcnQodGljaywgc2VsZi5kZWxheSwgc2VsZi50aW1lKTtcbiAgICAgICAgdGljayhlbGFwc2VkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERpc3BhdGNoIHRoZSBzdGFydCBldmVudC5cbiAgICAvLyBOb3RlIHRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSB0aGUgdHdlZW4gYXJlIGluaXRpYWxpemVkLlxuICAgIHNlbGYuc3RhdGUgPSBTVEFSVElORztcbiAgICBzZWxmLm9uLmNhbGwoXCJzdGFydFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKTtcbiAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gU1RBUlRJTkcpIHJldHVybjsgLy8gaW50ZXJydXB0ZWRcbiAgICBzZWxmLnN0YXRlID0gU1RBUlRFRDtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHR3ZWVuLCBkZWxldGluZyBudWxsIHR3ZWVuLlxuICAgIHR3ZWVuID0gbmV3IEFycmF5KG4gPSBzZWxmLnR3ZWVuLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgaiA9IC0xOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobyA9IHNlbGYudHdlZW5baV0udmFsdWUuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKSkge1xuICAgICAgICB0d2VlblsrK2pdID0gbztcbiAgICAgIH1cbiAgICB9XG4gICAgdHdlZW4ubGVuZ3RoID0gaiArIDE7XG4gIH1cblxuICBmdW5jdGlvbiB0aWNrKGVsYXBzZWQpIHtcbiAgICB2YXIgdCA9IGVsYXBzZWQgPCBzZWxmLmR1cmF0aW9uID8gc2VsZi5lYXNlLmNhbGwobnVsbCwgZWxhcHNlZCAvIHNlbGYuZHVyYXRpb24pIDogKHNlbGYudGltZXIucmVzdGFydChzdG9wKSwgc2VsZi5zdGF0ZSA9IEVORElORywgMSksXG4gICAgICAgIGkgPSAtMSxcbiAgICAgICAgbiA9IHR3ZWVuLmxlbmd0aDtcblxuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICB0d2VlbltpXS5jYWxsKG51bGwsIHQpO1xuICAgIH1cblxuICAgIC8vIERpc3BhdGNoIHRoZSBlbmQgZXZlbnQuXG4gICAgaWYgKHNlbGYuc3RhdGUgPT09IEVORElORykge1xuICAgICAgc2VsZi5vbi5jYWxsKFwiZW5kXCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApO1xuICAgICAgc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgc2VsZi5zdGF0ZSA9IEVOREVEO1xuICAgIHNlbGYudGltZXIuc3RvcCgpO1xuICAgIGRlbGV0ZSBzY2hlZHVsZXNbaWRdO1xuICAgIGZvciAodmFyIGkgaW4gc2NoZWR1bGVzKSByZXR1cm47IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBkZWxldGUgbm9kZS5fX3RyYW5zaXRpb247XG4gIH1cbn1cbiIsImltcG9ydCB7c2VsZWN0b3J9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBzY2hlZHVsZSwge2dldH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIHZhciBuYW1lID0gdGhpcy5fbmFtZSxcbiAgICAgIGlkID0gdGhpcy5faWQ7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3Ioc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBzdWJub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChzdWJub2RlID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSkge1xuICAgICAgICBpZiAoXCJfX2RhdGFfX1wiIGluIG5vZGUpIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICBzdWJncm91cFtpXSA9IHN1Ym5vZGU7XG4gICAgICAgIHNjaGVkdWxlKHN1Ymdyb3VwW2ldLCBuYW1lLCBpZCwgaSwgc3ViZ3JvdXAsIGdldChub2RlLCBpZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsImltcG9ydCB7c2VsZWN0b3JBbGx9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBzY2hlZHVsZSwge2dldH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIHZhciBuYW1lID0gdGhpcy5fbmFtZSxcbiAgICAgIGlkID0gdGhpcy5faWQ7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBmb3IgKHZhciBjaGlsZHJlbiA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSwgY2hpbGQsIGluaGVyaXQgPSBnZXQobm9kZSwgaWQpLCBrID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgayA8IGw7ICsraykge1xuICAgICAgICAgIGlmIChjaGlsZCA9IGNoaWxkcmVuW2tdKSB7XG4gICAgICAgICAgICBzY2hlZHVsZShjaGlsZCwgbmFtZSwgaWQsIGssIGNoaWxkcmVuLCBpbmhlcml0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3ViZ3JvdXBzLnB1c2goY2hpbGRyZW4pO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxudmFyIFNlbGVjdGlvbiA9IHNlbGVjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9ncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiaW1wb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcyBhcyBpbnRlcnBvbGF0ZVRyYW5zZm9ybX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge3N0eWxlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuXCI7XG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSBcIi4vaW50ZXJwb2xhdGVcIjtcblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSwgaW50ZXJwb2xhdGUpIHtcbiAgdmFyIHZhbHVlMDAsXG4gICAgICB2YWx1ZTEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMCA9IHN0eWxlKHRoaXMsIG5hbWUpLFxuICAgICAgICB2YWx1ZTEgPSAodGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKSwgc3R5bGUodGhpcywgbmFtZSkpO1xuICAgIHJldHVybiB2YWx1ZTAgPT09IHZhbHVlMSA/IG51bGxcbiAgICAgICAgOiB2YWx1ZTAgPT09IHZhbHVlMDAgJiYgdmFsdWUxID09PSB2YWx1ZTEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUodmFsdWUwMCA9IHZhbHVlMCwgdmFsdWUxMCA9IHZhbHVlMSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlUmVtb3ZlRW5kKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uc3RhbnQobmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgdmFsdWUwMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTAgPSBzdHlsZSh0aGlzLCBuYW1lKTtcbiAgICByZXR1cm4gdmFsdWUwID09PSB2YWx1ZTEgPyBudWxsXG4gICAgICAgIDogdmFsdWUwID09PSB2YWx1ZTAwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUodmFsdWUwMCA9IHZhbHVlMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHZhbHVlMDAsXG4gICAgICB2YWx1ZTEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMCA9IHN0eWxlKHRoaXMsIG5hbWUpLFxuICAgICAgICB2YWx1ZTEgPSB2YWx1ZSh0aGlzKTtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHZhbHVlMSA9ICh0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpLCBzdHlsZSh0aGlzLCBuYW1lKSk7XG4gICAgcmV0dXJuIHZhbHVlMCA9PT0gdmFsdWUxID8gbnVsbFxuICAgICAgICA6IHZhbHVlMCA9PT0gdmFsdWUwMCAmJiB2YWx1ZTEgPT09IHZhbHVlMTAgPyBpbnRlcnBvbGF0ZTBcbiAgICAgICAgOiBpbnRlcnBvbGF0ZTAgPSBpbnRlcnBvbGF0ZSh2YWx1ZTAwID0gdmFsdWUwLCB2YWx1ZTEwID0gdmFsdWUxKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHZhciBpID0gKG5hbWUgKz0gXCJcIikgPT09IFwidHJhbnNmb3JtXCIgPyBpbnRlcnBvbGF0ZVRyYW5zZm9ybSA6IGludGVycG9sYXRlO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHRoaXNcbiAgICAgICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZVJlbW92ZShuYW1lLCBpKSlcbiAgICAgICAgICAub24oXCJlbmQuc3R5bGUuXCIgKyBuYW1lLCBzdHlsZVJlbW92ZUVuZChuYW1lKSlcbiAgICAgIDogdGhpcy5zdHlsZVR3ZWVuKG5hbWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBzdHlsZUZ1bmN0aW9uKG5hbWUsIGksIHR3ZWVuVmFsdWUodGhpcywgXCJzdHlsZS5cIiArIG5hbWUsIHZhbHVlKSlcbiAgICAgICAgICA6IHN0eWxlQ29uc3RhbnQobmFtZSwgaSwgdmFsdWUgKyBcIlwiKSwgcHJpb3JpdHkpO1xufVxuIiwiZnVuY3Rpb24gc3R5bGVUd2VlbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLCBpID0gdmFsdWUuYXBwbHkobm9kZSwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gaSAmJiBmdW5jdGlvbih0KSB7XG4gICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGkodCksIHByaW9yaXR5KTtcbiAgICB9O1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIga2V5ID0gXCJzdHlsZS5cIiArIChuYW1lICs9IFwiXCIpO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHJldHVybiAoa2V5ID0gdGhpcy50d2VlbihrZXkpKSAmJiBrZXkuX3ZhbHVlO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBudWxsKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgc3R5bGVUd2VlbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpO1xufVxuIiwiaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2VlblwiO1xuXG5mdW5jdGlvbiB0ZXh0Q29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGV4dEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUxID0gdmFsdWUodGhpcyk7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlMSA9PSBudWxsID8gXCJcIiA6IHZhbHVlMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMudHdlZW4oXCJ0ZXh0XCIsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IHRleHRGdW5jdGlvbih0d2VlblZhbHVlKHRoaXMsIFwidGV4dFwiLCB2YWx1ZSkpXG4gICAgICA6IHRleHRDb25zdGFudCh2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICsgXCJcIikpO1xufVxuIiwiaW1wb3J0IHtUcmFuc2l0aW9uLCBuZXdJZH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBzY2hlZHVsZSwge2dldH0gZnJvbSBcIi4vc2NoZWR1bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBuYW1lID0gdGhpcy5fbmFtZSxcbiAgICAgIGlkMCA9IHRoaXMuX2lkLFxuICAgICAgaWQxID0gbmV3SWQoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICB2YXIgaW5oZXJpdCA9IGdldChub2RlLCBpZDApO1xuICAgICAgICBzY2hlZHVsZShub2RlLCBuYW1lLCBpZDEsIGksIGdyb3VwLCB7XG4gICAgICAgICAgdGltZTogaW5oZXJpdC50aW1lICsgaW5oZXJpdC5kZWxheSArIGluaGVyaXQuZHVyYXRpb24sXG4gICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IGluaGVyaXQuZHVyYXRpb24sXG4gICAgICAgICAgZWFzZTogaW5oZXJpdC5lYXNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkMSk7XG59XG4iLCJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZVwiO1xuXG5mdW5jdGlvbiB0d2VlblJlbW92ZShpZCwgbmFtZSkge1xuICB2YXIgdHdlZW4wLCB0d2VlbjE7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICB0d2VlbiA9IHNjaGVkdWxlLnR3ZWVuO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCB0d2VlbiB3aXRoIHRoZSBwcmV2aW91cyBub2RlLFxuICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCB0d2VlbiBhbmQgd2XigJlyZSBkb25lIVxuICAgIC8vIE90aGVyd2lzZSwgY29weS1vbi13cml0ZS5cbiAgICBpZiAodHdlZW4gIT09IHR3ZWVuMCkge1xuICAgICAgdHdlZW4xID0gdHdlZW4wID0gdHdlZW47XG4gICAgICBmb3IgKHZhciBpID0gMCwgbiA9IHR3ZWVuMS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKHR3ZWVuMVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgdHdlZW4xID0gdHdlZW4xLnNsaWNlKCk7XG4gICAgICAgICAgdHdlZW4xLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNjaGVkdWxlLnR3ZWVuID0gdHdlZW4xO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0d2VlbkZ1bmN0aW9uKGlkLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgdHdlZW4wLCB0d2VlbjE7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgdHdlZW4gPSBzY2hlZHVsZS50d2VlbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgdHdlZW4gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgdHdlZW4gYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKHR3ZWVuICE9PSB0d2VlbjApIHtcbiAgICAgIHR3ZWVuMSA9ICh0d2VlbjAgPSB0d2Vlbikuc2xpY2UoKTtcbiAgICAgIGZvciAodmFyIHQgPSB7bmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlfSwgaSA9IDAsIG4gPSB0d2VlbjEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICh0d2VlbjFbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHR3ZWVuMVtpXSA9IHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpID09PSBuKSB0d2VlbjEucHVzaCh0KTtcbiAgICB9XG5cbiAgICBzY2hlZHVsZS50d2VlbiA9IHR3ZWVuMTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgbmFtZSArPSBcIlwiO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciB0d2VlbiA9IGdldCh0aGlzLm5vZGUoKSwgaWQpLnR3ZWVuO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gdHdlZW4ubGVuZ3RoLCB0OyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKHQgPSB0d2VlbltpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsID8gdHdlZW5SZW1vdmUgOiB0d2VlbkZ1bmN0aW9uKShpZCwgbmFtZSwgdmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR3ZWVuVmFsdWUodHJhbnNpdGlvbiwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIGlkID0gdHJhbnNpdGlvbi5faWQ7XG5cbiAgdHJhbnNpdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCk7XG4gICAgKHNjaGVkdWxlLnZhbHVlIHx8IChzY2hlZHVsZS52YWx1ZSA9IHt9KSlbbmFtZV0gPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIHJldHVybiBnZXQobm9kZSwgaWQpLnZhbHVlW25hbWVdO1xuICB9O1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gW3tcInllYXJcIjoyMDAxLFwiaW5jb21lXCI6MTk5MDIwMDAwMDAwMCxcInNwZW5kaW5nXCI6MTg2MzA0MDAwMDAwMCxcInN1cnBsdXNfZGVmaWNpdFwiOjEyNzE2NTAwMDAwMCxcImludGVyZXN0X3B1YmxpY19kZWJ0XCI6MzU5NTA4MDAwMDAwLFwic291cmNlX3VybFwiOlwiaHR0cHM6Ly93d3cuZmlzY2FsLnRyZWFzdXJ5Lmdvdi9mc3JlcG9ydHMvcnB0L210aFRyZWFzU3RtdC9tdHMwOTAxLnBkZlwiLFwiZ2RwXCI6MTA1OTYzMDAwMDAwMDAsXCJpbmNvbWVfZ2RwXCI6MC4xOSxcInNwZW5kaW5nX2dkcFwiOjAuMTgsXCJzdXJwbHVzX2RlZmljaXRfZ2RwXCI6MC4wMSxcImdkcF91cmxcIjpcImh0dHBzOi8vZnJlZC5zdGxvdWlzZmVkLm9yZy9zZXJpZXMvR0RQXCIsXCJkZWJ0XCI6NTgwNzQ2MDAwMDAwMCxcImRlYnRfdXJsXCI6XCJmdHA6Ly9mdHAucHVibGljZGVidC50cmVhcy5nb3Yvb3BkL29wZHMwOTIwMDEucGRmXCIsXCJpbnRfcmF0ZVwiOjAuMDY2MyxcImludF9yYXRlX3VybFwiOlwiaHR0cHM6Ly93d3cudHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmF0ZXMvcGQvYXZnLzIwMDEvMjAwMV8wOS5odG1cIn0se1wieWVhclwiOjIwMDgsXCJpbmNvbWVcIjoyNTIzODYwMDAwMDAwLFwic3BlbmRpbmdcIjoyOTc4NjYwMDAwMDAwLFwic3VycGx1c19kZWZpY2l0XCI6LTQ1NDgwNjAwMDAwMCxcImludGVyZXN0X3B1YmxpY19kZWJ0XCI6NDUxMTU0MDAwMDAwLFwic291cmNlX3VybFwiOlwiaHR0cHM6Ly93d3cuZmlzY2FsLnRyZWFzdXJ5Lmdvdi9mc3JlcG9ydHMvcnB0L210aFRyZWFzU3RtdC9tdHMwOTA4LnBkZlwiLFwiZ2RwXCI6MTQ4MzUyMDAwMDAwMDAsXCJpbmNvbWVfZ2RwXCI6MC4xNyxcInNwZW5kaW5nX2dkcFwiOjAuMixcInN1cnBsdXNfZGVmaWNpdF9nZHBcIjotMC4wMyxcImdkcF91cmxcIjpcImh0dHBzOi8vZnJlZC5zdGxvdWlzZmVkLm9yZy9zZXJpZXMvR0RQXCIsXCJkZWJ0XCI6MTAwMjQ3MDAwMDAwMDAsXCJkZWJ0X3VybFwiOlwiZnRwOi8vZnRwLnB1YmxpY2RlYnQudHJlYXMuZ292L29wZC9vcGRzMDkyMDA4LnBkZlwiLFwiaW50X3JhdGVcIjowLjA1MDEsXCJpbnRfcmF0ZV91cmxcIjpcImh0dHBzOi8vd3d3LnRyZWFzdXJ5ZGlyZWN0Lmdvdi9nb3Z0L3JhdGVzL3BkL2F2Zy8yMDA4LzIwMDhfMDkuaHRtXCJ9LHtcInllYXJcIjoyMDA5LFwiaW5jb21lXCI6MjEwNDYxMDAwMDAwMCxcInNwZW5kaW5nXCI6MzUyMTczMDAwMDAwMCxcInN1cnBsdXNfZGVmaWNpdFwiOi0xNDE3MTIwMDAwMDAwLFwiaW50ZXJlc3RfcHVibGljX2RlYnRcIjozODMzNjUwMDAwMDAsXCJzb3VyY2VfdXJsXCI6XCJodHRwczovL3d3dy5maXNjYWwudHJlYXN1cnkuZ292L2ZzcmVwb3J0cy9ycHQvbXRoVHJlYXNTdG10L210czA5MDkucGRmXCIsXCJnZHBcIjoxNDQyMDMwMDAwMDAwMCxcImluY29tZV9nZHBcIjowLjE1LFwic3BlbmRpbmdfZ2RwXCI6MC4yNCxcInN1cnBsdXNfZGVmaWNpdF9nZHBcIjotMC4xLFwiZ2RwX3VybFwiOlwiaHR0cHM6Ly9mcmVkLnN0bG91aXNmZWQub3JnL3Nlcmllcy9HRFBcIixcImRlYnRcIjoxMTkwOTgwMDAwMDAwMCxcImRlYnRfdXJsXCI6XCJodHRwczovL3RyZWFzdXJ5ZGlyZWN0Lmdvdi9nb3Z0L3JlcG9ydHMvcGQvbXNwZC8yMDA5L29wZHMwOTIwMDkucGRmXCIsXCJpbnRfcmF0ZVwiOjAuMDQxOSxcImludF9yYXRlX3VybFwiOlwiaHR0cHM6Ly93d3cudHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmF0ZXMvcGQvYXZnLzIwMDkvMjAwOV8wOS5odG1cIn0se1wieWVhclwiOjIwMTAsXCJpbmNvbWVcIjoyMTYxNzUwMDAwMDAwLFwic3BlbmRpbmdcIjozNDU1ODQwMDAwMDAwLFwic3VycGx1c19kZWZpY2l0XCI6LTEyOTQwOTAwMDAwMDAsXCJpbnRlcmVzdF9wdWJsaWNfZGVidFwiOjQxMzk1NTAwMDAwMCxcInNvdXJjZV91cmxcIjpcImh0dHBzOi8vd3d3LmZpc2NhbC50cmVhc3VyeS5nb3YvZnNyZXBvcnRzL3JwdC9tdGhUcmVhc1N0bXQvbXRzMDkxMC5wZGZcIixcImdkcFwiOjE1MDc5OTAwMDAwMDAwLFwiaW5jb21lX2dkcFwiOjAuMTQsXCJzcGVuZGluZ19nZHBcIjowLjIzLFwic3VycGx1c19kZWZpY2l0X2dkcFwiOi0wLjA5LFwiZ2RwX3VybFwiOlwiaHR0cHM6Ly9mcmVkLnN0bG91aXNmZWQub3JnL3Nlcmllcy9HRFBcIixcImRlYnRcIjoxMzU2MTYwMDAwMDAwMCxcImRlYnRfdXJsXCI6XCJodHRwczovL3RyZWFzdXJ5ZGlyZWN0Lmdvdi9nb3Z0L3JlcG9ydHMvcGQvbXNwZC8yMDEwL29wZHMwOTIwMTAucGRmXCIsXCJpbnRfcmF0ZVwiOjAuMDMzNSxcImludF9yYXRlX3VybFwiOlwiaHR0cHM6Ly93d3cudHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmF0ZXMvcGQvYXZnLzIwMTAvMjAxMF8wOS5odG1cIn0se1wieWVhclwiOjIwMTEsXCJpbmNvbWVcIjoyMzAyNTAwMDAwMDAwLFwic3BlbmRpbmdcIjozNjAxMTEwMDAwMDAwLFwic3VycGx1c19kZWZpY2l0XCI6LTEyOTg2MTAwMDAwMDAsXCJpbnRlcmVzdF9wdWJsaWNfZGVidFwiOjQ1NDAxNTAwMDAwMCxcInNvdXJjZV91cmxcIjpcImh0dHBzOi8vd3d3LmZpc2NhbC50cmVhc3VyeS5nb3YvZnNyZXBvcnRzL3JwdC9tdGhUcmVhc1N0bXQvbXRzMDkxMS5wZGZcIixcImdkcFwiOjE1NTkxOTAwMDAwMDAwLFwiaW5jb21lX2dkcFwiOjAuMTUsXCJzcGVuZGluZ19nZHBcIjowLjIzLFwic3VycGx1c19kZWZpY2l0X2dkcFwiOi0wLjA4LFwiZ2RwX3VybFwiOlwiaHR0cHM6Ly9mcmVkLnN0bG91aXNmZWQub3JnL3Nlcmllcy9HRFBcIixcImRlYnRcIjoxNDc5MDMwMDAwMDAwMCxcImRlYnRfdXJsXCI6XCJodHRwczovL3RyZWFzdXJ5ZGlyZWN0Lmdvdi9nb3Z0L3JlcG9ydHMvcGQvbXNwZC8yMDExL29wZHMwOTIwMTEucGRmXCIsXCJpbnRfcmF0ZVwiOjAuMDMwNSxcImludF9yYXRlX3VybFwiOlwiaHR0cHM6Ly93d3cudHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmF0ZXMvcGQvYXZnLzIwMTEvMjAxMV8wOS5odG1cIn0se1wieWVhclwiOjIwMTIsXCJpbmNvbWVcIjoyNDQ5MDkwMDAwMDAwLFwic3BlbmRpbmdcIjozNTM4NDUwMDAwMDAwLFwic3VycGx1c19kZWZpY2l0XCI6LTEwODkzNTAwMDAwMDAsXCJpbnRlcmVzdF9wdWJsaWNfZGVidFwiOjM1OTI0MTAwMDAwMCxcInNvdXJjZV91cmxcIjpcImh0dHBzOi8vd3d3LmZpc2NhbC50cmVhc3VyeS5nb3YvZnNyZXBvcnRzL3JwdC9tdGhUcmVhc1N0bXQvbXRzMDkxMi5wZGZcIixcImdkcFwiOjE2MjU3MjAwMDAwMDAwLFwiaW5jb21lX2dkcFwiOjAuMTUsXCJzcGVuZGluZ19nZHBcIjowLjIyLFwic3VycGx1c19kZWZpY2l0X2dkcFwiOi0wLjA3LFwiZ2RwX3VybFwiOlwiaHR0cHM6Ly9mcmVkLnN0bG91aXNmZWQub3JnL3Nlcmllcy9HRFBcIixcImRlYnRcIjoxNjA2NjIwMDAwMDAwMCxcImRlYnRfdXJsXCI6XCJodHRwczovL3RyZWFzdXJ5ZGlyZWN0Lmdvdi9nb3Z0L3JlcG9ydHMvcGQvbXNwZC8yMDEyL29wZHMwOTIwMTIucGRmXCIsXCJpbnRfcmF0ZVwiOjAuMDI4OSxcImludF9yYXRlX3VybFwiOlwiaHR0cHM6Ly93d3cudHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmF0ZXMvcGQvYXZnLzIwMTIvMjAxMl8wOS5odG1cIn0se1wieWVhclwiOjIwMTMsXCJpbmNvbWVcIjoyNzczOTgwMDAwMDAwLFwic3BlbmRpbmdcIjozNDU0MjUwMDAwMDAwLFwic3VycGx1c19kZWZpY2l0XCI6LTY4MDI3NjAwMDAwMCxcImludGVyZXN0X3B1YmxpY19kZWJ0XCI6NDE1NjcwMDAwMDAwLFwic291cmNlX3VybFwiOlwiaHR0cHM6Ly93d3cuZmlzY2FsLnRyZWFzdXJ5Lmdvdi9mc3JlcG9ydHMvcnB0L210aFRyZWFzU3RtdC9tdHMwOTEzLnBkZlwiLFwiZ2RwXCI6MTY4NDg3MDAwMDAwMDAsXCJpbmNvbWVfZ2RwXCI6MC4xNixcInNwZW5kaW5nX2dkcFwiOjAuMjEsXCJzdXJwbHVzX2RlZmljaXRfZ2RwXCI6LTAuMDQsXCJnZHBfdXJsXCI6XCJodHRwczovL2ZyZWQuc3Rsb3Vpc2ZlZC5vcmcvc2VyaWVzL0dEUFwiLFwiZGVidFwiOjE2NzM4MjAwMDAwMDAwLFwiZGVidF91cmxcIjpcImh0dHBzOi8vdHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmVwb3J0cy9wZC9tc3BkLzIwMTMvb3BkczA5MjAxMy5wZGZcIixcImludF9yYXRlXCI6MC4wMjU5LFwiaW50X3JhdGVfdXJsXCI6XCJodHRwczovL3d3dy50cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yYXRlcy9wZC9hdmcvMjAxMy8yMDEzXzA5Lmh0bVwifSx7XCJ5ZWFyXCI6MjAxNCxcImluY29tZVwiOjMwMjA4NTAwMDAwMDAsXCJzcGVuZGluZ1wiOjM1MDQyMDAwMDAwMDAsXCJzdXJwbHVzX2RlZmljaXRcIjotNDgzMzUwMDAwMDAwLFwiaW50ZXJlc3RfcHVibGljX2RlYnRcIjo0Mjk1NjgwMDAwMDAsXCJzb3VyY2VfdXJsXCI6XCJodHRwczovL3d3dy5maXNjYWwudHJlYXN1cnkuZ292L2ZzcmVwb3J0cy9ycHQvbXRoVHJlYXNTdG10L210czA5MTQucGRmXCIsXCJnZHBcIjoxNzcxOTgwMDAwMDAwMCxcImluY29tZV9nZHBcIjowLjE3LFwic3BlbmRpbmdfZ2RwXCI6MC4yLFwic3VycGx1c19kZWZpY2l0X2dkcFwiOi0wLjAzLFwiZ2RwX3VybFwiOlwiaHR0cHM6Ly9mcmVkLnN0bG91aXNmZWQub3JnL3Nlcmllcy9HRFBcIixcImRlYnRcIjoxNzgyNDEwMDAwMDAwMCxcImRlYnRfdXJsXCI6XCJodHRwczovL3RyZWFzdXJ5ZGlyZWN0Lmdvdi9nb3Z0L3JlcG9ydHMvcGQvbXNwZC8yMDE0L29wZHMwOTIwMTQucGRmXCIsXCJpbnRfcmF0ZVwiOjAuMDI0MyxcImludF9yYXRlX3VybFwiOlwiaHR0cHM6Ly93d3cudHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmF0ZXMvcGQvYXZnLzIwMTQvMjAxNF8wOS5odG1cIn0se1wieWVhclwiOjIwMTUsXCJpbmNvbWVcIjozMjQ4NzIwMDAwMDAwLFwic3BlbmRpbmdcIjozNzAyOTgwMDAwMDAwLFwic3VycGx1c19kZWZpY2l0XCI6LTQ1NDUxMTAwMDAwMCxcImludGVyZXN0X3B1YmxpY19kZWJ0XCI6NDAyMTg0MDAwMDAwLFwic291cmNlX3VybFwiOlwiaHR0cHM6Ly93d3cuZmlzY2FsLnRyZWFzdXJ5Lmdvdi9mc3JlcG9ydHMvcnB0L210aFRyZWFzU3RtdC9tdHMwOTE1LnBkZlwiLFwiZ2RwXCI6MTgzMzExMDAwMDAwMDAsXCJpbmNvbWVfZ2RwXCI6MC4xOCxcInNwZW5kaW5nX2dkcFwiOjAuMixcInN1cnBsdXNfZGVmaWNpdF9nZHBcIjotMC4wMixcImdkcF91cmxcIjpcImh0dHBzOi8vZnJlZC5zdGxvdWlzZmVkLm9yZy9zZXJpZXMvR0RQXCIsXCJkZWJ0XCI6MTgxNTA2MDAwMDAwMDAsXCJkZWJ0X3VybFwiOlwiaHR0cHM6Ly90cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yZXBvcnRzL3BkL21zcGQvMjAxNS9vcGRzMDkyMDE1LnBkZlwiLFwiaW50X3JhdGVcIjowLjAyNCxcImludF9yYXRlX3VybFwiOlwiaHR0cHM6Ly93d3cudHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmF0ZXMvcGQvYXZnLzIwMTUvMjAxNV8wOS5odG1cIn0se1wieWVhclwiOjIwMTYsXCJpbmNvbWVcIjozMjY2NjkwMDAwMDAwLFwic3BlbmRpbmdcIjozODU0MTAwMDAwMDAwLFwic3VycGx1c19kZWZpY2l0XCI6LTU4NzQxMjAwMDAwMCxcImludGVyZXN0X3B1YmxpY19kZWJ0XCI6NDI5OTYzMDAwMDAwLFwic291cmNlX3VybFwiOlwiaHR0cHM6Ly93d3cuZmlzY2FsLnRyZWFzdXJ5Lmdvdi9mc3JlcG9ydHMvcnB0L210aFRyZWFzU3RtdC9tdHMwOTE2LnBkZlwiLFwiZ2RwXCI6MTg3OTk2MDAwMDAwMDAsXCJpbmNvbWVfZ2RwXCI6MC4xNyxcInNwZW5kaW5nX2dkcFwiOjAuMjEsXCJzdXJwbHVzX2RlZmljaXRfZ2RwXCI6LTAuMDMsXCJnZHBfdXJsXCI6XCJodHRwczovL2ZyZWQuc3Rsb3Vpc2ZlZC5vcmcvc2VyaWVzL0dEUFwiLFwiZGVidFwiOjE5NTczNDAwMDAwMDAwLFwiZGVidF91cmxcIjpcImh0dHBzOi8vdHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmVwb3J0cy9wZC9tc3BkLzIwMTYvb3BkczA5MjAxNi5wZGZcIixcImludF9yYXRlXCI6MC4wMjM1LFwiaW50X3JhdGVfdXJsXCI6XCJodHRwczovL3d3dy50cmVhc3VyeWRpcmVjdC5nb3YvZ292dC9yYXRlcy9wZC9hdmcvMjAxNi8yMDE2XzA5Lmh0bVwifSx7XCJ5ZWFyXCI6MjAxNyxcImluY29tZVwiOjMzMTQ4OTAwMDAwMDAsXCJzcGVuZGluZ1wiOjM5ODA2MTAwMDAwMDAsXCJzdXJwbHVzX2RlZmljaXRcIjotNjY1NzEyMDAwMDAwLFwiaW50ZXJlc3RfcHVibGljX2RlYnRcIjo0NTY5NTUwMDAwMDAsXCJzb3VyY2VfdXJsXCI6XCJodHRwczovL3d3dy5maXNjYWwudHJlYXN1cnkuZ292L2ZzcmVwb3J0cy9ycHQvbXRoVHJlYXNTdG10L210czA5MTcucGRmXCIsXCJnZHBcIjoxOTU4ODEwMDAwMDAwMCxcImluY29tZV9nZHBcIjowLjE3LFwic3BlbmRpbmdfZ2RwXCI6MC4yLFwic3VycGx1c19kZWZpY2l0X2dkcFwiOi0wLjAzLFwiZ2RwX3VybFwiOlwiaHR0cHM6Ly9mcmVkLnN0bG91aXNmZWQub3JnL3Nlcmllcy9HRFBcIixcImRlYnRcIjoyMDI0NDkwMDAwMDAwMCxcImRlYnRfdXJsXCI6XCJodHRwczovL3RyZWFzdXJ5ZGlyZWN0Lmdvdi9nb3Z0L3JlcG9ydHMvcGQvbXNwZC8yMDE3L29wZHMwOTIwMTcucGRmXCIsXCJpbnRfcmF0ZVwiOjAuMDIyMyxcImludF9yYXRlX3VybFwiOlwiaHR0cHM6Ly93d3cudHJlYXN1cnlkaXJlY3QuZ292L2dvdnQvcmF0ZXMvcGQvYXZnLzIwMTcvMjAxN18wOS5odG1cIn0se1wieWVhclwiOm51bGx9XSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbG9ycy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbG9ycy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb2xvcnMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsIH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuXHJcbmNvbnN0IGQzID0geyBzZWxlY3QsIHNlbGVjdEFsbCB9LFxyXG4gICAgaW5mb0JveENsYXNzID0gJy5pbmZvLWJveCcsXHJcbiAgICB0cmlnZ2VyQ2xhc3MgPSAnLmluZm8tYm94LXRyaWdnZXInLFxyXG4gICAgdHJpZ2dlckNsYXNzQWN0aXZlID0gJ2luZm8tYm94LXRyaWdnZXItLWFjdGl2ZScsXHJcbiAgICBjbG9zZUJ1dHRvbkNsYXNzID0gJ2luZm8tYm94X19jbG9zZScsXHJcbiAgICBhY3RpdmVDbGFzcyA9ICdpbmZvLWJveC0tYWN0aXZlJztcclxuXHJcbmZ1bmN0aW9uIGFkZENsb3NlSWNvbigpIHtcclxuICAgIGNvbnN0IGJveCA9IGQzLnNlbGVjdCh0aGlzKSxcclxuICAgICAgICBjbG9zZUJ1dHRvbiA9IGJveC5hcHBlbmQoJ2J1dHRvbicpLFxyXG4gICAgICAgIGNsb3NlSWNvbiA9IGNsb3NlQnV0dG9uLmFwcGVuZCgnaScpO1xyXG5cclxuICAgIGNsb3NlQnV0dG9uLmxvd2VyKCk7XHJcblxyXG4gICAgY2xvc2VCdXR0b24uYXR0cignY2xhc3MnLCBjbG9zZUJ1dHRvbkNsYXNzKTtcclxuICAgIGNsb3NlSWNvbi5hdHRyKCdjbGFzcycsICdmYXMgZmEtdGltZXMnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VCb3godHJpZ2dlciwgYm94KSB7XHJcbiAgICBib3guY2xhc3NlZChhY3RpdmVDbGFzcywgbnVsbCk7XHJcbiAgICB0cmlnZ2VyLmNsYXNzZWQodHJpZ2dlckNsYXNzQWN0aXZlLCBudWxsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXJJbmZvQm94KCkge1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IGQzLnNlbGVjdCh0aGlzKSxcclxuICAgICAgICBpZCA9IHRyaWdnZXIuYXR0cignZGF0YS1ib3gtaWQnKSxcclxuICAgICAgICBib3ggPSBkMy5zZWxlY3QoJyMnICsgaWQpLFxyXG4gICAgICAgIGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBjb29yZHMgPSB0cmlnZ2VyLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBsZXQgeCA9IGNvb3Jkcy5sZWZ0LTEwO1xyXG5cclxuICAgIGlmICh4ID4gaW5uZXJXaWR0aCAtIDMwMCkge1xyXG4gICAgICAgIHggPSBpbm5lcldpZHRoIC0gMzAwXHJcbiAgICB9XHJcblxyXG4gICAgYm94LmNsYXNzZWQoYWN0aXZlQ2xhc3MsIHRydWUpO1xyXG4gICAgdHJpZ2dlci5jbGFzc2VkKHRyaWdnZXJDbGFzc0FjdGl2ZSwgdHJ1ZSk7XHJcblxyXG4gICAgYm94LmF0dHIoJ3N0eWxlJywgYHRvcDoke2Nvb3Jkcy50b3AtMTUrd2luZG93LnBhZ2VZT2Zmc2V0fXB4O2xlZnQ6JHt4fXB4YCk7XHJcblxyXG4gICAgYm94LnNlbGVjdCgnLicgKyBjbG9zZUJ1dHRvbkNsYXNzKVxyXG4gICAgICAgIC5vbignY2xpY2snLCBudWxsKVxyXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjbG9zZUJveCh0cmlnZ2VyLCBib3gpXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbihmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgZDMuc2VsZWN0QWxsKGluZm9Cb3hDbGFzcykuZWFjaChhZGRDbG9zZUljb24pOyAgICBcclxuXHJcbiAgICBkMy5zZWxlY3RBbGwodHJpZ2dlckNsYXNzKVxyXG4gICAgICAgIC5vbignY2xpY2snLCB0cmlnZ2VySW5mb0JveClcclxuXHJcbn0pKCk7IiwiaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuaW1wb3J0IHsgYXJjLCBwaWUgfSBmcm9tICdkMy1zaGFwZSc7XHJcbmltcG9ydCB7IGZyYWN0aW9uVG9QZXJjZW50LCB0cmFuc2xhdG9yIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2NvbG9ycy5zY3NzJztcclxuXHJcbmNvbnN0IGQzID0geyBzZWxlY3QsIGFyYywgcGllIH0sXHJcbiAgICByYWRpdXMgPSA0NSxcclxuICAgIGFyY0ZuID0gZDMuYXJjKCksXHJcbiAgICBwaWVGbiA9IGQzLnBpZSgpXHJcbiAgICAgICAgLnNvcnQobnVsbClcclxuICAgICAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQ7IH0pO1xyXG5cclxuZnVuY3Rpb24gc2V0QXJjUmFkaXVzKHJhZGl1cykge1xyXG4gICAgYXJjRm4ub3V0ZXJSYWRpdXMocmFkaXVzKVxyXG4gICAgICAgIC5pbm5lclJhZGl1cygocmFkaXVzKSAqIC44KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9udXQoY29udGFpbmVyLCBwZXJjZW50LCBkaWFtZXRlciwgZmlsbENvbG9yKSB7XHJcbiAgICBjb25zdCBkYXRhID0gW3BlcmNlbnQgKiAxMDAsIDEwMCAtIHBlcmNlbnQgKiAxMDBdLFxyXG4gICAgICAgIGcgPSBjb250YWluZXIuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0b3IoZGlhbWV0ZXIgLyAyLCBkaWFtZXRlciAvIDIpKTtcclxuXHJcbiAgICBzZXRBcmNSYWRpdXMoZGlhbWV0ZXIgLyAyKTtcclxuXHJcbiAgICB2YXIgcGllID0gZy5zZWxlY3RBbGwoXCIuYXJjXCIpXHJcbiAgICAgICAgLmRhdGEocGllRm4oZGF0YSkpXHJcbiAgICAgICAgLmVudGVyKClcclxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcmNcIilcclxuXHJcbiAgICB2YXIgZG9udXQgPSBwaWUuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAgIC5hdHRyKFwiZFwiLCBhcmNGbik7XHJcblxyXG4gICAgZG9udXQuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uIChkLCBpKSB7XHJcbiAgICAgICAgY29uc3Qgc2hhZGVkQ29sb3IgPSBmaWxsQ29sb3IgfHwgJyNkZDY2NjYnO1xyXG4gICAgICAgIHJldHVybiAoaSA9PT0gMCkgPyBzaGFkZWRDb2xvciA6ICcjZGRkZGRkJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgZy5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAgIC50ZXh0KGZyYWN0aW9uVG9QZXJjZW50KHBlcmNlbnQpKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgY29sb3JzLnRleHRDb2xvclBhcmFncmFwaClcclxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgZGlhbWV0ZXIvNClcclxuICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcclxuICAgICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAnYm9sZCcpXHJcbiAgICAgICAgLmF0dHIoJ3knLCBkaWFtZXRlciowLjA4KTtcclxufSIsImltcG9ydCBCaWdOdW1iZXJzIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9jc3YvbXRzX21zcGRfcm9kX2RlYnQuY3N2JztcclxuXHJcbmxldCBzb3VyY2U7XHJcblxyXG5CaWdOdW1iZXJzLmV2ZXJ5KHIgPT4ge1xyXG4gICAgaWYgKHIueWVhciA9PT0gMjAxNykge1xyXG4gICAgICAgIHNvdXJjZSA9IHI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3Rpb25PbmVEYXRhID0gc291cmNlOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dkcC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dkcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nZHAuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsLCBjcmVhdGUgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xyXG5pbXBvcnQgeyBsaW5lIH0gZnJvbSAnZDMtc2hhcGUnO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50Qm94LCB0cmFuc2xhdG9yLCBzaW1wbGlmeU51bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgZG90RmFjdG9yeSwgcmVjZWlwdHNDb25zdGFudHMsIGRvdFBvc2l0aW9uQWNjZXNzb3IgfSBmcm9tICcuLi9yZWNlaXB0cy11dGlscyc7XHJcbmltcG9ydCB7IGVzdGFibGlzaENvbnRhaW5lciB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgc2VjdGlvbk9uZURhdGEgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgeyBjcmVhdGVEb251dCB9IGZyb20gJy4uL2RvbnV0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9jb2xvcnMuc2Nzcyc7XHJcblxyXG5jb25zdCBkMyA9IHsgc2VsZWN0LCBzZWxlY3RBbGwsIGxpbmUsIGNyZWF0ZSB9O1xyXG5sZXQgc3ZnLCBkb3RDb250YWluZXI7XHJcblxyXG5mdW5jdGlvbiBhZGRMZWdlbmQoKSB7XHJcbiAgICBjb25zdCBkb3RCb3ggPSBkMy5zZWxlY3QoJ2cuJyArIHJlY2VpcHRzQ29uc3RhbnRzLmRvdENvbnRhaW5lckNsYXNzKSxcclxuICAgICAgICBsZWdlbmRCb3ggPSBzdmcuYXBwZW5kKCdnJykuY2xhc3NlZCgnZ2RwLWxlZ2VuZCByZXNldCcsIHRydWUpLFxyXG4gICAgICAgIGhlaWdodCA9IGdldEVsZW1lbnRCb3goZG90Qm94KS5oZWlnaHQsXHJcbiAgICAgICAgbWFyZ2luID0gKDEyMDAgLSBnZXRFbGVtZW50Qm94KGRvdEJveCkud2lkdGgpIC8gMixcclxuICAgICAgICBsaW5lID0gZDMubGluZSgpXHJcbiAgICAgICAgICAgIC54KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLng7IH0pXHJcbiAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnk7IH0pLFxyXG4gICAgICAgIGxpbmVEYXRhID0gW1xyXG4gICAgICAgICAgICB7IHg6IDg3LCB5OiAwIH0sXHJcbiAgICAgICAgICAgIHsgeDogODQsIHk6IDAgfSxcclxuICAgICAgICAgICAgeyB4OiA4NCwgeTogaGVpZ2h0IH0sXHJcbiAgICAgICAgICAgIHsgeDogODcsIHk6IGhlaWdodCB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBkb3RzUmVjdCA9IGdldEVsZW1lbnRCb3goZG90Q29udGFpbmVyKSxcclxuICAgICAgICB0ZXh0ID0gbGVnZW5kQm94LmFwcGVuZCgndGV4dCcpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKCdyZXNldCcsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgY29sb3JzLnRleHRDb2xvclBhcmFncmFwaClcclxuICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXHJcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMClcclxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTZweCcpO1xyXG5cclxuICAgIGxlZ2VuZEJveC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAgIC5jbGFzc2VkKCdyZXNldCcsIHRydWUpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBsaW5lKGxpbmVEYXRhKSlcclxuICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcclxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJyNhYWEnKVxyXG4gICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKTtcclxuXHJcbiAgICB0ZXh0LmFwcGVuZCgndHNwYW4nKVxyXG4gICAgICAgIC50ZXh0KCdUb3RhbCBHRFAnKVxyXG4gICAgICAgIC5zdHlsZSgnZm9udC13ZWlnaHQnLCAnNjAwJylcclxuICAgICAgICAuYXR0cigneCcsIDQwKVxyXG4gICAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpO1xyXG5cclxuICAgIHRleHQuYXBwZW5kKCd0c3BhbicpXHJcbiAgICAgICAgLnRleHQoc2ltcGxpZnlOdW1iZXIoc2VjdGlvbk9uZURhdGEuZ2RwKSlcclxuICAgICAgICAuYXR0cigneCcsIDQwKVxyXG4gICAgICAgIC5hdHRyKCdkeScsIDIwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0R2RwRG90cygpIHtcclxuICAgIGNvbnN0IGluY29tZUhlaWdodE9mZnNldCA9IDEwMCxcclxuICAgICAgICBnZHBEb3RDb3VudCA9IDE2MDAwLFxyXG4gICAgICAgIGdkcERvdENvbG9yID0gJ3JnYmEoMjAwLDIwMCwyMDAsMSknLFxyXG4gICAgICAgIGRvdFBvc2l0aW9uU3RhcnQgPSBkb3RQb3NpdGlvbkFjY2Vzc29yLmdldCgpLFxyXG4gICAgICAgIGZpcnN0Um93Q291bnQgPSByZWNlaXB0c0NvbnN0YW50cy5kb3RzUGVyUm93IC0gZG90UG9zaXRpb25TdGFydC5zdGFydEluZGV4LFxyXG4gICAgICAgIGZ1bGxSb3dzID0gTWF0aC5mbG9vcihnZHBEb3RDb3VudCAvIHJlY2VpcHRzQ29uc3RhbnRzLmRvdHNQZXJSb3cpLFxyXG4gICAgICAgIGxhc3RSb3dDb3VudCA9IGdkcERvdENvdW50IC0gZG90UG9zaXRpb25TdGFydC5zdGFydEluZGV4IC0gKGZ1bGxSb3dzICogcmVjZWlwdHNDb25zdGFudHMuZG90c1BlclJvdyksXHJcbiAgICAgICAgZ2RwQ29udGFpbmVyID0gZG90Q29udGFpbmVyLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKCdnZHAgcmVzZXQnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3NjYWxlKDEuMyknKSxcclxuICAgICAgICByb3dPbmUgPSBnZHBDb250YWluZXIuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdG9yKDAsIGluY29tZUhlaWdodE9mZnNldClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgbGV0IGkgPSAwLFxyXG4gICAgICAgIHIgPSAwLFxyXG4gICAgICAgIHJvd0NvdW50ID0gMSxcclxuICAgICAgICByb3dQb3NpdGlvbiA9IGRvdFBvc2l0aW9uU3RhcnQuc3RhcnRJbmRleCxcclxuICAgICAgICB4ID0gZG90UG9zaXRpb25TdGFydC54LFxyXG4gICAgICAgIHkgPSBkb3RQb3NpdGlvblN0YXJ0Lnk7XHJcblxyXG4gICAgLy8gZmlyc3Qgcm93XHJcblxyXG4gICAgZm9yIChpOyBpIDwgZmlyc3RSb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgZG90RmFjdG9yeShnZHBDb250YWluZXIsIHgsIHksIGdkcERvdENvbG9yKTtcclxuICAgICAgICB4ICs9IHJlY2VpcHRzQ29uc3RhbnRzLmRvdE9mZnNldC54O1xyXG5cclxuICAgICAgICByb3dQb3NpdGlvbiArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpcnN0IGZ1bGwgcm93XHJcblxyXG4gICAgeCA9IDI7XHJcblxyXG4gICAgZm9yIChyOyByIDwgcmVjZWlwdHNDb25zdGFudHMuZG90c1BlclJvdzsgcisrKSB7XHJcbiAgICAgICAgZG90RmFjdG9yeShyb3dPbmUsIHgsIC0xLCBnZHBEb3RDb2xvcik7XHJcbiAgICAgICAgeCArPSByZWNlaXB0c0NvbnN0YW50cy5kb3RPZmZzZXQueDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbG9uZSByb3dzXHJcblxyXG4gICAgZm9yIChyb3dDb3VudDsgcm93Q291bnQgPCAoZnVsbFJvd3MpOyByb3dDb3VudCsrKSB7XHJcbiAgICAgICAgcm93T25lLmNsb25lKHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2xhdG9yKDAsIChyb3dDb3VudCAqIHJlY2VpcHRzQ29uc3RhbnRzLmRvdE9mZnNldC55KSArIGluY29tZUhlaWdodE9mZnNldCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmluYWwgcm93XHJcblxyXG4gICAgaSA9IDA7XHJcbiAgICB4ID0gMjtcclxuXHJcbiAgICBjb25zdCBsYXN0Um93ID0gZ2RwQ29udGFpbmVyLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLmNsYXNzZWQoJ2xhc3Qtcm93JywgdHJ1ZSlcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcigwLCAocm93Q291bnQgKiByZWNlaXB0c0NvbnN0YW50cy5kb3RPZmZzZXQueSkgKyBpbmNvbWVIZWlnaHRPZmZzZXQpKTtcclxuXHJcbiAgICBmb3IgKGk7IGkgPCBsYXN0Um93Q291bnQ7IGkrKykge1xyXG4gICAgICAgIGRvdEZhY3RvcnkobGFzdFJvdywgeCwgLTEsIGdkcERvdENvbG9yKTtcclxuICAgICAgICB4ICs9IHJlY2VpcHRzQ29uc3RhbnRzLmRvdE9mZnNldC54O1xyXG4gICAgfVxyXG5cclxuICAgIGdkcENvbnRhaW5lci50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24oMTAwMClcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3NjYWxlKDEpJylcclxuICAgICAgICAuZWFzZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVGYWN0Qm94KCkge1xyXG4gICAgY29uc3QgZmFjdEJveCA9IGQzLnNlbGVjdCgnI2dkcC1mYWN0cycpXHJcbiAgICAgICAgLmNsYXNzZWQoJ291dCcsIG51bGwpXHJcbiAgICAgICAgLmNsYXNzZWQoJ3RlbXBvcmFyeS1oaWRlLS1zaG93JywgdHJ1ZSk7XHJcblxyXG4gICAgZDMuc2VsZWN0KCcjZ2RwLWZvb3Rub3RlJykuYXR0cignc3R5bGUnLCAnZGlzcGxheTpibG9jaycpO1xyXG5cclxuICAgIHN2Zy5hdHRyKCd3aWR0aCcsIDY3MCk7XHJcbiAgICBzdmcuYXR0cignaGVpZ2h0JywgMzAwKTtcclxuXHJcbiAgICBkMy5zZWxlY3QoJyN2aXonKVxyXG4gICAgICAgIC5hdHRyKCdzdHlsZScsICdmbG9hdDpsZWZ0O3dpZHRoOmF1dG8nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYW5pbWF0aW9uTmV4dCgpIHtcclxuICAgIGFkZExlZ2VuZCgpO1xyXG4gICAgZW5hYmxlRmFjdEJveCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB6b29tT3V0RG90cygpIHtcclxuICAgIGNvbnN0IHByZXZUcmFuc2Zvcm0gPSBkb3RDb250YWluZXIuYXR0cigndHJhbnNmb3JtJyksXHJcbiAgICAgICAgem9vbUR1cmF0aW9uID0gMjAwMDtcclxuXHJcbiAgICBkMy5zZWxlY3QoJy50b3RhbC1nb3YtcmV2ZW51ZScpLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbig1MDApXHJcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgIC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZWFzZSgpO1xyXG5cclxuICAgIGQzLnNlbGVjdCgnLmluY29tZS1kb3QtbGVnZW5kJykudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmR1cmF0aW9uKDUwMClcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXHJcbiAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lYXNlKCk7XHJcblxyXG4gICAgZG90Q29udGFpbmVyLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbih6b29tRHVyYXRpb24pXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0b3IoOTIsIDApICsgJyBzY2FsZSgwLjUpJylcclxuICAgICAgICAub24oJ2VuZCcsIGFuaW1hdGlvbk5leHQpXHJcbiAgICAgICAgLmVhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbnRlckRvbnV0KCkge1xyXG4gICAgY29uc3QgciA9IDEyMCxcclxuICAgICAgICBkb251dEdyb3VwID0gZG90Q29udGFpbmVyLmFwcGVuZCgnZycpO1xyXG5cclxuICAgIGxldCBkb251dENvbnRhaW5lcjtcclxuXHJcbiAgICBkb251dEdyb3VwLmFwcGVuZCgnY2lyY2xlJylcclxuICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwLjg1KVxyXG4gICAgICAgIC5hdHRyKCdyJywgcilcclxuICAgICAgICAuYXR0cignY3gnLCByKVxyXG4gICAgICAgIC5hdHRyKCdjeScsIHIpO1xyXG5cclxuICAgIGRvbnV0R3JvdXBcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3NjYWxlKDEuNSkgJyArIHRyYW5zbGF0b3IoNDAwLCAwKSlcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXHJcblxyXG4gICAgZG9udXRDb250YWluZXIgPSBkb251dEdyb3VwLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0b3IoMjAsIDIwKSk7XHJcblxyXG4gICAgY3JlYXRlRG9udXQoZG9udXRDb250YWluZXIsIC4xNzQsIDIwMCwgY29sb3JzLmluY29tZSk7XHJcblxyXG4gICAgZG9udXRHcm91cC50cmFuc2l0aW9uKClcclxuICAgICAgICAuZGVsYXkoMjUwMClcclxuICAgICAgICAuZHVyYXRpb24oMTUwMClcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDEpXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdzY2FsZSgxKSAnICsgdHJhbnNsYXRvcig5MDAsIDEwMCkpXHJcbiAgICAgICAgLmVhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHZHBEb3RzKCkge1xyXG4gICAgc3ZnID0gZXN0YWJsaXNoQ29udGFpbmVyKCk7XHJcblxyXG4gICAgc3ZnLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbigxMDAwKVxyXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCA0NTApXHJcblxyXG4gICAgZG90Q29udGFpbmVyID0gZDMuc2VsZWN0KCdnLicgKyByZWNlaXB0c0NvbnN0YW50cy5kb3RDb250YWluZXJDbGFzcylcclxuICAgIHpvb21PdXREb3RzKCk7XHJcbiAgICBzZXRHZHBEb3RzKCk7XHJcbiAgICBlbnRlckRvbnV0KCk7XHJcbn0iLCJpbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xyXG5pbXBvcnQgeyB0cmFuc2l0aW9uIH0gZnJvbSAnZDMtdHJhbnNpdGlvbic7XHJcbmltcG9ydCB7IGdldEVsZW1lbnRCb3gsIHRyYW5zbGF0b3IsIHNpbXBsaWZ5TnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBkb3RGYWN0b3J5LCByZWNlaXB0c0NvbnN0YW50cywgZG90UG9zaXRpb25BY2Nlc3NvciB9IGZyb20gJy4uL3JlY2VpcHRzLXV0aWxzJztcclxuaW1wb3J0IHsgZXN0YWJsaXNoQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBzZWN0aW9uT25lRGF0YSB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vY29sb3JzLnNjc3MnO1xyXG5pbXBvcnQgeyBpbml0R2RwRG90cyB9IGZyb20gJy4vZ2RwRG90cyc7XHJcbmltcG9ydCB7IHRyaWdnZXJJbmZvQm94IH0gZnJvbSAnLi4vLi4vaW5mb0JveCc7XHJcbmltcG9ydCB7IHJldmVhbEh3Y3RhIH0gZnJvbSAnLi4vcmV2ZWFsLWh3Y3RhJztcclxuXHJcbmNvbnN0IGQzID0geyBzZWxlY3QgfSxcclxuICAgIHhTdGFydCA9IHJlY2VpcHRzQ29uc3RhbnRzLnhTdGFydCxcclxuICAgIGRvdHNQZXJSb3cgPSByZWNlaXB0c0NvbnN0YW50cy5kb3RzUGVyUm93LFxyXG4gICAgZG90T2Zmc2V0ID0gcmVjZWlwdHNDb25zdGFudHMuZG90T2Zmc2V0O1xyXG5cclxubGV0IHN2ZyxcclxuICAgIGZhY3RCb3gsXHJcbiAgICBpbmNvbWVDb250YWluZXIsXHJcbiAgICBkb3RDb250YWluZXIsXHJcbiAgICBkb3RzV2lkdGg7XHJcblxyXG5mdW5jdGlvbiByZWFkeUluY29tZURvdHMoKSB7XHJcbiAgICBpbmNvbWVDb250YWluZXIgPSBkb3RDb250YWluZXIuYXBwZW5kKCdnJylcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXHJcbiAgICAgICAgLmNsYXNzZWQocmVjZWlwdHNDb25zdGFudHMuaW5jb21lQ29udGFpbmVyQ2xhc3MsIHRydWUpXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoLTEwMCwgLTUwKSwgc2NhbGUoMiknKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsXHJcbiAgICAgICAgdG9wID0gMzQwMCxcclxuICAgICAgICB4ID0geFN0YXJ0LFxyXG4gICAgICAgIHkgPSAyO1xyXG5cclxuICAgIGZvciAoaTsgaSA8IHRvcDsgaSsrKSB7XHJcbiAgICAgICAgZG90RmFjdG9yeShpbmNvbWVDb250YWluZXIsIHgsIHkpO1xyXG4gICAgICAgIHggKz0gZG90T2Zmc2V0Lng7XHJcblxyXG4gICAgICAgIGlmICgoaSArIDEpICUgZG90c1BlclJvdyA9PT0gMCkge1xyXG4gICAgICAgICAgICB5ICs9IGRvdE9mZnNldC55O1xyXG4gICAgICAgICAgICB4ID0geFN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb3RQb3NpdGlvbkFjY2Vzc29yLnNldChbeCwgeV0sIGkgJSBkb3RzUGVyUm93KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRIZWFkZXIoKSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gc3ZnLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgY29sb3JzLnRleHRDb2xvclBhcmFncmFwaClcclxuICAgICAgICAuYXR0cignY2xhc3MnLCAndG90YWwtZ292LXJldmVudWUnKVxyXG4gICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxyXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE4cHgnKVxyXG5cclxuICAgIHRleHQuYXBwZW5kKCd0c3BhbicpXHJcbiAgICAgICAgLnRleHQoJ1UuUy4gR292ZXJubWVudCBSZXZlbnVlJylcclxuICAgICAgICAuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgJzYwMCcpXHJcbiAgICAgICAgLmF0dHIoJ3knLCAyMClcclxuICAgICAgICAuYXR0cigneCcsIDYwMClcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAyMCknKVxyXG5cclxuICAgIHRleHQuYXBwZW5kKCd0c3BhbicpXHJcbiAgICAgICAgLnRleHQoc2ltcGxpZnlOdW1iZXIoc2VjdGlvbk9uZURhdGEuaW5jb21lKSlcclxuICAgICAgICAuYXR0cigneScsIDQwKVxyXG4gICAgICAgIC5hdHRyKCd4JywgNjAwKVxyXG5cclxuICAgIHRleHQudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmR1cmF0aW9uKDQwMClcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkTGVnZW5kKCkge1xyXG4gICAgY29uc3QgZyA9IGQzLnNlbGVjdCgnLmluY29tZS1kb3QtbGVnZW5kJyksXHJcbiAgICAgICAgZHVyYXRpb24gPSAyMDAwLFxyXG4gICAgICAgIHcgPSAxMjYsXHJcbiAgICAgICAgeE9mZnNldCA9IGRvdHNXaWR0aCAtIHcgKyAoKDEyMDAgLSBkb3RzV2lkdGgpIC8gMik7XHJcblxyXG4gICAgZy50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0b3IoeE9mZnNldCwgMzUpKTtcclxuXHJcbiAgICBnLnNlbGVjdCgnY2lyY2xlJylcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDEpXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcclxuICAgICAgICAuYXR0cigncicsIDMpXHJcbiAgICAgICAgLmF0dHIoJ2N4JywgMClcclxuICAgICAgICAuYXR0cignY3knLCAwKVxyXG4gICAgICAgIC5lYXNlKClcclxuXHJcbiAgICBnLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgICAgLnRleHQoJz0gMSBCaWxsaW9uIERvbGxhcnMnKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgY29sb3JzLnRleHRDb2xvclBhcmFncmFwaClcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXHJcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAxNilcclxuICAgICAgICAuYXR0cigneScsIDUpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCA3KVxyXG4gICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAuZGVsYXkoZHVyYXRpb24gKiAwLjcpXHJcbiAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uIC8gMilcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDEpXHJcbiAgICAgICAgLmVhc2UoKTtcclxuXHJcbiAgICBnLmFwcGVuZCgnaW1hZ2UnKVxyXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxNilcclxuICAgICAgICAuYXR0cignd2lkdGgnLCAyMClcclxuICAgICAgICAuYXR0cigneCcsIDEyMilcclxuICAgICAgICAuYXR0cigneScsIC0xNClcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApICAgICAgICBcclxuICAgICAgICAuYXR0cignZGF0YS1ib3gtaWQnLCAnYmlsbGlvbi1kb2xsYXJzJylcclxuICAgICAgICAuYXR0cigneGxpbms6aHJlZicsICcvYXNzZXRzL2NnL2ljb25zL2FuZWNkb3RlLnN2ZycpXHJcbiAgICAgICAgLmF0dHIoJ3N0eWxlJywgJ2N1cnNvcjpwb2ludGVyJylcclxuICAgICAgICAub24oJ2NsaWNrJywgdHJpZ2dlckluZm9Cb3gpXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kZWxheShkdXJhdGlvbiAqIDAuNylcclxuICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24gLyAyKVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAuZWFzZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREb3RDb250YWluZXIoKSB7XHJcbiAgICBsZXQgeE9mZnNldDtcclxuXHJcbiAgICBkb3RzV2lkdGggPSAoZG90c1BlclJvdyAqIGRvdE9mZnNldC54KSArIHhTdGFydDtcclxuICAgIHhPZmZzZXQgPSAoMTIwMCAtIGRvdHNXaWR0aCkgLyAyO1xyXG5cclxuICAgIGRvdENvbnRhaW5lciA9IHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAgIC5jbGFzc2VkKHJlY2VpcHRzQ29uc3RhbnRzLmRvdENvbnRhaW5lckNsYXNzLCB0cnVlKVxyXG4gICAgICAgIC5jbGFzc2VkKCdyZXNldCcsIHRydWUpXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zbGF0b3IoeE9mZnNldCwgcmVjZWlwdHNDb25zdGFudHMuaGVhZGluZ0hlaWdodCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VGV4dCgpIHtcclxuICAgIHN2Zy5hdHRyKCdoZWlnaHQnLCAxODApO1xyXG5cclxuICAgIGZhY3RCb3ggPSBkMy5zZWxlY3QoJyNpbmNvbWUtZmFjdHMnKVxyXG4gICAgICAgIC5jbGFzc2VkKCd0ZW1wb3JhcnktaGlkZS0tc2hvdycsIHRydWUpO1xyXG5cclxuICAgIGQzLnNlbGVjdCgnLmZvb3Rub3RlJykuY2xhc3NlZCgndGVtcG9yYXJ5LWhpZGUnLCBudWxsKVxyXG4gICAgICAgIC5hdHRyKCdzdHlsZScsICdjbGVhcjpib3RoJylcclxuXHJcbiAgICByZXZlYWxId2N0YSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0Q29udGludWVCdXR0b24oKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkMy5zZWxlY3QoJyN0b3VyLWNvbnRpbnVlJyk7XHJcblxyXG4gICAgYnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmYWN0Qm94LmNsYXNzZWQoJ3RlbXBvcmFyeS1oaWRlLS1zaG93JywgbnVsbCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmYWN0Qm94LnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDEwMDApXHJcblxyXG4gICAgICAgIGluaXRHZHBEb3RzKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVudGVySW5jb21lRG90cygpIHtcclxuICAgIGluY29tZUNvbnRhaW5lci50cmFuc2l0aW9uKClcclxuICAgICAgICAuZGVsYXkoMTAwMClcclxuICAgICAgICAuZHVyYXRpb24oNzAwKVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApLCBzY2FsZSgxKScpXHJcbiAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJ1aWxkSGVhZGVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZWFzZSgpO1xyXG5cclxuICAgIGJ1aWxkTGVnZW5kKCk7XHJcblxyXG4gICAgc2V0VGltZW91dChzaG93VGV4dCwgMjAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0SW5jb21lRG90cygpIHtcclxuICAgIHN2ZyA9IGVzdGFibGlzaENvbnRhaW5lcigpO1xyXG4gICAgaW5pdENvbnRpbnVlQnV0dG9uKCk7XHJcbiAgICBzZXREb3RDb250YWluZXIoKTtcclxuICAgIHJlYWR5SW5jb21lRG90cygpO1xyXG59IiwiaW1wb3J0IHsgc2VsZWN0LCBzZWxlY3RBbGwgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xyXG5pbXBvcnQgeyB0cmFuc2l0aW9uIH0gZnJvbSAnZDMtdHJhbnNpdGlvbic7XHJcbmltcG9ydCB7IGluaXRJbmNvbWVEb3RzLCBlbnRlckluY29tZURvdHMgfSBmcm9tICcuL2luY29tZURvdHMnO1xyXG5pbXBvcnQgeyBlc3RhYmxpc2hDb250YWluZXIsIHRyYW5zbGF0b3IsIHN0cmlwQnIgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCAnLi4vLi4vaW5mb0JveCc7XHJcbmltcG9ydCAnLi9nZHAuc2Nzcyc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vY29sb3JzLnNjc3MnO1xyXG5cclxuY29uc3QgZDMgPSB7IHNlbGVjdCwgc2VsZWN0QWxsIH0sXHJcbiAgICBzdmcgPSBlc3RhYmxpc2hDb250YWluZXIoKSxcclxuICAgIGxhcmdlRG90ID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLmNsYXNzZWQoJ2luY29tZS1kb3QtbGVnZW5kJywgdHJ1ZSkgICAgICAgIFxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2xhdG9yKDYwMCAtIDE4MiwgNDApKSxcclxuICAgIHJhZGl1cyA9IDc1O1xyXG5cclxuZnVuY3Rpb24gcGhhc2VUd28oKSB7XHJcbiAgICBsYXJnZURvdC5zZWxlY3RBbGwoJ3RleHQnKVxyXG4gICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24oMTAwMClcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXHJcbiAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lYXNlKCk7XHJcblxyXG4gICAgZW50ZXJJbmNvbWVEb3RzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRleHQoKSB7XHJcbiAgICBjb25zdCBleHBsYW5hdGlvbiA9IHRoaXMubGFyZ2VEb3QuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgICAuYXR0cigneScsIDU0KVxyXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMClcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcihyYWRpdXMgKiAyICsgMjAsIDApKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgY29sb3JzLnRleHRDb2xvclBhcmFncmFwaClcclxuXHJcbiAgICBleHBsYW5hdGlvbi5hcHBlbmQoJ3RzcGFuJylcclxuICAgICAgICAuYXR0cigneCcsIDApXHJcbiAgICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIDE4KVxyXG4gICAgICAgIC50ZXh0KCdJbiB0aGlzIGFuYWx5c2lzJylcclxuXHJcbiAgICBleHBsYW5hdGlvbi5hcHBlbmQoJ3RzcGFuJylcclxuICAgICAgICAuYXR0cigneCcsIDApXHJcbiAgICAgICAgLmF0dHIoJ2R5JywgMjgpXHJcbiAgICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIDI0KVxyXG4gICAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsICc2MDAnKVxyXG4gICAgICAgIC50ZXh0KCdPbmUgRG90JylcclxuXHJcbiAgICBleHBsYW5hdGlvbi5hcHBlbmQoJ3RzcGFuJylcclxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgMjQpXHJcbiAgICAgICAgLnRleHQoJyByZXByZXNlbnRzJylcclxuXHJcbiAgICBleHBsYW5hdGlvbi5hcHBlbmQoJ3RzcGFuJylcclxuICAgICAgICAuYXR0cigneCcsIDApXHJcbiAgICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIDI0KVxyXG4gICAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsICc2MDAnKVxyXG4gICAgICAgIC5hdHRyKCdkeScsIDMwKVxyXG4gICAgICAgIC50ZXh0KCdPbmUgQmlsbGlvbiBEb2xsYXJzJylcclxuXHJcbiAgICB0aGlzLmxhcmdlRG90LmFwcGVuZCgndGV4dCcpXHJcbiAgICAgICAgLnRleHQoJyQxLDAwMCwwMDAsMDAwJylcclxuICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcclxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgMTgpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCB0aGlzLnJhZGl1cylcclxuICAgICAgICAuYXR0cigneScsIHRoaXMucmFkaXVzICsgNylcclxuICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKTtcclxuXHJcbiAgICB0aGlzLmxhcmdlRG90LnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbig1MDApXHJcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgIC5lYXNlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmlwU3IoKSB7XHJcbiAgICBkMy5zZWxlY3RBbGwoJy5mYWN0LWJveCcpLmNsYXNzZWQoJ3NyLW9ubHknLCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXREb3QoKSB7XHJcbiAgICBsYXJnZURvdC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgICAgLmF0dHIoJ2N4JywgcmFkaXVzKVxyXG4gICAgICAgIC5hdHRyKCdjeScsIHJhZGl1cylcclxuICAgICAgICAuYXR0cigncicsIDEpXHJcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBjb2xvcnMuaW5jb21lKVxyXG4gICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24oMTUwMClcclxuICAgICAgICAuYXR0cigncicsIHJhZGl1cylcclxuICAgICAgICAub24oJ2VuZCcsIGFkZFRleHQuYmluZCh7XHJcbiAgICAgICAgICAgIGxhcmdlRG90OiBsYXJnZURvdCxcclxuICAgICAgICAgICAgcmFkaXVzOiByYWRpdXNcclxuICAgICAgICB9KSlcclxuICAgICAgICAuZWFzZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgc3RyaXBCcigpO1xyXG4gICAgaW5pdERvdCgpO1xyXG4gICAgaW5pdEluY29tZURvdHMoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KHBoYXNlVHdvLCAzMDAwKTtcclxuICAgIHNldFRpbWVvdXQoc3RyaXBTciwgMTAwMClcclxufVxyXG5cclxuaW5pdCgpOyIsImltcG9ydCB7IHRyYW5zbGF0b3IgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY29sb3JzLnNjc3MnO1xyXG5cclxuY29uc3QgZDMgPSB7IHNlbGVjdCB9O1xyXG5cclxubGV0IGRvdFBvc2l0aW9uO1xyXG5cclxuZnVuY3Rpb24gZG90UG9zaXRpb25HZXR0ZXIoKSB7XHJcbiAgICByZXR1cm4gZG90UG9zaXRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvdFBvc2l0aW9uU2V0dGVyKHBvc2l0aW9uLCBzdGFydEluZGV4KSB7XHJcbiAgICBkb3RQb3NpdGlvbiA9IHtcclxuICAgICAgICB4OiBwb3NpdGlvblswXSxcclxuICAgICAgICB5OiBwb3NpdGlvblsxXSxcclxuICAgICAgICBzdGFydEluZGV4OiBzdGFydEluZGV4XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVjZWlwdHNDb25zdGFudHMgPSB7XHJcbiAgICBkb3RPZmZzZXQ6IHtcclxuICAgICAgICB4OiA1LFxyXG4gICAgICAgIHk6IDZcclxuICAgIH0sXHJcbiAgICB4U3RhcnQ6IDIsXHJcbiAgICBoZWFkaW5nSGVpZ2h0OiA3MCxcclxuICAgIGRvdHNQZXJSb3c6IDIwMyxcclxuICAgIGRvdENvbnRhaW5lckNsYXNzOiAnZG90LWNvbnRhaW5lcicsXHJcbiAgICBpbmNvbWVDb250YWluZXJDbGFzczogJ2luY29tZS1jb250YWluZXInLFxyXG4gICAgc2hhZGVyQ29udGFpbmVyQ2xhc3M6ICdzaGFkZXItY29udGFpbmVyJ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG90RmFjdG9yeShjb250YWluZXIsIHgsIHksIGNvbG9yKSB7XHJcbiAgICBjb2xvciA9IGNvbG9yIHx8IGNvbG9ycy5pbmNvbWU7XHJcbiAgICBcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgICAgLmF0dHIoJ2N4JywgeClcclxuICAgICAgICAuYXR0cignY3knLCB5KVxyXG4gICAgICAgIC5hdHRyKCdyJywgMilcclxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBjb2xvcilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRvdFBvc2l0aW9uQWNjZXNzb3IgPSB7XHJcbiAgICBnZXQ6IGRvdFBvc2l0aW9uR2V0dGVyLFxyXG4gICAgc2V0OiBkb3RQb3NpdGlvblNldHRlclxyXG59IiwiaW1wb3J0IHsgc2VsZWN0QWxsIH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuXHJcbmNvbnN0IGQzID0geyBzZWxlY3RBbGwgfTtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKCkge1xyXG4gICAgZDMuc2VsZWN0QWxsKCcuaHdjdGEnKS5jbGFzc2VkKCdod2N0YS0tc3RhZ2VkJywgbnVsbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXZlYWxId2N0YSgpIHtcclxuICAgIGlmIChkMy5zZWxlY3RBbGwoJy5od2N0YScpLnNpemUoKSkge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRpbWVvdXQocmV2ZWFsSHdjdGEsIDEwMClcclxuICAgIH1cclxufSIsImltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsIH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuXHJcbmNvbnN0IGQzID0geyBzZWxlY3QsIHNlbGVjdEFsbCB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCb3goZDNTZWxlY3Rpb24pIHtcclxuICAgIGNvbnN0IHJlY3QgPSBkM1NlbGVjdGlvbi5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogTWF0aC5jZWlsKHJlY3Qud2lkdGgpLFxyXG4gICAgICAgIGhlaWdodDogTWF0aC5jZWlsKHJlY3QuaGVpZ2h0KSxcclxuICAgICAgICByaWdodDogTWF0aC5jZWlsKHJlY3QucmlnaHQpLFxyXG4gICAgICAgIGJvdHRvbTogTWF0aC5jZWlsKHJlY3QuYm90dG9tKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRvcih4LCB5KSB7XHJcbiAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCAke3l9KWBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zZm9ybShkM1NlbGVjdGlvbikge1xyXG4gICAgY29uc3QgcmUgPSAvKFxcZCkrL2dcclxuICAgIGNvbnN0IG9yaWdpbmFsVHJhbnNmb3JtID0gZDNTZWxlY3Rpb24uYXR0cigndHJhbnNmb3JtJykubWF0Y2gocmUpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogTnVtYmVyKG9yaWdpbmFsVHJhbnNmb3JtWzBdKSxcclxuICAgICAgICB5OiBOdW1iZXIob3JpZ2luYWxUcmFuc2Zvcm1bMV0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlc3RhYmxpc2hDb250YWluZXIoaGVpZ2h0LCB3aWR0aCkge1xyXG4gICAgY29uc3Qgdml6ID0gZDMuc2VsZWN0KCcjdml6Jyk7XHJcblxyXG4gICAgbGV0IHN2ZyA9IHZpei5zZWxlY3QoJ3N2Zy5tYWluJyk7XHJcblxyXG4gICAgaWYgKHN2Zy5zaXplKCkgPT09IDApIHtcclxuICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgNDAwO1xyXG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgMTIwMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZpei5hcHBlbmQoJ3N2ZycpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtYWluJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoJ3NoYXBlLXJlbmRlcmluZycsICdnZW9tZXRyaWNQcmVjaXNpb24nKVxyXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aCk7XHJcbiAgICB9IGVsc2UgaWYgKGhlaWdodCkge1xyXG4gICAgICAgIHN2Zy5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gc3ZnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxpZnlCaWxsaW9ucyhuKSB7XHJcbiAgICBjb25zdCBiaWxsaW9uID0gMTAwMDAwMDAwMDtcclxuXHJcbiAgICByZXR1cm4gYCQke01hdGgucm91bmQobiAvIGJpbGxpb24gKiAxMCkgLyAxMH0gQmA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGlmeU51bWJlcihuKSB7XHJcbiAgICBjb25zdCB0cmlsbGlvbiA9IDEwMDAwMDAwMDAwMDAsXHJcbiAgICAgICAgYmlsbGlvbiA9IDEwMDAwMDAwMDAsXHJcbiAgICAgICAgbWlsbGlvbiA9IDEwMDAwMDAsXHJcbiAgICAgICAgbmVnYXRpdmVTaWduID0gKG4gPCAwKSA/ICctJyA6ICcnO1xyXG5cclxuICAgIGxldCBzaW1wbGlmaWVyID0gbWlsbGlvbixcclxuICAgICAgICBsZXR0ZXIgPSAnTSc7XHJcblxyXG4gICAgaWYgKG4gPT09IDApIHtcclxuICAgICAgICByZXR1cm4gJyQwJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTWF0aC5hYnMobikgPj0gdHJpbGxpb24pIHtcclxuICAgICAgICBzaW1wbGlmaWVyID0gdHJpbGxpb247XHJcbiAgICAgICAgbGV0dGVyID0gJ1QnXHJcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKG4pID49IGJpbGxpb24pIHtcclxuICAgICAgICBzaW1wbGlmaWVyID0gYmlsbGlvbjtcclxuICAgICAgICBsZXR0ZXIgPSAnQic7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke25lZ2F0aXZlU2lnbn0kJHtNYXRoLnJvdW5kKE1hdGguYWJzKG4pIC8gc2ltcGxpZmllciAqIDEwKSAvIDEwfSAke2xldHRlcn1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd29yZFdyYXAodGV4dCwgbWF4V2lkdGgpIHtcclxuICAgIHZhciB3b3JkcyA9IHRleHQudGV4dCgpLnNwbGl0KC9cXHMrLykucmV2ZXJzZSgpLFxyXG4gICAgICAgIHdvcmQsXHJcbiAgICAgICAgbGluZSA9IFtdLFxyXG4gICAgICAgIGxpbmVOdW1iZXIgPSAwLFxyXG4gICAgICAgIGxpbmVIZWlnaHQgPSAxLjEsXHJcbiAgICAgICAgdHNwYW47XHJcblxyXG4gICAgdHNwYW4gPSB0ZXh0LnRleHQobnVsbClcclxuICAgICAgICAuYXBwZW5kKFwidHNwYW5cIilcclxuICAgICAgICAuYXR0cihcInhcIiwgMCk7XHJcblxyXG4gICAgd2hpbGUgKHdvcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB3b3JkID0gd29yZHMucG9wKCk7XHJcbiAgICAgICAgbGluZS5wdXNoKHdvcmQpO1xyXG4gICAgICAgIHRzcGFuLnRleHQobGluZS5qb2luKFwiIFwiKSk7XHJcbiAgICAgICAgaWYgKHRzcGFuLm5vZGUoKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKSA+IG1heFdpZHRoKSB7XHJcbiAgICAgICAgICAgIGxpbmUucG9wKCk7XHJcbiAgICAgICAgICAgIHRzcGFuLnRleHQobGluZS5qb2luKFwiIFwiKSk7XHJcbiAgICAgICAgICAgIGxpbmUgPSBbd29yZF07XHJcbiAgICAgICAgICAgIHRzcGFuID0gdGV4dC5hcHBlbmQoXCJ0c3BhblwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDApXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImR5XCIsIGxpbmVIZWlnaHQgKyBcImVtXCIpXHJcbiAgICAgICAgICAgICAgICAudGV4dCh3b3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RHJvcFNoYWRvdygpIHtcclxuICAgIGNvbnN0IHN2ZyA9IGVzdGFibGlzaENvbnRhaW5lcigpLFxyXG4gICAgICAgIGZpbHRlciA9IHN2Zy5hcHBlbmQoJ2RlZnMnKS5hcHBlbmQoJ2ZpbHRlcicpXHJcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdkcm9wMScpXHJcblxyXG4gICAgZmlsdGVyLmFwcGVuZCgnZmVEcm9wU2hhZG93JylcclxuICAgICAgICAuYXR0cignZHgnLCAwKVxyXG4gICAgICAgIC5hdHRyKCdkeScsIDApXHJcbiAgICAgICAgLmF0dHIoJ3N0ZERldmlhdGlvbicsIDUpXHJcbiAgICAgICAgLmF0dHIoJ2Zsb29kLW9wYWNpdHknLCAwLjIpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcmFjdGlvblRvUGVyY2VudChuLCBwcmVjaXNpb24pIHtcclxuICAgIGlmICghcHJlY2lzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG4gKiAxMDApICsgJyUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IGhhbmRsZSBwcmVjaXNpb25cclxuICAgIGNvbnNvbGUud2FybignbmVlZCB0byBoYW5kbGUgcHJlY2lzaW9uJylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwQnIoKSB7XHJcbiAgICBkMy5zZWxlY3RBbGwoJ2JyJykucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWRlQW5kUmVtb3ZlKHNlbGVjdGlvbiwgZHVyYXRpb24pIHtcclxuICAgIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgMTAwMDtcclxuICAgIFxyXG4gICAgc2VsZWN0aW9uLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcclxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXHJcbiAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
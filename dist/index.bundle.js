"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/default.jpg */ "./src/views/images/default.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    height: 100%;
    box-sizing: border-box;
    font-family: montserrat, sans-serif;
}

:root {
    font-size: 2vh;
    color: white;
}

span {
    padding-left: 1vh;
    padding-right: 1vh;
    height: min-content;
    width: min-content;
}

templates {
    display: none;
}

html {
    font-family: Roboto;
}

body {
    display: grid;
    grid-template-rows: 1fr;
    max-width: 100%;
}

.body_hide {
    opacity: 0;
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1vh;
    color: white;
    height: 2.5rem;
    font-size: 0.7rem;
}

.wrapper {
    display: grid;
    grid-template-rows: min-content min-content;
    max-width: inherit;
    max-height: 100%;
    background-image: linear-gradient(to right,
            rgba(black, 0.4),
            rgba(black, 0.4));
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    gap: 1rem;
    padding: 2rem;
}

.background {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 1vh;
    border: 0.5vh black solid;
}

.current-weather {
    display: grid;
}

.info {
    display: grid;
    min-width: 33vh;
    width: min-content;
    height: min-content;
    padding: 2rem;
}

.description {
    display: flex;
    justify-content: start;
    font-size: 3rem;
}

.city {
    display: flex;
    font-size: 1.5rem;
    padding-bottom: 1vh;
}

.time {
    padding-bottom: 3vh;
}

.temperature-wrapper {
    display: flex;
    font-size: 4rem;
}

.temperature-wrapper>span {
    width: max-content;
}

.search-field {
    display: flex;
    justify-content: start;
    padding-top: 1vh;
}

.search-field>input {
    display: flex;
    appearance: none;
    width: 20vh;
    height: 3vh;
    font-size: 1rem;
    padding: 1vh;
    border-radius: 1vh;
}

.button-wrapper {
    display: flex;
    padding: 1vh;
}

.button-wrapper>button {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
}

.info>.icon-wrapper {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 10vh;
}

.details {
    display: grid;
    width: 33vh;
    height: max-content;
    padding: 3rem;
    gap: 5vh;
}

.detail {
    display: grid;
    grid-template-columns: min-content max-content;
    gap: 1vh;
}

.detail>.icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6vh;
    height: 6vh;
}

.data {
    display: grid;
    grid-template-rows: min-content min-content;
}

.forecast-weather {
    display: grid;
    gap: 1vh;
    grid-template-rows: min-content 1fr;
    height: min-content;
}

.buttons-wrapper {
    display: grid;
    grid-template-columns: repeat(3, min-content);
    gap: 2vh;
}

.changer {
    display: grid;
    align-items: center;
    gap: 1vh;
    grid-template-columns: repeat(5, min-content);
    opacity: 0;
    visibility: hidden;
    padding: 1vh;
}

.arrow-left:hover,
.arrow-right:hover {
    fill: #1d89e1;
}

.down,
.up {
    display: flex;
    height: 3vh;
}

.tab {
    height: 1vh;
    width: 1vh;
    border: 0.1vh black solid;
    border-radius: 50%;
    cursor: pointer;
    background-color: white;
}

.tab:hover {
    border: 0.3vh rgb(29, 137, 225) solid;
}

.forecast-days,
.forecast-hours {
    padding: 1vh;
    cursor: pointer;
}

.panel-wrapper {
    display: grid;
    align-items: center;
    height: min-content;
}

.panel {
    display: grid;
    grid-template-columns: repeat(auto-fill, 23vh);
    gap: 2vh;
    height: min-content;
}

.f {
    display: grid;
    gap: 1vh;
    padding: 1vh;
    text-align: start;
    width: 23vh;
    height: min-content;
}

.f>.name {
    font-size: 1.8rem;
}

.temperature__for-day {
    display: grid;
}

.low {
    font-size: 1rem;
}

.max {
    font-size: 2.5rem;
    padding-bottom: 1vh;
}

.f>.icon-wrapper {
    display: flex;
    justify-content: center;
    height: 6rem;
}

.h>.temperature-wrapper {
    font-size: 2.5rem;
}

.active {
    border: 0.5vh #1d89e1 solid;
}

@media screen and (max-aspect-ratio: 1/1.0000001) {
    .current-weather {
        grid-template-rows: repeat(2, min-content);
        justify-items: center;
        gap: 1vh;
    }
}

@media screen and (min-aspect-ratio: 1/1) {
    .current-weather {
        grid-template-columns: repeat(2, min-content);
        justify-content: space-between;
    }
}`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');\n\n*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n    font-family: montserrat, sans-serif;\n}\n\n:root {\n    font-size: 2vh;\n    color: white;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: min-content;\n}\n\ntemplates {\n    display: none;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 1fr;\n    max-width: 100%;\n}\n\n.body_hide {\n    opacity: 0;\n}\n\nbutton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 1vh;\n    color: white;\n    height: 2.5rem;\n    font-size: 0.7rem;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content;\n    max-width: inherit;\n    max-height: 100%;\n    background-image: linear-gradient(to right,\n            rgba(black, 0.4),\n            rgba(black, 0.4));\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-image: url(../images/default.jpg);\n    gap: 1rem;\n    padding: 2rem;\n}\n\n.background {\n    background-color: rgba(0, 0, 0, 0.8);\n    border-radius: 1vh;\n    border: 0.5vh black solid;\n}\n\n.current-weather {\n    display: grid;\n}\n\n.info {\n    display: grid;\n    min-width: 33vh;\n    width: min-content;\n    height: min-content;\n    padding: 2rem;\n}\n\n.description {\n    display: flex;\n    justify-content: start;\n    font-size: 3rem;\n}\n\n.city {\n    display: flex;\n    font-size: 1.5rem;\n    padding-bottom: 1vh;\n}\n\n.time {\n    padding-bottom: 3vh;\n}\n\n.temperature-wrapper {\n    display: flex;\n    font-size: 4rem;\n}\n\n.temperature-wrapper>span {\n    width: max-content;\n}\n\n.search-field {\n    display: flex;\n    justify-content: start;\n    padding-top: 1vh;\n}\n\n.search-field>input {\n    display: flex;\n    appearance: none;\n    width: 20vh;\n    height: 3vh;\n    font-size: 1rem;\n    padding: 1vh;\n    border-radius: 1vh;\n}\n\n.button-wrapper {\n    display: flex;\n    padding: 1vh;\n}\n\n.button-wrapper>button {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0);\n}\n\n.info>.icon-wrapper {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    height: 10vh;\n}\n\n.details {\n    display: grid;\n    width: 33vh;\n    height: max-content;\n    padding: 3rem;\n    gap: 5vh;\n}\n\n.detail {\n    display: grid;\n    grid-template-columns: min-content max-content;\n    gap: 1vh;\n}\n\n.detail>.icon-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 6vh;\n    height: 6vh;\n}\n\n.data {\n    display: grid;\n    grid-template-rows: min-content min-content;\n}\n\n.forecast-weather {\n    display: grid;\n    gap: 1vh;\n    grid-template-rows: min-content 1fr;\n    height: min-content;\n}\n\n.buttons-wrapper {\n    display: grid;\n    grid-template-columns: repeat(3, min-content);\n    gap: 2vh;\n}\n\n.changer {\n    display: grid;\n    align-items: center;\n    gap: 1vh;\n    grid-template-columns: repeat(5, min-content);\n    opacity: 0;\n    visibility: hidden;\n    padding: 1vh;\n}\n\n.arrow-left:hover,\n.arrow-right:hover {\n    fill: #1d89e1;\n}\n\n.down,\n.up {\n    display: flex;\n    height: 3vh;\n}\n\n.tab {\n    height: 1vh;\n    width: 1vh;\n    border: 0.1vh black solid;\n    border-radius: 50%;\n    cursor: pointer;\n    background-color: white;\n}\n\n.tab:hover {\n    border: 0.3vh rgb(29, 137, 225) solid;\n}\n\n.forecast-days,\n.forecast-hours {\n    padding: 1vh;\n    cursor: pointer;\n}\n\n.panel-wrapper {\n    display: grid;\n    align-items: center;\n    height: min-content;\n}\n\n.panel {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 23vh);\n    gap: 2vh;\n    height: min-content;\n}\n\n.f {\n    display: grid;\n    gap: 1vh;\n    padding: 1vh;\n    text-align: start;\n    width: 23vh;\n    height: min-content;\n}\n\n.f>.name {\n    font-size: 1.8rem;\n}\n\n.temperature__for-day {\n    display: grid;\n}\n\n.low {\n    font-size: 1rem;\n}\n\n.max {\n    font-size: 2.5rem;\n    padding-bottom: 1vh;\n}\n\n.f>.icon-wrapper {\n    display: flex;\n    justify-content: center;\n    height: 6rem;\n}\n\n.h>.temperature-wrapper {\n    font-size: 2.5rem;\n}\n\n.active {\n    border: 0.5vh #1d89e1 solid;\n}\n\n@media screen and (max-aspect-ratio: 1/1.0000001) {\n    .current-weather {\n        grid-template-rows: repeat(2, min-content);\n        justify-items: center;\n        gap: 1vh;\n    }\n}\n\n@media screen and (min-aspect-ratio: 1/1) {\n    .current-weather {\n        grid-template-columns: repeat(2, min-content);\n        justify-content: space-between;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/views/styles/main.css":
/*!***********************************!*\
  !*** ./src/views/styles/main.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controllers/listeners/changer.js":
/*!**********************************************!*\
  !*** ./src/controllers/listeners/changer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forArrowDown: () => (/* binding */ forArrowDown),
/* harmony export */   forArrowUp: () => (/* binding */ forArrowUp),
/* harmony export */   forButtonDot: () => (/* binding */ forButtonDot)
/* harmony export */ });
/* harmony import */ var _models_activeClockTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/activeClockTab */ "./src/models/activeClockTab.js");
/* harmony import */ var _models_fillingWidgets_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/fillingWidgets/forecast */ "./src/models/fillingWidgets/forecast.js");
/* harmony import */ var _models_JSON_hours_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/JSON/hours.json */ "./src/models/JSON/hours.json");




const hours = _models_JSON_hours_json__WEBPACK_IMPORTED_MODULE_2__;

const forButtonDot = async () => {
    const buttons = document.querySelectorAll('.tab');
    for (let button of buttons) {
        button.addEventListener('click', async () => {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i] === button) {
                    setHoursForecast(i);
                    (await _models_activeClockTab__WEBPACK_IMPORTED_MODULE_0__.ClockTabs).activate(i);
                } else {
                    (await _models_activeClockTab__WEBPACK_IMPORTED_MODULE_0__.ClockTabs).deactivate(i);
                }
            }
        });
    }
};

const forArrowUp = async () => {
    const button = document.querySelector('.up');
    button.addEventListener('click', async () => {
        (await _models_activeClockTab__WEBPACK_IMPORTED_MODULE_0__.ClockTabs).activateFollowTab();
        const i = (await _models_activeClockTab__WEBPACK_IMPORTED_MODULE_0__.ClockTabs).getIndexActiveTab();
        setHoursForecast(i);
    });
};

const forArrowDown = async () => {
    const button = document.querySelector('.down');
    button.addEventListener('click', async () => {
        (await _models_activeClockTab__WEBPACK_IMPORTED_MODULE_0__.ClockTabs).activatePrevTab();
        const i = (await _models_activeClockTab__WEBPACK_IMPORTED_MODULE_0__.ClockTabs).getIndexActiveTab();
        setHoursForecast(i);
    });
};

const setHoursForecast = async (i) => {
    const fHour = hours[i].hours;
    const lHour = fHour + 8;
    (0,_models_fillingWidgets_forecast__WEBPACK_IMPORTED_MODULE_1__.fillHoursForecast)('London', fHour, lHour);
};


/***/ }),

/***/ "./src/controllers/listeners/days.js":
/*!*******************************************!*\
  !*** ./src/controllers/listeners/days.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysIsActive: () => (/* binding */ daysIsActive),
/* harmony export */   forButtonDays: () => (/* binding */ forButtonDays)
/* harmony export */ });
/* harmony import */ var _models_city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/city */ "./src/models/city.js");
/* harmony import */ var _models_fillingWidgets_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/fillingWidgets/forecast */ "./src/models/fillingWidgets/forecast.js");
/* harmony import */ var _views_animations_universal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/animations/universal */ "./src/views/animations/universal.js");




const forButtonDays = async () => {
    const button = document.querySelector('.forecast-days');
    const click = button.addEventListener('click', async () => {
        const changer = document.querySelector('.changer');
        daysIsActive();
        (0,_models_fillingWidgets_forecast__WEBPACK_IMPORTED_MODULE_1__.fillDaysForecast)(3, (await _models_city__WEBPACK_IMPORTED_MODULE_0__.City).getCity());
        _views_animations_universal__WEBPACK_IMPORTED_MODULE_2__.SmoothVisibility.close(changer, 1, 0, 200, 'forwards');
    });
    return { click };
};

const daysIsActive = async () => {
    const button = document.querySelector('.forecast-days');
    const hours = document.querySelector('.forecast-hours');
    button.classList.add('active');
    hours.classList.remove('active');
};


/***/ }),

/***/ "./src/controllers/listeners/hours.js":
/*!********************************************!*\
  !*** ./src/controllers/listeners/hours.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forButtonHours: () => (/* binding */ forButtonHours),
/* harmony export */   hoursIsActive: () => (/* binding */ hoursIsActive)
/* harmony export */ });
/* harmony import */ var _models_fillingWidgets_forecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fillingWidgets/forecast */ "./src/models/fillingWidgets/forecast.js");
/* harmony import */ var _views_animations_universal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/animations/universal */ "./src/views/animations/universal.js");



const forButtonHours = async () => {
    const button = document.querySelector('.forecast-hours');
    const click = button.addEventListener('click', () => {
        const changer = document.querySelector('.changer');
        hoursIsActive();
        (0,_models_fillingWidgets_forecast__WEBPACK_IMPORTED_MODULE_0__.fillHoursForecast)('London', 0, 8);
        _views_animations_universal__WEBPACK_IMPORTED_MODULE_1__.SmoothVisibility.open(changer, 0, 1, 200, 'forwards');
    });
    return { click };
};

const hoursIsActive = async () => {
    const button = document.querySelector('.forecast-hours');
    const days = document.querySelector('.forecast-days');
    button.classList.add('active');
    days.classList.remove('active');
};


/***/ }),

/***/ "./src/controllers/listeners/search.js":
/*!*********************************************!*\
  !*** ./src/controllers/listeners/search.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forSearchField: () => (/* binding */ forSearchField)
/* harmony export */ });
/* harmony import */ var _models_city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/city */ "./src/models/city.js");
/* harmony import */ var _views_nodes_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/nodes/main */ "./src/views/nodes/main.js");
/* harmony import */ var _days__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./days */ "./src/controllers/listeners/days.js");




const forSearchField = async () => {
    const input = document.querySelector('.search-field>input');
    const search = input.addEventListener('keyup', async (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            try {
                (await _models_city__WEBPACK_IMPORTED_MODULE_0__.City).setCity(input.value);
                (0,_views_nodes_main__WEBPACK_IMPORTED_MODULE_1__.viewWeather)((await _models_city__WEBPACK_IMPORTED_MODULE_0__.City).getCity());
                (0,_days__WEBPACK_IMPORTED_MODULE_2__.daysIsActive)();
            } catch (error) {
                console.log(error);
            }
        }
    });
    return { search };
};


/***/ }),

/***/ "./src/helper/tools.js":
/*!*****************************!*\
  !*** ./src/helper/tools.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asyncQuerySelector: () => (/* binding */ asyncQuerySelector),
/* harmony export */   removeChilds: () => (/* binding */ removeChilds)
/* harmony export */ });
const asyncQuerySelector = async (node, query) => {
    try {
        return await (query ? node.querySelector(query) : node);
    } catch (error) {
        console.error(
            `Cannot find ${query ? `${query} in` : ''} ${node}.`,
            error,
        );
        return null;
    }
};

const removeChilds = (node) => {
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
    console.log(node);
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/city */ "./src/models/city.js");
/* harmony import */ var _models_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/main */ "./src/models/main.js");
/* harmony import */ var _views_animations_pageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/animations/pageLoader */ "./src/views/animations/pageLoader.js");
/* harmony import */ var _views_nodes_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/nodes/main */ "./src/views/nodes/main.js");
/* harmony import */ var _views_styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/styles/main.css */ "./src/views/styles/main.css");







_views_animations_pageLoader__WEBPACK_IMPORTED_MODULE_2__.Loader;

(0,_models_main__WEBPACK_IMPORTED_MODULE_1__.setListeners)();
let city = (await _models_city__WEBPACK_IMPORTED_MODULE_0__.City).getCity();
(0,_views_nodes_main__WEBPACK_IMPORTED_MODULE_3__.viewWeather)(city);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/models/activeClockTab.js":
/*!**************************************!*\
  !*** ./src/models/activeClockTab.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClockTabs: () => (/* binding */ ClockTabs)
/* harmony export */ });
const ClockTabs = (async () => {
    let indexActiveTab = 0;
    const clockTabs = document.querySelectorAll('.tab');
    clockTabs[0].style.backgroundColor = '#1d89e1';

    const activate = async (i) => {
        clockTabs[i].style.backgroundColor = '#1d89e1';
        setIndexActiveTab(i);
    };

    const deactivate = async (i) => {
        clockTabs[i].style.backgroundColor = '#ffffff';
    };

    const activateFollowTab = () => {
        deactivate(indexActiveTab);
        incIndexActiveTab();
        activate(indexActiveTab);
    };

    const activatePrevTab = () => {
        deactivate(indexActiveTab);
        decIndexActiveTab();
        activate(indexActiveTab);
    };

    const incIndexActiveTab = () => {
        indexActiveTab += 1;
        ifMax();
    };

    const decIndexActiveTab = () => {
        indexActiveTab -= 1;
        ifMin();
    };

    const setIndexActiveTab = (val) => {
        indexActiveTab = val;
        ifMax();
    };

    const getIndexActiveTab = () => {
        return indexActiveTab;
    };

    const ifMax = () => {
        if (indexActiveTab >= clockTabs.length) {
            indexActiveTab = 0;
        }
    };

    const ifMin = () => {
        if (indexActiveTab < 0) {
            indexActiveTab = clockTabs.length - 1;
        }
    };

    const getClockTabs = () => {
        return clockTabs;
    };

    return {
        activate,
        deactivate,
        activateFollowTab,
        activatePrevTab,
        setIndexActiveTab,
        getIndexActiveTab,
        getClockTabs,
    };
})();


/***/ }),

/***/ "./src/models/city.js":
/*!****************************!*\
  !*** ./src/models/city.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   City: () => (/* binding */ City)
/* harmony export */ });
const City = (async () => {
    let city = 'London';
    const setCity = (str) => {
        city = str;
    };
    const getCity = () => {
        return city;
    };

    return { getCity, setCity };
})();


/***/ }),

/***/ "./src/models/constants.js":
/*!*********************************!*\
  !*** ./src/models/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONSTANTS: () => (/* binding */ CONSTANTS)
/* harmony export */ });
const CONSTANTS = (async () => {
    const FORECAST_LONG = 3;
    const HOURS_IN_DAY = 24;
    return { FORECAST_LONG, HOURS_IN_DAY };
})();


/***/ }),

/***/ "./src/models/data/weekDays.js":
/*!*************************************!*\
  !*** ./src/models/data/weekDays.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weekday: () => (/* binding */ weekday)
/* harmony export */ });
const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];


/***/ }),

/***/ "./src/models/fillingWidgets/details.js":
/*!**********************************************!*\
  !*** ./src/models/fillingWidgets/details.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillWeatherDetails: () => (/* binding */ fillWeatherDetails)
/* harmony export */ });
/* harmony import */ var _weatherApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weatherApi */ "./src/models/weatherApi.js");
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets */ "./src/models/widgets.js");



const fillWeatherDetails = async (city) => {
    try {
        const data = await (0,_weatherApi__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeatherForCity)(city);
        (
            await _widgets__WEBPACK_IMPORTED_MODULE_1__.Details
        ).feelsLike.textContent = `${data.current.feelslike_c} \xB0C`;
        (await _widgets__WEBPACK_IMPORTED_MODULE_1__.Details).humidity.textContent = `${data.current.humidity} %`;
        (await _widgets__WEBPACK_IMPORTED_MODULE_1__.Details).windSpeed.textContent = `${data.current.wind_kph} km/h`;
    } catch (error) {
        console.log('Error:', error);
    }
};


/***/ }),

/***/ "./src/models/fillingWidgets/forecast.js":
/*!***********************************************!*\
  !*** ./src/models/fillingWidgets/forecast.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillDaysForecast: () => (/* binding */ fillDaysForecast),
/* harmony export */   fillHoursForecast: () => (/* binding */ fillHoursForecast)
/* harmony export */ });
/* harmony import */ var _views_animations_universal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/animations/universal */ "./src/views/animations/universal.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/models/constants.js");
/* harmony import */ var _data_weekDays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/weekDays */ "./src/models/data/weekDays.js");
/* harmony import */ var _weatherApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weatherApi */ "./src/models/weatherApi.js");
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets */ "./src/models/widgets.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info */ "./src/models/fillingWidgets/info.js");
/* harmony import */ var _views_nodes_forecastHoursBuilding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/nodes/forecastHoursBuilding */ "./src/views/nodes/forecastHoursBuilding.js");
/* harmony import */ var _views_nodes_forecastDaysBuilding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/nodes/forecastDaysBuilding */ "./src/views/nodes/forecastDaysBuilding.js");









const fillDaysForecast = async (ofDays, city) => {
    try {
        await (0,_views_nodes_forecastDaysBuilding__WEBPACK_IMPORTED_MODULE_7__.building)();
        const data = await (0,_weatherApi__WEBPACK_IMPORTED_MODULE_3__.getDaysForecastWeatherForCity)(ofDays, city);
        const days = (await (0,_widgets__WEBPACK_IMPORTED_MODULE_4__.forecastDays)()).allDays;
        for (let i = 0; i < (await _constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS).FORECAST_LONG; i++) {
            days[i].querySelector('.name').textContent = await getDay(
                data.forecast.forecastday[i].date,
            );
            days[i].querySelector(
                '.max',
            ).textContent = `${data.forecast.forecastday[i].day.maxtemp_c} \xB0C`;
            days[i].querySelector(
                '.low',
            ).textContent = `${data.forecast.forecastday[i].day.mintemp_c} \xB0C`;
            const image = await (0,_info__WEBPACK_IMPORTED_MODULE_5__.getIcon)(
                data.forecast.forecastday[i].day.condition.icon,
            );
            const imageWrapper = days[i].querySelector('.icon');
            imageWrapper.appendChild(image);
            _views_animations_universal__WEBPACK_IMPORTED_MODULE_0__.SmoothVisibility.open(imageWrapper, 0, 1, 400, 'forwards');
        }
    } catch (error) {
        console.log('Error:', error);
    }
};

const getDay = async (promise) => {
    const date = new Date(promise);
    const dayCode = date.getDay();
    const day = _data_weekDays__WEBPACK_IMPORTED_MODULE_2__.weekday[dayCode];
    return day;
};

const fillHoursForecast = async (city, fHour, lHour) => {
    try {
        (0,_views_nodes_forecastHoursBuilding__WEBPACK_IMPORTED_MODULE_6__.building)(fHour, lHour);
        const data = await (0,_weatherApi__WEBPACK_IMPORTED_MODULE_3__.getDaysForecastWeatherForCity)(1, city);
        const hours = (await (0,_widgets__WEBPACK_IMPORTED_MODULE_4__.forecastHours)()).allHours;
        for (let i = 0; i < 8; i++) {
            const index = i + fHour;
            hours[i].querySelector('.name').textContent =
                data.forecast.forecastday[0].hour[index].time.split(' ')[1];
            hours[i].querySelector(
                '.temperature-wrapper',
            ).textContent = `${data.forecast.forecastday[0].hour[index].temp_c} \xB0C`;
            const image = await (0,_info__WEBPACK_IMPORTED_MODULE_5__.getIcon)(
                data.forecast.forecastday[0].hour[index].condition.icon,
            );
            const imageWrapper = hours[i].querySelector('.icon');
            imageWrapper.appendChild(image);
            _views_animations_universal__WEBPACK_IMPORTED_MODULE_0__.SmoothVisibility.open(imageWrapper, 0, 1, 400, 'forwards');
        }
    } catch (error) {
        console.log('Error:', error);
    }
};


/***/ }),

/***/ "./src/models/fillingWidgets/info.js":
/*!*******************************************!*\
  !*** ./src/models/fillingWidgets/info.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillCurrentWeatherData: () => (/* binding */ fillCurrentWeatherData),
/* harmony export */   getIcon: () => (/* binding */ getIcon)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _views_nodes_wrapperBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/nodes/wrapperBackground */ "./src/views/nodes/wrapperBackground.js");
/* harmony import */ var _weatherApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weatherApi */ "./src/models/weatherApi.js");
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets */ "./src/models/widgets.js");





const fillCurrentWeatherData = async (city) => {
    try {
        const data = await (0,_weatherApi__WEBPACK_IMPORTED_MODULE_2__.getCurrentWeatherForCity)(city);
        const date = await getDate(data.current.last_updated_epoch);
        const time = await getTime(data.location.localtime);
        const image = await getIcon(data.current.condition.icon);
        _widgets__WEBPACK_IMPORTED_MODULE_3__.Info.description.textContent = data.current.condition.text;
        _widgets__WEBPACK_IMPORTED_MODULE_3__.Info.city.textContent = data.location.name;
        _widgets__WEBPACK_IMPORTED_MODULE_3__.Info.date.textContent = date;
        _widgets__WEBPACK_IMPORTED_MODULE_3__.Info.time.textContent = time;
        _widgets__WEBPACK_IMPORTED_MODULE_3__.Info.temperature.textContent = `${data.current.temp_c} \xB0C`;
        (0,_helper_tools__WEBPACK_IMPORTED_MODULE_0__.removeChilds)(_widgets__WEBPACK_IMPORTED_MODULE_3__.Info.icon);
        _widgets__WEBPACK_IMPORTED_MODULE_3__.Info.icon.appendChild(image);
        (0,_views_nodes_wrapperBackground__WEBPACK_IMPORTED_MODULE_1__.setRandomWallpaper)(data.current.condition.text.replaceAll(' ', '_'));
    } catch (error) {
        alert(
            'Локация не найдена, убедитесь, что название города написано правильно',
        );
    }
};

const getIcon = async (promise) => {
    let url = await promise;
    const image = new Image();
    image.src = url;
    return image;
};

const getDate = async (promise) => {
    const utcSeconds = await promise;
    let date = new Date(0);
    date.setUTCSeconds(utcSeconds);
    const result = new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        timeZone: 'Australia/Sydney',
    }).format(date);
    return result;
};

const getTime = async (promise) => {
    const date = await promise;
    const time = await formatAMPM(date.split(' ')[1]);
    return time;
};

const formatAMPM = async (strTime) => {
    let time = strTime.split(':');
    var hours = time[0];
    var minutes = time[1];
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var result = hours + ':' + minutes + ' ' + ampm;
    return result;
};


/***/ }),

/***/ "./src/models/main.js":
/*!****************************!*\
  !*** ./src/models/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListeners: () => (/* binding */ setListeners)
/* harmony export */ });
/* harmony import */ var _controllers_listeners_changer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/listeners/changer */ "./src/controllers/listeners/changer.js");
/* harmony import */ var _controllers_listeners_days__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/listeners/days */ "./src/controllers/listeners/days.js");
/* harmony import */ var _controllers_listeners_hours__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/listeners/hours */ "./src/controllers/listeners/hours.js");
/* harmony import */ var _controllers_listeners_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/listeners/search */ "./src/controllers/listeners/search.js");





const setListeners = async () => {
    (0,_controllers_listeners_search__WEBPACK_IMPORTED_MODULE_3__.forSearchField)().search;
    (0,_controllers_listeners_days__WEBPACK_IMPORTED_MODULE_1__.forButtonDays)().click;
    (0,_controllers_listeners_hours__WEBPACK_IMPORTED_MODULE_2__.forButtonHours)().click;
    (0,_controllers_listeners_changer__WEBPACK_IMPORTED_MODULE_0__.forButtonDot)();
    (0,_controllers_listeners_changer__WEBPACK_IMPORTED_MODULE_0__.forArrowUp)();
    (0,_controllers_listeners_changer__WEBPACK_IMPORTED_MODULE_0__.forArrowDown)();
};


/***/ }),

/***/ "./src/models/wallpaperApi.js":
/*!************************************!*\
  !*** ./src/models/wallpaperApi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomWallpaper: () => (/* binding */ getRandomWallpaper)
/* harmony export */ });
const getRandomWallpaper = async (promise) => {
    try {
        const minWidth = 1080;
        const minHeight = 1080;
        const option = await promise;
        const apiKey = '39005979-68c3541db10e6a8ba629c98a6';
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${option}&min_width=${minWidth}&min_height=${minHeight}&category=places&image_type=photo&per_page=20`;
        const response = await fetch(apiUrl, { mode: 'cors' });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
        alert(error);
    }
};


/***/ }),

/***/ "./src/models/weatherApi.js":
/*!**********************************!*\
  !*** ./src/models/weatherApi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentWeatherForCity: () => (/* binding */ getCurrentWeatherForCity),
/* harmony export */   getDaysForecastWeatherForCity: () => (/* binding */ getDaysForecastWeatherForCity)
/* harmony export */ });
const getCurrentWeatherForCity = async (city) => {
    try {
        const apiKey = '6349002fc7d4425ba87132549231008';
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
        const response = await fetch(apiUrl, { mode: 'cors' });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
    }
};

const getDaysForecastWeatherForCity = async (days, city) => {
    try {
        const apiKey = '6349002fc7d4425ba87132549231008';
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=${days}&q=${city}`;
        const response = await fetch(apiUrl, { mode: 'cors' });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
    }
};


/***/ }),

/***/ "./src/models/widgets.js":
/*!*******************************!*\
  !*** ./src/models/widgets.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Details: () => (/* binding */ Details),
/* harmony export */   Info: () => (/* binding */ Info),
/* harmony export */   forecastDays: () => (/* binding */ forecastDays),
/* harmony export */   forecastHours: () => (/* binding */ forecastHours)
/* harmony export */ });
/* harmony import */ var _views_nodes_detailsBuilding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/detailsBuilding */ "./src/views/nodes/detailsBuilding.js");


const Info = (() => {
    const prototype = document.querySelector('.info');
    const description = document.querySelector('.description > span');
    const city = document.querySelector('.city > span');
    const date = document.querySelector('.date > span');
    const time = document.querySelector('.time > span');
    const temperature = document.querySelector('.temperature-wrapper > span');
    const icon = document.querySelector('.icon-wrapper');
    return { prototype, description, city, date, time, temperature, icon };
})();

const Details = (async () => {
    await (0,_views_nodes_detailsBuilding__WEBPACK_IMPORTED_MODULE_0__.building)();
    const feelsLike = document.querySelector('.feels-like>.data>.value');
    const humidity = document.querySelector('.humidity>.data>.value');
    const windSpeed = document.querySelector('.wind-speed>.data>.value');
    return { feelsLike, humidity, windSpeed };
})();

const forecastDays = async () => {
    const allDays = Array.from(document.querySelectorAll('.d'));
    return { allDays };
};

const forecastHours = async () => {
    const allHours = Array.from(document.querySelectorAll('.h'));
    return { allHours };
};


/***/ }),

/***/ "./src/views/animations/animations.js":
/*!********************************************!*\
  !*** ./src/views/animations/animations.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animations: () => (/* binding */ Animations)
/* harmony export */ });
const Animations = (() => {
    const transform = (() => {
        const x = (e, x0, x1, dur, fill = 'none') => {
            return e.animate([{ left: `${x0}` }, { left: `${x1}` }], {
                duration: dur,
                fill: fill,
            });
        };

        const y = (e, y0, y1, dur, fill = 'none') => {
            return e.animate([{ top: `${y0}` }, { top: `${y1}` }], {
                duration: dur,
                fill: fill,
            });
        };

        const rotate = (e, rotate1, rotate2, dur, fill = 'none') => {
            return e.animate(
                [
                    {
                        transform: `rotate(${rotate1}deg)`,
                    },
                    {
                        transform: `rotate(${rotate2}deg)`,
                    },
                ],
                { duration: dur, fill: fill },
            );
        };

        return { x, y, rotate };
    })();

    const background = (e, color1, color2, dur, fill = 'none') => {
        return e.animate([{ background: color1 }, { background: color2 }], {
            duration: dur,
            fill: fill,
        });
    };

    const opacity = (e, opacity1, opacity2, dur, fill = 'none') => {
        return e.animate([{ opacity: opacity1 }, { opacity: opacity2 }], {
            duration: dur,
            fill: fill,
        });
    };

    const custom = (e, dur, fill = 'none', ...keyFrames) => {
        return e.animate(...keyFrames, {
            duration: dur,
            fill: fill,
        });
    };

    return {
        transform,
        background,
        opacity,
        custom,
    };
})();


/***/ }),

/***/ "./src/views/animations/pageLoader.js":
/*!********************************************!*\
  !*** ./src/views/animations/pageLoader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var _universal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./universal */ "./src/views/animations/universal.js");


const Loader = (async () => {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            _universal__WEBPACK_IMPORTED_MODULE_0__.SmoothVisibility.open(document.body, 0, 1, 1000, 'forwards');
        }, 1000);
    });
})();


/***/ }),

/***/ "./src/views/animations/universal.js":
/*!*******************************************!*\
  !*** ./src/views/animations/universal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmoothVisibility: () => (/* binding */ SmoothVisibility)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ "./src/views/animations/animations.js");


const SmoothVisibility = (() => {
    const close = (e, op1, op2, dur, fill) => {
        return _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.opacity(e, op1, op2, dur, fill).finished.then(() => {
            e.style.visibility = 'hidden';
        });
    };
    const open = (e, op1, op2, dur, fill) => {
        e.style.visibility = 'visible';
        return _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.opacity(e, op1, op2, dur, fill);
    };
    return { open, close };
})();


/***/ }),

/***/ "./src/views/nodes/detailsBuilding.js":
/*!********************************************!*\
  !*** ./src/views/nodes/detailsBuilding.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   building: () => (/* binding */ building)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/views/nodes/templates.js");
/* harmony import */ var _models_JSON_details_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/JSON/details.json */ "./src/models/JSON/details.json");
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");




const building = async () => {
    const blocks = _models_JSON_details_json__WEBPACK_IMPORTED_MODULE_1__;
    const details = document.querySelector('.details');
    for (let block of blocks) {
        const node = await createBlockNode(block);
        details.appendChild(node);
    }
};

const createBlockNode = async (block) => {
    const node = await (0,_templates__WEBPACK_IMPORTED_MODULE_0__.getTemplateNode)('.details-block');
    node.className = `detail ${block.class}`;
    node.querySelector('.name').textContent = block.name;
    appendSvg(block, node);
    return node;
};

const appendSvg = async (block, node) => {
    (0,_helper_tools__WEBPACK_IMPORTED_MODULE_2__.asyncQuerySelector)(document, `.${block.class}`).then((icon) => {
        (0,_helper_tools__WEBPACK_IMPORTED_MODULE_2__.asyncQuerySelector)(node, '.icon-wrapper').then((node) => {
            node.appendChild(icon);
        });
    });
};


/***/ }),

/***/ "./src/views/nodes/forecastDaysBuilding.js":
/*!*************************************************!*\
  !*** ./src/views/nodes/forecastDaysBuilding.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   building: () => (/* binding */ building)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/constants */ "./src/models/constants.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ "./src/views/nodes/templates.js");




const building = async () => {
    const panel = document.querySelector('.panel');
    (0,_helper_tools__WEBPACK_IMPORTED_MODULE_0__.removeChilds)(panel);
    for (let i = 0; i < (await _models_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS).FORECAST_LONG; i++) {
        console.log('w0w');
        const day = await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.getTemplateNode)('.day');
        const temperature = await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.getTemplateNode)('.temperature__for-day');
        day.className = `f d day${i} background`;
        day.querySelector('.temperature-wrapper').appendChild(temperature);
        panel.appendChild(day);
    }
};


/***/ }),

/***/ "./src/views/nodes/forecastHoursBuilding.js":
/*!**************************************************!*\
  !*** ./src/views/nodes/forecastHoursBuilding.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   building: () => (/* binding */ building)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./src/views/nodes/templates.js");



const building = async (fHour, lHour) => {
    const panel = document.querySelector('.panel');
    (0,_helper_tools__WEBPACK_IMPORTED_MODULE_0__.removeChilds)(panel);
    for (let i = fHour; i < lHour; i++) {
        const hour = await (0,_templates__WEBPACK_IMPORTED_MODULE_1__.getTemplateNode)('.hour');
        hour.className = `f h hour${i} background`;
        panel.appendChild(hour);
    }
};


/***/ }),

/***/ "./src/views/nodes/main.js":
/*!*********************************!*\
  !*** ./src/views/nodes/main.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewWeather: () => (/* binding */ viewWeather)
/* harmony export */ });
/* harmony import */ var _models_fillingWidgets_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fillingWidgets/details */ "./src/models/fillingWidgets/details.js");
/* harmony import */ var _models_fillingWidgets_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/fillingWidgets/forecast */ "./src/models/fillingWidgets/forecast.js");
/* harmony import */ var _models_fillingWidgets_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/fillingWidgets/info */ "./src/models/fillingWidgets/info.js");




const viewWeather = async (city) => {
    (0,_models_fillingWidgets_info__WEBPACK_IMPORTED_MODULE_2__.fillCurrentWeatherData)(city);
    (0,_models_fillingWidgets_details__WEBPACK_IMPORTED_MODULE_0__.fillWeatherDetails)(city);
    (0,_models_fillingWidgets_forecast__WEBPACK_IMPORTED_MODULE_1__.fillDaysForecast)(3, city);
};


/***/ }),

/***/ "./src/views/nodes/templates.js":
/*!**************************************!*\
  !*** ./src/views/nodes/templates.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTemplateNode: () => (/* binding */ getTemplateNode)
/* harmony export */ });
const getTemplateNode = async (name) => {
    const template = document.querySelector(name).cloneNode(true);
    return template;
};


/***/ }),

/***/ "./src/views/nodes/wrapperBackground.js":
/*!**********************************************!*\
  !*** ./src/views/nodes/wrapperBackground.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setRandomWallpaper: () => (/* binding */ setRandomWallpaper)
/* harmony export */ });
/* harmony import */ var _models_fillingWidgets_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fillingWidgets/info */ "./src/models/fillingWidgets/info.js");
/* harmony import */ var _models_wallpaperApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/wallpaperApi */ "./src/models/wallpaperApi.js");



const setRandomWallpaper = async (option) => {
    try {
        const data = await (0,_models_wallpaperApi__WEBPACK_IMPORTED_MODULE_1__.getRandomWallpaper)(option);
        const hits = data.hits;
        const index = Math.floor(Math.random() * hits.length);
        const image = await (0,_models_fillingWidgets_info__WEBPACK_IMPORTED_MODULE_0__.getIcon)(data.hits[index].largeImageURL);
        testImage(image.src);
    } catch (error) {
        console.log('Error:', error);
        alert(error);
    }
};


function testImage(URL) {
    var tester = new Image();
    tester.onload = imageFound(URL);
    tester.onerror = imageNotFound;
    tester.src = URL;
}

function imageFound(URL) {
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.backgroundImage = `url('${URL}')`;
}

function imageNotFound() {
    const wrapper = document.querySelector('.wrapper');
    const wallpaper = new Image();
    wallpaper.src = __webpack_require__(/*! ../images/default.jpg */ "./src/views/images/default.jpg");
    wrapper.style.backgroundImage = `url('${wallpaper.src}')`;
}

/***/ }),

/***/ "./src/views/images/default.jpg":
/*!**************************************!*\
  !*** ./src/views/images/default.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "034d7a92463fdcbfd0c0.jpg";

/***/ }),

/***/ "./src/models/JSON/details.json":
/*!**************************************!*\
  !*** ./src/models/JSON/details.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Feels Like","class":"feels-like"},{"name":"Humidity","class":"humidity"},{"name":"Wind Speed","class":"wind-speed"}]');

/***/ }),

/***/ "./src/models/JSON/hours.json":
/*!************************************!*\
  !*** ./src/models/JSON/hours.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"hours":0},{"hours":8},{"hours":16}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyw0SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixtSEFBbUgsSUFBSSxJQUFJLElBQUksa0JBQWtCO0FBQ2pKLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw4RkFBOEYsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sbUdBQW1HLElB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QUFDQSwyQkFBMkIsd0VBQWtCO0FBQzdDO0FBQ0E7QUFDQSw0QkFBNEIsb0VBQU87QUFDbkM7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLElBQUk7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMsNkRBQXVCO0FBQ25ELDRDQUE0QyxjQUFjO0FBQzFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzPzg5ZjYiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9jaGFuZ2VyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2RheXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvaG91cnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvc2VhcmNoLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaGVscGVyL3Rvb2xzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvYWN0aXZlQ2xvY2tUYWIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvY2l0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvZGF0YS93ZWVrRGF5cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy9maWxsaW5nV2lkZ2V0cy9kZXRhaWxzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2luZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy93YWxscGFwZXJBcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvd2VhdGhlckFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy93aWRnZXRzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9wYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy91bml2ZXJzYWwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9ub2Rlcy9kZXRhaWxzQnVpbGRpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9ub2Rlcy9mb3JlY2FzdERheXNCdWlsZGluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZpZXdzL25vZGVzL2ZvcmVjYXN0SG91cnNCdWlsZGluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZpZXdzL25vZGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9ub2Rlcy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9ub2Rlcy93cmFwcGVyQmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2RlZmF1bHQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxdmg7XG4gICAgcGFkZGluZy1yaWdodDogMXZoO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG50ZW1wbGF0ZXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uYm9keV9oaWRlIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuXG4ud3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxcbiAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNCksXG4gICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjQpKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuLmJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XG4gICAgYm9yZGVyOiAwLjV2aCBibGFjayBzb2xpZDtcbn1cblxuLmN1cnJlbnQtd2VhdGhlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmluZm8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWluLXdpZHRoOiAzM3ZoO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmNpdHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDF2aDtcbn1cblxuLnRpbWUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzdmg7XG59XG5cbi50ZW1wZXJhdHVyZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuLnRlbXBlcmF0dXJlLXdyYXBwZXI+c3BhbiB7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uc2VhcmNoLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgcGFkZGluZy10b3A6IDF2aDtcbn1cblxuLnNlYXJjaC1maWVsZD5pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAyMHZoO1xuICAgIGhlaWdodDogM3ZoO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMXZoO1xufVxuXG4uYnV0dG9uLXdyYXBwZXI+YnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmluZm8+Lmljb24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMHZoO1xufVxuXG4uZGV0YWlscyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMzN2aDtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAgZ2FwOiA1dmg7XG59XG5cbi5kZXRhaWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtYXgtY29udGVudDtcbiAgICBnYXA6IDF2aDtcbn1cblxuLmRldGFpbD4uaWNvbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDZ2aDtcbiAgICBoZWlnaHQ6IDZ2aDtcbn1cblxuLmRhdGEge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbn1cblxuLmZvcmVjYXN0LXdlYXRoZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxdmg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmJ1dHRvbnMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gICAgZ2FwOiAydmg7XG59XG5cbi5jaGFuZ2VyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxdmg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWluLWNvbnRlbnQpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDF2aDtcbn1cblxuLmFycm93LWxlZnQ6aG92ZXIsXG4uYXJyb3ctcmlnaHQ6aG92ZXIge1xuICAgIGZpbGw6ICMxZDg5ZTE7XG59XG5cbi5kb3duLFxuLnVwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogM3ZoO1xufVxuXG4udGFiIHtcbiAgICBoZWlnaHQ6IDF2aDtcbiAgICB3aWR0aDogMXZoO1xuICAgIGJvcmRlcjogMC4xdmggYmxhY2sgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYjpob3ZlciB7XG4gICAgYm9yZGVyOiAwLjN2aCByZ2IoMjksIDEzNywgMjI1KSBzb2xpZDtcbn1cblxuLmZvcmVjYXN0LWRheXMsXG4uZm9yZWNhc3QtaG91cnMge1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYW5lbC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLnBhbmVsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjN2aCk7XG4gICAgZ2FwOiAydmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxdmg7XG4gICAgcGFkZGluZzogMXZoO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIHdpZHRoOiAyM3ZoO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5mPi5uYW1lIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnRlbXBlcmF0dXJlX19mb3ItZGF5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubG93IHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5tYXgge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxdmg7XG59XG5cbi5mPi5pY29uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2cmVtO1xufVxuXG4uaD4udGVtcGVyYXR1cmUtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5hY3RpdmUge1xuICAgIGJvcmRlcjogMC41dmggIzFkODllMSBzb2xpZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDEvMS4wMDAwMDAxKSB7XG4gICAgLmN1cnJlbnQtd2VhdGhlciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDF2aDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHtcbiAgICAuY3VycmVudC13ZWF0aGVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWluLWNvbnRlbnQpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7OzZCQUV5QjtJQUN6QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQix5REFBNEM7SUFDNUMsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0MsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsNkNBQTZDO0lBQzdDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLDBDQUEwQztRQUMxQyxxQkFBcUI7UUFDckIsUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZDQUE2QztRQUM3Qyw4QkFBOEI7SUFDbEM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbnNwYW4ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcXG4gICAgcGFkZGluZy1yaWdodDogMXZoO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbnRlbXBsYXRlcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmJvZHlfaGlkZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LFxcbiAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNCksXFxuICAgICAgICAgICAgcmdiYShibGFjaywgMC40KSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9kZWZhdWx0LmpwZyk7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgYm9yZGVyOiAwLjV2aCBibGFjayBzb2xpZDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWluLXdpZHRoOiAzM3ZoO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmNpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDF2aDtcXG59XFxuXFxuLnRpbWUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLXdyYXBwZXI+c3BhbiB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLnNlYXJjaC1maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBhZGRpbmctdG9wOiAxdmg7XFxufVxcblxcbi5zZWFyY2gtZmllbGQ+aW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMjB2aDtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG59XFxuXFxuLmJ1dHRvbi13cmFwcGVyPmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLmluZm8+Lmljb24td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTB2aDtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMzN2aDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgZ2FwOiA1dmg7XFxufVxcblxcbi5kZXRhaWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICBnYXA6IDF2aDtcXG59XFxuXFxuLmRldGFpbD4uaWNvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2dmg7XFxuICAgIGhlaWdodDogNnZoO1xcbn1cXG5cXG4uZGF0YSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxufVxcblxcbi5mb3JlY2FzdC13ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uYnV0dG9ucy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgICBnYXA6IDJ2aDtcXG59XFxuXFxuLmNoYW5nZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWluLWNvbnRlbnQpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDF2aDtcXG59XFxuXFxuLmFycm93LWxlZnQ6aG92ZXIsXFxuLmFycm93LXJpZ2h0OmhvdmVyIHtcXG4gICAgZmlsbDogIzFkODllMTtcXG59XFxuXFxuLmRvd24sXFxuLnVwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzdmg7XFxufVxcblxcbi50YWIge1xcbiAgICBoZWlnaHQ6IDF2aDtcXG4gICAgd2lkdGg6IDF2aDtcXG4gICAgYm9yZGVyOiAwLjF2aCBibGFjayBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFiOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjN2aCByZ2IoMjksIDEzNywgMjI1KSBzb2xpZDtcXG59XFxuXFxuLmZvcmVjYXN0LWRheXMsXFxuLmZvcmVjYXN0LWhvdXJzIHtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYW5lbC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLnBhbmVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyM3ZoKTtcXG4gICAgZ2FwOiAydmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5mIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxdmg7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIHdpZHRoOiAyM3ZoO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uZj4ubmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmVfX2Zvci1kYXkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubG93IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWF4IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxdmg7XFxufVxcblxcbi5mPi5pY29uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbn1cXG5cXG4uaD4udGVtcGVyYXR1cmUtd3JhcHBlciB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyOiAwLjV2aCAjMWQ4OWUxIHNvbGlkO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMS8xLjAwMDAwMDEpIHtcXG4gICAgLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDF2aDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSB7XFxuICAgIC5jdXJyZW50LXdlYXRoZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWluLWNvbnRlbnQpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENsb2NrVGFicyB9IGZyb20gJy4uLy4uL21vZGVscy9hY3RpdmVDbG9ja1RhYic7XG5pbXBvcnQgeyBmaWxsSG91cnNGb3JlY2FzdCB9IGZyb20gJy4uLy4uL21vZGVscy9maWxsaW5nV2lkZ2V0cy9mb3JlY2FzdCc7XG5pbXBvcnQgKiBhcyBob3Vyc0pTT04gZnJvbSAnLi4vLi4vbW9kZWxzL0pTT04vaG91cnMuanNvbic7XG5cbmNvbnN0IGhvdXJzID0gaG91cnNKU09OLmRlZmF1bHQ7XG5cbmV4cG9ydCBjb25zdCBmb3JCdXR0b25Eb3QgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgICBmb3IgKGxldCBidXR0b24gb2YgYnV0dG9ucykge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uc1tpXSA9PT0gYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRm9yZWNhc3QoaSk7XG4gICAgICAgICAgICAgICAgICAgIChhd2FpdCBDbG9ja1RhYnMpLmFjdGl2YXRlKGkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIChhd2FpdCBDbG9ja1RhYnMpLmRlYWN0aXZhdGUoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgZm9yQXJyb3dVcCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXAnKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIChhd2FpdCBDbG9ja1RhYnMpLmFjdGl2YXRlRm9sbG93VGFiKCk7XG4gICAgICAgIGNvbnN0IGkgPSAoYXdhaXQgQ2xvY2tUYWJzKS5nZXRJbmRleEFjdGl2ZVRhYigpO1xuICAgICAgICBzZXRIb3Vyc0ZvcmVjYXN0KGkpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvckFycm93RG93biA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bicpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgKGF3YWl0IENsb2NrVGFicykuYWN0aXZhdGVQcmV2VGFiKCk7XG4gICAgICAgIGNvbnN0IGkgPSAoYXdhaXQgQ2xvY2tUYWJzKS5nZXRJbmRleEFjdGl2ZVRhYigpO1xuICAgICAgICBzZXRIb3Vyc0ZvcmVjYXN0KGkpO1xuICAgIH0pO1xufTtcblxuY29uc3Qgc2V0SG91cnNGb3JlY2FzdCA9IGFzeW5jIChpKSA9PiB7XG4gICAgY29uc3QgZkhvdXIgPSBob3Vyc1tpXS5ob3VycztcbiAgICBjb25zdCBsSG91ciA9IGZIb3VyICsgODtcbiAgICBmaWxsSG91cnNGb3JlY2FzdCgnTG9uZG9uJywgZkhvdXIsIGxIb3VyKTtcbn07XG4iLCJpbXBvcnQgeyBDaXR5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NpdHknO1xuaW1wb3J0IHsgZmlsbERheXNGb3JlY2FzdCB9IGZyb20gJy4uLy4uL21vZGVscy9maWxsaW5nV2lkZ2V0cy9mb3JlY2FzdCc7XG5pbXBvcnQgeyBTbW9vdGhWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vdmlld3MvYW5pbWF0aW9ucy91bml2ZXJzYWwnO1xuXG5leHBvcnQgY29uc3QgZm9yQnV0dG9uRGF5cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtZGF5cycpO1xuICAgIGNvbnN0IGNsaWNrID0gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFuZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZXInKTtcbiAgICAgICAgZGF5c0lzQWN0aXZlKCk7XG4gICAgICAgIGZpbGxEYXlzRm9yZWNhc3QoMywgKGF3YWl0IENpdHkpLmdldENpdHkoKSk7XG4gICAgICAgIFNtb290aFZpc2liaWxpdHkuY2xvc2UoY2hhbmdlciwgMSwgMCwgMjAwLCAnZm9yd2FyZHMnKTtcbiAgICB9KTtcbiAgICByZXR1cm4geyBjbGljayB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGRheXNJc0FjdGl2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtZGF5cycpO1xuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0LWhvdXJzJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufTtcbiIsImltcG9ydCB7IGZpbGxIb3Vyc0ZvcmVjYXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2ZvcmVjYXN0JztcbmltcG9ydCB7IFNtb290aFZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi92aWV3cy9hbmltYXRpb25zL3VuaXZlcnNhbCc7XG5cbmV4cG9ydCBjb25zdCBmb3JCdXR0b25Ib3VycyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtaG91cnMnKTtcbiAgICBjb25zdCBjbGljayA9IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2VyJyk7XG4gICAgICAgIGhvdXJzSXNBY3RpdmUoKTtcbiAgICAgICAgZmlsbEhvdXJzRm9yZWNhc3QoJ0xvbmRvbicsIDAsIDgpO1xuICAgICAgICBTbW9vdGhWaXNpYmlsaXR5Lm9wZW4oY2hhbmdlciwgMCwgMSwgMjAwLCAnZm9yd2FyZHMnKTtcbiAgICB9KTtcbiAgICByZXR1cm4geyBjbGljayB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGhvdXJzSXNBY3RpdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0LWhvdXJzJyk7XG4gICAgY29uc3QgZGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1kYXlzJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGRheXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59O1xuIiwiaW1wb3J0IHsgQ2l0eSB9IGZyb20gJy4uLy4uL21vZGVscy9jaXR5JztcbmltcG9ydCB7IHZpZXdXZWF0aGVyIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvbWFpbic7XG5pbXBvcnQgeyBkYXlzSXNBY3RpdmUgfSBmcm9tICcuL2RheXMnO1xuXG5leHBvcnQgY29uc3QgZm9yU2VhcmNoRmllbGQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZpZWxkPmlucHV0Jyk7XG4gICAgY29uc3Qgc2VhcmNoID0gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIChhd2FpdCBDaXR5KS5zZXRDaXR5KGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB2aWV3V2VhdGhlcigoYXdhaXQgQ2l0eSkuZ2V0Q2l0eSgpKTtcbiAgICAgICAgICAgICAgICBkYXlzSXNBY3RpdmUoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgc2VhcmNoIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGFzeW5jUXVlcnlTZWxlY3RvciA9IGFzeW5jIChub2RlLCBxdWVyeSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCAocXVlcnkgPyBub2RlLnF1ZXJ5U2VsZWN0b3IocXVlcnkpIDogbm9kZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBDYW5ub3QgZmluZCAke3F1ZXJ5ID8gYCR7cXVlcnl9IGluYCA6ICcnfSAke25vZGV9LmAsXG4gICAgICAgICAgICBlcnJvcixcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoaWxkcyA9IChub2RlKSA9PiB7XG4gICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cobm9kZSk7XG59O1xuIiwiaW1wb3J0IHsgQ2l0eSB9IGZyb20gJy4vbW9kZWxzL2NpdHknO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSAnLi9tb2RlbHMvbWFpbic7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuL3ZpZXdzL2FuaW1hdGlvbnMvcGFnZUxvYWRlcic7XG5pbXBvcnQgeyB2aWV3V2VhdGhlciB9IGZyb20gJy4vdmlld3Mvbm9kZXMvbWFpbic7XG5cbmltcG9ydCAnLi92aWV3cy9zdHlsZXMvbWFpbi5jc3MnO1xuXG5Mb2FkZXI7XG5cbnNldExpc3RlbmVycygpO1xubGV0IGNpdHkgPSAoYXdhaXQgQ2l0eSkuZ2V0Q2l0eSgpO1xudmlld1dlYXRoZXIoY2l0eSk7XG4iLCJleHBvcnQgY29uc3QgQ2xvY2tUYWJzID0gKGFzeW5jICgpID0+IHtcbiAgICBsZXQgaW5kZXhBY3RpdmVUYWIgPSAwO1xuICAgIGNvbnN0IGNsb2NrVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgICBjbG9ja1RhYnNbMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxZDg5ZTEnO1xuXG4gICAgY29uc3QgYWN0aXZhdGUgPSBhc3luYyAoaSkgPT4ge1xuICAgICAgICBjbG9ja1RhYnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxZDg5ZTEnO1xuICAgICAgICBzZXRJbmRleEFjdGl2ZVRhYihpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVhY3RpdmF0ZSA9IGFzeW5jIChpKSA9PiB7XG4gICAgICAgIGNsb2NrVGFic1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmZmZic7XG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGl2YXRlRm9sbG93VGFiID0gKCkgPT4ge1xuICAgICAgICBkZWFjdGl2YXRlKGluZGV4QWN0aXZlVGFiKTtcbiAgICAgICAgaW5jSW5kZXhBY3RpdmVUYWIoKTtcbiAgICAgICAgYWN0aXZhdGUoaW5kZXhBY3RpdmVUYWIpO1xuICAgIH07XG5cbiAgICBjb25zdCBhY3RpdmF0ZVByZXZUYWIgPSAoKSA9PiB7XG4gICAgICAgIGRlYWN0aXZhdGUoaW5kZXhBY3RpdmVUYWIpO1xuICAgICAgICBkZWNJbmRleEFjdGl2ZVRhYigpO1xuICAgICAgICBhY3RpdmF0ZShpbmRleEFjdGl2ZVRhYik7XG4gICAgfTtcblxuICAgIGNvbnN0IGluY0luZGV4QWN0aXZlVGFiID0gKCkgPT4ge1xuICAgICAgICBpbmRleEFjdGl2ZVRhYiArPSAxO1xuICAgICAgICBpZk1heCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWNJbmRleEFjdGl2ZVRhYiA9ICgpID0+IHtcbiAgICAgICAgaW5kZXhBY3RpdmVUYWIgLT0gMTtcbiAgICAgICAgaWZNaW4oKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0SW5kZXhBY3RpdmVUYWIgPSAodmFsKSA9PiB7XG4gICAgICAgIGluZGV4QWN0aXZlVGFiID0gdmFsO1xuICAgICAgICBpZk1heCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRJbmRleEFjdGl2ZVRhYiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZGV4QWN0aXZlVGFiO1xuICAgIH07XG5cbiAgICBjb25zdCBpZk1heCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4QWN0aXZlVGFiID49IGNsb2NrVGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGluZGV4QWN0aXZlVGFiID0gMDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBpZk1pbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4QWN0aXZlVGFiIDwgMCkge1xuICAgICAgICAgICAgaW5kZXhBY3RpdmVUYWIgPSBjbG9ja1RhYnMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRDbG9ja1RhYnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjbG9ja1RhYnM7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2YXRlLFxuICAgICAgICBkZWFjdGl2YXRlLFxuICAgICAgICBhY3RpdmF0ZUZvbGxvd1RhYixcbiAgICAgICAgYWN0aXZhdGVQcmV2VGFiLFxuICAgICAgICBzZXRJbmRleEFjdGl2ZVRhYixcbiAgICAgICAgZ2V0SW5kZXhBY3RpdmVUYWIsXG4gICAgICAgIGdldENsb2NrVGFicyxcbiAgICB9O1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBDaXR5ID0gKGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2l0eSA9ICdMb25kb24nO1xuICAgIGNvbnN0IHNldENpdHkgPSAoc3RyKSA9PiB7XG4gICAgICAgIGNpdHkgPSBzdHI7XG4gICAgfTtcbiAgICBjb25zdCBnZXRDaXR5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2l0eTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0Q2l0eSwgc2V0Q2l0eSB9O1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBDT05TVEFOVFMgPSAoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IEZPUkVDQVNUX0xPTkcgPSAzO1xuICAgIGNvbnN0IEhPVVJTX0lOX0RBWSA9IDI0O1xuICAgIHJldHVybiB7IEZPUkVDQVNUX0xPTkcsIEhPVVJTX0lOX0RBWSB9O1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCB3ZWVrZGF5ID0gW1xuICAgICdTdW5kYXknLFxuICAgICdNb25kYXknLFxuICAgICdUdWVzZGF5JyxcbiAgICAnV2VkbmVzZGF5JyxcbiAgICAnVGh1cnNkYXknLFxuICAgICdGcmlkYXknLFxuICAgICdTYXR1cmRheScsXG5dO1xuIiwiaW1wb3J0IHsgZ2V0Q3VycmVudFdlYXRoZXJGb3JDaXR5IH0gZnJvbSAnLi4vd2VhdGhlckFwaSc7XG5pbXBvcnQgeyBEZXRhaWxzIH0gZnJvbSAnLi4vd2lkZ2V0cyc7XG5cbmV4cG9ydCBjb25zdCBmaWxsV2VhdGhlckRldGFpbHMgPSBhc3luYyAoY2l0eSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlckZvckNpdHkoY2l0eSk7XG4gICAgICAgIChcbiAgICAgICAgICAgIGF3YWl0IERldGFpbHNcbiAgICAgICAgKS5mZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2N9IFxceEIwQ2A7XG4gICAgICAgIChhd2FpdCBEZXRhaWxzKS5odW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0gJWA7XG4gICAgICAgIChhd2FpdCBEZXRhaWxzKS53aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQud2luZF9rcGh9IGttL2hgO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IFNtb290aFZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi92aWV3cy9hbmltYXRpb25zL3VuaXZlcnNhbCc7XG5pbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgd2Vla2RheSB9IGZyb20gJy4uL2RhdGEvd2Vla0RheXMnO1xuaW1wb3J0IHsgZ2V0RGF5c0ZvcmVjYXN0V2VhdGhlckZvckNpdHkgfSBmcm9tICcuLi93ZWF0aGVyQXBpJztcbmltcG9ydCB7IGZvcmVjYXN0RGF5cywgZm9yZWNhc3RIb3VycyB9IGZyb20gJy4uL3dpZGdldHMnO1xuaW1wb3J0IHsgZ2V0SWNvbiB9IGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgeyBidWlsZGluZyBhcyBmb3JlY2FzdEhvdXJzQnVpbGRpbmcgfSBmcm9tICcuLi8uLi92aWV3cy9ub2Rlcy9mb3JlY2FzdEhvdXJzQnVpbGRpbmcnO1xuaW1wb3J0IHsgYnVpbGRpbmcgYXMgZm9yZWNhc3REYXlzQnVpbGRpbmcgfSBmcm9tICcuLi8uLi92aWV3cy9ub2Rlcy9mb3JlY2FzdERheXNCdWlsZGluZyc7XG5cbmV4cG9ydCBjb25zdCBmaWxsRGF5c0ZvcmVjYXN0ID0gYXN5bmMgKG9mRGF5cywgY2l0eSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGZvcmVjYXN0RGF5c0J1aWxkaW5nKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXlzRm9yZWNhc3RXZWF0aGVyRm9yQ2l0eShvZkRheXMsIGNpdHkpO1xuICAgICAgICBjb25zdCBkYXlzID0gKGF3YWl0IGZvcmVjYXN0RGF5cygpKS5hbGxEYXlzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChhd2FpdCBDT05TVEFOVFMpLkZPUkVDQVNUX0xPTkc7IGkrKykge1xuICAgICAgICAgICAgZGF5c1tpXS5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50ID0gYXdhaXQgZ2V0RGF5KFxuICAgICAgICAgICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkYXlzW2ldLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5tYXgnLFxuICAgICAgICAgICAgKS50ZXh0Q29udGVudCA9IGAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfY30gXFx4QjBDYDtcbiAgICAgICAgICAgIGRheXNbaV0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmxvdycsXG4gICAgICAgICAgICApLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9jfSBcXHhCMENgO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBnZXRJY29uKFxuICAgICAgICAgICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlV3JhcHBlciA9IGRheXNbaV0ucXVlcnlTZWxlY3RvcignLmljb24nKTtcbiAgICAgICAgICAgIGltYWdlV3JhcHBlci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgICAgICBTbW9vdGhWaXNpYmlsaXR5Lm9wZW4oaW1hZ2VXcmFwcGVyLCAwLCAxLCA0MDAsICdmb3J3YXJkcycpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG59O1xuXG5jb25zdCBnZXREYXkgPSBhc3luYyAocHJvbWlzZSkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwcm9taXNlKTtcbiAgICBjb25zdCBkYXlDb2RlID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBkYXkgPSB3ZWVrZGF5W2RheUNvZGVdO1xuICAgIHJldHVybiBkYXk7XG59O1xuXG5leHBvcnQgY29uc3QgZmlsbEhvdXJzRm9yZWNhc3QgPSBhc3luYyAoY2l0eSwgZkhvdXIsIGxIb3VyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yZWNhc3RIb3Vyc0J1aWxkaW5nKGZIb3VyLCBsSG91cik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXlzRm9yZWNhc3RXZWF0aGVyRm9yQ2l0eSgxLCBjaXR5KTtcbiAgICAgICAgY29uc3QgaG91cnMgPSAoYXdhaXQgZm9yZWNhc3RIb3VycygpKS5hbGxIb3VycztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaSArIGZIb3VyO1xuICAgICAgICAgICAgaG91cnNbaV0ucXVlcnlTZWxlY3RvcignLm5hbWUnKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2luZGV4XS50aW1lLnNwbGl0KCcgJylbMV07XG4gICAgICAgICAgICBob3Vyc1tpXS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcudGVtcGVyYXR1cmUtd3JhcHBlcicsXG4gICAgICAgICAgICApLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2luZGV4XS50ZW1wX2N9IFxceEIwQ2A7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGdldEljb24oXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2luZGV4XS5jb25kaXRpb24uaWNvbixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVdyYXBwZXIgPSBob3Vyc1tpXS5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xuICAgICAgICAgICAgaW1hZ2VXcmFwcGVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgICAgIFNtb290aFZpc2liaWxpdHkub3BlbihpbWFnZVdyYXBwZXIsIDAsIDEsIDQwMCwgJ2ZvcndhcmRzJyk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHMgfSBmcm9tICcuLi8uLi9oZWxwZXIvdG9vbHMnO1xuaW1wb3J0IHsgc2V0UmFuZG9tV2FsbHBhcGVyIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvd3JhcHBlckJhY2tncm91bmQnO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFdlYXRoZXJGb3JDaXR5IH0gZnJvbSAnLi4vd2VhdGhlckFwaSc7XG5pbXBvcnQgeyBJbmZvIH0gZnJvbSAnLi4vd2lkZ2V0cyc7XG5cbmV4cG9ydCBjb25zdCBmaWxsQ3VycmVudFdlYXRoZXJEYXRhID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXJGb3JDaXR5KGNpdHkpO1xuICAgICAgICBjb25zdCBkYXRlID0gYXdhaXQgZ2V0RGF0ZShkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkX2Vwb2NoKTtcbiAgICAgICAgY29uc3QgdGltZSA9IGF3YWl0IGdldFRpbWUoZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGdldEljb24oZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKTtcbiAgICAgICAgSW5mby5kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgSW5mby5jaXR5LnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICBJbmZvLmRhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgICAgICBJbmZvLnRpbWUudGV4dENvbnRlbnQgPSB0aW1lO1xuICAgICAgICBJbmZvLnRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50LnRlbXBfY30gXFx4QjBDYDtcbiAgICAgICAgcmVtb3ZlQ2hpbGRzKEluZm8uaWNvbik7XG4gICAgICAgIEluZm8uaWNvbi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIHNldFJhbmRvbVdhbGxwYXBlcihkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQucmVwbGFjZUFsbCgnICcsICdfJykpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgJ9Cb0L7QutCw0YbQuNGPINC90LUg0L3QsNC50LTQtdC90LAsINGD0LHQtdC00LjRgtC10YHRjCwg0YfRgtC+INC90LDQt9Cy0LDQvdC40LUg0LPQvtGA0L7QtNCwINC90LDQv9C40YHQsNC90L4g0L/RgNCw0LLQuNC70YzQvdC+JyxcbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SWNvbiA9IGFzeW5jIChwcm9taXNlKSA9PiB7XG4gICAgbGV0IHVybCA9IGF3YWl0IHByb21pc2U7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSB1cmw7XG4gICAgcmV0dXJuIGltYWdlO1xufTtcblxuY29uc3QgZ2V0RGF0ZSA9IGFzeW5jIChwcm9taXNlKSA9PiB7XG4gICAgY29uc3QgdXRjU2Vjb25kcyA9IGF3YWl0IHByb21pc2U7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBkYXRlLnNldFVUQ1NlY29uZHModXRjU2Vjb25kcyk7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywge1xuICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgeWVhcjogJzItZGlnaXQnLFxuICAgICAgICB0aW1lWm9uZTogJ0F1c3RyYWxpYS9TeWRuZXknLFxuICAgIH0pLmZvcm1hdChkYXRlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0VGltZSA9IGFzeW5jIChwcm9taXNlKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IGF3YWl0IHByb21pc2U7XG4gICAgY29uc3QgdGltZSA9IGF3YWl0IGZvcm1hdEFNUE0oZGF0ZS5zcGxpdCgnICcpWzFdKTtcbiAgICByZXR1cm4gdGltZTtcbn07XG5cbmNvbnN0IGZvcm1hdEFNUE0gPSBhc3luYyAoc3RyVGltZSkgPT4ge1xuICAgIGxldCB0aW1lID0gc3RyVGltZS5zcGxpdCgnOicpO1xuICAgIHZhciBob3VycyA9IHRpbWVbMF07XG4gICAgdmFyIG1pbnV0ZXMgPSB0aW1lWzFdO1xuICAgIHZhciBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcbiAgICBob3VycyA9IGhvdXJzICUgMTI7XG4gICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuICAgIG1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyAnMCcgKyBtaW51dGVzIDogbWludXRlcztcbiAgICB2YXIgcmVzdWx0ID0gaG91cnMgKyAnOicgKyBtaW51dGVzICsgJyAnICsgYW1wbTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7XG4gICAgZm9yQXJyb3dEb3duLFxuICAgIGZvckFycm93VXAsXG4gICAgZm9yQnV0dG9uRG90LFxufSBmcm9tICcuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvY2hhbmdlcic7XG5pbXBvcnQgeyBmb3JCdXR0b25EYXlzIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2RheXMnO1xuaW1wb3J0IHsgZm9yQnV0dG9uSG91cnMgfSBmcm9tICcuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvaG91cnMnO1xuaW1wb3J0IHsgZm9yU2VhcmNoRmllbGQgfSBmcm9tICcuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvc2VhcmNoJztcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVycyA9IGFzeW5jICgpID0+IHtcbiAgICBmb3JTZWFyY2hGaWVsZCgpLnNlYXJjaDtcbiAgICBmb3JCdXR0b25EYXlzKCkuY2xpY2s7XG4gICAgZm9yQnV0dG9uSG91cnMoKS5jbGljaztcbiAgICBmb3JCdXR0b25Eb3QoKTtcbiAgICBmb3JBcnJvd1VwKCk7XG4gICAgZm9yQXJyb3dEb3duKCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldFJhbmRvbVdhbGxwYXBlciA9IGFzeW5jIChwcm9taXNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWluV2lkdGggPSAxMDgwO1xuICAgICAgICBjb25zdCBtaW5IZWlnaHQgPSAxMDgwO1xuICAgICAgICBjb25zdCBvcHRpb24gPSBhd2FpdCBwcm9taXNlO1xuICAgICAgICBjb25zdCBhcGlLZXkgPSAnMzkwMDU5NzktNjhjMzU0MWRiMTBlNmE4YmE2MjljOThhNic7XG4gICAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL3BpeGFiYXkuY29tL2FwaS8/a2V5PSR7YXBpS2V5fSZxPSR7b3B0aW9ufSZtaW5fd2lkdGg9JHttaW5XaWR0aH0mbWluX2hlaWdodD0ke21pbkhlaWdodH0mY2F0ZWdvcnk9cGxhY2VzJmltYWdlX3R5cGU9cGhvdG8mcGVyX3BhZ2U9MjBgO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRXZWF0aGVyRm9yQ2l0eSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gJzYzNDkwMDJmYzdkNDQyNWJhODcxMzI1NDkyMzEwMDgnO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2NpdHl9YDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXlzRm9yZWNhc3RXZWF0aGVyRm9yQ2l0eSA9IGFzeW5jIChkYXlzLCBjaXR5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gJzYzNDkwMDJmYzdkNDQyNWJhODcxMzI1NDkyMzEwMDgnO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JmRheXM9JHtkYXlzfSZxPSR7Y2l0eX1gO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IGJ1aWxkaW5nIGFzIGRldGFpbHNCdWlsZGluZyB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2RldGFpbHNCdWlsZGluZyc7XG5cbmV4cG9ydCBjb25zdCBJbmZvID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uID4gc3BhbicpO1xuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eSA+IHNwYW4nKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUgPiBzcGFuJyk7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lID4gc3BhbicpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLXdyYXBwZXIgPiBzcGFuJyk7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLXdyYXBwZXInKTtcbiAgICByZXR1cm4geyBwcm90b3R5cGUsIGRlc2NyaXB0aW9uLCBjaXR5LCBkYXRlLCB0aW1lLCB0ZW1wZXJhdHVyZSwgaWNvbiB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IERldGFpbHMgPSAoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRldGFpbHNCdWlsZGluZygpO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlPi5kYXRhPi52YWx1ZScpO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Pi5kYXRhPi52YWx1ZScpO1xuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkPi5kYXRhPi52YWx1ZScpO1xuICAgIHJldHVybiB7IGZlZWxzTGlrZSwgaHVtaWRpdHksIHdpbmRTcGVlZCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGZvcmVjYXN0RGF5cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhbGxEYXlzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZCcpKTtcbiAgICByZXR1cm4geyBhbGxEYXlzIH07XG59O1xuXG5leHBvcnQgY29uc3QgZm9yZWNhc3RIb3VycyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhbGxIb3VycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmgnKSk7XG4gICAgcmV0dXJuIHsgYWxsSG91cnMgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChlLCB4MCwgeDEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBsZWZ0OiBgJHt4MH1gIH0sIHsgbGVmdDogYCR7eDF9YCB9XSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXIsXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHkgPSAoZSwgeTAsIHkxLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgdG9wOiBgJHt5MH1gIH0sIHsgdG9wOiBgJHt5MX1gIH1dLCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cixcbiAgICAgICAgICAgICAgICBmaWxsOiBmaWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTF9ZGVnKWAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTJ9ZGVnKWAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgcm90YXRlIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmQgPSAoZSwgY29sb3IxLCBjb2xvcjIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGJhY2tncm91bmQ6IGNvbG9yMSB9LCB7IGJhY2tncm91bmQ6IGNvbG9yMiB9XSwge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cixcbiAgICAgICAgICAgIGZpbGw6IGZpbGwsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gKGUsIG9wYWNpdHkxLCBvcGFjaXR5MiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgb3BhY2l0eTogb3BhY2l0eTEgfSwgeyBvcGFjaXR5OiBvcGFjaXR5MiB9XSwge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cixcbiAgICAgICAgICAgIGZpbGw6IGZpbGwsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjdXN0b20gPSAoZSwgZHVyLCBmaWxsID0gJ25vbmUnLCAuLi5rZXlGcmFtZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZSguLi5rZXlGcmFtZXMsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXIsXG4gICAgICAgICAgICBmaWxsOiBmaWxsLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtLFxuICAgICAgICBiYWNrZ3JvdW5kLFxuICAgICAgICBvcGFjaXR5LFxuICAgICAgICBjdXN0b20sXG4gICAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBTbW9vdGhWaXNpYmlsaXR5IH0gZnJvbSAnLi91bml2ZXJzYWwnO1xuXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKGFzeW5jICgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFNtb290aFZpc2liaWxpdHkub3Blbihkb2N1bWVudC5ib2R5LCAwLCAxLCAxMDAwLCAnZm9yd2FyZHMnKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG59KSgpO1xuIiwiaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBTbW9vdGhWaXNpYmlsaXR5ID0gKCgpID0+IHtcbiAgICBjb25zdCBjbG9zZSA9IChlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgIHJldHVybiBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkuZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBvcGVuID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICByZXR1cm4gQW5pbWF0aW9ucy5vcGFjaXR5KGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgb3BlbiwgY2xvc2UgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBnZXRUZW1wbGF0ZU5vZGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgKiBhcyBibG9ja3NKU09OIGZyb20gJy4uLy4uL21vZGVscy9KU09OL2RldGFpbHMuanNvbic7XG5pbXBvcnQgeyBhc3luY1F1ZXJ5U2VsZWN0b3IgfSBmcm9tICcuLi8uLi9oZWxwZXIvdG9vbHMnO1xuXG5leHBvcnQgY29uc3QgYnVpbGRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYmxvY2tzID0gYmxvY2tzSlNPTi5kZWZhdWx0O1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpO1xuICAgIGZvciAobGV0IGJsb2NrIG9mIGJsb2Nrcykge1xuICAgICAgICBjb25zdCBub2RlID0gYXdhaXQgY3JlYXRlQmxvY2tOb2RlKGJsb2NrKTtcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG59O1xuXG5jb25zdCBjcmVhdGVCbG9ja05vZGUgPSBhc3luYyAoYmxvY2spID0+IHtcbiAgICBjb25zdCBub2RlID0gYXdhaXQgZ2V0VGVtcGxhdGVOb2RlKCcuZGV0YWlscy1ibG9jaycpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gYGRldGFpbCAke2Jsb2NrLmNsYXNzfWA7XG4gICAgbm9kZS5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50ID0gYmxvY2submFtZTtcbiAgICBhcHBlbmRTdmcoYmxvY2ssIG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xufTtcblxuY29uc3QgYXBwZW5kU3ZnID0gYXN5bmMgKGJsb2NrLCBub2RlKSA9PiB7XG4gICAgYXN5bmNRdWVyeVNlbGVjdG9yKGRvY3VtZW50LCBgLiR7YmxvY2suY2xhc3N9YCkudGhlbigoaWNvbikgPT4ge1xuICAgICAgICBhc3luY1F1ZXJ5U2VsZWN0b3Iobm9kZSwgJy5pY29uLXdyYXBwZXInKS50aGVuKChub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHMgfSBmcm9tICcuLi8uLi9oZWxwZXIvdG9vbHMnO1xuaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZU5vZGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5cbmV4cG9ydCBjb25zdCBidWlsZGluZyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW5lbCcpO1xuICAgIHJlbW92ZUNoaWxkcyhwYW5lbCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXdhaXQgQ09OU1RBTlRTKS5GT1JFQ0FTVF9MT05HOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3cwdycpO1xuICAgICAgICBjb25zdCBkYXkgPSBhd2FpdCBnZXRUZW1wbGF0ZU5vZGUoJy5kYXknKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBhd2FpdCBnZXRUZW1wbGF0ZU5vZGUoJy50ZW1wZXJhdHVyZV9fZm9yLWRheScpO1xuICAgICAgICBkYXkuY2xhc3NOYW1lID0gYGYgZCBkYXkke2l9IGJhY2tncm91bmRgO1xuICAgICAgICBkYXkucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLXdyYXBwZXInKS5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG4gICAgICAgIHBhbmVsLmFwcGVuZENoaWxkKGRheSk7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IHJlbW92ZUNoaWxkcyB9IGZyb20gJy4uLy4uL2hlbHBlci90b29scyc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZU5vZGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5cbmV4cG9ydCBjb25zdCBidWlsZGluZyA9IGFzeW5jIChmSG91ciwgbEhvdXIpID0+IHtcbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW5lbCcpO1xuICAgIHJlbW92ZUNoaWxkcyhwYW5lbCk7XG4gICAgZm9yIChsZXQgaSA9IGZIb3VyOyBpIDwgbEhvdXI7IGkrKykge1xuICAgICAgICBjb25zdCBob3VyID0gYXdhaXQgZ2V0VGVtcGxhdGVOb2RlKCcuaG91cicpO1xuICAgICAgICBob3VyLmNsYXNzTmFtZSA9IGBmIGggaG91ciR7aX0gYmFja2dyb3VuZGA7XG4gICAgICAgIHBhbmVsLmFwcGVuZENoaWxkKGhvdXIpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBmaWxsV2VhdGhlckRldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmlsbGluZ1dpZGdldHMvZGV0YWlscyc7XG5pbXBvcnQgeyBmaWxsRGF5c0ZvcmVjYXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2ZvcmVjYXN0JztcbmltcG9ydCB7IGZpbGxDdXJyZW50V2VhdGhlckRhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmlsbGluZ1dpZGdldHMvaW5mbyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3V2VhdGhlciA9IGFzeW5jIChjaXR5KSA9PiB7XG4gICAgZmlsbEN1cnJlbnRXZWF0aGVyRGF0YShjaXR5KTtcbiAgICBmaWxsV2VhdGhlckRldGFpbHMoY2l0eSk7XG4gICAgZmlsbERheXNGb3JlY2FzdCgzLCBjaXR5KTtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0VGVtcGxhdGVOb2RlID0gYXN5bmMgKG5hbWUpID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSkuY2xvbmVOb2RlKHRydWUpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn07XG4iLCJpbXBvcnQgeyBnZXRJY29uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2luZm8nO1xuaW1wb3J0IHsgZ2V0UmFuZG9tV2FsbHBhcGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3dhbGxwYXBlckFwaSc7XG5cbmV4cG9ydCBjb25zdCBzZXRSYW5kb21XYWxscGFwZXIgPSBhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFJhbmRvbVdhbGxwYXBlcihvcHRpb24pO1xuICAgICAgICBjb25zdCBoaXRzID0gZGF0YS5oaXRzO1xuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhpdHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBnZXRJY29uKGRhdGEuaGl0c1tpbmRleF0ubGFyZ2VJbWFnZVVSTCk7XG4gICAgICAgIHRlc3RJbWFnZShpbWFnZS5zcmMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICB9XG59O1xuXG5cbmZ1bmN0aW9uIHRlc3RJbWFnZShVUkwpIHtcbiAgICB2YXIgdGVzdGVyID0gbmV3IEltYWdlKCk7XG4gICAgdGVzdGVyLm9ubG9hZCA9IGltYWdlRm91bmQoVVJMKTtcbiAgICB0ZXN0ZXIub25lcnJvciA9IGltYWdlTm90Rm91bmQ7XG4gICAgdGVzdGVyLnNyYyA9IFVSTDtcbn1cblxuZnVuY3Rpb24gaW1hZ2VGb3VuZChVUkwpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbiAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7VVJMfScpYDtcbn1cblxuZnVuY3Rpb24gaW1hZ2VOb3RGb3VuZCgpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbiAgICBjb25zdCB3YWxscGFwZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB3YWxscGFwZXIuc3JjID0gcmVxdWlyZShgLi4vaW1hZ2VzL2RlZmF1bHQuanBnYCk7XG4gICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3dhbGxwYXBlci5zcmN9JylgO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
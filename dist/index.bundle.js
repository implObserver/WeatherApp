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



let url;

const setRandomWallpaper = async (option) => {
    try {
        const data = await (0,_models_wallpaperApi__WEBPACK_IMPORTED_MODULE_1__.getRandomWallpaper)(option);
        const hits = data.hits;
        const index = Math.floor(Math.random() * hits.length);
        const image = await (0,_models_fillingWidgets_info__WEBPACK_IMPORTED_MODULE_0__.getIcon)(data.hits[index].largeImageURL);
        url = image.src;
        testImage(url);
    } catch (error) {
        console.log('Error:', error);
    }
};


const testImage = async (URL) => {
    var tester = new Image();
    tester.onload = imageFound;
    tester.onerror = imageNotFound;
    tester.src = URL;
}

const imageFound = async () => {
    setWallpaper();
}

const imageNotFound = async () => {
    setDefaultWallpaper();
}

const setDefaultWallpaper = async () => {
    const wrapper = document.querySelector('.wrapper');
    const wallpaper = new Image();
    wallpaper.src = __webpack_require__(/*! ../images/default.jpg */ "./src/views/images/default.jpg");
    wrapper.style.backgroundImage = `url('${wallpaper.src}')`;
}

const setWallpaper = async () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.backgroundImage = `url('${url}')`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyw0SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixtSEFBbUgsSUFBSSxJQUFJLElBQUksa0JBQWtCO0FBQ2pKLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw4RkFBOEYsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sbUdBQW1HLElB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MkIsd0VBQWtCO0FBQzdDO0FBQ0E7QUFDQSw0QkFBNEIsb0VBQU87QUFDbkM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZEQUF1QjtBQUNuRCw0Q0FBNEMsY0FBYztBQUMxRDs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLElBQUk7QUFDaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3M/ODlmNiIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2NoYW5nZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZGF5cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9ob3Vycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9oZWxwZXIvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy9hY3RpdmVDbG9ja1RhYi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy9jaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kZWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy9kYXRhL3dlZWtEYXlzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvZmlsbGluZ1dpZGdldHMvZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvZmlsbGluZ1dpZGdldHMvaW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy9tYWluLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kZWxzL3dhbGxwYXBlckFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy93ZWF0aGVyQXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kZWxzL3dpZGdldHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9hbmltYXRpb25zL3BhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9hbmltYXRpb25zL3VuaXZlcnNhbC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZpZXdzL25vZGVzL2RldGFpbHNCdWlsZGluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZpZXdzL25vZGVzL2ZvcmVjYXN0RGF5c0J1aWxkaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmlld3Mvbm9kZXMvZm9yZWNhc3RIb3Vyc0J1aWxkaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmlld3Mvbm9kZXMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZpZXdzL25vZGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZpZXdzL25vZGVzL3dyYXBwZXJCYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZGVmYXVsdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gICAgZm9udC1zaXplOiAydmg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbnRlbXBsYXRlcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5ib2R5X2hpZGUge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbmJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LFxuICAgICAgICAgICAgcmdiYShibGFjaywgMC40KSxcbiAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNCkpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcbiAgICBib3JkZXI6IDAuNXZoIGJsYWNrIHNvbGlkO1xufVxuXG4uY3VycmVudC13ZWF0aGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4uaW5mbyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtaW4td2lkdGg6IDMzdmg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uY2l0eSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xufVxuXG4udGltZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDN2aDtcbn1cblxuLnRlbXBlcmF0dXJlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4udGVtcGVyYXR1cmUtd3JhcHBlcj5zcGFuIHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5zZWFyY2gtZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBwYWRkaW5nLXRvcDogMXZoO1xufVxuXG4uc2VhcmNoLWZpZWxkPmlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDIwdmg7XG4gICAgaGVpZ2h0OiAzdmg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XG59XG5cbi5idXR0b24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxdmg7XG59XG5cbi5idXR0b24td3JhcHBlcj5idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uaW5mbz4uaWNvbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwdmg7XG59XG5cbi5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAzM3ZoO1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBnYXA6IDV2aDtcbn1cblxuLmRldGFpbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1heC1jb250ZW50O1xuICAgIGdhcDogMXZoO1xufVxuXG4uZGV0YWlsPi5pY29uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNnZoO1xuICAgIGhlaWdodDogNnZoO1xufVxuXG4uZGF0YSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xufVxuXG4uZm9yZWNhc3Qtd2VhdGhlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDF2aDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uYnV0dG9ucy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcbiAgICBnYXA6IDJ2aDtcbn1cblxuLmNoYW5nZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDF2aDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtaW4tY29udGVudCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcGFkZGluZzogMXZoO1xufVxuXG4uYXJyb3ctbGVmdDpob3Zlcixcbi5hcnJvdy1yaWdodDpob3ZlciB7XG4gICAgZmlsbDogIzFkODllMTtcbn1cblxuLmRvd24sXG4udXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAzdmg7XG59XG5cbi50YWIge1xuICAgIGhlaWdodDogMXZoO1xuICAgIHdpZHRoOiAxdmg7XG4gICAgYm9yZGVyOiAwLjF2aCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGFiOmhvdmVyIHtcbiAgICBib3JkZXI6IDAuM3ZoIHJnYigyOSwgMTM3LCAyMjUpIHNvbGlkO1xufVxuXG4uZm9yZWNhc3QtZGF5cyxcbi5mb3JlY2FzdC1ob3VycyB7XG4gICAgcGFkZGluZzogMXZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhbmVsLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4ucGFuZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyM3ZoKTtcbiAgICBnYXA6IDJ2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uZiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDF2aDtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgd2lkdGg6IDIzdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmY+Lm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4udGVtcGVyYXR1cmVfX2Zvci1kYXkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5sb3cge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm1heCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDF2aDtcbn1cblxuLmY+Lmljb24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDZyZW07XG59XG5cbi5oPi50ZW1wZXJhdHVyZS13cmFwcGVyIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYm9yZGVyOiAwLjV2aCAjMWQ4OWUxIHNvbGlkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMS8xLjAwMDAwMDEpIHtcbiAgICAuY3VycmVudC13ZWF0aGVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWluLWNvbnRlbnQpO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMXZoO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEvMSkge1xuICAgIC5jdXJyZW50LXdlYXRoZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjs7NkJBRXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHlEQUE0QztJQUM1QyxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixtQ0FBbUM7SUFDbkMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUiw2Q0FBNkM7SUFDN0MsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBOztJQUVJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJO1FBQ0ksMENBQTBDO1FBQzFDLHFCQUFxQjtRQUNyQixRQUFRO0lBQ1o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNkNBQTZDO1FBQzdDLDhCQUE4QjtJQUNsQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuc3BhbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMXZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxudGVtcGxhdGVzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYm9keV9oaWRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsXFxuICAgICAgICAgICAgcmdiYShibGFjaywgMC40KSxcXG4gICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjQpKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2RlZmF1bHQuanBnKTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBib3JkZXI6IDAuNXZoIGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtaW4td2lkdGg6IDMzdmg7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uY2l0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4udGltZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzdmg7XFxufVxcblxcbi50ZW1wZXJhdHVyZS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtd3JhcHBlcj5zcGFuIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uc2VhcmNoLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgcGFkZGluZy10b3A6IDF2aDtcXG59XFxuXFxuLnNlYXJjaC1maWVsZD5pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAyMHZoO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG59XFxuXFxuLmJ1dHRvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXZoO1xcbn1cXG5cXG4uYnV0dG9uLXdyYXBwZXI+YnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4uaW5mbz4uaWNvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAzM3ZoO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBnYXA6IDV2aDtcXG59XFxuXFxuLmRldGFpbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIGdhcDogMXZoO1xcbn1cXG5cXG4uZGV0YWlsPi5pY29uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDZ2aDtcXG4gICAgaGVpZ2h0OiA2dmg7XFxufVxcblxcbi5kYXRhIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG59XFxuXFxuLmZvcmVjYXN0LXdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5idXR0b25zLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICAgIGdhcDogMnZoO1xcbn1cXG5cXG4uY2hhbmdlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtaW4tY29udGVudCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMXZoO1xcbn1cXG5cXG4uYXJyb3ctbGVmdDpob3ZlcixcXG4uYXJyb3ctcmlnaHQ6aG92ZXIge1xcbiAgICBmaWxsOiAjMWQ4OWUxO1xcbn1cXG5cXG4uZG93bixcXG4udXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDN2aDtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGhlaWdodDogMXZoO1xcbiAgICB3aWR0aDogMXZoO1xcbiAgICBib3JkZXI6IDAuMXZoIGJsYWNrIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgICBib3JkZXI6IDAuM3ZoIHJnYigyOSwgMTM3LCAyMjUpIHNvbGlkO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5cyxcXG4uZm9yZWNhc3QtaG91cnMge1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhbmVsLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ucGFuZWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDIzdmgpO1xcbiAgICBnYXA6IDJ2aDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgd2lkdGg6IDIzdmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5mPi5uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZV9fZm9yLWRheSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5sb3cge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5tYXgge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDF2aDtcXG59XFxuXFxuLmY+Lmljb24td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDZyZW07XFxufVxcblxcbi5oPi50ZW1wZXJhdHVyZS13cmFwcGVyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBib3JkZXI6IDAuNXZoICMxZDg5ZTEgc29saWQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLzEuMDAwMDAwMSkge1xcbiAgICAuY3VycmVudC13ZWF0aGVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMXZoO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHtcXG4gICAgLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ2xvY2tUYWJzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FjdGl2ZUNsb2NrVGFiJztcbmltcG9ydCB7IGZpbGxIb3Vyc0ZvcmVjYXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2ZvcmVjYXN0JztcbmltcG9ydCAqIGFzIGhvdXJzSlNPTiBmcm9tICcuLi8uLi9tb2RlbHMvSlNPTi9ob3Vycy5qc29uJztcblxuY29uc3QgaG91cnMgPSBob3Vyc0pTT04uZGVmYXVsdDtcblxuZXhwb3J0IGNvbnN0IGZvckJ1dHRvbkRvdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICAgIGZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChidXR0b25zW2ldID09PSBidXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SG91cnNGb3JlY2FzdChpKTtcbiAgICAgICAgICAgICAgICAgICAgKGF3YWl0IENsb2NrVGFicykuYWN0aXZhdGUoaSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKGF3YWl0IENsb2NrVGFicykuZGVhY3RpdmF0ZShpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmb3JBcnJvd1VwID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cCcpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgKGF3YWl0IENsb2NrVGFicykuYWN0aXZhdGVGb2xsb3dUYWIoKTtcbiAgICAgICAgY29uc3QgaSA9IChhd2FpdCBDbG9ja1RhYnMpLmdldEluZGV4QWN0aXZlVGFiKCk7XG4gICAgICAgIHNldEhvdXJzRm9yZWNhc3QoaSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9yQXJyb3dEb3duID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3duJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAoYXdhaXQgQ2xvY2tUYWJzKS5hY3RpdmF0ZVByZXZUYWIoKTtcbiAgICAgICAgY29uc3QgaSA9IChhd2FpdCBDbG9ja1RhYnMpLmdldEluZGV4QWN0aXZlVGFiKCk7XG4gICAgICAgIHNldEhvdXJzRm9yZWNhc3QoaSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBzZXRIb3Vyc0ZvcmVjYXN0ID0gYXN5bmMgKGkpID0+IHtcbiAgICBjb25zdCBmSG91ciA9IGhvdXJzW2ldLmhvdXJzO1xuICAgIGNvbnN0IGxIb3VyID0gZkhvdXIgKyA4O1xuICAgIGZpbGxIb3Vyc0ZvcmVjYXN0KCdMb25kb24nLCBmSG91ciwgbEhvdXIpO1xufTtcbiIsImltcG9ydCB7IENpdHkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2l0eSc7XG5pbXBvcnQgeyBmaWxsRGF5c0ZvcmVjYXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2ZvcmVjYXN0JztcbmltcG9ydCB7IFNtb290aFZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi92aWV3cy9hbmltYXRpb25zL3VuaXZlcnNhbCc7XG5cbmV4cG9ydCBjb25zdCBmb3JCdXR0b25EYXlzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1kYXlzJyk7XG4gICAgY29uc3QgY2xpY2sgPSBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlcicpO1xuICAgICAgICBkYXlzSXNBY3RpdmUoKTtcbiAgICAgICAgZmlsbERheXNGb3JlY2FzdCgzLCAoYXdhaXQgQ2l0eSkuZ2V0Q2l0eSgpKTtcbiAgICAgICAgU21vb3RoVmlzaWJpbGl0eS5jbG9zZShjaGFuZ2VyLCAxLCAwLCAyMDAsICdmb3J3YXJkcycpO1xuICAgIH0pO1xuICAgIHJldHVybiB7IGNsaWNrIH07XG59O1xuXG5leHBvcnQgY29uc3QgZGF5c0lzQWN0aXZlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1kYXlzJyk7XG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtaG91cnMnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgaG91cnMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59O1xuIiwiaW1wb3J0IHsgZmlsbEhvdXJzRm9yZWNhc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmlsbGluZ1dpZGdldHMvZm9yZWNhc3QnO1xuaW1wb3J0IHsgU21vb3RoVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3ZpZXdzL2FuaW1hdGlvbnMvdW5pdmVyc2FsJztcblxuZXhwb3J0IGNvbnN0IGZvckJ1dHRvbkhvdXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1ob3VycycpO1xuICAgIGNvbnN0IGNsaWNrID0gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFuZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZXInKTtcbiAgICAgICAgaG91cnNJc0FjdGl2ZSgpO1xuICAgICAgICBmaWxsSG91cnNGb3JlY2FzdCgnTG9uZG9uJywgMCwgOCk7XG4gICAgICAgIFNtb290aFZpc2liaWxpdHkub3BlbihjaGFuZ2VyLCAwLCAxLCAyMDAsICdmb3J3YXJkcycpO1xuICAgIH0pO1xuICAgIHJldHVybiB7IGNsaWNrIH07XG59O1xuXG5leHBvcnQgY29uc3QgaG91cnNJc0FjdGl2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtaG91cnMnKTtcbiAgICBjb25zdCBkYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0LWRheXMnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZGF5cy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn07XG4iLCJpbXBvcnQgeyBDaXR5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NpdHknO1xuaW1wb3J0IHsgdmlld1dlYXRoZXIgfSBmcm9tICcuLi8uLi92aWV3cy9ub2Rlcy9tYWluJztcbmltcG9ydCB7IGRheXNJc0FjdGl2ZSB9IGZyb20gJy4vZGF5cyc7XG5cbmV4cG9ydCBjb25zdCBmb3JTZWFyY2hGaWVsZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZmllbGQ+aW5wdXQnKTtcbiAgICBjb25zdCBzZWFyY2ggPSBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgKGF3YWl0IENpdHkpLnNldENpdHkoaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHZpZXdXZWF0aGVyKChhd2FpdCBDaXR5KS5nZXRDaXR5KCkpO1xuICAgICAgICAgICAgICAgIGRheXNJc0FjdGl2ZSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4geyBzZWFyY2ggfTtcbn07XG4iLCJleHBvcnQgY29uc3QgYXN5bmNRdWVyeVNlbGVjdG9yID0gYXN5bmMgKG5vZGUsIHF1ZXJ5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IChxdWVyeSA/IG5vZGUucXVlcnlTZWxlY3RvcihxdWVyeSkgOiBub2RlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgYENhbm5vdCBmaW5kICR7cXVlcnkgPyBgJHtxdWVyeX0gaW5gIDogJyd9ICR7bm9kZX0uYCxcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hpbGRzID0gKG5vZGUpID0+IHtcbiAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBDaXR5IH0gZnJvbSAnLi9tb2RlbHMvY2l0eSc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tICcuL21vZGVscy9tYWluJztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4vdmlld3MvYW5pbWF0aW9ucy9wYWdlTG9hZGVyJztcbmltcG9ydCB7IHZpZXdXZWF0aGVyIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9tYWluJztcblxuaW1wb3J0ICcuL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyc7XG5cbkxvYWRlcjtcblxuc2V0TGlzdGVuZXJzKCk7XG5sZXQgY2l0eSA9IChhd2FpdCBDaXR5KS5nZXRDaXR5KCk7XG52aWV3V2VhdGhlcihjaXR5KTtcbiIsImV4cG9ydCBjb25zdCBDbG9ja1RhYnMgPSAoYXN5bmMgKCkgPT4ge1xuICAgIGxldCBpbmRleEFjdGl2ZVRhYiA9IDA7XG4gICAgY29uc3QgY2xvY2tUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICAgIGNsb2NrVGFic1swXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzFkODllMSc7XG5cbiAgICBjb25zdCBhY3RpdmF0ZSA9IGFzeW5jIChpKSA9PiB7XG4gICAgICAgIGNsb2NrVGFic1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzFkODllMSc7XG4gICAgICAgIHNldEluZGV4QWN0aXZlVGFiKGkpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWFjdGl2YXRlID0gYXN5bmMgKGkpID0+IHtcbiAgICAgICAgY2xvY2tUYWJzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmZmJztcbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aXZhdGVGb2xsb3dUYWIgPSAoKSA9PiB7XG4gICAgICAgIGRlYWN0aXZhdGUoaW5kZXhBY3RpdmVUYWIpO1xuICAgICAgICBpbmNJbmRleEFjdGl2ZVRhYigpO1xuICAgICAgICBhY3RpdmF0ZShpbmRleEFjdGl2ZVRhYik7XG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGl2YXRlUHJldlRhYiA9ICgpID0+IHtcbiAgICAgICAgZGVhY3RpdmF0ZShpbmRleEFjdGl2ZVRhYik7XG4gICAgICAgIGRlY0luZGV4QWN0aXZlVGFiKCk7XG4gICAgICAgIGFjdGl2YXRlKGluZGV4QWN0aXZlVGFiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5jSW5kZXhBY3RpdmVUYWIgPSAoKSA9PiB7XG4gICAgICAgIGluZGV4QWN0aXZlVGFiICs9IDE7XG4gICAgICAgIGlmTWF4KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlY0luZGV4QWN0aXZlVGFiID0gKCkgPT4ge1xuICAgICAgICBpbmRleEFjdGl2ZVRhYiAtPSAxO1xuICAgICAgICBpZk1pbigpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRJbmRleEFjdGl2ZVRhYiA9ICh2YWwpID0+IHtcbiAgICAgICAgaW5kZXhBY3RpdmVUYWIgPSB2YWw7XG4gICAgICAgIGlmTWF4KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEluZGV4QWN0aXZlVGFiID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5kZXhBY3RpdmVUYWI7XG4gICAgfTtcblxuICAgIGNvbnN0IGlmTWF4ID0gKCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXhBY3RpdmVUYWIgPj0gY2xvY2tUYWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgaW5kZXhBY3RpdmVUYWIgPSAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGlmTWluID0gKCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXhBY3RpdmVUYWIgPCAwKSB7XG4gICAgICAgICAgICBpbmRleEFjdGl2ZVRhYiA9IGNsb2NrVGFicy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENsb2NrVGFicyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNsb2NrVGFicztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZhdGUsXG4gICAgICAgIGRlYWN0aXZhdGUsXG4gICAgICAgIGFjdGl2YXRlRm9sbG93VGFiLFxuICAgICAgICBhY3RpdmF0ZVByZXZUYWIsXG4gICAgICAgIHNldEluZGV4QWN0aXZlVGFiLFxuICAgICAgICBnZXRJbmRleEFjdGl2ZVRhYixcbiAgICAgICAgZ2V0Q2xvY2tUYWJzLFxuICAgIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IENpdHkgPSAoYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjaXR5ID0gJ0xvbmRvbic7XG4gICAgY29uc3Qgc2V0Q2l0eSA9IChzdHIpID0+IHtcbiAgICAgICAgY2l0eSA9IHN0cjtcbiAgICB9O1xuICAgIGNvbnN0IGdldENpdHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjaXR5O1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRDaXR5LCBzZXRDaXR5IH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IENPTlNUQU5UUyA9IChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgRk9SRUNBU1RfTE9ORyA9IDM7XG4gICAgY29uc3QgSE9VUlNfSU5fREFZID0gMjQ7XG4gICAgcmV0dXJuIHsgRk9SRUNBU1RfTE9ORywgSE9VUlNfSU5fREFZIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IHdlZWtkYXkgPSBbXG4gICAgJ1N1bmRheScsXG4gICAgJ01vbmRheScsXG4gICAgJ1R1ZXNkYXknLFxuICAgICdXZWRuZXNkYXknLFxuICAgICdUaHVyc2RheScsXG4gICAgJ0ZyaWRheScsXG4gICAgJ1NhdHVyZGF5Jyxcbl07XG4iLCJpbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlckZvckNpdHkgfSBmcm9tICcuLi93ZWF0aGVyQXBpJztcbmltcG9ydCB7IERldGFpbHMgfSBmcm9tICcuLi93aWRnZXRzJztcblxuZXhwb3J0IGNvbnN0IGZpbGxXZWF0aGVyRGV0YWlscyA9IGFzeW5jIChjaXR5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEN1cnJlbnRXZWF0aGVyRm9yQ2l0eShjaXR5KTtcbiAgICAgICAgKFxuICAgICAgICAgICAgYXdhaXQgRGV0YWlsc1xuICAgICAgICApLmZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5mZWVsc2xpa2VfY30gXFx4QjBDYDtcbiAgICAgICAgKGF3YWl0IERldGFpbHMpLmh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSAlYDtcbiAgICAgICAgKGF3YWl0IERldGFpbHMpLndpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC53aW5kX2twaH0ga20vaGA7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgU21vb3RoVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3ZpZXdzL2FuaW1hdGlvbnMvdW5pdmVyc2FsJztcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB3ZWVrZGF5IH0gZnJvbSAnLi4vZGF0YS93ZWVrRGF5cyc7XG5pbXBvcnQgeyBnZXREYXlzRm9yZWNhc3RXZWF0aGVyRm9yQ2l0eSB9IGZyb20gJy4uL3dlYXRoZXJBcGknO1xuaW1wb3J0IHsgZm9yZWNhc3REYXlzLCBmb3JlY2FzdEhvdXJzIH0gZnJvbSAnLi4vd2lkZ2V0cyc7XG5pbXBvcnQgeyBnZXRJY29uIH0gZnJvbSAnLi9pbmZvJztcbmltcG9ydCB7IGJ1aWxkaW5nIGFzIGZvcmVjYXN0SG91cnNCdWlsZGluZyB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL2ZvcmVjYXN0SG91cnNCdWlsZGluZyc7XG5pbXBvcnQgeyBidWlsZGluZyBhcyBmb3JlY2FzdERheXNCdWlsZGluZyB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL2ZvcmVjYXN0RGF5c0J1aWxkaW5nJztcblxuZXhwb3J0IGNvbnN0IGZpbGxEYXlzRm9yZWNhc3QgPSBhc3luYyAob2ZEYXlzLCBjaXR5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZm9yZWNhc3REYXlzQnVpbGRpbmcoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERheXNGb3JlY2FzdFdlYXRoZXJGb3JDaXR5KG9mRGF5cywgY2l0eSk7XG4gICAgICAgIGNvbnN0IGRheXMgPSAoYXdhaXQgZm9yZWNhc3REYXlzKCkpLmFsbERheXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGF3YWl0IENPTlNUQU5UUykuRk9SRUNBU1RfTE9ORzsgaSsrKSB7XG4gICAgICAgICAgICBkYXlzW2ldLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudGV4dENvbnRlbnQgPSBhd2FpdCBnZXREYXkoXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRheXNbaV0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLm1heCcsXG4gICAgICAgICAgICApLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jfSBcXHhCMENgO1xuICAgICAgICAgICAgZGF5c1tpXS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcubG93JyxcbiAgICAgICAgICAgICkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2N9IFxceEIwQ2A7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGdldEljb24oXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VXcmFwcGVyID0gZGF5c1tpXS5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xuICAgICAgICAgICAgaW1hZ2VXcmFwcGVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgICAgIFNtb290aFZpc2liaWxpdHkub3BlbihpbWFnZVdyYXBwZXIsIDAsIDEsIDQwMCwgJ2ZvcndhcmRzJyk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbn07XG5cbmNvbnN0IGdldERheSA9IGFzeW5jIChwcm9taXNlKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHByb21pc2UpO1xuICAgIGNvbnN0IGRheUNvZGUgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGRheSA9IHdlZWtkYXlbZGF5Q29kZV07XG4gICAgcmV0dXJuIGRheTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWxsSG91cnNGb3JlY2FzdCA9IGFzeW5jIChjaXR5LCBmSG91ciwgbEhvdXIpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBmb3JlY2FzdEhvdXJzQnVpbGRpbmcoZkhvdXIsIGxIb3VyKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERheXNGb3JlY2FzdFdlYXRoZXJGb3JDaXR5KDEsIGNpdHkpO1xuICAgICAgICBjb25zdCBob3VycyA9IChhd2FpdCBmb3JlY2FzdEhvdXJzKCkpLmFsbEhvdXJzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpICsgZkhvdXI7XG4gICAgICAgICAgICBob3Vyc1tpXS5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaW5kZXhdLnRpbWUuc3BsaXQoJyAnKVsxXTtcbiAgICAgICAgICAgIGhvdXJzW2ldLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy50ZW1wZXJhdHVyZS13cmFwcGVyJyxcbiAgICAgICAgICAgICkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaW5kZXhdLnRlbXBfY30gXFx4QjBDYDtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgZ2V0SWNvbihcbiAgICAgICAgICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaW5kZXhdLmNvbmRpdGlvbi5pY29uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlV3JhcHBlciA9IGhvdXJzW2ldLnF1ZXJ5U2VsZWN0b3IoJy5pY29uJyk7XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICAgICAgU21vb3RoVmlzaWJpbGl0eS5vcGVuKGltYWdlV3JhcHBlciwgMCwgMSwgNDAwLCAnZm9yd2FyZHMnKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IHJlbW92ZUNoaWxkcyB9IGZyb20gJy4uLy4uL2hlbHBlci90b29scyc7XG5pbXBvcnQgeyBzZXRSYW5kb21XYWxscGFwZXIgfSBmcm9tICcuLi8uLi92aWV3cy9ub2Rlcy93cmFwcGVyQmFja2dyb3VuZCc7XG5pbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlckZvckNpdHkgfSBmcm9tICcuLi93ZWF0aGVyQXBpJztcbmltcG9ydCB7IEluZm8gfSBmcm9tICcuLi93aWRnZXRzJztcblxuZXhwb3J0IGNvbnN0IGZpbGxDdXJyZW50V2VhdGhlckRhdGEgPSBhc3luYyAoY2l0eSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlckZvckNpdHkoY2l0eSk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBhd2FpdCBnZXREYXRlKGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWRfZXBvY2gpO1xuICAgICAgICBjb25zdCB0aW1lID0gYXdhaXQgZ2V0VGltZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgZ2V0SWNvbihkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24pO1xuICAgICAgICBJbmZvLmRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBJbmZvLmNpdHkudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgICAgIEluZm8uZGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgICAgIEluZm8udGltZS50ZXh0Q29udGVudCA9IHRpbWU7XG4gICAgICAgIEluZm8udGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQudGVtcF9jfSBcXHhCMENgO1xuICAgICAgICByZW1vdmVDaGlsZHMoSW5mby5pY29uKTtcbiAgICAgICAgSW5mby5pY29uLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgc2V0UmFuZG9tV2FsbHBhcGVyKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dC5yZXBsYWNlQWxsKCcgJywgJ18nKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAn0JvQvtC60LDRhtC40Y8g0L3QtSDQvdCw0LnQtNC10L3QsCwg0YPQsdC10LTQuNGC0LXRgdGMLCDRh9GC0L4g0L3QsNC30LLQsNC90LjQtSDQs9C+0YDQvtC00LAg0L3QsNC/0LjRgdCw0L3QviDQv9GA0LDQstC40LvRjNC90L4nLFxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJY29uID0gYXN5bmMgKHByb21pc2UpID0+IHtcbiAgICBsZXQgdXJsID0gYXdhaXQgcHJvbWlzZTtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHVybDtcbiAgICByZXR1cm4gaW1hZ2U7XG59O1xuXG5jb25zdCBnZXREYXRlID0gYXN5bmMgKHByb21pc2UpID0+IHtcbiAgICBjb25zdCB1dGNTZWNvbmRzID0gYXdhaXQgcHJvbWlzZTtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGRhdGUuc2V0VVRDU2Vjb25kcyh1dGNTZWNvbmRzKTtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tR0InLCB7XG4gICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICB5ZWFyOiAnMi1kaWdpdCcsXG4gICAgICAgIHRpbWVab25lOiAnQXVzdHJhbGlhL1N5ZG5leScsXG4gICAgfSkuZm9ybWF0KGRhdGUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRUaW1lID0gYXN5bmMgKHByb21pc2UpID0+IHtcbiAgICBjb25zdCBkYXRlID0gYXdhaXQgcHJvbWlzZTtcbiAgICBjb25zdCB0aW1lID0gYXdhaXQgZm9ybWF0QU1QTShkYXRlLnNwbGl0KCcgJylbMV0pO1xuICAgIHJldHVybiB0aW1lO1xufTtcblxuY29uc3QgZm9ybWF0QU1QTSA9IGFzeW5jIChzdHJUaW1lKSA9PiB7XG4gICAgbGV0IHRpbWUgPSBzdHJUaW1lLnNwbGl0KCc6Jyk7XG4gICAgdmFyIGhvdXJzID0gdGltZVswXTtcbiAgICB2YXIgbWludXRlcyA9IHRpbWVbMV07XG4gICAgdmFyIGFtcG0gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICBob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG4gICAgbWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/ICcwJyArIG1pbnV0ZXMgOiBtaW51dGVzO1xuICAgIHZhciByZXN1bHQgPSBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnICcgKyBhbXBtO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHtcbiAgICBmb3JBcnJvd0Rvd24sXG4gICAgZm9yQXJyb3dVcCxcbiAgICBmb3JCdXR0b25Eb3QsXG59IGZyb20gJy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9jaGFuZ2VyJztcbmltcG9ydCB7IGZvckJ1dHRvbkRheXMgfSBmcm9tICcuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZGF5cyc7XG5pbXBvcnQgeyBmb3JCdXR0b25Ib3VycyB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9ob3Vycyc7XG5pbXBvcnQgeyBmb3JTZWFyY2hGaWVsZCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9zZWFyY2gnO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGZvclNlYXJjaEZpZWxkKCkuc2VhcmNoO1xuICAgIGZvckJ1dHRvbkRheXMoKS5jbGljaztcbiAgICBmb3JCdXR0b25Ib3VycygpLmNsaWNrO1xuICAgIGZvckJ1dHRvbkRvdCgpO1xuICAgIGZvckFycm93VXAoKTtcbiAgICBmb3JBcnJvd0Rvd24oKTtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0UmFuZG9tV2FsbHBhcGVyID0gYXN5bmMgKHByb21pc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBtaW5XaWR0aCA9IDEwODA7XG4gICAgICAgIGNvbnN0IG1pbkhlaWdodCA9IDEwODA7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGF3YWl0IHByb21pc2U7XG4gICAgICAgIGNvbnN0IGFwaUtleSA9ICczOTAwNTk3OS02OGMzNTQxZGIxMGU2YThiYTYyOWM5OGE2JztcbiAgICAgICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vcGl4YWJheS5jb20vYXBpLz9rZXk9JHthcGlLZXl9JnE9JHtvcHRpb259Jm1pbl93aWR0aD0ke21pbldpZHRofSZtaW5faGVpZ2h0PSR7bWluSGVpZ2h0fSZjYXRlZ29yeT1wbGFjZXMmaW1hZ2VfdHlwZT1waG90byZwZXJfcGFnZT0yMGA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRXZWF0aGVyRm9yQ2l0eSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gJzYzNDkwMDJmYzdkNDQyNWJhODcxMzI1NDkyMzEwMDgnO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2NpdHl9YDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXlzRm9yZWNhc3RXZWF0aGVyRm9yQ2l0eSA9IGFzeW5jIChkYXlzLCBjaXR5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gJzYzNDkwMDJmYzdkNDQyNWJhODcxMzI1NDkyMzEwMDgnO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JmRheXM9JHtkYXlzfSZxPSR7Y2l0eX1gO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IGJ1aWxkaW5nIGFzIGRldGFpbHNCdWlsZGluZyB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2RldGFpbHNCdWlsZGluZyc7XG5cbmV4cG9ydCBjb25zdCBJbmZvID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uID4gc3BhbicpO1xuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eSA+IHNwYW4nKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUgPiBzcGFuJyk7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lID4gc3BhbicpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLXdyYXBwZXIgPiBzcGFuJyk7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLXdyYXBwZXInKTtcbiAgICByZXR1cm4geyBwcm90b3R5cGUsIGRlc2NyaXB0aW9uLCBjaXR5LCBkYXRlLCB0aW1lLCB0ZW1wZXJhdHVyZSwgaWNvbiB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IERldGFpbHMgPSAoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRldGFpbHNCdWlsZGluZygpO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlPi5kYXRhPi52YWx1ZScpO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Pi5kYXRhPi52YWx1ZScpO1xuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkPi5kYXRhPi52YWx1ZScpO1xuICAgIHJldHVybiB7IGZlZWxzTGlrZSwgaHVtaWRpdHksIHdpbmRTcGVlZCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGZvcmVjYXN0RGF5cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhbGxEYXlzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZCcpKTtcbiAgICByZXR1cm4geyBhbGxEYXlzIH07XG59O1xuXG5leHBvcnQgY29uc3QgZm9yZWNhc3RIb3VycyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhbGxIb3VycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmgnKSk7XG4gICAgcmV0dXJuIHsgYWxsSG91cnMgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChlLCB4MCwgeDEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBsZWZ0OiBgJHt4MH1gIH0sIHsgbGVmdDogYCR7eDF9YCB9XSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXIsXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHkgPSAoZSwgeTAsIHkxLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgdG9wOiBgJHt5MH1gIH0sIHsgdG9wOiBgJHt5MX1gIH1dLCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cixcbiAgICAgICAgICAgICAgICBmaWxsOiBmaWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTF9ZGVnKWAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTJ9ZGVnKWAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgcm90YXRlIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmQgPSAoZSwgY29sb3IxLCBjb2xvcjIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGJhY2tncm91bmQ6IGNvbG9yMSB9LCB7IGJhY2tncm91bmQ6IGNvbG9yMiB9XSwge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cixcbiAgICAgICAgICAgIGZpbGw6IGZpbGwsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gKGUsIG9wYWNpdHkxLCBvcGFjaXR5MiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgb3BhY2l0eTogb3BhY2l0eTEgfSwgeyBvcGFjaXR5OiBvcGFjaXR5MiB9XSwge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cixcbiAgICAgICAgICAgIGZpbGw6IGZpbGwsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjdXN0b20gPSAoZSwgZHVyLCBmaWxsID0gJ25vbmUnLCAuLi5rZXlGcmFtZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZSguLi5rZXlGcmFtZXMsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXIsXG4gICAgICAgICAgICBmaWxsOiBmaWxsLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtLFxuICAgICAgICBiYWNrZ3JvdW5kLFxuICAgICAgICBvcGFjaXR5LFxuICAgICAgICBjdXN0b20sXG4gICAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBTbW9vdGhWaXNpYmlsaXR5IH0gZnJvbSAnLi91bml2ZXJzYWwnO1xuXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKGFzeW5jICgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFNtb290aFZpc2liaWxpdHkub3Blbihkb2N1bWVudC5ib2R5LCAwLCAxLCAxMDAwLCAnZm9yd2FyZHMnKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG59KSgpO1xuIiwiaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBTbW9vdGhWaXNpYmlsaXR5ID0gKCgpID0+IHtcbiAgICBjb25zdCBjbG9zZSA9IChlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgIHJldHVybiBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkuZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBvcGVuID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICByZXR1cm4gQW5pbWF0aW9ucy5vcGFjaXR5KGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgb3BlbiwgY2xvc2UgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBnZXRUZW1wbGF0ZU5vZGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgKiBhcyBibG9ja3NKU09OIGZyb20gJy4uLy4uL21vZGVscy9KU09OL2RldGFpbHMuanNvbic7XG5pbXBvcnQgeyBhc3luY1F1ZXJ5U2VsZWN0b3IgfSBmcm9tICcuLi8uLi9oZWxwZXIvdG9vbHMnO1xuXG5leHBvcnQgY29uc3QgYnVpbGRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYmxvY2tzID0gYmxvY2tzSlNPTi5kZWZhdWx0O1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpO1xuICAgIGZvciAobGV0IGJsb2NrIG9mIGJsb2Nrcykge1xuICAgICAgICBjb25zdCBub2RlID0gYXdhaXQgY3JlYXRlQmxvY2tOb2RlKGJsb2NrKTtcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG59O1xuXG5jb25zdCBjcmVhdGVCbG9ja05vZGUgPSBhc3luYyAoYmxvY2spID0+IHtcbiAgICBjb25zdCBub2RlID0gYXdhaXQgZ2V0VGVtcGxhdGVOb2RlKCcuZGV0YWlscy1ibG9jaycpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gYGRldGFpbCAke2Jsb2NrLmNsYXNzfWA7XG4gICAgbm9kZS5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50ID0gYmxvY2submFtZTtcbiAgICBhcHBlbmRTdmcoYmxvY2ssIG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xufTtcblxuY29uc3QgYXBwZW5kU3ZnID0gYXN5bmMgKGJsb2NrLCBub2RlKSA9PiB7XG4gICAgYXN5bmNRdWVyeVNlbGVjdG9yKGRvY3VtZW50LCBgLiR7YmxvY2suY2xhc3N9YCkudGhlbigoaWNvbikgPT4ge1xuICAgICAgICBhc3luY1F1ZXJ5U2VsZWN0b3Iobm9kZSwgJy5pY29uLXdyYXBwZXInKS50aGVuKChub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHMgfSBmcm9tICcuLi8uLi9oZWxwZXIvdG9vbHMnO1xuaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZU5vZGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5cbmV4cG9ydCBjb25zdCBidWlsZGluZyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW5lbCcpO1xuICAgIHJlbW92ZUNoaWxkcyhwYW5lbCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXdhaXQgQ09OU1RBTlRTKS5GT1JFQ0FTVF9MT05HOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF5ID0gYXdhaXQgZ2V0VGVtcGxhdGVOb2RlKCcuZGF5Jyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gYXdhaXQgZ2V0VGVtcGxhdGVOb2RlKCcudGVtcGVyYXR1cmVfX2Zvci1kYXknKTtcbiAgICAgICAgZGF5LmNsYXNzTmFtZSA9IGBmIGQgZGF5JHtpfSBiYWNrZ3JvdW5kYDtcbiAgICAgICAgZGF5LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS13cmFwcGVyJykuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmUpO1xuICAgICAgICBwYW5lbC5hcHBlbmRDaGlsZChkYXkpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHMgfSBmcm9tICcuLi8uLi9oZWxwZXIvdG9vbHMnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuXG5leHBvcnQgY29uc3QgYnVpbGRpbmcgPSBhc3luYyAoZkhvdXIsIGxIb3VyKSA9PiB7XG4gICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFuZWwnKTtcbiAgICByZW1vdmVDaGlsZHMocGFuZWwpO1xuICAgIGZvciAobGV0IGkgPSBmSG91cjsgaSA8IGxIb3VyOyBpKyspIHtcbiAgICAgICAgY29uc3QgaG91ciA9IGF3YWl0IGdldFRlbXBsYXRlTm9kZSgnLmhvdXInKTtcbiAgICAgICAgaG91ci5jbGFzc05hbWUgPSBgZiBoIGhvdXIke2l9IGJhY2tncm91bmRgO1xuICAgICAgICBwYW5lbC5hcHBlbmRDaGlsZChob3VyKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgZmlsbFdlYXRoZXJEZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2RldGFpbHMnO1xuaW1wb3J0IHsgZmlsbERheXNGb3JlY2FzdCB9IGZyb20gJy4uLy4uL21vZGVscy9maWxsaW5nV2lkZ2V0cy9mb3JlY2FzdCc7XG5pbXBvcnQgeyBmaWxsQ3VycmVudFdlYXRoZXJEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2luZm8nO1xuXG5leHBvcnQgY29uc3Qgdmlld1dlYXRoZXIgPSBhc3luYyAoY2l0eSkgPT4ge1xuICAgIGZpbGxDdXJyZW50V2VhdGhlckRhdGEoY2l0eSk7XG4gICAgZmlsbFdlYXRoZXJEZXRhaWxzKGNpdHkpO1xuICAgIGZpbGxEYXlzRm9yZWNhc3QoMywgY2l0eSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldFRlbXBsYXRlTm9kZSA9IGFzeW5jIChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWUpLmNsb25lTm9kZSh0cnVlKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59O1xuIiwiaW1wb3J0IHsgZ2V0SWNvbiB9IGZyb20gJy4uLy4uL21vZGVscy9maWxsaW5nV2lkZ2V0cy9pbmZvJztcbmltcG9ydCB7IGdldFJhbmRvbVdhbGxwYXBlciB9IGZyb20gJy4uLy4uL21vZGVscy93YWxscGFwZXJBcGknO1xuXG5sZXQgdXJsO1xuXG5leHBvcnQgY29uc3Qgc2V0UmFuZG9tV2FsbHBhcGVyID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRSYW5kb21XYWxscGFwZXIob3B0aW9uKTtcbiAgICAgICAgY29uc3QgaGl0cyA9IGRhdGEuaGl0cztcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBoaXRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgZ2V0SWNvbihkYXRhLmhpdHNbaW5kZXhdLmxhcmdlSW1hZ2VVUkwpO1xuICAgICAgICB1cmwgPSBpbWFnZS5zcmM7XG4gICAgICAgIHRlc3RJbWFnZSh1cmwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfVxufTtcblxuXG5jb25zdCB0ZXN0SW1hZ2UgPSBhc3luYyAoVVJMKSA9PiB7XG4gICAgdmFyIHRlc3RlciA9IG5ldyBJbWFnZSgpO1xuICAgIHRlc3Rlci5vbmxvYWQgPSBpbWFnZUZvdW5kO1xuICAgIHRlc3Rlci5vbmVycm9yID0gaW1hZ2VOb3RGb3VuZDtcbiAgICB0ZXN0ZXIuc3JjID0gVVJMO1xufVxuXG5jb25zdCBpbWFnZUZvdW5kID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFdhbGxwYXBlcigpO1xufVxuXG5jb25zdCBpbWFnZU5vdEZvdW5kID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldERlZmF1bHRXYWxscGFwZXIoKTtcbn1cblxuY29uc3Qgc2V0RGVmYXVsdFdhbGxwYXBlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbiAgICBjb25zdCB3YWxscGFwZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB3YWxscGFwZXIuc3JjID0gcmVxdWlyZShgLi4vaW1hZ2VzL2RlZmF1bHQuanBnYCk7XG4gICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3dhbGxwYXBlci5zcmN9JylgO1xufVxuXG5jb25zdCBzZXRXYWxscGFwZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG4gICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3VybH0nKWA7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
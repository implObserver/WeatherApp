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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap);"]);
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
    background-image: linear-gradient(
        to right,
        rgba(black, 0.4),
        rgba(black, 0.4)
    );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
    font-size: 1.5rem;
    padding-bottom: 1vh;
}

.time {
    padding-bottom: 3vh;
}

.temperature-wrapper {
    font-size: 4rem;
}

.search-field {
    display: flex;
    justify-content: start;
    padding-top: 1vh;
}

.search-field > input {
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

.button-wrapper > button {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
}

.info > .icon-wrapper {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 10vh;
}

.details {
    display: grid;
    width: max-content;
    height: max-content;
    padding: 3rem;
    gap: 5vh;
}

.detail {
    display: grid;
    grid-template-columns: min-content max-content;
    gap: 1vh;
}

.detail > .icon-wrapper {
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

.f > .name {
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

.f > .icon-wrapper {
    display: flex;
    justify-content: center;
    height: 6rem;
}

.h > .temperature-wrapper {
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
}
`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');\n\n*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n    font-family: montserrat, sans-serif;\n}\n\n:root {\n    font-size: 2vh;\n    color: white;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: min-content;\n}\n\ntemplates {\n    display: none;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 1fr;\n    max-width: 100%;\n}\n\n.body_hide {\n    opacity: 0;\n}\n\nbutton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 1vh;\n    color: white;\n    height: 2.5rem;\n    font-size: 0.7rem;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content;\n    max-width: inherit;\n    max-height: 100%;\n    background-image: linear-gradient(\n        to right,\n        rgba(black, 0.4),\n        rgba(black, 0.4)\n    );\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    gap: 1rem;\n    padding: 2rem;\n}\n\n.background {\n    background-color: rgba(0, 0, 0, 0.8);\n    border-radius: 1vh;\n    border: 0.5vh black solid;\n}\n\n.current-weather {\n    display: grid;\n}\n\n.info {\n    display: grid;\n    width: min-content;\n    height: min-content;\n    padding: 2rem;\n}\n\n.description {\n    display: flex;\n    justify-content: start;\n    font-size: 3rem;\n}\n\n.city {\n    font-size: 1.5rem;\n    padding-bottom: 1vh;\n}\n\n.time {\n    padding-bottom: 3vh;\n}\n\n.temperature-wrapper {\n    font-size: 4rem;\n}\n\n.search-field {\n    display: flex;\n    justify-content: start;\n    padding-top: 1vh;\n}\n\n.search-field > input {\n    display: flex;\n    appearance: none;\n    width: 20vh;\n    height: 3vh;\n    font-size: 1rem;\n    padding: 1vh;\n    border-radius: 1vh;\n}\n\n.button-wrapper {\n    display: flex;\n    padding: 1vh;\n}\n\n.button-wrapper > button {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0);\n}\n\n.info > .icon-wrapper {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    height: 10vh;\n}\n\n.details {\n    display: grid;\n    width: max-content;\n    height: max-content;\n    padding: 3rem;\n    gap: 5vh;\n}\n\n.detail {\n    display: grid;\n    grid-template-columns: min-content max-content;\n    gap: 1vh;\n}\n\n.detail > .icon-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 6vh;\n    height: 6vh;\n}\n\n.data {\n    display: grid;\n    grid-template-rows: min-content min-content;\n}\n\n.forecast-weather {\n    display: grid;\n    gap: 1vh;\n    grid-template-rows: min-content 1fr;\n    height: min-content;\n}\n\n.buttons-wrapper {\n    display: grid;\n    grid-template-columns: repeat(3, min-content);\n    gap: 2vh;\n}\n\n.changer {\n    display: grid;\n    align-items: center;\n    gap: 1vh;\n    grid-template-columns: repeat(5, min-content);\n    opacity: 0;\n    visibility: hidden;\n    padding: 1vh;\n}\n\n.arrow-left:hover,\n.arrow-right:hover {\n    fill: #1d89e1;\n}\n\n.down,\n.up {\n    display: flex;\n    height: 3vh;\n}\n\n.tab {\n    height: 1vh;\n    width: 1vh;\n    border: 0.1vh black solid;\n    border-radius: 50%;\n    cursor: pointer;\n    background-color: white;\n}\n\n.tab:hover {\n    border: 0.3vh rgb(29, 137, 225) solid;\n}\n\n.forecast-days,\n.forecast-hours {\n    padding: 1vh;\n    cursor: pointer;\n}\n\n.panel-wrapper {\n    display: grid;\n    align-items: center;\n    height: min-content;\n}\n\n.panel {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 23vh);\n    gap: 2vh;\n    height: min-content;\n}\n\n.f {\n    display: grid;\n    gap: 1vh;\n    padding: 1vh;\n    text-align: start;\n    width: 23vh;\n    height: min-content;\n}\n\n.f > .name {\n    font-size: 1.8rem;\n}\n\n.temperature__for-day {\n    display: grid;\n}\n\n.low {\n    font-size: 1rem;\n}\n\n.max {\n    font-size: 2.5rem;\n    padding-bottom: 1vh;\n}\n\n.f > .icon-wrapper {\n    display: flex;\n    justify-content: center;\n    height: 6rem;\n}\n\n.h > .temperature-wrapper {\n    font-size: 2.5rem;\n}\n\n.active {\n    border: 0.5vh #1d89e1 solid;\n}\n\n@media screen and (max-aspect-ratio: 1/1.0000001) {\n    .current-weather {\n        grid-template-rows: repeat(2, min-content);\n        justify-items: center;\n        gap: 1vh;\n    }\n}\n\n@media screen and (min-aspect-ratio: 1/1) {\n    .current-weather {\n        grid-template-columns: repeat(2, min-content);\n        justify-content: space-between;\n    }\n}\n"],"sourceRoot":""}]);
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
    const data = await (0,_models_wallpaperApi__WEBPACK_IMPORTED_MODULE_1__.getRandomWallpaper)(option);
    const hits = data.hits;
    const index = Math.floor(Math.random() * hits.length);
    const image = await (0,_models_fillingWidgets_info__WEBPACK_IMPORTED_MODULE_0__.getIcon)(data.hits[index].largeImageURL);
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.backgroundImage = `url('${image.src}')`;
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixtSEFBbUgsSUFBSSxJQUFJLElBQUksa0JBQWtCO0FBQ2pKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDhGQUE4RixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtB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QXVCLDJEQUFlO0FBQ3RDLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpRUFBa0IsZUFBZSxZQUFZO0FBQ2pELFFBQVEsaUVBQWtCO0FBQzFCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JrRDtBQUNDO0FBQ0w7O0FBRXZDO0FBQ1A7QUFDQSxJQUFJLDJEQUFZO0FBQ2hCLG9CQUFvQixXQUFXLHdEQUFTLGlCQUFpQjtBQUN6RDtBQUNBLDBCQUEwQiwyREFBZTtBQUN6QyxrQ0FBa0MsMkRBQWU7QUFDakQsa0NBQWtDLEdBQUc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmtEO0FBQ0o7O0FBRXZDO0FBQ1A7QUFDQSxJQUFJLDJEQUFZO0FBQ2hCLHdCQUF3QixXQUFXO0FBQ25DLDJCQUEyQiwyREFBZTtBQUMxQyxvQ0FBb0MsR0FBRztBQUN2QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h5RTtBQUNEO0FBQ0U7O0FBRW5FO0FBQ1AsSUFBSSxtRkFBc0I7QUFDMUIsSUFBSSxrRkFBa0I7QUFDdEIsSUFBSSxpRkFBZ0I7QUFDcEI7Ozs7Ozs7Ozs7Ozs7OztBQ1JPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0gyRDtBQUNJOztBQUV4RDtBQUNQLHVCQUF1Qix3RUFBa0I7QUFDekM7QUFDQTtBQUNBLHdCQUF3QixvRUFBTztBQUMvQjtBQUNBLDRDQUE0QyxVQUFVO0FBQ3REIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzPzg5ZjYiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9jaGFuZ2VyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2RheXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvaG91cnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvc2VhcmNoLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaGVscGVyL3Rvb2xzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvYWN0aXZlQ2xvY2tUYWIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvY2l0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvZGF0YS93ZWVrRGF5cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy9maWxsaW5nV2lkZ2V0cy9kZXRhaWxzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2luZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy93YWxscGFwZXJBcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2RlbHMvd2VhdGhlckFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZGVscy93aWRnZXRzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9wYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy91bml2ZXJzYWwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9ub2Rlcy9kZXRhaWxzQnVpbGRpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9ub2Rlcy9mb3JlY2FzdERheXNCdWlsZGluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZpZXdzL25vZGVzL2ZvcmVjYXN0SG91cnNCdWlsZGluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZpZXdzL25vZGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9ub2Rlcy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92aWV3cy9ub2Rlcy93cmFwcGVyQmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMXZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxudGVtcGxhdGVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmJvZHlfaGlkZSB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICByZ2JhKGJsYWNrLCAwLjQpLFxuICAgICAgICByZ2JhKGJsYWNrLCAwLjQpXG4gICAgKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcbiAgICBib3JkZXI6IDAuNXZoIGJsYWNrIHNvbGlkO1xufVxuXG4uY3VycmVudC13ZWF0aGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4uaW5mbyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi5jaXR5IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xufVxuXG4udGltZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDN2aDtcbn1cblxuLnRlbXBlcmF0dXJlLXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuLnNlYXJjaC1maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbi5zZWFyY2gtZmllbGQgPiBpbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAyMHZoO1xuICAgIGhlaWdodDogM3ZoO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMXZoO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIgPiBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uaW5mbyA+IC5pY29uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTB2aDtcbn1cblxuLmRldGFpbHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBnYXA6IDV2aDtcbn1cblxuLmRldGFpbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1heC1jb250ZW50O1xuICAgIGdhcDogMXZoO1xufVxuXG4uZGV0YWlsID4gLmljb24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA2dmg7XG4gICAgaGVpZ2h0OiA2dmg7XG59XG5cbi5kYXRhIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG59XG5cbi5mb3JlY2FzdC13ZWF0aGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXZoO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5idXR0b25zLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICAgIGdhcDogMnZoO1xufVxuXG4uY2hhbmdlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXZoO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIG1pbi1jb250ZW50KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxdmg7XG59XG5cbi5hcnJvdy1sZWZ0OmhvdmVyLFxuLmFycm93LXJpZ2h0OmhvdmVyIHtcbiAgICBmaWxsOiAjMWQ4OWUxO1xufVxuXG4uZG93bixcbi51cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDN2aDtcbn1cblxuLnRhYiB7XG4gICAgaGVpZ2h0OiAxdmg7XG4gICAgd2lkdGg6IDF2aDtcbiAgICBib3JkZXI6IDAuMXZoIGJsYWNrIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50YWI6aG92ZXIge1xuICAgIGJvcmRlcjogMC4zdmggcmdiKDI5LCAxMzcsIDIyNSkgc29saWQ7XG59XG5cbi5mb3JlY2FzdC1kYXlzLFxuLmZvcmVjYXN0LWhvdXJzIHtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGFuZWwtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5wYW5lbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDIzdmgpO1xuICAgIGdhcDogMnZoO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5mIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXZoO1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB3aWR0aDogMjN2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uZiA+IC5uYW1lIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnRlbXBlcmF0dXJlX19mb3ItZGF5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubG93IHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5tYXgge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxdmg7XG59XG5cbi5mID4gLmljb24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDZyZW07XG59XG5cbi5oID4gLnRlbXBlcmF0dXJlLXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uYWN0aXZlIHtcbiAgICBib3JkZXI6IDAuNXZoICMxZDg5ZTEgc29saWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLzEuMDAwMDAwMSkge1xuICAgIC5jdXJyZW50LXdlYXRoZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxdmg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSB7XG4gICAgLmN1cnJlbnQtd2VhdGhlciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wi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QTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSwwQ0FBMEM7UUFDMUMscUJBQXFCO1FBQ3JCLFFBQVE7SUFDWjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw2Q0FBNkM7UUFDN0MsOEJBQThCO0lBQ2xDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxdmg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG50ZW1wbGF0ZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ib2R5X2hpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHRvIHJpZ2h0LFxcbiAgICAgICAgcmdiYShibGFjaywgMC40KSxcXG4gICAgICAgIHJnYmEoYmxhY2ssIDAuNClcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIGJvcmRlcjogMC41dmggYmxhY2sgc29saWQ7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4udGltZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzdmg7XFxufVxcblxcbi50ZW1wZXJhdHVyZS13cmFwcGVyIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgcGFkZGluZy10b3A6IDF2aDtcXG59XFxuXFxuLnNlYXJjaC1maWVsZCA+IGlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDIwdmg7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbn1cXG5cXG4uYnV0dG9uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxdmg7XFxufVxcblxcbi5idXR0b24td3JhcHBlciA+IGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLmluZm8gPiAuaWNvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgZ2FwOiA1dmg7XFxufVxcblxcbi5kZXRhaWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICBnYXA6IDF2aDtcXG59XFxuXFxuLmRldGFpbCA+IC5pY29uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDZ2aDtcXG4gICAgaGVpZ2h0OiA2dmg7XFxufVxcblxcbi5kYXRhIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG59XFxuXFxuLmZvcmVjYXN0LXdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5idXR0b25zLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICAgIGdhcDogMnZoO1xcbn1cXG5cXG4uY2hhbmdlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtaW4tY29udGVudCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMXZoO1xcbn1cXG5cXG4uYXJyb3ctbGVmdDpob3ZlcixcXG4uYXJyb3ctcmlnaHQ6aG92ZXIge1xcbiAgICBmaWxsOiAjMWQ4OWUxO1xcbn1cXG5cXG4uZG93bixcXG4udXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDN2aDtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGhlaWdodDogMXZoO1xcbiAgICB3aWR0aDogMXZoO1xcbiAgICBib3JkZXI6IDAuMXZoIGJsYWNrIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgICBib3JkZXI6IDAuM3ZoIHJnYigyOSwgMTM3LCAyMjUpIHNvbGlkO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5cyxcXG4uZm9yZWNhc3QtaG91cnMge1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhbmVsLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ucGFuZWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDIzdmgpO1xcbiAgICBnYXA6IDJ2aDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgd2lkdGg6IDIzdmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5mID4gLm5hbWUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlX19mb3ItZGF5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1heCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4uZiA+IC5pY29uLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbn1cXG5cXG4uaCA+IC50ZW1wZXJhdHVyZS13cmFwcGVyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBib3JkZXI6IDAuNXZoICMxZDg5ZTEgc29saWQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLzEuMDAwMDAwMSkge1xcbiAgICAuY3VycmVudC13ZWF0aGVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMXZoO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHtcXG4gICAgLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBDbG9ja1RhYnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWN0aXZlQ2xvY2tUYWInO1xuaW1wb3J0IHsgZmlsbEhvdXJzRm9yZWNhc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmlsbGluZ1dpZGdldHMvZm9yZWNhc3QnO1xuaW1wb3J0ICogYXMgaG91cnNKU09OIGZyb20gJy4uLy4uL21vZGVscy9KU09OL2hvdXJzLmpzb24nO1xuXG5jb25zdCBob3VycyA9IGhvdXJzSlNPTi5kZWZhdWx0O1xuXG5leHBvcnQgY29uc3QgZm9yQnV0dG9uRG90ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gICAgZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbnNbaV0gPT09IGJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0ZvcmVjYXN0KGkpO1xuICAgICAgICAgICAgICAgICAgICAoYXdhaXQgQ2xvY2tUYWJzKS5hY3RpdmF0ZShpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAoYXdhaXQgQ2xvY2tUYWJzKS5kZWFjdGl2YXRlKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZvckFycm93VXAgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAoYXdhaXQgQ2xvY2tUYWJzKS5hY3RpdmF0ZUZvbGxvd1RhYigpO1xuICAgICAgICBjb25zdCBpID0gKGF3YWl0IENsb2NrVGFicykuZ2V0SW5kZXhBY3RpdmVUYWIoKTtcbiAgICAgICAgc2V0SG91cnNGb3JlY2FzdChpKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JBcnJvd0Rvd24gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvd24nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIChhd2FpdCBDbG9ja1RhYnMpLmFjdGl2YXRlUHJldlRhYigpO1xuICAgICAgICBjb25zdCBpID0gKGF3YWl0IENsb2NrVGFicykuZ2V0SW5kZXhBY3RpdmVUYWIoKTtcbiAgICAgICAgc2V0SG91cnNGb3JlY2FzdChpKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHNldEhvdXJzRm9yZWNhc3QgPSBhc3luYyAoaSkgPT4ge1xuICAgIGNvbnN0IGZIb3VyID0gaG91cnNbaV0uaG91cnM7XG4gICAgY29uc3QgbEhvdXIgPSBmSG91ciArIDg7XG4gICAgZmlsbEhvdXJzRm9yZWNhc3QoJ0xvbmRvbicsIGZIb3VyLCBsSG91cik7XG59O1xuIiwiaW1wb3J0IHsgQ2l0eSB9IGZyb20gJy4uLy4uL21vZGVscy9jaXR5JztcbmltcG9ydCB7IGZpbGxEYXlzRm9yZWNhc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmlsbGluZ1dpZGdldHMvZm9yZWNhc3QnO1xuaW1wb3J0IHsgU21vb3RoVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3ZpZXdzL2FuaW1hdGlvbnMvdW5pdmVyc2FsJztcblxuZXhwb3J0IGNvbnN0IGZvckJ1dHRvbkRheXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0LWRheXMnKTtcbiAgICBjb25zdCBjbGljayA9IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2VyJyk7XG4gICAgICAgIGRheXNJc0FjdGl2ZSgpO1xuICAgICAgICBmaWxsRGF5c0ZvcmVjYXN0KDMsIChhd2FpdCBDaXR5KS5nZXRDaXR5KCkpO1xuICAgICAgICBTbW9vdGhWaXNpYmlsaXR5LmNsb3NlKGNoYW5nZXIsIDEsIDAsIDIwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgY2xpY2sgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBkYXlzSXNBY3RpdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0LWRheXMnKTtcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1ob3VycycpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBob3Vycy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn07XG4iLCJpbXBvcnQgeyBmaWxsSG91cnNGb3JlY2FzdCB9IGZyb20gJy4uLy4uL21vZGVscy9maWxsaW5nV2lkZ2V0cy9mb3JlY2FzdCc7XG5pbXBvcnQgeyBTbW9vdGhWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vdmlld3MvYW5pbWF0aW9ucy91bml2ZXJzYWwnO1xuXG5leHBvcnQgY29uc3QgZm9yQnV0dG9uSG91cnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0LWhvdXJzJyk7XG4gICAgY29uc3QgY2xpY2sgPSBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlcicpO1xuICAgICAgICBob3Vyc0lzQWN0aXZlKCk7XG4gICAgICAgIGZpbGxIb3Vyc0ZvcmVjYXN0KCdMb25kb24nLCAwLCA4KTtcbiAgICAgICAgU21vb3RoVmlzaWJpbGl0eS5vcGVuKGNoYW5nZXIsIDAsIDEsIDIwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgY2xpY2sgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBob3Vyc0lzQWN0aXZlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1ob3VycycpO1xuICAgIGNvbnN0IGRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtZGF5cycpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBkYXlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufTtcbiIsImltcG9ydCB7IENpdHkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2l0eSc7XG5pbXBvcnQgeyB2aWV3V2VhdGhlciB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL21haW4nO1xuaW1wb3J0IHsgZGF5c0lzQWN0aXZlIH0gZnJvbSAnLi9kYXlzJztcblxuZXhwb3J0IGNvbnN0IGZvclNlYXJjaEZpZWxkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1maWVsZD5pbnB1dCcpO1xuICAgIGNvbnN0IHNlYXJjaCA9IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAoYXdhaXQgQ2l0eSkuc2V0Q2l0eShpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmlld1dlYXRoZXIoKGF3YWl0IENpdHkpLmdldENpdHkoKSk7XG4gICAgICAgICAgICAgICAgZGF5c0lzQWN0aXZlKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7IHNlYXJjaCB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBhc3luY1F1ZXJ5U2VsZWN0b3IgPSBhc3luYyAobm9kZSwgcXVlcnkpID0+IHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgKHF1ZXJ5ID8gbm9kZS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KSA6IG5vZGUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgQ2Fubm90IGZpbmQgJHtxdWVyeSA/IGAke3F1ZXJ5fSBpbmAgOiAnJ30gJHtub2RlfS5gLFxuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDaGlsZHMgPSAobm9kZSkgPT4ge1xuICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG5vZGUpO1xufTtcbiIsImltcG9ydCB7IENpdHkgfSBmcm9tICcuL21vZGVscy9jaXR5JztcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gJy4vbW9kZWxzL21haW4nO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi92aWV3cy9hbmltYXRpb25zL3BhZ2VMb2FkZXInO1xuaW1wb3J0IHsgdmlld1dlYXRoZXIgfSBmcm9tICcuL3ZpZXdzL25vZGVzL21haW4nO1xuXG5pbXBvcnQgJy4vdmlld3Mvc3R5bGVzL21haW4uY3NzJztcblxuTG9hZGVyO1xuXG5zZXRMaXN0ZW5lcnMoKTtcbmxldCBjaXR5ID0gKGF3YWl0IENpdHkpLmdldENpdHkoKTtcbnZpZXdXZWF0aGVyKGNpdHkpO1xuIiwiZXhwb3J0IGNvbnN0IENsb2NrVGFicyA9IChhc3luYyAoKSA9PiB7XG4gICAgbGV0IGluZGV4QWN0aXZlVGFiID0gMDtcbiAgICBjb25zdCBjbG9ja1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gICAgY2xvY2tUYWJzWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMWQ4OWUxJztcblxuICAgIGNvbnN0IGFjdGl2YXRlID0gYXN5bmMgKGkpID0+IHtcbiAgICAgICAgY2xvY2tUYWJzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMWQ4OWUxJztcbiAgICAgICAgc2V0SW5kZXhBY3RpdmVUYWIoaSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlYWN0aXZhdGUgPSBhc3luYyAoaSkgPT4ge1xuICAgICAgICBjbG9ja1RhYnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZmZmYnO1xuICAgIH07XG5cbiAgICBjb25zdCBhY3RpdmF0ZUZvbGxvd1RhYiA9ICgpID0+IHtcbiAgICAgICAgZGVhY3RpdmF0ZShpbmRleEFjdGl2ZVRhYik7XG4gICAgICAgIGluY0luZGV4QWN0aXZlVGFiKCk7XG4gICAgICAgIGFjdGl2YXRlKGluZGV4QWN0aXZlVGFiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aXZhdGVQcmV2VGFiID0gKCkgPT4ge1xuICAgICAgICBkZWFjdGl2YXRlKGluZGV4QWN0aXZlVGFiKTtcbiAgICAgICAgZGVjSW5kZXhBY3RpdmVUYWIoKTtcbiAgICAgICAgYWN0aXZhdGUoaW5kZXhBY3RpdmVUYWIpO1xuICAgIH07XG5cbiAgICBjb25zdCBpbmNJbmRleEFjdGl2ZVRhYiA9ICgpID0+IHtcbiAgICAgICAgaW5kZXhBY3RpdmVUYWIgKz0gMTtcbiAgICAgICAgaWZNYXgoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVjSW5kZXhBY3RpdmVUYWIgPSAoKSA9PiB7XG4gICAgICAgIGluZGV4QWN0aXZlVGFiIC09IDE7XG4gICAgICAgIGlmTWluKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEluZGV4QWN0aXZlVGFiID0gKHZhbCkgPT4ge1xuICAgICAgICBpbmRleEFjdGl2ZVRhYiA9IHZhbDtcbiAgICAgICAgaWZNYXgoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0SW5kZXhBY3RpdmVUYWIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmRleEFjdGl2ZVRhYjtcbiAgICB9O1xuXG4gICAgY29uc3QgaWZNYXggPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbmRleEFjdGl2ZVRhYiA+PSBjbG9ja1RhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpbmRleEFjdGl2ZVRhYiA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaWZNaW4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbmRleEFjdGl2ZVRhYiA8IDApIHtcbiAgICAgICAgICAgIGluZGV4QWN0aXZlVGFiID0gY2xvY2tUYWJzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q2xvY2tUYWJzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2xvY2tUYWJzO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmF0ZSxcbiAgICAgICAgZGVhY3RpdmF0ZSxcbiAgICAgICAgYWN0aXZhdGVGb2xsb3dUYWIsXG4gICAgICAgIGFjdGl2YXRlUHJldlRhYixcbiAgICAgICAgc2V0SW5kZXhBY3RpdmVUYWIsXG4gICAgICAgIGdldEluZGV4QWN0aXZlVGFiLFxuICAgICAgICBnZXRDbG9ja1RhYnMsXG4gICAgfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgQ2l0eSA9IChhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNpdHkgPSAnTG9uZG9uJztcbiAgICBjb25zdCBzZXRDaXR5ID0gKHN0cikgPT4ge1xuICAgICAgICBjaXR5ID0gc3RyO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Q2l0eSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNpdHk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldENpdHksIHNldENpdHkgfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgQ09OU1RBTlRTID0gKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBGT1JFQ0FTVF9MT05HID0gMztcbiAgICBjb25zdCBIT1VSU19JTl9EQVkgPSAyNDtcbiAgICByZXR1cm4geyBGT1JFQ0FTVF9MT05HLCBIT1VSU19JTl9EQVkgfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3Qgd2Vla2RheSA9IFtcbiAgICAnU3VuZGF5JyxcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuXTtcbiIsImltcG9ydCB7IGdldEN1cnJlbnRXZWF0aGVyRm9yQ2l0eSB9IGZyb20gJy4uL3dlYXRoZXJBcGknO1xuaW1wb3J0IHsgRGV0YWlscyB9IGZyb20gJy4uL3dpZGdldHMnO1xuXG5leHBvcnQgY29uc3QgZmlsbFdlYXRoZXJEZXRhaWxzID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXJGb3JDaXR5KGNpdHkpO1xuICAgICAgICAoXG4gICAgICAgICAgICBhd2FpdCBEZXRhaWxzXG4gICAgICAgICkuZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jfSBcXHhCMENgO1xuICAgICAgICAoYXdhaXQgRGV0YWlscykuaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9ICVgO1xuICAgICAgICAoYXdhaXQgRGV0YWlscykud2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50LndpbmRfa3BofSBrbS9oYDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBTbW9vdGhWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vdmlld3MvYW5pbWF0aW9ucy91bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHdlZWtkYXkgfSBmcm9tICcuLi9kYXRhL3dlZWtEYXlzJztcbmltcG9ydCB7IGdldERheXNGb3JlY2FzdFdlYXRoZXJGb3JDaXR5IH0gZnJvbSAnLi4vd2VhdGhlckFwaSc7XG5pbXBvcnQgeyBmb3JlY2FzdERheXMsIGZvcmVjYXN0SG91cnMgfSBmcm9tICcuLi93aWRnZXRzJztcbmltcG9ydCB7IGdldEljb24gfSBmcm9tICcuL2luZm8nO1xuaW1wb3J0IHsgYnVpbGRpbmcgYXMgZm9yZWNhc3RIb3Vyc0J1aWxkaW5nIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvZm9yZWNhc3RIb3Vyc0J1aWxkaW5nJztcbmltcG9ydCB7IGJ1aWxkaW5nIGFzIGZvcmVjYXN0RGF5c0J1aWxkaW5nIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvZm9yZWNhc3REYXlzQnVpbGRpbmcnO1xuXG5leHBvcnQgY29uc3QgZmlsbERheXNGb3JlY2FzdCA9IGFzeW5jIChvZkRheXMsIGNpdHkpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBmb3JlY2FzdERheXNCdWlsZGluZygpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF5c0ZvcmVjYXN0V2VhdGhlckZvckNpdHkob2ZEYXlzLCBjaXR5KTtcbiAgICAgICAgY29uc3QgZGF5cyA9IChhd2FpdCBmb3JlY2FzdERheXMoKSkuYWxsRGF5cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXdhaXQgQ09OU1RBTlRTKS5GT1JFQ0FTVF9MT05HOyBpKyspIHtcbiAgICAgICAgICAgIGRheXNbaV0ucXVlcnlTZWxlY3RvcignLm5hbWUnKS50ZXh0Q29udGVudCA9IGF3YWl0IGdldERheShcbiAgICAgICAgICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGUsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGF5c1tpXS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcubWF4JyxcbiAgICAgICAgICAgICkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2N9IFxceEIwQ2A7XG4gICAgICAgICAgICBkYXlzW2ldLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5sb3cnLFxuICAgICAgICAgICAgKS50ZXh0Q29udGVudCA9IGAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfY30gXFx4QjBDYDtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgZ2V0SWNvbihcbiAgICAgICAgICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVdyYXBwZXIgPSBkYXlzW2ldLnF1ZXJ5U2VsZWN0b3IoJy5pY29uJyk7XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICAgICAgU21vb3RoVmlzaWJpbGl0eS5vcGVuKGltYWdlV3JhcHBlciwgMCwgMSwgNDAwLCAnZm9yd2FyZHMnKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfVxufTtcblxuY29uc3QgZ2V0RGF5ID0gYXN5bmMgKHByb21pc2UpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUocHJvbWlzZSk7XG4gICAgY29uc3QgZGF5Q29kZSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgZGF5ID0gd2Vla2RheVtkYXlDb2RlXTtcbiAgICByZXR1cm4gZGF5O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbGxIb3Vyc0ZvcmVjYXN0ID0gYXN5bmMgKGNpdHksIGZIb3VyLCBsSG91cikgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGZvcmVjYXN0SG91cnNCdWlsZGluZyhmSG91ciwgbEhvdXIpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF5c0ZvcmVjYXN0V2VhdGhlckZvckNpdHkoMSwgY2l0eSk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gKGF3YWl0IGZvcmVjYXN0SG91cnMoKSkuYWxsSG91cnM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGkgKyBmSG91cjtcbiAgICAgICAgICAgIGhvdXJzW2ldLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpbmRleF0udGltZS5zcGxpdCgnICcpWzFdO1xuICAgICAgICAgICAgaG91cnNbaV0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLnRlbXBlcmF0dXJlLXdyYXBwZXInLFxuICAgICAgICAgICAgKS50ZXh0Q29udGVudCA9IGAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpbmRleF0udGVtcF9jfSBcXHhCMENgO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBnZXRJY29uKFxuICAgICAgICAgICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpbmRleF0uY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VXcmFwcGVyID0gaG91cnNbaV0ucXVlcnlTZWxlY3RvcignLmljb24nKTtcbiAgICAgICAgICAgIGltYWdlV3JhcHBlci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgICAgICBTbW9vdGhWaXNpYmlsaXR5Lm9wZW4oaW1hZ2VXcmFwcGVyLCAwLCAxLCA0MDAsICdmb3J3YXJkcycpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgcmVtb3ZlQ2hpbGRzIH0gZnJvbSAnLi4vLi4vaGVscGVyL3Rvb2xzJztcbmltcG9ydCB7IHNldFJhbmRvbVdhbGxwYXBlciB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL3dyYXBwZXJCYWNrZ3JvdW5kJztcbmltcG9ydCB7IGdldEN1cnJlbnRXZWF0aGVyRm9yQ2l0eSB9IGZyb20gJy4uL3dlYXRoZXJBcGknO1xuaW1wb3J0IHsgSW5mbyB9IGZyb20gJy4uL3dpZGdldHMnO1xuXG5leHBvcnQgY29uc3QgZmlsbEN1cnJlbnRXZWF0aGVyRGF0YSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEN1cnJlbnRXZWF0aGVyRm9yQ2l0eShjaXR5KTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGF3YWl0IGdldERhdGUoZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZF9lcG9jaCk7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBhd2FpdCBnZXRUaW1lKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBnZXRJY29uKGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbik7XG4gICAgICAgIEluZm8uZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIEluZm8uY2l0eS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZTtcbiAgICAgICAgSW5mby5kYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcbiAgICAgICAgSW5mby50aW1lLnRleHRDb250ZW50ID0gdGltZTtcbiAgICAgICAgSW5mby50ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC50ZW1wX2N9IFxceEIwQ2A7XG4gICAgICAgIHJlbW92ZUNoaWxkcyhJbmZvLmljb24pO1xuICAgICAgICBJbmZvLmljb24uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBzZXRSYW5kb21XYWxscGFwZXIoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LnJlcGxhY2VBbGwoJyAnLCAnXycpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydChcbiAgICAgICAgICAgICfQm9C+0LrQsNGG0LjRjyDQvdC1INC90LDQudC00LXQvdCwLCDRg9Cx0LXQtNC40YLQtdGB0YwsINGH0YLQviDQvdCw0LfQstCw0L3QuNC1INCz0L7RgNC+0LTQsCDQvdCw0L/QuNGB0LDQvdC+INC/0YDQsNCy0LjQu9GM0L3QvicsXG4gICAgICAgICk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEljb24gPSBhc3luYyAocHJvbWlzZSkgPT4ge1xuICAgIGxldCB1cmwgPSBhd2FpdCBwcm9taXNlO1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xuICAgIHJldHVybiBpbWFnZTtcbn07XG5cbmNvbnN0IGdldERhdGUgPSBhc3luYyAocHJvbWlzZSkgPT4ge1xuICAgIGNvbnN0IHV0Y1NlY29uZHMgPSBhd2FpdCBwcm9taXNlO1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgZGF0ZS5zZXRVVENTZWNvbmRzKHV0Y1NlY29uZHMpO1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHtcbiAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgIHllYXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgdGltZVpvbmU6ICdBdXN0cmFsaWEvU3lkbmV5JyxcbiAgICB9KS5mb3JtYXQoZGF0ZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldFRpbWUgPSBhc3luYyAocHJvbWlzZSkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBhd2FpdCBwcm9taXNlO1xuICAgIGNvbnN0IHRpbWUgPSBhd2FpdCBmb3JtYXRBTVBNKGRhdGUuc3BsaXQoJyAnKVsxXSk7XG4gICAgcmV0dXJuIHRpbWU7XG59O1xuXG5jb25zdCBmb3JtYXRBTVBNID0gYXN5bmMgKHN0clRpbWUpID0+IHtcbiAgICBsZXQgdGltZSA9IHN0clRpbWUuc3BsaXQoJzonKTtcbiAgICB2YXIgaG91cnMgPSB0aW1lWzBdO1xuICAgIHZhciBtaW51dGVzID0gdGltZVsxXTtcbiAgICB2YXIgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG4gICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgIGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcbiAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgdmFyIHJlc3VsdCA9IGhvdXJzICsgJzonICsgbWludXRlcyArICcgJyArIGFtcG07XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQge1xuICAgIGZvckFycm93RG93bixcbiAgICBmb3JBcnJvd1VwLFxuICAgIGZvckJ1dHRvbkRvdCxcbn0gZnJvbSAnLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2NoYW5nZXInO1xuaW1wb3J0IHsgZm9yQnV0dG9uRGF5cyB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9kYXlzJztcbmltcG9ydCB7IGZvckJ1dHRvbkhvdXJzIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2hvdXJzJztcbmltcG9ydCB7IGZvclNlYXJjaEZpZWxkIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL3NlYXJjaCc7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgZm9yU2VhcmNoRmllbGQoKS5zZWFyY2g7XG4gICAgZm9yQnV0dG9uRGF5cygpLmNsaWNrO1xuICAgIGZvckJ1dHRvbkhvdXJzKCkuY2xpY2s7XG4gICAgZm9yQnV0dG9uRG90KCk7XG4gICAgZm9yQXJyb3dVcCgpO1xuICAgIGZvckFycm93RG93bigpO1xufTtcbiIsImV4cG9ydCBjb25zdCBnZXRSYW5kb21XYWxscGFwZXIgPSBhc3luYyAocHJvbWlzZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1pbldpZHRoID0gMTA4MDtcbiAgICAgICAgY29uc3QgbWluSGVpZ2h0ID0gMTA4MDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gYXdhaXQgcHJvbWlzZTtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gJzM5MDA1OTc5LTY4YzM1NDFkYjEwZTZhOGJhNjI5Yzk4YTYnO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9waXhhYmF5LmNvbS9hcGkvP2tleT0ke2FwaUtleX0mcT0ke29wdGlvbn0mbWluX3dpZHRoPSR7bWluV2lkdGh9Jm1pbl9oZWlnaHQ9JHttaW5IZWlnaHR9JmNhdGVnb3J5PXBsYWNlcyZpbWFnZV90eXBlPXBob3RvJnBlcl9wYWdlPTIwYDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICBhbGVydChlcnJvcik7XG4gICAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBnZXRDdXJyZW50V2VhdGhlckZvckNpdHkgPSBhc3luYyAoY2l0eSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFwaUtleSA9ICc2MzQ5MDAyZmM3ZDQ0MjViYTg3MTMyNTQ5MjMxMDA4JztcbiAgICAgICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtjaXR5fWA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF5c0ZvcmVjYXN0V2VhdGhlckZvckNpdHkgPSBhc3luYyAoZGF5cywgY2l0eSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFwaUtleSA9ICc2MzQ5MDAyZmM3ZDQ0MjViYTg3MTMyNTQ5MjMxMDA4JztcbiAgICAgICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZkYXlzPSR7ZGF5c30mcT0ke2NpdHl9YDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBidWlsZGluZyBhcyBkZXRhaWxzQnVpbGRpbmcgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9kZXRhaWxzQnVpbGRpbmcnO1xuXG5leHBvcnQgY29uc3QgSW5mbyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbiA+IHNwYW4nKTtcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHkgPiBzcGFuJyk7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlID4gc3BhbicpO1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZSA+IHNwYW4nKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS13cmFwcGVyID4gc3BhbicpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi13cmFwcGVyJyk7XG4gICAgcmV0dXJuIHsgcHJvdG90eXBlLCBkZXNjcmlwdGlvbiwgY2l0eSwgZGF0ZSwgdGltZSwgdGVtcGVyYXR1cmUsIGljb24gfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBEZXRhaWxzID0gKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkZXRhaWxzQnVpbGRpbmcoKTtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZT4uZGF0YT4udmFsdWUnKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eT4uZGF0YT4udmFsdWUnKTtcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZD4uZGF0YT4udmFsdWUnKTtcbiAgICByZXR1cm4geyBmZWVsc0xpa2UsIGh1bWlkaXR5LCB3aW5kU3BlZWQgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBmb3JlY2FzdERheXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWxsRGF5cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmQnKSk7XG4gICAgcmV0dXJuIHsgYWxsRGF5cyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcmVjYXN0SG91cnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWxsSG91cnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oJykpO1xuICAgIHJldHVybiB7IGFsbEhvdXJzIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IEFuaW1hdGlvbnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSAoZSwgeDAsIHgxLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgbGVmdDogYCR7eDB9YCB9LCB7IGxlZnQ6IGAke3gxfWAgfV0sIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyLFxuICAgICAgICAgICAgICAgIGZpbGw6IGZpbGwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB5ID0gKGUsIHkwLCB5MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRvcDogYCR7eTB9YCB9LCB7IHRvcDogYCR7eTF9YCB9XSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXIsXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IChlLCByb3RhdGUxLCByb3RhdGUyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUxfWRlZylgLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUyfWRlZylgLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7IHgsIHksIHJvdGF0ZSB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gKGUsIGNvbG9yMSwgY29sb3IyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBiYWNrZ3JvdW5kOiBjb2xvcjEgfSwgeyBiYWNrZ3JvdW5kOiBjb2xvcjIgfV0sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXIsXG4gICAgICAgICAgICBmaWxsOiBmaWxsLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BhY2l0eSA9IChlLCBvcGFjaXR5MSwgb3BhY2l0eTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IG9wYWNpdHk6IG9wYWNpdHkxIH0sIHsgb3BhY2l0eTogb3BhY2l0eTIgfV0sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXIsXG4gICAgICAgICAgICBmaWxsOiBmaWxsLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3VzdG9tID0gKGUsIGR1ciwgZmlsbCA9ICdub25lJywgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoLi4ua2V5RnJhbWVzLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyLFxuICAgICAgICAgICAgZmlsbDogZmlsbCxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zZm9ybSxcbiAgICAgICAgYmFja2dyb3VuZCxcbiAgICAgICAgb3BhY2l0eSxcbiAgICAgICAgY3VzdG9tLFxuICAgIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgU21vb3RoVmlzaWJpbGl0eSB9IGZyb20gJy4vdW5pdmVyc2FsJztcblxuZXhwb3J0IGNvbnN0IExvYWRlciA9IChhc3luYyAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBTbW9vdGhWaXNpYmlsaXR5Lm9wZW4oZG9jdW1lbnQuYm9keSwgMCwgMSwgMTAwMCwgJ2ZvcndhcmRzJyk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xufSkoKTtcbiIsImltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgU21vb3RoVmlzaWJpbGl0eSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY2xvc2UgPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICByZXR1cm4gQW5pbWF0aW9ucy5vcGFjaXR5KGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgb3BlbiA9IChlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgIGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMub3BhY2l0eShlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICB9O1xuICAgIHJldHVybiB7IG9wZW4sIGNsb3NlIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgZ2V0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuaW1wb3J0ICogYXMgYmxvY2tzSlNPTiBmcm9tICcuLi8uLi9tb2RlbHMvSlNPTi9kZXRhaWxzLmpzb24nO1xuaW1wb3J0IHsgYXN5bmNRdWVyeVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaGVscGVyL3Rvb2xzJztcblxuZXhwb3J0IGNvbnN0IGJ1aWxkaW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJsb2NrcyA9IGJsb2Nrc0pTT04uZGVmYXVsdDtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMnKTtcbiAgICBmb3IgKGxldCBibG9jayBvZiBibG9ja3MpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGF3YWl0IGNyZWF0ZUJsb2NrTm9kZShibG9jayk7XG4gICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlQmxvY2tOb2RlID0gYXN5bmMgKGJsb2NrKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGF3YWl0IGdldFRlbXBsYXRlTm9kZSgnLmRldGFpbHMtYmxvY2snKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9IGBkZXRhaWwgJHtibG9jay5jbGFzc31gO1xuICAgIG5vZGUucXVlcnlTZWxlY3RvcignLm5hbWUnKS50ZXh0Q29udGVudCA9IGJsb2NrLm5hbWU7XG4gICAgYXBwZW5kU3ZnKGJsb2NrLCBub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbn07XG5cbmNvbnN0IGFwcGVuZFN2ZyA9IGFzeW5jIChibG9jaywgbm9kZSkgPT4ge1xuICAgIGFzeW5jUXVlcnlTZWxlY3Rvcihkb2N1bWVudCwgYC4ke2Jsb2NrLmNsYXNzfWApLnRoZW4oKGljb24pID0+IHtcbiAgICAgICAgYXN5bmNRdWVyeVNlbGVjdG9yKG5vZGUsICcuaWNvbi13cmFwcGVyJykudGhlbigobm9kZSkgPT4ge1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgcmVtb3ZlQ2hpbGRzIH0gZnJvbSAnLi4vLi4vaGVscGVyL3Rvb2xzJztcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4uLy4uL21vZGVscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuXG5leHBvcnQgY29uc3QgYnVpbGRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFuZWwnKTtcbiAgICByZW1vdmVDaGlsZHMocGFuZWwpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGF3YWl0IENPTlNUQU5UUykuRk9SRUNBU1RfTE9ORzsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3MHcnKTtcbiAgICAgICAgY29uc3QgZGF5ID0gYXdhaXQgZ2V0VGVtcGxhdGVOb2RlKCcuZGF5Jyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gYXdhaXQgZ2V0VGVtcGxhdGVOb2RlKCcudGVtcGVyYXR1cmVfX2Zvci1kYXknKTtcbiAgICAgICAgZGF5LmNsYXNzTmFtZSA9IGBmIGQgZGF5JHtpfSBiYWNrZ3JvdW5kYDtcbiAgICAgICAgZGF5LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS13cmFwcGVyJykuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmUpO1xuICAgICAgICBwYW5lbC5hcHBlbmRDaGlsZChkYXkpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHMgfSBmcm9tICcuLi8uLi9oZWxwZXIvdG9vbHMnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuXG5leHBvcnQgY29uc3QgYnVpbGRpbmcgPSBhc3luYyAoZkhvdXIsIGxIb3VyKSA9PiB7XG4gICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFuZWwnKTtcbiAgICByZW1vdmVDaGlsZHMocGFuZWwpO1xuICAgIGZvciAobGV0IGkgPSBmSG91cjsgaSA8IGxIb3VyOyBpKyspIHtcbiAgICAgICAgY29uc3QgaG91ciA9IGF3YWl0IGdldFRlbXBsYXRlTm9kZSgnLmhvdXInKTtcbiAgICAgICAgaG91ci5jbGFzc05hbWUgPSBgZiBoIGhvdXIke2l9IGJhY2tncm91bmRgO1xuICAgICAgICBwYW5lbC5hcHBlbmRDaGlsZChob3VyKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgZmlsbFdlYXRoZXJEZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2RldGFpbHMnO1xuaW1wb3J0IHsgZmlsbERheXNGb3JlY2FzdCB9IGZyb20gJy4uLy4uL21vZGVscy9maWxsaW5nV2lkZ2V0cy9mb3JlY2FzdCc7XG5pbXBvcnQgeyBmaWxsQ3VycmVudFdlYXRoZXJEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGxpbmdXaWRnZXRzL2luZm8nO1xuXG5leHBvcnQgY29uc3Qgdmlld1dlYXRoZXIgPSBhc3luYyAoY2l0eSkgPT4ge1xuICAgIGZpbGxDdXJyZW50V2VhdGhlckRhdGEoY2l0eSk7XG4gICAgZmlsbFdlYXRoZXJEZXRhaWxzKGNpdHkpO1xuICAgIGZpbGxEYXlzRm9yZWNhc3QoMywgY2l0eSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldFRlbXBsYXRlTm9kZSA9IGFzeW5jIChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWUpLmNsb25lTm9kZSh0cnVlKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59O1xuIiwiaW1wb3J0IHsgZ2V0SWNvbiB9IGZyb20gJy4uLy4uL21vZGVscy9maWxsaW5nV2lkZ2V0cy9pbmZvJztcbmltcG9ydCB7IGdldFJhbmRvbVdhbGxwYXBlciB9IGZyb20gJy4uLy4uL21vZGVscy93YWxscGFwZXJBcGknO1xuXG5leHBvcnQgY29uc3Qgc2V0UmFuZG9tV2FsbHBhcGVyID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRSYW5kb21XYWxscGFwZXIob3B0aW9uKTtcbiAgICBjb25zdCBoaXRzID0gZGF0YS5oaXRzO1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGl0cy5sZW5ndGgpO1xuICAgIGNvbnN0IGltYWdlID0gYXdhaXQgZ2V0SWNvbihkYXRhLmhpdHNbaW5kZXhdLmxhcmdlSW1hZ2VVUkwpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpbWFnZS5zcmN9JylgO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
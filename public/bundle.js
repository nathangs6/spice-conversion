/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers.js":
/*!****************************!*\
  !*** ./src/controllers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addRow: () => (/* binding */ addRow),\n/* harmony export */   convertGroundToWholeAll: () => (/* binding */ convertGroundToWholeAll),\n/* harmony export */   convertGroundToWholeRow: () => (/* binding */ convertGroundToWholeRow),\n/* harmony export */   fractionToMixedFractionString: () => (/* binding */ fractionToMixedFractionString),\n/* harmony export */   fractionToString: () => (/* binding */ fractionToString),\n/* harmony export */   makeFractionalMeasurements: () => (/* binding */ makeFractionalMeasurements),\n/* harmony export */   selectMeasurement: () => (/* binding */ selectMeasurement),\n/* harmony export */   stringToFraction: () => (/* binding */ stringToFraction)\n/* harmony export */ });\n/* harmony import */ var _src_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/data.js */ \"./src/data.js\");\n/* harmony import */ var _services_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.js */ \"./src/services.js\");\n\r\n\r\n\r\nfunction fractionToString(fraction) {\r\n    if (fraction.getNum() == 0) {\r\n        return \"\";\r\n    }\r\n    return fraction.getNum() + \"/\" + fraction.getDen();\r\n}\r\n\r\nfunction fractionToMixedFractionString(fraction) {\r\n    fraction = fraction.reduce();\r\n    var whole;\r\n    var parts;\r\n    [whole, parts] = fraction.makeMixed();\r\n    return whole.toString() + \" \" + fractionToString(parts);\r\n}\r\n\r\nfunction stringToFraction(s) {\r\n    var parts = s.split(\"/\");\r\n    return new _src_data_js__WEBPACK_IMPORTED_MODULE_0__.Fraction(parseInt(parts[0], 10), parseInt(parts[1], 10))\r\n}\r\n\r\nfunction addRow() {\r\n    var table = document.getElementById(\"spice-table\").getElementsByTagName('tbody')[0]\r\n    var newRowNum = table.getElementsByTagName(\"tr\").length + 1\r\n    var newRow = table.insertRow();\r\n\r\n    // Make spice cell\r\n    var newCell = newRow.insertCell(0);\r\n    var select = document.createElement(\"select\")\r\n    var option = document.createElement(\"option\");\r\n    option.value = \"disabled\";\r\n    option.text = \"Spice\";\r\n    option.disabled = true;\r\n    option.selected = true;\r\n    select.add(option);\r\n    var spiceNames = Object.keys(_src_data_js__WEBPACK_IMPORTED_MODULE_0__.spiceOptions);\r\n    spiceNames.sort();\r\n    for (let i = 0; i < spiceNames.length; i++) {\r\n        option = document.createElement(\"option\");\r\n        option.value = _src_data_js__WEBPACK_IMPORTED_MODULE_0__.spiceOptions[spiceNames[i]].value;\r\n        option.text = _src_data_js__WEBPACK_IMPORTED_MODULE_0__.spiceOptions[spiceNames[i]].text;\r\n        select.add(option);\r\n    }\r\n    select.name = \"spice-\" + newRowNum;\r\n    select.id = \"spice-\" + newRowNum;\r\n    newCell.appendChild(select)\r\n\r\n    // Make measurement cell\r\n    newCell = newRow.insertCell(1);\r\n    select = document.createElement(\"select\")\r\n    option = document.createElement(\"option\");\r\n    option.value = \"disabled\";\r\n    option.text = \"Meas.\";\r\n    option.disabled = true;\r\n    option.selected = true;\r\n    select.add(option);\r\n    for (let i = 0; i < _src_data_js__WEBPACK_IMPORTED_MODULE_0__.measurementOptions.length; i++) {\r\n        option = document.createElement(\"option\");\r\n        option.value = _src_data_js__WEBPACK_IMPORTED_MODULE_0__.measurementOptions[i].value;\r\n        option.text = _src_data_js__WEBPACK_IMPORTED_MODULE_0__.measurementOptions[i].text;\r\n        select.add(option);\r\n    }\r\n    select.name = \"measurement-\" + newRowNum;\r\n    select.id = \"measurement-\" + newRowNum;\r\n    select.setAttribute(\"onchange\", \"selectMeasurement(event)\");\r\n    newCell.appendChild(select)\r\n\r\n    // Make quantity cell\r\n    newCell = newRow.insertCell(2);\r\n    var quantityDiv = document.createElement(\"div\");\r\n    quantityDiv.id = \"quantity-\" + newRowNum;\r\n    newCell.appendChild(quantityDiv);\r\n\r\n    // Make output cell\r\n    newCell = newRow.insertCell(3);\r\n    var newOutput = document.createElement(\"span\");\r\n    newOutput.id = \"output-\" + newRowNum + \"-quantity\";\r\n    newCell.appendChild(newOutput);\r\n    var spacer = document.createElement(\"span\");\r\n    spacer.innerHTML = \" \";\r\n    newCell.appendChild(spacer);\r\n    newOutput = document.createElement(\"span\");\r\n    newOutput.id = \"output-\" + newRowNum + \"-measure\";\r\n    newCell.appendChild(newOutput);\r\n\r\n    // Make button cell\r\n    newCell = newRow.insertCell(4);\r\n    var button = document.createElement(\"button\");\r\n    button.onclick = () => { convertGroundToWholeRow(newRowNum) };\r\n    button.innerHTML = \"Convert\";\r\n    button.className = \"button\";\r\n    newCell.appendChild(button);\r\n\r\n    // Make notes cell\r\n    newCell = newRow.insertCell(5);\r\n    var notes = document.createElement(\"input\");\r\n    notes.type = \"text\";\r\n    newCell.appendChild(notes);\r\n}\r\nwindow.addRow = addRow;\r\n\r\nfunction makeFractionalMeasurements() {\r\n    var fractionSelect = document.createElement(\"select\");\r\n    var option = document.createElement(\"option\");\r\n    option.value = \"disabled\";\r\n    option.text = \"Fr.\";\r\n    option.disabled = true;\r\n    option.selected = true;\r\n    fractionSelect.add(option);\r\n    for (var i = 0; i < _src_data_js__WEBPACK_IMPORTED_MODULE_0__.fractionOptions.length; i++) {\r\n        option = document.createElement(\"option\");\r\n        option.value = _src_data_js__WEBPACK_IMPORTED_MODULE_0__.fractionOptions[i].value;\r\n        option.text = _src_data_js__WEBPACK_IMPORTED_MODULE_0__.fractionOptions[i].text;\r\n        fractionSelect.add(option);\r\n    }\r\n    return fractionSelect;\r\n}\r\nwindow.makeFractionalMeasurements = makeFractionalMeasurements;\r\n\r\nfunction selectMeasurement(e) {\r\n    var measurement = e.target.value;\r\n    // TODO: make the below work for row numbers greater than 9\r\n    var quantityDiv = document.getElementById(\"quantity-\" + e.target.name[e.target.name.length-1])\r\n\r\n    if (measurement == \"g\" || measurement == \"kg\") {\r\n        var newInput = document.createElement(\"input\");\r\n        newInput.name = quantityDiv.id + \"-num\";\r\n        newInput.id = newInput.name;\r\n        newInput.type = \"number\";\r\n        quantityDiv.innerHTML = '';\r\n        quantityDiv.appendChild(newInput);\r\n    } else if (measurement == \"tsp\" || measurement == \"tbsp\") {\r\n        quantityDiv.innerHTML = '';\r\n        var newSelect = document.createElement(\"select\");\r\n        for (var i = 0; i < 10; i++) {\r\n            var option = document.createElement(\"option\");\r\n            option.value = i;\r\n            option.text = i;\r\n            newSelect.add(option);\r\n        }\r\n        newSelect.id = quantityDiv.id + \"-whole\";\r\n        newSelect.name = quantityDiv.id;\r\n        quantityDiv.appendChild(newSelect);\r\n\r\n        newSelect = makeFractionalMeasurements();\r\n        newSelect.id = quantityDiv.id + \"-fraction\";\r\n        newSelect.name = newSelect.id;\r\n        quantityDiv.appendChild(newSelect);\r\n    }\r\n}\r\nwindow.selectMeasurement = selectMeasurement;\r\n\r\nfunction convertGroundToWholeRow(i) {\r\n    var spice = document.getElementById(\"spice-\"+i).value;\r\n    var meas = document.getElementById(\"measurement-\"+i).value;\r\n    var outputQuantity = document.getElementById(\"output-\"+i+\"-quantity\");\r\n    //var outputMeasure = document.getElementById(\"output-\"+i+\"-measure\");\r\n    var quantity;\r\n    var quantity_str;\r\n    if (meas == \"g\" || meas == \"kg\") {\r\n        quantity = document.getElementById(\"quantity-\"+i+\"-num\").value;\r\n        quantity_str = quantity;\r\n    } else {\r\n        var whole = parseInt(document.getElementById(\"quantity-\"+i+\"-whole\").value, 10);\r\n        var frac = stringToFraction(document.getElementById(\"quantity-\"+i+\"-fraction\").value)\r\n        quantity = frac.addInteger(whole);\r\n        quantity_str = fractionToMixedFractionString((0,_services_js__WEBPACK_IMPORTED_MODULE_1__.convertGroundToWhole)(spice, quantity, meas));\r\n    }\r\n    outputQuantity.innerHTML = quantity_str;\r\n}\r\nwindow.convertGroundToWholeRow = convertGroundToWholeRow;\r\n\r\nfunction convertGroundToWholeAll() {\r\n    var table = document.getElementById(\"spice-table\").getElementsByTagName('tbody')[0]\r\n    var rows = table.getElementsByTagName(\"tr\")\r\n    for (var i = 1; i < rows.length+1; i++) {\r\n        convertGroundToWholeRow(i);\r\n    }\r\n}\r\nwindow.convertGroundToWholeAll = convertGroundToWholeAll;\n\n//# sourceURL=webpack://spice-conversion/./src/controllers.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Fraction: () => (/* binding */ Fraction),\n/* harmony export */   _gcd: () => (/* binding */ _gcd),\n/* harmony export */   fractionOptions: () => (/* binding */ fractionOptions),\n/* harmony export */   measurementOptions: () => (/* binding */ measurementOptions),\n/* harmony export */   spiceOptions: () => (/* binding */ spiceOptions)\n/* harmony export */ });\nfunction _gcd(a, b) {\r\n    return b ? _gcd(b, a%b) : a;\r\n}\r\n\r\nclass Fraction {\r\n    constructor(num, den) {\r\n        this.num = num;\r\n        this.den = den;\r\n    }\r\n    getNum() {\r\n        return this.num;\r\n    }\r\n    getDen() {\r\n        return this.den;\r\n    }\r\n    equals(f) {\r\n        var thisReduced = this.reduce()\r\n        var fReduced = f.reduce()\r\n        return thisReduced.getNum() == fReduced.getNum() && thisReduced.getDen() == fReduced.getDen();\r\n    }\r\n    reduce() {\r\n        var n = this.getNum()\r\n        var d = this.getDen()\r\n        var gcd = _gcd(n, d);\r\n        return new Fraction(Math.floor(n/gcd), Math.floor(d/gcd))\r\n    }\r\n    makeMixed() {\r\n        var n = this.getNum();\r\n        var d = this.getDen();\r\n\r\n        return [Math.floor(n/d), new Fraction(n%d, d)];\r\n    }\r\n    multiplyByInteger(n) {\r\n        return new Fraction(this.getNum()*n, this.getDen());\r\n    }\r\n    divideByInteger(n) {\r\n        return new Fraction(this.getNum(), this.getDen()*n);\r\n    }\r\n    addInteger(n) {\r\n        return new Fraction(this.getNum() + n*this.getDen(), this.getDen())\r\n    }\r\n    multiplyByFraction(f) {\r\n        return new Fraction(this.getNum() * f.getNum(), this.getDen() * f.getDen());\r\n    }\r\n}\r\n\r\nconst spiceOptions = {\r\n    peppercorn: {\r\n        value: \"peppercorn\",\r\n        text: \"Peppercorn\",\r\n        groundToWhole: new Fraction(1,1),\r\n        tbspToGrams: 8.1\r\n    },\r\n    allspice: {\r\n        value: \"allspice\",\r\n        text: \"Allspice\",\r\n        groundToWhole: new Fraction(4,3),\r\n        tbspToGrams: 8.1,\r\n    },\r\n    cumin: {\r\n        value: \"cumin\",\r\n        text: \"Cumin\",\r\n        groundToWhole: new Fraction(4,3),\r\n        tbspToGrams: 6.84\r\n\r\n    },\r\n    caraway: {\r\n        value: \"caraway\",\r\n        text: \"Caraway\",\r\n        groundToWhole: new Fraction(4,3),\r\n        tbspToGrams: 7.27\r\n\r\n    },\r\n    fennel: {\r\n        value: \"fennel\",\r\n        text: \"Fennel\",\r\n        groundToWhole: new Fraction(4,3),\r\n        tbspToGrams: 6.58\r\n\r\n    },\r\n    mustard: {\r\n        value: \"mustard\",\r\n        text: \"Mustard\",\r\n        groundToWhole: new Fraction(1,1),\r\n        tbspToGrams: 8.1\r\n\r\n    },\r\n    anise_seed: {\r\n        value: \"anise_seed\",\r\n        text: \"Anise Seed\",\r\n        groundToWhole: new Fraction(1,1),\r\n        tbspToGrams: 8.1\r\n\r\n    },\r\n    dill_seed: {\r\n        value: \"dill_seed\",\r\n        text: \"Dill Seed\",\r\n        groundToWhole: new Fraction(1,1),\r\n        tbspToGrams: 8.1\r\n\r\n    },\r\n    celery_seed: {\r\n        value: \"celery_seed\",\r\n        text: \"Celery Seed\",\r\n        groundToWhole: new Fraction(1,1),\r\n        tbspToGrams: 8.1\r\n\r\n    },\r\n    cardamom: {\r\n        value: \"cardamom\",\r\n        text: \"Cardamom\",\r\n        groundToWhole: new Fraction(6,1),\r\n        tbspToGrams: 8.1,\r\n        wholeMeasure: \"pods\"\r\n\r\n    },\r\n    cloves: {\r\n        value: \"cloves\",\r\n        text: \"Clove\",\r\n        groundToWhole: new Fraction(4,3),\r\n        tbspToGrams: 8.1\r\n\r\n    },\r\n    coriander: {\r\n        value: \"coriander\",\r\n        text: \"Coriander\",\r\n        groundToWhole: new Fraction(2,1),\r\n        tbspToGrams: 8.1\r\n\r\n    },\r\n    cinnamon: {\r\n        value: \"cinnamon\",\r\n        text: \"Cinnamon\",\r\n        groundToWhole: new Fraction(3,1),\r\n        tbspToGrams: 8.1,\r\n        wholeMeasure: \"inch stick\"\r\n\r\n    }\r\n}\r\n\r\nconst measurementOptions = [\r\n    { value: \"g\", text: \"g\" },\r\n    { value: \"kg\", text: \"kg\" },\r\n    { value: \"tsp\", text: \"tsp\" },\r\n    { value: \"tbsp\", text: \"tbsp\" }\r\n]\r\n\r\nconst fractionOptions = [\r\n    { value: \"0/1\", text: \"0\" },\r\n    { value: \"1/16\", text: \"1/16\" },\r\n    { value: \"1/8\", text: \"1/8\" },\r\n    { value: \"3/16\", text: \"3/16\" },\r\n    { value: \"1/4\", text: \"1/4\" },\r\n    { value: \"5/16\", text: \"5/16\" },\r\n    { value: \"3/8\", text: \"3/8\" },\r\n    { value: \"7/16\", text: \"7/16\" },\r\n    { value: \"1/2\", text: \"1/2\" },\r\n    { value: \"9/16\", text: \"9/16\" },\r\n    { value: \"5/8\", text: \"5/8\" },\r\n    { value: \"11/16\", text: \"11/16\" },\r\n    { value: \"3/4\", text: \"3/4\" },\r\n    { value: \"13/16\", text: \"13/16\" },\r\n    { value: \"7/8\", text: \"7/8\" },\r\n    { value: \"15/16\", text: \"15/16\" }\r\n];\r\n\n\n//# sourceURL=webpack://spice-conversion/./src/data.js?");

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertGramsToKilograms: () => (/* binding */ convertGramsToKilograms),\n/* harmony export */   convertGroundToWhole: () => (/* binding */ convertGroundToWhole),\n/* harmony export */   convertKilogramsToGrams: () => (/* binding */ convertKilogramsToGrams),\n/* harmony export */   convertTbspToTsp: () => (/* binding */ convertTbspToTsp),\n/* harmony export */   convertTspToTbsp: () => (/* binding */ convertTspToTbsp)\n/* harmony export */ });\n/* harmony import */ var _src_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/data.js */ \"./src/data.js\");\n\r\n\r\n////////////////////////////\r\n/// CONVERSION FUNCTIONS ///\r\n////////////////////////////\r\nfunction convertKilogramsToGrams(value) {\r\n    return value * 1000;\r\n}\r\n\r\nfunction convertGramsToKilograms(value) {\r\n    return value / 1000;\r\n}\r\n\r\nfunction convertTbspToTsp(fraction) {\r\n    return fraction.multiplyByInteger(3);\r\n}\r\n\r\nfunction convertTspToTbsp(fraction) {\r\n    return fraction.divideByInteger(3);\r\n}\r\n\r\nfunction convertGroundToWhole(spice_str, amount, measure) {\r\n    if (measure == \"g\" || measure == \"kg\") {\r\n        return amount;\r\n    }\r\n    var convert_fraction = _src_data_js__WEBPACK_IMPORTED_MODULE_0__.spiceOptions[spice_str].groundToWhole\r\n    return amount.multiplyByFraction(convert_fraction)\r\n}\r\n\n\n//# sourceURL=webpack://spice-conversion/./src/services.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/controllers.js");
/******/ 	
/******/ })()
;
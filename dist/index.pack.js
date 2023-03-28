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

/***/ "./classes.ts":
/*!********************!*\
  !*** ./classes.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar MainProperty = /** @class */ (function () {\r\n    function MainProperty(src, title, reviews) {\r\n        this.src = src;\r\n        this.title = title;\r\n        this.reviews = reviews;\r\n    }\r\n    return MainProperty;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainProperty);\r\n\n\n//# sourceURL=webpack://my-app/./classes.ts?");

/***/ }),

/***/ "./enums.ts":
/*!******************!*\
  !*** ./enums.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoyaltyUser\": () => (/* binding */ LoyaltyUser),\n/* harmony export */   \"Permissions\": () => (/* binding */ Permissions)\n/* harmony export */ });\nvar Permissions;\r\n(function (Permissions) {\r\n    Permissions[\"ADMIN\"] = \"ADMIN\";\r\n    Permissions[\"READ_ONLY\"] = \"READ_ONLY\";\r\n})(Permissions || (Permissions = {}));\r\nvar LoyaltyUser;\r\n(function (LoyaltyUser) {\r\n    LoyaltyUser[\"GOLD_USER\"] = \"GOLD_USER\";\r\n    LoyaltyUser[\"SILVER_USER\"] = \"SILVER_USER\";\r\n    LoyaltyUser[\"BRONZE_USER\"] = \"BRONZE_USER\";\r\n})(LoyaltyUser || (LoyaltyUser = {}));\r\n\n\n//# sourceURL=webpack://my-app/./enums.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./utils.ts\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ \"./enums.ts\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ \"./classes.ts\");\n\r\n\r\n\r\nvar propertyContainer = document.querySelector('.properties');\r\nvar reviewContainer = document.querySelector('.reviews');\r\nvar container = document.querySelector('.container');\r\nvar button = document.querySelector('button');\r\nvar footer = document.querySelector('.footer');\r\nvar isLoggedIn;\r\n// Reviews\r\nvar reviews = [\r\n    {\r\n        name: 'Sheila',\r\n        stars: 5,\r\n        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.GOLD_USER,\r\n        date: '01-04-2021'\r\n    },\r\n    {\r\n        name: 'Andrzej',\r\n        stars: 3,\r\n        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.BRONZE_USER,\r\n        date: '28-03-2021'\r\n    },\r\n    {\r\n        name: 'Omar',\r\n        stars: 4,\r\n        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.SILVER_USER,\r\n        date: '27-03-2021',\r\n    },\r\n];\r\nvar you = {\r\n    firstName: 'Bobby',\r\n    lastName: 'Brown',\r\n    permissions: _enums__WEBPACK_IMPORTED_MODULE_1__.Permissions.ADMIN,\r\n    isReturning: true,\r\n    age: 35,\r\n    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']\r\n};\r\n// Array of Properties\r\nvar properties = [\r\n    {\r\n        image: 'images/colombia-property.jpg',\r\n        title: 'Colombian Shack',\r\n        price: 45,\r\n        location: {\r\n            firstLine: 'shack 37',\r\n            city: 'Bogota',\r\n            code: 45632,\r\n            country: 'Colombia'\r\n        },\r\n        contact: [+112343823978921, 'marywinkle@gmail.com'],\r\n        isAvailable: true\r\n    },\r\n    {\r\n        image: 'images/poland-property.jpg',\r\n        title: 'Polish Cottage',\r\n        price: 30,\r\n        location: {\r\n            firstLine: 'no 23',\r\n            city: 'Gdansk',\r\n            code: 343903,\r\n            country: 'Poland'\r\n        },\r\n        contact: [+1298239028490830, 'garydavis@hotmail.com'],\r\n        isAvailable: false\r\n    },\r\n    {\r\n        image: 'images/london-property.jpg',\r\n        title: 'London Flat',\r\n        price: 25,\r\n        location: {\r\n            firstLine: 'flat 15',\r\n            city: 'London',\r\n            code: 'SW4 5XW',\r\n            country: 'United Kingdom',\r\n        },\r\n        contact: [+34829374892553, 'andyluger@aol.com'],\r\n        isAvailable: true\r\n    },\r\n    {\r\n        image: 'images/malaysian-hotel.jpeg',\r\n        title: 'Malia Hotel',\r\n        price: 35,\r\n        location: {\r\n            firstLine: 'Room 4',\r\n            city: 'Malia',\r\n            code: 45334,\r\n            country: 'Malaysia'\r\n        },\r\n        contact: [+60349822083, 'lee34@gmail.com'],\r\n        isAvailable: false\r\n    }\r\n];\r\n// Functions\r\n(0,_utils__WEBPACK_IMPORTED_MODULE_0__.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);\r\n(0,_utils__WEBPACK_IMPORTED_MODULE_0__.populateUser)(you.isReturning, you.firstName);\r\n// Add the properties\r\nfor (var i = 0; i < properties.length; i++) {\r\n    var card = document.createElement('div');\r\n    card.classList.add('card');\r\n    card.innerHTML = properties[i].title;\r\n    var image_1 = document.createElement('img');\r\n    image_1.setAttribute('src', properties[i].image);\r\n    card.appendChild(image_1);\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showDetails)(you.permissions, card, properties[i].price);\r\n    propertyContainer.appendChild(card);\r\n}\r\nvar count = 0;\r\nfunction addReviews(array) {\r\n    if (!count) {\r\n        count++;\r\n        var topTwo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTopTwoReviews)(array);\r\n        for (var i = 0; i < topTwo.length; i++) {\r\n            var card = document.createElement('div');\r\n            card.classList.add('review-card');\r\n            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;\r\n            reviewContainer.appendChild(card);\r\n        }\r\n        container.removeChild(button);\r\n    }\r\n}\r\nbutton.addEventListener('click', function () { return addReviews(reviews); });\r\nvar currentLocation = ['London', '11.03', 17];\r\nfooter.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';\r\nvar yourMainProperty = new _classes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('images/italian-property.jpg', 'Italian House', [{\r\n        name: 'Olive',\r\n        stars: 5,\r\n        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.GOLD_USER,\r\n        date: '12-04-2021'\r\n    }]);\r\nvar mainImageContainer = document.querySelector('.main-image');\r\nvar image = document.createElement('img');\r\nimage.setAttribute('src', yourMainProperty.src);\r\nmainImageContainer.appendChild(image);\r\n\n\n//# sourceURL=webpack://my-app/./index.ts?");

/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTopTwoReviews\": () => (/* binding */ getTopTwoReviews),\n/* harmony export */   \"makeMultiple\": () => (/* binding */ makeMultiple),\n/* harmony export */   \"populateUser\": () => (/* binding */ populateUser),\n/* harmony export */   \"showDetails\": () => (/* binding */ showDetails),\n/* harmony export */   \"showReviewTotal\": () => (/* binding */ showReviewTotal)\n/* harmony export */ });\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ \"./enums.ts\");\nvar reviewTotalDisplay = document.querySelector('#reviews');\r\nvar returningUserDisplay = document.querySelector('#returning-user');\r\nvar userNameDisplay = document.querySelector('#user');\r\n\r\nfunction showReviewTotal(value, reviewer, isLoyalty) {\r\n    var iconDisplay = _enums__WEBPACK_IMPORTED_MODULE_0__.LoyaltyUser.GOLD_USER ? '⭐' : '';\r\n    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;\r\n}\r\nfunction populateUser(isReturning, userName) {\r\n    if (isReturning) {\r\n        returningUserDisplay.innerHTML = 'back';\r\n    }\r\n    userNameDisplay.innerHTML = userName;\r\n}\r\nfunction showDetails(value, element, price) {\r\n    if (value) {\r\n        var priceDisplay = document.createElement('div');\r\n        priceDisplay.innerHTML = price.toString() + '/night';\r\n        element.appendChild(priceDisplay);\r\n    }\r\n}\r\nfunction makeMultiple(value) {\r\n    if (value > 1 || value == 0) {\r\n        return 's';\r\n    }\r\n    else\r\n        return '';\r\n}\r\nfunction getTopTwoReviews(reviews) {\r\n    var sortedReviews = reviews.sort(function (a, b) { return b.stars - a.stars; });\r\n    return sortedReviews.slice(0, 2);\r\n}\r\n\n\n//# sourceURL=webpack://my-app/./utils.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
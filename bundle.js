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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_mensajeAlerta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/mensajeAlerta */ \"./src/modulos/mensajeAlerta.js\");\n/* harmony import */ var _modulos_clasePersona__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/clasePersona */ \"./src/modulos/clasePersona.js\");\n\n\nObject(_modulos_mensajeAlerta__WEBPACK_IMPORTED_MODULE_0__[\"mensajeAlerta\"])('Hola mundo!');\nvar celeste = new _modulos_clasePersona__WEBPACK_IMPORTED_MODULE_1__[\"Persona\"]('Celeste Rueda', 28);\nceleste.mostrarInfo();\n/*\r\nCuando exportamos colocando 'export default' al momento de importar se pueden omitir las llaves y tambien\r\nse puede llamar la clase de cualquier otra manera, no hace falta respetar el nombre de origen \r\n*/\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modulos/clasePersona.js":
/*!*************************************!*\
  !*** ./src/modulos/clasePersona.js ***!
  \*************************************/
/*! exports provided: Persona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Persona\", function() { return Persona; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Persona = /*#__PURE__*/function () {\n  function Persona(nombre, edad) {\n    _classCallCheck(this, Persona);\n\n    this.nombre = nombre;\n    this.edad = edad;\n  }\n\n  _createClass(Persona, [{\n    key: \"mostrarInfo\",\n    value: function mostrarInfo() {\n      console.log(\"\".concat(this.nombre, \" tiene \").concat(this.edad, \" a\\xF1os\"));\n    }\n  }]);\n\n  return Persona;\n}();\n\n//# sourceURL=webpack:///./src/modulos/clasePersona.js?");

/***/ }),

/***/ "./src/modulos/mensajeAlerta.js":
/*!**************************************!*\
  !*** ./src/modulos/mensajeAlerta.js ***!
  \**************************************/
/*! exports provided: mensajeAlerta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mensajeAlerta\", function() { return mensajeAlerta; });\nvar mensajeAlerta = function mensajeAlerta(mensaje) {\n  alert(mensaje);\n};\n/*\r\nOtras formas de exportar son:\r\n\r\n-en vez de poner 'export' delante de lo que queremos exportar, colocar 'export default' \r\n\r\n-sino en vez de poner 'export' delante de lo que queremos exportar, poner al final del archivo por ejemplo:\r\nexport {mensajeAlerta};\r\nexport default Persona;\r\n\r\nSe pueden exportar funciones(como en este caso), arreglos, variables, objetos,etc.\r\n\r\n*/\n\n//# sourceURL=webpack:///./src/modulos/mensajeAlerta.js?");

/***/ })

/******/ });
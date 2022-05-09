/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/ship */ \"./src/models/ship.js\");\n/* harmony import */ var _libs_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/array */ \"./src/libs/array.js\");\n/* harmony import */ var _models_asteroid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/asteroid */ \"./src/models/asteroid.js\");\n/* harmony import */ var _libs_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/number */ \"./src/libs/number.js\");\n/* harmony import */ var _templates_stage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/stage */ \"./src/templates/stage.js\");\n/* harmony import */ var _utils_canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/canvas */ \"./src/utils/canvas.js\");\n/* harmony import */ var _libs_vector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libs/vector */ \"./src/libs/vector.js\");\n/* harmony import */ var _models_bullet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/bullet */ \"./src/models/bullet.js\");\n/* harmony import */ var _models_particle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/particle */ \"./src/models/particle.js\");\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _audio_laser_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./audio/laser.mp3 */ \"./src/audio/laser.mp3\");\n/* harmony import */ var _audio_explosion_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audio/explosion.mp3 */ \"./src/audio/explosion.mp3\");\n/* harmony import */ var _audio_rocket_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./audio/rocket.mp3 */ \"./src/audio/rocket.mp3\");\n/* harmony import */ var _models_black_hole__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/black-hole */ \"./src/models/black-hole.js\");\n/* harmony import */ var _models_explosion_particle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/explosion-particle */ \"./src/models/explosion-particle.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ship = null;\nvar asteroids = [];\nvar bullets = [];\nvar thrustParticles = [];\nvar explosionParticles = [];\nvar blackHoles = [];\nvar laserAudio = new Audio(_audio_laser_mp3__WEBPACK_IMPORTED_MODULE_10__);\ndocument.body.appendChild((0,_templates_stage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('<canvas id=\\'game-action-layer\\'/>'));\nvar canvas = document.getElementById('game-action-layer');\ncanvas.setAttribute('height', '400');\ncanvas.setAttribute('width', '400');\nvar isAccelerating = false;\nvar isTurningLeft = false;\nvar isTurningRight = false;\nwindow.addEventListener('keydown', function (event) {\n  if (event.repeat) {\n    return;\n  }\n\n  switch (event.key) {\n    case 'ArrowLeft':\n      isTurningLeft = true;\n      break;\n\n    case 'ArrowRight':\n      isTurningRight = true;\n      break;\n\n    case 'ArrowUp':\n      // const rocketAudio = new Audio(rocketAudioUrl);\n      // rocketAudio.play();\n      isAccelerating = true;\n      break;\n\n    case ' ':\n      // laserAudio.play();\n      var bullet = new _models_bullet__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n\n      var _ship$muzzle = ship.muzzle();\n\n      var _ship$muzzle2 = _slicedToArray(_ship$muzzle, 2);\n\n      bullet.x = _ship$muzzle2[0];\n      bullet.y = _ship$muzzle2[1];\n      bullet.vx = ship.vx;\n      bullet.vy = ship.vy;\n      bullet.rotationAngle = ship.rotationAngle;\n      bullet.acceleration = 40;\n      bullets.push(bullet);\n      break;\n  }\n});\nwindow.addEventListener('keyup', function (event) {\n  switch (event.key) {\n    case 'ArrowLeft':\n      isTurningLeft = false;\n      break;\n\n    case 'ArrowRight':\n      isTurningRight = false;\n      break;\n\n    case 'ArrowUp':\n      isAccelerating = false;\n      break;\n\n    case ' ':\n      // isFiringLaser = false;\n      break;\n  }\n});\nvar ctx = canvas.getContext('2d');\nvar mapCoordinates = (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_5__.toPixels)(canvas.width, canvas.height, 20, 20);\n\nvar newRound = function newRound() {\n  ship = new _models_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  asteroids = (0,_libs_array__WEBPACK_IMPORTED_MODULE_1__.range)(8).map(function (i) {\n    var asteroid = new _models_asteroid__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    asteroid.x = (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.randomInt)(-9, 9);\n    asteroid.y = (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.randomInt)(-9, 9);\n    return asteroid;\n  });\n  bullets = [];\n  thrustParticles = [];\n  blackHoles = (0,_libs_array__WEBPACK_IMPORTED_MODULE_1__.range)(1).map(function (i) {\n    return new _models_black_hole__WEBPACK_IMPORTED_MODULE_13__[\"default\"](-0.1);\n  });\n};\n\nvar draw = function draw(polygons) {\n  var appearance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var polygon = polygons.map(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        x = _ref2[0],\n        y = _ref2[1];\n\n    return mapCoordinates(x, y);\n  });\n  ctx.save();\n  (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_5__.trace)(ctx, polygon);\n  (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_5__.shade)(ctx, appearance);\n  (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_5__.fillAndStroke)(ctx, appearance);\n  ctx.restore();\n};\n\nvar lastTime = performance.now();\n\nvar gameLoop = function gameLoop() {\n  var now = performance.now();\n  var elapsed = now - lastTime;\n  lastTime = now;\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  blackHoles.map(function (blackHole) {\n    draw(blackHole.transformed(), {\n      fillStyle: 'Black',\n      shadowColor: 'Gray',\n      shadowBlur: 16\n    });\n  });\n\n  if (isAccelerating) {\n    ship.acceleration = 12;\n    var thrustParticlesCount = (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.randomInt)(1, 5);\n\n    for (var i = 0; i < thrustParticlesCount; i++) {\n      var thrustParticle = new _models_particle__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n\n      var _ship$tail = ship.tail();\n\n      var _ship$tail2 = _slicedToArray(_ship$tail, 2);\n\n      thrustParticle.x = _ship$tail2[0];\n      thrustParticle.y = _ship$tail2[1];\n      thrustParticle.vx = ship.vx;\n      thrustParticle.vy = ship.vy;\n      thrustParticle.reach = (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.randomInt)(3, 10);\n      thrustParticle.rotationAngle = ship.rotationAngle - Math.PI + (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.random)(-0.2, 0.2);\n      thrustParticle.acceleration = (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.randomInt)(20, 30);\n      thrustParticles.push(thrustParticle);\n    }\n  } else {\n    ship.acceleration = 0;\n  }\n\n  if (isTurningLeft && !isTurningRight) {\n    ship.rotationAngle += 0.1;\n  } else if (!isTurningLeft && isTurningRight) {\n    ship.rotationAngle -= 0.1;\n  }\n\n  ship.rotate(elapsed);\n  ship.accelerate(elapsed);\n  ship.move(elapsed);\n  draw(ship.transformed(), {\n    lineWidth: 1,\n    strokeStyle: 'Blue',\n    fillStyle: 'Lavender'\n  });\n  var scatteredAsteroids = [];\n  var crash = false;\n  asteroids = asteroids.filter(function (asteroid) {\n    if (asteroid.doesCollide(ship)) {\n      crash = true;\n    }\n\n    var _iterator = _createForOfIteratorHelper(bullets),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var bullet = _step.value;\n\n        if (asteroid.doesCollide(bullet)) {\n          var explosionAudio = new Audio(_audio_explosion_mp3__WEBPACK_IMPORTED_MODULE_11__); // explosionAudio.play();\n\n          var explosionParticlesCount = (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.randomInt)(30, 50) * (4 - asteroid.generation);\n\n          for (var _i2 = 0; _i2 < explosionParticlesCount; _i2++) {\n            var explosionParticle = new _models_explosion_particle__WEBPACK_IMPORTED_MODULE_14__[\"default\"]();\n            explosionParticle.x = asteroid.x + (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.random)(-0.2, 0.2);\n            explosionParticle.y = asteroid.y + (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.random)(-0.2, 0.2);\n            var rotationAngle = (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.random)(0, Math.PI * 2);\n\n            var _toCartesian = (0,_libs_vector__WEBPACK_IMPORTED_MODULE_6__.toCartesian)([3, rotationAngle]),\n                _toCartesian2 = _slicedToArray(_toCartesian, 2),\n                vx = _toCartesian2[0],\n                vy = _toCartesian2[1];\n\n            explosionParticle.vx = vx;\n            explosionParticle.vy = vy;\n            explosionParticle.reach = (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.randomInt)(2, 5);\n            explosionParticle.rotationAngle = rotationAngle;\n            explosionParticle.acceleration = (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.randomInt)(-3, -1);\n            explosionParticles.push(explosionParticle);\n          }\n\n          bullet.reach = 0;\n\n          if (asteroid.generation < 3) {\n            (0,_libs_array__WEBPACK_IMPORTED_MODULE_1__.range)(3).forEach(function (_) {\n              var chip = new _models_asteroid__WEBPACK_IMPORTED_MODULE_2__[\"default\"](asteroid.generation + 1);\n              chip.x = asteroid.x;\n              chip.y = asteroid.y;\n              scatteredAsteroids.push(chip);\n            });\n          }\n\n          return false;\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    return true;\n  });\n  asteroids = [].concat(_toConsumableArray(asteroids), scatteredAsteroids);\n  blackHoles.forEach(function (blackHole) {\n    asteroids.forEach(function (asteroid) {\n      var _field = (0,_libs_vector__WEBPACK_IMPORTED_MODULE_6__.field)(blackHole, asteroid.x, asteroid.y),\n          _field2 = _slicedToArray(_field, 2),\n          gx = _field2[0],\n          gy = _field2[1];\n\n      asteroid.vx += gx * (elapsed / 1000);\n      asteroid.vy += gy * (elapsed / 1000);\n    });\n\n    var _field3 = (0,_libs_vector__WEBPACK_IMPORTED_MODULE_6__.field)(blackHole, ship.x, ship.y),\n        _field4 = _slicedToArray(_field3, 2),\n        gx = _field4[0],\n        gy = _field4[1];\n\n    ship.vx += gx * (elapsed / 1000);\n    ship.vy += gy * (elapsed / 1000);\n  });\n  asteroids.forEach(function (asteroid) {\n    asteroid.move(elapsed);\n    asteroid.rotate(elapsed);\n    draw(asteroid.transformed(), {\n      lineWidth: 1,\n      strokeStyle: 'Green',\n      fillStyle: 'Honeydew'\n    });\n  });\n  bullets = bullets.filter(function (bullet) {\n    return bullet.travelled < bullet.reach;\n  });\n  bullets.forEach(function (bullet) {\n    bullet.accelerate(elapsed);\n    bullet.move(elapsed);\n    draw(bullet.transformed(), {\n      lineWidth: 1,\n      strokeStyle: 'Red'\n    });\n  });\n  thrustParticles = thrustParticles.filter(function (particle) {\n    return particle.travelled < particle.reach;\n  });\n  thrustParticles.forEach(function (particle) {\n    particle.accelerate(elapsed);\n    particle.move(elapsed);\n    draw(particle.transformed(), {\n      lineWidth: 1,\n      strokeStyle: \"rgba(255,\".concat((0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.randomInt)(128, 255), \",0,\").concat(1 - particle.travelled / particle.reach, \")\"),\n      shadowColor: 'White',\n      shadowBlur: 1\n    });\n  });\n  explosionParticles = explosionParticles.filter(function (particle) {\n    return particle.travelled < particle.reach;\n  });\n  explosionParticles.forEach(function (particle) {\n    particle.accelerate(elapsed);\n    particle.move(elapsed);\n    var green = (0,_libs_number__WEBPACK_IMPORTED_MODULE_3__.randomInt)(200, 255);\n    draw(particle.transformed(), {\n      fillStyle: \"rgba(\".concat(green - 15, \",\").concat(green, \",\").concat(green - 15, \",\").concat(1 - particle.travelled / particle.reach, \")\"),\n      shadowColor: 'White',\n      shadowBlur: 2\n    });\n  });\n\n  if (crash) {\n    newRound();\n  }\n\n  requestAnimationFrame(gameLoop);\n};\n\nnewRound();\ngameLoop();\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/libs/array.js":
/*!***************************!*\
  !*** ./src/libs/array.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"multiply\": function() { return /* binding */ multiply; },\n/* harmony export */   \"range\": function() { return /* binding */ range; },\n/* harmony export */   \"remove\": function() { return /* binding */ remove; },\n/* harmony export */   \"sum\": function() { return /* binding */ sum; },\n/* harmony export */   \"zip\": function() { return /* binding */ zip; }\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sum = function sum() {\n  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {\n    nums[_key] = arguments[_key];\n  }\n\n  return nums.reduce(function (acc, num) {\n    return acc + num;\n  });\n};\nvar multiply = function multiply() {\n  for (var _len2 = arguments.length, nums = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    nums[_key2] = arguments[_key2];\n  }\n\n  return nums.reduce(function (acc, num) {\n    return acc * num;\n  });\n};\nvar range = function range(size) {\n  var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return _toConsumableArray(Array(size).keys()).map(function (i) {\n    return i + startAt;\n  });\n};\nvar zip = function zip() {\n  for (var _len3 = arguments.length, arrays = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n    arrays[_key3] = arguments[_key3];\n  }\n\n  return arrays[0].map(function (_, i) {\n    return arrays.map(function (array) {\n      return array[i];\n    });\n  });\n};\nvar remove = function remove(arr, item) {\n  var i = arr.indexOf(item);\n\n  if (i > -1) {\n    arr.splice(i, 1);\n  }\n};\n\n//# sourceURL=webpack://asteroids/./src/libs/array.js?");

/***/ }),

/***/ "./src/libs/number.js":
/*!****************************!*\
  !*** ./src/libs/number.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clamp\": function() { return /* binding */ clamp; },\n/* harmony export */   \"random\": function() { return /* binding */ random; },\n/* harmony export */   \"randomInt\": function() { return /* binding */ randomInt; },\n/* harmony export */   \"valueMap\": function() { return /* binding */ valueMap; }\n/* harmony export */ });\nvar clamp = function clamp(num, min, max) {\n  return Math.max(min, Math.min(num, max));\n};\nvar valueMap = function valueMap(outMin, outMax, inMin, inMax, inValue) {\n  var diffIn = inValue - inMin;\n  var rangeIn = inMax - inMin;\n  var percentage = diffIn / rangeIn;\n  var diff = outMax - outMin;\n  return outMin + diff * percentage;\n};\nvar randomInt = function randomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1) + min);\n};\nvar random = function random(min, max) {\n  return Math.random() * (max - min) + min;\n};\n\n//# sourceURL=webpack://asteroids/./src/libs/number.js?");

/***/ }),

/***/ "./src/libs/vector.js":
/*!****************************!*\
  !*** ./src/libs/vector.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": function() { return /* binding */ add; },\n/* harmony export */   \"angleBetween\": function() { return /* binding */ angleBetween; },\n/* harmony export */   \"component\": function() { return /* binding */ component; },\n/* harmony export */   \"cross\": function() { return /* binding */ cross; },\n/* harmony export */   \"distance\": function() { return /* binding */ distance; },\n/* harmony export */   \"doSegmentsIntersect\": function() { return /* binding */ doSegmentsIntersect; },\n/* harmony export */   \"dot\": function() { return /* binding */ dot; },\n/* harmony export */   \"faceTo2d\": function() { return /* binding */ faceTo2d; },\n/* harmony export */   \"field\": function() { return /* binding */ field; },\n/* harmony export */   \"inferMatrix\": function() { return /* binding */ inferMatrix; },\n/* harmony export */   \"intersection\": function() { return /* binding */ intersection; },\n/* harmony export */   \"length\": function() { return /* binding */ length; },\n/* harmony export */   \"linearCombination\": function() { return /* binding */ linearCombination; },\n/* harmony export */   \"matrixMultiply\": function() { return /* binding */ matrixMultiply; },\n/* harmony export */   \"multiply\": function() { return /* binding */ multiply; },\n/* harmony export */   \"multiplyMatrixVector\": function() { return /* binding */ multiplyMatrixVector; },\n/* harmony export */   \"normal\": function() { return /* binding */ normal; },\n/* harmony export */   \"perimeter\": function() { return /* binding */ perimeter; },\n/* harmony export */   \"rotate\": function() { return /* binding */ rotate; },\n/* harmony export */   \"rotateX\": function() { return /* binding */ rotateX; },\n/* harmony export */   \"rotateY\": function() { return /* binding */ rotateY; },\n/* harmony export */   \"rotateZ\": function() { return /* binding */ rotateZ; },\n/* harmony export */   \"scale\": function() { return /* binding */ scale; },\n/* harmony export */   \"subtract\": function() { return /* binding */ subtract; },\n/* harmony export */   \"toCartesian\": function() { return /* binding */ toCartesian; },\n/* harmony export */   \"toPolar\": function() { return /* binding */ toPolar; },\n/* harmony export */   \"translate\": function() { return /* binding */ translate; },\n/* harmony export */   \"translate3d\": function() { return /* binding */ translate3d; },\n/* harmony export */   \"unit\": function() { return /* binding */ unit; },\n/* harmony export */   \"vectorTo2d\": function() { return /* binding */ vectorTo2d; }\n/* harmony export */ });\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ \"./src/libs/array.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar add = function add() {\n  for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {\n    vectors[_key] = arguments[_key];\n  }\n\n  return vectors[0].map(function (_, i) {\n    return vectors.reduce(function (acc, vector) {\n      return acc + vector[i];\n    }, 0);\n  });\n};\nvar subtract = function subtract(vec1, vec2) {\n  return vec1.map(function (n, i) {\n    return n - vec2[i];\n  });\n};\nvar multiply = function multiply(scalar, vector) {\n  return vector.map(function (n) {\n    return n * scalar;\n  });\n};\nvar length = function length(vector) {\n  return Math.sqrt(_array__WEBPACK_IMPORTED_MODULE_0__.sum.apply(void 0, _toConsumableArray(vector.map(function (num) {\n    return Math.pow(num, 2);\n  }))));\n};\nvar translate = function translate(translation) {\n  for (var _len2 = arguments.length, vectors = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n    vectors[_key2 - 1] = arguments[_key2];\n  }\n\n  return vectors.map(function (vector) {\n    return add(translation, vector);\n  });\n};\nvar scale = function scale(scalar) {\n  for (var _len3 = arguments.length, vectors = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {\n    vectors[_key3 - 1] = arguments[_key3];\n  }\n\n  return vectors.map(function (vector) {\n    return multiply(scalar, vector);\n  });\n};\nvar distance = function distance(vec1, vec2) {\n  return length(subtract(vec1, vec2));\n};\nvar perimeter = function perimeter() {\n  for (var _len4 = arguments.length, vectors = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n    vectors[_key4] = arguments[_key4];\n  }\n\n  return _array__WEBPACK_IMPORTED_MODULE_0__.sum.apply(void 0, _toConsumableArray(vectors.map(function (vector, i) {\n    return distance(vector, vectors[(i + 1) % vectors.length]);\n  })));\n};\nvar toCartesian = function toCartesian(polar) {\n  var _polar = _slicedToArray(polar, 2),\n      length = _polar[0],\n      angle = _polar[1];\n\n  return [length * Math.cos(angle), length * Math.sin(angle)];\n};\nvar toPolar = function toPolar(cartesian) {\n  var _cartesian = _slicedToArray(cartesian, 2),\n      x = _cartesian[0],\n      y = _cartesian[1];\n\n  var angle = Math.atan2(y, x);\n  return [length(cartesian), angle];\n};\nvar rotate = function rotate(angle, vector) {\n  var _toPolar = toPolar(vector),\n      _toPolar2 = _slicedToArray(_toPolar, 2),\n      l = _toPolar2[0],\n      a = _toPolar2[1];\n\n  return toCartesian([l, a + angle]);\n}; // Measure vector alignment. Used to check if vectors are perpendicular without\n// doing any trigonometry.\n\nvar dot = function dot(vec1, vec2) {\n  var products = vec1.map(function (n, i) {\n    return n * vec2[i];\n  });\n  return _array__WEBPACK_IMPORTED_MODULE_0__.sum.apply(void 0, _toConsumableArray(products));\n};\nvar angleBetween = function angleBetween(vec1, vec2) {\n  return Math.acos(dot(vec1, vec2) / (length(vec1) * length(vec2)));\n}; // Measuring oriented area. Only meaningful for 3d vectors. Cross product is\n// orientation dependant and helps keeping track of orientation in our\n// computations. Given two input vectors, the cross product outputs a result\n// that is perpendicular to both, and how perpendicular they input vectors are\n// (ie. how big area the two input vectors span). When drawing 3d on a 2d canvas,\n// the cross product helps us decide which polygons are visible\n\nvar cross = function cross(u, v) {\n  var _u = _slicedToArray(u, 3),\n      ux = _u[0],\n      uy = _u[1],\n      uz = _u[2];\n\n  var _v = _slicedToArray(v, 3),\n      vx = _v[0],\n      vy = _v[1],\n      vz = _v[2];\n\n  return [uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx];\n}; // extracts the part of any 3D vector pointing in a given direction\n\nvar component = function component(vector, direction) {\n  return dot(vector, direction) / length(direction);\n};\nvar vectorTo2d = function vectorTo2d(vector) {\n  var rightDir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [1, 0, 0];\n  var upDir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 1, 0];\n  return [component(vector, rightDir), component(vector, upDir)];\n};\nvar faceTo2d = function faceTo2d(face) {\n  var rightDir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [1, 0, 0];\n  var upDir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 1, 0];\n  return face.map(function (vertex) {\n    return vectorTo2d(vertex, rightDir, upDir);\n  });\n}; // takes a vector and returns another in the same direction but with length 1\n\nvar unit = function unit(vector) {\n  return multiply(1 / length(vector), vector);\n}; // takes a face and gives us a vector perpendicular to it\n\nvar normal = function normal(face) {\n  return cross(subtract(face[1], face[0]), subtract(face[2], face[0]));\n};\nvar rotateX = function rotateX(angle, vector) {\n  var _vector = _slicedToArray(vector, 3),\n      x = _vector[0],\n      y = _vector[1],\n      z = _vector[2];\n\n  var _rotate = rotate(angle, [y, z]),\n      _rotate2 = _slicedToArray(_rotate, 2),\n      rotatedY = _rotate2[0],\n      rotatedZ = _rotate2[1];\n\n  return [x, rotatedY, rotatedZ];\n};\nvar rotateY = function rotateY(angle, vector) {\n  var _vector2 = _slicedToArray(vector, 3),\n      x = _vector2[0],\n      y = _vector2[1],\n      z = _vector2[2];\n\n  var _rotate3 = rotate(angle, [x, z]),\n      _rotate4 = _slicedToArray(_rotate3, 2),\n      rotatedX = _rotate4[0],\n      rotatedZ = _rotate4[1];\n\n  return [rotatedX, y, rotatedZ];\n};\nvar rotateZ = function rotateZ(angle, vector) {\n  var _vector3 = _slicedToArray(vector, 3),\n      x = _vector3[0],\n      y = _vector3[1],\n      z = _vector3[2];\n\n  var _rotate5 = rotate(angle, [x, y]),\n      _rotate6 = _slicedToArray(_rotate5, 2),\n      rotatedX = _rotate6[0],\n      rotatedY = _rotate6[1];\n\n  return [rotatedX, rotatedY, z];\n};\nvar linearCombination = function linearCombination(scalars) {\n  for (var _len5 = arguments.length, vectors = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {\n    vectors[_key5 - 1] = arguments[_key5];\n  }\n\n  var scaled = scalars.map(function (s, i) {\n    return multiply(s, vectors[i]);\n  });\n  return add.apply(void 0, _toConsumableArray(scaled));\n};\nvar multiplyMatrixVector = function multiplyMatrixVector(matrix, vector) {\n  return linearCombination.apply(void 0, [vector].concat(_toConsumableArray(_array__WEBPACK_IMPORTED_MODULE_0__.zip.apply(void 0, _toConsumableArray(matrix)))));\n};\nvar matrixMultiply = function matrixMultiply(a, b) {\n  return a.map(function (row) {\n    return _array__WEBPACK_IMPORTED_MODULE_0__.zip.apply(void 0, _toConsumableArray(b)).map(function (col) {\n      return dot(row, col);\n    });\n  });\n};\nvar translate3d = function translate3d(translation, vector) {\n  var _translation = _slicedToArray(translation, 3),\n      a = _translation[0],\n      b = _translation[1],\n      c = _translation[2];\n\n  var _vector4 = _slicedToArray(vector, 3),\n      x = _vector4[0],\n      y = _vector4[1],\n      z = _vector4[2];\n\n  var m = [[1, 0, 0, a], [0, 1, 0, b], [0, 0, 1, c], [0, 0, 0, 1]];\n  var v = [x, y, z, 1];\n\n  var _multiplyMatrixVector = multiplyMatrixVector(m, v),\n      _multiplyMatrixVector2 = _slicedToArray(_multiplyMatrixVector, 4),\n      xOut = _multiplyMatrixVector2[0],\n      yOut = _multiplyMatrixVector2[1],\n      zOut = _multiplyMatrixVector2[2],\n      _ = _multiplyMatrixVector2[3];\n\n  return [xOut, yOut, zOut];\n};\nvar inferMatrix = function inferMatrix(n, transformation) {\n  var d = (0,_array__WEBPACK_IMPORTED_MODULE_0__.range)(n);\n  var standardBasisVector = d.map(function (row) {\n    return d.map(function (col) {\n      return row === col ? 1 : 0;\n    });\n  });\n  var cols = standardBasisVector.map(function (vector) {\n    return transformation(vector);\n  });\n  return _array__WEBPACK_IMPORTED_MODULE_0__.zip.apply(void 0, _toConsumableArray(cols));\n}; // From https://stackoverflow.com/a/24392281 and https://stackoverflow.com/a/58657254\n// Alternative approach might use https://github.com/lovasoa/linear-solve/blob/master/gauss-jordan.js\n// returns intersection point if the line from (a,b)->(c,d) intersects with (p,q)->(r,s)\n\nvar intersection = function intersection(u1, u2, v1, v2) {\n  var _u2 = _slicedToArray(u1, 2),\n      a = _u2[0],\n      b = _u2[1];\n\n  var _u3 = _slicedToArray(u2, 2),\n      c = _u3[0],\n      d = _u3[1];\n\n  var _v2 = _slicedToArray(v1, 2),\n      p = _v2[0],\n      q = _v2[1];\n\n  var _v3 = _slicedToArray(v2, 2),\n      r = _v3[0],\n      s = _v3[1];\n\n  var det = (c - a) * (s - q) - (r - p) * (d - b); // Parallel lines\n\n  if (det === 0) {\n    return null;\n  }\n\n  var lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;\n  var gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;\n\n  if (0 < lambda && lambda < 1 && 0 < gamma && gamma < 1) {\n    return [a + lambda * (c - a), b + lambda * (d - b)];\n  }\n\n  return null;\n};\nvar doSegmentsIntersect = function doSegmentsIntersect(s1, s2) {\n  var _s2 = _slicedToArray(s1, 2),\n      u1 = _s2[0],\n      u2 = _s2[1];\n\n  var _s3 = _slicedToArray(s2, 2),\n      v1 = _s3[0],\n      v2 = _s3[1];\n\n  var d1 = distance(u1, u2);\n  var d2 = distance(v1, v2);\n  var i = intersection(u1, u2, v1, v2);\n\n  if (i === null) {\n    return false;\n  }\n\n  return distance(u1, i) <= d1 && distance(u2, i) <= d1 && distance(v1, i) <= d2 && distance(v2, i) <= d2;\n};\nvar field = function field(source, x, y) {\n  var relativePosition = [x - source.x, y - source.y];\n  return scale(source.force, relativePosition)[0];\n};\n\n//# sourceURL=webpack://asteroids/./src/libs/vector.js?");

/***/ }),

/***/ "./src/models/asteroid.js":
/*!********************************!*\
  !*** ./src/models/asteroid.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Asteroid; }\n/* harmony export */ });\n/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygon */ \"./src/models/polygon.js\");\n/* harmony import */ var _libs_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/number */ \"./src/libs/number.js\");\n/* harmony import */ var _libs_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/vector */ \"./src/libs/vector.js\");\n/* harmony import */ var _libs_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/array */ \"./src/libs/array.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar Asteroid = /*#__PURE__*/function (_Polygon) {\n  _inherits(Asteroid, _Polygon);\n\n  var _super = _createSuper(Asteroid);\n\n  function Asteroid() {\n    var _this;\n\n    var generation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n    _classCallCheck(this, Asteroid);\n\n    var sides = (0,_libs_number__WEBPACK_IMPORTED_MODULE_1__.randomInt)(5, 9);\n    var vectors = (0,_libs_array__WEBPACK_IMPORTED_MODULE_3__.range)(sides).map(function (i) {\n      var length = (0,_libs_number__WEBPACK_IMPORTED_MODULE_1__.random)(0.5, 1) / generation;\n      return (0,_libs_vector__WEBPACK_IMPORTED_MODULE_2__.toCartesian)([length, 2 * Math.PI * i / sides]);\n    });\n    _this = _super.call(this, vectors);\n    _this.vx = (0,_libs_number__WEBPACK_IMPORTED_MODULE_1__.random)(-1, 1) * generation;\n    _this.vy = (0,_libs_number__WEBPACK_IMPORTED_MODULE_1__.random)(-1, 1) * generation;\n    _this.vr = (0,_libs_number__WEBPACK_IMPORTED_MODULE_1__.random)(-1, 1) * generation;\n    _this.generation = generation;\n    return _this;\n  }\n\n  return _createClass(Asteroid);\n}(_polygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://asteroids/./src/models/asteroid.js?");

/***/ }),

/***/ "./src/models/black-hole.js":
/*!**********************************!*\
  !*** ./src/models/black-hole.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlackHole; }\n/* harmony export */ });\n/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygon */ \"./src/models/polygon.js\");\n/* harmony import */ var _libs_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/vector */ \"./src/libs/vector.js\");\n/* harmony import */ var _libs_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/array */ \"./src/libs/array.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar BlackHole = /*#__PURE__*/function (_Polygon) {\n  _inherits(BlackHole, _Polygon);\n\n  var _super = _createSuper(BlackHole);\n\n  function BlackHole(force) {\n    var _this;\n\n    _classCallCheck(this, BlackHole);\n\n    var sides = 20;\n    var vectors = (0,_libs_array__WEBPACK_IMPORTED_MODULE_2__.range)(sides).map(function (i) {\n      var length = 0.5;\n      return (0,_libs_vector__WEBPACK_IMPORTED_MODULE_1__.toCartesian)([length, 2 * Math.PI * i / sides]);\n    });\n    _this = _super.call(this, vectors);\n    _this.force = force;\n    return _this;\n  }\n\n  return _createClass(BlackHole);\n}(_polygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://asteroids/./src/models/black-hole.js?");

/***/ }),

/***/ "./src/models/bullet.js":
/*!******************************!*\
  !*** ./src/models/bullet.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bullet; }\n/* harmony export */ });\n/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygon */ \"./src/models/polygon.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Bullet = /*#__PURE__*/function (_Polygon) {\n  _inherits(Bullet, _Polygon);\n\n  var _super = _createSuper(Bullet);\n\n  function Bullet() {\n    var _this;\n\n    _classCallCheck(this, Bullet);\n\n    _this = _super.call(this, [[0, 0], [0.5, 0]]);\n    _this.reach = 50;\n    return _this;\n  }\n\n  return _createClass(Bullet);\n}(_polygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://asteroids/./src/models/bullet.js?");

/***/ }),

/***/ "./src/models/explosion-particle.js":
/*!******************************************!*\
  !*** ./src/models/explosion-particle.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExplosionParticle; }\n/* harmony export */ });\n/* harmony import */ var _libs_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/number */ \"./src/libs/number.js\");\n/* harmony import */ var _libs_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/array */ \"./src/libs/array.js\");\n/* harmony import */ var _libs_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/vector */ \"./src/libs/vector.js\");\n/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polygon */ \"./src/models/polygon.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar ExplosionParticle = /*#__PURE__*/function (_Polygon) {\n  _inherits(ExplosionParticle, _Polygon);\n\n  var _super = _createSuper(ExplosionParticle);\n\n  function ExplosionParticle() {\n    var _this;\n\n    _classCallCheck(this, ExplosionParticle);\n\n    var sides = (0,_libs_number__WEBPACK_IMPORTED_MODULE_0__.randomInt)(3, 6);\n    var vectors = (0,_libs_array__WEBPACK_IMPORTED_MODULE_1__.range)(sides).map(function (i) {\n      var length = (0,_libs_number__WEBPACK_IMPORTED_MODULE_0__.random)(0.05, 0.1);\n      return (0,_libs_vector__WEBPACK_IMPORTED_MODULE_2__.toCartesian)([length, 2 * Math.PI * i / sides]);\n    });\n    _this = _super.call(this, vectors);\n    _this.reach = 6;\n    return _this;\n  }\n\n  return _createClass(ExplosionParticle);\n}(_polygon__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n\n\n//# sourceURL=webpack://asteroids/./src/models/explosion-particle.js?");

/***/ }),

/***/ "./src/models/particle.js":
/*!********************************!*\
  !*** ./src/models/particle.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Particle; }\n/* harmony export */ });\n/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygon */ \"./src/models/polygon.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Particle = /*#__PURE__*/function (_Polygon) {\n  _inherits(Particle, _Polygon);\n\n  var _super = _createSuper(Particle);\n\n  function Particle() {\n    var _this;\n\n    _classCallCheck(this, Particle);\n\n    _this = _super.call(this, [[0, 0], [0.1, 0]]);\n    _this.reach = 6;\n    return _this;\n  }\n\n  return _createClass(Particle);\n}(_polygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://asteroids/./src/models/particle.js?");

/***/ }),

/***/ "./src/models/polygon.js":
/*!*******************************!*\
  !*** ./src/models/polygon.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Polygon; }\n/* harmony export */ });\n/* harmony import */ var _libs_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/vector */ \"./src/libs/vector.js\");\n/* harmony import */ var _libs_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/array */ \"./src/libs/array.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\nvar Polygon = /*#__PURE__*/function () {\n  function Polygon(points) {\n    _classCallCheck(this, Polygon);\n\n    this.points = points;\n    this.rotationAngle = 0;\n    this.x = 0;\n    this.y = 0;\n    this.vx = 0;\n    this.vy = 0;\n    this.vr = 0;\n    this.acceleration = 0;\n    this.travelled = 0;\n  }\n\n  _createClass(Polygon, [{\n    key: \"move\",\n    value: function move(ms) {\n      var dx = this.vx * ms / 1000;\n      var dy = this.vy * ms / 1000;\n\n      var _add = (0,_libs_vector__WEBPACK_IMPORTED_MODULE_0__.add)([this.x, this.y], [dx, dy]);\n\n      var _add2 = _slicedToArray(_add, 2);\n\n      this.x = _add2[0];\n      this.y = _add2[1];\n      this.travelled += this.speed() / ms;\n\n      if (this.x < -11) {\n        this.x += 22;\n      }\n\n      if (this.y < -11) {\n        this.y += 22;\n      }\n\n      if (this.x > 11) {\n        this.x -= 22;\n      }\n\n      if (this.y > 11) {\n        this.y -= 22;\n      }\n    }\n  }, {\n    key: \"rotate\",\n    value: function rotate(ms) {\n      var dr = this.vr * ms / 1000;\n\n      var _add3 = (0,_libs_vector__WEBPACK_IMPORTED_MODULE_0__.add)([this.rotationAngle], [dr]);\n\n      var _add4 = _slicedToArray(_add3, 1);\n\n      this.rotationAngle = _add4[0];\n    }\n  }, {\n    key: \"accelerate\",\n    value: function accelerate(ms) {\n      var ax = this.acceleration * Math.cos(this.rotationAngle);\n      var ay = this.acceleration * Math.sin(this.rotationAngle);\n      this.vx += ax * ms / 1000;\n      this.vy += ay * ms / 1000;\n    }\n  }, {\n    key: \"speed\",\n    value: function speed() {\n      return (0,_libs_vector__WEBPACK_IMPORTED_MODULE_0__.length)([this.vx, this.vy]);\n    }\n  }, {\n    key: \"transformed\",\n    value: function transformed() {\n      var _this = this;\n\n      var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.points;\n      return points.map(function (point) {\n        return (0,_libs_vector__WEBPACK_IMPORTED_MODULE_0__.rotate)(_this.rotationAngle, point);\n      }).map(function (point) {\n        return (0,_libs_vector__WEBPACK_IMPORTED_MODULE_0__.add)([_this.x, _this.y], point);\n      });\n    }\n  }, {\n    key: \"segments\",\n    value: function segments() {\n      var pointCount = this.points.length;\n      var points = this.transformed();\n      return (0,_libs_array__WEBPACK_IMPORTED_MODULE_1__.range)(pointCount).map(function (i) {\n        return [points[i], points[(i + 1) % pointCount]];\n      });\n    }\n  }, {\n    key: \"doesCollide\",\n    value: function doesCollide(otherPolygon) {\n      var _iterator = _createForOfIteratorHelper(otherPolygon.segments()),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var otherSegment = _step.value;\n\n          if (this.doesIntersect(otherSegment)) {\n            return true;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      return false;\n    }\n  }, {\n    key: \"doesIntersect\",\n    value: function doesIntersect(otherSegment) {\n      var _iterator2 = _createForOfIteratorHelper(this.segments()),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var segment = _step2.value;\n\n          if ((0,_libs_vector__WEBPACK_IMPORTED_MODULE_0__.doSegmentsIntersect)(otherSegment, segment)) {\n            return true;\n          }\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n\n      return false;\n    }\n  }]);\n\n  return Polygon;\n}();\n\n\n\n//# sourceURL=webpack://asteroids/./src/models/polygon.js?");

/***/ }),

/***/ "./src/models/ship.js":
/*!****************************!*\
  !*** ./src/models/ship.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ship; }\n/* harmony export */ });\n/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygon */ \"./src/models/polygon.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Ship = /*#__PURE__*/function (_Polygon) {\n  _inherits(Ship, _Polygon);\n\n  var _super = _createSuper(Ship);\n\n  function Ship() {\n    _classCallCheck(this, Ship);\n\n    return _super.call(this, [[0.5, 0], [-0.25, 0.25], [-0.25, -0.25]]);\n  }\n\n  _createClass(Ship, [{\n    key: \"muzzle\",\n    value: function muzzle() {\n      return this.transformed()[0];\n    }\n  }, {\n    key: \"tail\",\n    value: function tail() {\n      return this.transformed([[-0.25, 0]])[0];\n    } // laserSegment() {\n    //   const dist = 20 * Math.sqrt(2);\n    //   const [x, y] = this.transformed()[0]; // Coordinates for the tip of the ship\n    //   return [\n    //     [x, y],\n    //     [x + dist * Math.cos(this.rotationAngle), y + dist * Math.sin(this.rotationAngle)],\n    //   ];\n    // }\n\n  }]);\n\n  return Ship;\n}(_polygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://asteroids/./src/models/ship.js?");

/***/ }),

/***/ "./src/templates/stage.js":
/*!********************************!*\
  !*** ./src/templates/stage.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var innerHtml = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var element = document.createElement(\"div\");\n  element.innerHTML = innerHtml;\n  return element;\n});\n\n//# sourceURL=webpack://asteroids/./src/templates/stage.js?");

/***/ }),

/***/ "./src/utils/canvas.js":
/*!*****************************!*\
  !*** ./src/utils/canvas.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fillAndStroke\": function() { return /* binding */ fillAndStroke; },\n/* harmony export */   \"shade\": function() { return /* binding */ shade; },\n/* harmony export */   \"toPixels\": function() { return /* binding */ toPixels; },\n/* harmony export */   \"trace\": function() { return /* binding */ trace; }\n/* harmony export */ });\nvar trace = function trace(ctx, polygon) {\n  ctx.beginPath();\n  ctx.moveTo(polygon[0][0], polygon[0][1]);\n\n  for (var i = 1; i < polygon.length; i++) {\n    ctx.lineTo(polygon[i][0], polygon[i][1]);\n  }\n\n  ctx.closePath();\n};\nvar shade = function shade(ctx, appearance) {\n  var shadowProps = ['shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY'];\n  shadowProps.forEach(function (prop) {\n    if (prop in appearance) {\n      ctx[prop] = appearance[prop];\n    }\n  });\n};\nvar fillAndStroke = function fillAndStroke(ctx, appearance) {\n  var fillStyle = appearance.fillStyle,\n      strokeStyle = appearance.strokeStyle,\n      lineWidth = appearance.lineWidth;\n\n  if (fillStyle) {\n    ctx.fillStyle = fillStyle;\n    ctx.fill();\n  }\n\n  if (strokeStyle && lineWidth) {\n    ctx.strokeStyle = strokeStyle;\n    ctx.lineWidth = lineWidth;\n    ctx.stroke();\n  }\n};\nvar toPixels = function toPixels(width, height, localWidth, localHeight) {\n  return function (x, y) {\n    return [width / 2 + width * x / localWidth, height / 2 - height * y / localHeight];\n  };\n};\n\n//# sourceURL=webpack://asteroids/./src/utils/canvas.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\n/* eslint-env browser */\n\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\n\n/** @typedef {any} TODO */\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\n\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === \"undefined\";\nvar forEach = Array.prototype.forEach;\n/**\n * @param {function} fn\n * @param {number} time\n * @returns {(function(): void)|*}\n */\n\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    // @ts-ignore\n    var self = this; // eslint-disable-next-line prefer-rest-params\n\n    var args = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n\n    clearTimeout(timeout); // @ts-ignore\n\n    timeout = setTimeout(functionCall, time);\n  };\n}\n\nfunction noop() {}\n/**\n * @param {TODO} moduleId\n * @returns {TODO}\n */\n\n\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src =\n      /** @type {HTMLScriptElement} */\n      document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName(\"script\");\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n\n    srcByModuleId[moduleId] = src;\n  }\n  /**\n   * @param {string} fileMap\n   * @returns {null | string[]}\n   */\n\n\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n\n    if (!filename) {\n      return [src.replace(\".js\", \".css\")];\n    }\n\n    if (!fileMap) {\n      return [src.replace(\".js\", \".css\")];\n    }\n\n    return fileMap.split(\",\").map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), \"g\");\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n/**\n * @param {TODO} el\n * @param {string} [url]\n */\n\n\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    } // eslint-disable-next-line\n\n\n    url = el.href.split(\"?\")[0];\n  }\n\n  if (!isUrlRequest(\n  /** @type {string} */\n  url)) {\n    return;\n  }\n\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n\n  if (!url || !(url.indexOf(\".css\") > -1)) {\n    return;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener(\"load\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener(\"error\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n/**\n * @param {string} href\n * @param {TODO} src\n * @returns {TODO}\n */\n\n\nfunction getReloadUrl(href, src) {\n  var ret; // eslint-disable-next-line no-param-reassign\n\n  href = normalizeUrl(href);\n  src.some(\n  /**\n   * @param {string} url\n   */\n  // eslint-disable-next-line array-callback-return\n  function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n/**\n * @param {string} [src]\n * @returns {boolean}\n */\n\n\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n\n  var elements = document.querySelectorAll(\"link\");\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n\n    var url = getReloadUrl(el.href, src);\n\n    if (!isUrlRequest(url)) {\n      return;\n    }\n\n    if (el.visited === true) {\n      return;\n    }\n\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll(\"link\");\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n\n    updateCss(el);\n  });\n}\n/**\n * @param {string} url\n * @returns {boolean}\n */\n\n\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n  // It is not http or https\n  if (!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(url)) {\n    return false;\n  }\n\n  return true;\n}\n/**\n * @param {TODO} moduleId\n * @param {TODO} options\n * @returns {TODO}\n */\n\n\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log(\"no window.document found, will not HMR CSS\");\n    return noop;\n  }\n\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n\n    if (options.locals) {\n      console.log(\"[HMR] Detected local css modules. Reload all css\");\n      reloadAll();\n      return;\n    }\n\n    if (reloaded) {\n      console.log(\"[HMR] css reload %s\", src.join(\" \"));\n    } else {\n      console.log(\"[HMR] Reload all css\");\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://asteroids/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\n/* eslint-disable */\n\n/**\n * @param {string[]} pathComponents\n * @returns {string}\n */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case \"..\":\n        accumulator.pop();\n        break;\n\n      case \".\":\n        break;\n\n      default:\n        accumulator.push(item);\n    }\n\n    return accumulator;\n  },\n  /** @type {string[]} */\n  []).join(\"/\");\n}\n/**\n * @param {string} urlString\n * @returns {string}\n */\n\n\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n\n  var protocol = urlString.indexOf(\"//\") !== -1 ? urlString.split(\"//\")[0] + \"//\" : \"\";\n  var components = urlString.replace(new RegExp(protocol, \"i\"), \"\").split(\"/\");\n  var host = components[0].toLowerCase().replace(/\\.$/, \"\");\n  components[0] = \"\";\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://asteroids/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1652099392201\n      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://asteroids/./src/style/main.css?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/client.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/client.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("/*\n  Copyright © 2018 Andrew Powell\n\n  This Source Code Form is subject to the terms of the Mozilla Public\n  License, v. 2.0. If a copy of the MPL was not distributed with this\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n  The above copyright notice and this permission notice shall be\n  included in all copies or substantial portions of this Source Code Form.\n*/\n\n/**\n * @note This file exists merely as an easy reference for folks adding it to their configuration entries\n */\n\n(() => {\n  /* eslint-disable global-require */\n  const { run } = __webpack_require__(/*! ./lib/client/client */ \"./node_modules/webpack-plugin-serve/lib/client/client.js\");\n  let hash = '<unknown>';\n  let options;\n  try {\n    options = {\"compress\":null,\"headers\":null,\"historyFallback\":false,\"hmr\":true,\"host\":null,\"liveReload\":true,\"log\":{\"level\":\"info\",\"prefix\":{\"template\":\"{{level}}\"},\"name\":\"webpack-plugin-serve\"},\"open\":false,\"port\":8080,\"progress\":true,\"publicPath\":null,\"ramdisk\":false,\"secure\":false,\"static\":\"./dist\",\"status\":true,\"waitForBuild\":true,\"address\":\"[::]:8080\",\"compilerName\":null,\"wpsId\":\"71b628b\"};\n  } catch (e) {\n    const { log } = __webpack_require__(/*! ./lib/client/log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\");\n    log.error(\n      'The entry for webpack-plugin-serve was included in your build, but it does not appear that the plugin was. Please check your configuration.'\n    );\n  }\n\n  try {\n    // eslint-disable-next-line camelcase\n    hash = __webpack_require__.h();\n  } catch (e) {} // eslint-disable-line no-empty\n\n  run(hash, options);\n})();\n\n\n//# sourceURL=webpack://asteroids/./node_modules/webpack-plugin-serve/client.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js":
/*!**********************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\n  Copyright © 2018 Andrew Powell\n\n  This Source Code Form is subject to the terms of the Mozilla Public\n  License, v. 2.0. If a copy of the MPL was not distributed with this\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n  The above copyright notice and this permission notice shall be\n  included in all copies or substantial portions of this Source Code Form.\n*/\nconst { error, refresh, warn } = __webpack_require__(/*! ./log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\")();\n\n// ignore 1008 (HTTP 400 equivalent) and 1011 (HTTP 500 equivalent)\nconst ignoreCodes = [1008, 1011];\nconst maxAttempts = 10;\n\nclass ClientSocket {\n  constructor(options, ...args) {\n    this.args = args;\n    this.attempts = 0;\n    this.eventHandlers = [];\n    this.options = options;\n    this.retrying = false;\n\n    this.connect();\n  }\n\n  addEventListener(...args) {\n    this.eventHandlers.push(args);\n    this.socket.addEventListener(...args);\n  }\n\n  close() {\n    this.socket.close();\n  }\n\n  connect() {\n    if (this.socket) {\n      delete this.socket;\n    }\n\n    this.connecting = true;\n\n    this.socket = new WebSocket(...this.args);\n\n    if (this.options.retry) {\n      this.socket.addEventListener('close', (event) => {\n        if (ignoreCodes.includes(event.code)) {\n          return;\n        }\n\n        if (!this.retrying) {\n          warn(`The WebSocket was closed and will attempt to reconnect`);\n        }\n\n        this.reconnect();\n      });\n    } else {\n      this.socket.onclose = () => warn(`The client WebSocket was closed. ${refresh}`);\n    }\n\n    this.socket.addEventListener('open', () => {\n      this.attempts = 0;\n      this.retrying = false;\n    });\n\n    if (this.eventHandlers.length) {\n      for (const [name, fn] of this.eventHandlers) {\n        this.socket.addEventListener(name, fn);\n      }\n    }\n  }\n\n  reconnect() {\n    this.attempts += 1;\n    this.retrying = true;\n\n    if (this.attempts > maxAttempts) {\n      error(`The WebSocket could not be reconnected. ${refresh}`);\n      this.retrying = false;\n      return;\n    }\n\n    const timeout = 1000 * this.attempts ** 2;\n\n    setTimeout(() => this.connect(this.args), timeout);\n  }\n\n  removeEventListener(...args) {\n    const [, handler] = args;\n    this.eventHandlers = this.eventHandlers.filter(([, fn]) => fn === handler);\n    this.socket.removeEventListener(...args);\n  }\n}\n\nmodule.exports = { ClientSocket };\n\n\n//# sourceURL=webpack://asteroids/./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/client.js":
/*!****************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/client.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\n  Copyright © 2018 Andrew Powell\n\n  This Source Code Form is subject to the terms of the Mozilla Public\n  License, v. 2.0. If a copy of the MPL was not distributed with this\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n  The above copyright notice and this permission notice shall be\n  included in all copies or substantial portions of this Source Code Form.\n*/\n/* eslint-disable global-require */\nconst run = (buildHash, options) => {\n  const { address, client = {}, hmr, progress, secure, status } = options;\n\n  options.firstInstance = !window.webpackPluginServe; // eslint-disable-line no-param-reassign\n\n  window.webpackPluginServe = window.webpackPluginServe || {\n    compilers: {}\n  };\n  window.webpackPluginServe.silent = !!client.silent;\n\n  const { ClientSocket } = __webpack_require__(/*! ./ClientSocket */ \"./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js\");\n  const { replace } = __webpack_require__(/*! ./hmr */ \"./node_modules/webpack-plugin-serve/lib/client/hmr.js\");\n  const { error, info, warn } = __webpack_require__(/*! ./log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\")();\n\n  const protocol = secure ? 'wss' : 'ws';\n  const socket = new ClientSocket(client, `${client.protocol || protocol}://${client.address || address}/wps`);\n\n  const { compilerName } = options;\n\n  window.webpackPluginServe.compilers[compilerName] = {};\n\n  // prevents ECONNRESET errors on the server\n  window.addEventListener('beforeunload', () => socket.close());\n\n  socket.addEventListener('message', (message) => {\n    const { action, data = {} } = JSON.parse(message.data);\n    const { errors, hash = '<?>', warnings } = data || {};\n    const shortHash = hash.slice(0, 7);\n    const identifier = options.compilerName ? `(Compiler: ${options.compilerName}) ` : '';\n    const compiler = window.webpackPluginServe.compilers[compilerName];\n    const { wpsId } = data;\n\n    switch (action) {\n      case 'build':\n        compiler.done = false;\n        break;\n      case 'connected':\n        info(`WebSocket connected ${identifier}`);\n        break;\n      case 'done':\n        compiler.done = true;\n        break;\n      case 'problems':\n        if (data.errors.length) {\n          error(`${identifier}Build ${shortHash} produced errors:\\n`, errors);\n        }\n        if (data.warnings.length) {\n          warn(`${identifier}Build ${shortHash} produced warnings:\\n`, warnings);\n        }\n        break;\n      case 'reload':\n        window.location.reload();\n        break;\n      case 'replace':\n        // actions with a wpsId in tow indicate actions that should only be executed when the wpsId sent\n        // matches the wpsId set in options. this is how we can identify multiple compilers in the\n        // client.\n        if (wpsId && wpsId === options.wpsId) {\n          replace(buildHash, hash, hmr === 'refresh-on-failure');\n        }\n        break;\n      default:\n    }\n  });\n\n  if (options.firstInstance) {\n    if (progress === 'minimal') {\n      const { init } = __webpack_require__(/*! ./overlays/progress-minimal */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js\");\n      init(options, socket);\n    } else if (progress) {\n      const { init } = __webpack_require__(/*! ./overlays/progress */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js\");\n      init(options, socket);\n    }\n\n    if (status) {\n      const { init } = __webpack_require__(/*! ./overlays/status */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/status.js\");\n      init(options, socket);\n    }\n\n    if (true) {\n      info('Hot Module Replacement is active');\n\n      if (options.liveReload) {\n        info('Live Reload taking precedence over Hot Module Replacement');\n      }\n    } else {}\n\n    if (false) {}\n  }\n};\n\nmodule.exports = { run };\n\n\n//# sourceURL=webpack://asteroids/./node_modules/webpack-plugin-serve/lib/client/client.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/hmr.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/hmr.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\n  Copyright © 2018 Andrew Powell\n\n  This Source Code Form is subject to the terms of the Mozilla Public\n  License, v. 2.0. If a copy of the MPL was not distributed with this\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n  The above copyright notice and this permission notice shall be\n  included in all copies or substantial portions of this Source Code Form.\n*/\nconst { error, info, refresh, warn } = __webpack_require__(/*! ./log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\")();\n\nlet latest = true;\n\nconst hmr = (onFailure) => {\n  return {\n    onUnaccepted(data) {\n      onFailure();\n      warn('Change in unaccepted module(s):\\n', data);\n      warn(data);\n    },\n    onDeclined(data) {\n      onFailure();\n      warn('Change in declined module(s):\\n', data);\n    },\n    onErrored(data) {\n      onFailure();\n      error('Error in module(s):\\n', data);\n    }\n  };\n};\n\nconst replace = async (buildHash, hash, refreshOnFailure) => {\n  const { apply, check, status } = module.hot;\n\n  if (hash) {\n    // eslint-disable-next-line no-undef\n    latest = hash.includes(buildHash);\n  }\n\n  if (!latest) {\n    const hmrStatus = status();\n\n    if (hmrStatus === 'abort' || hmrStatus === 'fail') {\n      warn(`An HMR update was triggered, but ${hmrStatus}ed. ${refresh}`);\n      return;\n    }\n\n    let modules;\n\n    try {\n      modules = await check(false);\n    } catch (e) {\n      // noop. this typically happens when a MultiCompiler has more than one compiler that includes\n      // this script, and an update happens with a hash that isn't part of the compiler/module this\n      // instance was loaded for.\n      return;\n    }\n\n    if (!modules) {\n      warn(`No modules found for replacement. ${refresh}`);\n      return;\n    }\n\n    modules = await apply(\n      hmr(\n        refreshOnFailure\n          ? () => {\n              if (refreshOnFailure) {\n                // eslint-disable-next-line no-undef\n                location.reload();\n              }\n            }\n          : () => {}\n      )\n    );\n\n    if (modules) {\n      latest = true;\n      info(`Build ${hash.slice(0, 7)} replaced:\\n`, modules);\n    }\n  }\n};\n\nmodule.exports = { replace };\n\n\n//# sourceURL=webpack://asteroids/./node_modules/webpack-plugin-serve/lib/client/hmr.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/log.js ***!
  \*************************************************************/
/***/ (function(module) {

eval("/*\n  Copyright © 2018 Andrew Powell\n\n  This Source Code Form is subject to the terms of the Mozilla Public\n  License, v. 2.0. If a copy of the MPL was not distributed with this\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n  The above copyright notice and this permission notice shall be\n  included in all copies or substantial portions of this Source Code Form.\n*/\nconst { error, info, warn } = console;\nconst log = {\n  error: error.bind(console, '⬡ wps:'),\n  info: info.bind(console, '⬡ wps:'),\n  refresh: 'Please refresh the page',\n  warn: warn.bind(console, '⬡ wps:')\n};\nconst noop = () => {};\nconst silent = {\n  error: noop,\n  info: noop,\n  warn: noop\n};\n\nmodule.exports = () => (window.webpackPluginServe.silent ? silent : log);\n\n\n//# sourceURL=webpack://asteroids/./node_modules/webpack-plugin-serve/lib/client/log.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js ***!
  \***********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\n  Copyright © 2018 Andrew Powell, Matheus Gonçalves da Silva\n\n  This Source Code Form is subject to the terms of the Mozilla Public\n  License, v. 2.0. If a copy of the MPL was not distributed with this\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n  The above copyright notice and this permission notice shall be\n  included in all copies or substantial portions of this Source Code Form.\n*/\nconst { addCss, addHtml } = __webpack_require__(/*! ./util */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/util.js\");\n\nconst ns = 'wps-progress-minimal';\nconst html = `\n<div id=\"${ns}\" class=\"${ns}-hidden\">\n  <div id=\"${ns}-bar\"></div>\n</div>\n`;\nconst css = `\n#${ns} {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 4px;\n  width: 100vw;\n  z-index: 2147483645;\n}\n\n#${ns}-bar {\n  width: 0%;\n  height: 4px;\n  background-color: rgb(186, 223, 172);\n}\n\n@keyframes ${ns}-fade {\n\t0% {\n\t\topacity: 1;\n\t}\n\t100% {\n\t\topacity: 0;\n\t}\n}\n\n.${ns}-disappear {\n  animation: ${ns}-fade .3s;\n  animation-fill-mode: forwards;\n  animation-delay: .5s;\n}\n\n.${ns}-hidden {\n  display: none;\n}\n`;\n\nlet hideOnPageVisible = false;\n\nconst update = (percent) => {\n  const bar = document.querySelector(`#${ns}-bar`);\n  bar.style.width = `${percent}%`;\n};\n\nconst reset = (wrapper) => {\n  wrapper.classList.add(`${ns}-disappear`);\n};\n\nconst init = (options, socket) => {\n  if (options.firstInstance) {\n    document.addEventListener('DOMContentLoaded', () => {\n      addCss(css);\n      addHtml(html);\n\n      const wrapper = document.querySelector(`#${ns}`);\n      wrapper.addEventListener('animationend', () => {\n        update(0);\n        wrapper.classList.add(`${ns}-hidden`);\n      });\n    });\n\n    document.addEventListener('visibilitychange', () => {\n      if (!document.hidden && hideOnPageVisible) {\n        const wrapper = document.querySelector(`#${ns}`);\n        reset(wrapper);\n        hideOnPageVisible = false;\n      }\n    });\n  }\n\n  socket.addEventListener('message', (message) => {\n    const { action, data } = JSON.parse(message.data);\n\n    if (action !== 'progress') {\n      return;\n    }\n\n    const percent = Math.floor(data.percent * 100);\n    const wrapper = document.querySelector(`#${ns}`);\n\n    if (wrapper) {\n      wrapper.classList.remove(`${ns}-hidden`, `${ns}-disappear`);\n    }\n\n    if (data.percent === 1) {\n      if (document.hidden) {\n        hideOnPageVisible = true;\n      } else {\n        reset(wrapper);\n      }\n    } else {\n      hideOnPageVisible = false;\n    }\n\n    update(percent);\n  });\n};\n\nmodule.exports = {\n  init\n};\n\n\n//# sourceURL=webpack://asteroids/./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\n  Copyright © 2018 Andrew Powell, Matheus Gonçalves da Silva\n\n  This Source Code Form is subject to the terms of the Mozilla Public\n  License, v. 2.0. If a copy of the MPL was not distributed with this\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n  The above copyright notice and this permission notice shall be\n  included in all copies or substantial portions of this Source Code Form.\n*/\nconst { addCss, addHtml } = __webpack_require__(/*! ./util */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/util.js\");\n\nconst ns = 'wps-progress';\nconst css = `\n#${ns}{\n  width: 200px;\n  height: 200px;\n  position: fixed;\n  right: 5%;\n  top: 5%;\n  transition: opacity .25s ease-in-out;\n  z-index: 2147483645;\n}\n\n#${ns}-bg {\n  fill: #282d35;\n}\n\n#${ns}-fill {\n  fill: rgba(0, 0, 0, 0);\n  stroke: rgb(186, 223, 172);\n  stroke-dasharray: 219.99078369140625;\n  stroke-dashoffset: -219.99078369140625;\n  stroke-width: 10;\n  transform: rotate(90deg)translate(0px, -80px);\n}\n\n#${ns}-percent {\n  font-family: 'Open Sans';\n  font-size: 18px;\n  fill: #ffffff;\n}\n\n#${ns}-percent-value {\n  dominant-baseline: middle;\n  text-anchor: middle;\n}\n\n#${ns}-percent-super {\n  fill: #bdc3c7;\n  font-size: .45em;\n  baseline-shift: 10%;\n}\n\n.${ns}-noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n\n@keyframes ${ns}-fade {\n\t0% {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t\t-webkit-transform: scale(1);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\ttransform: scale(0);\n\t\t-webkit-transform: scale(0);\n\t}\n}\n\n.${ns}-disappear {\n  animation: ${ns}-fade .3s;\n  animation-fill-mode:forwards;\n  animation-delay: .5s;\n}\n\n.${ns}-hidden {\n  display: none;\n}\n\n/* Put google web font at the end, or you'll see FOUC in Firefox */\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\n`;\n\nconst html = `\n<svg id=\"${ns}\" class=\"${ns}-noselect ${ns}-hidden\" x=\"0px\" y=\"0px\" viewBox=\"0 0 80 80\">\n  <circle id=\"${ns}-bg\" cx=\"50%\" cy=\"50%\" r=\"35\"></circle>\n  <path id=\"${ns}-fill\" d=\"M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0\" />\n  <text id=\"${ns}-percent\" x=\"50%\" y=\"51%\"><tspan id=\"${ns}-percent-value\">0</tspan><tspan id=\"${ns}-percent-super\">%</tspan></text>\n</svg>\n`;\n\nlet hideOnPageVisible = false;\n\nconst update = (percent) => {\n  const max = -219.99078369140625;\n  const value = document.querySelector(`#${ns}-percent-value`);\n  const track = document.querySelector(`#${ns}-fill`);\n  const offset = ((100 - percent) / 100) * max;\n\n  track.setAttribute('style', `stroke-dashoffset: ${offset}`);\n  value.innerHTML = percent.toString();\n};\n\nconst reset = (svg) => {\n  svg.classList.add(`${ns}-disappear`);\n};\n\nconst init = (options, socket) => {\n  if (options.firstInstance) {\n    document.addEventListener('DOMContentLoaded', () => {\n      addCss(css);\n      addHtml(html);\n\n      // Reset progress to zero after disappear animation\n      const svg = document.querySelector(`#${ns}`);\n      svg.addEventListener('animationend', () => {\n        update(0);\n        svg.classList.add(`${ns}-hidden`);\n      });\n    });\n\n    document.addEventListener('visibilitychange', () => {\n      if (!document.hidden && hideOnPageVisible) {\n        const svg = document.querySelector(`#${ns}`);\n        reset(svg);\n        hideOnPageVisible = false;\n      }\n    });\n  }\n\n  socket.addEventListener('message', (message) => {\n    const { action, data } = JSON.parse(message.data);\n\n    if (action !== 'progress') {\n      return;\n    }\n\n    const percent = Math.floor(data.percent * 100);\n    const svg = document.querySelector(`#${ns}`);\n\n    if (!svg) {\n      return;\n    }\n\n    // we can safely call this even if it doesn't have the class\n    svg.classList.remove(`${ns}-disappear`, `${ns}-hidden`);\n\n    if (data.percent === 1) {\n      if (document.hidden) {\n        hideOnPageVisible = true;\n      } else {\n        reset(svg);\n      }\n    } else {\n      hideOnPageVisible = false;\n    }\n\n    update(percent);\n  });\n};\n\nmodule.exports = { init };\n\n\n//# sourceURL=webpack://asteroids/./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/status.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/status.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\n  Copyright © 2018 Andrew Powell\n\n  This Source Code Form is subject to the terms of the Mozilla Public\n  License, v. 2.0. If a copy of the MPL was not distributed with this\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n  The above copyright notice and this permission notice shall be\n  included in all copies or substantial portions of this Source Code Form.\n*/\nconst { addCss, addHtml, socketMessage } = __webpack_require__(/*! ./util */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/util.js\");\n\nconst ns = 'wps-status';\nconst css = `\n#${ns} {\n  background: #282d35;\n  border-radius: 0.6em;\n  display: flex;\n  flex-direction: column;\n\tfont-family: 'Open Sans', Helvetica, Arial, sans-serif;\n\tfont-size: 10px;\n  height: 90%;\n  min-height: 20em;\n  left: 50%;\n  opacity: 1;\n  overflow: hidden;\n  padding-bottom: 3em;\n  position: absolute;\n  top: 2rem;\n  transform: translateX(-50%);\n  transition: opacity .25s ease-in-out;\n  width: 95%;\n  z-index: 2147483645;\n}\n\n@keyframes ${ns}-hidden-display {\n\t0% {\n\t\topacity: 1;\n\t}\n\t99% {\n\t\tdisplay: inline-flex;\n\t\topacity: 0;\n\t}\n\t100% {\n\t\tdisplay: none;\n\t\topacity: 0;\n\t}\n}\n\n#${ns}.${ns}-hidden {\n  animation: ${ns}-hidden-display .3s;\n  animation-fill-mode:forwards;\n  display: none;\n}\n\n#${ns}.${ns}-min {\n  animation: minimize 10s;\n  bottom: 2em;\n  cursor: pointer;\n  height: 6em;\n  left: auto;\n  min-height: 6em;\n  padding-bottom: 0;\n  position: absolute;\n  right: 2em;\n  top: auto;\n  transform: none;\n  width: 6em;\n}\n\n#${ns}.${ns}-min #${ns}-beacon {\n  display: block;\n}\n\n#${ns}-title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: normal;\n  margin: 0;\n  padding: 0.6em 0;\n  text-align: center;\n  width: 100%;\n}\n\n#${ns}.${ns}-min #${ns}-title {\n  display: none;\n}\n\n#${ns}-title-errors {\n  color: #ff5f58;\n  font-style: normal;\n  padding-left: 1em;\n}\n\n#${ns}-title-warnings {\n  color: #ffbd2e;\n  font-style: normal;\n  padding-left: 1em;\n}\n\n#${ns}-problems {\n  overflow-y: auto;\n  padding: 1em 2em;\n}\n\n#${ns}-problems pre {\n  color: #ddd;\n  background: #282d35;\n  display: block;\n  font-size: 1.3em;\n\tfont-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  white-space: pre-wrap;\n}\n\n#${ns}-problems pre em {\n  background: #ff5f58;\n  border-radius: 0.3em;\n  color: #641e16;\n  font-style: normal;\n  line-height: 3em;\n  margin-right: 0.4em;\n  padding: 0.1em 0.4em;\n  text-transform: uppercase;\n}\n\npre#${ns}-warnings em {\n  background: #ffbd2e;\n  color: #3e2723;\n}\n\npre#${ns}-success {\n  display: none;\n  text-align: center;\n}\n\npre#${ns}-success em {\n  background: #7fb900;\n  color: #004d40;\n}\n\n#${ns}-problems.${ns}-success #${ns}-success {\n  display: block;\n}\n\n#${ns}.${ns}-min #${ns}-problems {\n  display: none;\n}\n\n#${ns}-nav {\n  opacity: 0.5;\n  padding: 1.2em;\n  position: absolute;\n}\n\n#${ns}.${ns}-min #${ns}-nav {\n  display: none;\n}\n\n#${ns}-nav:hover {\n  opacity: 1;\n}\n\n#${ns}-nav div {\n  background: #ff5f58;\n  border-radius: 1.2em;\n  cursor: pointer;\n  display: inline-block;\n  height: 1.2em;\n  position: relative;\n  width: 1.2em;\n}\n\ndiv#${ns}-min {\n  background: #ffbd2e;\n  margin-left: 0.8em;\n}\n\n#${ns}-beacon {\n  border-radius: 3em;\n  display: none;\n  font-size: 10px;\n  height: 3em;\n  margin: 1.6em auto;\n  position: relative;\n  width: 3em;\n}\n\n#${ns}-beacon:before, #${ns}-beacon:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(127,185,0, 0.2);\n  border-radius: 3em;\n  opacity: 0;\n}\n\n#${ns}-beacon:before {\n  animation: ${ns}-pulse 3s infinite linear;\n  transform: scale(1);\n}\n\n#${ns}-beacon:after {\n  animation: ${ns}-pulse 3s 2s infinite linear;\n}\n\n\n@keyframes ${ns}-pulse {\n  0% {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  33% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n#${ns}-beacon mark {\n  background: rgba(127, 185, 0, 1);\n  border-radius: 100% 100%;\n  height: 1em;\n  left: 1em;\n  position: absolute;\n  top: 1em;\n  width: 1em;\n}\n\n#${ns}-beacon.${ns}-error mark {\n  background: #ff5f58;\n}\n\n#${ns}-beacon.${ns}-error:before, #${ns}-beacon.error:after {\n  background: rgba(255, 95, 88, 0.2);\n}\n\n#${ns}-beacon.${ns}-warning mark {\n  background: #ffbd2e;\n}\n\n#${ns}-beacon.${ns}-warning:before, #${ns}-beacon.warning:after {\n  background: rgba(255, 189, 46, 0.2);\n}\n\n/* Put google web font at the end, or you'll see FOUC in Firefox */\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\n`;\n\nconst html = `\n<aside id=\"${ns}\" class=\"${ns}-hidden\" title=\"build status\">\n  <figure id=\"${ns}-beacon\">\n    <mark/>\n  </figure>\n  <nav id=\"${ns}-nav\">\n    <div id=\"${ns}-close\" title=\"close\"></div>\n    <div id=\"${ns}-min\" title=\"minmize\"></div>\n  </nav>\n  <h1 id=\"${ns}-title\">\n    build status\n    <em id=\"${ns}-title-errors\"></em>\n    <em id=\"${ns}-title-warnings\"></em>\n  </h1>\n  <article id=\"${ns}-problems\">\n    <pre id=\"${ns}-success\"><em>Build Successful</em></pre>\n    <pre id=\"${ns}-errors\"></pre>\n    <pre id=\"${ns}-warnings\"></pre>\n  </article>\n</aside>\n`;\n\nconst init = (options, socket) => {\n  const hidden = `${ns}-hidden`;\n  let hasProblems = false;\n  let aside;\n  let beacon;\n  let problems;\n  let preErrors;\n  let preWarnings;\n  let titleErrors;\n  let titleWarnings;\n\n  const reset = () => {\n    preErrors.innerHTML = '';\n    preWarnings.innerHTML = '';\n    problems.classList.remove(`${ns}-success`);\n    beacon.className = '';\n    titleErrors.innerText = '';\n    titleWarnings.innerText = '';\n  };\n\n  const addErrors = (errors) => {\n    if (errors.length) {\n      problems.classList.remove(`${ns}-success`);\n      beacon.classList.add(`${ns}-error`);\n\n      for (const error of errors) {\n        const markup = `<div><em>Error</em> in ${error}</div>`;\n        addHtml(markup, preErrors);\n      }\n\n      titleErrors.innerText = `${errors.length} Error(s)`;\n    } else {\n      titleErrors.innerText = '';\n    }\n    aside.classList.remove(hidden);\n  };\n\n  const addWarnings = (warnings) => {\n    if (warnings.length) {\n      problems.classList.remove(`${ns}-success`);\n\n      if (!beacon.classList.contains(`${ns}-error`)) {\n        beacon.classList.add(`${ns}-warning`);\n      }\n\n      for (const warning of warnings) {\n        const markup = `<div><em>Warning</em> in ${warning}</div>`;\n        addHtml(markup, preWarnings);\n      }\n\n      titleWarnings.innerText = `${warnings.length} Warning(s)`;\n    } else {\n      titleWarnings.innerText = '';\n    }\n\n    aside.classList.remove(hidden);\n  };\n\n  if (options.firstInstance) {\n    document.addEventListener('DOMContentLoaded', () => {\n      addCss(css);\n      [aside] = addHtml(html);\n      beacon = document.querySelector(`#${ns}-beacon`);\n      problems = document.querySelector(`#${ns}-problems`);\n      preErrors = document.querySelector(`#${ns}-errors`);\n      preWarnings = document.querySelector(`#${ns}-warnings`);\n      titleErrors = document.querySelector(`#${ns}-title-errors`);\n      titleWarnings = document.querySelector(`#${ns}-title-warnings`);\n\n      const close = document.querySelector(`#${ns}-close`);\n      const min = document.querySelector(`#${ns}-min`);\n\n      aside.addEventListener('click', () => {\n        aside.classList.remove(`${ns}-min`);\n      });\n\n      close.addEventListener('click', () => {\n        aside.classList.add(`${ns}-hidden`);\n      });\n\n      min.addEventListener('click', (e) => {\n        aside.classList.add(`${ns}-min`);\n        e.stopImmediatePropagation();\n      });\n    });\n  }\n\n  socketMessage(socket, (action, data) => {\n    if (!aside) {\n      return;\n    }\n\n    const { compilers } = window.webpackPluginServe;\n\n    switch (action) {\n      case 'build':\n        // clear errors and warnings when a new build begins\n        reset();\n        break;\n      case 'problems':\n        addErrors(data.errors);\n        addWarnings(data.warnings);\n        aside.classList.remove(hidden);\n        hasProblems = data.errors.length || data.warnings.length;\n        break;\n      case 'replace':\n        // if there's a compiler that isn't done yet, hold off and let it run the show\n        for (const compilerName of Object.keys(compilers)) {\n          if (!compilers[compilerName]) {\n            return;\n          }\n        }\n\n        if (hasProblems && !preErrors.children.length && !preWarnings.children.length) {\n          reset();\n          hasProblems = false;\n          problems.classList.add(`${ns}-success`);\n          aside.classList.remove(hidden);\n\n          setTimeout(() => aside.classList.add(hidden), 3e3);\n        }\n        break;\n      default:\n    }\n  });\n};\n\nmodule.exports = { init };\n\n\n//# sourceURL=webpack://asteroids/./node_modules/webpack-plugin-serve/lib/client/overlays/status.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/util.js":
/*!***********************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/util.js ***!
  \***********************************************************************/
/***/ (function(module) {

eval("/*\n  Copyright © 2018 Andrew Powell\n\n  This Source Code Form is subject to the terms of the Mozilla Public\n  License, v. 2.0. If a copy of the MPL was not distributed with this\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n  The above copyright notice and this permission notice shall be\n  included in all copies or substantial portions of this Source Code Form.\n*/\nconst addHtml = (html, parent) => {\n  const div = document.createElement('div');\n  const nodes = [];\n\n  div.innerHTML = html.trim();\n\n  while (div.firstChild) {\n    nodes.push((parent || document.body).appendChild(div.firstChild));\n  }\n\n  return nodes;\n};\n\nconst addCss = (css) => {\n  const style = document.createElement('style');\n\n  style.type = 'text/css';\n\n  if (css.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    style.appendChild(document.createTextNode(css));\n  }\n\n  // append the stylesheet for the svg\n  document.head.appendChild(style);\n};\n\nconst socketMessage = (socket, handler) => {\n  socket.addEventListener('message', (message) => {\n    const { action, data = {} } = JSON.parse(message.data);\n    handler(action, data);\n  });\n};\n\nmodule.exports = { addCss, addHtml, socketMessage };\n\n\n//# sourceURL=webpack://asteroids/./node_modules/webpack-plugin-serve/lib/client/overlays/util.js?");

/***/ }),

/***/ "./src/audio/explosion.mp3":
/*!*********************************!*\
  !*** ./src/audio/explosion.mp3 ***!
  \*********************************/
/***/ (function(module) {

"use strict";
eval("module.exports = \"data:audio/mpeg;base64,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cXAw0Cn/+5TIFgAavXtdWZeAAp+vbTcewAA2tWTrUEpyfExY7tUKPOdhoHEq19YY4bihL5veGKXU2E+l3BTxmx2/mnjaiZLiXIwi/nIeLqPuK3vqMzirdq+z0txKT1LgdZYjdWnbjGnZZWKe3iRYVansuDHVBcT2P9/40aC+s90xX1HdwbbnmcbGKqjSSaGRTiTqGqSFClhWbZoV4El2qHSady08zGmi7fmWnjJO4/lGcBfUOM9crKXWMNf/+7/+FTgcOgAAABpOSSWzSa7y+3bFwLmJCSoNkz3H1UsVpWu04fRBPaGEZ1iM7PRAJkhUeku58lCRWX15nDEmVWUkp4gj8kNVzT9FysxPV8Bo8+eXO31SHrsZzqE+w4uk7PZqiWOrVkY/a+wtWbJpCmUbdy7csQNuuwXb6LEnwIrStpWWnOVy3f4120ry2GkcP9K72PtRmjKdQkd1pRc/xYvt/4midhpDWzUH//qvpgAAAAlgWlW632+5jc6eU/Ay3A55FER2HtP/+6TIDIAd1gdVWZeACr8vq/cwkAFSHSkRiZQ/TvveqjAxknEZCgLcoT0XENUKNRkPJELxyVaMY0IViqGOnXbC3NUR4r2OMrBN1EXAvbCztU6pcl944P2ed4DEE5Bzk6FrHCrFMqZ2DKtcHk7/cCAQgWVGi7Ngd6Fvmt0xPfAg6zn4p+ElBWAsiUBguQTJvvcNrjCi1pl7vedf/7wB7KIFYyhOIgjxFDnCT1bYtIuYnYYMNxzeuvH3emNP73aBPIRAFooVglxzkuLoOlZr6Yzr/////////////0/3f/////////////+N42xYAAAAAJTTpbbklt13uwqKBUbXHGQN+1ujfuZhFiAqanyvy0MnW2yGQ6RdgnaAUPnhW2UPE6ALisCZIUzKyBpAwk00qWS022gaFKCLDtYbOMIqcmOlnkzaBNthGjVRiJO1C7TLQpTCIePip7aNHRPJyNMmGXaXYQmHkMxKcPip54oSPQIDiBlAxNwpSehIB5ZA2rIlKHyLTK6ckLZIqbYRo4o200dIiLUlm3d6FXSva1UAACAICAUDAYDAcDgcAeL+EIjeGxr4kHvFhIPfgYRJ+AQCiowR/8ARRREOm//UOmMNMHv/90Eg8qAMX//xUYIh0qiId///+xTIIoAKCUdZuHKAAAAANIOAAAT/8REjKJCxjGDyxJVMQU1FMy45OC4yVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xTIH4PAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xTIRQPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUQUcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/w==\";\n\n//# sourceURL=webpack://asteroids/./src/audio/explosion.mp3?");

/***/ }),

/***/ "./src/audio/laser.mp3":
/*!*****************************!*\
  !*** ./src/audio/laser.mp3 ***!
  \*****************************/
/***/ (function(module) {

"use strict";
eval("module.exports = \"data:audio/mpeg;base64,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\";\n\n//# sourceURL=webpack://asteroids/./src/audio/laser.mp3?");

/***/ }),

/***/ "./src/audio/rocket.mp3":
/*!******************************!*\
  !*** ./src/audio/rocket.mp3 ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"b979f5e033066d4a4ae9.mp3\";\n\n//# sourceURL=webpack://asteroids/./src/audio/rocket.mp3?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "71b628b-" + chunkId + "-wps-hmr.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "main-71b628b-wps-hmr.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "6bc52f80777158804c50"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "asteroids:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateasteroids"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/webpack-plugin-serve/client.js");
/******/ 	
/******/ })()
;
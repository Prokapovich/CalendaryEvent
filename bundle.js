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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _caEv = __webpack_require__(1);

var timer = _interopRequireWildcard(_caEv);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function sayHi() {
    document.write("helo");
};

var now = new Date();
now = +now + 15000;

var timerId = timer.taskCreation("таймер1", sayHi, now);
var now2 = new Date();
now2 = +now2 + 15000;

var timerId2 = timer.taskCreation("таймер2", sayHi, now2);
console.log(timer.listTimers);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function Timer(timerId, date, name) {
    _classCallCheck(this, Timer);

    this.timerId = timerId;
    this.date = date;
    this.name = name;
    this.task = task;
};

;

var listTimers = [];

function dateCreation() {
    var str = '';

    for (var _len = arguments.length, time = Array(_len), _key = 0; _key < _len; _key++) {
        time[_key] = arguments[_key];
    }

    if (_typeof(time[0]) == "object") {
        return time[0];
    }

    if (typeof time[0] == "string" && time[0].length >= 10) {
        return date = new Date.parse(time[0]);
    }

    if (!time[0]) {
        str += "" + time[0];
    }

    if (!time[1]) {
        str += "-" + time[1];
    }

    if (!time[2]) {
        str += "-" + time[2];
    }

    if (!time[3]) {
        str += "T" + time[3];
    }
    if (!time[4]) {
        str += ":" + time[4];
    }
    if (!time[5]) {
        str += ":" + time[5];
    }

    var date1 = Date.parse(str);
    return date1;
};

function taskCreation(name, task) {

    var now = new Date();

    for (var _len2 = arguments.length, time = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        time[_key2 - 2] = arguments[_key2];
    }

    var date = dateCreation(time);

    if (+now > +date) {
        alert("Данное время уже прошло : " + now + "время date : " + date);
        return undefined;
    }

    var periodStart = date - now;
    alert(periodStart);

    if (typeof task == "function") {
        var timerId = setTimeout(task, periodStart);
    } else {
        alert("Не функция");
        return 0;
    }

    var timer = new Timer(timerId, date, name, task);
    addListTimer(listTimers, timer);
    return timer;
};

function addListTimer(listTimers, timer) {
    listTimers.push(timer);
};

function removeTimer(name) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (a == 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = listTimers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var timer = _step.value;

                if (timer.name == name) {
                    clearTimeout(timer.timerId);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    } else {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = listTimers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _timer = _step2.value;

                if (_timer.timerId == name) {
                    clearTimeout(_timer.timerId);
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    }
};

function changeTimerName(name, newName) {
    var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    if (a == 0) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = listTimers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var timer = _step3.value;

                if (timer.name == name) {
                    timer.name == newname;
                }
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
    } else {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = listTimers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _timer2 = _step4.value;

                if (_timer2.timerId == name) {
                    _timer2.name == newname;
                }
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
    }
}

function changeTimerDateByName(name) {
    if (a == 0) {
        for (var _len3 = arguments.length, newDate = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            newDate[_key3 - 1] = arguments[_key3];
        }

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = listTimers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var timer = _step5.value;

                if (timer.name == name) {
                    taskCreation.apply(undefined, [timer.name, timer.task].concat(newDate));
                    return;
                }
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                }
            } finally {
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }
    }
}

function changeTimerDateByTimerId(timerId) {
    if (a == 0) {
        for (var _len4 = arguments.length, newDate = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            newDate[_key4 - 1] = arguments[_key4];
        }

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = listTimers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var timer = _step6.value;

                if (timer.timerId == timerId) {
                    taskCreation.apply(undefined, [timer.name, timer.task].concat(newDate));
                    return;
                }
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                }
            } finally {
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }
    }
};

exports.listTimers = listTimers;
exports.taskCreation = taskCreation;
exports.removeTimer = removeTimer;
exports.changeTimerName = changeTimerName;
exports.changeTimerDateByName = changeTimerDateByName;
exports.changeTimerDateByTimerId = changeTimerDateByTimerId;

/***/ })
/******/ ]);
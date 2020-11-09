'use strict';

var esCommon = require('es-common');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var add = function (left, right) { return left + right; };
var add_1 = {
    add: add,
};

var Adder_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var add_1$1 = __importDefault(add_1);
var add = add_1$1.default.add;
var Adder = /** @class */ (function () {
    function Adder(left, right) {
        this.left = left;
        this.right = right;
    }
    Adder.prototype.getResult = function () {
        return add(this.left, this.right);
    };
    return Adder;
}());
exports.default = Adder;
});

var Adder = /*@__PURE__*/getDefaultExportFromCjs(Adder_1);

var utils = createCommonjsModule(function (module) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// commonjs export
var add_1$1 = __importDefault(add_1);
var Adder_1$1 = __importDefault(Adder_1);
module.exports = __assign(__assign({}, add_1$1.default), { Adder: Adder_1$1.default });
});

var commonUtils = /*@__PURE__*/getDefaultExportFromCjs(utils);

var subtract = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = void 0;
exports.subtract = function (left, right) { return left - right; };
});

var Differ_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var Differ = /** @class */ (function () {
    function Differ(left, right) {
        this.left = left;
        this.right = right;
    }
    Differ.prototype.getResult = function () {
        return subtract.subtract(this.left, this.right);
    };
    return Differ;
}());
exports.default = Differ;
});

var Differ = /*@__PURE__*/getDefaultExportFromCjs(Differ_1);

var log = console.debug;
var add$1 = commonUtils.add;
log(add$1(1, 2));
log(new Adder(40, 2).getResult());
log(esCommon.subtract(420, 69));
log(new Differ(666, 333).getResult());

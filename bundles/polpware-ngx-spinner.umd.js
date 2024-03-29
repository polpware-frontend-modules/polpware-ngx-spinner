(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@polpware/ngx-logger'), require('ngx-spinner')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-spinner', ['exports', '@angular/core', '@polpware/ngx-logger', 'ngx-spinner'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-spinner'] = {}), global.ng.core, global.ngxLogger, global.ngxSpinner));
}(this, (function (exports, core, ngxLogger, ngxSpinner) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var PRIMARY_SPINNER = 'primary';
    var DismissingDelayPeroid = 300;
    var DefaultShowingDelayPeroid = 500;
    var SpinnerServiceBase = /** @class */ (function () {
        function SpinnerServiceBase() {
            this._referenceCounter = 0;
            this._showingTimer = 0;
            this._showingDelay = DefaultShowingDelayPeroid;
            this._dismissingDelay = DismissingDelayPeroid;
            this._dismissingTimer = 0;
            this.spinnerState = false;
        }
        SpinnerServiceBase.prototype.setDelay = function (seconds) {
            this._showingDelay = seconds * 1000;
        };
        SpinnerServiceBase.prototype.setDismissDelay = function (seconds) {
            this._dismissingDelay = seconds * 1000;
        };
        // Override
        SpinnerServiceBase.prototype.show = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var isStopped = this.preShow();
            if (isStopped)
                return;
            this.logger.debug('Schedule for show');
            // Otherwise, schdule to show the spinner.
            if (this.underlyingSpinner.show) {
                this._showingTimer = setTimeout(function () {
                    var _a;
                    if (_this._showingTimer) {
                        // Clean up the timer
                        _this._showingTimer = 0;
                        _this.spinnerState = true;
                        (_a = _this.underlyingSpinner).show.apply(_a, __spread(args));
                    }
                }, this._showingDelay);
            }
            else {
                this._showingTimer = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!this._showingTimer) return [3 /*break*/, 2];
                                // Clean up the timer
                                this._showingTimer = 0;
                                this.spinnerState = true;
                                return [4 /*yield*/, (_a = this.underlyingSpinner).showAsync.apply(_a, __spread(args))];
                            case 1:
                                _b.sent();
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); }, this._showingDelay);
            }
        };
        SpinnerServiceBase.prototype.hide = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var isStopped = this.preHide();
            if (isStopped) {
                return;
            }
            if (this.underlyingSpinner.hide) {
                // If have scheduled to dismiss the spinner,
                // we better we schedule again.
                if (this._dismissingTimer) {
                    this.logger.debug('Reschedule for dismissing');
                    clearTimeout(this._dismissingTimer);
                    this._dismissingTimer = setTimeout(function () {
                        var _a;
                        if (_this._dismissingTimer) {
                            // Clean up the timer
                            _this._dismissingTimer = 0;
                            _this.spinnerState = false;
                            // Dismiss the spinner 
                            (_a = _this.underlyingSpinner).hide.apply(_a, __spread(args));
                        }
                    }, this._dismissingDelay);
                    return;
                }
                // Schedule to dismiss the spinner
                if (this.spinnerState) {
                    this.logger.debug('Schedule for dismissing');
                    this._dismissingTimer = setTimeout(function () {
                        var _a;
                        if (_this._dismissingTimer) {
                            _this._dismissingTimer = 0;
                            _this.spinnerState = false;
                            // Dismiss the spinner 
                            (_a = _this.underlyingSpinner).hide.apply(_a, __spread(args));
                        }
                    }, this._dismissingDelay);
                }
            }
            else {
                // If have scheduled to dismiss the spinner,
                // we better we schedule again.
                if (this._dismissingTimer) {
                    this.logger.debug('Reschedule for dismissing');
                    clearTimeout(this._dismissingTimer);
                    this._dismissingTimer = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!this._dismissingTimer) return [3 /*break*/, 2];
                                    // Clean up the timer
                                    this._dismissingTimer = 0;
                                    this.spinnerState = false;
                                    // Dismiss the spinner 
                                    return [4 /*yield*/, (_a = this.underlyingSpinner).hideAsync.apply(_a, __spread(args))];
                                case 1:
                                    // Dismiss the spinner 
                                    _b.sent();
                                    _b.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); }, this._dismissingDelay);
                    return;
                }
                // Schedule to dismiss the spinner
                if (this.spinnerState) {
                    this.logger.debug('Schedule for dismissing');
                    this._dismissingTimer = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!this._dismissingTimer) return [3 /*break*/, 2];
                                    this._dismissingTimer = 0;
                                    this.spinnerState = false;
                                    // Dismiss the spinner 
                                    return [4 /*yield*/, (_a = this.underlyingSpinner).hideAsync.apply(_a, __spread(args))];
                                case 1:
                                    // Dismiss the spinner 
                                    _b.sent();
                                    _b.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); }, this._dismissingDelay);
                }
            }
        };
        SpinnerServiceBase.prototype.preShow = function () {
            this.logger.debug('Spinner requested to show');
            this._referenceCounter++;
            this.logger.debug('Reference counter in show:' + this._referenceCounter);
            // If there is one already, use it.
            if (this.spinnerState) {
                this.logger.debug('Existing spinner used');
                // However, we need to cancel the dismiss timer.
                // It is safe, because we expect that "hide" is to be called
                // sometime later from this moment on.
                if (this._dismissingTimer) {
                    this.logger.debug('Dismissing timer cleaned 1');
                    clearTimeout(this._dismissingTimer);
                    this._dismissingTimer = 0;
                }
                return true;
            }
            // If we have already scheduled to dismiss the spinner,
            // we just need to clear the scheduler.
            // Please refer to the above for the reason.
            if (this._dismissingTimer) {
                this.logger.debug('Dismissing timer cleaned 2');
                clearTimeout(this._dismissingTimer);
                this._dismissingTimer = 0;
            }
            // If we have already scheduled to show the spinner, we just
            // use this schedule. 
            if (this._showingTimer) {
                this.logger.debug('Already scheduled to show');
                return true;
            }
            return false;
        };
        SpinnerServiceBase.prototype.preHide = function () {
            this.logger.debug('Spinner requested to hide');
            this._referenceCounter--;
            this.logger.debug('Reference counter in hide:' + this._referenceCounter);
            if (this._referenceCounter > 0) {
                return true;
            }
            // If the spinner has not been scheduled.
            if (this._showingTimer) {
                this.logger.debug('Showed timer cleaned');
                clearTimeout(this._showingTimer);
                this._showingTimer = 0;
                // Done
                return true;
            }
            return false;
        };
        return SpinnerServiceBase;
    }());

    var PRIMARY_SPINNER$1 = 'primary';
    /* Note that on purpose we do not turn this one into a singular service.
     * Therefore, we are able to create many such services for each component */
    var SpinnerServiceImpl = /** @class */ (function (_super) {
        __extends(SpinnerServiceImpl, _super);
        function SpinnerServiceImpl(underlyingSpinner, loggerProvider) {
            var _this = _super.call(this) || this;
            _this.underlyingSpinner = underlyingSpinner;
            _this.logger = loggerProvider.logger('polpware_ngx_spinner');
            return _this;
        }
        // Note that we do not need to stop it, as this is a service starting in the beginning.
        SpinnerServiceImpl.prototype.startToListenSpinner = function (name) {
            var _this = this;
            if (name === void 0) { name = PRIMARY_SPINNER$1; }
            // Set up the listener
            this._subr = this.underlyingSpinner.getSpinner(name).subscribe(function (x) {
                _this.spinnerState = x.show;
            });
        };
        SpinnerServiceImpl.prototype.stopListener = function (name) {
            if (name === void 0) { name = PRIMARY_SPINNER$1; }
            this._subr && this._subr.unsubscribe();
        };
        /** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(core.ɵɵinject(ngxSpinner.NgxSpinnerService), core.ɵɵinject(ngxLogger.LoggerProviderImpl)); };
        /** @nocollapse */ SpinnerServiceImpl.ɵprov = core.ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
        return SpinnerServiceImpl;
    }(SpinnerServiceBase));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SpinnerServiceImpl, [{
            type: core.Injectable
        }], function () { return [{ type: ngxSpinner.NgxSpinnerService }, { type: ngxLogger.LoggerProviderImpl }]; }, null); })();

    function loadingIndicatorDecorator(constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.showLoadingIndicator = function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                (_a = this.spinner).show.apply(_a, __spread(args));
            };
            class_1.prototype.hideLoadingIndicator = function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                (_a = this.spinner).hide.apply(_a, __spread(args));
            };
            class_1.prototype.setLoadingIndicatorDelay = function (seconds) {
                this.spinner.setDelay(seconds);
            };
            return class_1;
        }(constructor));
    }

    var NullSpinner = /** @class */ (function () {
        function NullSpinner() {
        }
        NullSpinner.prototype.show = function () { };
        NullSpinner.prototype.hide = function () { };
        NullSpinner.prototype.setDelay = function (seconds) { };
        return NullSpinner;
    }());

    exports.NullSpinner = NullSpinner;
    exports.PRIMARY_SPINNER = PRIMARY_SPINNER;
    exports.SpinnerServiceBase = SpinnerServiceBase;
    exports.SpinnerServiceImpl = SpinnerServiceImpl;
    exports.loadingIndicatorDecorator = loadingIndicatorDecorator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-spinner.umd.js.map

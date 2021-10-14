import { __spread, __awaiter, __generator, __extends } from 'tslib';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';
import { LoggerProviderImpl } from '@polpware/ngx-logger';
import { NgxSpinnerService } from 'ngx-spinner';

var PRIMARY_SPINNER = 'primary';
var DismissingDelayPeroid = 300;
var DefaultShowingDelayPeroid = 500;
var SpinnerServiceBase = /** @class */ (function () {
    function SpinnerServiceBase() {
        this._referenceCounter = 0;
        this._showingTimer = 0;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = 0;
        this.spinnerState = false;
    }
    SpinnerServiceBase.prototype.setDelay = function (seconds) {
        this._showingDelay = seconds * 1000;
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
                    (_a = _this.underlyingSpinner).show.apply(_a, __spread(args));
                    _this.spinnerState = true;
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
                            return [4 /*yield*/, (_a = this.underlyingSpinner).showAsync.apply(_a, __spread(args))];
                        case 1:
                            _b.sent();
                            this.spinnerState = true;
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
                        // Dismiss the spinner 
                        (_a = _this.underlyingSpinner).hide.apply(_a, __spread(args));
                    }
                }, DismissingDelayPeroid);
                return;
            }
            // Schedule to dismiss the spinner
            if (this.spinnerState) {
                this.logger.debug('Schedule for dismissing');
                this._dismissingTimer = setTimeout(function () {
                    var _a;
                    if (_this._dismissingTimer) {
                        _this._dismissingTimer = 0;
                        // Dismiss the spinner 
                        (_a = _this.underlyingSpinner).hide.apply(_a, __spread(args));
                        _this.spinnerState = false;
                    }
                }, DismissingDelayPeroid);
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
                                // Dismiss the spinner 
                                return [4 /*yield*/, (_a = this.underlyingSpinner).hideAsync.apply(_a, __spread(args))];
                            case 1:
                                // Dismiss the spinner 
                                _b.sent();
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); }, DismissingDelayPeroid);
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
                                // Dismiss the spinner 
                                return [4 /*yield*/, (_a = this.underlyingSpinner).hideAsync.apply(_a, __spread(args))];
                            case 1:
                                // Dismiss the spinner 
                                _b.sent();
                                this.spinnerState = false;
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); }, DismissingDelayPeroid);
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
        var _this = this;
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
        // If have scheduled to dismiss the spinner,
        // we better we schedule again.
        if (this._dismissingTimer) {
            this.logger.debug('Reschedule for dismissing');
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = setTimeout(function () {
                if (_this._dismissingTimer) {
                    // Clean up the timer
                    _this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    _this.underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
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
    /** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(ɵɵinject(NgxSpinnerService), ɵɵinject(LoggerProviderImpl)); };
    /** @nocollapse */ SpinnerServiceImpl.ɵprov = ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
    return SpinnerServiceImpl;
}(SpinnerServiceBase));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: NgxSpinnerService }, { type: LoggerProviderImpl }]; }, null); })();

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

/*
 * Public API Surface of ngx-spinner
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NullSpinner, PRIMARY_SPINNER, SpinnerServiceBase, SpinnerServiceImpl, loadingIndicatorDecorator };
//# sourceMappingURL=polpware-ngx-spinner.js.map

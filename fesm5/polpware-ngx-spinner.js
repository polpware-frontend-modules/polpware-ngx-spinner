import { __extends, __spread } from 'tslib';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';
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
    SpinnerServiceBase.prototype.show = function (title, name) {
        var _this = this;
        if (title === void 0) { title = 'Loading ...'; }
        if (name === void 0) { name = PRIMARY_SPINNER; }
        this._referenceCounter++;
        // If there is one already, use it.
        if (this.spinnerState) {
            // However, we need to cancel the dismiss timer.
            // It is safe, because we expect that "hide" is to be called
            // sometime later from this moment on.
            if (this._dismissingTimer) {
                clearTimeout(this._dismissingTimer);
                this._dismissingTimer = 0;
            }
            return;
        }
        // If we have already scheduled to dismiss the spinner,
        // we just need to clear the scheduler.
        // Please refer to the above for the reason.
        if (this._dismissingTimer) {
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = 0;
        }
        // If we have already scheduled to show the spinner, we just
        // use this schedule. 
        if (this._showingTimer) {
            return;
        }
        // Otherwise, schdule to show the spinner.
        this._showingTimer = setTimeout(function () {
            if (_this._showingTimer) {
                // Clean up the timer
                _this._showingTimer = 0;
                _this.underlyingSpinner.show(name);
            }
        }, this._showingDelay);
    };
    SpinnerServiceBase.prototype.hide = function (name) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        this._referenceCounter--;
        if (this._referenceCounter > 0) {
            return;
        }
        // If the spinner has not been scheduled.
        if (this._showingTimer) {
            clearTimeout(this._showingTimer);
            this._showingTimer = 0;
            // Done
            return;
        }
        // If have scheduled to dismiss the spinner,
        // we better we schedule again.
        if (this._dismissingTimer) {
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = setTimeout(function () {
                if (_this._dismissingTimer) {
                    // Clean up the timer
                    _this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    _this.underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this.spinnerState) {
            this._dismissingTimer = setTimeout(function () {
                if (_this._dismissingTimer) {
                    _this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    _this.underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
        }
    };
    return SpinnerServiceBase;
}());

var PRIMARY_SPINNER$1 = 'primary';
/* Note that on purpose we do not turn this one into a singular service.
 * Therefore, we are able to create many such services for each component */
var SpinnerServiceImpl = /** @class */ (function (_super) {
    __extends(SpinnerServiceImpl, _super);
    function SpinnerServiceImpl(underlyingSpinner) {
        var _this = _super.call(this) || this;
        _this.underlyingSpinner = underlyingSpinner;
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
    /** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(ɵɵinject(NgxSpinnerService)); };
    /** @nocollapse */ SpinnerServiceImpl.ɵprov = ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
    return SpinnerServiceImpl;
}(SpinnerServiceBase));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: NgxSpinnerService }]; }, null); })();

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
            this.spinner.hide();
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

export { NullSpinner, SpinnerServiceBase, SpinnerServiceImpl, loadingIndicatorDecorator };
//# sourceMappingURL=polpware-ngx-spinner.js.map

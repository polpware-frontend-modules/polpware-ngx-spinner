import { Injectable } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { __extends, __spread } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DismissingDelayPeroid = 300;
/** @type {?} */
var DefaultShowingDelayPeroid = 500;
var SpinnerServiceImpl = /** @class */ (function () {
    function SpinnerServiceImpl(_underlyingSpinner) {
        var _this = this;
        this._underlyingSpinner = _underlyingSpinner;
        this._showingTimer = null;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = null;
        this._spinnerState = false;
        // Set up the listener
        this._underlyingSpinner.spinnerObservable
            .pipe(startWith(false))
            .subscribe(function (x) {
            _this._spinnerState = x;
        });
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    SpinnerServiceImpl.prototype.setDelay = /**
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        this._showingDelay = seconds * 1000;
    };
    // Override
    // Override
    /**
     * @param {?=} title
     * @return {?}
     */
    SpinnerServiceImpl.prototype.show = 
    // Override
    /**
     * @param {?=} title
     * @return {?}
     */
    function (title) {
        // If there is one already, use it.
        var _this = this;
        if (title === void 0) { title = 'Loading ...'; }
        if (this._spinnerState) {
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
            return;
        }
        // If we have already scheduled to show the spinner, we just
        // use this schedule. 
        if (this._showingTimer) {
            return;
        }
        // Otherwise, schdule to show the spinner.
        this._showingTimer = setTimeout(function () {
            // Clean up the timer
            _this._showingTimer = null;
            _this._underlyingSpinner.show();
        }, this._showingDelay);
    };
    /**
     * @return {?}
     */
    SpinnerServiceImpl.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // If the spinner has not been rendered.
        if (this._showingTimer) {
            clearTimeout(this._showingTimer);
            this._showingTimer = null;
            return;
        }
        // If have scheduled to dismiss the spinner,
        // we better we schedule again.
        if (this._dismissingTimer) {
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = setTimeout(function () {
                // Clean up the timer
                _this._dismissingTimer = null;
                // Dismiss the spinner 
                _this._underlyingSpinner.hide();
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this._spinnerState) {
            this._dismissingTimer = setTimeout(function () {
                // Dismiss the spinner 
                _this._underlyingSpinner.hide();
            }, DismissingDelayPeroid);
        }
    };
    SpinnerServiceImpl.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SpinnerServiceImpl.ctorParameters = function () { return [
        { type: NgxSpinnerService }
    ]; };
    return SpinnerServiceImpl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} constructor
 * @return {?}
 */
function loadingIndicatorDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {...?} args
         * @return {?}
         */
        class_1.prototype.showLoadingIndicator = /**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _a;
            (_a = this.spinner).show.apply(_a, __spread(args));
        };
        /**
         * @return {?}
         */
        class_1.prototype.hideLoadingIndicator = /**
         * @return {?}
         */
        function () {
            this.spinner.hide();
        };
        /**
         * @param {?} seconds
         * @return {?}
         */
        class_1.prototype.setLoadingIndicatorDelay = /**
         * @param {?} seconds
         * @return {?}
         */
        function (seconds) {
            this.spinner.setDelay(seconds);
        };
        return class_1;
    }(constructor));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NullSpinner = /** @class */ (function () {
    function NullSpinner() {
    }
    /**
     * @return {?}
     */
    NullSpinner.prototype.show = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    NullSpinner.prototype.hide = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} seconds
     * @return {?}
     */
    NullSpinner.prototype.setDelay = /**
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) { };
    return NullSpinner;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SpinnerServiceImpl, loadingIndicatorDecorator, NullSpinner };

//# sourceMappingURL=polpware-ngx-spinner.js.map
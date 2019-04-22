import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { __extends, __spread } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PRIMARY_SPINNER = 'primary';
/** @type {?} */
var DismissingDelayPeroid = 300;
/** @type {?} */
var DefaultShowingDelayPeroid = 500;
var SpinnerServiceImpl = /** @class */ (function () {
    function SpinnerServiceImpl(_underlyingSpinner) {
        this._underlyingSpinner = _underlyingSpinner;
        this._referenceCounter = 0;
        this._showingTimer = null;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = null;
        this._spinnerState = false;
        this.startToListenSpinner();
    }
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    /**
     * @param {?=} name
     * @return {?}
     */
    SpinnerServiceImpl.prototype.startToListenSpinner = 
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    /**
     * @param {?=} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        // Set up the listener
        this._underlyingSpinner.getSpinner(PRIMARY_SPINNER).subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this._spinnerState = x.show;
        }));
    };
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
     * @param {?=} name
     * @return {?}
     */
    SpinnerServiceImpl.prototype.show = 
    // Override
    /**
     * @param {?=} title
     * @param {?=} name
     * @return {?}
     */
    function (title, name) {
        var _this = this;
        if (title === void 0) { title = 'Loading ...'; }
        if (name === void 0) { name = PRIMARY_SPINNER; }
        console.log('Asked to show spinner...');
        this._referenceCounter++;
        // If there is one already, use it.
        if (this._spinnerState) {
            console.log('show --- one has been scheduled');
            // However, we need to cancel the dismiss timer.
            // It is safe, because we expect that "hide" is to be called
            // sometime later from this moment on.
            if (this._dismissingTimer) {
                console.log('show --- cleaning out dismisming timer');
                clearTimeout(this._dismissingTimer);
                this._dismissingTimer = 0;
            }
            return;
        }
        // If we have already scheduled to dismiss the spinner,
        // we just need to clear the scheduler.
        // Please refer to the above for the reason.
        if (this._dismissingTimer) {
            console.log('show --- cleaning out dismisming timer (2)');
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = 0;
        }
        // If we have already scheduled to show the spinner, we just
        // use this schedule. 
        if (this._showingTimer) {
            console.log('show --- already scheduled one');
            return;
        }
        // Otherwise, schdule to show the spinner.
        this._showingTimer = setTimeout((/**
         * @return {?}
         */
        function () {
            console.log('show --- run');
            // Clean up the timer
            _this._showingTimer = null;
            _this._underlyingSpinner.show(name);
        }), this._showingDelay);
    };
    /**
     * @param {?=} name
     * @return {?}
     */
    SpinnerServiceImpl.prototype.hide = /**
     * @param {?=} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        this._referenceCounter--;
        if (this._referenceCounter > 0) {
            console.log('hide --- reference counter still greater than 0');
            return;
        }
        // If the spinner has not been scheduled.
        if (this._showingTimer) {
            console.log('hide --- remove the show scheduler');
            this._showingTimer = null;
            clearTimeout(this._showingTimer);
            // Done
            return;
        }
        // If have scheduled to dismiss the spinner,
        // we better we schedule again.
        if (this._dismissingTimer) {
            console.log('hide --- already shceduled');
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                // Clean up the timer
                _this._dismissingTimer = null;
                // Dismiss the spinner 
                _this._underlyingSpinner.hide();
            }), DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this._spinnerState) {
            console.log('hide --- schedule');
            this._dismissingTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this._dismissingTimer = null;
                // Dismiss the spinner 
                _this._underlyingSpinner.hide(name);
            }), DismissingDelayPeroid);
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NullSpinner, SpinnerServiceImpl, loadingIndicatorDecorator };
//# sourceMappingURL=polpware-ngx-spinner.js.map

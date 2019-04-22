(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-spinner')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-spinner', ['exports', '@angular/core', 'ngx-spinner'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-spinner'] = {}), global.ng.core, global.ngxSpinner));
}(this, function (exports, core, ngxSpinner) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SpinnerServiceImpl.ctorParameters = function () { return [
            { type: ngxSpinner.NgxSpinnerService }
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

    exports.NullSpinner = NullSpinner;
    exports.SpinnerServiceImpl = SpinnerServiceImpl;
    exports.loadingIndicatorDecorator = loadingIndicatorDecorator;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=polpware-ngx-spinner.umd.js.map

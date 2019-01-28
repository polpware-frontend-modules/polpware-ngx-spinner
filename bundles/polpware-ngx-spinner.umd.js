(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('ngx-spinner')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-spinner', ['exports', '@angular/core', 'rxjs/operators', 'ngx-spinner'], factory) :
    (factory((global.polpware = global.polpware || {}, global.polpware['ngx-spinner'] = {}),global.ng.core,global.rxjs.operators,global.ngxSpinner));
}(this, (function (exports,core,operators,ngxSpinner) { 'use strict';

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
                .pipe(operators.startWith(false))
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
                if (title === void 0) {
                    title = 'Loading ...';
                }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SpinnerServiceImpl.ctorParameters = function () {
            return [
                { type: ngxSpinner.NgxSpinnerService }
            ];
        };
        return SpinnerServiceImpl;
    }());

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
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

    exports.SpinnerServiceImpl = SpinnerServiceImpl;
    exports.loadingIndicatorDecorator = loadingIndicatorDecorator;
    exports.NullSpinner = NullSpinner;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=polpware-ngx-spinner.umd.js.map
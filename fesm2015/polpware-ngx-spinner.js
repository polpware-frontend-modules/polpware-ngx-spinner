import { Injectable } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DismissingDelayPeroid = 300;
/** @type {?} */
const DefaultShowingDelayPeroid = 500;
class SpinnerServiceImpl {
    /**
     * @param {?} _underlyingSpinner
     */
    constructor(_underlyingSpinner) {
        this._underlyingSpinner = _underlyingSpinner;
        this._showingTimer = null;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = null;
        this._spinnerState = false;
        // Set up the listener
        this._underlyingSpinner.spinnerObservable
            .pipe(startWith(false))
            .subscribe(x => {
            this._spinnerState = x;
        });
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    setDelay(seconds) {
        this._showingDelay = seconds * 1000;
    }
    // Override
    /**
     * @param {?=} title
     * @return {?}
     */
    show(title = 'Loading ...') {
        // If there is one already, use it.
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
        this._showingTimer = setTimeout(() => {
            // Clean up the timer
            this._showingTimer = null;
            this._underlyingSpinner.show();
        }, this._showingDelay);
    }
    /**
     * @return {?}
     */
    hide() {
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
            this._dismissingTimer = setTimeout(() => {
                // Clean up the timer
                this._dismissingTimer = null;
                // Dismiss the spinner 
                this._underlyingSpinner.hide();
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this._spinnerState) {
            this._dismissingTimer = setTimeout(() => {
                // Dismiss the spinner 
                this._underlyingSpinner.hide();
            }, DismissingDelayPeroid);
        }
    }
}
SpinnerServiceImpl.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SpinnerServiceImpl.ctorParameters = () => [
    { type: NgxSpinnerService }
];

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
    return class extends constructor {
        /**
         * @param {...?} args
         * @return {?}
         */
        showLoadingIndicator(...args) {
            this.spinner.show(...args);
        }
        /**
         * @return {?}
         */
        hideLoadingIndicator() {
            this.spinner.hide();
        }
        /**
         * @param {?} seconds
         * @return {?}
         */
        setLoadingIndicatorDelay(seconds) {
            this.spinner.setDelay(seconds);
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NullSpinner {
    /**
     * @return {?}
     */
    show() { }
    /**
     * @return {?}
     */
    hide() { }
    /**
     * @param {?} seconds
     * @return {?}
     */
    setDelay(seconds) { }
}

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
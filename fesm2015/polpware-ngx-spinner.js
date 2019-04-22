import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PRIMARY_SPINNER = 'primary';
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
        this._referenceCounter = 0;
        this._showingTimer = null;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = null;
        this._spinnerState = false;
        this.startToListenSpinner();
    }
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    /**
     * @param {?=} name
     * @return {?}
     */
    startToListenSpinner(name = PRIMARY_SPINNER) {
        // Set up the listener
        this._underlyingSpinner.getSpinner(PRIMARY_SPINNER).subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this._spinnerState = x.show;
        }));
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
     * @param {?=} name
     * @return {?}
     */
    show(title = 'Loading ...', name = PRIMARY_SPINNER) {
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
        () => {
            console.log('show --- run');
            // Clean up the timer
            this._showingTimer = null;
            this._underlyingSpinner.show(name);
        }), this._showingDelay);
    }
    /**
     * @param {?=} name
     * @return {?}
     */
    hide(name = PRIMARY_SPINNER) {
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
            () => {
                // Clean up the timer
                this._dismissingTimer = null;
                // Dismiss the spinner 
                this._underlyingSpinner.hide();
            }), DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this._spinnerState) {
            console.log('hide --- schedule');
            this._dismissingTimer = setTimeout((/**
             * @return {?}
             */
            () => {
                this._dismissingTimer = null;
                // Dismiss the spinner 
                this._underlyingSpinner.hide(name);
            }), DismissingDelayPeroid);
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

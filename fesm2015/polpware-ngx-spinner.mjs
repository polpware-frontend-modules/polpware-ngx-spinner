import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { __awaiter } from 'tslib';
import * as i1 from 'ngx-spinner';
import * as i2 from '@polpware/ngx-logger';

const PRIMARY_SPINNER$1 = 'primary';
const DismissingDelayPeroid = 300;
const DefaultShowingDelayPeroid = 500;
class SpinnerServiceBase {
    constructor() {
        this._referenceCounter = 0;
        this._showingTimer = 0;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingDelay = DismissingDelayPeroid;
        this._dismissingTimer = 0;
        this.spinnerState = false;
    }
    setDelay(seconds) {
        this._showingDelay = seconds * 1000;
    }
    setDismissDelay(seconds) {
        this._dismissingDelay = seconds * 1000;
    }
    // Override
    show(...args) {
        const isStopped = this.preShow();
        if (isStopped)
            return;
        this.logger.debug('Schedule for show');
        // Otherwise, schdule to show the spinner.
        if (this.underlyingSpinner.show) {
            this._showingTimer = setTimeout(() => {
                if (this._showingTimer) {
                    // Clean up the timer
                    this._showingTimer = 0;
                    this.spinnerState = true;
                    this.underlyingSpinner.show(...args);
                }
            }, this._showingDelay);
        }
        else {
            this._showingTimer = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                if (this._showingTimer) {
                    // Clean up the timer
                    this._showingTimer = 0;
                    this.spinnerState = true;
                    yield this.underlyingSpinner.showAsync(...args);
                }
            }), this._showingDelay);
        }
    }
    hide(...args) {
        const isStopped = this.preHide();
        if (isStopped) {
            return;
        }
        if (this.underlyingSpinner.hide) {
            // If have scheduled to dismiss the spinner,
            // we better we schedule again.
            if (this._dismissingTimer) {
                this.logger.debug('Reschedule for dismissing');
                clearTimeout(this._dismissingTimer);
                this._dismissingTimer = setTimeout(() => {
                    if (this._dismissingTimer) {
                        // Clean up the timer
                        this._dismissingTimer = 0;
                        this.spinnerState = false;
                        // Dismiss the spinner 
                        this.underlyingSpinner.hide(...args);
                    }
                }, this._dismissingDelay);
                return;
            }
            // Schedule to dismiss the spinner
            if (this.spinnerState) {
                this.logger.debug('Schedule for dismissing');
                this._dismissingTimer = setTimeout(() => {
                    if (this._dismissingTimer) {
                        this._dismissingTimer = 0;
                        this.spinnerState = false;
                        // Dismiss the spinner 
                        this.underlyingSpinner.hide(...args);
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
                this._dismissingTimer = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    if (this._dismissingTimer) {
                        // Clean up the timer
                        this._dismissingTimer = 0;
                        this.spinnerState = false;
                        // Dismiss the spinner 
                        yield this.underlyingSpinner.hideAsync(...args);
                    }
                }), this._dismissingDelay);
                return;
            }
            // Schedule to dismiss the spinner
            if (this.spinnerState) {
                this.logger.debug('Schedule for dismissing');
                this._dismissingTimer = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    if (this._dismissingTimer) {
                        this._dismissingTimer = 0;
                        this.spinnerState = false;
                        // Dismiss the spinner 
                        yield this.underlyingSpinner.hideAsync(...args);
                    }
                }), this._dismissingDelay);
            }
        }
    }
    preShow() {
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
    }
    preHide() {
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
    }
}

const PRIMARY_SPINNER = 'primary';
/* Note that on purpose we do not turn this one into a singular service.
 * Therefore, we are able to create many such services for each component */
class SpinnerServiceImpl extends SpinnerServiceBase {
    constructor(underlyingSpinner, loggerProvider) {
        super();
        this.underlyingSpinner = underlyingSpinner;
        this.logger = loggerProvider.logger('polpware_ngx_spinner');
    }
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    startToListenSpinner(name = PRIMARY_SPINNER) {
        // Set up the listener
        this._subr = this.underlyingSpinner.getSpinner(name).subscribe(x => {
            this.spinnerState = x.show;
        });
    }
    stopListener(name = PRIMARY_SPINNER) {
        this._subr && this._subr.unsubscribe();
    }
}
/** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(i0.ɵɵinject(i1.NgxSpinnerService), i0.ɵɵinject(i2.LoggerProviderImpl)); };
/** @nocollapse */ SpinnerServiceImpl.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpinnerServiceImpl, [{
            type: Injectable
        }], function () { return [{ type: i1.NgxSpinnerService }, { type: i2.LoggerProviderImpl }]; }, null);
})();

function loadingIndicatorDecorator(constructor) {
    return class extends constructor {
        showLoadingIndicator(...args) {
            this.spinner.show(...args);
        }
        hideLoadingIndicator(...args) {
            this.spinner.hide(...args);
        }
        setLoadingIndicatorDelay(seconds) {
            this.spinner.setDelay(seconds);
        }
    };
}

class NullSpinner {
    show() { }
    hide() { }
    setDelay(seconds) { }
}

/*
 * Public API Surface of ngx-spinner
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NullSpinner, PRIMARY_SPINNER$1 as PRIMARY_SPINNER, SpinnerServiceBase, SpinnerServiceImpl, loadingIndicatorDecorator };
//# sourceMappingURL=polpware-ngx-spinner.mjs.map

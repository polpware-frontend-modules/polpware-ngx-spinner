import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';
import { LoggerProviderImpl } from '@polpware/ngx-logger';
import { NgxSpinnerService } from 'ngx-spinner';
import { __awaiter } from 'tslib';

const PRIMARY_SPINNER = 'primary';
const DismissingDelayPeroid = 300;
const DefaultShowingDelayPeroid = 500;
class SpinnerServiceBase {
    constructor() {
        this._referenceCounter = 0;
        this._showingTimer = 0;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = 0;
        this.spinnerState = false;
    }
    setDelay(seconds) {
        this._showingDelay = seconds * 1000;
    }
    // Override
    show(title = 'Loading ...', name = PRIMARY_SPINNER) {
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
            return;
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
            return;
        }
        this.logger.debug('Schedule for show');
        // Otherwise, schdule to show the spinner.
        this._showingTimer = setTimeout(() => {
            if (this._showingTimer) {
                // Clean up the timer
                this._showingTimer = 0;
                this.underlyingSpinner.show(name);
                this.spinnerState = true;
            }
        }, this._showingDelay);
    }
    hide(name = PRIMARY_SPINNER) {
        this.logger.debug('Spinner requested to hide');
        this._referenceCounter--;
        this.logger.debug('Reference counter in hide:' + this._referenceCounter);
        if (this._referenceCounter > 0) {
            return;
        }
        // If the spinner has not been scheduled.
        if (this._showingTimer) {
            this.logger.debug('Showed timer cleaned');
            clearTimeout(this._showingTimer);
            this._showingTimer = 0;
            // Done
            return;
        }
        // If have scheduled to dismiss the spinner,
        // we better we schedule again.
        if (this._dismissingTimer) {
            this.logger.debug('Reschedule for dismissing');
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = setTimeout(() => {
                if (this._dismissingTimer) {
                    // Clean up the timer
                    this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    this.underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this.spinnerState) {
            this.logger.debug('Schedule for dismissing');
            this._dismissingTimer = setTimeout(() => {
                if (this._dismissingTimer) {
                    this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    this.underlyingSpinner.hide(name);
                    this.spinnerState = false;
                }
            }, DismissingDelayPeroid);
        }
    }
    showAsync(...args) {
        return new Promise((resolve, reject) => {
            this.show(...args);
            resolve();
        });
    }
    hideAsync(...args) {
        return new Promise((resolve, reject) => {
            this.hide(...args);
            resolve();
        });
    }
}

const PRIMARY_SPINNER$1 = 'primary';
/* Note that on purpose we do not turn this one into a singular service.
 * Therefore, we are able to create many such services for each component */
class SpinnerServiceImpl extends SpinnerServiceBase {
    constructor(underlyingSpinner, loggerProvider) {
        super();
        this.underlyingSpinner = underlyingSpinner;
        this.logger = loggerProvider.logger('polpware_ngx_spinner');
    }
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    startToListenSpinner(name = PRIMARY_SPINNER$1) {
        // Set up the listener
        this._subr = this.underlyingSpinner.getSpinner(name).subscribe(x => {
            this.spinnerState = x.show;
        });
    }
    stopListener(name = PRIMARY_SPINNER$1) {
        this._subr && this._subr.unsubscribe();
    }
}
/** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(ɵɵinject(NgxSpinnerService), ɵɵinject(LoggerProviderImpl)); };
/** @nocollapse */ SpinnerServiceImpl.ɵprov = ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: NgxSpinnerService }, { type: LoggerProviderImpl }]; }, null); })();

function loadingIndicatorDecorator(constructor) {
    return class extends constructor {
        showLoadingIndicator(...args) {
            this.spinner.show(...args);
        }
        hideLoadingIndicator(...args) {
            this.spinner.hide(...args);
        }
        showLoadingIndicatorAsync(...args) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.spinner.showAsync(...args);
            });
        }
        hideLoadingIndicatorAsync(...args) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.spinner.hideAsync(...args);
            });
        }
        setLoadingIndicatorDelay(seconds) {
            this.spinner.setDelay(seconds);
        }
    };
}

class NullSpinner {
    show() { }
    hide() { }
    showAsync() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    hideAsync() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    setDelay(seconds) { }
}

/*
 * Public API Surface of ngx-spinner
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NullSpinner, SpinnerServiceBase, SpinnerServiceImpl, loadingIndicatorDecorator };
//# sourceMappingURL=polpware-ngx-spinner.js.map

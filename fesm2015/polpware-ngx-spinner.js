import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

const PRIMARY_SPINNER = 'primary';
const DismissingDelayPeroid = 300;
const DefaultShowingDelayPeroid = 500;
class SpinnerServiceImpl {
    constructor(_underlyingSpinner) {
        this._underlyingSpinner = _underlyingSpinner;
        this._referenceCounter = 0;
        this._showingTimer = 0;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = 0;
        this._spinnerState = false;
        this.startToListenSpinner();
    }
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    startToListenSpinner(name = PRIMARY_SPINNER) {
        // Set up the listener
        this._underlyingSpinner.getSpinner(PRIMARY_SPINNER).subscribe(x => {
            this._spinnerState = x.show;
        });
    }
    setDelay(seconds) {
        this._showingDelay = seconds * 1000;
    }
    // Override
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
        this._showingTimer = setTimeout(() => {
            console.log('show --- run');
            if (this._showingTimer) {
                // Clean up the timer
                this._showingTimer = 0;
                this._underlyingSpinner.show(name);
            }
        }, this._showingDelay);
    }
    hide(name = PRIMARY_SPINNER) {
        this._referenceCounter--;
        if (this._referenceCounter > 0) {
            console.log('hide --- reference counter still greater than 0');
            return;
        }
        // If the spinner has not been scheduled.
        if (this._showingTimer) {
            console.log('hide --- remove the show scheduler');
            clearTimeout(this._showingTimer);
            this._showingTimer = 0;
            // Done
            return;
        }
        // If have scheduled to dismiss the spinner,
        // we better we schedule again.
        if (this._dismissingTimer) {
            console.log('hide --- already shceduled');
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = setTimeout(() => {
                console.log('hide -run (1)');
                if (this._dismissingTimer) {
                    console.log('live');
                    // Clean up the timer
                    this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    this._underlyingSpinner.hide();
                }
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this._spinnerState) {
            console.log('hide --- schedule');
            this._dismissingTimer = setTimeout(() => {
                console.log('hide -run (2)');
                if (this._dismissingTimer) {
                    console.log('live');
                    this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    this._underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
        }
    }
}
/** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(ɵɵinject(NgxSpinnerService)); };
/** @nocollapse */ SpinnerServiceImpl.ɵprov = ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: NgxSpinnerService }]; }, null); })();

function loadingIndicatorDecorator(constructor) {
    return class extends constructor {
        showLoadingIndicator(...args) {
            this.spinner.show(...args);
        }
        hideLoadingIndicator() {
            this.spinner.hide();
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

export { NullSpinner, SpinnerServiceImpl, loadingIndicatorDecorator };
//# sourceMappingURL=polpware-ngx-spinner.js.map

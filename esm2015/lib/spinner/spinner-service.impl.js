/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
/** @type {?} */
const PRIMARY_SPINNER = 'primary';
/** @type {?} */
const DismissingDelayPeroid = 300;
/** @type {?} */
const DefaultShowingDelayPeroid = 500;
export class SpinnerServiceImpl {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    SpinnerServiceImpl.prototype._showingTimer;
    /**
     * @type {?}
     * @private
     */
    SpinnerServiceImpl.prototype._showingDelay;
    /**
     * @type {?}
     * @private
     */
    SpinnerServiceImpl.prototype._dismissingTimer;
    /**
     * @type {?}
     * @private
     */
    SpinnerServiceImpl.prototype._spinnerState;
    /**
     * @type {?}
     * @private
     */
    SpinnerServiceImpl.prototype._referenceCounter;
    /**
     * @type {?}
     * @private
     */
    SpinnerServiceImpl.prototype._underlyingSpinner;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7O01BTTFDLGVBQWUsR0FBRyxTQUFTOztNQUUzQixxQkFBcUIsR0FBRyxHQUFHOztNQUMzQix5QkFBeUIsR0FBRyxHQUFHO0FBR3JDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFTM0IsWUFBNkIsa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFGMUQsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBRzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcseUJBQXlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFHTSxvQkFBb0IsQ0FBQyxPQUFlLGVBQWU7UUFDdEQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLE9BQWU7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7SUFHTSxJQUFJLENBQUMsUUFBZ0IsYUFBYSxF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QUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLHVCQUF1QjtnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxDQUFDLEdBQUUscUJBQXFCLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7OztZQTVJSixVQUFVOzs7O1lBWEYsaUJBQWlCOzs7Ozs7O0lBY3RCLDJDQUEyQjs7Ozs7SUFDM0IsMkNBQThCOzs7OztJQUM5Qiw4Q0FBOEI7Ozs7O0lBRTlCLDJDQUErQjs7Ozs7SUFDL0IsK0NBQThCOzs7OztJQUVsQixnREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOZ3hTcGlubmVyU2VydmljZSB9IGZyb20gJ25neC1zcGlubmVyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBJU3Bpbm5lclNlcnZpY2VcclxufSBmcm9tICcuL3NwaW5uZXIuaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IFBSSU1BUllfU1BJTk5FUiA9ICdwcmltYXJ5JztcclxuXHJcbmNvbnN0IERpc21pc3NpbmdEZWxheVBlcm9pZCA9IDMwMDtcclxuY29uc3QgRGVmYXVsdFNob3dpbmdEZWxheVBlcm9pZCA9IDUwMDtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIElTcGlubmVyU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hvd2luZ1RpbWVyOiBhbnk7XHJcbiAgICBwcml2YXRlIF9zaG93aW5nRGVsYXk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2Rpc21pc3NpbmdUaW1lcjogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX3NwaW5uZXJTdGF0ZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3JlZmVyZW5jZUNvdW50ZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3VuZGVybHlpbmdTcGlubmVyOiBOZ3hTcGlubmVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc2hvd2luZ0RlbGF5ID0gRGVmYXVsdFNob3dpbmdEZWxheVBlcm9pZDtcclxuICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9zcGlubmVyU3RhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RlIHRoYXQgd2UgZG8gbm90IG5lZWQgdG8gc3RvcCBpdCwgYXMgdGhpcyBpcyBhIHNlcnZpY2Ugc3RhcnRpbmcgaW4gdGhlIGJlZ2lubmluZy5cclxuICAgIHB1YmxpYyBzdGFydFRvTGlzdGVuU3Bpbm5lcihuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIpIHtcclxuICAgICAgICAvLyBTZXQgdXAgdGhlIGxpc3RlbmVyXHJcbiAgICAgICAgdGhpcy5fdW5kZXJseWluZ1NwaW5uZXIuZ2V0U3Bpbm5lcihQUklNQVJZX1NQSU5ORVIpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc3Bpbm5lclN0YXRlID0geC5zaG93O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREZWxheShzZWNvbmRzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBzZWNvbmRzICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdmVycmlkZVxyXG4gICAgcHVibGljIHNob3codGl0bGU6IHN0cmluZyA9ICdMb2FkaW5nIC4uLicsIG5hbWUgPSBQUklNQVJZX1NQSU5ORVIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Fza2VkIHRvIHNob3cgc3Bpbm5lci4uLicpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZWZlcmVuY2VDb3VudGVyKys7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZSBhbHJlYWR5LCB1c2UgaXQuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NwaW5uZXJTdGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgLS0tIG9uZSBoYXMgYmVlbiBzY2hlZHVsZWQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhvd2V2ZXIsIHdlIG5lZWQgdG8gY2FuY2VsIHRoZSBkaXNtaXNzIHRpbWVyLlxyXG4gICAgICAgICAgICAvLyBJdCBpcyBzYWZlLCBiZWNhdXNlIHdlIGV4cGVjdCB0aGF0IFwiaGlkZVwiIGlzIHRvIGJlIGNhbGxlZFxyXG4gICAgICAgICAgICAvLyBzb21ldGltZSBsYXRlciBmcm9tIHRoaXMgbW9tZW50IG9uLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgLS0tIGNsZWFuaW5nIG91dCBkaXNtaXNtaW5nIHRpbWVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIGRpc21pc3MgdGhlIHNwaW5uZXIsXHJcbiAgICAgICAgLy8gd2UganVzdCBuZWVkIHRvIGNsZWFyIHRoZSBzY2hlZHVsZXIuXHJcbiAgICAgICAgLy8gUGxlYXNlIHJlZmVyIHRvIHRoZSBhYm92ZSBmb3IgdGhlIHJlYXNvbi5cclxuICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyAtLS0gY2xlYW5pbmcgb3V0IGRpc21pc21pbmcgdGltZXIgKDIpJyk7XHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBzY2hlZHVsZWQgdG8gc2hvdyB0aGUgc3Bpbm5lciwgd2UganVzdFxyXG4gICAgICAgIC8vIHVzZSB0aGlzIHNjaGVkdWxlLiBcclxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyAtLS0gYWxyZWFkeSBzY2hlZHVsZWQgb25lJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPdGhlcndpc2UsIHNjaGR1bGUgdG8gc2hvdyB0aGUgc3Bpbm5lci5cclxuICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93IC0tLSBydW4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxyXG4gICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl91bmRlcmx5aW5nU3Bpbm5lci5zaG93KG5hbWUpO1xyXG5cclxuICAgICAgICB9LCB0aGlzLl9zaG93aW5nRGVsYXkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZShuYW1lID0gUFJJTUFSWV9TUElOTkVSKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUNvdW50ZXItLTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUNvdW50ZXIgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZSAtLS0gcmVmZXJlbmNlIGNvdW50ZXIgc3RpbGwgZ3JlYXRlciB0aGFuIDAnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBzcGlubmVyIGhhcyBub3QgYmVlbiBzY2hlZHVsZWQuXHJcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgLS0tIHJlbW92ZSB0aGUgc2hvdyBzY2hlZHVsZXInKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93aW5nVGltZXIpO1xyXG4gICAgICAgICAgICAvLyBEb25lXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGhhdmUgc2NoZWR1bGVkIHRvIGRpc21pc3MgdGhlIHNwaW5uZXIsXHJcbiAgICAgICAgLy8gd2UgYmV0dGVyIHdlIHNjaGVkdWxlIGFnYWluLlxyXG4gICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWRlIC0tLSBhbHJlYWR5IHNoY2VkdWxlZCcpO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VuZGVybHlpbmdTcGlubmVyLmhpZGUoKTtcclxuICAgICAgICAgICAgfSwgRGlzbWlzc2luZ0RlbGF5UGVyb2lkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNjaGVkdWxlIHRvIGRpc21pc3MgdGhlIHNwaW5uZXJcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NwaW5uZXJTdGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgLS0tIHNjaGVkdWxlJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW5kZXJseWluZ1NwaW5uZXIuaGlkZShuYW1lKTtcclxuICAgICAgICAgICAgfSwgRGlzbWlzc2luZ0RlbGF5UGVyb2lkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
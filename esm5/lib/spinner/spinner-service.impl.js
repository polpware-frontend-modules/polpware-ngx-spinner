/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
export { SpinnerServiceImpl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBTTFDLGVBQWUsR0FBRyxTQUFTOztJQUUzQixxQkFBcUIsR0FBRyxHQUFHOztJQUMzQix5QkFBeUIsR0FBRyxHQUFHO0FBRXJDO0lBVUksNEJBQTZCLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBRjFELHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUcxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELHVGQUF1Rjs7Ozs7O0lBQ2hGLGlEQUFvQjs7Ozs7O0lBQTNCLFVBQTRCLElBQThCO1FBQTFELGlCQUtDO1FBTDJCLHFCQUFBLEVBQUEsc0JBQThCO1FBQ3RELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7WUFDM0QsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFTSxxQ0FBUTs7OztJQUFmLFVBQWdCLE9BQWU7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxXQUFXOzs7Ozs7O0lBQ0osaUNBQUk7Ozs7Ozs7SUFBWCxVQUFZLEtBQTZCLEVBQUUsSUFBc0I7UUFBakUsaUJBd0RDO1FBeERXLHNCQUFBLEVBQUEscUJBQTZCO1FBQUUscUJBQUEsRUFBQSxzQkFBc0I7UUFFN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLG1DQUFtQztRQUNuQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBRS9DLGdEQUFnRDtZQUNoRCw0REFBNEQ7WUFDNUQsc0NBQXNDO1lBQ3RDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7Z0JBRXRELFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzthQUM3QjtZQUVELE9BQU87U0FDVjtRQUVELHVEQUF1RDtRQUN2RCx1Q0FBdUM7UUFDdkMsNENBQTRDO1FBQzVDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztZQUUxRCxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELDREQUE0RDtRQUM1RCxzQkFBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUU5QyxPQUFPO1NBQ1Y7UUFFRCwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVOzs7UUFBQztZQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTVCLHFCQUFxQjtZQUNyQixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLENBQUMsR0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFM0IsQ0FBQzs7Ozs7SUFFTSxpQ0FBSTs7OztJQUFYLFVBQVksSUFBc0I7UUFBbEMsaUJBbURDO1FBbkRXLHFCQUFBLEVBQUEsc0JBQXNCO1FBRTlCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBRTtZQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7WUFFL0QsT0FBTztTQUNWO1FBRUQseUNBQXlDO1FBQ3pDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFFbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxPQUFPO1lBQ1AsT0FBTztTQUNWO1FBRUQsNENBQTRDO1FBQzVDLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFFMUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVOzs7WUFBQztnQkFDL0IscUJBQXFCO2dCQUNyQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3Qix1QkFBdUI7Z0JBQ3ZCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxDQUFDLEdBQUUscUJBQXFCLENBQUMsQ0FBQztZQUUxQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFFbEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVTs7O1lBQUM7Z0JBQy9CLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLHVCQUF1QjtnQkFDdkIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxDQUFDLEdBQUUscUJBQXFCLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7O2dCQTVJSixVQUFVOzs7O2dCQVhGLGlCQUFpQjs7SUF3SjFCLHlCQUFDO0NBQUEsQUE3SUQsSUE2SUM7U0E1SVksa0JBQWtCOzs7Ozs7SUFFM0IsMkNBQTJCOzs7OztJQUMzQiwyQ0FBOEI7Ozs7O0lBQzlCLDhDQUE4Qjs7Ozs7SUFFOUIsMkNBQStCOzs7OztJQUMvQiwrQ0FBOEI7Ozs7O0lBRWxCLGdEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5neFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIElTcGlubmVyU2VydmljZVxyXG59IGZyb20gJy4vc3Bpbm5lci5pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgUFJJTUFSWV9TUElOTkVSID0gJ3ByaW1hcnknO1xyXG5cclxuY29uc3QgRGlzbWlzc2luZ0RlbGF5UGVyb2lkID0gMzAwO1xyXG5jb25zdCBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkID0gNTAwO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lclNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVNwaW5uZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9zaG93aW5nVGltZXI6IGFueTtcclxuICAgIHByaXZhdGUgX3Nob3dpbmdEZWxheTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGlzbWlzc2luZ1RpbWVyOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Bpbm5lclN0YXRlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfcmVmZXJlbmNlQ291bnRlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdW5kZXJseWluZ1NwaW5uZXI6IE5neFNwaW5uZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkO1xyXG4gICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuX3NwaW5uZXJTdGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyBub3QgbmVlZCB0byBzdG9wIGl0LCBhcyB0aGlzIGlzIGEgc2VydmljZSBzdGFydGluZyBpbiB0aGUgYmVnaW5uaW5nLlxyXG4gICAgcHVibGljIHN0YXJ0VG9MaXN0ZW5TcGlubmVyKG5hbWU6IHN0cmluZyA9IFBSSU1BUllfU1BJTk5FUikge1xyXG4gICAgICAgIC8vIFNldCB1cCB0aGUgbGlzdGVuZXJcclxuICAgICAgICB0aGlzLl91bmRlcmx5aW5nU3Bpbm5lci5nZXRTcGlubmVyKFBSSU1BUllfU1BJTk5FUikuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zcGlubmVyU3RhdGUgPSB4LnNob3c7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERlbGF5KHNlY29uZHM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3Nob3dpbmdEZWxheSA9IHNlY29uZHMgKiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE92ZXJyaWRlXHJcbiAgICBwdWJsaWMgc2hvdyh0aXRsZTogc3RyaW5nID0gJ0xvYWRpbmcgLi4uJywgbmFtZSA9IFBSSU1BUllfU1BJTk5FUikge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQXNrZWQgdG8gc2hvdyBzcGlubmVyLi4uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUNvdW50ZXIrKztcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25lIGFscmVhZHksIHVzZSBpdC5cclxuICAgICAgICBpZiAodGhpcy5fc3Bpbm5lclN0YXRlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyAtLS0gb25lIGhhcyBiZWVuIHNjaGVkdWxlZCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gSG93ZXZlciwgd2UgbmVlZCB0byBjYW5jZWwgdGhlIGRpc21pc3MgdGltZXIuXHJcbiAgICAgICAgICAgIC8vIEl0IGlzIHNhZmUsIGJlY2F1c2Ugd2UgZXhwZWN0IHRoYXQgXCJoaWRlXCIgaXMgdG8gYmUgY2FsbGVkXHJcbiAgICAgICAgICAgIC8vIHNvbWV0aW1lIGxhdGVyIGZyb20gdGhpcyBtb21lbnQgb24uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyAtLS0gY2xlYW5pbmcgb3V0IGRpc21pc21pbmcgdGltZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcclxuICAgICAgICAvLyB3ZSBqdXN0IG5lZWQgdG8gY2xlYXIgdGhlIHNjaGVkdWxlci5cclxuICAgICAgICAvLyBQbGVhc2UgcmVmZXIgdG8gdGhlIGFib3ZlIGZvciB0aGUgcmVhc29uLlxyXG4gICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93IC0tLSBjbGVhbmluZyBvdXQgZGlzbWlzbWluZyB0aW1lciAoMiknKTtcclxuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IHNjaGVkdWxlZCB0byBzaG93IHRoZSBzcGlubmVyLCB3ZSBqdXN0XHJcbiAgICAgICAgLy8gdXNlIHRoaXMgc2NoZWR1bGUuIFxyXG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93IC0tLSBhbHJlYWR5IHNjaGVkdWxlZCBvbmUnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2NoZHVsZSB0byBzaG93IHRoZSBzcGlubmVyLlxyXG4gICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgLS0tIHJ1bicpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3VuZGVybHlpbmdTcGlubmVyLnNob3cobmFtZSk7XHJcblxyXG4gICAgICAgIH0sIHRoaXMuX3Nob3dpbmdEZWxheSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlKG5hbWUgPSBQUklNQVJZX1NQSU5ORVIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQ291bnRlci0tO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcmVmZXJlbmNlQ291bnRlciA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWRlIC0tLSByZWZlcmVuY2UgY291bnRlciBzdGlsbCBncmVhdGVyIHRoYW4gMCcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIHNwaW5uZXIgaGFzIG5vdCBiZWVuIHNjaGVkdWxlZC5cclxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZSAtLS0gcmVtb3ZlIHRoZSBzaG93IHNjaGVkdWxlcicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dpbmdUaW1lcik7XHJcbiAgICAgICAgICAgIC8vIERvbmVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgaGF2ZSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcclxuICAgICAgICAvLyB3ZSBiZXR0ZXIgd2Ugc2NoZWR1bGUgYWdhaW4uXHJcbiAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgLS0tIGFscmVhZHkgc2hjZWR1bGVkJyk7XHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW5kZXJseWluZ1NwaW5uZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICB9LCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2NoZWR1bGUgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lclxyXG5cclxuICAgICAgICBpZiAodGhpcy5fc3Bpbm5lclN0YXRlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZSAtLS0gc2NoZWR1bGUnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vIERpc21pc3MgdGhlIHNwaW5uZXIgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl91bmRlcmx5aW5nU3Bpbm5lci5oaWRlKG5hbWUpO1xyXG4gICAgICAgICAgICB9LCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19
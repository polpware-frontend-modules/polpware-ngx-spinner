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
        this._showingTimer = 0;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = 0;
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
            if (_this._showingTimer) {
                // Clean up the timer
                _this._showingTimer = 0;
                _this._underlyingSpinner.show(name);
            }
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
            this._dismissingTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                console.log('hide -run (1)');
                if (_this._dismissingTimer) {
                    console.log('live');
                    // Clean up the timer
                    _this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    _this._underlyingSpinner.hide();
                }
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
                console.log('hide -run (2)');
                if (_this._dismissingTimer) {
                    console.log('live');
                    _this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    _this._underlyingSpinner.hide(name);
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBTTFDLGVBQWUsR0FBRyxTQUFTOztJQUUzQixxQkFBcUIsR0FBRyxHQUFHOztJQUMzQix5QkFBeUIsR0FBRyxHQUFHO0FBRXJDO0lBVUksNEJBQTZCLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBRjFELHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUcxQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHVGQUF1Rjs7Ozs7O0lBQ2hGLGlEQUFvQjs7Ozs7O0lBQTNCLFVBQTRCLElBQThCO1FBQTFELGlCQUtDO1FBTDJCLHFCQUFBLEVBQUEsc0JBQThCO1FBQ3RELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7WUFDM0QsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFTSxxQ0FBUTs7OztJQUFmLFVBQWdCLE9BQWU7UUFDM0IsSUFBSSxDQUFD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b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLHFCQUFxQjtvQkFDckIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztvQkFDMUIsdUJBQXVCO29CQUN2QixLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2xDO1lBQ0wsQ0FBQyxHQUFFLHFCQUFxQixDQUFDLENBQUM7WUFFMUIsT0FBTztTQUNWO1FBRUQsa0NBQWtDO1FBRWxDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVU7OztZQUFDO2dCQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUU3QixJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFcEIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztvQkFDMUIsdUJBQXVCO29CQUN2QixLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QztZQUNMLENBQUMsR0FBRSxxQkFBcUIsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQzs7Z0JBOUpKLFVBQVU7Ozs7Z0JBWEYsaUJBQWlCOztJQTBLMUIseUJBQUM7Q0FBQSxBQS9KRCxJQStKQztTQTlKWSxrQkFBa0I7Ozs7OztJQUUzQiwyQ0FBMkI7Ozs7O0lBQzNCLDJDQUE4Qjs7Ozs7SUFDOUIsOENBQThCOzs7OztJQUU5QiwyQ0FBK0I7Ozs7O0lBQy9CLCtDQUE4Qjs7Ozs7SUFFbEIsZ0RBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTmd4U3Bpbm5lclNlcnZpY2UgfSBmcm9tICduZ3gtc3Bpbm5lcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgSVNwaW5uZXJTZXJ2aWNlXHJcbn0gZnJvbSAnLi9zcGlubmVyLmludGVyZmFjZSc7XHJcblxyXG5jb25zdCBQUklNQVJZX1NQSU5ORVIgPSAncHJpbWFyeSc7XHJcblxyXG5jb25zdCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQgPSAzMDA7XHJcbmNvbnN0IERlZmF1bHRTaG93aW5nRGVsYXlQZXJvaWQgPSA1MDA7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyU2VydmljZUltcGwgaW1wbGVtZW50cyBJU3Bpbm5lclNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX3Nob3dpbmdUaW1lcjogYW55O1xyXG4gICAgcHJpdmF0ZSBfc2hvd2luZ0RlbGF5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kaXNtaXNzaW5nVGltZXI6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9zcGlubmVyU3RhdGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9yZWZlcmVuY2VDb3VudGVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF91bmRlcmx5aW5nU3Bpbm5lcjogTmd4U3Bpbm5lclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuX3Nob3dpbmdEZWxheSA9IERlZmF1bHRTaG93aW5nRGVsYXlQZXJvaWQ7XHJcbiAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fc3Bpbm5lclN0YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRUb0xpc3RlblNwaW5uZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RlIHRoYXQgd2UgZG8gbm90IG5lZWQgdG8gc3RvcCBpdCwgYXMgdGhpcyBpcyBhIHNlcnZpY2Ugc3RhcnRpbmcgaW4gdGhlIGJlZ2lubmluZy5cclxuICAgIHB1YmxpYyBzdGFydFRvTGlzdGVuU3Bpbm5lcihuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIpIHtcclxuICAgICAgICAvLyBTZXQgdXAgdGhlIGxpc3RlbmVyXHJcbiAgICAgICAgdGhpcy5fdW5kZXJseWluZ1NwaW5uZXIuZ2V0U3Bpbm5lcihQUklNQVJZX1NQSU5ORVIpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc3Bpbm5lclN0YXRlID0geC5zaG93O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREZWxheShzZWNvbmRzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBzZWNvbmRzICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdmVycmlkZVxyXG4gICAgcHVibGljIHNob3codGl0bGU6IHN0cmluZyA9ICdMb2FkaW5nIC4uLicsIG5hbWUgPSBQUklNQVJZX1NQSU5ORVIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Fza2VkIHRvIHNob3cgc3Bpbm5lci4uLicpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZWZlcmVuY2VDb3VudGVyKys7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZSBhbHJlYWR5LCB1c2UgaXQuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NwaW5uZXJTdGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgLS0tIG9uZSBoYXMgYmVlbiBzY2hlZHVsZWQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhvd2V2ZXIsIHdlIG5lZWQgdG8gY2FuY2VsIHRoZSBkaXNtaXNzIHRpbWVyLlxyXG4gICAgICAgICAgICAvLyBJdCBpcyBzYWZlLCBiZWNhdXNlIHdlIGV4cGVjdCB0aGF0IFwiaGlkZVwiIGlzIHRvIGJlIGNhbGxlZFxyXG4gICAgICAgICAgICAvLyBzb21ldGltZSBsYXRlciBmcm9tIHRoaXMgbW9tZW50IG9uLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgLS0tIGNsZWFuaW5nIG91dCBkaXNtaXNtaW5nIHRpbWVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIGRpc21pc3MgdGhlIHNwaW5uZXIsXHJcbiAgICAgICAgLy8gd2UganVzdCBuZWVkIHRvIGNsZWFyIHRoZSBzY2hlZHVsZXIuXHJcbiAgICAgICAgLy8gUGxlYXNlIHJlZmVyIHRvIHRoZSBhYm92ZSBmb3IgdGhlIHJlYXNvbi5cclxuICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyAtLS0gY2xlYW5pbmcgb3V0IGRpc21pc21pbmcgdGltZXIgKDIpJyk7XHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBzY2hlZHVsZWQgdG8gc2hvdyB0aGUgc3Bpbm5lciwgd2UganVzdFxyXG4gICAgICAgIC8vIHVzZSB0aGlzIHNjaGVkdWxlLiBcclxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyAtLS0gYWxyZWFkeSBzY2hlZHVsZWQgb25lJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPdGhlcndpc2UsIHNjaGR1bGUgdG8gc2hvdyB0aGUgc3Bpbm5lci5cclxuICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93IC0tLSBydW4nKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VuZGVybHlpbmdTcGlubmVyLnNob3cobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgdGhpcy5fc2hvd2luZ0RlbGF5KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGUobmFtZSA9IFBSSU1BUllfU1BJTk5FUikge1xyXG5cclxuICAgICAgICB0aGlzLl9yZWZlcmVuY2VDb3VudGVyLS07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9yZWZlcmVuY2VDb3VudGVyID4gMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgLS0tIHJlZmVyZW5jZSBjb3VudGVyIHN0aWxsIGdyZWF0ZXIgdGhhbiAwJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgc3Bpbm5lciBoYXMgbm90IGJlZW4gc2NoZWR1bGVkLlxyXG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWRlIC0tLSByZW1vdmUgdGhlIHNob3cgc2NoZWR1bGVyJyk7XHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd2luZ1RpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIERvbmVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgaGF2ZSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcclxuICAgICAgICAvLyB3ZSBiZXR0ZXIgd2Ugc2NoZWR1bGUgYWdhaW4uXHJcbiAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgLS0tIGFscmVhZHkgc2hjZWR1bGVkJyk7XHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgLXJ1biAoMSknKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc21pc3MgdGhlIHNwaW5uZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5kZXJseWluZ1NwaW5uZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2NoZWR1bGUgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lclxyXG5cclxuICAgICAgICBpZiAodGhpcy5fc3Bpbm5lclN0YXRlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZSAtLS0gc2NoZWR1bGUnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWRlIC1ydW4gKDIpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91bmRlcmx5aW5nU3Bpbm5lci5oaWRlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19
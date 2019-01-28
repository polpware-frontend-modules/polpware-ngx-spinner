/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
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
            .pipe(startWith(false))
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
        if (title === void 0) { title = 'Loading ...'; }
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
    SpinnerServiceImpl.prototype._underlyingSpinner;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDOztJQU0xQyxxQkFBcUIsR0FBRyxHQUFHOztJQUMzQix5QkFBeUIsR0FBRyxHQUFHO0FBRXJDO0lBU0ksNEJBQW9CLGtCQUFxQztRQUF6RCxpQkFZQztRQVptQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcseUJBQXlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQjthQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDUixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7O0lBRU0scUNBQVE7Ozs7SUFBZixVQUFnQixPQUFlO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVzs7Ozs7O0lBQ0osaUNBQUk7Ozs7OztJQUFYLFVBQVksS0FBNkI7UUFDckMsbUNBQW1DO1FBRHZDLGlCQXVDQztRQXZDVyxzQkFBQSxFQUFBLHFCQUE2QjtRQUdyQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFFcEIsZ0RBQWdEO1lBQ2hELDREQUE0RDtZQUM1RCxzQ0FBc0M7WUFDdEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzthQUM3QjtZQUVELE9BQU87U0FDVjtRQUVELHVEQUF1RDtRQUN2RCx1Q0FBdUM7UUFDdkMsNENBQTRDO1FBQzVDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLE9BQU87U0FDVjtRQUVELDREQUE0RDtRQUM1RCxzQkFBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLE9BQU87U0FDVjtRQUVELDBDQUEwQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztZQUM1QixxQkFBcUI7WUFDckIsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5DLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFM0IsQ0FBQzs7OztJQUVNLGlDQUFJOzs7SUFBWDtRQUFBLGlCQWlDQztRQWhDRyx3Q0FBd0M7UUFDeEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsT0FBTztTQUNWO1FBRUQsNENBQTRDO1FBQzVDLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztnQkFDL0IscUJBQXFCO2dCQUNyQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUU3Qix1QkFBdUI7Z0JBQ3ZCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUUxQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFFbEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7Z0JBRS9CLHVCQUF1QjtnQkFDdkIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRW5DLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQzs7Z0JBdEdKLFVBQVU7Ozs7Z0JBVEYsaUJBQWlCOztJQWdIMUIseUJBQUM7Q0FBQSxBQXZHRCxJQXVHQztTQXRHWSxrQkFBa0I7Ozs7OztJQUUzQiwyQ0FBMkI7Ozs7O0lBQzNCLDJDQUE4Qjs7Ozs7SUFDOUIsOENBQThCOzs7OztJQUU5QiwyQ0FBK0I7Ozs7O0lBRW5CLGdEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5neFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIElTcGlubmVyU2VydmljZVxyXG59IGZyb20gJy4vc3Bpbm5lci5pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgRGlzbWlzc2luZ0RlbGF5UGVyb2lkID0gMzAwO1xyXG5jb25zdCBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkID0gNTAwO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lclNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVNwaW5uZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9zaG93aW5nVGltZXI6IGFueTtcclxuICAgIHByaXZhdGUgX3Nob3dpbmdEZWxheTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGlzbWlzc2luZ1RpbWVyOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Bpbm5lclN0YXRlOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VuZGVybHlpbmdTcGlubmVyOiBOZ3hTcGlubmVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc2hvd2luZ0RlbGF5ID0gRGVmYXVsdFNob3dpbmdEZWxheVBlcm9pZDtcclxuICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9zcGlubmVyU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAvLyBTZXQgdXAgdGhlIGxpc3RlbmVyXHJcbiAgICAgICAgdGhpcy5fdW5kZXJseWluZ1NwaW5uZXIuc3Bpbm5lck9ic2VydmFibGVcclxuICAgICAgICAgICAgLnBpcGUoc3RhcnRXaXRoKGZhbHNlKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NwaW5uZXJTdGF0ZSA9IHg7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREZWxheShzZWNvbmRzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBzZWNvbmRzICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdmVycmlkZVxyXG4gICAgcHVibGljIHNob3codGl0bGU6IHN0cmluZyA9ICdMb2FkaW5nIC4uLicpIHtcclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmUgYWxyZWFkeSwgdXNlIGl0LlxyXG5cclxuICAgICAgICBpZiAodGhpcy5fc3Bpbm5lclN0YXRlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBIb3dldmVyLCB3ZSBuZWVkIHRvIGNhbmNlbCB0aGUgZGlzbWlzcyB0aW1lci5cclxuICAgICAgICAgICAgLy8gSXQgaXMgc2FmZSwgYmVjYXVzZSB3ZSBleHBlY3QgdGhhdCBcImhpZGVcIiBpcyB0byBiZSBjYWxsZWRcclxuICAgICAgICAgICAgLy8gc29tZXRpbWUgbGF0ZXIgZnJvbSB0aGlzIG1vbWVudCBvbi5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIGRpc21pc3MgdGhlIHNwaW5uZXIsXHJcbiAgICAgICAgLy8gd2UganVzdCBuZWVkIHRvIGNsZWFyIHRoZSBzY2hlZHVsZXIuXHJcbiAgICAgICAgLy8gUGxlYXNlIHJlZmVyIHRvIHRoZSBhYm92ZSBmb3IgdGhlIHJlYXNvbi5cclxuICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIHNob3cgdGhlIHNwaW5uZXIsIHdlIGp1c3RcclxuICAgICAgICAvLyB1c2UgdGhpcyBzY2hlZHVsZS4gXHJcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPdGhlcndpc2UsIHNjaGR1bGUgdG8gc2hvdyB0aGUgc3Bpbm5lci5cclxuICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3VuZGVybHlpbmdTcGlubmVyLnNob3coKTtcclxuXHJcbiAgICAgICAgfSwgdGhpcy5fc2hvd2luZ0RlbGF5KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGUoKSB7XHJcbiAgICAgICAgLy8gSWYgdGhlIHNwaW5uZXIgaGFzIG5vdCBiZWVuIHJlbmRlcmVkLlxyXG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dpbmdUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGhhdmUgc2NoZWR1bGVkIHRvIGRpc21pc3MgdGhlIHNwaW5uZXIsXHJcbiAgICAgICAgLy8gd2UgYmV0dGVyIHdlIHNjaGVkdWxlIGFnYWluLlxyXG4gICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERpc21pc3MgdGhlIHNwaW5uZXIgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl91bmRlcmx5aW5nU3Bpbm5lci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTY2hlZHVsZSB0byBkaXNtaXNzIHRoZSBzcGlubmVyXHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zcGlubmVyU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VuZGVybHlpbmdTcGlubmVyLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
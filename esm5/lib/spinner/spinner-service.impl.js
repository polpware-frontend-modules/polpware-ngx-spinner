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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBTTFDLGVBQWUsR0FBRyxTQUFTOztJQUUzQixxQkFBcUIsR0FBRyxHQUFHOztJQUMzQix5QkFBeUIsR0FBRyxHQUFHO0FBRXJDO0lBVUksNEJBQTZCLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBRjFELHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUcxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHVGQUF1Rjs7Ozs7O0lBQ2hGLGlEQUFvQjs7Ozs7O0lBQTNCLFVBQTRCLElBQThCO1FBQTFELGlCQUtDO1FBTDJCLHFCQUFBLEVBQUEsc0JBQThCO1FBQ3RELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7WUFDM0QsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFTSxxQ0FBUTs7OztJQUFmLFVBQWdCLE9BQWU7UUFDM0IsSUFBSSxDQUFD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QyxDQUFDLEdBQUUscUJBQXFCLENBQUMsQ0FBQztZQUUxQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFFbEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVTs7O1lBQUM7Z0JBQy9CLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLHVCQUF1QjtnQkFDdkIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxDQUFDLEdBQUUscUJBQXFCLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7O2dCQTlJSixVQUFVOzs7O2dCQVhGLGlCQUFpQjs7SUEwSjFCLHlCQUFDO0NBQUEsQUEvSUQsSUErSUM7U0E5SVksa0JBQWtCOzs7Ozs7SUFFM0IsMkNBQTJCOzs7OztJQUMzQiwyQ0FBOEI7Ozs7O0lBQzlCLDhDQUE4Qjs7Ozs7SUFFOUIsMkNBQStCOzs7OztJQUMvQiwrQ0FBOEI7Ozs7O0lBRWxCLGdEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5neFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIElTcGlubmVyU2VydmljZVxyXG59IGZyb20gJy4vc3Bpbm5lci5pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgUFJJTUFSWV9TUElOTkVSID0gJ3ByaW1hcnknO1xyXG5cclxuY29uc3QgRGlzbWlzc2luZ0RlbGF5UGVyb2lkID0gMzAwO1xyXG5jb25zdCBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkID0gNTAwO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lclNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVNwaW5uZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9zaG93aW5nVGltZXI6IGFueTtcclxuICAgIHByaXZhdGUgX3Nob3dpbmdEZWxheTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGlzbWlzc2luZ1RpbWVyOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Bpbm5lclN0YXRlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfcmVmZXJlbmNlQ291bnRlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdW5kZXJseWluZ1NwaW5uZXI6IE5neFNwaW5uZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkO1xyXG4gICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuX3NwaW5uZXJTdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0VG9MaXN0ZW5TcGlubmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm90ZSB0aGF0IHdlIGRvIG5vdCBuZWVkIHRvIHN0b3AgaXQsIGFzIHRoaXMgaXMgYSBzZXJ2aWNlIHN0YXJ0aW5nIGluIHRoZSBiZWdpbm5pbmcuXHJcbiAgICBwdWJsaWMgc3RhcnRUb0xpc3RlblNwaW5uZXIobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSKSB7XHJcbiAgICAgICAgLy8gU2V0IHVwIHRoZSBsaXN0ZW5lclxyXG4gICAgICAgIHRoaXMuX3VuZGVybHlpbmdTcGlubmVyLmdldFNwaW5uZXIoUFJJTUFSWV9TUElOTkVSKS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwaW5uZXJTdGF0ZSA9IHguc2hvdztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGVsYXkoc2Vjb25kczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvd2luZ0RlbGF5ID0gc2Vjb25kcyAqIDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3ZlcnJpZGVcclxuICAgIHB1YmxpYyBzaG93KHRpdGxlOiBzdHJpbmcgPSAnTG9hZGluZyAuLi4nLCBuYW1lID0gUFJJTUFSWV9TUElOTkVSKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBc2tlZCB0byBzaG93IHNwaW5uZXIuLi4nKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQ291bnRlcisrO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmUgYWxyZWFkeSwgdXNlIGl0LlxyXG4gICAgICAgIGlmICh0aGlzLl9zcGlubmVyU3RhdGUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93IC0tLSBvbmUgaGFzIGJlZW4gc2NoZWR1bGVkJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBIb3dldmVyLCB3ZSBuZWVkIHRvIGNhbmNlbCB0aGUgZGlzbWlzcyB0aW1lci5cclxuICAgICAgICAgICAgLy8gSXQgaXMgc2FmZSwgYmVjYXVzZSB3ZSBleHBlY3QgdGhhdCBcImhpZGVcIiBpcyB0byBiZSBjYWxsZWRcclxuICAgICAgICAgICAgLy8gc29tZXRpbWUgbGF0ZXIgZnJvbSB0aGlzIG1vbWVudCBvbi5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93IC0tLSBjbGVhbmluZyBvdXQgZGlzbWlzbWluZyB0aW1lcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxyXG4gICAgICAgIC8vIHdlIGp1c3QgbmVlZCB0byBjbGVhciB0aGUgc2NoZWR1bGVyLlxyXG4gICAgICAgIC8vIFBsZWFzZSByZWZlciB0byB0aGUgYWJvdmUgZm9yIHRoZSByZWFzb24uXHJcbiAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgLS0tIGNsZWFuaW5nIG91dCBkaXNtaXNtaW5nIHRpbWVyICgyKScpO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIHNob3cgdGhlIHNwaW5uZXIsIHdlIGp1c3RcclxuICAgICAgICAvLyB1c2UgdGhpcyBzY2hlZHVsZS4gXHJcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgLS0tIGFscmVhZHkgc2NoZWR1bGVkIG9uZScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBzY2hkdWxlIHRvIHNob3cgdGhlIHNwaW5uZXIuXHJcbiAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyAtLS0gcnVuJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcclxuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fdW5kZXJseWluZ1NwaW5uZXIuc2hvdyhuYW1lKTtcclxuXHJcbiAgICAgICAgfSwgdGhpcy5fc2hvd2luZ0RlbGF5KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGUobmFtZSA9IFBSSU1BUllfU1BJTk5FUikge1xyXG5cclxuICAgICAgICB0aGlzLl9yZWZlcmVuY2VDb3VudGVyLS07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9yZWZlcmVuY2VDb3VudGVyID4gMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgLS0tIHJlZmVyZW5jZSBjb3VudGVyIHN0aWxsIGdyZWF0ZXIgdGhhbiAwJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgc3Bpbm5lciBoYXMgbm90IGJlZW4gc2NoZWR1bGVkLlxyXG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWRlIC0tLSByZW1vdmUgdGhlIHNob3cgc2NoZWR1bGVyJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd2luZ1RpbWVyKTtcclxuICAgICAgICAgICAgLy8gRG9uZVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBoYXZlIHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxyXG4gICAgICAgIC8vIHdlIGJldHRlciB3ZSBzY2hlZHVsZSBhZ2Fpbi5cclxuICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZSAtLS0gYWxyZWFkeSBzaGNlZHVsZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vIERpc21pc3MgdGhlIHNwaW5uZXIgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl91bmRlcmx5aW5nU3Bpbm5lci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTY2hlZHVsZSB0byBkaXNtaXNzIHRoZSBzcGlubmVyXHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zcGlubmVyU3RhdGUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWRlIC0tLSBzY2hlZHVsZScpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VuZGVybHlpbmdTcGlubmVyLmhpZGUobmFtZSk7XHJcbiAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
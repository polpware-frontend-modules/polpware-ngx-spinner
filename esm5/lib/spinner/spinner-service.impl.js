import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import * as i0 from "@angular/core";
import * as i1 from "ngx-spinner";
var PRIMARY_SPINNER = 'primary';
var DismissingDelayPeroid = 300;
var DefaultShowingDelayPeroid = 500;
/* Note that on purpose we do not turn this one into a singular service.
 * Therefore, we are able to create many such services for each component */
var SpinnerServiceImpl = /** @class */ (function () {
    function SpinnerServiceImpl(_underlyingSpinner) {
        this._underlyingSpinner = _underlyingSpinner;
        this._referenceCounter = 0;
        this._showingTimer = 0;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = 0;
        this._spinnerState = false;
    }
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    SpinnerServiceImpl.prototype.startToListenSpinner = function (name) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        // Set up the listener
        this._subr = this._underlyingSpinner.getSpinner(name).subscribe(function (x) {
            _this._spinnerState = x.show;
        });
    };
    SpinnerServiceImpl.prototype.stopListener = function (name) {
        if (name === void 0) { name = PRIMARY_SPINNER; }
        this._subr && this._subr.unsubscribe();
    };
    SpinnerServiceImpl.prototype.setDelay = function (seconds) {
        this._showingDelay = seconds * 1000;
    };
    // Override
    SpinnerServiceImpl.prototype.show = function (title, name) {
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
        this._showingTimer = setTimeout(function () {
            console.log('show --- run');
            if (_this._showingTimer) {
                // Clean up the timer
                _this._showingTimer = 0;
                _this._underlyingSpinner.show(name);
            }
        }, this._showingDelay);
    };
    SpinnerServiceImpl.prototype.hide = function (name) {
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
            this._dismissingTimer = setTimeout(function () {
                console.log('hide -run (1)');
                if (_this._dismissingTimer) {
                    console.log('live');
                    // Clean up the timer
                    _this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    _this._underlyingSpinner.hide();
                }
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this._spinnerState) {
            console.log('hide --- schedule');
            this._dismissingTimer = setTimeout(function () {
                console.log('hide -run (2)');
                if (_this._dismissingTimer) {
                    console.log('live');
                    _this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    _this._underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
        }
    };
    /** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(i0.ɵɵinject(i1.NgxSpinnerService)); };
    /** @nocollapse */ SpinnerServiceImpl.ɵprov = i0.ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
    return SpinnerServiceImpl;
}());
export { SpinnerServiceImpl };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: i1.NgxSpinnerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBTWhELElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUVsQyxJQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztBQUNsQyxJQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztBQUV0Qzs0RUFDNEU7QUFFNUU7SUFZSSw0QkFBNkIsa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFKMUQsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBSzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcseUJBQXlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsdUZBQXVGO0lBQ2hGLGlEQUFvQixHQUEzQixVQUE0QixJQUE4QjtRQUExRCxpQkFLQztRQUwyQixxQkFBQSxFQUFBLHNCQUE4QjtRQUN0RCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDN0QsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHlDQUFZLEdBQW5CLFVBQW9CLElBQThCO1FBQTlCLHFC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QUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO2dCQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUU3QixJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEIscUJBQXFCO29CQUNyQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO29CQUMxQix1QkFBdUI7b0JBQ3ZCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbEM7WUFDTCxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUUxQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFFbEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO2dCQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUU3QixJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFcEIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztvQkFDMUIsdUJBQXVCO29CQUN2QixLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QztZQUNMLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQzsyR0FqS1Esa0JBQWtCO2lGQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCOzZCQXJCL0I7Q0F1TEMsQUFuS0QsSUFtS0M7U0FsS1ksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTmd4U3Bpbm5lclNlcnZpY2UgfSBmcm9tICduZ3gtc3Bpbm5lcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgSVNwaW5uZXJTZXJ2aWNlXHJcbn0gZnJvbSAnLi9zcGlubmVyLmludGVyZmFjZSc7XHJcblxyXG5jb25zdCBQUklNQVJZX1NQSU5ORVIgPSAncHJpbWFyeSc7XHJcblxyXG5jb25zdCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQgPSAzMDA7XHJcbmNvbnN0IERlZmF1bHRTaG93aW5nRGVsYXlQZXJvaWQgPSA1MDA7XHJcblxyXG4vKiBOb3RlIHRoYXQgb24gcHVycG9zZSB3ZSBkbyBub3QgdHVybiB0aGlzIG9uZSBpbnRvIGEgc2luZ3VsYXIgc2VydmljZS4gXHJcbiAqIFRoZXJlZm9yZSwgd2UgYXJlIGFibGUgdG8gY3JlYXRlIG1hbnkgc3VjaCBzZXJ2aWNlcyBmb3IgZWFjaCBjb21wb25lbnQgKi9cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIElTcGlubmVyU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hvd2luZ1RpbWVyOiBhbnk7XHJcbiAgICBwcml2YXRlIF9zaG93aW5nRGVsYXk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2Rpc21pc3NpbmdUaW1lcjogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX3NwaW5uZXJTdGF0ZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3JlZmVyZW5jZUNvdW50ZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF91bmRlcmx5aW5nU3Bpbm5lcjogTmd4U3Bpbm5lclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuX3Nob3dpbmdEZWxheSA9IERlZmF1bHRTaG93aW5nRGVsYXlQZXJvaWQ7XHJcbiAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fc3Bpbm5lclN0YXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm90ZSB0aGF0IHdlIGRvIG5vdCBuZWVkIHRvIHN0b3AgaXQsIGFzIHRoaXMgaXMgYSBzZXJ2aWNlIHN0YXJ0aW5nIGluIHRoZSBiZWdpbm5pbmcuXHJcbiAgICBwdWJsaWMgc3RhcnRUb0xpc3RlblNwaW5uZXIobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSKSB7XHJcbiAgICAgICAgLy8gU2V0IHVwIHRoZSBsaXN0ZW5lclxyXG4gICAgICAgIHRoaXMuX3N1YnIgPSB0aGlzLl91bmRlcmx5aW5nU3Bpbm5lci5nZXRTcGlubmVyKG5hbWUpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc3Bpbm5lclN0YXRlID0geC5zaG93O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wTGlzdGVuZXIobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSKSB7XHJcbiAgICAgICAgdGhpcy5fc3ViciAmJiB0aGlzLl9zdWJyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERlbGF5KHNlY29uZHM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3Nob3dpbmdEZWxheSA9IHNlY29uZHMgKiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE92ZXJyaWRlXHJcbiAgICBwdWJsaWMgc2hvdyh0aXRsZTogc3RyaW5nID0gJ0xvYWRpbmcgLi4uJywgbmFtZSA9IFBSSU1BUllfU1BJTk5FUikge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQXNrZWQgdG8gc2hvdyBzcGlubmVyLi4uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUNvdW50ZXIrKztcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25lIGFscmVhZHksIHVzZSBpdC5cclxuICAgICAgICBpZiAodGhpcy5fc3Bpbm5lclN0YXRlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyAtLS0gb25lIGhhcyBiZWVuIHNjaGVkdWxlZCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gSG93ZXZlciwgd2UgbmVlZCB0byBjYW5jZWwgdGhlIGRpc21pc3MgdGltZXIuXHJcbiAgICAgICAgICAgIC8vIEl0IGlzIHNhZmUsIGJlY2F1c2Ugd2UgZXhwZWN0IHRoYXQgXCJoaWRlXCIgaXMgdG8gYmUgY2FsbGVkXHJcbiAgICAgICAgICAgIC8vIHNvbWV0aW1lIGxhdGVyIGZyb20gdGhpcyBtb21lbnQgb24uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyAtLS0gY2xlYW5pbmcgb3V0IGRpc21pc21pbmcgdGltZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcclxuICAgICAgICAvLyB3ZSBqdXN0IG5lZWQgdG8gY2xlYXIgdGhlIHNjaGVkdWxlci5cclxuICAgICAgICAvLyBQbGVhc2UgcmVmZXIgdG8gdGhlIGFib3ZlIGZvciB0aGUgcmVhc29uLlxyXG4gICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93IC0tLSBjbGVhbmluZyBvdXQgZGlzbWlzbWluZyB0aW1lciAoMiknKTtcclxuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IHNjaGVkdWxlZCB0byBzaG93IHRoZSBzcGlubmVyLCB3ZSBqdXN0XHJcbiAgICAgICAgLy8gdXNlIHRoaXMgc2NoZWR1bGUuIFxyXG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93IC0tLSBhbHJlYWR5IHNjaGVkdWxlZCBvbmUnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2NoZHVsZSB0byBzaG93IHRoZSBzcGlubmVyLlxyXG4gICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgLS0tIHJ1bicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW5kZXJseWluZ1NwaW5uZXIuc2hvdyhuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCB0aGlzLl9zaG93aW5nRGVsYXkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZShuYW1lID0gUFJJTUFSWV9TUElOTkVSKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUNvdW50ZXItLTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUNvdW50ZXIgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZSAtLS0gcmVmZXJlbmNlIGNvdW50ZXIgc3RpbGwgZ3JlYXRlciB0aGFuIDAnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBzcGlubmVyIGhhcyBub3QgYmVlbiBzY2hlZHVsZWQuXHJcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgLS0tIHJlbW92ZSB0aGUgc2hvdyBzY2hlZHVsZXInKTtcclxuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93aW5nVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgLy8gRG9uZVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBoYXZlIHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxyXG4gICAgICAgIC8vIHdlIGJldHRlciB3ZSBzY2hlZHVsZSBhZ2Fpbi5cclxuICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZSAtLS0gYWxyZWFkeSBzaGNlZHVsZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZSAtcnVuICgxKScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91bmRlcmx5aW5nU3Bpbm5lci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTY2hlZHVsZSB0byBkaXNtaXNzIHRoZSBzcGlubmVyXHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zcGlubmVyU3RhdGUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWRlIC0tLSBzY2hlZHVsZScpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgLXJ1biAoMiknKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuZGVybHlpbmdTcGlubmVyLmhpZGUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
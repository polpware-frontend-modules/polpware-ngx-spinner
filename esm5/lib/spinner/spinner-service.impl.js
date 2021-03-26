import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { NgxLoggerImpl } from '@polpware/ngx-logger';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerServiceBase } from './spinner-service-base';
import * as i0 from "@angular/core";
import * as i1 from "ngx-spinner";
import * as i2 from "@polpware/ngx-logger";
var PRIMARY_SPINNER = 'primary';
/* Note that on purpose we do not turn this one into a singular service.
 * Therefore, we are able to create many such services for each component */
var SpinnerServiceImpl = /** @class */ (function (_super) {
    __extends(SpinnerServiceImpl, _super);
    function SpinnerServiceImpl(underlyingSpinner, logger) {
        var _this = _super.call(this) || this;
        _this.underlyingSpinner = underlyingSpinner;
        _this.logger = logger;
        return _this;
    }
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    SpinnerServiceImpl.prototype.startToListenSpinner = function (name) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        // Set up the listener
        this._subr = this.underlyingSpinner.getSpinner(name).subscribe(function (x) {
            _this.spinnerState = x.show;
        });
    };
    SpinnerServiceImpl.prototype.stopListener = function (name) {
        if (name === void 0) { name = PRIMARY_SPINNER; }
        this._subr && this._subr.unsubscribe();
    };
    /** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(i0.ɵɵinject(i1.NgxSpinnerService), i0.ɵɵinject(i2.NgxLoggerImpl)); };
    /** @nocollapse */ SpinnerServiceImpl.ɵprov = i0.ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
    return SpinnerServiceImpl;
}(SpinnerServiceBase));
export { SpinnerServiceImpl };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: i1.NgxSpinnerService }, { type: i2.NgxLoggerImpl }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWhELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRTVELElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUVsQzs0RUFDNEU7QUFFNUU7SUFDd0Msc0NBQWtCO0lBSXRELDRCQUErQixpQkFBb0MsRUFDNUMsTUFBcUI7UUFENUMsWUFHSSxpQkFBTyxTQUNWO1FBSjhCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDNUMsWUFBTSxHQUFOLE1BQU0sQ0FBZTs7SUFHNUMsQ0FBQztJQUVELHVGQUF1RjtJQUNoRixpREFBb0IsR0FBM0IsVUFBNEIsSUFBOEI7UUFBMUQsaUJBS0M7UUFMMkIscUJBQUEsRUFBQSxzQkFBOEI7UUFDdEQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQzVELEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx5Q0FBWSxHQUFuQixVQUFvQixJQUE4QjtRQUE5QixxQkFBQSxFQUFBLHNCQUE4QjtRQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQzsyR0FwQlEsa0JBQWtCO2lGQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCOzZCQVovQjtDQWtDQyxBQXZCRCxDQUN3QyxrQkFBa0IsR0FzQnpEO1NBdEJZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neExvZ2dlckltcGwgfSBmcm9tICdAcG9scHdhcmUvbmd4LWxvZ2dlcic7XHJcbmltcG9ydCB7IE5neFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3Bpbm5lclNlcnZpY2VCYXNlIH0gZnJvbSAnLi9zcGlubmVyLXNlcnZpY2UtYmFzZSc7XHJcblxyXG5jb25zdCBQUklNQVJZX1NQSU5ORVIgPSAncHJpbWFyeSc7XHJcblxyXG4vKiBOb3RlIHRoYXQgb24gcHVycG9zZSB3ZSBkbyBub3QgdHVybiB0aGlzIG9uZSBpbnRvIGEgc2luZ3VsYXIgc2VydmljZS4gXHJcbiAqIFRoZXJlZm9yZSwgd2UgYXJlIGFibGUgdG8gY3JlYXRlIG1hbnkgc3VjaCBzZXJ2aWNlcyBmb3IgZWFjaCBjb21wb25lbnQgKi9cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlSW1wbCBleHRlbmRzIFNwaW5uZXJTZXJ2aWNlQmFzZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3VicjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSB1bmRlcmx5aW5nU3Bpbm5lcjogTmd4U3Bpbm5lclNlcnZpY2UsXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGxvZ2dlcjogTmd4TG9nZ2VySW1wbCkge1xyXG5cclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyBub3QgbmVlZCB0byBzdG9wIGl0LCBhcyB0aGlzIGlzIGEgc2VydmljZSBzdGFydGluZyBpbiB0aGUgYmVnaW5uaW5nLlxyXG4gICAgcHVibGljIHN0YXJ0VG9MaXN0ZW5TcGlubmVyKG5hbWU6IHN0cmluZyA9IFBSSU1BUllfU1BJTk5FUikge1xyXG4gICAgICAgIC8vIFNldCB1cCB0aGUgbGlzdGVuZXJcclxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5nZXRTcGlubmVyKG5hbWUpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSB4LnNob3c7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BMaXN0ZW5lcihuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIpIHtcclxuICAgICAgICB0aGlzLl9zdWJyICYmIHRoaXMuX3N1YnIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
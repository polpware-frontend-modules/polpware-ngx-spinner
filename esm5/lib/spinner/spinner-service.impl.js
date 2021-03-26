import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerServiceBase } from './spinner-service-base';
import * as i0 from "@angular/core";
import * as i1 from "ngx-spinner";
var PRIMARY_SPINNER = 'primary';
/* Note that on purpose we do not turn this one into a singular service.
 * Therefore, we are able to create many such services for each component */
var SpinnerServiceImpl = /** @class */ (function (_super) {
    __extends(SpinnerServiceImpl, _super);
    function SpinnerServiceImpl(underlyingSpinner) {
        var _this = _super.call(this) || this;
        _this.underlyingSpinner = underlyingSpinner;
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
    /** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(i0.ɵɵinject(i1.NgxSpinnerService)); };
    /** @nocollapse */ SpinnerServiceImpl.ɵprov = i0.ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
    return SpinnerServiceImpl;
}(SpinnerServiceBase));
export { SpinnerServiceImpl };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: i1.NgxSpinnerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUU1RCxJQUFNLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFFbEM7NEVBQzRFO0FBRTVFO0lBQ3dDLHNDQUFrQjtJQUl0RCw0QkFBK0IsaUJBQW9DO1FBQW5FLFlBRUksaUJBQU8sU0FDVjtRQUg4Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1COztJQUduRSxDQUFDO0lBRUQsdUZBQXVGO0lBQ2hGLGlEQUFvQixHQUEzQixVQUE0QixJQUE4QjtRQUExRCxpQkFLQztRQUwyQixxQkFBQSxFQUFBLHNCQUE4QjtRQUN0RCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDNUQsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHlDQUFZLEdBQW5CLFVBQW9CLElBQThCO1FBQTlCLHFCQUFBLEVBQUEsc0JBQThCO1FBQzlDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzJHQW5CUSxrQkFBa0I7aUZBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7NkJBWC9CO0NBZ0NDLEFBdEJELENBQ3dDLGtCQUFrQixHQXFCekQ7U0FyQlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4U3Bpbm5lclNlcnZpY2UgfSBmcm9tICduZ3gtc3Bpbm5lcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTcGlubmVyU2VydmljZUJhc2UgfSBmcm9tICcuL3NwaW5uZXItc2VydmljZS1iYXNlJztcclxuXHJcbmNvbnN0IFBSSU1BUllfU1BJTk5FUiA9ICdwcmltYXJ5JztcclxuXHJcbi8qIE5vdGUgdGhhdCBvbiBwdXJwb3NlIHdlIGRvIG5vdCB0dXJuIHRoaXMgb25lIGludG8gYSBzaW5ndWxhciBzZXJ2aWNlLiBcclxuICogVGhlcmVmb3JlLCB3ZSBhcmUgYWJsZSB0byBjcmVhdGUgbWFueSBzdWNoIHNlcnZpY2VzIGZvciBlYWNoIGNvbXBvbmVudCAqL1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lclNlcnZpY2VJbXBsIGV4dGVuZHMgU3Bpbm5lclNlcnZpY2VCYXNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHVuZGVybHlpbmdTcGlubmVyOiBOZ3hTcGlubmVyU2VydmljZSkge1xyXG5cclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyBub3QgbmVlZCB0byBzdG9wIGl0LCBhcyB0aGlzIGlzIGEgc2VydmljZSBzdGFydGluZyBpbiB0aGUgYmVnaW5uaW5nLlxyXG4gICAgcHVibGljIHN0YXJ0VG9MaXN0ZW5TcGlubmVyKG5hbWU6IHN0cmluZyA9IFBSSU1BUllfU1BJTk5FUikge1xyXG4gICAgICAgIC8vIFNldCB1cCB0aGUgbGlzdGVuZXJcclxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5nZXRTcGlubmVyKG5hbWUpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSB4LnNob3c7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BMaXN0ZW5lcihuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIpIHtcclxuICAgICAgICB0aGlzLl9zdWJyICYmIHRoaXMuX3N1YnIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
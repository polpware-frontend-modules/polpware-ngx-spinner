import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { LoggerProviderImpl } from '@polpware/ngx-logger';
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
    function SpinnerServiceImpl(underlyingSpinner, loggerProvider) {
        var _this = _super.call(this) || this;
        _this.underlyingSpinner = underlyingSpinner;
        _this.logger = loggerProvider.logger('polpware_ngx_spinner');
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
    /** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(i0.ɵɵinject(i1.NgxSpinnerService), i0.ɵɵinject(i2.LoggerProviderImpl)); };
    /** @nocollapse */ SpinnerServiceImpl.ɵprov = i0.ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
    return SpinnerServiceImpl;
}(SpinnerServiceBase));
export { SpinnerServiceImpl };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: i1.NgxSpinnerService }, { type: i2.LoggerProviderImpl }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFNUQsSUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDO0FBRWxDOzRFQUM0RTtBQUU1RTtJQUN3QyxzQ0FBa0I7SUFJdEQsNEJBQStCLGlCQUFvQyxFQUMvRCxjQUFrQztRQUR0QyxZQUVJLGlCQUFPLFNBR1Y7UUFMOEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUkvRCxLQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7SUFDaEUsQ0FBQztJQUVELHVGQUF1RjtJQUNoRixpREFBb0IsR0FBM0IsVUFBNEIsSUFBOEI7UUFBMUQsaUJBS0M7UUFMMkIscUJBQUEsRUFBQSxzQkFBOEI7UUFDdEQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQzVELEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx5Q0FBWSxHQUFuQixVQUFvQixJQUE4QjtRQUE5QixxQkFBQSxFQUFBLHNCQUE4QjtRQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQzsyR0FyQlEsa0JBQWtCO2lGQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCOzZCQVovQjtDQW1DQyxBQXhCRCxDQUN3QyxrQkFBa0IsR0F1QnpEO1NBdkJZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ2dlclByb3ZpZGVySW1wbCB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbG9nZ2VyJztcclxuaW1wb3J0IHsgTmd4U3Bpbm5lclNlcnZpY2UgfSBmcm9tICduZ3gtc3Bpbm5lcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTcGlubmVyU2VydmljZUJhc2UgfSBmcm9tICcuL3NwaW5uZXItc2VydmljZS1iYXNlJztcclxuXHJcbmNvbnN0IFBSSU1BUllfU1BJTk5FUiA9ICdwcmltYXJ5JztcclxuXHJcbi8qIE5vdGUgdGhhdCBvbiBwdXJwb3NlIHdlIGRvIG5vdCB0dXJuIHRoaXMgb25lIGludG8gYSBzaW5ndWxhciBzZXJ2aWNlLiBcclxuICogVGhlcmVmb3JlLCB3ZSBhcmUgYWJsZSB0byBjcmVhdGUgbWFueSBzdWNoIHNlcnZpY2VzIGZvciBlYWNoIGNvbXBvbmVudCAqL1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lclNlcnZpY2VJbXBsIGV4dGVuZHMgU3Bpbm5lclNlcnZpY2VCYXNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHVuZGVybHlpbmdTcGlubmVyOiBOZ3hTcGlubmVyU2VydmljZSxcclxuICAgICAgICBsb2dnZXJQcm92aWRlcjogTG9nZ2VyUHJvdmlkZXJJbXBsKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXJQcm92aWRlci5sb2dnZXIoJ3BvbHB3YXJlX25neF9zcGlubmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm90ZSB0aGF0IHdlIGRvIG5vdCBuZWVkIHRvIHN0b3AgaXQsIGFzIHRoaXMgaXMgYSBzZXJ2aWNlIHN0YXJ0aW5nIGluIHRoZSBiZWdpbm5pbmcuXHJcbiAgICBwdWJsaWMgc3RhcnRUb0xpc3RlblNwaW5uZXIobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSKSB7XHJcbiAgICAgICAgLy8gU2V0IHVwIHRoZSBsaXN0ZW5lclxyXG4gICAgICAgIHRoaXMuX3N1YnIgPSB0aGlzLnVuZGVybHlpbmdTcGlubmVyLmdldFNwaW5uZXIobmFtZSkuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJTdGF0ZSA9IHguc2hvdztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcExpc3RlbmVyKG5hbWU6IHN0cmluZyA9IFBSSU1BUllfU1BJTk5FUikge1xyXG4gICAgICAgIHRoaXMuX3N1YnIgJiYgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19
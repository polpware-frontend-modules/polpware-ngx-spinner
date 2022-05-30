import { Injectable } from '@angular/core';
import { SpinnerServiceBase } from './spinner-service-base';
import * as i0 from "@angular/core";
import * as i1 from "ngx-spinner";
import * as i2 from "@polpware/ngx-logger";
const PRIMARY_SPINNER = 'primary';
/* Note that on purpose we do not turn this one into a singular service.
 * Therefore, we are able to create many such services for each component */
export class SpinnerServiceImpl extends SpinnerServiceBase {
    constructor(underlyingSpinner, loggerProvider) {
        super();
        this.underlyingSpinner = underlyingSpinner;
        this.logger = loggerProvider.logger('polpware_ngx_spinner');
    }
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    startToListenSpinner(name = PRIMARY_SPINNER) {
        // Set up the listener
        this._subr = this.underlyingSpinner.getSpinner(name).subscribe(x => {
            this.spinnerState = x.show;
        });
    }
    stopListener(name = PRIMARY_SPINNER) {
        this._subr && this._subr.unsubscribe();
    }
}
/** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(i0.ɵɵinject(i1.NgxSpinnerService), i0.ɵɵinject(i2.LoggerProviderImpl)); };
/** @nocollapse */ SpinnerServiceImpl.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: i1.NgxSpinnerService }, { type: i2.LoggerProviderImpl }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtc3Bpbm5lci9zcmMvbGliL3NwaW5uZXIvc3Bpbm5lci1zZXJ2aWNlLmltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUU1RCxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFFbEM7NEVBQzRFO0FBRzVFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxrQkFBa0I7SUFJdEQsWUFBK0IsaUJBQW9DLEVBQy9ELGNBQWtDO1FBQ2xDLEtBQUssRUFBRSxDQUFDO1FBRm1CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFJL0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHVGQUF1RjtJQUNoRixvQkFBb0IsQ0FBQyxPQUFlLGVBQWU7UUFDdEQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLFlBQVksQ0FBQyxPQUFlLGVBQWU7UUFDOUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNDLENBQUM7O3VHQXJCUSxrQkFBa0I7dUdBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dnZXJQcm92aWRlckltcGwgfSBmcm9tICdAcG9scHdhcmUvbmd4LWxvZ2dlcic7XHJcbmltcG9ydCB7IE5neFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3Bpbm5lclNlcnZpY2VCYXNlIH0gZnJvbSAnLi9zcGlubmVyLXNlcnZpY2UtYmFzZSc7XHJcblxyXG5jb25zdCBQUklNQVJZX1NQSU5ORVIgPSAncHJpbWFyeSc7XHJcblxyXG4vKiBOb3RlIHRoYXQgb24gcHVycG9zZSB3ZSBkbyBub3QgdHVybiB0aGlzIG9uZSBpbnRvIGEgc2luZ3VsYXIgc2VydmljZS4gXHJcbiAqIFRoZXJlZm9yZSwgd2UgYXJlIGFibGUgdG8gY3JlYXRlIG1hbnkgc3VjaCBzZXJ2aWNlcyBmb3IgZWFjaCBjb21wb25lbnQgKi9cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlSW1wbCBleHRlbmRzIFNwaW5uZXJTZXJ2aWNlQmFzZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3VicjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSB1bmRlcmx5aW5nU3Bpbm5lcjogTmd4U3Bpbm5lclNlcnZpY2UsXHJcbiAgICAgICAgbG9nZ2VyUHJvdmlkZXI6IExvZ2dlclByb3ZpZGVySW1wbCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyUHJvdmlkZXIubG9nZ2VyKCdwb2xwd2FyZV9uZ3hfc3Bpbm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyBub3QgbmVlZCB0byBzdG9wIGl0LCBhcyB0aGlzIGlzIGEgc2VydmljZSBzdGFydGluZyBpbiB0aGUgYmVnaW5uaW5nLlxyXG4gICAgcHVibGljIHN0YXJ0VG9MaXN0ZW5TcGlubmVyKG5hbWU6IHN0cmluZyA9IFBSSU1BUllfU1BJTk5FUikge1xyXG4gICAgICAgIC8vIFNldCB1cCB0aGUgbGlzdGVuZXJcclxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5nZXRTcGlubmVyKG5hbWUpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSB4LnNob3c7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BMaXN0ZW5lcihuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIpIHtcclxuICAgICAgICB0aGlzLl9zdWJyICYmIHRoaXMuX3N1YnIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerServiceBase } from './spinner-service-base';
import * as i0 from "@angular/core";
import * as i1 from "ngx-spinner";
const PRIMARY_SPINNER = 'primary';
/* Note that on purpose we do not turn this one into a singular service.
 * Therefore, we are able to create many such services for each component */
export class SpinnerServiceImpl extends SpinnerServiceBase {
    constructor(underlyingSpinner) {
        super();
        this.underlyingSpinner = underlyingSpinner;
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
/** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(i0.ɵɵinject(i1.NgxSpinnerService)); };
/** @nocollapse */ SpinnerServiceImpl.ɵprov = i0.ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: i1.NgxSpinnerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRTVELE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUVsQzs0RUFDNEU7QUFHNUUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGtCQUFrQjtJQUl0RCxZQUErQixpQkFBb0M7UUFFL0QsS0FBSyxFQUFFLENBQUM7UUFGbUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUduRSxDQUFDO0lBRUQsdUZBQXVGO0lBQ2hGLG9CQUFvQixDQUFDLE9BQWUsZUFBZTtRQUN0RCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sWUFBWSxDQUFDLE9BQWUsZUFBZTtRQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7dUdBbkJRLGtCQUFrQjs2RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3Bpbm5lclNlcnZpY2VCYXNlIH0gZnJvbSAnLi9zcGlubmVyLXNlcnZpY2UtYmFzZSc7XHJcblxyXG5jb25zdCBQUklNQVJZX1NQSU5ORVIgPSAncHJpbWFyeSc7XHJcblxyXG4vKiBOb3RlIHRoYXQgb24gcHVycG9zZSB3ZSBkbyBub3QgdHVybiB0aGlzIG9uZSBpbnRvIGEgc2luZ3VsYXIgc2VydmljZS4gXHJcbiAqIFRoZXJlZm9yZSwgd2UgYXJlIGFibGUgdG8gY3JlYXRlIG1hbnkgc3VjaCBzZXJ2aWNlcyBmb3IgZWFjaCBjb21wb25lbnQgKi9cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlSW1wbCBleHRlbmRzIFNwaW5uZXJTZXJ2aWNlQmFzZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3VicjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSB1bmRlcmx5aW5nU3Bpbm5lcjogTmd4U3Bpbm5lclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RlIHRoYXQgd2UgZG8gbm90IG5lZWQgdG8gc3RvcCBpdCwgYXMgdGhpcyBpcyBhIHNlcnZpY2Ugc3RhcnRpbmcgaW4gdGhlIGJlZ2lubmluZy5cclxuICAgIHB1YmxpYyBzdGFydFRvTGlzdGVuU3Bpbm5lcihuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIpIHtcclxuICAgICAgICAvLyBTZXQgdXAgdGhlIGxpc3RlbmVyXHJcbiAgICAgICAgdGhpcy5fc3ViciA9IHRoaXMudW5kZXJseWluZ1NwaW5uZXIuZ2V0U3Bpbm5lcihuYW1lKS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0geC5zaG93O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wTGlzdGVuZXIobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSKSB7XHJcbiAgICAgICAgdGhpcy5fc3ViciAmJiB0aGlzLl9zdWJyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=
import { Injectable } from '@angular/core';
import { NgxLoggerImpl } from '@polpware/ngx-logger';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerServiceBase } from './spinner-service-base';
import * as i0 from "@angular/core";
import * as i1 from "ngx-spinner";
import * as i2 from "@polpware/ngx-logger";
const PRIMARY_SPINNER = 'primary';
/* Note that on purpose we do not turn this one into a singular service.
 * Therefore, we are able to create many such services for each component */
export class SpinnerServiceImpl extends SpinnerServiceBase {
    constructor(underlyingSpinner, logger) {
        super();
        this.underlyingSpinner = underlyingSpinner;
        this.logger = logger;
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
/** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(i0.ɵɵinject(i1.NgxSpinnerService), i0.ɵɵinject(i2.NgxLoggerImpl)); };
/** @nocollapse */ SpinnerServiceImpl.ɵprov = i0.ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: i1.NgxSpinnerService }, { type: i2.NgxLoggerImpl }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFNUQsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDO0FBRWxDOzRFQUM0RTtBQUc1RSxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsa0JBQWtCO0lBSXRELFlBQStCLGlCQUFvQyxFQUM1QyxNQUFxQjtRQUV4QyxLQUFLLEVBQUUsQ0FBQztRQUhtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzVDLFdBQU0sR0FBTixNQUFNLENBQWU7SUFHNUMsQ0FBQztJQUVELHVGQUF1RjtJQUNoRixvQkFBb0IsQ0FBQyxPQUFlLGVBQWU7UUFDdEQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLFlBQVksQ0FBQyxPQUFlLGVBQWU7UUFDOUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNDLENBQUM7O3VHQXBCUSxrQkFBa0I7NkVBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hMb2dnZXJJbXBsIH0gZnJvbSAnQHBvbHB3YXJlL25neC1sb2dnZXInO1xyXG5pbXBvcnQgeyBOZ3hTcGlubmVyU2VydmljZSB9IGZyb20gJ25neC1zcGlubmVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlQmFzZSB9IGZyb20gJy4vc3Bpbm5lci1zZXJ2aWNlLWJhc2UnO1xyXG5cclxuY29uc3QgUFJJTUFSWV9TUElOTkVSID0gJ3ByaW1hcnknO1xyXG5cclxuLyogTm90ZSB0aGF0IG9uIHB1cnBvc2Ugd2UgZG8gbm90IHR1cm4gdGhpcyBvbmUgaW50byBhIHNpbmd1bGFyIHNlcnZpY2UuIFxyXG4gKiBUaGVyZWZvcmUsIHdlIGFyZSBhYmxlIHRvIGNyZWF0ZSBtYW55IHN1Y2ggc2VydmljZXMgZm9yIGVhY2ggY29tcG9uZW50ICovXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyU2VydmljZUltcGwgZXh0ZW5kcyBTcGlubmVyU2VydmljZUJhc2Uge1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgdW5kZXJseWluZ1NwaW5uZXI6IE5neFNwaW5uZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBsb2dnZXI6IE5neExvZ2dlckltcGwpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RlIHRoYXQgd2UgZG8gbm90IG5lZWQgdG8gc3RvcCBpdCwgYXMgdGhpcyBpcyBhIHNlcnZpY2Ugc3RhcnRpbmcgaW4gdGhlIGJlZ2lubmluZy5cclxuICAgIHB1YmxpYyBzdGFydFRvTGlzdGVuU3Bpbm5lcihuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIpIHtcclxuICAgICAgICAvLyBTZXQgdXAgdGhlIGxpc3RlbmVyXHJcbiAgICAgICAgdGhpcy5fc3ViciA9IHRoaXMudW5kZXJseWluZ1NwaW5uZXIuZ2V0U3Bpbm5lcihuYW1lKS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0geC5zaG93O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wTGlzdGVuZXIobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSKSB7XHJcbiAgICAgICAgdGhpcy5fc3ViciAmJiB0aGlzLl9zdWJyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=
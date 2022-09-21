import { Injectable } from '@angular/core';
import { SpinnerServiceBase } from './spinner-service-base';
import { NullSpinner } from './spinner.interface';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-logger";
/* Note that on purpose we do not turn this one into a singular service.
 * Therefore, we are able to create many such services for each component */
export class SpinnerPlaceholderService extends SpinnerServiceBase {
    constructor(loggerProvider) {
        super();
        this.underlyingSpinner = new NullSpinner();
        this.logger = loggerProvider.logger('polpware_ngx_spinner');
    }
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    startToListenSpinner(...args) {
    }
    stopListener(...args) {
    }
}
/** @nocollapse */ SpinnerPlaceholderService.ɵfac = function SpinnerPlaceholderService_Factory(t) { return new (t || SpinnerPlaceholderService)(i0.ɵɵinject(i1.LoggerProviderImpl)); };
/** @nocollapse */ SpinnerPlaceholderService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SpinnerPlaceholderService, factory: SpinnerPlaceholderService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpinnerPlaceholderService, [{
        type: Injectable
    }], function () { return [{ type: i1.LoggerProviderImpl }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1wbGFjZWhvbGRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvbmd4LXNwaW5uZXIvc3JjL2xpYi9zcGlubmVyL3NwaW5uZXItcGxhY2Vob2xkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRWxEOzRFQUM0RTtBQUc1RSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsa0JBQWtCO0lBRTdELFlBQVksY0FBa0M7UUFDMUMsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsdUZBQXVGO0lBQ2hGLG9CQUFvQixDQUFDLEdBQUcsSUFBVztJQUMxQyxDQUFDO0lBRU0sWUFBWSxDQUFDLEdBQUcsSUFBVztJQUNsQyxDQUFDOztxSEFkUSx5QkFBeUI7OEdBQXpCLHlCQUF5QixXQUF6Qix5QkFBeUI7dUZBQXpCLHlCQUF5QjtjQURyQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dnZXJQcm92aWRlckltcGwgfSBmcm9tICdAcG9scHdhcmUvbmd4LWxvZ2dlcic7XHJcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlQmFzZSB9IGZyb20gJy4vc3Bpbm5lci1zZXJ2aWNlLWJhc2UnO1xyXG5pbXBvcnQgeyBOdWxsU3Bpbm5lciB9IGZyb20gJy4vc3Bpbm5lci5pbnRlcmZhY2UnO1xyXG5cclxuLyogTm90ZSB0aGF0IG9uIHB1cnBvc2Ugd2UgZG8gbm90IHR1cm4gdGhpcyBvbmUgaW50byBhIHNpbmd1bGFyIHNlcnZpY2UuIFxyXG4gKiBUaGVyZWZvcmUsIHdlIGFyZSBhYmxlIHRvIGNyZWF0ZSBtYW55IHN1Y2ggc2VydmljZXMgZm9yIGVhY2ggY29tcG9uZW50ICovXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyUGxhY2Vob2xkZXJTZXJ2aWNlIGV4dGVuZHMgU3Bpbm5lclNlcnZpY2VCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXJQcm92aWRlcjogTG9nZ2VyUHJvdmlkZXJJbXBsKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy51bmRlcmx5aW5nU3Bpbm5lciA9IG5ldyBOdWxsU3Bpbm5lcigpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyUHJvdmlkZXIubG9nZ2VyKCdwb2xwd2FyZV9uZ3hfc3Bpbm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyBub3QgbmVlZCB0byBzdG9wIGl0LCBhcyB0aGlzIGlzIGEgc2VydmljZSBzdGFydGluZyBpbiB0aGUgYmVnaW5uaW5nLlxyXG4gICAgcHVibGljIHN0YXJ0VG9MaXN0ZW5TcGlubmVyKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BMaXN0ZW5lciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import * as i0 from "@angular/core";
import * as i1 from "ngx-spinner";
const PRIMARY_SPINNER = 'primary';
const DismissingDelayPeroid = 300;
const DefaultShowingDelayPeroid = 500;
export class SpinnerServiceImpl {
    constructor(_underlyingSpinner) {
        this._underlyingSpinner = _underlyingSpinner;
        this._referenceCounter = 0;
        this._showingTimer = 0;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = 0;
        this._spinnerState = false;
        this.startToListenSpinner();
    }
    // Note that we do not need to stop it, as this is a service starting in the beginning.
    startToListenSpinner(name = PRIMARY_SPINNER) {
        // Set up the listener
        this._underlyingSpinner.getSpinner(PRIMARY_SPINNER).subscribe(x => {
            this._spinnerState = x.show;
        });
    }
    setDelay(seconds) {
        this._showingDelay = seconds * 1000;
    }
    // Override
    show(title = 'Loading ...', name = PRIMARY_SPINNER) {
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
        this._showingTimer = setTimeout(() => {
            console.log('show --- run');
            if (this._showingTimer) {
                // Clean up the timer
                this._showingTimer = 0;
                this._underlyingSpinner.show(name);
            }
        }, this._showingDelay);
    }
    hide(name = PRIMARY_SPINNER) {
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
            this._dismissingTimer = setTimeout(() => {
                console.log('hide -run (1)');
                if (this._dismissingTimer) {
                    console.log('live');
                    // Clean up the timer
                    this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    this._underlyingSpinner.hide();
                }
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this._spinnerState) {
            console.log('hide --- schedule');
            this._dismissingTimer = setTimeout(() => {
                console.log('hide -run (2)');
                if (this._dismissingTimer) {
                    console.log('live');
                    this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    this._underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
        }
    }
}
/** @nocollapse */ SpinnerServiceImpl.ɵfac = function SpinnerServiceImpl_Factory(t) { return new (t || SpinnerServiceImpl)(i0.ɵɵinject(i1.NgxSpinnerService)); };
/** @nocollapse */ SpinnerServiceImpl.ɵprov = i0.ɵɵdefineInjectable({ token: SpinnerServiceImpl, factory: SpinnerServiceImpl.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SpinnerServiceImpl, [{
        type: Injectable
    }], function () { return [{ type: i1.NgxSpinnerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLmltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBTWhELE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUVsQyxNQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztBQUNsQyxNQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztBQUd0QyxNQUFNLE9BQU8sa0JBQWtCO0lBUzNCLFlBQTZCLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBRjFELHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUcxQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHVGQUF1RjtJQUNoRixvQkFBb0IsQ0FBQyxPQUFlLGVBQWU7UUFDdEQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxRQUFRLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELFdBQVc7SUFDSixJQUFJLENBQUMsUUFBZ0IsYUFBYSxFQUFFLElBQUksR0FBRyxlQUFlO1FBRTdELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixtQ0FBbUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUUvQyxnREFBZ0Q7WUFDaEQsNERBQTREO1lBQzVELHNDQUFzQztZQUN0QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2dCQUV0RCxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7YUFDN0I7WUFFRCxPQUFPO1NBQ1Y7UUFFRCx1REFBdUQ7UUFDdkQsdUNBQXVDO1FBQ3ZDLDRDQUE0QztRQUM1QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7WUFFMUQsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFFRCw0REFBNEQ7UUFDNUQsc0JBQXNCO1FBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFFOUMsT0FBTztTQUNWO1FBRUQsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTVCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDcEIscUJBQXFCO2dCQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QztRQUVMLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFM0IsQ0FBQztJQUVNLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZTtRQUU5QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7WUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1lBRS9ELE9BQU87U0FDVjtRQUVELHlDQUF5QztRQUN6QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1lBRWxELFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFFdkIsT0FBTztZQUNQLE9BQU87U0FDVjtRQUVELDRDQUE0QztRQUM1QywrQkFBK0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBRTFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFFN0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLHFCQUFxQjtvQkFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztvQkFDMUIsdUJBQXVCO29CQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2xDO1lBQ0wsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7WUFFMUIsT0FBTztTQUNWO1FBRUQsa0NBQWtDO1FBRWxDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBRXBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBRTdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUVwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO29CQUMxQix1QkFBdUI7b0JBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RDO1lBQ0wsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDOzt1R0E3SlEsa0JBQWtCOzZFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5neFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIElTcGlubmVyU2VydmljZVxyXG59IGZyb20gJy4vc3Bpbm5lci5pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgUFJJTUFSWV9TUElOTkVSID0gJ3ByaW1hcnknO1xyXG5cclxuY29uc3QgRGlzbWlzc2luZ0RlbGF5UGVyb2lkID0gMzAwO1xyXG5jb25zdCBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkID0gNTAwO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lclNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVNwaW5uZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9zaG93aW5nVGltZXI6IGFueTtcclxuICAgIHByaXZhdGUgX3Nob3dpbmdEZWxheTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGlzbWlzc2luZ1RpbWVyOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Bpbm5lclN0YXRlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfcmVmZXJlbmNlQ291bnRlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdW5kZXJseWluZ1NwaW5uZXI6IE5neFNwaW5uZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcclxuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkO1xyXG4gICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuX3NwaW5uZXJTdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0VG9MaXN0ZW5TcGlubmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm90ZSB0aGF0IHdlIGRvIG5vdCBuZWVkIHRvIHN0b3AgaXQsIGFzIHRoaXMgaXMgYSBzZXJ2aWNlIHN0YXJ0aW5nIGluIHRoZSBiZWdpbm5pbmcuXHJcbiAgICBwdWJsaWMgc3RhcnRUb0xpc3RlblNwaW5uZXIobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSKSB7XHJcbiAgICAgICAgLy8gU2V0IHVwIHRoZSBsaXN0ZW5lclxyXG4gICAgICAgIHRoaXMuX3VuZGVybHlpbmdTcGlubmVyLmdldFNwaW5uZXIoUFJJTUFSWV9TUElOTkVSKS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwaW5uZXJTdGF0ZSA9IHguc2hvdztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGVsYXkoc2Vjb25kczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvd2luZ0RlbGF5ID0gc2Vjb25kcyAqIDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3ZlcnJpZGVcclxuICAgIHB1YmxpYyBzaG93KHRpdGxlOiBzdHJpbmcgPSAnTG9hZGluZyAuLi4nLCBuYW1lID0gUFJJTUFSWV9TUElOTkVSKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBc2tlZCB0byBzaG93IHNwaW5uZXIuLi4nKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQ291bnRlcisrO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmUgYWxyZWFkeSwgdXNlIGl0LlxyXG4gICAgICAgIGlmICh0aGlzLl9zcGlubmVyU3RhdGUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93IC0tLSBvbmUgaGFzIGJlZW4gc2NoZWR1bGVkJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBIb3dldmVyLCB3ZSBuZWVkIHRvIGNhbmNlbCB0aGUgZGlzbWlzcyB0aW1lci5cclxuICAgICAgICAgICAgLy8gSXQgaXMgc2FmZSwgYmVjYXVzZSB3ZSBleHBlY3QgdGhhdCBcImhpZGVcIiBpcyB0byBiZSBjYWxsZWRcclxuICAgICAgICAgICAgLy8gc29tZXRpbWUgbGF0ZXIgZnJvbSB0aGlzIG1vbWVudCBvbi5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93IC0tLSBjbGVhbmluZyBvdXQgZGlzbWlzbWluZyB0aW1lcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxyXG4gICAgICAgIC8vIHdlIGp1c3QgbmVlZCB0byBjbGVhciB0aGUgc2NoZWR1bGVyLlxyXG4gICAgICAgIC8vIFBsZWFzZSByZWZlciB0byB0aGUgYWJvdmUgZm9yIHRoZSByZWFzb24uXHJcbiAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgLS0tIGNsZWFuaW5nIG91dCBkaXNtaXNtaW5nIHRpbWVyICgyKScpO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIHNob3cgdGhlIHNwaW5uZXIsIHdlIGp1c3RcclxuICAgICAgICAvLyB1c2UgdGhpcyBzY2hlZHVsZS4gXHJcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3cgLS0tIGFscmVhZHkgc2NoZWR1bGVkIG9uZScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBzY2hkdWxlIHRvIHNob3cgdGhlIHNwaW5uZXIuXHJcbiAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdyAtLS0gcnVuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91bmRlcmx5aW5nU3Bpbm5lci5zaG93KG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIHRoaXMuX3Nob3dpbmdEZWxheSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlKG5hbWUgPSBQUklNQVJZX1NQSU5ORVIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQ291bnRlci0tO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcmVmZXJlbmNlQ291bnRlciA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWRlIC0tLSByZWZlcmVuY2UgY291bnRlciBzdGlsbCBncmVhdGVyIHRoYW4gMCcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIHNwaW5uZXIgaGFzIG5vdCBiZWVuIHNjaGVkdWxlZC5cclxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZSAtLS0gcmVtb3ZlIHRoZSBzaG93IHNjaGVkdWxlcicpO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dpbmdUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLyBEb25lXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGhhdmUgc2NoZWR1bGVkIHRvIGRpc21pc3MgdGhlIHNwaW5uZXIsXHJcbiAgICAgICAgLy8gd2UgYmV0dGVyIHdlIHNjaGVkdWxlIGFnYWluLlxyXG4gICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWRlIC0tLSBhbHJlYWR5IHNoY2VkdWxlZCcpO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWRlIC1ydW4gKDEpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VuZGVybHlpbmdTcGlubmVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgRGlzbWlzc2luZ0RlbGF5UGVyb2lkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNjaGVkdWxlIHRvIGRpc21pc3MgdGhlIHNwaW5uZXJcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NwaW5uZXJTdGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgLS0tIHNjaGVkdWxlJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZSAtcnVuICgyKScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc21pc3MgdGhlIHNwaW5uZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW5kZXJseWluZ1NwaW5uZXIuaGlkZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgRGlzbWlzc2luZ0RlbGF5UGVyb2lkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
var PRIMARY_SPINNER = 'primary';
var DismissingDelayPeroid = 300;
var DefaultShowingDelayPeroid = 500;
var SpinnerServiceBase = /** @class */ (function () {
    function SpinnerServiceBase() {
        this._referenceCounter = 0;
        this._showingTimer = 0;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = 0;
        this.spinnerState = false;
    }
    SpinnerServiceBase.prototype.setDelay = function (seconds) {
        this._showingDelay = seconds * 1000;
    };
    // Override
    SpinnerServiceBase.prototype.show = function (title, name) {
        var _this = this;
        if (title === void 0) { title = 'Loading ...'; }
        if (name === void 0) { name = PRIMARY_SPINNER; }
        this._referenceCounter++;
        // If there is one already, use it.
        if (this.spinnerState) {
            // However, we need to cancel the dismiss timer.
            // It is safe, because we expect that "hide" is to be called
            // sometime later from this moment on.
            if (this._dismissingTimer) {
                clearTimeout(this._dismissingTimer);
                this._dismissingTimer = 0;
            }
            return;
        }
        // If we have already scheduled to dismiss the spinner,
        // we just need to clear the scheduler.
        // Please refer to the above for the reason.
        if (this._dismissingTimer) {
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = 0;
        }
        // If we have already scheduled to show the spinner, we just
        // use this schedule. 
        if (this._showingTimer) {
            return;
        }
        // Otherwise, schdule to show the spinner.
        this._showingTimer = setTimeout(function () {
            if (_this._showingTimer) {
                // Clean up the timer
                _this._showingTimer = 0;
                _this.underlyingSpinner.show(name);
            }
        }, this._showingDelay);
    };
    SpinnerServiceBase.prototype.hide = function (name) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        this._referenceCounter--;
        if (this._referenceCounter > 0) {
            return;
        }
        // If the spinner has not been scheduled.
        if (this._showingTimer) {
            clearTimeout(this._showingTimer);
            this._showingTimer = 0;
            // Done
            return;
        }
        // If have scheduled to dismiss the spinner,
        // we better we schedule again.
        if (this._dismissingTimer) {
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = setTimeout(function () {
                if (_this._dismissingTimer) {
                    // Clean up the timer
                    _this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    _this.underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this.spinnerState) {
            this._dismissingTimer = setTimeout(function () {
                if (_this._dismissingTimer) {
                    _this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    _this.underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
        }
    };
    return SpinnerServiceBase;
}());
export { SpinnerServiceBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxJQUFNLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFFbEMsSUFBTSxxQkFBcUIsR0FBRyxHQUFHLENBQUM7QUFDbEMsSUFBTSx5QkFBeUIsR0FBRyxHQUFHLENBQUM7QUFFdEM7SUFXSTtRQUZRLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUcxQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVNLHFDQUFRLEdBQWYsVUFBZ0IsT0FBZTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELFdBQVc7SUFDSixpQ0FBSSxHQUFYLFVBQVksS0FBNkIsRUFBRSxJQUFzQjtRQUFqRSxpQkE4Q0M7UUE5Q1csc0JBQUEsRUFBQSxxQkFBNkI7UUFBRSxxQkFBQSxFQUFBLHNCQUFzQjtRQUU3RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixtQ0FBbUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRW5CLGdEQUFnRDtZQUNoRCw0REFBNEQ7WUFDNUQsc0NBQXNDO1lBQ3RDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUV2QixZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7YUFDN0I7WUFFRCxPQUFPO1NBQ1Y7UUFFRCx1REFBdUQ7UUFDdkQsdUNBQXVDO1FBQ3ZDLDRDQUE0QztRQUM1QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUV2QixZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELDREQUE0RDtRQUM1RCxzQkFBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBRXBCLE9BQU87U0FDVjtRQUVELDBDQUEwQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztZQUU1QixJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BCLHFCQUFxQjtnQkFDckIsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckM7UUFFTCxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTNCLENBQUM7SUFFTSxpQ0FBSSxHQUFYLFVBQVksSUFBc0I7UUFBbEMsaUJBbURDO1FBbkRXLHFCQUFBLEVBQUEsc0JBQXNCO1FBRTlCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBRTtZQUU1QixPQUFPO1NBQ1Y7UUFFRCx5Q0FBeUM7UUFDekMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBRXBCLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFFdkIsT0FBTztZQUNQLE9BQU87U0FDVjtRQUVELDRDQUE0QztRQUM1QywrQkFBK0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFFdkIsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7Z0JBRS9CLElBQUksS0FBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN2QixxQkFBcUI7b0JBQ3JCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7b0JBQzFCLHVCQUF1QjtvQkFDdkIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDckM7WUFDTCxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUUxQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFFbEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRW5CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7Z0JBRS9CLElBQUksS0FBSSxDQUFDLGdCQUFnQixFQUFFO29CQUV2QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO29CQUMxQix1QkFBdUI7b0JBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JDO1lBQ0wsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBNUhELElBNEhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLmludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVuZGVybHlpbmdTcGlubmVyIHtcbiAgICBzaG93KG5hbWU/OiBhbnkpO1xuICAgIGhpZGUobmFtZT86IGFueSk7XG59XG5cbmNvbnN0IFBSSU1BUllfU1BJTk5FUiA9ICdwcmltYXJ5JztcblxuY29uc3QgRGlzbWlzc2luZ0RlbGF5UGVyb2lkID0gMzAwO1xuY29uc3QgRGVmYXVsdFNob3dpbmdEZWxheVBlcm9pZCA9IDUwMDtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlQmFzZSBpbXBsZW1lbnRzIElTcGlubmVyU2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgdW5kZXJseWluZ1NwaW5uZXI6IElVbmRlcmx5aW5nU3Bpbm5lcjtcblxuICAgIHByaXZhdGUgX3Nob3dpbmdUaW1lcjogYW55O1xuICAgIHByaXZhdGUgX3Nob3dpbmdEZWxheTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2Rpc21pc3NpbmdUaW1lcjogYW55O1xuXG4gICAgcHJvdGVjdGVkIHNwaW5uZXJTdGF0ZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9yZWZlcmVuY2VDb3VudGVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkO1xuICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuXG4gICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlbGF5KHNlY29uZHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBzZWNvbmRzICogMTAwMDtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZVxuICAgIHB1YmxpYyBzaG93KHRpdGxlOiBzdHJpbmcgPSAnTG9hZGluZyAuLi4nLCBuYW1lID0gUFJJTUFSWV9TUElOTkVSKSB7XG5cbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQ291bnRlcisrO1xuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZSBhbHJlYWR5LCB1c2UgaXQuXG4gICAgICAgIGlmICh0aGlzLnNwaW5uZXJTdGF0ZSkge1xuXG4gICAgICAgICAgICAvLyBIb3dldmVyLCB3ZSBuZWVkIHRvIGNhbmNlbCB0aGUgZGlzbWlzcyB0aW1lci5cbiAgICAgICAgICAgIC8vIEl0IGlzIHNhZmUsIGJlY2F1c2Ugd2UgZXhwZWN0IHRoYXQgXCJoaWRlXCIgaXMgdG8gYmUgY2FsbGVkXG4gICAgICAgICAgICAvLyBzb21ldGltZSBsYXRlciBmcm9tIHRoaXMgbW9tZW50IG9uLlxuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxuICAgICAgICAvLyB3ZSBqdXN0IG5lZWQgdG8gY2xlYXIgdGhlIHNjaGVkdWxlci5cbiAgICAgICAgLy8gUGxlYXNlIHJlZmVyIHRvIHRoZSBhYm92ZSBmb3IgdGhlIHJlYXNvbi5cbiAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIHNob3cgdGhlIHNwaW5uZXIsIHdlIGp1c3RcbiAgICAgICAgLy8gdXNlIHRoaXMgc2NoZWR1bGUuIFxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2NoZHVsZSB0byBzaG93IHRoZSBzcGlubmVyLlxuICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xuICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5zaG93KG5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIHRoaXMuX3Nob3dpbmdEZWxheSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZShuYW1lID0gUFJJTUFSWV9TUElOTkVSKSB7XG5cbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQ291bnRlci0tO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZWZlcmVuY2VDb3VudGVyID4gMCkge1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgc3Bpbm5lciBoYXMgbm90IGJlZW4gc2NoZWR1bGVkLlxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93aW5nVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcblxuICAgICAgICAgICAgLy8gRG9uZVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaGF2ZSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcbiAgICAgICAgLy8gd2UgYmV0dGVyIHdlIHNjaGVkdWxlIGFnYWluLlxuICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgRGlzbWlzc2luZ0RlbGF5UGVyb2lkKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2NoZWR1bGUgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lclxuXG4gICAgICAgIGlmICh0aGlzLnNwaW5uZXJTdGF0ZSkge1xuXG4gICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgRGlzbWlzc2luZ0RlbGF5UGVyb2lkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19
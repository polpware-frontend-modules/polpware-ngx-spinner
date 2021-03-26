const PRIMARY_SPINNER = 'primary';
const DismissingDelayPeroid = 300;
const DefaultShowingDelayPeroid = 500;
export class SpinnerServiceBase {
    constructor() {
        this._referenceCounter = 0;
        this._showingTimer = 0;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingTimer = 0;
        this.spinnerState = false;
    }
    setDelay(seconds) {
        this._showingDelay = seconds * 1000;
    }
    // Override
    show(title = 'Loading ...', name = PRIMARY_SPINNER) {
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
        this._showingTimer = setTimeout(() => {
            if (this._showingTimer) {
                // Clean up the timer
                this._showingTimer = 0;
                this.underlyingSpinner.show(name);
            }
        }, this._showingDelay);
    }
    hide(name = PRIMARY_SPINNER) {
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
            this._dismissingTimer = setTimeout(() => {
                if (this._dismissingTimer) {
                    // Clean up the timer
                    this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    this.underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
            return;
        }
        // Schedule to dismiss the spinner
        if (this.spinnerState) {
            this._dismissingTimer = setTimeout(() => {
                if (this._dismissingTimer) {
                    this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    this.underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFFbEMsTUFBTSxxQkFBcUIsR0FBRyxHQUFHLENBQUM7QUFDbEMsTUFBTSx5QkFBeUIsR0FBRyxHQUFHLENBQUM7QUFFdEMsTUFBTSxPQUFnQixrQkFBa0I7SUFXcEM7UUFGUSxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFHMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyx5QkFBeUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSxRQUFRLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELFdBQVc7SUFDSixJQUFJLENBQUMsUUFBZ0IsYUFBYSxFQUFFLElBQUksR0FBRyxlQUFlO1FBRTdELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLG1DQUFtQztRQUNuQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFFbkIsZ0RBQWdEO1lBQ2hELDREQUE0RDtZQUM1RCxzQ0FBc0M7WUFDdEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBRXZCLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzthQUM3QjtZQUVELE9BQU87U0FDVjtRQUVELHVEQUF1RDtRQUN2RCx1Q0FBdUM7UUFDdkMsNENBQTRDO1FBQzVDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBRXZCLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsNERBQTREO1FBQzVELHNCQUFzQjtRQUN0QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFFcEIsT0FBTztTQUNWO1FBRUQsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUVqQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BCLHFCQUFxQjtnQkFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckM7UUFFTCxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTNCLENBQUM7SUFFTSxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWU7UUFFOUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO1lBRTVCLE9BQU87U0FDVjtRQUVELHlDQUF5QztRQUN6QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFFcEIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUV2QixPQUFPO1lBQ1AsT0FBTztTQUNWO1FBRUQsNENBQTRDO1FBQzVDLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUV2QixZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBRXBDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN2QixxQkFBcUI7b0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7b0JBQzFCLHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDckM7WUFDTCxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUUxQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFFbEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRW5CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUVwQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFFdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztvQkFDMUIsdUJBQXVCO29CQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQztZQUNMLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLmludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVuZGVybHlpbmdTcGlubmVyIHtcbiAgICBzaG93KG5hbWU/OiBhbnkpO1xuICAgIGhpZGUobmFtZT86IGFueSk7XG59XG5cbmNvbnN0IFBSSU1BUllfU1BJTk5FUiA9ICdwcmltYXJ5JztcblxuY29uc3QgRGlzbWlzc2luZ0RlbGF5UGVyb2lkID0gMzAwO1xuY29uc3QgRGVmYXVsdFNob3dpbmdEZWxheVBlcm9pZCA9IDUwMDtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlQmFzZSBpbXBsZW1lbnRzIElTcGlubmVyU2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgdW5kZXJseWluZ1NwaW5uZXI6IElVbmRlcmx5aW5nU3Bpbm5lcjtcblxuICAgIHByaXZhdGUgX3Nob3dpbmdUaW1lcjogYW55O1xuICAgIHByaXZhdGUgX3Nob3dpbmdEZWxheTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2Rpc21pc3NpbmdUaW1lcjogYW55O1xuXG4gICAgcHJvdGVjdGVkIHNwaW5uZXJTdGF0ZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9yZWZlcmVuY2VDb3VudGVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkO1xuICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuXG4gICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlbGF5KHNlY29uZHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBzZWNvbmRzICogMTAwMDtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZVxuICAgIHB1YmxpYyBzaG93KHRpdGxlOiBzdHJpbmcgPSAnTG9hZGluZyAuLi4nLCBuYW1lID0gUFJJTUFSWV9TUElOTkVSKSB7XG5cbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQ291bnRlcisrO1xuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZSBhbHJlYWR5LCB1c2UgaXQuXG4gICAgICAgIGlmICh0aGlzLnNwaW5uZXJTdGF0ZSkge1xuXG4gICAgICAgICAgICAvLyBIb3dldmVyLCB3ZSBuZWVkIHRvIGNhbmNlbCB0aGUgZGlzbWlzcyB0aW1lci5cbiAgICAgICAgICAgIC8vIEl0IGlzIHNhZmUsIGJlY2F1c2Ugd2UgZXhwZWN0IHRoYXQgXCJoaWRlXCIgaXMgdG8gYmUgY2FsbGVkXG4gICAgICAgICAgICAvLyBzb21ldGltZSBsYXRlciBmcm9tIHRoaXMgbW9tZW50IG9uLlxuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxuICAgICAgICAvLyB3ZSBqdXN0IG5lZWQgdG8gY2xlYXIgdGhlIHNjaGVkdWxlci5cbiAgICAgICAgLy8gUGxlYXNlIHJlZmVyIHRvIHRoZSBhYm92ZSBmb3IgdGhlIHJlYXNvbi5cbiAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIHNob3cgdGhlIHNwaW5uZXIsIHdlIGp1c3RcbiAgICAgICAgLy8gdXNlIHRoaXMgc2NoZWR1bGUuIFxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2NoZHVsZSB0byBzaG93IHRoZSBzcGlubmVyLlxuICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xuICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5zaG93KG5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIHRoaXMuX3Nob3dpbmdEZWxheSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZShuYW1lID0gUFJJTUFSWV9TUElOTkVSKSB7XG5cbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQ291bnRlci0tO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZWZlcmVuY2VDb3VudGVyID4gMCkge1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgc3Bpbm5lciBoYXMgbm90IGJlZW4gc2NoZWR1bGVkLlxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93aW5nVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcblxuICAgICAgICAgICAgLy8gRG9uZVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaGF2ZSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcbiAgICAgICAgLy8gd2UgYmV0dGVyIHdlIHNjaGVkdWxlIGFnYWluLlxuICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgRGlzbWlzc2luZ0RlbGF5UGVyb2lkKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2NoZWR1bGUgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lclxuXG4gICAgICAgIGlmICh0aGlzLnNwaW5uZXJTdGF0ZSkge1xuXG4gICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgRGlzbWlzc2luZ0RlbGF5UGVyb2lkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19
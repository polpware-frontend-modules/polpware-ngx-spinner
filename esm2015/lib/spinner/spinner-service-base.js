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
        this.logger.debug('Spinner requested to show');
        this._referenceCounter++;
        this.logger.debug('Reference counter in show:' + this._referenceCounter);
        // If there is one already, use it.
        if (this.spinnerState) {
            this.logger.debug('Existing spinner used');
            // However, we need to cancel the dismiss timer.
            // It is safe, because we expect that "hide" is to be called
            // sometime later from this moment on.
            if (this._dismissingTimer) {
                this.logger.debug('Dismissing timer cleaned 1');
                clearTimeout(this._dismissingTimer);
                this._dismissingTimer = 0;
            }
            return;
        }
        // If we have already scheduled to dismiss the spinner,
        // we just need to clear the scheduler.
        // Please refer to the above for the reason.
        if (this._dismissingTimer) {
            this.logger.debug('Dismissing timer cleaned 2');
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = 0;
        }
        // If we have already scheduled to show the spinner, we just
        // use this schedule. 
        if (this._showingTimer) {
            this.logger.debug('Already scheduled to show');
            return;
        }
        this.logger.debug('Schedule for show');
        // Otherwise, schdule to show the spinner.
        this._showingTimer = setTimeout(() => {
            if (this._showingTimer) {
                // Clean up the timer
                this._showingTimer = 0;
                this.underlyingSpinner.show(name);
                this.spinnerState = true;
            }
        }, this._showingDelay);
    }
    hide(name = PRIMARY_SPINNER) {
        this.logger.debug('Spinner requested to hide');
        this._referenceCounter--;
        this.logger.debug('Reference counter in hide:' + this._referenceCounter);
        if (this._referenceCounter > 0) {
            return;
        }
        // If the spinner has not been scheduled.
        if (this._showingTimer) {
            this.logger.debug('Showed timer cleaned');
            clearTimeout(this._showingTimer);
            this._showingTimer = 0;
            // Done
            return;
        }
        // If have scheduled to dismiss the spinner,
        // we better we schedule again.
        if (this._dismissingTimer) {
            this.logger.debug('Reschedule for dismissing');
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
            this.logger.debug('Schedule for dismissing');
            this._dismissingTimer = setTimeout(() => {
                if (this._dismissingTimer) {
                    this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    this.underlyingSpinner.hide(name);
                    this.spinnerState = false;
                }
            }, DismissingDelayPeroid);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFFbEMsTUFBTSxxQkFBcUIsR0FBRyxHQUFHLENBQUM7QUFDbEMsTUFBTSx5QkFBeUIsR0FBRyxHQUFHLENBQUM7QUFFdEMsTUFBTSxPQUFnQixrQkFBa0I7SUFZcEM7UUFGUSxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFHMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyx5QkFBeUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSxRQUFRLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELFdBQVc7SUFDSixJQUFJLENBQUMsUUFBZ0IsYUFBYSxFQUFFLElBQUksR0FBRyxlQUFlO1FBRTdELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFekUsbUNBQW1DO1FBQ25DLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUVuQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBRTNDLGdEQUFnRDtZQUNoRCw0REFBNEQ7WUFDNUQsc0NB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QyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUU3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFFcEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBRXZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7b0JBQzFCLHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7aUJBQzdCO1lBQ0wsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ3hMb2dnZXJJbXBsIH0gZnJvbSAnQHBvbHB3YXJlL25neC1sb2dnZXInO1xuaW1wb3J0IHsgSVNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLmludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVuZGVybHlpbmdTcGlubmVyIHtcbiAgICBzaG93KG5hbWU/OiBhbnkpO1xuICAgIGhpZGUobmFtZT86IGFueSk7XG59XG5cbmNvbnN0IFBSSU1BUllfU1BJTk5FUiA9ICdwcmltYXJ5JztcblxuY29uc3QgRGlzbWlzc2luZ0RlbGF5UGVyb2lkID0gMzAwO1xuY29uc3QgRGVmYXVsdFNob3dpbmdEZWxheVBlcm9pZCA9IDUwMDtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlQmFzZSBpbXBsZW1lbnRzIElTcGlubmVyU2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgdW5kZXJseWluZ1NwaW5uZXI6IElVbmRlcmx5aW5nU3Bpbm5lcjtcbiAgICBwcm90ZWN0ZWQgbG9nZ2VyOiBOZ3hMb2dnZXJJbXBsO1xuXG4gICAgcHJpdmF0ZSBfc2hvd2luZ1RpbWVyOiBhbnk7XG4gICAgcHJpdmF0ZSBfc2hvd2luZ0RlbGF5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZGlzbWlzc2luZ1RpbWVyOiBhbnk7XG5cbiAgICBwcm90ZWN0ZWQgc3Bpbm5lclN0YXRlOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3JlZmVyZW5jZUNvdW50ZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IDA7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdEZWxheSA9IERlZmF1bHRTaG93aW5nRGVsYXlQZXJvaWQ7XG4gICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG5cbiAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGVsYXkoc2Vjb25kczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdEZWxheSA9IHNlY29uZHMgKiAxMDAwO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlXG4gICAgcHVibGljIHNob3codGl0bGU6IHN0cmluZyA9ICdMb2FkaW5nIC4uLicsIG5hbWUgPSBQUklNQVJZX1NQSU5ORVIpIHtcblxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU3Bpbm5lciByZXF1ZXN0ZWQgdG8gc2hvdycpO1xuXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUNvdW50ZXIrKztcblxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVmZXJlbmNlIGNvdW50ZXIgaW4gc2hvdzonICsgdGhpcy5fcmVmZXJlbmNlQ291bnRlcik7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25lIGFscmVhZHksIHVzZSBpdC5cbiAgICAgICAgaWYgKHRoaXMuc3Bpbm5lclN0YXRlKSB7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdFeGlzdGluZyBzcGlubmVyIHVzZWQnKTtcblxuICAgICAgICAgICAgLy8gSG93ZXZlciwgd2UgbmVlZCB0byBjYW5jZWwgdGhlIGRpc21pc3MgdGltZXIuXG4gICAgICAgICAgICAvLyBJdCBpcyBzYWZlLCBiZWNhdXNlIHdlIGV4cGVjdCB0aGF0IFwiaGlkZVwiIGlzIHRvIGJlIGNhbGxlZFxuICAgICAgICAgICAgLy8gc29tZXRpbWUgbGF0ZXIgZnJvbSB0aGlzIG1vbWVudCBvbi5cbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdEaXNtaXNzaW5nIHRpbWVyIGNsZWFuZWQgMScpO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxuICAgICAgICAvLyB3ZSBqdXN0IG5lZWQgdG8gY2xlYXIgdGhlIHNjaGVkdWxlci5cbiAgICAgICAgLy8gUGxlYXNlIHJlZmVyIHRvIHRoZSBhYm92ZSBmb3IgdGhlIHJlYXNvbi5cbiAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnRGlzbWlzc2luZyB0aW1lciBjbGVhbmVkIDInKTtcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IHNjaGVkdWxlZCB0byBzaG93IHRoZSBzcGlubmVyLCB3ZSBqdXN0XG4gICAgICAgIC8vIHVzZSB0aGlzIHNjaGVkdWxlLiBcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnQWxyZWFkeSBzY2hlZHVsZWQgdG8gc2hvdycpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU2NoZWR1bGUgZm9yIHNob3cnKTtcblxuICAgICAgICAvLyBPdGhlcndpc2UsIHNjaGR1bGUgdG8gc2hvdyB0aGUgc3Bpbm5lci5cbiAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMudW5kZXJseWluZ1NwaW5uZXIuc2hvdyhuYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5uZXJTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgdGhpcy5fc2hvd2luZ0RlbGF5KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKG5hbWUgPSBQUklNQVJZX1NQSU5ORVIpIHtcblxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU3Bpbm5lciByZXF1ZXN0ZWQgdG8gaGlkZScpO1xuXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUNvdW50ZXItLTtcblxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVmZXJlbmNlIGNvdW50ZXIgaW4gaGlkZTonICsgdGhpcy5fcmVmZXJlbmNlQ291bnRlcik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUNvdW50ZXIgPiAwKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBzcGlubmVyIGhhcyBub3QgYmVlbiBzY2hlZHVsZWQuXG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcblxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1Nob3dlZCB0aW1lciBjbGVhbmVkJyk7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93aW5nVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcblxuICAgICAgICAgICAgLy8gRG9uZVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaGF2ZSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcbiAgICAgICAgLy8gd2UgYmV0dGVyIHdlIHNjaGVkdWxlIGFnYWluLlxuICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZXNjaGVkdWxlIGZvciBkaXNtaXNzaW5nJyk7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgRGlzbWlzc2luZ0RlbGF5UGVyb2lkKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2NoZWR1bGUgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lclxuXG4gICAgICAgIGlmICh0aGlzLnNwaW5uZXJTdGF0ZSkge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU2NoZWR1bGUgZm9yIGRpc21pc3NpbmcnKTtcblxuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5oaWRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5uZXJTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==
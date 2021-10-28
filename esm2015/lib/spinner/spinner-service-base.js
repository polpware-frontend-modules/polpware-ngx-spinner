import { __awaiter } from "tslib";
export const PRIMARY_SPINNER = 'primary';
const DismissingDelayPeroid = 300;
const DefaultShowingDelayPeroid = 500;
export class SpinnerServiceBase {
    constructor() {
        this._referenceCounter = 0;
        this._showingTimer = 0;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingDelay = DismissingDelayPeroid;
        this._dismissingTimer = 0;
        this.spinnerState = false;
    }
    setDelay(seconds) {
        this._showingDelay = seconds * 1000;
    }
    setDismissDelay(seconds) {
        this._dismissingDelay = seconds * 1000;
    }
    // Override
    show(...args) {
        const isStopped = this.preShow();
        if (isStopped)
            return;
        this.logger.debug('Schedule for show');
        // Otherwise, schdule to show the spinner.
        if (this.underlyingSpinner.show) {
            this._showingTimer = setTimeout(() => {
                if (this._showingTimer) {
                    // Clean up the timer
                    this._showingTimer = 0;
                    this.underlyingSpinner.show(...args);
                    this.spinnerState = true;
                }
            }, this._showingDelay);
        }
        else {
            this._showingTimer = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                if (this._showingTimer) {
                    // Clean up the timer
                    this._showingTimer = 0;
                    yield this.underlyingSpinner.showAsync(...args);
                    this.spinnerState = true;
                }
            }), this._showingDelay);
        }
    }
    hide(...args) {
        const isStopped = this.preHide();
        if (isStopped) {
            return;
        }
        if (this.underlyingSpinner.hide) {
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
                        this.underlyingSpinner.hide(...args);
                    }
                }, this._dismissingDelay);
                return;
            }
            // Schedule to dismiss the spinner
            if (this.spinnerState) {
                this.logger.debug('Schedule for dismissing');
                this._dismissingTimer = setTimeout(() => {
                    if (this._dismissingTimer) {
                        this._dismissingTimer = 0;
                        // Dismiss the spinner 
                        this.underlyingSpinner.hide(...args);
                        this.spinnerState = false;
                    }
                }, this._dismissingDelay);
            }
        }
        else {
            // If have scheduled to dismiss the spinner,
            // we better we schedule again.
            if (this._dismissingTimer) {
                this.logger.debug('Reschedule for dismissing');
                clearTimeout(this._dismissingTimer);
                this._dismissingTimer = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    if (this._dismissingTimer) {
                        // Clean up the timer
                        this._dismissingTimer = 0;
                        // Dismiss the spinner 
                        yield this.underlyingSpinner.hideAsync(...args);
                    }
                }), this._dismissingDelay);
                return;
            }
            // Schedule to dismiss the spinner
            if (this.spinnerState) {
                this.logger.debug('Schedule for dismissing');
                this._dismissingTimer = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    if (this._dismissingTimer) {
                        this._dismissingTimer = 0;
                        // Dismiss the spinner 
                        yield this.underlyingSpinner.hideAsync(...args);
                        this.spinnerState = false;
                    }
                }), this._dismissingDelay);
            }
        }
    }
    preShow() {
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
            return true;
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
            return true;
        }
        return false;
    }
    preHide() {
        this.logger.debug('Spinner requested to hide');
        this._referenceCounter--;
        this.logger.debug('Reference counter in hide:' + this._referenceCounter);
        if (this._referenceCounter > 0) {
            return true;
        }
        // If the spinner has not been scheduled.
        if (this._showingTimer) {
            this.logger.debug('Showed timer cleaned');
            clearTimeout(this._showingTimer);
            this._showingTimer = 0;
            // Done
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBV0EsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUV6QyxNQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztBQUNsQyxNQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztBQUV0QyxNQUFNLE9BQWdCLGtCQUFrQjtJQWFwQztRQUZRLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUcxQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSxRQUFRLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVNLGVBQWUsQ0FBQyxPQUFlO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFFRCxXQUFXO0lBQ0osSUFBSSxDQUFDLEdBQUcsSUFBVztRQUN0QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsSUFBSSxTQUFTO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRXZDLDBDQUEwQztRQUMxQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUU7WUFD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QUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBRTFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFFdkIsT0FBTztZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTmd4TG9nZ2VyIH0gZnJvbSAnQHBvbHB3YXJlL25neC1sb2dnZXInO1xuaW1wb3J0IHsgSVNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLmludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVuZGVybHlpbmdTcGlubmVyIHtcbiAgICBzaG93PyguLi5hcmdzOiBhbnlbXSk6IHZvaWQ7XG4gICAgaGlkZT8oLi4uYXJnczogYW55W10pOiB2b2lkO1xuXG4gICAgc2hvd0FzeW5jPyguLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8YW55PjtcbiAgICBoaWRlQXN5bmM/KC4uLmFyZ3M6IGFueVtdKTogUHJvbWlzZTxhbnk+O1xufVxuXG5leHBvcnQgY29uc3QgUFJJTUFSWV9TUElOTkVSID0gJ3ByaW1hcnknO1xuXG5jb25zdCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQgPSAzMDA7XG5jb25zdCBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkID0gNTAwO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3Bpbm5lclNlcnZpY2VCYXNlIGltcGxlbWVudHMgSVNwaW5uZXJTZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCB1bmRlcmx5aW5nU3Bpbm5lcjogSVVuZGVybHlpbmdTcGlubmVyO1xuICAgIHByb3RlY3RlZCBsb2dnZXI6IElOZ3hMb2dnZXI7XG5cbiAgICBwcml2YXRlIF9zaG93aW5nVGltZXI6IGFueTtcbiAgICBwcml2YXRlIF9zaG93aW5nRGVsYXk6IG51bWJlcjtcbiAgICBwcml2YXRlIF9kaXNtaXNzaW5nRGVsYXk6IG51bWJlcjtcbiAgICBwcml2YXRlIF9kaXNtaXNzaW5nVGltZXI6IGFueTtcblxuICAgIHByb3RlY3RlZCBzcGlubmVyU3RhdGU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfcmVmZXJlbmNlQ291bnRlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcbiAgICAgICAgdGhpcy5fc2hvd2luZ0RlbGF5ID0gRGVmYXVsdFNob3dpbmdEZWxheVBlcm9pZDtcbiAgICAgICAgdGhpcy5fZGlzbWlzc2luZ0RlbGF5ID0gRGlzbWlzc2luZ0RlbGF5UGVyb2lkO1xuICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuXG4gICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlbGF5KHNlY29uZHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBzZWNvbmRzICogMTAwMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGlzbWlzc0RlbGF5KHNlY29uZHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kaXNtaXNzaW5nRGVsYXkgPSBzZWNvbmRzICogMTAwMDtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZVxuICAgIHB1YmxpYyBzaG93KC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGlzU3RvcHBlZCA9IHRoaXMucHJlU2hvdygpO1xuICAgICAgICBpZiAoaXNTdG9wcGVkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1NjaGVkdWxlIGZvciBzaG93Jyk7XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBzY2hkdWxlIHRvIHNob3cgdGhlIHNwaW5uZXIuXG4gICAgICAgIGlmICh0aGlzLnVuZGVybHlpbmdTcGlubmVyLnNob3cpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5zaG93KC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5uZXJTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCB0aGlzLl9zaG93aW5nRGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVuZGVybHlpbmdTcGlubmVyLnNob3dBc3luYyguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgdGhpcy5fc2hvd2luZ0RlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKC4uLmFyZ3M6IGFueVtdKSB7XG5cbiAgICAgICAgY29uc3QgaXNTdG9wcGVkID0gdGhpcy5wcmVIaWRlKCk7XG4gICAgICAgIGlmIChpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGUpIHtcblxuICAgICAgICAgICAgLy8gSWYgaGF2ZSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcbiAgICAgICAgICAgIC8vIHdlIGJldHRlciB3ZSBzY2hlZHVsZSBhZ2Fpbi5cbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZXNjaGVkdWxlIGZvciBkaXNtaXNzaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5oaWRlKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5fZGlzbWlzc2luZ0RlbGF5KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2NoZWR1bGUgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lclxuXG4gICAgICAgICAgICBpZiAodGhpcy5zcGlubmVyU3RhdGUpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdTY2hlZHVsZSBmb3IgZGlzbWlzc2luZycpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5kZXJseWluZ1NwaW5uZXIuaGlkZSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzLl9kaXNtaXNzaW5nRGVsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgaGF2ZSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcbiAgICAgICAgICAgIC8vIHdlIGJldHRlciB3ZSBzY2hlZHVsZSBhZ2Fpbi5cbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZXNjaGVkdWxlIGZvciBkaXNtaXNzaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5oaWRlQXN5bmMoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzLl9kaXNtaXNzaW5nRGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTY2hlZHVsZSB0byBkaXNtaXNzIHRoZSBzcGlubmVyXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNwaW5uZXJTdGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1NjaGVkdWxlIGZvciBkaXNtaXNzaW5nJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5oaWRlQXN5bmMoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5uZXJTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5fZGlzbWlzc2luZ0RlbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBwcmVTaG93KCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU3Bpbm5lciByZXF1ZXN0ZWQgdG8gc2hvdycpO1xuXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUNvdW50ZXIrKztcblxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVmZXJlbmNlIGNvdW50ZXIgaW4gc2hvdzonICsgdGhpcy5fcmVmZXJlbmNlQ291bnRlcik7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25lIGFscmVhZHksIHVzZSBpdC5cbiAgICAgICAgaWYgKHRoaXMuc3Bpbm5lclN0YXRlKSB7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdFeGlzdGluZyBzcGlubmVyIHVzZWQnKTtcblxuICAgICAgICAgICAgLy8gSG93ZXZlciwgd2UgbmVlZCB0byBjYW5jZWwgdGhlIGRpc21pc3MgdGltZXIuXG4gICAgICAgICAgICAvLyBJdCBpcyBzYWZlLCBiZWNhdXNlIHdlIGV4cGVjdCB0aGF0IFwiaGlkZVwiIGlzIHRvIGJlIGNhbGxlZFxuICAgICAgICAgICAgLy8gc29tZXRpbWUgbGF0ZXIgZnJvbSB0aGlzIG1vbWVudCBvbi5cbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdEaXNtaXNzaW5nIHRpbWVyIGNsZWFuZWQgMScpO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIGRpc21pc3MgdGhlIHNwaW5uZXIsXG4gICAgICAgIC8vIHdlIGp1c3QgbmVlZCB0byBjbGVhciB0aGUgc2NoZWR1bGVyLlxuICAgICAgICAvLyBQbGVhc2UgcmVmZXIgdG8gdGhlIGFib3ZlIGZvciB0aGUgcmVhc29uLlxuICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdEaXNtaXNzaW5nIHRpbWVyIGNsZWFuZWQgMicpO1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgc2NoZWR1bGVkIHRvIHNob3cgdGhlIHNwaW5uZXIsIHdlIGp1c3RcbiAgICAgICAgLy8gdXNlIHRoaXMgc2NoZWR1bGUuIFxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdBbHJlYWR5IHNjaGVkdWxlZCB0byBzaG93Jyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcHJlSGlkZSgpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1NwaW5uZXIgcmVxdWVzdGVkIHRvIGhpZGUnKTtcblxuICAgICAgICB0aGlzLl9yZWZlcmVuY2VDb3VudGVyLS07XG5cbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1JlZmVyZW5jZSBjb3VudGVyIGluIGhpZGU6JyArIHRoaXMuX3JlZmVyZW5jZUNvdW50ZXIpO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZWZlcmVuY2VDb3VudGVyID4gMCkge1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBzcGlubmVyIGhhcyBub3QgYmVlbiBzY2hlZHVsZWQuXG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcblxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1Nob3dlZCB0aW1lciBjbGVhbmVkJyk7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93aW5nVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcblxuICAgICAgICAgICAgLy8gRG9uZVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59XG5cbiJdfQ==
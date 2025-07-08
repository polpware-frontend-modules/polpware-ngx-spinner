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
                    this.spinnerState = true;
                    this.underlyingSpinner.show(...args);
                }
            }, this._showingDelay);
        }
        else {
            this._showingTimer = setTimeout(async () => {
                if (this._showingTimer) {
                    // Clean up the timer
                    this._showingTimer = 0;
                    this.spinnerState = true;
                    await this.underlyingSpinner.showAsync(...args);
                }
            }, this._showingDelay);
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
                        this.spinnerState = false;
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
                        this.spinnerState = false;
                        // Dismiss the spinner 
                        this.underlyingSpinner.hide(...args);
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
                this._dismissingTimer = setTimeout(async () => {
                    if (this._dismissingTimer) {
                        // Clean up the timer
                        this._dismissingTimer = 0;
                        this.spinnerState = false;
                        // Dismiss the spinner 
                        await this.underlyingSpinner.hideAsync(...args);
                    }
                }, this._dismissingDelay);
                return;
            }
            // Schedule to dismiss the spinner
            if (this.spinnerState) {
                this.logger.debug('Schedule for dismissing');
                this._dismissingTimer = setTimeout(async () => {
                    if (this._dismissingTimer) {
                        this._dismissingTimer = 0;
                        this.spinnerState = false;
                        // Dismiss the spinner 
                        await this.underlyingSpinner.hideAsync(...args);
                    }
                }, this._dismissingDelay);
            }
        }
    }
    async showAsync(...args) {
        this._showingTimer = 0;
        this.spinnerState = true;
        await this.underlyingSpinner.showAsync(...args);
    }
    async hideAsync(...args) {
        // Clean up the timer
        this._dismissingTimer = 0;
        this.spinnerState = false;
        // Dismiss the spinner 
        await this.underlyingSpinner.hideAsync(...args);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtc3Bpbm5lci9zcmMvbGliL3NwaW5uZXIvc3Bpbm5lci1zZXJ2aWNlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUV6QyxNQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztBQUNsQyxNQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztBQUV0QyxNQUFNLE9BQWdCLGtCQUFrQjtJQWFwQztRQUZRLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUcxQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSxRQUFRLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVNLGVBQWUsQ0FBQyxPQUFlO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFFRCxXQUFXO0lBQ0osSUFBSSxDQUFDLEdBQUcsSUFBVztRQUN0QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsSUFBSSxTQUFTO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRXZDLDBDQUEwQztRQUMxQyxJQUFJLElBQUksQ0FBQyxp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cnQgeyBJTmd4TG9nZ2VyIH0gZnJvbSAnQHBvbHB3YXJlL25neC1sb2dnZXInO1xuaW1wb3J0IHsgSVNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLmludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVuZGVybHlpbmdTcGlubmVyIHtcbiAgICBzaG93PyguLi5hcmdzOiBhbnlbXSk6IHZvaWQ7XG4gICAgaGlkZT8oLi4uYXJnczogYW55W10pOiB2b2lkO1xuXG4gICAgc2hvd0FzeW5jPyguLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8YW55PjtcbiAgICBoaWRlQXN5bmM/KC4uLmFyZ3M6IGFueVtdKTogUHJvbWlzZTxhbnk+O1xufVxuXG5leHBvcnQgY29uc3QgUFJJTUFSWV9TUElOTkVSID0gJ3ByaW1hcnknO1xuXG5jb25zdCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQgPSAzMDA7XG5jb25zdCBEZWZhdWx0U2hvd2luZ0RlbGF5UGVyb2lkID0gNTAwO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3Bpbm5lclNlcnZpY2VCYXNlIGltcGxlbWVudHMgSVNwaW5uZXJTZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCB1bmRlcmx5aW5nU3Bpbm5lcjogSVVuZGVybHlpbmdTcGlubmVyO1xuICAgIHByb3RlY3RlZCBsb2dnZXI6IElOZ3hMb2dnZXI7XG5cbiAgICBwcml2YXRlIF9zaG93aW5nVGltZXI6IGFueTtcbiAgICBwcml2YXRlIF9zaG93aW5nRGVsYXk6IG51bWJlcjtcbiAgICBwcml2YXRlIF9kaXNtaXNzaW5nRGVsYXk6IG51bWJlcjtcbiAgICBwcml2YXRlIF9kaXNtaXNzaW5nVGltZXI6IGFueTtcblxuICAgIHByb3RlY3RlZCBzcGlubmVyU3RhdGU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfcmVmZXJlbmNlQ291bnRlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcbiAgICAgICAgdGhpcy5fc2hvd2luZ0RlbGF5ID0gRGVmYXVsdFNob3dpbmdEZWxheVBlcm9pZDtcbiAgICAgICAgdGhpcy5fZGlzbWlzc2luZ0RlbGF5ID0gRGlzbWlzc2luZ0RlbGF5UGVyb2lkO1xuICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuXG4gICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlbGF5KHNlY29uZHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zaG93aW5nRGVsYXkgPSBzZWNvbmRzICogMTAwMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGlzbWlzc0RlbGF5KHNlY29uZHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kaXNtaXNzaW5nRGVsYXkgPSBzZWNvbmRzICogMTAwMDtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZVxuICAgIHB1YmxpYyBzaG93KC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGlzU3RvcHBlZCA9IHRoaXMucHJlU2hvdygpO1xuICAgICAgICBpZiAoaXNTdG9wcGVkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1NjaGVkdWxlIGZvciBzaG93Jyk7XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBzY2hkdWxlIHRvIHNob3cgdGhlIHNwaW5uZXIuXG4gICAgICAgIGlmICh0aGlzLnVuZGVybHlpbmdTcGlubmVyLnNob3cpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVybHlpbmdTcGlubmVyLnNob3coLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCB0aGlzLl9zaG93aW5nRGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5uZXJTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudW5kZXJseWluZ1NwaW5uZXIuc2hvd0FzeW5jKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgdGhpcy5fc2hvd2luZ0RlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKC4uLmFyZ3M6IGFueVtdKSB7XG5cbiAgICAgICAgY29uc3QgaXNTdG9wcGVkID0gdGhpcy5wcmVIaWRlKCk7XG4gICAgICAgIGlmIChpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGUpIHtcblxuICAgICAgICAgICAgLy8gSWYgaGF2ZSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcbiAgICAgICAgICAgIC8vIHdlIGJldHRlciB3ZSBzY2hlZHVsZSBhZ2Fpbi5cbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZXNjaGVkdWxlIGZvciBkaXNtaXNzaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5uZXJTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5kZXJseWluZ1NwaW5uZXIuaGlkZSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMuX2Rpc21pc3NpbmdEZWxheSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIHRvIGRpc21pc3MgdGhlIHNwaW5uZXJcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3Bpbm5lclN0YXRlKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU2NoZWR1bGUgZm9yIGRpc21pc3NpbmcnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5uZXJTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5kZXJseWluZ1NwaW5uZXIuaGlkZSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMuX2Rpc21pc3NpbmdEZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBoYXZlIHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxuICAgICAgICAgICAgLy8gd2UgYmV0dGVyIHdlIHNjaGVkdWxlIGFnYWluLlxuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1Jlc2NoZWR1bGUgZm9yIGRpc21pc3NpbmcnKTtcblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5oaWRlQXN5bmMoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzLl9kaXNtaXNzaW5nRGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTY2hlZHVsZSB0byBkaXNtaXNzIHRoZSBzcGlubmVyXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNwaW5uZXJTdGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1NjaGVkdWxlIGZvciBkaXNtaXNzaW5nJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc21pc3MgdGhlIHNwaW5uZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGVBc3luYyguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMuX2Rpc21pc3NpbmdEZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2hvd0FzeW5jKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IDA7XG4gICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5zaG93QXN5bmMoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGhpZGVBc3luYyguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcbiAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcbiAgICAgICAgYXdhaXQgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5oaWRlQXN5bmMoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHByZVNob3coKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdTcGlubmVyIHJlcXVlc3RlZCB0byBzaG93Jyk7XG5cbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQ291bnRlcisrO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZWZlcmVuY2UgY291bnRlciBpbiBzaG93OicgKyB0aGlzLl9yZWZlcmVuY2VDb3VudGVyKTtcblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmUgYWxyZWFkeSwgdXNlIGl0LlxuICAgICAgICBpZiAodGhpcy5zcGlubmVyU3RhdGUpIHtcblxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ0V4aXN0aW5nIHNwaW5uZXIgdXNlZCcpO1xuXG4gICAgICAgICAgICAvLyBIb3dldmVyLCB3ZSBuZWVkIHRvIGNhbmNlbCB0aGUgZGlzbWlzcyB0aW1lci5cbiAgICAgICAgICAgIC8vIEl0IGlzIHNhZmUsIGJlY2F1c2Ugd2UgZXhwZWN0IHRoYXQgXCJoaWRlXCIgaXMgdG8gYmUgY2FsbGVkXG4gICAgICAgICAgICAvLyBzb21ldGltZSBsYXRlciBmcm9tIHRoaXMgbW9tZW50IG9uLlxuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ0Rpc21pc3NpbmcgdGltZXIgY2xlYW5lZCAxJyk7XG5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcbiAgICAgICAgLy8gd2UganVzdCBuZWVkIHRvIGNsZWFyIHRoZSBzY2hlZHVsZXIuXG4gICAgICAgIC8vIFBsZWFzZSByZWZlciB0byB0aGUgYWJvdmUgZm9yIHRoZSByZWFzb24uXG4gICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcblxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ0Rpc21pc3NpbmcgdGltZXIgY2xlYW5lZCAyJyk7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBzY2hlZHVsZWQgdG8gc2hvdyB0aGUgc3Bpbm5lciwgd2UganVzdFxuICAgICAgICAvLyB1c2UgdGhpcyBzY2hlZHVsZS4gXG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcblxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ0FscmVhZHkgc2NoZWR1bGVkIHRvIHNob3cnKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBwcmVIaWRlKCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU3Bpbm5lciByZXF1ZXN0ZWQgdG8gaGlkZScpO1xuXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUNvdW50ZXItLTtcblxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVmZXJlbmNlIGNvdW50ZXIgaW4gaGlkZTonICsgdGhpcy5fcmVmZXJlbmNlQ291bnRlcik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUNvdW50ZXIgPiAwKSB7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHNwaW5uZXIgaGFzIG5vdCBiZWVuIHNjaGVkdWxlZC5cbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU2hvd2VkIHRpbWVyIGNsZWFuZWQnKTtcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dpbmdUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xuXG4gICAgICAgICAgICAvLyBEb25lXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn1cblxuIl19
import { __awaiter, __generator, __read, __spread } from "tslib";
export var PRIMARY_SPINNER = 'primary';
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
    SpinnerServiceBase.prototype.show = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var isStopped = this.preShow();
        if (isStopped)
            return;
        this.logger.debug('Schedule for show');
        // Otherwise, schdule to show the spinner.
        if (this.underlyingSpinner.show) {
            this._showingTimer = setTimeout(function () {
                var _a;
                if (_this._showingTimer) {
                    // Clean up the timer
                    _this._showingTimer = 0;
                    (_a = _this.underlyingSpinner).show.apply(_a, __spread(args));
                    _this.spinnerState = true;
                }
            }, this._showingDelay);
        }
        else {
            this._showingTimer = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this._showingTimer) return [3 /*break*/, 2];
                            // Clean up the timer
                            this._showingTimer = 0;
                            return [4 /*yield*/, (_a = this.underlyingSpinner).showAsync.apply(_a, __spread(args))];
                        case 1:
                            _b.sent();
                            this.spinnerState = true;
                            _b.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); }, this._showingDelay);
        }
    };
    SpinnerServiceBase.prototype.hide = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var isStopped = this.preHide();
        if (isStopped) {
            return;
        }
        if (this.underlyingSpinner.hide) {
            // If have scheduled to dismiss the spinner,
            // we better we schedule again.
            if (this._dismissingTimer) {
                this.logger.debug('Reschedule for dismissing');
                clearTimeout(this._dismissingTimer);
                this._dismissingTimer = setTimeout(function () {
                    var _a;
                    if (_this._dismissingTimer) {
                        // Clean up the timer
                        _this._dismissingTimer = 0;
                        // Dismiss the spinner 
                        (_a = _this.underlyingSpinner).hide.apply(_a, __spread(args));
                    }
                }, DismissingDelayPeroid);
                return;
            }
            // Schedule to dismiss the spinner
            if (this.spinnerState) {
                this.logger.debug('Schedule for dismissing');
                this._dismissingTimer = setTimeout(function () {
                    var _a;
                    if (_this._dismissingTimer) {
                        _this._dismissingTimer = 0;
                        // Dismiss the spinner 
                        (_a = _this.underlyingSpinner).hide.apply(_a, __spread(args));
                        _this.spinnerState = false;
                    }
                }, DismissingDelayPeroid);
            }
        }
        else {
            // If have scheduled to dismiss the spinner,
            // we better we schedule again.
            if (this._dismissingTimer) {
                this.logger.debug('Reschedule for dismissing');
                clearTimeout(this._dismissingTimer);
                this._dismissingTimer = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!this._dismissingTimer) return [3 /*break*/, 2];
                                // Clean up the timer
                                this._dismissingTimer = 0;
                                // Dismiss the spinner 
                                return [4 /*yield*/, (_a = this.underlyingSpinner).hideAsync.apply(_a, __spread(args))];
                            case 1:
                                // Dismiss the spinner 
                                _b.sent();
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); }, DismissingDelayPeroid);
                return;
            }
            // Schedule to dismiss the spinner
            if (this.spinnerState) {
                this.logger.debug('Schedule for dismissing');
                this._dismissingTimer = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!this._dismissingTimer) return [3 /*break*/, 2];
                                this._dismissingTimer = 0;
                                // Dismiss the spinner 
                                return [4 /*yield*/, (_a = this.underlyingSpinner).hideAsync.apply(_a, __spread(args))];
                            case 1:
                                // Dismiss the spinner 
                                _b.sent();
                                this.spinnerState = false;
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); }, DismissingDelayPeroid);
            }
        }
    };
    SpinnerServiceBase.prototype.preShow = function () {
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
    };
    SpinnerServiceBase.prototype.preHide = function () {
        var _this = this;
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
        // If have scheduled to dismiss the spinner,
        // we better we schedule again.
        if (this._dismissingTimer) {
            this.logger.debug('Reschedule for dismissing');
            clearTimeout(this._dismissingTimer);
            this._dismissingTimer = setTimeout(function () {
                if (_this._dismissingTimer) {
                    // Clean up the timer
                    _this._dismissingTimer = 0;
                    // Dismiss the spinner 
                    _this.underlyingSpinner.hide(name);
                }
            }, DismissingDelayPeroid);
            return true;
        }
        return false;
    };
    return SpinnerServiceBase;
}());
export { SpinnerServiceBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBV0EsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUV6QyxJQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztBQUNsQyxJQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztBQUV0QztJQVlJO1FBRlEsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBRzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcseUJBQXlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRU0scUNBQVEsR0FBZixVQUFnQixPQUFlO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVztJQUNKLGlDQUFJLEdBQVg7UUFBQSxpQkE4QkM7UUE5QlcsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDdEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksU0FBUztZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUV2QywwQ0FBMEM7UUFDMUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDOztnQkFFNUIsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO29CQUNwQixx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LElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFMUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUV2QixPQUFPO1lBQ1AsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELDRDQUE0QztRQUM1QywrQkFBK0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFFdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUUvQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztnQkFFL0IsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztvQkFDMUIsdUJBQXVCO29CQUN2QixLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQztZQUNMLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1lBRTFCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUwseUJBQUM7QUFBRCxDQUFDLEFBL09ELElBK09DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5neExvZ2dlciB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbG9nZ2VyJztcbmltcG9ydCB7IElTcGlubmVyU2VydmljZSB9IGZyb20gJy4vc3Bpbm5lci5pbnRlcmZhY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVbmRlcmx5aW5nU3Bpbm5lciB7XG4gICAgc2hvdz8oLi4uYXJnczogYW55W10pOiB2b2lkO1xuICAgIGhpZGU/KC4uLmFyZ3M6IGFueVtdKTogdm9pZDtcblxuICAgIHNob3dBc3luYz8oLi4uYXJnczogYW55W10pOiBQcm9taXNlPGFueT47XG4gICAgaGlkZUFzeW5jPyguLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8YW55Pjtcbn1cblxuZXhwb3J0IGNvbnN0IFBSSU1BUllfU1BJTk5FUiA9ICdwcmltYXJ5JztcblxuY29uc3QgRGlzbWlzc2luZ0RlbGF5UGVyb2lkID0gMzAwO1xuY29uc3QgRGVmYXVsdFNob3dpbmdEZWxheVBlcm9pZCA9IDUwMDtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlQmFzZSBpbXBsZW1lbnRzIElTcGlubmVyU2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgdW5kZXJseWluZ1NwaW5uZXI6IElVbmRlcmx5aW5nU3Bpbm5lcjtcbiAgICBwcm90ZWN0ZWQgbG9nZ2VyOiBJTmd4TG9nZ2VyO1xuXG4gICAgcHJpdmF0ZSBfc2hvd2luZ1RpbWVyOiBhbnk7XG4gICAgcHJpdmF0ZSBfc2hvd2luZ0RlbGF5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZGlzbWlzc2luZ1RpbWVyOiBhbnk7XG5cbiAgICBwcm90ZWN0ZWQgc3Bpbm5lclN0YXRlOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3JlZmVyZW5jZUNvdW50ZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IDA7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdEZWxheSA9IERlZmF1bHRTaG93aW5nRGVsYXlQZXJvaWQ7XG4gICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG5cbiAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGVsYXkoc2Vjb25kczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdEZWxheSA9IHNlY29uZHMgKiAxMDAwO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlXG4gICAgcHVibGljIHNob3coLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgaXNTdG9wcGVkID0gdGhpcy5wcmVTaG93KCk7XG4gICAgICAgIGlmIChpc1N0b3BwZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU2NoZWR1bGUgZm9yIHNob3cnKTtcblxuICAgICAgICAvLyBPdGhlcndpc2UsIHNjaGR1bGUgdG8gc2hvdyB0aGUgc3Bpbm5lci5cbiAgICAgICAgaWYgKHRoaXMudW5kZXJseWluZ1NwaW5uZXIuc2hvdykge1xuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVybHlpbmdTcGlubmVyLnNob3coLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIHRoaXMuX3Nob3dpbmdEZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIHRpbWVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudW5kZXJseWluZ1NwaW5uZXIuc2hvd0FzeW5jKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5uZXJTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCB0aGlzLl9zaG93aW5nRGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoLi4uYXJnczogYW55W10pIHtcblxuICAgICAgICBjb25zdCBpc1N0b3BwZWQgPSB0aGlzLnByZUhpZGUoKTtcbiAgICAgICAgaWYgKGlzU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudW5kZXJseWluZ1NwaW5uZXIuaGlkZSkge1xuXG4gICAgICAgICAgICAvLyBJZiBoYXZlIHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxuICAgICAgICAgICAgLy8gd2UgYmV0dGVyIHdlIHNjaGVkdWxlIGFnYWluLlxuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1Jlc2NoZWR1bGUgZm9yIGRpc21pc3NpbmcnKTtcblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc21pc3MgdGhlIHNwaW5uZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGUoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTY2hlZHVsZSB0byBkaXNtaXNzIHRoZSBzcGlubmVyXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNwaW5uZXJTdGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1NjaGVkdWxlIGZvciBkaXNtaXNzaW5nJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNtaXNzIHRoZSBzcGlubmVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5oaWRlKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBoYXZlIHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxuICAgICAgICAgICAgLy8gd2UgYmV0dGVyIHdlIHNjaGVkdWxlIGFnYWluLlxuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1Jlc2NoZWR1bGUgZm9yIGRpc21pc3NpbmcnKTtcblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc21pc3MgdGhlIHNwaW5uZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGVBc3luYyguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIHRvIGRpc21pc3MgdGhlIHNwaW5uZXJcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3Bpbm5lclN0YXRlKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU2NoZWR1bGUgZm9yIGRpc21pc3NpbmcnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc21pc3MgdGhlIHNwaW5uZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGVBc3luYyguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBEaXNtaXNzaW5nRGVsYXlQZXJvaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHByZVNob3coKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdTcGlubmVyIHJlcXVlc3RlZCB0byBzaG93Jyk7XG5cbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQ291bnRlcisrO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZWZlcmVuY2UgY291bnRlciBpbiBzaG93OicgKyB0aGlzLl9yZWZlcmVuY2VDb3VudGVyKTtcblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmUgYWxyZWFkeSwgdXNlIGl0LlxuICAgICAgICBpZiAodGhpcy5zcGlubmVyU3RhdGUpIHtcblxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ0V4aXN0aW5nIHNwaW5uZXIgdXNlZCcpO1xuXG4gICAgICAgICAgICAvLyBIb3dldmVyLCB3ZSBuZWVkIHRvIGNhbmNlbCB0aGUgZGlzbWlzcyB0aW1lci5cbiAgICAgICAgICAgIC8vIEl0IGlzIHNhZmUsIGJlY2F1c2Ugd2UgZXhwZWN0IHRoYXQgXCJoaWRlXCIgaXMgdG8gYmUgY2FsbGVkXG4gICAgICAgICAgICAvLyBzb21ldGltZSBsYXRlciBmcm9tIHRoaXMgbW9tZW50IG9uLlxuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ0Rpc21pc3NpbmcgdGltZXIgY2xlYW5lZCAxJyk7XG5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBzY2hlZHVsZWQgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lcixcbiAgICAgICAgLy8gd2UganVzdCBuZWVkIHRvIGNsZWFyIHRoZSBzY2hlZHVsZXIuXG4gICAgICAgIC8vIFBsZWFzZSByZWZlciB0byB0aGUgYWJvdmUgZm9yIHRoZSByZWFzb24uXG4gICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcblxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ0Rpc21pc3NpbmcgdGltZXIgY2xlYW5lZCAyJyk7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBzY2hlZHVsZWQgdG8gc2hvdyB0aGUgc3Bpbm5lciwgd2UganVzdFxuICAgICAgICAvLyB1c2UgdGhpcyBzY2hlZHVsZS4gXG4gICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcblxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ0FscmVhZHkgc2NoZWR1bGVkIHRvIHNob3cnKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBwcmVIaWRlKCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU3Bpbm5lciByZXF1ZXN0ZWQgdG8gaGlkZScpO1xuXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUNvdW50ZXItLTtcblxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVmZXJlbmNlIGNvdW50ZXIgaW4gaGlkZTonICsgdGhpcy5fcmVmZXJlbmNlQ291bnRlcik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUNvdW50ZXIgPiAwKSB7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHNwaW5uZXIgaGFzIG5vdCBiZWVuIHNjaGVkdWxlZC5cbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU2hvd2VkIHRpbWVyIGNsZWFuZWQnKTtcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dpbmdUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSAwO1xuXG4gICAgICAgICAgICAvLyBEb25lXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGhhdmUgc2NoZWR1bGVkIHRvIGRpc21pc3MgdGhlIHNwaW5uZXIsXG4gICAgICAgIC8vIHdlIGJldHRlciB3ZSBzY2hlZHVsZSBhZ2Fpbi5cbiAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVzY2hlZHVsZSBmb3IgZGlzbWlzc2luZycpO1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzbWlzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5oaWRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIERpc21pc3NpbmdEZWxheVBlcm9pZCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufVxuXG4iXX0=
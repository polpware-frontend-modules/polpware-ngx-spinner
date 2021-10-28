import { __awaiter, __generator, __read, __spread } from "tslib";
export var PRIMARY_SPINNER = 'primary';
var DismissingDelayPeroid = 300;
var DefaultShowingDelayPeroid = 500;
var SpinnerServiceBase = /** @class */ (function () {
    function SpinnerServiceBase() {
        this._referenceCounter = 0;
        this._showingTimer = 0;
        this._showingDelay = DefaultShowingDelayPeroid;
        this._dismissingDelay = DismissingDelayPeroid;
        this._dismissingTimer = 0;
        this.spinnerState = false;
    }
    SpinnerServiceBase.prototype.setDelay = function (seconds) {
        this._showingDelay = seconds * 1000;
    };
    SpinnerServiceBase.prototype.setDismissDelay = function (seconds) {
        this._dismissingDelay = seconds * 1000;
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
                }, this._dismissingDelay);
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
                }, this._dismissingDelay);
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
                }); }, this._dismissingDelay);
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
                }); }, this._dismissingDelay);
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
    };
    return SpinnerServiceBase;
}());
export { SpinnerServiceBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1zZXJ2aWNlLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLXNlcnZpY2UtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBV0EsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUV6QyxJQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztBQUNsQyxJQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztBQUV0QztJQWFJO1FBRlEsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBRzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcseUJBQXlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVNLHFDQUFRLEdBQWYsVUFBZ0IsT0FBZTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVNLDRDQUFlLEdBQXRCLFVBQXVCLE9BQWU7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQUVELFdBQVc7SUFDSixpQ0FBSSxHQUFYO1FBQUEsaUJBOEJDO1FBOUJXLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ3RCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQyxJQUFJLFNBQVM7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFdkMs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QUE0QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXpFLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBRTtZQUU1QixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQseUNBQXlDO1FBQ3pDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUVwQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBRTFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFFdkIsT0FBTztZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUwseUJBQUM7QUFBRCxDQUFDLEFBak9ELElBaU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5neExvZ2dlciB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbG9nZ2VyJztcbmltcG9ydCB7IElTcGlubmVyU2VydmljZSB9IGZyb20gJy4vc3Bpbm5lci5pbnRlcmZhY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVbmRlcmx5aW5nU3Bpbm5lciB7XG4gICAgc2hvdz8oLi4uYXJnczogYW55W10pOiB2b2lkO1xuICAgIGhpZGU/KC4uLmFyZ3M6IGFueVtdKTogdm9pZDtcblxuICAgIHNob3dBc3luYz8oLi4uYXJnczogYW55W10pOiBQcm9taXNlPGFueT47XG4gICAgaGlkZUFzeW5jPyguLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8YW55Pjtcbn1cblxuZXhwb3J0IGNvbnN0IFBSSU1BUllfU1BJTk5FUiA9ICdwcmltYXJ5JztcblxuY29uc3QgRGlzbWlzc2luZ0RlbGF5UGVyb2lkID0gMzAwO1xuY29uc3QgRGVmYXVsdFNob3dpbmdEZWxheVBlcm9pZCA9IDUwMDtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlQmFzZSBpbXBsZW1lbnRzIElTcGlubmVyU2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgdW5kZXJseWluZ1NwaW5uZXI6IElVbmRlcmx5aW5nU3Bpbm5lcjtcbiAgICBwcm90ZWN0ZWQgbG9nZ2VyOiBJTmd4TG9nZ2VyO1xuXG4gICAgcHJpdmF0ZSBfc2hvd2luZ1RpbWVyOiBhbnk7XG4gICAgcHJpdmF0ZSBfc2hvd2luZ0RlbGF5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZGlzbWlzc2luZ0RlbGF5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZGlzbWlzc2luZ1RpbWVyOiBhbnk7XG5cbiAgICBwcm90ZWN0ZWQgc3Bpbm5lclN0YXRlOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3JlZmVyZW5jZUNvdW50ZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IDA7XG4gICAgICAgIHRoaXMuX3Nob3dpbmdEZWxheSA9IERlZmF1bHRTaG93aW5nRGVsYXlQZXJvaWQ7XG4gICAgICAgIHRoaXMuX2Rpc21pc3NpbmdEZWxheSA9IERpc21pc3NpbmdEZWxheVBlcm9pZDtcbiAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcblxuICAgICAgICB0aGlzLnNwaW5uZXJTdGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREZWxheShzZWNvbmRzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2hvd2luZ0RlbGF5ID0gc2Vjb25kcyAqIDEwMDA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERpc21pc3NEZWxheShzZWNvbmRzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGlzbWlzc2luZ0RlbGF5ID0gc2Vjb25kcyAqIDEwMDA7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVcbiAgICBwdWJsaWMgc2hvdyguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBpc1N0b3BwZWQgPSB0aGlzLnByZVNob3coKTtcbiAgICAgICAgaWYgKGlzU3RvcHBlZCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdTY2hlZHVsZSBmb3Igc2hvdycpO1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2NoZHVsZSB0byBzaG93IHRoZSBzcGlubmVyLlxuICAgICAgICBpZiAodGhpcy51bmRlcmx5aW5nU3Bpbm5lci5zaG93KSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93aW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zaG93aW5nVGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIHRpbWVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5kZXJseWluZ1NwaW5uZXIuc2hvdyguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgdGhpcy5fc2hvd2luZ0RlbGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgdGltZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hvd2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51bmRlcmx5aW5nU3Bpbm5lci5zaG93QXN5bmMoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bpbm5lclN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIHRoaXMuX3Nob3dpbmdEZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSguLi5hcmdzOiBhbnlbXSkge1xuXG4gICAgICAgIGNvbnN0IGlzU3RvcHBlZCA9IHRoaXMucHJlSGlkZSgpO1xuICAgICAgICBpZiAoaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy51bmRlcmx5aW5nU3Bpbm5lci5oaWRlKSB7XG5cbiAgICAgICAgICAgIC8vIElmIGhhdmUgc2NoZWR1bGVkIHRvIGRpc21pc3MgdGhlIHNwaW5uZXIsXG4gICAgICAgICAgICAvLyB3ZSBiZXR0ZXIgd2Ugc2NoZWR1bGUgYWdhaW4uXG4gICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVzY2hlZHVsZSBmb3IgZGlzbWlzc2luZycpO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIHRpbWVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5kZXJseWluZ1NwaW5uZXIuaGlkZSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMuX2Rpc21pc3NpbmdEZWxheSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIHRvIGRpc21pc3MgdGhlIHNwaW5uZXJcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3Bpbm5lclN0YXRlKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnU2NoZWR1bGUgZm9yIGRpc21pc3NpbmcnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNtaXNzaW5nVGltZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc21pc3MgdGhlIHNwaW5uZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVybHlpbmdTcGlubmVyLmhpZGUoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5uZXJTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5fZGlzbWlzc2luZ0RlbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIGhhdmUgc2NoZWR1bGVkIHRvIGRpc21pc3MgdGhlIHNwaW5uZXIsXG4gICAgICAgICAgICAvLyB3ZSBiZXR0ZXIgd2Ugc2NoZWR1bGUgYWdhaW4uXG4gICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVzY2hlZHVsZSBmb3IgZGlzbWlzc2luZycpO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIHRpbWVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudW5kZXJseWluZ1NwaW5uZXIuaGlkZUFzeW5jKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5fZGlzbWlzc2luZ0RlbGF5KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2NoZWR1bGUgdG8gZGlzbWlzcyB0aGUgc3Bpbm5lclxuXG4gICAgICAgICAgICBpZiAodGhpcy5zcGlubmVyU3RhdGUpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdTY2hlZHVsZSBmb3IgZGlzbWlzc2luZycpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc2luZ1RpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzbWlzcyB0aGUgc3Bpbm5lciBcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudW5kZXJseWluZ1NwaW5uZXIuaGlkZUFzeW5jKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGlubmVyU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMuX2Rpc21pc3NpbmdEZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcHJlU2hvdygpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1NwaW5uZXIgcmVxdWVzdGVkIHRvIHNob3cnKTtcblxuICAgICAgICB0aGlzLl9yZWZlcmVuY2VDb3VudGVyKys7XG5cbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1JlZmVyZW5jZSBjb3VudGVyIGluIHNob3c6JyArIHRoaXMuX3JlZmVyZW5jZUNvdW50ZXIpO1xuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZSBhbHJlYWR5LCB1c2UgaXQuXG4gICAgICAgIGlmICh0aGlzLnNwaW5uZXJTdGF0ZSkge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnRXhpc3Rpbmcgc3Bpbm5lciB1c2VkJyk7XG5cbiAgICAgICAgICAgIC8vIEhvd2V2ZXIsIHdlIG5lZWQgdG8gY2FuY2VsIHRoZSBkaXNtaXNzIHRpbWVyLlxuICAgICAgICAgICAgLy8gSXQgaXMgc2FmZSwgYmVjYXVzZSB3ZSBleHBlY3QgdGhhdCBcImhpZGVcIiBpcyB0byBiZSBjYWxsZWRcbiAgICAgICAgICAgIC8vIHNvbWV0aW1lIGxhdGVyIGZyb20gdGhpcyBtb21lbnQgb24uXG4gICAgICAgICAgICBpZiAodGhpcy5fZGlzbWlzc2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnRGlzbWlzc2luZyB0aW1lciBjbGVhbmVkIDEnKTtcblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kaXNtaXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IHNjaGVkdWxlZCB0byBkaXNtaXNzIHRoZSBzcGlubmVyLFxuICAgICAgICAvLyB3ZSBqdXN0IG5lZWQgdG8gY2xlYXIgdGhlIHNjaGVkdWxlci5cbiAgICAgICAgLy8gUGxlYXNlIHJlZmVyIHRvIHRoZSBhYm92ZSBmb3IgdGhlIHJlYXNvbi5cbiAgICAgICAgaWYgKHRoaXMuX2Rpc21pc3NpbmdUaW1lcikge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnRGlzbWlzc2luZyB0aW1lciBjbGVhbmVkIDInKTtcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc21pc3NpbmdUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9kaXNtaXNzaW5nVGltZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IHNjaGVkdWxlZCB0byBzaG93IHRoZSBzcGlubmVyLCB3ZSBqdXN0XG4gICAgICAgIC8vIHVzZSB0aGlzIHNjaGVkdWxlLiBcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdUaW1lcikge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnQWxyZWFkeSBzY2hlZHVsZWQgdG8gc2hvdycpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHByZUhpZGUoKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdTcGlubmVyIHJlcXVlc3RlZCB0byBoaWRlJyk7XG5cbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQ291bnRlci0tO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdSZWZlcmVuY2UgY291bnRlciBpbiBoaWRlOicgKyB0aGlzLl9yZWZlcmVuY2VDb3VudGVyKTtcblxuICAgICAgICBpZiAodGhpcy5fcmVmZXJlbmNlQ291bnRlciA+IDApIHtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgc3Bpbm5lciBoYXMgbm90IGJlZW4gc2NoZWR1bGVkLlxuICAgICAgICBpZiAodGhpcy5fc2hvd2luZ1RpbWVyKSB7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdTaG93ZWQgdGltZXIgY2xlYW5lZCcpO1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd2luZ1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdUaW1lciA9IDA7XG5cbiAgICAgICAgICAgIC8vIERvbmVcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufVxuXG4iXX0=
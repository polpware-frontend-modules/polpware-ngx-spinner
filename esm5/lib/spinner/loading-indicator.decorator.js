import { __awaiter, __extends, __generator, __read, __spread } from "tslib";
export function loadingIndicatorDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.showLoadingIndicator = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (_a = this.spinner).show.apply(_a, __spread(args));
        };
        class_1.prototype.hideLoadingIndicator = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (_a = this.spinner).hide.apply(_a, __spread(args));
        };
        class_1.prototype.showLoadingIndicatorAsync = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, (_a = this.spinner).showAsync.apply(_a, __spread(args))];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        class_1.prototype.hideLoadingIndicatorAsync = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, (_a = this.spinner).hideAsync.apply(_a, __spread(args))];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        class_1.prototype.setLoadingIndicatorDelay = function (seconds) {
            this.spinner.setDelay(seconds);
        };
        return class_1;
    }(constructor));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXIvbG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFTQSxNQUFNLFVBQVUseUJBQXlCLENBQXFDLFdBQWM7SUFDeEY7UUFBcUIsMkJBQVc7UUFBekI7O1FBcUJQLENBQUM7UUFuQlUsc0NBQW9CLEdBQTNCOztZQUE0QixjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQ3RDLENBQUEsS0FBQSxJQUFJLENBQUMsT0FBTyxDQUFBLENBQUMsSUFBSSxvQkFBSSxJQUFJLEdBQUU7UUFDL0IsQ0FBQztRQUVNLHNDQUFvQixHQUEzQjs7WUFBNEIsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUN0QyxDQUFBLEtBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQSxDQUFDLElBQUksb0JBQUksSUFBSSxHQUFFO1FBQy9CLENBQUM7UUFFWSwyQ0FBeUIsR0FBdEM7WUFBdUMsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOzs7Ozs7Z0NBQzFDLHFCQUFNLENBQUEsS0FBQSxJQUFJLENBQUMsT0FBTyxDQUFBLENBQUMsU0FBUyxvQkFBSSxJQUFJLElBQUM7Z0NBQTVDLHNCQUFPLFNBQXFDLEVBQUM7Ozs7U0FDaEQ7UUFFWSwyQ0FBeUIsR0FBdEM7WUFBdUMsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOzs7Ozs7Z0NBQzFDLHFCQUFNLENBQUEsS0FBQSxJQUFJLENBQUMsT0FBTyxDQUFBLENBQUMsU0FBUyxvQkFBSSxJQUFJLElBQUM7Z0NBQTVDLHNCQUFPLFNBQXFDLEVBQUM7Ozs7U0FDaEQ7UUFFTSwwQ0FBd0IsR0FBL0IsVUFBZ0MsT0FBZTtZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0wsY0FBQztJQUFELENBQUMsQUFyQk0sQ0FBYyxXQUFXLEdBcUI5QjtBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTG9hZGluZ0luZGljYXRvciB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kaWNhdG9ycy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJU3Bpbm5lclNlcnZpY2UgfSBmcm9tICcuL3NwaW5uZXIuaW50ZXJmYWNlJztcclxuXHJcbmludGVyZmFjZSBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlIHtcclxuICAgIHNwaW5uZXI6IElTcGlubmVyU2VydmljZTtcclxufVxyXG5cclxudHlwZSBEZWNvcmF0b3JQcmVxdWlzaXRlQ2xhc3MgPSB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IElEZWNvcmF0b3JQcmVyZXF1aXNpdGUgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkaW5nSW5kaWNhdG9yRGVjb3JhdG9yPFQgZXh0ZW5kcyBEZWNvcmF0b3JQcmVxdWlzaXRlQ2xhc3M+KGNvbnN0cnVjdG9yOiBUKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciBpbXBsZW1lbnRzIElMb2FkaW5nSW5kaWNhdG9yIHtcclxuXHJcbiAgICAgICAgcHVibGljIHNob3dMb2FkaW5nSW5kaWNhdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lci5zaG93KC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGhpZGVMb2FkaW5nSW5kaWNhdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lci5oaWRlKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFzeW5jIHNob3dMb2FkaW5nSW5kaWNhdG9yQXN5bmMoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3Bpbm5lci5zaG93QXN5bmMoLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYXN5bmMgaGlkZUxvYWRpbmdJbmRpY2F0b3JBc3luYyguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zcGlubmVyLmhpZGVBc3luYyguLi5hcmdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRMb2FkaW5nSW5kaWNhdG9yRGVsYXkoc2Vjb25kczogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lci5zZXREZWxheShzZWNvbmRzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdfQ==
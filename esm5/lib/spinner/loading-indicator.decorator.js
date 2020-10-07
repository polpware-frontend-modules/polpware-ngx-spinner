import { __extends, __read, __spread } from "tslib";
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
            this.spinner.hide();
        };
        class_1.prototype.setLoadingIndicatorDelay = function (seconds) {
            this.spinner.setDelay(seconds);
        };
        return class_1;
    }(constructor));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXIvbG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFTQSxNQUFNLFVBQVUseUJBQXlCLENBQXFDLFdBQWM7SUFDeEY7UUFBcUIsMkJBQVc7UUFBekI7O1FBYVAsQ0FBQztRQVhVLHNDQUFvQixHQUEzQjs7WUFBNEIsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUN0QyxDQUFBLEtBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQSxDQUFDLElBQUksb0JBQUksSUFBSSxHQUFFO1FBQy9CLENBQUM7UUFFTSxzQ0FBb0IsR0FBM0I7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFFTSwwQ0FBd0IsR0FBL0IsVUFBZ0MsT0FBZTtZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0wsY0FBQztJQUFELENBQUMsQUFiTSxDQUFjLFdBQVcsR0FhOUI7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUxvYWRpbmdJbmRpY2F0b3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGljYXRvcnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSVNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLmludGVyZmFjZSc7XHJcblxyXG5pbnRlcmZhY2UgSURlY29yYXRvclByZXJlcXVpc2l0ZSB7XHJcbiAgICBzcGlubmVyOiBJU3Bpbm5lclNlcnZpY2U7XHJcbn1cclxuXHJcbnR5cGUgRGVjb3JhdG9yUHJlcXVpc2l0ZUNsYXNzID0geyBuZXcoLi4uYXJnczogYW55W10pOiBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZGluZ0luZGljYXRvckRlY29yYXRvcjxUIGV4dGVuZHMgRGVjb3JhdG9yUHJlcXVpc2l0ZUNsYXNzPihjb25zdHJ1Y3RvcjogVCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3IgaW1wbGVtZW50cyBJTG9hZGluZ0luZGljYXRvciB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaG93TG9hZGluZ0luZGljYXRvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5uZXIuc2hvdyguLi5hcmdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBoaWRlTG9hZGluZ0luZGljYXRvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGlubmVyLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRMb2FkaW5nSW5kaWNhdG9yRGVsYXkoc2Vjb25kczogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lci5zZXREZWxheShzZWNvbmRzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdfQ==
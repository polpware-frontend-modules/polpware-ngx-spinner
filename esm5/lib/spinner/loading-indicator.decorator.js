/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @record
 */
function IDecoratorPrerequisite() { }
if (false) {
    /** @type {?} */
    IDecoratorPrerequisite.prototype.spinner;
}
/**
 * @template T
 * @param {?} constructor
 * @return {?}
 */
export function loadingIndicatorDecorator(constructor) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {...?} args
         * @return {?}
         */
        class_1.prototype.showLoadingIndicator = /**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _a;
            (_a = this.spinner).show.apply(_a, tslib_1.__spread(args));
        };
        /**
         * @return {?}
         */
        class_1.prototype.hideLoadingIndicator = /**
         * @return {?}
         */
        function () {
            this.spinner.hide();
        };
        /**
         * @param {?} seconds
         * @return {?}
         */
        class_1.prototype.setLoadingIndicatorDelay = /**
         * @param {?} seconds
         * @return {?}
         */
        function (seconds) {
            this.spinner.setDelay(seconds);
        };
        return class_1;
    }(constructor));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXIvbG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EscUNBRUM7OztJQURHLHlDQUF5Qjs7Ozs7OztBQUs3QixNQUFNLFVBQVUseUJBQXlCLENBQXFDLFdBQWM7SUFDeEY7UUFBcUIsbUNBQVc7UUFBekI7O1FBYVAsQ0FBQzs7Ozs7UUFYVSxzQ0FBb0I7Ozs7UUFBM0I7WUFBNEIsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOzs7WUFDdEMsQ0FBQSxLQUFBLElBQUksQ0FBQyxPQUFPLENBQUEsQ0FBQyxJQUFJLDRCQUFJLElBQUksR0FBRTtRQUMvQixDQUFDOzs7O1FBRU0sc0NBQW9COzs7UUFBM0I7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBRU0sMENBQXdCOzs7O1FBQS9CLFVBQWdDLE9BQWU7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLEFBYk0sQ0FBYyxXQUFXLEdBYTlCO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRpY2F0b3JzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElTcGlubmVyU2VydmljZSB9IGZyb20gJy4vc3Bpbm5lci5pbnRlcmZhY2UnO1xyXG5cclxuaW50ZXJmYWNlIElEZWNvcmF0b3JQcmVyZXF1aXNpdGUge1xyXG4gICAgc3Bpbm5lcjogSVNwaW5uZXJTZXJ2aWNlO1xyXG59XHJcblxyXG50eXBlIERlY29yYXRvclByZXF1aXNpdGVDbGFzcyA9IHsgbmV3KC4uLmFyZ3M6IGFueVtdKTogSURlY29yYXRvclByZXJlcXVpc2l0ZSB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRpbmdJbmRpY2F0b3JEZWNvcmF0b3I8VCBleHRlbmRzIERlY29yYXRvclByZXF1aXNpdGVDbGFzcz4oY29uc3RydWN0b3I6IFQpIHtcclxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIGltcGxlbWVudHMgSUxvYWRpbmdJbmRpY2F0b3Ige1xyXG5cclxuICAgICAgICBwdWJsaWMgc2hvd0xvYWRpbmdJbmRpY2F0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICAgICAgdGhpcy5zcGlubmVyLnNob3coLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaGlkZUxvYWRpbmdJbmRpY2F0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0TG9hZGluZ0luZGljYXRvckRlbGF5KHNlY29uZHM6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5uZXIuc2V0RGVsYXkoc2Vjb25kcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iXX0=
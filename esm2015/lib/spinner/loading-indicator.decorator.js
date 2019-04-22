/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    return class extends constructor {
        /**
         * @param {...?} args
         * @return {?}
         */
        showLoadingIndicator(...args) {
            this.spinner.show(...args);
        }
        /**
         * @return {?}
         */
        hideLoadingIndicator() {
            this.spinner.hide();
        }
        /**
         * @param {?} seconds
         * @return {?}
         */
        setLoadingIndicatorDelay(seconds) {
            this.spinner.setDelay(seconds);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXIvbG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxxQ0FFQzs7O0lBREcseUNBQXlCOzs7Ozs7O0FBSzdCLE1BQU0sVUFBVSx5QkFBeUIsQ0FBcUMsV0FBYztJQUN4RixPQUFPLEtBQU0sU0FBUSxXQUFXOzs7OztRQUVyQixvQkFBb0IsQ0FBQyxHQUFHLElBQVc7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7O1FBRU0sb0JBQW9CO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFTSx3QkFBd0IsQ0FBQyxPQUFlO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FDSixDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRpY2F0b3JzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElTcGlubmVyU2VydmljZSB9IGZyb20gJy4vc3Bpbm5lci5pbnRlcmZhY2UnO1xyXG5cclxuaW50ZXJmYWNlIElEZWNvcmF0b3JQcmVyZXF1aXNpdGUge1xyXG4gICAgc3Bpbm5lcjogSVNwaW5uZXJTZXJ2aWNlO1xyXG59XHJcblxyXG50eXBlIERlY29yYXRvclByZXF1aXNpdGVDbGFzcyA9IHsgbmV3KC4uLmFyZ3M6IGFueVtdKTogSURlY29yYXRvclByZXJlcXVpc2l0ZSB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRpbmdJbmRpY2F0b3JEZWNvcmF0b3I8VCBleHRlbmRzIERlY29yYXRvclByZXF1aXNpdGVDbGFzcz4oY29uc3RydWN0b3I6IFQpIHtcclxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIGltcGxlbWVudHMgSUxvYWRpbmdJbmRpY2F0b3Ige1xyXG5cclxuICAgICAgICBwdWJsaWMgc2hvd0xvYWRpbmdJbmRpY2F0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICAgICAgdGhpcy5zcGlubmVyLnNob3coLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaGlkZUxvYWRpbmdJbmRpY2F0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0TG9hZGluZ0luZGljYXRvckRlbGF5KHNlY29uZHM6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5uZXIuc2V0RGVsYXkoc2Vjb25kcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iXX0=
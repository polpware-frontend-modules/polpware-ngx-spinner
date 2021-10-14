import { __awaiter } from "tslib";
export function loadingIndicatorDecorator(constructor) {
    return class extends constructor {
        showLoadingIndicator(...args) {
            this.spinner.show(...args);
        }
        hideLoadingIndicator(...args) {
            this.spinner.hide(...args);
        }
        showLoadingIndicatorAsync(...args) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.spinner.showAsync(...args);
            });
        }
        hideLoadingIndicatorAsync(...args) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.spinner.hideAsync(...args);
            });
        }
        setLoadingIndicatorDelay(seconds) {
            this.spinner.setDelay(seconds);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXIvbG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFTQSxNQUFNLFVBQVUseUJBQXlCLENBQXFDLFdBQWM7SUFDeEYsT0FBTyxLQUFNLFNBQVEsV0FBVztRQUVyQixvQkFBb0IsQ0FBQyxHQUFHLElBQVc7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRU0sb0JBQW9CLENBQUMsR0FBRyxJQUFXO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVZLHlCQUF5QixDQUFDLEdBQUcsSUFBVzs7Z0JBQ2pELE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ2pELENBQUM7U0FBQTtRQUVZLHlCQUF5QixDQUFDLEdBQUcsSUFBVzs7Z0JBQ2pELE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ2pELENBQUM7U0FBQTtRQUVNLHdCQUF3QixDQUFDLE9BQWU7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUxvYWRpbmdJbmRpY2F0b3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGljYXRvcnMuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSVNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLmludGVyZmFjZSc7XHJcblxyXG5pbnRlcmZhY2UgSURlY29yYXRvclByZXJlcXVpc2l0ZSB7XHJcbiAgICBzcGlubmVyOiBJU3Bpbm5lclNlcnZpY2U7XHJcbn1cclxuXHJcbnR5cGUgRGVjb3JhdG9yUHJlcXVpc2l0ZUNsYXNzID0geyBuZXcoLi4uYXJnczogYW55W10pOiBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZGluZ0luZGljYXRvckRlY29yYXRvcjxUIGV4dGVuZHMgRGVjb3JhdG9yUHJlcXVpc2l0ZUNsYXNzPihjb25zdHJ1Y3RvcjogVCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3IgaW1wbGVtZW50cyBJTG9hZGluZ0luZGljYXRvciB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaG93TG9hZGluZ0luZGljYXRvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5uZXIuc2hvdyguLi5hcmdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBoaWRlTG9hZGluZ0luZGljYXRvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5uZXIuaGlkZSguLi5hcmdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhc3luYyBzaG93TG9hZGluZ0luZGljYXRvckFzeW5jKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNwaW5uZXIuc2hvd0FzeW5jKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFzeW5jIGhpZGVMb2FkaW5nSW5kaWNhdG9yQXN5bmMoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3Bpbm5lci5oaWRlQXN5bmMoLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0TG9hZGluZ0luZGljYXRvckRlbGF5KHNlY29uZHM6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5uZXIuc2V0RGVsYXkoc2Vjb25kcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iXX0=
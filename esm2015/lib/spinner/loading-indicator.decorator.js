export function loadingIndicatorDecorator(constructor) {
    return class extends constructor {
        showLoadingIndicator(...args) {
            this.spinner.show(...args);
        }
        hideLoadingIndicator() {
            this.spinner.hide();
        }
        setLoadingIndicatorDelay(seconds) {
            this.spinner.setDelay(seconds);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXIvbG9hZGluZy1pbmRpY2F0b3IuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE1BQU0sVUFBVSx5QkFBeUIsQ0FBcUMsV0FBYztJQUN4RixPQUFPLEtBQU0sU0FBUSxXQUFXO1FBRXJCLG9CQUFvQixDQUFDLEdBQUcsSUFBVztZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFTSxvQkFBb0I7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBRU0sd0JBQXdCLENBQUMsT0FBZTtZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTG9hZGluZ0luZGljYXRvciB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kaWNhdG9ycy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJU3Bpbm5lclNlcnZpY2UgfSBmcm9tICcuL3NwaW5uZXIuaW50ZXJmYWNlJztcclxuXHJcbmludGVyZmFjZSBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlIHtcclxuICAgIHNwaW5uZXI6IElTcGlubmVyU2VydmljZTtcclxufVxyXG5cclxudHlwZSBEZWNvcmF0b3JQcmVxdWlzaXRlQ2xhc3MgPSB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IElEZWNvcmF0b3JQcmVyZXF1aXNpdGUgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkaW5nSW5kaWNhdG9yRGVjb3JhdG9yPFQgZXh0ZW5kcyBEZWNvcmF0b3JQcmVxdWlzaXRlQ2xhc3M+KGNvbnN0cnVjdG9yOiBUKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciBpbXBsZW1lbnRzIElMb2FkaW5nSW5kaWNhdG9yIHtcclxuXHJcbiAgICAgICAgcHVibGljIHNob3dMb2FkaW5nSW5kaWNhdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lci5zaG93KC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGhpZGVMb2FkaW5nSW5kaWNhdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5uZXIuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldExvYWRpbmdJbmRpY2F0b3JEZWxheShzZWNvbmRzOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGlubmVyLnNldERlbGF5KHNlY29uZHMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIl19
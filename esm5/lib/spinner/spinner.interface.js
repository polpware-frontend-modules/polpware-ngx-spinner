var NullSpinner = /** @class */ (function () {
    function NullSpinner() {
    }
    NullSpinner.prototype.show = function () { };
    NullSpinner.prototype.hide = function () { };
    NullSpinner.prototype.showAsync = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    NullSpinner.prototype.hideAsync = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    NullSpinner.prototype.setDelay = function (seconds) { };
    return NullSpinner;
}());
export { NullSpinner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci9zcGlubmVyLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtJQUFBO0lBY0EsQ0FBQztJQWJHLDBCQUFJLEdBQUosY0FBUyxDQUFDO0lBQ1YsMEJBQUksR0FBSixjQUFTLENBQUM7SUFDViwrQkFBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsK0JBQVMsR0FBVDtRQUNJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELDhCQUFRLEdBQVIsVUFBUyxPQUFlLElBQUksQ0FBQztJQUNqQyxrQkFBQztBQUFELENBQUMsQUFkRCxJQWNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJU3Bpbm5lclNlcnZpY2Uge1xyXG4gICAgc2hvdyguLi5hcmdzOiBhbnlbXSk6IHZvaWQ7XHJcbiAgICBoaWRlKC4uLmFyZ3M6IGFueVtdKTogdm9pZDtcclxuICAgIHNob3dBc3luYyguLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8YW55PjtcclxuICAgIGhpZGVBc3luYyguLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8YW55PjtcclxuICAgIHNldERlbGF5KHNlY29uZHM6IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOdWxsU3Bpbm5lciBpbXBsZW1lbnRzIElTcGlubmVyU2VydmljZSB7XHJcbiAgICBzaG93KCkgeyB9XHJcbiAgICBoaWRlKCkgeyB9XHJcbiAgICBzaG93QXN5bmMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGlkZUFzeW5jKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldERlbGF5KHNlY29uZHM6IG51bWJlcikgeyB9XHJcbn1cclxuIl19
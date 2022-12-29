export class NullSpinner {
    show(...args) { }
    hide(...args) { }
    showAsync(...args) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    hideAsync(...args) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    setDelay(seconds) { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtc3Bpbm5lci9zcmMvbGliL3NwaW5uZXIvc3Bpbm5lci5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsTUFBTSxPQUFPLFdBQVc7SUFDcEIsSUFBSSxDQUFDLEdBQUcsSUFBVyxJQUFJLENBQUM7SUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBVyxJQUFJLENBQUM7SUFDeEIsU0FBUyxDQUFDLEdBQUcsSUFBVztRQUNwQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFrQixDQUFDO0lBQ3hCLENBQUM7SUFDRCxTQUFTLENBQUMsR0FBRyxJQUFXO1FBQ3BCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQWtCLENBQUM7SUFDeEIsQ0FBQztJQUNELFFBQVEsQ0FBQyxPQUFlLElBQUksQ0FBQztDQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSVNwaW5uZXJTZXJ2aWNlIHtcclxuICAgIHNob3coLi4uYXJnczogYW55W10pOiB2b2lkO1xyXG4gICAgaGlkZSguLi5hcmdzOiBhbnlbXSk6IHZvaWQ7XHJcbiAgICBzaG93QXN5bmMoLi4uYXJnczogYW55W10pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgaGlkZUFzeW5jKC4uLmFyZ3M6IGFueVtdKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldERlbGF5KHNlY29uZHM6IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOdWxsU3Bpbm5lciBpbXBsZW1lbnRzIElTcGlubmVyU2VydmljZSB7XHJcbiAgICBzaG93KC4uLmFyZ3M6IGFueVtdKSB7IH1cclxuICAgIGhpZGUoLi4uYXJnczogYW55W10pIHsgfVxyXG4gICAgc2hvd0FzeW5jKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pIGFzIFByb21pc2U8dm9pZD47XHJcbiAgICB9XHJcbiAgICBoaWRlQXN5bmMoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSkgYXMgUHJvbWlzZTx2b2lkPjtcclxuICAgIH1cclxuICAgIHNldERlbGF5KHNlY29uZHM6IG51bWJlcikgeyB9XHJcbn1cclxuIl19
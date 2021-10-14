export interface ILoadingIndicator {
    showLoadingIndicator(...args: any[]): void;
    hideLoadingIndicator(...args: any[]): void;
    showLoadingIndicatorAsync(...args: any[]): Promise<any>;
    hideLoadingIndicatorAsync(...args: any[]): Promise<any>;
    setLoadingIndicatorDelay(seconds: number): any;
}
export interface IRefreshingIndicator {
    showRefreshingIndicator(...args: any[]): void;
    hideRefreshingIndicator(...args: any[]): void;
    showRefreshingIndicatorAsync(...args: any[]): Promise<any>;
    hideRefreshingIndicatorAsync(...args: any[]): Promise<any>;
}
export interface ILoadingMoreIndicator {
    showMoreLoading(...args: any[]): void;
    hideMoreLoading(...args: any[]): void;
    showMoreLoadingAsync(...args: any[]): Promise<any>;
    hideMoreLoadingAsync(...args: any[]): Promise<any>;
}

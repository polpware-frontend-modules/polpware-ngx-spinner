import { INgxLogger } from '@polpware/ngx-logger';

interface ISpinnerService {
    show(...args: any[]): void;
    hide(...args: any[]): void;
    showAsync(...args: any[]): Promise<void>;
    hideAsync(...args: any[]): Promise<void>;
    setDelay(seconds: number): void;
}
declare class NullSpinner implements ISpinnerService {
    show(...args: any[]): void;
    hide(...args: any[]): void;
    showAsync(...args: any[]): Promise<void>;
    hideAsync(...args: any[]): Promise<void>;
    setDelay(seconds: number): void;
}

interface IDecoratorPrerequisite {
    spinner: ISpinnerService;
}
type DecoratorPrequisiteClass = {
    new (...args: any[]): IDecoratorPrerequisite;
};
declare function loadingIndicatorDecorator<T extends DecoratorPrequisiteClass>(constructor: T): {
    new (...args: any[]): {
        showLoadingIndicator(...args: any[]): void;
        hideLoadingIndicator(...args: any[]): void;
        setLoadingIndicatorDelay(seconds: number): void;
        spinner: ISpinnerService;
    };
} & T;

interface ILoadingIndicator {
    showLoadingIndicator(...args: any[]): void;
    hideLoadingIndicator(...args: any[]): void;
    setLoadingIndicatorDelay(seconds: number): any;
}
interface IRefreshingIndicator {
    showRefreshingIndicator(...args: any[]): void;
    hideRefreshingIndicator(...args: any[]): void;
}
interface ILoadingMoreIndicator {
    showMoreLoading(...args: any[]): void;
    hideMoreLoading(...args: any[]): void;
}

interface IUnderlyingSpinner {
    show?(...args: any[]): void;
    hide?(...args: any[]): void;
    showAsync?(...args: any[]): Promise<any>;
    hideAsync?(...args: any[]): Promise<any>;
}
declare const PRIMARY_SPINNER = "primary";
declare abstract class SpinnerServiceBase implements ISpinnerService {
    protected underlyingSpinner: IUnderlyingSpinner;
    protected logger: INgxLogger;
    private _showingTimer;
    private _showingDelay;
    private _dismissingDelay;
    private _dismissingTimer;
    protected spinnerState: boolean;
    private _referenceCounter;
    constructor();
    setDelay(seconds: number): void;
    setDismissDelay(seconds: number): void;
    show(...args: any[]): void;
    hide(...args: any[]): void;
    showAsync(...args: any[]): Promise<void>;
    hideAsync(...args: any[]): Promise<void>;
    protected preShow(): boolean;
    protected preHide(): boolean;
}

interface ISpinnerServiceExt extends ISpinnerService {
    startToListenSpinner(...args: any[]): void;
    stopListener(...args: any[]): void;
}
declare class NullSpinnerExt extends NullSpinner implements ISpinnerServiceExt {
    startToListenSpinner(...args: any[]): void;
    stopListener(...args: any[]): void;
}
declare class SpinnerProviderImpl {
    private readonly _impl;
    constructor();
    get(key: string): ISpinnerServiceExt;
}

export { NullSpinner, NullSpinnerExt, PRIMARY_SPINNER, SpinnerProviderImpl, SpinnerServiceBase, loadingIndicatorDecorator };
export type { ILoadingIndicator, ILoadingMoreIndicator, IRefreshingIndicator, ISpinnerService, ISpinnerServiceExt, IUnderlyingSpinner };

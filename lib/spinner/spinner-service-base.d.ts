import { INgxLogger } from '@polpware/ngx-logger';
import { ISpinnerService } from './spinner.interface';
export interface IUnderlyingSpinner {
    show?(...args: any[]): void;
    hide?(...args: any[]): void;
    showAsync?(...args: any[]): Promise<any>;
    hideAsync?(...args: any[]): Promise<any>;
}
export declare const PRIMARY_SPINNER = "primary";
export declare abstract class SpinnerServiceBase implements ISpinnerService {
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
    protected preShow(): boolean;
    protected preHide(): boolean;
}

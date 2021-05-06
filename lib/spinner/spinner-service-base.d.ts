import { INgxLogger } from '@polpware/ngx-logger';
import { ISpinnerService } from './spinner.interface';
export interface IUnderlyingSpinner {
    show(name?: any): any;
    hide(name?: any): any;
}
export declare abstract class SpinnerServiceBase implements ISpinnerService {
    protected underlyingSpinner: IUnderlyingSpinner;
    protected logger: INgxLogger;
    private _showingTimer;
    private _showingDelay;
    private _dismissingTimer;
    protected spinnerState: boolean;
    private _referenceCounter;
    constructor();
    setDelay(seconds: number): void;
    show(title?: string, name?: string): void;
    hide(name?: string): void;
}

import { NgxSpinnerService } from 'ngx-spinner';
import { ISpinnerService } from './spinner.interface';
export declare class SpinnerServiceImpl implements ISpinnerService {
    private readonly _underlyingSpinner;
    private _showingTimer;
    private _showingDelay;
    private _dismissingTimer;
    private _spinnerState;
    private _referenceCounter;
    constructor(_underlyingSpinner: NgxSpinnerService);
    startToListenSpinner(name?: string): void;
    setDelay(seconds: number): void;
    show(title?: string, name?: string): void;
    hide(name?: string): void;
}

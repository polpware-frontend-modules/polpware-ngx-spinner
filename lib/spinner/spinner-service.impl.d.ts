import { NgxSpinnerService } from 'ngx-spinner';
import { ISpinnerService } from './spinner.interface';
export declare class SpinnerServiceImpl implements ISpinnerService {
    private _underlyingSpinner;
    private _showingTimer;
    private _showingDelay;
    private _dismissingTimer;
    private _spinnerState;
    constructor(_underlyingSpinner: NgxSpinnerService);
    setDelay(seconds: number): void;
    show(title?: string): void;
    hide(): void;
}

import { NgxSpinnerService } from 'ngx-spinner';
import { ISpinnerService } from './spinner.interface';
import * as i0 from "@angular/core";
export declare class SpinnerServiceImpl implements ISpinnerService {
    private readonly _underlyingSpinner;
    private _showingTimer;
    private _showingDelay;
    private _dismissingTimer;
    private _spinnerState;
    private _referenceCounter;
    private _subr;
    constructor(_underlyingSpinner: NgxSpinnerService);
    startToListenSpinner(name?: string): void;
    stopListener(name?: string): void;
    setDelay(seconds: number): void;
    show(title?: string, name?: string): void;
    hide(name?: string): void;
    static ɵfac: i0.ɵɵFactoryDef<SpinnerServiceImpl, never>;
    static ɵprov: i0.ɵɵInjectableDef<SpinnerServiceImpl>;
}

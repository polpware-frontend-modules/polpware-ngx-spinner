import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerServiceBase } from './spinner-service-base';
import * as i0 from "@angular/core";
export declare class SpinnerServiceImpl extends SpinnerServiceBase {
    protected readonly underlyingSpinner: NgxSpinnerService;
    private _subr;
    constructor(underlyingSpinner: NgxSpinnerService);
    startToListenSpinner(name?: string): void;
    stopListener(name?: string): void;
    static ɵfac: i0.ɵɵFactoryDef<SpinnerServiceImpl, never>;
    static ɵprov: i0.ɵɵInjectableDef<SpinnerServiceImpl>;
}

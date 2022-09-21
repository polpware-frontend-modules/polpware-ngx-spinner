import { LoggerProviderImpl } from '@polpware/ngx-logger';
import { SpinnerServiceBase } from './spinner-service-base';
import * as i0 from "@angular/core";
export declare class SpinnerPlaceholderService extends SpinnerServiceBase {
    constructor(loggerProvider: LoggerProviderImpl);
    startToListenSpinner(...args: any[]): void;
    stopListener(...args: any[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpinnerPlaceholderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SpinnerPlaceholderService>;
}

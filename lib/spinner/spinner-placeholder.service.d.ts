import { LoggerProviderImpl } from '@polpware/ngx-logger';
import { SpinnerServiceBase } from './spinner-service-base';
export declare class SpinnerPlaceholderService extends SpinnerServiceBase {
    constructor(loggerProvider: LoggerProviderImpl);
    startToListenSpinner(...args: any[]): void;
    stopListener(...args: any[]): void;
}

import { ISpinnerService, NullSpinner } from './spinner.interface';
export interface ISpinnerServiceExt extends ISpinnerService {
    startToListenSpinner(...args: any[]): void;
    stopListener(...args: any[]): void;
}
export declare class NullSpinnerExt extends NullSpinner implements ISpinnerServiceExt {
    startToListenSpinner(...args: any[]): void;
    stopListener(...args: any[]): void;
}
export declare class SpinnerProviderImpl {
    private readonly _impl;
    constructor();
    get(key: string): ISpinnerServiceExt;
}

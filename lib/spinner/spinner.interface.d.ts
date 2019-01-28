export interface ISpinnerService {
    show(...args: any[]): any;
    hide(...args: any[]): any;
    setDelay(seconds: number): any;
}
export declare class NullSpinner implements ISpinnerService {
    show(): void;
    hide(): void;
    setDelay(seconds: number): void;
}

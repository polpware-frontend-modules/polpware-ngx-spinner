export interface ISpinnerService {
    show(...args: any[]): void;
    hide(...args: any[]): void;
    showAsync(...args: any[]): Promise<any>;
    hideAsync(...args: any[]): Promise<any>;
    setDelay(seconds: number): void;
}
export declare class NullSpinner implements ISpinnerService {
    show(): void;
    hide(): void;
    showAsync(): Promise<unknown>;
    hideAsync(): Promise<unknown>;
    setDelay(seconds: number): void;
}

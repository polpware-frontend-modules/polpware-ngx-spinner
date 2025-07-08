export interface ISpinnerService {
    show(...args: any[]): void;
    hide(...args: any[]): void;
    showAsync(...args: any[]): Promise<void>;
    hideAsync(...args: any[]): Promise<void>;
    setDelay(seconds: number): void;
}
export declare class NullSpinner implements ISpinnerService {
    show(...args: any[]): void;
    hide(...args: any[]): void;
    showAsync(...args: any[]): Promise<void>;
    hideAsync(...args: any[]): Promise<void>;
    setDelay(seconds: number): void;
}

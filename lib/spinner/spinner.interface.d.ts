export interface ISpinnerService {
    show(...args: any[]): void;
    hide(...args: any[]): void;
    setDelay(seconds: number): void;
}
export declare class NullSpinner implements ISpinnerService {
    show(): void;
    hide(): void;
    setDelay(seconds: number): void;
}

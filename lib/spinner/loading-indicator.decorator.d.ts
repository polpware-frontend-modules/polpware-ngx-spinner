import { ISpinnerService } from './spinner.interface';
interface IDecoratorPrerequisite {
    spinner: ISpinnerService;
}
declare type DecoratorPrequisiteClass = {
    new (...args: any[]): IDecoratorPrerequisite;
};
export declare function loadingIndicatorDecorator<T extends DecoratorPrequisiteClass>(constructor: T): {
    new (...args: any[]): {
        showLoadingIndicator(...args: any[]): void;
        hideLoadingIndicator(...args: any[]): void;
        setLoadingIndicatorDelay(seconds: number): void;
        spinner: ISpinnerService;
    };
} & T;
export {};

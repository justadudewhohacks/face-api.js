export declare class ComposableTask<T> {
    then(onfulfilled: (value: T) => T | PromiseLike<T>): Promise<T>;
    run(): Promise<T>;
}

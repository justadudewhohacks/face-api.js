export declare type WithAge<TSource> = TSource & {
    age: number;
};
export declare function isWithAge(obj: any): obj is WithAge<{}>;
export declare function extendWithAge<TSource>(sourceObj: TSource, age: number): WithAge<TSource>;

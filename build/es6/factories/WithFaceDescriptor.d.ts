export declare type WithFaceDescriptor<TSource> = TSource & {
    descriptor: Float32Array;
};
export declare function extendWithFaceDescriptor<TSource>(sourceObj: TSource, descriptor: Float32Array): WithFaceDescriptor<TSource>;

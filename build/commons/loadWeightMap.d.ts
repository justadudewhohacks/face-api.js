export declare function getModelUris(uri: string | undefined, defaultModelName: string): {
    modelBaseUri: string;
    manifestUri: string;
};
export declare function loadWeightMap(uri: string | undefined, defaultModelName: string): Promise<any>;

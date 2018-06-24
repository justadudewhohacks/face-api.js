export declare function getModelUris(uri: string | undefined, defaultModelName: string): {
    manifestUri: string;
    modelBaseUri: string;
};
export declare function loadWeightMap(uri: string | undefined, defaultModelName: string): Promise<any>;

export function loadConvParamsFactory(extractWeightEntry) {
    return function (prefix) {
        var filters = extractWeightEntry(prefix + "/filters", 4);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return { filters: filters, bias: bias };
    };
}
//# sourceMappingURL=loadConvParamsFactory.js.map
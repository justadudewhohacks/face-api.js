export function isWithAge(obj) {
    return typeof obj['age'] === 'number';
}
export function extendWithAge(sourceObj, age) {
    var extension = { age: age };
    return Object.assign({}, sourceObj, extension);
}
//# sourceMappingURL=WithAge.js.map
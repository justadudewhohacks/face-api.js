"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var baseDir = path.resolve(__dirname, '../out');
function saveFile(fileName, buf) {
    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir);
    }
    fs.writeFileSync(path.resolve(baseDir, fileName), buf);
}
exports.saveFile = saveFile;

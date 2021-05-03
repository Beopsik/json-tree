"use strict";
exports.__esModule = true;
exports.dfs = exports.makeFolder = void 0;
var comp = require('./sample_component.json');
var fs = require('fs');
/*import comp from './sample_component.json';
import fs from 'fs';*/
var directory = './' + comp.directory + '/src/components';
var str1 = 'const ';
var str2 = ' = () => { \n return <div>';
var str3 = '</div>; \n};\n\n';
var makeFolder = function () {
    if (!fs.existsSync(directory))
        fs.mkdirSync(directory);
};
exports.makeFolder = makeFolder;
function FileSystem(path, str) {
    try {
        fs.appendFileSync(path, str);
    }
    catch (err) {
        console.log(err);
    }
}
function dfs(component) {
    FileSystem(directory + '/' + component.name + '.js', 'import React from \'react\';\n');
    for (var i in component.children) {
        var next = component.children[i];
        console.log(next.name);
        FileSystem(directory + '/' + component.name + '.js', 'import ' + next.name + ' from \'' + './' + next.name + '\';\n');
        dfs(next);
    }
    FileSystem(directory + '/' + component.name + '.js', '\n' + str1 + component.name + str2 + component.name + str3);
    FileSystem(directory + '/' + component.name + '.js', 'export default ' + component.name + ';\n');
}
exports.dfs = dfs;

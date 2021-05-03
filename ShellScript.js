"use strict";
exports.__esModule = true;
exports.ShellScript = void 0;
//import comp from './sample_component.json';
//import shell from 'shelljs';
var comp = require('./sample_component.json');
var shell = require('shelljs');
var ShellScript = function () {
    shell.exec('npx create-react-app ' + comp.directory);
};
exports.ShellScript = ShellScript;

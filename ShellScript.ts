//import comp from './sample_component.json';
//import shell from 'shelljs';
const comp = require('./sample_component.json');
const shell = require('shelljs');


export const ShellScript = () => {
    shell.exec('npx create-react-app ' + comp.directory);
}
//const comp = require('./component.json');
//let fs = require('fs');

import comp from './sample_component.json';
import fs from 'fs';

let directory: string = comp.directory;
let str1: string = 'const ';
let str2: string = ' = () => { \n return <div>';
let str3: string = '</div>; \n};\n\n';

function FileSystem(path: string, str: string) {
    try {
        fs.appendFileSync(path, str)
    } catch (err) {
        console.log(err);
    }
}

export function dfs(component: any) {
    FileSystem('./' + directory + '/src/components/' + component.name + '.js', 'import React from \'react\';\n');

    for (let i in component.children) {
        let next: any = component.children[i];
        console.log(next.name);
        FileSystem('./' + directory + '/src/components/' + component.name + '.js', 'import ' + next.name + ' from \'' + './' + next.name + '\';\n');
        dfs(next);
    }

    FileSystem('./' + directory + '/src/components/' + component.name + '.js', '\n' + str1 + component.name + str2 + component.name + str3);
    FileSystem('./' + directory + '/src/components/' + component.name + '.js', 'export default ' + component.name + ';\n');
}


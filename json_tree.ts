const comp = require('./component.json');

let fs = require('fs');
let str1: string = 'const ';
let str2: string = ' = () => { \n return <div>';
let str3: string = '</div>; \n};\n\n';

function FileSystem(path: string, str: string) {
    fs.appendFileSync(path, str, function (err) {
        if (err)
            console.log('fail');
    })
}

function dfs(component: any) {
    FileSystem('./' + component.name + '.js', 'import React from \'react\';\n');

    for (let i in component.children) {
        let next: any = component.children[i];
        console.log(next.name);
        FileSystem('./' + component.name + '.js', 'import ' + next.name + ' from \'' + './' + next.name + '\';\n');
        dfs(next);
    }

    FileSystem('./' + component.name + '.js', '\n' + str1 + component.name + str2 + component.name + str3);
    FileSystem('./' + component.name + '.js', 'export default ' + component.name + ';\n');
}
dfs(comp);


const comp = require('./component.json');

let fs = require('fs').promises;
let str1: string = 'const ';
let str2: string = ' = () => { \n return <div>';
let str3: string = '</div>; \n};\n\n';

async function dfs(component: any, level: number) {
    //console.log(level + ":" + component.name);
    await fs.appendFile('./' + component.name + '.js', 'import React from \'react\';\n', function (err) {
        if (err)
            console.log('fail');
    })
    level++;

    for (let i in component.children) {
        let next: any = component.children[i];
        console.log(next.name);
        fs.appendFile('./' + component.name + '.js', 'import ' + next.name + ' from \'' + './' + next.name + '\';\n', function (err) {
            if (err)
                console.log('fail');
        })
        dfs(next, level);
    }

    await fs.appendFile('./' + component.name + '.js', '\n' + str1 + component.name + str2 + component.name + str3, function (err) {
        if (err)
            console.log('fail');
    })
    fs.appendFile('./' + component.name + '.js', 'export default ' + component.name + ';\n', function (err) {
        if (err)
            console.log('fail');
    })
}
let level: number = 1;
dfs(comp, level);


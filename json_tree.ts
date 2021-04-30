const comp = require('./component.json');

let fs = require('fs');

function dfs(component: any, level: number) {
    console.log(level + ":" + component.name);
    fs.appendFile('./' + component.name + '.js', 'import React from \'react\';\n', function (err) {
        if (err == null)
            console.log('success');
        else
            console.log('fail');
    })
    level++;
    for (let i in component.children) {
        let next: any = component.children[i];
        console.log(next.name);
        fs.appendFile('./' + component.name + '.js', 'import  from \'' + './' + next.name + '\';\n', function (err) {
            if (err == null)
                console.log('success');
            else
                console.log('fail');
        })
        //console.log(next);
        dfs(next, level);
    }
}
let level: number = 1;
dfs(comp, level);


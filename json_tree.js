var comp = require('./component.json');
var fs = require('fs');
function dfs(component, level) {
    console.log(level + ":" + component.name);
    fs.appendFile('./' + component.name + '.js', 'import React from \'react\';\n', function (err) {
        if (err == null)
            console.log('success');
        else
            console.log('fail');
    });
    level++;
    for (var i in component.children) {
        var next = component.children[i];
        console.log(next.name);
        fs.appendFile('./' + component.name + '.js', 'import  from \'' + './' + next.name + '\';\n', function (err) {
            if (err == null)
                console.log('success');
            else
                console.log('fail');
        });
        //console.log(next);
        dfs(next, level);
    }
}
var level = 1;
dfs(comp, level);

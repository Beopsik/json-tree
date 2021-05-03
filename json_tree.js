var comp = require('./component.json');
var fs = require('fs');
var str1 = 'const ';
var str2 = ' = () => { \n return <div>';
var str3 = '</div>; \n};\n\n';
function FileSystem(path, str) {
    fs.appendFileSync(path, str, function (err) {
        if (err)
            console.log('fail');
    });
}
function dfs(component) {
    FileSystem('./' + component.name + '.js', 'import React from \'react\';\n');
    for (var i in component.children) {
        var next = component.children[i];
        console.log(next.name);
        FileSystem('./' + component.name + '.js', 'import ' + next.name + ' from \'' + './' + next.name + '\';\n');
        dfs(next);
    }
    FileSystem('./' + component.name + '.js', '\n' + str1 + component.name + str2 + component.name + str3);
    FileSystem('./' + component.name + '.js', 'export default ' + component.name + ';\n');
}
dfs(comp);

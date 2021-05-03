//import comp from './sample_component.json';
const comp = require('./sample_component.json');
import { ShellScript } from './ShellScript';
import { dfs } from "./json_tree";
import { makeFolder } from "./json_tree";

ShellScript();
makeFolder();
dfs(comp.data);
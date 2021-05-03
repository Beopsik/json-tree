import comp from './sample_component.json';
import { ShellScript } from './ShellScript';
import { dfs } from "./json_tree";

ShellScript();
dfs(comp.data);
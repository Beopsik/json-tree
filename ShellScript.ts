import comp from './sample_component.json';
import shell from 'shelljs';

export const ShellScript = () => {
    shell.exec('npx create-react-app' + comp.directory);
}
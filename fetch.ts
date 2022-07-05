import { existsSync, mkdirSync } from 'fs';
import Fetcher from "./fetcher";
import projects from './packages/index';

const BUILD_DIR = 'build';
const argv = process.argv.slice(2);

// ---------------------------------------------------------

const fetcher = new Fetcher(projects);

if (!existsSync(BUILD_DIR)) {
	mkdirSync(BUILD_DIR);
}
process.chdir(BUILD_DIR);

let projectsToBuild;
if (argv.length > 0) {
    projectsToBuild = argv;
} else {
    projectsToBuild = projects.defaults;
}

if (!projectsToBuild || projectsToBuild.length === 0) {
    console.log('no input projects given; aborting execution');
    process.exit();
}

for (const project of projectsToBuild) {
    console.log(`===== building project ${ project } =====`);
    fetcher.buildProject(project);
    console.log('==========\n');
}


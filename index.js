
// ---------------------------------------------------------
// module imports

const { existsSync, mkdirSync } = require('fs');
const Fetcher = require('./fetcher');

const BUILD_DIR = 'build';
const projects = require('./projects');

// ---------------------------------------------------------
// application code

const fetcher = new Fetcher(projects);

if (!existsSync(BUILD_DIR)) {
	mkdirSync(BUILD_DIR);
}
process.chdir(BUILD_DIR);

const argv = process.argv.slice(2);

let projectsToBuild;
if (argv.length > 0) {
	projectsToBuild = argv;
} else {
	projectsToBuild = projects.defaults;
}

projectsToBuild = projectsToBuild.filter(project => project in projects);
projectsToBuild.forEach((project) => {
	console.log(`===== building project ${ project } =====`);
	fetcher.buildProject(project, projects[project]);
	console.log('==========\n');
});



const path = require('path');
const { existsSync, mkdirSync } = require('fs');
const { execSync } = require('child_process');

const BUILD_DIR = 'build';
const projects = require('./projects')

const globalDir = process.env.npm_config_prefix;
const defaultCacheDir = process.env.npm_config_cache;


/* ----------------------------------------------------
---------------------------------------------------- */

moveToBuildDir();

const isolateMode = projects.isolate;

let projectsToBuild = projects.defaults;
for (let project of projectsToBuild) {
	if (project in projects) {

		let obj = projects[project];

		console.log(`===== building project ${ project } =====`)
		if (obj.global) {
			buildGlobalProject(project, obj);
		} else {
			buildProject(project, obj);
		}
		console.log('==========\n');

	}
}

/* ----------------------------------------------------
---------------------------------------------------- */

function exec (cmd) {
	console.log(cmd);
	let out = execSync(cmd);
	// console.log(out);
}

function forceDir (dirname) {
	if (!existsSync(dirname)) {
		mkdirSync(dirname);
	}
}

function moveToBuildDir () {
	forceDir(BUILD_DIR);
	process.chdir(BUILD_DIR);
}

function setupCacheDir (cachePath) {
	cachePath = !path.isAbsolute(cachePath) ? path.resolve(cachePath) : cachePath;
	console.log(`setting '${ cachePath }' as cache directory`);
	forceDir(cachePath);
	process.env.npm_config_cache = cachePath;
}

function setupPrefixDir (dirname) {
	let dirToInstall = !path.isAbsolute(dirname) ? path.join(globalDir, dirname) : dirname;
	console.log(`setting '${ dirToInstall }' as global application directory`);
	forceDir(dirToInstall);
	process.env.npm_config_prefix = dirToInstall;
}

function prepareDirectory (dirname, isolate) {
	forceDir(dirname);
	process.chdir(dirname);

	if (isolate) {
		setupCacheDir('_cache');

		let prefixDir = path.join(process.cwd(), '_prefix');
		setupPrefixDir(prefixDir);
	}

	exec('npm init -f');
}

function buildProject (name, project) {
	prepareDirectory(name, project.isolate || isolateMode);

	if (project.mergeInstall) {
		exec(`npm i --save ${ project.packages.join(' ') }`);
		if (project.devPackages) {
			exec(`npm i --save-dev ${ project.devPackages.join(' ') }`);
		}
	}
	else {

	// -----------
	for (let package of project.packages) {
		exec(`npm i --save ${ package }`);
	}

	if (project.devPackages) {
		for (let package of project.devPackages) {
			exec(`npm i --save-dev ${ package }`);
		}
	}
	// -----------

	}

	process.chdir('..');
}

function buildGlobalProject (name, project) {
	if (project.isolate || isolateMode) {
		prepareDirectory(name, true);
	} else {
		setupPrefixDir( project.path || name );
	}
	exec(`npm i -g ${ project.package }`);

	if (project.postCommand) {
		process.env.PATH = `${process.env.npm_config_prefix};${process.env.PATH}`;
		exec(`${ project.postCommand }`);
	}

	process.env.npm_config_prefix = globalDir;
}


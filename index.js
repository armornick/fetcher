
const path = require('path');
const { existsSync, mkdirSync } = require('fs');
const { execSync } = require('child_process');

const BUILD_DIR = 'build';
const projects = require('./projects')

const globalDir = process.env.npm_config_prefix;
const defaultCacheDir = process.env.npm_config_cache;


/* ----------------------------------------------------
---------------------------------------------------- */

if (projects.cacheDir && projects.cacheDir.trim() != '') {
	setupCacheDir(projects.cacheDir);
}
moveToBuildDir();

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

function prepareDirectory (dirname) {
	forceDir(dirname);
	process.chdir(dirname);
	exec('npm init -f');
}

function buildProject (name, project) {
	prepareDirectory(name);

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

function setupGlobalDir (dirname) {
	let dirToInstall = path.join(globalDir, dirname);
	console.log(`setting '${ dirToInstall }' as global application directory`);
	forceDir(dirToInstall);
	process.env.npm_config_prefix = dirToInstall;
}

function buildGlobalProject (name, project) {
	setupGlobalDir( project.path || name );
	exec(`npm i -g ${ project.package }`);
	process.env.npm_config_prefix = globalDir;
}

function setupCacheDir (cachePath) {
	cachePath = !path.isAbsolute(cachePath) ? path.resolve(cachePath) : cachePath;
	console.log(`setting '${ cachePath }' as cache directory`);
	forceDir(cachePath);
	process.env.npm_config_cache = cachePath;
}

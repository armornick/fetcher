
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
		console.log(`===== building project ${ project } =====`)
		let obj = projects[project];
		buildProject(project, obj);
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

function moveToDir(dirname) {
	forceDir(dirname);
	process.chdir(dirname);
}

function moveToBuildDir () {
	moveToDir(BUILD_DIR);
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

function prepareDirectory (dirname, isolate, topCache) {
	moveToDir(dirname);
	if (isolate) {
		if (!topCache) {
			setupCacheDir('_cache');
		}
		let prefixDir = path.join(process.cwd(), '_prefix');
		setupPrefixDir(prefixDir);
	}

	exec('npm init -f');
}

function performMergedInstall(project) {
	if (project.packages) {
		exec(`npm i --save ${ project.packages.join(' ') }`);
	}
	if (project.devPackages) {
		exec(`npm i --save-dev ${ project.devPackages.join(' ') }`);
	}
}

function performMultiInstall(project) {
	if (project.packages) {
		for (let package of project.packages) {
			exec(`npm i --save ${ package }`);
		}
	}
	if (project.devPackages) {
		for (let package of project.devPackages) {
			exec(`npm i --save-dev ${ package }`);
		}
	}
}

function performGlobalInstall(project) {
	exec(`npm i -g ${ project.package }`);

	if (project.postCommand) {
		process.env.PATH = `${process.env.npm_config_prefix};${process.env.PATH}`;
		exec(`${ project.postCommand }`);
	}
	if (project.postCommands) {
		process.env.PATH = `${process.env.npm_config_prefix};${process.env.PATH}`;
		for (let cmd of project.postCommands) {
			exec(`${ cmd }`);
		}
	}

	process.env.npm_config_prefix = globalDir;
}

function performNpxInstall(project) {
	let cmd = project.npx;
	if (!cmd.startsWith('npx ')) {
		cmd = 'npx ' + cmd;
	}
	exec(cmd);

	if (project.install) {
		process.chdir(project.install);
		exec('npm install');
		process.chdir('..');
	}
}

function performCommandInstall(project) {
	let cmd = project.command;
	exec(cmd);

	if (project.install) {
		process.chdir(project.install);
		exec('npm install');
		process.chdir('..');
	}
}

function performInstall(project) {
	if (project.global) {
		performGlobalInstall(project);
		return;
	}
	if (project.npx) {
		performNpxInstall(project);
		return;
	}
	if (project.command) {
		performCommandInstall(project);
		return;
	}
	if (project.mergeInstall) {
		performMergedInstall(project);
	}
	else {
		performMultiInstall(project);
	}
}

function buildProject (name, project, topCache) {
	topCache = project.topCache || topCache;
	if (project.packages || project.devPackages || project.package 
		|| project.depends || project.npx || project.command) {
		prepareDirectory(name, project.isolate || isolateMode, topCache);
		performInstall(project);
	} else {
		moveToDir(name);
		if (project.topCache) {
			setupCacheDir('_cache');
		}
	}
	if (project.subs) {
		for (let sub of project.subs) {
			if (sub in projects) {
				let subproject = projects[sub];
				buildProject(sub, subproject, topCache);
			}
		}
	}
	if (project.depends) {
		for (let dep of project.depends) {
			if (dep in projects) {
				let dependency = projects[dep];
				performInstall(dependency);
			}
		}
	}
	process.chdir('..');
}




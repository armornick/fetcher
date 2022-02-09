
// ---------------------------------------------------------
// module imports

const path = require('path');
const { existsSync, mkdirSync } = require('fs');
const { execSync } = require('child_process');

const globalDir = process.env.npm_config_prefix;
const defaultCacheDir = process.env.npm_config_cache;

// ---------------------------------------------------------
// class declaration

class Fetcher {

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    constructor(config) {
        this.isolate = config.isolate;
        this.projects = config;
    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    buildProject(name, project, topCache) {
        topCache = project.topCache || topCache;
        
        if (this.isRealProject(project)) {
            this.prepareDirectory(name, project.isolate || this.isolate, topCache);
            this.performInstall(project);
        } else {
            this.moveToDir(name);
            if (project.topCache) {
                this.setupCacheDir('_cache');
            }
        }

        if (project.subs) {
            for (let sub of project.subs) {
                if (sub in this.projects) {
                    let subproject = this.projects[sub];
                    this.buildProject(sub, subproject, topCache);
                }
            }
        }

        if (project.depends) {
            for (let dep of project.depends) {
                if (dep in projects) {
                    let dependency = projects[dep];
                    this.performInstall(dependency);
                }
            }
        }

        process.chdir('..');
    }

    prepareDirectory (dirname, isolate, topCache) {
        this.moveToDir(dirname);

        if (isolate) {
            if (!topCache) {
                this.setupCacheDir('_cache');
            }
            let prefixDir = path.join(process.cwd(), '_prefix');
            this.setupPrefixDir(prefixDir);
        }
    
        this.exec('npm init -f');
    }

    performInstall(project) {
        if (project.global) {
            this.performGlobalInstall(project);
            return;
        }
        if (project.npx) {
            this.performNpxInstall(project);
            return;
        }
        if (project.command) {
            this.performCommandInstall(project);
            return;
        }
        if (project.mergeInstall) {
            this.performMergedInstall(project);
        }
        else {
            this.performMultiInstall(project);
        }
    }

    performGlobalInstall(project) {
        this.exec(`npm i -g ${ project.package }`);

        if (project.postCommand) {
            process.env.PATH = `${process.env.npm_config_prefix};${process.env.PATH}`;
            this.exec(`${ project.postCommand }`);
        }

        if (project.postCommands) {
            process.env.PATH = `${process.env.npm_config_prefix};${process.env.PATH}`;
            for (let cmd of project.postCommands) {
                this.exec(`${ cmd }`);
            }
        }

        process.env.npm_config_prefix = globalDir;
    }

    performNpxInstall(project) {
        let cmd = project.npx;
        if (!cmd.startsWith('npx ')) {
            cmd = 'npx ' + cmd;
        }
        this.exec(cmd);

        if (project.install) {
            process.chdir(project.install);
            this.exec('npm install');
            process.chdir('..');
        }
    }

    performCommandInstall(project) {
        let cmd = project.command;
        this.exec(cmd);

        if (project.install) {
            process.chdir(project.install);
            this.exec('npm install');
            process.chdir('..');
        }
    }

    performMergedInstall(project) {
        if (project.packages) {
            this.exec(`npm i --save ${ project.packages.join(' ') }`);
        }
        if (project.devPackages) {
            this.exec(`npm i --save-dev ${ project.devPackages.join(' ') }`);
        }
    }

    performMultiInstall(project) {
        if (project.packages) {
            for (const pkg of project.packages) {
                this.exec(`npm i --save ${ pkg }`);
            }
        }
        if (project.devPackages) {
            for (const pkg of project.devPackages) {
                this.exec(`npm i --save-dev ${ pkg }`);
            }
        }
    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    isRealProject(project) {
        return project.packages || project.devPackages || project.package 
		    || project.depends || project.npx || project.command;
    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    exec(cmd) {
        console.log(cmd);
        execSync(cmd);
    }

    forceDir (dirname) {
        if (!existsSync(dirname)) {
            mkdirSync(dirname);
        }
    }

    moveToDir(dirname) {
        this.forceDir(dirname);
	    process.chdir(dirname);
    }

    setupCacheDir (cachePath) {
        cachePath = !path.isAbsolute(cachePath) ? path.resolve(cachePath) : cachePath;
        console.log(`setting '${ cachePath }' as cache directory`);
        this.forceDir(cachePath);
        process.env.npm_config_cache = cachePath;
    }

    setupPrefixDir (dirname) {
        let dirToInstall = !path.isAbsolute(dirname) ? path.join(globalDir, dirname) : dirname;
        console.log(`setting '${ dirToInstall }' as global application directory`);
        this.forceDir(dirToInstall);
        process.env.npm_config_prefix = dirToInstall;
    }



};

// ---------------------------------------------------------
// module export

module.exports = Fetcher;

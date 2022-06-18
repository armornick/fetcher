
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

    /** @param {import('./types/projects').ProjectMap} config */
    constructor(config) {
        this.isolate = config.isolate;
        this.projects = config;
    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    /**
     * @param {string | import('./types/projects').Project} name
     * @param {import('./types/projects').Project} project
     * @param {boolean} [topCache]
     */
    buildProject(name, project, topCache) {
        topCache = project.topCache || topCache;
        if (typeof(name) === 'object') {
            name = project.name;
        }
        
        if (this.isRealProject(project)) {
            const needsInit = (project.packages || project.devPackages || project.package 
		        || project.depends) && (!project.global);
            this.prepareDirectory(name, needsInit, project.isolate || this.isolate, topCache);
            this.performInstall(project);
        } else {
            this.moveToDir(name);
            if (project.topCache) {
                this.setupCacheDir('_cache');
            }
        }

        if (project.subs) {
            for (let sub of project.subs) {
                if (this.isSubProject(sub)) {
                    let subproject = this.getSubProject(sub);
                    this.buildProject(sub, subproject, topCache);
                }
            }
        }

        if (project.depends) {
            for (let dep of project.depends) {
                if (this.isSubProject(dep)) {
                    let dependency = this.getSubProject(dep);
                    this.performInstall(dependency);
                }
            }
        }

        process.chdir('..');
    }

    prepareDirectory (dirname, needsInit, isolate, topCache) {
        this.moveToDir(dirname);

        if (isolate) {
            if (!topCache) {
                this.setupCacheDir('_cache');
            }
            let prefixDir = path.join(process.cwd(), '_prefix');
            this.setupPrefixDir(prefixDir);
        }
    
        if (needsInit) {
            this.exec('npm init -y');
        }
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

    /**
     * 
     * @param {import('./types/projects').Project | string} project 
     * @returns {import('./types/projects').Project}
     */
    getSubProject(project) {
        if (typeof(project) === 'string') {
            return this.projects[project];
        }
        else if (typeof(project) === 'object') {
            return project;
        }
        else {
            throw new TypeError(`subproject must be a string or object; received ${project}`);
        }
    }

    /**
     * 
     * @param {import('./types/projects').Project | string} project 
     * @returns {boolean}
     */
    isSubProject(project) {
        if (typeof(project) === 'string') {
            return project in this.projects;
        }
        else if (typeof(project) === 'object') {
            return true;
        }
        else {
            throw new TypeError(`subproject must be a string or object; received ${project}`);
        }
    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    /**
     * 
     * @param {string} cmd 
     */
    exec(cmd) {
        console.log(cmd);
        execSync(cmd);
    }

    /**
     * 
     * @param {string} dirname 
     */
    forceDir (dirname) {
        if (!existsSync(dirname)) {
            mkdirSync(dirname);
        }
    }

    /**
     * 
     * @param {string} dirname 
     */
    moveToDir(dirname) {
        this.forceDir(dirname);
	    process.chdir(dirname);
    }

    /**
     * @param {string} cachePath
     */
    setupCacheDir (cachePath) {
        cachePath = !path.isAbsolute(cachePath) ? path.resolve(cachePath) : cachePath;
        console.log(`setting '${ cachePath }' as cache directory`);
        this.forceDir(cachePath);
        process.env.npm_config_cache = cachePath;
    }

    /**
     * @param {string} dirname
     */
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

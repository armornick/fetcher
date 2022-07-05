"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path = require("path");
// const defaults = {
// prefix: process.env.npm_config_prefix,
// cache: process.env.npm_config_cache,
// };
class Fetcher {
    constructor(projects) {
        this.topCache = false;
        this.projects = projects;
    }
    buildProject(name) {
        const project = this.projects.get(name);
        // this.topCache = project.topCache;
        this.buildProjectImpl(project);
        this.topCache = false;
    }
    buildProjectImpl(project) {
        this.moveToDir(project.name);
        if ((project.topCache && !this.topCache) || !this.topCache) {
            this.setupCache();
            this.topCache = Boolean(project.topCache);
        }
        if (project.packages) {
            this.installPackages(project.packages);
        }
        if (project.npx) {
            this.performNpx(project);
        }
        if (project.global) {
            this.performGlobalInstall(project);
        }
        if (project.scaffold) {
            this.performScaffold(project);
        }
        if (project.subs) {
            for (const sub of project.subs) {
                let project = sub;
                if (typeof (project) === 'string') {
                    project = this.projects.get(project);
                }
                this.buildProjectImpl(project);
            }
        }
        process.chdir('..');
    }
    installPackages(packages) {
        this.exec('npm init -y');
        for (const item of packages) {
            this.exec(`npm i -S ${item}`);
        }
    }
    performNpx(project) {
        let npx = project.npx;
        if (npx) {
            this.exec(`npx ${npx.command}`);
            if (npx.install) {
                process.chdir(npx.install);
                this.exec('npm i');
                process.chdir('..');
            }
        }
    }
    performGlobalInstall(project) {
        const global = project.global;
        if (global) {
            this.setupPrefix();
            this.exec(`npm i -g ${global.package}`);
            if (global.postCommand) {
                const oldPath = process.env.PATH;
                process.env.PATH = `${process.env.npm_config_prefix};${process.env.PATH}`;
                this.exec(global.postCommand);
                process.env.PATH = oldPath;
            }
            if (project.commands) {
                const oldPath = process.env.PATH;
                process.env.PATH = `${process.env.npm_config_prefix};${process.env.PATH}`;
                for (const command of project.commands) {
                    this.exec(command);
                }
                process.env.PATH = oldPath;
            }
        }
    }
    performScaffold(project) {
        const scaffold = project.scaffold;
        if (scaffold) {
            if (scaffold.workDir) {
                if (!(0, fs_1.existsSync)(scaffold.workDir)) {
                    (0, fs_1.mkdirSync)(scaffold.workDir);
                }
                process.chdir(scaffold.workDir);
            }
            if (scaffold.init) {
                this.exec('npm init -y');
            }
            for (const command of scaffold.commands) {
                this.exec(command);
            }
            if (scaffold.workDir) {
                process.chdir('..');
            }
        }
    }
    moveToDir(dirname) {
        if ((0, fs_1.existsSync)(dirname)) {
            throw new Error(`directory '${dirname}' already exists`);
        }
        (0, fs_1.mkdirSync)(dirname);
        process.chdir(dirname);
    }
    setupCache(cacheDir = '_cache') {
        if (!(0, fs_1.existsSync)(cacheDir)) {
            (0, fs_1.mkdirSync)(cacheDir);
        }
        const cachePath = path.resolve(cacheDir);
        console.log(`setting '${cachePath}' as cache directory`);
        process.env.npm_config_cache = cachePath;
    }
    setupPrefix(prefixDir = '_prefix') {
        if (!(0, fs_1.existsSync)(prefixDir)) {
            (0, fs_1.mkdirSync)(prefixDir);
        }
        const prefixPath = path.resolve(prefixDir);
        console.log(`setting '${prefixPath}' as prefix directory`);
        process.env.npm_config_prefix = prefixPath;
    }
    exec(cmd) {
        console.log(`$ ${cmd}`);
        (0, child_process_1.execSync)(cmd);
    }
}
exports.default = Fetcher;

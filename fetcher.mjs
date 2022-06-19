import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import * as path from 'path';
import { ProjectList } from "./packages/util.mjs";


// const defaults = {
    // prefix: process.env.npm_config_prefix,
    // cache: process.env.npm_config_cache,
// };


export default class Fetcher {

    /** @type {boolean} */
    topCache = false;

    /**
     * 
     * @param {ProjectList} projects 
     */
    constructor(projects) {
        /** @type {ProjectList} */
        this.projects = projects;
    }

    /**
     * 
     * @param {string} name 
     */
    buildProject(name) {
        const project = this.projects.get(name);
        this.topCache = project.topCache;
        this.buildProjectImpl(project);
        this.topCache = false;
    }

    /**
     * 
     * @param {Project} project 
     */
    buildProjectImpl(project) {
        this.moveToDir(project.name);
        if (project.topCache || !this.topCache) {
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
        if (project.subs) {
            for (const sub of project.subs) {
                let project = sub;
                if (typeof(project) === 'string') {
                    project = this.projects.get(project);
                }
                this.buildProjectImpl(project);
            }
        }
        process.chdir('..');
    }

    /**
     * 
     * @param {string[]} packages 
     */
    installPackages(packages) {
        this.exec('npm init -y');
        for (const item of packages) {
            this.exec(`npm i -S ${item}`);
        }
    }

    /**
     * 
     * @param {Project} project 
     */
    performNpx(project) {
        let npx = project.npx;
        this.exec(`npx ${npx.command}`);
        
        if (npx.install) {
            process.chdir(npx.install);
            this.exec('npm i');
            process.chdir('..');
        }
    }

    /**
     * 
     * @param {Project} project 
     */
    performGlobalInstall(project) {
        const global = project.global;
        this.setupPrefix();
        this.exec(`npm i -g ${global.package}`);
        if (global.postCommand) {
            const oldPath = process.env.PATH;
            process.env.PATH = `${process.env.npm_config_prefix};${process.env.PATH}`;
            this.exec(global.postCommand);
            process.env.PATH = oldPath;
        }
    }

    /**
     * 
     * @param {string} dirname 
     */
    moveToDir(dirname) {
        if (existsSync(dirname)) {
            throw new Error(`directory '${dirname}' already exists`);
        }
        mkdirSync(dirname);
        process.chdir(dirname);
    }

    /**
     * 
     * @param {string} cacheDir 
     */
    setupCache(cacheDir = '_cache') {
        if (!existsSync(cacheDir)) {
            mkdirSync(cacheDir);
        }
        const cachePath = path.resolve(cacheDir);
        console.log(`setting '${ cachePath }' as cache directory`);
        process.env.npm_config_cache = cachePath;
    }

    /**
     * 
     * @param {string} prefixDir 
     */
    setupPrefix(prefixDir = '_prefix') {
        if (!existsSync(prefixDir)) {
            mkdirSync(prefixDir);
        }
        const prefixPath = path.resolve(prefixDir);
        console.log(`setting '${ prefixPath }' as prefix directory`);
        process.env.npm_config_prefix = prefixPath;
    }

    /**
     * 
     * @param {string} cmd 
     */
    exec(cmd) {
        console.log(`$ ${cmd}`);
        execSync(cmd);
    }
}

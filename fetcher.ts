import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import * as path from 'path';
import { Project } from './packages/types';
import { ProjectList } from "./packages/util";


// const defaults = {
    // prefix: process.env.npm_config_prefix,
    // cache: process.env.npm_config_cache,
// };


export default class Fetcher {

    projects: ProjectList;
    topCache = false;

    constructor(projects: ProjectList) {
        this.projects = projects;
    }

    buildProject(name: string) {
        const project = this.projects.get(name);
        // this.topCache = project.topCache;
        this.buildProjectImpl(project);
        this.topCache = false;
    }

    buildProjectImpl(project: Project) {
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
                if (typeof(project) === 'string') {
                    project = this.projects.get(project);
                }
                this.buildProjectImpl(project);
            }
        }
        process.chdir('..');
    }

    installPackages(packages: string[]) {
        this.exec('npm init -y');
        for (const item of packages) {
            this.exec(`npm i -S ${item}`);
        }
    }

    performNpx(project: Project) {
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

    performGlobalInstall(project: Project) {
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

    performScaffold(project: Project) {
        const scaffold = project.scaffold;
        if (scaffold) {
            if (scaffold.workDir) {
                if (!existsSync(scaffold.workDir)) {
                    mkdirSync(scaffold.workDir);
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

    moveToDir(dirname: string) {
        if (existsSync(dirname)) {
            throw new Error(`directory '${dirname}' already exists`);
        }
        mkdirSync(dirname);
        process.chdir(dirname);
    }

    setupCache(cacheDir: string = '_cache') {
        if (!existsSync(cacheDir)) {
            mkdirSync(cacheDir);
        }
        const cachePath = path.resolve(cacheDir);
        console.log(`setting '${ cachePath }' as cache directory`);
        process.env.npm_config_cache = cachePath;
    }

    setupPrefix(prefixDir: string = '_prefix') {
        if (!existsSync(prefixDir)) {
            mkdirSync(prefixDir);
        }
        const prefixPath = path.resolve(prefixDir);
        console.log(`setting '${ prefixPath }' as prefix directory`);
        process.env.npm_config_prefix = prefixPath;
    }

    exec(cmd: string) {
        console.log(`$ ${cmd}`);
        execSync(cmd);
    }
}

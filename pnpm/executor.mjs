import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const PNPM_CACHE = 'C:\\Users\\nicks\\AppData\\Local\\pnpm-cache';
const PNPM_STORE = 'D:\\bin\\usr\\node-v12.16.2-win-x64\\pnpm-store\\v3';

export default class Executor {

    /**
     * 
     * @param {Project} project 
     */
    addToStore(project) {
        if (project.packages) {
            for (const item of project.packages) {
                this.exec(`pnpm store add ${item}`);
            }
        }
        if (project.subs) {
            for (const sub of project.subs) {
                if (typeof(sub) === 'object') {
                    this.addToStore(sub);
                }
            }
        }
    }

    /**
     * 
     * @param {Project} project 
     */
    build(project) {
        this.moveToDir(project.name);
        
        if (project.packages) {
            this.exec('pnpm init');
            this.exec(`pnpm add ${ project.packages.join(' ') }`);
        }

        if (project.npx) {
            const npx = project.npx;
            this.exec(`pnpx ${npx.command}`);
            if (npx.install) {
                process.chdir(npx.install);
                try {
                    this.exec('pnpm i');
                } catch (error) {
                    console.log(error);
                }
                process.chdir('..');
            }
        }

        if (project.subs) {
            const subs = project.subs.filter(proj => typeof(proj) === 'object');
            for (const sub of subs) {
                this.build(sub);
            }
        }

        process.chdir('..');
    }

    archive() {
        this.exec(`7za a -t7z pnpm-store.7z ${PNPM_STORE}`);
        this.exec(`7za a -t7z pnpm-cache.7z ${PNPM_CACHE}`);
    }

    /**
     * 
     * @param {string} dirname 
     */
    moveToDir(dirname) {
        if (!existsSync(dirname)) {
            mkdirSync(dirname);
        }
        process.chdir(dirname);
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

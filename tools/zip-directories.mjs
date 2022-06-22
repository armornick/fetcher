import { execSync } from 'child_process';
import { readdirSync, statSync, existsSync } from 'fs';

// --------------------------------------------------------------

const BUILD_DIR = 'build';
const IGNORED_FILE = /^(_|\.)/;

// --------------------------------------------------------------

process.chdir(BUILD_DIR);

const entries = readdirSync('.');
for (const entry of entries) {
    if (IGNORED_FILE.test(entry)) {
        continue;
    }

    // console.log(`* ${entry}`);
    const isDir = statSync(entry).isDirectory();
    if (existsSync(`${entry}.7z`)) {
        console.log(`'${entry}.7z' already exists: skipping`);
        continue;
    }
    if (isDir) {
        const cmd = `7za a -t7z ${entry}.7z ${entry}`;
        console.log(`$ ${cmd}`);
        execSync(cmd, { stdio: 'inherit' });
    }
}

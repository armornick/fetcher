"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fetcher_1 = require("./fetcher");
const index_1 = require("./packages/index");
const BUILD_DIR = 'build';
const argv = process.argv.slice(2);
// ---------------------------------------------------------
const fetcher = new fetcher_1.default(index_1.default);
if (!(0, fs_1.existsSync)(BUILD_DIR)) {
    (0, fs_1.mkdirSync)(BUILD_DIR);
}
process.chdir(BUILD_DIR);
let projectsToBuild;
if (argv.length > 0) {
    projectsToBuild = argv;
}
else {
    projectsToBuild = index_1.default.defaults;
}
if (!projectsToBuild || projectsToBuild.length === 0) {
    console.log('no input projects given; aborting execution');
    process.exit();
}
for (const project of projectsToBuild) {
    if (project.startsWith(':')) {
        const index = project.slice(1);
        console.log(`===== adding index ${index} =====`);
        fetcher.addIndex(index);
        continue;
    }
    console.log(`===== building project ${project} =====`);
    fetcher.buildProject(project);
    console.log('==========\n');
}

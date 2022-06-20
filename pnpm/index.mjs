import projects from '../packages/index.mjs';
import Executor from "./executor.mjs";

const STORE_PROJECTS = [
    'misc-libs','css-libs','database-libs','indexeddb-libs','tagged-templates-bundle',
    'hyperhtml-bundle','twind-bundle','postcss-bundle','sass-bundle','express-bundle',
    'tailwind-pkg','typescript-pkg','metalsmith-bundle','staticgen-bundle','vue-pkg',
    'parcel-bundle','vite-bundle',
];

const BUILD_PROJECTS = [
    // 'parcel-starters',
    'vite-starters',
    'metalsmith-starters',
];

const BUILD_DIR = 'build';
process.chdir(BUILD_DIR);

const pnpm = new Executor();

// for (const project of STORE_PROJECTS) {
    // pnpm.addToStore(projects.get(project));
// }

for (const project of BUILD_PROJECTS) {
    pnpm.build(projects.get(project));
}

pnpm.archive();

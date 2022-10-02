"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
function default_1(projects) {
    projects.define((0, util_1.ContainerProject)('vite-starters', ['vite-starters-official', 'vite-starters-community']));
    projects.define((0, util_1.ContainerProject)('vite-starters-official', [
        (0, util_1.CommandProject)('vite-vanilla-starter', 'create-vite@latest vite-vanilla-skel --template vanilla', 'vite-vanilla-skel'),
        (0, util_1.CommandProject)('vite-vue-starter', 'create-vite@latest vite-vue-skel --template vue', 'vite-vue-skel'),
        (0, util_1.CommandProject)('vite-react-starter', 'create-vite@latest vite-react-skel --template react', 'vite-react-skel'),
        (0, util_1.CommandProject)('vite-preact-starter', 'create-vite@latest vite-preact-skel --template preact', 'vite-preact-skel'),
        (0, util_1.CommandProject)('vite-lit-starter', 'create-vite@latest vite-lit-skel --template lit', 'vite-lit-skel'),
        (0, util_1.CommandProject)('vite-svelte-starter', 'create-vite@latest vite-svelte-skel --template svelte', 'vite-svelte-skel'),
    ]));
    projects.define((0, util_1.ContainerProject)('vite-starters-typescript', [
        (0, util_1.CommandProject)('vite-ts-vanilla-starter', 'create-vite@latest vite-vanilla-skel --template vanilla-ts', 'vite-vanilla-skel'),
        (0, util_1.CommandProject)('vite-ts-vue-starter', 'create-vite@latest vite-vue-skel --template vue-ts', 'vite-vue-skel'),
        (0, util_1.CommandProject)('vite-ts-react-starter', 'create-vite@latest vite-react-skel --template react-ts', 'vite-react-skel'),
        (0, util_1.CommandProject)('vite-ts-preact-starter', 'create-vite@latest vite-preact-skel --template preact-ts', 'vite-preact-skel'),
        (0, util_1.CommandProject)('vite-ts-lit-starter', 'create-vite@latest vite-lit-skel --template lit-ts', 'vite-lit-skel'),
        (0, util_1.CommandProject)('vite-ts-svelte-starter', 'create-vite@latest vite-svelte-skel --template svelte-ts', 'vite-svelte-skel'),
    ]));
    projects.define((0, util_1.ContainerProject)('vite-starters-community', [
        // DegitProject('vite-solidjs-starter', 'solidjs/templates/js'),
        // DegitProject('vite-solidjs-ts-starter', 'solidjs/templates/ts'),
        // DegitProject('vite-solidjs-ts-windicss-starter', 'solidjs/templates/ts-windicss'),
        // DegitProject('vite-solidjs-ts-tailwindcss-starter', 'solidjs/templates/ts-tailwindcss'),
        (0, util_1.DegitProject)('vitawind-starter', 'huibizhang/template-vite-vanilla-tailwind-v3'),
        (0, util_1.DegitProject)('vitesse-lite-starter', 'antfu/vitesse-lite'),
        // DegitProject('vitailse-starter', 'zynth17/vitailse'),
        (0, util_1.DegitProject)('vite-elm-starter', 'lindsaykwardell/vite-elm-template#main'),
        (0, util_1.DegitProject)('vite-mithril-starter', 'ArthurClemens/mithril-vite-starter'),
        (0, util_1.DegitProject)('vite-mithril-ts-starter', 'ArthurClemens/mithril-ts-vite-starter'),
    ]));
    projects.define((0, util_1.BasicProject)('vite-bundle', [
        'vite-plugin-windicss', '@originjs/vite-plugin-content',
        '@vitejs/plugin-vue', 'vite-plugin-pages', '@sveltejs/vite-plugin-svelte',
        'vite-plugin-solid', 'babel-preset-solid', 'vite-plugin-elm',
        'vite-plugin-windicss', 'windicss',
    ]));
}
exports.default = default_1;

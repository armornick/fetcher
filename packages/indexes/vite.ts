import { AppProject, BasicProject, CommandProject, ContainerProject, DegitProject, ProjectList, SuperProject } from "../util";

export default function (projects:ProjectList) {

    projects.define(
        ContainerProject('vite-starters', ['vite-starters-official', 'vite-starters-community'])
    )
    
    projects.define(
        ContainerProject('vite-starters-official', [
            CommandProject('vite-vanilla-starter', 'create-vite@latest vite-vanilla-skel --template vanilla', 'vite-vanilla-skel'),
            CommandProject('vite-vue-starter', 'create-vite@latest vite-vue-skel --template vue', 'vite-vue-skel'),
            CommandProject('vite-react-starter', 'create-vite@latest vite-react-skel --template react', 'vite-react-skel'),
            CommandProject('vite-preact-starter', 'create-vite@latest vite-preact-skel --template preact', 'vite-preact-skel'),
            CommandProject('vite-lit-starter', 'create-vite@latest vite-lit-skel --template lit', 'vite-lit-skel'),
            CommandProject('vite-svelte-starter', 'create-vite@latest vite-svelte-skel --template svelte', 'vite-svelte-skel'),
        ])
    )
    
    projects.define(
        ContainerProject('vite-starters-typescript', [
            CommandProject('vite-ts-vanilla-starter', 'create-vite@latest vite-vanilla-skel --template vanilla-ts', 'vite-vanilla-skel'),
            CommandProject('vite-ts-vue-starter', 'create-vite@latest vite-vue-skel --template vue-ts', 'vite-vue-skel'),
            CommandProject('vite-ts-react-starter', 'create-vite@latest vite-react-skel --template react-ts', 'vite-react-skel'),
            CommandProject('vite-ts-preact-starter', 'create-vite@latest vite-preact-skel --template preact-ts', 'vite-preact-skel'),
            CommandProject('vite-ts-lit-starter', 'create-vite@latest vite-lit-skel --template lit-ts', 'vite-lit-skel'),
            CommandProject('vite-ts-svelte-starter', 'create-vite@latest vite-svelte-skel --template svelte-ts', 'vite-svelte-skel'),
        ])
    )
    
    projects.define(
        ContainerProject('vite-starters-community', [
            // DegitProject('vite-solidjs-starter', 'solidjs/templates/js'),
            // DegitProject('vite-solidjs-ts-starter', 'solidjs/templates/ts'),
            // DegitProject('vite-solidjs-ts-windicss-starter', 'solidjs/templates/ts-windicss'),
            // DegitProject('vite-solidjs-ts-tailwindcss-starter', 'solidjs/templates/ts-tailwindcss'),
            DegitProject('vitawind-starter', 'huibizhang/template-vite-vanilla-tailwind-v3'),
            DegitProject('vitesse-lite-starter', 'antfu/vitesse-lite'),
            // DegitProject('vitailse-starter', 'zynth17/vitailse'),
            DegitProject('vite-elm-starter', 'lindsaykwardell/vite-elm-template#main'),
            DegitProject('vite-mithril-starter', 'ArthurClemens/mithril-vite-starter'),
            DegitProject('vite-mithril-ts-starter', 'ArthurClemens/mithril-ts-vite-starter'),
        ])
    )
    
    projects.define(
        BasicProject('vite-bundle', [
            'vite-plugin-windicss','@originjs/vite-plugin-content',
            '@vitejs/plugin-vue','vite-plugin-pages','@sveltejs/vite-plugin-svelte',
            'vite-plugin-solid','babel-preset-solid','vite-plugin-elm',
            'vite-plugin-windicss','windicss',
        ])
    )
    
}

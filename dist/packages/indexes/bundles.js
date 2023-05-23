"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
function default_1(projects) {
    projects.define((0, util_1.ContainerProject)('cache-bundle', [
        'npm_',
        'misc-libs', 'misc-libs-3', 'bentojs_',
        // 'tagged-templates-bundle','web-component-libs',
        'css-libs', 'css-libs-2', 'css-tools', 'sass-bundle',
        // 'css-in-js-bundle','atomic-css-tools',
        // 'vue-pkg','react-pkg',
        'servers-bundle', 'express-bundle',
        'vite-starters-official', 'vite-bundle',
        'parcel-bundle',
        'staticgen-bundle',
    ]));
    projects.define((0, util_1.ContainerProject)('cache-bundle-2', [
        'npm_',
        'misc-libs', 'misc-libs-3', 'typescript-pkg',
        'tagged-templates-bundle', 'web-component-libs',
        'css-libs', 'css-libs-2', 'css-tools', 'postcss-bundle',
        'css-in-js-bundle', 'atomic-css-tools', 'sass-bundle',
        'vue-pkg', 'react-pkg', 'astro-bundle', 'astro-starters',
        'servers-bundle', 'express-bundle',
        'vite-starters-official', 'parcel-bundle', 'staticgen-bundle',
    ]));
    projects.define((0, util_1.ContainerProject)('frontend-bundle-2', [
        (0, util_1.BasicProject)('tailwind_serve_', ['serve concurrently tailwindcss postcss autoprefixer']),
        (0, util_1.BasicProject)('vite_vue_tailwind', ['vite vue @vitejs/plugin-vue tailwindcss postcss autoprefixer']),
        (0, util_1.BasicProject)('vite_react_tailwind', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom tailwindcss postcss autoprefixer']),
        (0, util_1.BasicProject)('vite_preact_tailwind', ['vite preact @preact/preset-vite tailwindcss postcss autoprefixer']),
        (0, util_1.BasicProject)('vite_svelte_tailwind', ['vite svelte @sveltejs/vite-plugin-svelte tailwindcss postcss autoprefixer']),
        (0, util_1.BasicProject)('vite_vue_sass', ['vite vue @vitejs/plugin-vue sass']),
        (0, util_1.BasicProject)('vite_preact_sass', ['vite preact @preact/preset-vite sass']),
        (0, util_1.BasicProject)('vite_svelte_sass', ['vite svelte @sveltejs/vite-plugin-svelte sass']),
        (0, util_1.BasicProject)('vite_vue_gorko', ['vite vue @vitejs/plugin-vue sass gorko']),
        (0, util_1.BasicProject)('vite_preact_gorko', ['vite preact @preact/preset-vite sass gorko']),
        (0, util_1.BasicProject)('vite_svelte_gorko', ['vite svelte @sveltejs/vite-plugin-svelte sass gorko']),
        (0, util_1.BasicProject)('vite_vue_codyframe', ['vite vue @vitejs/plugin-vue sass codyhouse-framework']),
        (0, util_1.BasicProject)('vite_preact_codyframe', ['vite preact @preact/preset-vite sass codyhouse-framework']),
        (0, util_1.BasicProject)('vite_svelte_codyframe', ['vite svelte @sveltejs/vite-plugin-svelte sass codyhouse-framework']),
        (0, util_1.BasicProject)('vite_vue_emotion', ['vite vue @vitejs/plugin-vue @emotion/css']),
        (0, util_1.BasicProject)('vite_react_emotion_css', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom @emotion/css']),
        (0, util_1.BasicProject)('vite_react_emotion', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom @emotion/react']),
        (0, util_1.BasicProject)('vite_react_emotion_styled', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom @emotion/styled @emotion/react']),
        (0, util_1.BasicProject)('marked_', ['marked']),
        (0, util_1.BasicProject)('vite_vue_marked_', ['vite vue @vitejs/plugin-vue marked']),
        (0, util_1.BasicProject)('vite_react_marked_', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom marked']),
        (0, util_1.BasicProject)('vite_preact_marked_', ['vite preact @preact/preset-vite marked']),
        (0, util_1.BasicProject)('vite_svelte_marked_', ['vite svelte @sveltejs/vite-plugin-svelte marked']),
        (0, util_1.BasicProject)('vite_vue_tailwind_marked_', ['vite vue @vitejs/plugin-vue tailwindcss postcss autoprefixer marked']),
        (0, util_1.BasicProject)('vite_react_tailwind_marked_', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom tailwindcss postcss autoprefixer marked']),
        (0, util_1.BasicProject)('vite_preact_tailwind_marked_', ['vite preact @preact/preset-vite tailwindcss postcss autoprefixer marked']),
        (0, util_1.BasicProject)('vite_svelte_tailwind_marked_', ['vite svelte @sveltejs/vite-plugin-svelte tailwindcss postcss autoprefixer marked']),
        (0, util_1.BasicProject)('asciidoctor_', ['asciidoctor']),
        (0, util_1.BasicProject)('vite_vue_asciidoctor_', ['vite vue @vitejs/plugin-vue asciidoctor']),
        (0, util_1.BasicProject)('vite_react_asciidoctor_', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom asciidoctor']),
        (0, util_1.BasicProject)('vite_preact_asciidoctor_', ['vite preact @preact/preset-vite asciidoctor']),
        (0, util_1.BasicProject)('vite_svelte_asciidoctor_', ['vite svelte @sveltejs/vite-plugin-svelte asciidoctor']),
        (0, util_1.BasicProject)('vite_vue_tailwind_asciidoctor_', ['vite vue @vitejs/plugin-vue tailwindcss postcss autoprefixer asciidoctor']),
        (0, util_1.BasicProject)('vite_react_tailwind_asciidoctor_', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom tailwindcss postcss autoprefixer asciidoctor']),
        (0, util_1.BasicProject)('vite_preact_tailwind_asciidoctor_', ['vite preact @preact/preset-vite tailwindcss postcss autoprefixer asciidoctor']),
        (0, util_1.BasicProject)('vite_svelte_tailwind_asciidoctor_', ['vite svelte @sveltejs/vite-plugin-svelte tailwindcss postcss autoprefixer asciidoctor']),
    ]));
    projects.define((0, util_1.ContainerProject)('frontend-bundle-3', [
        (0, util_1.BasicProject)('20ful_', ['20ful']),
        (0, util_1.BasicProject)('eleventy_', ['@11ty/eleventy']),
        (0, util_1.BasicProject)('eleventy_tailwind', ['@11ty/eleventy npm-run-all tailwindcss']),
        (0, util_1.BasicProject)('eleventy_sass', ['@11ty/eleventy npm-run-all sass']),
        (0, util_1.BasicProject)('eleventy_gorko', ['@11ty/eleventy npm-run-all sass gorko']),
        (0, util_1.BasicProject)('eleventy_codyframe', ['@11ty/eleventy npm-run-all sass codyhouse-framework']),
        (0, util_1.BasicProject)('eleventy_bootstrap', ['@11ty/eleventy npm-run-all sass bootstrap@5.2.1']),
        (0, util_1.BasicProject)('sphido_', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked']),
        (0, util_1.BasicProject)('sphido_tailwind', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked tailwindcss']),
        (0, util_1.BasicProject)('sphido_sass', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked sass']),
        (0, util_1.BasicProject)('sphido_gorko', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked sass gorko']),
        (0, util_1.BasicProject)('sphido_codyframe', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked sass codyhouse-framework']),
        (0, util_1.BasicProject)('sphido_bootstrap', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked sass bootstrap@5.2.1']),
        (0, util_1.BasicProject)('sphido_pug_tailwind', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug tailwindcss']),
        (0, util_1.BasicProject)('sphido_pug_sass', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug sass']),
        (0, util_1.BasicProject)('sphido_pug_gorko', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug sass gorko']),
        (0, util_1.BasicProject)('sphido_pug_codyframe', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug sass codyhouse-framework']),
        (0, util_1.BasicProject)('sphido_pug_bootstrap', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug sass bootstrap@5.2.1']),
        (0, util_1.BasicProject)('sphido_asciidoc', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor']),
        (0, util_1.BasicProject)('sphido_asciidoc_tailwind', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor tailwindcss']),
        (0, util_1.BasicProject)('sphido_asciidoc_sass', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor sass']),
        (0, util_1.BasicProject)('sphido_asciidoc_gorko', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor sass gorko']),
        (0, util_1.BasicProject)('sphido_asciidoc_codyframe', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor sass codyhouse-framework']),
        (0, util_1.BasicProject)('sphido_asciidoc_bootstrap', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor sass bootstrap@5.2.1']),
        (0, util_1.BasicProject)('sphido_stylus', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug stylus']),
        (0, util_1.BasicProject)('sphido_stylus_asciidoc', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor stylus']),
    ]));
    projects.define((0, util_1.ContainerProject)('solidjs-starters', [
        (0, util_1.DegitProject)('solidstart-bare-skel', 'github:solidjs/solid-start/examples/bare'),
        (0, util_1.DegitProject)('solidstart-hackernews-skel', 'github:solidjs/solid-start/examples/hackernews'),
        (0, util_1.DegitProject)('solidstart-with-mdx-skel', 'github:solidjs/solid-start/examples/with-mdx'),
        (0, util_1.DegitProject)('solidstart-with-tailwindcss-skel', 'github:solidjs/solid-start/examples/with-tailwindcss'),
    ]));
    projects.define((0, util_1.ContainerProject)('vite-plugin-ssr-starters', [
        (0, util_1.DegitProject)('vite-plugin-ssr_vue_', 'github:brillout/vite-plugin-ssr/examples/vue'),
        (0, util_1.DegitProject)('vite-plugin-ssr_react_', 'github:brillout/vite-plugin-ssr/examples/react'),
        (0, util_1.DegitProject)('vite-plugin-ssr_react-full_', 'github:brillout/vite-plugin-ssr/examples/react-full'),
        (0, util_1.DegitProject)('vite-plugin-ssr_preact-server-routing_', 'github:brillout/vite-plugin-ssr/examples/preact-server-routing'),
        (0, util_1.DegitProject)('vite-plugin-ssr_preact-client-routing_', 'github:brillout/vite-plugin-ssr/examples/preact-client-routing'),
        (0, util_1.DegitProject)('vite-plugin-ssr_layouts-vue_', 'github:brillout/vite-plugin-ssr/examples/layouts-vue'),
        (0, util_1.DegitProject)('vite-plugin-ssr_layouts-react_', 'github:brillout/vite-plugin-ssr/examples/layouts-react'),
        (0, util_1.DegitProject)('vite-plugin-ssr_vanilla-v1_', 'github:brillout/vite-plugin-ssr/examples/vanilla-v1'),
    ]));
    projects.define((0, util_1.ContainerProject)('staticgen-bundle', [
        (0, util_1.BasicProject)('eleventy_', ['@11ty/eleventy']),
        (0, util_1.BasicProject)('vitepress_', ['vitepress vue']),
        (0, util_1.BasicProject)('20ful_', ['20ful']),
        (0, util_1.DegitProject)('tropical-skel', 'https://github.com/bensmithett/tropical'),
        (0, util_1.DegitProject)('nanojsx-skel', 'nanojsx/template'),
        // 'solidjs-starters',
        'vite-plugin-ssr-starters',
    ]));
}
exports.default = default_1;

import { AppProject, BasicProject, CommandProject, ContainerProject, DegitProject, ProjectList, SuperProject } from "../util";

export default function (projects:ProjectList) {

    projects.define(
        ContainerProject('cache-bundle', [
            'misc-libs','misc-libs-3','bentojs_',
            // 'tagged-templates-bundle','web-component-libs',
            'css-libs','css-libs-2','css-tools','sass-bundle',
            // 'css-in-js-bundle','atomic-css-tools',
            // 'vue-pkg','react-pkg',
            'servers-bundle','express-bundle',
            'vite-starters-official','vite-bundle',
            'parcel-bundle',
            'staticgen-bundle',
        ])
    )

    projects.define(
        ContainerProject('cache-bundle-2', [
            'misc-libs','misc-libs-3','typescript-pkg',
            'tagged-templates-bundle','web-component-libs',
            'css-libs','css-libs-2','css-tools','postcss-bundle',
            'css-in-js-bundle','atomic-css-tools','sass-bundle',
            'vue-pkg','react-pkg','astro-bundle','astro-starters',
            'servers-bundle', 'express-bundle',
            'vite-starters-official','parcel-bundle','staticgen-bundle',
        ])
    )

    projects.define(
        ContainerProject('frontend-bundle-2', [
            BasicProject('tailwind_serve_', ['serve concurrently tailwindcss postcss autoprefixer']),

            BasicProject('vite_vue_tailwind', ['vite vue @vitejs/plugin-vue tailwindcss postcss autoprefixer']),
            BasicProject('vite_react_tailwind', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom tailwindcss postcss autoprefixer']),
            BasicProject('vite_preact_tailwind', ['vite preact @preact/preset-vite tailwindcss postcss autoprefixer']),
            BasicProject('vite_svelte_tailwind', ['vite svelte @sveltejs/vite-plugin-svelte tailwindcss postcss autoprefixer']),

            BasicProject('vite_vue_sass', ['vite vue @vitejs/plugin-vue sass']),
            BasicProject('vite_preact_sass', ['vite preact @preact/preset-vite sass']),
            BasicProject('vite_svelte_sass', ['vite svelte @sveltejs/vite-plugin-svelte sass']),

            BasicProject('vite_vue_gorko', ['vite vue @vitejs/plugin-vue sass gorko']),
            BasicProject('vite_preact_gorko', ['vite preact @preact/preset-vite sass gorko']),
            BasicProject('vite_svelte_gorko', ['vite svelte @sveltejs/vite-plugin-svelte sass gorko']),

            BasicProject('vite_vue_codyframe', ['vite vue @vitejs/plugin-vue sass codyhouse-framework']),
            BasicProject('vite_preact_codyframe', ['vite preact @preact/preset-vite sass codyhouse-framework']),
            BasicProject('vite_svelte_codyframe', ['vite svelte @sveltejs/vite-plugin-svelte sass codyhouse-framework']),

            BasicProject('vite_vue_emotion', ['vite vue @vitejs/plugin-vue @emotion/css']),
            BasicProject('vite_react_emotion_css', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom @emotion/css']),
            BasicProject('vite_react_emotion', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom @emotion/react']),
            BasicProject('vite_react_emotion_styled', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom @emotion/styled @emotion/react']),

            BasicProject('marked_', ['marked']),
            BasicProject('vite_vue_marked_', ['vite vue @vitejs/plugin-vue marked']),
            BasicProject('vite_react_marked_', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom marked']),
            BasicProject('vite_preact_marked_', ['vite preact @preact/preset-vite marked']),
            BasicProject('vite_svelte_marked_', ['vite svelte @sveltejs/vite-plugin-svelte marked']),
            BasicProject('vite_vue_tailwind_marked_', ['vite vue @vitejs/plugin-vue tailwindcss postcss autoprefixer marked']),
            BasicProject('vite_react_tailwind_marked_', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom tailwindcss postcss autoprefixer marked']),
            BasicProject('vite_preact_tailwind_marked_', ['vite preact @preact/preset-vite tailwindcss postcss autoprefixer marked']),
            BasicProject('vite_svelte_tailwind_marked_', ['vite svelte @sveltejs/vite-plugin-svelte tailwindcss postcss autoprefixer marked']),

            BasicProject('asciidoctor_', ['asciidoctor']),
            BasicProject('vite_vue_asciidoctor_', ['vite vue @vitejs/plugin-vue asciidoctor']),
            BasicProject('vite_react_asciidoctor_', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom asciidoctor']),
            BasicProject('vite_preact_asciidoctor_', ['vite preact @preact/preset-vite asciidoctor']),
            BasicProject('vite_svelte_asciidoctor_', ['vite svelte @sveltejs/vite-plugin-svelte asciidoctor']),
            BasicProject('vite_vue_tailwind_asciidoctor_', ['vite vue @vitejs/plugin-vue tailwindcss postcss autoprefixer asciidoctor']),
            BasicProject('vite_react_tailwind_asciidoctor_', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom tailwindcss postcss autoprefixer asciidoctor']),
            BasicProject('vite_preact_tailwind_asciidoctor_', ['vite preact @preact/preset-vite tailwindcss postcss autoprefixer asciidoctor']),
            BasicProject('vite_svelte_tailwind_asciidoctor_', ['vite svelte @sveltejs/vite-plugin-svelte tailwindcss postcss autoprefixer asciidoctor']),
        ])
    )

    projects.define(
        ContainerProject('frontend-bundle-3', [
            BasicProject('20ful_', ['20ful']),

            BasicProject('eleventy_', ['@11ty/eleventy']),
            BasicProject('eleventy_tailwind', ['@11ty/eleventy npm-run-all tailwindcss']),
            BasicProject('eleventy_sass', ['@11ty/eleventy npm-run-all sass']),
            BasicProject('eleventy_gorko', ['@11ty/eleventy npm-run-all sass gorko']),
            BasicProject('eleventy_codyframe', ['@11ty/eleventy npm-run-all sass codyhouse-framework']),
            BasicProject('eleventy_bootstrap', ['@11ty/eleventy npm-run-all sass bootstrap@5.2.1']),

            BasicProject('sphido_', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked']),
            BasicProject('sphido_tailwind', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked tailwindcss']),
            BasicProject('sphido_sass', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked sass']),
            BasicProject('sphido_gorko', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked sass gorko']),
            BasicProject('sphido_codyframe', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked sass codyhouse-framework']),
            BasicProject('sphido_bootstrap', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked sass bootstrap@5.2.1']),
            BasicProject('sphido_pug_tailwind', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug tailwindcss']),
            BasicProject('sphido_pug_sass', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug sass']),
            BasicProject('sphido_pug_gorko', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug sass gorko']),
            BasicProject('sphido_pug_codyframe', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug sass codyhouse-framework']),
            BasicProject('sphido_pug_bootstrap', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug sass bootstrap@5.2.1']),

            BasicProject('sphido_asciidoc', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor']),
            BasicProject('sphido_asciidoc_tailwind', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor tailwindcss']),
            BasicProject('sphido_asciidoc_sass', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor sass']),
            BasicProject('sphido_asciidoc_gorko', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor sass gorko']),
            BasicProject('sphido_asciidoc_codyframe', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor sass codyhouse-framework']),
            BasicProject('sphido_asciidoc_bootstrap', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor sass bootstrap@5.2.1']),

            BasicProject('sphido_stylus', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug stylus']),
            BasicProject('sphido_stylus_asciidoc', ['serve @sphido/core @sphido/frontmatter @sindresorhus/slugify marked pug asciidoctor stylus']),
        ])
    )

    projects.define(
        ContainerProject('solidjs-starters', [
            DegitProject('solidstart-bare-skel', 'github:solidjs/solid-start/examples/bare'),
            DegitProject('solidstart-hackernews-skel', 'github:solidjs/solid-start/examples/hackernews'),
            DegitProject('solidstart-with-mdx-skel', 'github:solidjs/solid-start/examples/with-mdx'),
            DegitProject('solidstart-with-tailwindcss-skel', 'github:solidjs/solid-start/examples/with-tailwindcss'),
        ])
    )

    projects.define(
        ContainerProject('vite-plugin-ssr-starters', [
            DegitProject('vite-plugin-ssr_vue_', 'github:brillout/vite-plugin-ssr/examples/vue'),
            DegitProject('vite-plugin-ssr_react_', 'github:brillout/vite-plugin-ssr/examples/react'),
            DegitProject('vite-plugin-ssr_react-full_', 'github:brillout/vite-plugin-ssr/examples/react-full'),
            DegitProject('vite-plugin-ssr_preact-server-routing_', 'github:brillout/vite-plugin-ssr/examples/preact-server-routing'),
            DegitProject('vite-plugin-ssr_preact-client-routing_', 'github:brillout/vite-plugin-ssr/examples/preact-client-routing'),
            DegitProject('vite-plugin-ssr_layouts-vue_', 'github:brillout/vite-plugin-ssr/examples/layouts-vue'),
            DegitProject('vite-plugin-ssr_layouts-react_', 'github:brillout/vite-plugin-ssr/examples/layouts-react'),
            DegitProject('vite-plugin-ssr_vanilla-v1_', 'github:brillout/vite-plugin-ssr/examples/vanilla-v1'),
        ])
    )

    projects.define(
        ContainerProject('staticgen-bundle', [
            BasicProject('eleventy_', ['@11ty/eleventy']),
            BasicProject('vitepress_', ['vitepress vue']),
            BasicProject('20ful_', ['20ful']),
            DegitProject('tropical-skel', 'https://github.com/bensmithett/tropical'),
            DegitProject('nanojsx-skel', 'nanojsx/template'),
            'solidjs-starters',
            'vite-plugin-ssr-starters',
        ])
    )

}


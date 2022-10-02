import { AppProject, BasicProject, CommandProject, ContainerProject, DegitProject, ProjectList, SuperProject } from "../util";

export default function (projects:ProjectList) {

    projects.define(
        ContainerProject('cache-bundle-1', [
            BasicProject('onessg_', ['onessg jstransformer-ejs jstransformer-pug']),
            BasicProject('sphido_', ['@sphido/core @sphido/frontmatter @sindresorhus/slugify']),
            BasicProject('20ful_', ['20ful']),
            BasicProject('eleventy_', ['@11ty/eleventy']),

            BasicProject('tools_', ['npm-run-all concurrently serve marked pug stylus asciidoctor']),
            BasicProject('tailwind_', ['tailwindcss postcss autoprefixer']),
            BasicProject('twin-macro_', ['twin.macro']),
            BasicProject('twind-bundle', [
                'twind','@twind/aspect-ratio','@twind/content','@twind/forms','@twind/line-clamp','@twind/typography','@twind/preact'
            ]),
            
            'misc-libs','css-libs','css-libs-2','astro-bundle','json-server_',
            'hyperhtml-bundle','web-component-libs','tagged-templates-bundle',

            CommandProject('vite-vanilla-starter', 'create-vite@latest vite-vanilla-skel --template vanilla', 'vite-vanilla-skel'),
            CommandProject('vite-vue-starter', 'create-vite@latest vite-vue-skel --template vue', 'vite-vue-skel'),
            CommandProject('vite-react-starter', 'create-vite@latest vite-react-skel --template react', 'vite-react-skel'),
            CommandProject('vite-preact-starter', 'create-vite@latest vite-preact-skel --template preact', 'vite-preact-skel'),
            CommandProject('vite-lit-starter', 'create-vite@latest vite-lit-skel --template lit', 'vite-lit-skel'),
            CommandProject('vite-svelte-starter', 'create-vite@latest vite-svelte-skel --template svelte', 'vite-svelte-skel'),
        ])
    )

    projects.define(
        ContainerProject('frontend-bundle-1', [
            BasicProject('lemonadejs_', ['lemonadejs']),
            BasicProject('lemonadejs_vite_', ['vite', 'lemonadejs']),
            BasicProject('lemonadejs_tailwindcss_vite_', ['vite','tailwindcss postcss autoprefixer', 'lemonadejs']),
            BasicProject('reefjs_', ['reefjs']),
            BasicProject('reefjs_vite_', ['vite', 'reefjs']),
            BasicProject('reefjs_tailwindcss_vite_', ['vite','tailwindcss postcss autoprefixer','reefjs']),
            BasicProject('ficusjs_', ['ficusjs']),
            BasicProject('ficusjs_vite_', ['vite', 'ficusjs']),
            BasicProject('ficusjs_tailwindcss_vite_', ['vite','tailwindcss postcss autoprefixer','ficusjs']),
            BasicProject('stimulus_vite_', ['vite', '@hotwired/stimulus']),
            BasicProject('stimulus_tailwindcss_vite_', ['vite','tailwindcss postcss autoprefixer','@hotwired/stimulus']),
            BasicProject('turbo_vite_', ['vite', '@hotwired/stimulus @hotwired/turbo']),
            BasicProject('turbo_tailwindcss_vite_', ['vite','tailwindcss postcss autoprefixer','@hotwired/stimulus @hotwired/turbo']),
            BasicProject('docsify_', ['docsify-cli']),
            BasicProject('vitepress_', ['vitepress vue']),
            BasicProject('lit_', ['lit']),
            BasicProject('lit_vite_', ['vite', 'lit']),
            DegitProject('inferno-boilerplate', 'infernojs/inferno-boilerplate'),
            BasicProject('vite-vue-starter', ['vite vue @vitejs/plugin-vue']),
            BasicProject('vite-vue-starter_tailwind', ['vite vue @vitejs/plugin-vue tailwindcss postcss autoprefixer']),
            BasicProject('vite-react-starter', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom']),
            BasicProject('vite-react-starter_tailwind', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom tailwindcss postcss autoprefixer']),
            BasicProject('vite-preact-starter', ['vite preact @preact/preset-vite']),
            BasicProject('vite-preact-starter_tailwind', ['vite preact @preact/preset-vite tailwindcss postcss autoprefixer']),
            BasicProject('vite-svelte-starter', ['vite svelte @sveltejs/vite-plugin-svelte']),
            BasicProject('vite-svelte-starter_tailwind', ['vite svelte @sveltejs/vite-plugin-svelte tailwindcss postcss autoprefixer']),
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
            BasicProject('onessg_tailwind', ['concurrently serve onessg jstransformer-ejs tailwindcss postcss autoprefixer']),
            BasicProject('onessg_sass', ['concurrently serve onessg jstransformer-ejs sass']),
            BasicProject('onessg_gorko', ['concurrently serve onessg jstransformer-ejs sass gorko']),
            BasicProject('onessg_codyframe', ['concurrently serve onessg jstransformer-ejs sass codyhouse-framework']),
            BasicProject('onessg_bootstrap', ['concurrently serve onessg jstransformer-ejs sass bootstrap@5.2.1']),

            BasicProject('onessg_pug_tailwind', ['concurrently serve onessg jstransformer-pug tailwindcss postcss autoprefixer']),
            BasicProject('onessg_pug_sass', ['concurrently serve onessg jstransformer-pug sass']),
            BasicProject('onessg_pug_gorko', ['concurrently serve onessg jstransformer-pug sass gorko']),
            BasicProject('onessg_pug_codyframe', ['concurrently serve onessg jstransformer-pug sass codyhouse-framework']),
            BasicProject('onessg_pug_bootstrap', ['concurrently serve onessg jstransformer-pug sass bootstrap@5.2.1']),
            
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

}


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const projects = new util_1.ProjectList();
exports.default = projects;
// ----------------------------------------------------------------------------------------
const packages2_1 = require("./indexes/packages2");
const css_frameworks_1 = require("./indexes/css-frameworks");
const vite_1 = require("./indexes/vite");
projects.index('packages2', packages2_1.default);
projects.index('css', css_frameworks_1.default);
projects.index('vite', vite_1.default);
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('npm_', ['npm']));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('misc-libs', [
    'lowdb', 'page', 'axios', 'highlight.js', 'prismjs', 'masonry-layout', 'lodash', 'rxjs',
    'd3', 'chart.js', 'moment', 'dayjs', 'underscore', 'sweetalert', 'sweetalert2', 'reveal.js',
    'html5sortable', 'csstag', 'facon', 'genel', 'marli', 'localforage',
    'hyperhtml', 'uhtml', 'hypersimple', 'neverland', 'hyperhtml-element',
    'inferno', 'inferno-hyperscript', 'inferno-create-element', 'preact', 'solid-js',
    'mithril', 'htm', 'alpinejs', 'marked', 'stimulus', 'gumshoejs', 'offside-js', '',
    'markdown-it', 'markdown-it-sub', 'markdown-it-sup', 'markdown-it-footnote', 'markdown-it-deflist',
    'markdown-it-abbr', 'markdown-it-emoji', 'markdown-it-container', 'a11y-dialog',
    'fr-offcanvas', 'fr-dialogmodal', 'fr-tabs', 'fr-tooltip', 'fr-accordion', 'fr-bypasslinks',
    'concurrently', 'npm-run-all',
    '@types/mithril', '@types/node', '@types/lodash', '@types/express',
]));
projects.define((0, util_1.BasicProject)('misc-libs-2', [
    '@socketsupply/tonic', 'reefjs', 'lemonadejs', 'petit-vue',
    'facon', 'genel', 'lighterhtml', 'hypersimple', 'haunted', 'yaml-tag',
    'htm', 'vhtml', 'hyperscript', 'hyperx', 'virtual-dom', 'mithril', '@types/mithril',
    'hyperhtml', 'uhtml', 'uce', 'uland', 'neverland', 'ube', 'ube-ssr', 'uland-ssr', 'lighterhtml-plus',
]));
projects.define((0, util_1.ContainerProject)('mock-data-libs', [
    (0, util_1.BasicProject)('faker_', ['@faker-js/faker']),
    (0, util_1.BasicProject)('chance_', ['chance']),
    (0, util_1.BasicProject)('falso_', ['@ngneat/falso']),
    (0, util_1.BasicProject)('json-server_', ['json-server']),
    (0, util_1.BasicProject)('jsonplaceholder_', ['jsonplaceholder']),
    (0, util_1.BasicProject)('miragejs_', ['miragejs']),
]));
projects.define((0, util_1.BasicProject)('css-libs', [
    '@fortawesome/fontawesome-free', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons',
    '@emotion/react', '@emotion/styled', '@emotion/css', '@emotion/babel-plugin',
    'animate.css', 'bootstrap', 'bulma', 'materialize-css@next', 'milligram', 'spectre.css',
    'tachyons@4.12.0', 'tailwindcss', 'normalize.css', 'minireset.css', 'open-props', 'dashvar', 'pollen-css',
    'postcss', 'autoprefixer', 'postcss-preset-env',
]));
projects.define((0, util_1.BasicProject)('css-libs-2', [
    // resets
    'modern-css-reset', 'normalize.css', 'modern-normalize', 'minireset.css',
    // small css frameworks
    'purecss', 'milligram', 'picnic', 'chota', '@picocss/pico',
    // 'real' css frameworks
    'bootstrap@5', 'bootswatch', 'bulma', 'foundation-sites', '@primer/css', 'spectre.css',
    // css variables
    'open-props', 'dashvar', 'pollen-css',
]));
projects.define((0, util_1.ContainerProject)('typescript-pkg', [
    (0, util_1.BasicProject)('typescript_', ['typescript']),
    (0, util_1.BasicProject)('types_', ['@types/node', '@types/mithril', '@types/lodash']),
    (0, util_1.BasicProject)('webpack_', ['typescript', 'ts-loader']),
    (0, util_1.BasicProject)('babel_', ['@babel/preset-typescript']),
    (0, util_1.BasicProject)('parcel_', ['@parcel/transformer-typescript-tsc']),
    (0, util_1.BasicProject)('tinyhttp_', [
        '@tinyhttp/app', '@tinyhttp/logger', '@tinyhttp/etag', '@tinyhttp/cookie', '@tinyhttp/cors', '@tinyhttp/favicon',
        '@tinyhttp/jsonp', '@tinyhttp/markdown', 'malibu', 'ws', 'tinyws'
    ]),
    (0, util_1.BasicProject)('rxjs_', ['rxjs']),
    (0, util_1.BasicProject)('injection_', ['inversify', 'diod', 'typed-inject', 'typedi', 'reflect-metadata', 'tsyringe'])
]));
projects.define((0, util_1.ContainerProject)('staticgen-bundle', [
    (0, util_1.BasicProject)('vuepress_', ['vuepress']),
    (0, util_1.BasicProject)('vuepress-next_', ['vuepress@next']),
    (0, util_1.BasicProject)('vitepress_', ['vitepress', 'vue']),
    (0, util_1.BasicProject)('20ful_', ['20ful']),
    (0, util_1.BasicProject)('hydrogen-cli_', ['hydrogen-cli']),
    (0, util_1.BasicProject)('mini-site-generator_', ['mini-site-generator']),
    (0, util_1.BasicProject)('onessg_', ['onessg']),
    (0, util_1.BasicProject)('onessg_ejs_', ['onessg', 'jstransformer-ejs']),
    (0, util_1.BasicProject)('onessg_swig_', ['onessg', 'jstransformer-swig']),
    (0, util_1.BasicProject)('spignite_', ['spignite']),
    (0, util_1.BasicProject)('sphido_', ['@sphido/core', '@sphido/frontmatter', '@sphido/markdown', '@sphido/meta']),
    (0, util_1.AppProject)('nanogen-app', 'nanogen'),
    (0, util_1.AppProject)('eleventy-app', '@11ty/eleventy'),
    (0, util_1.BasicProject)('saber_', ['saber']),
]));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.ContainerProject)('astro-starters', [
    (0, util_1.DegitProject)('astro-basics-skel', 'github:withastro/astro/examples/basics'),
    (0, util_1.DegitProject)('astro-blog-skel', 'github:withastro/astro/examples/blog'),
    (0, util_1.DegitProject)('astro-docs-skel', 'github:withastro/astro/examples/docs'),
    (0, util_1.DegitProject)('astro-minimal-skel', 'github:withastro/astro/examples/minimal'),
    (0, util_1.DegitProject)('astro-tailwindcss-skel', 'github:withastro/astro/examples/with-tailwindcss'),
    (0, util_1.DegitProject)('astro-mdx-skel', 'github:withastro/astro/examples/with-mdx'),
    (0, util_1.DegitProject)('astro-alpine-skel', 'github:withastro/astro/examples/framework-alpine'),
    (0, util_1.DegitProject)('astro-lit-skel', 'github:withastro/astro/examples/framework-lit'),
    (0, util_1.DegitProject)('astro-preact-skel', 'github:withastro/astro/examples/framework-preact'),
    (0, util_1.DegitProject)('astro-react-skel', 'github:withastro/astro/examples/framework-react'),
    (0, util_1.DegitProject)('astro-svelte-skel', 'github:withastro/astro/examples/framework-svelte'),
    (0, util_1.DegitProject)('astro-vue-skel', 'github:withastro/astro/examples/framework-vue'),
]));
projects.define((0, util_1.BasicProject)('astro-bundle', [
    '@astrojs/tailwind',
    '@astrojs/preact', 'preact',
    '@astrojs/vue', 'vue',
    '@astrojs/svelte', 'svelte',
    '@astrojs/react', 'react', 'react-dom',
    '@astrojs/lit', 'lit', '@webcomponents/template-shadowroot',
    '@astrojs/mdx',
]));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('nuxt-bundle', [
    'create-nuxt-app', 'nuxt',
    // nuxt modules
    '@nuxtjs/moment', '@nuxtjs/composition-api', '@nuxt/content', '@nuxt/types', '@nuxtjs/svg',
    'bootstrap-vue', '@nuxtjs/axios', '@nuxtjs/vuetify', '@nuxtjs/tailwindcss',
    '@nuxtjs/toast', 'nuxt-purgecss', '@nuxtjs/markdownit', 'nuxt-buefy', 'nuxt-helmet',
    '@nuxtjs/date-fns', 'nuxt-windicss', '@unocss/nuxt', '@nuxtjs/localforage', '@chakra-ui/nuxt',
]));
projects.define((0, util_1.ContainerProject)('vue-cli-bundle', [
    (0, util_1.AppProject)('vue-app', '@vue/cli', 'vue create -d vue-skel'),
    (0, util_1.BasicProject)('vue-cli-plugins', [
        '@vue/cli-plugin-babel', '@vue/cli-plugin-typescript', '@vue/cli-plugin-eslint', '@vue/cli-plugin-pwa',
        '@vue/cli-plugin-vuex', '@vue/cli-plugin-router', 'vue-cli-plugin-vuetify', 'vue-cli-plugin-buefy',
        '@inkline/vue-cli-plugin-inkline', 'vue-cli-plugin-auto-alias', 'vue-cli-plugin-vuestic-ui'
    ]),
    (0, util_1.BasicProject)('vue-loaders', ['sass-loader', 'sass', 'stylus-loader', 'stylus', 'pug', 'pug-plain-loader']),
]));
projects.define((0, util_1.ContainerProject)('vue-pkg', [
    (0, util_1.BasicProject)('vue_', ['vue']),
    (0, util_1.BasicProject)('petite-vue_', ['petite-vue']),
    (0, util_1.BasicProject)('vue-bundle', ['vue@3', 'vue-router@4', 'pinia', 'petite-vue']),
    (0, util_1.BasicProject)('vitepress_', ['vitepress', 'vue']),
    (0, util_1.BasicProject)('vuepress_', ['vuepress']),
    // AppProject('_create-vue_3', 'create-vue@3', 'create-vue -d'),
    // AppProject('_create-vue_2', 'create-vue@2', 'create-vue -d'),
    (0, util_1.BasicProject)('vue-loaders', ['sass-loader', 'sass', 'stylus-loader', 'stylus', 'pug', 'pug-plain-loader']),
    (0, util_1.BasicProject)('vue-components', [
        '@headlessui/vue', 'vuestic-ui', 'naive-ui', 'vfonts', 'vue-ari',
        'element-plus',
    ]),
    (0, util_1.BasicProject)('vuetensils_', ['vuetensils']),
    (0, util_1.BasicProject)('vue-tailwind_', ['vue-tailwind']),
    (0, util_1.BasicProject)('inkline_', ['@inkline/inkline']),
    (0, util_1.BasicProject)('mdb-vue-ui-kit_', ['mdb-vue-ui-kit']),
]));
projects.define((0, util_1.ContainerProject)('react-pkg', [
    (0, util_1.BasicProject)('react_', ['react']),
    (0, util_1.BasicProject)('react-dom_', ['react-dom']),
    (0, util_1.BasicProject)('react-bundle', ['react', 'react-dom', 'react-router-dom@6']),
    (0, util_1.AppProject)('react-app', 'create-react-app', 'create-react-app react-app-skel'),
    // AppProject('chakra-ui-react', 'create-react-app', 'create-react-app my-app --template @chakra-ui'),
    (0, util_1.BasicProject)('chakra-ui-vite', ['@chakra-ui/react', '@emotion/react@^11', '@emotion/styled@^11', 'framer-motion@^6']),
    (0, util_1.BasicProject)('react-components', [
        '@headlessui/react', '@material-tailwind/react', 'mdb-react-ui-kit', 'flowbite-react', 'flowbite',
        'styled-components',
    ]),
    (0, util_1.BasicProject)('tailwind-react-ui_', ['tailwind-react-ui']),
    (0, util_1.BasicProject)('react-bootstrap_', ['react-bootstrap', 'bootstrap']),
    (0, util_1.BasicProject)('react-bulma_', ['react-bulma-components']),
    (0, util_1.BasicProject)('vechaiui_', ['@vechaiui/core', '@vechaiui/react', '@tailwindcss/forms']),
]));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.SuperProject)('servers-bundle', ['http-server_', 'json-server_', 'serve_', 'zero-server-app']));
projects.define((0, util_1.AppProject)('http-server_', 'http-server'));
projects.define((0, util_1.AppProject)('json-server_', 'json-server'));
projects.define((0, util_1.AppProject)('zero-server-app', 'zero'));
projects.define((0, util_1.AppProject)('serve_', 'serve'));
projects.define((0, util_1.AppProject)('angular-app', '@angular/cli', [
    'ng new angular-skel -S --routing',
    'ng new angular-sass-skel -S --style=scss --routing'
]));
projects.define((0, util_1.AppProject)('react-app', 'create-react-app', 'create-react-app react-skel'));
projects.define((0, util_1.CommandProject)('preact-app', 'preact-cli create default preact-skel'));
projects.define((0, util_1.DegitProject)('svelte-app', 'sveltejs/template', 'svelte-skel'));
projects.define((0, util_1.AppProject)('next-app', 'create-next-app', 'create-next-app next-skel'));
projects.define((0, util_1.AppProject)('nanogen-app', 'nanogen'));
projects.define((0, util_1.AppProject)('eleventy-app', '@11ty/eleventy'));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.ContainerProject)('frontend-libs-1', [
    (0, util_1.BasicProject)('lemonadejs_', ['lemonadejs']),
    (0, util_1.BasicProject)('lemonadejs_vite_', ['vite', 'lemonadejs']),
    (0, util_1.BasicProject)('lemonadejs_tailwindcss_vite_', ['vite', 'tailwindcss postcss autoprefixer', 'lemonadejs']),
    (0, util_1.BasicProject)('reefjs_', ['reefjs']),
    (0, util_1.BasicProject)('reefjs_vite_', ['vite', 'reefjs']),
    (0, util_1.BasicProject)('reefjs_tailwindcss_vite_', ['vite', 'tailwindcss postcss autoprefixer', 'reefjs']),
    (0, util_1.BasicProject)('ficusjs_', ['ficusjs']),
    (0, util_1.BasicProject)('ficusjs_vite_', ['vite', 'ficusjs']),
    (0, util_1.BasicProject)('ficusjs_tailwindcss_vite_', ['vite', 'tailwindcss postcss autoprefixer', 'ficusjs']),
    (0, util_1.BasicProject)('stimulus_vite_', ['vite', '@hotwired/stimulus']),
    (0, util_1.BasicProject)('stimulus_tailwindcss_vite_', ['vite', 'tailwindcss postcss autoprefixer', '@hotwired/stimulus']),
    (0, util_1.BasicProject)('turbo_vite_', ['vite', '@hotwired/stimulus @hotwired/turbo']),
    (0, util_1.BasicProject)('turbo_tailwindcss_vite_', ['vite', 'tailwindcss postcss autoprefixer', '@hotwired/stimulus @hotwired/turbo']),
    (0, util_1.BasicProject)('docsify_', ['docsify-cli']),
    (0, util_1.BasicProject)('vitepress_', ['vitepress vue']),
    (0, util_1.BasicProject)('lit_', ['lit']),
    (0, util_1.BasicProject)('lit_vite_', ['vite', 'lit']),
    (0, util_1.DegitProject)('inferno-boilerplate', 'infernojs/inferno-boilerplate'),
    (0, util_1.BasicProject)('vite-vue-starter', ['vite vue @vitejs/plugin-vue']),
    (0, util_1.BasicProject)('vite-vue-starter_tailwind', ['vite vue @vitejs/plugin-vue tailwindcss postcss autoprefixer']),
    (0, util_1.BasicProject)('vite-react-starter', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom']),
    (0, util_1.BasicProject)('vite-react-starter_tailwind', ['vite react react-dom @vitejs/plugin-react @types/react @types/react-dom tailwindcss postcss autoprefixer']),
    (0, util_1.BasicProject)('vite-preact-starter', ['vite preact @preact/preset-vite']),
    (0, util_1.BasicProject)('vite-preact-starter_tailwind', ['vite preact @preact/preset-vite tailwindcss postcss autoprefixer']),
    (0, util_1.BasicProject)('vite-svelte-starter', ['vite svelte @sveltejs/vite-plugin-svelte']),
    (0, util_1.BasicProject)('vite-svelte-starter_tailwind', ['vite svelte @sveltejs/vite-plugin-svelte tailwindcss postcss autoprefixer']),
]));
// ----------------------------------------------------------------------------------------

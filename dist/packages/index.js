"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const projects = new util_1.ProjectList();
exports.default = projects;
// ----------------------------------------------------------------------------------------
const packages2_1 = require("./indexes/packages2");
const css_frameworks_1 = require("./indexes/css-frameworks");
const vite_1 = require("./indexes/vite");
const bundles_1 = require("./indexes/bundles");
projects.index('packages2', packages2_1.default);
projects.index('css', css_frameworks_1.default);
projects.index('vite', vite_1.default);
projects.index('bundles', bundles_1.default);
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('npm_', ['npm']));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('misc-libs', [
    'lowdb', 'page', 'axios', 'highlight.js', 'prismjs', 'masonry-layout', 'lodash', 'rxjs',
    'd3', 'chart.js', 'moment', 'dayjs', 'underscore', 'sweetalert', 'sweetalert2', 'reveal.js',
    'html5sortable', 'csstag', 'facon', 'genel', 'marli', 'localforage', 'date-fns',
    'inferno', 'inferno-hyperscript', 'inferno-create-element', 'preact', 'preact-custom-element',
    'mithril', 'htm', 'alpinejs', 'marked', '@types/marked', 'stimulus', 'gumshoejs', 'offside-js', '',
    'markdown-it', 'markdown-it-sub', 'markdown-it-sup', 'markdown-it-footnote', 'markdown-it-deflist',
    'markdown-it-abbr', 'markdown-it-emoji', 'markdown-it-container', 'a11y-dialog',
    'fr-offcanvas', 'fr-dialogmodal', 'fr-tabs', 'fr-tooltip', 'fr-accordion', 'fr-bypasslinks',
    'concurrently', 'npm-run-all', 'globby', 'facon', 'genel', 'yaml-tag',
    '@types/mithril', '@types/node', '@types/lodash', '@types/express',
    'asciidoctor', 'ejs', 'nunjucks', 'pug', 'hamljs', '@shoelace-style/shoelace',
    '@socketsupply/tonic', 'reefjs', 'lemonadejs', 'petit-vue',
    'htm', 'vhtml', 'hyperscript', 'hyperx', 'virtual-dom', 'mithril', '@types/mithril',
]));
projects.define((0, util_1.ContainerProject)('misc-libs-3', [
    (0, util_1.BasicProject)('daisyui_', ['daisyui']),
    (0, util_1.BasicProject)('lit_', ['lit']),
    (0, util_1.BasicProject)('flowbite_', ['flowbite']),
    (0, util_1.BasicProject)('headlessui_vue', ['@headlessui/vue']),
    (0, util_1.BasicProject)('headlessui_react', ['@headlessui/react']),
    (0, util_1.BasicProject)('tinybase_', ['tinybase']),
    (0, util_1.BasicProject)('pixelarticons_', ['pixelarticons']),
    (0, util_1.BasicProject)('markdoc_', ['@markdoc/markdoc']),
    (0, util_1.BasicProject)('preact-libs', ['preact preact-router preact-helmet']),
    (0, util_1.BasicProject)('vue-libs', ['vue@3 vue-router@4 petit-vue']),
    (0, util_1.BasicProject)('react-libs', ['react react-dom react-router-dom']),
    (0, util_1.BasicProject)('sqlite3_', ['sqlite3']),
    (0, util_1.BasicProject)('better-sqlite3_', ['better-sqlite3']),
    'mock-data-libs',
]));
projects.define((0, util_1.BasicProject)('bentojs_', [
    '@bentoproject/accordion', '@bentoproject/base-carousel', '@bentoproject/date-countdown',
    '@bentoproject/date-display', '@bentoproject/embedly-card', '@bentoproject/fit-text',
    '@bentoproject/inline-gallery', '@bentoproject/instagram', '@bentoproject/jwplayer',
    '@bentoproject/lightbox', '@bentoproject/lightbox-gallery', '@bentoproject/mathml',
    '@bentoproject/selector', '@bentoproject/sidebar', '@bentoproject/social-share',
    '@bentoproject/soundcloud', '@bentoproject/stream-gallery', '@bentoproject/timeago',
    '@bentoproject/youtube',
]));
projects.define((0, util_1.BasicProject)('tagged-templates-bundle', [
    'csstag', '@emotion/css', '@emotion/react', 'facon', 'genel', 'lighterhtml', 'hypersimple', 'haunted',
    'yaml-tag',
    'htm', 'babel-plugin-htm', 'vhtml', 'hyperscript', 'hyperx', 'virtual-dom', 'mithril', '@types/mithril',
    'inferno-hyperscript', 'inferno-create-element', 'hyperapp',
]));
projects.define((0, util_1.BasicProject)('hyperhtml-bundle', [
    'hyperhtml', 'uhtml', 'uce', 'uland', 'hypersimple', 'lighterhtml', 'neverland', 'haunted', 'lit-html', 'lit',
    'ube', 'ube-ssr', 'uland-ssr', 'lighterhtml-plus',
]));
projects.define((0, util_1.BasicProject)('web-component-libs', [
    'fuco', 'atomico', 'uce', 'lit', 'lit-html', 'haunted', 'petit-vue', 'x-tag', 'hybrids',
    '@socketsupply/tonic', 'tonic-ssr', ''
]));
projects.define((0, util_1.ContainerProject)('mock-data-libs', [
    (0, util_1.BasicProject)('faker_', ['@faker-js/faker']),
    (0, util_1.BasicProject)('chance_', ['chance']),
    (0, util_1.BasicProject)('falso_', ['@ngneat/falso']),
    (0, util_1.BasicProject)('json-server_', ['json-server']),
    (0, util_1.BasicProject)('jsonplaceholder_', ['jsonplaceholder']),
    (0, util_1.BasicProject)('miragejs_', ['miragejs']),
]));
// ----------------------------------------------------------------------------------------
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
projects.define((0, util_1.ContainerProject)('css-tools', [
    (0, util_1.BasicProject)('sass_', ['sass']),
    (0, util_1.BasicProject)('gorko_', ['sass gorko']),
    (0, util_1.BasicProject)('codyframe_', ['sass', 'codyhouse-framework']),
    (0, util_1.BasicProject)('bootstrap_', ['bootstrap@5']),
    (0, util_1.BasicProject)('bootstrap_sass_', ['sass', 'bootstrap@5']),
    (0, util_1.BasicProject)('stylus_', ['stylus']),
    (0, util_1.BasicProject)('less_', ['less']),
]));
// ----------------------------------------------------------------------------------------
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
    (0, util_1.BasicProject)('harp_', ['harp']),
    (0, util_1.BasicProject)('sergey_', ['sergey']),
    (0, util_1.BasicProject)('greenwood_', ['@greenwood/cli']),
]));
projects.define((0, util_1.BasicProject)('parcel-bundle', [
    'parcel', '@parcel/resolver-glob', '@parcel/optimizer-cssnano',
    '@parcel/transformer-svg-react', '@parcel/transformer-typescript-tsc', '@parcel/transformer-coffeescript',
    '@parcel/transformer-sass', '@parcel/transformer-stylus', '@parcel/transformer-less', '@parcel/transformer-sugarss',
    '@parcel/transformer-vue',
    '@parcel/transformer-toml', '@parcel/transformer-yaml', '@parcel/transformer-pug', '@parcel/transformer-mdx',
    '@parcel/transformer-xml',
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
projects.define((0, util_1.ContainerProject)('astro-bundle', [
    (0, util_1.BasicProject)('astro_', ['astro']),
    (0, util_1.BasicProject)('astro_tailwind', ['astro @astrojs/tailwind tailwindcss']),
    (0, util_1.BasicProject)('astro_vue_', ['astro @astrojs/vue vue vue-router@4']),
    (0, util_1.BasicProject)('astro_vue_tailwind', ['astro @astrojs/vue vue vue-router@4 @astrojs/tailwind tailwindcss']),
    (0, util_1.BasicProject)('astro_svelte_', ['astro @astrojs/svelte svelte']),
    (0, util_1.BasicProject)('astro_svelte_tailwind', ['astro @astrojs/svelte svelte @astrojs/tailwind tailwindcss']),
    (0, util_1.BasicProject)('astro_react_', ['astro @astrojs/react react react-dom react-router-dom']),
    (0, util_1.BasicProject)('astro_react_tailwind', ['astro @astrojs/react react react-dom react-router-dom @astrojs/tailwind tailwindcss']),
    (0, util_1.BasicProject)('astro_preact_', ['astro @astrojs/preact preact-router preact-helmet']),
    (0, util_1.BasicProject)('astro_preact_tailwind', ['astro @astrojs/preact preact-router preact-helmet @astrojs/tailwind tailwindcss']),
    (0, util_1.BasicProject)('astro_alpinejs_', ['astro @astrojs/alpinejs alpinejs @types/alpinejs']),
    (0, util_1.BasicProject)('astro_alpinejs_tailwind', ['astro @astrojs/alpinejs alpinejs @types/alpinejs @astrojs/tailwind tailwindcss']),
    (0, util_1.BasicProject)('astro_lit_', ['astro @astrojs/lit lit @webcomponents/template-shadowroot']),
    // BasicProject('astro_lit_tailwind', ['astro @astrojs/lit lit @webcomponents/template-shadowroot @astrojs/tailwind tailwindcss']),
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
    // BasicProject('vechaiui_', ['@vechaiui/core','@vechaiui/react','@tailwindcss/forms']),
]));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.ContainerProject)('servers-bundle', [
    'http-server_', 'json-server_', 'serve_', 'zero-server-app', 'live-server_'
]));
projects.define((0, util_1.AppProject)('http-server_', 'http-server'));
projects.define((0, util_1.AppProject)('json-server_', 'json-server'));
projects.define((0, util_1.AppProject)('zero-server-app', 'zero'));
projects.define((0, util_1.AppProject)('serve_', 'serve'));
projects.define((0, util_1.AppProject)('live-server_', 'live-server'));
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

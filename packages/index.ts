import { AppProject, BasicProject, CommandProject, ContainerProject, DegitProject, ProjectList, SuperProject } from "./util";

const projects = new ProjectList();
export default projects;

// ----------------------------------------------------------------------------------------

import packages2 from "./indexes/packages2";
import cssFrameworks from "./indexes/css-frameworks";
import vite from './indexes/vite';
import bundles from './indexes/bundles';

projects.index('packages2', packages2);
projects.index('css', cssFrameworks);
projects.index('vite', vite);
projects.index('bundles', bundles);

// ----------------------------------------------------------------------------------------

projects.define(
    BasicProject('npm_', ['npm'])
)

// ----------------------------------------------------------------------------------------

projects.define(
    BasicProject('misc-libs', [
        'lowdb','page','axios','highlight.js','prismjs','masonry-layout','lodash','rxjs',
        'd3','chart.js','moment','dayjs','underscore','sweetalert','sweetalert2','reveal.js',
        'html5sortable','csstag','facon','genel','marli','localforage',
        'hyperhtml','uhtml','hypersimple','neverland','hyperhtml-element',
        'inferno','inferno-hyperscript','inferno-create-element','preact','preact-custom-element',
        'mithril','htm','alpinejs','marked','@types/marked','stimulus','gumshoejs','offside-js','',
        'markdown-it','markdown-it-sub','markdown-it-sup','markdown-it-footnote','markdown-it-deflist',
        'markdown-it-abbr','markdown-it-emoji','markdown-it-container','a11y-dialog',
        'fr-offcanvas','fr-dialogmodal','fr-tabs','fr-tooltip','fr-accordion','fr-bypasslinks',
        'concurrently','npm-run-all','globby',
        '@types/mithril','@types/node','@types/lodash','@types/express',
        'asciidoctor','ejs','nunjucks','pug','hamljs',
        '@socketsupply/tonic','reefjs','lemonadejs','petit-vue',
        'facon','genel','lighterhtml','hypersimple','haunted','yaml-tag',
        'htm','vhtml','hyperscript','hyperx','virtual-dom','mithril','@types/mithril',
        'hyperhtml','uhtml','uce','uland','neverland','ube','ube-ssr','uland-ssr','lighterhtml-plus',
    ])
)

projects.define(
    ContainerProject('misc-libs-3', [
        BasicProject('daisyui_', ['daisyui']),
        BasicProject('lit_', ['lit']),
        BasicProject('flowbite_', ['flowbite']),
        BasicProject('headlessui_vue', ['@headlessui/vue']),
        BasicProject('headlessui_react', ['@headlessui/react']),
        BasicProject('tinybase_', ['tinybase']),
        BasicProject('pixelarticons_', ['pixelarticons']),
        BasicProject('markdoc_', ['@markdoc/markdoc']),
        BasicProject('preact-libs', ['preact preact-router preact-helmet']),
        BasicProject('vue-libs', ['vue@3 vue-router@4 petit-vue']),
        BasicProject('react-libs', ['react react-dom react-router-dom']),
        'mock-data-libs',
    ])
)

projects.define(
    BasicProject('tagged-templates-bundle', [
        'csstag','@emotion/css','@emotion/react','facon','genel','lighterhtml','hypersimple','haunted',
        'yaml-tag',
        'htm','babel-plugin-htm','vhtml','hyperscript','hyperx','virtual-dom','mithril','@types/mithril',
        'inferno-hyperscript','inferno-create-element','hyperapp',
    ])
)

projects.define(
    BasicProject('hyperhtml-bundle', [
        'hyperhtml','uhtml','uce','uland','hypersimple','lighterhtml','neverland','haunted','lit-html','lit',
        'ube','ube-ssr','uland-ssr','lighterhtml-plus',
    ])
)

projects.define(
    BasicProject('web-component-libs', [
        'fuco','atomico','uce','lit','lit-html','haunted','petit-vue','x-tag','hybrids',
        '@socketsupply/tonic','tonic-ssr',''
    ])
)

projects.define(
    ContainerProject('mock-data-libs', [
        BasicProject('faker_', ['@faker-js/faker']),
        BasicProject('chance_', ['chance']),
        BasicProject('falso_', ['@ngneat/falso']),
        BasicProject('json-server_', ['json-server']),
        BasicProject('jsonplaceholder_', ['jsonplaceholder']),
        BasicProject('miragejs_', ['miragejs']),
    ])
)

// ----------------------------------------------------------------------------------------

projects.define(
    BasicProject('css-libs', [
        '@fortawesome/fontawesome-free','@fortawesome/fontawesome-svg-core','@fortawesome/free-solid-svg-icons',
        '@emotion/react','@emotion/styled','@emotion/css','@emotion/babel-plugin',
        'animate.css','bootstrap','bulma','materialize-css@next','milligram','spectre.css',
        'tachyons@4.12.0','tailwindcss','normalize.css','minireset.css','open-props','dashvar','pollen-css',
        'postcss','autoprefixer','postcss-preset-env',
    ])
)

projects.define(
    BasicProject('css-libs-2', [
        // resets
        'modern-css-reset','normalize.css','modern-normalize','minireset.css',
        // small css frameworks
        'purecss','milligram','picnic','chota','@picocss/pico',
        // 'real' css frameworks
        'bootstrap@5','bootswatch','bulma','foundation-sites','@primer/css','spectre.css',
        // css variables
        'open-props','dashvar','pollen-css',
    ])
)

projects.define(
    ContainerProject('css-tools', [
        BasicProject('sass_', ['sass']),
        BasicProject('gorko_', ['sass gorko']),
        BasicProject('codyframe_', ['sass','codyhouse-framework']),
        BasicProject('bootstrap_', ['bootstrap@5']),
        BasicProject('bootstrap_sass_', ['sass','bootstrap@5']),
        BasicProject('stylus_', ['stylus']),
        BasicProject('less_', ['less']),
    ])
)

// ----------------------------------------------------------------------------------------

projects.define(
    ContainerProject('typescript-pkg', [
        BasicProject('typescript_', ['typescript']),
        BasicProject('types_', ['@types/node','@types/mithril','@types/lodash']),
        BasicProject('webpack_', ['typescript','ts-loader']),
        BasicProject('babel_', ['@babel/preset-typescript']),
        BasicProject('parcel_', ['@parcel/transformer-typescript-tsc']),
        BasicProject('tinyhttp_', [
            '@tinyhttp/app','@tinyhttp/logger','@tinyhttp/etag','@tinyhttp/cookie','@tinyhttp/cors','@tinyhttp/favicon',
            '@tinyhttp/jsonp','@tinyhttp/markdown','malibu','ws','tinyws'
        ]),
        BasicProject('rxjs_', ['rxjs']),
        BasicProject('injection_', ['inversify','diod','typed-inject','typedi','reflect-metadata','tsyringe'])
    ])
)


projects.define(
    ContainerProject('staticgen-bundle', [
        BasicProject('vuepress_', ['vuepress']),
        BasicProject('vuepress-next_', ['vuepress@next']),
        BasicProject('vitepress_', ['vitepress','vue']),
        BasicProject('20ful_', ['20ful']),
        BasicProject('hydrogen-cli_', ['hydrogen-cli']),
        BasicProject('mini-site-generator_', ['mini-site-generator']),
        BasicProject('onessg_', ['onessg']),
        BasicProject('onessg_ejs_', ['onessg','jstransformer-ejs']),
        BasicProject('onessg_swig_', ['onessg','jstransformer-swig']),
        BasicProject('spignite_', ['spignite']),
        BasicProject('sphido_', ['@sphido/core','@sphido/frontmatter','@sphido/markdown','@sphido/meta']),
        AppProject('nanogen-app', 'nanogen'),
        AppProject('eleventy-app', '@11ty/eleventy'),
        BasicProject('harp_', ['harp']),
        BasicProject('sergey_', ['sergey']),
        BasicProject('greenwood_', ['@greenwood/cli']),
    ])
)

projects.define(
    BasicProject('parcel-bundle', [
        'parcel','@parcel/resolver-glob','@parcel/optimizer-cssnano',
        '@parcel/transformer-svg-react','@parcel/transformer-typescript-tsc','@parcel/transformer-coffeescript',
        '@parcel/transformer-sass','@parcel/transformer-stylus','@parcel/transformer-less','@parcel/transformer-sugarss',
        '@parcel/transformer-vue',
        '@parcel/transformer-toml','@parcel/transformer-yaml','@parcel/transformer-pug','@parcel/transformer-mdx',
        '@parcel/transformer-xml',
    ])
)


// ----------------------------------------------------------------------------------------

projects.define(
    ContainerProject('astro-starters', [
        DegitProject('astro-basics-skel', 'github:withastro/astro/examples/basics'),
        DegitProject('astro-blog-skel', 'github:withastro/astro/examples/blog'),
        DegitProject('astro-docs-skel', 'github:withastro/astro/examples/docs'),
        DegitProject('astro-minimal-skel', 'github:withastro/astro/examples/minimal'),
        DegitProject('astro-tailwindcss-skel', 'github:withastro/astro/examples/with-tailwindcss'),
        DegitProject('astro-mdx-skel', 'github:withastro/astro/examples/with-mdx'),
        DegitProject('astro-alpine-skel', 'github:withastro/astro/examples/framework-alpine'),
        DegitProject('astro-lit-skel', 'github:withastro/astro/examples/framework-lit'),
        DegitProject('astro-preact-skel', 'github:withastro/astro/examples/framework-preact'),
        DegitProject('astro-react-skel', 'github:withastro/astro/examples/framework-react'),
        DegitProject('astro-svelte-skel', 'github:withastro/astro/examples/framework-svelte'),
        DegitProject('astro-vue-skel', 'github:withastro/astro/examples/framework-vue'),
    ])
)

projects.define(
    ContainerProject('astro-bundle', [
        BasicProject('astro_', ['astro']),
        BasicProject('astro_tailwind', ['astro @astrojs/tailwind tailwindcss']),
        BasicProject('astro_vue_', ['astro @astrojs/vue vue vue-router@4']),
        BasicProject('astro_vue_tailwind', ['astro @astrojs/vue vue vue-router@4 @astrojs/tailwind tailwindcss']),
        BasicProject('astro_svelte_', ['astro @astrojs/svelte svelte']),
        BasicProject('astro_svelte_tailwind', ['astro @astrojs/svelte svelte @astrojs/tailwind tailwindcss']),
        BasicProject('astro_react_', ['astro @astrojs/react react react-dom react-router-dom']),
        BasicProject('astro_react_tailwind', ['astro @astrojs/react react react-dom react-router-dom @astrojs/tailwind tailwindcss']),
        BasicProject('astro_preact_', ['astro @astrojs/preact preact-router preact-helmet']),
        BasicProject('astro_preact_tailwind', ['astro @astrojs/preact preact-router preact-helmet @astrojs/tailwind tailwindcss']),
        BasicProject('astro_alpinejs_', ['astro @astrojs/alpinejs alpinejs @types/alpinejs']),
        BasicProject('astro_alpinejs_tailwind', ['astro @astrojs/alpinejs alpinejs @types/alpinejs @astrojs/tailwind tailwindcss']),
        BasicProject('astro_lit_', ['astro @astrojs/lit lit @webcomponents/template-shadowroot']),
        // BasicProject('astro_lit_tailwind', ['astro @astrojs/lit lit @webcomponents/template-shadowroot @astrojs/tailwind tailwindcss']),
    ])
)

// ----------------------------------------------------------------------------------------

projects.define(
    BasicProject('nuxt-bundle', [
        'create-nuxt-app','nuxt',
        // nuxt modules
        '@nuxtjs/moment','@nuxtjs/composition-api','@nuxt/content','@nuxt/types','@nuxtjs/svg',
        'bootstrap-vue','@nuxtjs/axios','@nuxtjs/vuetify','@nuxtjs/tailwindcss',
        '@nuxtjs/toast','nuxt-purgecss','@nuxtjs/markdownit','nuxt-buefy','nuxt-helmet',
        '@nuxtjs/date-fns','nuxt-windicss','@unocss/nuxt','@nuxtjs/localforage','@chakra-ui/nuxt',
    ])
)

projects.define(
    ContainerProject('vue-cli-bundle', [
        AppProject('vue-app', '@vue/cli', 'vue create -d vue-skel'),
        BasicProject('vue-cli-plugins', [
            '@vue/cli-plugin-babel','@vue/cli-plugin-typescript','@vue/cli-plugin-eslint','@vue/cli-plugin-pwa',
            '@vue/cli-plugin-vuex','@vue/cli-plugin-router','vue-cli-plugin-vuetify','vue-cli-plugin-buefy',
            '@inkline/vue-cli-plugin-inkline','vue-cli-plugin-auto-alias','vue-cli-plugin-vuestic-ui'
        ]),
        BasicProject('vue-loaders', ['sass-loader','sass','stylus-loader','stylus','pug','pug-plain-loader']),
    ])
)

projects.define(
    ContainerProject('vue-pkg', [
        BasicProject('vue_', ['vue']),
        BasicProject('petite-vue_', ['petite-vue']),
        BasicProject('vue-bundle', ['vue@3','vue-router@4','pinia','petite-vue']),
        BasicProject('vitepress_', ['vitepress','vue']),
        BasicProject('vuepress_', ['vuepress']),
        // AppProject('_create-vue_3', 'create-vue@3', 'create-vue -d'),
        // AppProject('_create-vue_2', 'create-vue@2', 'create-vue -d'),
        BasicProject('vue-loaders', ['sass-loader','sass','stylus-loader','stylus','pug','pug-plain-loader']),
        BasicProject('vue-components', [
            '@headlessui/vue','vuestic-ui','naive-ui','vfonts','vue-ari',
            'element-plus',
        ]),
        BasicProject('vuetensils_', ['vuetensils']),
        BasicProject('vue-tailwind_', ['vue-tailwind']),
        BasicProject('inkline_', ['@inkline/inkline']),
        BasicProject('mdb-vue-ui-kit_', ['mdb-vue-ui-kit']),
    ])
)

projects.define(
    ContainerProject('react-pkg', [
        BasicProject('react_', ['react']),
        BasicProject('react-dom_', ['react-dom']),
        BasicProject('react-bundle', ['react', 'react-dom', 'react-router-dom@6']),
        AppProject('react-app', 'create-react-app', 'create-react-app react-app-skel'),
        // AppProject('chakra-ui-react', 'create-react-app', 'create-react-app my-app --template @chakra-ui'),
        BasicProject('chakra-ui-vite', ['@chakra-ui/react','@emotion/react@^11','@emotion/styled@^11','framer-motion@^6']),
        BasicProject('react-components', [
            '@headlessui/react','@material-tailwind/react','mdb-react-ui-kit','flowbite-react','flowbite',
            'styled-components',
        ]),
        BasicProject('tailwind-react-ui_',['tailwind-react-ui']),
        BasicProject('react-bootstrap_', ['react-bootstrap','bootstrap']),
        BasicProject('react-bulma_', ['react-bulma-components']),
        // BasicProject('vechaiui_', ['@vechaiui/core','@vechaiui/react','@tailwindcss/forms']),
    ])
)

// ----------------------------------------------------------------------------------------

projects.define(
    ContainerProject('servers-bundle', [ 
        'http-server_','json-server_','serve_','zero-server-app','live-server_'
    ])
)

projects.define(
    AppProject('http-server_', 'http-server')
)

projects.define(
    AppProject('json-server_', 'json-server')
)

projects.define(
    AppProject('zero-server-app', 'zero')
)

projects.define(
    AppProject('serve_', 'serve')
)

projects.define(
    AppProject('live-server_', 'live-server')
)

projects.define(
    AppProject('angular-app', '@angular/cli', [
        'ng new angular-skel -S --routing',
        'ng new angular-sass-skel -S --style=scss --routing'
    ])
)

projects.define(
    AppProject('react-app', 'create-react-app', 'create-react-app react-skel')
)

projects.define(
    CommandProject('preact-app', 'preact-cli create default preact-skel')
)

projects.define(
    DegitProject('svelte-app', 'sveltejs/template', 'svelte-skel')
)

projects.define(
    AppProject('next-app', 'create-next-app', 'create-next-app next-skel')
)

projects.define(
    AppProject('nanogen-app', 'nanogen')
)

projects.define(
    AppProject('eleventy-app', '@11ty/eleventy')
)


// ----------------------------------------------------------------------------------------


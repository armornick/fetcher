import { AppProject, BasicProject, CommandProject, ContainerProject, DegitProject, ProjectList, SuperProject } from "./util";
import packages2 from "./_packages2";

const projects = new ProjectList();
export default projects;

// ----------------------------------------------------------------------------------------

// packages2(projects);

// ----------------------------------------------------------------------------------------

projects.define(
    BasicProject('misc-libs', [
        'lowdb','page','axios','highlight.js','prismjs','masonry-layout','lodash','rxjs',
        'd3','chart.js','moment','dayjs','underscore','sweetalert','sweetalert2','reveal.js',
        'html5sortable','csstag','facon','genel','marli','localforage',
        'hyperhtml','uhtml','hypersimple','neverland','hyperhtml-element',
        'inferno','inferno-hyperscript','inferno-create-element','preact','solid-js',
        'mithril','htm','alpinejs','marked','stimulus','gumshoejs','offside-js','',
        'markdown-it','markdown-it-sub','markdown-it-sup','markdown-it-footnote','markdown-it-deflist',
        'markdown-it-abbr','markdown-it-emoji','markdown-it-container','a11y-dialog',
        'fr-offcanvas','fr-dialogmodal','fr-tabs','fr-tooltip','fr-accordion','fr-bypasslinks',
        'concurrently','npm-run-all',
        '@types/mithril','@types/node','@types/lodash','@types/express',
    ])
)

projects.define(
    BasicProject('misc-libs-2', [
        '@socketsupply/tonic','reefjs','lemonadejs','petit-vue',
        'facon','genel','lighterhtml','hypersimple','haunted','yaml-tag',
        'htm','vhtml','hyperscript','hyperx','virtual-dom','mithril','@types/mithril',
        'hyperhtml','uhtml','uce','uland','neverland','ube','ube-ssr','uland-ssr','lighterhtml-plus',
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
    ContainerProject('css-frameworks', [
        BasicProject('bootstrap_', ['bootstrap']),
        BasicProject('bulma_', ['bulma']),
        BasicProject('codyhouse-framework_', ['codyhouse-framework']),
        BasicProject('material-tailwind_', ['tailwindcss', '@material-tailwind/html']),
        BasicProject('niui_', ['niui-npm']),
        BasicProject('normalize_', ['normalize.css']),
        BasicProject('modern-css-reset_', ['modern-css-reset']),
        BasicProject('minireset_', ['minireset.css']),
        BasicProject('classless', 
            ['water.css','sakura.css','awsm.css','axist','bamboo.css','holiday.css','markdown-air','marx-css','simpledotcss','picnic']),
        DegitProject('classlesscss_', 'github:emareg/classlesscss', false),
        DegitProject('skeleton_', 'github:dhg/Skeleton', false),
        BasicProject('purecss_', ['purecss']),
        BasicProject('foundation_', ['foundation-sites']),
        BasicProject('primer_', ['@primer/css']),
        BasicProject('material-components_', ['material-components-web']),
    ])
)

projects.define(
    ContainerProject('css-frameworks-2', [
        BasicProject('react-bootstrap_', ['react-bootstrap','bootstrap','react','react-dom']),
        BasicProject('bootstrap-vue_', ['bootstrap-vue','bootstrap','vue']),
        BasicProject('bootstrap-vue_4_', ['bootstrap-vue','bootstrap@4','vue']),
        BasicProject('react-bulma-components_', ['react-bulma-components','react','react-dom']),
        BasicProject('buefy_', ['buefy','vue']),
        BasicProject('sveltestrap_', ['sveltestrap','bootstrap','svelte']),
        BasicProject('sveltestrap_4_', ['sveltestrap@4','bootstrap@4','svelte']),
        BasicProject('preact-material-components_', ['preact-material-components','preact']),
        BasicProject('smelte_', ['smelte','tailwindcss','svelte']),
        BasicProject('flowbite_', ['flowbite',"tailwindcss",'postcss','autoprefixer']),
        BasicProject('flowbite-react_', ['flowbite-react','flowbite',"tailwindcss",'postcss','autoprefixer']),
        BasicProject('flowbite-svelte_', ['svelte','tailwindcss','postcss','autoprefixer','flowbite-svelte']),
        BasicProject('mui-material_', ['@mui/material','@emotion/react','@emotion/styled','react','react-dom']),
        BasicProject('mui-joy_', ['@mui/joy','@emotion/react','@emotion/styled','react','react-dom']),
        // BasicProject('agnostic-react_', ['agnostic-react','uuid','react','react-dom']),
        BasicProject('agnostic-vue_', ['agnostic-vue','vue']),
        BasicProject('agnostic-svelte_', ['agnostic-svelte','svelte']),
    ])
)

projects.define(
    ContainerProject('bootstrap-bundle', [
        BasicProject('bootstrap_', ['bootstrap@5.2.0-beta1','@popperjs/core']),
        BasicProject('bootswatch_', ['bootswatch']),
        BasicProject('bootstrap-4_', ['bootstrap@4','bootstrap-vue']),
        BasicProject('material-kit_', ['material-kit']),
        BasicProject('mdbootstrap', ['mdb-ui-kit','mdb-react-ui-kit','mdb-vue-ui-kit'])
    ])
)

projects.define(
    BasicProject('preact-bundle', [
        'preact','preact-router','preact-portal','preact-richtextarea','preact-token-input',
        'preact-virtual-list','preact-layout','preact-helmet','preact-custom-scrollbars',
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
    BasicProject('twind-bundle', [
        'twind','@twind/aspect-ratio','@twind/content','@twind/forms','@twind/line-clamp','@twind/typography',
        '@twind/preact','@twind/wmr','construct-style-sheets-polyfill',
    ])
)

projects.define(
    ContainerProject('material-design-bundle', [
        BasicProject('material-tailwind-bundle', ['@material-tailwind/html','@material-tailwind/react']),
        BasicProject('material-design-lite_', ['material-design-lite','vue-mdl']),
        BasicProject('smelte_', ['smelte']),
        BasicProject('vuetify_', ['vuetify']),
        BasicProject('materialize_', ['react-materialize', 'materialize-css@next']),
        BasicProject('mdbootstrap', ['mdb-cli','mdb-ui-kit','mdb-react-ui-kit','mdb-vue-ui-kit']),
        BasicProject('tw-elements_', ['tw-elements']),
        DegitProject('mdb-webpack-starter_', 'https://github.com/mdbootstrap/mdb-webpack-starter', 'mdb-webpack-starter'),
        'mui-bundle',
    ])
)

projects.define(
    BasicProject('mui-bundle', [
        '@mui/material','@emotion/react','@emotion/styled','@mui/icons-material',
        '@mui/joy','@mui/base','@mui/system',
    ])
)

projects.define(
    ContainerProject('mdbootstrap-bundle', [
        DegitProject('mdb-ui-kit', 'https://github.com/mdbootstrap/mdb-ui-kit#4.2.0'),
        DegitProject('mdb-vue-ui-kit', 'https://github.com/mdbootstrap/mdb-vue-ui-kit#1.14.0'),
        DegitProject('mdb-react-ui-kit', 'https://github.com/mdbootstrap/mdb-react-ui-kit#4.0.0'),
        DegitProject('mdb-angular-ui-kit', 'https://github.com/mdbootstrap/mdb-angular-ui-kit#2.3.0'),
        DegitProject('tw-elements-starter', 'https://github.com/mdbootstrap/Tailwind-Elements/site'),
        DegitProject('tw-elements-src', 'https://github.com/mdbootstrap/Tailwind-Elements'),
    ])
)

// ----------------------------------------------------------------------------------------

projects.define(
    BasicProject('postcss-bundle', [
        'postcss','autoprefixer','atcss','cssnano','precss','rucksack-css','postcss-utilities',
        'postcss-cli','postcss-layout','precss','postcss-preset-env',
        'postcss-advanced-variables','postcss-bem','postcss-conditionals','postcss-each',
        'postcss-for','postcss-import','postcss-nested','postcss-sassy-mixins','postcss-simple-vars'
    ])
)

projects.define(
    BasicProject('sass-bundle', [
        'sass',
        'cirrus-ui','iotacss','sierra-library','susy','open-color','shevy','typi','gerillass',
        'bulma','bootstrap@5.2.0-beta1','bootswatch','foundation-sites','gorko',
    ])
)

projects.define(
    ContainerProject('css-in-js-bundle', [
        BasicProject('emotion-bundle', ['@emotion/css','@emotion/react','@emotion/styled','@emotion/babel-plugin']),
        BasicProject('jss-bundle', [
            'jss','jss-preset-default','color','react-jss','styled-jss',
            'aphrodite-jss','vue-jss','jss-simple','jss-sheet-loader','jss-css','babel-plugin-jss-css',
            'prejss','babel-plugin-transform-prejss','postjss','prejss-cli','prejss-styles-loader','postcss-js',
        ]),
        BasicProject('styled-components-bundle', ['styled-components','styled-theming','babel-plugin-styled-components']),
        BasicProject('cssx-bundle', ['cssx','cssx-transpiler','cssx-cli','rollup-plugin-cssx']),
        BasicProject('stitches-bundle', ['@stitches/core','@stitches/react']),
        BasicProject('twin-macro_', ['twin.macro']),
        BasicProject('goober_', ['goober']),
        AppProject('absurd-app', 'absurd'),
        BasicProject('tailwind-components_', ['babel-plugin-macros','tailwind.macro','babel-plugin-tailwind-components']),
    ])
)

projects.define(
    ContainerProject('atomic-css-tools', [
        BasicProject('tailwind_', ['tailwindcss']),
        BasicProject('tailwind-postcss_', ['tailwindcss','postcss','autoprefixer']),
        BasicProject('tailwind-plugins', ['@tailwindcss/typography','@tailwindcss/forms','@tailwindcss/line-clamp','tailwind-color-vars']),
        BasicProject('css-variables', ['open-props','dashvar','pollen-css']),
        BasicProject('windicss-cli_', ['windicss']),
        BasicProject('windicss-vite_', ['vite-plugin-windicss','windicss']),
        BasicProject('windicss-svelte_', ['svelte-windicss-preprocess']),
        BasicProject('unocss-bundle', [
            'unocss','@unocss/preset-mini','@unocss/preset-wind','@unocss/preset-attributify','@unocss/preset-icons','@unocss/preset-web-fonts',
            '@unocss/preset-typography','@unocss/vite',
        ]),
        BasicProject('unocss-preset-chroma_', ['unocss-preset-chroma']),
        'twind-bundle',
        BasicProject('twin-macro_', ['twin.macro']),
        BasicProject('goober_', ['goober']),
        BasicProject('otion_', ['otion']),
        BasicProject('csstag_', ['csstag','babel-plugin-csstag']),
        // tachyons technically counts but is old now
        BasicProject('tachyons_', ['tachyons@4.12.0']),
    ])
)

projects.define(
    ContainerProject('tailwind-pkg', [
        BasicProject('tailwind_', ['tailwindcss']),
        BasicProject('tailwind-postcss_', ['tailwindcss','postcss','autoprefixer']),
        BasicProject('tailwind-plugins', ['@tailwindcss/typography','@tailwindcss/forms','@tailwindcss/line-clamp','tailwind-color-vars']),
        BasicProject('windstrap_', ['windstrap']),
        BasicProject('flowbite_', ['flowbite']),
        BasicProject('kutty_', ['kutty']),
        BasicProject('sailui_', ['sailui']),
        BasicProject('daisyui_', ['daisyui']),
        BasicProject('a17t_', ['a17t']),
        BasicProject('tw-elements_', ['tw-elements']),
    ])
)

projects.define(
    ContainerProject('tailwind-ui-kits', [
        DegitProject('merakiui-local', 'github:merakiui/merakiui'),
        DegitProject('tailwindlayout-local', 'github:lalokalabs/tailwindlayout'),
        DegitProject('hyperui-local', 'github:markmead/hyperui'),
        DegitProject('tailmin-local', 'github:otezz/tailmin'),
    ])
)

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



// ----------------------------------------------------------------------------------------

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
        BasicProject('saber_', ['saber']),
    ])
)

projects.define(
    ContainerProject('wmr-pkg', [
        BasicProject('wmr-bundle', ['wmr','create-wmr','@wmrjs/directory-import','@wmrjs/nomodule','@wmrjs/service-worker','preact-iso']),
        AppProject('wmr-app', 'create-wmr', 'create-wmr wmr-skel'),
    ])
)

// ----------------------------------------------------------------------------------------

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
    BasicProject('astro-bundle', [
        '@astrojs/tailwind',
        '@astrojs/preact','preact',
        '@astrojs/vue','vue',
        '@astrojs/svelte','svelte',
        '@astrojs/react','react','react-dom',
        '@astrojs/lit','lit','@webcomponents/template-shadowroot',
        '@astrojs/mdx',
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
        BasicProject('vechaiui_', ['@vechaiui/core','@vechaiui/react','@tailwindcss/forms']),
    ])
)

// ----------------------------------------------------------------------------------------

projects.define(
    AppProject('npm_', 'npm')
)

projects.define(
    SuperProject('servers-bundle', [ 'http-server_','json-server_','serve_','zero-server-app' ])
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
    AppProject('tiddlywiki_', 'tiddlywiki')
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

projects.define(
    AppProject('wintersmith-app', 'wintersmith', 'wintersmith new wintersmith-skel')
)

projects.define(
    AppProject('cuttlebelle-app', 'cuttlebelle')
)

projects.define(
    AppProject('forgo-app', 'create-forgo-app', 'create-forgo-app forgo-skel')
)

projects.define(
    AppProject('nexe-app', 'nexe')
)

// ----------------------------------------------------------------------------------------

projects.define(
    BasicProject('polished_', ['polished'])
)

projects.define(
    BasicProject('ficusjs_', ['ficusjs'])
)

projects.define(
    BasicProject('npm_', ['npm'])
)


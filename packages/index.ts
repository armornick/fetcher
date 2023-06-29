import { AppProject, BasicProject, CommandProject, ContainerProject, DegitProject, ProjectList, SuperProject } from "./util";

const projects = new ProjectList();
export default projects;

// ----------------------------------------------------------------------------------------

projects.define(
    BasicProject('npm_', ['npm@latest'])
)

// ----------------------------------------------------------------------------------------

projects.define(
    ContainerProject('cache-bundle', [
        'npm_',
        'frontend-libs','template-libs','template-libs-2',
        'tagged-templates-bundle','mock-data-libs','indexeddb-libs',
        'preact-bundle','vite-starters-official',
        'css-frameworks','css-libs','css-libs-2','sass-bundle','atomic-css-tools',
        'tailwind-bundle',
        'staticgen-bundle','servers-bundle',
    ])
)

// ----------------------------------------------------------------------------------------

projects.define(
    BasicProject('frontend-libs', [
        'axios','highlight.js','prismjs','masonry-layout','lodash','rxjs',
        'd3','chart.js','moment','dayjs','underscore','reveal.js',
        'html5sortable','csstag','facon','genel','marli','localforage','date-fns',
        'inferno','inferno-hyperscript','inferno-create-element','preact','preact-custom-element',
        'htm','alpinejs','marked','@types/marked','stimulus','gumshoejs','offside-js',
        'markdown-it','markdown-it-sub','markdown-it-sup','markdown-it-footnote','markdown-it-deflist',
        'markdown-it-abbr','markdown-it-emoji','markdown-it-container','a11y-dialog',
        'concurrently','npm-run-all','globby','facon','genel','yaml-tag',
        '@types/node','@types/lodash','@types/express',
        'asciidoctor','ejs','nunjucks','pug','hamljs','@shoelace-style/shoelace',
        '@socketsupply/tonic','reefjs','lemonadejs','petit-vue',
        'htm','vhtml','hyperscript','hyperx','virtual-dom','mithril','@types/mithril',
        'lit','lit-html','goober','ultramatter','gray-matter',
        'textile-js','stextile','polished','color','colorjs.io','values.js',
        '@pandacss/dev',
    ])
)

projects.define(
    BasicProject('bentojs_', [
        '@bentoproject/accordion','@bentoproject/base-carousel','@bentoproject/date-countdown',
        '@bentoproject/date-display','@bentoproject/embedly-card','@bentoproject/fit-text',
        '@bentoproject/inline-gallery','@bentoproject/instagram','@bentoproject/jwplayer',
        '@bentoproject/lightbox','@bentoproject/lightbox-gallery','@bentoproject/mathml',
        '@bentoproject/selector','@bentoproject/sidebar','@bentoproject/social-share',
        '@bentoproject/soundcloud','@bentoproject/stream-gallery','@bentoproject/timeago',
        '@bentoproject/youtube',
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
    BasicProject('web-component-libs', [
        'fuco','atomico','lit','lit-html','haunted','petit-vue','x-tag','hybrids',
        '@socketsupply/tonic','tonic-ssr','alpinejs',
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
    BasicProject('template-libs', ['mustache','handlebars','nunjucks','hogan.js','pug','ejs','eta'])
)

projects.define(
    ContainerProject('template-libs-2', [
        BasicProject('nunjucks-cli_', ['nunjucks-cli']),
        BasicProject('cli-njk_', ['cli-njk']),
        BasicProject('pug-cli_', ['pug-cli']),
        BasicProject('jstransformer-cli_', ['jstransformer-cli','jstransformer-pug','jstransformer-nunjucks','jstransformer-ejs']),
    ])
)

projects.define(
    BasicProject('indexeddb-libs', [
        'localforage','jsstore','zangodb','dexie','dexie-react-hooks','idb','idb-keyval','lovefield',
        'pouchdb','pouchdb-server',
    ])
)

projects.define(
    BasicProject('preact-bundle', [
        'preact','preact-router','preact-portal','preact-richtextarea','preact-token-input',
        'preact-virtual-list','preact-layout','preact-helmet','preact-custom-scrollbars',
    ])
)

projects.define(
    BasicProject('vue-bundle', [
        'vue@latest','vue-router@4','pinia'
    ])
)

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

// ----------------------------------------------------------------------------------------

projects.define(
    ContainerProject('css-frameworks', [
        BasicProject('bootstrap_', ['bootstrap@5', 'sass','bootswatch']),
        BasicProject('codyhouse-framework_', ['codyhouse-framework','sass']),
        BasicProject('material-tailwind_', ['tailwindcss', '@material-tailwind/html']),
        BasicProject('normalize_', ['normalize.css']),
        BasicProject('modern-css-reset_', ['modern-css-reset']),
        BasicProject('minireset_', ['minireset.css']),
        BasicProject('classless', 
            ['water.css','sakura.css','awsm.css','axist','bamboo.css','holiday.css','markdown-air','marx-css','simpledotcss','picnic']),
        DegitProject('classlesscss_', 'github:emareg/classlesscss', false),
        BasicProject('purecss_', ['purecss']),
        BasicProject('primer_', ['@primer/css']),
        BasicProject('radix_colors_', ['@radix-ui/colors']),
        BasicProject('material-components_', ['material-components-web']),
        BasicProject('sass_', ['sass','gorko','codyhouse-framework',]),
        BasicProject('fontawesome_', ['@fortawesome/fontawesome-free','@fortawesome/fontawesome-svg-core','@fortawesome/free-solid-svg-icons',]),
    ])
)

projects.define(
    BasicProject('css-libs', [
        '@fortawesome/fontawesome-free','@fortawesome/fontawesome-svg-core','@fortawesome/free-solid-svg-icons',
        '@emotion/react','@emotion/styled','@emotion/css','@emotion/babel-plugin','tachyons@4',
        'animate.css','bootstrap','materialize-css@next','milligram','spectre.css',
        'tailwindcss','normalize.css','minireset.css','open-props','dashvar','pollen-css',
        'postcss','postcss-js','autoprefixer','postcss-preset-env','sass','gorko','codyhouse-framework',
    ])
)

projects.define(
    BasicProject('css-libs-2', [
        // resets
        'modern-css-reset','normalize.css','modern-normalize','minireset.css',
        // small css frameworks
        'purecss','milligram','picnic','chota','@picocss/pico',
        // 'real' css frameworks
        'bootstrap@5','bootswatch','@primer/css','spectre.css',
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
    ])
)

projects.define(
    BasicProject('postcss-bundle', [
        'postcss','postcss-js',
        'autoprefixer','atcss','cssnano','precss','rucksack-css','postcss-utilities',
        'postcss-cli','postcss-layout','precss','postcss-preset-env',
        'postcss-advanced-variables','postcss-bem','postcss-conditionals','postcss-each',
        'postcss-for','postcss-import','postcss-nested','postcss-sassy-mixins','postcss-simple-vars',
        '@fullhuman/postcss-purgecss',
    ])
)

projects.define(
    BasicProject('sass-bundle', [
        'sass',
        'cirrus-ui','iotacss','sierra-library','susy','open-color','shevy','typi','gerillass',
        'bulma','bootstrap@5','bootswatch','bulma','gorko',
    ])
)

projects.define(
    ContainerProject('atomic-css-tools', [
        BasicProject('tailwind_', ['tailwindcss']),
        BasicProject('tailwind-postcss_', ['tailwindcss','postcss','autoprefixer']),
        BasicProject('tailwind-plugins', ['@tailwindcss/typography','@tailwindcss/forms','@tailwindcss/line-clamp','tailwind-color-vars']),
        BasicProject('css-variables', ['open-props','dashvar','pollen-css']),
        BasicProject('tachyons_', ['tachyons@4']),
        // BasicProject('unocss-bundle', [
        //     'unocss','@unocss/preset-mini','@unocss/preset-wind','@unocss/preset-attributify','@unocss/preset-icons','@unocss/preset-web-fonts',
        //     '@unocss/preset-typography','@unocss/vite',
        // ]),
    ])
)

projects.define(
    ContainerProject('tailwind-bundle', [
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
        BasicProject('vue-tailwind_', ['vue-tailwind']),
        BasicProject('rippleui_', ['rippleui']),
        BasicProject('sira-ui_', ['@sira-ui/tailwind']),
        DegitProject('tailmater_', 'aribudin/tailmater'),
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

projects.define(
    ContainerProject('icons-bundle', [
        BasicProject('bootstrap-icons_', ['bootstrap-icons']),
        BasicProject('fontawesome_', ['@fortawesome/fontawesome-free']),
        BasicProject('feather-icons_', ['feather-icons']),
        BasicProject('octicons_', ['@primer/octicons','@primer/styled-octicons','@primer/octicons-react']),
        BasicProject('bytesize-icons_', ['bytesize-icons']),
        BasicProject('ionicons_', ['ionicons']),
    ])
)

// ----------------------------------------------------------------------------------------

projects.define(
    ContainerProject('staticgen-bundle', [
        BasicProject('eleventy_', ['@11ty/eleventy']),
        BasicProject('vuepress_', ['vuepress']),
        BasicProject('vitepress_', ['vitepress','vue']),
        DegitProject('tropical-skel', 'https://github.com/bensmithett/tropical'),
        BasicProject('20ful_', ['20ful']),
        BasicProject('hydrogen-cli_', ['hydrogen-cli']),
        BasicProject('mini-site-generator_', ['mini-site-generator']),
        BasicProject('onessg_', ['onessg']),
        BasicProject('onessg_ejs_', ['onessg','jstransformer-ejs']),
        BasicProject('onessg_nunjucks_', ['onessg','jstransformer-nunjucks']),
        BasicProject('onessg_pug_', ['onessg','jstransformer-pug']),
        BasicProject('spignite_', ['spignite']),
        BasicProject('sphido_', ['@sphido/core','@sphido/frontmatter','@sphido/markdown','@sphido/meta']),
        AppProject('nanogen-app', 'nanogen'),
        'metalsmith-bundle',
    ])
)

projects.define(
    ContainerProject('metalsmith-bundle', [
        BasicProject('metalsmith_', [
            'metalsmith','@metalsmith/collections','@metalsmith/layouts','@metalsmith/markdown','@metalsmith/permalinks',
        ]),
        DegitProject('metalsmith-static-site', 'metalsmith/metalsmith/examples/static-site'),
        DegitProject('metalsmith-jekyll', 'metalsmith/metalsmith/examples/jekyll'),
        DegitProject('metalsmith-wintersmith', 'metalsmith/metalsmith/examples/wintersmith'),
        DegitProject('metalsmith-build-tool', 'metalsmith/metalsmith/examples/build-tool'),
        DegitProject('metalsmith-drafts-plugin', 'metalsmith/metalsmith/examples/drafts-plugin'),
        DegitProject('metalsmith-project-scaffolder', 'metalsmith/metalsmith/examples/project-scaffolder'),
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
    ContainerProject('vue-pkg', [
        BasicProject('vue_', ['vue']),
        BasicProject('petite-vue_', ['petite-vue']),
        BasicProject('vue-bundle', ['vue@3','vue-router@4','pinia','petite-vue']),
        BasicProject('vitepress_', ['vitepress','vue']),
        BasicProject('vuepress_', ['vuepress']),
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
    ContainerProject('servers-bundle', [ 
        'http-server_','json-server_','serve_','live-server_'
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
    AppProject('tiddlywiki_', 'tiddlywiki')
)

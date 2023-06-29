"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const projects = new util_1.ProjectList();
exports.default = projects;
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('npm_', ['npm@latest']));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.ContainerProject)('cache-bundle', [
    'npm_',
    'frontend-libs', 'template-libs', 'template-libs-2',
    'tagged-templates-bundle', 'mock-data-libs', 'indexeddb-libs',
    'preact-bundle', 'vite-starters-official',
    'css-frameworks', 'css-libs', 'css-libs-2', 'sass-bundle', 'atomic-css-tools',
    'tailwind-bundle',
    'staticgen-bundle', 'servers-bundle',
]));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('frontend-libs', [
    'axios', 'highlight.js', 'prismjs', 'masonry-layout', 'lodash', 'rxjs',
    'd3', 'chart.js', 'moment', 'dayjs', 'underscore', 'reveal.js',
    'html5sortable', 'csstag', 'facon', 'genel', 'marli', 'localforage', 'date-fns',
    'inferno', 'inferno-hyperscript', 'inferno-create-element', 'preact', 'preact-custom-element',
    'htm', 'alpinejs', 'marked', '@types/marked', 'stimulus', 'gumshoejs', 'offside-js',
    'markdown-it', 'markdown-it-sub', 'markdown-it-sup', 'markdown-it-footnote', 'markdown-it-deflist',
    'markdown-it-abbr', 'markdown-it-emoji', 'markdown-it-container', 'a11y-dialog',
    'concurrently', 'npm-run-all', 'globby', 'facon', 'genel', 'yaml-tag',
    '@types/node', '@types/lodash', '@types/express',
    'asciidoctor', 'ejs', 'nunjucks', 'pug', 'hamljs', '@shoelace-style/shoelace',
    '@socketsupply/tonic', 'reefjs', 'lemonadejs', 'petit-vue',
    'htm', 'vhtml', 'hyperscript', 'hyperx', 'virtual-dom', 'mithril', '@types/mithril',
    'lit', 'lit-html', 'goober', 'ultramatter', 'gray-matter',
    'textile-js', 'stextile', 'polished', 'color', 'colorjs.io', 'values.js',
    '@pandacss/dev',
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
projects.define((0, util_1.BasicProject)('web-component-libs', [
    'fuco', 'atomico', 'lit', 'lit-html', 'haunted', 'petit-vue', 'x-tag', 'hybrids',
    '@socketsupply/tonic', 'tonic-ssr', 'alpinejs',
]));
projects.define((0, util_1.ContainerProject)('mock-data-libs', [
    (0, util_1.BasicProject)('faker_', ['@faker-js/faker']),
    (0, util_1.BasicProject)('chance_', ['chance']),
    (0, util_1.BasicProject)('falso_', ['@ngneat/falso']),
    (0, util_1.BasicProject)('json-server_', ['json-server']),
    (0, util_1.BasicProject)('jsonplaceholder_', ['jsonplaceholder']),
    (0, util_1.BasicProject)('miragejs_', ['miragejs']),
]));
projects.define((0, util_1.BasicProject)('template-libs', ['mustache', 'handlebars', 'nunjucks', 'hogan.js', 'pug', 'ejs', 'eta']));
projects.define((0, util_1.ContainerProject)('template-libs-2', [
    (0, util_1.BasicProject)('nunjucks-cli_', ['nunjucks-cli']),
    (0, util_1.BasicProject)('cli-njk_', ['cli-njk']),
    (0, util_1.BasicProject)('pug-cli_', ['pug-cli']),
    (0, util_1.BasicProject)('jstransformer-cli_', ['jstransformer-cli', 'jstransformer-pug', 'jstransformer-nunjucks', 'jstransformer-ejs']),
]));
projects.define((0, util_1.BasicProject)('indexeddb-libs', [
    'localforage', 'jsstore', 'zangodb', 'dexie', 'dexie-react-hooks', 'idb', 'idb-keyval', 'lovefield',
    'pouchdb', 'pouchdb-server',
]));
projects.define((0, util_1.BasicProject)('preact-bundle', [
    'preact', 'preact-router', 'preact-portal', 'preact-richtextarea', 'preact-token-input',
    'preact-virtual-list', 'preact-layout', 'preact-helmet', 'preact-custom-scrollbars',
]));
projects.define((0, util_1.BasicProject)('vue-bundle', [
    'vue@latest', 'vue-router@4', 'pinia'
]));
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
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.ContainerProject)('css-frameworks', [
    (0, util_1.BasicProject)('bootstrap_', ['bootstrap@5', 'sass', 'bootswatch']),
    (0, util_1.BasicProject)('codyhouse-framework_', ['codyhouse-framework', 'sass']),
    (0, util_1.BasicProject)('material-tailwind_', ['tailwindcss', '@material-tailwind/html']),
    (0, util_1.BasicProject)('normalize_', ['normalize.css']),
    (0, util_1.BasicProject)('modern-css-reset_', ['modern-css-reset']),
    (0, util_1.BasicProject)('minireset_', ['minireset.css']),
    (0, util_1.BasicProject)('classless', ['water.css', 'sakura.css', 'awsm.css', 'axist', 'bamboo.css', 'holiday.css', 'markdown-air', 'marx-css', 'simpledotcss', 'picnic']),
    (0, util_1.DegitProject)('classlesscss_', 'github:emareg/classlesscss', false),
    (0, util_1.BasicProject)('purecss_', ['purecss']),
    (0, util_1.BasicProject)('primer_', ['@primer/css']),
    (0, util_1.BasicProject)('radix_colors_', ['@radix-ui/colors']),
    (0, util_1.BasicProject)('material-components_', ['material-components-web']),
    (0, util_1.BasicProject)('sass_', ['sass', 'gorko', 'codyhouse-framework',]),
    (0, util_1.BasicProject)('fontawesome_', ['@fortawesome/fontawesome-free', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons',]),
]));
projects.define((0, util_1.BasicProject)('css-libs', [
    '@fortawesome/fontawesome-free', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons',
    '@emotion/react', '@emotion/styled', '@emotion/css', '@emotion/babel-plugin', 'tachyons@4',
    'animate.css', 'bootstrap', 'materialize-css@next', 'milligram', 'spectre.css',
    'tailwindcss', 'normalize.css', 'minireset.css', 'open-props', 'dashvar', 'pollen-css',
    'postcss', 'postcss-js', 'autoprefixer', 'postcss-preset-env', 'sass', 'gorko', 'codyhouse-framework',
]));
projects.define((0, util_1.BasicProject)('css-libs-2', [
    // resets
    'modern-css-reset', 'normalize.css', 'modern-normalize', 'minireset.css',
    // small css frameworks
    'purecss', 'milligram', 'picnic', 'chota', '@picocss/pico',
    // 'real' css frameworks
    'bootstrap@5', 'bootswatch', '@primer/css', 'spectre.css',
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
]));
projects.define((0, util_1.BasicProject)('postcss-bundle', [
    'postcss', 'postcss-js',
    'autoprefixer', 'atcss', 'cssnano', 'precss', 'rucksack-css', 'postcss-utilities',
    'postcss-cli', 'postcss-layout', 'precss', 'postcss-preset-env',
    'postcss-advanced-variables', 'postcss-bem', 'postcss-conditionals', 'postcss-each',
    'postcss-for', 'postcss-import', 'postcss-nested', 'postcss-sassy-mixins', 'postcss-simple-vars',
    '@fullhuman/postcss-purgecss',
]));
projects.define((0, util_1.BasicProject)('sass-bundle', [
    'sass',
    'cirrus-ui', 'iotacss', 'sierra-library', 'susy', 'open-color', 'shevy', 'typi', 'gerillass',
    'bulma', 'bootstrap@5', 'bootswatch', 'bulma', 'gorko',
]));
projects.define((0, util_1.ContainerProject)('atomic-css-tools', [
    (0, util_1.BasicProject)('tailwind_', ['tailwindcss']),
    (0, util_1.BasicProject)('tailwind-postcss_', ['tailwindcss', 'postcss', 'autoprefixer']),
    (0, util_1.BasicProject)('tailwind-plugins', ['@tailwindcss/typography', '@tailwindcss/forms', '@tailwindcss/line-clamp', 'tailwind-color-vars']),
    (0, util_1.BasicProject)('css-variables', ['open-props', 'dashvar', 'pollen-css']),
    (0, util_1.BasicProject)('tachyons_', ['tachyons@4']),
    // BasicProject('unocss-bundle', [
    //     'unocss','@unocss/preset-mini','@unocss/preset-wind','@unocss/preset-attributify','@unocss/preset-icons','@unocss/preset-web-fonts',
    //     '@unocss/preset-typography','@unocss/vite',
    // ]),
]));
projects.define((0, util_1.ContainerProject)('tailwind-bundle', [
    (0, util_1.BasicProject)('tailwind_', ['tailwindcss']),
    (0, util_1.BasicProject)('tailwind-postcss_', ['tailwindcss', 'postcss', 'autoprefixer']),
    (0, util_1.BasicProject)('tailwind-plugins', ['@tailwindcss/typography', '@tailwindcss/forms', '@tailwindcss/line-clamp', 'tailwind-color-vars']),
    (0, util_1.BasicProject)('windstrap_', ['windstrap']),
    (0, util_1.BasicProject)('flowbite_', ['flowbite']),
    (0, util_1.BasicProject)('kutty_', ['kutty']),
    (0, util_1.BasicProject)('sailui_', ['sailui']),
    (0, util_1.BasicProject)('daisyui_', ['daisyui']),
    (0, util_1.BasicProject)('a17t_', ['a17t']),
    (0, util_1.BasicProject)('tw-elements_', ['tw-elements']),
    (0, util_1.BasicProject)('vue-tailwind_', ['vue-tailwind']),
    (0, util_1.BasicProject)('rippleui_', ['rippleui']),
    (0, util_1.BasicProject)('sira-ui_', ['@sira-ui/tailwind']),
    (0, util_1.DegitProject)('tailmater_', 'aribudin/tailmater'),
]));
projects.define((0, util_1.BasicProject)('mui-bundle', [
    '@mui/material', '@emotion/react', '@emotion/styled', '@mui/icons-material',
    '@mui/joy', '@mui/base', '@mui/system',
]));
projects.define((0, util_1.ContainerProject)('mdbootstrap-bundle', [
    (0, util_1.DegitProject)('mdb-ui-kit', 'https://github.com/mdbootstrap/mdb-ui-kit#4.2.0'),
    (0, util_1.DegitProject)('mdb-vue-ui-kit', 'https://github.com/mdbootstrap/mdb-vue-ui-kit#1.14.0'),
    (0, util_1.DegitProject)('mdb-react-ui-kit', 'https://github.com/mdbootstrap/mdb-react-ui-kit#4.0.0'),
    (0, util_1.DegitProject)('mdb-angular-ui-kit', 'https://github.com/mdbootstrap/mdb-angular-ui-kit#2.3.0'),
    (0, util_1.DegitProject)('tw-elements-starter', 'https://github.com/mdbootstrap/Tailwind-Elements/site'),
    (0, util_1.DegitProject)('tw-elements-src', 'https://github.com/mdbootstrap/Tailwind-Elements'),
]));
projects.define((0, util_1.ContainerProject)('icons-bundle', [
    (0, util_1.BasicProject)('bootstrap-icons_', ['bootstrap-icons']),
    (0, util_1.BasicProject)('fontawesome_', ['@fortawesome/fontawesome-free']),
    (0, util_1.BasicProject)('feather-icons_', ['feather-icons']),
    (0, util_1.BasicProject)('octicons_', ['@primer/octicons', '@primer/styled-octicons', '@primer/octicons-react']),
    (0, util_1.BasicProject)('bytesize-icons_', ['bytesize-icons']),
    (0, util_1.BasicProject)('ionicons_', ['ionicons']),
]));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.ContainerProject)('staticgen-bundle', [
    (0, util_1.BasicProject)('eleventy_', ['@11ty/eleventy']),
    (0, util_1.BasicProject)('vuepress_', ['vuepress']),
    (0, util_1.BasicProject)('vitepress_', ['vitepress', 'vue']),
    (0, util_1.DegitProject)('tropical-skel', 'https://github.com/bensmithett/tropical'),
    (0, util_1.BasicProject)('20ful_', ['20ful']),
    (0, util_1.BasicProject)('hydrogen-cli_', ['hydrogen-cli']),
    (0, util_1.BasicProject)('mini-site-generator_', ['mini-site-generator']),
    (0, util_1.BasicProject)('onessg_', ['onessg']),
    (0, util_1.BasicProject)('onessg_ejs_', ['onessg', 'jstransformer-ejs']),
    (0, util_1.BasicProject)('onessg_nunjucks_', ['onessg', 'jstransformer-nunjucks']),
    (0, util_1.BasicProject)('onessg_pug_', ['onessg', 'jstransformer-pug']),
    (0, util_1.BasicProject)('spignite_', ['spignite']),
    (0, util_1.BasicProject)('sphido_', ['@sphido/core', '@sphido/frontmatter', '@sphido/markdown', '@sphido/meta']),
    (0, util_1.AppProject)('nanogen-app', 'nanogen'),
    'metalsmith-bundle',
]));
projects.define((0, util_1.ContainerProject)('metalsmith-bundle', [
    (0, util_1.BasicProject)('metalsmith_', [
        'metalsmith', '@metalsmith/collections', '@metalsmith/layouts', '@metalsmith/markdown', '@metalsmith/permalinks',
    ]),
    (0, util_1.DegitProject)('metalsmith-static-site', 'metalsmith/metalsmith/examples/static-site'),
    (0, util_1.DegitProject)('metalsmith-jekyll', 'metalsmith/metalsmith/examples/jekyll'),
    (0, util_1.DegitProject)('metalsmith-wintersmith', 'metalsmith/metalsmith/examples/wintersmith'),
    (0, util_1.DegitProject)('metalsmith-build-tool', 'metalsmith/metalsmith/examples/build-tool'),
    (0, util_1.DegitProject)('metalsmith-drafts-plugin', 'metalsmith/metalsmith/examples/drafts-plugin'),
    (0, util_1.DegitProject)('metalsmith-project-scaffolder', 'metalsmith/metalsmith/examples/project-scaffolder'),
]));
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
projects.define((0, util_1.ContainerProject)('vue-pkg', [
    (0, util_1.BasicProject)('vue_', ['vue']),
    (0, util_1.BasicProject)('petite-vue_', ['petite-vue']),
    (0, util_1.BasicProject)('vue-bundle', ['vue@3', 'vue-router@4', 'pinia', 'petite-vue']),
    (0, util_1.BasicProject)('vitepress_', ['vitepress', 'vue']),
    (0, util_1.BasicProject)('vuepress_', ['vuepress']),
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
projects.define((0, util_1.ContainerProject)('servers-bundle', [
    'http-server_', 'json-server_', 'serve_', 'live-server_'
]));
projects.define((0, util_1.AppProject)('http-server_', 'http-server'));
projects.define((0, util_1.AppProject)('json-server_', 'json-server'));
projects.define((0, util_1.AppProject)('zero-server-app', 'zero'));
projects.define((0, util_1.AppProject)('serve_', 'serve'));
projects.define((0, util_1.AppProject)('live-server_', 'live-server'));
projects.define((0, util_1.AppProject)('tiddlywiki_', 'tiddlywiki'));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.ContainerProject)('design-tools', [
    // DegitProject('shadowlord', 'https://github.com/noeldelgado/shadowlord'),
    (0, util_1.DegitProject)('oklch-picker', 'https://github.com/evilmartians/oklch-picker'),
    // DegitProject('Rainbow-Palette', 'pawcoding/Rainbow-Palette'),
    (0, util_1.DegitProject)('material-palette-generator', 'https://github.com/edelstone/material-palette-generator'),
    (0, util_1.DegitProject)('tints-and-shades', 'https://github.com/edelstone/tints-and-shades'),
]));
projects.define((0, util_1.ContainerProject)('metalsmith-starters', [
    (0, util_1.DegitProject)('metalsmith-bare-bones-starter', 'https://github.com/wernerglinka/metalsmith-bare-bones-starter'),
    (0, util_1.DegitProject)('startbootstrap-clean-blog', 'https://github.com/metalsmith/startbootstrap-clean-blog'),
    (0, util_1.DegitProject)('metalsmith-blog-starter', 'https://github.com/wernerglinka/metalsmith-blog-starter'),
    (0, util_1.DegitProject)('metalsmith-company-starter', 'https://github.com/wernerglinka/metalsmith-company-starter'),
    (0, util_1.DegitProject)('metalsmith-starter-resume', 'https://github.com/webketje/metalsmith-starter-resume'),
]));
projects.define((0, util_1.ContainerProject)('capri-skels', [
    (0, util_1.DegitProject)('capri-preact-skel', 'capri-js/capri/examples/preact'),
    (0, util_1.DegitProject)('capri-react-skel', 'capri-js/capri/examples/react'),
    (0, util_1.DegitProject)('capri-solid-skel', 'capri-js/capri/examples/solid'),
    (0, util_1.DegitProject)('capri-svelte-skel', 'capri-js/capri/examples/svelte'),
    (0, util_1.DegitProject)('capri-vue-skel', 'capri-js/capri/examples/vue'),
]));

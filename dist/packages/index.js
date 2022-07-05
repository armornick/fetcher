"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const projects = new util_1.ProjectList();
exports.default = projects;
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('template-libs', ['mustache', 'handlebars', 'nunjucks', 'hogan.js', 'pug', 'ejs']));
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
projects.define((0, util_1.BasicProject)('indexeddb-libs', [
    'localforage', 'jsstore', 'zangodb', 'dexie', 'dexie-react-hooks', 'idb', 'idb-keyval', 'lovefield'
]));
projects.define((0, util_1.ContainerProject)('database-libs', [
    (0, util_1.BasicProject)('lowdb_', ['lowdb']),
    (0, util_1.BasicProject)('sqlite_', ['sqlite']),
    (0, util_1.BasicProject)('sqlite3_', ['sqlite3']),
    (0, util_1.BasicProject)('better-sqlite3_', ['better-sqlite3']),
    (0, util_1.BasicProject)('sequelize_', ['sequelize']),
    (0, util_1.BasicProject)('knex_', ['knex']),
    (0, util_1.BasicProject)('typeorm_', ['typeorm']),
    (0, util_1.BasicProject)('mikro-orm-sqlite', ['@mikro-orm/core', '@mikro-orm/sqlite'])
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
projects.define((0, util_1.ContainerProject)('css-frameworks', [
    (0, util_1.BasicProject)('bootstrap_', ['bootstrap']),
    (0, util_1.BasicProject)('bulma_', ['bulma']),
    (0, util_1.BasicProject)('codyhouse-framework_', ['codyhouse-framework']),
    (0, util_1.BasicProject)('material-tailwind_', ['tailwindcss', '@material-tailwind/html']),
    (0, util_1.BasicProject)('niui_', ['niui-npm']),
    (0, util_1.BasicProject)('normalize_', ['normalize.css']),
    (0, util_1.BasicProject)('modern-css-reset_', ['modern-css-reset']),
    (0, util_1.BasicProject)('minireset_', ['minireset.css']),
    (0, util_1.BasicProject)('classless', ['water.css', 'sakura.css', 'awsm.css', 'axist', 'bamboo.css', 'holiday.css', 'markdown-air', 'marx-css', 'simpledotcss', 'picnic']),
    (0, util_1.DegitProject)('classlesscss_', 'github:emareg/classlesscss', false),
    (0, util_1.DegitProject)('skeleton_', 'github:dhg/Skeleton', false),
    (0, util_1.BasicProject)('purecss_', ['purecss']),
    (0, util_1.BasicProject)('foundation_', ['foundation-sites']),
    (0, util_1.BasicProject)('primer_', ['@primer/css']),
    (0, util_1.BasicProject)('material-components_', ['material-components-web']),
]));
projects.define((0, util_1.ContainerProject)('bootstrap-bundle', [
    (0, util_1.BasicProject)('bootstrap_', ['bootstrap@5.2.0-beta1', '@popperjs/core']),
    (0, util_1.BasicProject)('bootswatch_', ['bootswatch']),
    (0, util_1.BasicProject)('bootstrap-4_', ['bootstrap@4', 'bootstrap-vue']),
    (0, util_1.BasicProject)('material-kit_', ['material-kit']),
    (0, util_1.BasicProject)('mdbootstrap', ['mdb-ui-kit', 'mdb-react-ui-kit', 'mdb-vue-ui-kit'])
]));
projects.define((0, util_1.ContainerProject)('icons-bundle', [
    (0, util_1.BasicProject)('bootstrap-icons_', ['bootstrap-icons']),
    (0, util_1.BasicProject)('fontawesome_', ['@fortawesome/fontawesome-free']),
    (0, util_1.BasicProject)('feather-icons_', ['feather-icons']),
    (0, util_1.BasicProject)('octicons_', ['@primer/octicons', '@primer/styled-octicons', '@primer/octicons-react']),
    (0, util_1.BasicProject)('bytesize-icons_', ['bytesize-icons']),
    (0, util_1.BasicProject)('ionicons_', ['ionicons']),
    'svg-icons-bundle',
]));
projects.define((0, util_1.ContainerProject)('svg-icons-bundle', [
    (0, util_1.BasicProject)('bootstrap_', ['@svg-icons/bootstrap']),
    // BasicProject('boxicons-logos_', ['@svg-icons/boxicons-logos']),
    (0, util_1.BasicProject)('boxicons-regular_', ['@svg-icons/boxicons-regular']),
    (0, util_1.BasicProject)('boxicons-solid_', ['@svg-icons/boxicons-solid']),
    (0, util_1.BasicProject)('entypo_', ['@svg-icons/entypo']),
    (0, util_1.BasicProject)('entypo-social_', ['@svg-icons/entypo-social']),
    (0, util_1.BasicProject)('evaicons-outline_', ['@svg-icons/evaicons-outline']),
    (0, util_1.BasicProject)('evaicons-solid_', ['@svg-icons/evaicons-solid']),
    (0, util_1.BasicProject)('evil_', ['@svg-icons/evil']),
    (0, util_1.BasicProject)('fa-brands_', ['@svg-icons/fa-brands']),
    (0, util_1.BasicProject)('fa-regular_', ['@svg-icons/fa-regular']),
    (0, util_1.BasicProject)('fa-solid_', ['@svg-icons/fa-solid']),
    (0, util_1.BasicProject)('feather_', ['@svg-icons/feather']),
    (0, util_1.BasicProject)('foundation_', ['@svg-icons/foundation']),
    (0, util_1.BasicProject)('heroicons-outline_', ['@svg-icons/heroicons-outline']),
    (0, util_1.BasicProject)('heroicons-solid_', ['@svg-icons/heroicons-solid']),
    (0, util_1.BasicProject)('icomoon_', ['@svg-icons/icomoon']),
    (0, util_1.BasicProject)('ionicons-outline_', ['@svg-icons/ionicons-outline']),
    (0, util_1.BasicProject)('ionicons-sharp_', ['@svg-icons/ionicons-sharp']),
    (0, util_1.BasicProject)('ionicons-solid_', ['@svg-icons/ionicons-solid']),
    (0, util_1.BasicProject)('material-filled_', ['@svg-icons/material-filled']),
    (0, util_1.BasicProject)('material-outlined_', ['@svg-icons/material-outlined']),
    (0, util_1.BasicProject)('material-rounded_', ['@svg-icons/material-rounded']),
    (0, util_1.BasicProject)('material-sharp_', ['@svg-icons/material-sharp']),
    (0, util_1.BasicProject)('octicons_', ['@svg-icons/octicons']),
    (0, util_1.BasicProject)('open-iconic_', ['@svg-icons/open-iconic']),
    (0, util_1.BasicProject)('simple-icons_', ['@svg-icons/simple-icons']),
    (0, util_1.BasicProject)('typicons_', ['@svg-icons/typicons']),
    (0, util_1.BasicProject)('zondicons_', ['@svg-icons/zondicons']),
]));
projects.define((0, util_1.BasicProject)('express-bundle', [
    'express',
    'body-parser', 'cookie-parser', 'multer', 'serve-index', 'serve-static',
    'pug', 'ejs', 'hbs', 'nunjucks', 'swig-templates',
    'poet',
    ' @feathersjs/feathers', '@feathersjs/express', '@feathersjs/socketio', '@feathersjs/cli',
]));
projects.define((0, util_1.BasicProject)('preact-bundle', [
    'preact', 'preact-router', 'preact-portal', 'preact-richtextarea', 'preact-token-input',
    'preact-virtual-list', 'preact-layout', 'preact-helmet', 'preact-custom-scrollbars',
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
projects.define((0, util_1.BasicProject)('twind-bundle', [
    'twind', '@twind/aspect-ratio', '@twind/content', '@twind/forms', '@twind/line-clamp', '@twind/typography',
    '@twind/preact', '@twind/wmr', 'construct-style-sheets-polyfill',
]));
projects.define((0, util_1.ContainerProject)('material-design-bundle', [
    (0, util_1.BasicProject)('material-tailwind-bundle', ['@material-tailwind/html', '@material-tailwind/react']),
    (0, util_1.BasicProject)('material-design-lite_', ['material-design-lite', 'vue-mdl']),
    (0, util_1.BasicProject)('smelte_', ['smelte']),
    (0, util_1.BasicProject)('vuetify_', ['vuetify']),
    (0, util_1.BasicProject)('materialize_', ['react-materialize', 'materialize-css@next']),
    (0, util_1.BasicProject)('mdbootstrap', ['mdb-cli', 'mdb-ui-kit', 'mdb-react-ui-kit', 'mdb-vue-ui-kit']),
    (0, util_1.BasicProject)('tw-elements_', ['tw-elements']),
    (0, util_1.DegitProject)('mdb-webpack-starter_', 'https://github.com/mdbootstrap/mdb-webpack-starter', 'mdb-webpack-starter'),
    'mui-bundle',
]));
projects.define((0, util_1.BasicProject)('mui-bundle', [
    '@mui/material', '@emotion/react', '@emotion/styled', '@mui/icons-material',
    '@mui/joy', '@mui/base', '@mui/system',
]));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('postcss-bundle', [
    'postcss', 'autoprefixer', 'atcss', 'cssnano', 'precss', 'rucksack-css', 'postcss-utilities',
    'postcss-cli', 'postcss-layout', 'precss', 'postcss-preset-env',
    'postcss-advanced-variables', 'postcss-bem', 'postcss-conditionals', 'postcss-each',
    'postcss-for', 'postcss-import', 'postcss-nested', 'postcss-sassy-mixins', 'postcss-simple-vars'
]));
projects.define((0, util_1.BasicProject)('sass-bundle', [
    'sass',
    'cirrus-ui', 'iotacss', 'sierra-library', 'susy', 'open-color', 'shevy', 'typi', 'gerillass',
    'bulma', 'bootstrap@5.2.0-beta1', 'bootswatch', 'foundation-sites', 'gorko',
]));
projects.define((0, util_1.ContainerProject)('css-in-js-bundle', [
    (0, util_1.BasicProject)('emotion-bundle', ['@emotion/css', '@emotion/react', '@emotion/styled', '@emotion/babel-plugin']),
    (0, util_1.BasicProject)('jss-bundle', [
        'jss', 'jss-preset-default', 'color', 'react-jss', 'styled-jss',
        'aphrodite-jss', 'vue-jss', 'jss-simple', 'jss-sheet-loader', 'jss-css', 'babel-plugin-jss-css',
        'prejss', 'babel-plugin-transform-prejss', 'postjss', 'prejss-cli', 'prejss-styles-loader', 'postcss-js',
    ]),
    (0, util_1.BasicProject)('styled-components-bundle', ['styled-components', 'styled-theming', 'babel-plugin-styled-components']),
    (0, util_1.BasicProject)('cssx-bundle', ['cssx', 'cssx-transpiler', 'cssx-cli', 'rollup-plugin-cssx']),
    (0, util_1.BasicProject)('stitches-bundle', ['@stitches/core', '@stitches/react']),
    (0, util_1.BasicProject)('twin-macro_', ['twin.macro']),
    (0, util_1.BasicProject)('goober_', ['goober']),
    (0, util_1.AppProject)('absurd-app', 'absurd'),
    (0, util_1.BasicProject)('tailwind-components_', ['babel-plugin-macros', 'tailwind.macro', 'babel-plugin-tailwind-components']),
]));
projects.define((0, util_1.ContainerProject)('atomic-css-tools', [
    (0, util_1.BasicProject)('tailwind_', ['tailwindcss']),
    (0, util_1.BasicProject)('tailwind-postcss_', ['tailwindcss', 'postcss', 'autoprefixer']),
    (0, util_1.BasicProject)('tailwind-plugins', ['@tailwindcss/typography', '@tailwindcss/forms', '@tailwindcss/line-clamp', 'tailwind-color-vars']),
    (0, util_1.BasicProject)('css-variables', ['open-props', 'dashvar', 'pollen-css']),
    (0, util_1.BasicProject)('windicss-cli_', ['windicss']),
    (0, util_1.BasicProject)('windicss-vite_', ['vite-plugin-windicss', 'windicss']),
    (0, util_1.BasicProject)('windicss-svelte_', ['svelte-windicss-preprocess']),
    (0, util_1.BasicProject)('unocss-bundle', [
        'unocss', '@unocss/preset-mini', '@unocss/preset-wind', '@unocss/preset-attributify', '@unocss/preset-icons', '@unocss/preset-web-fonts',
        '@unocss/preset-typography', '@unocss/vite',
    ]),
    (0, util_1.BasicProject)('unocss-preset-chroma_', ['unocss-preset-chroma']),
    'twind-bundle',
    (0, util_1.BasicProject)('twin-macro_', ['twin.macro']),
    (0, util_1.BasicProject)('goober_', ['goober']),
    (0, util_1.BasicProject)('otion_', ['otion']),
    (0, util_1.BasicProject)('csstag_', ['csstag', 'babel-plugin-csstag']),
    // tachyons technically counts but is old now
    (0, util_1.BasicProject)('tachyons_', ['tachyons@4.12.0']),
]));
projects.define((0, util_1.ContainerProject)('tailwind-pkg', [
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
]));
projects.define((0, util_1.ContainerProject)('tailwind-ui-kits', [
    (0, util_1.DegitProject)('merakiui-local', 'github:merakiui/merakiui'),
    (0, util_1.DegitProject)('tailwindlayout-local', 'github:lalokalabs/tailwindlayout'),
    (0, util_1.DegitProject)('hyperui-local', 'github:markmead/hyperui'),
    (0, util_1.DegitProject)('tailmin-local', 'github:otezz/tailmin'),
]));
projects.define((0, util_1.ContainerProject)('remark-pkg', [
    (0, util_1.BasicProject)('remark-bundle', [
        'unified', 'unified-stream', 'remark-parse',
        // remark --------------------------------------------
        'remark-capitalize', 'remark-code-blocks', 'remark-code-frontmatter', 'remark-code-import',
        'remark-collapse', 'remark-definition-list', 'remark-directive', 'remark-embed-images', 'remark-extended-table',
        'remark-gfm', 'remark-html', 'remark-mdx', 'remark-pdf', 'remark-sectionize', 'remark-toc', 'remark-directive',
    ]),
    (0, util_1.BasicProject)('rehype-bundle', [
        'remark-rehype', 'rehype-remark', 'rehype-stringify', 'rehype-parse', 'rehype-cli', 'hast',
        'rehype-dom', 'rehype-highlight', 'lowlight',
        'rehype-toc', 'rehype-url-inspector', 'rehype-truncate', 'rehype-add-classes', 'rehype-autolink-headings',
        'rehype-concat-css-style', 'rehype-external-links', 'rehype-inline',
        'rehype-minify-css-style', 'rehype-minify-javascript-script', 'rehype-partials', 'rehype-prism-plus',
        'rehype-remove-comments', '@agentofuser/rehype-section', 'rehype-slug',
        'rehype-template', 'remark-frontmatter', 'remark-extract-frontmatter',
    ])
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
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('metalsmith-bundle', [
    'metalsmith', 'metalsmith-debug', 'micromatch',
    '@metalsmith/collections', '@metalsmith/layouts', '@metalsmith/markdown', '@metalsmith/permalinks',
    'metalsmith-asciidoctor', 'metalsmith-auto-collections', 'metalsmith-clean-css', 'clean-css@4.x.x',
    'metalsmith-code-highlight', 'metalsmith-concat', 'metalsmith-data-loader', '@metalsmith/drafts',
    'metalsmith-html-minifier', 'metalsmith-inline-css', 'metalsmith-markdownit', 'metalsmith-pagination',
    'metalsmith-with-postcss', 'metalsmith-slug', 'metalsmith-stylus', '@metalsmith/table-of-contents',
    'metalsmith-in-place', '@metalsmith/default-values', '@metalsmith/remove', '@metalsmith/excerpts',
    'metalsmith-taxonomy', 'metalsmith-uglify',
]));
projects.define((0, util_1.ContainerProject)('metalsmith-starters', [
    (0, util_1.DegitProject)('build-tool_', 'https://github.com/metalsmith/metalsmith/examples/build-tool', 'build-tool'),
    (0, util_1.DegitProject)('drafts-plugin_', 'https://github.com/metalsmith/metalsmith/examples/drafts-plugin', 'drafts-plugin'),
    (0, util_1.DegitProject)('jekyll_', 'https://github.com/metalsmith/metalsmith/examples/jekyll', 'jekyll'),
    (0, util_1.DegitProject)('project-scaffolder_', 'https://github.com/metalsmith/metalsmith/examples/project-scaffolder', 'project-scaffolder'),
    (0, util_1.DegitProject)('static-site_', 'https://github.com/metalsmith/metalsmith/examples/static-site', 'static-site'),
    (0, util_1.DegitProject)('wintersmith_', 'https://github.com/metalsmith/metalsmith/examples/wintersmith', 'wintersmith'),
    (0, util_1.DegitProject)('nunjucks-starter_', 'https://github.com/ryannjohnson/metalsmith-nunjucks-starter', 'nunjucks-starter'),
]));
projects.define((0, util_1.SuperProject)('metalsmith-pkg', ['metalsmith-bundle', 'metalsmith-starters']));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('staticgen-bundle', [
    '20ful', 'hydrogen-cli', 'nodemon', 'live-server', 'npm-run-all', 'mini-site-generator',
    'onessg', 'jstransformer-ejs', 'jstransformer-swig', 'spignite',
    '@sphido/core', '@sphido/frontmatter', '@sphido/markdown', '@sphido/meta', 'fs-extra', 'globby',
]));
projects.define((0, util_1.SuperProject)('rollup-pkg', ['rollup-starter', 'rollup-bundle']));
projects.define((0, util_1.DegitProject)('rollup-starter', 'rollup/rollup-starter-app'));
projects.define((0, util_1.BasicProject)('rollup-bundle', [
    '@rollup/plugin-babel', '@rollup/plugin-node-resolve', '@rollup/plugin-commonjs', '@rollup/plugin-alias',
    '@rollup/plugin-dsv', '@rollup/plugin-json', '@rollup/plugin-sucrase', '@rollup/plugin-yaml',
    'rollup-plugin-postcss', 'rollup-plugin-riot', '@riotjs/compiler', 'rollup-plugin-svelte', 'svelte',
    'rollup-plugin-terser', 'rollup-plugin-pug', 'rollup-plugin-pug-html',
]));
projects.define((0, util_1.ContainerProject)('wmr-pkg', [
    (0, util_1.BasicProject)('wmr-bundle', ['wmr', 'create-wmr', '@wmrjs/directory-import', '@wmrjs/nomodule', '@wmrjs/service-worker', 'preact-iso']),
    (0, util_1.AppProject)('wmr-app', 'create-wmr', 'create-wmr wmr-skel'),
]));
projects.define((0, util_1.ContainerProject)('nestjs-bundle', [
    (0, util_1.DegitProject)('nestjs-typescript-skel', 'github:nestjs/typescript-starter'),
    (0, util_1.DegitProject)('nestjs-javascript-skel', 'github:nestjs/javascript-starter'),
]));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.ContainerProject)('vite-starters', ['vite-starters-official', 'vite-starters-community']));
projects.define((0, util_1.ContainerProject)('vite-starters-official', [
    (0, util_1.CommandProject)('vite-vanilla-starter', 'create-vite@latest vite-vanilla-skel --template vanilla', 'vite-vanilla-skel'),
    (0, util_1.CommandProject)('vite-vue-starter', 'create-vite@latest vite-vue-skel --template vue', 'vite-vue-skel'),
    (0, util_1.CommandProject)('vite-react-starter', 'create-vite@latest vite-react-skel --template react', 'vite-react-skel'),
    (0, util_1.CommandProject)('vite-preact-starter', 'create-vite@latest vite-preact-skel --template preact', 'vite-preact-skel'),
    (0, util_1.CommandProject)('vite-lit-starter', 'create-vite@latest vite-lit-skel --template lit', 'vite-lit-skel'),
    (0, util_1.CommandProject)('vite-svelte-starter', 'create-vite@latest vite-svelte-skel --template svelte', 'vite-svelte-skel'),
]));
projects.define((0, util_1.ContainerProject)('vite-starters-community', [
    (0, util_1.DegitProject)('vite-solidjs-starter', 'solidjs/templates/js'),
    (0, util_1.DegitProject)('vite-solidjs-ts-starter', 'solidjs/templates/ts'),
    (0, util_1.DegitProject)('vite-solidjs-ts-windicss-starter', 'solidjs/templates/ts-windicss'),
    (0, util_1.DegitProject)('vite-solidjs-ts-tailwindcss-starter', 'solidjs/templates/ts-tailwindcss'),
    (0, util_1.DegitProject)('vitawind-starter', 'huibizhang/template-vite-vanilla-tailwind-v3'),
    (0, util_1.DegitProject)('vitesse-lite-starter', 'antfu/vitesse-lite'),
    // DegitProject('vitailse-starter', 'zynth17/vitailse'),
    (0, util_1.DegitProject)('vite-elm-starter', 'lindsaykwardell/vite-elm-template#main'),
    (0, util_1.DegitProject)('vite-mithril-starter', 'ArthurClemens/mithril-vite-starter'),
    (0, util_1.DegitProject)('vite-mithril-ts-starter', 'ArthurClemens/mithril-ts-vite-starter'),
]));
projects.define((0, util_1.BasicProject)('vite-bundle', [
    'vite-plugin-windicss', '@originjs/vite-plugin-content',
    '@vitejs/plugin-vue', 'vite-plugin-pages', '@sveltejs/vite-plugin-svelte',
    'vite-plugin-solid', 'babel-preset-solid', 'vite-plugin-elm',
    'vite-plugin-windicss', 'windicss',
]));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.BasicProject)('webpack-bundle', [
    'webpack-cli', 'webpack',
    'babel-loader', 'buble-loader', 'buble', 'html-loader', 'pug-loader', 'pug@^2.0.0',
    'posthtml-loader', 'handlebars-loader', 'handlebars', 'twig-loader', 'twig',
    'remark-loader', 'style-loader', 'css-loader', 'postcss-loader', 'postcss', 'cssnano',
    'stylus-loader', 'stylus', 'sass', 'sass-loader',
    'copy-webpack-plugin', 'html-webpack-plugin', 'terser-webpack-plugin', 'mini-css-extract-plugin',
    '@mdx-js/loader'
]));
projects.define((0, util_1.ContainerProject)('neutrinojs-pkg', [
    (0, util_1.BasicProject)('neutrinojs-react_', [
        'react', 'react-dom',
        'neutrino', '@neutrinojs/react', 'webpack', 'webpack-cli', 'webpack-dev-server'
    ]),
    (0, util_1.BasicProject)('neutrinojs-preact_', [
        'preact',
        'neutrino', '@neutrinojs/preact', 'webpack', 'webpack-cli', 'webpack-dev-server'
    ]),
    (0, util_1.BasicProject)('neutrinojs-vue_', [
        'vue',
        'neutrino', '@neutrinojs/vue', 'webpack', 'webpack-cli', 'webpack-dev-server'
    ]),
    (0, util_1.BasicProject)('neutrinojs-web_', [
        'neutrino', '@neutrinojs/web', 'webpack', 'webpack-cli', 'webpack-dev-server'
    ]),
]));
// ----------------------------------------------------------------------------------------
projects.define((0, util_1.ContainerProject)('parcel-starters', [
    (0, util_1.BasicProject)('parcel_react_', ['react', 'react-dom', 'react-router-dom@6', 'parcel']),
    (0, util_1.BasicProject)('parcel_vue_', ['vue@3', 'vue-router@4', 'parcel', '@parcel/transformer-vue']),
    (0, util_1.BasicProject)('parcel_preact_', ['preact', 'parcel', '@babel/plugin-transform-react-jsx']),
    (0, util_1.BasicProject)('parcel_inferno_', ['inferno', 'inferno-router', 'inferno-create-element', 'parcel', '@babel/plugin-transform-react-jsx']),
    (0, util_1.BasicProject)('parcel_solid-js_', ['solid-js', 'parcel', 'babel-preset-solid']),
    (0, util_1.BasicProject)('parcel_sass_', ['parcel', '@parcel/transformer-sass']),
    (0, util_1.BasicProject)('parcel_stylus_', ['parcel', '@parcel/transformer-stylus']),
    (0, util_1.BasicProject)('parcel_sugarss_', ['parcel', '@parcel/transformer-sugarss']),
    (0, util_1.BasicProject)('parcel_elm_', ['parcel', 'elm', '@parcel/transformer-elm']),
]));
projects.define((0, util_1.BasicProject)('parcel-bundle', [
    'parcel', '@parcel/resolver-glob', '@parcel/optimizer-cssnano',
    '@parcel/transformer-svg-react', '@parcel/transformer-typescript-tsc', '@parcel/transformer-coffeescript',
    '@parcel/transformer-sass', '@parcel/transformer-stylus', '@parcel/transformer-less', '@parcel/transformer-sugarss',
    '@parcel/transformer-vue',
    '@parcel/transformer-toml', '@parcel/transformer-yaml', '@parcel/transformer-pug', '@parcel/transformer-mdx',
    '@parcel/transformer-xml',
]));
projects.define((0, util_1.ContainerProject)('parcel-singles', [
    (0, util_1.BasicProject)('parcel_cssnano_', ['@parcel/optimizer-cssnano']),
    (0, util_1.BasicProject)('parcel_sass_', ['@parcel/transformer-sass']),
    (0, util_1.BasicProject)('parcel_stylus_', ['@parcel/transformer-stylus']),
    (0, util_1.BasicProject)('parcel_sugarss_', ['@parcel/transformer-sugarss']),
    (0, util_1.BasicProject)('parcel_vue_', ['@parcel/transformer-vue']),
    (0, util_1.BasicProject)('parcel_toml_', ['@parcel/transformer-toml']),
    (0, util_1.BasicProject)('parcel_yaml_', ['@parcel/transformer-yaml']),
    (0, util_1.BasicProject)('parcel_pug_', ['@parcel/transformer-pug']),
    (0, util_1.BasicProject)('parcel_xml_', ['@parcel/transformer-xml']),
    (0, util_1.BasicProject)('parcel_coffeescript_', ['@parcel/transformer-coffeescript']),
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
projects.define((0, util_1.AppProject)('npm_', 'npm'));
projects.define((0, util_1.SuperProject)('servers-bundle', ['http-server_', 'json-server_', 'serve_', 'zero-server-app']));
projects.define((0, util_1.AppProject)('http-server_', 'http-server'));
projects.define((0, util_1.AppProject)('json-server_', 'json-server'));
projects.define((0, util_1.AppProject)('zero-server-app', 'zero'));
projects.define((0, util_1.AppProject)('serve_', 'serve'));
projects.define((0, util_1.AppProject)('angular-app', '@angular/cli', [
    'ng new angular-skel -S --routing',
    'ng new angular-sass-skel -S --style=scss --routing'
]));
projects.define((0, util_1.ContainerProject)('angular-starters', [
    (0, util_1.DegitProject)('bootstrap-starter', 'https://github.com/angular-starters/angular-bootstrap-starter'),
    (0, util_1.DegitProject)('material-starter', 'https://github.com/angular-starters/angular-material-starter'),
]));
projects.define((0, util_1.AppProject)('react-app', 'create-react-app', 'create-react-app react-skel'));
projects.define((0, util_1.CommandProject)('preact-app', 'preact-cli create default preact-skel'));
projects.define((0, util_1.DegitProject)('svelte-app', 'sveltejs/template', 'svelte-skel'));
projects.define((0, util_1.AppProject)('tiddlywiki_', 'tiddlywiki'));
projects.define((0, util_1.AppProject)('next-app', 'create-next-app', 'create-next-app next-skel'));
projects.define((0, util_1.AppProject)('nanogen-app', 'nanogen'));
projects.define((0, util_1.AppProject)('eleventy-app', '@11ty/eleventy'));
projects.define((0, util_1.AppProject)('wintersmith-app', 'wintersmith', 'wintersmith new wintersmith-skel'));
projects.define((0, util_1.AppProject)('cuttlebelle-app', 'cuttlebelle'));
projects.define((0, util_1.AppProject)('forgo-app', 'create-forgo-app', 'create-forgo-app forgo-skel'));
projects.define((0, util_1.AppProject)('nexe-app', 'nexe'));

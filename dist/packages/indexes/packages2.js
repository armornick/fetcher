"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
function default_1(projects) {
    projects.define((0, util_1.BasicProject)('template-libs', ['mustache', 'handlebars', 'nunjucks', 'hogan.js', 'pug', 'ejs']));
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
    projects.define((0, util_1.SuperProject)('rollup-pkg', ['rollup-starter', 'rollup-bundle']));
    projects.define((0, util_1.DegitProject)('rollup-starter', 'rollup/rollup-starter-app'));
    projects.define((0, util_1.BasicProject)('rollup-bundle', [
        '@rollup/plugin-babel', '@rollup/plugin-node-resolve', '@rollup/plugin-commonjs', '@rollup/plugin-alias',
        '@rollup/plugin-dsv', '@rollup/plugin-json', '@rollup/plugin-sucrase', '@rollup/plugin-yaml',
        'rollup-plugin-postcss', 'rollup-plugin-riot', '@riotjs/compiler', 'rollup-plugin-svelte', 'svelte',
        'rollup-plugin-terser', 'rollup-plugin-pug', 'rollup-plugin-pug-html',
    ]));
    projects.define((0, util_1.ContainerProject)('nestjs-bundle', [
        (0, util_1.DegitProject)('nestjs-typescript-skel', 'github:nestjs/typescript-starter'),
        (0, util_1.DegitProject)('nestjs-javascript-skel', 'github:nestjs/javascript-starter'),
    ]));
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
    projects.define((0, util_1.ContainerProject)('angular-starters', [
        (0, util_1.DegitProject)('bootstrap-starter', 'https://github.com/angular-starters/angular-bootstrap-starter'),
        (0, util_1.DegitProject)('material-starter', 'https://github.com/angular-starters/angular-material-starter'),
    ]));
    projects.define((0, util_1.ContainerProject)('wmr-pkg', [
        (0, util_1.BasicProject)('wmr-bundle', ['wmr', 'create-wmr', '@wmrjs/directory-import', '@wmrjs/nomodule', '@wmrjs/service-worker', 'preact-iso']),
        (0, util_1.AppProject)('wmr-app', 'create-wmr', 'create-wmr wmr-skel'),
    ]));
    projects.define((0, util_1.AppProject)('wintersmith-app', 'wintersmith', 'wintersmith new wintersmith-skel'));
    projects.define((0, util_1.AppProject)('cuttlebelle-app', 'cuttlebelle'));
    projects.define((0, util_1.AppProject)('forgo-app', 'create-forgo-app', 'create-forgo-app forgo-skel'));
    projects.define((0, util_1.AppProject)('nexe-app', 'nexe'));
    projects.define((0, util_1.AppProject)('tiddlywiki_', 'tiddlywiki'));
    projects.define((0, util_1.BasicProject)('polished_', ['polished']));
    projects.define((0, util_1.BasicProject)('ficusjs_', ['ficusjs']));
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
    projects.define((0, util_1.ContainerProject)('mdbootstrap-bundle', [
        (0, util_1.DegitProject)('mdb-ui-kit', 'https://github.com/mdbootstrap/mdb-ui-kit#4.2.0'),
        (0, util_1.DegitProject)('mdb-vue-ui-kit', 'https://github.com/mdbootstrap/mdb-vue-ui-kit#1.14.0'),
        (0, util_1.DegitProject)('mdb-react-ui-kit', 'https://github.com/mdbootstrap/mdb-react-ui-kit#4.0.0'),
        (0, util_1.DegitProject)('mdb-angular-ui-kit', 'https://github.com/mdbootstrap/mdb-angular-ui-kit#2.3.0'),
        (0, util_1.DegitProject)('tw-elements-starter', 'https://github.com/mdbootstrap/Tailwind-Elements/site'),
        (0, util_1.DegitProject)('tw-elements-src', 'https://github.com/mdbootstrap/Tailwind-Elements'),
    ]));
}
exports.default = default_1;

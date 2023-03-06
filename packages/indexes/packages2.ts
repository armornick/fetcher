import { AppProject, BasicProject, CommandProject, ContainerProject, DegitProject, ProjectList, SuperProject } from "../util";

export default function (projects:ProjectList) {
    
    projects.define(
        BasicProject('template-libs', ['mustache','handlebars','nunjucks','hogan.js','pug','ejs'])
    )

    projects.define(
        BasicProject('indexeddb-libs', [
            'localforage','jsstore','zangodb','dexie','dexie-react-hooks','idb','idb-keyval','lovefield'
        ])
    )

    projects.define(
        ContainerProject('database-libs', [
            BasicProject('lowdb_', ['lowdb']),
            BasicProject('sqlite_', ['sqlite']),
            BasicProject('sqlite3_', ['sqlite3']),
            BasicProject('better-sqlite3_', ['better-sqlite3']),
            BasicProject('sequelize_', ['sequelize']),
            BasicProject('knex_', ['knex']),
            BasicProject('typeorm_', ['typeorm']),
            BasicProject('mikro-orm-sqlite', ['@mikro-orm/core','@mikro-orm/sqlite'])
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
            'svg-icons-bundle',
        ])
    )
    
    projects.define(
        ContainerProject('svg-icons-bundle', [
            BasicProject('bootstrap_', ['@svg-icons/bootstrap']),
            // BasicProject('boxicons-logos_', ['@svg-icons/boxicons-logos']),
            BasicProject('boxicons-regular_', ['@svg-icons/boxicons-regular']),
            BasicProject('boxicons-solid_', ['@svg-icons/boxicons-solid']),
            BasicProject('entypo_', ['@svg-icons/entypo']),
            BasicProject('entypo-social_', ['@svg-icons/entypo-social']),
            BasicProject('evaicons-outline_', ['@svg-icons/evaicons-outline']),
            BasicProject('evaicons-solid_', ['@svg-icons/evaicons-solid']),
            BasicProject('evil_', ['@svg-icons/evil']),
            BasicProject('fa-brands_', ['@svg-icons/fa-brands']),
            BasicProject('fa-regular_', ['@svg-icons/fa-regular']),
            BasicProject('fa-solid_', ['@svg-icons/fa-solid']),
            BasicProject('feather_', ['@svg-icons/feather']),
            BasicProject('foundation_', ['@svg-icons/foundation']),
            BasicProject('heroicons-outline_', ['@svg-icons/heroicons-outline']),
            BasicProject('heroicons-solid_', ['@svg-icons/heroicons-solid']),
            BasicProject('icomoon_', ['@svg-icons/icomoon']),
            BasicProject('ionicons-outline_', ['@svg-icons/ionicons-outline']),
            BasicProject('ionicons-sharp_', ['@svg-icons/ionicons-sharp']),
            BasicProject('ionicons-solid_', ['@svg-icons/ionicons-solid']),
            BasicProject('material-filled_', ['@svg-icons/material-filled']),
            BasicProject('material-outlined_', ['@svg-icons/material-outlined']),
            BasicProject('material-rounded_', ['@svg-icons/material-rounded']),
            BasicProject('material-sharp_', ['@svg-icons/material-sharp']),
            BasicProject('octicons_', ['@svg-icons/octicons']),
            BasicProject('open-iconic_', ['@svg-icons/open-iconic']),
            BasicProject('simple-icons_', ['@svg-icons/simple-icons']),
            BasicProject('typicons_', ['@svg-icons/typicons']),
            BasicProject('zondicons_', ['@svg-icons/zondicons']),
        ])
    )

    
    projects.define(
        BasicProject('express-bundle', [
            'express',
            'body-parser','cookie-parser','multer','serve-index','serve-static',
            'pug','ejs','hbs','nunjucks','swig-templates',
            'poet',
            ' @feathersjs/feathers','@feathersjs/express','@feathersjs/socketio','@feathersjs/cli',
        ])
    )

    projects.define(
        ContainerProject('remark-pkg', [
            BasicProject('remark-bundle', [
                'unified','unified-stream','remark-parse',
                // remark --------------------------------------------
                'remark-capitalize','remark-code-blocks','remark-code-frontmatter','remark-code-import',
                'remark-collapse','remark-definition-list','remark-directive','remark-embed-images','remark-extended-table',
                'remark-gfm','remark-html','remark-mdx','remark-pdf','remark-sectionize','remark-toc','remark-directive',
            ]),
            BasicProject('rehype-bundle', [
                'remark-rehype','rehype-remark','rehype-stringify','rehype-parse','rehype-cli','hast',
                'rehype-dom','rehype-highlight','lowlight',//'rehype-prism','refractor',
                'rehype-toc','rehype-url-inspector','rehype-truncate','rehype-add-classes','rehype-autolink-headings',
                'rehype-concat-css-style','rehype-external-links','rehype-inline',
                'rehype-minify-css-style','rehype-minify-javascript-script','rehype-partials','rehype-prism-plus',
                'rehype-remove-comments','@agentofuser/rehype-section','rehype-slug',
                'rehype-template','remark-frontmatter','remark-extract-frontmatter',
            ])
        ])
    )

    projects.define(
        BasicProject('metalsmith-bundle', [
            'metalsmith','metalsmith-debug','micromatch',
            '@metalsmith/collections','@metalsmith/layouts','@metalsmith/markdown','@metalsmith/permalinks',
            'metalsmith-asciidoctor','metalsmith-auto-collections','metalsmith-clean-css','clean-css@4.x.x',
            'metalsmith-code-highlight','metalsmith-concat','metalsmith-data-loader','@metalsmith/drafts',
            'metalsmith-html-minifier','metalsmith-inline-css','metalsmith-markdownit','metalsmith-pagination',
            'metalsmith-with-postcss','metalsmith-slug','metalsmith-stylus','@metalsmith/table-of-contents',
            'metalsmith-in-place','@metalsmith/default-values','@metalsmith/remove','@metalsmith/excerpts',
            'metalsmith-taxonomy','metalsmith-uglify',
        ])
    )
    
    projects.define(
        ContainerProject('metalsmith-starters', [
            DegitProject('build-tool_', 'https://github.com/metalsmith/metalsmith/examples/build-tool', 'build-tool'),
            DegitProject('drafts-plugin_', 'https://github.com/metalsmith/metalsmith/examples/drafts-plugin', 'drafts-plugin'),
            DegitProject('jekyll_', 'https://github.com/metalsmith/metalsmith/examples/jekyll', 'jekyll'),
            DegitProject('project-scaffolder_', 'https://github.com/metalsmith/metalsmith/examples/project-scaffolder', 'project-scaffolder'),
            DegitProject('static-site_', 'https://github.com/metalsmith/metalsmith/examples/static-site', 'static-site'),
            DegitProject('wintersmith_', 'https://github.com/metalsmith/metalsmith/examples/wintersmith', 'wintersmith'),
            DegitProject('nunjucks-starter_', 'https://github.com/ryannjohnson/metalsmith-nunjucks-starter', 'nunjucks-starter'),
        ])
    )
    
    projects.define(SuperProject('metalsmith-pkg', ['metalsmith-bundle', 'metalsmith-starters']))

    projects.define(
        SuperProject('rollup-pkg', ['rollup-starter','rollup-bundle'])
    )
    
    projects.define(
        DegitProject('rollup-starter', 'rollup/rollup-starter-app')
    )
    
    projects.define(
        BasicProject('rollup-bundle', [
            '@rollup/plugin-babel','@rollup/plugin-node-resolve','@rollup/plugin-commonjs','@rollup/plugin-alias',
            '@rollup/plugin-dsv','@rollup/plugin-json','@rollup/plugin-sucrase','@rollup/plugin-yaml',
            'rollup-plugin-postcss','rollup-plugin-riot','@riotjs/compiler','rollup-plugin-svelte','svelte',
            'rollup-plugin-terser','rollup-plugin-pug','rollup-plugin-pug-html',
        ])
    )

    projects.define(
        ContainerProject('nestjs-bundle', [
            DegitProject('nestjs-typescript-skel', 'github:nestjs/typescript-starter'),
            DegitProject('nestjs-javascript-skel', 'github:nestjs/javascript-starter'),
        ])
    )

    projects.define(
        BasicProject('webpack-bundle', [
            'webpack-cli','webpack',
            'babel-loader','buble-loader','buble','html-loader','pug-loader','pug@^2.0.0',
            'posthtml-loader','handlebars-loader','handlebars','twig-loader','twig',
            'remark-loader','style-loader','css-loader','postcss-loader','postcss','cssnano',
            'stylus-loader','stylus','sass','sass-loader',
            'copy-webpack-plugin','html-webpack-plugin','terser-webpack-plugin','mini-css-extract-plugin',
            '@mdx-js/loader'
        ])
    )
    
    projects.define(
        ContainerProject('neutrinojs-pkg', [
            BasicProject('neutrinojs-react_', [
                'react','react-dom',
                'neutrino','@neutrinojs/react','webpack','webpack-cli','webpack-dev-server'
            ]),
            BasicProject('neutrinojs-preact_', [
                'preact',
                'neutrino','@neutrinojs/preact','webpack','webpack-cli','webpack-dev-server'
            ]),
            BasicProject('neutrinojs-vue_', [
                'vue',
                'neutrino','@neutrinojs/vue','webpack','webpack-cli','webpack-dev-server'
            ]),
            BasicProject('neutrinojs-web_', [
                'neutrino','@neutrinojs/web','webpack','webpack-cli','webpack-dev-server'
            ]),
        ])
    )

    projects.define(
        ContainerProject('parcel-starters', [
            BasicProject('parcel_react_', ['react','react-dom','react-router-dom@6','parcel']),
            BasicProject('parcel_vue_', ['vue@3','vue-router@4','parcel','@parcel/transformer-vue']),
            BasicProject('parcel_preact_', ['preact','parcel','@babel/plugin-transform-react-jsx']),
            BasicProject('parcel_inferno_', ['inferno','inferno-router','inferno-create-element','parcel','@babel/plugin-transform-react-jsx']),
            BasicProject('parcel_solid-js_', ['solid-js','parcel','babel-preset-solid']),
            BasicProject('parcel_sass_', ['parcel', '@parcel/transformer-sass']),
            BasicProject('parcel_stylus_', ['parcel', '@parcel/transformer-stylus']),
            BasicProject('parcel_sugarss_', ['parcel', '@parcel/transformer-sugarss']),
            BasicProject('parcel_elm_', ['parcel', 'elm','@parcel/transformer-elm']),
        ])
    )

    projects.define(
        ContainerProject('parcel-singles', [
            BasicProject('parcel_cssnano_', ['@parcel/optimizer-cssnano']),
            BasicProject('parcel_sass_', ['@parcel/transformer-sass']),
            BasicProject('parcel_stylus_', ['@parcel/transformer-stylus']),
            BasicProject('parcel_sugarss_', ['@parcel/transformer-sugarss']),
            BasicProject('parcel_vue_', ['@parcel/transformer-vue']),
            BasicProject('parcel_toml_', ['@parcel/transformer-toml']),
            BasicProject('parcel_yaml_', ['@parcel/transformer-yaml']),
            BasicProject('parcel_pug_', ['@parcel/transformer-pug']),
            BasicProject('parcel_xml_', ['@parcel/transformer-xml']),
            BasicProject('parcel_coffeescript_', ['@parcel/transformer-coffeescript']),
        ])
    )

    projects.define(
        ContainerProject('angular-starters', [
            DegitProject('bootstrap-starter', 'https://github.com/angular-starters/angular-bootstrap-starter'),
            DegitProject('material-starter', 'https://github.com/angular-starters/angular-material-starter'),
        ])
    )
    
    projects.define(
        ContainerProject('wmr-pkg', [
            BasicProject('wmr-bundle', ['wmr','create-wmr','@wmrjs/directory-import','@wmrjs/nomodule','@wmrjs/service-worker','preact-iso']),
            AppProject('wmr-app', 'create-wmr', 'create-wmr wmr-skel'),
        ])
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

    projects.define(
        AppProject('tiddlywiki_', 'tiddlywiki')
    )

    projects.define(
        BasicProject('polished_', ['polished'])
    )
    
    projects.define(
        BasicProject('ficusjs_', ['ficusjs'])
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

}

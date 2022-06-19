import { AppProject, BasicProject, CommandProject, ContainerProject, DegitProject, ProjectList, SuperProject } from "./util.mjs";

const projects = new ProjectList();
export default projects;

// ----------------------------------------------------------------------------------------

projects.define(
    BasicProject('template-libs', ['mustache','handlebars','nunjucks','hogan.js','pug','ejs'])
)

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
    BasicProject('css-libs', [
        '@fortawesome/fontawesome-free','@fortawesome/fontawesome-svg-core','@fortawesome/free-solid-svg-icons',
        '@emotion/react','@emotion/styled','@emotion/css','@emotion/babel-plugin',
        'animate.css','bootstrap','bulma','materialize-css@next','milligram','spectre.css',
        'tachyons@4.12.0','tailwindcss','normalize.css','minireset.css','open-props','dashvar','pollen-css',
        'postcss','autoprefixer','postcss-preset-env',
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
    ContainerProject('bootstrap-bundle', [
        BasicProject('bootstrap_', ['bootstrap@5.2.0-beta1','@popperjs/core']),
        BasicProject('bootswatch_', ['bootswatch']),
        BasicProject('bootstrap-4_', ['bootstrap@4','bootstrap-vue']),
        BasicProject('material-kit_', ['material-kit']),
        BasicProject('mdbootstrap', ['mdb-ui-kit','mdb-react-ui-kit','mdb-vue-ui-kit'])
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
    BasicProject('preact-bundle', [
        'preact','preact-router','preact-portal','preact-richtextarea','preact-token-input',
        'preact-virtual-list','preact-layout','preact-helmet','preact-custom-scrollbars',
    ])
)

projects.define(
    BasicProject('tagged-templates-bundle', [
        'csstag','@emotion/css','@emotion/react','facon','genel','htm', 'lighterhtml','hypersimple','haunted',
    ])
)

projects.define(
    BasicProject('hyperhtml-bundle', [
        'hyperhtml','uhtml','uce','uland','hypersimple','lighterhtml','neverland','haunted','lit-html','lit'
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

// ----------------------------------------------------------------------------------------

projects.define(
    BasicProject('staticgen-bundle', [
        '20ful','hydrogen-cli','nodemon','live-server','npm-run-all','mini-site-generator',
        'onessg','jstransformer-ejs','jstransformer-swig','spignite',
        '@sphido/core','@sphido/frontmatter','@sphido/markdown','@sphido/meta','fs-extra','globby',
    ])
)

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
    ContainerProject('wmr-pkg', [
        BasicProject('wmr-bundle', ['wmr','create-wmr','@wmrjs/directory-import','@wmrjs/nomodule','@wmrjs/service-worker','preact-iso']),
        AppProject('wmr-app', 'create-wmr', 'create-wmr wmr-skel'),
    ])
)

projects.define(
    ContainerProject('nestjs-bundle', [
        DegitProject('nestjs-typescript-skel', 'github:nestjs/typescript-starter'),
        DegitProject('nestjs-javascript-skel', 'github:nestjs/javascript-starter'),
    ])
)

// ----------------------------------------------------------------------------------------

projects.define(
    ContainerProject('vite-starters', [
        CommandProject('vite-vanilla-starter', 'create-vite@latest vite-vanilla-skel --template vanilla', 'vite-vanilla-skel'),
        CommandProject('vite-vue-starter', 'create-vite@latest vite-vue-skel --template vue', 'vite-vue-skel'),
        CommandProject('vite-react-starter', 'create-vite@latest vite-react-skel --template react', 'vite-react-skel'),
        CommandProject('vite-preact-starter', 'create-vite@latest vite-preact-skel --template preact', 'vite-preact-skel'),
        CommandProject('vite-lit-starter', 'create-vite@latest vite-lit-skel --template lit', 'vite-lit-skel'),
        CommandProject('vite-svelte-starter', 'create-vite@latest vite-svelte-skel --template svelte', 'vite-svelte-skel'),
        DegitProject('vite-solidjs-starter', 'solidjs/templates/js'),
        DegitProject('vite-solidjs-ts-starter', 'solidjs/templates/ts'),
        DegitProject('vite-solidjs-ts-windicss-starter', 'solidjs/templates/ts-windicss'),
        DegitProject('vite-solidjs-ts-tailwindcss-starter', 'solidjs/templates/ts-tailwindcss'),
        DegitProject('vitawind-starter', 'huibizhang/template-vite-vanilla-tailwind-v3'),
        DegitProject('vitesse-lite-starter', 'antfu/vitesse-lite'),
        DegitProject('vitailse-starter', 'zynth17/vitailse'),
        DegitProject('vite-elm-starter', 'lindsaykwardell/vite-elm-template#main'),
        DegitProject('vite-mithril-starter', 'ArthurClemens/mithril-vite-starter'),
        DegitProject('vite-mithril-ts-starter', 'ArthurClemens/mithril-ts-vite-starter'),
    ])
)

projects.define(
    BasicProject('vite-bundle', [
        'vite-plugin-windicss','@originjs/vite-plugin-content',
        '@vitejs/plugin-vue','vite-plugin-pages','@sveltejs/vite-plugin-svelte',
        'vite-plugin-solid','babel-preset-solid',
    ])
)

// ----------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------

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
    BasicProject('parcel-bundle', [
        'parcel','@parcel/resolver-glob','@parcel/optimizer-cssnano',
        '@parcel/transformer-svg-react','@parcel/transformer-typescript-tsc','@parcel/transformer-coffeescript',
        '@parcel/transformer-sass','@parcel/transformer-stylus','@parcel/transformer-less','@parcel/transformer-sugarss',
        '@parcel/transformer-vue',
        '@parcel/transformer-toml','@parcel/transformer-yaml','@parcel/transformer-pug','@parcel/transformer-mdx',
        '@parcel/transformer-xml',
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
        AppProject('react-app', 'create-react-app', 'create-react-app '),
        AppProject('chakra-ui-react', 'create-react-app', 'create-react-app my-app --template @chakra-ui'),
        BasicProject('chakra-ui-vite', ['@chakra-ui/react','@emotion/react@^11','@emotion/styled@^11','framer-motion@^6']),
        BasicProject('react-components', [
            '@headlessui/react','@material-tailwind/react','mdb-react-ui-kit','flowbite-react','flowbite',
            '@vechaiui/core','@vechaiui/react','@tailwindcss/forms','tailwind-react-ui','styled-components',
            'react-bootstrap','bootstrap','react-bulma-components',
        ]),
    ])
)

projects.define(
    ContainerProject('angular-13-bundle', [
        AppProject('angular-app', '@angular/cli@13', 'ng new angular-skel'),
        BasicProject('ng-bootstrap_', ['@ng-bootstrap/ng-bootstrap','bootstrap@4.6','@popperjs/core','@angular/localize']),
        BasicProject('ngneat_dialog_', ['@ngneat/dialog']),
        BasicProject('ngneat_svgicon_', ['@ngneat/svg-icon']),
        BasicProject('ngneat_tailwind_', ['@ngneat/tailwind']),
    ])
)

// ----------------------------------------------------------------------------------------

projects.define(
    SuperProject('servers-bundle', [ 'http-server_','json-server_','serve_','zero-server-app' ])
)

projects.define(
    AppProject('angular-app', '@angular/cli', 'ng new angular-skel')
)

projects.define(
    AppProject('react-app', 'create-react-app', 'create-react-app react-skel')
)

projects.define(
    AppProject('preact-app', 'preact-cli', 'preact create default preact-skel')
)

projects.define(
    DegitProject('svelte-app', 'sveltejs/template', 'svelte-skel')
)

projects.define(
    AppProject('tiddlywiki_', 'tiddlywiki')
)

projects.define(
    AppProject('http-server_', 'http-server')
)

projects.define(
    AppProject('json-server_', 'json-server')
)

projects.define(
    AppProject('serve_', 'serve')
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
    AppProject('zero-server-app', 'zero')
)

projects.define(
    AppProject('forgo-app', 'create-forgo-app', 'create-forgo-app forgo-skel')
)

projects.define(
    AppProject('nexe-app', 'nexe')
)

projects.define(
    AppProject('zx-app', 'zx')
)


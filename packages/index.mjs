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
        'mithril','htm','@types/mithril','alpinejs','marked','stimulus',
        'markdown-it','markdown-it-sub','markdown-it-sup','markdown-it-footnote','markdown-it-deflist',
        'markdown-it-abbr','markdown-it-emoji','markdown-it-container',
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
        BasicProject('_bootstrap', ['bootstrap']),
        BasicProject('_bulma', ['bulma']),
        BasicProject('_codyhouse-framework', ['codyhouse-framework']),
        BasicProject('_material-tailwind', ['tailwindcss', '@material-tailwind/html']),
        BasicProject('_niui', ['niui-npm']),
        BasicProject('_normalize', ['normalize.css']),
        BasicProject('_modern-css-reset', ['modern-css-reset']),
        BasicProject('_minireset', ['minireset.css']),
        BasicProject('classless', 
            ['water.css','sakura.css','awsm.css','axist','bamboo.css','holiday.css','markdown-air','marx-css','simpledotcss','picnic']),
        DegitProject('_classlesscss', 'github:emareg/classlesscss', false),
        DegitProject('_skeleton', 'github:dhg/Skeleton', false),
        BasicProject('_purecss', ['purecss']),
        BasicProject('_foundation', ['foundation-sites']),
        BasicProject('_primer', ['@primer/css']),
        BasicProject('_material-components', ['material-components-web']),
    ])
)

projects.define(
    ContainerProject('bootstrap-bundle', [
        BasicProject('_bootstrap', ['bootstrap@5.2.0-beta1','@popperjs/core']),
        BasicProject('_bootswatch', ['bootswatch']),
        BasicProject('_bootstrap-4', ['bootstrap@4','bootstrap-vue']),
        BasicProject('_material-kit', ['material-kit']),
        BasicProject('mdbootstrap', ['mdb-ui-kit','mdb-react-ui-kit','mdb-vue-ui-kit'])
    ])
)

projects.define(
    ContainerProject('icons-bundle', [
        BasicProject('_bootstrap-icons', ['bootstrap-icons']),
        BasicProject('_fontawesome', ['@fortawesome/fontawesome-free']),
        BasicProject('_feather-icons', ['feather-icons']),
        BasicProject('_octicons', ['@primer/octicons','@primer/styled-octicons','@primer/octicons-react']),
        BasicProject('_bytesize-icons', ['bytesize-icons']),
        BasicProject('_ionicons', ['ionicons']),
        'svg-icons-bundle',
    ])
)

projects.define(
    ContainerProject('svg-icons-bundle', [
        BasicProject('_bootstrap', ['@svg-icons/bootstrap']),
        // BasicProject('_boxicons-logos', ['@svg-icons/boxicons-logos']),
        BasicProject('_boxicons-regular', ['@svg-icons/boxicons-regular']),
        BasicProject('_boxicons-solid', ['@svg-icons/boxicons-solid']),
        BasicProject('_entypo', ['@svg-icons/entypo']),
        BasicProject('_entypo-social', ['@svg-icons/entypo-social']),
        BasicProject('_evaicons-outline', ['@svg-icons/evaicons-outline']),
        BasicProject('_evaicons-solid', ['@svg-icons/evaicons-solid']),
        BasicProject('_evil', ['@svg-icons/evil']),
        BasicProject('_fa-brands', ['@svg-icons/fa-brands']),
        BasicProject('_fa-regular', ['@svg-icons/fa-regular']),
        BasicProject('_fa-solid', ['@svg-icons/fa-solid']),
        BasicProject('_feather', ['@svg-icons/feather']),
        BasicProject('_foundation', ['@svg-icons/foundation']),
        BasicProject('_heroicons-outline', ['@svg-icons/heroicons-outline']),
        BasicProject('_heroicons-solid', ['@svg-icons/heroicons-solid']),
        BasicProject('_icomoon', ['@svg-icons/icomoon']),
        BasicProject('_ionicons-outline', ['@svg-icons/ionicons-outline']),
        BasicProject('_ionicons-sharp', ['@svg-icons/ionicons-sharp']),
        BasicProject('_ionicons-solid', ['@svg-icons/ionicons-solid']),
        BasicProject('_material-filled', ['@svg-icons/material-filled']),
        BasicProject('_material-outlined', ['@svg-icons/material-outlined']),
        BasicProject('_material-rounded', ['@svg-icons/material-rounded']),
        BasicProject('_material-sharp', ['@svg-icons/material-sharp']),
        BasicProject('_octicons', ['@svg-icons/octicons']),
        BasicProject('_open-iconic', ['@svg-icons/open-iconic']),
        BasicProject('_simple-icons', ['@svg-icons/simple-icons']),
        BasicProject('_typicons', ['@svg-icons/typicons']),
        BasicProject('_zondicons', ['@svg-icons/zondicons']),
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
        '@twind/next','@twind/preact','@twind/wmr','construct-style-sheets-polyfill',
    ])
)

projects.define(
    ContainerProject('material-design-bundle', [
        BasicProject('material-tailwind-bundle', ['@material-tailwind/html','@material-tailwind/react']),
        BasicProject('_material-design-lite', ['material-design-lite','vue-mdl']),
        BasicProject('_smelte', ['smelte']),
        BasicProject('_vuetify', ['vuetify']),
        BasicProject('_materialize', ['react-materialize', 'materialize-css@next']),
        BasicProject('mdbootstrap', ['mdb-cli','mdb-ui-kit','mdb-react-ui-kit','mdb-vue-ui-kit']),
        BasicProject('_tw-elements', ['tw-elements']),
        DegitProject('_mdb-webpack-starter', 'https://github.com/mdbootstrap/mdb-webpack-starter', 'mdb-webpack-starter'),
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
        'bulma','bootstrap@5.2.0-beta1','bootswatch','foundation-sites',
    ])
)

projects.define(
    ContainerProject('css-in-js-bundle', [
        BasicProject('emotion-bundle', ['@emotion/css','@emotion/react','@emotion/styled','@emotion/babel-plugin']),
        BasicProject('jss-bundle', [
            'jss','jss-preset-default','color','react-jss','styled-jss',
            'aphrodite-jss','vue-jss','jss-simple','normalize-jss','jss-sheet-loader','jss-css','babel-plugin-jss-css',
            'prejss','babel-plugin-transform-prejss','postjss','prejss-cli','prejss-styles-loader','postcss-js',
        ]),
        BasicProject('styled-components-bundle', ['styled-components','styled-theming','babel-plugin-styled-components']),
        BasicProject('cssx-bundle', ['cssx','cssx-transpiler','cssx-cli','rollup-plugin-cssx']),
        BasicProject('stitches-bundle', ['@stitches/core','@stitches/react']),
        BasicProject('_twin-macro', ['twin.macro']),
        BasicProject('_goober', ['goober']),
        AppProject('absurd-app', 'absurd'),
        BasicProject('_tailwind-components', ['babel-plugin-macros','tailwind.macro','babel-plugin-tailwind-components']),
    ])
)

projects.define(
    ContainerProject('tailwind-pkg', [
        BasicProject('_tailwind', ['tailwindcss']),
        BasicProject('_tailwind-postcss', ['tailwindcss','postcss','autoprefixer']),
        BasicProject('tailwind-plugins', ['@tailwindcss/typography','@tailwindcss/forms','@tailwindcss/line-clamp','tailwind-color-vars']),
        BasicProject('_windstrap', ['windstrap']),
        BasicProject('_flowbite', ['flowbite']),
        BasicProject('_kutty', ['kutty']),
        BasicProject('_sailui', ['sailui']),
        BasicProject('_daisyui', ['daisyui']),
        BasicProject('_a17t', ['a17t']),
        BasicProject('_tw-elements', ['tw-elements']),
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
        DegitProject('_build-tool', 'https://github.com/metalsmith/metalsmith/examples/build-tool', 'build-tool'),
        DegitProject('_drafts-plugin', 'https://github.com/metalsmith/metalsmith/examples/drafts-plugin', 'drafts-plugin'),
        DegitProject('_jekyll', 'https://github.com/metalsmith/metalsmith/examples/jekyll', 'jekyll'),
        DegitProject('_project-scaffolder', 'https://github.com/metalsmith/metalsmith/examples/project-scaffolder', 'project-scaffolder'),
        DegitProject('_static-site', 'https://github.com/metalsmith/metalsmith/examples/static-site', 'static-site'),
        DegitProject('_wintersmith', 'https://github.com/metalsmith/metalsmith/examples/wintersmith', 'wintersmith'),
        DegitProject('_nunjucks-starter', 'https://github.com/ryannjohnson/metalsmith-nunjucks-starter', 'nunjucks-starter'),
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
        'stylus-loader','stylus',
        'copy-webpack-plugin','html-webpack-plugin','terser-webpack-plugin','mini-css-extract-plugin',
        '@mdx-js/loader'
    ])
)

projects.define(
    ContainerProject('neutrinojs-pkg', [
        BasicProject('_neutrinojs-react', [
            'react','react-dom',
            'neutrino','@neutrinojs/react','webpack','webpack-cli','webpack-dev-server'
        ]),
        BasicProject('_neutrinojs-preact', [
            'preact',
            'neutrino','@neutrinojs/preact','webpack','webpack-cli','webpack-dev-server'
        ]),
        BasicProject('_neutrinojs-vue', [
            'vue',
            'neutrino','@neutrinojs/vue','webpack','webpack-cli','webpack-dev-server'
        ]),
        BasicProject('_neutrinojs-web', [
            'neutrino','@neutrinojs/web','webpack','webpack-cli','webpack-dev-server'
        ]),
    ])
)

// ----------------------------------------------------------------------------------------

projects.define(
    ContainerProject('parcel-starters', [
        BasicProject('_parcel_react', ['react','react-dom','react-router-dom@6','parcel']),
        BasicProject('_parcel_vue', ['vue@3','vue-router@4','parcel','@parcel/transformer-vue']),
        BasicProject('_parcel_preact', ['preact','parcel','@babel/plugin-transform-react-jsx']),
        BasicProject('_parcel_inferno', ['inferno','inferno-router','inferno-create-element','parcel','@babel/plugin-transform-react-jsx']),
        BasicProject('_parcel_solid-js', ['solid-js','parcel','babel-preset-solid']),
        BasicProject('_parcel_sass', ['parcel', '@parcel/transformer-sass']),
        BasicProject('_parcel_stylus', ['parcel', '@parcel/transformer-stylus']),
        BasicProject('_parcel_sugarss', ['parcel', '@parcel/transformer-sugarss']),
        BasicProject('_parcel_elm', ['parcel', '@parcel/transformer-elm']),
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
        BasicProject('_parcel_cssnano', ['@parcel/optimizer-cssnano']),
        BasicProject('_parcel_sass', ['@parcel/transformer-sass']),
        BasicProject('_parcel_stylus', ['@parcel/transformer-stylus']),
        BasicProject('_parcel_sugarss', ['@parcel/transformer-sugarss']),
        BasicProject('_parcel_vue', ['@parcel/transformer-vue']),
        BasicProject('_parcel_toml', ['@parcel/transformer-toml']),
        BasicProject('_parcel_yaml', ['@parcel/transformer-yaml']),
        BasicProject('_parcel_pug', ['@parcel/transformer-pug']),
        BasicProject('_parcel_xml', ['@parcel/transformer-xml']),
        BasicProject('_parcel_coffeescript', ['@parcel/transformer-coffeescript']),
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
        BasicProject('_vue', ['vue']),
        BasicProject('_petite-vue', ['petite-vue']),
        BasicProject('vue-bundle', ['vue@3','vue-router@4','pinia','petite-vue']),
        BasicProject('_vitepress', ['vitepress','vue']),
        BasicProject('_vuepress', ['vuepress']),
        // AppProject('_create-vue_3', 'create-vue@3', 'create-vue -d'),
        // AppProject('_create-vue_2', 'create-vue@2', 'create-vue -d'),
        BasicProject('vue-loaders', ['sass-loader','sass','stylus-loader','stylus','pug','pug-plain-loader']),
        BasicProject('vue-components', [
            '@headlessui/vue','vuestic-ui','naive-ui','vfonts','vuetensils','vue-ari',
            'element-plus','vue-tailwind','@inkline/inkline','mdb-vue-ui-kit',
        ]),
    ])
)

projects.define(
    ContainerProject('react-pkg', [
        BasicProject('_react', ['react']),
        BasicProject('_react-dom', ['react-dom']),
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

// ----------------------------------------------------------------------------------------

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
    AppProject('tiddlywiki', 'tiddlywiki')
)

projects.define(
    AppProject('http-server', 'http-server')
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




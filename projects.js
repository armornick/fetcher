module.exports = {
	
	defaults: [
		// 'angularjs-bundle',
		// 'misc-libs','css-libs','express-bundle',
		// 'webpack-bundle','remark-bundle','postcss-bundle','hyperhtml-bundle',
		// 'metalsmith-bundle','neutrinojs-pkg','docsify-app','babeljs-pkg',"parcel-pkg",
		// 'vue-app','vue-bundle','react-app','preact-app','svelte-app','npx-react-app',
		// 'tiddlywiki','httpServer','next-app','nanogen-app','eleventy-app','nuxt-bundle',
		// 'zero-server-app','parcel-app','parcel-bundle','rollup-pkg',
		// 'vite-starters','vite-bundle','windicss-bundle',
		// 'tailwind-pkg','tailwind-ui-kits',
		// '_ko-jsx_single','_toastify-js_single',
		'preact-bundle','solidjs-bundle','infernojs-bundle',
	],
	isolate: true,

	// ----------------------------------------------------------------------------------------

	"template-libs": {
		packages: [
			'mustache','handlebars','nunjucks','hogan.js','pug','ejs'
		]
	},

	"misc-libs": {
		packages: [
			'lowdb','page','axios','highlight.js','prismjs','masonry-layout','lodash','rxjs',
			'd3','chart.js','moment','dayjs','underscore','sweetalert','sweetalert2','reveal.js',
			'html5sortable','csstag','facon','genel','marli',
			'hyperhtml','uhtml','hypersimple','neverland','hyperhtml-element',
			'inferno','inferno-hyperscript','inferno-create-element','preact','solid-js',
			'mithril','htm','@types/mithril','alpinejs','marked','stimulus',
			'markdown-it','markdown-it-sub','markdown-it-sup','markdown-it-footnote','markdown-it-deflist',
			'markdown-it-abbr','markdown-it-emoji','markdown-it-container'
		]
	},

	"css-libs": {
		packages: [
			'@fortawesome/fontawesome-free','@fortawesome/fontawesome-svg-core','@fortawesome/free-solid-svg-icons',
			'animate.css','bootstrap','bulma','chota','materialize-css@next','milligram','spectre.css',
			'tachyons@4.12.0','tailwindcss','normalize.css','minireset.css','open-props',
			'postcss','autoprefixer','postcss-preset-env','precss'
		]
	},

	"express-bundle": {
		packages: [
			'express',
			'body-parser','cookie-parser','multer','serve-index','serve-static',
			'pug','ejs','hbs','nunjucks',
			'poet',
			' @feathersjs/feathers','@feathersjs/express','@feathersjs/socketio','@feathersjs/cli',
		]
	},

	"angularjs-bundle": {
		packages: [
			'angular','angular-route','angular-animate','angular-aria','angular-messages','@uirouter/angularjs',
			'angular-file-upload','angular-filter','ng-tasty','ng-infinite-scroll','angular-masonry','ng-csv',
			'ui-select','ng-notify','ng-sweet-alert','angular-sticky-plugin','angular-moment','moment','ngstorage',
			'ng-table','angular-ui-grid','angular-material','angular-ui-layout',"n3-charts",'d3@3','angular-chart.js',
			'tc-angular-chartjs','chart.js',
			'babel-plugin-angularjs-annotate','ng-annotate-loader','babel-plugin-annotate-ng','babel-plugin-angular-inline-template',
		]
	},

	"_ko-jsx_single": {
		packages: ["ko-jsx","babel-plugin-jsx-dom-expressions"]
	},

	"_toastify-js_single": {
		packages: ['toastify-js']
	},

	"preact-bundle": {
		packages: [
			'preact','preact-router','preact-portal','preact-richtextarea','preact-token-input',
			'preact-virtual-list','preact-layout','preact-helmet','preact-custom-scrollbars',
		]
	},

	"solidjs-bundle": {
		packages: ['solid-js','babel-preset-solid']
	},

	"infernojs-bundle": {
		packages: [
			'inferno','inferno-compat','inferno-router','inferno-server',
			'babel-plugin-inferno','inferno-hyperscript','inferno-create-element',
		]
	},

	// ----------------------------------------------------------------------------------------

	'webpack-bundle': {
		packages: [
			'webpack-cli','webpack',
			'babel-loader','buble-loader','buble','html-loader','pug-loader','pug@^2.0.0',
			'posthtml-loader','handlebars-loader','handlebars','twig-loader','twig',
			'remark-loader','style-loader','css-loader','postcss-loader','postcss',
			'stylus-loader','stylus',
			'copy-webpack-plugin','html-webpack-plugin','terser-webpack-plugin',
			'@mdx-js/loader'
		]
	},

	"postcss-bundle": {
		packages: [
			'postcss','autoprefixer','atcss','cssnano','precss','rucksack-css','postcss-utilities',
			'postcss-cli','postcss-layout','precss','postcss-preset-env'
		]
	},

	"remark-bundle": {
		packages: [
			'unified','unified-stream','remark-parse',
			// remark --------------------------------------------
			'remark-capitalize','remark-code-blocks','remark-code-frontmatter','remark-code-import',
			'remark-collapse','remark-definition-list','remark-directive','remark-embed-images','remark-extended-table',
			'remark-gfm','remark-html','remark-mdx','remark-pdf','remark-sectionize','remark-toc','remark-directive',
			// rehype --------------------------------------------
			'remark-rehype','rehype-remark','rehype-stringify','rehype-parse','rehype-cli','hast',
			'rehype-dom','rehype-highlight','lowlight',//'rehype-prism','refractor',
			'rehype-toc','rehype-url-inspector','rehype-truncate','rehype-add-classes','rehype-autolink-headings',
			'rehype-concat-css-style','rehype-external-links','rehype-inline',
			'rehype-minify-css-style','rehype-minify-javascript-script','rehype-partials','rehype-prism-plus',
			'rehype-remove-comments','@agentofuser/rehype-section','rehype-slug',
			'rehype-template','remark-frontmatter','remark-extract-frontmatter',
		]
	},

	"hyperhtml-bundle": {
		packages: ['hyperhtml','uhtml','hypersimple','lighterhtml','neverland','haunted','lit-html','lit']
	},

	"metalsmith-bundle": {
		packages: [
			'metalsmith','metalsmith-debug','micromatch',
			'@metalsmith/collections','@metalsmith/layouts','@metalsmith/markdown','@metalsmith/permalinks',
			'metalsmith-asciidoctor','metalsmith-auto-collections','metalsmith-clean-css','clean-css@4.x.x',
			'metalsmith-code-highlight','metalsmith-concat','metalsmith-data-loader','@metalsmith/drafts',
			'metalsmith-html-minifier','metalsmith-inline-css','metalsmith-markdownit','metalsmith-pagination',
			'metalsmith-with-postcss','metalsmith-slug','metalsmith-stylus','@metalsmith/table-of-contents',
			'metalsmith-in-place','@metalsmith/default-values','@metalsmith/remove','@metalsmith/excerpts',
			'metalsmith-taxonomy','metalsmith-uglify',''
		]
	},

	'windicss-bundle': {
		devPackages: [
			'svelte-windicss-preprocess','windicss','rollup-plugin-windicss','windicss-webpack-plugin',
		],
	},

	// ----------------------------------------------------------------------------------------

	'tailwind-pkg': {
		subs: [
			'tailwind-single','tailwind-postcss-single','tailwind-bundle',
			'_windstrap_single','_flowbite_single','_kutty_single','_sailui_single','_daisyui_single','_a17t_single',
			'_material-tailwind_single','_tw-elements_single',
		]
	},

	'tailwind-single': {
		devPackages: ['tailwindcss']
	},

	'tailwind-postcss-single': {
		devPackages: ['tailwindcss','postcss','autoprefixer']
	},

	'tailwind-bundle': {
		devPackages: [
			'@tailwindcss/typography','@tailwindcss/forms','@tailwindcss/line-clamp','tailwind-color-vars',
		]
	},

	'_windstrap_single': {
		packages: ['windstrap']
	},

	'_flowbite_single': {
		packages: ['flowbite']
	},

	'_kutty_single': {
		packages: ['kutty']
	},

	'_sailui_single': {
		packages: ['sailui']
	},
	
	'_daisyui_single': {
		packages: ['daisyui']
	},

	'_a17t_single': {
		packages: ['a17t']
	},

	'_material-tailwind_single': {
		packages: ['@material-tailwind/react']
	},

	'_tw-elements_single': {
		packages: ['tw-elements']
	},

	// ----------------------------------------------------------------------------------------

	'tailwind-ui-kits': {
		subs: ['merakiui-local','tailwindlayout-local','hyperui-local','tailmin-local',]
	},

	'merakiui-local': {
		npx: 'degit https://github.com/merakiui/merakiui merakiui-local',
		install: 'merakiui-local',
	},

	'tailwindlayout-local': {
		npx: 'degit https://github.com/lalokalabs/tailwindlayout tailwindlayout-local',
		install: 'tailwindlayout-local',
	},

	'hyperui-local': {
		npx: 'degit https://github.com/markmead/hyperui hyperui-local',
		install: 'hyperui-local',
	},

	'tailmin-local': {
		npx: 'degit https://github.com/otezz/tailmin tailmin-local',
		install: 'tailmin-local',
	},

	// ----------------------------------------------------------------------------------------

	'rollup-pkg': {
		subs: ['rollup-starter','rollup-bundle']
	},

	'rollup-starter': {
		npx: 'degit "rollup/rollup-starter-app" rollup-app-skel',
		install: 'rollup-app-skel'
	},

	'rollup-bundle': {
		packages: [
			'@rollup/plugin-babel','@rollup/plugin-node-resolve','@rollup/plugin-commonjs','@rollup/plugin-alias',
			'@rollup/plugin-dsv','@rollup/plugin-json','@rollup/plugin-sucrase','@rollup/plugin-yaml',
			'rollup-plugin-postcss','rollup-plugin-riot','@riotjs/compiler','rollup-plugin-svelte','svelte',
			'rollup-plugin-terser','rollup-plugin-pug','rollup-plugin-pug-html',
		],
	},

	// ----------------------------------------------------------------------------------------

	'vite-starters': {
		subs: ['vite-vanilla-starter','vite-vue-starter','vite-react-starter','vite-preact-starter','vite-lit-starter','vite-svelte-starter'],
		topCache: true,
	},

	'vite-vanilla-starter': {
		npx: 'create-vite@latest vite-vanilla-skel --template vanilla',
		install: 'vite-vanilla-skel',
	},

	'vite-vue-starter': {
		npx: 'create-vite@latest vite-vue-skel --template vue',
		install: 'vite-vue-skel',
	},

	'vite-react-starter': {
		npx: 'create-vite@latest vite-react-skel --template react',
		install: 'vite-react-skel',
	},

	'vite-preact-starter': {
		npx: 'create-vite@latest vite-preact-skel --template preact',
		install: 'vite-preact-skel',
	},

	'vite-lit-starter': {
		npx: 'create-vite@latest vite-lit-skel --template lit',
		install: 'vite-lit-skel',
	},

	'vite-svelte-starter': {
		npx: 'create-vite@latest vite-svelte-skel --template svelte',
		install: 'vite-svelte-skel',
	},

	'vite-bundle': {
		packages: [
			'vite-plugin-windicss','@originjs/vite-plugin-content',
			'@vitejs/plugin-vue','vite-plugin-pages','@sveltejs/vite-plugin-svelte',
			'vite-plugin-solid','babel-preset-solid',
		]
	},

	// ----------------------------------------------------------------------------------------
	// neutrinojs templates

	"neutrinojs-pkg": {
		subs: ['_neutrinojs-react','_neutrinojs-preact','_neutrinojs-vue','_neutrinojs-web']
	},

	"_neutrinojs-react": {
		mergeInstall: true,
		packages: ['react','react-dom'],
		devPackages: ['neutrino','@neutrinojs/react','webpack','webpack-cli','webpack-dev-server']
	},

	"_neutrinojs-preact": {
		mergeInstall: true,
		packages: ['preact'],
		devPackages: ['neutrino','@neutrinojs/preact','webpack','webpack-cli','webpack-dev-server']
	},

	"_neutrinojs-vue": {
		mergeInstall: true,
		packages: ['vue'],
		devPackages: ['neutrino','@neutrinojs/vue','webpack','webpack-cli','webpack-dev-server']
	},

	"_neutrinojs-web": {
		mergeInstall: true,
		devPackages: ['neutrino','@neutrinojs/web','webpack','webpack-cli','webpack-dev-server']
	},

	// ----------------------------------------------------------------------------------------

	"parcel-pkg": {
		subs: [
			'parcel-app','parcel-bundle',
			'_parcel_react','_parcel_vue','_parcel_preact','_parcel_inferno','_parcel_solid-js'
		]
	},

	"_parcel_react": {
		packages: ['react','react-dom','react-router-dom@6'],
		devPackages: ['parcel']
	},

	"_parcel_vue": {
		packages: ['vue@3','vue-router@4'],
		devPackages: ['parcel','@parcel/transformer-vue']
	},

	"_parcel_preact": {
		packages: ['preact'],
		devPackages: ['parcel','@babel/plugin-transform-react-jsx']
	},

	"_parcel_inferno": {
		packages: ['inferno','inferno-router','inferno-create-element'],
		devPackages: ['parcel','@babel/plugin-transform-react-jsx']
	},

	"_parcel_solid-js": {
		packages: ['solid-js'],
		devPackages: ['parcel','babel-preset-solid']
	},

	// ----------------------------------------------------------------------------------------

	"babeljs-pkg": {
		subs: ['babeljs-bundle','_babeljs_preset-env','_babeljs_preset-react','_babeljs_transform-jsx']
	},

	"babeljs-bundle": {
		devPackages: ['@babel/core','@babel/cli','@babel/preset-env','@babel/preset-react','@babel/preset-typescript',
			'@babel/preset-flow','@babel/plugin-transform-react-jsx',]
	},

	"_babeljs_preset-env": {
		packages: ['@babel/preset-env']
	},

	"_babeljs_preset-react": {
		packages: ['@babel/preset-react']
	},

	"_babeljs_transform-jsx": {
		packages: ['@babel/plugin-transform-react-jsx']
	},

	// ----------------------------------------------------------------------------------------

}

Object.assign(
	module.exports,
	require('./packages/apps'),
);
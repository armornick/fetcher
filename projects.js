module.exports = {
	
	defaults: [
		'misc-libs',//'css-libs','express-bundle',
		'webpack-bundle','postcss-bundle','remark-bundle',
		// 'metalsmith-bundle',
		// 'neutrinojs-pkg','babeljs-pkg',
		// 'vue-app','vue-bundle','react-app','preact-app','svelte-app','npx-react-app',
		// 'tiddlywiki','httpServer','next-app','nanogen-app','eleventy-app',//'nuxt-bundle',
		// 'zero-server-app','parcel-app','parcel-bundle',
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

	// ----------------------------------------------------------------------------------------

	'webpack-bundle': {
		packages: [
			'webpack-cli','webpack',
			'babel-loader','buble-loader','buble','html-loader','pug-loader','pug',
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
			'rehype-components','rehype-concat-css-style','rehype-external-links','rehype-inline',
			'rehype-minify-css-style','rehype-minify-javascript-script','rehype-partials','rehype-prism-plus',
			'rehype-remove-comments','rehype-section','rehype-slug','rehype-template',''
		]
	},

	"metalsmith-bundle": {
		packages: [
			'metalsmith','metalsmith-debug','micromatch',
			'@metalsmith/collections','@metalsmith/layouts','@metalsmith/markdown','@metalsmith/permalinks',
			'metalsmith-asciidoctor','metalsmith-auto-collections','metalsmith-clean-css','clean-css',
			'metalsmith-code-highlight','metalsmith-concat','metalsmith-data-loader','@metalsmith/drafts',
			'metalsmith-html-minifier','metalsmith-inline-css','metalsmith-markdownit','metalsmith-pagination',
			'metalsmith-with-postcss','metalsmith-slug','metalsmith-stylus','@metalsmith/table-of-contents',
			'metalsmith-in-place','@metalsmith/default-values','@metalsmith/remove','@metalsmith/excerpts',
			'metalsmith-taxonomy','metalsmith-uglify',''
		]
	},

	// ----------------------------------------------------------------------------------------
	// neutrinojs templates

	"neutrinojs-pkg": {
		subs: ['_neutrinojs-react','_neutrinojs-preact','_neutrinojs-vue','_neutrinojs-web']
	},

	"_neutrinojs-react": {
		packages: ['react','react-dom'],
		devPackages: ['neutrino','@neutrinojs/react','webpack','webpack-cli','webpack-dev-server']
	},

	"_neutrinojs-preact": {
		packages: ['preact'],
		devPackages: ['neutrino','@neutrinojs/preact','webpack','webpack-cli','webpack-dev-server']
	},

	"_neutrinojs-vue": {
		packages: ['vue'],
		devPackages: ['neutrino','@neutrinojs/vue','webpack','webpack-cli','webpack-dev-server']
	},

	"_neutrinojs-web": {
		devPackages: ['neutrino','@neutrinojs/web','webpack','webpack-cli','webpack-dev-server']
	},

	// ----------------------------------------------------------------------------------------

	"babeljs-pkg": {
		subs: ['babeljs-bundle','_babeljs_preset-env','_babeljs_preset-react','_babeljs_transform-jsx']
	},

	"babeljs-bundle": {
		devPackages: ['@babel/core','@babel/cli','@babel/preset-env','@babel/preset-react','@babel/preset-typescript',
			'@babel/preset-flow','@babel/plugin-transform-react-jsx']
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
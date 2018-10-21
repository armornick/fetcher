module.exports = {
	
	defaults: ['typescriptBundle','sassBundle','styles'],
	cacheDir: 'build/_cache',

	// library packages

	libs: {
		packages: ['request','chalk','lodash','async','bluebird','commander','minimist','yargs','cheerio',
			'underscore','backbone','backbone.marionette','stapes','backbone.localstorage','jquery',
			'yaml','front-matter','gray-matter','moment']
	},

	libs2: {
		packages: ['react','react-dom','mithril','preact','hyperapp','vue','vue-router','riot','riot-compiler','@fortawesome/fontawesome-free',
			'flat-file-db','lowdb','rxjs','hash-router','page','rlite-router','trkl','zepto','crel','offside-js',
			'micro-events','emitonoff','corner.js','dual-emitter','store2','cookie_js','mom','pyrsmk-toast','csv.js']
	},

	angularjs: {
		packages: ['angular','angular-route','angular-animate','angular-aria','angular-resource','angular-cookies','angular-sanitize',
			'angular-ui-bootstrap','bootstrap@3','angular-ui-layout','jquery','jquery-ui']
	},

	templateEngines: {
		packages: ['consolidate','nunjucks','swig-templates','hogan.js','handlebars','mustache','pug','pug-cli','ejs','dustjs-linkedin','dustjs-helpers',
			'eco','dot','hamljs','jade']
	},

	// css packages

	styles: {
		packages: ['bootstrap','foundation-sites','bulma','muicss','spectre.css','mini.css','semantic-ui-css','semantic-ui-less',
		'uikit','materialize-css@next','strawberry-css','flexboxgrid','milligram','minireset.css','normalize.css','animate.css']
	},

	// compilers

	transpilers: {
		packages: ['coffeescript','buble','postcss','precss','postcss-preset-env','csso','terser','less',
			'stylus','html-minifier','minimize','marked','prismjs','highlight.js',
			'@babel/core','@babel/cli','@babel/preset-env','@babel/polyfill','@babel/preset-react','@babel/preset-typescript',
			'babel-preset-minify','@babel/plugin-transform-runtime','@babel/runtime','@babel/helpers']
	},

	postcssBundle: {
		packages: ['postcss','precss','sugarss','postcss-nested-props','postcss-nested','gulp-sass-to-postcss-mixins','postcss-preset-env',
			'postcss-color-palette','postcss-all-link-colors','postcss-bem','postcss-mixins','postcss-sassy-mixins','postcss-neat',
			'postcss-simple-grid','cssnano','postcss-alias','postcss-center','postcss-clearfix','postcss-short-data','postcss-flexbox','autoprefixer'] 
	},

	markdownIt: {
		packages: ['markdown-it','markdown-it-container','markdown-it-footnote','markdown-it-anchor',
			'markdown-it-highlightjs','markdown-it-task-lists','markdown-it-prism','markdown-it-div',
			'markdown-it-anchor','markdown-it-table-of-contents','markdown-it-iframe']
	},

	typescriptBundle: {
		packages: ['typescript','gulp-typescript','tsify','vinyl-source-stream','ts-loader','awesome-typescript-loader',
			'@types/underscore','@types/jquery','@types/backbone','@types/backbone.localstorage','@types/backbone.marionette',
			'@types/knockout','@types/react','@types/react-dom','@types/request','@types/bluebird','@types/cheerio',
			'@types/yargs','@types/riot','@types/rx','@types/lodash','@types/mithril','@types/minimist','vue-class-component',
			'@types/prismjs','@types/highlight.js','@types/marked','@types/markdown-it','@types/mustache','@types/handlebars',
			'@types/nunjucks','@types/pug','@types/ejs']
	},

	sassBundle: {
		packages: ['metalsmith-sass','sassify','node-sass','scssify','sass-loader','gulp-sass']
	},

	// build tools

	browserifyBundle: {
		packages: ['browserify','hbsfy','handlebars','ngify','stylify','watchify','riotify','uglifyify','browser-unpack',
			'sheetify','nanohtml','css-modulesify','brfs','aliasify','babelify','@babel/core','@babel/preset-env',
			'@babel/preset-react']
	},

	webpackBundle: {
		packages: ['webpack','webpack-cli','style-loader','css-loader','file-loader','csv-loader','xml-loader','buble-loader ',
			'pug-loader','markdown-loader','stylus','stylus-loader','vue-loader','polymer-loader','coffee-loader','twig-loader','less','less-loader',
			'postcss-loader','postcss','sugarss','precss','postcss-preset-env','postcss-color-palette','raw-loader','babel-loader','@babel/core','@babel/preset-env','@babel/preset-react','babel-preset-minify',
			'html-webpack-plugin','source-map-loader','awesome-typescript-loader','ts-loader','typescript']
	},

	gulpjs: {
		packages: ['gulp-cli','gulp','gulp-pug','gulp-less','gulp-csso','gulp-concat','gulp-stylus','gulp-data','gulp-postcss','gulp-coffee',
			'gulp-typescript','typescript','gulp-babel','@babel/core','@babel/preset-env','gulp-inject','gulp-angular-templatecache','gulp-handlebars',
			'gulp-declare','gulp-wrap','gulp-nunjucks','gulp-dust','gulp-riot','gulp-template','gulp-swig','gulp-util','gulp-ng-annotate',
			'gulp-consolidate','gulp-plumber','webpack-stream','gulp-sourcemaps','gulp-webserver']
	},

	metalsmithBundle: {
		packages: ['metalsmith','metalsmith-collections','metalsmith-layouts','metalsmith-markdown','metalsmith-permalinks','metalsmith-angular-templatecache',
			'metalsmith-archive','metalsmith-assets','metalsmith-auto-collections','metalsmith-browserify','metalsmith-clean-css','clean-css','metalsmith-coffee',
			'metalsmith-code-highlight','metalsmith-collections','metalsmith-concat','metalsmith-concat-convention','metalsmith-html-minifier','metalsmith-less',
			'metalsmith-lunr','metalsmith-markdownit','metalsmith-markdown-remarkable','metalsmith-metallic','metalsmith-ng-annotate','metalsmith-stylus',
			'jstransformer-nunjucks','jstransformer-handlebars','jstransformer-ejs','jstransformer-lodash','jstransformer-hogan','jstransformer-riotjs','jstransformer-mustache',
			'jstransformer-pug','jstransformer-swig','metalsmith-watch','metalsmith-serve']
	},

	// global application packages

	vuejs: {
		package: '@vue/cli',
		global: true,
	},

	angular: {
		package: '@angular/cli',
		global: true,
	},

	reactApp: {
		package: 'create-react-app',
		global: true
	},

	harpjs: {
		package: 'harp',
		global: true
	},

	tiddlywiki: {
		package: 'tiddlywiki',
		global: true
	},

	brunchApp: {
		package: 'brunch',
		global: true
	},

	// hexo packages

	hexoApp: {
		package: 'hexo-cli',
		global: true
	},

	hexoBundle: {
		packages: ['hexo-fontawesome','hexo-generator-archive','hexo-generator-category','hexo-generator-feed','hexo-renderer-coffeescript','hexo-renderer-ejs',
			'hexo-renderer-less','hexo-renderer-markdown','hexo-renderer-markdown-it','hexo-renderer-markdown-it-plus','hexo-renderer-marked','hexo-renderer-mustache',
			'hexo-renderer-sass','hexo-renderer-stylus','hexo-renderer-yasr','hexo-server','hexo-prism-plugin','hexo-auto-category']
	},

	// project templates

	"gulp-base-template": {
		mergeInstall: true,

		packages: ['lodash','stapes'],

		devPackages: ['gulp','gulp-cli','gulp-webserver','gulp-concat','gulp-sourcemaps','gulp-pug','gulp-less','gulp-csso']
	},

	"gulp-vue-template": {
		mergeInstall: true,

		packages: ['vue','vue-router'],

		devPackages: ['gulp','gulp-cli','gulp-webserver','gulp-concat','gulp-sourcemaps','webpack-stream',
			'webpack','webpack-cli','vue-loader','vue-style-loader',
			'css-loader','sass-loader','node-sass','less-loader','less','stylus-loader','stylus',
			'pug-plain-loader','pug','raw-loader','pug-plain-loader']
	},

	"gulp-angular-template": {
		mergeInstall: true,

		packages: ['angular','angular-route','angular-animate','angular-aria','angular-resource','angular-cookies','angular-sanitize'],

		devPackages: ['gulp','gulp-cli','gulp-webserver','gulp-concat','gulp-sourcemaps',
			'gulp-ng-html2js','gulp-minify-html','gulp-uglify','gulp-ng-annotate','gulp-angular-templatecache',
			'gulp-consolidate','eco','nunjucks','pug','ejs','hogan.js','handlebars',
			'gulp-csso','gulp-sass','node-sass','gulp-stylus','nib','axis','jeet','susy']
	},

	"metalsmith-static-site": {
		mergeInstall: true,

		packages: ['metalsmith','metalsmith-markdown','metalsmith-permalinks','metalsmith-watch','metalsmith-serve','metalsmith-drafts','metalsmith-collections','metalsmith-paginate',
			'metalsmith-layouts','jstransformer-handlebars']
	},

	"metalsmith-wintersmith": {
		mergeInstall: true,

		packages: ['metalsmith','metalsmith-markdown','metalsmith-permalinks','metalsmith-watch','metalsmith-serve','metalsmith-drafts','metalsmith-collections','metalsmith-paginate',
			'metalsmith-layouts','jstransformer-pug']
	},

	"metalsmith-angularjs": {
		mergeInstall: true,

		packages: ['angular','angular-route','angular-animate','angular-aria','angular-resource','angular-cookies','angular-sanitize'],

		devPackages: ['metalsmith','metalsmith-watch','metalsmith-serve','metalsmith-ng-annotate','metalsmith-angular-templatecache',
			'metalsmith-less','metalsmith-stylus','metalsmith-sass','metalsmith-jade']
	},


}
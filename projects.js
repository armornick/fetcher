module.exports = {
	
	defaults: ['vue-app'],
	isolate: true,

	// library packages

	"popular-libraries": {
		packages: ['lodash','async','bluebird','jquery','masonry','moment','rxjs','blocks',
			'underscore','backbone','backbone.marionette','backbone.localstorage','knockout','knockback',
			'flat-file-db','lowdb']
	},

	"server-libraries": {
		packages: ['request','chalk','commander','minimist','yargs','cheerio',
			'yaml','front-matter','gray-matter',]
	},

	"microjs-bundle": {
		packages: ['stapes','hash-router','page','rlite-router','trkl','zepto','crel','offside-js',
			'micro-events','emitonoff','corner.js','dual-emitter','store2','cookie_js','mom','pyrsmk-toast','csv.js',
			'toastr','notie','gator','bean','dot']
	},

	"vdom-libraries": {
		packages: ['preact','preact-render-to-string','mithril','hyperapp',
			'hyperscript','hyperscript-helpers','hyperx','virtual-dom']
	},

	"template-libraries": {
		packages: ['consolidate','mustache','hogan.js','handlebars','nunjucks','swig-templates','ejs','eco','hamljs','jade',
			'dot','gulp-consolidate','pug','jade'],
	},

	// css packages

	styles: {
		packages: ['bootstrap','foundation-sites','bulma','muicss','spectre.css','mini.css','semantic-ui-css','semantic-ui-less',
			'uikit','materialize-css@next','strawberry-css','flexboxgrid','milligram','minireset.css','normalize.css','animate.css',
			'@fortawesome/fontawesome-free']
	},

	// library bundles

	angularjs: {
		packages: ['angular','angular-route','angular-animate','angular-aria','angular-resource','angular-cookies','angular-sanitize',
			'angular-ui-bootstrap','bootstrap@3','angular-ui-layout','@uirouter/angularjs','angular-moment',
			'ngify','gulp-angular-templatecache','gulp-ng-annotate']
	},

	"riot-bundle": {
		packages: ['riot','riot-compiler','riot-route','gulp-riot','riot-tag-loader','riotify','riotify-fn']
	},

	"vue-bundle": {
		packages: ['vue','vue-router','vuex','vue-server-renderer','vue-class-component',
			'vueify','gulp-vueify','gulp-vueify2','vue-loader']
	},

	"react-bundle": {
		packages: ['react','react-dom','react-redux','redux', 'hyperx',
			'@babel/core','@babel/cli','@babel/preset-env','@babel/polyfill','@babel/preset-react','babel-preset-minify','@babel/plugin-transform-runtime','@babel/runtime',
			'gulp-babel','babel-loader','babelify']
	},

	// compiler bundles

	"less-bundle": {
		packages: ['less','flexiblegs-less','gulp-less','less-loader','node-lessify']
	},

	"stylus-bundle": {
		packages: ['stylus','nib','axis','jeet','flexiblegs-stylus',
			'gulp-stylus','stylus-loader','stylify']
	},

	"sass-bundle": {
		packages: ['node-sass','flexiblegs-sass','flexiblegs-scss','susy','jeet','scut','bourbon',
			'gulp-sass','sass-loader','sassify','scssify']
	},

	"postcss-bundle": {
		packages: ['postcss','precss','sugarss','postcss-nested-props','postcss-nested','gulp-sass-to-postcss-mixins','postcss-preset-env',
			'postcss-color-palette','postcss-all-link-colors','postcss-bem','postcss-mixins','postcss-sassy-mixins','postcss-neat',
			'postcss-simple-grid','cssnano','postcss-alias','postcss-center','postcss-clearfix','postcss-short-data','postcss-flexbox','autoprefixer',
			'gulp-postcss','postcss-loader'] 
	},

	"minifier-bundle": {
		packages: ['csso','terser','html-minifier','minimize',
			'gulp-csso','gulp-terser','gulp-clean-css','gulp-uglify','gulp-htmlmin','uglifyify']
	},

	"markdown-bundle": {
		packages: ['marked','prismjs','highlight.js','micromarkdown',
			'markdown-it','markdown-it-container','markdown-it-footnote','markdown-it-anchor',
			'markdown-it-highlightjs','markdown-it-task-lists','markdown-it-prism','markdown-it-div',
			'markdown-it-anchor','markdown-it-table-of-contents','markdown-it-iframe',
			'gulp-markdown','gulp-markdown-it']
	},

	"babel-bundle": {
		packages: ['@babel/core','@babel/cli','@babel/preset-env','@babel/polyfill','@babel/preset-react','babel-preset-minify','@babel/plugin-transform-runtime','@babel/runtime',
			'gulp-babel','babel-loader','babelify']
	},

	"typescript-bundle": {
		packages: ['typescript','gulp-typescript','tsify','vinyl-source-stream','ts-loader','awesome-typescript-loader',
			'@types/underscore','@types/jquery','@types/backbone','@types/backbone.localstorage','@types/backbone.marionette',
			'@types/knockout','@types/react','@types/react-dom','@types/request','@types/bluebird','@types/cheerio',
			'@types/yargs','@types/riot','@types/rx','@types/lodash','@types/mithril','@types/minimist','vue-class-component',
			'@types/prismjs','@types/highlight.js','@types/marked','@types/markdown-it','@types/mustache','@types/handlebars',
			'@types/nunjucks','@types/pug','@types/ejs']
	},

	// template engines

	"mustache-bundle": {
		packages: ['mustache','hogan.js','jstransformer-mustache','jstransformer-hogan','consolidate','gulp-consolidate']
	},

	"ejs-bundle": {
		packages: ['lodash','underscore','ejs','jstransformer-ejs','jstransformer-lodash','browserify-ejs','ejs-loader',
			'consolidate','gulp-consolidate','gulp-template','browserify-compile-templates','jstify','node-underscorify']
	},

	"pug-bundle": {
		packages: ['pug','pug-cli','gulp-pug','jstransformer-pug','consolidate','gulp-consolidate','pug-loader']
	},

	"jade-bundle": {
		packages: ['jade','jstransformer-jade','consolidate','gulp-consolidate','jade-loader','jadeify']
	},

	"handlebars-bundle": {
		packages: ['handlebars','hbsfy','handlebars-loader','gulp-handlebars','jstransformer-handlebars',
			'consolidate','gulp-consolidate']
	},

	"swig-bundle": {
		packages: ['swig','swig-templates','jstransformer-swig','consolidate','gulp-consolidate',
			'gulp-swig','swigify','swig-loader','swig-webpack-plugin']
	},

	// build tool packages

	"gulp-bundle": {
		packages: ['gulp-cli','gulp','gulp-concat','gulp-data','gulp-inject','gulp-plumber','gulp-sourcemaps','gulp-webserver',
			'gulp-if','pump','gulp-connect','vinyl-source-stream']
	},

	"webpack-bundle": {
		packages: ['webpack','webpack-cli','style-loader','css-loader','file-loader','csv-loader','xml-loader',
			'raw-loader','html-loader',
			'html-webpack-plugin','source-map-loader','copy-webpack-plugin','static-site-generator-webpack-plugin']
	},

	"browserify-bundle": {
		packages: ['browserify','watchify','budo','beefy','wzrd','stylify','browser-unpack','sheetify','nanohtml',
			'css-modulesify','brfs','aliasify']
	},

	// global application packages

	'vue-app': {
		package: '@vue/cli',
		global: true,

		postCommand: 'vue create vue-skel'
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

	httpServer: {
		package: 'http-server',
		global: true
	},

}
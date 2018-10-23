module.exports = {

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
		packages: ['mustache','hogan.js','jstransformer-mustache','jstransformer-hogan'],
		depends: ['consolidate-bundle']
	},

	"ejs-bundle": {
		packages: ['lodash','underscore','ejs','jstransformer-ejs','jstransformer-lodash','browserify-ejs','ejs-loader',
			'gulp-template','browserify-compile-templates','jstify','node-underscorify'],
		depends: ['consolidate-bundle']
	},

	"pug-bundle": {
		packages: ['pug','pug-cli','gulp-pug','jstransformer-pug','pug-loader'],
		depends: ['consolidate-bundle']
	},

	"jade-bundle": {
		packages: ['jade','jstransformer-jade','jade-loader','jadeify'],
		depends: ['consolidate-bundle']
	},

	"handlebars-bundle": {
		packages: ['handlebars','hbsfy','handlebars-loader','gulp-handlebars','jstransformer-handlebars',
			'handlebars-layouts','handlebars-helpers'],
		depends: ['consolidate-bundle']
	},

	"swig-bundle": {
		packages: ['swig','swig-templates','jstransformer-swig','gulp-swig','swigify','swig-loader','swig-webpack-plugin'],
		depends: ['consolidate-bundle']
	},

	"consolidate-bundle": {
		packages: ['consolidate','gulp-consolidate']
	},

}
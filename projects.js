module.exports = {
	
	defaults: ['svelte-bundle'],
	isolate: true,

	// package bundles

	"browserify-pkg": {
		subs: ['browserify-bundle','less-bundle','stylus-bundle','babel-bundle','buble-bundle','ejs-bundle','pug-bundle','swig-bundle']
	},

	"webpack-pkg": {
		subs: ['webpack-bundle','less-bundle','sass-bundle','stylus-bundle','postcss-bundle','babel-bundle','buble-bundle',
			'ejs-bundle','pug-bundle','swig-bundle']
	},

	"libraries-pkg": {
		subs: ['popular-libraries','server-libraries','microjs-bundle','vdom-libraries','template-libraries']
	},

	"templates-pkg": {
		subs: ['template-libraries','mustache-bundle','ejs-bundle','pug-bundle','handlebars-bundle','swig-bundle']
	},

	"vue-pkg": {
		subs: ['vue-app','vue-bundle']
	},

	"react-pkg": {
		subs: ['reactApp','react-bundle','babel7-react-bundle','buble-bundle']
	},

	"vdom-pkg": {
		subs: ['preactApp','riot-bundle','web-components','vdom-libraries']
	},

	// build tool packages

	"gulp-bundle": {
		packages: ['gulp-cli','gulp','gulp-concat','gulp-data','gulp-inject','gulp-plumber','gulp-sourcemaps','gulp-webserver',
			'gulp-if','pump','gulp-connect','vinyl-source-stream','gulp-livereload']
	},

	"gulp-bundle2": {
		packages: ['through2','gulp-tap','vinyl','vinyl-bufferstream','gulp-front-matter','gulp-meta-markdown',
			'vinyl-source-stream','gulp-if']
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

	// misc packages

	"misc-libs": {
		packages: ['lunr','form-to-obj','flexsearch','director','asciidoctor.js']
	},

	"babel-singles": {
		subs: ['babel7-preset-env','babel7-preset-bundle','babel7-react-bundle',
			'babel6-preset-env','babel6-preset-bundle','babel6-react-bundle']
	},

}

Object.assign(
	module.exports,
	require('./packages/libraries'),
	require('./packages/compilers'),
	require('./packages/apps'),
	require('./packages/singles'),
	require('./packages/templates')
);
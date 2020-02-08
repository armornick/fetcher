module.exports = {
	
	defaults: ['misc-libs','browserify-bundle','postcss-bundle','stylus-bundle','less-bundle','gulp-bundle',
				'ejs-bundle','mustache-bundle','pug-bundle','swig-bundle','styles',
				'libraries-bundle','microjs-bundle','vdom-libraries','template-libraries','vue-bundle','react-bundle',
				'babel7-preset-env','babel7-preset-bundle','babel7-react-bundle','asciidoctor'],
	isolate: true,

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

}

Object.assign(
	module.exports,
	require('./packages/libraries'),
	require('./packages/compilers'),
	require('./packages/apps'),
	require('./packages/singles')
);
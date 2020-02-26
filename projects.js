module.exports = {
	
	defaults: ['css-pkg'],
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

	"css-pkg": {
		subs: ['less-bundle','stylus-bundle','postcss-bundle','minifier-bundle','styles','styles2']
	},

	"babel-singles": {
		subs: ['babel7-preset-env','babel7-preset-bundle','babel7-react-bundle',
			'babel6-preset-env','babel6-preset-bundle','babel6-react-bundle']
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
	require('./packages/singles'),
	require('./packages/templates')
);
module.exports = {
	
	defaults: ['vite-pkg'],
	// defaults: ['css-pkg','webdev-apps-min','angular-app','webdev-apps'],
	isolate: true,

	// package bundles

	"webpack-pkg": {
		subs: ['webpack-bundle','less-bundle','sass-bundle','stylus-bundle','postcss-bundle','babel-bundle','buble-bundle',
			'ejs-bundle','pug-bundle','swig-bundle'],
	},

	"libraries-pkg": {
		subs: ['popular-libraries','server-libraries','microjs-bundle','vdom-libraries','template-libraries'],
		topCache: true,
	},

	"templates-pkg": {
		subs: ['template-libraries','mustache-bundle','ejs-bundle','pug-bundle','handlebars-bundle','swig-bundle'],
		topCache: true,
	},

	"vue-pkg": {
		subs: ['vue-app','vue-bundle']
	},

	"react-pkg": {
		subs: ['reactApp','react-bundle','babel7-react-bundle','buble-bundle']
	},

	"vdom-pkg": {
		subs: ['preactApp','riot-bundle','web-components','vdom-libraries'],
		topCache: true,
	},

	"css-pkg": {
		subs: [
			'less-bundle','stylus-bundle','postcss-bundle','minifier-bundle','styles','styles2','styles3',
			'css-variables','tailwind-components'
		],
		topCache: true,
	},

	"webdev-apps": {
		subs: ['angular-app','svelte-app','harpjs-app','tiddlywiki','httpServer','next-app','nanogen-app','eleventy-app',
			'wintersmith-app','gridsome-app','gridsome-starters','parcel-app','zero-server-app']
	},

	"webapp-apps-min": {
		subs: ['svelte-app','harpjs-app','tiddlywiki','httpServer','nanogen-app','eleventy-app',
			'wintersmith-app','parcel-app','zero-server-app']
	},

	"snowpack-pkg": {
		subs: ['snowpack-app','snowpack-bundle','snowpack-starters']
	},

	// misc packages

	"misc-libs": {
		packages: ['lunr','asciidoctor.js','faker','casual','chance','tinyreq','cheerio','request','axios','lowdb',
			'glob','globby','sergey','@hotwired/stimulus']
	},

	"misc-libs-2": {
		packages: ['@hotwired/stimulus','daisyui','forgo','tailwindcss@latest','postcss@latest','autoprefixer@latest','jsdom',
			'dayjs']
	},

	"misc-libs-3": {
		packages: [
			'htm','hyperscript','@optoolco/tonic','lit',
			'markdown-it','markdown-it-container',
			'hyperapp','@hyperapp/dom','@hyperapp/svg','@hyperapp/html','@hyperapp/time','@hyperapp/events',
		]
	},

	"styles3": {
		packages: ['minireset.css','modern-normalize','purecss','milligram','picnic','mini.css','wingcss',
			'chota','bootstrap','bulma','spectre.css','materialize-css','muicss','buttercake','cirrus-ui',
			'strawberry-css','tailwindcss','animate.css',
			'sierra-library','gridlex','jeet','flexiblegs-sass','susy','open-color','animatewithsass',
			'hover.css','buttono','scut',
			'bootswatch','uikit','open-color','animate.less']
	},

	"styles4": {
		packages: ['tailwindcss@latest','postcss@latest','autoprefixer@latest',
			'tachyons@4.12.0','shed-css','milligram','chota','bootstrap','@fortawesome/fontawesome-free','bulma',
			'spectre.css','@primer/css','basscss@8.0.2','daisyui']
	},

}

Object.assign(
	module.exports,
	require('./packages/libraries'),
	require('./packages/compilers'),
	require('./packages/apps'),
	require('./packages/templates')
);
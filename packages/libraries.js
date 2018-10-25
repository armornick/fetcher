module.exports = {
	
	// library packages

	"libraries-bundle": {
		depends: ['popular-libraries','server-libraries','microjs-bundle']
	},

	"popular-libraries": {
		packages: ['lodash','async','bluebird','jquery','masonry','moment','rxjs','blocks',
			'underscore','backbone','backbone.marionette','backbone.localstorage','knockout','knockback',
			'flat-file-db','lowdb','lunr']
	},

	"server-libraries": {
		packages: ['request','chalk','commander','minimist','yargs','cheerio',
			'yaml','front-matter','gray-matter','tlr','tiny-lr','browser-sync']
	},

	"microjs-bundle": {
		packages: ['stapes','hash-router','page','rlite-router','trkl','zepto','crel','offside-js',
			'micro-events','emitonoff','corner.js','dual-emitter','store2','cookie_js','mom','pyrsmk-toast','csv.js',
			'toastr','notie','gator','bean','dot','form-to-obj','flexsearch','director']
	},

	"vdom-libraries": {
		packages: ['preact','preact-render-to-string','mithril','hyperapp',
			'hyperscript','hyperscript-helpers','hyperx','virtual-dom']
	},

	"template-libraries": {
		packages: ['mustache','hogan.js','handlebars','nunjucks','swig-templates','ejs','eco','hamljs','jade',
			'dot','pug','jade'],
		depends: ['consolidate-bundle']
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
	
}
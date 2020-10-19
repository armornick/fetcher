module.exports = {
	
	// library packages

	"libraries-bundle": {
		depends: ['popular-libraries','server-libraries','microjs-bundle']
	},

	"popular-libraries": {
		packages: ['lodash','async','bluebird','jquery','masonry','moment','rxjs','blocks',
			'underscore','backbone','backbone.marionette','backbone.localstorage','knockout','knockback',
			'flat-file-db','lowdb','lunr','faker','casual','chance']
	},

	"server-libraries": {
		packages: ['request','chalk','commander','minimist','yargs','cheerio',
			'yaml','front-matter','gray-matter','tlr','tiny-lr','browser-sync']
	},

	"microjs-bundle": {
		packages: ['stapes','hash-router','page','rlite-router','trkl','zepto','crel','offside-js',
			'micro-events','emitonoff','corner.js','dual-emitter','store2','cookie_js','mom','pyrsmk-toast','csv.js',
			'toastr','notie','gator','bean','dot','form-to-obj','flexsearch','director','q','jbone','vissense',
			'nanomodal','mess-js','float-sidebar','simple-slider','dayjs','bueno']
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

	"remark-bundle": {
		packages: ['unified','unified-stream',
			// remark
			'remark','remark-abbr','remark-align','remark-attr','remark-autolink-headings',
			'remark-behead','remark-bookmarks','remark-bracketed-spans','remark-breaks','remark-capitalize','remark-containers',
			'remark-external-links','remark-frontmatter','remark-highlight.js','remark-html','remark-metadata','remark-sectionize',
			'remark-shortcodes','remark-sub-super','remark-toc','remark-wiki-link','remark-preset-gfm','remark-rehype',
			// rehype
			'rehype','rehype-add-classes','rehype-autolink-headings','rehype-document','rehype-highlight',
			'@mapbox/rehype-highlight-code-block','rehype-preset-minify','rehype-partials','@mapbox/rehype-prism',
			'rehype-sanitize','@agentofuser/rehype-section','rehype-shiki','rehype-stringify','rehype-parse']
	},

	"express-bundle": {
		packages: ['express',
			// middleware
			'body-parser','compression','cookie-parser','cookie-session','csurf','errorhandler','morgan','multer',
			'serve-favicon','serve-index','serve-static','express-slash','view-helpers','express-uncapitalize',
			// frameworks
			'@feathersjs/feathers','@feathersjs/express','poet']
	},

	// css packages

	styles: {
		packages: ['bootstrap','foundation-sites','bulma','muicss','spectre.css','mini.css','semantic-ui-css','semantic-ui-less',
			'uikit','materialize-css@next','strawberry-css','flexboxgrid','milligram','minireset.css','normalize.css','animate.css',
			'@fortawesome/fontawesome-free','inuitcss','wingcss','awsm.css','chota','uikit@3.3.1','tachyons@4.10.0','tailwindcss']
	},

	styles2: {
		packages: ['normalize.css','minireset.css','modern-normalize','milligram','picnic','mini.css','wingcss','marx-css',
			'chota','bootstrap','bulma','uikit','spectre.css','tachyons@4.10.0','turretcss','cirrus-ui',
			'materialize-css@next','tailwindcss','flexboxgrid','buttercake','strawberry-css']
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

	"shortcodes": {
		packages: ['shortcode-insert','meta-shortcodes','hexo-wordpress-shortcodes','metalsmith-flexible-shortcodes']
	},

	"css-in-js": {
		packages: ["jss","jss-preset-default","react-jss","emotion","@emotion/core","@emotion/styled",
			"styled-components","babel-plugin-styled-components","aphrodite-jss","styled-jss"]
	},

	"web-components": {
		packages: ['slim-js','@webcomponents/webcomponentsjs','lit-element','lit-html']
	},
	
}
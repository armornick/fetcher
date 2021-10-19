module.exports = {
	
	defaults: ['libraries-pkg','templates-pkg','vdom-pkg','css-pkg','frontend-pkg'],
	// defaults: ['css-pkg','webdev-apps-min','angular-app','webdev-apps'],
	isolate: true,

	// package bundles

	"browserify-pkg": {
		subs: ['browserify-bundle','less-bundle','stylus-bundle','babel-bundle','buble-bundle','ejs-bundle','pug-bundle','swig-bundle']
	},

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
		subs: ['less-bundle','stylus-bundle','postcss-bundle','minifier-bundle','styles','styles2','styles3'],
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

	"webapp-pkg-1": {
		subs: ['next-app','gatsby-app','gatsby-plugins','gridsome-app','gridsome-starters']
	},

	"webapp-pkg-2": {
		subs: ['cuttlebelle-app','nuxt-bundle','docusaurus-app','docusaurus-plugins']
	},

	"babel-singles": {
		subs: ['babel7-preset-env','babel7-preset-bundle','babel7-react-bundle',
			'babel6-preset-env','babel6-preset-bundle','babel6-react-bundle']
	},

	"frontend-pkg": {
		subs: ['frontend-1','frontend-2','styles','styles2','styles3'],
		topCache: true,
	},

	"database-pkg": {
		subs: ['database-libs','sqlite3_']
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

	'frontend-1': {
		packages: ['jquery','highlight.js','prismjs','slick-carousel','flexslider','sweetalert','jquery-colorbox',
			'jbox','masonry-layout','flexboxgrid','animate.css','js-cookie','flexslider','vegas','zepto','moment',
			'mustache','handlebars','nunjucks','hogan.js','eco','pug','swig',
			'backbone','chaplin','backbone.marionette','backbone.babysitter','knockout','knockback','preact',
			'rivets','mithril','way-js',
			'vue','vue-router']
	},

	'frontend-2': {
		packages: ['wallop','nanobar','infinite-list','stretchy','x-ray','tabbyjs','cferdinandi/sticky-footer',
			'smooth-scroll','houdinijs','gumshoejs','cferdinandi/form-saver','dropjs','blazy','cferdinandi/astro',
			'horsey','photoswipe','@bevacqua/rome','rangy','list.js','validate-js','tinyscrollbar','sortablejs',
			'pikaday','opentip','layzr.js','jssor-slider','dragula','awesomplete','dragselect','tiny-slider','salvattore',
			'@sudhanshu/radial-indicator','nouislider','dragscroll','choices.js','animate.js','big-ideas-text','vivalid',
			'clusterize.js','scrollreveal','flickity','baguettebox.js','macy','tlite','hamsterjs','vissense','TinyAnimate',
			'offside-js','simple-scrollbar','picomodal','nanoajax','rlite-router','simple-slider',
			'ifvisible.js','draggabilly','smoothscroll','page','mousetrap','html5tooltipsjs','Nonsense','faker','stapes',
			'cookie_js','crel','domready','mustache','mom','tiny-date-picker','chibijs','form-to-obj','corner.js','j2c',
			'trkl','shadow-query','between.js','dayjs','halkabox','muuri','pushbar.js','sticky-sidebar']
	},

	'jquery-1': {
		packages: ['jquery','jquery-ui','timepicker','jquery-timepicker','cropper','jquery-validation','jbox',
			'jquery-contextmenu','@varvet/tiny-autocomplete','featherlight','spectrum-colorpicker','lightgallery',
			'filterizr','selectric','tablesorter','imageviewer','lity','jquery-mousewheel','inputmask',
			'magnific-popup','datatables','spectrum-colorpicker','jquery.easing','jscroll','jquery-expander',
			'selectivity','vegas','jquery.quicksearch','sidr','vide','simplelightbox','scrollspy',
			'jquery-scrollify','venobox','responsive-tabs','nanogallery','slide-and-swipe-menu','jquery-scrollto',
			'jq-accordion','zebra_accordion','superfish','lightslider','jquery-goup','jquery.lookingfor',
			'rowgrid.js','@fancyapps/fancybox','select2','pickadate','jquery-zoom','sortablejs','Slidebars',
			'table-dragger','lightbox2','bxslider','collapsible.js','beefup','tooltipster',
			'pretty-dropdowns','smartmenus','bigslide','jquery-sortable','simpler-sidebar','footable',
			'datetimepicker','sweetalert2','dsmorse-gridster','jquery-sticky']
	},

	'angularjs-1': {
		packages: ['angular@1.7.9','angular-animate@1.7.9','angular-cookies@1.7.9','angular-route@1.7.9','angular-sanitize@1.7.9',
			'angular-resource@1.7.9','angular-aria@1.7.9','angular-loader@1.7.9','angular-ui-grid','angular-ui-sortable',
			'angular-filter','@ui-grid/core','angular-highlightjs','angular-sweetalert','angular-moment-picker',
			'angularjs-color-picker','angular-timeago','angular-foundation','angular-ui-bootstrap','angular-ui-layout',
			'@uirouter/angularjs','ui-select','angular-ui-slider','angular-ui-sortable','jquery-ui-dist','angular-jquery-timepicker',
			'ng-tasty','angular-timer','angular-dragdrop','angular-scroll','ng-sweet-alert','ngstorage','ng-table',
			'angular-tablesort','cy-infinite-scroll','angular-popeye','v-modal']
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
module.exports = {
	
	// global application packages

	'vue-app': {
		package: '@vue/cli',
		global: true,

		postCommand: 'vue create -d vue-skel'
	},

	'vue-bundle': {
		packages: [
			'vue','vue-loader','vue-template-compiler',
			'vue-router','vuex',
			'stylus-loader','stylus','postcss-loader','pug-plain-loader','pug',
		]
	},

	'angular-app': {
		package: '@angular/cli',
		global: true,

		postCommand: 'ng new angular-skel'
	},

	'react-app': {
		package: 'create-react-app',
		global: true,

		postCommand: 'npx create-react-app react-skel'
	},

	'preact-app': {
		package: 'preact-cli',
		global: true,

		postCommand: 'preact create default preact-skel'
	},

	'svelte-app': {
		npx: 'degit sveltejs/template my-svelte-project',
		install: 'my-svelte-project'
	},

	'npx-react-app': {
		npx: 'create-react-app react-skel'
	},

	tiddlywiki: {
		package: 'tiddlywiki',
		global: true
	},

	httpServer: {
		package: 'http-server',
		global: true
	},


	"next-app": {
		package: 'create-next-app',
		global: true,

		postCommand: 'create-next-app next-skel'
	},

	'nanogen-app': {
		package: 'nanogen',
		global: true
	},

	'eleventy-app': {
		package: '@11ty/eleventy',
		global: true
	},

	'docsify-app': {
		package: 'docsify-cli',
		global: true
	},

	'wintersmith-app': {
		package: 'wintersmith',
		global: true,

		postCommand: 'wintersmith new wintersmith-skel'
	},

	'cuttlebelle-app': {
		package: 'cuttlebelle',
		global: true
	},

	"nuxt-bundle": {
		packages: ['create-nuxt-app','nuxt',
			// nuxt modules
			'@nuxtjs/moment','@nuxtjs/composition-api','@nuxt/content','@nuxt/types','@nuxtjs/svg',
			'bootstrap-vue','@nuxtjs/axios','@nuxtjs/vuetify','@nuxtjs/tailwindcss'
		]
	},
	
	'hexo-app': {
		package: 'hexo-cli',
		global: true,

		postCommand: 'hexo init hexo-skel'
	},

	'hexo-plugin-bundle': {
		packages: ['hexo-all-minifier','hexo-auto-category','hexo-auto-excerpt','hexo-blogroll','hexo-breadcrumb',
			'hexo-clean-css','hexo-custom-fields','hexo-directory-category','hexo-enhancer','hexo-filter-highlight',
			'hexo-filter-inline-assets','hexo-generator-archive','hexo-generator-category','hexo-generator-index',
			'hexo-generator-index-plus','hexo-helper-partial-page','hexo-html-minifier','hexo-prism-plugin',
			'hexo-render-pug','hexo-renderer-asciidoc','hexo-renderer-babelify','hexo-renderer-coffeescript',
			'hexo-renderer-ejs','hexo-renderer-less','hexo-renderer-markdown','hexo-renderer-markdown-it',
			'hexo-renderer-markdown-it-plus','hexo-renderer-mustache','hexo-renderer-postcss2','hexo-renderer-stylus',
			'hexo-server','hexo-uncss','hexo-uglify']
	},

	"zero-server-app": {
		package: "zero",
		global: true,
	},

	"parcel-app": {
		package: "parcel",
		global: true,
	},

	"parcel-bundle": {
		packages: ['parcel',
			'@parcel/transformer-vue','@parcel/transformer-sass','@parcel/transformer-less','@parcel/transformer-stylus',
			'@parcel/transformer-coffeescript','@parcel/transformer-toml',"@parcel/transformer-yaml",'@parcel/transformer-pug',
			'@parcel/transformer-mdx','@mdx-js/react']
	},
	
	"forgo-app": {
		package: 'create-forgo-app',
		global: true,

		postCommand: 'create-forgo-app forgo-skel'
	},


}
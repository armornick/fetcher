module.exports = {
	
	// global application packages

	'vue-app': {
		package: '@vue/cli',
		global: true,

		postCommand: 'vue create -d vue-skel'
	},

	'angular-app': {
		package: '@angular/cli',
		global: true,

		postCommand: 'ng new angular-skel'
	},

	reactApp: {
		package: 'create-react-app',
		global: true,

		postCommand: 'npx create-react-app react-skel'
	},

	preactApp: {
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

	'harpjs-app': {
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


	"next-app": {
		package: 'create-next-app',
		global: true,

		postCommand: 'create-next-app next-skel'
	},

	'gatsby-app': {
		package: 'gatsby-cli',
		global: true,

		postCommands: [
			'gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world',
			'gatsby new gatsby-starter-blog https://github.com/gatsbyjs/gatsby-starter-blog',
			'gatsby new gatsby-starter-minimal-blog https://github.com/LekoArts/gatsby-starter-minimal-blog',
			'gatsby new gatsby-starter-tailwind https://github.com/taylorbryant/gatsby-starter-tailwind',
		]
	},

	'gatsby-app2': {
		package: 'gatsby-cli',
		global: true,

		postCommands: [
			'gatsby new gatsby-advanced-starter https://github.com/Vagr9K/gatsby-advanced-starter',
			'gatsby new gatsby-starter-deck https://github.com/fabe/gatsby-starter-deck',
			'gatsby new gatsby-gitbook-starter https://github.com/hasura/gatsby-gitbook-starter',
			'gatsby new gatsby-starter-bootstrap https://github.com/jaxx2104/gatsby-starter-bootstrap'
		]
	},

	"gatsby-plugins": {
		packages: ['gatsby-source-filesystem','gatsby-plugin-styled-components','styled-components','babel-plugin-styled-components',
			'gatsby-plugin-mdx','gatsby-transformer-remark','gatsby-plugin-sass','gatsby-plugin-emotion','@emotion/core','@emotion/styled',
			'gatsby-remark-copy-linked-files','gatsby-remark-prismjs','prismjs','gatsby-transformer-json','gatsby-plugin-postcss',
			'gatsby-transformer-yaml','gatsby-plugin-less','gatsby-plugin-purgecss','gatsby-remark-embed-video','gatsby-remark-embed-snippet',
			'gatsby-plugin-breadcrumb','gatsby-plugin-stylus','gatsby-plugin-coffeescript','gatsby-plugin-typography','react-typography']
	},

	'nanogen-app': {
		package: 'nanogen',
		global: true
	},

	'eleventy-app': {
		package: '@11ty/eleventy',
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

	'gridsome-app': {
		package: '@gridsome/cli',
		global: true,

		postCommand: 'gridsome create gridsome-skel'
	},

	'gridsome-starters': {
		package: '@gridsome/cli',
		global: true,

		postCommands: [
			'gridsome create gridsome-minimal-blog https://github.com/lauragift21/gridsome-minimal-blog',
			'gridsome create gridsome-starter-skeleventy https://github.com/noxify/gridsome-starter-skeleventy',
			'gridsome create gridsome-bulma-starter https://github.com/calebanthony/gridsome-bulma.git',
			'gridsome create gridsome-starter-bleda https://github.com/cossssmin/gridsome-starter-bleda.git',
			'gridsome create gridsome-starter-blog https://github.com/gridsome/gridsome-starter-blog.git'
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
		package: "parcel-bundler",
		global: true,
	},

	

}
module.exports = {
	
	// global application packages

	'vue-app': {
		package: '@vue/cli',
		global: true,

		postCommand: 'vue create -d vue-skel'
	},

	angular: {
		package: '@angular/cli',
		global: true,
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


	nextApp: {
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
			'gatsby new gatsby-advanced-starter https://github.com/Vagr9K/gatsby-advanced-starter',
			'gatsby new gatsby-starter-deck https://github.com/fabe/gatsby-starter-deck',
			'gatsby new gatsby-gitbook-starter https://github.com/hasura/gatsby-gitbook-starter',
			'gatsby new gatsby-starter-minimal-blog https://github.com/LekoArts/gatsby-starter-minimal-blog',
			'gatsby new gatsby-starter-tailwind https://github.com/taylorbryant/gatsby-starter-tailwind',
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
	
}
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

	harpjs: {
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

	
}
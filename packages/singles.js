module.exports = {
	
	'babel7-preset-env': {
		packages: ['@babel/preset-env']
	},

	'babel7-transform-runtime': {
		packages: ['@babel/plugin-transform-runtime','@babel/runtime']
	},

	'babel7-preset-bundle': {
		packages: ['@babel/core','@babel/preset-env','@babel/polyfill']
	},

	'babel7-react-bundle': {
		packages: ['@babel/core','@babel/preset-env','@babel/preset-react','@babel/polyfill']
	},

	'babel6-preset-env': {
		packages: ['babel-preset-env']
	},

	'babel6-transform-runtime': {
		packages: ['babel-plugin-transform-runtime','babel-runtime']
	},

	'babel6-preset-bundle': {
		packages: ['babel-core','babel-preset-env','babel-polyfill']
	},

	'babel6-react-bundle': {
		packages: ['babel-core','babel-preset-env','babel-preset-react','babel-polyfill']
	},

	'asciidoctor': {
		packages: ['asciidoctor.js']
	},

	'electron-latest': {
		packages: ['electron@latest']
	},

	'electron-current': {
		packages: ['electron']
	}
}
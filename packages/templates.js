module.exports = {

	// parceljs templates

	'parceljs-pkg': {
		subs: ['_parceljs-bare','_parceljs-react','_parceljs-preact','_parceljs-vue','_parceljs-typescript','_parceljs-svelte']
	},

	'_parceljs-bare': {
		package: 'parcel-bundler',
		global: true
	},

	"_parceljs-react": {
		packages: ['react','react-dom'],
		devPackages: ['parcel-bundler']
	},

	"_parceljs-preact": {
		packages: ['preact'],
		devPackages: ['parcel-bundler']
	},

	"_parceljs-vue": {
		packages: ['vue'],
		devPackages: ['parcel-bundler']
	},

	"_parceljs-typescript": {
		packages: ['typescript'],
		devPackages: ['parcel-bundler']
	},

	"_parceljs-svelte": {
		devPackages: ['parcel-bundler','svelte','parcel-plugin-svelte']
	},

	// neutrinojs templates

	"neutrinojs-pkg": {
		subs: ['_neutrinojs-react','_neutrinojs-preact','_neutrinojs-vue','_neutrinojs-web']
	},

	"_neutrinojs-react": {
		packages: ['react','react-dom'],
		devPackages: ['neutrino','@neutrinojs/react','webpack','webpack-cli','webpack-dev-server']
	},

	"_neutrinojs-preact": {
		packages: ['preact'],
		devPackages: ['neutrino','@neutrinojs/preact','webpack','webpack-cli','webpack-dev-server']
	},

	"_neutrinojs-vue": {
		packages: ['vue'],
		devPackages: ['neutrino','@neutrinojs/vue','webpack','webpack-cli','webpack-dev-server']
	},

	"_neutrinojs-web": {
		devPackages: ['neutrino','@neutrinojs/web','webpack','webpack-cli','webpack-dev-server']
	},


}
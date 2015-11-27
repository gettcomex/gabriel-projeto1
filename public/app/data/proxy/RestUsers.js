Ext.define('AW.data.proxy.RestUsers', {
	alias: 'proxy.restusers',
	extend: 'AW.data.proxy.RestRails',

	url: '/users',
	writer: {
		type: 'jsonrails',
		modelName: 'user'
	}
});
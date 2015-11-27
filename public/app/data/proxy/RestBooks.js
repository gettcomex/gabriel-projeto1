Ext.define('AW.data.proxy.RestBooks', {
	alias: 'proxy.restbooks',
	extend: 'AW.data.proxy.RestRails',

	url: '/books',
	writer: {
		type: 'jsonrails',
		modelName: 'book'
	}
});
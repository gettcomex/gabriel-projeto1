Ext.define('AW.data.proxy.RestLoans', {
	alias: 'proxy.restloans',
	extend: 'AW.data.proxy.RestRails',

	url: '/loans',
	writer: {
		type: 'jsonrails',
		modelName: 'loan'
	}
});
Ext.define('AW.data.proxy.RestRails', {
	alias: 'proxy.restrails',
	extend: 'Ext.data.proxy.Rest',

	reader: {
		root: 'data'
	},
	
	listeners: {
		exception: function(proxy, response, operation) {
			AW.ResponseErrorBox.alert('ERROR', response);
		}
	}
});
Ext.define('AW.store.Books', {
	extend: 'AW.store.Base',

	requires: [ 'AW.data.proxy.RestBooks' ],

	model: 'AW.model.Book',
	proxy: {
		type: 'restbooks'
	}
});
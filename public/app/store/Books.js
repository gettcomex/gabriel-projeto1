Ext.define('AW.store.Books', {
	extend: 'AW.store.Base',
	model: 'AW.model.Book',
	proxy: {
		type: 'rest',
		format: 'json',
		url: '/books',
		reader: {
			root: 'data'
		}
	}
});
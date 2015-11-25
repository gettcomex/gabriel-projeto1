Ext.define('AW.store.Users', {
	extend: 'Ext.data.Store',
	model: 'AW.model.User',
	pageSize: 5,
	proxy: {
		type: 'rest',
		format: 'json',
		url: '/users',
		reader: {
			root: 'data'
		}
	}
});
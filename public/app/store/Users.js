Ext.define('AW.store.Users', {
	extend: 'AW.store.Base',
	model: 'AW.model.User',
	proxy: {
		type: 'rest',
		format: 'json',
		url: '/users',
		reader: {
			root: 'data'
		}
	}
});
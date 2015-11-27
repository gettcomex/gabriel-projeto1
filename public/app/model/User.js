Ext.define('AW.model.User', {
	extend: 'Ext.data.Model',

	requires: [ 'AW.data.proxy.RestUsers' ],

	fields: [
		{ name: 'id', type: 'auto' },
		{ name: 'name', type: 'string' },
		{ name: 'login', type: 'string' },
		{ name: 'email', type: 'string' },
		{ name: 'password', type: 'string' },
		{ name: 'is_employee', type: 'boolean' }
	],
	
	proxy: {
		type: 'restusers'
	}
});
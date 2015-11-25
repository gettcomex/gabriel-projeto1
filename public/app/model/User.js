Ext.define('AW.model.User', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'id', type: 'auto' },
		{ name: 'name', type: 'string' },
		{ name: 'login', type: 'string' },
		{ name: 'email', type: 'string' },
		{ name: 'password', type: 'string' },
		{ name: 'is_employee', type: 'boolean' }
	],
	proxy: {
		type: 'rest',
		url: '/users',
		writer: {
			type: 'jsonrails',
			modelName: 'user'
		}
	}
});
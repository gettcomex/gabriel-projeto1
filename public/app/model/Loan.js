Ext.define('AW.model.Loan', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'id', type: 'auto' },
		{ name: 'book_id', type: 'int' },
		{ name: 'user_id', type: 'int' },
		{ name: 'starts_at', type: 'date' },
		{ name: 'end_at', type: 'date' }
	],
	proxy: {
		type: 'rest',
		url: '/loans',
		writer: {
			type: 'jsonrails',
			modelName: 'loan'
		}
	}
});
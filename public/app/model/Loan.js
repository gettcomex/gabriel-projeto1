Ext.define('AW.model.Loan', {
	extend: 'Ext.data.Model',

	requires: [ 'AW.data.proxy.RestLoans' ],
	
	fields: [
		{ name: 'id', type: 'auto' },
		{ name: 'book_id', type: 'int' },
		{ name: 'user_id', type: 'int' },
		{ name: 'starts_at', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'end_at', type: 'date', dateFormat: 'Y-m-d' }
	],

	belongsTo: [
		{
			model: 'AW.model.User',
			getterName: 'getUser',
			setterName: 'setUser',
			primaryKey: 'id',
			foreignKey: 'user_id',
			associationKey: 'user'
		},
		{
			model: 'AW.model.Book',
			getterName: 'getBook',
			setterName: 'setBook',
			primaryKey: 'id',
			foreignKey: 'book_id',
			associationKey: 'book'
		}
	],

	proxy: {
		type: 'restloans'
	}
});
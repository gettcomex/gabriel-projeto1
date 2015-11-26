Ext.define('AW.model.QueueOfBook', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'id', type: 'auto' },
		{ name: 'book_id', type: 'int' },
		{ name: 'user_id', type: 'int' }
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
		type: 'rest',
		url: '/queue_of_books',
		writer: {
			type: 'jsonrails',
			modelName: 'queue_of_book'
		}
	}
});
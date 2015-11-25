Ext.define('AW.model.Book', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'id', type: 'auto' },
		{ name: 'title', type: 'string' },
		{ name: 'writer', type: 'string' },
		{ name: 'pages', type: 'int' },
		{ name: 'book_binding', type: 'int' },
		{ name: 'copies', type: 'int' }
	],
	proxy: {
		type: 'rest',
		url: '/books',
		writer: {
			type: 'jsonrails',
			modelName: 'book'
		}
	}
});
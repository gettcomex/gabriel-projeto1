Ext.define('AW.view.book.Grid', {
	alias: 'widget.booksgrid',
	extend: 'AW.view.base.Grid',

	store: 'AW.store.Books',

	title: 'Books',

	columns: [
		{
			dataIndex: 'id',
			text: 'ID',
			width: 35
		},
		{
			dataIndex: 'title',
			text: 'Title',
			width: 170,
			flex: 1
		},
		{
			dataIndex: 'writer',
			text: 'Writer',
			width: 200
		},
		{
			dataIndex: 'pages',
			text: 'Pages',
			width: 100
		},
		{
			dataIndex: 'copies',
			text: 'Copies',
			width: 100
		}
	],

	dockedItems: [{
		xtype: 'pagingtoolbar',
		store: 'AW.store.Books',
		dock: 'bottom',
		displayInfo: true,
		emptyMsg: 'Book not found.'
	}]

});
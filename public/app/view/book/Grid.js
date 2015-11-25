Ext.define('AW.view.book.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.booksgrid',

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

	tbar: [
		{
			xtype: 'button',
			itemId: 'add',
			text: 'New'
		},
		{
			xtype: 'button',
			itemId: 'delete',
			text: 'Destroy'
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
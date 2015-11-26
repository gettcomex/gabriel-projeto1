Ext.define('AW.view.queueofbook.Grid', {
	alias: 'widget.queueofbooksgrid',
	extend: 'AW.view.base.Grid',

	requires: [
		'AW.grid.column.User',
		'AW.grid.column.Book'
	],

	store: 'AW.store.QueueOfBooks',
	title: 'Reserves',

	initComponent: function() {

		this.columns = [
			{
				xtype: 'usercolumn',
				width: 200,
				flex: 1
			},
			{
				xtype: 'bookcolumn',
				width: 200
			}
		];

		this.callParent(arguments);
	}

});
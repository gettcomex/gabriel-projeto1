Ext.define('AW.view.queueofbook.Grid', {
	alias: 'widget.queueofbooksgrid',
	extend: 'AW.view.base.Grid',

	store: 'AW.store.QueueOfBooks',
	title: 'Reserves',

	initComponent: function() {

		this.columns = [
			{
				dataIndex: 'id',
				text: 'ID',
				width: 35
			},
			{
				dataIndex: 'user_id',
				text: 'User',
				width: 200,
				flex: 1,
				renderer: this.onRendererUser
			},
			{
				dataIndex: 'book_id',
				text: 'Book',
				width: 200,
				renderer: this.onRendererBook
			}
		];

		this.callParent(arguments);
	},
	
	onRendererUser: function(value, metaData, record) {
		var user = record.getUser();
		return user.get('name');
	},

	onRendererBook: function(value, metaData, record) {
		var book = record.getBook();
		return book.get('title');
	}

});
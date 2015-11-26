Ext.define('AW.view.loan.Grid', {
	alias: 'widget.loansgrid',
	extend: 'Ext.grid.Panel',

	requires: [
		'AW.button.ButtonAdd'
	],

	mixins: {
		pagingToolbar: 'AW.view.base.util.toolbar.PagingBase'
	},

	store: 'AW.store.Loans',
	title: 'Loans',

	initComponent: function() {

		this.tbar = [
			{
				xtype: 'buttonadd'
			},
			{
				xtype: 'button',
				itemId: 'renew',
				text: 'Renew'
			}
		];

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
			},
			{
				xtype: 'datecolumn',
				dataIndex: 'starts_at',
				text: 'Starts at',
				width: 200
			},
			{
				xtype: 'datecolumn',
				dataIndex: 'end_at',
				text: 'End at',
				width: 200
			}
		];

		this.mixins.pagingToolbar.constructor.call(this);

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
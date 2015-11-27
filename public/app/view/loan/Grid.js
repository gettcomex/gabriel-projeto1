Ext.define('AW.view.loan.Grid', {
	alias: 'widget.loansgrid',
	extend: 'Ext.grid.Panel',

	requires: [
		'AW.button.ButtonAdd',
		'AW.grid.column.Book',
		'AW.grid.column.Identity',
		'AW.grid.column.User'
	],

	mixins: {
		pagingToolbar: 'AW.view.base.util.toolbar.PagingBase'
	},

	store: 'AW.store.Loans',

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
				xtype: 'identitycolumn',
				width: 35
			},
			{
				xtype: 'usercolumn',
				width: 200,
				flex: 1
			},
			{
				xtype: 'bookcolumn',
				width: 200
			},
			{
				xtype: 'datecolumn',
				format: 'd/m/Y',
				dataIndex: 'starts_at',
				text: 'Starts at',
				width: 200
			},
			{
				xtype: 'datecolumn',
				format: 'd/m/Y',
				dataIndex: 'end_at',
				text: 'End at',
				width: 200
			}
		];

		this.mixins.pagingToolbar.constructor.call(this);

		this.callParent(arguments);
	}

});
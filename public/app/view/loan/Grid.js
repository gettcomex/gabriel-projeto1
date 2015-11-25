Ext.define('AW.view.loan.Grid', {
	alias: 'widget.loansgrid',
	extend: 'AW.view.base.Grid',

	store: 'AW.store.Loans',

	title: 'Loans',

	columns: [
		{
			dataIndex: 'id',
			text: 'ID',
			width: 35
		},
		{
			dataIndex: 'starts_at',
			text: 'Starts at',
			width: 200
		},
		{
			dataIndex: 'end_at',
			text: 'End at',
			width: 200
		}
	],

	dockedItems: [{
		xtype: 'pagingtoolbar',
		store: 'AW.store.Loans',
		dock: 'bottom',
		displayInfo: true,
		emptyMsg: 'Loan not found.'
	}]

});
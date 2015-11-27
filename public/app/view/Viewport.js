Ext.define('AW.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: [
		'Ext.layout.container.Fit',
		'AW.view.book.Grid',
		'AW.view.loan.Grid',
		'AW.view.user.Grid',
		'AW.view.user.Show',
		'AW.view.queueofbook.Grid'
	],

	layout: {
		type: 'fit'
	},

	items: [{
		xtype: 'tabpanel',
		title: 'Library',
		activeTab: 4,// TODO: renderizando a página que está sendo feita agora
		items: [
			{
				xtype: 'booksgrid',
				title: 'Books'
			},
			{
				xtype: 'loansgrid',
				title: 'Loans'
			},
			{
				xtype: 'queueofbooksgrid',
				title: 'Reservers'
			},
			{
				xtype: 'usersgrid',
				title: 'Users'
			},
			{
				xtype: 'usershow',
				title: 'My user'
			}
		]
	}]
});
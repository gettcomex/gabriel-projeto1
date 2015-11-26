Ext.define('AW.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: [
		'Ext.layout.container.Fit',
		'AW.view.book.Grid',
		'AW.view.loan.Grid',
		'AW.view.user.Grid',
		'AW.view.queueofbook.Grid'
	],

	layout: {
		type: 'fit'
	},

	items: [{
		xtype: 'tabpanel',
		title: 'Library',
		activeTab: 2, // TODO: renderizando a página que está sendo feita agora
		items: [{
			xtype: 'booksgrid'
		}, {
			xtype: 'loansgrid'
		}, {
			xtype: 'queueofbooksgrid'
		}, {
			xtype: 'usersgrid'
		}]
	}]
});
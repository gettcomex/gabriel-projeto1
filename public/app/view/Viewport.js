Ext.define('AW.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires:[
		'Ext.layout.container.Fit',
		'AW.view.book.Grid',
		'AW.view.user.Grid'
	],

	layout: {
		type: 'fit'
	},

	items: [{
		xtype: 'tabpanel',
		activeTab: 1, // test
		title: 'Library',
		items: [{
			xtype: 'booksgrid'
		}, {
			xtype: 'usersgrid'
		}]
	}]
});
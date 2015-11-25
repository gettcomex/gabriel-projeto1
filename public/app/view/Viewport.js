Ext.define('AW.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires:[
		'Ext.layout.container.Fit',
		'AW.view.BooksGrid',
		'AW.view.UsersGrid'
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
Ext.define('AW.view.book.Form', {
	extend: 'Ext.window.Window',
	alias: 'widget.bookform',

	layout: 'fit',
	height: 250,
	width: 350,
	autoShow: true,

	items: [{
		xtype: 'form',
		bodyPadding: 10,
		defaults: {
			anchor: '100%',
			allowBlank: false
		},
		items: [
			{
				xtype: 'hiddenfield',
				name: 'id'
			},
			{
				xtype: 'textfield',
				name: 'title',
				fieldLabel: 'Title',
				maxLength: 150
			},
			{
				xtype: 'textfield',
				name: 'writer',
				fieldLabel: 'Writer',
				maxLength: 150
			},
			{
				xtype: 'numberfield',
				name: 'pages',
				fieldLabel: 'Pages',
				allowDecimals: false,
				minValue: 1
			},
			{
				xtype: 'numberfield',
				name: 'copies',
				fieldLabel: 'Copies',
				allowDecimals: false,
				minValue: 1
			},
			{
				xtype: 'combo',
				name: 'book_binding',
				fieldLabel: 'Book binding',
				editable: false,
				store: 'AW.store.BookBindings',
				displayField: 'name',
				valueField: 'value'
			}
		]
	}],

	buttons: [
		{
			itemId: 'save',
			text: 'Save'
		},
		{
			itemId: 'cancel',
			text: 'Cancel'
		}
	]
});
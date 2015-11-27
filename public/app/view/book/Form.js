Ext.define('AW.view.book.Form', {
	alias: 'widget.bookform',
	extend: 'AW.view.base.Form',
	requires: [ 'AW.form.field.ComboBookBindings' ],

	initComponent: function() {
		this.defaults = Ext.apply({
			allowBlank: false
		}, this.defaults);

		this.items = [
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
				xtype: 'combobookbindings',
				name: 'book_binding',
				fieldLabel: 'Book binding'
			}
		];

		this.callParent(arguments);
	}
});
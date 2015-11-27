Ext.define('AW.view.queueofbook.Form', {
	alias: 'widget.queueofbookform',
	extend: 'AW.view.base.Form',
	requires: [
		'AW.form.field.ComboBooks',
		'AW.form.field.ComboUsers'
	],

	initComponent: function() {
		this.defaults = Ext.apply({
			allowBlank: false
		}, this.defaults);

		this.items = [
			{
				xtype: 'combobooks',
				name: 'book_id',
				fieldLabel: 'Book'
			},
			{
				xtype: 'combousers',
				name: 'user_id',
				fieldLabel: 'User'
			}
		];
		
		this.callParent(arguments);
	}
});
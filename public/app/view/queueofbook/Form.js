Ext.define('AW.view.queueofbook.Form', {
	alias: 'widget.queueofbookform',
	extend: 'AW.view.base.Form',
	requires: [
		'AW.form.field.ComboBooks',
		'AW.form.field.ComboUsers'
	],

	initComponent: function() {
		this.defaults = Ext.applyIf(this.defaults || {}, {
			allowBlank: false
		});

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
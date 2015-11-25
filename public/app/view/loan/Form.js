Ext.define('AW.view.loan.Form', {
	alias: 'widget.loanform',
	extend: 'AW.view.base.Form',
	requires: [
		'AW.form.field.ComboBooks',
		'AW.form.field.ComboUsers'
	],

	initComponent: function() {
		this.defaults = Ext.apply({
			allowBlank: false
		}, this.defaults);

		this.callParent(arguments);
	},

	items: [
		{
			xtype: 'hiddenfield',
			name: 'id'
		},
		{
			xtype: 'combobooks',
			name: 'book_id',
			fieldLabel: 'Book'
		},
		// {
		// 	xtype: 'combousers',
		// 	name: 'user_id',
		// 	fieldLabel: 'User'
		// },
		{
			xtype: 'datefield',
			name: 'starts_at',
			fieldLabel: 'Starts at',
			maxLength: 150
		},
		{
			xtype: 'datefield',
			name: 'end_at',
			fieldLabel: 'End at',
			maxLength: 150
		}
	]
});
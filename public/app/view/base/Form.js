Ext.define('AW.view.base.Form', {
	alias: 'widget.baseform',
	extend: 'Ext.form.Panel',
	
	bodyPadding: 10,
	defaults: {
		anchor: '100%'
	},

	initComponent: function() {
		this.items = this.items || [];
		this.items.push({
			xtype: 'hiddenfield',
			name: 'id'
		});

		this.callParent(arguments);
	}
});
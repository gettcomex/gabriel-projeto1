Ext.define('AW.view.base.Form', {
	alias: 'widget.baseform',
	extend: 'Ext.form.Panel',
	
	bodyPadding: 10,

	initComponent: function() {
		this.defaults = Ext.applyIf(this.defaults || {}, {
			anchor: '100%'
		});

		this.items = this.items || [];
		this.items.push({
			xtype: 'hiddenfield',
			name: 'id'
		});

		this.callParent(arguments);
	}
});
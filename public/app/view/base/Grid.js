Ext.define('AW.view.base.Grid', {
	alias: 'widget.basegrid',
	extend: 'Ext.grid.Panel',

	tbar: [
		{
			xtype: 'button',
			itemId: 'add',
			text: 'New'
		},
		{
			xtype: 'button',
			itemId: 'delete',
			text: 'Destroy'
		}
	]

});
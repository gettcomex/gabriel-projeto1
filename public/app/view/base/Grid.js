Ext.define('AW.view.base.Grid', {
	alias: 'widget.basegrid',
	extend: 'Ext.grid.Panel',

	requires: [
		'AW.button.ButtonAdd',
		'AW.button.ButtonDelete'
	],

	tbar: [
		{
			xtype: 'buttonadd'
		},
		{
			xtype: 'buttondelete'
		}
	]
});
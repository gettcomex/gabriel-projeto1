Ext.define('AW.view.base.Grid', {
	alias: 'widget.basegrid',
	extend: 'Ext.grid.Panel',

	requires: [
		'AW.button.ButtonAdd',
		'AW.button.ButtonDelete'
	],

	mixins: {
		pagingToolbar: 'AW.view.base.util.toolbar.PagingBase'
	},

	initComponent: function() {

		this.tbar = [
			{
				xtype: 'buttonadd'
			},
			{
				xtype: 'buttondelete'
			}
		]

		this.mixins.pagingToolbar.constructor.call(this);

		this.callParent(arguments);
	}
});
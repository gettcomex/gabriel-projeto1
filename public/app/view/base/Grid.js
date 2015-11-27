Ext.define('AW.view.base.Grid', {
	alias: 'widget.basegrid',
	extend: 'Ext.grid.Panel',

	requires: [
		'AW.button.ButtonAdd',
		'AW.button.ButtonDelete',
		'AW.grid.column.Identity'
	],

	mixins: {
		pagingToolbar: 'AW.view.base.util.toolbar.PagingBase'
	},

	initComponent: function() {
		var unshiftAll = function(array, elements) {
			return Array.prototype.unshift.apply(array, elements);
		}

		this.columns = this.columns || [];
		unshiftAll(this.columns, this.buildColumns())

		this.tbar = this.tbar || [];
		unshiftAll(this.tbar, this.buildTbar());

		this.mixins.pagingToolbar.constructor.call(this);

		this.callParent(arguments);
	},

	buildColumns: function() {
		return [
			{
				xtype: 'identitycolumn',
				width: 35
			}
		];
	},

	buildTbar: function() {
		return [
			{
				xtype: 'buttonadd'
			},
			{
				xtype: 'buttondelete'
			}
		];
	}
});
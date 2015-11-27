Ext.define('AW.view.base.util.toolbar.PagingBase', {
	constructor: function() {
		this.dockedItems = this.dockedItems || [];

		this.dockedItems.push({
			xtype: 'pagingtoolbar',
			store: this.store,
			dock: 'bottom',
			displayInfo: true,
			emptyMsg: 'Not found.'
		});
	}
});
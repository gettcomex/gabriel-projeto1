Ext.define('AW.view.user.Grid', {
	alias: 'widget.usersgrid',
	extend: 'AW.view.base.Grid',

	store: 'AW.store.Users',

	initComponent: function() {
		this.columns = [
			{
				dataIndex: 'name',
				text: 'Name',
				width: 170,
				flex: 1
			},
			{
				dataIndex: 'email',
				text: 'Email',
				width: 250
			}
		];

		this.callParent(arguments);
	}

});
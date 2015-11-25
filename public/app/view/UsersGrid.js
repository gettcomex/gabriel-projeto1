Ext.define('AW.view.UsersGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.usersgrid',

	store: 'AW.store.Users',

	title: 'Users',

	columns: [
		{
			dataIndex: 'id',
			text: 'ID',
			width: 35
		},
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
		},
		{
			dataIndex: 'is_employee',
			text: 'Is employee',
			width: 100
		}
	],

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
	],

	dockedItems: [{
		xtype: 'pagingtoolbar',
		store: 'AW.store.Users',
		dock: 'bottom',
		displayInfo: true,
		emptyMsg: 'User not found.'
	}]

});
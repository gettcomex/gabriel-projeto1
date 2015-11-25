Ext.define('AW.view.UserForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.userform',

	layout: 'fit',
	height: 250,
	width: 350,
	autoShow: true,

	// { name: 'id', type: 'auto' },
	// { name: 'name', type: 'string' },
	// { name: 'email', type: 'string' },
	// { name: 'password', type: 'string' },
	// { name: 'is_employee', type: 'boolean' }


	items: [{
		xtype: 'form',
		bodyPadding: 10,
		defaults: {
			anchor: '100%',
			allowBlank: false
		},
		items: [
			{
				xtype: 'hiddenfield',
				name: 'id'
			},
			{
				xtype: 'textfield',
				name: 'name',
				fieldLabel: 'Name',
				maxLength: 150
			},
			{
				xtype: 'textfield',
				name: 'login',
				fieldLabel: 'Login',
				maxLength: 150
			},
			{
				xtype: 'textfield',
				name: 'email',
				fieldLabel: 'Email',
				maxLength: 150
			},
			{
				xtype: 'textfield',
				name: 'password',
				fieldLabel: 'Password'
				// ,inputType: 'password'
			}
			// ,{
			// 	xtype: 'numberfield',
			// 	name: 'is_employee',
			// 	fieldLabel: 'is_employee'
			// }
		]
	}],

	buttons: [
		{
			itemId: 'save',
			text: 'Save'
		},
		{
			itemId: 'cancel',
			text: 'Cancel'
		}
	]
});
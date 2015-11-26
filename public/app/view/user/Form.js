Ext.define('AW.view.user.Form', {
	alias: 'widget.userform',
	extend: 'AW.view.base.Form',

	initComponent: function() {
		this.defaults = Ext.apply({
			allowBlank: false,
			labelWidth: 150
		}, this.defaults);

		this.callParent(arguments);
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
			vtype: 'email',
			name: 'email',
			fieldLabel: 'Email',
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
			name: 'password',
			fieldLabel: 'Password',
			inputType: 'password'
		},
		{
			xtype: 'textfield',
			name: 'password_confirmation',
			fieldLabel: 'Password Confirmation',
			inputType: 'password'
		},
		{
			xtype: 'checkbox',
			inputValue: 1,
			name: 'is_employee',
			fieldLabel: 'Employee'
		}
	]
});
Ext.define('AW.view.user.Show', {
	alias: 'widget.usershow',
	extend: 'Ext.form.Panel',
	bodyPadding: 20,
	defaults: {
		labelWidth: 50
	},
	items: [
		{
			xtype: 'displayfield',
			name: 'name',
			fieldLabel: 'Name'
		},
		{
			xtype: 'displayfield',
			name: 'email',
			fieldLabel: 'Email'
		},
		{
			xtype: 'displayfield',
			name: 'login',
			fieldLabel: 'Login'
		}
	]
});
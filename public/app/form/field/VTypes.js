Ext.define('AW.form.field.VTypes', {
	override: 'Ext.form.field.VTypes',

	password: function(val, field) {
		var initialPassField = field.initialPassField,
			container = null,
			pwd = null;

		if (initialPassField) {
			container = field.up('form'),
			pwd = container.down('#' + initialPassField);

			if (!pwd) {
				pwd = container.down('[name=' + initialPassField + ']');
			}

			return (val === pwd.getValue());
		}
		
		return true;
	},
	
	passwordText: 'Passwords do not match'
});
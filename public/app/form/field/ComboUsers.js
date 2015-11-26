Ext.define('AW.form.field.ComboUsers', {
	alias: 'widget.combousers',
	extend: 'AW.form.field.ComboBase',
	
	store: 'AW.store.Users',
	displayField: 'name',
	valueField: 'id'
});
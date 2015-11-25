Ext.define('AW.form.field.ComboUsers', {
	alias: 'widget.combousers',
	extend: 'Ext.form.field.ComboBox',
	requires: [ 'AW.store.Users' ],
	
	store: 'AW.store.Users',
	displayField: 'name',
	valueField: 'id',
	pageSize: true
});
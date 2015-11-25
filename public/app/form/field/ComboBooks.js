Ext.define('AW.form.field.ComboBooks', {
	alias: 'widget.combobooks',
	extend: 'Ext.form.field.ComboBox',
	requires: [ 'AW.store.Books' ],
	
	store: 'AW.store.Books',
	displayField: 'title',
	valueField: 'id',
	pageSize: true
});
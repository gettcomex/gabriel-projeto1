Ext.define('AW.form.field.ComboBooks', {
	alias: 'widget.combobooks',
	extend: 'AW.form.field.ComboBase',
	
	store: 'AW.store.Books',
	displayField: 'title',
	valueField: 'id'
});
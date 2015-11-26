Ext.define('AW.form.field.ComboBookBindings', {
	alias: 'widget.combobookbindings',
	extend: 'Ext.form.field.ComboBox',
	
	store: 'AW.store.BookBindings',
	displayField: 'name',
	valueField: 'value',
	editable: false
});
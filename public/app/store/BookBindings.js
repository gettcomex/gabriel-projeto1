Ext.define('AW.store.BookBindings', {
	extend: 'Ext.data.Store',
	fields: [ 'name', 'value' ],
	data: [
		{ name: 'Bound', value: 0 },
		{ name: 'Unbound', value: 1 }
	]
});
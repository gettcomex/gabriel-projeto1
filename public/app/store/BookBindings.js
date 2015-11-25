Ext.define('AW.store.BookBindings', {
	extend: 'Ext.data.Store',
	fields: [ 'name', 'value' ],
	data: [
		{ name: 'Encadernado', value: 0 },
		{ name: 'Não encadernado', value: 1 }
	]
});
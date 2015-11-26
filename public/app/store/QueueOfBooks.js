Ext.define('AW.store.QueueOfBooks', {
	extend: 'AW.store.Base',
	model: 'AW.model.QueueOfBook',
	proxy: {
		type: 'rest',
		format: 'json',
		url: '/queue_of_books',
		reader: {
			root: 'data'
		}
	}
});
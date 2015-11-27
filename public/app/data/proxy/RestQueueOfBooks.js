Ext.define('AW.data.proxy.RestQueueOfBooks', {
	alias: 'proxy.restqueueofbooks',
	extend: 'AW.data.proxy.RestRails',

	url: '/queue_of_books',
	writer: {
		type: 'jsonrails',
		modelName: 'queue_of_book'
	}
});
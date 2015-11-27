Ext.define('AW.store.QueueOfBooks', {
	extend: 'AW.store.Base',

	requires: [ 'AW.data.proxy.RestQueueOfBooks' ],

	model: 'AW.model.QueueOfBook',
	proxy: {
		type: 'restqueueofbooks'
	}
});
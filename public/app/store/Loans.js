Ext.define('AW.store.Loans', {
	extend: 'AW.store.Base',
	model: 'AW.model.Loan',
	proxy: {
		type: 'rest',
		format: 'json',
		url: '/loans',
		reader: {
			root: 'data'
		}
	}
});
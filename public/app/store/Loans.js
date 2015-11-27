Ext.define('AW.store.Loans', {
	extend: 'AW.store.Base',

	requires: [ 'AW.data.proxy.RestLoans' ],

	model: 'AW.model.Loan',
	proxy: {
		type: 'restloans'
	}
});
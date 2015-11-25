Ext.define('AW.view.loan.WindowForm', {
	alias: 'widget.loanwindowform',
	extend: 'AW.view.base.WindowForm',
	requires: [ 'AW.view.loan.Form' ],

	height: 250,
	width: 500,

	items: [{
		xtype: 'loanform'
	}]
});
Ext.define('AW.view.book.WindowForm', {
	alias: 'widget.bookwindowform',
	extend: 'AW.view.base.WindowForm',
	requires: [ 'AW.view.book.Form' ],

	height: 250,
	width: 350,

	items: [{
		xtype: 'bookform'
	}]
});
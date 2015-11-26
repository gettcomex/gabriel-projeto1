Ext.define('AW.view.queueofbook.WindowForm', {
	alias: 'widget.queueofbookwindowform',
	extend: 'AW.view.base.WindowForm',
	requires: [ 'AW.view.queueofbook.Form' ],

	height: 175,
	width: 500,

	items: [{
		xtype: 'queueofbookform'
	}]
});
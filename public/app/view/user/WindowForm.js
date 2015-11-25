Ext.define('AW.view.user.WindowForm', {
	alias: 'widget.userwindowform',
	extend: 'AW.view.base.WindowForm',
	requires: [ 'AW.view.user.Form' ],

	height: 300,
	width: 350,

	items: [{
		xtype: 'userform'
	}]
});
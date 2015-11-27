Ext.define('AW.view.base.WindowForm', {
	alias: 'widget.basewindowform',
	extend: 'Ext.window.Window',
	requires: [ 'AW.view.base.Form' ],

	layout: 'fit',
	autoShow: true,
	modal: true,

	buttons: [
		{
			itemId: 'save',
			text: 'Save'
		},
		{
			itemId: 'cancel',
			text: 'Cancel'
		}
	]
});
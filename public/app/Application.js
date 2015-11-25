Ext.define('AW.Application', {
	name: 'AW',

	extend: 'Ext.app.Application',
	requires: [
		'Ext.toolbar.Paging',
		'Ext.form.Panel'
	],

	views: [],

	controllers: [
		'Books',
		'Users'
	],

	stores: []
});
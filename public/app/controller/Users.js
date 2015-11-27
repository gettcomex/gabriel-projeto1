Ext.define('AW.controller.Users', {
	extend: 'Ext.app.Controller',

	models: [
		'AW.model.User'
	],

	stores: [
		'AW.store.Users'
	],

	views: [
		'AW.view.user.Grid',
		'AW.view.user.Show',
		'AW.view.user.WindowForm'
	],

	init: function(application) {
		this.control({
			'usersgrid': {
				render: this.onGridRender,
				itemdblclick: this.onEditClick
			},
			'usersgrid button#add': {
				click: this.onAddClick
			},
			'usersgrid button#delete': {
				click: this.onDeleteClick
			},
			'userwindowform button#save': {
				click: this.onSaveClick
			},
			'userwindowform button#cancel': {
				click: this.onCancelClick
			},
			'usershow': {
				afterrender: this.onShowRender
			},
			'usershow button#logout': {
				click: this.onLogoutClick
			}
		});
	},

	onGridRender: function(grid, eOpts) {
		grid.getStore().load();
	},

	openForm: function(title) {
		return Ext.create('AW.view.user.WindowForm', {
			title: title
		});
	},

	onAddClick: function(btn, e, eOpts) {
		this.openForm('New User');
	},

	onEditClick: function(grid, record, item, index, e, eOpts) {
		var win = this.openForm('Edit User - ' + record.get('name')),
			form = win.down('form');
		
		form.loadRecord(record);
	},

	onDeleteClick: function(btn, e, eOpts) {
		var grid = btn.up('grid'),
			record = grid.getSelectionModel().getSelection()[0],
			store = grid.getStore();

		if (record) {
			record.destroy({
				success: function(response) {
					var store = grid.getStore();
					store.reload();
				}
			});
		}
	},
	
	onSaveClick: function(btn, e, eOpts) {
		var win = btn.up('window'),
			form = win.down('form'),
			values = form.getValues(),
			model = null;

		if (form.isValid()) {

			model = Ext.create('AW.model.User', values);

			model.save({
				success: function(response) {
					var record = form.getRecord(),
						grid = Ext.ComponentQuery.query('usersgrid')[0],
						store = grid.getStore();

					if (record) {
						record.set(values);
					}
					else {
						store.reload();
					}

					win.close();
				}
			});
		}
	},

	onCancelClick: function(btn, e, eOpts) {
		var win = btn.up('window'),
			form = win.down('form');

		form.getForm().reset();
		win.close();
	},

	onShowRender: function(form, eOpts) {
		var record = AW.store.Users.getCurrentUser();

		form.loadRecord(record);
	},

	onLogoutClick: function(btn, e, eOpts) {
		Ext.Ajax.request({
			url: '/accounts/sign_out',
			method: 'DELETE',
			callback: function() {
				window.location.reload();
			}
		});
	}
});
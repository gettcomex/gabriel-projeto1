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
		'AW.view.user.Form'
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
			'userform button#save': {
				click: this.onSaveClick
			},
			'userform button#cancel': {
				click: this.onCancelClick
			}
		});
	},

	onGridRender: function(grid, eOpts) {
		grid.getStore().load();
	},

	openForm: function(title) {
		return Ext.create('AW.view.UserForm', {
			title: title
		});
	},

	onAddClick: function(btn, e, eOpts) {
		this.openForm('New User');
	},

	onDeleteClick: function(btn, e, eOpts) {
		var grid = btn.up('grid'),
			record = grid.getSelectionModel().getSelection()[0],
			store = grid.getStore();

		record.destroy({
			success: function(response) {
				var store = grid.getStore();
				store.reload();
			},
			failure: function(response) {
				// TODO: isolar comportamento repetitivo.
				Ext.Msg.alert('Error', 'Ocorreu algum problema no servidor.');
			}
		});
	},

	onEditClick: function(grid, record, item, index, e, eOpts) {
		var win = this.openForm('Edit User - ' + record.get('title')),
			form = win.down('form');
		
		form.loadRecord(record);
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
				},
				failure: function(response) {
					// TODO: isolar comportamento repetitivo.
					Ext.Msg.alert('Error', 'Ocorreu algum problema no servidor.');
				}
			});
		}
	},

	onCancelClick: function(btn, e, eOpts) {
		var win = btn.up('window'),
			form = win.down('form');

		form.getForm().reset();
		win.close();
	}
});
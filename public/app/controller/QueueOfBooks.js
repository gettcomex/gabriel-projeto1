Ext.define('AW.controller.QueueOfBooks', {
	extend: 'Ext.app.Controller',

	models: [
		'AW.model.QueueOfBook',
		'AW.model.User'
	],

	stores: [
		'AW.store.QueueOfBooks',
		'AW.store.Books',
		'AW.store.Users'
	],

	views: [
		'AW.view.queueofbook.Grid',
		'AW.view.queueofbook.WindowForm'
	],

	init: function(application) {
		this.control({
			'queueofbooksgrid': {
				render: this.onGridRender
			},
			'queueofbooksgrid button#add': {
				click: this.onAddClick
			},
			'queueofbooksgrid button#delete': {
				click: this.onDeleteClick
			},
			'queueofbookwindowform button#save': {
				click: this.onSaveClick
			},
			'queueofbookwindowform button#cancel': {
				click: this.onCancelClick
			}
		});
	},

	onGridRender: function(grid, eOpts) {
		grid.getStore().load();
	},

	openForm: function(title) {
		return Ext.create('AW.view.queueofbook.WindowForm', {
			title: title
		});
	},

	onAddClick: function(btn, e, eOpts) {
		this.openForm('New Reserve');
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

			model = Ext.create('AW.model.QueueOfBook', values);

			model.save({
				success: function(response) {
					var record = form.getRecord(),
						grid = Ext.ComponentQuery.query('queueofbooksgrid')[0],
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
	}
});
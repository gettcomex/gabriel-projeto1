/*globals Ext, conf*/
Ext.define('AW.controller.Main', {
	extend: 'Ext.app.Controller',

	models: [
		'AW.model.Book'
	],

	stores: [
		'AW.store.Books'
	],

	views: [
		'AW.view.BooksGrid',
		'AW.view.BookForm'
	],

	init: function(application) {
		this.control({
			'booksgrid': {
				render: this.onGridRender,
				itemdblclick: this.onEditClick
			},
			'booksgrid button#add': {
				click: this.onAddClick
			},
			'booksgrid button#delete': {
				click: this.onDeleteClick
			},
			'bookform button#save': {
				click: this.onSaveClick
			}
		})
	},

	onGridRender: function(grid, eOpts) {
		grid.getStore().load();
	},

	openForm: function(title) {
		var win = Ext.create('AW.view.BookForm');

		win.setTitle(title);
		return win;
	},

	onAddClick: function(btn, e, eOpts) {
		this.openForm('New Book')
	},

	onEditClick: function(grid, record, item, index, e, eOpts) {
		var win = this.openForm('Edit Book - ' + record.get('title'));

		var form = win.down('form');

		// names?
		form.loadRecord(record);
	},

	onSaveClick: function(btn, e, eOpts) {
		var win = btn.up('window'),
			form = win.down('form'),
			values = form.getValues(),
			record = form.getRecord(),
			grid = Ext.ComponentQuery.query('booksgrid')[0],
			store = grid.getStore();

		if (form.isValid()) {
			if (record) {
				record.set(values);
			}
			else {
				var model = Ext.create('AW.model.Book', values);
			}

			form.submit({
				url: '/books',
				success: function(response) {
					// store.insert(0, model);
					win.close();
				},
				failure: function(response) {
					Ext.Msg.alert('Error', 'Ocorreu um problema no servidor.');
				}
			});
		}
	},

	onDeleteClick: function(btn, e, eOpts){

		var grid = btn.up('grid');

		var records = grid.getSelectionModel().getSelection();

		var store = grid.getStore();

		// validate?
		store.remove(records);

		store.sync();
	},
});
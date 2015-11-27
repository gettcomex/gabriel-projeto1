Ext.define('AW.controller.Books', {
	extend: 'Ext.app.Controller',

	models: [
		'AW.model.Book'
	],

	stores: [
		'AW.store.Books',
		'AW.store.BookBindings'
	],

	views: [
		'AW.view.book.Grid',
		'AW.view.book.WindowForm'
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
			'bookwindowform button#save': {
				click: this.onSaveClick
			},
			'bookwindowform button#cancel': {
				click: this.onCancelClick
			}
		});
	},

	onGridRender: function(grid, eOpts) {
		grid.getStore().load();
	},

	openForm: function(title) {
		return Ext.create('AW.view.book.WindowForm', {
			title: title
		});
	},

	onAddClick: function(btn, e, eOpts) {
		this.openForm('New Book');
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
				},
				failure: function(response) {
					// TODO: isolar comportamento repetitivo.
					Ext.Msg.alert('Error', 'Ocorreu algum problema no servidor.');
				}
			});
		}
	},

	onEditClick: function(grid, record, item, index, e, eOpts) {
		var win = this.openForm('Edit Book - ' + record.get('title')),
			form = win.down('form');
		
		form.loadRecord(record);
	},
	
	onSaveClick: function(btn, e, eOpts) {
		var win = btn.up('window'),
			form = win.down('form'),
			values = form.getValues(),
			model = null;

		if (form.isValid()) {

			model = Ext.create('AW.model.Book', values);

			model.save({
				success: function(response) {
					var record = form.getRecord(),
						grid = Ext.ComponentQuery.query('booksgrid')[0],
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
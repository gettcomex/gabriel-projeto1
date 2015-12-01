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

	onEditClick: function(grid, record, item, index, e, eOpts) {
		var win = this.openForm('Edit Book - ' + record.get('title')),
			form = win.down('form');
		
		form.loadRecord(record);
	},

	onDeleteClick: function(btn, e, eOpts) {
		var grid = btn.up('grid'),
			record = grid.getSelectionModel().getSelection()[0];
		
		if (record) {
			record.destroy({
				success: this.onGridRender.bind(this, grid)
			});
		}
	},
	
	onSaveClick: function(btn, e, eOpts) {
		var me = this,
			win = btn.up('window'),
			form = win.down('form'),
			values = form.getValues(),
			model = null;

		if (form.isValid()) {

			model = Ext.create('AW.model.Book', values);

			model.save({
				success: function(response) {
					var record = form.getRecord(),
						grid = Ext.ComponentQuery.query('booksgrid')[0];

					if (record) {
						record.set(values);
					}
					else {
						me.onGridRender(grid);
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
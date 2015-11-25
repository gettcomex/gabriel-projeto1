Ext.define('AW.controller.Loans', {
	extend: 'Ext.app.Controller',

	models: [
		'AW.model.Loan'
	],

	stores: [
		'AW.store.Loans'
	],

	views: [
		'AW.view.loan.Grid',
		'AW.view.loan.WindowForm'
	],

	init: function(application) {
		this.control({
			'loansgrid': {
				render: this.onGridRender,
				itemdblclick: this.onEditClick
			},
			'loansgrid button#add': {
				click: this.onAddClick
			},
			'loansgrid button#delete': {
				click: this.onDeleteClick
			},
			'loanwindowform button#save': {
				click: this.onSaveClick
			},
			'loanwindowform button#cancel': {
				click: this.onCancelClick
			}
		});

		this.onAddClick(); // test
	},

	onGridRender: function(grid, eOpts) {
		grid.getStore().load();
	},

	openForm: function(title) {
		return Ext.create('AW.view.loan.WindowForm', {
			title: title
		});
	},

	onAddClick: function(btn, e, eOpts) {
		this.openForm('New Loan');
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
		var win = this.openForm('Edit Loan - ' + record.get('title')),
			form = win.down('form');
		
		form.loadRecord(record);
	},
	
	onSaveClick: function(btn, e, eOpts) {
		var win = btn.up('window'),
			form = win.down('form'),
			values = form.getValues(),
			model = null;

		if (form.isValid()) {

			model = Ext.create('AW.model.Loan', values);

			model.save({
				success: function(response) {
					var record = form.getRecord(),
						grid = Ext.ComponentQuery.query('loansgrid')[0],
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
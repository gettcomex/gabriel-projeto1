Ext.define('AW.controller.Loans', {
	extend: 'Ext.app.Controller',

	models: [
		'AW.model.Loan',
		'AW.model.User'
	],

	stores: [
		'AW.store.Loans',
		'AW.store.Books',
		'AW.store.Users'
	],

	views: [
		'AW.view.loan.Grid',
		'AW.view.loan.WindowForm'
	],

	init: function(application) {
		this.control({
			'loansgrid': {
				render: this.onGridRender
			},
			'loansgrid button#add': {
				click: this.onAddClick
			},
			'loansgrid button#renew': {
				click: this.onRenewClick
			},
			'loanwindowform button#save': {
				click: this.onSaveClick
			},
			'loanwindowform button#cancel': {
				click: this.onCancelClick
			}
		});
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

	onRenewClick: function(btn, e, eOpts) {
		var grid = btn.up('grid'),
			record = grid.getSelectionModel().getSelection()[0];

		if (record) {

			Ext.Ajax.request({
				url: '/loans/' + record.get('id') + '/renew',
				method: 'PUT',
				success: function(response) {
					var loan = Ext.decode(response.responseText)
						formatedEndAt = null;

					loan.end_at = Ext.Date.parse(loan.end_at, 'Y-m-d');
					record.set(loan);

					formatedEndAt = Ext.Date.format(loan.end_at, 'm/d/Y');

					Ext.Msg.alert(
						'Success',
						'Loan was successfully renewed. New date: ' + formatedEndAt
					);
				},
				failure: function(response) {
					// TODO: isolar comportamento repetitivo.
					Ext.Msg.alert('Error', 'Ocorreu algum problema no servidor.');
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
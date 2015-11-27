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
					var result = Ext.decode(response.responseText)
						loan = result.data,
						formatedEndAt = null;

					if (result.success) {

						loan.end_at = Ext.Date.parse(loan.end_at, 'Y-m-d');
						record.set(loan);

						formatedEndAt = Ext.Date.format(loan.end_at, 'd/m/Y');

						Ext.Msg.alert(
							'Success',
							'Loan was successfully renewed. New date: ' + formatedEndAt
						);
					}
					else {
						AW.ResponseErrorBox.alert('ERROR', response);
					}
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
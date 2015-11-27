Ext.define('AW.store.Users', {
	extend: 'AW.store.Base',
	model: 'AW.model.User',
	proxy: {
		type: 'rest',
		format: 'json',
		url: '/users',
		reader: {
			root: 'data'
		}
	},

	statics: {
		loadCurrentUser: function() {
			var me = this;
			
			Ext.Ajax.request({
				url: '/users/me',
				method: 'GET',
				success: function(response) {
					var user = Ext.decode(response.responseText);
					me._currentUser = Ext.create('AW.model.User', user);
				}
			});
		},
		getCurrentUser: function() {
			return this._currentUser;
		}
	}
});
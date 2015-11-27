Ext.define('AW.grid.column.User', {
	alias: 'widget.usercolumn',
	extend: 'Ext.grid.column.Column',

	dataIndex: 'user_id',
	text: 'User',

	renderer: function(value, metaData, record) {
		var user = record.getUser();
		return user.get('name');
	}
});
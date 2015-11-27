Ext.define('AW.grid.column.Book', {
	alias: 'widget.bookcolumn',
	extend: 'Ext.grid.column.Column',

	dataIndex: 'book_id',
	text: 'Book',

	renderer: function(value, metaData, record) {
		var book = record.getBook();
		return book.get('title');
	}
});
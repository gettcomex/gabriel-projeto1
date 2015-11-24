/*globals Ext, conf*/
Ext.define('AW.model.Book', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'writer', type: 'string' },
        { name: 'pages', type: 'int' },
        { name: 'book_binding', type: 'int' },
        { name: 'copies', type: 'int' }
    ],
    proxy: {
        type: 'rest',
        format: 'json',
        url: '/books'
    }
});
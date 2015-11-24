/*globals Ext, conf*/
Ext.define('AW.store.Books', {
    extend: 'Ext.data.Store',
    model: 'AW.model.Book',
    pageSize: 5,
    proxy: {
        type: 'rest',
        format: 'json',
        url: '/books',
        reader: {
            root: 'data',
            totalProperty: 'total'
        }
    }
});
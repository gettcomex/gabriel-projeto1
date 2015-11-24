Ext.define('AW.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'AW.view.BooksGrid'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'booksgrid'
    }]
});
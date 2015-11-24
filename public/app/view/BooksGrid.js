Ext.define('AW.view.BooksGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.booksgrid',

    store: 'AW.store.Books',

    title: 'Books',

    iconCls: 'icon-grid',

    columns: [
        {
            text: 'ID',
            width: 35,
            dataIndex: 'id'
        },
        {
            text: 'Title',
            width: 170,
            flex: 1,
            dataIndex: 'title'
        },
        {
            text: 'Writer',
            width: 200,
            dataIndex: 'writer'
        },
        {
            text: 'Pages',
            width: 100,
            dataIndex: 'pages'
        },
        {
            text: 'Copies',
            width: 100,
            dataIndex: 'copies'
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'New',
                    itemId: 'add',
                    iconCls: 'icon-add'
                },
                {
                    xtype: 'button',
                    text: 'Destroy',
                    itemId: 'delete',
                    iconCls: 'icon-delete'
                }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            store: 'AW.store.Books',
            dock: 'bottom',
            displayInfo: true,
            emptyMsg: 'No book found.'
        }
    ]

});
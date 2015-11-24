Ext.define('AW.view.BookForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.bookform',

    layout: 'fit',
    height: 250,
    width: 350,
    autoShow: true,

    items: [{
        xtype: 'form',
        bodyPadding: 10,
        defaults: {
            anchor: '100%',
            allowBlank: false
        },
        items: [
            {
                xtype: 'hiddenfield',
                name: 'id'
            },
            {
                xtype: 'textfield',
                name: 'book[title]',
                fieldLabel: 'Title',
                maxLength: 150
            },
            {
                xtype: 'textfield',
                name: 'book[writer]',
                fieldLabel: 'Writer',
                maxLength: 150
            },
            {
                xtype: 'numberfield',
                name: 'book[pages]',
                fieldLabel: 'Pages',
                allowDecimals: false,
                minValue: 1
            },
            {
                xtype: 'numberfield',
                name: 'book[copies]',
                fieldLabel: 'Copies',
                allowDecimals: false,
                minValue: 1
            },
            {
                xtype: 'combo',
                name: 'book[book_binding]',
                fieldLabel: 'Book binding',
                store: Ext.create('Ext.data.Store', {
                    fields: [ 'name', 'value' ],
                    data: [
                        { name: 'Encadernado', value: 0 },
                        { name: 'Não encadernado', value: 1 }
                    ]
                }),
                displayField: 'name',
                valueField: 'value'
            }
        ]
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        layout: {
            type: 'hbox',
            pack: 'end'
        },
        items: [
            {
                xtype: 'button',
                text: 'Save',
                itemId: 'save',
                iconCls: 'icon-save'
            },
            {
                xtype: 'button',
                text: 'Cancel',
                itemId: 'cancel',
                iconCls: 'icon-reset'
            }
        ]
    }]
});
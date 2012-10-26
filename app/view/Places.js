Ext.define('Synerzip.view.Places',{
    extend:'Ext.List',


    xtype:'places',
    config:{
//        title:'Places',
//        layout:'fit',
        styleHtmlCls:'zero',
        itemTpl:'{firstName} ',
        styleHtmlContent: true,
        store: 'Places',
        onItemDisclosure: true
    }
})
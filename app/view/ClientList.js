
Ext.define("Synerzip.view.ClientList",{
    extend:'Ext.Panel',
    xtype:'clientList',
    config:{
       title:'Client List',
        layout:'fit',

        items:[
            {
                scrollable:true,
                xtype:'list',
                store:'ClientDetails',
                styleHtmlCls:'clientlistpage',
                itemTpl:'<img src="{data1}"/> <h1>{name}</h1> ',
                itemCls:'place-entry'
            }
        ]
    }
})
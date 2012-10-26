
Ext.define("Synerzip.view.ClientDetailsContainer",{
    extend:'Ext.NavigationView',
    xtype:'clientDetailsContainer',

    config:{
         items:[
             {
                 xtype:'clientList',
                 width:400,
                 docked:'left'
             },

             {
                 xtype:'detailsClient',
                 layout:'fit'

             }
        ]
    }
})
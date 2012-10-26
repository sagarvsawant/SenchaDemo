Ext.define('Synerzip.view.PlacesContainer', {
    extend:'Ext.Container',
    xtype:'tablet-placesContainer',
    config:{
        layout:'card',
        title:"Synerzip Locations",
        iconCls:'locate',

        items:[
            {
                xtype:'titlebar',
                title:'Places',
                docked:'top'
            },
            {
                xtype:'places',
                width:300,
                docked:'left'
            },

            {
                xtype:'details'
            }
        ]
    }
})
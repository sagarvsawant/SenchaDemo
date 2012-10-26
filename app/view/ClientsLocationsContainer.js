Ext.define('Synerzip.view.ClientsLocationsContainer', {
    extend:'Ext.Container',
    xtype:'tablet-clientsPlacesContainer',
    config:{
        layout:'card',
        title:'Client Places',
        iconCls:'locate',

        items:[
            {
                xtype:'titlebar',
                title:'Client Places',
                docked:'top'
            },
            {
                xtype:'clientsPlaces',
                width:300,
                docked:'left'
            },

            {
                xtype:'clientsPlacesDetails'
            }
        ]
    }
})
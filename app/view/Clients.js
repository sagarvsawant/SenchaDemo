
Ext.define("Synerzip.view.Clients",{
    extend:'Ext.tab.Panel',
    xtype:'clients',
    config:{
        title:"Clients",
        iconCls:'team',


        tabBar:{
            layout:{
                pack:'center',
                docked:'left'
            }
        },
        activeTab:1,
        defaultValue:{
            scrollable:true
        },

        items:[
            {
                xtype: 'titlebar',
                docked: 'top',

                styleHtmlContent:true,
                styleHtmlCls:'headerTitle',
                height:'49pt',
//                id:'headerBar',

                items: [
                    {
                        xtype: 'image',
                        height: 50,
                        width: 270,
                        src:"resources/images/syn-logo-withTagLine.png",
                        align:'left'
                    }
                ]
            },
            {
                title:'Clients List',
                xtype:'container',


                fullscreen: true,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'panel',
                        xtype:'clientDetailsContainer',
                        flex: 3
                    }
                ]


            }
            ,
            {
                title:'Clients Location',
                xtype:'container',


                fullscreen: true,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'panel',
                        xtype:'tablet-clientsPlacesContainer',
                        flex: 3
                    }
                ]


            }
        ]

    }
})
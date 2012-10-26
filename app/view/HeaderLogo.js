Ext.define("Synerzip.view.HeaderLogo",{
    extend:'Ext.Panel',
    xtype:'logo',
    fullscreen: true,

    config:{
//        title:'Home',
//        iconCls:'home',
//        // layout:'fit',
//        scrollable:true,
//        styleHtmlContent:true,

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
            }
        ]

    }

})
Ext.define("Synerzip.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    
    config: {
        tabBarPosition: 'bottom',

        tabBar: {
            layout: {

                pack: 'center'
            }
        },
        items: [
            {
                xtype:'home'
            },
            {
                xtype:'aboutUs'
            },
            {
                xtype:'clients'
            },
            {
                xtype:'contactUs'
            }
        ]
    }
});
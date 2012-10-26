Ext.define('Synerzip.view.ClientsLocations',{
    extend:'Ext.List',


    xtype:'clientsPlaces',
    config:{
        styleHtmlCls:'zero',

        styleHtmlContent: true,
        store: 'ClientsLocations',
        onItemDisclosure: true,

        itemTpl:'<div id="custom">  <h4 class="zero1">{firstName}</h4> </div> '
    }
})
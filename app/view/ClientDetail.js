Ext.define("Synerzip.view.ClientDetail",{
    extend:'Ext.Container',
    xtype:'detailsClient',
    requires: [
        'Ext.Anim'
    ],

    config:{

        title:"Client Details",
        fullscreen: true,

        layout:'card',

        scrollable:true,
        styleHtmlContent:true,
        styleHtmlCls:'details',

            tpl:'<img src="{data1}"/>' +
            '<h1>{name}</h1>' +
            '<h3>{testimonial}</h3>' +
            '<li>{testimonialGivenBy}</li>' +
            '<li>{designation}</li>' +
            '<li>{add}</li>'


    }



})
Ext.define('Synerzip.view.PlaceDetails',{
    extend:'Ext.Map',
    xtype:'details',
    config:{
        title : 'Details',
        styleHtmlContent : true,
        scrollable : 'true',

        xtype:'map',
//        zoom:6,

        mapOptions:{
            center : new google.maps.LatLng(25.50, 350.79),
            position1 :  new google.maps.LatLng(32.943645, -96.837959),
            position2 :  new google.maps.LatLng(18.500427, 73.821044),
            zoom : 3,

            mapTypeId : google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT
            }
        },
        listeners: {
            maprender : function(comp, map){

                var marker = new google.maps.Marker({
                    position: map.position1,
                    title : 'Synerzip Softech India Pvt Ltd',

                    map: map
                });

                var marker1 = new google.maps.Marker({
                    position: map.position2,
                    title : 'Synerzip',
                    map: map

                });

                var  infowindow = new google.maps.InfoWindow({
                    content: '<html> <body> <b>Synerzip</b> Marketing Office </body></html>'
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
                });


                var infowindow1 = new google.maps.InfoWindow({
                    content: '<html> <body> <b>Synerzip</b> Operation Office </body></html>'
                });
                google.maps.event.addListener(marker1, 'click', function() {
                    infowindow1.open(map, marker1);
                });



            }
        }




  }
//    ,
//
//    onGeoUpdate : function(geo) {
//        if (geo) {
//            this.fireEvent('setcenter', this, this.getMap(), geo);
//        }
//    }
})
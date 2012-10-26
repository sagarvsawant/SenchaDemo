Ext.define('Synerzip.controller.Details', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main:'tablet-placesContainer'

        },
        control: {
            'places': {
                 select: 'showDetail'
             }
        }

    },

    showDetail: function(list, record) {
        this.getMain().setActiveItem({
            xtype: 'details',
            title: record.fullName(),
            lat: record.lat(),
            lng: record.long(),
//            contentAddr: record.address(),


            listeners: {
                maprender: function(component, map, geo, eOpts) {
                    var position = new google.maps.LatLng(record.lat(),record.long());
//                    var position1 =  new google.maps.LatLng(32.943645, -96.837959);
//                    var position2 =  new google.maps.LatLng(18.500427, 73.821044);


                    var marker = new google.maps.Marker({
                        position: position,

                        map: map
                    });

//                    var marker1 = new google.maps.Marker({
//                        position: position1,
//                        map: map
//                    });
//
//                    var marker2 = new google.maps.Marker({
//                        position: position2,
//                        map: map
//                    });




                    var infowindow = new google.maps.InfoWindow({
                        content: record.address()


                    });

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });

                    setTimeout(function() {
                        map.panTo(position);

                    }, 1000);



                }
            }


//            mapOptions : {
//
//                center : new google.maps.LatLng(25.50, 350.79),
//                position1 :  new google.maps.LatLng(18.503610600000000000, 73.798780900000000000),
//                position2 :  new google.maps.LatLng(33.30, 625.26),
//                zoom : 3,
//
//                mapTypeId : google.maps.MapTypeId.ROADMAP,
//                navigationControl: true,
//                navigationControlOptions: {
//                    style: google.maps.NavigationControlStyle.DEFAULT
//                }
//            },
//            listeners: {
//                maprender : function(comp, map){
//
//                    var marker = new google.maps.Marker({
//                        position: map.position1,
//                        title : 'Synerzip Softech India Pvt Ltd',
//
//                        map: map
//                    });
//
//                    var marker = new google.maps.Marker({
//                        position: map.position2,
//                        title : 'Synerzip',
//                        map: map
//
//                    });
//
//
//                }
//            }
        })
    }

});
Ext.define('Synerzip.controller.ClientsLocations', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main:'tablet-clientsPlacesContainer'

        },
        control: {
            'clientsPlaces': {
                select: 'showDetail'
            }
        }

    },

    showDetail: function(list, record) {
        this.getMain().setActiveItem({
            xtype: 'clientsPlacesDetails',
            title: record.fullName(),
            lat: record.lat(),
            lng: record.long(),
            contentAddr: record.address(),


            listeners: {
                maprender: function(component, map, geo, eOpts) {
                    var position = new google.maps.LatLng(record.lat(),record.long());

                    var marker = new google.maps.Marker({
                        position: position,

                        map: map
                    });

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


        })
    }

});
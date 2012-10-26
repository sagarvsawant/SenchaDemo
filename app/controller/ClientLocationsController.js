Ext.define('Synerzip.controller.ClientLocationsController', {
    extend : 'Ext.app.Controller',
    config : {
        control : {
            'details' : {
//                activate : 'activateGPS',
                setcenter : 'dropPins'
            }
        },
        markersArray : []
    },
//    activateGPS : function(container, options){
//        container.setUseCurrentLocation(true);
//    },
    dropPins : function(component, map, geo, eOpts) {
        //only do this the first time?
        //geo updates are constantly recieved so turn useCurrentLocation off
        comp.setUseCurrentLocation(true);

        //Remove all markers from the map.
        for(var i = 0; i < this.getMarkersArray().length; i++) {
            this.getMarkersArray()[i].setMap(null);
        }
        this.setMarkersArray(Array());

        var currentPosition = new google.maps.LatLng(geo.getLatitude(), geo.getLongitude());
        var yourLocationMarker = new google.maps.Marker({
            position : currentPosition,
            title : 'Current Location',
            map : map


        });
        self.getMarkersArray().push(yourLocationMarker);

        var president = comp.getClientsLocation();
        var presidentsPosition = new google.maps.LatLng(president.getLatitude(), president.getLongitude());
        var yourLocationMarker = new google.maps.Marker({
            position : presidentsPosition,
            title : president.address(),
            map : map

        });
        self.getMarkersArray().push(presidentsPosition);
    }
});
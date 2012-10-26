Ext.define('Synerzip.view.ClientsLocationDetails',{
    extend:'Ext.Map',
    xtype:'clientsPlacesDetails',
    config:{
        title : 'Places Details',
        styleHtmlContent : true,
        scrollable : 'true',


        xtype:'map',

        mapOptions:{
            center : new google.maps.LatLng(32.361403,-71.110107),
            position1 :  new google.maps.LatLng(33.024875, -96.793542),
            position2 :  new google.maps.LatLng(30.434466, -97.760081),
            position3 :  new google.maps.LatLng(41.250322, -73.005009),
            position4 :  new google.maps.LatLng(30.391875, -97.722075),
            position5:  new google.maps.LatLng(32.922213, -96.784036),
            position6 :  new google.maps.LatLng(32.758732, -97.474866),
            position7 :  new google.maps.LatLng(32.943645, -96.837959),
            position8 :  new google.maps.LatLng(29.730499, -95.44073),
            position9 :  new google.maps.LatLng(38.713778, -77.214983),
            position10 :  new google.maps.LatLng(32.943645, -96.837959),
            position11 :  new google.maps.LatLng(32.943645, -96.837959),
            zoom : 5,

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
                    title : 'QuickOffice',

                    map: map
                });

                var marker1 = new google.maps.Marker({
                    position: map.position2,
                    title : 'Pavillion Technologies',
                    map: map

                });

                var marker2 = new google.maps.Marker({
                    position: map.position3,
                    title : 'Tangoe',

                    map: map
                });

                var marker3 = new google.maps.Marker({
                    position: map.position4,
                    title : 'ClearOrbit',

                    map: map
                });

                var marker4 = new google.maps.Marker({
                    position: map.position5,
                    title : '360 Commerce',

                    map: map
                });

                var marker5 = new google.maps.Marker({
                    position: map.position6,
                    title : 'DEPO',

                    map: map
                });

                var marker6 = new google.maps.Marker({
                    position: map.position7,
                    title : 'PDX- NHIN-Rx.com',

                    map: map
                });

                var marker7 = new google.maps.Marker({
                    position: map.position8,
                    title : 'Gimmal Group',

                    map: map
                });

                var marker8 = new google.maps.Marker({
                    position: map.position9,
                    title : 'Yagna IQ',

                    map: map
                });

                var marker9 = new google.maps.Marker({
                    position: map.position10,
                    title : 'CMS GlobalSoft',

                    map: map
                });

                var marker10 = new google.maps.Marker({
                    position: map.position11,
                    title : 'FD2S',

                    map: map
                });

//                var  infowindow = new google.maps.InfoWindow({
//                    content: '<html> <body> <b>Synerzip</b> Marketing Office </body></html>'
//                });
//                google.maps.event.addListener(marker, 'click', function() {
//                    infowindow.open(map, marker);
//                });
//
//
//                var infowindow1 = new google.maps.InfoWindow({
//                    content: '<html> <body> <b>Synerzip</b> Operation Office </body></html>'
//                });
//                google.maps.event.addListener(marker1, 'click', function() {
//                    infowindow1.open(map, marker1);
//                });



            }
        }




    }
})
//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    name: 'Synerzip',

    requires: [
        'Ext.MessageBox'
    ],
    controllers: ['ClientDetailsController',"Details","PresidentDetailController","ClientsLocations","ClientLocationsController"],
    models:['EmployeeGrowthVO','ClientDetailVO','FinancialGrowthVO','Place','ClientsLocation','ClientGrowthVO'],
    views: ['Main','HeaderLogo','Home','AboutUs','EmployeeGrowthChart','ClientGrowthChart','Clients','ContactUs','ClientDetail','ClientDetailsContainer','ClientList','FinancialGrowthChart','Places','PlaceDetails','PlacesContainer','ClientsLocations','ClientsLocationDetails','ClientsLocationsContainer'],
    stores:['EmployeeGrowth','ClientDetails','FinancialGrowth','Places','ClientsLocations','ClientGrowth'],


    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Synerzip.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});

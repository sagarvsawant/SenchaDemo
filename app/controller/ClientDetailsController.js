
Ext.define("Synerzip.controller.ClientDetailsController",{
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.Anim'
    ],

    config: {
        refs: {
            clientDetails:'clientDetailsContainer detailsClient'
         },
        control: {
            'clientDetailsContainer clientList list':{
                itemtap: function(list, index, target, record){
                    console.log("Item "+record.get('name')+" tapped");
                    var detailsView = this.getClientDetails();
                    detailsView.setData(record.data);

                    Ext.Anim.run(detailsView, 'slide', {
                        direction: 'left',
                        duration: 900
                    });

                    this.application.fireEvent('detailsShown',{
                        'data':record.data,
                        'button':detailsView.getItems().items[0]
                    });



                }
            }
        }
    } ,
    init:function(application){
        this.application = application;
    }
})
Ext.define('Synerzip.model.ClientsLocation',{
    extend:'Ext.data.Model',
    config:{
//
        fields: ['firstName', 'middleInitial', 'lastName', 'latitude', 'longitude','address']
    },
    fullName : function() {
        var d = this.data, names = [d.firstName, (!d.middleInitial ? "" : d.middleInitial + ".")];
        return names.join(" ");
    }
    ,
    lat:function(){
        return this.data.latitude
    },
    long:function(){
        return this.data.longitude
    },
    address:function(){
        var d = this.data, address = [d.address];
        return address.join(" ");
    }


})

Ext.define("Synerzip.store.ClientGrowth",{
    extend:'Ext.data.JsonStore',
    config:{
        model:'Synerzip.model.ClientGrowthVO',
        data: [
            {'year':'2005', 'data1':42},
            {'year':'2006', 'data1':90},
            {'year':'2007', 'data1':100},
            {'year':'2008', 'data1':165},
            {'year':'2009', 'data1':130},
            {'year':'2010', 'data1':170},
            {'year':'2011', 'data1':190},
            {'year':'2012', 'data1':250}


        ]
    }
})
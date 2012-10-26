
Ext.define("Synerzip.store.FinancialGrowth",{
    extend:'Ext.data.JsonStore',
    config:{
        model:'Synerzip.model.FinancialGrowthVO',
        data: [
            {'year':'2005', 'income':42},
            {'year':'2006', 'income':90},
            {'year':'2007', 'income':100},
            {'year':'2008', 'income':165},
            {'year':'2009', 'income':130},
            {'year':'2010', 'income':170},
            {'year':'2011', 'income':190},
            {'year':'2012', 'income':250}


        ]
    }

})
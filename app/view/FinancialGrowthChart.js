
Ext.define('Synerzip.view.FinancialGrowthChart',{
    extend:'Ext.chart.Chart',
    // extends:'Ext.panel',
    xtype:'financeGrowthChart',
    requires : ['Ext.chart.Panel',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Line',
        'Ext.chart.series.Series'],

    config:{

        renderTo: Ext.getBody(),
        width: 700,
        height: 350,
        animate: true,
        store: 'FinancialGrowth',
        title:'Financial Growth',
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                fields: ['income'],
                /* label: {
                 renderer: Ext.util.Format.numberRenderer('0,0')
                 },*/
                title: 'Income',
                grid: true,
                minimum: 0
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: ['year'],
                title: 'Years'
            }

        ],
        series: [{
            type: 'line',
            highlight: {
                size: 7,
                radius: 7
            },
            axis: 'left',
            xField: 'year',
            yField: 'income',
            markerConfig: {
                type: 'cross',
                size: 4,
                radius: 4,
                'stroke-width': 0
            }
        }]
    }

})



Ext.define('Synerzip.view.EmployeeGrowthChart',{
    extend:'Ext.chart.Chart',
    // extends:'Ext.panel',
    xtype:'empGrowthChart',
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
        store: 'EmployeeGrowth',
        title:'Employee Growth',
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                fields: ['data1'],
                /* label: {
                 renderer: Ext.util.Format.numberRenderer('0,0')
                 },*/
                title: 'Number of Employees',
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
            yField: 'data1',
            markerConfig: {
                type: 'cross',
                size: 4,
                radius: 4,
                'stroke-width': 0
            }
        }]
    }

})


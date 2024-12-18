// Radialize the colors
Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    })
});

// Build the chart

Highcharts.chart('hctoken', {
    chart: {
        backgroundColor: false,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
         spacingBottom: 5,
            spacingTop: 5,
            spacingLeft: 0,
            spacingRight: 0,
//            margin: [0, 0, 0, 0],
            height: 300,
            width: null
    },
    title: {
        text: ''
    },
    tooltip: {
       
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        
        pie: {
           
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: { 
                    
                    textOutline: 0,
                    color: 'white'
                
                    //color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                },
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Share',
        borderColor: false,
        
        data: [
            
            { name: 'Team', y: 20,
             color: '#BEFFC7'},
            { name: 'Marketing', y: 10,
            color: '#86BA90'},
            { name: 'Bounty', y: 5 ,
            color: '#506C64'},
            { name: 'Advisors', y: 5 ,
            color: '#1E3F20'},
            { name: 'Reserve', y: 40 ,
            color: '#2D5E30'},
            { name: 'IEO', y: 20,
            color: '#053A09'}
        ]
    }]
});
Highcharts.chart('hctoken2', {
    chart: {
        backgroundColor: false,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  //  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                },
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'Business', y: 20 },
            { name: 'Team', y: 20 },
            { name: 'Marketing', y: 20 },
            { name: 'Development', y: 20 },
            { name: 'Reserve', y: 20 }
        ]
    }]
});


// Create the chart
Highcharts.chart('barchart', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: ''
        },
        plotLines: [{
            color: '#000000', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.1, // Value of where the line will appear
            width: 1 // Width of the line    
          }, {
            color: 'red', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.2, // Value of where the line will appear
            width: 2 // Width of the line    
          }]

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            pointWidth: 12,
            borderRadius: 4,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '1',
            y: 0.10,
            drilldown: 'dfghjk',
            color: '#F86B6B'
        }, {
            name: '2',
            y: 0.20,
            drilldown: 'Chrome',
            color: '#80D588'
        }, {
            name: '3',
            y: 0.30,
            drilldown: 'Firefox',
            color: '#8EBEE9'
        }, {
            name: '4',
            y: 0.40,
            drilldown: 'Safari',
            color: '#A2A7E9'
        }]
    }],
    credits: {
        enabled: false
     },
});
// Create the chart
Highcharts.chart('barchart2', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: ''
        },
        plotLines: [{
            color: '#000000', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.1, // Value of where the line will appear
            width: 1 // Width of the line    
          }, {
            color: 'red', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.2, // Value of where the line will appear
            width: 1 // Width of the line    
          }]

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            pointWidth: 12,
            borderRadius: 4,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '1',
            y: 15.33,
            drilldown: 'dfghjk',
            color: '#F86B6B'
        }, {
            name: '2',
            y: 17.03,
            color: '#80D588',
            drilldown: 'Chrome'
        }, {
            name: '3',
            y: 10.38,
            color: '#8EBEE9',
            drilldown: 'Firefox'
        }, {
            name: '4',
            y: 4.77,
            color: '#A2A7E9',
            drilldown: 'Safari'
        }]
    }],
    credits: {
        enabled: false
     },
});



Highcharts.chart('barchart3', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: ''
        },
        plotLines: [{
            color: '#000000', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.1, // Value of where the line will appear
            width: 1 // Width of the line    
          }, {
            color: 'red', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.2, // Value of where the line will appear
            width: 1 // Width of the line    
          }]

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            pointWidth: 12,
            borderRadius: 4,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '1',
            y: 15.33,
            color: '#F86B6B',
            drilldown: 'dfghjk'
        }, {
            name: '2',
            y: 17.03,
            color: '#80D588',
            drilldown: 'Chrome'
        }, {
            name: '3',
            y: 10.38,
            color: '#8EBEE9',
            drilldown: 'Firefox'
        }, {
            name: '4',
            y: 1.77,
            color: '#A2A7E9',
            drilldown: 'Safari'
        }]
    }],
    credits: {
        enabled: false
     },
});
Highcharts.chart('barchart4', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        title: {
            text: ''
        },
        plotLines: [{
            color: '#000000', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.1, // Value of where the line will appear
            width: 1 // Width of the line    
          }, {
            color: 'red', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.2, // Value of where the line will appear
            width: 1 // Width of the line    
          }]

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            pointWidth: 12,
            borderRadius: 4,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '1',
            y: 0.33,
            color: '#F86B6B',
            drilldown: 'dfghjk'
        },{
            name: '2',
            y: 0.23,
            color: '#80D588',
            drilldown: 'Chrome'
        },{
            name: '3',
            y: 0.38,
            color: '#8EBEE9',
            drilldown: 'Firefox'
        },{
            name: '4',
            y: 1.00,
            color: '#A2A7E9',
            drilldown: 'Safari'
        }]
    }],
    credits: {
        enabled: false
     },
});



Highcharts.chart('parallelHourRatio', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        title: {
            text: ''
        },
        plotLines: [{
            color: '#000000', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.1, // Value of where the line will appear
            width: 1 // Width of the line    
          }, {
            color: 'red', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.2, // Value of where the line will appear
            width: 1 // Width of the line    
          }]

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            pointWidth: 12,
            borderRadius: 4,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '1',
            y: 0.33,
            color: '#F86B6B',
            drilldown: 'dfghjk'
        },{
            name: '2',
            y: 0.23,
            color: '#80D588',
            drilldown: 'Chrome'
        },{
            name: '3',
            y: 0.38,
            color: '#8EBEE9',
            drilldown: 'Firefox'
        },{
            name: '4',
            y: 1.00,
            color: '#A2A7E9',
            drilldown: 'Safari'
        }]
    }],
    credits: {
        enabled: false
     },
});


Highcharts.chart('occupancyRatio', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        title: {
            text: ''
        },
        plotLines: [{
            color: '#000000', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.1, // Value of where the line will appear
            width: 1 // Width of the line    
          }, {
            color: 'red', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.2, // Value of where the line will appear
            width: 1 // Width of the line    
          }]

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            pointWidth: 12,
            borderRadius: 4,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '1',
            y: 0.33,
            color: '#F86B6B',
            drilldown: 'dfghjk'
        },{
            name: '2',
            y: 0.23,
            color: '#80D588',
            drilldown: 'Chrome'
        },{
            name: '3',
            y: 0.38,
            color: '#8EBEE9',
            drilldown: 'Firefox'
        },{
            name: '4',
            y: 1.00,
            color: '#A2A7E9',
            drilldown: 'Safari'
        }]
    }],
    credits: {
        enabled: false
     },
});

Highcharts.chart('maxContiguousUse', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        title: {
            text: ''
        },
        plotLines: [{
            color: '#000000', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.1, // Value of where the line will appear
            width: 1 // Width of the line    
          }, {
            color: 'red', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.2, // Value of where the line will appear
            width: 1 // Width of the line    
          }]

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            pointWidth: 12,
            borderRadius: 4,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '1',
            y: 0.33,
            color: '#F86B6B',
            drilldown: 'dfghjk'
        },{
            name: '2',
            y: 0.23,
            color: '#80D588',
            drilldown: 'Chrome'
        },{
            name: '3',
            y: 0.38,
            color: '#8EBEE9',
            drilldown: 'Firefox'
        },{
            name: '4',
            y: 1.00,
            color: '#A2A7E9',
            drilldown: 'Safari'
        }]
    }],
    credits: {
        enabled: false
     },
});

Highcharts.chart('mouPerHour', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        title: {
            text: ''
        },
        plotLines: [{
            color: '#000000', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.1, // Value of where the line will appear
            width: 1 // Width of the line    
          }, {
            color: 'red', // Color value
            dashStyle: 'longdashdot', // Style of the plot line. Default to solid
            value: 0.6, // Value of where the line will appear
            width: 1 // Width of the line    
          }]
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            pointWidth: 12,
            borderRadius: 4,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '1',
            y: 0.33,
            color: '#F86B6B',
            drilldown: 'dfghjk'
        },{
            name: '2',
            y: 0.23,
            color: '#80D588',
            drilldown: 'Chrome'
        },{
            name: '3',
            y: 0.38,
            color: '#8EBEE9',
            drilldown: 'Firefox'
        },{
            name: '4',
            y: 1.00,
            color: '#A2A7E9',
            drilldown: 'Safari'
        }]
    }],
    credits: {
        enabled: false
     },
});


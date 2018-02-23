Highcharts.setOptions({
    colors: ['rgba(207, 228, 247, 0.63)', '#9ACFFF']
});
Highcharts.chart('compare-graph', {

    chart: {
        type: 'column'
    },

   title: {
        text: ''
    },
     plotOptions: {
        series: {
            pointWidth: 30
        }
    },
    credits: {
        enabled: false
    },

    data: {
        rows: [
            ['MOU', 'yesterday', 'today'], // series names
            ['Minutes of usage', 40, 25], // category and values
        ]
    }
});

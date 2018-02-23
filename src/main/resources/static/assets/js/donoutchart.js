$(document).ready(function(){

		var colors = Highcharts.setOptions({
		    colors: ['#F9F8F8', '#8BBAE4', '#8AE7AB', '#C4A2E9']
		}),
		    categories = [],
		    data = [{
		    	name:'',
		        y: 100,
		        color: colors[2],
		        drilldown: {
		            categories: [ 'Mou:20 call:30', 'Mou:50 call:90'],
		            data: [1, 99],
		        }
		    },{
		    	name:'',
		        y: 50.33,
		        color: colors[0],
		        drilldown: {
		            categories: [],
		            data: []
		        }
		    },{
		    	name:'',
		        y: 10.38,
		        color: colors[1],
		        drilldown: {
		            categories: [],
		            data: [],
		        }
		    },{
		    	name:'',
		        y: 10.2,
		        color: colors[3],
		        drilldown: {
		            categories: ['prop v40as.0'],
		            data: [],
		        }
		    }],
		    browserData = [],
		    versionsData = [],
		    i,
		    j,
		    dataLen = data.length,
		    drillDataLen,
		    brightness;


		// Build the data arrays
		for (i = 0; i < dataLen; i += 1) {

		    // add browser data
		    browserData.push({
		        name: categories[i],
		        y: data[i].y,
		        color: data[i].color
		    });

		    // add version data
		    drillDataLen = data[i].drilldown.data.length;
		    for (j = 0; j < drillDataLen; j += 1) {
		        brightness = 0.2 - (j / drillDataLen) / 5;
		        versionsData.push({
		            name: data[i].drilldown.categories[j],
		            y: data[i].drilldown.data[j],
		            color: Highcharts.Color(data[i].color).brighten(brightness).get()
		        });
		    }
		}

		// Create the chart
		Highcharts.chart('container', {
		    chart: {
		        type: 'pie'
		    },
		    title: {
		        text: '<div class="centerview"><span class="subhead">PRN MSISDN</span> +192 923 336 42 <span class="mouNumber">MOU - 1082</span></div>',
		         floating: true,
		         verticalAlign: 'middle',
		         useHTML: true,
	            style: {
	                color: '#303030',
	                fontSize: '18px',
	                fontWeight: 'bold',
	            },
		    },
		    yAxis: {
		        title: {
		            text: '+192 923 336 42'
		        }
		    },
		    plotOptions: {
		        pie: {
		            shadow: false,
		            center: ['50%', '50%'],
		             borderColor: '#e1e1e1',
		             dataLabels: {
	                    enabled: false
	                }
		        }
		    },
		    tooltip: {
		        valueSuffix: '%',
		        formatter: function () {
			        return '<div class="tooltip custom">' + this.point.name + '<br />' + '<b>' + Highcharts.numberFormat(this.y).replace(",", " ") + ' Kč [' + Highcharts.numberFormat(this.percentage, 2) + '%]</b></div>';
			    }
		    },
		    series: [{
		        name: 'vip',
		        data: browserData,
		        size: '80%',
		        innerSize:'70%',
		        dataLabels: {
		            formatter: function () {
		                return this.y > 5 ? this.point.name : null;
		            },
		            color: '#ffffff',
		            distance: -30
		        }
		    }, {
		        name: '',
		        data: versionsData,
		        size: '100%',
		        innerSize: '80%',
		        dataLabels: {
		            formatter: function () {
		                // display only if larger than 1
		                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
		                    this.y + '%' : null;
		            }
		        },
		        id: 'versions'
		    }],
		    responsive: {
		        rules: [{
		            condition: {
		                maxWidth: 400
		            },
		            chartOptions: {
		                series: [{
		                    id: 'versions',
		                    dataLabels: {
		                        enabled: false
		                    }
		                }]
		            }
		        }]
		    },
		     credits: {
			    enabled: false
			 },

		});



		// Create the chart 2
		Highcharts.chart('container2', {
		    chart: {
		        type: 'pie'
		    },
		    title: {
		        text: '',
		    },
		    yAxis: {
		        title: {
		            text: ''
		        }
		    },
		    plotOptions: {
		        pie: {
		            shadow: false,
		            center: ['50%', '50%'],
		            borderColor: '#e1e1e1',
                    showInLegend: true,
                    dataLabels: {
	                    enabled: false
	                }
		        }
		    },
		    tooltip: {
		        valueSuffix: '%'
		    },
		    series: [{
		        name: 'Browsers',
		        data: browserData,
		        size: '80%',
		        innerSize:'70%',
		        dataLabels: {
		            formatter: function () {
		                return this.y > 5 ? this.point.name : null;
		            },
		            color: '#ffffff',
		            distance: -30
		        }
		    }, {
		        name: 'Versions',
		        data: versionsData,
		        size: '100%',
		        innerSize: '80%',
		        dataLabels: {
		            formatter: function () {
		                // display only if larger than 1
		                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
		                    this.y + '%' : null;
		            }
		        },
		        id: 'versions'
		    }],
		    responsive: {
		        rules: [{
		            condition: {
		                maxWidth: 400
		            },
		            chartOptions: {
		                series: [{
		                    id: 'versions',
		                    dataLabels: {
		                        enabled: false
		                    }
		                }]
		            }
		        }]
		    },
		     credits: {
			    enabled: false
			 },
		});

		// Create the chart 2
		Highcharts.chart('container3', {
		    chart: {
		        type: 'pie'
		    },
		    title: {
		        text: '',
		    },
		    yAxis: {
		        title: {
		            text: ''
		        }
		    },
		    plotOptions: {
		        pie: {
		            shadow: false,
		            center: ['50%', '50%'],
		             borderColor: '#e1e1e1',
		             showInLegend: true,
		             dataLabels: {
	                    enabled: false
	                }
		        }
		    },
		    tooltip: {
		        valueSuffix: '%'
		    },
		    series: [{
		        name: 'Browsers',
		        data: browserData,
		        size: '80%',
		        innerSize:'70%',
		        dataLabels: {
		            formatter: function () {
		                return this.y > 5 ? this.point.name : null;
		            },
		            color: '#ffffff',
		            distance: -30
		        }
		    }, {
		        name: 'MOU',
		        data: versionsData,
		        size: '100%',
		        innerSize: '80%',
		        dataLabels: {
		            formatter: function () {
		                // display only if larger than 1
		                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
		                    this.y + '%' : null;
		            }
		        },
		        id: 'versions'
		    }],
		    responsive: {
		        rules: [{
		            condition: {
		                maxWidth: 400
		            },
		            chartOptions: {
		                series: [{
		                    id: 'versions',
		                    dataLabels: {
		                        enabled: false
		                    }
		                }]
		            }
		        }]
		    },
		     credits: {
			    enabled: false
			 },
		});
		// Create the chart 2
		Highcharts.chart('container4', {
		    chart: {
		        type: 'pie'
		    },
		    title: {
		        text: '',
		    },
		    yAxis: {
		        title: {
		            text: ''
		        }
		    },
		    plotOptions: {
		        pie: {
		            shadow: false,
		            center: ['50%', '50%'],
		             borderColor: '#e1e1e1',
		             showInLegend: true,
		             dataLabels: {
	                    enabled: false
	                }
		        }
		    },
		    tooltip: {
		        valueSuffix: '%'
		    },
		    series: [{
		        name: 'Browsers',
		        data: browserData,
		        size: '80%',
		        innerSize:'70%',
		        dataLabels: {
		            formatter: function () {
		                return this.y > 5 ? this.point.name : null;
		            },
		            color: '#ffffff',
		            distance: -30
		        }
		    }, {
		        name: 'Versions',
		        data: versionsData,
		        size: '100%',
		        innerSize: '80%',
		        dataLabels: {
		            formatter: function () {
		                // display only if larger than 1
		                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
		                    this.y + '%' : null;
		            }
		        },
		        id: 'versions'
		    }],
		    responsive: {
		        rules: [{
		            condition: {
		                maxWidth: 400
		            },
		            chartOptions: {
		                series: [{
		                    id: 'versions',
		                    dataLabels: {
		                        enabled: false
		                    }
		                }]
		            }
		        }]
		    },
		     credits: {
			    enabled: false
			 },
		});
})

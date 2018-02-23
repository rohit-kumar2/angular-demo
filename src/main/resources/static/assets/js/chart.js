$(function () {
  var chart1;
  var chart2;
  var chart3;
  var controllingChart;
  var paddedHourlyCategories = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']; 
  var hourlyCategories=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];


  $(document).ready(function () {

    //catch mousemove event and have all 3 charts' crosshairs move along indicated values on x axis
    function syncronizeCrossHairs(chart) {
      var container = $(chart.container),
       offset = container.offset(),
       x, y, isInside, report;

       container.mousemove(function(evt) {

       x = evt.clientX - chart.plotLeft - offset.left;
       y = evt.clientY - chart.plotTop - offset.top;
       var xAxis = chart.xAxis[0];
       //remove old plot line and draw new plot line (crosshair) for this chart
       var xAxis1 = chart1.xAxis[0];
       xAxis1.removePlotLine("myPlotLineId");
       xAxis1.addPlotLine({
       value: chart.xAxis[0].translate(x, true),
       width: 2,
       color: 'blue',
       //dashStyle: 'dash',
       id: "myPlotLineId"
       });
       //remove old crosshair and draw new crosshair on chart2
       var xAxis2 = chart2.xAxis[0];
       xAxis2.removePlotLine("myPlotLineId");
       xAxis2.addPlotLine({
       value: chart.xAxis[0].translate(x, true),
       width: 2,
       color: 'blue',
       //dashStyle: 'dash',
       id: "myPlotLineId"
       });

       var xAxis3 = chart3.xAxis[0];
       xAxis3.removePlotLine("myPlotLineId");
       xAxis3.addPlotLine({
       value: chart.xAxis[0].translate(x, true),
       width: 2,
       color: 'blue',
       //dashStyle: 'dash',
       id: "myPlotLineId"
        }); 
       });       
    }  

    labelFormatter = function(category){
              if(category.value['parent'] != null){
                if(category.value['name'] == '0' || category.value['name'] == '24'){
                  return '';
                }else if(category.value['name'] == '6'){
                  return '6am'; 
                }else if(category.value['name'] == '12'){
                  return '12pm';  
                }else if(category.value['name'] == '18'){
                  return '6pm';
                }else{
                  return category.value['name']  ;
                }
              }
              else{
                return category.value;
              }
            }

    $(document).ready(function () {

      var myPlotLineId = "myPlotLine";
      chart1 = new Highcharts.Chart({
        chart: {
          renderTo: 'radioChart',
          type: 'column',
          zoomType: 'x',
          borderColor: '#003399',
          borderWidth: 1,
          isZoomed: false
        },
        exporting: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        title: {
          text: 'November'
        },
        subtitle: {
          text: '(MOU Usage)'
        },
        xAxis: {
          tickColor:'rgba(105,105,105,0.07)',
          tickmarkPlacement: 'on',
          labels: {
            enabled:true,
            step: 6,
            formatter:function(){
              return labelFormatter(this);
            }
          },
          categories: [
            {
              name: '22nd',
              categories: paddedHourlyCategories

            }, {
              name: '23rd',
              categories: hourlyCategories

            }, {
              name: '24th',
              categories: hourlyCategories

            }, {
              name: '25th',
              categories: hourlyCategories

            }, {
              name: '26th',
              categories: hourlyCategories

            }, {
              name: '27th',
              categories: hourlyCategories

            }, {
              name: '28th',
              categories: hourlyCategories

            }],
          opposite: true,
          title: {
            enabled: true,
            text: 'Days'
          },
          events: {

            afterSetExtremes: function () {

              if (!this.chart.options.chart.isZoomed) {
                var xMin = this.chart.xAxis[0].min;
                var xMax = this.chart.xAxis[0].max;
                chart2.options.chart.isZoomed = true;
                chart3.options.chart.isZoomed = true;
                chart2.xAxis[0].setExtremes(xMin, xMax, true);
                chart3.xAxis[0].setExtremes(xMin, xMax, true);
                chart2.options.chart.isZoomed = false;
                chart3.options.chart.isZoomed = false;
              }
            }


          },
          plotLines: [{
            color: 'rgba(255,0,0,0.5)',
            width: 2.5,
            dashStyle: 'Short',
            zIndex: 5,
            value: 25 // Need to set this probably as a var.
          }, {
            color: 'rgba(255,0,0,0.5)',
            width: 2.5,
            dashStyle: 'Short',
            zIndex: 5,
            value: 50 // Need to set this probably as a var.
          }]
        },
        yAxis: {
          endOnTick: false,
          tickInterval: 36,
          max: 36,
          title: {
            text: 'Time (sec)'
          }
        },
        tooltip: {
          formatter: function () {
            return '' + this.x + ' km, ' + this.y + ' km';
          }
        },
        plotOptions: {
          column: {
            stacking: 'normal'
          }
        },
        series: [
          {
            name: 'dummy_data',
            //put this in so that x axis is consistent between 3 charts to begin with
            color: 'rgba(211, 211, 211, .5)',
            showInLegend: false,
            data: [36,31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23,
             21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26,
              19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16,
               23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11,
                26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31,
                 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21,
                  11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19]
          },
          {
            name: 'Group 1',
            color: 'rgba(105, 105, 105, 0.7)',
            showInLegend: false,
            data: [0,5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13,
             15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10,
              17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20,
               13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25,
                10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5,
                 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15,
                  25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17]

          }
        ]

      }, function (chart) { //add this function to the chart definition to get synchronized crosshairs
        syncronizeCrossHairs(chart);
      });

      chart2 = new Highcharts.Chart({
        chart: {
          renderTo: 'radioChart2',
          type: 'column',
          zoomType: 'x',
          borderColor: '#003399',
          borderWidth: 1,
          isZoomed: false
        },
        exporting: {enabled: false},
        credits: {
          enabled: false
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          tickColor:'rgba(105,105,105,0.07)',
          tickmarkPlacement: 'on',
          labels: {
            enabled:true,
            step: 6,
            formatter:function(){
              return labelFormatter(this);
            }
          },
          categories: [
            {
              name: '22nd',
              categories: paddedHourlyCategories

            }, {
              name: '23rd',
              categories: hourlyCategories

            }, {
              name: '24th',
              categories: hourlyCategories

            }, {
              name: '25th',
              categories: hourlyCategories

            }, {
              name: '26th',
              categories: hourlyCategories

            }, {
              name: '27th',
              categories: hourlyCategories

            }, {
              name: '28th',
              categories: hourlyCategories

            }],
          opposite: true,
          title: {
            enabled: true,
            text: 'Days'
          },
          startOnTick: false,
          endOnTick: false,
          showLastLabel: true,
          events: {
            afterSetExtremes: function () {
              if (!this.chart.options.chart.isZoomed) {
                var xMin = this.chart.xAxis[0].min;
                var xMax = this.chart.xAxis[0].max;
                chart1.options.chart.isZoomed = true;
                chart3.options.chart.isZoomed = true;
                chart1.xAxis[0].setExtremes(xMin, xMax, true);
                chart3.xAxis[0].setExtremes(xMin, xMax, true);
                chart1.options.chart.isZoomed = false;
                chart3.options.chart.isZoomed = false;

              }
            }
          },
          plotLines: [{
            color: 'rgba(255,0,0,0.5)',
            width: 2.5,
            dashStyle: 'Short',
            zIndex: 5,
            value: 25 // Need to set this probably as a var.
          }, {
            color: 'rgba(255,0,0,0.5)',
            width: 2.5,
            dashStyle: 'Short',
            zIndex: 5,
            value: 50 // Need to set this probably as a var.
          }]
        },
        yAxis: {
          endOnTick: false,
          tickInterval: 36,
          gridLineColor: '#197F07',
          gridLineWidth: 1,
          max: 36,
          title: {
            text: 'Time (sec)'
          }
        },
        tooltip: {
          formatter: function () {
            return '' + this.x + ' km, ' + this.y + ' km';
          }
        },

        plotOptions: {
          column: {
            stacking: 'normal'
          }
        },
        series: [{
            name: 'dummy_data',
            //put this in so that x axis is consistent between 3 charts to begin with
            color: 'rgba(211, 211, 211, .5)',
            showInLegend: false,
            data: [36,31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23,
             21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26,
              19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16,
               23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11,
                26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31,
                 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21,
                  11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19]
          },
          {
            name: 'Group 2',
            color: 'rgba(105, 105, 105, 0.7)',
            showInLegend: false,
            data: [0,5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13,
             15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10,
              17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20,
               13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25,
                10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5,
                 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15,
                  25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17]

          }
        ]
      }, function (chart) { //add this function to the chart definition to get synchronized crosshairs
        //this function needs to be added to each syncronized chart
        syncronizeCrossHairs(chart);

      });

      chart3 = new Highcharts.Chart({
        chart: {
          renderTo: 'radioChart3',
          type: 'column',
          zoomType: 'x',
          borderColor: '#003399',
          borderWidth: 1,
          isZoomed: false
        },
        exporting: {enabled: false},
        credits: {
          enabled: false
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          tickColor:'rgba(105,105,105,0.07)',
          tickmarkPlacement: 'on',
          labels: {
            enabled:true,
            step: 6,
            formatter:function(){
              return labelFormatter(this);
            }
          },
          categories: [
            {
              name: '22nd',
              categories: paddedHourlyCategories

            }, {
              name: '23rd',
              categories: hourlyCategories

            }, {
              name: '24th',
              categories: hourlyCategories

            }, {
              name: '25th',
              categories: hourlyCategories

            }, {
              name: '26th',
              categories: hourlyCategories

            }, {
              name: '27th',
              categories: hourlyCategories

            }, {
              name: '28th',
              categories: hourlyCategories

            }],
          opposite: true,
          title: {
            enabled: true,
            text: 'Days'
          },
          startOnTick: false,
          endOnTick: false,
          showLastLabel: true,
          events: {
            afterSetExtremes: function () {
              if (!this.chart.options.chart.isZoomed) {
                var xMin = this.chart.xAxis[0].min;
                var xMax = this.chart.xAxis[0].max;
                chart1.options.chart.isZoomed = true;
                chart2.options.chart.isZoomed = true;
                chart1.xAxis[0].setExtremes(xMin, xMax, true);
                chart2.xAxis[0].setExtremes(xMin, xMax, true);
                chart1.options.chart.isZoomed = false;
                chart2.options.chart.isZoomed = false;

              }
            }
          },
          plotLines: [{
            color: 'rgba(255,0,0,0.5)',
            width: 2.5,
            dashStyle: 'Short',
            zIndex: 5,
            value: 25 // Need to set this probably as a var.
          }, {
            color: 'rgba(255,0,0,0.5)',
            width: 2.5,
            dashStyle: 'Short',
            zIndex: 5,
            value: 50 // Need to set this probably as a var.
          }]
        },
        yAxis: {
          endOnTick: false,
          tickInterval: 36,
          gridLineColor: '#197F07',
          gridLineWidth: 1,
          max: 36,
          title: {
            text: 'Time (sec)'
          }
        },
        tooltip: {
          formatter: function () {
            return '' + this.x + ' km, ' + this.y + ' km';
          }
        },

        plotOptions: {
          column: {
            stacking: 'normal'
          }
        },
        series: [{
            name: 'dummy_data',
            //put this in so that x axis is consistent between 3 charts to begin with
            color: 'rgba(211, 211, 211, .5)',
            showInLegend: false,
            data: [36,31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23,
             21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26,
              19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16,
               23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11,
                26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31,
                 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21,
                  11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19, 31, 16, 23, 21, 11, 26, 19]
          },
          {
            name: 'Group 3',
            color: 'rgba(105, 105, 105, 0.7)',
            showInLegend: false,
            data: [0,5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13,
             15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10,
              17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20,
               13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25,
                10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5,
                 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15,
                  25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17, 5, 20, 13, 15, 25, 10, 17]

          }
        ]
      }, function (chart) { //add this function to the chart definition to get synchronized crosshairs
        //this function needs to be added to each syncronized chart
        syncronizeCrossHairs(chart);

      });


    });

  });

});

$( document ).ready(function() {

      var myChart = Highcharts.chart('chart', {

          chart: {type: 'areaspline',
                  spacing: [0 ,0 ,0 ,0],
                  margin: [100, -50, 0, -50]},
          legend: {enabled: false},
          title: {text: null},

          xAxis: {categories: [0, 1, 2, 3, 4, 5, 6, 7],
                  offset: 0},

          yAxis: {endOnTick: false,
                  tickAmount: 3,
                  max: 900,
                  title: {text: null},
                  offset: -150,
                  zIndex: -100},
          tooltip: {
            useHTML: true,
            borderColor: 'transparent',
            formatter: function() {
                if (this.x > 0) {
                    var s = '<span class="tooltip-value">'+this.y+'</span>';
                    return s;
                }
                else return false;
                }
              },
          plotOptions: {
              series: {
                marker: {enabled: false,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        states: {
                        hover: {
                            fillColor: '#e9ac8f',
                            lineColor: 'rgba(0,0,0, .6)',
                            radius: 4,
                            lineWidth: 4
                        }
                    }
                        },
                lineColor: '#e9ac8f'}
                       },
          series: [{
            data: [{y: 200,
                      marker: {enabled: false,
                      states:{
                        hover:{enabled: false},
                        select:{enabled: false}
                      }}},
                   {y: 220},
                   {y: 300},
                   {y: 350},
                   {y: 452},
                   {y: 350},
                   {y: 300},
                   {y: 220}
                  ]
        }]
      });
});

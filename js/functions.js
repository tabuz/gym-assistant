var chartCardio,
    chartHeartrate,
    chartDistance;
$( document ).ready(function() {
      chartCardio = Highcharts.chart('chart-cardio', {

            chart: {type: 'areaspline',
                  spacing: [0 ,0 ,0 ,0],
                  margin: [100, -50, 0, -50]},
            legend: {enabled: false},
            title: {text: null},

            xAxis: {categories: [0, 1, 2, 3, 4, 5, 6, 7, 8],
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
                if (this.x > 0 && this.x < 8) {
                    var s = '<div class="tooltip-kcal"><span class="tooltip-value">'+this.y+'</span><span class="tooltip-desc">KCAL<br />OCT, '+this.x+'</span></div>';
                    $('.stat-kcal span').html(this.y);
                    $('.stat-day span').html(this.x);
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
                            radius: 5,
                            lineWidth: 5
                        }
                        }
                        },
                states: {
                      hover:{
                          halo: false
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
                   {y: 220},
                   {y: 220,
                     marker: {enabled: false,
                     states:{
                       hover:{enabled: false},
                       select:{enabled: false}
                       }}}
                  ]
        }]
      });
      chartHeartrate = Highcharts.chart('chart-heartrate', {

          chart: {type: 'areaspline',
                  spacing: [0 ,0 ,0 ,0],
                  margin: [100, -50, 0, -50]},
          legend: {enabled: false},
          title: {text: null},

          xAxis: {categories: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                  offset: 0},

          yAxis: {endOnTick: false,
                  tickAmount: 3,
                  max: 150,
                  title: {text: null},
                  offset: -150,
                  zIndex: -100},
          tooltip: {
            useHTML: true,
            borderColor: 'transparent',
            formatter: function() {
                if (this.x > 0 && this.x < 8) {
                    var s = '<div class="tooltip-kcal"><span class="tooltip-value">'+this.y+'</span><span class="tooltip-desc">/ MIN<br />OCT, '+this.x+'</span></div>';
                    $('.stat-heartrate span').html(this.y);
                    $('.stat-day span').html(this.x);
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
                            radius: 5,
                            lineWidth: 5
                        }
                        }
                        },
                states: {
                      hover:{
                          halo: false
                      }
                },
                lineColor: '#e9ac8f'}
                       },
          series: [{
            data: [{y: 110,
                      marker: {enabled: false,
                      states:{
                        hover:{enabled: false},
                        select:{enabled: false}
                      }}},
                   {y: 120},
                   {y: 125},
                   {y: 118},
                   {y: 119},
                   {y: 122},
                   {y: 118},
                   {y: 120},
                   {y: 120,
                     marker: {enabled: false,
                     states:{
                       hover:{enabled: false},
                       select:{enabled: false}
                       }}}
                  ]
        }]
      });
      chartDistance = Highcharts.chart('chart-distance', {

          chart: {type: 'areaspline',
                  spacing: [0 ,0 ,0 ,0],
                  margin: [100, -50, 0, -50]},
          legend: {enabled: false},
          title: {text: null},

          xAxis: {categories: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                  offset: 0},

          yAxis: {endOnTick: false,
                  tickAmount: 3,
                  max: 10,
                  title: {text: null},
                  offset: -150,
                  zIndex: -100},
          tooltip: {
            useHTML: true,
            borderColor: 'transparent',
            formatter: function() {
                if (this.x > 0 && this.x < 8) {
                    var s = '<div class="tooltip-kcal"><span class="tooltip-value">'+this.y+'</span><span class="tooltip-desc">KM<br />OCT, '+this.x+'</span></div>';
                    $('.stat-distance span').html(this.y);
                    $('.stat-day span').html(this.x);
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
                            radius: 5,
                            lineWidth: 5
                        }
                        }
                        },
                states: {
                      hover:{
                          halo: false
                      }
                },
                lineColor: '#e9ac8f'}
                       },
          series: [{
            data: [{y: 2.54,
                      marker: {enabled: false,
                      states:{
                        hover:{enabled: false},
                        select:{enabled: false}
                      }}},
                   {y: 3.14},
                   {y: 3.58},
                   {y: 4.20},
                   {y: 5.5},
                   {y: 4.28},
                   {y: 3.56},
                   {y: 3.10},
                   {y: 2.9,
                     marker: {enabled: false,
                     states:{
                       hover:{enabled: false},
                       select:{enabled: false}
                       }}}
                  ]
        }]
      });

      $('#option-toggle').change(function(){
        var value = $(this).val();
        $('[id^="chart-"]').removeClass('chart-active');
        $('#chart-'+value).addClass('chart-active');

      });
});

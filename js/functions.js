$(document).ready(function () {

            // prepare chart data
            var  sampleData = [
                    { Day:'Monday', KM:310, KCAL:340, Hearbeat: 120},
                    { Day:'Tuesday', KM:420, KCAL:450, Hearbeat: 112},
                    { Day:'Wednesday', KM:260, KCAL:250, Hearbeat: 118},
                    { Day:'Thursday', KM:350, KCAL:300, Hearbeat: 117},
                    { Day:'Friday', KM:400, KCAL:560, Hearbeat: 120},
                    { Day:'Saturday', KM:300, KCAL:300, Hearbeat: 110},
                    { Day:'Sunday', KM:450, KCAL:700, Hearbeat: 120}
                ];

            // prepare jqxChart settings
var settings = {
source: sampleData,
categoryAxis:
  {
    visible: false,
  },
title:
  {
    visible: false,
  },
description:
  {
    visible: false,
  },
padding: { left: 0, top: 0, right: 0, bottom: 0 },
colorScheme: 'scheme11',
seriesGroups:
    [{
      type: 'splinearea',
      useGradient: false,
      valueAxis:
      {
        visible: false,
        baselineValue: 0,
        showGridLines: false,
        minValue: 0,
        maxValue: 900,
        unitInterval: 450,
      },
      series:
      [
        {dataField: 'KCAL', dataText: 'KCAL'},
        {dataField: 'KM', dataText: 'KM'},
      ]
    }]

};

            // select the chartContainer DIV element and render the chart.
            $('#chart').jqxChart(settings);
            $('#chart').jqxChart({backgroundColor:'transparent', borderLineColor: 'transparent'});
            $('#chart').jqxChart('refresh');
        });

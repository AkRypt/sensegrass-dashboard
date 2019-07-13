// Pie Chart
// anychart.onDocumentReady(function() {
//     var data = [
//         {x: "SoilPh", value: 35.8},
//         {x: "Soil Humidity", value: 15.6},
//         {x: "NITROGEN", value: 8.3},
//         {x: "NDVI", value: 19.2},
//         {x: "AMMONIA", value: 10.8},
//         {x: "Water Stress", value: 10.3}
//     ];
//     // create chart
//     var chart = anychart.pie();
//     //set chart title
//     chart.title("SenseGrass Pie Chart");
//     //add data
//     chart.data(data);
//     // legend position and axis
//     chart.legend().position('right');
//     chart.legend().itemsLayout('vertical');
//     //display in container
//     chart.container('myChart');
//     chart.draw();
// });

window.onload = function () {
	var chart = new CanvasJS.Chart("myChart",
	{
        theme: "light2",
		title:{
			text: "SenseGrass Pie Chart"
		},
		legend: {
			maxWidth: 350,
			itemWidth: 120
		},
		data: [
		{
			type: "pie",
            showInLegend: true,
            toolTipContent: "{y} - #percent %",
			yValueFormatString: "#,##0,,.## Million",
			legendText: "{indexLabel}",
			dataPoints: [
				{ y: 35.8, indexLabel: "SoilPh" },
				{ y: 15.6, indexLabel: "Soil Humidity" },
				{ y: 8.3, indexLabel: "NITROGEN" },
				{ y: 19.2, indexLabel: "NDVI"},
				{ y: 10.8, indexLabel: "AMMONIA" },
				{ y: 10.3, indexLabel: "Water Stress"}
			]
		}
		]
	});
    chart.render();
}
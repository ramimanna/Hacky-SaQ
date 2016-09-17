// initial data..
var x = [];
var y = [];
var z = [];

// creating data objects..
var data = {
	x: x,
	y: y,
	z: z,
	type: 'scatter3d',
	mode: 'markers',
	marker: {
		color: 'rgb(0, 0, 255)',
		size: 2,
		symbol: 'circle'
	}
};

// Plotting the surfaces..
Plotly.newPlot('myDiv', [data]);

setInterval(function () {
	x.push(Math.random() * 50);
	y.push(Math.random() * 50);
	z.push(Math.random());
	
	Plotly.redraw('myDiv');
}, 1000);

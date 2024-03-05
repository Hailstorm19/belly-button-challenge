// Get the url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});


d3.json(url).then(function(data){
  const otu_id = []
  for (const id of data.samples[0].otu_ids) {
    otu_id.push('OTU ' + id);
  }

  const sample10 = data.samples[0].sample_values.slice(0,10)
  otu10 = otu_id.slice(0,10)
  console.log(otu10.reverse())
  console.log(sample10)


// Trace1 for the Greek Data
let trace1 = {
  x: sample10,
  y: otu10.reverse(),
  type: "bar",
  orientation: "h"
};

// Data array
let data2 = [trace1];

// Apply a title to the layout
let layout = {
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("bar", data2, layout);

let trace2 = {
  x: otu10,
  y: sample10,
  mode: 'markers',
  marker: {
    size: sample10
  }
};

var data3 = [trace2];

let layout2 = {
  title: 'Marker Size',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('gauge', data3, layout2);

});

  
  
// Buble chart
console.log(data);

// Trace for the Greek Data
let names = data.map((row) => {
  return row.greekName
});

// Data trace array
let trace1 = {
  x: data.map(row => row.greekName),
  y: data.map(row => row.greekSearchResults),
  type: "bar"
};

let traceData = [trace1];

// Apply the group barmode to the layout
let layout = {
  title: "Greek gods search results"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData,layout);
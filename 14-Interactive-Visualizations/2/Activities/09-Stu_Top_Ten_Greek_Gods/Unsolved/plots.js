// Sort the data by Greek search results descending
let descendingGreekSearch = data.sort((a,b) => b.greekSearchResults - a.greekSearchResults)

// Slice the first 10 objects for plotting
let slicedData = descendingGreekSearch.slice(0, 10)

// Reverse the array to accommodate Plotly's defaults
let reversedData = slicedData.reverse();

// Trace for the Greek Data
let trace1 = {
  x: reversedData.map(row => row.greekSearchResults),
  y: reversedData.map(row => row.greekName),
  type: 'bar',
  text: reversedData.map(row => row.greekName),
  name: 'Greek',
  orientation: "h"
}

// Data array
let traceData = [trace1]

// Apply a title to the layout
let layout = {
  title: "Greek gods search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);
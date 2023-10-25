console.log(data);

// Create a custom function to return Roman gods with more than 1 million search results
// ES5 syntax
/*
function popular(roman){
  return roman.romanSearchResults > 1000000;
}
*/

// ES6 syntax
let popular = (roman) => {
  return roman.romanSearchResults > 100000000;
}

// Call the custom function with filter()
let popularRomans = data.filter(popular);

// Trace for the Roman Data
let trace1 = {
  x: popularRomans.map(item => item.romanName),
  y: popularRomans.map(row => row.romanSearchResults),
  type: 'bar'
}

// Data trace array
let traceData = [trace1]

// Apply title to the layout
let layout = {
  title: "Popular Roman god search results"
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData,layout)
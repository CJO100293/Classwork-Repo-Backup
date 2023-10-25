// An array of each country's numbers
let australia = Object.values(data.australia);
let brazil = Object.values(data.brazil);
let uk = Object.values(data.uk);
let mexico = Object.values(data.mexico);
let singapore = Object.values(data.singapore);
let southAfrica = Object.values(data.southAfrica);

// Create an array of category labels
let labels = Object.keys(data.australia);

// @ADD YOUR CODE HERE
function init(){
  let data = [{
    values: australia,
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

d3.selectAll("#selDataset").on("change", getData);

function getData(){
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  console.log(dataset);

  // Initialize an empty array for the country's data
  let data = [];

  if (dataset == 'australia') {
    data = australia;
  }
  else if (dataset == 'brazil') {
      data = brazil;
  }
  else if (dataset == 'uk') {
      data = uk;
  }
  else if (dataset == 'mexico') {
    data = mexico;
  }
  else if (dataset == 'singapore') {
      data = singapore;
  }
  else if (dataset == 'southAfrica') {
    data = southAfrica;
  }

  console.log(data);
  Plotly.restyle("pie", "values", [data])

}


init();
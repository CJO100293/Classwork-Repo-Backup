const url = "https://api.spacexdata.com/v2/launchpads";
//const url = "http://example.com"
let data_dict = null;

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  // Do all your visualization changes within the callback function if possible
  data_dict = data;
  console.log(data);

  console.log("data_dict within callback:", data_dict);
});

console.log("data_dict outside of callback:", data_dict);
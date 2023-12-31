// Create a map object.
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// City markers
let cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: 8550405
},
{
  location: [41.8781, -87.6298],
  name: "Chicago",
  population: 2720546
},
{
  location: [29.7604, -95.3698],
  name: "Houston",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: 446599
}
];
// Add code to create a marker for each of the following cities and to add it to the map.

// newyork;
// chicago;
// houston;
// la;
// omaha;
/*
for (let i = 0; i < cities.length; i++){
  let city = cities[i];

  L.marker(city.location, {
    draggable: false,
    title: city.name
  }).bindPopup(`<h1>${city.name}</h1> <hr> <h3>Population: ${city.population}</h3>`).addTo(myMap)
}
*/

cities.forEach(function(city){
  L.marker(city.location, {
    draggable: false,
    title: city.name
  }).bindPopup(`<h1>${city.name}</h1> <hr> <h3>Population: ${city.population}</h3>`).addTo(myMap)
});


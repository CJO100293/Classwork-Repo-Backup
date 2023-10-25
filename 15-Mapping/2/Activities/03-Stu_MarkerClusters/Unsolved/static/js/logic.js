// Creating the map object
let myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// To do:

// Store the API query variables.
let baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
// Add the dates in the ISO formats
let date = "$where=created_date between '2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
// Add the complaint type.
let complaint = "&complaint_type=Rodent";
// Add a limit.
let limit = "&$limit=10000";


// Assemble the API query URL.
let url = baseURL + date + complaint + limit;

// Get the data with d3.
d3.json(url).then(function(response){
  console.log("response:")
  console.log(response)
  // Create a new marker cluster group.
  let markers = L.markerClusterGroup();

  // Loop through the data.
  response.forEach(place => {
    let location = place.location;

    if(location){ // We want to ensure there are no nulls.
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]]).bindPopup(`<h1>${place.descriptor}</h1>`));
    }
  });

  myMap.addLayer(markers);
    // Set the data location property to a variable.

    // Check for the location property.

      // Add a new marker to the cluster group, and bind a popup.

  // Add our marker cluster layer to the map.

});
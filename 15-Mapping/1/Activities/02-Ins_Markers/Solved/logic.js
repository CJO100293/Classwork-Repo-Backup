// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
let myMap = L.map("map", {
  center: [34.0200393, -118.7413687],
  zoom: 10
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method.
let marker = L.marker([34.0200393, -118.7413687], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);

// Binding a popup to our marker
marker.bindPopup("Hello There!");

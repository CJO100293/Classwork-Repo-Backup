let newYorkCoords = [40.73, -74.0059];
let mapZoomLevel = 12;

// Create the createMap function.
// bikeStations is a layer
function createMap(bikeStations){
  // Initialize an object that contains icons for each layer group.
let icons = {
  COMING_SOON: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  EMPTY: L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  OUT_OF_ORDER: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "penta"
  }),
  LOW: L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  }),
  NORMAL: L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "green",
    shape: "circle"
  })
};

  // Create the tile layer that will be the background of our map.
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Create a baseMaps object to hold the lightmap layer.
  let baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the bikeStations layer.
  let overlayMaps = {
    "Coming Soon": bikeStations.COMING_SOON,
    "Empty Stations": bikeStations.EMPTY,
    "Low Stations": bikeStations.LOW,
    "Healthy Stations": bikeStations.NORMAL,
    "Out of Order": bikeStations.OUT_OF_ORDER
  };

  // Create the map object with options.
  let map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [streetmap, bikeStations]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps,  {
    collapsed: false
  }).addTo(map);
}
// Create the createMarkers function.
function createMarkers(response){
  d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_status.json").then(function(statusRes) {
    // Pull the "stations" property from response.data.

    let updatedAt = response.last_updated;
    let stationStatus = statusRes.data.stations;
    let stationInfo = response.data.stations;

    console.log("stationsStatus:")
    console.log(stationStatus)

    console.log("StationInfo:")
    console.log(stationInfo)

    // Initialize all the LayerGroups that we'll use.
    let layers = {
      COMING_SOON: new L.LayerGroup(),
      EMPTY: new L.LayerGroup(),
      LOW: new L.LayerGroup(),
      NORMAL: new L.LayerGroup(),
      OUT_OF_ORDER: new L.LayerGroup()
    };

    // Create an object to keep the number of markers in each layer.
    let stationCount = {
      COMING_SOON: 0,
      EMPTY: 0,
      LOW: 0,
      NORMAL: 0,
      OUT_OF_ORDER: 0
    };

    // Initialize stationStatusCode, which will be used as a key to access the appropriate layers, icons, and station count for the layer group.
    let stationStatusCode;

    for (let i = 0; i < stationInfo.length;  i++){
      let station = Object.assign({}, stationInfo[i], stationStatus[i])

      // If a station is listed but not installed, it's coming soon.
      if (!station.is_installed) {
        stationStatusCode = "COMING_SOON";
      }
      // If a station has no available bikes, it's empty.
      else if (!station.num_bikes_available) {
        stationStatusCode = "EMPTY";
      }
      // If a station is installed but isn't renting, it's out of order.
      else if (station.is_installed && !station.is_renting) {
        stationStatusCode = "OUT_OF_ORDER";
      }
      // If a station has less than five bikes, it's status is low.
      else if (station.num_bikes_available < 5) {
        stationStatusCode = "LOW";
      }
      // Otherwise, the station is normal.
      else {
        stationStatusCode = "NORMAL";
      }
      // Update the station count.
      stationCount[stationStatusCode]++;

      // Create a new marker with the appropriate icon and coordinates.
      let newMarker = L.marker([station.lat, station.lon], {
        icon: icons[stationStatusCode]
      });

      // Add the new marker to the appropriate layer.
      newMarker.addTo(layers[stationStatusCode]);

      // Bind a popup to the marker that will  display on being clicked. This will be rendered as HTML.
      newMarker.bindPopup(station.name + "<br> Capacity: " + station.capacity + "<br>" + station.num_bikes_available + " Bikes Available");
    }

    console.log(stationCount)
    

    // Initialize an array to hold the bike markers.
    let bikeMarkers = [];


    // Loop through the stations array.
    
    console.log("statusRes:")
    console.log(statusRes);

    // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
    createMap(L.layerGroup(newMarkers));
  });




  

  

    


}

// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);
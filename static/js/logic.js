var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create map object

var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
});

// Add tilelayer

var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

//   Access the geojason

d3.json(url, function(data) {
    createFeatures(data.features);
});

function colorMag(magnitude) {
// switch function here matches magnitude with color

}

// Define createFeatures
function createFeatures(earthquakeData){
    // access the features and layers

    // Define function onEachFeature
        // add circles for each earthquake - on each feature

            // L.circle([lat, long], {
        //   color: "green",
        //   fillColor: colorMag(mag),
        //   fillOpacity: 0.75,
        //   radius: mag*somethingthatshowsuponmap
        // }).addTo(myMap);
        // In this process, you also need to bind a popup
    var earthquakes = L.geoJson(earthquakeData, {
        onEachFeature: onEachFeature
    });
    // add earthquake layer to map
}

// Create Legend

// Change all the code below to work with magnitude
// https://leafletjs.com/examples/choropleth/
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
    // insert the magnitudes below
        mag = [0, 10, 20, 50, 100, 200, 500, 1000], 
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < mag.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colorMag(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);





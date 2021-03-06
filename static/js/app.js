// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("samples.json").then( (importedData)=>{
    console.log(importedData);
    var data = importedData;

  // Sort the data array using the greekSearchResults value
  data.sort(function(a, b) {
    return parseFloat(b.sample_values) - parseFloat(a.sample_values);
  });

  // Slice the first 10 objects for plotting
  data = data.slice(0, 10);

  // Reverse the array due to Plotly's defaults
  data = data.reverse();

   // Trace1 for the Greek Data
 var step1 = {
    x: data.map(row => row.sample_values),
    y: data.map(row => row.otu_ids),
    text: data.map(row => row.otu_ids),
    name: "Top 10 OTUs",
    type: "bar",
    orientation: "h"
  };
  
  // data
  var chartData = [step1];

  // Apply the group bar mode to the layout
  var layout = {
    title: "Top 10 OTUs",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  // Render the plot to the div tag with id "app"
  Plotly.newPlot("app", chartData, layout);
});

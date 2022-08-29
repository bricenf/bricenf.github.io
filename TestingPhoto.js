// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

polygonSeries.data = [{
  "id": "US",
  "selected": true
}, {
  "id": "BR",
  "selected": true
}, {
  "id": "AU",
  "selected": true
}, {
  "id": "CN",
  "selected": true
}, {
  "id": "FR",
  "selected": true
}]

polygonSeries.exclude = ["AQ"];

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

polygonTemplate.adapter.add("fill", function(fill, target) {
  if (target.dataItem.dataContext && target.dataItem.dataContext.selected) {
    var pattern = new am4core.LinePattern();
    pattern.width = 10;
    pattern.height = 10;
    pattern.stroke = am4core.color("#367B25");
    pattern.strokeWidth = 1;
    pattern.rotation = 45;
    return pattern;
  }
  return fill;
});

polygonTemplate.adapter.add("stroke", function(fill, target) {
  if (target.dataItem.dataContext && target.dataItem.dataContext.selected) {
    return am4core.color("#367B25");
  }
  return fill;
});

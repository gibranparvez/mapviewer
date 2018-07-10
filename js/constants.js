constants = {
    osmAttributionString: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>'
};
landmarkIcons = {
    'Worship': L.icon({
      iconUrl: './png/church-silhouette.png',
      iconSize: [15,15]}),
    'Dwelling': L.icon({
      iconUrl: './png/house.png',
      iconSize: [15,15]}),
    'House': L.icon({
    iconUrl: './png/house.png',
    iconSize: [15,15]}),
    'School': L.icon({
      iconUrl: './png/school.png',
      iconSize: [15,15]}),
    'Farm': L.icon({
      iconUrl: './png/barn.png',
      iconSize: [15,15]}),
    'Industrial': L.icon({
        iconUrl: './png/factory.png',
        iconSize: [15,15]}),
    'Store': L.icon({
        iconUrl: './png/store.png',
        iconSize: [15,15]})
    
};
wmsServers = {
    'dulles1957':'http://li929-88.members.linode.com:8080/geoserver/wms?',
    'mapBoxCurrent':'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
};
bounds = {
    mapBounds: [[38.867781, -77.545538], [38.991571, -77.395592]],
    fuck: "you"
};

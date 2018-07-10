const map = L.map('map', {
    maxBounds: bounds.mapBounds,
    minZoom: 15
});
map.setView(new L.LatLng(38.937324, -77.447791), 18);

let layer1 = L.tileLayer.wms(wmsServers.dulles1957, {
  layers:'1957'
}).addTo(map);

let layer2 = L.tileLayer.wms(wmsServers.mapBoxCurrent, {
      attribution: constants.osmAttributionString,
      id: 'mapbox.streets'
}).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);

let landmarks = L.geoJSON(DA_Landmarks_1220, {
    pointToLayer: (feature,latlng) => {
    let label = `${String(feature.properties.Name)} (${String(feature.properties.Year)})`;
    let type = String(feature.properties.Type);
    let marker = new L.Marker(latlng, {
        icon:landmarkIcons[type],
        radius: 1,
    }).bindTooltip(label, {permanent: true, opacity: 0.7, className: "landmarks"}).openTooltip();
    
    marker.on('click', () => setDescription(feature) );
    return marker;
    }
});

function setDescription(feature){
	document.getElementById("desc_title").innerHTML = feature.properties.Name;
	document.getElementById("desc_built").innerHTML = feature.properties.Year;
	document.getElementById("desc_associated").innerHTML = feature.properties.Associated;
	console.log(feature);
}

map.on('dividermove', (e)=>{ console.log("yo")});

map.addLayer(landmarks);

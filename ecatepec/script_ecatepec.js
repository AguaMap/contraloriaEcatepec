// Resalta el botón del menú correspondiente a la página actual
document.addEventListener('DOMContentLoaded', function () {
  const pathname = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll('.menu a');
  
  menuItems.forEach(item => {
    if (item.getAttribute('href') === pathname) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Crear el mapa
  var map = L.map('mapa').setView([19.609723, -99.060042], 12); // Coordenadas centrales de Ecatepec con zoom inicial

  // Añadir capa base de OpenStreetMap
  var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Control de capas
  var baseMaps = {
    "OpenStreetMap": osm
  };

  var overlayMaps = {};

  // Añadir control de capas
  L.control.layers(baseMaps, overlayMaps).addTo(map);

  // Controles de zoom
  L.control.zoom({
    position: 'topright'
  }).addTo(map);

  // Añadir capa GeoJSON
  fetch('mun_ecatepec.geojson')
    .then(response => response.json())
    .then(data => {
      var geojsonLayer = L.geoJson(data, {
        style: {
          color: '#ff7800',
          weight: 2,
          opacity: 0.65
        }
      });

      // Añadir la capa GeoJSON al control de capas
      overlayMaps["Ecatepec"] = geojsonLayer;
      map.addLayer(geojsonLayer);
    })
    .catch(error => console.error(error));
});


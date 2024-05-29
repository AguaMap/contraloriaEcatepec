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

  // Añadir control de capas
  L.control.layers(baseMaps).addTo(map);

  // Controles de zoom
  L.control.zoom({
    position: 'topright'
  }).addTo(map);

  // Solo el mapa base por ahora
});

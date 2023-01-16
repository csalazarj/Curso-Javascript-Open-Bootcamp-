let marker, map;

function initMap() {
  // console.log("Inicializando...")

  // Empire state
  const posicion1 = {
    lat:  40.7484405,
    lng: -73.9856644,
  };
  // Sillicon Valley
  const posicion2 = {
    lat: 37.4429964,
    lng: -122.1545229,
  };
  // Torre Eiffel
  const posicion3 = {
    lat: 48.8583701,
    lng: 2.2944813,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: posicion1,
  });

  marker1 = new google.maps.Marker({
    position: posicion1,
    map,
    title: "Empire state",
  });
  marker2 = new google.maps.Marker({
    position: posicion2,
    map,
    title: "Sillicon Valley",
  });
  marker3 = new google.maps.Marker({
    position: posicion3,
    map,
    title: "Torre Eiffel",
  });

}

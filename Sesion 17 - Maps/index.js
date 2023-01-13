function initMap() {
  // console.log("Inicializando...")
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  const marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Posición Inicial",
  });
}

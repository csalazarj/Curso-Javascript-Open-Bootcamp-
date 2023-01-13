// localStorage.setItem("nombre", "Cristhian")
// localStorage.setItem("nombre", "Juan")

// console.log(localStorage.getItem("nombre"));

localStorage.setItem(
  "persona",
  JSON.stringify({ nombre: "Cristhian", edad: 24 })
);

// console.log(JSON.parse(localStorage.getItem("persona")));

// JSON.stringify => Convierte un objeto/array en string
// JSON.parse => Convierte un objeto/array de stringify en objeto de JS

localStorage.removeItem("nombre");

sessionStorage.setItem("nombre-sesion", "Cristhian");

/* Coockies */
document.cookie = "nombreCookie=Cristhian";
document.cookie =
  "nombreCaducidad=Nombre;expires" + new Date(2023, 0, 1).toUTCString();
console.log(document.cookie);

const boton = document.querySelector("#btn");

// console.log(boton)

boton.addEventListener("click", () => {
  //   alert("se ha hecho click");
  //   confirm("¿Estás de acuerdo?") && console.log("OK")

  //  OPERADOR TERNARIO
  //   confirm("¿Estás de acuerdo?")
  //   ? console.log("OK")
  //   : console.log("NO!!")

  const respuesta = confirm("¿Seguro?");
  if (respuesta) {
    console.log("Estás de acuerdo");
  } else {
    console.log("NO estás de acuerdo");
  }
});

const botonInfo = document.querySelector("#info");
botonInfo.addEventListener("click", () => {
  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre) {
    console.log("Tu nombre es", nombre);
  } else {
    console.log("No has introducido nada");
  }
});

const lista = [
  {
    nombre: "Cristhian",
    edad: 24,
  },
  {
    nombre: "Juan",
    edad: 23,
  },
  {
    nombre: "Mateo",
    edad: 25,
  },
];

console.table(lista)

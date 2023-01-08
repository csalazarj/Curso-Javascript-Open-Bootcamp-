const datos = {
  nombre: "Cristhian",
  apellido: "Salazar",
  edad: 22,
  altura: 170,
  eresDesarrollador: true,
};

const edad = datos.edad;
console.log(edad);

const listaDatos = [
  datos,
  {
    nombre: "Juan Sebastian",
    apellido: "Delgado",
    edad: 29,
    altura: 160,
    eresDesarrollador: false,
  },
  {
    nombre: "Santiago",
    apellido: "Ricaurte",
    edad: 23,
    altura: 175,
    eresDesarrollador: false,
  },
];

console.log(listaDatos);

const listaOrdenada = listaDatos.sort((a, b) => a.edad - b.edad);
console.log(listaOrdenada)

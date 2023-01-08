// .sort() --> Modifica el array
const array = [2, 5, 9, 1, 0, 4];

console.log(array);

array.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    // a === b
    return 0;
  }
});

console.log(array);

// Ordenar unicamente arrays numéricos
const arrayNumerico = [4, 18, 7, 3, 1, 56];

arrayNumerico.sort((a, b) => b - a);

console.log(arrayNumerico);

// Ordenar Arrays de Objetos
const listaObjetos = [
  { nombre: "Cris", edad: 23 },
  { nombre: "Juan", edad: 13 },
  { nombre: "Camilo", edad: 45 },
  { nombre: "Esteban", edad: 40 },
  { nombre: "Sofia", edad: 23 },
];

// listaObjetos.sort((a, b) => {
//   if (a.edad < b.edad) {
//     return -1;
//   } else if (a.edad > b.edad) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

listaObjetos.sort((a, b) => a.edad - b.edad);
console.log(listaObjetos);

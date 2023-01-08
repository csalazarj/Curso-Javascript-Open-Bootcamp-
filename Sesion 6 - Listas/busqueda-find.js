// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, undefined];

// Forma antigua y poco eficiente
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Forma ES6 (más eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 2, 1, 45, 87, 6];
arrayNums.forEach((valor) => {
  suma += valor;
  console.log(valor);
});
console.log(suma);

// Busqueda dentro de la lista .find()
// Encontrar el elemetro 90
const vari = array.find((valor) => {
  if (valor === 90) {
    return true;
  }
});

console.log(vari);

const listaObjetos = [
  { nombre: "Cris", edad: 23 },
  { nombre: "Juan", edad: 13 },
  { nombre: "Camilo", edad: 45 },
  { nombre: "Sofia", edad: 23 },
];

// const objeto = listaObjetos.find((o) => {
//   if (o.nombre === "Cris") {
//     return true;
//   }
// });
const objeto = listaObjetos.find((o) => o.nombre === "Cris");
console.log(objeto.edad);

const { edad } = listaObjetos.find((o) => o.nombre === "Cris");
console.log(edad);

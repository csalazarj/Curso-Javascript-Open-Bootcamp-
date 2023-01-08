// Métodos más avanzados
// .map() .filter() .reduce()

const array = ["Medellín", "Bogotá", "Cali", "Barranquilla"];
const val = array.forEach((ciudad) => {
  console.log(ciudad);
  return 0;
});

console.log(val);

// .map()
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray);

// .filter()
const listaObjetos = [
  { nombre: "Cris", edad: 23 },
  { nombre: "Juan", edad: 13 },
  { nombre: "Camilo", edad: 45 },
  { nombre: "Esteban", edad: 40 },
  { nombre: "Sofia", edad: 23 },
];
// const mayores = listaObjetos.filter((obj) => {
//   if (obj.edad > 30) {
//     return true;
//   } else {
//     return false;
//   }
// });
const mayores = listaObjetos.filter((obj) => obj.edad > 30);
console.log(mayores);

const nuevaLista = listaObjetos.filter((obj) => obj.nombre !== "Cris");
console.log(nuevaLista);

// .reduce()
const valores = [3, 5, 2, 85, 25, 41];

const suma = valores.reduce((acumulador, cur, i, arrayOriginal) => {
  console.log(cur);
  console.log(i);
  console.log(arrayOriginal);
  console.log(acumulador);
  return acumulador + cur;
});
console.log(suma);

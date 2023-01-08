// Comparar listas internamente
// .every()
const array = [4, 5, 8, 2, 3, 6, 9, 5, 2, 4, 5, -40];
// const result = array.every((valor) => {
//   if (typeof valor === "number") {
//     return true;
//   } else {
//     return false;
//   }
// });

const result = array.every((valor) => valor > 0);

console.log(result);

/// Comparaciòn entre listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2);

const compararArrays = (array_1, array_2) => {
  if (array_1.length !== array_2.length) return false;
  const res = array_1.every((valor, i) => valor === array_2[i]);
  return res;
};

console.log(compararArrays(ar1, ar2));

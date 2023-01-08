// Listas (arrays, arreglos, vectores ...)
let var1 = 45;
let array = [1, "hola", false, { id: 5 }, null, undefined, var1];

console.log(array);

// Acceder a valores a traves de indice
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

// Introducir nuevos valores
// .push() .unshift() => Mutan el valor del array

// push() -> Agrega al final
array.push("final", 45, 100, 23);
console.log(array);

// unshift() -> Agrega al principio
array.unshift("inicio", 87, 99);
console.log(array);

// Eliminar valores
// .pop() .shift() => Mutan el valor del array
const array2 = [1, 3, "hola", false];
// pop() -> Elimina al final
array2.pop();
console.log(array2);

// shift() -> Elimina al principio
array2.shift();
console.log(array2);

// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6];

//Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1);
console.log(array3);

// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola", 3);
console.log(array3);

//Modificar valores .splice(indice, 1, valor)
array3.splice(2,1,'adios');
console.log(array3)

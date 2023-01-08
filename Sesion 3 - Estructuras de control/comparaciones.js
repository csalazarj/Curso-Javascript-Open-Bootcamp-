// Comparaciones

// Igualdad
if (5 == 5) {
  console.log("5 es igual a 5");
} // == Solo compara el valor

if (5 === 5) {
  console.log("5 es muy igual a 5");
} // == Compara el valor y el tipo

let a = 5;
let b = "5";

if (a == b) {
  console.log("a tiene el mismo valor que b");
}

if (a === b) {
  console.log("a y b son del mismo tipo y valor");
}

// Desigualdad

let c = 4;
let d = "4";

if (c != d) {
  console.log("c tiene un a valor diferente a d");
}
if (c !== d) {
  console.log("c tiene un a valor y tipo diferente a d");
}

let max = 10;
let min = 5;

if (max > min) {
  console.log("max es mayor que min");
}

if (max < min) {
  console.log("max es menor que min");
}

if (max >= min) {
  console.log("max es mayor o igual que min");
}

if (max < min) {
  console.log("max es menor o igual que min");
}

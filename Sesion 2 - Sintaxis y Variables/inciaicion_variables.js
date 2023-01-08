var variable; //afecta todo el codigo
// let variableLet; Solo afecta el bloque

// const constante;
const constante = "Hola soy una constante";
var a = 1;
console.log(a);

a = 5;
console.log(a);

let b = 3;
console.log(b);

b = 9;
console.log(b);

let variableLet = "Hola soy una variable VAR";

for (let i = 0; i < 3; i++) {
  let variableLet = "soy la segunda variable LET";
  var v = 0;
}

console.log(v)
console.log(variableLet);

console.log(typeof a);
console.log(typeof variableLet);

// Sesión 05 - Numbers

let int = 5;
console.log(int);

let float = 0.1;
console.log(float);

// Precisión (JS no es exacto por la cantidad de memoria que le asigna a las variables)
let float_2 = 0.2;
console.log(float + float_2);
console.log(float * float_2);

// Redondeo (Truco para obtener el valor real)
console.log(Math.round((float+float_2)*100)/100)
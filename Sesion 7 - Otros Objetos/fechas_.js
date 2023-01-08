// Trabajando con fechas
const fecha = new Date();
console.log(fecha);

// LOS MESES INICIAN EN 0
const fecha2 = new Date(1987, 10, 28, 1, 23, 52, 192);

console.log(fecha2);

const fecha3 = new Date(0); // Milisegundos
const fechaNeg = new Date(-1000000000000); // Milisegundos
const fechaPos = new Date(1000000000000); // Milisegundos
console.log(fecha3);
console.log(fechaNeg);
console.log(fechaPos);

const fecha4 = new Date("October 13, 1979 12:15:14");
console.log(fecha4);

console.log(fecha < fecha2);

const fecha5 = new Date(1987, 10, 28, 1, 23, 52, 192);
console.log(fecha5);

console.log(fecha2 === fecha5); // ERROR - No se pueden comparar fechas así
console.log(fecha2.getTime === fecha5.getTime); // OK

// Obtener el día, mes y año
console.log(fecha2.getDate());
console.log(fecha2.getMonth() + 1);
console.log(fecha2.getUTCFullYear());

// .toLocaleDateString()
console.log(fecha2.toLocaleDateString("en-US"))
console.log(fecha2.toLocaleDateString("en-UK"))

let nombre = "Cristhian";
let apellido = "Salazar";

let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let len = estudiante.length;
console.log(len);

let primera = nombre[0];
console.log(primera);

let ultima = apellido[apellido.length - 1];
console.log("ultima", ultima);

let sin_espacios = estudiante.trim();
console.log(sin_espacios);

let boo = estudiante.includes(nombre);
console.log(boo);

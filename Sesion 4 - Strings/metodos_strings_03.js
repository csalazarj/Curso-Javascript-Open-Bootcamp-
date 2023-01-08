// https://regexr.com
let texto_largo = "la calle, las palmeras, los caminos, el perro, las gafas";

console.log(texto_largo.match("las"));
console.log(texto_largo.match(/las/g));

// Existencia de una palabra dentro de un texto
console.log(texto_largo.includes("camino"));

// Saber si un texto empieza por ...
console.log(texto_largo.startsWith("la"));
console.log(texto_largo.startsWith("la calle"));
console.log(texto_largo.startsWith("La"));

// Saber si un texto termina por ...
console.log(texto_largo.endsWith("gafas"));
console.log(texto_largo.endsWith("las gafas"));
console.log(texto_largo.endsWith("Las gafas"));

// Métodos más Utilizados con Strings

// Obtener la longitud del string
let str = "Hola como estás?";
console.log(str.length);

// Obtener partes del string
// slice() substring() substr()
let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

//Reemplazar parte del contenido de un string
// replace() solo reemplaza la primera ocurrencia por defecto
let cadena = "Hola mi nombre es Cristhian";
console.log(cadena);

console.log(cadena.replace("Cristhian", "Miguel"));

let texto_largo = "la calle, las palmeras, los caminos, el perro, las gafas";
// para reemplazar todas las ocurrencias se debe utilizar regex
console.log(texto_largo.replace(/las/g, "5"));



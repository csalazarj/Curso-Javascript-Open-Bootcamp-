let input = "Escorpio";
let db = "escorpio";

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase());
console.log(db.toLowerCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

// Concatenación de strings
let str_1 = "Hola soy la primera cadena";
let str_2 = "y yo soy la segunda cadena";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}.`);

// Eliminar espacios al principio y al final
let str_3 = "      String con espacios al final.     ";
console.log(str_3.length);
//trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter en cierta posición
let str_4 = "Hola soy el string núemro 4";
console.log(str_4.charAt(5));
console.log(str_4[5]);

// Obtener la posiciòn de una palabra en una cadena
let str_5 =
  "Hola soy Cris y me gusta el rugby. Mi nombre es Cris y mi apellido Salazar";
console.log(str_5.indexOf("Cris"));
console.log(str_5.indexOf("Criss"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Cris"));

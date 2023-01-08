// Sesión 4 - Strings

let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = "Hola soy un texto con comillas simples";

console.log(str_dbl);
console.log(str_sng);

let str_comillas = "cita: \"ser o no ser\"";
let str_comillas_simples = "cita: 'ser o no ser'";
let str_comillas_dobles = 'cita: "ser o no ser"';

// Comillas Invertidas (Backticks)
let str_backticks = `Hola soy un texto con backticks`;
console.log(str_backticks);

let nombre = "Cristhian";
let saludo =  `Hola, ${nombre} bienvenido`;

console.log(saludo);

// Plantillas HTML
let plantilla =
`<html>
    <h1>Página Web de ${nombre}</h1>
</html>`;

console.log(plantilla);

// Introducción de Variables en HTML
let libros = ["El Hobbit", "El señor de los anillos", "La Biblia"]

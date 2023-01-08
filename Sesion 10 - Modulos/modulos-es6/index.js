// import * as moduloMatematicas from './modulos/matematicas.js'
import { suma, eleva, nombre } from "./modulos/matematicas.js";
import getAutor, { libro } from "./modulos/literatura.js";

const sum = suma(4, 12);
console.log("sum", sum);

console.log(getAutor());
console.log(libro);

// Listas, array o arreglo
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log("lista", lista);
console.log("lista2", lista2);
console.log("lista3", lista3);
console.log("lista4", lista4);

// Objetos
const movil = {
  altura: 10,
  anchura: 5,
  marca: "xiaomi",
  isWhite: false,
  contactos: ["juan", "carlos", "pedro"],
  tarjeta: {
    marca: "sandisk",
    almacenamiento: 32,
  },
  "altura-tarjeta": 4,
};

movil.anno = 2019;
movil.marca = "samsung";

console.log("movil.tarjeta.marca :>> ", movil.tarjeta.marca);

// Fechas
// Moment.js (libreria)

const ahora = new Date();
console.log("ahora :>> ", ahora);

const fecha_milis = new Date(10);
console.log("fecha_milis :>> ", fecha_milis);

const fecha_cadena = new Date("march 25 2022");
console.log("fecha_cadena :>> ", fecha_cadena);

const fecha_valores = new Date(2022, 0, 1);
console.log("fecha_valores :>> ", fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth();
const anno = ahora.getFullYear();

console.log(dia, mes, anno);

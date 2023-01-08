// .some()
const array = [1, 2, 53, 5, 4, 68, 52, 1, 445, -2];

const res = array.some((valor) => valor < 0);
console.log(res);

const existe = array.some((valor) => valor === 1);
console.log(existe);

const listaObjetos = [
  { nombre: "Cris", edad: 23 },
  { nombre: "Juan", edad: 13 },
  { nombre: "Camilo", edad: 45 },
  { nombre: "Esteban", edad: 40 },
  { nombre: "Sofia", edad: 23 },
];

const existeCris = listaObjetos.some((persona) => persona.nombre === "Cris");
console.log(existeCris);

// Obtener lista a partir de objeto iterable
const str = "Hola soy Cris";
console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(set);
console.log(ar_set);

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);

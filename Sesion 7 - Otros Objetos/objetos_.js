// Trabajando con objetos
const obj = {
  id: 4,
  nombre: "Juan",
  apellido: "Gonzales",
  isDeveloper: true,
  libros_favoritos: ["El Método", "El Código de la manifestación"],
  "4-juegos": [1, 2, 3, 4],
};

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

// TENER CUIDADO CON EL PASO POR REFERENCIA EN LOS OBJETOS
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Cris";
console.log(obj2.nombre);
console.log(obj.nombre);

let val1 = 4;
let val2 = val1;

console.log(val1);
console.log(val2);

val2 = 5;
console.log(val2);
console.log(val1);

// USAR FACTOR DE PROPAGACIÓN PARA HACER COPIAS SIN AFECTAR EL ORIGINAL
const obj3 = { ...obj };
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Marco";
console.log(obj3.nombre);
console.log(obj.nombre);

// Ordenamiento de listas de objetos según un propiedad
const listaPeliculas = [
  {
    titulo: "Bastardos sin Gloria",
    año: 2009,
  },
  {
    titulo: "Avengers Endgame",
    año: 1997,
  },
  {
    titulo: "Back to the Future",
    año: 2016,
  },
  {
    titulo: "TED",
    año: 2012,
  },
];

console.log(listaPeliculas);

//.sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL
listaPeliculas.sort((a, b) => a.año - b.año);
console.log(listaPeliculas)


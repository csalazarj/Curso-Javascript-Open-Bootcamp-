class Persona {
  // Privated -> # (Sólo se puede acceder desde dentro de la clase)
  #nombre;
  #edad;

  // Protected -> _ (Sólo se puede accerder desde dentro de la clase y desde clases descendientes)
  _isDeveloper = true;

  constructor(nom, edad) {
    this.#nombre = nom;
    this.#edad = edad;
  }

  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);
  }

  obtenNombre() {
    return this.#nombre;
  }

  #obtenEdad() {
    return this.#edad;
  }

  getEdad() {
    return this.#edad;
  }

  setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
}

const persona = new Persona("Cristhian", 40);
//console.log(persona);
//console.log(persona.nombre);
//console.log(persona.edad);
persona.saludo();
console.log(persona.obtenNombre());
// console.log(persona.#obtenEdad());
console.log(persona.isDeveloper);

// Getter -> métodos para obtener atributos/métodos privados o protegidos
const edad = persona.getEdad();
console.log(edad);
// Setter -> métodos para cambiar los atributos privados o protegidos
persona.setEdad(24);
console.log(persona.getEdad());

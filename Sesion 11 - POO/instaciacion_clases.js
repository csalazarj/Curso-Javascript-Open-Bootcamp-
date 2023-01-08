class Persona {
  nombre;
  edad;
  isDeveloper;

  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }

  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);
  }
}

const persona1 = new Persona("Cristhian", 23, true);

console.log("persona 1", persona1);
persona1.saludo();

let num = 60; // Inicializar
console.log(typeof num)

let persona2 = new Persona("Maria", 34, false); // Instanciar
console.log(typeof persona2)
console.log(persona2 instanceof Persona)

// instancerof -> similar a typeof pero para clases

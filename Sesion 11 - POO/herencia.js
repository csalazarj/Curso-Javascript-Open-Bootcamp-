class Persona {
  _nombre;
  _edad;
  constructor(nom, edad) {
    this._nombre = nom;
    this._edad = edad;
  }

  saludo() {
    console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años`);
  }
}

// Herencia
class Desarrollador extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad);
    this.lenguaje = lenguaje;
  }

  saludo() {
    //Override
    super.saludo();
    console.log(`Hola soy desarrollador de ${this.lenguaje}`);
  }
}

const nuevoDev = new Desarrollador("Cristhian", 23, "Javascript");
console.log(nuevoDev);
nuevoDev.saludo();

//Polimorfismo

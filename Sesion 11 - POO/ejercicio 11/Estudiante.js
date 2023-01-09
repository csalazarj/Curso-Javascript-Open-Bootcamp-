class Estudiante {
  _nombre;
  asignaturas = ["Javascript", "HTML", "CSS"];

  constructor(nombre) {
    this._nombre = nombre;
  }

  obtenDatos() {
    return {
      nombre: this._nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const estudiante1 = new Estudiante("Juan");
console.log(estudiante1.obtenDatos());

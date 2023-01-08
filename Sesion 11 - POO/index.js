const persona = {
  nombre: "Cristhian",
  edad: 24,
  isDeveloper: true,
  saludo: function () {
    console.log("Hola");
  },
};

persona.saludo();
// Funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre,
    edad,
    isDeveloper,
    saludo: function () {
      console.log("Hello");
    },
  };
};

const persona2 = creaPersona("juan", 23, true);
const persona3 = creaPersona("carlos", 24, false);

console.log("persona 2", persona2);
console.log("persona 3", persona3);

const persona = {
  nombre: "Juan",
  edad: 34,
};

console.log(persona);

function obtenDobleEdad(edad) {
  return 2 * edad;
}

const dobleEdad = obtenDobleEdad(persona.edad);

console.log(dobleEdad);

function obtenArray(edad) {
  let arrarNums = [];

  for (let i = 0; i < 10; i++) {
    const numero = edad + i;
    console.log(numero);
    //arrarNums.push(numero)
    arrarNums = [...arrarNums, numero];
  }
  return arrarNums;
}

const array = obtenArray(persona.edad);
console.log(array);

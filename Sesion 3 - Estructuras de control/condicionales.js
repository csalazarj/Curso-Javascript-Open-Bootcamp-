// Condicionales if .. else

let saldo = 50;
let efectivo = 20;

if (efectivo > saldo) {
  console.log("No hay saldo suficiente");
} else {
  console.log("puedes retirar");
}

let nota = 4;

if (nota === 5) {
  console.log("Bien hecho");
} else if (nota < 5 && nota >= 3) {
  console.log("pasaste");
} else if (nota < 3) {
  console.log("perdiste");
}

// Switch

let nota2 = 1;

switch (nota) {
  case 5:
    console.log("Bien hecho");
    break;
  case 3:
    console.log("pasaste");
    break;
  case 2:
    console.log("perdiste");
    break;
  default:
    console.log("error");
    break;
}

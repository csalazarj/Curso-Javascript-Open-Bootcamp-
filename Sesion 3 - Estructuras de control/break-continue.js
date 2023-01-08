// break y continue

let lista = [1, 2, 3, 4, 5, 6, 7];

for (var i = 0; i < lista.length; i++) {
  if (lista[i] === 3) {
    continue;
  }

  let j = 70;
  const k = 100;

  console.log(lista[i]);
  if (lista[i] > 5) {
    break;
  }
}

// Ambito de un bucle
console.log(i);
// console.log(j);
// console.log(k);

// Labels

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log(`el número actual es: ${decenas}${unidades}`);
    unidades++;
    if (unidades === 10) {
      unidades = 0;
      break bucleUnidades;
    }
    if (decenas === 2) {
      break bucleDecenas;
    }
  }
  decenas++;
}

console.log("hemos terminado");

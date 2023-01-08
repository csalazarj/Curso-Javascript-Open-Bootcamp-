function True() {
  return true;
}

const promesa = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      console.log("Hola soy una promesa");
    }, 5000);
    resolve();
  } else {
    reject();
  }
});

function* generaIdPares() {
  let id = 0;
  while(true){
      id += 2;
      yield id; // Esperando hasta que se vuelva a llamar
  }
}

const gen = generaIdPares();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

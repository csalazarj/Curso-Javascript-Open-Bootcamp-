function fibonacci(num) {
  let lista = [];

  for (i = 0; i < num; i++) {
    if (lista.length < 2) {
      lista = [...lista, 1];
    } else {
      lista = [...lista, lista[i - 1] + lista[i - 2]];
    }
  }
  return lista;
}

const res = fibonacci(10);
console.log(res);

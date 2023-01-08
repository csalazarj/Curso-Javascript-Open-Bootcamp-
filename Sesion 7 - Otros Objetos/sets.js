// Sets o Conjuntos () : no permite valores repetidos
const array = [1, 2, 3, 4, 5, 1, 2, 3, "hola", { id: 5 }, { id: 5 }];
console.log({ id: 5 } === { id: 5 });
const miSet = new Set(array);
console.log(array);
console.log(miSet);

// .add()
miSet.add(9);
console.log(miSet);
miSet.add(10);
console.log(miSet);

// .delete()
miSet.delete("hola");
console.log(miSet);

// .clear()
// miSet.clear();
// console.log(miSet);

// .has()
console.log(miSet.has(4));

// .size
console.log(miSet.size);

// iterar sobre un set
miSet.forEach((valor) => {
  console.log(valor);
});

const it_set = miSet.values();
console.log(it_set);

const ar_miset  = [...miSet];
console.log(ar_miset)
console.log(ar_miset[0])

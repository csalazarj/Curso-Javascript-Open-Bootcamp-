// Bucles

// For
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i] * 10);
}
// For...of
for (let valor of lista) {
  console.log(valor / 2);
}

// ForEach
lista.forEach((valor) => {
  console.log(valor + 50);
});

let persona = {
  nombre: "Cristhian",
  apellido: "Salazar",
  edad: 23,
  isDeveloper: true,
};

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}

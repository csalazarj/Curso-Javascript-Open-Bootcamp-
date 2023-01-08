const listaCompras = ["arroz", "huevo", "carne", "papa", "pan"];
listaCompras.push("Aceite de girasol");
console.log(listaCompras);

listaCompras.pop("Aceite de girasol");
console.log(listaCompras);

const listaPeliculas = [
  {
    titulo: "Bastardos sin Gloria",
    director: "Quentin Tarantino",
    año: new Date(2009, 9, 30),
  },
  {
    titulo: "Avengers Endgame",
    director: "Russo´s Brothers",
    año: new Date(2019, 4, 25),
  },
  {
    titulo: "Back to the Future",
    director: "Robert Zemeckis",
    año: new Date(1986, 5, 10),
  },
];

const post2010 = listaPeliculas.filter(
  (pelicula) => pelicula.año > new Date(2010, 0, 1)
);
console.log(post2010);

const directores = listaPeliculas.map((pelicula) => pelicula.director);
console.log(directores);
const titulos = listaPeliculas.map((pelicula) => pelicula.titulo);
console.log(titulos);

const union = directores.concat(titulos);
console.log(union);

const union2 = [...directores, ...titulos];
console.log(union2);

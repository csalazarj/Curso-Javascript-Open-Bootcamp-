// Instalar axios para hacer llamadas a servicios externos

import axios from "axios";

axios
  .get('https://pokeapi.co/api/v2/pokemon/dito')
  .then(function (response) {
    console.log("Success")
    console.log(response.data);
  })
  .catch(function (error) {
    console.log("Error")
    console.log(error);
  });

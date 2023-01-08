const miFuncion = (val) => {
    if (typeof val === "number") {
      return 2 * val;
    }
    // return false
    throw new Error("El valor debe ser de tipo número");
  };
  
  // const elDoble = miFuncion("w");
  const numero = '8';
  try {
    // Código que puede fallar
    console.log("está ejecutandose de manera correcta");
    const doble = miFuncion(numero);
    console.log(doble);
  } catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error("Error");
    console.error(`El valor de e es: ${e}`);
  } finally {
    console.log("Esto se ejecuta si o si");
  }


  // InternalError, SyntaxError, TypeError, RangeError, ReferenceError
  
// Esta es la estructura básica de una promesa
const helloPromise = () => {
    return new Promise( (resolve, reject) => {
    // // Promesa se resuelve correctamente
    // resolve();

    // // Promesa es rechazada
    // reject();

    if(true) {
      setTimeout( () => {
        resolve('VALOR RETORNO');
      }, 1000 );
    } else {
      reject('VALOR RETORNO');
    }
  })
};

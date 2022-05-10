// Importamos el módulo FileSystem (que ya viene con Node. Por eso en la ruta basta con poner el nombre del módulo)
const fs = require('fs');
// Del módulo FS, guardamos las promesas en una constante, para no tener que estar todo el rato llamando a "fs.promises". Esto es opcional
const fsPromises = fs.promises;

// Como vamos a hacer una operacion de lectura de un archivo, por defecto este tipo de operaciones las realizamos de forma asíncrona
// Al ser una operación asíncrona, tenemos que realizarla dentro de una función asíncrona
// Para declarar una función asíncrona, añadimos la palabra clave ASYNC antes
async function readTxt() {
  // Como estamos haciendo una operación asíncrona y no sabemos si esta va a fallar o no, tenemos que controlar el posible error que se produzca
  // Para eso usamos un bloque try/catch. En el try ponemos el código que queremos ejecutar. En el catch ponemos el código que se ejecutará en
  // caso de que se produzca algún error
  try {
    // Código que queremos ejecutar


    // Utilizamos el método readFile de las promesas de FS, que nos devuelve una promesa de lectura del archivo que le indicamos
    // Como es una operación asíncrona y queremos que espere a tener ese resultado para seguir ejecutando el resto del código,
    // le ponemos AWAIT delante
    // El resultado de la operación lo almacenamos en la constante fileContent, que después imprimimos con un console.log
    const fileContent = await fsPromises.readFile('./prueba.txt', { encoding: 'utf8' });
    console.log(fileContent);


  } catch (error) {
    // Código que se ejecutará en caso de error


    // Simplemente hacemos un console.log del error que se haya producido
    console.log('Se ha producido un error', error);


  }
}


console.log('Primer mensaje');

// Llamamos a la función asíncrona para que se ejecute su código
readTxt();

console.log('Segundo mensaje');

// Los console.log que ves aquí son para que compruebes el orden en que se ejecutan las instrucciones cuando trabajamos con asincronía. Es 
// una simple demostración. No hace falta que los pongas en tu código
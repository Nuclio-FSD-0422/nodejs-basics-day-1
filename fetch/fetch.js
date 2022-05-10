// Para hacer una llamada o petición a un servidor (o API) utilizamos FETCH
// Fetch devuelve una promesa. Al ser una promesa, tenemos que trabajar con él de forma ASÍNCRONA
// Por eso declaramos una función asíncrona y, dentro, el fetch. En este caso es una ARROW FUNCTION ASÍNCRONA
// pero podría ser perfectamente una función normal y corriente asíncrona
const getRandomUser = async () => {
  // Como fetch es una promesa, añadimos el AWAIT para que, hasta que no se resuelva la promesa, no continue
  // FETCH recibe como argumento la URL a la que queremos hacer la petición
  const userData = await fetch('https://randomuser.me/api/?results=1');

  // Como la API nos devuelve un JSON, tenemos que llamar al método .json() para convertir este en algo manipulable por JS
  // Almacenamos el resultado de esa conversión en la constante user
  const user = await userData.json();

  // Imprimimos el resultado
  console.log('El usuario es', user);
};

console.log('1º Mensaje');

// Llamamos a la función asíncrona para que se ejecute su código
getRandomUser();

console.log('2º Mensaje');


// Los console.log que ves aquí son para que compruebes el orden en que se ejecutan las instrucciones cuando trabajamos con asincronía. Es 
// una simple demostración. No hace falta que los pongas en tu código





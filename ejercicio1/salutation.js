// Declaramos un objeto que contiene un método. Podría contener todos los métodos y propiedades
// que queramos
const salutation = {
  sayHello: function(name) {
    console.log(`Hey ${name}, ¿cómo te va la vida?`);
  }
};

// Exportamos el módulo para que pueda ser utilizado en otros puntos de nuestra app
module.exports = salutation;

// Por cierto, podrías utilizar también sintaxis más moderna para exportar el módulo, con:
// export default salutation;
// Ambos son equivalentes. Hacen lo mismo
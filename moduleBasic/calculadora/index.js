// Declaramos un objeto con métodos y propiedades
const calculadora = {
  restar: function(num1, num2) {
    console.log('El resultado de la resta es:', num1-num2);
  },
  sumar: function(num1, num2) {
    console.log('El resultado de la suma es:', num1+num2);
  },
  marca: 'Casio'
};

// Exportamos el módulo para que pueda ser utilizado en otros puntos de nuestra app
module.exports = calculadora;

// Por cierto, podrías utilizar también sintaxis más moderna para exportar el módulo, con:
// export default calculadora;
// Ambos son equivalentes. Hacen lo mismo
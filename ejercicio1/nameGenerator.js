// Declaramos un objeto que contiene un método. Podría contener todos los métodos y propiedades
// que queramos
const nameGenerator = {
  getName: function() {
    // Declaramos un array con los nombres
    const names = ['Ana', 'Pepito', 'Juan', 'Andrés', 'Otilia'];
    // Guardamos en una constante uno de los elementos del array, que será seleccionado en base a su
    // índice de forma aleatoria
    const selectedName = names[Math.floor(Math.random() * 5)];
    // Retornamos el nombre
    return selectedName;
  }
};

// Exportamos el módulo para que pueda ser utilizado en otros puntos de nuestra app
module.exports = nameGenerator;

// Por cierto, podrías utilizar también sintaxis más moderna para exportar el módulo, con:
// export default nameGenerator;
// Ambos son equivalentes. Hacen lo mismo
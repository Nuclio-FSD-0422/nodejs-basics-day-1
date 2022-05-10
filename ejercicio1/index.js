// Importamos - requerimos los 2 módulos
const nameGenerator = require('./nameGenerator');
const salutation = require('./salutation');

// Hacemos uso de los módulos, llamando a métodos que contienen
const randomName = nameGenerator.getName();
salutation.sayHello(randomName);
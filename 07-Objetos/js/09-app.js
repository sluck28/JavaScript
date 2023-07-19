"use strict";
/**
 * Para que se pueda modificar una propiedad de un objeto 
 * utilizamos seal que a difrencia de freeze solo deja modificar
 * no agrega y elimina
 */
const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 25,
    altura: 1.80,
    peso: 80,
}

Object.seal(persona);

persona.nombre = 'Pedro';

console.log(persona.nombre);

//para saber si un objeto tiene un seal
console.log(Object.isSealed(persona));
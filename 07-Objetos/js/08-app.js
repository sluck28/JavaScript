//como congelar un objeto para que no pueda ser modificado 
/**
 * se usa el modo estricto
 * use strict
 */

"use strict";

const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 25,
    altura: 1.80,
    peso: 80,

}
//para congelar 
Object.freeze(persona);

// persona.nombre = 'Pedro';
// delete persona.apellido;

//para saber si un objeto esta congelado
console.log(Object.isFrozen(persona));
console.log(persona);
//los objetos se pueden modificar aunque esten declarados como const

const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 25,
    altura: 1.80,
    peso: 80,

}

persona.nombre = 'Pedro';
delete persona.apellido;

console.log(persona);
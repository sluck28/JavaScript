//COMO UNIR 2 OBJETOS
const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 25,
    altura: 1.80,
    peso: 80,
}

const departamento = {
    departamento: 'Desarrolador',
}

//para unirlos utilizamos assign y nos lo muestra de la siguiente manera
const resultado= Object.assign(persona,departamento);
console.log(resultado);

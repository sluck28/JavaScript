//OBJECT CONSTRUCTOR

// const persona = {
//     nombre: 'Juan',
//     apellido: 'Pérez',
//     edad: 27,
//     altura: 1.64,
//     peso: 64,
//     mostrarInfo: function(){
//         console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
//     }
// }

function Persona(nombre, apellido, edad, altura, peso){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
}

const persona1 = new Persona('Alfredo','Alvarado',27,64,);
console.log(persona1);



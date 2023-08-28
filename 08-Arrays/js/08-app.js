//DESTRUCTURING DE ARRAYS
const producto ={
    //para declarar una variable de un objeto es con :
    nombre: 'Laptop',
    precio: 100000,
    descuento: 10,
    disponible: true
}

//Destructuring 
const {nombre, precio, descuento, disponible} = producto;

// console.log(nombre);
// console.log(precio);
// console.log(descuento);
// console.log(disponible);

//DESTRUCTURING CON ARREGLOS  

const numeros=[10,20,30,40,50];
//para acceder al 3 numero
//Manera noob
// const [primero, segundo , tercero] =numeros;
//manera correcta separando por comas, asi para acceder al valor deseado
const   [, , tercero, ,quinto]=numeros;

console.log(tercero);
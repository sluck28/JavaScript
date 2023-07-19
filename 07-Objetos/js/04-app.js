//extraer propiedades de un objeto 

const producto ={
    //para declarar una variable de un objeto es con :
    nombre: 'Laptop',
    precio: 100000,
    descuento: 10,
    disponible: true
}

//Destructuring 
const {nombre, precio, descuento, disponible} = producto;

console.log(nombre);
console.log(precio);
console.log(descuento);
console.log(disponible);
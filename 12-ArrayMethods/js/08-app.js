//Spread Operator
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
 
let resultado=[...meses,'Agosto'];
console.log(resultado);

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//spread operator con arreglos de un objeto

const producto={producto:'Disco duro',precio:1000};

const carrito2=[...carrito,producto];
console.log(carrito2);
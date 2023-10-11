//Filter
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//traer todos los productos que cuestan mas de 400
let resultado;

resultado=carrito.filter(producto => producto.precio>=400);
console.log(resultado);

//traer todos los que cuestan menos de 600
resultado=carrito.filter(producto => producto.precio<600);
console.log(resultado);
//traer todos excepto los audifonos

resultado=carrito.filter(producto=>producto.nombre != 'Audifonos');
console.log(resultado);


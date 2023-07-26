//CREAR UN NUEVO ARREGLO CON SPREAD OPERATOR
const carrito=[];
//definir un producto
const producto={
    nombre: 'Laptop',
    precio: 1000,
    stock: 100,
    descuento: 10
}
const producto2={
    nombre: 'Celular',
    precio: 1000,
    stock: 100,
    descuento: 10
}
//forma declarativa

//desde esta forma podemos hacer un spread operator
resultado=[...carrito,producto];
resultado=[...resultado,producto2];



console.table(resultado);
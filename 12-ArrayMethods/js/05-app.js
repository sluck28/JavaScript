//METODOS DEL ARREGLO PARA AGREGAR DATOS AL ARREGLO
const arreglo=['alfredo','juan','alvarado','rojas','erika'];
const nombres=['Karen','Lizbeth','Martinez']
//push agrega al final del arreglo
arreglo.push(nombres);
console.log(arreglo);

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
//push agrega datos al final del arreglo
carrito.push(producto);
//unshift al inicio del arreglo
carrito.unshift(producto2);

console.table(carrito);
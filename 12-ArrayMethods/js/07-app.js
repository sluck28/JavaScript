//PARA BORRAR ELEMENTOS DE UN ARREGLO
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
const producto3={
    nombre: 'Celular',
    precio: 1000,
    stock: 100,
    descuento: 10
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
console.log(carrito);

//ELIMINAMOS OBJETOS O DATOS DE UN ARREGLO POP: al final , SHIFT: al inicio, SPLICE: En medio
carrito.pop();
//final
carrito.shift();
//en medio donde pide como parametros la posicion de donde se va a eliminar el dato
carrito.splice(1,1);


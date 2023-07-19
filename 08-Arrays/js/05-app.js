//AÑADIR AL ARREGLO AL FIN O INICIO 
const meses = ['enero','febrero','marzo','abril','junio','julio','agosto'];
//METODO AGREGAR AL FINAL DEL ARREGLO
meses.push('septiembre','noviembre');
//METODO PARA AGREGAR AL INICIO

const carrito=[];

const producto ={
    nombre: 'celular',
    precio: 10000,
    stock: 100,
    descuento: 10,
}

const producto2 ={
    nombre: 'teclado',
    precio: 10000,
    stock: 100,
    descuento: 10,
}
//lo agrega al final del carrito
carrito.push(producto);
//lo agrega al inicio del carrito
carrito.unshift(producto2);
console.table(carrito);
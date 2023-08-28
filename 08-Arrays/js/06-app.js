const carrito=[];

const producto={
    nombre:'Monitor 32 pulgadas',
    precio:400
}


const producto2={
    nombre:'Monitor 24 pulgadas',
    precio:25
}

//push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);

const producto3={
    nombre:'Control gamer Xbox',
    precio:1000
}
//unshift agrega al inicio de un arreglo
carrito.unshift(producto3);
console.table(carrito);
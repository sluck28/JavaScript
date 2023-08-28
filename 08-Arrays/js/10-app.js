//arreglo con objetos
const carrito=[
    {nombre:'Consola de videojuegos', precio:500},
    {nombre:'Play station 5', precio:10000},
    {nombre:'Xbox x', precio:12000},
    {nombre:'PC gamer', precio:20000}
]

//para recorrer un arreglo es con un for loop

//arrayMethod
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

//usando map en lugar de un foreach

//map crea un arreglo nuevo


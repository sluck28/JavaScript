//FOREACH Y MAP DE UN ARROW FUNCTION

const carrito=[
    {nombre:'Consola de videojuegos', precio:500},
    {nombre:'Play station 5', precio:10000},
    {nombre:'Xbox x', precio:12000},
    {nombre:'PC gamer', precio:20000}
]



//arrayMethod
carrito.forEach(producto=>console.log(`${producto.nombre} - Precio: ${producto.precio}`));


carrito.map(producto=>console.log(`${producto.nombre} - Precio: ${producto.precio}`))

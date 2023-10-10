//For of

const tareas=['barrer','traperar','comer','jugar'];


for(let pendiente of tareas)
{
    console.log(pendiente);
}

const carrito=[
    {nombre:'Consola de videojuegos', precio:500},
    {nombre:'Play station 5', precio:10000},
    {nombre:'Xbox x', precio:12000},
    {nombre:'PC gamer', precio:20000}
];
for(let producto of carrito)
{
    console.log(producto.nombre);
}


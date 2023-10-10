//for each

const tareas=['barrer','traperar','comer','jugar'];

tareas.forEach((tareas,indice)=>{

    console.log(`${indice}: ${tareas}`);
})

//arreglo de objetos

const carrito=[
    {nombre:'Consola de videojuegos', precio:500},
    {nombre:'Play station 5', precio:10000},
    {nombre:'Xbox x', precio:12000},
    {nombre:'PC gamer', precio:20000}
];

carrito.forEach((carrito,index)=>{
    console.log(`${index}: ${carrito.nombre} su precio es: ${carrito.precio}`);
});


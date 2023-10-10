//crear un foor lop que al llegar al indice num 5 se detenga la ejecucion

for (let index = 0; index <=10; index++) {
   if(index === 5) {
    console.log('CINCO');
    continue;
   }else{
    console.log(`Numero : ${index}`);
    }
}

const carrito=[
    {nombre:'Consola de videojuegos', precio:500},
    {nombre:'Play station 5', precio:10000,descuento:true},
    {nombre:'Xbox x', precio:12000},
    {nombre:'PC gamer', precio:20000}
];

for(let i=0;i<carrito.length;i++){
    if(carrito[i].descuento){
        console.log(`El producto: ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(`Producto ${carrito[i].nombre}`)
}
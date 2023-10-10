//For looping 
// for (let i=0;i<=100;i++) {
//     console.log(`Numero : ${i}`);
// }

// //identificar los numeros pares y nones
// for (let index = 1; index <=20; index++) {
//     if(index%2 ===0){
//         console.log(`el numero es par : ${index}`);
//     }else{
//         console.log(`el numero es impar : ${index}`);
//     }
    
// }

const carrito=[
    {nombre:'Consola de videojuegos', precio:500},
    {nombre:'Play station 5', precio:10000},
    {nombre:'Xbox x', precio:12000},
    {nombre:'PC gamer', precio:20000}
];

for(let i=0;i<carrito.length;i++)
{
   console.log(carrito[i].nombre); 
}
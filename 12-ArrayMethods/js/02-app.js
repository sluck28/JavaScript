const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// meses.forEach( (mes,i) =>{
//     console.log(`posicion: ${i} el mes ${mes}`);
// });

//encontrar el indice de abril 
const indice= meses.findIndex(mes=> mes ==='Abril')
console.log(indice);

//comprobar los valores de arreglo de objeto
const indice2 = carrito.findIndex(producto => producto.nombre==='Teclado');
console.log(indice2);

//FUNCIONES QUE RETORNAN VALORES

function sumar(a,b) {
    //siempre se retorna un valor
    return a + b;

}
//para dar un resultado se inicializa una variable para que almacene ese valor
const resultado= sumar(2,3);
console.log(resultado);

//ejemplo mas avanzado con un carrito de compras
let total=0;
function agregarCarrito(precio) {
    return total+=precio;
}

function calcularImpuest(total) {
    return total * 1.15;
}



total=agregarCarrito(500);
total=agregarCarrito(1000);

const totalapagar=calcularImpuest(total);

console.log(total);
console.log(`el total a pagar es de : ${totalapagar}`);


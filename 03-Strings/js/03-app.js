//COMO CONCATENER 2 TEXTOS

const producto= "monitor de 40 pulgadas";
const precio= 4000;
//primera forma
console.log(producto.concat('',precio));
console.log(producto.concat('se puede agregar texto'));

//segunda forma
console.log(producto +"con un precio de :" +precio);

//3ra forma para no poner signo de + 
console.log(`${producto} con un precio de :${precio}`);

//4 forma 
console.log(producto,"tiene precio de ",precio);


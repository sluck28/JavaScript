//AGREGAR MAS PROPIEDADES A UN OBJETO YA DECLARADO


const producto ={
    //para declarar una variable de un objeto es con :
    nombre: 'Laptop',
    precio: 100000,
    descuento: 10,
    disponible: true
}
//de esta manera se agrega mas propiedades a un objeto
//se declara con = por que ya esta fuera del obejeto 
producto.imagen="imagen.jpg"

//PARA ELIMINAR UNA PROPIEDAD
delete producto.disponible;
console.log(producto);

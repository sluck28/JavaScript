//solo permite guardar strings 

//como agregar elementos a local storage
localStorage.setItem('nombre','Juan Alfredo');
//sesion storage
sessionStorage.setItem('sesiones','alfredo');

const productos={
    nombre:'monitor',
    precio:1000
}
//para convertir un objeto y almacenarlo en el local storage
const productoString=JSON.stringify(productos)
localStorage.setItem('producto',productoString);

//para un arreglo

const meses =['enereo','febrero','marzo'];


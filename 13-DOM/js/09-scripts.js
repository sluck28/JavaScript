//como eliminar elementos en el Dom con javascript

//exsiten 2 formas de hacerlo

// const primerEnlace=document.querySelector('a');
// //lo hacemos con remove
// primerEnlace.remove();
// console.log(primerEnlace);


//Eliminar desde el padre
const padre = document.querySelector('.navegacion ');
//children nos permite identificar el elemento a eliminar
console.log(padre.children)

padre.removeChild(padre.children[0]);

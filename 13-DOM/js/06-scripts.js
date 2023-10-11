const encabezado =document.querySelector('.contenido-hero h1').innerHTML='cambiando el texto desde js';

//para traer el texto de una etiqueta de un elemento html
// console.log(encabezado.innerText);//si en el css visibility:hidden no lo encuentra
// console.log(encabezado.textContent);//este si
// console.log(encabezado.innerHTML);//Trae el html

//cmabiando una imagen desde el DOM
const imagen= document.querySelector('.card img');
imagen.src='img/hacer2.jpg';

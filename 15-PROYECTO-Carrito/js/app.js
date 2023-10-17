//varibles
 
const carrito=document.querySelector('#carrito');
const lista_cursos=document.querySelector('#lista-cursos');

const contenedor_carrito=document.querySelector('#lista-carrito tbody')

const btnvaciar_carrito=document.querySelector('#vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    //cuando se agrega el curso presionando agregar
    lista_cursos.addEventListener('click',agregarCurso);
}

//funciones 

function agregarCurso() {
    console.log('agregar curso');
}
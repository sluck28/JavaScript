//agregar listado de cursos
//variables
const carrito=document.querySelector('#carrito'), cursos=document.querySelector('#lista-cursos');

const contenedor_carrito=document.querySelector('#lista-carrito tbody');

const vaciar_carrito=document.querySelector('#vaciar-carrito');

let articulos_carrito=[];


cargarEventListener();

function cargarEventListener() 
{   //cuando se agrega un cursos cuando se pulsa agregar
    cursos.addEventListener('click',agregarCurso); 

    carrito.addEventListener('click',eliminarCurso);

    vaciar_carrito.addEventListener('click',()=>{
        //le decimos que el arreglo es igual a vacio
        articulos_carrito=[];
        limpiarHTML();//eliminamos todo el HTML
    })   
}

//funciones

function agregarCurso(e) 
{   //para que no, nos lleve al href del link a del boton
    e.preventDefault();
    //prevenimos el event bubbing
    if(e.target.classList.contains('agregar-carrito')){
        //nos movemos entre los elementos del HTML para seleccionar los elementos que iran el carrito 
        const cursoSeleccionado=e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

//elimina curso carrito
function eliminarCurso(e) 
{
    if(e.target.classList.contains('borrar-curso')){
        const curso_id=e.target.getAttribute('data-id');
        //elimina del carrito por el data-id

        articulos_carrito=articulos_carrito.filter(cursos=>cursos.id!==curso_id);
        carritoHTML();
        
    }  
}


//leer los  datos del curso 
function leerDatosCurso(curso) 
{
    

    /**
     * creamos un objeto que contendra todos los datos del
     * curso
     */
    const infoCurso={

        //accedemos al elemento de la imagen del curso seleccionado 
        imagen:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        //obtenemos el descuento del curso
        precio:curso.querySelector('.precio span').textContent,
        //acceder al id del curso accediendo al data-id que tiene el id del curso
        id:curso.querySelector('a').getAttribute('data-id'),  
        cantidad:1      

    }


    //revisa si un elemento ya existe en el carrito
    const existe=articulos_carrito.some(curso=>curso.id===infoCurso.id);

   
    if(existe){
        //actualizamos la cantidad de cursos
        const cursos=articulos_carrito.map(curso =>{
            if (curso.id===infoCurso.id) {
                curso.cantidad++;
                return curso;//retorna el objeto actualizado
            }else{
                return curso;//retorna los cursos que no estan duplicados
            }
        })
        ;
        articulos_carrito=[...cursos];
    }else{
        //agregamos al carrito el curso
         //agregar elementos del carrito 
         articulos_carrito=[...articulos_carrito,infoCurso]

    }

   
    console.log(articulos_carrito);

    carritoHTML();
    
}

//mostrando el carrtio del comras en el carrito html

function carritoHTML() 
{   
    
    //Limpiar el HTML
    limpiarHTML();
    //Recorrer el carrito y genera el HTML
    articulos_carrito.forEach( cursos =>{

        const {imagen,titulo,precio,cantidad,id}=cursos;
        const row=document.createElement('tr');
        row.innerHTML=`
         <td>
            <img src="${imagen}" alt="curso" width="100" />
         </td>   
         <td>
            ${titulo}
         </td>
         <td>
            ${precio}
         </td>

        <td>
            ${cantidad}
        </td>

        <td><a href="#" class="borrar-curso" data-id="${cursos.id}"> X </a></td>
        `
        //agregando el contenido al carrito
        contenedor_carrito.appendChild(row);
        contenedor_carrito.er
    }) ;   
}


//Elimina los cursos del tbody
function limpiarHTML() 
{   //Forma lenta
    //para eiliminar el HTML previo
    // contenedor_carrito.innerHTML='';
    while (contenedor_carrito.firstChild) {
        contenedor_carrito.removeChild(contenedor_carrito.firstChild);
    }

}


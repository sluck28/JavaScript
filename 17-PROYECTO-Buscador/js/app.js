//variables
const year=document.querySelector('#year');

const resultado=document.querySelector('#resultado');
const max=new Date().getFullYear();

const min=max-10;

//generar un objeto con la busqueda

const datosBusqueda={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',


}

//eventos
document.addEventListener("DOMContentLoaded", ()=>{
    //muestra auts
    mostrarAuto();
    //llena las opciones de años
    llenarSelect();

})

//fucnion
function mostrarAuto() 
{   
    autos.forEach(auto  => {
        //usamos el restrucring para ahorrar codigo
        const{marca ,modelo ,year, puertas, transmision ,precio ,color}=auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent=`
            ${marca} ${modelo} - ${year} - ${puertas} - ${transmision} - ${color} - $ ${precio}
        `

        //insertamos el HTML
        resultado.appendChild(autoHTML);
    })   
}

function llenarSelect()
{   
    //lo que hace este codigo es ir del 2010 al 2020
    for (let i = max; i >= min; i--) {
        const opcion=document.createElement('option');
        opcion.value=i;
        opcion.textContent=i;
        year.appendChild(opcion);
    }
}
//para que al dar click en el botn por un evento  se muestre el footer
const btn_flotante= document.querySelector('.btn-flotante');

const footer=document.querySelector('.footer');

//eventos addeventlistener
btn_flotante.addEventListener('click',mostrarOcultarFooter)
    

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        btn_flotante.classList.remove('activo');
        this.textContent='Idioma y moneda';

    }else{
        footer.classList.add('activo');
        btn_flotante.classList.add('activo');
        this.textContent='X Cerrar';
    }
}


//eventos con el scrol

window.addEventListener('scroll',()=>{
    const premium=document.querySelector('.premium');

    const ubicacion=premium.getBoundingClientRect();

    console.log(ubicacion);

    if(ubicacion.top<784){
        console.log('el elemento ya esta visibles');
    }else{
        console.log('Aun no esta visible');
    }
})
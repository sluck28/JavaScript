//evento formulario submit
const form = document.querySelector('#formulario');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    console.log(e);
})
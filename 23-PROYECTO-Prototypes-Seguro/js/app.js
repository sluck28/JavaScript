//construtores

function Seguro(marca, year, seguro) {
  this.marca = marca;
  this.year = year;
  this.seguro = seguro;
}

function UI() {}

//llena las opciones de los autos

UI.prototype.llenarOpciones=()=>{
    //obtenemos el año 
    const max= new Date().getFullYear();

        min=max-20;
        const Selectyear=document.querySelector('#year');

        for (let i=max; i>min; i--) {
            let option=document.createElement('option');
            option.value=i;
            option.textContent=i;
            Selectyear.appendChild(option);
        }
}

//instanciamos el UI
const ui= new UI();

document.addEventListener("DOMContentLoaded", ()=>{
    ui.llenarOpciones();
})

eventListeners();

function eventListeners() {
    const formulario=document.querySelector('#cotizador-seguro')
    formulario.addEventListener('submit',cotizarSeguro)
    
}


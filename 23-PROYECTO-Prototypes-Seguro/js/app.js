//construtores

function Seguro(marca, year, seguro) {
  this.marca = marca;
  this.year = year;
  this.seguro = seguro;
}

//realiza la cotizacion de los datos

Seguro.prototype.cotizarSeguro = function(){
    /**
     * 1 americano  1.15
     * 2 asiatico  1.05
     * 3 Europeo 1.35
     */

    let cantidad;
    const base=2000;
    switch (this.marca) {
        case '1':
             cantidad=base * 1.15;
            break;
        case '2':
            cantidad=base * 1.05
         break;

         case '3':
                cantidad=base * 1.35;
         break;
        default:
            break;
    }
    //leer el año
     const diferencia= new Date().getFullYear()- this.year;
    //cada año que la diferencia es mayor el costo va reducirce el costo un 3%
    cantidad -=((diferencia * 3)*cantidad)/100;
    /**
     * Si el seguro es basico se multiplica por un %30 mas
     * completo 50%
    */

    if(this.tipo=== 'basico'){
        cantidad*=1.30;
    }else{
        cantidad*=1.50;
    }
    console.log(cantidad);
    return cantidad;
   

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

//mostrar las alertas en la pantalla
UI.prototype.MostrarMensaje=(mensaje,tipo)=>{
    const div=document.createElement('div');
    if(tipo==='error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto')
    }
    div.classList.add('mensaje','mt-10');

    div.textContent=mensaje;

    //agregamos el HTML al formulario
    const formulario=document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div,document.querySelector('#resultado'))
    setTimeout(() => {
        div.remove();
    }, 3000);

}

//mostrar resultados
UI.prototype.MostrarResultados =(toltal,seguro)=>{
    const div=document.createElement('div');
    div.classList.add('mt-10');
    //se usa innerHTML para agregar html
    div.innerHTML=`
        <p class="header">Tu resumen</p>
        <p class="font-bold">Total: ${toltal}</p>
    `
    const resultado=document.querySelector('#resultado');
    resultado.appendChild(div);

    //mostramos el spinner
    const spinner=document.querySelector('#cargando');
    spinner.style.display='block';
}

//instanciamos el UI
const ui= new UI();

document.addEventListener("DOMContentLoaded", ()=>{
    ui.llenarOpciones();
})

eventListeners();

function eventListeners() {
    const formulario=document.querySelector('#cotizar-seguro');
    //para validar el formulario
    formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    //validamos que nuestros campos tengan algo
    //marca usamos value para que nos lea el value del input
    const marca=document.querySelector('#marca').value;
    //year
    const year=document.querySelector('#year').value;
    //cobertura para leer los valores de input radio
    const tipo=document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca ==="" || year==="" || tipo===""){
        ui.MostrarMensaje('Todos los campos son obligatorios','error');
       
    }else{

        ui.MostrarMensaje('Cotizando...','exito');
    }

    /**
     * instanciamos el seguro
     * utilizamos el prototype para cotizar
    */
   const seguro=new Seguro(marca, year, tipo);
   const toltal=seguro.cotizarSeguro();
   ui.MostrarMensaje(toltal,seguro);
    
  
}
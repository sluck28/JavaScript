//las validaciones siempre se hacen cuando el archivo se tenga cargado al 100%
document.addEventListener("DOMContentLoaded", function () {
  //seleccionar los elementos del formulario
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  //seleccionamos el botn de tipo submit
  const btnSubmit = document.querySelector("#formulario button[type='submit']");

  const btnReset = document.querySelector("#formulario button[type='reset']");

  const  email={
    email:'',
    asunto:'',
    mensaje:''
  }

  console.log(email);
  //registrar un evento a los inputs
  inputEmail.addEventListener("blur", validar);
  //otra forma de mandar a llmar la funcion
  inputAsunto.addEventListener("blur", validar);

  inputMensaje.addEventListener("blur", validar);

  btnReset.addEventListener('click',function(e){
    e.preventDefault();
    //reiniciar el objeto
    email.email='';
    email.asunto='';
    email.mensaje='';
    //reiniciamos nuestro formulario
    formulario.reset();
    //comprobamos el boton
    comprobarEmail();
  })

  function validar(e) {
    //trim para borrar los espacios vacios de un input de una validacion
    if (e.target.value.trim() === "") {
      //mandamos a llamar la funcion que muestra el error
      //accedemos al id del input para que se muestre el nombre del input
      mostrarAlerta(
        `El campo ${e.target.id} esta vacio`,
        e.target.parentElement
      );
      email[e.target.name]='';
      comprobarEmail();
      //detenemos la ejecucion del codigo para que ya no salga la alerta
      return;
    }

    if(e.target.id==='email'&& !validarEmail(e.target.value)){
        mostrarAlerta('EL email no es valido', e.target.parentElement);
        email[e.target.name]='';
        comprobarEmail();
        return;
    }
        
    limpiarAlerta(e.target.parentElement);

    //asignar los valores de nuestro objeto 
    email[e.target.name]=e.target.value.trim().toLowerCase();
    
    //comprobamos el objeto de email
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    //generamos un HTML
    const error = document.createElement("p");
    error.textContent = mensaje;
    //agregamos clases de estilos al parrafo de la alerta
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");
    //inyectamos el error al formulario con la referencia de donde se va a mostrar la alerta
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    //comprobamos la alerta de nuestro formulario para limpiarla si existe
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    //expresion regular para email
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    const resultado=regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    //nos verifica si hay un estring vacio en nuestro arreglo
    if(Object.values(email).includes('')){
      ///si estan vacios qeu se desabilite 
      btnSubmit.classList.add('opacity-50');
      btnSubmit.disabled= true;
      return
    }
      //quitamos las clases del boton de email desabilitado
      btnSubmit.classList.remove('opacity-50');
      btnSubmit.disabled= false;
    
  }
});
